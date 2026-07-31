/// <mls fileReference="_102045_/l2/buildFlowFsm/web/contracts/myTasksWorkspace.ts" enhancement="_blank"/>

// GENERATED from l4 bffCalls — do not edit (workspace myTasksWorkspace; one contract file per workspace, all bffCalls).

// bffCall listMyWorkTasks (query) — Output kind=paginated; route buildFlowFsm.myTasksWorkspace.listMyWorkTasks.
export interface ListMyWorkTasksInput {
  assignedWorkerId: string;
  status?: string;
  page?: number;
  pageSize?: number;
}
export interface ListMyWorkTasksOutput {
  workTasks: { workTaskId: string; projectId: string; projectName: string; title: string; description: string; status: string; dueDate: string; isOverdue: boolean; completedAt: string }[];
  total: number;
}
export const listMyWorkTasksRoute = 'buildFlowFsm.myTasksWorkspace.listMyWorkTasks' as const;

// bffCall getWorkTaskDetail (query) — Output kind=object; route buildFlowFsm.myTasksWorkspace.getWorkTaskDetail.
export interface GetWorkTaskDetailInput {
  workTaskId: string;
  actorId: string;
}
export interface GetWorkTaskDetailOutput {
  workTaskId: string;
  projectId: string;
  projectName: string;
  title: string;
  description: string;
  assignedWorkerId: string;
  status: string;
  dueDate: string;
  isOverdue: boolean;
  completedAt: string;
  cancelledAt: string;
  cancellationReason: string;
  createdAt: string;
  updatedAt: string;
}
export const getWorkTaskDetailRoute = 'buildFlowFsm.myTasksWorkspace.getWorkTaskDetail' as const;
