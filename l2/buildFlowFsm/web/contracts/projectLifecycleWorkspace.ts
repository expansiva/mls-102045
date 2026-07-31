/// <mls fileReference="_102045_/l2/buildFlowFsm/web/contracts/projectLifecycleWorkspace.ts" enhancement="_blank"/>

// GENERATED from l4 bffCalls — do not edit (workspace projectLifecycleWorkspace; one contract file per workspace, all bffCalls).

// bffCall createProjectCmd (command) — Output kind=object; route buildFlowFsm.projectLifecycleWorkspace.createProjectCmd.
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

// bffCall updateProjectCmd (command) — Output kind=object; route buildFlowFsm.projectLifecycleWorkspace.updateProjectCmd.
export interface UpdateProjectCmdInput {
  projectId: string;
  name: string;
  clientId: string;
  siteAddress: string;
  budget: number;
  startDate: string;
  endDate: string;
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

// bffCall updateProjectStatusCmd (command) — Output kind=object; route buildFlowFsm.projectLifecycleWorkspace.updateProjectStatusCmd.
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
