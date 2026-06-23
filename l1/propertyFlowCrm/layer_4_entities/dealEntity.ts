/// <mls fileReference="_102045_/l1/propertyFlowCrm/layer_4_entities/dealEntity.ts" enhancement="_blank"/>
import { AppError, type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import type { IDataRuntime } from '/_102034_/l1/server/layer_1_external/data/runtime.js';
import type { MdmDocumentRecord } from '/_102034_/l1/mdm/module.js';

export type DealStatus = 'rascunho' | 'enviada' | 'emNegociacao' | 'aceita' | 'recusada' | 'fechada';

export interface DealRecord {
  dealId: string;
  propertyId: string;
  leadId: string;
  brokerId: string;
  status: DealStatus;
  amount: number;
  notes?: string | null;
  createdAt: string;
  updatedAt: string;
}

export interface CreateDealInput {
  dealId?: string;
  propertyId: string;
  leadId: string;
  brokerId: string;
  status: DealStatus;
  amount: number;
  notes?: string | null;
}

export interface UpdateDealInput {
  dealId: string;
  patch: Partial<{
    propertyId: string;
    leadId: string;
    brokerId: string;
    status: DealStatus;
    amount: number;
    notes?: string | null;
  }>;
}

export interface ListDealFilter {
  mdmIds?: string[];
  limit?: number;
}

export interface IDealEntity {
  create(ctx: RequestContext, input: CreateDealInput, runtime?: IDataRuntime): Promise<DealRecord>;
  getById(ctx: RequestContext, dealId: string, runtime?: IDataRuntime): Promise<DealRecord>;
  update(ctx: RequestContext, input: UpdateDealInput, runtime?: IDataRuntime): Promise<DealRecord>;
  list(ctx: RequestContext, filter?: ListDealFilter, runtime?: IDataRuntime): Promise<DealRecord[]>;
}

const toDealRecord = (mdmId: string, document: MdmDocumentRecord): DealRecord => {
  const detail = document.details as unknown as DealRecord;
  return {
    ...detail,
    dealId: detail.dealId ?? mdmId,
  };
};

export const DealEntity: IDealEntity = {
  async create(ctx, input, runtime) {
    void ctx;
    void input;
    void runtime;
    throw new AppError('FORBIDDEN', 'Deal é uma entidade MDM. Use os casos de uso do MDM para criação.', 403);
  },

  async getById(ctx, dealId, runtime) {
    const data = runtime ?? ctx.data;
    const index = await data.mdmEntityIndex.findOne({ where: { mdmId: dealId } });
    if (!index) {
      throw new AppError('NOT_FOUND', 'Negócio não encontrado.', 404, { id: dealId });
    }
    const document = await data.mdmDocument.get({ mdmId: dealId });
    if (!document) {
      throw new AppError('NOT_FOUND', 'Documento do negócio não encontrado.', 404, { id: dealId });
    }
    return toDealRecord(dealId, document);
  },

  async update(ctx, input, runtime) {
    void ctx;
    void input;
    void runtime;
    throw new AppError('FORBIDDEN', 'Deal é uma entidade MDM. Use os casos de uso do MDM para atualização.', 403);
  },

  async list(ctx, filter, runtime) {
    const data = runtime ?? ctx.data;
    const mdmIds = filter?.mdmIds?.length
      ? (await data.mdmEntityIndex.findManyByValues({ field: 'mdmId', values: filter.mdmIds })).map((record) => record.mdmId)
      : (await data.mdmEntityIndex.findMany({
          orderBy: { field: 'createdAt', direction: 'desc' },
          limit: filter?.limit,
        })).map((record) => record.mdmId);

    if (mdmIds.length === 0) {
      return [];
    }

    const documents = await data.mdmDocument.getMany({ mdmIds });
    const documentById = new Map(documents.map((document) => [document.mdmId, document]));

    return mdmIds.map((mdmId) => {
      const document = documentById.get(mdmId);
      if (!document) {
        throw new AppError('NOT_FOUND', 'Documento do negócio não encontrado.', 404, { id: mdmId });
      }
      return toDealRecord(mdmId, document);
    });
  },
};
