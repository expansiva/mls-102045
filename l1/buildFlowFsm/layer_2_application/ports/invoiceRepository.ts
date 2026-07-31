/// <mls fileReference="_102045_/l1/buildFlowFsm/layer_2_application/ports/invoiceRepository.ts" enhancement="_blank"/>
import type { Invoice, InvoiceStatus } from '/_102045_/l1/buildFlowFsm/layer_3_domain/entities/invoice.js';

export interface InvoiceListFilter {
  projectId?: string;
  clientId?: string;
  status?: InvoiceStatus;
  invoiceNumber?: string;
}

export interface IInvoiceRepository {
  /** Retrieve an invoice by its unique identifier. Throws NOT_FOUND if absent. */
  getById(invoiceId: string): Promise<Invoice>;

  /** List invoices matching the given filter criteria. */
  list(filter?: InvoiceListFilter): Promise<Invoice[]>;

  /** Persist or update the invoice aggregate. */
  save(invoice: Invoice): Promise<void>;

  /** Find all invoices for a given project. */
  findByProject(projectId: string): Promise<Invoice[]>;

  /** Find invoices by their current status. */
  findByStatus(status: InvoiceStatus): Promise<Invoice[]>;

  /** Find invoices linked to a billing summary. */
  findByBillingSummary(billingSummaryId: string): Promise<Invoice[]>;
}
