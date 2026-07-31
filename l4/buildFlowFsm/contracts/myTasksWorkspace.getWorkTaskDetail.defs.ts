/// <mls fileReference="_102045_/l4/buildFlowFsm/contracts/myTasksWorkspace.getWorkTaskDetail.defs.ts" enhancement="_blank"/>

// GENERATED MECHANICALLY from _102045_/l4/buildFlowFsm/workspaces/myTasksWorkspace.defs.ts — DO NOT EDIT.
// Contract of record: bffCall getWorkTaskDetail (query); Output kind=object; route buildFlowFsm.myTasksWorkspace.getWorkTaskDetail.

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
