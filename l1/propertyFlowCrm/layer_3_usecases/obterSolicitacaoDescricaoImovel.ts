/// <mls fileReference="_102045_/l1/propertyFlowCrm/layer_3_usecases/obterSolicitacaoDescricaoImovel.ts" enhancement="_blank" />
import { type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import {
  PropertyDescriptionRequestEntity,
  type PropertyDescriptionRequestRecord,
} from '/_102045_/l1/propertyFlowCrm/layer_4_entities/propertyDescriptionRequestEntity.js';

export interface ObterSolicitacaoDescricaoImovelInput {
  propertyDescriptionRequestId: string;
}

export interface ObterSolicitacaoDescricaoImovelOutput {
  propertyDescriptionRequest: PropertyDescriptionRequestRecord;
}

export async function obterSolicitacaoDescricaoImovel(
  ctx: RequestContext,
  input: ObterSolicitacaoDescricaoImovelInput,
): Promise<ObterSolicitacaoDescricaoImovelOutput> {
  const propertyDescriptionRequest = await PropertyDescriptionRequestEntity.getById(
    ctx,
    input.propertyDescriptionRequestId,
  );

  return { propertyDescriptionRequest };
}
