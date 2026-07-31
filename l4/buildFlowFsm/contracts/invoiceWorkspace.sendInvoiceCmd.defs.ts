/// <mls fileReference="_102045_/l4/buildFlowFsm/contracts/invoiceWorkspace.sendInvoiceCmd.defs.ts" enhancement="_blank"/>

// GENERATED MECHANICALLY from _102045_/l4/buildFlowFsm/workspaces/invoiceWorkspace.defs.ts — DO NOT EDIT.
// Contract of record: bffCall sendInvoiceCmd (command); Output kind=object; route buildFlowFsm.invoiceWorkspace.sendInvoiceCmd.

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
