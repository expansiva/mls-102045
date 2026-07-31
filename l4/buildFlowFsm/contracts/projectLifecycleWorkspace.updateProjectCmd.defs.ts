/// <mls fileReference="_102045_/l4/buildFlowFsm/contracts/projectLifecycleWorkspace.updateProjectCmd.defs.ts" enhancement="_blank"/>

// GENERATED MECHANICALLY from _102045_/l4/buildFlowFsm/workspaces/projectLifecycleWorkspace.defs.ts — DO NOT EDIT.
// Contract of record: bffCall updateProjectCmd (command); Output kind=object; route buildFlowFsm.projectLifecycleWorkspace.updateProjectCmd.

export interface UpdateProjectCmdInput {
  projectId: string;
  name: string;
  clientId?: string;
  siteAddress?: string;
  budget?: number;
  startDate?: string;
  endDate?: string;
}

export interface UpdateProjectCmdOutput {
  projectId: string;
  name: string;
  clientId: string;
  siteAddress: string;
  budget: number;
  startDate: string;
  endDate: string;
  status: string;
  updatedAt: string;
}

export const updateProjectCmdRoute = 'buildFlowFsm.projectLifecycleWorkspace.updateProjectCmd' as const;
