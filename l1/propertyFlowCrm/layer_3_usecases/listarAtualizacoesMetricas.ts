/// <mls fileReference="_102045_/l1/propertyFlowCrm/layer_3_usecases/listarAtualizacoesMetricas.ts" enhancement="_blank"/>
import { type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { DashboardMetricEntity, type DashboardMetricUpdateRecord } from '/_102045_/l1/propertyFlowCrm/layer_4_entities/dashboardMetricEntity.js';

export interface ListarAtualizacoesMetricasInput {}

export interface ListarAtualizacoesMetricasOutput {
  atualizacoes: DashboardMetricUpdateRecord[];
}

export async function listarAtualizacoesMetricas(
  ctx: RequestContext,
  input: ListarAtualizacoesMetricasInput,
): Promise<ListarAtualizacoesMetricasOutput> {
  void input;
  const atualizacoes = await DashboardMetricEntity.list(ctx);
  return { atualizacoes };
}
