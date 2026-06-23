/// <mls fileReference="_102045_/l1/propertyFlowCrm/layer_3_usecases/listarMudancasEtapaLead.ts" enhancement="_blank"/>
import { type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { LeadStageChangeEntity, type LeadStageChangeRecord } from '/_102045_/l1/propertyFlowCrm/layer_4_entities/leadStageChangeEntity.js';

export interface ListarMudancasEtapaLeadInput {}

export interface ListarMudancasEtapaLeadOutput {
  leadStageChanges: LeadStageChangeRecord[];
}

export async function listarMudancasEtapaLead(
  ctx: RequestContext,
  _input: ListarMudancasEtapaLeadInput
): Promise<ListarMudancasEtapaLeadOutput> {
  const leadStageChanges = await LeadStageChangeEntity.list(ctx);
  return { leadStageChanges };
}
