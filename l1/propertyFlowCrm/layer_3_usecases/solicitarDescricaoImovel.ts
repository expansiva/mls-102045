/// <mls fileReference="_102045_/l1/propertyFlowCrm/layer_3_usecases/solicitarDescricaoImovel.ts" enhancement="_blank"/>
import { AppError, type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import {
  DashboardMetricEntity,
  type DashboardMetricUpdateRecord,
} from '/_102045_/l1/propertyFlowCrm/layer_4_entities/dashboardMetricEntity.js';
import {
  PropertyDescriptionRequestEntity,
  type PropertyDescriptionRequestRecord,
  type PropertyDescriptionRequestReviewStatus,
} from '/_102045_/l1/propertyFlowCrm/layer_4_entities/propertyDescriptionRequestEntity.js';
import {
  PropertyEntity,
  type PropertyRecord,
} from '/_102045_/l1/propertyFlowCrm/layer_4_entities/propertyEntity.js';

export interface SolicitarDescricaoImovelInput {
  propertyId: string;
  brokerId: string;
}

export interface SolicitarDescricaoImovelOutput {
  propertyDescriptionRequestId: string;
  status: string;
}

const buildBulletsFromProperty = (property: PropertyRecord): string => {
  const bullets: string[] = [];
  bullets.push(`Tipo: ${property.propertyType}`);
  bullets.push(`Endereço: ${property.address}`);
  bullets.push(`Preço: ${property.price}`);
  if (property.features) {
    bullets.push(`Detalhes: ${property.features}`);
  }
  return bullets.join('\n');
};

export async function solicitarDescricaoImovel(
  ctx: RequestContext,
  input: SolicitarDescricaoImovelInput,
): Promise<SolicitarDescricaoImovelOutput> {
  const property = await PropertyEntity.getById(ctx, input.propertyId);

  if (!property || property.propertyId !== input.propertyId) {
    throw new AppError(
      'VALIDATION_ERROR',
      'ruleAiHumanReview: imóvel não encontrado para solicitar descrição.',
      400,
      { ruleId: 'ruleAiHumanReview', propertyId: input.propertyId },
    );
  }

  if (property.brokerId !== input.brokerId) {
    throw new AppError(
      'CONFLICT',
      'ruleAiHumanReview: corretor não autorizado para o imóvel informado.',
      409,
      { ruleId: 'ruleAiHumanReview', propertyId: input.propertyId, brokerId: input.brokerId },
    );
  }

  const bullets = buildBulletsFromProperty(property);
  const reviewStatus: PropertyDescriptionRequestReviewStatus = 'pendente';

  const createdRequest = await ctx.data.runInTransaction(async (tx) => {
    const request = await PropertyDescriptionRequestEntity.create(
      ctx,
      {
        propertyId: input.propertyId,
        bullets,
        reviewStatus,
        aiDescription: null,
        humanReviewNotes: null,
      },
      tx,
    );

    await DashboardMetricEntity.create(
      ctx,
      { propertyIds: [input.propertyId] },
      tx,
    );

    return request;
  });

  return {
    propertyDescriptionRequestId: createdRequest.id,
    status: createdRequest.review_status,
  };
}
