/// <mls fileReference="_102045_/l1/buildFlowFsm/layer_1_external/adapters/persistence/changeOrderRepositoryAdapter.ts" enhancement="_blank"/>
import { AppError, type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import type { IChangeOrderRepository, ChangeOrderListFilter } from '/_102045_/l1/buildFlowFsm/layer_2_application/ports/changeOrderRepository.js';
import type { ChangeOrder, ChangeOrderImpactType, ChangeOrderStatus } from '/_102045_/l1/buildFlowFsm/layer_3_domain/entities/changeOrder.js';

interface ChangeOrderRow {
  change_order_id: string;
  project_id: string;
  impact_type: string;
  status: string;
  created_at: string;
  details: string | null;
}

interface ChangeOrderDetails {
  title: string;
  description: string;
  costAdjustment: number;
  scheduleAdjustmentDays: number | null;
  rejectionReason: string | null;
  approvedAt: string | null;
  rejectedAt: string | null;
  updatedAt: string;
}

function toRow(order: ChangeOrder): ChangeOrderRow {
  const details: ChangeOrderDetails = {
    title: order.title,
    description: order.description,
    costAdjustment: order.costAdjustment,
    scheduleAdjustmentDays: order.scheduleAdjustmentDays,
    rejectionReason: order.rejectionReason,
    approvedAt: order.approvedAt,
    rejectedAt: order.rejectedAt,
    updatedAt: order.updatedAt,
  };
  return {
    change_order_id: order.changeOrderId,
    project_id: order.projectId,
    impact_type: order.impactType,
    status: order.status,
    created_at: order.createdAt,
    details: JSON.stringify(details),
  };
}

function detailsDefaults(row: ChangeOrderRow): ChangeOrderDetails {
  return {
    title: '',
    description: '',
    costAdjustment: 0,
    scheduleAdjustmentDays: null,
    rejectionReason: null,
    approvedAt: null,
    rejectedAt: null,
    updatedAt: row.created_at,
  };
}

function parseDetails(row: ChangeOrderRow): ChangeOrderDetails {
  let parsed: Partial<ChangeOrderDetails> = {};
  try {
    parsed = (JSON.parse(row.details ?? '{}') ?? {}) as Partial<ChangeOrderDetails>;
  } catch {
    parsed = {};
  }
  return { ...detailsDefaults(row), ...parsed };
}

function toDomain(row: ChangeOrderRow): ChangeOrder {
  const d = parseDetails(row);
  return {
    changeOrderId: row.change_order_id,
    projectId: row.project_id,
    title: d.title,
    description: d.description,
    impactType: row.impact_type as ChangeOrderImpactType,
    costAdjustment: d.costAdjustment,
    scheduleAdjustmentDays: d.scheduleAdjustmentDays,
    status: row.status as ChangeOrderStatus,
    rejectionReason: d.rejectionReason,
    approvedAt: d.approvedAt,
    rejectedAt: d.rejectedAt,
    createdAt: row.created_at,
    updatedAt: d.updatedAt,
  };
}

export function createChangeOrderRepositoryAdapter(ctx: RequestContext): IChangeOrderRepository {
  const getTable = () => ctx.data.moduleData.getTable<ChangeOrderRow>('change_order');

  return {
    async getById(changeOrderId) {
      let row: ChangeOrderRow | null;
      try {
        row = await (await getTable()).findOne({ where: { change_order_id: changeOrderId } });
      } catch (err) {
        // Driver input/format rejection (e.g. invalid UUID) — the entity cannot exist.
        throw new AppError('NOT_FOUND', `ChangeOrder ${changeOrderId} not found`, 404, { changeOrderId });
      }
      if (!row) throw new AppError('NOT_FOUND', `ChangeOrder ${changeOrderId} not found`, 404, { changeOrderId });
      return toDomain(row);
    },

    async list(filter?: ChangeOrderListFilter) {
      const where: Partial<ChangeOrderRow> = {};
      if (filter?.projectId) where.project_id = filter.projectId;
      if (filter?.status) where.status = filter.status;
      if (filter?.impactType) where.impact_type = filter.impactType;
      const rows = await (await getTable()).findMany({
        where,
        orderBy: { field: 'created_at', direction: 'desc' },
      });
      return rows.map(toDomain);
    },

    async save(order) {
      const repo = await getTable();
      const existing = await repo.findOne({ where: { change_order_id: order.changeOrderId } });
      if (existing) {
        await repo.update({ where: { change_order_id: order.changeOrderId }, patch: toRow(order) });
      } else {
        await repo.insert({ record: toRow(order) });
      }
    },

    async findByProject(projectId) {
      const rows = await (await getTable()).findMany({
        where: { project_id: projectId },
        orderBy: { field: 'created_at', direction: 'desc' },
      });
      return rows.map(toDomain);
    },

    async findByStatus(status) {
      const rows = await (await getTable()).findMany({
        where: { status },
        orderBy: { field: 'created_at', direction: 'desc' },
      });
      return rows.map(toDomain);
    },
  };
}
