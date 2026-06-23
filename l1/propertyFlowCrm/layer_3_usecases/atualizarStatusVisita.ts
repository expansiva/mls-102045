/// <mls fileReference="_102045_/l1/propertyFlowCrm/layer_3_usecases/atualizarStatusVisita.ts" enhancement="_blank"/>
import { AppError, type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { DashboardMetricEntity } from '/_102045_/l1/propertyFlowCrm/layer_4_entities/dashboardMetricEntity.js';
import { VisitEntity, type VisitStatus } from '/_102045_/l1/propertyFlowCrm/layer_4_entities/visitEntity.js';

export interface AtualizarStatusVisitaInput {
  visitId: string;
  status: string;
}

export interface AtualizarStatusVisitaOutput {
  visitId: string;
  status: string;
}

const validVisitStatuses: VisitStatus[] = [
  'agendada',
  'confirmada',
  'reagendada',
  'realizada',
  'cancelada',
];

export async function atualizarStatusVisita(
  ctx: RequestContext,
  input: AtualizarStatusVisitaInput,
): Promise<AtualizarStatusVisitaOutput> {
  if (!validVisitStatuses.includes(input.status as VisitStatus)) {
    throw new AppError(
      'VALIDATION_ERROR',
      'ruleVisitStatus: status inválido para visita.',
      400,
      { ruleId: 'ruleVisitStatus', status: input.status },
    );
  }

  const updated = await ctx.data.runInTransaction(async (tx) => {
    const current = await VisitEntity.getById(ctx, input.visitId, tx);

    if (!current.propertyId || !current.leadId) {
      throw new AppError(
        'VALIDATION_ERROR',
        'ruleVisitStatus: visita deve ter vínculo com imóvel e lead.',
        400,
        { ruleId: 'ruleVisitStatus', visitId: input.visitId },
      );
    }

    const visit = await VisitEntity.update(
      ctx,
      {
        visitId: input.visitId,
        patch: { status: input.status as VisitStatus },
      },
      tx,
    );

    await DashboardMetricEntity.create(
      ctx,
      {
        propertyIds: [current.propertyId],
        leadIds: [current.leadId],
      },
      tx,
    );

    return visit;
  });

  return {
    visitId: updated.visitId,
    status: updated.status,
  };
}
