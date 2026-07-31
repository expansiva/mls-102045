/// <mls fileReference="_102045_/l4/buildFlowFsm/contracts/invoiceWorkspace.listInvoices.defs.ts" enhancement="_blank"/>

// GENERATED MECHANICALLY from _102045_/l4/buildFlowFsm/workspaces/invoiceWorkspace.defs.ts — DO NOT EDIT.
// Contract of record: bffCall listInvoices (query); Output kind=paginated; route buildFlowFsm.invoiceWorkspace.listInvoices.

export interface ListInvoicesInput {
  status?: string;
  projectId?: string;
  clientId?: string;
  page?: number;
  pageSize?: number;
}

export interface ListInvoicesInvoicesItem {
  invoiceId: string;
  invoiceNumber: string;
  projectId: string;
  clientId: string;
  status: string;
  totalAmount: number;
  sentAt: string;
  createdAt: string;
  updatedAt: string;
}

export interface ListInvoicesOutput {
  invoices: ListInvoicesInvoicesItem[];
  total: number;
}

export const listInvoicesRoute = 'buildFlowFsm.invoiceWorkspace.listInvoices' as const;
