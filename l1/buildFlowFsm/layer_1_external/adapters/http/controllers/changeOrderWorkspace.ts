/// <mls fileReference="_102045_/l1/buildFlowFsm/layer_1_external/adapters/http/controllers/changeOrderWorkspace.ts" enhancement="_blank"/>
import { ok, fail, AppError, type BffHandler, type BffResponse, type ControllerRoute, type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { createChangeOrder, type CreateChangeOrderInput } from '/_102045_/l1/buildFlowFsm/layer_2_application/usecases/createChangeOrder.js';
import { updateChangeOrder, type UpdateChangeOrderInput } from '/_102045_/l1/buildFlowFsm/layer_2_application/usecases/updateChangeOrder.js';
import { updateChangeOrderStatus, type UpdateChangeOrderStatusInput } from '/_102045_/l1/buildFlowFsm/layer_2_application/usecases/updateChangeOrderStatus.js';

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
  return typeof value === 'string' && value.length > 0 && !/\s/.test(value) && /^[a-zA-Z0-9_-]+$/.test(value);
}

export const changeOrderWorkspaceCmdCreateChangeOrderHandler: BffHandler = async ({ request, ctx }) => {
  const denial = enforceActors(ctx, ALLOWED, 'buildFlowFsm.changeOrderWorkspace.cmdCreateChangeOrder');
  if (denial) return denial;

  const params = (request.params ?? {}) as {
    projectId?: string;
    title?: string;
    description?: string;
    impactType?: string;
    costAdjustment?: number;
    scheduleAdjustmentDays?: number;
  };

  if (!params.projectId) {
    throw new AppError('VALIDATION_ERROR', 'projectId is required', 400, { field: 'projectId' });
  }
  if (!isValidId(params.projectId)) {
    throw new AppError('VALIDATION_ERROR', 'projectId is not a valid identifier', 400, { field: 'projectId' });
  }
  if (!params.title || params.title.trim().length === 0) {
    throw new AppError('VALIDATION_ERROR', 'title is required', 400, { field: 'title' });
  }
  if (!params.description || params.description.trim().length === 0) {
    throw new AppError('VALIDATION_ERROR', 'description is required', 400, { field: 'description' });
  }
  if (!params.impactType || params.impactType.trim().length === 0) {
    throw new AppError('VALIDATION_ERROR', 'impactType is required', 400, { field: 'impactType' });
  }
  if (params.costAdjustment === undefined || params.costAdjustment === null || typeof params.costAdjustment !== 'number') {
    throw new AppError('VALIDATION_ERROR', 'costAdjustment is required and must be a number', 400, { field: 'costAdjustment' });
  }

  const input: CreateChangeOrderInput = {
    projectId: params.projectId,
    title: params.title,
    description: params.description,
    impactType: params.impactType as CreateChangeOrderInput['impactType'],
    costAdjustment: params.costAdjustment,
    scheduleAdjustmentDays: params.scheduleAdjustmentDays,
  };

  const result = await createChangeOrder(ctx, input);

  return ok({
    changeOrderId: result.changeOrderId,
    projectId: result.projectId,
    title: result.title,
    description: result.description,
    impactType: result.impactType,
    costAdjustment: result.costAdjustment,
    scheduleAdjustmentDays: result.scheduleAdjustmentDays,
    status: result.status,
    createdAt: result.createdAt,
  });
};

