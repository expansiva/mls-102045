/// <mls fileReference="_102045_/l4/buildFlowFsm/contracts/taskBoardWorkspace.cmdUpdateWorkTaskStatus.defs.ts" enhancement="_blank"/>

// GENERATED MECHANICALLY from _102045_/l4/buildFlowFsm/workspaces/taskBoardWorkspace.defs.ts — DO NOT EDIT.
// Contract of record: bffCall cmdUpdateWorkTaskStatus (command); Output kind=object; route buildFlowFsm.taskBoardWorkspace.cmdUpdateWorkTaskStatus.

export interface CmdUpdateWorkTaskStatusInput {
  workTaskId: string;
  status: string;
  cancellationReason?: string;
  completedAt?: string;
  actorId: string;
}

export interface CmdUpdateWorkTaskStatusOutput {
  workTaskId: string;
  projectId: string;
  title: string;
  status: string;
  dueDate: string;
  assignedWorkerId: string;
  completedAt: string;
  cancelledAt: string;
  cancellationReason: string;
  updatedAt: string;
}

export const cmdUpdateWorkTaskStatusRoute = 'buildFlowFsm.taskBoardWorkspace.cmdUpdateWorkTaskStatus' as const;
