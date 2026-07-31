/// <mls fileReference="_102045_/l4/buildFlowFsm/contracts/taskBoardWorkspace.cmdUpdateWorkTask.defs.ts" enhancement="_blank"/>

// GENERATED MECHANICALLY from _102045_/l4/buildFlowFsm/workspaces/taskBoardWorkspace.defs.ts — DO NOT EDIT.
// Contract of record: bffCall cmdUpdateWorkTask (command); Output kind=object; route buildFlowFsm.taskBoardWorkspace.cmdUpdateWorkTask.

export interface CmdUpdateWorkTaskInput {
  workTaskId: string;
  title?: string;
  description?: string;
  assignedWorkerId?: string;
  dueDate?: string;
  status?: string;
  cancellationReason?: string;
}

export interface CmdUpdateWorkTaskOutput {
  workTaskId: string;
  projectId: string;
  title: string;
  description: string;
  assignedWorkerId: string;
  status: string;
  dueDate: string;
  completedAt: string;
  cancelledAt: string;
  cancellationReason: string;
  updatedAt: string;
}

export const cmdUpdateWorkTaskRoute = 'buildFlowFsm.taskBoardWorkspace.cmdUpdateWorkTask' as const;
