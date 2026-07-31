/// <mls fileReference="_102045_/l1/buildFlowFsm/layer_2_application/usecases/updateProject.ts" enhancement="_blank"/>
import { AppError, type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { resolveRepository } from '/_102034_/l1/server/layer_2_application/repositoryRegistry.js';
import type { IProjectRepository } from '/_102045_/l1/buildFlowFsm/layer_2_application/ports/projectRepository.js';
import type { Project } from '/_102045_/l1/buildFlowFsm/layer_3_domain/entities/project.js';

export interface UpdateProjectInput {
  projectId: string;
  name: string;
  clientId: string;
  siteAddress: string;
  budget: number;
  startDate: string;
  endDate: string;
}

export interface UpdateProjectOutput {
  projectId: string;
  name: string;
  clientId: string;
  siteAddress: string;
  budget: number;
  startDate: string;
  endDate: string;
  status: string;
  updatedAt: string;
}

export async function updateProject(ctx: RequestContext, input: UpdateProjectInput): Promise<UpdateProjectOutput> {
  const projects = resolveRepository<IProjectRepository>(ctx, 'Project');

  // Step 1: Load the existing Project aggregate
  let existing: Project;
  try {
    existing = await projects.getById(input.projectId);
  } catch {
    throw new AppError('NOT_FOUND', 'Project not found', 404, { projectId: input.projectId });
  }

  // Step 2: Validate that clientId references an existing Client in MDM
  try {
    await ctx.mdm.entity.get({ mdmId: input.clientId });
  } catch {
    throw new AppError('VALIDATION_ERROR', 'Referenced client does not exist', 400, { clientId: input.clientId });
  }

  // Step 3 — rule: projectActivationRequiresCoreFields
  // If the existing project is active, core fields must be non-empty after the update.
  if (existing.status === 'active') {
    const missing: string[] = [];
    if (!input.name || input.name.trim().length === 0) missing.push('name');
    if (!input.clientId || input.clientId.trim().length === 0) missing.push('clientId');
    if (!input.siteAddress || input.siteAddress.trim().length === 0) missing.push('siteAddress');
    if (missing.length > 0) {
      throw new AppError(
        'VALIDATION_ERROR',
        'projectActivationRequiresCoreFields: core fields are required for an active project.',
        400,
        { ruleId: 'projectActivationRequiresCoreFields', missingFields: missing },
      );
    }
  }

  // Step 4 — rule: jobCostingRequiresBudgetAndSchedule
  // Budget must be positive; startDate and endDate must be present and startDate <= endDate.
  {
    const violations: string[] = [];
    if (input.budget <= 0) violations.push('budget must be a positive number');
    if (!input.startDate) violations.push('startDate is required');
    if (!input.endDate) violations.push('endDate is required');
    if (input.startDate && input.endDate && input.startDate > input.endDate) {
      violations.push('startDate must be on or before endDate');
    }
    if (violations.length > 0) {
      throw new AppError(
        'VALIDATION_ERROR',
        'jobCostingRequiresBudgetAndSchedule: budget and schedule validation failed.',
        400,
        { ruleId: 'jobCostingRequiresBudgetAndSchedule', violations },
      );
    }
  }

  // Step 5: Mutate the loaded Project aggregate
  const now = ctx.clock.nowIso();
  const updated: Project = {
    ...existing,
    name: input.name,
    clientId: input.clientId,
    siteAddress: input.siteAddress,
    budget: input.budget,
    startDate: input.startDate,
    endDate: input.endDate,
    updatedAt: now,
  };

  // Step 6: Save the updated Project inside a transaction
  await ctx.data.runInTransaction(async () => {
    await projects.save(updated);
  });

  // Step 7: MaterialUsage audit event — modeling gap.
  // The function's port list does not include MaterialUsage, so the audit event
  // cannot be appended. Record the intent in trace and skip the actual append
  // until the port is provisioned.
  ctx.log.info('MaterialUsage audit event intent: project update recorded', {
    projectId: updated.projectId,
    event: 'projectUpdated',
    purpose: 'audit',
  });

  // Step 8: Return the updated project fields
  return {
    projectId: updated.projectId,
    name: updated.name,
    clientId: updated.clientId,
    siteAddress: updated.siteAddress,
    budget: updated.budget,
    startDate: updated.startDate,
    endDate: updated.endDate,
    status: updated.status,
    updatedAt: updated.updatedAt,
  };
}
