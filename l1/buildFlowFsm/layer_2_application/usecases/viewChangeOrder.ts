/// <mls fileReference="_102045_/l1/buildFlowFsm/layer_2_application/usecases/viewChangeOrder.ts" enhancement="_blank"/>
import { AppError, type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { resolveRepository } from '/_102034_/l1/server/layer_2_application/repositoryRegistry.js';
import type { IChangeOrderRepository } from '/_102045_/l1/buildFlowFsm/layer_2_application/ports/changeOrderRepository.js';
import type { IProjectRepository } from '/_102045_/l1/buildFlowFsm/layer_2_application/ports/projectRepository.js';
import type { ChangeOrder } from '/_102045_/l1/buildFlowFsm/layer_3_domain/entities/changeOrder.js';
import type { Project } from '/_102045_/l1/buildFlowFsm/layer_3_domain/entities/project.js';

export interface ViewChangeOrderInput {
  changeOrderId: string;
}

export interface ViewChangeOrderOutput {
  changeOrderId: string;
  projectId: string;
  title: string;
  description: string;
  impactType: string;
  costAdjustment: number;
  scheduleAdjustmentDays?: number;
  status: string;
  rejectionReason?: string;
  approvedAt?: string;
  rejectedAt?: string;
  createdAt: string;
  updatedAt: string;
  projectName: string;
  projectBudget: number;
  affectsJobCosting: boolean;
}

export async function viewChangeOrder(
  ctx: RequestContext,
  input: ViewChangeOrderInput,
): Promise<ViewChangeOrderOutput> {
  const changeOrders = resolveRepository<IChangeOrderRepository>(ctx, 'ChangeOrder');
  const projects = resolveRepository<IProjectRepository>(ctx, 'Project');

  // Step 1: Load the ChangeOrder aggregate by changeOrderId
  const changeOrder: ChangeOrder | null = await changeOrders.getById(input.changeOrderId);
  if (!changeOrder) {
    throw new AppError(
      'NOT_FOUND',
      `ChangeOrder not found: ${input.changeOrderId}`,
      404,
      { changeOrderId: input.changeOrderId },
    );
  }

  // Step 2: Load the parent Project aggregate
  const project: Project | null = await projects.getById(changeOrder.projectId);
  if (!project) {
    throw new AppError(
      'NOT_FOUND',
      `Project not found: ${changeOrder.projectId}`,
      404,
      { projectId: changeOrder.projectId },
    );
  }

  // rule: onlyApprovedChangeOrdersAffectCosting — only approved change orders affect job costing
  const affectsJobCosting = changeOrder.status === 'approved';

  // rule: jobCostDerivation — surface costAdjustment alongside projectBudget for read-only cost-impact review
  const output: ViewChangeOrderOutput = {
    changeOrderId: changeOrder.changeOrderId,
    projectId: changeOrder.projectId,
    title: changeOrder.title,
    description: changeOrder.description,
    impactType: changeOrder.impactType,
    costAdjustment: changeOrder.costAdjustment,
    status: changeOrder.status,
    createdAt: changeOrder.createdAt,
    updatedAt: changeOrder.updatedAt,
    projectName: project.name,
    projectBudget: project.budget,
    affectsJobCosting,
  };

  // Include optional fields only when present
  if (changeOrder.scheduleAdjustmentDays !== null) {
    output.scheduleAdjustmentDays = changeOrder.scheduleAdjustmentDays;
  }
  if (changeOrder.rejectionReason !== null) {
    output.rejectionReason = changeOrder.rejectionReason;
  }
  if (changeOrder.approvedAt !== null) {
    output.approvedAt = changeOrder.approvedAt;
  }
  if (changeOrder.rejectedAt !== null) {
    output.rejectedAt = changeOrder.rejectedAt;
  }

  return output;
}
