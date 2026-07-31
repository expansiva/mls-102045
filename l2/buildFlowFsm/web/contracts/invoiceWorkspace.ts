/// <mls fileReference="_102045_/l2/buildFlowFsm/web/contracts/invoiceWorkspace.ts" enhancement="_blank"/>

// GENERATED from l4 bffCalls — do not edit (workspace invoiceWorkspace; one contract file per workspace, all bffCalls).

// bffCall listInvoices (query) — Output kind=paginated; route buildFlowFsm.invoiceWorkspace.listInvoices.
export interface ListInvoicesInput {
  status?: string;
  projectId?: string;
  clientId?: string;
  page?: number;
  pageSize?: number;
}
export interface ListInvoicesOutput {
  invoices: { invoiceId: string; invoiceNumber: string; projectId: string; clientId: string; status: string; totalAmount: number; sentAt: string; createdAt: string; updatedAt: string }[];
  total: number;
}
export const listInvoicesRoute = 'buildFlowFsm.invoiceWorkspace.listInvoices' as const;

// bffCall createInvoiceCmd (command) — Output kind=object; route buildFlowFsm.invoiceWorkspace.createInvoiceCmd.
export interface CreateInvoiceCmdInput {
  projectId: string;
  invoiceNumber: string;
  clientId: string;
}
export interface CreateInvoiceCmdOutput {
  invoiceId: string;
  projectId: string;
  clientId: string;
  invoiceNumber: string;
  status: string;
  totalAmount: number;
  createdAt: string;
  updatedAt: string;
}
export const createInvoiceCmdRoute = 'buildFlowFsm.invoiceWorkspace.createInvoiceCmd' as const;

// bffCall sendInvoiceCmd (command) — Output kind=object; route buildFlowFsm.invoiceWorkspace.sendInvoiceCmd.
export interface SendInvoiceCmdInput {
  invoiceId: string;
}
export interface SendInvoiceCmdOutput {
  invoiceId: string;
  projectId: string;
  clientId: string;
  invoiceNumber: string;
  status: string;
  totalAmount: number;
  sentAt: string;
  updatedAt: string;
}
export const sendInvoiceCmdRoute = 'buildFlowFsm.invoiceWorkspace.sendInvoiceCmd' as const;
