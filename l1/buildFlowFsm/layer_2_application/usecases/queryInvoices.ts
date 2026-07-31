/// <mls fileReference="_102045_/l1/buildFlowFsm/layer_2_application/usecases/queryInvoices.ts" enhancement="_blank"/>
import { AppError, type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { resolveRepository } from '/_102034_/l1/server/layer_2_application/repositoryRegistry.js';
import type { IInvoiceRepository, InvoiceListFilter } from '/_102045_/l1/buildFlowFsm/layer_2_application/ports/invoiceRepository.js';
import type { IProjectRepository } from '/_102045_/l1/buildFlowFsm/layer_2_application/ports/projectRepository.js';
import type { InvoiceStatus } from '/_102045_/l1/buildFlowFsm/layer_3_domain/entities/invoice.js';

export interface QueryInvoicesInput {
  status?: string;
  projectId?: string;
  clientId?: string;
  page?: number;
  pageSize?: number;
}

export interface QueryInvoiceItem {
  invoiceId: string;
  invoiceNumber: string;
  projectId: string;
  clientId: string;
  status: string;
  totalAmount: number;
  sentAt: string | null;
  createdAt: string;
  updatedAt: string;
}

export interface QueryInvoicesOutput {
  invoices: QueryInvoiceItem[];
  total: number;
}

export async function queryInvoices(ctx: RequestContext, input: QueryInvoicesInput): Promise<QueryInvoicesOutput> {
  // Step 1: pagination defaults and validation
  const page = input.page ?? 1;
  const pageSize = input.pageSize ?? 20;
  if (page < 1) {
    throw new AppError('VALIDATION_ERROR', 'page must be greater than or equal to 1.', 400, { field: 'page' });
  }
  if (pageSize < 1 || pageSize > 100) {
    throw new AppError('VALIDATION_ERROR', 'pageSize must be between 1 and 100.', 400, { field: 'pageSize' });
  }

  // Step 6: Apply rule clientBillingAccess — verify billing access before returning any invoice data
  // rule: clientBillingAccess
  const scope = ctx.sessionContext.actorSession.scope;
  if (scope !== undefined && scope.length > 0 && !scope.includes('billing')) {
    throw new AppError('FORBIDDEN', 'Actor does not have billing access.', 403, { ruleId: 'clientBillingAccess' });
  }

  // Step 2: build filter criteria from optional inputs
  const filter: InvoiceListFilter = {};
  if (input.status) {
    filter.status = input.status as InvoiceStatus;
  }
  if (input.projectId) {
    filter.projectId = input.projectId;
  }
  if (input.clientId) {
    filter.clientId = input.clientId;
  }

  // Step 4: query the Invoice port
  const invoiceRepo = resolveRepository<IInvoiceRepository>(ctx, 'Invoice');
  const allInvoices = await invoiceRepo.list(filter);

  // Step 5: Apply rule invoiceMustReferenceProjectAndClient — exclude invoices missing project or client
  // rule: invoiceMustReferenceProjectAndClient
  const validInvoices = allInvoices.filter((inv) => {
    const hasProject = inv.projectId !== null && inv.projectId !== '';
    const hasClient = inv.clientId !== null && inv.clientId !== '';
    if (!hasProject || !hasClient) {
      ctx.log.error('Data integrity warning: invoice missing project or client reference', {
        invoiceId: inv.invoiceId,
        projectId: inv.projectId,
        clientId: inv.clientId,
      });
      return false;
    }
    return true;
  });

  // Sort by createdAt descending, then invoiceNumber ascending
  validInvoices.sort((a, b) => {
    if (a.createdAt !== b.createdAt) {
      return a.createdAt > b.createdAt ? -1 : 1;
    }
    return a.invoiceNumber < b.invoiceNumber ? -1 : a.invoiceNumber > b.invoiceNumber ? 1 : 0;
  });

  const total = validInvoices.length;
  const offset = (page - 1) * pageSize;
  const paged = validInvoices.slice(offset, offset + pageSize);

  // Step 7: Optionally hydrate Client master data (degraded but functional on failure)
  const clientIds = [...new Set(paged.map((inv) => inv.clientId))];
  if (clientIds.length > 0) {
    try {
      await ctx.mdm.collection.getMany({ mdmIds: clientIds });
    } catch {
      // MDM lookup failed — return invoices without client enrichment
    }
  }

  // Step 8: Optionally verify Project references (soft validation — invoice still returned if project not found)
  const projectIds = [...new Set(paged.map((inv) => inv.projectId))];
  if (projectIds.length > 0) {
    const projectRepo = resolveRepository<IProjectRepository>(ctx, 'Project');
    for (const pid of projectIds) {
      try {
        await projectRepo.getById(pid);
      } catch {
        // Soft validation — invoice is still returned
      }
    }
  }

  // Step 9: Assemble output — billing-document projection only (9 declared fields)
  const result: QueryInvoiceItem[] = paged.map((inv) => ({
    // rule: invoiceScopeExternalPayment — only billing-document fields; no payment, accounting, or settlement fields
    invoiceId: inv.invoiceId,
    invoiceNumber: inv.invoiceNumber,
    projectId: inv.projectId,
    clientId: inv.clientId,
    status: inv.status,
    totalAmount: inv.totalAmount,
    sentAt: inv.sentAt,
    createdAt: inv.createdAt,
    updatedAt: inv.updatedAt,
  }));

  return {
    invoices: result,
    total,
  };
}
