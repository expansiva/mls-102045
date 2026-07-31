/// <mls fileReference="_102045_/l1/buildFlowFsm/layer_1_external/adapters/http/controllers/myTasksWorkspace.ts" enhancement="_blank"/>
import { ok, fail, AppError, type BffHandler, type BffResponse, type ControllerRoute, type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { queryMyWorkTasks, type QueryMyWorkTasksInput } from '/_102045_/l1/buildFlowFsm/layer_2_application/usecases/queryMyWorkTasks.js';
import { viewWorkTask, type ViewWorkTaskInput } from '/_102045_/l1/buildFlowFsm/layer_2_application/usecases/viewWorkTask.js';

const ALLOWED: readonly string[] = ['buildFlowFsm:fieldWorker', 'buildFlowFsm:projectManager'];

function enforceActors(ctx: RequestContext, allowed: readonly string[], route: string): BffResponse | null {
  if (allowed.length === 0) return null;
  const scope = ctx.sessionContext?.actorScope ?? [];
  if (scope.length === 0) { ctx.log.info('bff.actor.no-scope', { route, allowed }); return null; }
  if (scope.some((s) => allowed.includes(s))) return null;
  return fail(new AppError('FORBIDDEN_ACTOR', 'actor scope not permitted for ' + route, 403, { route }));
}

function isValidId(value: string): boolean {
  return typeof value === 'string' && value.length > 0 && !/\s/.test(value) && /^[A-Za-z0-9_-]+$/.test(value);
}

export const myTasksWorkspaceListMyWorkTasksHandler: BffHandler = async ({ request, ctx }) => {
  const denial = enforceActors(ctx, ALLOWED, 'buildFlowFsm.myTasksWorkspace.listMyWorkTasks');
  if (denial) return denial;

  const params = (request.params ?? {}) as { status?: string; page?: number; pageSize?: number };

  // Only userInput fields are forwarded; assignedWorkerId (actorSession) is resolved inside the usecase.
  const input: QueryMyWorkTasksInput = {
    status: params.status,
    page: params.page,
    pageSize: params.pageSize,
  };

  const result = await queryMyWorkTasks(ctx, input);

  const workTasks = (result.workTasks ?? []).map((row) => ({
    workTaskId: row.workTaskId,
    projectId: row.projectId,
    projectName: row.projectName,
    title: row.title,
    description: row.description,
    status: row.status,
    dueDate: row.dueDate,
    isOverdue: row.isOverdue,
    completedAt: row.completedAt,
  }));

  return ok({ workTasks, total: result.total });
};

export const myTasksWorkspaceGetWorkTaskDetailHandler: BffHandler = async ({ request, ctx }) => {
  const denial = enforceActors(ctx, ALLOWED, 'buildFlowFsm.myTasksWorkspace.getWorkTaskDetail');
  if (denial) return denial;

  const params = (request.params ?? {}) as { workTaskId?: string };

  if (!params.workTaskId) {
    throw new AppError('VALIDATION_ERROR', 'workTaskId is required', 400, { field: 'workTaskId' });
  }
  if (!isValidId(params.workTaskId)) {
    throw new AppError('VALIDATION_ERROR', 'workTaskId is not a valid identifier', 400, { field: 'workTaskId' });
  }

  // Only routeParam field is forwarded; actorId (actorSession) is resolved inside the usecase.
  const input: ViewWorkTaskInput = {
    workTaskId: params.workTaskId,
  };

  const result = await viewWorkTask(ctx, input);

  return ok({
    workTaskId: result.workTaskId,
    projectId: result.projectId,
    projectName: result.projectName,
    title: result.title,
    description: result.description,
    assignedWorkerId: result.assignedWorkerId,
    status: result.status,
    dueDate: result.dueDate,
    isOverdue: result.isOverdue,
    completedAt: result.completedAt,
    cancelledAt: result.cancelledAt,
    cancellationReason: result.cancellationReason,
    createdAt: result.createdAt,
    updatedAt: result.updatedAt,
  });
};

export const routes: ControllerRoute[] = [
  { key: 'buildFlowFsm.myTasksWorkspace.listMyWorkTasks', handler: myTasksWorkspaceListMyWorkTasksHandler },
  { key: 'buildFlowFsm.myTasksWorkspace.getWorkTaskDetail', handler: myTasksWorkspaceGetWorkTaskDetailHandler },
];
