/// <mls fileReference="_102045_/l1/propertyFlowCrm/layer_4_entities/propertyEntity.ts" enhancement="_blank"/>
import { AppError, type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import type { IDataRuntime } from '/_102034_/l1/server/layer_1_external/data/runtime.js';
import type { MdmDocumentRecord } from '/_102034_/l1/mdm/module.js';

export type PropertyStatus = 'ativo' | 'inativo' | 'vendido' | 'reservado';
export type PropertyLifecycleState = 'captado' | 'publicado' | 'emNegociacao' | 'vendido' | 'arquivado';
export type Broker = string;

export interface PropertyRecord {
  propertyId: string;
  brokerId: Broker;
  address: string;
  propertyType: string;
  price: number;
  status: PropertyStatus;
  lifecycleState: PropertyLifecycleState;
  features?: string | null;
  photosMock?: string | null;
  createdAt: string;
  updatedAt: string;
}

export interface CreatePropertyInput {
  propertyId?: string;
  brokerId: Broker;
  address: string;
  propertyType: string;
  price: number;
  status: PropertyStatus;
  lifecycleState: PropertyLifecycleState;
  features?: string | null;
  photosMock?: string | null;
  createdAt?: string;
  updatedAt?: string;
}

export interface UpdatePropertyInput {
  propertyId: string;
  patch: Partial<Omit<PropertyRecord, 'propertyId'>>;
}

export interface ListPropertyFilter {
  limit?: number;
}

export interface SearchPropertyFilter extends ListPropertyFilter {
  query?: string;
}

export interface IPropertyEntity {
  create(ctx: RequestContext, input: CreatePropertyInput, runtime?: IDataRuntime): Promise<PropertyRecord>;
  getById(ctx: RequestContext, propertyId: string, runtime?: IDataRuntime): Promise<PropertyRecord>;
  update(ctx: RequestContext, input: UpdatePropertyInput, runtime?: IDataRuntime): Promise<PropertyRecord>;
  list(ctx: RequestContext, filter?: ListPropertyFilter, runtime?: IDataRuntime): Promise<PropertyRecord[]>;
  search(ctx: RequestContext, filter?: SearchPropertyFilter, runtime?: IDataRuntime): Promise<PropertyRecord[]>;
}

const toPropertyRecord = (document: MdmDocumentRecord): PropertyRecord => {
  const details = document.details as unknown as PropertyRecord & { propertyId?: string };
  return {
    ...details,
    propertyId: details.propertyId ?? document.mdmId,
  };
};

export const PropertyEntity: IPropertyEntity = {
  async create(ctx: RequestContext, _input: CreatePropertyInput, _runtime?: IDataRuntime): Promise<PropertyRecord> {
    throw new AppError(
      'MDM_WRITE_FORBIDDEN',
      'Property entity is MDM-backed. Use MDM usecases for create operations.',
      403,
    );
  },
  async getById(ctx: RequestContext, propertyId: string, runtime?: IDataRuntime): Promise<PropertyRecord> {
    const data = runtime ?? ctx.data;
    const document = await data.mdmDocument.get({ mdmId: propertyId });
    if (!document) {
      throw new AppError('NOT_FOUND', 'Property not found.', 404, { id: propertyId });
    }
    return toPropertyRecord(document);
  },
  async update(ctx: RequestContext, _input: UpdatePropertyInput, _runtime?: IDataRuntime): Promise<PropertyRecord> {
    throw new AppError(
      'MDM_WRITE_FORBIDDEN',
      'Property entity is MDM-backed. Use MDM usecases for update operations.',
      403,
    );
  },
  async list(ctx: RequestContext, filter?: ListPropertyFilter, runtime?: IDataRuntime): Promise<PropertyRecord[]> {
    const data = runtime ?? ctx.data;
    const indexRecords = await data.mdmEntityIndex.findMany({
      limit: filter?.limit,
      orderBy: { field: 'createdAt', direction: 'desc' },
    });
    const mdmIds = indexRecords.map((record) => record.mdmId).filter(Boolean);
    if (mdmIds.length === 0) {
      return [];
    }
    const documents = await data.mdmDocument.getMany({ mdmIds });
    return documents.map(toPropertyRecord);
  },
  async search(ctx: RequestContext, filter?: SearchPropertyFilter, runtime?: IDataRuntime): Promise<PropertyRecord[]> {
    return PropertyEntity.list(ctx, filter, runtime);
  },
};
