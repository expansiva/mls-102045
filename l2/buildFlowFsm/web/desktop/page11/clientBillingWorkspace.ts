/// <mls fileReference="_102045_/l2/buildFlowFsm/web/desktop/page11/clientBillingWorkspace.ts" enhancement="_102020_/l2/enhancementAura"/>

import { html, nothing, type TemplateResult } from 'lit';
import { customElement } from 'lit/decorators.js';
import { BuildFlowFsmClientBillingWorkspaceBase, messages as sharedMessages } from '/_102045_/l2/buildFlowFsm/web/shared/clientBillingWorkspace.js';
import type {
  GetBillingSummaryOutput,
  GetInvoiceOutput,
} from '/_102045_/l2/buildFlowFsm/web/shared/clientBillingWorkspace.js';

const sharedFallback = sharedMessages[Object.keys(sharedMessages)[0]];

// Return type for render<Name>() helpers: a template, or the Lit sentinel for an empty branch.
// Annotating them `: TemplateResult` alone is wrong — returning `nothing` is TS2322.
type Rendered = TemplateResult | typeof nothing;

/// **collab_i18n_start**
const s_en = sharedMessages['en'] ?? sharedFallback;
const pageMessage_en = {
  'page.title': 'My Billing',
  'page.subtitle': 'Review billing summaries and invoices shared with you.',
  'billingSummary.title': s_en['section.clientBillingWorkspace.billingSummarySection.title'],
  'billingSummary.empty': s_en['intent.clientBillingWorkspace.getBillingSummary.list.empty'],
  'billingSummary.loading': 'Loading billing summary…',
  'billingSummary.refresh': 'Refresh summary',
  'billingSummary.field.billingSummaryId': s_en['intent.clientBillingWorkspace.getBillingSummary.list.column.billingSummaryId.label'],
  'billingSummary.field.projectId': s_en['intent.clientBillingWorkspace.getBillingSummary.list.column.projectId.label'],
  'billingSummary.field.projectName': s_en['intent.clientBillingWorkspace.getBillingSummary.list.column.projectName.label'],
  'billingSummary.field.status': s_en['intent.clientBillingWorkspace.getBillingSummary.list.column.status.label'],
  'billingSummary.field.periodStart': s_en['intent.clientBillingWorkspace.getBillingSummary.list.column.periodStart.label'],
  'billingSummary.field.periodEnd': s_en['intent.clientBillingWorkspace.getBillingSummary.list.column.periodEnd.label'],
  'billingSummary.field.laborCost': s_en['intent.clientBillingWorkspace.getBillingSummary.list.column.laborCost.label'],
  'billingSummary.field.materialCost': s_en['intent.clientBillingWorkspace.getBillingSummary.list.column.materialCost.label'],
  'billingSummary.field.changeOrderCost': s_en['intent.clientBillingWorkspace.getBillingSummary.list.column.changeOrderCost.label'],
  'billingSummary.field.totalCost': s_en['intent.clientBillingWorkspace.getBillingSummary.list.column.totalCost.label'],
  'billingSummary.field.sharedAt': s_en['intent.clientBillingWorkspace.getBillingSummary.list.column.sharedAt.label'],
  'invoice.title': s_en['section.clientBillingWorkspace.invoiceSection.title'],
  'invoice.empty': s_en['intent.clientBillingWorkspace.getInvoice.list.empty'],
  'invoice.loading': 'Loading invoice…',
  'invoice.refresh': 'Refresh invoice',
  'invoice.field.invoiceId': s_en['intent.clientBillingWorkspace.getInvoice.list.column.invoiceId.label'],
  'invoice.field.projectId': s_en['intent.clientBillingWorkspace.getInvoice.list.column.projectId.label'],
  'invoice.field.clientId': s_en['intent.clientBillingWorkspace.getInvoice.list.column.clientId.label'],
  'invoice.field.invoiceNumber': s_en['intent.clientBillingWorkspace.getInvoice.list.column.invoiceNumber.label'],
  'invoice.field.status': s_en['intent.clientBillingWorkspace.getInvoice.list.column.status.label'],
  'invoice.field.totalAmount': s_en['intent.clientBillingWorkspace.getInvoice.list.column.totalAmount.label'],
  'invoice.field.sentAt': s_en['intent.clientBillingWorkspace.getInvoice.list.column.sentAt.label'],
  'invoice.field.createdAt': s_en['intent.clientBillingWorkspace.getInvoice.list.column.createdAt.label'],
  'status.error': 'Something went wrong. Please try again.',
};
type PageMessageType = typeof pageMessage_en;
const s_pt_br = sharedMessages['pt-br'] ?? sharedFallback;
const pageMessage_pt_br: PageMessageType = {
  'page.title': 'Minha faturamento',
  'page.subtitle': 'Consulte resumos de faturamento e faturas compartilhados com você.',
  'billingSummary.title': s_pt_br['section.clientBillingWorkspace.billingSummarySection.title'],
  'billingSummary.empty': s_pt_br['intent.clientBillingWorkspace.getBillingSummary.list.empty'],
  'billingSummary.loading': 'Carregando resumo de faturamento…',
  'billingSummary.refresh': 'Atualizar resumo',
  'billingSummary.field.billingSummaryId': s_pt_br['intent.clientBillingWorkspace.getBillingSummary.list.column.billingSummaryId.label'],
  'billingSummary.field.projectId': s_pt_br['intent.clientBillingWorkspace.getBillingSummary.list.column.projectId.label'],
  'billingSummary.field.projectName': s_pt_br['intent.clientBillingWorkspace.getBillingSummary.list.column.projectName.label'],
  'billingSummary.field.status': s_pt_br['intent.clientBillingWorkspace.getBillingSummary.list.column.status.label'],
  'billingSummary.field.periodStart': s_pt_br['intent.clientBillingWorkspace.getBillingSummary.list.column.periodStart.label'],
  'billingSummary.field.periodEnd': s_pt_br['intent.clientBillingWorkspace.getBillingSummary.list.column.periodEnd.label'],
  'billingSummary.field.laborCost': s_pt_br['intent.clientBillingWorkspace.getBillingSummary.list.column.laborCost.label'],
  'billingSummary.field.materialCost': s_pt_br['intent.clientBillingWorkspace.getBillingSummary.list.column.materialCost.label'],
  'billingSummary.field.changeOrderCost': s_pt_br['intent.clientBillingWorkspace.getBillingSummary.list.column.changeOrderCost.label'],
  'billingSummary.field.totalCost': s_pt_br['intent.clientBillingWorkspace.getBillingSummary.list.column.totalCost.label'],
  'billingSummary.field.sharedAt': s_pt_br['intent.clientBillingWorkspace.getBillingSummary.list.column.sharedAt.label'],
  'invoice.title': s_pt_br['section.clientBillingWorkspace.invoiceSection.title'],
  'invoice.empty': s_pt_br['intent.clientBillingWorkspace.getInvoice.list.empty'],
  'invoice.loading': 'Carregando fatura…',
  'invoice.refresh': 'Atualizar fatura',
  'invoice.field.invoiceId': s_pt_br['intent.clientBillingWorkspace.getInvoice.list.column.invoiceId.label'],
  'invoice.field.projectId': s_pt_br['intent.clientBillingWorkspace.getInvoice.list.column.projectId.label'],
  'invoice.field.clientId': s_pt_br['intent.clientBillingWorkspace.getInvoice.list.column.clientId.label'],
  'invoice.field.invoiceNumber': s_pt_br['intent.clientBillingWorkspace.getInvoice.list.column.invoiceNumber.label'],
  'invoice.field.status': s_pt_br['intent.clientBillingWorkspace.getInvoice.list.column.status.label'],
  'invoice.field.totalAmount': s_pt_br['intent.clientBillingWorkspace.getInvoice.list.column.totalAmount.label'],
  'invoice.field.sentAt': s_pt_br['intent.clientBillingWorkspace.getInvoice.list.column.sentAt.label'],
  'invoice.field.createdAt': s_pt_br['intent.clientBillingWorkspace.getInvoice.list.column.createdAt.label'],
  'status.error': 'Algo deu errado. Tente novamente.',
};
const s_es = sharedMessages['es'] ?? sharedFallback;
const pageMessage_es: PageMessageType = {
  'page.title': 'Mi facturación',
  'page.subtitle': 'Revise resúmenes de facturación y facturas compartidos con usted.',
  'billingSummary.title': s_es['section.clientBillingWorkspace.billingSummarySection.title'],
  'billingSummary.empty': s_es['intent.clientBillingWorkspace.getBillingSummary.list.empty'],
  'billingSummary.loading': 'Cargando resumen de facturación…',
  'billingSummary.refresh': 'Actualizar resumen',
  'billingSummary.field.billingSummaryId': s_es['intent.clientBillingWorkspace.getBillingSummary.list.column.billingSummaryId.label'],
  'billingSummary.field.projectId': s_es['intent.clientBillingWorkspace.getBillingSummary.list.column.projectId.label'],
  'billingSummary.field.projectName': s_es['intent.clientBillingWorkspace.getBillingSummary.list.column.projectName.label'],
  'billingSummary.field.status': s_es['intent.clientBillingWorkspace.getBillingSummary.list.column.status.label'],
  'billingSummary.field.periodStart': s_es['intent.clientBillingWorkspace.getBillingSummary.list.column.periodStart.label'],
  'billingSummary.field.periodEnd': s_es['intent.clientBillingWorkspace.getBillingSummary.list.column.periodEnd.label'],
  'billingSummary.field.laborCost': s_es['intent.clientBillingWorkspace.getBillingSummary.list.column.laborCost.label'],
  'billingSummary.field.materialCost': s_es['intent.clientBillingWorkspace.getBillingSummary.list.column.materialCost.label'],
  'billingSummary.field.changeOrderCost': s_es['intent.clientBillingWorkspace.getBillingSummary.list.column.changeOrderCost.label'],
  'billingSummary.field.totalCost': s_es['intent.clientBillingWorkspace.getBillingSummary.list.column.totalCost.label'],
  'billingSummary.field.sharedAt': s_es['intent.clientBillingWorkspace.getBillingSummary.list.column.sharedAt.label'],
  'invoice.title': s_es['section.clientBillingWorkspace.invoiceSection.title'],
  'invoice.empty': s_es['intent.clientBillingWorkspace.getInvoice.list.empty'],
  'invoice.loading': 'Cargando factura…',
  'invoice.refresh': 'Actualizar factura',
  'invoice.field.invoiceId': s_es['intent.clientBillingWorkspace.getInvoice.list.column.invoiceId.label'],
  'invoice.field.projectId': s_es['intent.clientBillingWorkspace.getInvoice.list.column.projectId.label'],
  'invoice.field.clientId': s_es['intent.clientBillingWorkspace.getInvoice.list.column.clientId.label'],
  'invoice.field.invoiceNumber': s_es['intent.clientBillingWorkspace.getInvoice.list.column.invoiceNumber.label'],
  'invoice.field.status': s_es['intent.clientBillingWorkspace.getInvoice.list.column.status.label'],
  'invoice.field.totalAmount': s_es['intent.clientBillingWorkspace.getInvoice.list.column.totalAmount.label'],
  'invoice.field.sentAt': s_es['intent.clientBillingWorkspace.getInvoice.list.column.sentAt.label'],
  'invoice.field.createdAt': s_es['intent.clientBillingWorkspace.getInvoice.list.column.createdAt.label'],
  'status.error': 'Algo salió mal. Inténtelo de nuevo.',
};
const pageMessages: { [key: string]: PageMessageType } = { 'en': pageMessage_en, 'pt-br': pageMessage_pt_br, 'es': pageMessage_es };
/// **collab_i18n_end**

