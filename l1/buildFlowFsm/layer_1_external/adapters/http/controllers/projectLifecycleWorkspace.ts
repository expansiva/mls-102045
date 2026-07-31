/// <mls fileReference="_102045_/l1/buildFlowFsm/layer_1_external/adapters/http/controllers/projectLifecycleWorkspace.ts" enhancement="_blank"/>
import { ok, fail, AppError, type BffHandler, type BffResponse, type ControllerRoute, type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { createProject, type CreateProjectInput } from '/_102045_/l1/buildFlowFsm/layer_2_application/usecases/createProject.js';
import { updateProject, type UpdateProjectInput } from '/_102045_/l1/buildFlowFsm/layer_2_application/usecases/updateProject.js';
import { updateProjectStatus, type UpdateProjectStatusInput } from '/_102045_/l1/buildFlowFsm/layer_2_application/usecases/updateProjectStatus.js';

const ALLOWED: readonly string[] = ['buildFlowFsm:projectManager'];

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

function isValidId(value: unknown): value is string {
  return typeof value === 'string' && value.length > 0 && !/\s/.test(value);
}

export const projectLifecycleWorkspaceCreateProjectCmdHandler: BffHandler = async ({ request, ctx }) => {
  const denial = enforceActors(ctx, ALLOWED, 'buildFlowFsm.projectLifecycleWorkspace.createProjectCmd');
  if (denial) return denial;

  const params = (request.params ?? {}) as {
    name?: string;
    clientId?: string;
    siteAddress?: string;
    budget?: number;
    startDate?: string;
    endDate?: string;
  };

  if (!params.name || params.name.trim().length === 0) {
    throw new AppError('VALIDATION_ERROR', 'name is required', 400, { field: 'name' });
  }
  if (!isValidId(params.clientId)) {
    throw new AppError('VALIDATION_ERROR', 'clientId is required and must be a valid identifier', 400, { field: 'clientId' });
  }
  if (!params.siteAddress || params.siteAddress.trim().length === 0) {
    throw new AppError('VALIDATION_ERROR', 'siteAddress is required', 400, { field: 'siteAddress' });
  }
  if (params.budget == null || typeof params.budget !== 'number' || params.budget <= 0) {
    throw new AppError('VALIDATION_ERROR', 'budget is required and must be a positive number', 400, { field: 'budget' });
  }
  if (!params.startDate) {
    throw new AppError('VALIDATION_ERROR', 'startDate is required', 400, { field: 'startDate' });
  }
  if (!params.endDate) {
    throw new AppError('VALIDATION_ERROR', 'endDate is required', 400, { field: 'endDate' });
  }

  const input: CreateProjectInput = {
    name: params.name,
    clientId: params.clientId,
    siteAddress: params.siteAddress,
    budget: params.budget,
    startDate: params.startDate,
    endDate: params.endDate,
  };

  const result = await createProject(ctx, input);

  return ok({
    projectId: result.projectId,
    name: result.name,
    clientId: result.clientId,
    siteAddress: result.siteAddress,
    budget: result.budget,
    startDate: result.startDate,
    endDate: result.endDate,
    status: result.status,
    createdAt: result.createdAt,
    updatedAt: result.updatedAt,
  });
};

export const projectLifecycleWorkspaceUpdateProjectCmdHandler: BffHandler = async ({ request, ctx }) => {
  const denial = enforceActors(ctx, ALLOWED, 'buildFlowFsm.projectLifecycleWorkspace.updateProjectCmd');
  if (denial) return denial;

  const params = (request.params ?? {}) as {
    projectId?: string;
    name?: string;
    clientId?: string;
    siteAddress?: string;
    budget?: number;
    startDate?: string;
    endDate?: string;
  };

  if (!isValidId(params.projectId)) {
    throw new AppError('VALIDATION_ERROR', 'projectId is required and must be a valid identifier', 400, { field: 'projectId' });
  }
  if (!params.name || params.name.trim().length === 0) {
    throw new AppError('VALIDATION_ERROR', 'name is required', 400, { field: 'name' });
  }
  if (!isValidId(params.clientId)) {
    throw new AppError('VALIDATION_ERROR', 'clientId is required and must be a valid identifier', 400, { field: 'clientId' });
  }
  if (!params.siteAddress || params.siteAddress.trim().length === 0) {
    throw new AppError('VALIDATION_ERROR', 'siteAddress is required', 400, { field: 'siteAddress' });
  }
  if (params.budget == null || typeof params.budget !== 'number' || params.budget <= 0) {
    throw new AppError('VALIDATION_ERROR', 'budget is required and must be a positive number', 400, { field: 'budget' });
  }
  if (!params.startDate) {
    throw new AppError('VALIDATION_ERROR', 'startDate is required', 400, { field: 'startDate' });
  }
  if (!params.endDate) {
    throw new AppError('VALIDATION_ERROR', 'endDate is required', 400, { field: 'endDate' });
  }

  const input: UpdateProjectInput = {
    projectId: params.projectId,
    name: params.name,
    clientId: params.clientId,
    siteAddress: params.siteAddress,
    budget: params.budget,
    startDate: params.startDate,
    endDate: params.endDate,
  };

  const result = await updateProject(ctx, input);

  return ok({
    projectId: result.projectId,
    name: result.name,
    clientId: result.clientId,
    siteAddress: result.siteAddress,
    budget: result.budget,
    startDate: result.startDate,
    endDate: result.endDate,
    status: result.status,
    updatedAt: result.updatedAt,
  });
};

export const projectLifecycleWorkspaceUpdateProjectStatusCmdHandler: BffHandler = async ({ request, ctx }) => {
  const denial = enforceActors(ctx, ALLOWED, 'buildFlowFsm.projectLifecycleWorkspace.updateProjectStatusCmd');
  if (denial) return denial;

  const params = (request.params ?? {}) as {
    projectId?: string;
    status?: string;
    holdReason?: string;
    cancellationReason?: string;
  };

  if (!isValidId(params.projectId)) {
    throw new AppError('VALIDATION_ERROR', 'projectId is required and must be a valid identifier', 400, { field: 'projectId' });
  }
  if (!params.status || params.status.trim().length === 0) {
    throw new AppError('VALIDATION_ERROR', 'status is required', 400, { field: 'status' });
  }

  const input: UpdateProjectStatusInput = {
    projectId: params.projectId,
    status: params.status,
    holdReason: params.holdReason,
    cancellationReason: params.cancellationReason,
  };

  const result = await updateProjectStatus(ctx, input);

  return ok({
    projectId: result.projectId,
    name: result.name,
    status: result.status,
    holdReason: result.holdReason ?? null,
    closedAt: result.closedAt ?? null,
    cancelledAt: result.cancelledAt ?? null,
    cancellationReason: result.cancellationReason ?? null,
    updatedAt: result.updatedAt,
  });
};

export const routes: ControllerRoute[] = [
  { key: 'buildFlowFsm.projectLifecycleWorkspace.createProjectCmd', handler: projectLifecycleWorkspaceCreateProjectCmdHandler },
  { key: 'buildFlowFsm.projectLifecycleWorkspace.updateProjectCmd', handler: projectLifecycleWorkspaceUpdateProjectCmdHandler },
  { key: 'buildFlowFsm.projectLifecycleWorkspace.updateProjectStatusCmd', handler: projectLifecycleWorkspaceUpdateProjectStatusCmdHandler },
];
