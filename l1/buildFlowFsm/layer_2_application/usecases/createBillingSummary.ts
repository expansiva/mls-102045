/// <mls fileReference="_102045_/l1/buildFlowFsm/layer_2_application/usecases/createBillingSummary.ts" enhancement="_blank"/>
import { AppError, type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { resolveRepository } from '/_102034_/l1/server/layer_2_application/repositoryRegistry.js';
import type { IBillingSummaryRepository } from '/_102045_/l1/buildFlowFsm/layer_2_application/ports/billingSummaryRepository.js';
import type { IProjectRepository } from '/_102045_/l1/buildFlowFsm/layer_2_application/ports/projectRepository.js';
import type { IChangeOrderRepository } from '/_102045_/l1/buildFlowFsm/layer_2_application/ports/changeOrderRepository.js';
import type { IWorkTaskRepository } from '/_102045_/l1/buildFlowFsm/layer_2_application/ports/workTaskRepository.js';
import type { ITimeLogRepository } from '/_102045_/l1/buildFlowFsm/layer_2_application/ports/timeLogRepository.js';
import type { IMaterialUsageRepository } from '/_102045_/l1/buildFlowFsm/layer_2_application/ports/materialUsageRepository.js';
import type { BillingSummary } from '/_102045_/l1/buildFlowFsm/layer_3_domain/entities/billingSummary.js';
import {
  billingSummaryPeriodIsValid,
  recomputeBillingSummaryTotal,
  validateBillingSummaryInvariants,
} from '/_102045_/l1/buildFlowFsm/layer_3_domain/entities/billingSummary.js';

export interface CreateBillingSummaryInput {
  projectId: string;
  periodStart: string;
  periodEnd: string;
}

export interface CreateBillingSummaryOutput {
  billingSummaryId: string;
  projectId: string;
  status: string;
  periodStart: string;
  periodEnd: string;
  laborCost: number;
  materialCost: number;
  changeOrderCost: number;
  totalCost: number;
  createdAt: string;
  updatedAt: string;
}

export async function createBillingSummary(
  ctx: RequestContext,
  input: CreateBillingSummaryInput,
): Promise<CreateBillingSummaryOutput> {
  const billingSummaries = resolveRepository<IBillingSummaryRepository>(ctx, 'BillingSummary');
  const projects = resolveRepository<IProjectRepository>(ctx, 'Project');
  const changeOrders = resolveRepository<IChangeOrderRepository>(ctx, 'ChangeOrder');
  const workTasks = resolveRepository<IWorkTaskRepository>(ctx, 'WorkTask');
  const timeLogs = resolveRepository<ITimeLogRepository>(ctx, 'TimeLog');
  const materialUsages = resolveRepository<IMaterialUsageRepository>(ctx, 'MaterialUsage');

  // Step 1: Validate the project exists
  await projects.getById(input.projectId);

  // Step 2: Validate period ordering
  if (!billingSummaryPeriodIsValid({ periodStart: input.periodStart, periodEnd: input.periodEnd })) {
    throw new AppError(
      'VALIDATION_ERROR',
      'periodEnd must be on or after periodStart.',
      400,
      { ruleId: 'billingSummaryPeriodIsValid' },
    );
  }

  // Step 3: Load all work tasks for the project
  const tasks = await workTasks.findByProject(input.projectId);

  // Step 4: For each work task, load time logs and sum labor cost for non-voided entries within the period
  let laborCost = 0;
  for (const task of tasks) {
    const logs = await timeLogs.listByWorkTaskId(task.workTaskId);
    for (const log of logs) {
      if (
        String(log.status) !== 'voided' &&
        log.logDate >= input.periodStart &&
        log.logDate <= input.periodEnd
      ) {
        laborCost += log.laborCost;
      }
    }
  }

  // Step 5: Load material usage for the project and sum cost for non-voided entries within the period
  const usages = await materialUsages.listByProjectId(input.projectId);
  let materialCost = 0;
  for (const usage of usages) {
    if (
      String(usage.status) !== 'voided' &&
      usage.usageDate >= input.periodStart &&
      usage.usageDate <= input.periodEnd
    ) {
      materialCost += usage.quantity * usage.unitCost;
    }
  }

  // Step 6: Load change orders and sum costAdjustment for approved ones only
  // rule: onlyApprovedChangeOrdersAffectCosting — pending, draft, and rejected change orders are excluded from costing
  const orders = await changeOrders.findByProject(input.projectId);
  let changeOrderCost = 0;
  for (const order of orders) {
    if (String(order.status) === 'approved') {
      changeOrderCost += order.costAdjustment;
    }
  }

  // Step 7: Compute total cost
  const totalCost = recomputeBillingSummaryTotal(laborCost, materialCost, changeOrderCost);

  // Step 8: Build the billing summary aggregate
  const now = ctx.clock.nowIso();
  const billingSummaryId = ctx.idGenerator.newId();
  const summary: BillingSummary = {
    billingSummaryId,
    projectId: input.projectId,
    status: 'draft',
    periodStart: input.periodStart,
    periodEnd: input.periodEnd,
    laborCost,
    materialCost,
    changeOrderCost,
    totalCost,
    sharedAt: null,
    createdAt: now,
    updatedAt: now,
  };

  // Validate domain invariants before persisting
  const invariantErrors = validateBillingSummaryInvariants(summary);
  if (invariantErrors.length > 0) {
    throw new AppError(
      'VALIDATION_ERROR',
      `BillingSummary invariant violations: ${invariantErrors.join('; ')}`,
      400,
      { errors: invariantErrors },
    );
  }

  // Step 9: Persist inside a single transaction
  await ctx.data.runInTransaction(async () => {
    await billingSummaries.save(summary);
  });

  // Step 10: Return the client-facing projection
  // rule: billingSummaryClientFacing — output excludes costCode and any internal cost-code detail
  return {
    billingSummaryId: summary.billingSummaryId,
    projectId: summary.projectId,
    status: summary.status,
    periodStart: summary.periodStart,
    periodEnd: summary.periodEnd,
    laborCost: summary.laborCost,
    materialCost: summary.materialCost,
    changeOrderCost: summary.changeOrderCost,
    totalCost: summary.totalCost,
    createdAt: summary.createdAt,
    updatedAt: summary.updatedAt,
  };
}
