/// <mls fileReference="_102045_/l1/buildFlowFsm/layer_1_external/adapters/http/controllers/taskBoardWorkspace.ts" enhancement="_blank"/>
import { ok, fail, AppError, type BffHandler, type BffResponse, type ControllerRoute, type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { createWorkTask, type CreateWorkTaskInput } from '/_102045_/l1/buildFlowFsm/layer_2_application/usecases/createWorkTask.js';
import { updateWorkTask, type UpdateWorkTaskInput } from '/_102045_/l1/buildFlowFsm/layer_2_application/usecases/updateWorkTask.js';
import { updateWorkTaskStatus, type UpdateWorkTaskStatusInput } from '/_102045_/l1/buildFlowFsm/layer_2_application/usecases/updateWorkTaskStatus.js';

const ALLOWED: readonly string[] = ['buildFlowFsm:projectManager', 'buildFlowFsm:fieldWorker'];

function enforceActors(ctx: RequestContext, allowed: readonly string[], route: string): BffResponse | null {
  if (allowed.length === 0) return null;
  const scope = ctx.sessionContext?.actorScope ?? [];
  if (scope.length === 0) {
    ctx.log.info('bff.actor.no-scope', { route, allowed });
    return null;
  }
  if (scope.some((s) => allowed.includes(s))) return null;
  return fail(new AppError('FORBIDDEN_ACTOR', 'actor scope not permitted for ' + route, 403, { route }));
}

function isValidId(value: string): boolean {
  return typeof value === 'string' && value.length > 0 && !/\s/.test(value);
}

export const taskBoardWorkspaceCmdCreateWorkTaskHandler: BffHandler = async ({ request, ctx }) => {
  const denial = enforceActors(ctx, ALLOWED, 'buildFlowFsm.taskBoardWorkspace.cmdCreateWorkTask');
  if (denial) return denial;

  const params = (request.params ?? {}) as {
    projectId?: string;
    title?: string;
    description?: string;
    assignedWorkerId?: string;
    dueDate?: string;
  };

  if (!params.projectId) {
    throw new AppError('VALIDATION_ERROR', 'projectId is required', 400, { field: 'projectId' });
  }
  if (!isValidId(params.projectId)) {
    throw new AppError('VALIDATION_ERROR', 'projectId is not a valid identifier', 400, { field: 'projectId' });
  }
  if (!params.title) {
    throw new AppError('VALIDATION_ERROR', 'title is required', 400, { field: 'title' });
  }
  if (!params.assignedWorkerId) {
    throw new AppError('VALIDATION_ERROR', 'assignedWorkerId is required', 400, { field: 'assignedWorkerId' });
  }
  if (!isValidId(params.assignedWorkerId)) {
    throw new AppError('VALIDATION_ERROR', 'assignedWorkerId is not a valid identifier', 400, { field: 'assignedWorkerId' });
  }
  if (!params.dueDate) {
    throw new AppError('VALIDATION_ERROR', 'dueDate is required', 400, { field: 'dueDate' });
  }

  const input: CreateWorkTaskInput = {
    projectId: params.projectId,
    title: params.title,
    description: params.description,
    assignedWorkerId: params.assignedWorkerId,
    dueDate: params.dueDate,
  };

  const result = await createWorkTask(ctx, input);

  return ok({
    workTaskId: result.workTaskId,
    projectId: result.projectId,
    title: result.title,
    description: result.description,
    assignedWorkerId: result.assignedWorkerId,
    status: result.status,
    dueDate: result.dueDate,
    createdAt: result.createdAt,
    updatedAt: result.updatedAt,
  });
};

export const taskBoardWorkspaceCmdUpdateWorkTaskHandler: BffHandler = async ({ request, ctx }) => {
  const denial = enforceActors(ctx, ALLOWED, 'buildFlowFsm.taskBoardWorkspace.cmdUpdateWorkTask');
  if (denial) return denial;

  const params = (request.params ?? {}) as {
    workTaskId?: string;
    title?: string;
    description?: string;
    assignedWorkerId?: string;
    dueDate?: string;
    status?: string;
    cancellationReason?: string;
  };

  if (!params.workTaskId) {
    throw new AppError('VALIDATION_ERROR', 'workTaskId is required', 400, { field: 'workTaskId' });
  }
  if (!isValidId(params.workTaskId)) {
    throw new AppError('VALIDATION_ERROR', 'workTaskId is not a valid identifier', 400, { field: 'workTaskId' });
  }
  if (params.assignedWorkerId !== undefined && !isValidId(params.assignedWorkerId)) {
    throw new AppError('VALIDATION_ERROR', 'assignedWorkerId is not a valid identifier', 400, { field: 'assignedWorkerId' });
  }

  const input: UpdateWorkTaskInput = {
    workTaskId: params.workTaskId,
    title: params.title,
    description: params.description,
    assignedWorkerId: params.assignedWorkerId,
    dueDate: params.dueDate,
    status: params.status,
    cancellationReason: params.cancellationReason,
  };

  const result = await updateWorkTask(ctx, input);

  return ok({
    workTaskId: result.workTaskId,
    projectId: result.projectId,
    title: result.title,
    description: result.description,
    assignedWorkerId: result.assignedWorkerId,
    status: result.status,
    dueDate: result.dueDate,
    completedAt: result.completedAt,
    cancelledAt: result.cancelledAt,
    cancellationReason: result.cancellationReason,
    updatedAt: result.updatedAt,
  });
};

export const taskBoardWorkspaceCmdUpdateWorkTaskStatusHandler: BffHandler = async ({ request, ctx }) => {
  const denial = enforceActors(ctx, ALLOWED, 'buildFlowFsm.taskBoardWorkspace.cmdUpdateWorkTaskStatus');
  if (denial) return denial;

  const params = (request.params ?? {}) as {
    workTaskId?: string;
    status?: string;
    cancellationReason?: string;
  };

  if (!params.workTaskId) {
    throw new AppError('VALIDATION_ERROR', 'workTaskId is required', 400, { field: 'workTaskId' });
  }
  if (!isValidId(params.workTaskId)) {
    throw new AppError('VALIDATION_ERROR', 'workTaskId is not a valid identifier', 400, { field: 'workTaskId' });
  }
  if (!params.status) {
    throw new AppError('VALIDATION_ERROR', 'status is required', 400, { field: 'status' });
  }

  const input: UpdateWorkTaskStatusInput = {
    workTaskId: params.workTaskId,
    status: params.status,
    cancellationReason: params.cancellationReason,
  };

  const result = await updateWorkTaskStatus(ctx, input);

  return ok({
    workTaskId: result.workTaskId,
    projectId: result.projectId,
    title: result.title,
    status: result.status,
    dueDate: result.dueDate,
    assignedWorkerId: result.assignedWorkerId,
    completedAt: result.completedAt,
    cancelledAt: result.cancelledAt,
    cancellationReason: result.cancellationReason,
    updatedAt: result.updatedAt,
  });
};

export const routes: ControllerRoute[] = [
  { key: 'buildFlowFsm.taskBoardWorkspace.cmdCreateWorkTask', handler: taskBoardWorkspaceCmdCreateWorkTaskHandler },
  { key: 'buildFlowFsm.taskBoardWorkspace.cmdUpdateWorkTask', handler: taskBoardWorkspaceCmdUpdateWorkTaskHandler },
  { key: 'buildFlowFsm.taskBoardWorkspace.cmdUpdateWorkTaskStatus', handler: taskBoardWorkspaceCmdUpdateWorkTaskStatusHandler },
];
