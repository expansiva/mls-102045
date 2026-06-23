/// <mls fileReference="_102045_/l1/propertyFlowCrm/layer_3_usecases/obterSolicitacaoAgendamentoVisita.ts" enhancement="_blank"/>
import { AppError, type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import {
  VisitScheduleRequestEntity,
  type VisitScheduleRequestRecord,
} from '/_102045_/l1/propertyFlowCrm/layer_4_entities/visitScheduleRequestEntity.js';

export interface ObterSolicitacaoAgendamentoVisitaInput {
  visitScheduleRequestId: string;
}

export interface ObterSolicitacaoAgendamentoVisitaOutput {
  visitScheduleRequest: VisitScheduleRequestRecord;
}

export async function obterSolicitacaoAgendamentoVisita(
  ctx: RequestContext,
  input: ObterSolicitacaoAgendamentoVisitaInput,
): Promise<ObterSolicitacaoAgendamentoVisitaOutput> {
  const visitScheduleRequest = await VisitScheduleRequestEntity.getById(
    ctx,
    input.visitScheduleRequestId,
  );

  if (!visitScheduleRequest.status) {
    throw new AppError(
      'VALIDATION_ERROR',
      'ruleVisitStatus: status da visita inválido.',
      400,
      { ruleId: 'ruleVisitStatus' },
    );
  }

  if (!visitScheduleRequest.property_id || !visitScheduleRequest.lead_id) {
    throw new AppError(
      'VALIDATION_ERROR',
      'ruleVisitStatus: solicitação deve estar vinculada a imóvel e lead.',
      400,
      { ruleId: 'ruleVisitStatus' },
    );
  }

  return { visitScheduleRequest };
}
