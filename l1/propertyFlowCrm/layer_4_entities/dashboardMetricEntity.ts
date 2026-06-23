/// <mls fileReference="_102045_/l1/propertyFlowCrm/layer_4_entities/dashboardMetricEntity.ts" enhancement="_blank"/>
import { AppError, type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import type { IDataRuntime } from '/_102034_/l1/server/layer_1_external/data/runtime.js';

export interface DashboardMetricUpdateRecord {
  dashboard_metric_update_id: string;
  property_ids?: string[] | null;
  lead_ids?: string[] | null;
  deal_ids?: string[] | null;
  created_at: string;
  updated_at: string;
}

export interface CreateDashboardMetricUpdateInput {
  propertyIds?: string[] | null;
  leadIds?: string[] | null;
  dealIds?: string[] | null;
}

export interface UpdateDashboardMetricUpdateInput {
  dashboardMetricUpdateId: string;
  patch: {
    propertyIds?: string[] | null;
    leadIds?: string[] | null;
    dealIds?: string[] | null;
  };
}

export interface ListDashboardMetricUpdateFilter {
  dashboardMetricUpdateId?: string;
  dashboardMetricUpdateIds?: string[];
}

export interface IDashboardMetricEntity {
  create(
    ctx: RequestContext,
    input: CreateDashboardMetricUpdateInput,
    runtime?: IDataRuntime,
  ): Promise<DashboardMetricUpdateRecord>;
  getById(
    ctx: RequestContext,
    dashboardMetricUpdateId: string,
    runtime?: IDataRuntime,
  ): Promise<DashboardMetricUpdateRecord>;
  update(
    ctx: RequestContext,
    input: UpdateDashboardMetricUpdateInput,
    runtime?: IDataRuntime,
  ): Promise<DashboardMetricUpdateRecord>;
  list(
    ctx: RequestContext,
    filter?: ListDashboardMetricUpdateFilter,
    runtime?: IDataRuntime,
  ): Promise<DashboardMetricUpdateRecord[]>;
}

export const DashboardMetricEntity: IDashboardMetricEntity = {
  async create(ctx, input, runtime) {
    const data = runtime ?? ctx.data;
    const repo = await data.moduleData.getTable<DashboardMetricUpdateRecord>('dashboard_metric_update');
    const now = ctx.clock.nowIso();
    const record: DashboardMetricUpdateRecord = {
      dashboard_metric_update_id: ctx.idGenerator.newId(),
      property_ids: input.propertyIds ?? null,
      lead_ids: input.leadIds ?? null,
      deal_ids: input.dealIds ?? null,
      created_at: now,
      updated_at: now,
    };

    await repo.insert({ record });
    return record;
  },

  async getById(ctx, dashboardMetricUpdateId, runtime) {
    const data = runtime ?? ctx.data;
    const repo = await data.moduleData.getTable<DashboardMetricUpdateRecord>('dashboard_metric_update');
    const record = await repo.findOne({
      where: { dashboard_metric_update_id: dashboardMetricUpdateId },
    });

    if (!record) {
      throw new AppError(
        'NOT_FOUND',
        'Dashboard metric update not found.',
        404,
        { id: dashboardMetricUpdateId },
      );
    }

    return record;
  },

  async update(ctx, input, runtime) {
    const data = runtime ?? ctx.data;
    const repo = await data.moduleData.getTable<DashboardMetricUpdateRecord>('dashboard_metric_update');
    const current = await repo.findOne({
      where: { dashboard_metric_update_id: input.dashboardMetricUpdateId },
    });

    if (!current) {
      throw new AppError(
        'NOT_FOUND',
        'Dashboard metric update not found.',
        404,
        { id: input.dashboardMetricUpdateId },
      );
    }

    const updatedAt = ctx.clock.nowIso();
    const patch: Partial<DashboardMetricUpdateRecord> = {
      updated_at: updatedAt,
    };

    if ('propertyIds' in input.patch) {
      patch.property_ids = input.patch.propertyIds ?? null;
    }
    if ('leadIds' in input.patch) {
      patch.lead_ids = input.patch.leadIds ?? null;
    }
    if ('dealIds' in input.patch) {
      patch.deal_ids = input.patch.dealIds ?? null;
    }

    await repo.update({
      where: { dashboard_metric_update_id: input.dashboardMetricUpdateId },
      patch,
    });

    return {
      ...current,
      ...patch,
    };
  },

  async list(ctx, filter, runtime) {
    const data = runtime ?? ctx.data;
    const repo = await data.moduleData.getTable<DashboardMetricUpdateRecord>('dashboard_metric_update');

    if (filter?.dashboardMetricUpdateIds?.length) {
      return repo.findManyByValues({
        field: 'dashboard_metric_update_id',
        values: filter.dashboardMetricUpdateIds,
        limit: filter.dashboardMetricUpdateIds.length,
      });
    }

    if (filter?.dashboardMetricUpdateId) {
      return repo.findMany({
        where: { dashboard_metric_update_id: filter.dashboardMetricUpdateId },
        orderBy: { field: 'created_at', direction: 'desc' },
      });
    }

    return repo.findMany({
      orderBy: { field: 'created_at', direction: 'desc' },
    });
  },
};
