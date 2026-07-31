/// <mls fileReference="_102045_/l4/buildFlowFsm/contracts/invoiceWorkspace.createInvoiceCmd.defs.ts" enhancement="_blank"/>

// GENERATED MECHANICALLY from _102045_/l4/buildFlowFsm/workspaces/invoiceWorkspace.defs.ts — DO NOT EDIT.
// Contract of record: bffCall createInvoiceCmd (command); Output kind=object; route buildFlowFsm.invoiceWorkspace.createInvoiceCmd.

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
