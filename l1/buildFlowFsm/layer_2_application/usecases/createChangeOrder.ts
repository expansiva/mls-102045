/// <mls fileReference="_102045_/l1/buildFlowFsm/layer_2_application/usecases/createChangeOrder.ts" enhancement="_blank"/>
import { AppError, type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { resolveRepository } from '/_102034_/l1/server/layer_2_application/repositoryRegistry.js';
import type { IChangeOrderRepository } from '/_102045_/l1/buildFlowFsm/layer_2_application/ports/changeOrderRepository.js';
import type { IProjectRepository } from '/_102045_/l1/buildFlowFsm/layer_2_application/ports/projectRepository.js';
import type { ChangeOrder, ChangeOrderImpactType } from '/_102045_/l1/buildFlowFsm/layer_3_domain/entities/changeOrder.js';
import { changeOrderImpactTypeValid } from '/_102045_/l1/buildFlowFsm/layer_3_domain/entities/changeOrder.js';
import { projectAllowsChangeOrders } from '/_102045_/l1/buildFlowFsm/layer_3_domain/entities/project.js';

export interface CreateChangeOrderInput {
  projectId: string;
  title: string;
  description: string;
  impactType: ChangeOrderImpactType;
  costAdjustment: number;
  scheduleAdjustmentDays?: number;
}

export interface CreateChangeOrderOutput {
  changeOrderId: string;
  projectId: string;
  title: string;
  description: string;
  impactType: string;
  costAdjustment: number;
  scheduleAdjustmentDays?: number;
  status: string;
  createdAt: string;
}

const VALID_IMPACT_TYPES: ChangeOrderImpactType[] = ['scope', 'cost', 'schedule'];

export async function createChangeOrder(
  ctx: RequestContext,
  input: CreateChangeOrderInput,
): Promise<CreateChangeOrderOutput> {
  // rule: changeOrderDescriptionRequired
  if (!input.description || input.description.trim().length === 0) {
    throw new AppError(
      'VALIDATION_ERROR',
      'Description is required and must not be empty or whitespace.',
      400,
      { ruleId: 'changeOrderDescriptionRequired' },
    );
  }

  if (!VALID_IMPACT_TYPES.includes(input.impactType)) {
    throw new AppError(
      'VALIDATION_ERROR',
      `impactType must be one of: scope, cost, schedule. Received: ${input.impactType}`,
      400,
      { impactType: input.impactType },
    );
  }

  const scheduleAdjustmentDays = input.scheduleAdjustmentDays ?? null;

  if (!changeOrderImpactTypeValid(input.impactType, input.costAdjustment, scheduleAdjustmentDays)) {
    if (input.impactType === 'schedule') {
      throw new AppError(
        'VALIDATION_ERROR',
        'scheduleAdjustmentDays is required and must be non-zero when impactType is schedule.',
        400,
        { impactType: input.impactType },
      );
    } else if (input.impactType === 'cost') {
      throw new AppError(
        'VALIDATION_ERROR',
        'costAdjustment must be non-zero when impactType is cost.',
        400,
        { impactType: input.impactType },
      );
    }
  }

  const projects = resolveRepository<IProjectRepository>(ctx, 'Project');
  const changeOrders = resolveRepository<IChangeOrderRepository>(ctx, 'ChangeOrder');

  const project = await projects.getById(input.projectId);
  if (!project) {
    throw new AppError('NOT_FOUND', `Project not found: ${input.projectId}`, 404, {
      projectId: input.projectId,
    });
  }

  // rule: operationsRequireActiveProject
  if (!projectAllowsChangeOrders(project)) {
    throw new AppError(
      'VALIDATION_ERROR',
      `Change orders require an active project. Project status is '${project.status}'.`,
      400,
      { ruleId: 'operationsRequireActiveProject', projectStatus: project.status },
    );
  }

  const now = ctx.clock.nowIso();
  const changeOrderId = ctx.idGenerator.newId();

  const order: ChangeOrder = {
    changeOrderId,
    projectId: input.projectId,
    title: input.title,
    description: input.description,
    impactType: input.impactType,
    costAdjustment: input.costAdjustment,
    scheduleAdjustmentDays,
    status: 'draft',
    rejectionReason: null,
    approvedAt: null,
    rejectedAt: null,
    createdAt: now,
    updatedAt: now,
  };

  await ctx.data.runInTransaction(async () => {
    await changeOrders.save(order);
  });

  return {
    changeOrderId: order.changeOrderId,
    projectId: order.projectId,
    title: order.title,
    description: order.description,
    impactType: order.impactType,
    costAdjustment: order.costAdjustment,
    scheduleAdjustmentDays: order.scheduleAdjustmentDays ?? undefined,
    status: order.status,
    createdAt: order.createdAt,
  };
}
