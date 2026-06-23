/// <mls fileReference="_102045_/l1/propertyFlowCrm/layer_3_usecases/atualizarLead.ts" enhancement="_blank"/>
import { AppError, type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { DashboardMetricEntity } from '/_102045_/l1/propertyFlowCrm/layer_4_entities/dashboardMetricEntity.js';
import { LeadEntity, type LeadRecord, type LeadStatus } from '/_102045_/l1/propertyFlowCrm/layer_4_entities/leadEntity.js';

export interface AtualizarLeadInput {
  leadId: string;
  lead: LeadRecord;
}

export interface AtualizarLeadOutput {
  lead: LeadRecord;
}

const allowedLeadStatuses: LeadStatus[] = ['novo', 'emContato', 'qualificado', 'proposta', 'fechado', 'perdido'];

export async function atualizarLead(ctx: RequestContext, input: AtualizarLeadInput): Promise<AtualizarLeadOutput> {
  const missingEntityTables = ['lead_pipeline_metrics', 'broker_activity_metrics'];
  if (missingEntityTables.length > 0) {
    throw new AppError(
      'CONFLICT',
      `Missing entity refs for tables: ${missingEntityTables.join(', ')}`,
      409,
      {
        ruleId: 'ruleMetricRefresh',
        tables: missingEntityTables,
      },
    );
  }

  if (input.lead.leadId && input.lead.leadId !== input.leadId) {
    throw new AppError(
      'VALIDATION_ERROR',
      'leadId mismatch in atualizarLead (ruleLeadPipelineStages)',
      400,
      { ruleId: 'ruleLeadPipelineStages' },
    );
  }

  const existing = await LeadEntity.getById(ctx, input.leadId);

  const patch: LeadRecord extends infer T
    ? Partial<Omit<T, 'leadId' | 'createdAt' | 'updatedAt'>>
    : never = {
    brokerId: input.lead.brokerId,
    fullName: input.lead.fullName,
    email: input.lead.email ?? null,
    phone: input.lead.phone ?? null,
    notes: input.lead.notes ?? null,
    leadTemperature: input.lead.leadTemperature ?? null,
    source: input.lead.source ?? null,
    leadStatus: input.lead.leadStatus,
  };

  if (patch.leadStatus && !allowedLeadStatuses.includes(patch.leadStatus)) {
    throw new AppError(
      'VALIDATION_ERROR',
      'Invalid leadStatus for atualizarLead (ruleLeadPipelineStages)',
      400,
      { ruleId: 'ruleLeadPipelineStages', leadStatus: patch.leadStatus },
    );
  }

  if (patch.leadStatus && patch.leadStatus !== existing.leadStatus && !allowedLeadStatuses.includes(existing.leadStatus)) {
    throw new AppError(
      'VALIDATION_ERROR',
      'Invalid current leadStatus for atualizarLead (ruleLeadPipelineStages)',
      400,
      { ruleId: 'ruleLeadPipelineStages', leadStatus: existing.leadStatus },
    );
  }

  const lead = await ctx.data.runInTransaction(async (tx) => {
    const updated = await LeadEntity.update(ctx, { leadId: input.leadId, patch }, tx);
    await DashboardMetricEntity.create(ctx, { leadIds: [updated.leadId] }, tx);
    return updated;
  });

  return { lead };
}
