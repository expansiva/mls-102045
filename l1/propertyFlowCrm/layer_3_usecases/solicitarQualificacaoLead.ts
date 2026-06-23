/// <mls fileReference="_102045_/l1/propertyFlowCrm/layer_3_usecases/solicitarQualificacaoLead.ts" enhancement="_blank"/>
import { AppError, type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { DashboardMetricEntity } from '/_102045_/l1/propertyFlowCrm/layer_4_entities/dashboardMetricEntity.js';
import { LeadEntity } from '/_102045_/l1/propertyFlowCrm/layer_4_entities/leadEntity.js';
import {
  LeadQualificationRequestEntity,
  type LeadTemperature,
} from '/_102045_/l1/propertyFlowCrm/layer_4_entities/leadQualificationRequestEntity.js';

export interface SolicitarQualificacaoLeadInput {
  leadId: string;
}

export interface SolicitarQualificacaoLeadOutput {
  leadQualificationRequestId: string;
}

const leadTemperatureOptions: LeadTemperature[] = ['frio', 'morno', 'quente'];

export async function solicitarQualificacaoLead(
  ctx: RequestContext,
  input: SolicitarQualificacaoLeadInput,
): Promise<SolicitarQualificacaoLeadOutput> {
  const lead = await LeadEntity.getById(ctx, input.leadId);
  const leadTemperature = lead.leadTemperature as LeadTemperature | undefined | null;

  if (!leadTemperature || !leadTemperatureOptions.includes(leadTemperature)) {
    throw new AppError(
      'VALIDATION_ERROR',
      'ruleAiHumanReview: lead deve possuir temperatura válida para solicitar qualificação por IA.',
      400,
      { ruleId: 'ruleAiHumanReview', leadId: input.leadId },
    );
  }

  const request = await ctx.data.runInTransaction(async (tx) => {
    const createdRequest = await LeadQualificationRequestEntity.create(
      ctx,
      {
        leadId: input.leadId,
        leadTemperature,
        followUpSuggestion: null,
        aiGenerated: true,
        reviewStatus: 'pendente',
      },
      tx,
    );

    await DashboardMetricEntity.create(
      ctx,
      {
        leadIds: [input.leadId],
      },
      tx,
    );

    return createdRequest;
  });

  return {
    leadQualificationRequestId: request.lead_qualification_request_id,
  };
}
