/// <mls fileReference="_102045_/l1/propertyFlowCrm/layer_4_entities/brokerEntity.ts" enhancement="_blank"/>
import { AppError, type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import type { IDataRuntime } from '/_102034_/l1/server/layer_1_external/data/runtime.js';
import type { MdmDocumentRecord } from '/_102034_/l1/mdm/module.js';

export type BrokerStatus = 'ativo' | 'inativo';

export interface BrokerRecord {
  brokerId: string;
  fullName: string;
  email?: string | null;
  phone?: string | null;
  licenseNumber?: string | null;
  status: BrokerStatus;
  createdAt: string;
  updatedAt: string;
}

export interface IBrokerEntity {
  getById(ctx: RequestContext, brokerId: string, runtime?: IDataRuntime): Promise<BrokerRecord>;
  list(ctx: RequestContext, runtime?: IDataRuntime): Promise<BrokerRecord[]>;
}

const toBrokerRecord = (document: MdmDocumentRecord): BrokerRecord =>
  document.details as unknown as BrokerRecord;

export const BrokerEntity: IBrokerEntity = {
  async getById(ctx, brokerId, runtime) {
    const data = runtime ?? ctx.data;
    const index = await data.mdmEntityIndex.findOne({ where: { mdmId: brokerId } });
    if (!index) {
      throw new AppError('NOT_FOUND', 'Broker not found', 404, { id: brokerId });
    }
    const document = await data.mdmDocument.get({ mdmId: brokerId });
    if (!document) {
      throw new AppError('NOT_FOUND', 'Broker not found', 404, { id: brokerId });
    }
    return toBrokerRecord(document);
  },

  async list(ctx, runtime) {
    const data = runtime ?? ctx.data;
    const indexes = await data.mdmEntityIndex.findMany({
      orderBy: { field: 'createdAt', direction: 'desc' },
    });
    if (indexes.length === 0) {
      return [];
    }
    const mdmIds = indexes.map((record) => record.mdmId);
    const documents = await data.mdmDocument.getMany({ mdmIds });
    const documentById = new Map(documents.map((document) => [document.mdmId, document]));
    return mdmIds
      .map((mdmId) => documentById.get(mdmId))
      .filter((document): document is MdmDocumentRecord => Boolean(document))
      .map((document) => toBrokerRecord(document));
  },
};
