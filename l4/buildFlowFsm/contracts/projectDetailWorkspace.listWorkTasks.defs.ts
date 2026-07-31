/// <mls fileReference="_102045_/l4/buildFlowFsm/contracts/projectDetailWorkspace.listWorkTasks.defs.ts" enhancement="_blank"/>

// GENERATED MECHANICALLY from _102045_/l4/buildFlowFsm/workspaces/projectDetailWorkspace.defs.ts — DO NOT EDIT.
// Contract of record: bffCall listWorkTasks (query); Output kind=paginated; route buildFlowFsm.projectDetailWorkspace.listWorkTasks.

export interface ListWorkTasksInput {
  projectId: string;
  status?: string;
  assignedWorkerId?: string;
  page?: number;
  pageSize?: number;
}

export interface ListWorkTasksWorkTasksItem {
  workTaskId: string;
  projectId: string;
  title: string;
  assignedWorkerId: string;
  status: string;
  dueDate: string;
  completedAt: string;
  isOverdue: boolean;
}

export interface ListWorkTasksOutput {
  workTasks: ListWorkTasksWorkTasksItem[];
  total: number;
}

export const listWorkTasksRoute = 'buildFlowFsm.projectDetailWorkspace.listWorkTasks' as const;
