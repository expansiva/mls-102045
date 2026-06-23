/// <mls fileReference="_102045_/l1/propertyFlowCrm/layer_3_usecases/obterVisita.ts" enhancement="_blank"/>
import { AppError, type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { VisitEntity, type VisitRecord } from '/_102045_/l1/propertyFlowCrm/layer_4_entities/visitEntity.js';

export interface ObterVisitaInput {
  visitId: string;
}

export interface ObterVisitaOutput {
  visit: VisitRecord;
}

const VALID_VISIT_STATUS: VisitRecord['status'][] = [
  'agendada',
  'confirmada',
  'reagendada',
  'realizada',
  'cancelada',
];

export async function obterVisita(
  ctx: RequestContext,
  input: ObterVisitaInput,
): Promise<ObterVisitaOutput> {
  const visit = await VisitEntity.getById(ctx, input.visitId);

  if (!VALID_VISIT_STATUS.includes(visit.status)) {
    throw new AppError(
      'VALIDATION_ERROR',
      'ruleVisitStatus: status da visita inválido.',
      400,
      { ruleId: 'ruleVisitStatus', status: visit.status },
    );
  }

  if (!visit.propertyId || !visit.leadId) {
    throw new AppError(
      'VALIDATION_ERROR',
      'ruleVisitStatus: visita deve possuir vínculo obrigatório a imóvel e lead.',
      400,
      { ruleId: 'ruleVisitStatus', propertyId: visit.propertyId, leadId: visit.leadId },
    );
  }

  return { visit };
}
