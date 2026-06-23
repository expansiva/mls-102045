/// <mls fileReference="_102045_/l1/propertyFlowCrm/layer_3_usecases/criarNegocio.ts" enhancement="_blank"/>
import { AppError, type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import type { DealRecord } from '/_102045_/l1/propertyFlowCrm/layer_4_entities/dealEntity.js';

export interface CriarNegocioInput {}

export interface CriarNegocioOutput {
  dealEntity: DealRecord;
}

export async function criarNegocio(
  _ctx: RequestContext,
  _input: CriarNegocioInput,
): Promise<CriarNegocioOutput> {
  throw new AppError(
    'CONFLICT',
    'Planning error: required deal creation inputs are missing and no entity is available for broker_activity_metrics (ruleDealStages, ruleMetricRefresh).',
    409,
    {
      ruleIds: ['ruleDealStages', 'ruleMetricRefresh'],
      missingFields: ['propertyId', 'leadId', 'brokerId', 'status', 'amount'],
      missingEntities: ['broker_activity_metrics'],
    },
  );
}

export const implementation = {
  functionName: 'criarNegocio',
  inputTypeName: 'CriarNegocioInput',
  outputTypeName: 'CriarNegocioOutput',
  tsFileRef: '_102045_/l1/propertyFlowCrm/layer_3_usecases/criarNegocio.ts',
} as const;
