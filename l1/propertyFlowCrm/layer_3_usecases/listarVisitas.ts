/// <mls fileReference="_102045_/l1/propertyFlowCrm/layer_3_usecases/listarVisitas.ts" enhancement="_blank" />
import { type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { VisitEntity, type VisitRecord } from '/_102045_/l1/propertyFlowCrm/layer_4_entities/visitEntity.js';

export interface ListarVisitasInput {}

export interface ListarVisitasOutput {
  visitas: VisitRecord[];
}

export async function listarVisitas(
  ctx: RequestContext,
  _input: ListarVisitasInput
): Promise<ListarVisitasOutput> {
  const visitas = await VisitEntity.list(ctx);
  return { visitas };
}