const pageFallback = pageMessages[Object.keys(pageMessages)[0]];

@customElement('build-flow-fsm--web--desktop--page11--client-billing-workspace-102045')
export class BuildFlowFsmDesktopPage11ClientBillingWorkspacePage extends BuildFlowFsmClientBillingWorkspaceBase {
  #msgLang: string | null = null;
  #msgCache: PageMessageType = pageFallback;

  /** i18n catalog — resolved once per language, refreshed only when the document language changes. */
  protected get msg(): PageMessageType {
    const lang = (document.documentElement.lang || '').toLowerCase();
    if (lang !== this.#msgLang) {
      this.#msgLang = lang;
      this.#msgCache = pageMessages[this.getMessageKey(pageMessages)] || pageFallback;
    }
    return this.#msgCache;
  }

  /** Main render. Split the page into render<Name>() methods and call them from here. */
  render(): TemplateResult {
    const msg = this.msg;
    return html`
      <div class="min-h-full bg-[var(--page-bg,#f8fafc)]">
        <div class="max-w-6xl mx-auto px-4 py-6 space-y-6">
          <header class="space-y-1">
            <h1 class="text-2xl font-semibold text-[var(--text-strong,#0f172a)]">${msg['page.title']}</h1>
            <p class="text-sm text-[var(--text-muted,#64748b)]">${msg['page.subtitle']}</p>
          </header>
          ${this.renderBillingSummarySection()}
          ${this.renderInvoiceSection()}
        </div>
      </div>
    `;
  }

