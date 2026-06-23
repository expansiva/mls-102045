/// <mls fileReference="_102045_/l1/propertyFlowCrm/layer_3_usecases/moverEtapaLead.ts" enhancement="_blank" />
import { AppError, type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { DashboardMetricEntity } from '/_102045_/l1/propertyFlowCrm/layer_4_entities/dashboardMetricEntity.js';
import { LeadEntity, type LeadRecord, type LeadStatus } from '/_102045_/l1/propertyFlowCrm/layer_4_entities/leadEntity.js';
import { LeadStageChangeEntity, type LeadStageChangeRecord } from '/_102045_/l1/propertyFlowCrm/layer_4_entities/leadStageChangeEntity.js';

export interface MoveLeadStageInput {
  leadId: string;
  toStageId: string;
}

export interface MoveLeadStageOutput {
  lead: LeadRecord;
  leadStageChange: LeadStageChangeRecord;
}

const allowedStages: LeadStatus[] = ['novo', 'emContato', 'qualificado', 'proposta', 'fechado', 'perdido'];

const missingWriteEntities = ['lead_pipeline_metrics', 'broker_activity_metrics'];

function resolveBrokerId(ctx: RequestContext): string | undefined {
  const ctxAny = ctx as { brokerId?: string; actorId?: string; userId?: string };
  return ctxAny.brokerId ?? ctxAny.actorId ?? ctxAny.userId;
}

export async function moveLeadStage(ctx: RequestContext, input: MoveLeadStageInput): Promise<MoveLeadStageOutput> {
  if (missingWriteEntities.length > 0) {
    throw new AppError(
      'CONFLICT',
      `Planning error: missing entities for writesTables: ${missingWriteEntities.join(', ')}`,
      409,
      { missingTables: missingWriteEntities }
    );
  }

  const lead = await LeadEntity.getById(ctx, input.leadId);

  if (!allowedStages.includes(input.toStageId as LeadStatus)) {
    throw new AppError(
      'VALIDATION_ERROR',
      'ruleLeadPipelineStages: etapa de destino inválida no pipeline configurado.',
      400,
      { ruleId: 'ruleLeadPipelineStages', toStageId: input.toStageId }
    );
  }

  if (lead.leadStatus === input.toStageId) {
    throw new AppError(
      'VALIDATION_ERROR',
      'ruleLeadPipelineStages: lead já está na etapa de destino.',
      400,
      { ruleId: 'ruleLeadPipelineStages', leadId: lead.leadId, stage: input.toStageId }
    );
  }

  const brokerId = resolveBrokerId(ctx);
  if (!brokerId) {
    throw new AppError(
      'VALIDATION_ERROR',
      'ruleLeadPipelineStages: responsável pela alteração não identificado.',
      400,
      { ruleId: 'ruleLeadPipelineStages' }
    );
  }

  const { updatedLead, leadStageChange } = await ctx.data.runInTransaction(async (tx) => {
    const updated = await LeadEntity.update(
      ctx,
      { leadId: lead.leadId, patch: { leadStatus: input.toStageId as LeadStatus } },
      tx
    );

    const stageChange = await LeadStageChangeEntity.create(
      ctx,
      {
        leadId: lead.leadId,
        fromStage: lead.leadStatus,
        toStage: input.toStageId,
        changedByBrokerId: brokerId,
        changedAt: new Date().toISOString()
      },
      tx
    );

    await DashboardMetricEntity.create(ctx, { leadIds: [lead.leadId] }, tx);

    return { updatedLead: updated, leadStageChange: stageChange };
  });

  return { lead: updatedLead, leadStageChange };
}
