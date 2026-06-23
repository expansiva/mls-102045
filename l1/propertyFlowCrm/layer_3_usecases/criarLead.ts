/// <mls fileReference="_102045_/l1/propertyFlowCrm/layer_3_usecases/criarLead.ts" enhancement="_blank"/>
import { AppError, type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { LeadEntity, type CreateLeadInput as LeadCreateLeadInput, type LeadRecord, type LeadStatus } from '/_102045_/l1/propertyFlowCrm/layer_4_entities/leadEntity.js';

export interface CreateLeadInput {}

export interface CreateLeadOutput {
  lead: LeadRecord;
}

const allowedLeadStatuses: LeadStatus[] = ['novo', 'emContato', 'qualificado', 'proposta', 'fechado', 'perdido'];

export async function createLead(ctx: RequestContext, input: CreateLeadInput): Promise<CreateLeadOutput> {
  const missingMetricEntities = ['lead_pipeline_metrics', 'broker_activity_metrics'];
  if (missingMetricEntities.length > 0) {
    throw new AppError(
      'CONFLICT',
      'Entidades ausentes para atualizar métricas exigidas ao criar lead.',
      409,
      {
        ruleId: 'ruleMetricRefresh',
        missingTables: missingMetricEntities,
      },
    );
  }

  const leadInput = input as Partial<LeadCreateLeadInput>;
  const missingFields: string[] = [];

  if (!leadInput.brokerId) {
    missingFields.push('brokerId');
  }
  if (!leadInput.fullName) {
    missingFields.push('fullName');
  }
  if (!leadInput.leadStatus) {
    missingFields.push('leadStatus');
  }

  if (missingFields.length > 0) {
    throw new AppError('VALIDATION_ERROR', 'Campos obrigatórios ausentes para criar lead.', 400, {
      missingFields,
    });
  }

  if (leadInput.leadStatus && !allowedLeadStatuses.includes(leadInput.leadStatus)) {
    throw new AppError('VALIDATION_ERROR', 'Etapa de lead inválida.', 400, {
      ruleId: 'ruleLeadPipelineStages',
      leadStatus: leadInput.leadStatus,
    });
  }

  const lead = await ctx.data.runInTransaction(async (tx) => {
    const createdLead = await LeadEntity.create(ctx, leadInput as LeadCreateLeadInput, tx);
    return createdLead;
  });

  return { lead };
}
