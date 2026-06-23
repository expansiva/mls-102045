/// <mls fileReference="_102045_/l1/propertyFlowCrm/layer_3_usecases/avancarEtapaNegocio.ts" enhancement="_blank" />
import { AppError, type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { DealEntity, type DealRecord, type DealStatus } from '/_102045_/l1/propertyFlowCrm/layer_4_entities/dealEntity.js';
import {
  DealStageChangeEntity,
  type DealStageChangeRecord,
} from '/_102045_/l1/propertyFlowCrm/layer_4_entities/dealStageChangeEntity.js';
import { DashboardMetricEntity } from '/_102045_/l1/propertyFlowCrm/layer_4_entities/dashboardMetricEntity.js';

export interface AvancarEtapaNegocioInput {
  dealId: string;
  currentStageId: string;
  nextStageId: string;
  brokerId: string;
}

export interface AvancarEtapaNegocioOutput {
  deal: DealRecord;
  dealStageChange: DealStageChangeRecord;
}

const validDealStages: DealStatus[] = [
  'rascunho',
  'enviada',
  'emNegociacao',
  'aceita',
  'recusada',
  'fechada',
];

export async function avancarEtapaNegocio(
  ctx: RequestContext,
  input: AvancarEtapaNegocioInput,
): Promise<AvancarEtapaNegocioOutput> {
  if (!validDealStages.includes(input.currentStageId as DealStatus)) {
    throw new AppError(
      'VALIDATION_ERROR',
      'ruleDealStages: etapa atual inválida.',
      400,
      { ruleId: 'ruleDealStages', stageId: input.currentStageId },
    );
  }

  if (!validDealStages.includes(input.nextStageId as DealStatus)) {
    throw new AppError(
      'VALIDATION_ERROR',
      'ruleDealStages: próxima etapa inválida.',
      400,
      { ruleId: 'ruleDealStages', stageId: input.nextStageId },
    );
  }

  if (input.currentStageId === input.nextStageId) {
    throw new AppError(
      'VALIDATION_ERROR',
      'ruleDealStages: a próxima etapa deve ser diferente da atual.',
      400,
      { ruleId: 'ruleDealStages', stageId: input.nextStageId },
    );
  }

  const deal = await DealEntity.getById(ctx, input.dealId);

  if (deal.brokerId !== input.brokerId) {
    throw new AppError(
      'CONFLICT',
      'ruleDealStages: corretor não autorizado para o negócio.',
      409,
      { ruleId: 'ruleDealStages', brokerId: input.brokerId },
    );
  }

  if (deal.status !== input.currentStageId) {
    throw new AppError(
      'CONFLICT',
      'ruleDealStages: etapa atual divergente do registro.',
      409,
      {
        ruleId: 'ruleDealStages',
        expectedStageId: deal.status,
        providedStageId: input.currentStageId,
      },
    );
  }

  const changedAt = new Date().toISOString();

  const { deal: updatedDeal, dealStageChange } = await ctx.data.runInTransaction(async (tx) => {
    const updated = await DealEntity.update(
      ctx,
      {
        dealId: deal.dealId,
        patch: { status: input.nextStageId as DealStatus },
      },
      tx,
    );

    const stageChange = await DealStageChangeEntity.create(
      ctx,
      {
        dealId: deal.dealId,
        fromStage: input.currentStageId,
        toStage: input.nextStageId,
        changedAt,
      },
      tx,
    );

    await DashboardMetricEntity.create(
      ctx,
      {
        propertyIds: [updated.propertyId],
        leadIds: [updated.leadId],
        dealIds: [updated.dealId],
      },
      tx,
    );

    return { deal: updated, dealStageChange: stageChange };
  });

  return { deal: updatedDeal, dealStageChange };
}
