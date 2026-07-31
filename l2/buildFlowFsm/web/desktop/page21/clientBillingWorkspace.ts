/// <mls fileReference="_102045_/l2/buildFlowFsm/web/desktop/page21/clientBillingWorkspace.ts" enhancement="_102020_/l2/enhancementAura"/>

import { html, nothing } from 'lit';
import { customElement } from 'lit/decorators.js';
import { BuildFlowFsmClientBillingWorkspaceBase } from '/_102045_/l2/buildFlowFsm/web/shared/clientBillingWorkspace.js';
import type { GetBillingSummaryOutput, GetInvoiceOutput } from '/_102045_/l2/buildFlowFsm/web/shared/clientBillingWorkspace.js';

@customElement('build-flow-fsm--web--desktop--page21--client-billing-workspace-102045')
export class BuildFlowFsmDesktopPage21ClientBillingWorkspacePage extends BuildFlowFsmClientBillingWorkspaceBase {
  render() {
    const formatMoney = (value: number | null | undefined): string => {
      if (value === null || value === undefined || Number.isNaN(value)) return '—';
      return new Intl.NumberFormat(undefined, { style: 'currency', currency: 'USD' }).format(value);
    };
    const formatDate = (value: string | null | undefined): string => {
      if (!value) return '—';
      const d = new Date(value);
      if (Number.isNaN(d.getTime())) return value;
      return d.toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' });
    };
    const formatPeriod = (start: string | null | undefined, end: string | null | undefined): string => {
      const a = formatDate(start);
      const b = formatDate(end);
      if (a === '—' && b === '—') return '—';
      return `${a} – ${b}`;
    };

    const summaryLoading = this.getBillingSummaryState === 'loading';
    const summaryError = this.getBillingSummaryState === 'error';
    const summary: GetBillingSummaryOutput | null = this.getBillingSummaryData;
    const hasSummary = summary !== null && summary !== undefined;

    const invoiceLoading = this.getInvoiceState === 'loading';
    const invoiceError = this.getInvoiceState === 'error';
    const invoice: GetInvoiceOutput | null = this.getInvoiceData;
    const hasInvoice = invoice !== null && invoice !== undefined;

    return html`
      <div class="min-h-full bg-[var(--page-bg,#f8fafc)] text-[var(--text-default,#0f172a)] p-6 md:p-8">
        <header class="mb-6">
          <h1 class="text-2xl font-semibold text-[var(--text-strong,#020617)] tracking-tight">
            ${this.msg['section.clientBillingWorkspace.billing-summary-section.title']}
          </h1>
        </header>

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
          <!-- Billing summary (primary, summary-first) -->
          <section class="lg:col-span-2 rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] shadow-sm overflow-hidden">
            <div class="px-5 py-4 border-b border-[var(--border-subtle,#e2e8f0)] flex items-center justify-between gap-3">
              <h2 class="text-lg font-medium text-[var(--text-strong,#020617)]">
                ${this.msg['organism.clientBillingWorkspace.getBillingSummary.title']}
              </h2>
              ${summaryLoading
                ? html`<span class="text-sm text-[var(--text-muted,#64748b)]">…</span>`
                : nothing}
            </div>

            <div class="p-5">
              ${summaryLoading
                ? html`
                    <div class="space-y-4 animate-pulse" aria-busy="true">
                      <div class="h-8 w-2/3 rounded bg-[var(--surface-alt-bg,#f1f5f9)]"></div>
                      <div class="h-4 w-1/2 rounded bg-[var(--surface-alt-bg,#f1f5f9)]"></div>
                      <div class="grid grid-cols-2 md:grid-cols-4 gap-3 mt-6">
                        <div class="h-20 rounded bg-[var(--surface-alt-bg,#f1f5f9)]"></div>
                        <div class="h-20 rounded bg-[var(--surface-alt-bg,#f1f5f9)]"></div>
                        <div class="h-20 rounded bg-[var(--surface-alt-bg,#f1f5f9)]"></div>
                        <div class="h-20 rounded bg-[var(--surface-alt-bg,#f1f5f9)]"></div>
                      </div>
                    </div>
                  `
                : summaryError
                  ? html`
                      <div class="rounded-lg px-4 py-3 bg-[var(--status-error-bg,#fef2f2)] text-[var(--status-error-text,#991b1b)] text-sm">
                        ${this.msg['intent.clientBillingWorkspace.getBillingSummary.list.empty']}
                      </div>
                    `
                  : !hasSummary
                    ? html`
                        <p class="text-sm text-[var(--text-muted,#64748b)] py-6 text-center">
                          ${this.msg['intent.clientBillingWorkspace.getBillingSummary.list.empty']}
                        </p>
                      `
                    : html`
                        <!-- 1. Header: project, period, status -->
                        <div class="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
                          <div class="min-w-0">
                            <p class="text-xs uppercase tracking-wide text-[var(--text-muted,#64748b)] mb-1">
                              ${this.msg['intent.clientBillingWorkspace.getBillingSummary.list.column.projectName.label']}
                            </p>
                            <p class="text-xl font-semibold text-[var(--text-strong,#020617)] truncate">
                              ${summary.projectName || '—'}
                            </p>
                            <p class="mt-2 text-sm text-[var(--text-default,#0f172a)]">
                              <span class="text-[var(--text-muted,#64748b)]">
                                ${this.msg['intent.clientBillingWorkspace.getBillingSummary.list.column.periodStart.label']}
                                /
                                ${this.msg['intent.clientBillingWorkspace.getBillingSummary.list.column.periodEnd.label']}:
                              </span>
                              <span class="font-medium ml-1">${formatPeriod(summary.periodStart, summary.periodEnd)}</span>
                            </p>
                          </div>
                          <div class="flex flex-col items-start sm:items-end gap-2 shrink-0">
                            <span class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-[var(--status-info-bg,#eff6ff)] text-[var(--status-info-text,#1e40af)]">
                              ${summary.status || '—'}
                            </span>
                            ${summary.sharedAt
                              ? html`
                                  <span class="text-xs text-[var(--text-muted,#64748b)]">
                                    ${this.msg['intent.clientBillingWorkspace.getBillingSummary.list.column.sharedAt.label']}:
                                    ${formatDate(summary.sharedAt)}
                                  </span>
                                `
                              : nothing}
                          </div>
                        </div>

                        <!-- 2. Cost breakdown + total -->
                        <div class="rounded-lg bg-[var(--surface-alt-bg,#f1f5f9)] p-4 mb-4">
                          <p class="text-xs uppercase tracking-wide text-[var(--text-muted,#64748b)] mb-1">
                            ${this.msg['intent.clientBillingWorkspace.getBillingSummary.list.column.totalCost.label']}
                          </p>
                          <p class="text-3xl font-bold text-[var(--text-strong,#020617)] tabular-nums">
                            ${formatMoney(summary.totalCost)}
                          </p>
                        </div>

                        <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
                          <div class="rounded-lg border border-[var(--border-subtle,#e2e8f0)] p-4 bg-[var(--surface-bg,#ffffff)]">
                            <p class="text-xs text-[var(--text-muted,#64748b)] mb-1">
                              ${this.msg['intent.clientBillingWorkspace.getBillingSummary.list.column.laborCost.label']}
                            </p>
                            <p class="text-lg font-semibold tabular-nums text-[var(--text-default,#0f172a)]">
                              ${formatMoney(summary.laborCost)}
                            </p>
                          </div>
                          <div class="rounded-lg border border-[var(--border-subtle,#e2e8f0)] p-4 bg-[var(--surface-bg,#ffffff)]">
                            <p class="text-xs text-[var(--text-muted,#64748b)] mb-1">
                              ${this.msg['intent.clientBillingWorkspace.getBillingSummary.list.column.materialCost.label']}
                            </p>
                            <p class="text-lg font-semibold tabular-nums text-[var(--text-default,#0f172a)]">
                              ${formatMoney(summary.materialCost)}
                            </p>
                          </div>
                          <div class="rounded-lg border border-[var(--border-subtle,#e2e8f0)] p-4 bg-[var(--surface-bg,#ffffff)]">
                            <p class="text-xs text-[var(--text-muted,#64748b)] mb-1">
                              ${this.msg['intent.clientBillingWorkspace.getBillingSummary.list.column.changeOrderCost.label']}
                            </p>
                            <p class="text-lg font-semibold tabular-nums text-[var(--text-default,#0f172a)]">
                              ${formatMoney(summary.changeOrderCost)}
                            </p>
                          </div>
                        </div>
                      `}
            </div>
          </section>

          <!-- Invoice detail (master-detail side panel) -->
          <section class="lg:col-span-1 rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] shadow-sm overflow-hidden">
            <div class="px-5 py-4 border-b border-[var(--border-subtle,#e2e8f0)] flex items-center justify-between gap-3">
              <h2 class="text-lg font-medium text-[var(--text-strong,#020617)]">
                ${this.msg['organism.clientBillingWorkspace.getInvoice.title']}
              </h2>
              ${invoiceLoading
                ? html`<span class="text-sm text-[var(--text-muted,#64748b)]">…</span>`
                : nothing}
            </div>

            <div class="p-5">
              ${invoiceLoading
                ? html`
                    <div class="space-y-3 animate-pulse" aria-busy="true">
                      <div class="h-6 w-3/4 rounded bg-[var(--surface-alt-bg,#f1f5f9)]"></div>
                      <div class="h-4 w-1/2 rounded bg-[var(--surface-alt-bg,#f1f5f9)]"></div>
                      <div class="h-10 w-full rounded bg-[var(--surface-alt-bg,#f1f5f9)] mt-4"></div>
                      <div class="h-4 w-2/3 rounded bg-[var(--surface-alt-bg,#f1f5f9)]"></div>
                    </div>
                  `
                : invoiceError
                  ? html`
                      <div class="rounded-lg px-4 py-3 bg-[var(--status-error-bg,#fef2f2)] text-[var(--status-error-text,#991b1b)] text-sm">
                        ${this.msg['intent.clientBillingWorkspace.getInvoice.list.empty']}
                      </div>
                    `
                  : !hasInvoice
                    ? html`
                        <p class="text-sm text-[var(--text-muted,#64748b)] py-6 text-center">
                          ${this.msg['intent.clientBillingWorkspace.getInvoice.list.empty']}
                        </p>
                      `
                    : html`
                        <div class="space-y-4">
                          <div>
                            <p class="text-xs uppercase tracking-wide text-[var(--text-muted,#64748b)] mb-1">
                              ${this.msg['intent.clientBillingWorkspace.getInvoice.list.column.invoiceNumber.label']}
                            </p>
                            <p class="text-lg font-semibold text-[var(--text-strong,#020617)]">
                              ${invoice.invoiceNumber || '—'}
                            </p>
                          </div>

                          <div class="flex items-center justify-between gap-2">
                            <span class="text-xs text-[var(--text-muted,#64748b)]">
                              ${this.msg['intent.clientBillingWorkspace.getInvoice.list.column.status.label']}
                            </span>
                            <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-[var(--status-neutral-bg,#f1f5f9)] text-[var(--status-neutral-text,#334155)]">
                              ${invoice.status || '—'}
                            </span>
                          </div>

                          <div class="rounded-lg bg-[var(--surface-alt-bg,#f1f5f9)] p-4">
                            <p class="text-xs uppercase tracking-wide text-[var(--text-muted,#64748b)] mb-1">
                              ${this.msg['intent.clientBillingWorkspace.getInvoice.list.column.totalAmount.label']}
                            </p>
                            <p class="text-2xl font-bold tabular-nums text-[var(--text-strong,#020617)]">
                              ${formatMoney(invoice.totalAmount)}
                            </p>
                          </div>

                          <dl class="space-y-3 text-sm">
                            <div class="flex justify-between gap-3">
                              <dt class="text-[var(--text-muted,#64748b)]">
                                ${this.msg['intent.clientBillingWorkspace.getInvoice.list.column.sentAt.label']}
                              </dt>
                              <dd class="font-medium text-[var(--text-default,#0f172a)] text-right">
                                ${formatDate(invoice.sentAt)}
                              </dd>
                            </div>
                            <div class="flex justify-between gap-3">
                              <dt class="text-[var(--text-muted,#64748b)]">
                                ${this.msg['intent.clientBillingWorkspace.getInvoice.list.column.createdAt.label']}
                              </dt>
                              <dd class="font-medium text-[var(--text-default,#0f172a)] text-right">
                                ${formatDate(invoice.createdAt)}
                              </dd>
                            </div>
                          </dl>
                        </div>
                      `}
            </div>
          </section>
        </div>
      </div>
    `;
  }
}
