/// <mls fileReference="_102045_/l1/propertyFlowCrm/layer_4_entities/visitEntity.ts" enhancement="_blank"/>
import { AppError, type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import type { IDataRuntime } from '/_102034_/l1/server/layer_1_external/data/runtime.js';

export type VisitStatus = 'agendada' | 'confirmada' | 'reagendada' | 'realizada' | 'cancelada';

export interface VisitRecord {
  visitId: string;
  status: VisitStatus;
  propertyId: string;
  leadId: string;
  brokerId?: string | null;
  scheduledAt: string;
  notes?: string | null;
  createdAt: string;
  updatedAt: string;
}

export type VisitDetail = VisitRecord;

export interface CreateVisitInput {
  status: VisitStatus;
  propertyId: string;
  leadId: string;
  brokerId?: string | null;
  scheduledAt: string;
  notes?: string | null;
}

export interface UpdateVisitInput {
  visitId: string;
  patch: Partial<Pick<VisitRecord, 'status' | 'propertyId' | 'leadId' | 'brokerId' | 'scheduledAt' | 'notes'>>;
}

export interface IVisitEntity {
  create(ctx: RequestContext, input: CreateVisitInput, runtime?: IDataRuntime): Promise<VisitRecord>;
  getById(ctx: RequestContext, visitId: string, runtime?: IDataRuntime): Promise<VisitRecord>;
  update(ctx: RequestContext, input: UpdateVisitInput, runtime?: IDataRuntime): Promise<VisitRecord>;
  list(ctx: RequestContext, runtime?: IDataRuntime): Promise<VisitRecord[]>;
}

const mapDetailToRecord = (detail: VisitDetail): VisitRecord => ({
  visitId: detail.visitId,
  status: detail.status,
  propertyId: detail.propertyId,
  leadId: detail.leadId,
  brokerId: detail.brokerId ?? null,
  scheduledAt: detail.scheduledAt,
  notes: detail.notes ?? null,
  createdAt: detail.createdAt,
  updatedAt: detail.updatedAt,
});

const requireMdmDocument = async (data: IDataRuntime, visitId: string): Promise<VisitDetail> => {
  const document = await data.mdmDocument.get({ mdmId: visitId });
  if (!document) {
    throw new AppError('NOT_FOUND', 'Visit not found', 404, { id: visitId });
  }
  return document.details as unknown as VisitDetail;
};

export const VisitEntity: IVisitEntity = {
  async create(ctx, input, runtime) {
    void input;
    void runtime;
    throw new AppError(
      'NOT_SUPPORTED',
      'Visit creation must be performed through the MDM module workflows.',
      501,
      { entity: 'Visit' },
    );
  },

  async getById(ctx, visitId, runtime) {
    const data = runtime ?? ctx.data;
    const index = await data.mdmEntityIndex.findOne({ where: { mdmId: visitId } });
    if (!index) {
      throw new AppError('NOT_FOUND', 'Visit not found', 404, { id: visitId });
    }
    const details = await requireMdmDocument(data, visitId);
    return mapDetailToRecord(details);
  },

  async update(ctx, input, runtime) {
    void input;
    void runtime;
    throw new AppError(
      'NOT_SUPPORTED',
      'Visit updates must be performed through the MDM module workflows.',
      501,
      { entity: 'Visit' },
    );
  },

  async list(ctx, runtime) {
    const data = runtime ?? ctx.data;
    const indexes = await data.mdmEntityIndex.findMany({
      orderBy: { field: 'createdAt', direction: 'desc' },
    });
    if (indexes.length === 0) {
      return [];
    }
    const documents = await data.mdmDocument.getMany({
      mdmIds: indexes.map((index) => index.mdmId),
    });
    const documentMap = new Map<string, VisitDetail>();
    for (const document of documents) {
      documentMap.set(document.mdmId, document.details as unknown as VisitDetail);
    }
    return indexes
      .map((index) => documentMap.get(index.mdmId))
      .filter((detail): detail is VisitDetail => Boolean(detail))
      .map(mapDetailToRecord);
  },
};
