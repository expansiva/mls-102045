/// <mls fileReference="_102045_/l1/buildFlowFsm/layer_2_application/usecases/viewInvoice.ts" enhancement="_blank"/>
import { AppError, type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { resolveRepository } from '/_102034_/l1/server/layer_2_application/repositoryRegistry.js';
import type { IInvoiceRepository } from '/_102045_/l1/buildFlowFsm/layer_2_application/ports/invoiceRepository.js';
import type { Invoice } from '/_102045_/l1/buildFlowFsm/layer_3_domain/entities/invoice.js';

export interface ViewInvoiceInput {
  invoiceId: string;
}

export interface ViewInvoiceOutput {
  invoiceId: string;
  projectId: string;
  clientId: string;
  invoiceNumber: string;
  status: string;
  totalAmount: number;
  sentAt: string | null;
  createdAt: string;
}

export async function viewInvoice(ctx: RequestContext, input: ViewInvoiceInput): Promise<ViewInvoiceOutput> {
  const invoicePort = resolveRepository<IInvoiceRepository>(ctx, 'Invoice');

  // 1. Resolve the authenticated client id from the actor session — scope filter, never user input.
  const resolvedClientId = ctx.sessionContext.actorSession.actorId;
  if (!resolvedClientId) {
    throw new AppError('VALIDATION_ERROR', 'Authenticated client is required to view an invoice.', 400, {
      ruleId: 'clientBillingAccess',
    });
  }

  // 2–3. Load the Invoice aggregate; getById throws NOT_FOUND if absent.
  let invoice: Invoice;
  try {
    invoice = await invoicePort.getById(input.invoiceId);
  } catch {
    throw new AppError('NOT_FOUND', `Invoice not found: ${input.invoiceId}`, 404, {
      invoiceId: input.invoiceId,
    });
  }

  // 4. rule: clientBillingAccess — the client may only view their own invoices.
  if (invoice.clientId !== resolvedClientId) {
    throw new AppError('FORBIDDEN', 'You do not have access to this invoice.', 403, {
      ruleId: 'clientBillingAccess',
    });
  }

  // 5. rule: invoiceScopeExternalPayment — only sent invoices are visible to external clients.
  if (String(invoice.status) !== 'sent') {
    throw new AppError('FORBIDDEN', 'This invoice is not available for external viewing.', 403, {
      ruleId: 'invoiceScopeExternalPayment',
    });
  }

  // 6. rule: invoiceMustReferenceProjectAndClient — both references must be present.
  if (!invoice.projectId || !invoice.clientId) {
    throw new AppError('VALIDATION_ERROR', 'Invoice is incomplete and cannot be presented.', 400, {
      ruleId: 'invoiceMustReferenceProjectAndClient',
    });
  }

  // 7. Project the invoice fields into the output — read-only, no mutation.
  return {
    invoiceId: invoice.invoiceId,
    projectId: invoice.projectId,
    clientId: invoice.clientId,
    invoiceNumber: invoice.invoiceNumber,
    status: invoice.status,
    totalAmount: invoice.totalAmount,
    sentAt: invoice.sentAt,
    createdAt: invoice.createdAt,
  };
}