  renderBillingSummarySection(): Rendered {
    const msg = this.msg;
    const isLoading = this.getBillingSummaryState === 'loading';
    const isError = this.getBillingSummaryState === 'error';
    const data: GetBillingSummaryOutput | null = this.getBillingSummaryData;
    const formatValue = (value: unknown): string => {
      if (value === null || value === undefined || value === '') {
        return '—';
      }
      return String(value);
    };

    return html`
      <section class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-5 space-y-4 shadow-sm">
        <div class="flex flex-wrap items-center justify-between gap-3">
          <h2 class="text-lg font-medium text-[var(--text-strong,#0f172a)]">${msg['billingSummary.title']}</h2>
          <button
            type="button"
            class="inline-flex items-center gap-2 rounded-md px-3 py-1.5 text-sm font-medium bg-[var(--button-secondary-bg,#f1f5f9)] text-[var(--button-secondary-text,#0f172a)] border border-[var(--button-secondary-border,#e2e8f0)] disabled:opacity-60"
            ?disabled=${isLoading}
            @click=${(event: Event) => this.handleGetBillingSummaryClick(event)}
          >
            ${isLoading ? msg['billingSummary.loading'] : msg['billingSummary.refresh']}
          </button>
        </div>
        ${isLoading
          ? html`<p class="text-sm text-[var(--text-muted,#64748b)]">${msg['billingSummary.loading']}</p>`
          : nothing}
        ${isError
          ? html`
              <div class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--status-error-bg,#fef2f2)] px-3 py-2 text-sm text-[var(--status-error-text,#991b1b)]" role="alert">
                ${msg['status.error']}
              </div>
            `
          : nothing}
        ${!isLoading && !data
          ? html`<p class="text-sm text-[var(--text-muted,#64748b)]">${msg['billingSummary.empty']}</p>`
          : nothing}
        ${data
          ? html`
              <dl class="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 text-sm">
                <div class="space-y-0.5">
                  <dt class="text-[var(--text-muted,#64748b)]">${msg['billingSummary.field.billingSummaryId']}</dt>
                  <dd class="text-[var(--text-default,#0f172a)] font-medium">${formatValue(data.billingSummaryId)}</dd>
                </div>
                <div class="space-y-0.5">
                  <dt class="text-[var(--text-muted,#64748b)]">${msg['billingSummary.field.projectId']}</dt>
                  <dd class="text-[var(--text-default,#0f172a)] font-medium">${formatValue(data.projectId)}</dd>
                </div>
                <div class="space-y-0.5">
                  <dt class="text-[var(--text-muted,#64748b)]">${msg['billingSummary.field.projectName']}</dt>
                  <dd class="text-[var(--text-default,#0f172a)] font-medium">${formatValue(data.projectName)}</dd>
                </div>
                <div class="space-y-0.5">
                  <dt class="text-[var(--text-muted,#64748b)]">${msg['billingSummary.field.status']}</dt>
                  <dd class="text-[var(--text-default,#0f172a)] font-medium">${formatValue(data.status)}</dd>
                </div>
                <div class="space-y-0.5">
                  <dt class="text-[var(--text-muted,#64748b)]">${msg['billingSummary.field.periodStart']}</dt>
                  <dd class="text-[var(--text-default,#0f172a)] font-medium">${formatValue(data.periodStart)}</dd>
                </div>
                <div class="space-y-0.5">
                  <dt class="text-[var(--text-muted,#64748b)]">${msg['billingSummary.field.periodEnd']}</dt>
                  <dd class="text-[var(--text-default,#0f172a)] font-medium">${formatValue(data.periodEnd)}</dd>
                </div>
                <div class="space-y-0.5">
                  <dt class="text-[var(--text-muted,#64748b)]">${msg['billingSummary.field.laborCost']}</dt>
                  <dd class="text-[var(--text-default,#0f172a)] font-medium">${formatValue(data.laborCost)}</dd>
                </div>
                <div class="space-y-0.5">
                  <dt class="text-[var(--text-muted,#64748b)]">${msg['billingSummary.field.materialCost']}</dt>
                  <dd class="text-[var(--text-default,#0f172a)] font-medium">${formatValue(data.materialCost)}</dd>
                </div>
                <div class="space-y-0.5">
                  <dt class="text-[var(--text-muted,#64748b)]">${msg['billingSummary.field.changeOrderCost']}</dt>
                  <dd class="text-[var(--text-default,#0f172a)] font-medium">${formatValue(data.changeOrderCost)}</dd>
                </div>
                <div class="space-y-0.5">
                  <dt class="text-[var(--text-muted,#64748b)]">${msg['billingSummary.field.totalCost']}</dt>
                  <dd class="text-[var(--text-default,#0f172a)] font-medium">${formatValue(data.totalCost)}</dd>
                </div>
                <div class="space-y-0.5">
                  <dt class="text-[var(--text-muted,#64748b)]">${msg['billingSummary.field.sharedAt']}</dt>
                  <dd class="text-[var(--text-default,#0f172a)] font-medium">${formatValue(data.sharedAt)}</dd>
                </div>
              </dl>
            `
          : nothing}
      </section>
    `;
  }

