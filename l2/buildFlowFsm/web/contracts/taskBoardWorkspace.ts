/// <mls fileReference="_102045_/l2/buildFlowFsm/web/contracts/taskBoardWorkspace.ts" enhancement="_blank"/>

// GENERATED from l4 bffCalls — do not edit (workspace taskBoardWorkspace; one contract file per workspace, all bffCalls).

// bffCall cmdCreateWorkTask (command) — Output kind=object; route buildFlowFsm.taskBoardWorkspace.cmdCreateWorkTask.
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

// bffCall cmdUpdateWorkTask (command) — Output kind=object; route buildFlowFsm.taskBoardWorkspace.cmdUpdateWorkTask.
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

// bffCall cmdUpdateWorkTaskStatus (command) — Output kind=object; route buildFlowFsm.taskBoardWorkspace.cmdUpdateWorkTaskStatus.
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
