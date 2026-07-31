/// <mls fileReference="_102045_/l1/buildFlowFsm/layer_2_application/usecases/sendInvoice.ts" enhancement="_blank"/>
import { AppError, type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { resolveRepository } from '/_102034_/l1/server/layer_2_application/repositoryRegistry.js';
import type { IInvoiceRepository } from '/_102045_/l1/buildFlowFsm/layer_2_application/ports/invoiceRepository.js';
import type { Invoice } from '/_102045_/l1/buildFlowFsm/layer_3_domain/entities/invoice.js';
import { canTransitionInvoice } from '/_102045_/l1/buildFlowFsm/layer_3_domain/entities/invoice.js';

export interface SendInvoiceInput {
  invoiceId: string;
}

export interface SendInvoiceOutput {
  invoiceId: string;
  projectId: string;
  clientId: string;
  invoiceNumber: string;
  status: string;
  totalAmount: number;
  sentAt: string;
  updatedAt: string;
}

export async function sendInvoice(ctx: RequestContext, input: SendInvoiceInput): Promise<SendInvoiceOutput> {
  const invoices = resolveRepository<IInvoiceRepository>(ctx, 'Invoice');

  // Step 1: Load the invoice by invoiceId
  let invoice: Invoice;
  try {
    invoice = await invoices.getById(input.invoiceId);
  } catch {
    throw new AppError('VALIDATION_ERROR', 'Invoice not found', 400, { invoiceId: input.invoiceId });
  }

  // Step 2: Validate the invoice status is 'draft'
  if (invoice.status !== 'draft') {
    throw new AppError(
      'VALIDATION_ERROR',
      'Only invoices in draft status can be sent',
      400,
      { ruleId: 'Only invoices in draft status can be sent', currentStatus: invoice.status },
    );
  }

  // Step 3: rule invoiceMustReferenceProjectAndClient
  if (!invoice.projectId || !invoice.clientId) {
    throw new AppError(
      'VALIDATION_ERROR',
      'Invoice must reference both a project and a client before it can be sent',
      400,
      { ruleId: 'invoiceMustReferenceProjectAndClient' },
    );
  }

  // Step 4: rule clientBillingAccess — verify the Client MDM record exists and is active
  let clientAccessible = false;
  try {
    const clientEntity = await ctx.mdm.entity.get({ mdmId: invoice.clientId });
    if (String(clientEntity.details.status) === 'Active') {
      clientAccessible = true;
    }
  } catch {
    // client not found in MDM
  }
  if (!clientAccessible) {
    throw new AppError(
      'VALIDATION_ERROR',
      'Client not found or not accessible for billing',
      400,
      { ruleId: 'clientBillingAccess', clientId: invoice.clientId },
    );
  }

  // Step 5: rule invoiceScopeExternalPayment — this operation only transitions the invoice to 'sent';
  // it does NOT perform any payment capture or external payment gateway call.
  // rule: invoiceScopeExternalPayment

  // Step 6-8: Validate domain transition and update status + timestamps
  if (!canTransitionInvoice(invoice.status, 'sent')) {
    throw new AppError(
      'CONFLICT',
      'Invoice cannot transition to sent',
      409,
      { from: invoice.status, to: 'sent' },
    );
  }

  const now = ctx.clock.nowIso();
  const updatedInvoice: Invoice = {
    ...invoice,
    status: 'sent',
    sentAt: now,
    updatedAt: now,
  };

  // Step 9: Save the updated invoice inside a transaction
  await ctx.data.runInTransaction(async () => {
    await invoices.save(updatedInvoice);
  });

  // Step 10: Return the updated invoice fields
  return {
    invoiceId: updatedInvoice.invoiceId,
    projectId: updatedInvoice.projectId,
    clientId: updatedInvoice.clientId,
    invoiceNumber: updatedInvoice.invoiceNumber,
    status: updatedInvoice.status,
    totalAmount: updatedInvoice.totalAmount,
    sentAt: now,
    updatedAt: updatedInvoice.updatedAt,
  };
}
