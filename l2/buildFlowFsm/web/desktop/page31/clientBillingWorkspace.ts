/// <mls fileReference="_102045_/l2/buildFlowFsm/web/desktop/page31/clientBillingWorkspace.ts" enhancement="_102020_/l2/enhancementAura"/>

import { html, nothing, type TemplateResult } from 'lit';
import { customElement } from 'lit/decorators.js';
import {
  BuildFlowFsmClientBillingWorkspaceBase,
  messages as sharedMessages,
} from '/_102045_/l2/buildFlowFsm/web/shared/clientBillingWorkspace.js';
import type {
  GetBillingSummaryOutput,
  GetInvoiceOutput,
} from '/_102045_/l2/buildFlowFsm/web/shared/clientBillingWorkspace.js';

const sharedFallback = sharedMessages[Object.keys(sharedMessages)[0]];

/// **collab_i18n_start**
const s_en = sharedMessages['en'] ?? sharedFallback;
const pageMessage_en = {
  'billingSummary.title': s_en['section.clientBillingWorkspace.billingSummarySection.title'],
  'invoice.title': s_en['section.clientBillingWorkspace.invoiceSection.title'],
  'col.projectName': s_en['intent.clientBillingWorkspace.getBillingSummary.list.column.projectName.label'],
  'col.status': s_en['intent.clientBillingWorkspace.getBillingSummary.list.column.status.label'],
  'col.periodStart': s_en['intent.clientBillingWorkspace.getBillingSummary.list.column.periodStart.label'],
  'col.periodEnd': s_en['intent.clientBillingWorkspace.getBillingSummary.list.column.periodEnd.label'],
  'col.laborCost': s_en['intent.clientBillingWorkspace.getBillingSummary.list.column.laborCost.label'],
  'col.materialCost': s_en['intent.clientBillingWorkspace.getBillingSummary.list.column.materialCost.label'],
  'col.changeOrderCost': s_en['intent.clientBillingWorkspace.getBillingSummary.list.column.changeOrderCost.label'],
  'col.totalCost': s_en['intent.clientBillingWorkspace.getBillingSummary.list.column.totalCost.label'],
  'col.sharedAt': s_en['intent.clientBillingWorkspace.getBillingSummary.list.column.sharedAt.label'],
  'col.invoiceNumber': s_en['intent.clientBillingWorkspace.getInvoice.list.column.invoiceNumber.label'],
  'col.invoiceStatus': s_en['intent.clientBillingWorkspace.getInvoice.list.column.status.label'],
  'col.totalAmount': s_en['intent.clientBillingWorkspace.getInvoice.list.column.totalAmount.label'],
  'col.sentAt': s_en['intent.clientBillingWorkspace.getInvoice.list.column.sentAt.label'],
  'col.createdAt': s_en['intent.clientBillingWorkspace.getInvoice.list.column.createdAt.label'],
  'col.projectId': s_en['intent.clientBillingWorkspace.getInvoice.list.column.projectId.label'],
  'summary.empty': s_en['intent.clientBillingWorkspace.getBillingSummary.list.empty'],
  'invoice.empty': s_en['intent.clientBillingWorkspace.getInvoice.list.empty'],
  'doc.heading': 'Billing document',
  'doc.period': 'Billing period',
  'doc.costBreakdown': 'Cost breakdown',
  'doc.line': 'Description',
  'doc.amount': 'Amount',
  'doc.totals': 'Totals',
  'doc.footer': 'Document details',
  'doc.loading': 'Preparing document…',
  'doc.loadError': 'This document could not be loaded.',
  'doc.retry': 'Try again',
  'doc.print': 'Print',
  'doc.dash': '—',
};
type PageMessageType = typeof pageMessage_en;
const s_pt_br = sharedMessages['pt-br'] ?? sharedFallback;
const pageMessage_pt_br: PageMessageType = {
  'billingSummary.title': s_pt_br['section.clientBillingWorkspace.billingSummarySection.title'],
  'invoice.title': s_pt_br['section.clientBillingWorkspace.invoiceSection.title'],
  'col.projectName': s_pt_br['intent.clientBillingWorkspace.getBillingSummary.list.column.projectName.label'],
  'col.status': s_pt_br['intent.clientBillingWorkspace.getBillingSummary.list.column.status.label'],
  'col.periodStart': s_pt_br['intent.clientBillingWorkspace.getBillingSummary.list.column.periodStart.label'],
  'col.periodEnd': s_pt_br['intent.clientBillingWorkspace.getBillingSummary.list.column.periodEnd.label'],
  'col.laborCost': s_pt_br['intent.clientBillingWorkspace.getBillingSummary.list.column.laborCost.label'],
  'col.materialCost': s_pt_br['intent.clientBillingWorkspace.getBillingSummary.list.column.materialCost.label'],
  'col.changeOrderCost': s_pt_br['intent.clientBillingWorkspace.getBillingSummary.list.column.changeOrderCost.label'],
  'col.totalCost': s_pt_br['intent.clientBillingWorkspace.getBillingSummary.list.column.totalCost.label'],
  'col.sharedAt': s_pt_br['intent.clientBillingWorkspace.getBillingSummary.list.column.sharedAt.label'],
  'col.invoiceNumber': s_pt_br['intent.clientBillingWorkspace.getInvoice.list.column.invoiceNumber.label'],
  'col.invoiceStatus': s_pt_br['intent.clientBillingWorkspace.getInvoice.list.column.status.label'],
  'col.totalAmount': s_pt_br['intent.clientBillingWorkspace.getInvoice.list.column.totalAmount.label'],
  'col.sentAt': s_pt_br['intent.clientBillingWorkspace.getInvoice.list.column.sentAt.label'],
  'col.createdAt': s_pt_br['intent.clientBillingWorkspace.getInvoice.list.column.createdAt.label'],
  'col.projectId': s_pt_br['intent.clientBillingWorkspace.getInvoice.list.column.projectId.label'],
  'summary.empty': s_pt_br['intent.clientBillingWorkspace.getBillingSummary.list.empty'],
  'invoice.empty': s_pt_br['intent.clientBillingWorkspace.getInvoice.list.empty'],
  'doc.heading': 'Documento de faturamento',
  'doc.period': 'Período de faturamento',
  'doc.costBreakdown': 'Detalhamento de custos',
  'doc.line': 'Descrição',
  'doc.amount': 'Valor',
  'doc.totals': 'Totais',
  'doc.footer': 'Detalhes do documento',
  'doc.loading': 'Preparando documento…',
  'doc.loadError': 'Não foi possível carregar este documento.',
  'doc.retry': 'Tentar novamente',
  'doc.print': 'Imprimir',
  'doc.dash': '—',
};
const s_es = sharedMessages['es'] ?? sharedFallback;
const pageMessage_es: PageMessageType = {
  'billingSummary.title': s_es['section.clientBillingWorkspace.billingSummarySection.title'],
  'invoice.title': s_es['section.clientBillingWorkspace.invoiceSection.title'],
  'col.projectName': s_es['intent.clientBillingWorkspace.getBillingSummary.list.column.projectName.label'],
  'col.status': s_es['intent.clientBillingWorkspace.getBillingSummary.list.column.status.label'],
  'col.periodStart': s_es['intent.clientBillingWorkspace.getBillingSummary.list.column.periodStart.label'],
  'col.periodEnd': s_es['intent.clientBillingWorkspace.getBillingSummary.list.column.periodEnd.label'],
  'col.laborCost': s_es['intent.clientBillingWorkspace.getBillingSummary.list.column.laborCost.label'],
  'col.materialCost': s_es['intent.clientBillingWorkspace.getBillingSummary.list.column.materialCost.label'],
  'col.changeOrderCost': s_es['intent.clientBillingWorkspace.getBillingSummary.list.column.changeOrderCost.label'],
  'col.totalCost': s_es['intent.clientBillingWorkspace.getBillingSummary.list.column.totalCost.label'],
  'col.sharedAt': s_es['intent.clientBillingWorkspace.getBillingSummary.list.column.sharedAt.label'],
  'col.invoiceNumber': s_es['intent.clientBillingWorkspace.getInvoice.list.column.invoiceNumber.label'],
  'col.invoiceStatus': s_es['intent.clientBillingWorkspace.getInvoice.list.column.status.label'],
  'col.totalAmount': s_es['intent.clientBillingWorkspace.getInvoice.list.column.totalAmount.label'],
  'col.sentAt': s_es['intent.clientBillingWorkspace.getInvoice.list.column.sentAt.label'],
  'col.createdAt': s_es['intent.clientBillingWorkspace.getInvoice.list.column.createdAt.label'],
  'col.projectId': s_es['intent.clientBillingWorkspace.getInvoice.list.column.projectId.label'],
  'summary.empty': s_es['intent.clientBillingWorkspace.getBillingSummary.list.empty'],
  'invoice.empty': s_es['intent.clientBillingWorkspace.getInvoice.list.empty'],
  'doc.heading': 'Documento de facturación',
  'doc.period': 'Período de facturación',
  'doc.costBreakdown': 'Desglose de costos',
  'doc.line': 'Descripción',
  'doc.amount': 'Importe',
  'doc.totals': 'Totales',
  'doc.footer': 'Detalles del documento',
  'doc.loading': 'Preparando documento…',
  'doc.loadError': 'No se pudo cargar este documento.',
  'doc.retry': 'Reintentar',
  'doc.print': 'Imprimir',
  'doc.dash': '—',
};
const pageMessages: { [key: string]: PageMessageType } = { 'en': pageMessage_en, 'pt-br': pageMessage_pt_br, 'es': pageMessage_es };
/// **collab_i18n_end**

