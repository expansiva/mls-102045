/// <mls fileReference="_102045_/l2/buildFlowFsm/web/contracts/billingSummaryWorkspace.ts" enhancement="_blank"/>

// GENERATED from l4 bffCalls — do not edit (workspace billingSummaryWorkspace; one contract file per workspace, all bffCalls).

// bffCall listBillingSummaries (query) — Output kind=paginated; route buildFlowFsm.billingSummaryWorkspace.listBillingSummaries.
export interface ListBillingSummariesInput {
  projectId?: string;
  status?: string;
  page?: number;
  pageSize?: number;
}
export interface ListBillingSummariesOutput {
  billingSummaries: { billingSummaryId: string; projectId: string; projectName: string; status: string; periodStart: string; periodEnd: string; laborCost: number; materialCost: number; changeOrderCost: number; totalCost: number; sharedAt: string; createdAt: string; updatedAt: string }[];
  total: number;
}
export const listBillingSummariesRoute = 'buildFlowFsm.billingSummaryWorkspace.listBillingSummaries' as const;

// bffCall createBillingSummaryCmd (command) — Output kind=object; route buildFlowFsm.billingSummaryWorkspace.createBillingSummaryCmd.
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

// bffCall shareBillingSummaryCmd (command) — Output kind=object; route buildFlowFsm.billingSummaryWorkspace.shareBillingSummaryCmd.
export interface ShareBillingSummaryCmdInput {
  billingSummaryId: string;
  status: string;
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
