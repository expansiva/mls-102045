/// <mls fileReference="_102045_/l1/propertyFlowCrm/layer_3_usecases/listarNegocios.ts" enhancement="_blank"/>
import { type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { DealEntity, type DealRecord } from '/_102045_/l1/propertyFlowCrm/layer_4_entities/dealEntity.js';

export interface ListarNegociosInput {}

export interface ListarNegociosOutput {
  negocios: DealRecord[];
}

export async function listarNegocios(
  ctx: RequestContext,
  _input: ListarNegociosInput,
): Promise<ListarNegociosOutput> {
  const negocios = await DealEntity.list(ctx);
  return { negocios };
}
