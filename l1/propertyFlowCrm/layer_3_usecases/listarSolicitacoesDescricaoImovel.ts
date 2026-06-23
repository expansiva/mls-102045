/// <mls fileReference="_102045_/l1/propertyFlowCrm/layer_3_usecases/listarSolicitacoesDescricaoImovel.ts" enhancement="_blank"/>
import { type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import {
  PropertyDescriptionRequestEntity,
  type PropertyDescriptionRequestRecord,
} from '/_102045_/l1/propertyFlowCrm/layer_4_entities/propertyDescriptionRequestEntity.js';

export interface ListarSolicitacoesDescricaoImovelInput {}

export interface ListarSolicitacoesDescricaoImovelOutput {
  solicitacoes: PropertyDescriptionRequestRecord[];
}

export async function listarSolicitacoesDescricaoImovel(
  ctx: RequestContext,
  _input: ListarSolicitacoesDescricaoImovelInput,
): Promise<ListarSolicitacoesDescricaoImovelOutput> {
  const solicitacoes = await PropertyDescriptionRequestEntity.list(ctx);
  return { solicitacoes };
}

export const implementation = {
  functionName: 'listarSolicitacoesDescricaoImovel',
  inputTypeName: 'ListarSolicitacoesDescricaoImovelInput',
  outputTypeName: 'ListarSolicitacoesDescricaoImovelOutput',
  tsFileRef:
    '_102045_/l1/propertyFlowCrm/layer_3_usecases/listarSolicitacoesDescricaoImovel.ts',
} as const;
