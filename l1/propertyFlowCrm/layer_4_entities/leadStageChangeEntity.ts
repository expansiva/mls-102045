/// <mls fileReference="_102045_/l1/propertyFlowCrm/layer_4_entities/leadStageChangeEntity.ts" enhancement="_blank"/>
import { AppError, type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import type { IDataRuntime } from '/_102034_/l1/server/layer_1_external/data/runtime.js';

export interface LeadStageChangeRecord {
  lead_stage_change_id: string;
  lead_id: string;
  from_stage: string;
  to_stage: string;
  changed_by_broker_id: string;
  changed_at: string;
  note?: string | null;
  created_at: string;
  updated_at: string;
}

export interface CreateLeadStageChangeInput {
  leadId: string;
  fromStage: string;
  toStage: string;
  changedByBrokerId: string;
  changedAt: string;
  note?: string | null;
}

export type ListLeadStageChangeFilter = Partial<LeadStageChangeRecord>;

export interface ILeadStageChangeEntity {
  create(
    ctx: RequestContext,
    input: CreateLeadStageChangeInput,
    runtime?: IDataRuntime,
  ): Promise<LeadStageChangeRecord>;
  getById(
    ctx: RequestContext,
    leadStageChangeId: string,
    runtime?: IDataRuntime,
  ): Promise<LeadStageChangeRecord>;
  list(
    ctx: RequestContext,
    filter?: ListLeadStageChangeFilter,
    runtime?: IDataRuntime,
  ): Promise<LeadStageChangeRecord[]>;
}

export const LeadStageChangeEntity: ILeadStageChangeEntity = {
  async create(ctx, input, runtime) {
    const data = runtime ?? ctx.data;
    const repo = await data.moduleData.getTable<LeadStageChangeRecord>('lead_stage_change');
    const now = ctx.clock.nowIso();
    const record: LeadStageChangeRecord = {
      lead_stage_change_id: ctx.idGenerator.newId(),
      lead_id: input.leadId,
      from_stage: input.fromStage,
      to_stage: input.toStage,
      changed_by_broker_id: input.changedByBrokerId,
      changed_at: input.changedAt,
      note: input.note ?? null,
      created_at: now,
      updated_at: now,
    };

    await repo.insert({ record });
    return record;
  },

  async getById(ctx, leadStageChangeId, runtime) {
    const data = runtime ?? ctx.data;
    const repo = await data.moduleData.getTable<LeadStageChangeRecord>('lead_stage_change');
    const record = await repo.findOne({
      where: { lead_stage_change_id: leadStageChangeId },
    });

    if (!record) {
      throw new AppError('NOT_FOUND', 'Lead stage change not found.', 404, {
        id: leadStageChangeId,
      });
    }

    return record;
  },

  async list(ctx, filter, runtime) {
    const data = runtime ?? ctx.data;
    const repo = await data.moduleData.getTable<LeadStageChangeRecord>('lead_stage_change');
    return repo.findMany({
      where: filter,
      orderBy: {
        field: 'created_at',
        direction: 'desc',
      },
    });
  },
};
