/// <mls fileReference="_102045_/l1/buildFlowFsm/layer_2_application/usecases/viewJobCostSummary.ts" enhancement="_blank"/>
import { AppError, type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { resolveRepository } from '/_102034_/l1/server/layer_2_application/repositoryRegistry.js';
import type { IProjectRepository } from '/_102045_/l1/buildFlowFsm/layer_2_application/ports/projectRepository.js';
import type { IWorkTaskRepository } from '/_102045_/l1/buildFlowFsm/layer_2_application/ports/workTaskRepository.js';
import type { IChangeOrderRepository } from '/_102045_/l1/buildFlowFsm/layer_2_application/ports/changeOrderRepository.js';
import type { ITimeLogRepository } from '/_102045_/l1/buildFlowFsm/layer_2_application/ports/timeLogRepository.js';
import type { IMaterialUsageRepository } from '/_102045_/l1/buildFlowFsm/layer_2_application/ports/materialUsageRepository.js';
import type { Project } from '/_102045_/l1/buildFlowFsm/layer_3_domain/entities/project.js';
import type { TimeLog } from '/_102045_/l1/buildFlowFsm/layer_3_domain/entities/timeLog.js';
import type { MaterialUsage } from '/_102045_/l1/buildFlowFsm/layer_3_domain/entities/materialUsage.js';

export interface ViewJobCostSummaryInput {
  projectId: string;
}

export interface JobCostSummary {
  projectId: string;
  name: string;
  clientId: string;
  clientName: string;
  budget: number;
  status: string;
  startDate: string;
  endDate: string;
  laborCost: number;
  materialCost: number;
  changeOrderCost: number;
  totalCost: number;
  budgetVariance: number;
}

export async function viewJobCostSummary(
  ctx: RequestContext,
  input: ViewJobCostSummaryInput,
): Promise<JobCostSummary> {
  const projects = resolveRepository<IProjectRepository>(ctx, 'Project');
  const workTasks = resolveRepository<IWorkTaskRepository>(ctx, 'WorkTask');
  const changeOrders = resolveRepository<IChangeOrderRepository>(ctx, 'ChangeOrder');
  const timeLogs = resolveRepository<ITimeLogRepository>(ctx, 'TimeLog');
  const materialUsages = resolveRepository<IMaterialUsageRepository>(ctx, 'MaterialUsage');

  // Step 1: Load the Project aggregate by projectId
  const project: Project = await projects.getById(input.projectId);

  // Step 2: Apply rule jobCostingRequiresBudgetAndSchedule
  if (
    project.budget == null ||
    project.budget <= 0 ||
    !project.startDate ||
    !project.endDate
  ) {
    throw new AppError(
      'VALIDATION_ERROR',
      'jobCostingRequiresBudgetAndSchedule: the project must have a budget greater than zero and both startDate and endDate set before job cost aggregation can be returned.',
      400,
      { ruleId: 'jobCostingRequiresBudgetAndSchedule' },
    );
  }

  // Step 3: Fetch the Client master-data record via MDM facade
  let clientName = '';
  try {
    const clientEntity = await ctx.mdm.entity.get({ mdmId: project.clientId });
    const details = clientEntity.details as unknown as Record<string, unknown>;
    clientName = (details.name as string) ?? '';
  } catch {
    // MDM record not found — set clientName to empty string per outputShape (string, required)
    clientName = '';
  }

  // Step 4: Load all WorkTasks for the project, then their TimeLogs to compute laborCost
  const tasks = await workTasks.findByProject(input.projectId);
  let laborCost = 0;
  for (const task of tasks) {
    const logs: TimeLog[] = await timeLogs.listByWorkTaskId(task.workTaskId);
    for (const log of logs) {
      if (log.status !== 'voided') {
        laborCost += log.laborCost;
      }
    }
  }

  // Step 5: Load all MaterialUsage for the project to compute materialCost
  const materials: MaterialUsage[] = await materialUsages.listByProjectId(input.projectId);
  let materialCost = 0;
  for (const material of materials) {
    if (material.status !== 'voided') {
      materialCost += material.quantity * material.unitCost;
    }
  }

  // Step 6: Load all ChangeOrders for the project, filter approved, sum costAdjustment
  const orders = await changeOrders.findByProject(input.projectId);
  let changeOrderCost = 0;
  for (const order of orders) {
    if (order.status === 'approved') {
      changeOrderCost += order.costAdjustment;
    }
  }

  // Step 7: Compute totalCost
  const totalCost = laborCost + materialCost + changeOrderCost;

  // Step 8: Compute budgetVariance
  const budgetVariance = project.budget - totalCost;

  // Step 9: Assemble and return the JobCostSummary
  return {
    projectId: project.projectId,
    name: project.name,
    clientId: project.clientId,
    clientName,
    budget: project.budget,
    status: project.status,
    startDate: project.startDate,
    endDate: project.endDate,
    laborCost,
    materialCost,
    changeOrderCost,
    totalCost,
    budgetVariance,
  };
}