  renderInvoiceSection(): Rendered {
    const msg = this.msg;
    const isLoading = this.getInvoiceState === 'loading';
    const isError = this.getInvoiceState === 'error';
    const data: GetInvoiceOutput | null = this.getInvoiceData;
    const formatValue = (value: unknown): string => {
      if (value === null || value === undefined || value === '') {
        return '—';
      }
      return String(value);
    };

    return html`
      <section class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-5 space-y-4 shadow-sm">
        <div class="flex flex-wrap items-center justify-between gap-3">
          <h2 class="text-lg font-medium text-[var(--text-strong,#0f172a)]">${msg['invoice.title']}</h2>
          <button
            type="button"
            class="inline-flex items-center gap-2 rounded-md px-3 py-1.5 text-sm font-medium bg-[var(--button-secondary-bg,#f1f5f9)] text-[var(--button-secondary-text,#0f172a)] border border-[var(--button-secondary-border,#e2e8f0)] disabled:opacity-60"
            ?disabled=${isLoading}
            @click=${(event: Event) => this.handleGetInvoiceClick(event)}
          >
            ${isLoading ? msg['invoice.loading'] : msg['invoice.refresh']}
          </button>
        </div>
        ${isLoading
          ? html`<p class="text-sm text-[var(--text-muted,#64748b)]">${msg['invoice.loading']}</p>`
          : nothing}
        ${isError
          ? html`
              <div class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--status-error-bg,#fef2f2)] px-3 py-2 text-sm text-[var(--status-error-text,#991b1b)]" role="alert">
                ${msg['status.error']}
              </div>
            `
          : nothing}
        ${!isLoading && !data
          ? html`<p class="text-sm text-[var(--text-muted,#64748b)]">${msg['invoice.empty']}</p>`
          : nothing}
        ${data
          ? html`
              <dl class="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 text-sm">
                <div class="space-y-0.5">
                  <dt class="text-[var(--text-muted,#64748b)]">${msg['invoice.field.invoiceId']}</dt>
                  <dd class="text-[var(--text-default,#0f172a)] font-medium">${formatValue(data.invoiceId)}</dd>
                </div>
                <div class="space-y-0.5">
                  <dt class="text-[var(--text-muted,#64748b)]">${msg['invoice.field.projectId']}</dt>
                  <dd class="text-[var(--text-default,#0f172a)] font-medium">${formatValue(data.projectId)}</dd>
                </div>
                <div class="space-y-0.5">
                  <dt class="text-[var(--text-muted,#64748b)]">${msg['invoice.field.clientId']}</dt>
                  <dd class="text-[var(--text-default,#0f172a)] font-medium">${formatValue(data.clientId)}</dd>
                </div>
                <div class="space-y-0.5">
                  <dt class="text-[var(--text-muted,#64748b)]">${msg['invoice.field.invoiceNumber']}</dt>
                  <dd class="text-[var(--text-default,#0f172a)] font-medium">${formatValue(data.invoiceNumber)}</dd>
                </div>
                <div class="space-y-0.5">
                  <dt class="text-[var(--text-muted,#64748b)]">${msg['invoice.field.status']}</dt>
                  <dd class="text-[var(--text-default,#0f172a)] font-medium">${formatValue(data.status)}</dd>
                </div>
                <div class="space-y-0.5">
                  <dt class="text-[var(--text-muted,#64748b)]">${msg['invoice.field.totalAmount']}</dt>
                  <dd class="text-[var(--text-default,#0f172a)] font-medium">${formatValue(data.totalAmount)}</dd>
                </div>
                <div class="space-y-0.5">
                  <dt class="text-[var(--text-muted,#64748b)]">${msg['invoice.field.sentAt']}</dt>
                  <dd class="text-[var(--text-default,#0f172a)] font-medium">${formatValue(data.sentAt)}</dd>
                </div>
                <div class="space-y-0.5">
                  <dt class="text-[var(--text-muted,#64748b)]">${msg['invoice.field.createdAt']}</dt>
                  <dd class="text-[var(--text-default,#0f172a)] font-medium">${formatValue(data.createdAt)}</dd>
                </div>
              </dl>
            `
          : nothing}
      </section>
    `;
  }
}
