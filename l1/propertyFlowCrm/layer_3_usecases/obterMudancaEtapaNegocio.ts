/// <mls fileReference="_102045_/l1/propertyFlowCrm/layer_3_usecases/obterMudancaEtapaNegocio.ts" enhancement="_blank"/>
import { AppError, type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { DealStageChangeEntity, type DealStageChangeRecord } from '/_102045_/l1/propertyFlowCrm/layer_4_entities/dealStageChangeEntity.js';

export interface ObterMudancaEtapaNegocioInput {
  dealStageChangeId: string;
}

export interface ObterMudancaEtapaNegocioOutput {
  dealStageChange: DealStageChangeRecord;
}

export async function obterMudancaEtapaNegocio(
  ctx: RequestContext,
  input: ObterMudancaEtapaNegocioInput,
): Promise<ObterMudancaEtapaNegocioOutput> {
  if (!input.dealStageChangeId) {
    throw new AppError('VALIDATION_ERROR', 'ruleDealStages: dealStageChangeId é obrigatório.', 400, {
      ruleId: 'ruleDealStages',
    });
  }

  const dealStageChange = await DealStageChangeEntity.getById(ctx, input.dealStageChangeId);

  if (!dealStageChange) {
    throw new AppError(
      'CONFLICT',
      'Mudança de etapa do negócio não encontrada.',
      409,
      { dealStageChangeId: input.dealStageChangeId },
    );
  }

  return { dealStageChange };
}
