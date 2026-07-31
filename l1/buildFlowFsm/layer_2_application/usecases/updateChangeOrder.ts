/// <mls fileReference="_102045_/l1/buildFlowFsm/layer_2_application/usecases/updateChangeOrder.ts" enhancement="_blank"/>
import { AppError, type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { resolveRepository } from '/_102034_/l1/server/layer_2_application/repositoryRegistry.js';
import type { IChangeOrderRepository } from '/_102045_/l1/buildFlowFsm/layer_2_application/ports/changeOrderRepository.js';
import type { IProjectRepository } from '/_102045_/l1/buildFlowFsm/layer_2_application/ports/projectRepository.js';
import type { ChangeOrder, ChangeOrderImpactType } from '/_102045_/l1/buildFlowFsm/layer_3_domain/entities/changeOrder.js';
import {
  validateChangeOrderInvariants,
  changeOrderImpactTypeValid,
} from '/_102045_/l1/buildFlowFsm/layer_3_domain/entities/changeOrder.js';

export interface UpdateChangeOrderInput {
  changeOrderId: string;
  title: string;
  description: string;
  impactType: ChangeOrderImpactType;
  costAdjustment: number;
  scheduleAdjustmentDays?: number;
}

export interface UpdateChangeOrderOutput {
  changeOrderId: string;
  projectId: string;
  title: string;
  description: string;
  impactType: string;
  costAdjustment: number;
  scheduleAdjustmentDays?: number;
  status: string;
  updatedAt: string;
}

const ALLOWED_IMPACT_TYPES: ChangeOrderImpactType[] = ['scope', 'cost', 'schedule'];

export async function updateChangeOrder(
  ctx: RequestContext,
  input: UpdateChangeOrderInput,
): Promise<UpdateChangeOrderOutput> {
  const changeOrders = resolveRepository<IChangeOrderRepository>(ctx, 'ChangeOrder');
  const projects = resolveRepository<IProjectRepository>(ctx, 'Project');

  // Step 1: Load the ChangeOrder by changeOrderId
  const existingOrder = await changeOrders.getById(input.changeOrderId);

  // Step 2: Validate the loaded change order has status 'draft'
  if (String(existingOrder.status) !== 'draft') {
    throw new AppError(
      'VALIDATION_ERROR',
      'Only draft change orders can be edited.',
      400,
      { currentStatus: existingOrder.status },
    );
  }

  // Step 3: Load the referenced Project by changeOrder.projectId
  const project = await projects.getById(existingOrder.projectId);

  // Step 4 — rule: operationsRequireActiveProject
  if (String(project.status) !== 'active') {
    throw new AppError(
      'VALIDATION_ERROR',
      'operationsRequireActiveProject: the project must be active to update a change order.',
      400,
      { ruleId: 'operationsRequireActiveProject', projectStatus: project.status },
    );
  }

  // Step 5 — rule: changeOrderDescriptionRequired
  if (!input.description || input.description.trim().length === 0) {
    throw new AppError(
      'VALIDATION_ERROR',
      'changeOrderDescriptionRequired: description must be non-empty after trimming whitespace.',
      400,
      { ruleId: 'changeOrderDescriptionRequired' },
    );
  }

  // Step 6: Validate impactType is one of the allowed enum values
  if (!ALLOWED_IMPACT_TYPES.includes(input.impactType)) {
    throw new AppError(
      'VALIDATION_ERROR',
      `Invalid impactType "${input.impactType}". Allowed values: scope, cost, schedule.`,
      400,
      { impactType: input.impactType },
    );
  }

  const scheduleAdjustmentDays: number | null = input.scheduleAdjustmentDays ?? null;

  // Validate domain invariant for impact type consistency
  if (!changeOrderImpactTypeValid(input.impactType, input.costAdjustment, scheduleAdjustmentDays)) {
    throw new AppError(
      'VALIDATION_ERROR',
      'impactType constraints not satisfied for the given costAdjustment and scheduleAdjustmentDays.',
      400,
      { impactType: input.impactType, costAdjustment: input.costAdjustment, scheduleAdjustmentDays },
    );
  }

  const now = ctx.clock.nowIso();

  // Step 7: Apply the mutable field updates onto the loaded ChangeOrder
  const updatedOrder: ChangeOrder = {
    ...existingOrder,
    title: input.title,
    description: input.description,
    impactType: input.impactType,
    costAdjustment: input.costAdjustment,
    scheduleAdjustmentDays,
    updatedAt: now,
  };

  // Validate full domain invariants before saving
  const invariantErrors = validateChangeOrderInvariants(updatedOrder);
  if (invariantErrors.length > 0) {
    throw new AppError(
      'VALIDATION_ERROR',
      `Change order invariant validation failed: ${invariantErrors.join('; ')}`,
      400,
      { errors: invariantErrors },
    );
  }

  // Step 9: Save the updated ChangeOrder inside a single transaction
  await ctx.data.runInTransaction(async () => {
    await changeOrders.save(updatedOrder);
  });

  // Step 10: Return the updated change order fields
  return {
    changeOrderId: updatedOrder.changeOrderId,
    projectId: updatedOrder.projectId,
    title: updatedOrder.title,
    description: updatedOrder.description,
    impactType: updatedOrder.impactType,
    costAdjustment: updatedOrder.costAdjustment,
    scheduleAdjustmentDays: updatedOrder.scheduleAdjustmentDays ?? undefined,
    status: updatedOrder.status,
    updatedAt: updatedOrder.updatedAt,
  };
}
