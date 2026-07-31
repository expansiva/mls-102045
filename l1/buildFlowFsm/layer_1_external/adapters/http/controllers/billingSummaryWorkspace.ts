/// <mls fileReference="_102045_/l1/buildFlowFsm/layer_1_external/adapters/http/controllers/billingSummaryWorkspace.ts" enhancement="_blank"/>
import { ok, fail, AppError, type BffHandler, type BffResponse, type ControllerRoute, type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { queryBillingSummaries, type QueryBillingSummariesInput } from '/_102045_/l1/buildFlowFsm/layer_2_application/usecases/queryBillingSummaries.js';
import { createBillingSummary, type CreateBillingSummaryInput } from '/_102045_/l1/buildFlowFsm/layer_2_application/usecases/createBillingSummary.js';
import { shareBillingSummary, type ShareBillingSummaryInput } from '/_102045_/l1/buildFlowFsm/layer_2_application/usecases/shareBillingSummary.js';

const ALLOWED: readonly string[] = ['buildFlowFsm:billingStaff'];

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
  return typeof value === 'string' && value.length > 0 && !/\s/.test(value) && /^[A-Za-z0-9_-]+$/.test(value);
}

export const billingSummaryWorkspaceListBillingSummariesHandler: BffHandler = async ({ request, ctx }) => {
  const denial = enforceActors(ctx, ALLOWED, 'buildFlowFsm.billingSummaryWorkspace.listBillingSummaries');
  if (denial) return denial;

  const params = (request.params ?? {}) as {
    projectId?: string;
    status?: string;
    page?: number;
    pageSize?: number;
  };

  if (params.projectId !== undefined && !isValidId(params.projectId)) {
    throw new AppError('VALIDATION_ERROR', 'projectId is not a valid identifier', 400, { field: 'projectId' });
  }

  const input: QueryBillingSummariesInput = {
    projectId: params.projectId,
    status: params.status,
    page: params.page,
    pageSize: params.pageSize,
  };

  const result = await queryBillingSummaries(ctx, input);

  const billingSummaries = (result.billingSummaries ?? []).map((row) => ({
    billingSummaryId: row.billingSummaryId,
    projectId: row.projectId,
    projectName: row.projectName,
    status: row.status,
    periodStart: row.periodStart,
    periodEnd: row.periodEnd,
    laborCost: row.laborCost,
    materialCost: row.materialCost,
    changeOrderCost: row.changeOrderCost,
    totalCost: row.totalCost,
    sharedAt: row.sharedAt ?? '',
    createdAt: row.createdAt,
    updatedAt: row.updatedAt,
  }));

  return ok({
    billingSummaries,
    total: result.total,
    page: input.page ?? 1,
    pageSize: input.pageSize ?? 20,
  });
};

export const billingSummaryWorkspaceCreateBillingSummaryCmdHandler: BffHandler = async ({ request, ctx }) => {
  const denial = enforceActors(ctx, ALLOWED, 'buildFlowFsm.billingSummaryWorkspace.createBillingSummaryCmd');
  if (denial) return denial;

  const params = (request.params ?? {}) as {
    projectId?: string;
    periodStart?: string;
    periodEnd?: string;
  };

  if (!params.projectId) {
    throw new AppError('VALIDATION_ERROR', 'projectId is required', 400, { field: 'projectId' });
  }
  if (!isValidId(params.projectId)) {
    throw new AppError('VALIDATION_ERROR', 'projectId is not a valid identifier', 400, { field: 'projectId' });
  }
  if (!params.periodStart) {
    throw new AppError('VALIDATION_ERROR', 'periodStart is required', 400, { field: 'periodStart' });
  }
  if (!params.periodEnd) {
    throw new AppError('VALIDATION_ERROR', 'periodEnd is required', 400, { field: 'periodEnd' });
  }

  const input: CreateBillingSummaryInput = {
    projectId: params.projectId,
    periodStart: params.periodStart,
    periodEnd: params.periodEnd,
  };

  const result = await createBillingSummary(ctx, input);

  return ok({
    billingSummaryId: result.billingSummaryId,
    projectId: result.projectId,
    status: result.status,
    periodStart: result.periodStart,
    periodEnd: result.periodEnd,
    laborCost: result.laborCost,
    materialCost: result.materialCost,
    changeOrderCost: result.changeOrderCost,
    totalCost: result.totalCost,
    createdAt: result.createdAt,
    updatedAt: result.updatedAt,
  });
};

export const billingSummaryWorkspaceShareBillingSummaryCmdHandler: BffHandler = async ({ request, ctx }) => {
  const denial = enforceActors(ctx, ALLOWED, 'buildFlowFsm.billingSummaryWorkspace.shareBillingSummaryCmd');
  if (denial) return denial;

  const params = (request.params ?? {}) as {
    billingSummaryId?: string;
  };

  if (!params.billingSummaryId) {
    throw new AppError('VALIDATION_ERROR', 'billingSummaryId is required', 400, { field: 'billingSummaryId' });
  }
  if (!isValidId(params.billingSummaryId)) {
    throw new AppError('VALIDATION_ERROR', 'billingSummaryId is not a valid identifier', 400, { field: 'billingSummaryId' });
  }

  const input: ShareBillingSummaryInput = {
    billingSummaryId: params.billingSummaryId,
  };

  const result = await shareBillingSummary(ctx, input);

  return ok({
    billingSummaryId: result.billingSummaryId,
    projectId: result.projectId,
    status: result.status,
    periodStart: result.periodStart,
    periodEnd: result.periodEnd,
    laborCost: result.laborCost,
    materialCost: result.materialCost,
    changeOrderCost: result.changeOrderCost,
    totalCost: result.totalCost,
    sharedAt: result.sharedAt,
    updatedAt: result.updatedAt,
  });
};

export const routes: ControllerRoute[] = [
  { key: 'buildFlowFsm.billingSummaryWorkspace.listBillingSummaries', handler: billingSummaryWorkspaceListBillingSummariesHandler },
  { key: 'buildFlowFsm.billingSummaryWorkspace.createBillingSummaryCmd', handler: billingSummaryWorkspaceCreateBillingSummaryCmdHandler },
  { key: 'buildFlowFsm.billingSummaryWorkspace.shareBillingSummaryCmd', handler: billingSummaryWorkspaceShareBillingSummaryCmdHandler },
];