const pageFallback = pageMessages[Object.keys(pageMessages)[0]];

@customElement('build-flow-fsm--web--desktop--page31--client-billing-workspace-102045')
export class BuildFlowFsmDesktopPage31ClientBillingWorkspacePage extends BuildFlowFsmClientBillingWorkspaceBase {
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
    const summaryLoading: boolean = this.getBillingSummaryState === 'loading';
    const invoiceLoading: boolean = this.getInvoiceState === 'loading';
    const anyLoading: boolean = summaryLoading || invoiceLoading;
    const summaryReady: boolean = this.getBillingSummaryData !== null && this.getBillingSummaryState === 'success';
    const invoiceReady: boolean = this.getInvoiceData !== null && this.getInvoiceState === 'success';
    const canPrint: boolean = summaryReady || invoiceReady;

    return html`
      <div class="min-h-full bg-[var(--page-bg,#f8fafc)] text-[var(--text-default,#0f172a)] px-4 py-6 md:px-8 md:py-8">
        <div class="mx-auto flex w-full max-w-3xl flex-col gap-4">
          <div class="flex flex-wrap items-center justify-end gap-2 print:hidden">
            <button
              type="button"
              class="rounded-md border border-[var(--button-secondary-border,#e2e8f0)] bg-[var(--button-secondary-bg,#ffffff)] px-4 py-2 text-sm font-medium text-[var(--button-secondary-text,#0f172a)] disabled:opacity-50"
              ?disabled=${!canPrint || anyLoading}
              @click=${() => window.print()}
            >
              ${msg['doc.print']}
            </button>
          </div>

          <div
            class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] px-6 py-8 shadow-[var(--shadow-small,0_1px_2px_rgba(15,23,42,0.06))] md:px-10 md:py-10"
          >
            <header class="border-b border-[var(--border-subtle,#e2e8f0)] pb-6">
              <p class="text-xs uppercase tracking-wide text-[var(--text-muted,#64748b)]">${msg['doc.heading']}</p>
              ${this.renderDocumentHeader()}
            </header>

            <div class="pt-6">
              ${this.renderBillingSummaryBody()}
            </div>

            <div class="mt-8 border-t border-[var(--border-subtle,#e2e8f0)] pt-6">
              ${this.renderInvoiceBody()}
            </div>

            <footer class="mt-10 border-t border-[var(--border-subtle,#e2e8f0)] pt-4 text-xs text-[var(--text-muted,#64748b)]">
              ${this.renderDocumentFooter()}
            </footer>
          </div>
        </div>
      </div>
    `;
  }

  renderDocumentHeader(): TemplateResult {
    const msg = this.msg;
    const summary: GetBillingSummaryOutput | null = this.getBillingSummaryData;
    const invoice: GetInvoiceOutput | null = this.getInvoiceData;
    const dash: string = msg['doc.dash'];

    if (this.getBillingSummaryState === 'loading' && !summary) {
      return html`
        <div class="mt-3 space-y-2" aria-busy="true">
          <div class="h-7 w-2/3 max-w-md rounded bg-[var(--surface-alt-bg,#f1f5f9)]"></div>
          <div class="h-4 w-1/2 max-w-sm rounded bg-[var(--surface-alt-bg,#f1f5f9)]"></div>
        </div>
      `;
    }

    const projectName: string =
      summary && typeof summary.projectName === 'string' && summary.projectName
        ? summary.projectName
        : dash;
    const periodStart: string = summary ? this.formatDisplayValue(summary.periodStart) : dash;
    const periodEnd: string = summary ? this.formatDisplayValue(summary.periodEnd) : dash;
    const summaryStatus: string =
      summary && summary.status !== undefined && summary.status !== null
        ? String(summary.status)
        : dash;
    const invoiceNumber: string =
      invoice && typeof invoice.invoiceNumber === 'string' && invoice.invoiceNumber
        ? invoice.invoiceNumber
        : dash;

    return html`
      <div class="mt-3 flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
        <div class="min-w-0 space-y-1">
          <h2 class="text-xl font-semibold text-[var(--text-strong,#020617)] md:text-2xl">${projectName}</h2>
          <p class="text-sm text-[var(--text-muted,#64748b)]">
            <span class="font-medium text-[var(--text-default,#0f172a)]">${msg['doc.period']}</span>
            · ${periodStart} – ${periodEnd}
          </p>
        </div>
        <div class="shrink-0 space-y-1 text-sm md:text-right">
          <p>
            <span class="text-[var(--text-muted,#64748b)]">${msg['col.status']}</span>
            <span class="ml-2 font-medium text-[var(--text-default,#0f172a)]">${summaryStatus}</span>
          </p>
          <p>
            <span class="text-[var(--text-muted,#64748b)]">${msg['col.invoiceNumber']}</span>
            <span class="ml-2 font-medium tabular-nums text-[var(--text-default,#0f172a)]">${invoiceNumber}</span>
          </p>
        </div>
      </div>
    `;
  }

  renderBillingSummaryBody(): TemplateResult {
    const msg = this.msg;
    const summary: GetBillingSummaryOutput | null = this.getBillingSummaryData;
    const state = this.getBillingSummaryState;

    if (state === 'loading' && !summary) {
      return html`
        <div class="space-y-3" aria-busy="true">
          <p class="text-sm text-[var(--text-muted,#64748b)]">${msg['doc.loading']}</p>
          <div class="h-4 w-full rounded bg-[var(--surface-alt-bg,#f1f5f9)]"></div>
          <div class="h-4 w-5/6 rounded bg-[var(--surface-alt-bg,#f1f5f9)]"></div>
          <div class="h-4 w-2/3 rounded bg-[var(--surface-alt-bg,#f1f5f9)]"></div>
        </div>
      `;
    }

    if (state === 'error' && !summary) {
      return html`
        <div class="space-y-3 print:hidden">
          <p class="text-sm text-[var(--text-default,#0f172a)]">${msg['doc.loadError']}</p>
          <button
            type="button"
            class="rounded-md bg-[var(--button-primary-bg,#0f172a)] px-4 py-2 text-sm font-medium text-[var(--button-primary-text,#f8fafc)]"
            @click=${(e: Event) => this.handleGetBillingSummaryClick(e)}
          >
            ${msg['doc.retry']}
          </button>
        </div>
      `;
    }

    if (!summary) {
      const canLoad: boolean = Boolean(this.getBillingSummaryBillingSummaryId);
      return html`
        <div class="space-y-3">
          <p class="text-sm text-[var(--text-muted,#64748b)]">${msg['summary.empty']}</p>
          ${canLoad
            ? html`
                <button
                  type="button"
                  class="rounded-md bg-[var(--button-secondary-bg,#ffffff)] px-4 py-2 text-sm font-medium text-[var(--button-secondary-text,#0f172a)] border border-[var(--button-secondary-border,#e2e8f0)] print:hidden"
                  @click=${(e: Event) => this.handleGetBillingSummaryClick(e)}
                >
                  ${msg['billingSummary.title']}
                </button>
              `
            : nothing}
        </div>
      `;
    }

    const labor: string = this.formatAmount(summary.laborCost);
    const material: string = this.formatAmount(summary.materialCost);
    const changeOrder: string = this.formatAmount(summary.changeOrderCost);
    const total: string = this.formatAmount(summary.totalCost);

    return html`
      <div>
        <h3 class="mb-3 text-sm font-semibold uppercase tracking-wide text-[var(--text-muted,#64748b)]">
          ${msg['billingSummary.title']} · ${msg['doc.costBreakdown']}
        </h3>
        <table class="w-full border-collapse text-sm">
          <thead>
            <tr class="border-b border-[var(--border-default,#e2e8f0)] text-left text-[var(--text-muted,#64748b)]">
              <th class="py-2 pr-4 font-medium">${msg['doc.line']}</th>
              <th class="py-2 pl-4 text-right font-medium">${msg['doc.amount']}</th>
            </tr>
          </thead>
          <tbody class="text-[var(--text-default,#0f172a)]">
            <tr class="border-b border-[var(--border-subtle,#e2e8f0)]">
              <td class="py-2.5 pr-4">${msg['col.laborCost']}</td>
              <td class="py-2.5 pl-4 text-right tabular-nums">${labor}</td>
            </tr>
            <tr class="border-b border-[var(--border-subtle,#e2e8f0)]">
              <td class="py-2.5 pr-4">${msg['col.materialCost']}</td>
              <td class="py-2.5 pl-4 text-right tabular-nums">${material}</td>
            </tr>
            <tr class="border-b border-[var(--border-subtle,#e2e8f0)]">
              <td class="py-2.5 pr-4">${msg['col.changeOrderCost']}</td>
              <td class="py-2.5 pl-4 text-right tabular-nums">${changeOrder}</td>
            </tr>
          </tbody>
          <tfoot>
            <tr class="border-t border-[var(--border-default,#e2e8f0)]">
              <th scope="row" class="pt-3 pr-4 text-left text-base font-semibold text-[var(--text-strong,#020617)]">
                ${msg['col.totalCost']}
              </th>
              <td class="pt-3 pl-4 text-right text-base font-semibold tabular-nums text-[var(--text-strong,#020617)]">
                ${total}
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    `;
  }

  renderInvoiceBody(): TemplateResult {
    const msg = this.msg;
    const invoice: GetInvoiceOutput | null = this.getInvoiceData;
    const state = this.getInvoiceState;
    const dash: string = msg['doc.dash'];

    if (state === 'loading' && !invoice) {
      return html`
        <div class="space-y-3" aria-busy="true">
          <p class="text-sm text-[var(--text-muted,#64748b)]">${msg['doc.loading']}</p>
          <div class="h-4 w-1/2 rounded bg-[var(--surface-alt-bg,#f1f5f9)]"></div>
          <div class="h-4 w-1/3 rounded bg-[var(--surface-alt-bg,#f1f5f9)]"></div>
        </div>
      `;
    }

    if (state === 'error' && !invoice) {
      return html`
        <div class="space-y-3 print:hidden">
          <p class="text-sm text-[var(--text-default,#0f172a)]">${msg['doc.loadError']}</p>
          <button
            type="button"
            class="rounded-md bg-[var(--button-primary-bg,#0f172a)] px-4 py-2 text-sm font-medium text-[var(--button-primary-text,#f8fafc)]"
            @click=${(e: Event) => this.handleGetInvoiceClick(e)}
          >
            ${msg['doc.retry']}
          </button>
        </div>
      `;
    }

    if (!invoice) {
      const canLoad: boolean = Boolean(this.getInvoiceInvoiceId);
      return html`
        <div class="space-y-3">
          <p class="text-sm text-[var(--text-muted,#64748b)]">${msg['invoice.empty']}</p>
          ${canLoad
            ? html`
                <button
                  type="button"
                  class="rounded-md border border-[var(--button-secondary-border,#e2e8f0)] bg-[var(--button-secondary-bg,#ffffff)] px-4 py-2 text-sm font-medium text-[var(--button-secondary-text,#0f172a)] print:hidden"
                  @click=${(e: Event) => this.handleGetInvoiceClick(e)}
                >
                  ${msg['invoice.title']}
                </button>
              `
            : nothing}
        </div>
      `;
    }

    const invoiceNumber: string =
      typeof invoice.invoiceNumber === 'string' && invoice.invoiceNumber
        ? invoice.invoiceNumber
        : dash;
    const invoiceStatus: string =
      invoice.status !== undefined && invoice.status !== null ? String(invoice.status) : dash;
    const totalAmount: string = this.formatAmount(invoice.totalAmount);
    const sentAt: string = this.formatDisplayValue(invoice.sentAt);
    const projectId: string =
      invoice.projectId !== undefined && invoice.projectId !== null && String(invoice.projectId)
        ? String(invoice.projectId)
        : dash;

    return html`
      <div>
        <h3 class="mb-4 text-sm font-semibold uppercase tracking-wide text-[var(--text-muted,#64748b)]">
          ${msg['invoice.title']}
        </h3>
        <dl class="grid grid-cols-1 gap-x-8 gap-y-3 text-sm sm:grid-cols-2">
          <div>
            <dt class="text-[var(--text-muted,#64748b)]">${msg['col.invoiceNumber']}</dt>
            <dd class="mt-0.5 font-medium tabular-nums text-[var(--text-default,#0f172a)]">${invoiceNumber}</dd>
          </div>
          <div>
            <dt class="text-[var(--text-muted,#64748b)]">${msg['col.invoiceStatus']}</dt>
            <dd class="mt-0.5 font-medium text-[var(--text-default,#0f172a)]">${invoiceStatus}</dd>
          </div>
          <div>
            <dt class="text-[var(--text-muted,#64748b)]">${msg['col.sentAt']}</dt>
            <dd class="mt-0.5 tabular-nums text-[var(--text-default,#0f172a)]">${sentAt}</dd>
          </div>
          <div>
            <dt class="text-[var(--text-muted,#64748b)]">${msg['col.projectId']}</dt>
            <dd class="mt-0.5 tabular-nums text-[var(--text-default,#0f172a)]">${projectId}</dd>
          </div>
          <div class="sm:col-span-2 border-t border-[var(--border-subtle,#e2e8f0)] pt-3">
            <dt class="text-[var(--text-muted,#64748b)]">${msg['col.totalAmount']}</dt>
            <dd class="mt-0.5 text-lg font-semibold tabular-nums text-[var(--text-strong,#020617)]">${totalAmount}</dd>
          </div>
        </dl>
      </div>
    `;
  }

  renderDocumentFooter(): TemplateResult {
    const msg = this.msg;
    const summary: GetBillingSummaryOutput | null = this.getBillingSummaryData;
    const invoice: GetInvoiceOutput | null = this.getInvoiceData;
    const dash: string = msg['doc.dash'];

    const sharedAt: string = summary ? this.formatDisplayValue(summary.sharedAt) : dash;
    const createdAt: string = invoice ? this.formatDisplayValue(invoice.createdAt) : dash;
    const periodStart: string = summary ? this.formatDisplayValue(summary.periodStart) : dash;
    const periodEnd: string = summary ? this.formatDisplayValue(summary.periodEnd) : dash;

    return html`
      <p class="font-medium text-[var(--text-muted,#64748b)]">${msg['doc.footer']}</p>
      <ul class="mt-2 space-y-1">
        <li>${msg['col.sharedAt']}: ${sharedAt}</li>
        <li>${msg['col.createdAt']}: ${createdAt}</li>
        <li>${msg['col.periodStart']}: ${periodStart} · ${msg['col.periodEnd']}: ${periodEnd}</li>
      </ul>
    `;
  }

  private formatAmount(value: unknown): string {
    const msg = this.msg;
    if (value === null || value === undefined || value === '') {
      return msg['doc.dash'];
    }
    const num: number = typeof value === 'number' ? value : Number(value);
    if (Number.isFinite(num)) {
      return new Intl.NumberFormat(undefined, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      }).format(num);
    }
    return String(value);
  }

  private formatDisplayValue(value: unknown): string {
    const msg = this.msg;
    if (value === null || value === undefined || value === '') {
      return msg['doc.dash'];
    }
    if (typeof value === 'string') {
      const parsed: number = Date.parse(value);
      if (!Number.isNaN(parsed) && (value.includes('T') || /^\d{4}-\d{2}-\d{2}/.test(value))) {
        try {
          return new Intl.DateTimeFormat(undefined, {
            year: 'numeric',
            month: 'short',
            day: '2-digit',
          }).format(new Date(parsed));
        } catch {
          return value;
        }
      }
      return value;
    }
    if (typeof value === 'number' || typeof value === 'boolean') {
      return String(value);
    }
    return String(value);
  }
}
