/// <mls fileReference="_102045_/l1/propertyFlowCrm/layer_3_usecases/listarImoveis.ts" enhancement="_blank"/>
import { type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { PropertyEntity, type PropertyRecord } from '/_102045_/l1/propertyFlowCrm/layer_4_entities/propertyEntity.js';

export interface ListarImoveisInput {}

export interface ListarImoveisOutput {
  properties: PropertyRecord[];
}

export async function listarImoveis(
  ctx: RequestContext,
  _input: ListarImoveisInput,
): Promise<ListarImoveisOutput> {
  const properties = await PropertyEntity.list(ctx);

  return { properties };
}
