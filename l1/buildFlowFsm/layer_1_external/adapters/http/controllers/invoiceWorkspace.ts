/// <mls fileReference="_102045_/l1/buildFlowFsm/layer_1_external/adapters/http/controllers/invoiceWorkspace.ts" enhancement="_blank"/>
import { ok, fail, AppError, type BffHandler, type BffResponse, type ControllerRoute, type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { queryInvoices, type QueryInvoicesInput } from '/_102045_/l1/buildFlowFsm/layer_2_application/usecases/queryInvoices.js';
import { createInvoice, type CreateInvoiceInput } from '/_102045_/l1/buildFlowFsm/layer_2_application/usecases/createInvoice.js';
import { sendInvoice, type SendInvoiceInput } from '/_102045_/l1/buildFlowFsm/layer_2_application/usecases/sendInvoice.js';

const ALLOWED: readonly string[] = ['buildFlowFsm:billingStaff'];

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

export const invoiceWorkspaceListInvoicesHandler: BffHandler = async ({ request, ctx }) => {
  const denial = enforceActors(ctx, ALLOWED, 'buildFlowFsm.invoiceWorkspace.listInvoices');
  if (denial) return denial;

  const params = (request.params ?? {}) as {
    status?: string;
    projectId?: string;
    clientId?: string;
    page?: number;
    pageSize?: number;
  };

  if (params.projectId !== undefined && !isValidId(params.projectId)) {
    throw new AppError('VALIDATION_ERROR', 'projectId is not a valid identifier', 400, { field: 'projectId' });
  }
  if (params.clientId !== undefined && !isValidId(params.clientId)) {
    throw new AppError('VALIDATION_ERROR', 'clientId is not a valid identifier', 400, { field: 'clientId' });
  }

  const input: QueryInvoicesInput = {
    status: params.status,
    projectId: params.projectId,
    clientId: params.clientId,
    page: params.page,
    pageSize: params.pageSize,
  };

  const result = await queryInvoices(ctx, input);

  const invoices = (result.invoices ?? []).map((row) => ({
    invoiceId: row.invoiceId,
    invoiceNumber: row.invoiceNumber,
    projectId: row.projectId,
    clientId: row.clientId,
    status: row.status,
    totalAmount: row.totalAmount,
    sentAt: row.sentAt,
    createdAt: row.createdAt,
    updatedAt: row.updatedAt,
  }));

  return ok({ invoices, total: result.total, page: input.page ?? 1, pageSize: input.pageSize ?? 20 });
};

export const invoiceWorkspaceCreateInvoiceCmdHandler: BffHandler = async ({ request, ctx }) => {
  const denial = enforceActors(ctx, ALLOWED, 'buildFlowFsm.invoiceWorkspace.createInvoiceCmd');
  if (denial) return denial;

  const params = (request.params ?? {}) as {
    projectId?: string;
    invoiceNumber?: string;
  };

  if (!params.projectId) {
    throw new AppError('VALIDATION_ERROR', 'projectId is required', 400, { field: 'projectId' });
  }
  if (!isValidId(params.projectId)) {
    throw new AppError('VALIDATION_ERROR', 'projectId is not a valid identifier', 400, { field: 'projectId' });
  }
  if (!params.invoiceNumber) {
    throw new AppError('VALIDATION_ERROR', 'invoiceNumber is required', 400, { field: 'invoiceNumber' });
  }

  const input: CreateInvoiceInput = {
    projectId: params.projectId,
    invoiceNumber: params.invoiceNumber,
  };

  const result = await createInvoice(ctx, input);

  return ok({
    invoiceId: result.invoiceId,
    projectId: result.projectId,
    clientId: result.clientId,
    invoiceNumber: result.invoiceNumber,
    status: result.status,
    totalAmount: result.totalAmount,
    createdAt: result.createdAt,
    updatedAt: result.updatedAt,
  });
};

export const invoiceWorkspaceSendInvoiceCmdHandler: BffHandler = async ({ request, ctx }) => {
  const denial = enforceActors(ctx, ALLOWED, 'buildFlowFsm.invoiceWorkspace.sendInvoiceCmd');
  if (denial) return denial;

  const params = (request.params ?? {}) as {
    invoiceId?: string;
  };

  if (!params.invoiceId) {
    throw new AppError('VALIDATION_ERROR', 'invoiceId is required', 400, { field: 'invoiceId' });
  }
  if (!isValidId(params.invoiceId)) {
    throw new AppError('VALIDATION_ERROR', 'invoiceId is not a valid identifier', 400, { field: 'invoiceId' });
  }

  const input: SendInvoiceInput = {
    invoiceId: params.invoiceId,
  };

  const result = await sendInvoice(ctx, input);

  return ok({
    invoiceId: result.invoiceId,
    projectId: result.projectId,
    clientId: result.clientId,
    invoiceNumber: result.invoiceNumber,
    status: result.status,
    totalAmount: result.totalAmount,
    sentAt: result.sentAt,
    updatedAt: result.updatedAt,
  });
};

export const routes: ControllerRoute[] = [
  { key: 'buildFlowFsm.invoiceWorkspace.listInvoices', handler: invoiceWorkspaceListInvoicesHandler },
  { key: 'buildFlowFsm.invoiceWorkspace.createInvoiceCmd', handler: invoiceWorkspaceCreateInvoiceCmdHandler },
  { key: 'buildFlowFsm.invoiceWorkspace.sendInvoiceCmd', handler: invoiceWorkspaceSendInvoiceCmdHandler },
];
