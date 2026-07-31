/// <mls fileReference="_102045_/l4/buildFlowFsm/contracts/clientBillingWorkspace.getInvoice.defs.ts" enhancement="_blank"/>

// GENERATED MECHANICALLY from _102045_/l4/buildFlowFsm/workspaces/clientBillingWorkspace.defs.ts — DO NOT EDIT.
// Contract of record: bffCall getInvoice (query); Output kind=object; route buildFlowFsm.clientBillingWorkspace.getInvoice.

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
