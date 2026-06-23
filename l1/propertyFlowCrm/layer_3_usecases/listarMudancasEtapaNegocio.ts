/// <mls fileReference="_102045_/l1/propertyFlowCrm/layer_3_usecases/listarMudancasEtapaNegocio.ts" enhancement="_blank"/>
import { type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { DealStageChangeEntity, type DealStageChangeRecord } from '/_102045_/l1/propertyFlowCrm/layer_4_entities/dealStageChangeEntity.js';

export interface ListarMudancasEtapaNegocioInput {}

export interface ListarMudancasEtapaNegocioOutput {
  mudancasEtapaNegocio: DealStageChangeRecord[];
}

export async function listarMudancasEtapaNegocio(
  ctx: RequestContext,
  _input: ListarMudancasEtapaNegocioInput,
): Promise<ListarMudancasEtapaNegocioOutput> {
  const mudancasEtapaNegocio = await DealStageChangeEntity.list(ctx);

  return { mudancasEtapaNegocio };
}
