/// <mls fileReference="_102045_/l4/buildFlowFsm/contracts/projectLifecycleWorkspace.createProjectCmd.defs.ts" enhancement="_blank"/>

// GENERATED MECHANICALLY from _102045_/l4/buildFlowFsm/workspaces/projectLifecycleWorkspace.defs.ts — DO NOT EDIT.
// Contract of record: bffCall createProjectCmd (command); Output kind=object; route buildFlowFsm.projectLifecycleWorkspace.createProjectCmd.

export interface CreateProjectCmdInput {
  name: string;
  clientId: string;
  siteAddress: string;
  budget: number;
  startDate: string;
  endDate: string;
}

export interface CreateProjectCmdOutput {
  projectId: string;
  name: string;
  clientId: string;
  siteAddress: string;
  budget: number;
  startDate: string;
  endDate: string;
  status: string;
  createdAt: string;
  updatedAt: string;
}

export const createProjectCmdRoute = 'buildFlowFsm.projectLifecycleWorkspace.createProjectCmd' as const;
