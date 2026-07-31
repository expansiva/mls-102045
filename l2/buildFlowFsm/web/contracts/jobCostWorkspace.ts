/// <mls fileReference="_102045_/l2/buildFlowFsm/web/contracts/jobCostWorkspace.ts" enhancement="_blank"/>

// GENERATED from l4 bffCalls — do not edit (workspace jobCostWorkspace; one contract file per workspace, all bffCalls).

// bffCall viewJobCostSummary (query) — Output kind=object; route buildFlowFsm.jobCostWorkspace.viewJobCostSummary.
export interface ViewJobCostSummaryInput {
  projectId: string;
}
export interface ViewJobCostSummaryOutput {
  projectId: string;
  name: string;
  clientId: string;
  clientName: string;
  budget: number;
  status: string;
  startDate: string;
  endDate: string;
  laborCost: number;
  materialCost: number;
  changeOrderCost: number;
  totalCost: number;
  budgetVariance: number;
}
export const viewJobCostSummaryRoute = 'buildFlowFsm.jobCostWorkspace.viewJobCostSummary' as const;
