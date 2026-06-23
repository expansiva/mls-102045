/// <mls fileReference="_102045_/l1/propertyFlowCrm/layer_4_entities/leadQualificationRequestEntity.ts" enhancement="_blank"/>
import { AppError, type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import type { IDataRuntime } from '/_102034_/l1/server/layer_1_external/data/runtime.js';

export type LeadQualificationRequestStatus = 'pendente' | 'emRevisao' | 'concluida' | 'cancelada';
export type LeadQualificationRequestLifecycleState = 'criada' | 'qualificada' | 'revisada' | 'finalizada';
export type LeadTemperature = 'frio' | 'morno' | 'quente';
export type LeadQualificationReviewStatus = 'pendente' | 'aprovado' | 'rejeitado';

export interface LeadQualificationRequestRecord {
  lead_qualification_request_id: string;
  lead_id: string;
  lead_temperature: LeadTemperature;
  follow_up_suggestion?: string | null;
  ai_generated: boolean;
  review_status: LeadQualificationReviewStatus;
  created_at: string;
  updated_at: string;
}

export interface CreateLeadQualificationRequestInput {
  leadId: string;
  leadTemperature: LeadTemperature;
  followUpSuggestion?: string | null;
  aiGenerated: boolean;
  reviewStatus: LeadQualificationReviewStatus;
}

export type ListLeadQualificationRequestFilter = Partial<LeadQualificationRequestRecord>;

export interface ILeadQualificationRequestEntity {
  create(
    ctx: RequestContext,
    input: CreateLeadQualificationRequestInput,
    runtime?: IDataRuntime,
  ): Promise<LeadQualificationRequestRecord>;
  getById(
    ctx: RequestContext,
    leadQualificationRequestId: string,
    runtime?: IDataRuntime,
  ): Promise<LeadQualificationRequestRecord>;
  list(
    ctx: RequestContext,
    filter?: ListLeadQualificationRequestFilter,
    runtime?: IDataRuntime,
  ): Promise<LeadQualificationRequestRecord[]>;
}

export const LeadQualificationRequestEntity: ILeadQualificationRequestEntity = {
  async create(ctx, input, runtime) {
    const data = runtime ?? ctx.data;
    const repo = await data.moduleData.getTable<LeadQualificationRequestRecord>('lead_qualification_request');
    const now = ctx.clock.nowIso();
    const record: LeadQualificationRequestRecord = {
      lead_qualification_request_id: ctx.idGenerator.newId(),
      lead_id: input.leadId,
      lead_temperature: input.leadTemperature,
      follow_up_suggestion: input.followUpSuggestion ?? null,
      ai_generated: input.aiGenerated,
      review_status: input.reviewStatus,
      created_at: now,
      updated_at: now,
    };
    await repo.insert({ record });
    return record;
  },

  async getById(ctx, leadQualificationRequestId, runtime) {
    const data = runtime ?? ctx.data;
    const repo = await data.moduleData.getTable<LeadQualificationRequestRecord>('lead_qualification_request');
    const record = await repo.findOne({
      where: { lead_qualification_request_id: leadQualificationRequestId },
    });
    if (!record) {
      throw new AppError('NOT_FOUND', 'Lead qualification request not found', 404, {
        id: leadQualificationRequestId,
      });
    }
    return record;
  },

  async list(ctx, filter, runtime) {
    const data = runtime ?? ctx.data;
    const repo = await data.moduleData.getTable<LeadQualificationRequestRecord>('lead_qualification_request');
    return repo.findMany({
      where: filter,
      orderBy: { field: 'created_at', direction: 'desc' },
    });
  },
};
