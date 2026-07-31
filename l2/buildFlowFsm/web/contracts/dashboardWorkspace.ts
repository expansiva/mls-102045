/// <mls fileReference="_102045_/l2/buildFlowFsm/web/contracts/dashboardWorkspace.ts" enhancement="_blank"/>

// GENERATED from l4 bffCalls — do not edit (workspace dashboardWorkspace; one contract file per workspace, all bffCalls).

// bffCall getDashboardSummary (query) — Output kind=paginated; route buildFlowFsm.dashboardWorkspace.getDashboardSummary.
export interface GetDashboardSummaryInput {
  status?: string;
  page?: number;
  pageSize?: number;
}
export interface GetDashboardSummaryOutput {
  projects: { projectId: string; name: string; clientName: string; budget: string; actualCost: string; budgetVariance: string; startDate: string; endDate: string; status: string; upcomingTaskCount: string; overdueTaskCount: string }[];
  total: number;
}
export const getDashboardSummaryRoute = 'buildFlowFsm.dashboardWorkspace.getDashboardSummary' as const;

// bffCall getProjectList (query) — Output kind=paginated; route buildFlowFsm.dashboardWorkspace.getProjectList.
export interface GetProjectListInput {
  status?: string;
  page?: number;
  pageSize?: number;
}
export interface GetProjectListOutput {
  projects: { projectId: string; name: string; clientName: string; siteAddress: string; budget: string; startDate: string; endDate: string; status: string }[];
  total: number;
}
export const getProjectListRoute = 'buildFlowFsm.dashboardWorkspace.getProjectList' as const;
