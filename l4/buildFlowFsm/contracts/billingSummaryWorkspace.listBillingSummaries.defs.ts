/// <mls fileReference="_102045_/l4/buildFlowFsm/contracts/billingSummaryWorkspace.listBillingSummaries.defs.ts" enhancement="_blank"/>

// GENERATED MECHANICALLY from _102045_/l4/buildFlowFsm/workspaces/billingSummaryWorkspace.defs.ts — DO NOT EDIT.
// Contract of record: bffCall listBillingSummaries (query); Output kind=paginated; route buildFlowFsm.billingSummaryWorkspace.listBillingSummaries.

export interface ListBillingSummariesInput {
  projectId?: string;
  status?: string;
  page?: number;
  pageSize?: number;
}

export interface ListBillingSummariesBillingSummariesItem {
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
  createdAt: string;
  updatedAt: string;
}

export interface ListBillingSummariesOutput {
  billingSummaries: ListBillingSummariesBillingSummariesItem[];
  total: number;
}

export const listBillingSummariesRoute = 'buildFlowFsm.billingSummaryWorkspace.listBillingSummaries' as const;
