/// <mls fileReference="_102045_/l1/buildFlowFsm/layer_2_application/usecases/queryChangeOrders.ts" enhancement="_blank"/>
import { AppError, type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { resolveRepository } from '/_102034_/l1/server/layer_2_application/repositoryRegistry.js';
import type { IChangeOrderRepository, ChangeOrderListFilter } from '/_102045_/l1/buildFlowFsm/layer_2_application/ports/changeOrderRepository.js';
import type { ChangeOrderStatus, ChangeOrderImpactType } from '/_102045_/l1/buildFlowFsm/layer_3_domain/entities/changeOrder.js';

export interface QueryChangeOrdersInput {
  projectId: string;
  status?: string;
  impactType?: string;
  page?: number;
  pageSize?: number;
}

export interface ChangeOrderSummary {
  changeOrderId: string;
  projectId: string;
  title: string;
  description: string;
  impactType: string;
  costAdjustment: number;
  scheduleAdjustmentDays: number | null;
  status: string;
  rejectionReason: string | null;
  approvedAt: string | null;
  rejectedAt: string | null;
  createdAt: string;
  updatedAt: string;
}

export interface QueryChangeOrdersOutput {
  changeOrders: ChangeOrderSummary[];
  total: number;
}

export async function queryChangeOrders(
  ctx: RequestContext,
  input: QueryChangeOrdersInput,
): Promise<QueryChangeOrdersOutput> {
  if (!input.projectId || input.projectId.trim().length === 0) {
    throw new AppError(
      'VALIDATION_ERROR',
      'projectId is required to query change orders.',
      400,
      { field: 'projectId' },
    );
  }

  const changeOrders = resolveRepository<IChangeOrderRepository>(ctx, 'ChangeOrder');

  const filter: ChangeOrderListFilter = { projectId: input.projectId };

  if (input.status) {
    filter.status = input.status as ChangeOrderStatus;
  }
  if (input.impactType) {
    filter.impactType = input.impactType as ChangeOrderImpactType;
  }

  const allRecords = await changeOrders.list(filter);

  // Sort by createdAt descending
  const sorted = allRecords.sort((a, b) => {
    if (a.createdAt > b.createdAt) return -1;
    if (a.createdAt < b.createdAt) return 1;
    return 0;
  });

  const total = sorted.length;

  // Apply pagination if both page and pageSize are provided
  let paginated = sorted;
  if (input.page != null && input.pageSize != null && input.page > 0 && input.pageSize > 0) {
    const offset = (input.page - 1) * input.pageSize;
    paginated = sorted.slice(offset, offset + input.pageSize);
  }

  // rule: onlyApprovedChangeOrdersAffectCosting — status is always included in the output
  // so downstream job-costing and billing consumers can distinguish approved change orders
  // (status === 'approved') from non-approved ones. Only approved change orders may affect costing.
  // rule: jobCostDerivation — costAdjustment is always included for each change order so downstream
  // job-cost derivation can sum costAdjustment across only approved change orders. This query does
  // not compute the derived job cost; it provides the raw data (status + costAdjustment) needed.
  const changeOrderSummaries: ChangeOrderSummary[] = paginated.map((rec) => ({
    changeOrderId: rec.changeOrderId,
    projectId: rec.projectId,
    title: rec.title,
    description: rec.description,
    impactType: rec.impactType,
    costAdjustment: rec.costAdjustment,
    scheduleAdjustmentDays: rec.scheduleAdjustmentDays,
    status: rec.status,
    rejectionReason: rec.rejectionReason,
    approvedAt: rec.approvedAt,
    rejectedAt: rec.rejectedAt,
    createdAt: rec.createdAt,
    updatedAt: rec.updatedAt,
  }));

  return { changeOrders: changeOrderSummaries, total };
}
