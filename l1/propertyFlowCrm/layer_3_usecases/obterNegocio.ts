/// <mls fileReference="_102045_/l1/propertyFlowCrm/layer_3_usecases/obterNegocio.ts" enhancement="_blank"/>
import { type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { DealEntity, type DealRecord } from '/_102045_/l1/propertyFlowCrm/layer_4_entities/dealEntity.js';

export interface ObterNegocioInput {
  dealId: string;
}

export interface ObterNegocioOutput {
  deal: DealRecord;
}

export async function obterNegocio(
  ctx: RequestContext,
  input: ObterNegocioInput
): Promise<ObterNegocioOutput> {
  const deal = await DealEntity.getById(ctx, input.dealId);
  return { deal };
}
