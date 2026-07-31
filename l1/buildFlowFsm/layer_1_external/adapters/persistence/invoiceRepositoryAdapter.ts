/// <mls fileReference="_102045_/l1/buildFlowFsm/layer_1_external/adapters/persistence/invoiceRepositoryAdapter.ts" enhancement="_blank"/>
import { AppError, type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import type { IInvoiceRepository, InvoiceListFilter } from '/_102045_/l1/buildFlowFsm/layer_2_application/ports/invoiceRepository.js';
import type { Invoice, InvoiceStatus } from '/_102045_/l1/buildFlowFsm/layer_3_domain/entities/invoice.js';

interface InvoiceRow {
  invoice_id: string;
  project_id: string;
  client_id: string;
  status: string;
  created_at: string;
  details: string | null;
}

interface InvoiceDetails {
  invoiceNumber: string;
  totalAmount: number;
  sentAt: string | null;
  updatedAt: string;
}

function toRow(invoice: Invoice): InvoiceRow {
  const details: InvoiceDetails = {
    invoiceNumber: invoice.invoiceNumber,
    totalAmount: invoice.totalAmount,
    sentAt: invoice.sentAt,
    updatedAt: invoice.updatedAt,
  };
  return {
    invoice_id: invoice.invoiceId,
    project_id: invoice.projectId,
    client_id: invoice.clientId,
    status: invoice.status,
    created_at: invoice.createdAt,
    details: JSON.stringify(details),
  };
}

function detailsDefaults(row: InvoiceRow): InvoiceDetails {
  return {
    invoiceNumber: '',
    totalAmount: 0,
    sentAt: null,
    updatedAt: row.created_at,
  };
}

function parseDetails(row: InvoiceRow): InvoiceDetails {
  let parsed: Partial<InvoiceDetails> = {};
  try {
    parsed = (JSON.parse(row.details ?? '{}') ?? {}) as Partial<InvoiceDetails>;
  } catch {
    parsed = {};
  }
  return { ...detailsDefaults(row), ...parsed };
}

function toDomain(row: InvoiceRow): Invoice {
  const d = parseDetails(row);
  return {
    invoiceId: row.invoice_id,
    projectId: row.project_id,
    clientId: row.client_id,
    invoiceNumber: d.invoiceNumber,
    status: row.status as InvoiceStatus,
    totalAmount: d.totalAmount,
    sentAt: d.sentAt,
    createdAt: row.created_at,
    updatedAt: d.updatedAt,
  };
}

export function createInvoiceRepositoryAdapter(ctx: RequestContext): IInvoiceRepository {
  const getTable = () => ctx.data.moduleData.getTable<InvoiceRow>('invoice');
  return {
    async getById(invoiceId) {
      const repo = await getTable();
      const row = await repo.findOne({ where: { invoice_id: invoiceId } });
      if (!row) {
        throw new AppError('NOT_FOUND', `Invoice ${invoiceId} not found`, 404, { invoiceId });
      }
      return toDomain(row);
    },

    async list(filter?: InvoiceListFilter) {
      const where: Partial<InvoiceRow> = {};
      if (filter?.projectId) where.project_id = filter.projectId;
      if (filter?.clientId) where.client_id = filter.clientId;
      if (filter?.status) where.status = filter.status;
      const repo = await getTable();
      const rows = await repo.findMany({
        where,
        orderBy: { field: 'created_at', direction: 'desc' },
      });
      let result = rows.map(toDomain);
      // invoiceNumber lives in the details JSONB, so filter in memory.
      if (filter?.invoiceNumber) {
        result = result.filter((inv) => inv.invoiceNumber === filter.invoiceNumber);
      }
      return result;
    },

    async save(invoice) {
      const repo = await getTable();
      const existing = await repo.findOne({ where: { invoice_id: invoice.invoiceId } });
      if (existing) {
        await repo.update({ where: { invoice_id: invoice.invoiceId }, patch: toRow(invoice) });
      } else {
        await repo.insert({ record: toRow(invoice) });
      }
    },

    async findByProject(projectId) {
      const repo = await getTable();
      const rows = await repo.findMany({
        where: { project_id: projectId },
        orderBy: { field: 'created_at', direction: 'desc' },
      });
      return rows.map(toDomain);
    },

    async findByStatus(status) {
      const repo = await getTable();
      const rows = await repo.findMany({
        where: { status },
        orderBy: { field: 'created_at', direction: 'desc' },
      });
      return rows.map(toDomain);
    },

    async findByBillingSummary(_billingSummaryId) {
      // The current Invoice entity and table schema do not carry a billingSummaryId
      // column or details field, so there is nothing to filter on yet.
      return [];
    },
  };
}