export const changeOrderWorkspaceCmdUpdateChangeOrderHandler: BffHandler = async ({ request, ctx }) => {
  const denial = enforceActors(ctx, ALLOWED, 'buildFlowFsm.changeOrderWorkspace.cmdUpdateChangeOrder');
  if (denial) return denial;

  const params = (request.params ?? {}) as {
    changeOrderId?: string;
    title?: string;
    description?: string;
    impactType?: string;
    costAdjustment?: number;
    scheduleAdjustmentDays?: number;
  };

  if (!params.changeOrderId) {
    throw new AppError('VALIDATION_ERROR', 'changeOrderId is required', 400, { field: 'changeOrderId' });
  }
  if (!isValidId(params.changeOrderId)) {
    throw new AppError('VALIDATION_ERROR', 'changeOrderId is not a valid identifier', 400, { field: 'changeOrderId' });
  }
  if (!params.title || params.title.trim().length === 0) {
    throw new AppError('VALIDATION_ERROR', 'title is required', 400, { field: 'title' });
  }
  if (!params.description || params.description.trim().length === 0) {
    throw new AppError('VALIDATION_ERROR', 'description is required', 400, { field: 'description' });
  }
  if (!params.impactType || params.impactType.trim().length === 0) {
    throw new AppError('VALIDATION_ERROR', 'impactType is required', 400, { field: 'impactType' });
  }
  if (params.costAdjustment === undefined || params.costAdjustment === null || typeof params.costAdjustment !== 'number') {
    throw new AppError('VALIDATION_ERROR', 'costAdjustment is required and must be a number', 400, { field: 'costAdjustment' });
  }

  const input: UpdateChangeOrderInput = {
    changeOrderId: params.changeOrderId,
    title: params.title,
    description: params.description,
    impactType: params.impactType as UpdateChangeOrderInput['impactType'],
    costAdjustment: params.costAdjustment,
    scheduleAdjustmentDays: params.scheduleAdjustmentDays,
  };

  const result = await updateChangeOrder(ctx, input);

  return ok({
    changeOrderId: result.changeOrderId,
    projectId: result.projectId,
    title: result.title,
    description: result.description,
    impactType: result.impactType,
    costAdjustment: result.costAdjustment,
    scheduleAdjustmentDays: result.scheduleAdjustmentDays,
    status: result.status,
    updatedAt: result.updatedAt,
  });
};

export const changeOrderWorkspaceCmdUpdateChangeOrderStatusHandler: BffHandler = async ({ request, ctx }) => {
  const denial = enforceActors(ctx, ALLOWED, 'buildFlowFsm.changeOrderWorkspace.cmdUpdateChangeOrderStatus');
  if (denial) return denial;

  const params = (request.params ?? {}) as {
    changeOrderId?: string;
    status?: string;
    rejectionReason?: string;
  };

  if (!params.changeOrderId) {
    throw new AppError('VALIDATION_ERROR', 'changeOrderId is required', 400, { field: 'changeOrderId' });
  }
  if (!isValidId(params.changeOrderId)) {
    throw new AppError('VALIDATION_ERROR', 'changeOrderId is not a valid identifier', 400, { field: 'changeOrderId' });
  }
  if (!params.status || params.status.trim().length === 0) {
    throw new AppError('VALIDATION_ERROR', 'status is required', 400, { field: 'status' });
  }

  const input: UpdateChangeOrderStatusInput = {
    changeOrderId: params.changeOrderId,
    status: params.status,
    rejectionReason: params.rejectionReason,
  };

  const result = await updateChangeOrderStatus(ctx, input);

  return ok({
    changeOrderId: result.changeOrderId,
    projectId: result.projectId,
    title: result.title,
    status: result.status,
    costAdjustment: result.costAdjustment,
    scheduleAdjustmentDays: result.scheduleAdjustmentDays,
    rejectionReason: result.rejectionReason,
    approvedAt: result.approvedAt,
    rejectedAt: result.rejectedAt,
    updatedAt: result.updatedAt,
  });
};

export const routes: ControllerRoute[] = [
  { key: 'buildFlowFsm.changeOrderWorkspace.cmdCreateChangeOrder', handler: changeOrderWorkspaceCmdCreateChangeOrderHandler },
  { key: 'buildFlowFsm.changeOrderWorkspace.cmdUpdateChangeOrder', handler: changeOrderWorkspaceCmdUpdateChangeOrderHandler },
  { key: 'buildFlowFsm.changeOrderWorkspace.cmdUpdateChangeOrderStatus', handler: changeOrderWorkspaceCmdUpdateChangeOrderStatusHandler },
];
