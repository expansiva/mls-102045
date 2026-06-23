/// <mls fileReference="_102045_/l1/propertyFlowCrm/layer_3_usecases/criarImovel.ts" enhancement="_blank"/>
import { AppError, type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import {
  PropertyEntity,
  type CreatePropertyInput,
  type PropertyLifecycleState,
  type PropertyRecord,
  type PropertyStatus,
} from '/_102045_/l1/propertyFlowCrm/layer_4_entities/propertyEntity.js';
import { DashboardMetricEntity } from '/_102045_/l1/propertyFlowCrm/layer_4_entities/dashboardMetricEntity.js';

export interface CriarImovelInput {}

export interface CriarImovelOutput {
  property: PropertyRecord;
}

const VALID_STATUS: PropertyStatus[] = ['ativo', 'inativo', 'vendido', 'reservado'];
const VALID_LIFECYCLE: PropertyLifecycleState[] = ['captado', 'publicado', 'emNegociacao', 'vendido', 'arquivado'];

export async function criarImovel(ctx: RequestContext, input: CriarImovelInput): Promise<CriarImovelOutput> {
  const payload = input as Partial<CreatePropertyInput>;
  const missingFields: string[] = [];

  if (!payload.brokerId) missingFields.push('brokerId');
  if (!payload.address) missingFields.push('address');
  if (!payload.propertyType) missingFields.push('propertyType');
  if (payload.price === undefined || payload.price === null) missingFields.push('price');
  if (!payload.status) missingFields.push('status');
  if (!payload.lifecycleState) missingFields.push('lifecycleState');

  if (missingFields.length > 0) {
    throw new AppError(
      'VALIDATION_ERROR',
      'rulePropertyStatusLifecycle: campos obrigatórios do imóvel ausentes para criação.',
      400,
      { ruleId: 'rulePropertyStatusLifecycle', missingFields },
    );
  }

  if (payload.status && !VALID_STATUS.includes(payload.status)) {
    throw new AppError(
      'VALIDATION_ERROR',
      'rulePropertyStatusLifecycle: status inválido para imóvel.',
      400,
      { ruleId: 'rulePropertyStatusLifecycle', status: payload.status },
    );
  }

  if (payload.lifecycleState && !VALID_LIFECYCLE.includes(payload.lifecycleState)) {
    throw new AppError(
      'VALIDATION_ERROR',
      'rulePropertyStatusLifecycle: estado de ciclo de vida inválido.',
      400,
      { ruleId: 'rulePropertyStatusLifecycle', lifecycleState: payload.lifecycleState },
    );
  }

  if (payload.status === 'vendido' && payload.lifecycleState !== 'vendido') {
    throw new AppError(
      'VALIDATION_ERROR',
      'rulePropertyStatusLifecycle: imóvel vendido deve estar no estado de ciclo de vida vendido.',
      400,
      { ruleId: 'rulePropertyStatusLifecycle' },
    );
  }

  const property = await ctx.data.runInTransaction(async (tx) => {
    const created = await PropertyEntity.create(ctx, payload as CreatePropertyInput, tx);
    await DashboardMetricEntity.create(
      ctx,
      {
        propertyIds: [created.propertyId],
      },
      tx,
    );
    return created;
  });

  return { property };
}
