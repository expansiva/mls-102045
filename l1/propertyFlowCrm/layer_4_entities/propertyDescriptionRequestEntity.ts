/// <mls fileReference="_102045_/l1/propertyFlowCrm/layer_4_entities/propertyDescriptionRequestEntity.ts" enhancement="_blank"/>
import { AppError, type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import type { IDataRuntime } from '/_102034_/l1/server/layer_1_external/data/runtime.js';

export type PropertyDescriptionRequestReviewStatus = 'pendente' | 'aprovada' | 'rejeitada';

export interface PropertyDescriptionRequestRecord {
  id: string;
  property_id: string;
  bullets: string;
  ai_description?: string | null;
  human_review_notes?: string | null;
  review_status: PropertyDescriptionRequestReviewStatus;
  created_at: string;
  updated_at: string;
}

export interface CreatePropertyDescriptionRequestInput {
  propertyId: string;
  bullets: string;
  aiDescription?: string | null;
  humanReviewNotes?: string | null;
  reviewStatus: PropertyDescriptionRequestReviewStatus;
}

export interface ListPropertyDescriptionRequestFilter {
  propertyId?: string;
  reviewStatus?: PropertyDescriptionRequestReviewStatus;
}

export interface IPropertyDescriptionRequestEntity {
  create(
    ctx: RequestContext,
    input: CreatePropertyDescriptionRequestInput,
    runtime?: IDataRuntime
  ): Promise<PropertyDescriptionRequestRecord>;
  getById(
    ctx: RequestContext,
    propertyDescriptionRequestId: string,
    runtime?: IDataRuntime
  ): Promise<PropertyDescriptionRequestRecord>;
  list(
    ctx: RequestContext,
    filter?: ListPropertyDescriptionRequestFilter,
    runtime?: IDataRuntime
  ): Promise<PropertyDescriptionRequestRecord[]>;
}

export const PropertyDescriptionRequestEntity: IPropertyDescriptionRequestEntity = {
  async create(ctx, input, runtime) {
    const data = runtime ?? ctx.data;
    const repo = await data.moduleData.getTable<PropertyDescriptionRequestRecord>('property_description_request');
    const now = ctx.clock.nowIso();
    const record: PropertyDescriptionRequestRecord = {
      id: ctx.idGenerator.newId(),
      property_id: input.propertyId,
      bullets: input.bullets,
      ai_description: input.aiDescription ?? null,
      human_review_notes: input.humanReviewNotes ?? null,
      review_status: input.reviewStatus,
      created_at: now,
      updated_at: now,
    };
    await repo.insert({ record });
    return record;
  },

  async getById(ctx, propertyDescriptionRequestId, runtime) {
    const data = runtime ?? ctx.data;
    const repo = await data.moduleData.getTable<PropertyDescriptionRequestRecord>('property_description_request');
    const record = await repo.findOne({ where: { id: propertyDescriptionRequestId } });
    if (!record) {
      throw new AppError('NOT_FOUND', 'Property description request not found.', 404, {
        id: propertyDescriptionRequestId,
      });
    }
    return record;
  },

  async list(ctx, filter, runtime) {
    const data = runtime ?? ctx.data;
    const repo = await data.moduleData.getTable<PropertyDescriptionRequestRecord>('property_description_request');
    const where: Partial<PropertyDescriptionRequestRecord> = {};
    if (filter?.propertyId) {
      where.property_id = filter.propertyId;
    }
    if (filter?.reviewStatus) {
      where.review_status = filter.reviewStatus;
    }
    const hasFilter = Object.keys(where).length > 0;
    return repo.findMany({
      where: hasFilter ? where : undefined,
      orderBy: { field: 'created_at', direction: 'desc' },
    });
  },
};
