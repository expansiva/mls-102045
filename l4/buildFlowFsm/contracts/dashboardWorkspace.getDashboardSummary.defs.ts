/// <mls fileReference="_102045_/l4/buildFlowFsm/contracts/dashboardWorkspace.getDashboardSummary.defs.ts" enhancement="_blank"/>

// GENERATED MECHANICALLY from _102045_/l4/buildFlowFsm/workspaces/dashboardWorkspace.defs.ts — DO NOT EDIT.
// Contract of record: bffCall getDashboardSummary (query); Output kind=paginated; route buildFlowFsm.dashboardWorkspace.getDashboardSummary.

export interface GetDashboardSummaryInput {
  status?: string;
  page?: number;
  pageSize?: number;
}

export interface GetDashboardSummaryProjectsItem {
  projectId: string;
  name: string;
  clientName: string;
  budget: number;
  actualCost: number;
  budgetVariance: number;
  startDate: string;
  endDate: string;
  status: string;
  upcomingTaskCount: number;
  overdueTaskCount: number;
}

export interface GetDashboardSummaryOutput {
  projects: GetDashboardSummaryProjectsItem[];
  total: number;
}

export const getDashboardSummaryRoute = 'buildFlowFsm.dashboardWorkspace.getDashboardSummary' as const;
