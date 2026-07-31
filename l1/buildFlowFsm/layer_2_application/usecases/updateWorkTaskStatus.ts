/// <mls fileReference="_102045_/l1/buildFlowFsm/layer_2_application/usecases/updateWorkTaskStatus.ts" enhancement="_blank"/>
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
import type { Project } from '/_102045_/l1/buildFlowFsm/layer_3_domain/entities/project.js';
import type { TimeLog } from '/_102045_/l1/buildFlowFsm/layer_3_domain/entities/timeLog.js';

export interface UpdateWorkTaskStatusInput {
  workTaskId: string;
  status: string;
  cancellationReason?: string;
}

export interface UpdateWorkTaskStatusOutput {
  workTaskId: string;
  projectId: string;
  title: string;
  status: string;
  dueDate: string;
  assignedWorkerId: string;
  completedAt: string | null;
  cancelledAt: string | null;
  cancellationReason: string | null;
  updatedAt: string;
}

const ALLOWED_STATUSES: WorkTaskStatus[] = ['assigned', 'inProgress', 'completed', 'cancelled'];

export async function updateWorkTaskStatus(
  ctx: RequestContext,
  input: UpdateWorkTaskStatusInput,
): Promise<UpdateWorkTaskStatusOutput> {
  const actorId = ctx.sessionContext.actorId ?? '';
  const actorScope = ctx.sessionContext.actorScope ?? [];
  const isFieldWorker = actorScope.includes('fieldWorker');
  const isProjectManager = actorScope.includes('projectManager');

  const workTasks = resolveRepository<IWorkTaskRepository>(ctx, 'WorkTask');
  const projects = resolveRepository<IProjectRepository>(ctx, 'Project');
  const timeLogs = resolveRepository<ITimeLogRepository>(ctx, 'TimeLog');

  // Step 2: Load the WorkTask by id
  const task: WorkTask | null = await workTasks.getById(input.workTaskId);
  if (!task) {
    throw new AppError('NOT_FOUND', 'Work task not found', 404, { workTaskId: input.workTaskId });
  }

  // rule: fieldWorkerTaskVisibility — field workers can only update tasks assigned to them
  if (isFieldWorker && task.assignedWorkerId !== actorId) {
    throw new AppError(
      'VALIDATION_ERROR',
      'Field worker can only update tasks assigned to them',
      403,
      { ruleId: 'fieldWorkerTaskVisibility' },
    );
  }

  // rule: taskStatusUpdateAuthorization — only the assigned worker or a project manager may update status
  if (task.assignedWorkerId !== actorId && !isProjectManager) {
    throw new AppError(
      'VALIDATION_ERROR',
      'Only the assigned field worker or a project manager can update task status',
      403,
      { ruleId: 'taskStatusUpdateAuthorization' },
    );
  }

  // Step 5: Load the parent Project
  const project: Project | null = await projects.getById(task.projectId);
  if (!project) {
    throw new AppError('NOT_FOUND', 'Parent project not found', 404, { projectId: task.projectId });
  }

  // rule: operationsRequireActiveProject — status updates are only allowed when the project is active
  if (String(project.status) !== 'active') {
    throw new AppError(
      'CONFLICT',
      'Status updates are rejected when the parent project is not active',
      409,
      { ruleId: 'operationsRequireActiveProject' },
    );
  }

  // Step 7: Validate the requested status value
  if (!ALLOWED_STATUSES.includes(input.status as WorkTaskStatus)) {
    throw new AppError('VALIDATION_ERROR', 'Invalid status value', 400, { status: input.status });
  }

  const newStatus = input.status as WorkTaskStatus;
  const previousStatus = task.status;

  // Validate domain state transition
  if (!canTransitionWorkTask(previousStatus, newStatus)) {
    throw new AppError(
      'CONFLICT',
      `Cannot transition work task from '${previousStatus}' to '${newStatus}'`,
      409,
      { previousStatus, newStatus },
    );
  }

  // When cancelling, a cancellation reason is required by the domain invariant
  if (newStatus === 'cancelled' && (!input.cancellationReason || input.cancellationReason.trim() === '')) {
    throw new AppError(
      'VALIDATION_ERROR',
      'Cancellation reason is required when cancelling a task',
      400,
      { ruleId: 'workTaskCancelledInvariant' },
    );
  }

  const now = ctx.clock.nowIso();

  const updatedTask: WorkTask = {
    ...task,
    status: newStatus,
    updatedAt: now,
    completedAt: newStatus === 'completed' ? now : null,
    cancelledAt: newStatus === 'cancelled' ? now : null,
    cancellationReason: newStatus === 'cancelled' ? (input.cancellationReason ?? null) : null,
  };

  // Validate domain invariants before persisting
  const invariantErrors = validateWorkTaskInvariants(updatedTask);
  if (invariantErrors.length > 0) {
    throw new AppError('VALIDATION_ERROR', invariantErrors.join(' '), 400, { errors: invariantErrors });
  }

  // Steps 10 & 11: Save the updated task and append a TimeLog audit event in one transaction
  await ctx.data.runInTransaction(async () => {
    await workTasks.save(updatedTask);

    const auditEvent: TimeLog = {
      timeLogId: ctx.idGenerator.newId(),
      workTaskId: updatedTask.workTaskId,
      workerName: actorId,
      logDate: now,
      hoursWorked: 0,
      laborCost: 0,
      status: 'posted',
      voidedAt: null,
      voidReason: null,
      createdAt: now,
    };
    await timeLogs.append(auditEvent);
  });

  // Step 12: Return the updated WorkTask fields
  return {
    workTaskId: updatedTask.workTaskId,
    projectId: updatedTask.projectId,
    title: updatedTask.title,
    status: updatedTask.status,
    dueDate: updatedTask.dueDate,
    assignedWorkerId: updatedTask.assignedWorkerId,
    completedAt: updatedTask.completedAt,
    cancelledAt: updatedTask.cancelledAt,
    cancellationReason: updatedTask.cancellationReason,
    updatedAt: updatedTask.updatedAt,
  };
}
