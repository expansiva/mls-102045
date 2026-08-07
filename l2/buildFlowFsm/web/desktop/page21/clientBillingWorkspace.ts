/// <mls fileReference="_102045_/l2/buildFlowFsm/web/desktop/page21/clientBillingWorkspace.ts" enhancement="_102020_/l2/enhancementAura"/>

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
  'billing.section': s_en['section.clientBillingWorkspace.billingSummarySection.title'],
  'billing.empty': s_en['intent.clientBillingWorkspace.getBillingSummary.list.empty'],
  'billing.projectName': s_en['intent.clientBillingWorkspace.getBillingSummary.list.column.projectName.label'],
  'billing.status': s_en['intent.clientBillingWorkspace.getBillingSummary.list.column.status.label'],
  'billing.periodStart': s_en['intent.clientBillingWorkspace.getBillingSummary.list.column.periodStart.label'],
  'billing.periodEnd': s_en['intent.clientBillingWorkspace.getBillingSummary.list.column.periodEnd.label'],
  'billing.laborCost': s_en['intent.clientBillingWorkspace.getBillingSummary.list.column.laborCost.label'],
  'billing.materialCost': s_en['intent.clientBillingWorkspace.getBillingSummary.list.column.materialCost.label'],
  'billing.changeOrderCost': s_en['intent.clientBillingWorkspace.getBillingSummary.list.column.changeOrderCost.label'],
  'billing.totalCost': s_en['intent.clientBillingWorkspace.getBillingSummary.list.column.totalCost.label'],
  'billing.sharedAt': s_en['intent.clientBillingWorkspace.getBillingSummary.list.column.sharedAt.label'],
  'invoice.section': s_en['section.clientBillingWorkspace.invoiceSection.title'],
  'invoice.empty': s_en['intent.clientBillingWorkspace.getInvoice.list.empty'],
  'invoice.number': s_en['intent.clientBillingWorkspace.getInvoice.list.column.invoiceNumber.label'],
  'invoice.status': s_en['intent.clientBillingWorkspace.getInvoice.list.column.status.label'],
  'invoice.totalAmount': s_en['intent.clientBillingWorkspace.getInvoice.list.column.totalAmount.label'],
  'invoice.sentAt': s_en['intent.clientBillingWorkspace.getInvoice.list.column.sentAt.label'],
  'invoice.createdAt': s_en['intent.clientBillingWorkspace.getInvoice.list.column.createdAt.label'],
  'headline.label': 'Total due',
  'ref.period': 'Billing period',
  'breakdown.title': 'Cost breakdown',
  'payment.note': 'Payment is handled externally. Use this statement to review charges before paying outside the app.',
  'loading': 'Loading…',
  'error.load': 'Could not load this information.',
  'retry': 'Try again',
};
type PageMessageType = typeof pageMessage_en;
const s_pt_br = sharedMessages['pt-br'] ?? sharedFallback;
const pageMessage_pt_br: PageMessageType = {
  'billing.section': s_pt_br['section.clientBillingWorkspace.billingSummarySection.title'],
  'billing.empty': s_pt_br['intent.clientBillingWorkspace.getBillingSummary.list.empty'],
  'billing.projectName': s_pt_br['intent.clientBillingWorkspace.getBillingSummary.list.column.projectName.label'],
  'billing.status': s_pt_br['intent.clientBillingWorkspace.getBillingSummary.list.column.status.label'],
  'billing.periodStart': s_pt_br['intent.clientBillingWorkspace.getBillingSummary.list.column.periodStart.label'],
  'billing.periodEnd': s_pt_br['intent.clientBillingWorkspace.getBillingSummary.list.column.periodEnd.label'],
  'billing.laborCost': s_pt_br['intent.clientBillingWorkspace.getBillingSummary.list.column.laborCost.label'],
  'billing.materialCost': s_pt_br['intent.clientBillingWorkspace.getBillingSummary.list.column.materialCost.label'],
  'billing.changeOrderCost': s_pt_br['intent.clientBillingWorkspace.getBillingSummary.list.column.changeOrderCost.label'],
  'billing.totalCost': s_pt_br['intent.clientBillingWorkspace.getBillingSummary.list.column.totalCost.label'],
  'billing.sharedAt': s_pt_br['intent.clientBillingWorkspace.getBillingSummary.list.column.sharedAt.label'],
  'invoice.section': s_pt_br['section.clientBillingWorkspace.invoiceSection.title'],
  'invoice.empty': s_pt_br['intent.clientBillingWorkspace.getInvoice.list.empty'],
  'invoice.number': s_pt_br['intent.clientBillingWorkspace.getInvoice.list.column.invoiceNumber.label'],
  'invoice.status': s_pt_br['intent.clientBillingWorkspace.getInvoice.list.column.status.label'],
  'invoice.totalAmount': s_pt_br['intent.clientBillingWorkspace.getInvoice.list.column.totalAmount.label'],
  'invoice.sentAt': s_pt_br['intent.clientBillingWorkspace.getInvoice.list.column.sentAt.label'],
  'invoice.createdAt': s_pt_br['intent.clientBillingWorkspace.getInvoice.list.column.createdAt.label'],
  'headline.label': 'Total a pagar',
  'ref.period': 'Período de faturamento',
  'breakdown.title': 'Detalhamento de custos',
  'payment.note': 'O pagamento é feito externamente. Use este extrato para revisar os valores antes de pagar fora do aplicativo.',
  'loading': 'Carregando…',
  'error.load': 'Não foi possível carregar estas informações.',
  'retry': 'Tentar de novo',
};
const s_es = sharedMessages['es'] ?? sharedFallback;
const pageMessage_es: PageMessageType = {
  'billing.section': s_es['section.clientBillingWorkspace.billingSummarySection.title'],
  'billing.empty': s_es['intent.clientBillingWorkspace.getBillingSummary.list.empty'],
  'billing.projectName': s_es['intent.clientBillingWorkspace.getBillingSummary.list.column.projectName.label'],
  'billing.status': s_es['intent.clientBillingWorkspace.getBillingSummary.list.column.status.label'],
  'billing.periodStart': s_es['intent.clientBillingWorkspace.getBillingSummary.list.column.periodStart.label'],
  'billing.periodEnd': s_es['intent.clientBillingWorkspace.getBillingSummary.list.column.periodEnd.label'],
  'billing.laborCost': s_es['intent.clientBillingWorkspace.getBillingSummary.list.column.laborCost.label'],
  'billing.materialCost': s_es['intent.clientBillingWorkspace.getBillingSummary.list.column.materialCost.label'],
  'billing.changeOrderCost': s_es['intent.clientBillingWorkspace.getBillingSummary.list.column.changeOrderCost.label'],
  'billing.totalCost': s_es['intent.clientBillingWorkspace.getBillingSummary.list.column.totalCost.label'],
  'billing.sharedAt': s_es['intent.clientBillingWorkspace.getBillingSummary.list.column.sharedAt.label'],
  'invoice.section': s_es['section.clientBillingWorkspace.invoiceSection.title'],
  'invoice.empty': s_es['intent.clientBillingWorkspace.getInvoice.list.empty'],
  'invoice.number': s_es['intent.clientBillingWorkspace.getInvoice.list.column.invoiceNumber.label'],
  'invoice.status': s_es['intent.clientBillingWorkspace.getInvoice.list.column.status.label'],
  'invoice.totalAmount': s_es['intent.clientBillingWorkspace.getInvoice.list.column.totalAmount.label'],
  'invoice.sentAt': s_es['intent.clientBillingWorkspace.getInvoice.list.column.sentAt.label'],
  'invoice.createdAt': s_es['intent.clientBillingWorkspace.getInvoice.list.column.createdAt.label'],
  'headline.label': 'Total a pagar',
  'ref.period': 'Período de facturación',
  'breakdown.title': 'Desglose de costos',
  'payment.note': 'El pago se gestiona de forma externa. Use este extracto para revisar los cargos antes de pagar fuera de la aplicación.',
  'loading': 'Cargando…',
  'error.load': 'No se pudo cargar esta información.',
  'retry': 'Reintentar',
};
const pageMessages: { [key: string]: PageMessageType } = { 'en': pageMessage_en, 'pt-br': pageMessage_pt_br, 'es': pageMessage_es };
/// **collab_i18n_end**

