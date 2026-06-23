/// <mls fileReference="_102045_/l1/propertyFlowCrm/layer_3_usecases/obterMudancaEtapaLead.ts" enhancement="_blank"/>
import { type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { LeadStageChangeEntity, type LeadStageChangeRecord } from '/_102045_/l1/propertyFlowCrm/layer_4_entities/leadStageChangeEntity.js';

export interface ObterMudancaEtapaLeadInput {
  leadStageChangeId: string;
}

export interface ObterMudancaEtapaLeadOutput {
  leadStageChange: LeadStageChangeRecord;
}

export async function obterMudancaEtapaLead(
  ctx: RequestContext,
  input: ObterMudancaEtapaLeadInput,
): Promise<ObterMudancaEtapaLeadOutput> {
  const leadStageChange = await LeadStageChangeEntity.getById(ctx, input.leadStageChangeId);
  return { leadStageChange };
}

export const implementation = {
  functionName: 'obterMudancaEtapaLead',
  inputTypeName: 'ObterMudancaEtapaLeadInput',
  outputTypeName: 'ObterMudancaEtapaLeadOutput',
  tsFileRef: '_102045_/l1/propertyFlowCrm/layer_3_usecases/obterMudancaEtapaLead.ts',
} as const;
