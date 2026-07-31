/// <mls fileReference="_102045_/l2/buildFlowFsm/web/contracts/clientBillingWorkspace.ts" enhancement="_blank"/>

// GENERATED from l4 bffCalls — do not edit (workspace clientBillingWorkspace; one contract file per workspace, all bffCalls).

// bffCall getBillingSummary (query) — Output kind=object; route buildFlowFsm.clientBillingWorkspace.getBillingSummary.
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

// bffCall getInvoice (query) — Output kind=object; route buildFlowFsm.clientBillingWorkspace.getInvoice.
export interface GetInvoiceInput {
  invoiceId: string;
  clientId: string;
}
export interface GetInvoiceOutput {
  invoiceId: string;
  projectId: string;
  clientId: string;
  invoiceNumber: string;
  status: string;
  totalAmount: number;
  sentAt: string;
  createdAt: string;
}
export const getInvoiceRoute = 'buildFlowFsm.clientBillingWorkspace.getInvoice' as const;
