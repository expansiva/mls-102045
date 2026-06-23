/// <mls fileReference="_102045_/l1/propertyFlowCrm/layer_3_usecases/obterImovel.ts" enhancement="_blank"/>
import { AppError, type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import {
  PropertyEntity,
  type PropertyLifecycleState,
  type PropertyRecord,
  type PropertyStatus
} from '/_102045_/l1/propertyFlowCrm/layer_4_entities/propertyEntity.js';

export interface ObterImovelInput {
  propertyId: string;
}

export interface ObterImovelOutput {
  property: PropertyRecord;
}

const validStatuses: PropertyStatus[] = ['ativo', 'inativo', 'vendido', 'reservado'];
const validLifecycleStates: PropertyLifecycleState[] = [
  'captado',
  'publicado',
  'emNegociacao',
  'vendido',
  'arquivado'
];

export async function obterImovel(
  ctx: RequestContext,
  input: ObterImovelInput
): Promise<ObterImovelOutput> {
  const property = await PropertyEntity.getById(ctx, input.propertyId);

  if (!validStatuses.includes(property.status)) {
    throw new AppError(
      'VALIDATION_ERROR',
      'rulePropertyStatusLifecycle: status do imóvel inválido.',
      400,
      { ruleId: 'rulePropertyStatusLifecycle', status: property.status }
    );
  }

  if (!validLifecycleStates.includes(property.lifecycleState)) {
    throw new AppError(
      'VALIDATION_ERROR',
      'rulePropertyStatusLifecycle: ciclo de vida do imóvel inválido.',
      400,
      { ruleId: 'rulePropertyStatusLifecycle', lifecycleState: property.lifecycleState }
    );
  }

  return { property };
}
