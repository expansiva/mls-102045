/// <mls fileReference="_102045_/l1/propertyFlowCrm/layer_4_entities/dealStageChangeEntity.ts" enhancement="_blank"/>
import { AppError, type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import type { IDataRuntime } from '/_102034_/l1/server/layer_1_external/data/runtime.js';

export interface DealStageChangeRecord {
  deal_stage_change_id: string;
  deal_id: string;
  from_stage: string;
  to_stage: string;
  changed_at: string;
  created_at: string;
  updated_at: string;
}

export interface CreateDealStageChangeInput {
  dealId: string;
  fromStage: string;
  toStage: string;
  changedAt: string;
}

export interface ListDealStageChangeFilter {
  where?: Partial<DealStageChangeRecord>;
  limit?: number;
}

export interface IDealStageChangeEntity {
  create(
    ctx: RequestContext,
    input: CreateDealStageChangeInput,
    runtime?: IDataRuntime,
  ): Promise<DealStageChangeRecord>;
  getById(
    ctx: RequestContext,
    dealStageChangeId: string,
    runtime?: IDataRuntime,
  ): Promise<DealStageChangeRecord>;
  list(
    ctx: RequestContext,
    filter?: ListDealStageChangeFilter,
    runtime?: IDataRuntime,
  ): Promise<DealStageChangeRecord[]>;
}

export const DealStageChangeEntity: IDealStageChangeEntity = {
  async create(ctx, input, runtime) {
    const data = runtime ?? ctx.data;
    const repo = await data.moduleData.getTable<DealStageChangeRecord>('deal_stage_change');
    const now = ctx.clock.nowIso();
    const record: DealStageChangeRecord = {
      deal_stage_change_id: ctx.idGenerator.newId(),
      deal_id: input.dealId,
      from_stage: input.fromStage,
      to_stage: input.toStage,
      changed_at: input.changedAt,
      created_at: now,
      updated_at: now,
    };
    await repo.insert({ record });
    return record;
  },

  async getById(ctx, dealStageChangeId, runtime) {
    const data = runtime ?? ctx.data;
    const repo = await data.moduleData.getTable<DealStageChangeRecord>('deal_stage_change');
    const record = await repo.findOne({
      where: {
        deal_stage_change_id: dealStageChangeId,
      },
    });
    if (!record) {
      throw new AppError('NOT_FOUND', 'Deal stage change not found.', 404, {
        id: dealStageChangeId,
      });
    }
    return record;
  },

  async list(ctx, filter, runtime) {
    const data = runtime ?? ctx.data;
    const repo = await data.moduleData.getTable<DealStageChangeRecord>('deal_stage_change');
    return repo.findMany({
      where: filter?.where,
      limit: filter?.limit,
      orderBy: {
        field: 'created_at',
        direction: 'desc',
      },
    });
  },
};
