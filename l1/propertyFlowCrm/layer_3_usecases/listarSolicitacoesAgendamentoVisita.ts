/// <mls fileReference="_102045_/l1/propertyFlowCrm/layer_3_usecases/listarSolicitacoesAgendamentoVisita.ts" enhancement="_blank"/>
import { type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { VisitScheduleRequestEntity, type VisitScheduleRequestRecord } from '/_102045_/l1/propertyFlowCrm/layer_4_entities/visitScheduleRequestEntity.js';

export interface ListarSolicitacoesAgendamentoVisitaInput {}

export interface ListarSolicitacoesAgendamentoVisitaOutput {
  solicitacoesAgendamentoVisita: VisitScheduleRequestRecord[];
}

export async function listarSolicitacoesAgendamentoVisita(
  ctx: RequestContext,
  _input: ListarSolicitacoesAgendamentoVisitaInput,
): Promise<ListarSolicitacoesAgendamentoVisitaOutput> {
  const solicitacoesAgendamentoVisita = await VisitScheduleRequestEntity.list(ctx);
  return { solicitacoesAgendamentoVisita };
}