const pageFallback = pageMessages[Object.keys(pageMessages)[0]];

@customElement('build-flow-fsm--web--desktop--page21--client-billing-workspace-102045')
export class BuildFlowFsmDesktopPage21ClientBillingWorkspacePage extends BuildFlowFsmClientBillingWorkspaceBase {
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
    return html`
      <div class="mx-auto flex w-full max-w-3xl flex-col gap-6 p-6 bg-[var(--page-bg,#f8fafc)] text-[var(--text-default,#0f172a)]">
        ${this.renderHeadline()}
        ${this.renderReferenceFacts()}
        ${this.renderCostBreakdown()}
        ${this.renderInvoicePanel()}
        ${this.renderPaymentNote()}
      </div>
    `;
  }

  renderHeadline(): TemplateResult {
    const msg = this.msg;
    const loading: boolean = this.getBillingSummaryState === 'loading';
    const errored: boolean = this.getBillingSummaryState === 'error';
    const data: GetBillingSummaryOutput | null = this.getBillingSummaryData;

    if (loading) {
      return html`
        <section class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-8 shadow-sm" aria-busy="true">
          <div class="mb-3 h-4 w-24 animate-pulse rounded bg-[var(--surface-alt-bg,#f1f5f9)]"></div>
          <div class="h-14 w-48 animate-pulse rounded bg-[var(--surface-alt-bg,#f1f5f9)]"></div>
        </section>
      `;
    }

    if (errored) {
      return html`
        <section class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-6">
          <p class="text-[var(--text-default,#0f172a)]">${msg['error.load']}</p>
          <button
            type="button"
            class="mt-3 rounded-md px-4 py-2 bg-[var(--button-secondary-bg,#f1f5f9)] text-[var(--button-secondary-text,#0f172a)] border border-[var(--button-secondary-border,#e2e8f0)]"
            @click=${(e: Event) => this.handleGetBillingSummaryClick(e)}
          >
            ${msg['retry']}
          </button>
        </section>
      `;
    }

    if (!data) {
      return html`
        <section class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-8">
          <p class="text-sm text-[var(--text-muted,#64748b)]">${msg['billing.empty']}</p>
        </section>
      `;
    }

    const totalRaw: unknown = (data as { totalCost?: unknown }).totalCost;
    const totalLabel: string = this.formatMoney(totalRaw);

    return html`
      <section class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-8 shadow-sm">
        <p class="mb-2 text-sm font-medium uppercase tracking-wide text-[var(--text-muted,#64748b)]">
          ${msg['headline.label']}
        </p>
        <p class="text-5xl font-bold tabular-nums tracking-tight text-[var(--text-strong,#020617)] sm:text-6xl">
          ${totalLabel}
        </p>
      </section>
    `;
  }

  renderReferenceFacts(): TemplateResult {
    const msg = this.msg;
    const data: GetBillingSummaryOutput | null = this.getBillingSummaryData;
    if (this.getBillingSummaryState === 'loading' || this.getBillingSummaryState === 'error' || !data) {
      return html`${nothing}`;
    }

    const row = data as {
      projectName?: unknown;
      status?: unknown;
      periodStart?: unknown;
      periodEnd?: unknown;
      sharedAt?: unknown;
    };

    const projectName: string = this.asDisplay(row.projectName);
    const status: string = this.asDisplay(row.status);
    const periodStart: string = this.formatDate(row.periodStart);
    const periodEnd: string = this.formatDate(row.periodEnd);
    const sharedAt: string = this.formatDate(row.sharedAt);
    const periodText: string =
      periodStart || periodEnd ? `${periodStart || '—'} – ${periodEnd || '—'}` : '—';

    return html`
      <section class="rounded-lg border border-[var(--border-subtle,#e2e8f0)] bg-[var(--surface-alt-bg,#f1f5f9)] px-5 py-4">
        <dl class="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <div>
            <dt class="text-xs text-[var(--text-muted,#64748b)]">${msg['billing.projectName']}</dt>
            <dd class="text-sm font-medium text-[var(--text-default,#0f172a)]">${projectName || '—'}</dd>
          </div>
          <div>
            <dt class="text-xs text-[var(--text-muted,#64748b)]">${msg['billing.status']}</dt>
            <dd class="text-sm font-medium text-[var(--text-default,#0f172a)]">${status || '—'}</dd>
          </div>
          <div>
            <dt class="text-xs text-[var(--text-muted,#64748b)]">${msg['ref.period']}</dt>
            <dd class="text-sm font-medium tabular-nums text-[var(--text-default,#0f172a)]">${periodText}</dd>
          </div>
          ${sharedAt
            ? html`
                <div>
                  <dt class="text-xs text-[var(--text-muted,#64748b)]">${msg['billing.sharedAt']}</dt>
                  <dd class="text-sm font-medium tabular-nums text-[var(--text-default,#0f172a)]">${sharedAt}</dd>
                </div>
              `
            : nothing}
        </dl>
      </section>
    `;
  }

  renderCostBreakdown(): TemplateResult {
    const msg = this.msg;
    const data: GetBillingSummaryOutput | null = this.getBillingSummaryData;
    if (this.getBillingSummaryState === 'loading' || this.getBillingSummaryState === 'error' || !data) {
      return html`${nothing}`;
    }

    const row = data as {
      laborCost?: unknown;
      materialCost?: unknown;
      changeOrderCost?: unknown;
      totalCost?: unknown;
    };

    const lines: Array<{ label: string; value: string; emphasize?: boolean }> = [
      { label: msg['billing.laborCost'], value: this.formatMoney(row.laborCost) },
      { label: msg['billing.materialCost'], value: this.formatMoney(row.materialCost) },
      { label: msg['billing.changeOrderCost'], value: this.formatMoney(row.changeOrderCost) },
      { label: msg['billing.totalCost'], value: this.formatMoney(row.totalCost), emphasize: true },
    ];

    return html`
      <section class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-5">
        <h2 class="mb-4 text-sm font-semibold text-[var(--text-strong,#020617)]">${msg['breakdown.title']}</h2>
        <div class="divide-y divide-[var(--border-subtle,#e2e8f0)]">
          ${lines.map(
            (line) => html`
              <div class="flex items-baseline justify-between gap-4 py-2.5">
                <span class="${line.emphasize ? 'font-semibold text-[var(--text-strong,#020617)]' : 'text-[var(--text-default,#0f172a)]'} text-sm">
                  ${line.label}
                </span>
                <span
                  class="tabular-nums text-sm ${line.emphasize
                    ? 'font-semibold text-[var(--text-strong,#020617)]'
                    : 'text-[var(--text-default,#0f172a)]'}"
                >
                  ${line.value}
                </span>
              </div>
            `,
          )}
        </div>
      </section>
    `;
  }

  renderInvoicePanel(): TemplateResult {
    const msg = this.msg;
    const loading: boolean = this.getInvoiceState === 'loading';
    const errored: boolean = this.getInvoiceState === 'error';
    const data: GetInvoiceOutput | null = this.getInvoiceData;

    if (loading) {
      return html`
        <section class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-5" aria-busy="true">
          <div class="mb-4 h-4 w-28 animate-pulse rounded bg-[var(--surface-alt-bg,#f1f5f9)]"></div>
          <div class="space-y-3">
            <div class="h-3 w-full animate-pulse rounded bg-[var(--surface-alt-bg,#f1f5f9)]"></div>
            <div class="h-3 w-2/3 animate-pulse rounded bg-[var(--surface-alt-bg,#f1f5f9)]"></div>
            <div class="h-3 w-1/2 animate-pulse rounded bg-[var(--surface-alt-bg,#f1f5f9)]"></div>
          </div>
        </section>
      `;
    }

    if (errored) {
      return html`
        <section class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-5">
          <h2 class="mb-3 text-sm font-semibold text-[var(--text-strong,#020617)]">${msg['invoice.section']}</h2>
          <p class="text-[var(--text-default,#0f172a)]">${msg['error.load']}</p>
          <button
            type="button"
            class="mt-3 rounded-md px-4 py-2 bg-[var(--button-secondary-bg,#f1f5f9)] text-[var(--button-secondary-text,#0f172a)] border border-[var(--button-secondary-border,#e2e8f0)]"
            @click=${(e: Event) => this.handleGetInvoiceClick(e)}
          >
            ${msg['retry']}
          </button>
        </section>
      `;
    }

    if (!data) {
      return html`
        <section class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-5">
          <h2 class="mb-3 text-sm font-semibold text-[var(--text-strong,#020617)]">${msg['invoice.section']}</h2>
          <p class="text-sm text-[var(--text-muted,#64748b)]">${msg['invoice.empty']}</p>
        </section>
      `;
    }

    const inv = data as {
      invoiceNumber?: unknown;
      status?: unknown;
      totalAmount?: unknown;
      sentAt?: unknown;
      createdAt?: unknown;
    };

    return html`
      <section class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-5">
        <h2 class="mb-4 text-sm font-semibold text-[var(--text-strong,#020617)]">${msg['invoice.section']}</h2>
        <dl class="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <div>
            <dt class="text-xs text-[var(--text-muted,#64748b)]">${msg['invoice.number']}</dt>
            <dd class="text-sm font-medium text-[var(--text-default,#0f172a)]">${this.asDisplay(inv.invoiceNumber) || '—'}</dd>
          </div>
          <div>
            <dt class="text-xs text-[var(--text-muted,#64748b)]">${msg['invoice.status']}</dt>
            <dd class="text-sm font-medium text-[var(--text-default,#0f172a)]">${this.asDisplay(inv.status) || '—'}</dd>
          </div>
          <div>
            <dt class="text-xs text-[var(--text-muted,#64748b)]">${msg['invoice.totalAmount']}</dt>
            <dd class="text-sm font-semibold tabular-nums text-[var(--text-strong,#020617)]">${this.formatMoney(inv.totalAmount)}</dd>
          </div>
          <div>
            <dt class="text-xs text-[var(--text-muted,#64748b)]">${msg['invoice.sentAt']}</dt>
            <dd class="text-sm font-medium tabular-nums text-[var(--text-default,#0f172a)]">${this.formatDate(inv.sentAt) || '—'}</dd>
          </div>
          ${inv.createdAt !== undefined && inv.createdAt !== null && inv.createdAt !== ''
            ? html`
                <div>
                  <dt class="text-xs text-[var(--text-muted,#64748b)]">${msg['invoice.createdAt']}</dt>
                  <dd class="text-sm font-medium tabular-nums text-[var(--text-default,#0f172a)]">${this.formatDate(inv.createdAt) || '—'}</dd>
                </div>
              `
            : nothing}
        </dl>
      </section>
    `;
  }

  renderPaymentNote(): TemplateResult {
    const msg = this.msg;
    return html`
      <p class="px-1 text-xs leading-relaxed text-[var(--text-muted,#64748b)]">
        ${msg['payment.note']}
      </p>
    `;
  }

  private asDisplay(value: unknown): string {
    if (value === null || value === undefined) {
      return '';
    }
    return String(value);
  }

  private formatMoney(value: unknown): string {
    if (value === null || value === undefined || value === '') {
      return '—';
    }
    const num: number = typeof value === 'number' ? value : Number(value);
    if (!Number.isFinite(num)) {
      return String(value);
    }
    try {
      return new Intl.NumberFormat(undefined, {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      }).format(num);
    } catch {
      return num.toFixed(2);
    }
  }

  private formatDate(value: unknown): string {
    if (value === null || value === undefined || value === '') {
      return '';
    }
    const raw: string = String(value);
    const parsed: Date = new Date(raw);
    if (Number.isNaN(parsed.getTime())) {
      return raw;
    }
    try {
      return new Intl.DateTimeFormat(undefined, {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
      }).format(parsed);
    } catch {
      return raw;
    }
  }
}
