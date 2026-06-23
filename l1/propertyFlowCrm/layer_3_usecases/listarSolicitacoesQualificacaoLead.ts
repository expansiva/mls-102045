/// <mls fileReference="_102045_/l1/propertyFlowCrm/layer_3_usecases/listarSolicitacoesQualificacaoLead.ts" enhancement="_blank"/>
import { type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import {
  LeadQualificationRequestEntity,
  type LeadQualificationRequestRecord,
} from '/_102045_/l1/propertyFlowCrm/layer_4_entities/leadQualificationRequestEntity.js';

export interface ListarSolicitacoesQualificacaoLeadInput {}

export interface ListarSolicitacoesQualificacaoLeadOutput {
  solicitacoes: LeadQualificationRequestRecord[];
}

export async function listarSolicitacoesQualificacaoLead(
  ctx: RequestContext,
  _input: ListarSolicitacoesQualificacaoLeadInput,
): Promise<ListarSolicitacoesQualificacaoLeadOutput> {
  const solicitacoes = await LeadQualificationRequestEntity.list(ctx);

  return { solicitacoes };
}

export const implementation = {
  functionName: 'listarSolicitacoesQualificacaoLead',
  inputTypeName: 'ListarSolicitacoesQualificacaoLeadInput',
  outputTypeName: 'ListarSolicitacoesQualificacaoLeadOutput',
  tsFileRef:
    '_102045_/l1/propertyFlowCrm/layer_3_usecases/listarSolicitacoesQualificacaoLead.ts',
} as const;
