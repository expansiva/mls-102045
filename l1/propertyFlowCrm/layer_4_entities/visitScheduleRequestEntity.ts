/// <mls fileReference="_102045_/l1/propertyFlowCrm/layer_4_entities/visitScheduleRequestEntity.ts" enhancement="_blank"/>
import { AppError, type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import type { IDataRuntime } from '/_102034_/l1/server/layer_1_external/data/runtime.js';

export interface VisitScheduleRequestRecord {
  visit_schedule_request_id: string;
  visit_id?: string | null;
  property_id: string;
  lead_id: string;
  requested_start_at: string;
  requested_end_at?: string | null;
  status: string;
  notes?: string | null;
  created_at: string;
  updated_at: string;
}

export interface CreateVisitScheduleRequestInput {
  visitId?: string | null;
  propertyId: string;
  leadId: string;
  requestedStartAt: string;
  requestedEndAt?: string | null;
  status: string;
  notes?: string | null;
}

export interface ListVisitScheduleRequestFilter {
  visitId?: string;
  propertyId?: string;
  leadId?: string;
  status?: string;
}

export interface IVisitScheduleRequestEntity {
  create(
    ctx: RequestContext,
    input: CreateVisitScheduleRequestInput,
    runtime?: IDataRuntime,
  ): Promise<VisitScheduleRequestRecord>;
  getById(
    ctx: RequestContext,
    visitScheduleRequestId: string,
    runtime?: IDataRuntime,
  ): Promise<VisitScheduleRequestRecord>;
  list(
    ctx: RequestContext,
    filter?: ListVisitScheduleRequestFilter,
    runtime?: IDataRuntime,
  ): Promise<VisitScheduleRequestRecord[]>;
}

export const VisitScheduleRequestEntity: IVisitScheduleRequestEntity = {
  async create(ctx, input, runtime) {
    const data = runtime ?? ctx.data;
    const repo = await data.moduleData.getTable<VisitScheduleRequestRecord>('visit_schedule_request');
    const now = ctx.clock.nowIso();
    const record: VisitScheduleRequestRecord = {
      visit_schedule_request_id: ctx.idGenerator.newId(),
      visit_id: input.visitId ?? null,
      property_id: input.propertyId,
      lead_id: input.leadId,
      requested_start_at: input.requestedStartAt,
      requested_end_at: input.requestedEndAt ?? null,
      status: input.status,
      notes: input.notes ?? null,
      created_at: now,
      updated_at: now,
    };

    await repo.insert({ record });

    return record;
  },
  async getById(ctx, visitScheduleRequestId, runtime) {
    const data = runtime ?? ctx.data;
    const repo = await data.moduleData.getTable<VisitScheduleRequestRecord>('visit_schedule_request');
    const record = await repo.findOne({
      where: {
        visit_schedule_request_id: visitScheduleRequestId,
      },
    });

    if (!record) {
      throw new AppError('NOT_FOUND', 'Visit schedule request not found.', 404, {
        id: visitScheduleRequestId,
      });
    }

    return record;
  },
  async list(ctx, filter, runtime) {
    const data = runtime ?? ctx.data;
    const repo = await data.moduleData.getTable<VisitScheduleRequestRecord>('visit_schedule_request');
    const where = filter
      ? {
          visit_id: filter.visitId,
          property_id: filter.propertyId,
          lead_id: filter.leadId,
          status: filter.status,
        }
      : undefined;

    return repo.findMany({
      where,
      orderBy: { field: 'created_at', direction: 'desc' },
    });
  },
};
