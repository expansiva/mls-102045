/// <mls fileReference="_102045_/l1/propertyFlowCrm/layer_4_entities/leadEntity.ts" enhancement="_blank"/>
import { AppError, type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import type { IDataRuntime } from '/_102034_/l1/server/layer_1_external/data/runtime.js';
import type { MdmDocumentRecord } from '/_102034_/l1/mdm/module.js';

export type LeadStatus = 'novo' | 'emContato' | 'qualificado' | 'proposta' | 'fechado' | 'perdido';
export type LeadLifecycleState = 'captado' | 'qualificado' | 'negociacao' | 'fechado' | 'perdido';

export interface LeadDetails {
  leadId?: string;
  brokerId: string;
  fullName: string;
  email?: string | null;
  phone?: string | null;
  notes?: string | null;
  leadTemperature?: string | null;
  source?: string | null;
  leadStatus: LeadStatus;
  createdAt: string;
  updatedAt: string;
}

export interface LeadRecord {
  leadId: string;
  brokerId: string;
  fullName: string;
  email?: string | null;
  phone?: string | null;
  notes?: string | null;
  leadTemperature?: string | null;
  source?: string | null;
  leadStatus: LeadStatus;
  createdAt: string;
  updatedAt: string;
}

export interface CreateLeadInput {
  brokerId: string;
  fullName: string;
  leadStatus: LeadStatus;
  email?: string | null;
  phone?: string | null;
  notes?: string | null;
  leadTemperature?: string | null;
  source?: string | null;
}

export interface UpdateLeadInput {
  leadId: string;
  patch: Partial<Omit<LeadRecord, 'leadId' | 'createdAt' | 'updatedAt'>>;
}

export interface ILeadEntity {
  create(ctx: RequestContext, input: CreateLeadInput, runtime?: IDataRuntime): Promise<LeadRecord>;
  getById(ctx: RequestContext, leadId: string, runtime?: IDataRuntime): Promise<LeadRecord>;
  update(ctx: RequestContext, input: UpdateLeadInput, runtime?: IDataRuntime): Promise<LeadRecord>;
  list(ctx: RequestContext, runtime?: IDataRuntime): Promise<LeadRecord[]>;
}

const toLeadRecord = (document: MdmDocumentRecord): LeadRecord => {
  const details = document.details as unknown as LeadDetails;
  return {
    leadId: details.leadId ?? document.mdmId,
    brokerId: details.brokerId,
    fullName: details.fullName,
    email: details.email ?? null,
    phone: details.phone ?? null,
    notes: details.notes ?? null,
    leadTemperature: details.leadTemperature ?? null,
    source: details.source ?? null,
    leadStatus: details.leadStatus,
    createdAt: details.createdAt,
    updatedAt: details.updatedAt,
  };
};

export const LeadEntity: ILeadEntity = {
  async create(ctx: RequestContext, input: CreateLeadInput, runtime?: IDataRuntime): Promise<LeadRecord> {
    void ctx;
    void input;
    void runtime;
    throw new AppError(
      'MDM_WRITE_FORBIDDEN',
      'Lead records are managed by the MDM module. Use the MDM usecases for writes.',
      403,
    );
  },
  async getById(ctx: RequestContext, leadId: string, runtime?: IDataRuntime): Promise<LeadRecord> {
    const data = runtime ?? ctx.data;
    const document = await data.mdmDocument.get({ mdmId: leadId });
    if (!document) {
      throw new AppError('NOT_FOUND', 'Lead not found', 404, { id: leadId });
    }
    return toLeadRecord(document);
  },
  async update(ctx: RequestContext, input: UpdateLeadInput, runtime?: IDataRuntime): Promise<LeadRecord> {
    void ctx;
    void input;
    void runtime;
    throw new AppError(
      'MDM_WRITE_FORBIDDEN',
      'Lead records are managed by the MDM module. Use the MDM usecases for writes.',
      403,
    );
  },
  async list(ctx: RequestContext, runtime?: IDataRuntime): Promise<LeadRecord[]> {
    const data = runtime ?? ctx.data;
    const indexRows = await data.mdmEntityIndex.findMany({
      where: {
        subtype: 'Lead' as never,
      },
      orderBy: { field: 'createdAt', direction: 'desc' },
    });
    if (indexRows.length === 0) {
      return [];
    }
    const documents = await data.mdmDocument.getMany({ mdmIds: indexRows.map((row) => row.mdmId) });
    const documentById = new Map(documents.map((document) => [document.mdmId, document]));
    return indexRows
      .map((row) => documentById.get(row.mdmId))
      .filter((document): document is MdmDocumentRecord => Boolean(document))
      .map((document) => toLeadRecord(document));
  },
};
