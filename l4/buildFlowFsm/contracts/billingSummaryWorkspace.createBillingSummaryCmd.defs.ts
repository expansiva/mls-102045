/// <mls fileReference="_102045_/l4/buildFlowFsm/contracts/billingSummaryWorkspace.createBillingSummaryCmd.defs.ts" enhancement="_blank"/>

// GENERATED MECHANICALLY from _102045_/l4/buildFlowFsm/workspaces/billingSummaryWorkspace.defs.ts — DO NOT EDIT.
// Contract of record: bffCall createBillingSummaryCmd (command); Output kind=object; route buildFlowFsm.billingSummaryWorkspace.createBillingSummaryCmd.

export interface CreateBillingSummaryCmdInput {
  projectId: string;
  periodStart: string;
  periodEnd: string;
}

export interface CreateBillingSummaryCmdOutput {
  billingSummaryId: string;
  projectId: string;
  status: string;
  periodStart: string;
  periodEnd: string;
  laborCost: number;
  materialCost: number;
  changeOrderCost: number;
  totalCost: number;
  createdAt: string;
  updatedAt: string;
}

export const createBillingSummaryCmdRoute = 'buildFlowFsm.billingSummaryWorkspace.createBillingSummaryCmd' as const;
