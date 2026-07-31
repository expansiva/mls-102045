/// <mls fileReference="_102045_/l1/buildFlowFsm/layer_3_domain/entities/invoice.ts" enhancement="_blank"/>

export type InvoiceStatus = 'draft' | 'sent';

export interface Invoice {
  invoiceId: string;
  projectId: string;
  clientId: string;
  invoiceNumber: string;
  status: InvoiceStatus;
  totalAmount: number;
  sentAt: string | null;
  createdAt: string;
  updatedAt: string;
}

export const INVOICE_STATUS_TRANSITIONS: Record<InvoiceStatus, InvoiceStatus[]> = {
  draft: ['sent'],
  sent: [],
};

export function canTransitionInvoice(from: InvoiceStatus, to: InvoiceStatus): boolean {
  return INVOICE_STATUS_TRANSITIONS[from]?.includes(to) ?? false;
}

export function invoiceSentAtRequiredWhenSent(invoice: Pick<Invoice, 'status' | 'sentAt'>): boolean {
  if (invoice.status === 'sent') {
    return invoice.sentAt !== null;
  }
  return true;
}

export function invoiceSentAtNullWhenDraft(invoice: Pick<Invoice, 'status' | 'sentAt'>): boolean {
  if (invoice.status === 'draft') {
    return invoice.sentAt === null;
  }
  return true;
}

export function invoiceSentAtGreaterOrEqualCreatedAt(
  invoice: Pick<Invoice, 'sentAt' | 'createdAt'>
): boolean {
  if (invoice.sentAt === null) {
    return true;
  }
  return invoice.sentAt >= invoice.createdAt;
}

export function invoiceSentAtLessOrEqualUpdatedAt(
  invoice: Pick<Invoice, 'sentAt' | 'updatedAt'>
): boolean {
  if (invoice.sentAt === null) {
    return true;
  }
  return invoice.sentAt <= invoice.updatedAt;
}

export function invoiceUpdatedAtGreaterOrEqualCreatedAt(
  invoice: Pick<Invoice, 'createdAt' | 'updatedAt'>
): boolean {
  return invoice.updatedAt >= invoice.createdAt;
}

export function invoiceTotalAmountNonNegative(invoice: Pick<Invoice, 'totalAmount'>): boolean {
  return invoice.totalAmount >= 0;
}

export function invoiceTotalAmountMatchesApprovedCosts(
  totalAmount: number,
  approvedJobCosts: number,
  approvedChangeOrders: number
): boolean {
  return totalAmount === approvedJobCosts + approvedChangeOrders;
}

export function invoiceNumberIsUnique(
  invoiceNumber: string,
  existingNumbers: string[]
): boolean {
  return !existingNumbers.includes(invoiceNumber);
}
