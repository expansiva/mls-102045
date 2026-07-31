/// <mls fileReference="_102045_/l4/buildFlowFsm/contracts/billingSummaryWorkspace.shareBillingSummaryCmd.defs.ts" enhancement="_blank"/>

// GENERATED MECHANICALLY from _102045_/l4/buildFlowFsm/workspaces/billingSummaryWorkspace.defs.ts — DO NOT EDIT.
// Contract of record: bffCall shareBillingSummaryCmd (command); Output kind=object; route buildFlowFsm.billingSummaryWorkspace.shareBillingSummaryCmd.

export interface ShareBillingSummaryCmdInput {
  billingSummaryId: string;
  status?: string;
}

export interface ShareBillingSummaryCmdOutput {
  billingSummaryId: string;
  projectId: string;
  status: string;
  periodStart: string;
  periodEnd: string;
  laborCost: number;
  materialCost: number;
  changeOrderCost: number;
  totalCost: number;
  sharedAt: string;
  updatedAt: string;
}

export const shareBillingSummaryCmdRoute = 'buildFlowFsm.billingSummaryWorkspace.shareBillingSummaryCmd' as const;
