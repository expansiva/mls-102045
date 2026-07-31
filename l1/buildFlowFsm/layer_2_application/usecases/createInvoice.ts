/// <mls fileReference="_102045_/l1/buildFlowFsm/layer_2_application/usecases/createInvoice.ts" enhancement="_blank"/>
import { AppError, type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { resolveRepository } from '/_102034_/l1/server/layer_2_application/repositoryRegistry.js';
import type { IInvoiceRepository } from '/_102045_/l1/buildFlowFsm/layer_2_application/ports/invoiceRepository.js';
import type { IProjectRepository } from '/_102045_/l1/buildFlowFsm/layer_2_application/ports/projectRepository.js';
import type { IChangeOrderRepository } from '/_102045_/l1/buildFlowFsm/layer_2_application/ports/changeOrderRepository.js';
import type { IBillingSummaryRepository } from '/_102045_/l1/buildFlowFsm/layer_2_application/ports/billingSummaryRepository.js';
import type { Invoice } from '/_102045_/l1/buildFlowFsm/layer_3_domain/entities/invoice.js';
import {
  invoiceTotalAmountNonNegative,
  invoiceSentAtNullWhenDraft,
} from '/_102045_/l1/buildFlowFsm/layer_3_domain/entities/invoice.js';

export interface CreateInvoiceInput {
  projectId: string;
  invoiceNumber: string;
}

export interface CreateInvoiceOutput {
  invoiceId: string;
  projectId: string;
  clientId: string;
  invoiceNumber: string;
  status: string;
  totalAmount: number;
  createdAt: string;
  updatedAt: string;
}

export async function createInvoice(
  ctx: RequestContext,
  input: CreateInvoiceInput,
): Promise<CreateInvoiceOutput> {
  const projects = resolveRepository<IProjectRepository>(ctx, 'Project');
  const invoices = resolveRepository<IInvoiceRepository>(ctx, 'Invoice');
  const changeOrders = resolveRepository<IChangeOrderRepository>(ctx, 'ChangeOrder');
  const billingSummaries = resolveRepository<IBillingSummaryRepository>(ctx, 'BillingSummary');

  // Step 1: Load the selected project
  const project = await projects.getById(input.projectId).catch(() => {
    throw new AppError(
      'VALIDATION_ERROR',
      `Project not found for projectId ${input.projectId}`,
      400,
      { projectId: input.projectId },
    );
  });

  // Step 2: rule: invoiceMustReferenceProjectAndClient — verify project.clientId is present and non-empty
  if (!project.clientId || project.clientId.trim().length === 0) {
    throw new AppError(
      'VALIDATION_ERROR',
      'invoiceMustReferenceProjectAndClient: project has no associated client',
      400,
      { ruleId: 'invoiceMustReferenceProjectAndClient' },
    );
  }

  // Step 3: Validate the client exists in MDM
  await ctx.mdm.entity.get({ mdmId: project.clientId }).catch(() => {
    throw new AppError(
      'VALIDATION_ERROR',
      `invoiceMustReferenceProjectAndClient: client ${project.clientId} not found in master data`,
      400,
      { ruleId: 'invoiceMustReferenceProjectAndClient', clientId: project.clientId },
    );
  });

  // Step 4: Load the latest BillingSummary for the project; default to 0 if none found
  const summaries = await billingSummaries.list({ projectId: input.projectId });
  let laborCost = 0;
  let materialCost = 0;
  if (summaries.length > 0) {
    const latest = summaries.reduce((prev, curr) =>
      curr.createdAt > prev.createdAt ? curr : prev,
    );
    laborCost = latest.laborCost;
    materialCost = latest.materialCost;
  }

  // Step 5: Load all ChangeOrders for the project
  const orders = await changeOrders.list({ projectId: input.projectId });

  // Step 6: rule: onlyApprovedChangeOrdersAffectCosting — only approved change orders contribute to cost
  // rule: onlyApprovedChangeOrdersAffectCosting
  const approvedChangeOrderCost = orders
    .filter((co) => co.status === 'approved')
    .reduce((sum, co) => sum + co.costAdjustment, 0);

  // Step 7: Calculate totalAmount
  const totalAmount = laborCost + materialCost + approvedChangeOrderCost;

  // Step 8: Generate invoice id and timestamps
  const now = ctx.clock.nowIso();
  const invoiceId = ctx.idGenerator.newId();

  // rule: invoiceScopeExternalPayment — invoice is created with status 'draft' only;
  // no payment capture, no accounting posting, no sentAt field is set.
  const invoice: Invoice = {
    invoiceId,
    projectId: input.projectId,
    clientId: project.clientId,
    invoiceNumber: input.invoiceNumber,
    status: 'draft',
    totalAmount,
    sentAt: null,
    createdAt: now,
    updatedAt: now,
  };

  // Validate domain invariants
  if (!invoiceTotalAmountNonNegative(invoice)) {
    throw new AppError(
      'VALIDATION_ERROR',
      'totalAmount must be non-negative',
      400,
      { totalAmount },
    );
  }
  if (!invoiceSentAtNullWhenDraft(invoice)) {
    throw new AppError(
      'VALIDATION_ERROR',
      'sentAt must be null when status is draft',
      400,
      { sentAt: invoice.sentAt },
    );
  }

  // Step 11: Persist inside a single transaction
  await ctx.data.runInTransaction(async () => {
    await invoices.save(invoice);
  });

  // Step 12: Return output
  return {
    invoiceId: invoice.invoiceId,
    projectId: invoice.projectId,
    clientId: invoice.clientId,
    invoiceNumber: invoice.invoiceNumber,
    status: invoice.status,
    totalAmount: invoice.totalAmount,
    createdAt: invoice.createdAt,
    updatedAt: invoice.updatedAt,
  };
}
