/// <mls fileReference="_102045_/l4/buildFlowFsm/contracts/projectLifecycleWorkspace.updateProjectStatusCmd.defs.ts" enhancement="_blank"/>

// GENERATED MECHANICALLY from _102045_/l4/buildFlowFsm/workspaces/projectLifecycleWorkspace.defs.ts — DO NOT EDIT.
// Contract of record: bffCall updateProjectStatusCmd (command); Output kind=object; route buildFlowFsm.projectLifecycleWorkspace.updateProjectStatusCmd.

export interface UpdateProjectStatusCmdInput {
  projectId: string;
  status: string;
  holdReason?: string;
  cancellationReason?: string;
}

export interface UpdateProjectStatusCmdOutput {
  projectId: string;
  name: string;
  status: string;
  holdReason: string;
  closedAt: string;
  cancelledAt: string;
  cancellationReason: string;
  updatedAt: string;
}

export const updateProjectStatusCmdRoute = 'buildFlowFsm.projectLifecycleWorkspace.updateProjectStatusCmd' as const;
