/// <mls fileReference="_102045_/l1/buildFlowFsm/layer_2_application/usecases/viewDashboard.ts" enhancement="_blank"/>
import type { RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { resolveRepository } from '/_102034_/l1/server/layer_2_application/repositoryRegistry.js';
import type { IProjectRepository } from '/_102045_/l1/buildFlowFsm/layer_2_application/ports/projectRepository.js';
import type { IWorkTaskRepository } from '/_102045_/l1/buildFlowFsm/layer_2_application/ports/workTaskRepository.js';
import type { IChangeOrderRepository } from '/_102045_/l1/buildFlowFsm/layer_2_application/ports/changeOrderRepository.js';
import type { ITimeLogRepository } from '/_102045_/l1/buildFlowFsm/layer_2_application/ports/timeLogRepository.js';
import type { IMaterialUsageRepository } from '/_102045_/l1/buildFlowFsm/layer_2_application/ports/materialUsageRepository.js';
import type { Project, ProjectStatus } from '/_102045_/l1/buildFlowFsm/layer_3_domain/entities/project.js';
import type { WorkTask } from '/_102045_/l1/buildFlowFsm/layer_3_domain/entities/workTask.js';
import type { ChangeOrder } from '/_102045_/l1/buildFlowFsm/layer_3_domain/entities/changeOrder.js';
import type { TimeLog } from '/_102045_/l1/buildFlowFsm/layer_3_domain/entities/timeLog.js';
import type { MaterialUsage } from '/_102045_/l1/buildFlowFsm/layer_3_domain/entities/materialUsage.js';

export interface ViewDashboardInput {
  status?: string;
  page?: number;
  pageSize?: number;
}

export interface DashboardProject {
  projectId: string;
  name: string;
  clientId: string;
  clientName: string;
  budget: number;
  startDate: string;
  endDate: string;
  status: string;
  actualCost: number;
  budgetVariance: number;
  upcomingTaskCount: number;
  overdueTaskCount: number;
}

export interface ViewDashboardOutput {
  projects: DashboardProject[];
  total: number;
}

export async function viewDashboard(ctx: RequestContext, input: ViewDashboardInput): Promise<ViewDashboardOutput> {
  const projectRepo = resolveRepository<IProjectRepository>(ctx, 'Project');
  const workTaskRepo = resolveRepository<IWorkTaskRepository>(ctx, 'WorkTask');
  const changeOrderRepo = resolveRepository<IChangeOrderRepository>(ctx, 'ChangeOrder');
  const timeLogRepo = resolveRepository<ITimeLogRepository>(ctx, 'TimeLog');
  const materialUsageRepo = resolveRepository<IMaterialUsageRepository>(ctx, 'MaterialUsage');

  // rule: dashboardShowsActiveProjects — when no status filter is provided, default to 'active'
  const statusFilter: ProjectStatus = (input.status as ProjectStatus) ?? 'active';
  const page = Math.max(1, input.page ?? 1);
  const pageSize = Math.max(1, input.pageSize ?? 20);

  // Step 3: List projects filtered by status
  const allProjects = await projectRepo.list({ status: statusFilter });
  const total = allProjects.length;

  // Paginate in memory (port does not support native pagination)
  const offset = (page - 1) * pageSize;
  const pagedProjects: Project[] = allProjects.slice(offset, offset + pageSize);

  if (pagedProjects.length === 0) {
    return { projects: [], total };
  }

  // Step 4: Hydrate Client master data in bulk via MDM
  const clientIds = [...new Set(pagedProjects.map((p) => p.clientId).filter((id) => id.length > 0))];
  const clientNameMap = new Map<string, string>();
  if (clientIds.length > 0) {
    const clients = await ctx.mdm.collection.getMany({ mdmIds: clientIds });
    for (const client of clients) {
      clientNameMap.set(client.mdmId, client.index.name ?? '');
    }
  }

  // Step 5: Collect projectIds
  const projectIds = pagedProjects.map((p) => p.projectId);
  const today = ctx.clock.nowIso().slice(0, 10);

  // Step 6: List WorkTasks per project and group by projectId
  const workTasksByProject = new Map<string, WorkTask[]>();
  const workTaskIdToProjectId = new Map<string, string>();
  const allWorkTaskIds: string[] = [];
  for (const projectId of projectIds) {
    const tasks = await workTaskRepo.findByProject(projectId);
    workTasksByProject.set(projectId, tasks);
    for (const task of tasks) {
      allWorkTaskIds.push(task.workTaskId);
      workTaskIdToProjectId.set(task.workTaskId, projectId);
    }
  }

  // Step 7: List TimeLogs per workTaskId, sum laborCost where status='posted'
  const laborCostByProject = new Map<string, number>();
  for (const workTaskId of allWorkTaskIds) {
    const logs: TimeLog[] = await timeLogRepo.listByWorkTaskId(workTaskId);
    for (const log of logs) {
      if (String(log.status) === 'posted') {
        const pid = workTaskIdToProjectId.get(workTaskId);
        if (pid) {
          laborCostByProject.set(pid, (laborCostByProject.get(pid) ?? 0) + log.laborCost);
        }
      }
    }
  }

  // Step 8: List MaterialUsage per project, sum quantity*unitCost where status='posted'
  const materialCostByProject = new Map<string, number>();
  for (const projectId of projectIds) {
    const usages: MaterialUsage[] = await materialUsageRepo.listByProjectId(projectId);
    for (const usage of usages) {
      if (String(usage.status) === 'posted') {
        materialCostByProject.set(projectId, (materialCostByProject.get(projectId) ?? 0) + usage.quantity * usage.unitCost);
      }
    }
  }

  // Step 9: List ChangeOrders per project, sum costAdjustment where status='approved'
  const changeOrderCostByProject = new Map<string, number>();
  for (const projectId of projectIds) {
    const orders: ChangeOrder[] = await changeOrderRepo.findByProject(projectId);
    for (const order of orders) {
      if (String(order.status) === 'approved') {
        changeOrderCostByProject.set(projectId, (changeOrderCostByProject.get(projectId) ?? 0) + order.costAdjustment);
      }
    }
  }

  // Steps 10-15: Assemble dashboard project records
  const dashboardProjects: DashboardProject[] = pagedProjects.map((project) => {
    const laborCost = laborCostByProject.get(project.projectId) ?? 0;
    const materialCost = materialCostByProject.get(project.projectId) ?? 0;
    const approvedChangeOrderCost = changeOrderCostByProject.get(project.projectId) ?? 0;

    // rule: jobCostingRequiresBudgetAndSchedule — projects missing budget (<=0) or missing startDate/endDate
    // are excluded from job-costing signals: actualCost and budgetVariance are set to 0
    const hasBudgetAndSchedule = project.budget > 0 && !!project.startDate && !!project.endDate;
    const actualCost = hasBudgetAndSchedule ? laborCost + materialCost + approvedChangeOrderCost : 0;
    const budgetVariance = hasBudgetAndSchedule ? project.budget - actualCost : 0;

    // Steps 13-14: Count upcoming and overdue tasks
    const tasks = workTasksByProject.get(project.projectId) ?? [];
    const upcomingTaskCount = tasks.filter(
      (t) => (String(t.status) === 'assigned' || String(t.status) === 'inProgress') && t.dueDate >= today,
    ).length;
    const overdueTaskCount = tasks.filter(
      (t) => (String(t.status) === 'assigned' || String(t.status) === 'inProgress') && t.dueDate < today,
    ).length;

    return {
      projectId: project.projectId,
      name: project.name,
      clientId: project.clientId,
      clientName: clientNameMap.get(project.clientId) ?? '',
      budget: project.budget,
      startDate: project.startDate,
      endDate: project.endDate,
      status: project.status,
      actualCost,
      budgetVariance,
      upcomingTaskCount,
      overdueTaskCount,
    };
  });

  return { projects: dashboardProjects, total };
}
