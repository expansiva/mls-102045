/// <mls fileReference="_102045_/l4/buildFlowFsm/contracts/myTasksWorkspace.listMyWorkTasks.defs.ts" enhancement="_blank"/>

// GENERATED MECHANICALLY from _102045_/l4/buildFlowFsm/workspaces/myTasksWorkspace.defs.ts — DO NOT EDIT.
// Contract of record: bffCall listMyWorkTasks (query); Output kind=paginated; route buildFlowFsm.myTasksWorkspace.listMyWorkTasks.

export interface ListMyWorkTasksInput {
  assignedWorkerId: string;
  status?: string;
  page?: number;
  pageSize?: number;
}

export interface ListMyWorkTasksWorkTasksItem {
  workTaskId: string;
  projectId: string;
  projectName: string;
  title: string;
  description: string;
  status: string;
  dueDate: string;
  isOverdue: boolean;
  completedAt: string;
}

export interface ListMyWorkTasksOutput {
  workTasks: ListMyWorkTasksWorkTasksItem[];
  total: number;
}

export const listMyWorkTasksRoute = 'buildFlowFsm.myTasksWorkspace.listMyWorkTasks' as const;
