/// <mls fileReference="_102045_/l1/propertyFlowCrm/layer_3_usecases/atualizarImovel.ts" enhancement="_blank"/>
import { AppError, type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { DashboardMetricEntity } from '/_102045_/l1/propertyFlowCrm/layer_4_entities/dashboardMetricEntity.js';
import {
  PropertyEntity,
  type PropertyLifecycleState,
  type PropertyRecord,
  type PropertyStatus,
  type UpdatePropertyInput,
} from '/_102045_/l1/propertyFlowCrm/layer_4_entities/propertyEntity.js';

export interface AtualizarImovelInput {
  propertyEntity: UpdatePropertyInput;
}

export interface AtualizarImovelOutput {
  propertyEntity: PropertyRecord;
}

const allowedStatuses: PropertyStatus[] = ['ativo', 'inativo', 'vendido', 'reservado'];
const lifecycleOrder: PropertyLifecycleState[] = [
  'captado',
  'publicado',
  'emNegociacao',
  'vendido',
  'arquivado',
];

function assertValidStatus(status: PropertyStatus | undefined): void {
  if (!status) {
    return;
  }
  if (!allowedStatuses.includes(status)) {
    throw new AppError(
      'VALIDATION_ERROR',
      'rulePropertyStatusLifecycle: status inválido para imóvel.',
      400,
      { ruleId: 'rulePropertyStatusLifecycle', status },
    );
  }
}

function assertLifecycleTransition(
  current: PropertyLifecycleState,
  target: PropertyLifecycleState | undefined,
): void {
  if (!target || target === current) {
    return;
  }
  const currentIndex = lifecycleOrder.indexOf(current);
  const targetIndex = lifecycleOrder.indexOf(target);
  if (currentIndex === -1 || targetIndex === -1) {
    throw new AppError(
      'VALIDATION_ERROR',
      'rulePropertyStatusLifecycle: ciclo de vida inválido para imóvel.',
      400,
      { ruleId: 'rulePropertyStatusLifecycle', current, target },
    );
  }
  if (currentIndex > targetIndex || ['vendido', 'arquivado'].includes(current)) {
    throw new AppError(
      'CONFLICT',
      'rulePropertyStatusLifecycle: transição de ciclo de vida não permitida.',
      409,
      { ruleId: 'rulePropertyStatusLifecycle', current, target },
    );
  }
}

export async function atualizarImovel(
  ctx: RequestContext,
  input: AtualizarImovelInput,
): Promise<AtualizarImovelOutput> {
  const { propertyEntity } = input;
  const current = await PropertyEntity.getById(ctx, propertyEntity.propertyId);

  assertValidStatus(propertyEntity.patch.status);
  assertLifecycleTransition(current.lifecycleState, propertyEntity.patch.lifecycleState);

  const updated = await ctx.data.runInTransaction(async (tx) => {
    const property = await PropertyEntity.update(ctx, propertyEntity, tx);
    await DashboardMetricEntity.create(ctx, { propertyIds: [property.propertyId] }, tx);
    return property;
  });

  return { propertyEntity: updated };
}
