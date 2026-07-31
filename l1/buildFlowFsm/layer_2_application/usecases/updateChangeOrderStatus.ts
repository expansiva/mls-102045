/// <mls fileReference="_102045_/l1/buildFlowFsm/layer_2_application/usecases/updateChangeOrderStatus.ts" enhancement="_blank"/>
import { AppError, type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { resolveRepository } from '/_102034_/l1/server/layer_2_application/repositoryRegistry.js';
import type { IChangeOrderRepository } from '/_102045_/l1/buildFlowFsm/layer_2_application/ports/changeOrderRepository.js';
import type { IProjectRepository } from '/_102045_/l1/buildFlowFsm/layer_2_application/ports/projectRepository.js';
import type { ChangeOrder, ChangeOrderStatus } from '/_102045_/l1/buildFlowFsm/layer_3_domain/entities/changeOrder.js';
import {
  canTransitionChangeOrder,
  changeOrderRequiresRejectionReason,
} from '/_102045_/l1/buildFlowFsm/layer_3_domain/entities/changeOrder.js';
import type { Project } from '/_102045_/l1/buildFlowFsm/layer_3_domain/entities/project.js';
import { projectAllowsChangeOrders } from '/_102045_/l1/buildFlowFsm/layer_3_domain/entities/project.js';

export interface UpdateChangeOrderStatusInput {
  changeOrderId: string;
  status: string;
  rejectionReason?: string;
}

export interface UpdateChangeOrderStatusOutput {
  changeOrderId: string;
  projectId: string;
  title: string;
  status: string;
  costAdjustment: number;
  scheduleAdjustmentDays?: number;
  rejectionReason?: string;
  approvedAt?: string;
  rejectedAt?: string;
  updatedAt: string;
}

export async function updateChangeOrderStatus(
  ctx: RequestContext,
  input: UpdateChangeOrderStatusInput,
): Promise<UpdateChangeOrderStatusOutput> {
  const changeOrders = resolveRepository<IChangeOrderRepository>(ctx, 'ChangeOrder');
  const projects = resolveRepository<IProjectRepository>(ctx, 'Project');

  const now = ctx.clock.nowIso();

  // Step 1: Load the change order by id
  const order: ChangeOrder | null = await changeOrders.getById(input.changeOrderId);
  if (!order) {
    throw new AppError(
      'NOT_FOUND',
      `Change order not found: ${input.changeOrderId}`,
      404,
      { changeOrderId: input.changeOrderId },
    );
  }

  // Step 2: Load the parent project
  const project: Project | null = await projects.getById(order.projectId);
  if (!project) {
    throw new AppError(
      'NOT_FOUND',
      `Project not found: ${order.projectId}`,
      404,
      { projectId: order.projectId },
    );
  }

  // Step 3: rule: operationsRequireActiveProject — the change order must belong to an active project
  if (!projectAllowsChangeOrders(project)) {
    throw new AppError(
      'VALIDATION_ERROR',
      'operationsRequireActiveProject: the change order must belong to an active project.',
      400,
      { ruleId: 'operationsRequireActiveProject', projectStatus: project.status },
    );
  }

  // Step 4: Validate the requested status transition using domain invariants
  const targetStatus = input.status as ChangeOrderStatus;
  if (!canTransitionChangeOrder(order.status, targetStatus)) {
    throw new AppError(
      'VALIDATION_ERROR',
      `Invalid status transition from "${order.status}" to "${input.status}".`,
      400,
      { currentStatus: order.status, requestedStatus: input.status },
    );
  }

  // Build the updated change order entity
  const updatedOrder: ChangeOrder = {
    ...order,
    status: targetStatus,
    updatedAt: now,
  };

  // Step 5: If status === 'rejected' — require rejectionReason, set rejectedAt, clear approvedAt
  if (targetStatus === 'rejected') {
    if (!input.rejectionReason || input.rejectionReason.trim().length === 0) {
      // rule: onlyApprovedChangeOrdersAffectCosting — rejected orders must carry a reason
      throw new AppError(
        'VALIDATION_ERROR',
        'rejectionReason is required when status is rejected.',
        400,
        { ruleId: 'onlyApprovedChangeOrdersAffectCosting' },
      );
    }
    updatedOrder.rejectionReason = input.rejectionReason;
    updatedOrder.rejectedAt = now;
    updatedOrder.approvedAt = null;
  }

  // Step 6: If status === 'approved' — set approvedAt, clear rejectedAt and rejectionReason
  if (targetStatus === 'approved') {
    updatedOrder.approvedAt = now;
    updatedOrder.rejectedAt = null;
    updatedOrder.rejectionReason = null;
    // rule: onlyApprovedChangeOrdersAffectCosting — approved status is the gate that makes this change order eligible for downstream costing/billing
    // rule: jobCostDerivation — costAdjustment and scheduleAdjustmentDays now become eligible for job cost derivation (no separate costing write here)
  }

  // Step 7: If status === 'pendingReview' — reset to review state
  if (targetStatus === 'pendingReview') {
    updatedOrder.approvedAt = null;
    updatedOrder.rejectedAt = null;
    updatedOrder.rejectionReason = null;
  }

  // Validate domain invariants on the updated entity
  if (!changeOrderRequiresRejectionReason(updatedOrder.status, updatedOrder.rejectionReason)) {
    throw new AppError(
      'VALIDATION_ERROR',
      'rejectionReason is required when status is rejected and must be empty otherwise.',
      400,
      { ruleId: 'onlyApprovedChangeOrdersAffectCosting' },
    );
  }

  // Step 9: Save the updated change order inside a transaction
  await ctx.data.runInTransaction(async () => {
    await changeOrders.save(updatedOrder);
  });

  // Step 10: Return the updated change order fields
  return {
    changeOrderId: updatedOrder.changeOrderId,
    projectId: updatedOrder.projectId,
    title: updatedOrder.title,
    status: updatedOrder.status,
    costAdjustment: updatedOrder.costAdjustment,
    scheduleAdjustmentDays: updatedOrder.scheduleAdjustmentDays ?? undefined,
    rejectionReason: updatedOrder.rejectionReason ?? undefined,
    approvedAt: updatedOrder.approvedAt ?? undefined,
    rejectedAt: updatedOrder.rejectedAt ?? undefined,
    updatedAt: updatedOrder.updatedAt,
  };
}
