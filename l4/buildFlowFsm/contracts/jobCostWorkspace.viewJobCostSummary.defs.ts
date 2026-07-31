/// <mls fileReference="_102045_/l4/buildFlowFsm/contracts/jobCostWorkspace.viewJobCostSummary.defs.ts" enhancement="_blank"/>

// GENERATED MECHANICALLY from _102045_/l4/buildFlowFsm/workspaces/jobCostWorkspace.defs.ts — DO NOT EDIT.
// Contract of record: bffCall viewJobCostSummary (query); Output kind=object; route buildFlowFsm.jobCostWorkspace.viewJobCostSummary.

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
