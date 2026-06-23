/// <mls fileReference="_102045_/l1/propertyFlowCrm/layer_3_usecases/obterSolicitacaoQualificacaoLead.ts" enhancement="_blank"/>
import { AppError, type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { LeadQualificationRequestEntity, type LeadQualificationRequestRecord } from '/_102045_/l1/propertyFlowCrm/layer_4_entities/leadQualificationRequestEntity.js';

export interface ObterSolicitacaoQualificacaoLeadInput {
  leadQualificationRequestId: string;
}

export interface ObterSolicitacaoQualificacaoLeadOutput {
  leadQualificationRequest: LeadQualificationRequestRecord;
}

export async function obterSolicitacaoQualificacaoLead(
  ctx: RequestContext,
  input: ObterSolicitacaoQualificacaoLeadInput
): Promise<ObterSolicitacaoQualificacaoLeadOutput> {
  const leadQualificationRequest = await LeadQualificationRequestEntity.getById(
    ctx,
    input.leadQualificationRequestId
  );

  if (leadQualificationRequest.ai_generated && !leadQualificationRequest.review_status) {
    throw new AppError(
      'VALIDATION_ERROR',
      'ruleAiHumanReview: solicitação gerada por IA deve permitir revisão manual.',
      400,
      { ruleId: 'ruleAiHumanReview' }
    );
  }

  return { leadQualificationRequest };
}
