/// <mls fileReference="_102045_/l4/buildFlowFsm/contracts/dashboardWorkspace.getProjectList.defs.ts" enhancement="_blank"/>

// GENERATED MECHANICALLY from _102045_/l4/buildFlowFsm/workspaces/dashboardWorkspace.defs.ts — DO NOT EDIT.
// Contract of record: bffCall getProjectList (query); Output kind=paginated; route buildFlowFsm.dashboardWorkspace.getProjectList.

export interface GetProjectListInput {
  status?: string;
  page?: number;
  pageSize?: number;
}

export interface GetProjectListProjectsItem {
  projectId: string;
  name: string;
  clientName: string;
  siteAddress: string;
  budget: number;
  startDate: string;
  endDate: string;
  status: string;
}

export interface GetProjectListOutput {
  projects: GetProjectListProjectsItem[];
  total: number;
}

export const getProjectListRoute = 'buildFlowFsm.dashboardWorkspace.getProjectList' as const;
