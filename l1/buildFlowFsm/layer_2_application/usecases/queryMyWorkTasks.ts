/// <mls fileReference="_102045_/l1/buildFlowFsm/layer_2_application/usecases/queryMyWorkTasks.ts" enhancement="_blank"/>
import type { RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { resolveRepository } from '/_102034_/l1/server/layer_2_application/repositoryRegistry.js';
import type { IWorkTaskRepository, WorkTaskListFilter } from '/_102045_/l1/buildFlowFsm/layer_2_application/ports/workTaskRepository.js';
import type { IProjectRepository } from '/_102045_/l1/buildFlowFsm/layer_2_application/ports/projectRepository.js';
import type { WorkTask, WorkTaskStatus } from '/_102045_/l1/buildFlowFsm/layer_3_domain/entities/workTask.js';
import type { Project } from '/_102045_/l1/buildFlowFsm/layer_3_domain/entities/project.js';

export interface QueryMyWorkTasksInput {
  status?: string;
  page?: number;
  pageSize?: number;
}

export interface WorkTaskListItem {
  workTaskId: string;
  projectId: string;
  projectName: string;
  title: string;
  description: string | null;
  assignedWorkerId: string;
  status: string;
  dueDate: string;
  completedAt: string | null;
  isOverdue: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface QueryMyWorkTasksOutput {
  workTasks: WorkTaskListItem[];
  total: number;
}

export async function queryMyWorkTasks(
  ctx: RequestContext,
  input: QueryMyWorkTasksInput,
): Promise<QueryMyWorkTasksOutput> {
  const workTaskRepo = resolveRepository<IWorkTaskRepository>(ctx, 'WorkTask');
  const projectRepo = resolveRepository<IProjectRepository>(ctx, 'Project');

  // rule: fieldWorkerTaskVisibility — only tasks belonging to the signed-in field worker are visible
  const resolvedWorkerId = ctx.sessionContext.actorId;
  if (!resolvedWorkerId) {
    return { workTasks: [], total: 0 };
  }

  // rule: singleTaskAssignment — each task has exactly one assignedWorkerId so the filter is unambiguous
  const filter: WorkTaskListFilter = { assignedWorkerId: resolvedWorkerId };
  if (input.status) {
    filter.status = input.status as WorkTaskStatus;
  }

  const allTasks: WorkTask[] = await workTaskRepo.list(filter);

  // rule: taskSortingByDueDate — sort by dueDate ascending so the most urgent work appears first
  const sortedTasks = [...allTasks].sort((a, b) => a.dueDate.localeCompare(b.dueDate));

  // Collect unique projectIds and bulk-fetch Project records (never one-by-one in a loop)
  const projectIds = [...new Set(sortedTasks.map((t) => t.projectId))];
  const allProjects: Project[] = await projectRepo.list();
  const projectNameMap = new Map<string, string>();
  for (const p of allProjects) {
    projectNameMap.set(p.projectId, p.name);
  }

  const now = ctx.clock.nowIso();

  // rule: overdueTaskHighlighting — compute isOverdue = dueDate < now AND status not completed/cancelled
  // rule: mobileFieldUsability — project only fields needed for the mobile field-worker view
  const enriched: WorkTaskListItem[] = sortedTasks.map((task) => {
    const isOverdue =
      task.dueDate < now &&
      String(task.status) !== 'completed' &&
      String(task.status) !== 'cancelled';

    return {
      workTaskId: task.workTaskId,
      projectId: task.projectId,
      projectName: projectNameMap.get(task.projectId) ?? '',
      title: task.title,
      description: task.description,
      assignedWorkerId: task.assignedWorkerId,
      status: task.status,
      dueDate: task.dueDate,
      completedAt: task.completedAt,
      isOverdue,
      createdAt: task.createdAt,
      updatedAt: task.updatedAt,
    };
  });

  const total = enriched.length;

  // Apply optional pagination: total is the count BEFORE pagination slicing
  let paginated = enriched;
  if (input.page !== undefined && input.pageSize !== undefined) {
    const offset = (input.page - 1) * input.pageSize;
    paginated = enriched.slice(offset, offset + input.pageSize);
  }

  return { workTasks: paginated, total };
}
