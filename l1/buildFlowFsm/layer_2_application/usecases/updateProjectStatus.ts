/// <mls fileReference="_102045_/l1/buildFlowFsm/layer_2_application/usecases/updateProjectStatus.ts" enhancement="_blank"/>
import { AppError, type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { resolveRepository } from '/_102034_/l1/server/layer_2_application/repositoryRegistry.js';
import type { IProjectRepository } from '/_102045_/l1/buildFlowFsm/layer_2_application/ports/projectRepository.js';
import type { IMaterialUsageRepository } from '/_102045_/l1/buildFlowFsm/layer_2_application/ports/materialUsageRepository.js';
import type { Project, ProjectStatus } from '/_102045_/l1/buildFlowFsm/layer_3_domain/entities/project.js';
import { canTransitionProject } from '/_102045_/l1/buildFlowFsm/layer_3_domain/entities/project.js';
import type { MaterialUsage } from '/_102045_/l1/buildFlowFsm/layer_3_domain/entities/materialUsage.js';

export interface UpdateProjectStatusInput {
  projectId: string;
  status: string;
  holdReason?: string;
  cancellationReason?: string;
}

export interface UpdateProjectStatusOutput {
  projectId: string;
  name: string;
  status: string;
  holdReason?: string;
  closedAt?: string;
  cancelledAt?: string;
  cancellationReason?: string;
  updatedAt: string;
}

const ALLOWED_STATUSES: ProjectStatus[] = ['registered', 'active', 'onHold', 'closed', 'cancelled'];

export async function updateProjectStatus(
  ctx: RequestContext,
  input: UpdateProjectStatusInput,
): Promise<UpdateProjectStatusOutput> {
  const projects = resolveRepository<IProjectRepository>(ctx, 'Project');
  const materialUsages = resolveRepository<IMaterialUsageRepository>(ctx, 'MaterialUsage');
  const now = ctx.clock.nowIso();

  // Step 1: Load the Project aggregate
  const project: Project | null = await projects.getById(input.projectId);
  if (!project) {
    throw new AppError('NOT_FOUND', 'Project not found', 404, { projectId: input.projectId });
  }

  // Step 2: Validate the requested status is one of the allowed enum values
  if (!ALLOWED_STATUSES.includes(input.status as ProjectStatus)) {
    throw new AppError('VALIDATION_ERROR', `Invalid status: ${input.status}`, 400, {
      status: input.status,
      allowed: ALLOWED_STATUSES,
    });
  }
  const newStatus = input.status as ProjectStatus;

  // Check domain transition validity
  if (!canTransitionProject(project.status, newStatus)) {
    throw new AppError(
      'CONFLICT',
      `Invalid status transition from '${project.status}' to '${newStatus}'`,
      409,
      { from: project.status, to: newStatus },
    );
  }

  // Step 3: rule projectActivationRequiresCoreFields
  if (newStatus === 'active') {
    if (!project.name || !project.clientId || !project.siteAddress) {
      throw new AppError(
        'VALIDATION_ERROR',
        'projectActivationRequiresCoreFields: project must have name, clientId, and siteAddress before activation',
        400,
        { ruleId: 'projectActivationRequiresCoreFields' },
      );
    }
  }

  // Step 4: rule jobCostingRequiresBudgetAndSchedule
  if (newStatus === 'active') {
    if (project.budget == null || !project.startDate || !project.endDate) {
      throw new AppError(
        'VALIDATION_ERROR',
        'jobCostingRequiresBudgetAndSchedule: project must have budget, startDate, and endDate before activation',
        400,
        { ruleId: 'jobCostingRequiresBudgetAndSchedule' },
      );
    }
  }

  // Step 5: rule operationsRequireActiveProject
  if (project.status !== 'active' && newStatus !== 'active') {
    throw new AppError(
      'CONFLICT',
      'operationsRequireActiveProject: only an active project allows subsequent field entries, tasks, and change orders',
      409,
      { ruleId: 'operationsRequireActiveProject', currentStatus: project.status, newStatus },
    );
  }

  // Step 6: onHold requires holdReason
  if (newStatus === 'onHold') {
    if (!input.holdReason || input.holdReason.trim().length === 0) {
      throw new AppError('VALIDATION_ERROR', 'holdReason is required when status is onHold', 400, {
        ruleId: 'holdReasonRequired',
      });
    }
    project.holdReason = input.holdReason;
  } else {
    project.holdReason = null;
  }

  // Step 7: cancelled requires cancellationReason
  if (newStatus === 'cancelled') {
    if (!input.cancellationReason || input.cancellationReason.trim().length === 0) {
      throw new AppError('VALIDATION_ERROR', 'cancellationReason is required when status is cancelled', 400, {
        ruleId: 'cancellationReasonRequired',
      });
    }
    project.cancelledAt = now;
    project.cancellationReason = input.cancellationReason;
  } else {
    project.cancelledAt = null;
    project.cancellationReason = null;
  }

  // Step 8: closed sets closedAt
  if (newStatus === 'closed') {
    project.closedAt = now;
  } else {
    project.closedAt = null;
  }

  // Step 9: Set status and updatedAt
  const previousStatus = project.status;
  project.status = newStatus;
  project.updatedAt = now;

  // Step 10 & 11: Save project and append audit event in the same transaction
  await ctx.data.runInTransaction(async () => {
    await projects.save(project);

    const auditEvent: MaterialUsage = {
      materialUsageId: ctx.idGenerator.newId(),
      projectId: project.projectId,
      status: 'posted',
      materialName: `Project status transition: ${previousStatus} -> ${newStatus}`,
      quantity: 0,
      unit: 'unit',
      unitCost: 0,
      costCode: null,
      usageDate: now,
      recordedBy: ctx.sessionContext.actorId ?? null,
      voidedAt: null,
      voidedReason: null,
      createdAt: now,
    };
    await materialUsages.append(auditEvent);
  });

  // Step 12: Return the updated project fields
  return {
    projectId: project.projectId,
    name: project.name,
    status: project.status,
    holdReason: project.holdReason ?? undefined,
    closedAt: project.closedAt ?? undefined,
    cancelledAt: project.cancelledAt ?? undefined,
    cancellationReason: project.cancellationReason ?? undefined,
    updatedAt: project.updatedAt,
  };
}
