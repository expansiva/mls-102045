/// <mls fileReference="_102045_/l1/buildFlowFsm/layer_2_application/usecases/updateWorkTask.ts" enhancement="_blank"/>
import { AppError, type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { resolveRepository } from '/_102034_/l1/server/layer_2_application/repositoryRegistry.js';
import type { IWorkTaskRepository } from '/_102045_/l1/buildFlowFsm/layer_2_application/ports/workTaskRepository.js';
import type { IProjectRepository } from '/_102045_/l1/buildFlowFsm/layer_2_application/ports/projectRepository.js';
import type { ITimeLogRepository } from '/_102045_/l1/buildFlowFsm/layer_2_application/ports/timeLogRepository.js';
import type { WorkTask, WorkTaskStatus } from '/_102045_/l1/buildFlowFsm/layer_3_domain/entities/workTask.js';
import {
  canTransitionWorkTask,
  validateWorkTaskInvariants,
} from '/_102045_/l1/buildFlowFsm/layer_3_domain/entities/workTask.js';
import type { TimeLog } from '/_102045_/l1/buildFlowFsm/layer_3_domain/entities/timeLog.js';

export interface UpdateWorkTaskInput {
  workTaskId: string;
  title?: string;
  description?: string;
  assignedWorkerId?: string;
  dueDate?: string;
  status?: string;
  cancellationReason?: string;
}

export interface UpdateWorkTaskOutput {
  workTaskId: string;
  projectId: string;
  title: string;
  description?: string | null;
  assignedWorkerId: string;
  status: string;
  dueDate: string;
  completedAt?: string | null;
  cancelledAt?: string | null;
  cancellationReason?: string | null;
  updatedAt: string;
}

const VALID_WORK_TASK_STATUSES: WorkTaskStatus[] = ['assigned', 'inProgress', 'completed', 'cancelled'];

export async function updateWorkTask(
  ctx: RequestContext,
  input: UpdateWorkTaskInput,
): Promise<UpdateWorkTaskOutput> {
  const workTasks = resolveRepository<IWorkTaskRepository>(ctx, 'WorkTask');
  const projects = resolveRepository<IProjectRepository>(ctx, 'Project');
  const timeLogs = resolveRepository<ITimeLogRepository>(ctx, 'TimeLog');

  // Step 1: Load the existing WorkTask
  const task = await workTasks.getById(input.workTaskId);
  if (!task) {
    throw new AppError('NOT_FOUND', 'WorkTask not found', 404, { workTaskId: input.workTaskId });
  }

  // Step 2: Load the parent Project
  const project = await projects.getById(task.projectId);
  if (!project) {
    throw new AppError('NOT_FOUND', 'Parent project not found', 404, { projectId: task.projectId });
  }

  // Step 3 — rule: operationsRequireActiveProject
  if (String(project.status) !== 'active') {
    throw new AppError(
      'VALIDATION_ERROR',
      `Cannot update a work task whose parent project is not active (current: ${project.status})`,
      400,
      { ruleId: 'operationsRequireActiveProject', projectStatus: project.status },
    );
  }

  // Step 4 — rule: taskStatusUpdateAuthorization
  const actorId = ctx.sessionContext.actorSession.actorId ?? null;
  const actorScope = ctx.sessionContext.actorSession.scope ?? [];
  const statusIsChanging =
    input.status !== undefined && input.status !== task.status;
  if (statusIsChanging) {
    const isProjectManager = actorScope.includes('projectManager');
    const isAssignedWorker = actorId !== null && actorId === task.assignedWorkerId;
    if (!isProjectManager && !isAssignedWorker) {
      throw new AppError(
        'VALIDATION_ERROR',
        'Actor is not authorized to update this work task',
        400,
        { ruleId: 'taskStatusUpdateAuthorization' },
      );
    }
  }

  // Step 5 — rule: singleTaskAssignment
  if (input.assignedWorkerId !== undefined) {
    if (!input.assignedWorkerId || input.assignedWorkerId.trim() === '') {
      throw new AppError(
        'VALIDATION_ERROR',
        'A work task must be assigned to exactly one field worker',
        400,
        { ruleId: 'singleTaskAssignment' },
      );
    }
  }

  // Step 6 — rule: taskDueDateWithinSchedule
  if (input.dueDate !== undefined) {
    if (input.dueDate < project.startDate || input.dueDate > project.endDate) {
      throw new AppError(
        'VALIDATION_ERROR',
        `Due date ${input.dueDate} must fall within the project schedule window (${project.startDate} to ${project.endDate})`,
        400,
        {
          ruleId: 'taskDueDateWithinSchedule',
          dueDate: input.dueDate,
          projectStartDate: project.startDate,
          projectEndDate: project.endDate,
        },
      );
    }
  }

  // Validate status value if provided
  if (input.status !== undefined && !VALID_WORK_TASK_STATUSES.includes(input.status as WorkTaskStatus)) {
    throw new AppError(
      'VALIDATION_ERROR',
      `Invalid status value: ${input.status}`,
      400,
      { field: 'status', value: input.status },
    );
  }

  // Check status transition validity
  if (statusIsChanging) {
    if (!canTransitionWorkTask(task.status, input.status as WorkTaskStatus)) {
      throw new AppError(
        'VALIDATION_ERROR',
        `Invalid status transition from ${task.status} to ${input.status}`,
        400,
        { from: task.status, to: input.status },
      );
    }
  }

  const now = ctx.clock.nowIso();

  // Step 7: Apply provided field updates
  const updatedTask: WorkTask = {
    ...task,
    title: input.title !== undefined ? input.title : task.title,
    description: input.description !== undefined ? input.description : task.description,
    assignedWorkerId: input.assignedWorkerId !== undefined ? input.assignedWorkerId : task.assignedWorkerId,
    dueDate: input.dueDate !== undefined ? input.dueDate : task.dueDate,
    status: input.status !== undefined ? (input.status as WorkTaskStatus) : task.status,
    cancellationReason:
      input.cancellationReason !== undefined ? input.cancellationReason : task.cancellationReason,
    updatedAt: now,
  };

  // Step 8: Handle completed / cancelled status transitions
  if (input.status !== undefined) {
    const newStatus = input.status as WorkTaskStatus;
    if (newStatus === 'completed') {
      updatedTask.completedAt = now;
    }
    if (newStatus === 'cancelled') {
      updatedTask.cancelledAt = now;
      if (!input.cancellationReason || input.cancellationReason.trim() === '') {
        throw new AppError(
          'VALIDATION_ERROR',
          'cancellationReason is required when cancelling a work task',
          400,
          { field: 'cancellationReason' },
        );
      }
    }
  }

  // Validate domain invariants on the updated task
  const invariantErrors = validateWorkTaskInvariants(updatedTask);
  if (invariantErrors.length > 0) {
    throw new AppError(
      'VALIDATION_ERROR',
      invariantErrors.join('; '),
      400,
      { errors: invariantErrors },
    );
  }

  // Track changed fields for audit (modeling gap: TimeLog entity has no action/details fields)
  const changedFields: string[] = [];
  if (input.title !== undefined && input.title !== task.title) changedFields.push('title');
  if (input.description !== undefined && input.description !== task.description) changedFields.push('description');
  if (input.assignedWorkerId !== undefined && input.assignedWorkerId !== task.assignedWorkerId) changedFields.push('assignedWorkerId');
  if (input.dueDate !== undefined && input.dueDate !== task.dueDate) changedFields.push('dueDate');
  if (input.status !== undefined && input.status !== task.status) changedFields.push('status');
  if (input.cancellationReason !== undefined && input.cancellationReason !== task.cancellationReason) changedFields.push('cancellationReason');

  // Steps 10 & 11: Save updated WorkTask and append TimeLog audit event inside one transaction
  await ctx.data.runInTransaction(async () => {
    await workTasks.save(updatedTask);

    const auditLog: TimeLog = {
      timeLogId: ctx.idGenerator.newId(),
      workTaskId: updatedTask.workTaskId,
      workerName: actorId ?? 'system',
      logDate: now,
      hoursWorked: 0,
      laborCost: 0,
      status: 'posted',
      voidedAt: null,
      voidReason: null,
      createdAt: now,
    };
    await timeLogs.append(auditLog);
  });

  // Step 12: Return the updated WorkTask fields
  return {
    workTaskId: updatedTask.workTaskId,
    projectId: updatedTask.projectId,
    title: updatedTask.title,
    description: updatedTask.description,
    assignedWorkerId: updatedTask.assignedWorkerId,
    status: updatedTask.status,
    dueDate: updatedTask.dueDate,
    completedAt: updatedTask.completedAt,
    cancelledAt: updatedTask.cancelledAt,
    cancellationReason: updatedTask.cancellationReason,
    updatedAt: updatedTask.updatedAt,
  };
}
