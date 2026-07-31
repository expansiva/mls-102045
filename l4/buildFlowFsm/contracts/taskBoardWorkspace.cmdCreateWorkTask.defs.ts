/// <mls fileReference="_102045_/l4/buildFlowFsm/contracts/taskBoardWorkspace.cmdCreateWorkTask.defs.ts" enhancement="_blank"/>

// GENERATED MECHANICALLY from _102045_/l4/buildFlowFsm/workspaces/taskBoardWorkspace.defs.ts — DO NOT EDIT.
// Contract of record: bffCall cmdCreateWorkTask (command); Output kind=object; route buildFlowFsm.taskBoardWorkspace.cmdCreateWorkTask.

export interface CmdCreateWorkTaskInput {
  projectId: string;
  title: string;
  description?: string;
  assignedWorkerId: string;
  dueDate: string;
}

export interface CmdCreateWorkTaskOutput {
  workTaskId: string;
  projectId: string;
  title: string;
  description: string;
  assignedWorkerId: string;
  status: string;
  dueDate: string;
  createdAt: string;
  updatedAt: string;
}

export const cmdCreateWorkTaskRoute = 'buildFlowFsm.taskBoardWorkspace.cmdCreateWorkTask' as const;
