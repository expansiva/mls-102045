/// <mls fileReference="_102045_/l1/buildFlowFsm/layer_1_external/adapters/http/controllers/fieldLoggingWorkspace.ts" enhancement="_blank"/>
import { ok, fail, AppError, type BffHandler, type BffResponse, type ControllerRoute, type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { createTimeLog, type CreateTimeLogInput } from '/_102045_/l1/buildFlowFsm/layer_2_application/usecases/createTimeLog.js';
import { voidTimeLog, type VoidTimeLogInput } from '/_102045_/l1/buildFlowFsm/layer_2_application/usecases/voidTimeLog.js';
import { createMaterialUsage, type CreateMaterialUsageInput } from '/_102045_/l1/buildFlowFsm/layer_2_application/usecases/createMaterialUsage.js';
import { voidMaterialUsage, type VoidMaterialUsageInput } from '/_102045_/l1/buildFlowFsm/layer_2_application/usecases/voidMaterialUsage.js';

const ALLOWED: readonly string[] = ['buildFlowFsm:fieldWorker'];

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

/** Validate the generic shape of a platform-generated identifier (non-empty, no whitespace, id charset). */
function validateId(value: unknown, field: string): asserts value is string {
  if (typeof value !== 'string' || value.length === 0) {
    throw new AppError('VALIDATION_ERROR', `${field} is required and must be a non-empty string`, 400, { field });
  }
  if (/\s/.test(value)) {
    throw new AppError('VALIDATION_ERROR', `${field} must not contain whitespace`, 400, { field });
  }
  if (!/^[A-Za-z0-9_-]+$/.test(value)) {
    throw new AppError('VALIDATION_ERROR', `${field} contains invalid characters`, 400, { field });
  }
}

export const fieldLoggingWorkspaceSubmitTimeLogHandler: BffHandler = async ({ request, ctx }) => {
  const denial = enforceActors(ctx, ALLOWED, 'buildFlowFsm.fieldLoggingWorkspace.submitTimeLog');
  if (denial) return denial;

  const params = (request.params ?? {}) as {
    workTaskId?: string;
    logDate?: string;
    hoursWorked?: number;
  };

  if (!params.workTaskId) {
    throw new AppError('VALIDATION_ERROR', 'workTaskId is required', 400, { field: 'workTaskId' });
  }
  validateId(params.workTaskId, 'workTaskId');

  if (!params.logDate) {
    throw new AppError('VALIDATION_ERROR', 'logDate is required', 400, { field: 'logDate' });
  }

  if (params.hoursWorked === undefined || params.hoursWorked === null) {
    throw new AppError('VALIDATION_ERROR', 'hoursWorked is required', 400, { field: 'hoursWorked' });
  }

  const input: CreateTimeLogInput = {
    workTaskId: params.workTaskId,
    logDate: params.logDate,
    hoursWorked: params.hoursWorked,
  };

  const result = await createTimeLog(ctx, input);

  return ok({
    timeLogId: result.timeLogId,
    workTaskId: result.workTaskId,
    workerName: result.workerName,
    logDate: result.logDate,
    hoursWorked: result.hoursWorked,
    laborCost: result.laborCost,
    status: result.status,
    createdAt: result.createdAt,
  });
};

export const fieldLoggingWorkspaceSubmitVoidTimeLogHandler: BffHandler = async ({ request, ctx }) => {
  const denial = enforceActors(ctx, ALLOWED, 'buildFlowFsm.fieldLoggingWorkspace.submitVoidTimeLog');
  if (denial) return denial;

  const params = (request.params ?? {}) as {
    timeLogId?: string;
    voidReason?: string;
  };

  if (!params.timeLogId) {
    throw new AppError('VALIDATION_ERROR', 'timeLogId is required', 400, { field: 'timeLogId' });
  }
  validateId(params.timeLogId, 'timeLogId');

  if (!params.voidReason) {
    throw new AppError('VALIDATION_ERROR', 'voidReason is required', 400, { field: 'voidReason' });
  }

  const input: VoidTimeLogInput = {
    timeLogId: params.timeLogId,
    voidReason: params.voidReason,
  };

  const result = await voidTimeLog(ctx, input);

  return ok({
    timeLogId: result.timeLogId,
    workTaskId: result.workTaskId,
    workerName: result.workerName,
    logDate: result.logDate,
    hoursWorked: result.hoursWorked,
    laborCost: result.laborCost,
    status: result.status,
    voidedAt: result.voidedAt,
    voidReason: result.voidReason,
  });
};

export const fieldLoggingWorkspaceSubmitMaterialUsageHandler: BffHandler = async ({ request, ctx }) => {
  const denial = enforceActors(ctx, ALLOWED, 'buildFlowFsm.fieldLoggingWorkspace.submitMaterialUsage');
  if (denial) return denial;

  const params = (request.params ?? {}) as {
    projectId?: string;
    materialName?: string;
    quantity?: number;
    unit?: string;
    unitCost?: number;
    costCode?: string;
    usageDate?: string;
  };

  if (!params.projectId) {
    throw new AppError('VALIDATION_ERROR', 'projectId is required', 400, { field: 'projectId' });
  }
  validateId(params.projectId, 'projectId');

  if (!params.materialName) {
    throw new AppError('VALIDATION_ERROR', 'materialName is required', 400, { field: 'materialName' });
  }

  if (params.quantity === undefined || params.quantity === null) {
    throw new AppError('VALIDATION_ERROR', 'quantity is required', 400, { field: 'quantity' });
  }

  if (!params.unit) {
    throw new AppError('VALIDATION_ERROR', 'unit is required', 400, { field: 'unit' });
  }

  if (params.unitCost === undefined || params.unitCost === null) {
    throw new AppError('VALIDATION_ERROR', 'unitCost is required', 400, { field: 'unitCost' });
  }

  if (!params.usageDate) {
    throw new AppError('VALIDATION_ERROR', 'usageDate is required', 400, { field: 'usageDate' });
  }

  const input: CreateMaterialUsageInput = {
    projectId: params.projectId,
    materialName: params.materialName,
    quantity: params.quantity,
    unit: params.unit,
    unitCost: params.unitCost,
    costCode: params.costCode,
    usageDate: params.usageDate,
  };

  const result = await createMaterialUsage(ctx, input);

  return ok({
    materialUsageId: result.materialUsageId,
    projectId: result.projectId,
    status: result.status,
    materialName: result.materialName,
    quantity: result.quantity,
    unit: result.unit,
    unitCost: result.unitCost,
    costCode: result.costCode,
    usageDate: result.usageDate,
    recordedBy: result.recordedBy,
    createdAt: result.createdAt,
  });
};

export const fieldLoggingWorkspaceSubmitVoidMaterialUsageHandler: BffHandler = async ({ request, ctx }) => {
  const denial = enforceActors(ctx, ALLOWED, 'buildFlowFsm.fieldLoggingWorkspace.submitVoidMaterialUsage');
  if (denial) return denial;

  const params = (request.params ?? {}) as {
    materialUsageId?: string;
    voidedReason?: string;
  };

  if (!params.materialUsageId) {
    throw new AppError('VALIDATION_ERROR', 'materialUsageId is required', 400, { field: 'materialUsageId' });
  }
  validateId(params.materialUsageId, 'materialUsageId');

  if (!params.voidedReason) {
    throw new AppError('VALIDATION_ERROR', 'voidedReason is required', 400, { field: 'voidedReason' });
  }

  const input: VoidMaterialUsageInput = {
    materialUsageId: params.materialUsageId,
    voidedReason: params.voidedReason,
  };

  const result = await voidMaterialUsage(ctx, input);

  return ok({
    materialUsageId: result.materialUsageId,
    projectId: result.projectId,
    status: result.status,
    materialName: result.materialName,
    quantity: result.quantity,
    unit: result.unit,
    unitCost: result.unitCost,
    voidedAt: result.voidedAt,
    voidedReason: result.voidedReason,
  });
};

export const routes: ControllerRoute[] = [
  { key: 'buildFlowFsm.fieldLoggingWorkspace.submitTimeLog', handler: fieldLoggingWorkspaceSubmitTimeLogHandler },
  { key: 'buildFlowFsm.fieldLoggingWorkspace.submitVoidTimeLog', handler: fieldLoggingWorkspaceSubmitVoidTimeLogHandler },
  { key: 'buildFlowFsm.fieldLoggingWorkspace.submitMaterialUsage', handler: fieldLoggingWorkspaceSubmitMaterialUsageHandler },
  { key: 'buildFlowFsm.fieldLoggingWorkspace.submitVoidMaterialUsage', handler: fieldLoggingWorkspaceSubmitVoidMaterialUsageHandler },
];
