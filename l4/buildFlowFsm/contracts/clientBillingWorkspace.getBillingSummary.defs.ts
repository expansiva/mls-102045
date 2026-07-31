/// <mls fileReference="_102045_/l4/buildFlowFsm/contracts/clientBillingWorkspace.getBillingSummary.defs.ts" enhancement="_blank"/>

// GENERATED MECHANICALLY from _102045_/l4/buildFlowFsm/workspaces/clientBillingWorkspace.defs.ts — DO NOT EDIT.
// Contract of record: bffCall getBillingSummary (query); Output kind=object; route buildFlowFsm.clientBillingWorkspace.getBillingSummary.

export interface GetBillingSummaryInput {
  billingSummaryId: string;
  clientId: string;
}

export interface GetBillingSummaryOutput {
  billingSummaryId: string;
  projectId: string;
  projectName: string;
  status: string;
  periodStart: string;
  periodEnd: string;
  laborCost: number;
  materialCost: number;
  changeOrderCost: number;
  totalCost: number;
  sharedAt: string;
}

export const getBillingSummaryRoute = 'buildFlowFsm.clientBillingWorkspace.getBillingSummary' as const;
