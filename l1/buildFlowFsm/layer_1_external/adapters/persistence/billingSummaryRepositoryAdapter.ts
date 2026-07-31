/// <mls fileReference="_102045_/l1/buildFlowFsm/layer_1_external/adapters/persistence/billingSummaryRepositoryAdapter.ts" enhancement="_blank"/>
import { AppError, type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import type { IBillingSummaryRepository, BillingSummaryListFilter } from '/_102045_/l1/buildFlowFsm/layer_2_application/ports/billingSummaryRepository.js';
import type { BillingSummary, BillingSummaryStatus } from '/_102045_/l1/buildFlowFsm/layer_3_domain/entities/billingSummary.js';

interface BillingSummaryRow {
  billing_summary_id: string;
  project_id: string;
  status: string;
  created_at: string;
  details: string | null;
}

interface BillingSummaryDetails {
  periodStart: string;
  periodEnd: string;
  laborCost: number;
  materialCost: number;
  changeOrderCost: number;
  totalCost: number;
  sharedAt: string | null;
  updatedAt: string;
}

function toRow(summary: BillingSummary): BillingSummaryRow {
  const details: BillingSummaryDetails = {
    periodStart: summary.periodStart,
    periodEnd: summary.periodEnd,
    laborCost: summary.laborCost,
    materialCost: summary.materialCost,
    changeOrderCost: summary.changeOrderCost,
    totalCost: summary.totalCost,
    sharedAt: summary.sharedAt,
    updatedAt: summary.updatedAt,
  };
  return {
    billing_summary_id: summary.billingSummaryId,
    project_id: summary.projectId,
    status: summary.status,
    created_at: summary.createdAt,
    details: JSON.stringify(details),
  };
}

function detailsDefaults(row: BillingSummaryRow): BillingSummaryDetails {
  return {
    periodStart: '',
    periodEnd: '',
    laborCost: 0,
    materialCost: 0,
    changeOrderCost: 0,
    totalCost: 0,
    sharedAt: null,
    updatedAt: row.created_at,
  };
}

function parseDetails(row: BillingSummaryRow): BillingSummaryDetails {
  let parsed: Partial<BillingSummaryDetails> = {};
  try {
    parsed = (JSON.parse(row.details ?? '{}') ?? {}) as Partial<BillingSummaryDetails>;
  } catch {
    parsed = {};
  }
  return { ...detailsDefaults(row), ...parsed };
}

function toDomain(row: BillingSummaryRow): BillingSummary {
  const d = parseDetails(row);
  return {
    billingSummaryId: row.billing_summary_id,
    projectId: row.project_id,
    status: row.status as BillingSummaryStatus,
    periodStart: d.periodStart,
    periodEnd: d.periodEnd,
    laborCost: d.laborCost,
    materialCost: d.materialCost,
    changeOrderCost: d.changeOrderCost,
    totalCost: d.totalCost,
    sharedAt: d.sharedAt,
    createdAt: row.created_at,
    updatedAt: d.updatedAt,
  };
}

export function createBillingSummaryRepositoryAdapter(ctx: RequestContext): IBillingSummaryRepository {
  const getTable = () => ctx.data.moduleData.getTable<BillingSummaryRow>('billing_summary');

  return {
    async getById(billingSummaryId) {
      const repo = await getTable();
      let row: BillingSummaryRow | null;
      try {
        row = await repo.findOne({ where: { billing_summary_id: billingSummaryId } });
      } catch (err) {
        // Driver input/format rejection on an id that cannot exist → NOT_FOUND
        throw new AppError('NOT_FOUND', `BillingSummary ${billingSummaryId} not found`, 404, { billingSummaryId, cause: (err as Error).message });
      }
      if (!row) throw new AppError('NOT_FOUND', `BillingSummary ${billingSummaryId} not found`, 404, { billingSummaryId });
      return toDomain(row);
    },

    async list(filter?: BillingSummaryListFilter) {
      const where: Partial<BillingSummaryRow> = {};
      if (filter?.projectId) where.project_id = filter.projectId;
      if (filter?.status) where.status = filter.status;
      const repo = await getTable();
      const rows = await repo.findMany({ where, orderBy: { field: 'created_at', direction: 'desc' } });
      let summaries = rows.map(toDomain);
      if (filter?.periodStart) {
        summaries = summaries.filter((s) => s.periodStart >= filter.periodStart!);
      }
      if (filter?.periodEnd) {
        summaries = summaries.filter((s) => s.periodEnd <= filter.periodEnd!);
      }
      return summaries;
    },

    async save(summary) {
      const repo = await getTable();
      const existing = await repo.findOne({ where: { billing_summary_id: summary.billingSummaryId } });
      if (existing) {
        await repo.update({ where: { billing_summary_id: summary.billingSummaryId }, patch: toRow(summary) });
      } else {
        await repo.insert({ record: toRow(summary) });
      }
    },

    async findByProject(projectId) {
      const repo = await getTable();
      const row = await repo.findOne({ where: { project_id: projectId } });
      if (!row) throw new AppError('NOT_FOUND', `BillingSummary for project ${projectId} not found`, 404, { projectId });
      return toDomain(row);
    },

    async findByPeriod(periodStart, periodEnd) {
      const repo = await getTable();
      const rows = await repo.findMany({ orderBy: { field: 'created_at', direction: 'desc' } });
      const summaries = rows.map(toDomain);
      return summaries.filter((s) => s.periodStart >= periodStart && s.periodEnd <= periodEnd);
    },
  };
}
