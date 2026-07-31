/// <mls fileReference="_102045_/l1/buildFlowFsm/layer_2_application/usecases/queryWorkTasks.ts" enhancement="_blank"/>
import type { RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { resolveRepository } from '/_102034_/l1/server/layer_2_application/repositoryRegistry.js';
import type { IWorkTaskRepository, WorkTaskListFilter } from '/_102045_/l1/buildFlowFsm/layer_2_application/ports/workTaskRepository.js';
import type { WorkTask, WorkTaskStatus } from '/_102045_/l1/buildFlowFsm/layer_3_domain/entities/workTask.js';

export interface QueryWorkTasksInput {
  projectId?: string;
  status?: string;
  assignedWorkerId?: string;
  page?: number;
  pageSize?: number;
}

export interface WorkTaskItem {
  workTaskId: string;
  projectId: string;
  title: string;
  description?: string | null;
  assignedWorkerId: string;
  status: string;
  dueDate: string;
  completedAt?: string | null;
  cancelledAt?: string | null;
  createdAt: string;
  updatedAt: string;
  isOverdue: boolean;
}

export interface QueryWorkTasksOutput {
  workTasks: WorkTaskItem[];
  total: number;
}

const VALID_STATUSES: WorkTaskStatus[] = ['assigned', 'inProgress', 'completed', 'cancelled'];

export async function queryWorkTasks(ctx: RequestContext, input: QueryWorkTasksInput): Promise<QueryWorkTasksOutput> {
  const workTasks = resolveRepository<IWorkTaskRepository>(ctx, 'WorkTask');

  // Build filter criteria from optional inputs
  const filter: WorkTaskListFilter = {};

  if (input.projectId) {
    filter.projectId = input.projectId;
  }

  if (input.assignedWorkerId) {
    filter.assignedWorkerId = input.assignedWorkerId;
  }

  if (input.status) {
    if (!VALID_STATUSES.includes(input.status as WorkTaskStatus)) {
      throw new AppError('VALIDATION_ERROR', `Invalid status filter: ${input.status}. Must be one of assigned, inProgress, completed, cancelled.`, 400, { field: 'status', value: input.status });
    }
    filter.status = input.status as WorkTaskStatus;
  }

  // Retrieve all matching tasks
  const tasks: WorkTask[] = await workTasks.list(filter);

  // rule: taskSortingByDueDate — sort by dueDate ascending so the most urgent work appears first
  const sorted = [...tasks].sort((a, b) => {
    if (a.dueDate < b.dueDate) return -1;
    if (a.dueDate > b.dueDate) return 1;
    return 0;
  });

  const today = ctx.clock.nowIso().slice(0, 10);

  // Map each task to the output shape, computing isOverdue
  const mapped: WorkTaskItem[] = sorted.map((task) => {
    // rule: overdueTaskHighlighting — isOverdue = dueDate < today AND status not completed/cancelled
    const isOverdue = task.dueDate.slice(0, 10) < today && task.status !== 'completed' && task.status !== 'cancelled';
    return {
      workTaskId: task.workTaskId,
      projectId: task.projectId,
      title: task.title,
      description: task.description,
      assignedWorkerId: task.assignedWorkerId,
      status: task.status,
      dueDate: task.dueDate,
      completedAt: task.completedAt,
      cancelledAt: task.cancelledAt,
      createdAt: task.createdAt,
      updatedAt: task.updatedAt,
      isOverdue,
    };
  });

  // Capture total before pagination
  const total = mapped.length;

  // Apply optional pagination
  let paginated: WorkTaskItem[] = mapped;
  if (input.page !== undefined && input.pageSize !== undefined && input.page > 0 && input.pageSize > 0) {
    const offset = (input.page - 1) * input.pageSize;
    paginated = mapped.slice(offset, offset + input.pageSize);
  }

  return {
    workTasks: paginated,
    total,
  };
}

import { AppError } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
