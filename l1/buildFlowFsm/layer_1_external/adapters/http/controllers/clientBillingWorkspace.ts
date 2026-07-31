/// <mls fileReference="_102045_/l1/buildFlowFsm/layer_1_external/adapters/http/controllers/clientBillingWorkspace.ts" enhancement="_blank"/>
import { ok, fail, AppError, type BffHandler, type BffResponse, type ControllerRoute, type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { viewBillingSummary, type ViewBillingSummaryInput } from '/_102045_/l1/buildFlowFsm/layer_2_application/usecases/viewBillingSummary.js';
import { viewInvoice, type ViewInvoiceInput } from '/_102045_/l1/buildFlowFsm/layer_2_application/usecases/viewInvoice.js';

const ALLOWED: readonly string[] = ['buildFlowFsm:client'];

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
  return value.length > 0 && !/\s/.test(value) && /^[A-Za-z0-9_-]+$/.test(value);
}

export const clientBillingWorkspaceGetBillingSummaryHandler: BffHandler = async ({ request, ctx }) => {
  const denial = enforceActors(ctx, ALLOWED, 'buildFlowFsm.clientBillingWorkspace.getBillingSummary');
  if (denial) return denial;

  const params = (request.params ?? {}) as { billingSummaryId?: string };

  if (!params.billingSummaryId) {
    throw new AppError('VALIDATION_ERROR', 'billingSummaryId is required', 400, { field: 'billingSummaryId' });
  }
  if (!isValidId(params.billingSummaryId)) {
    throw new AppError('VALIDATION_ERROR', 'billingSummaryId is not a valid identifier', 400, { field: 'billingSummaryId' });
  }

  const input: ViewBillingSummaryInput = {
    billingSummaryId: params.billingSummaryId,
  };

  const result = await viewBillingSummary(ctx, input);

  return ok({
    billingSummaryId: result.billingSummaryId,
    projectId: result.projectId,
    projectName: result.projectName,
    status: result.status,
    periodStart: result.periodStart,
    periodEnd: result.periodEnd,
    laborCost: result.laborCost,
    materialCost: result.materialCost,
    changeOrderCost: result.changeOrderCost,
    totalCost: result.totalCost,
    sharedAt: result.sharedAt ?? '',
  });
};

export const clientBillingWorkspaceGetInvoiceHandler: BffHandler = async ({ request, ctx }) => {
  const denial = enforceActors(ctx, ALLOWED, 'buildFlowFsm.clientBillingWorkspace.getInvoice');
  if (denial) return denial;

  const params = (request.params ?? {}) as { invoiceId?: string };

  if (!params.invoiceId) {
    throw new AppError('VALIDATION_ERROR', 'invoiceId is required', 400, { field: 'invoiceId' });
  }
  if (!isValidId(params.invoiceId)) {
    throw new AppError('VALIDATION_ERROR', 'invoiceId is not a valid identifier', 400, { field: 'invoiceId' });
  }

  const input: ViewInvoiceInput = {
    invoiceId: params.invoiceId,
  };

  const result = await viewInvoice(ctx, input);

  return ok({
    invoiceId: result.invoiceId,
    projectId: result.projectId,
    clientId: result.clientId,
    invoiceNumber: result.invoiceNumber,
    status: result.status,
    totalAmount: result.totalAmount,
    sentAt: result.sentAt ?? '',
    createdAt: result.createdAt,
  });
};

export const routes: ControllerRoute[] = [
  { key: 'buildFlowFsm.clientBillingWorkspace.getBillingSummary', handler: clientBillingWorkspaceGetBillingSummaryHandler },
  { key: 'buildFlowFsm.clientBillingWorkspace.getInvoice', handler: clientBillingWorkspaceGetInvoiceHandler },
];
