/// <mls fileReference="_102045_/l4/buildFlowFsm/contracts/projectDetailWorkspace.getProjectDetail.defs.ts" enhancement="_blank"/>

// GENERATED MECHANICALLY from _102045_/l4/buildFlowFsm/workspaces/projectDetailWorkspace.defs.ts — DO NOT EDIT.
// Contract of record: bffCall getProjectDetail (query); Output kind=object; route buildFlowFsm.projectDetailWorkspace.getProjectDetail.

export interface GetProjectDetailInput {
  projectId: string;
}

export interface GetProjectDetailOutput {
  projectId: string;
  name: string;
  clientId: string;
  clientName: string;
  clientCompany: string;
  siteAddress: string;
  budget: number;
  startDate: string;
  endDate: string;
  status: string;
  holdReason: string;
  closedAt: string;
  cancelledAt: string;
  cancellationReason: string;
  createdAt: string;
  updatedAt: string;
}

export const getProjectDetailRoute = 'buildFlowFsm.projectDetailWorkspace.getProjectDetail' as const;
