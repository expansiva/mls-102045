/// <mls fileReference="_102045_/l2/buildFlowFsm/web/desktop/page31/clientBillingWorkspace.ts" enhancement="_102020_/l2/enhancementAura"/>

import { html, nothing } from 'lit';
import { customElement } from 'lit/decorators.js';
import { BuildFlowFsmClientBillingWorkspaceBase } from '/_102045_/l2/buildFlowFsm/web/shared/clientBillingWorkspace.js';

@customElement('build-flow-fsm--web--desktop--page31--client-billing-workspace-102045')
export class BuildFlowFsmDesktopPage31ClientBillingWorkspacePage extends BuildFlowFsmClientBillingWorkspaceBase {
  render() {
    const billingSummary = this.getBillingSummaryData;
    const invoice = this.getInvoiceData;
    const billingLoading = this.getBillingSummaryState === 'loading';
    const invoiceLoading = this.getInvoiceState === 'loading';

    return html`
      <div class="min-h-full bg-[var(--page-bg,#f8fafc)] text-[var(--text-default,#0f172a)] p-6 space-y-6">
        <header class="space-y-1">
          <h1 class="text-2xl font-semibold text-[var(--text-strong,#020617)]">
            ${this.msg['section.clientBillingWorkspace.billingSummarySection.title']}
          </h1>
          <p class="text-sm text-[var(--text-muted,#64748b)]">
            ${this.msg['section.clientBillingWorkspace.invoiceSection.title']}
          </p>
        </header>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <section class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] shadow-sm p-4 space-y-4">
            <div class="flex items-center justify-between gap-3">
              <h2 class="text-lg font-medium text-[var(--text-strong,#020617)]">
                ${this.msg['organism.clientBillingWorkspace.getBillingSummary.title']}
              </h2>
              ${billingLoading
                ? html`<span class="text-xs px-2 py-1 rounded bg-[var(--status-info-bg,#e0f2fe)] text-[var(--status-info-text,#0c4a6e)]">${this.getBillingSummaryState}</span>`
                : nothing}
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <label class="flex flex-col gap-1 text-sm">
                <span class="text-[var(--text-muted,#64748b)]">${this.msg['intent.clientBillingWorkspace.getBillingSummary.list.column.billingSummaryId.label']}</span>
                <input
                  class="rounded border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-[var(--text-default,#0f172a)]"
                  .value=${this.getBillingSummaryBillingSummaryId}
                  @change=${(e: Event) => this.handleGetBillingSummaryBillingSummaryIdChange(e)}
                />
              </label>
              <label class="flex flex-col gap-1 text-sm">
                <span class="text-[var(--text-muted,#64748b)]">${this.msg['intent.clientBillingWorkspace.getBillingSummary.list.filter.clientId.label']}</span>
                <input
                  class="rounded border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-[var(--text-default,#0f172a)]"
                  .value=${this.getBillingSummaryClientId}
                  @change=${(e: Event) => this.handleGetBillingSummaryClientIdChange(e)}
                />
              </label>
            </div>

            <div class="flex items-center gap-3">
              <button
                type="button"
                class="inline-flex items-center justify-center rounded px-4 py-2 text-sm font-medium bg-[var(--button-primary-bg,#2563eb)] text-[var(--button-primary-text,#ffffff)] disabled:opacity-60"
                ?disabled=${billingLoading}
                @click=${(e: Event) => this.handleGetBillingSummaryClick(e)}
              >
                ${billingLoading
                  ? this.msg['intent.clientBillingWorkspace.getBillingSummary.list.title']
                  : this.msg['intent.clientBillingWorkspace.getBillingSummary.list.title']}
              </button>
              ${this.getBillingSummaryState === 'error'
                ? html`<p class="text-sm text-[var(--status-error-text,#991b1b)] bg-[var(--status-error-bg,#fee2e2)] rounded px-2 py-1">${this.msg['intent.clientBillingWorkspace.getBillingSummary.list.empty']}</p>`
                : this.getBillingSummaryState === 'success'
                  ? html`<p class="text-sm text-[var(--status-success-text,#14532d)] bg-[var(--status-success-bg,#dcfce7)] rounded px-2 py-1">${this.msg['intent.clientBillingWorkspace.getBillingSummary.list.title']}</p>`
                  : nothing}
            </div>

            ${billingLoading
              ? html`
                  <div class="animate-pulse space-y-3">
                    <div class="h-4 rounded bg-[var(--surface-alt-bg,#f1f5f9)] w-2/3"></div>
                    <div class="h-4 rounded bg-[var(--surface-alt-bg,#f1f5f9)] w-1/2"></div>
                    <div class="h-20 rounded bg-[var(--surface-alt-bg,#f1f5f9)]"></div>
                  </div>
                `
              : billingSummary
                ? html`
                    <div class="rounded-lg border border-[var(--border-subtle,#e2e8f0)] bg-[var(--surface-alt-bg,#f8fafc)] p-4 space-y-3">
                      <h3 class="text-sm font-semibold text-[var(--text-strong,#020617)]">
                        ${this.msg['intent.clientBillingWorkspace.getBillingSummary.list.title']}
                      </h3>
                      <dl class="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 text-sm">
                        <div>
                          <dt class="text-[var(--text-muted,#64748b)]">${this.msg['intent.clientBillingWorkspace.getBillingSummary.list.column.billingSummaryId.label']}</dt>
                          <dd class="font-medium text-[var(--text-default,#0f172a)]">${billingSummary.billingSummaryId ?? ''}</dd>
                        </div>
                        <div>
                          <dt class="text-[var(--text-muted,#64748b)]">${this.msg['intent.clientBillingWorkspace.getBillingSummary.list.column.projectId.label']}</dt>
                          <dd class="font-medium text-[var(--text-default,#0f172a)]">${billingSummary.projectId ?? ''}</dd>
                        </div>
                        <div>
                          <dt class="text-[var(--text-muted,#64748b)]">${this.msg['intent.clientBillingWorkspace.getBillingSummary.list.column.projectName.label']}</dt>
                          <dd class="font-medium text-[var(--text-default,#0f172a)]">${billingSummary.projectName ?? ''}</dd>
                        </div>
                        <div>
                          <dt class="text-[var(--text-muted,#64748b)]">${this.msg['intent.clientBillingWorkspace.getBillingSummary.list.column.status.label']}</dt>
                          <dd>
                            <span class="inline-flex px-2 py-0.5 rounded text-xs bg-[var(--status-neutral-bg,#f1f5f9)] text-[var(--status-neutral-text,#334155)]">
                              ${billingSummary.status ?? ''}
                            </span>
                          </dd>
                        </div>
                        <div>
                          <dt class="text-[var(--text-muted,#64748b)]">${this.msg['intent.clientBillingWorkspace.getBillingSummary.list.column.periodStart.label']}</dt>
                          <dd class="font-medium text-[var(--text-default,#0f172a)]">${billingSummary.periodStart ?? ''}</dd>
                        </div>
                        <div>
                          <dt class="text-[var(--text-muted,#64748b)]">${this.msg['intent.clientBillingWorkspace.getBillingSummary.list.column.periodEnd.label']}</dt>
                          <dd class="font-medium text-[var(--text-default,#0f172a)]">${billingSummary.periodEnd ?? ''}</dd>
                        </div>
                        <div>
                          <dt class="text-[var(--text-muted,#64748b)]">${this.msg['intent.clientBillingWorkspace.getBillingSummary.list.column.laborCost.label']}</dt>
                          <dd class="font-medium text-[var(--text-default,#0f172a)]">${billingSummary.laborCost ?? ''}</dd>
                        </div>
                        <div>
                          <dt class="text-[var(--text-muted,#64748b)]">${this.msg['intent.clientBillingWorkspace.getBillingSummary.list.column.materialCost.label']}</dt>
                          <dd class="font-medium text-[var(--text-default,#0f172a)]">${billingSummary.materialCost ?? ''}</dd>
                        </div>
                        <div>
                          <dt class="text-[var(--text-muted,#64748b)]">${this.msg['intent.clientBillingWorkspace.getBillingSummary.list.column.changeOrderCost.label']}</dt>
                          <dd class="font-medium text-[var(--text-default,#0f172a)]">${billingSummary.changeOrderCost ?? ''}</dd>
                        </div>
                        <div>
                          <dt class="text-[var(--text-muted,#64748b)]">${this.msg['intent.clientBillingWorkspace.getBillingSummary.list.column.totalCost.label']}</dt>
                          <dd class="font-semibold text-[var(--text-strong,#020617)]">${billingSummary.totalCost ?? ''}</dd>
                        </div>
                        <div class="sm:col-span-2">
                          <dt class="text-[var(--text-muted,#64748b)]">${this.msg['intent.clientBillingWorkspace.getBillingSummary.list.column.sharedAt.label']}</dt>
                          <dd class="font-medium text-[var(--text-default,#0f172a)]">${billingSummary.sharedAt ?? ''}</dd>
                        </div>
                      </dl>
                    </div>
                  `
                : html`
                    <p class="text-sm text-[var(--text-muted,#64748b)] py-6 text-center">
                      ${this.msg['intent.clientBillingWorkspace.getBillingSummary.list.empty']}
                    </p>
                  `}
          </section>

          <section class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] shadow-sm p-4 space-y-4">
            <div class="flex items-center justify-between gap-3">
              <h2 class="text-lg font-medium text-[var(--text-strong,#020617)]">
                ${this.msg['organism.clientBillingWorkspace.getInvoice.title']}
              </h2>
              ${invoiceLoading
                ? html`<span class="text-xs px-2 py-1 rounded bg-[var(--status-info-bg,#e0f2fe)] text-[var(--status-info-text,#0c4a6e)]">${this.getInvoiceState}</span>`
                : nothing}
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <label class="flex flex-col gap-1 text-sm">
                <span class="text-[var(--text-muted,#64748b)]">${this.msg['intent.clientBillingWorkspace.getInvoice.list.column.invoiceId.label']}</span>
                <input
                  class="rounded border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-[var(--text-default,#0f172a)]"
                  .value=${this.getInvoiceInvoiceId}
                  @change=${(e: Event) => this.handleGetInvoiceInvoiceIdChange(e)}
                />
              </label>
              <label class="flex flex-col gap-1 text-sm">
                <span class="text-[var(--text-muted,#64748b)]">${this.msg['intent.clientBillingWorkspace.getInvoice.list.filter.clientId.label']}</span>
                <input
                  class="rounded border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-[var(--text-default,#0f172a)]"
                  .value=${this.getInvoiceClientId}
                  @change=${(e: Event) => this.handleGetInvoiceClientIdChange(e)}
                />
              </label>
            </div>

            <div class="flex items-center gap-3">
              <button
                type="button"
                class="inline-flex items-center justify-center rounded px-4 py-2 text-sm font-medium bg-[var(--button-primary-bg,#2563eb)] text-[var(--button-primary-text,#ffffff)] disabled:opacity-60"
                ?disabled=${invoiceLoading}
                @click=${(e: Event) => this.handleGetInvoiceClick(e)}
              >
                ${this.msg['intent.clientBillingWorkspace.getInvoice.list.title']}
              </button>
              ${this.getInvoiceState === 'error'
                ? html`<p class="text-sm text-[var(--status-error-text,#991b1b)] bg-[var(--status-error-bg,#fee2e2)] rounded px-2 py-1">${this.msg['intent.clientBillingWorkspace.getInvoice.list.empty']}</p>`
                : this.getInvoiceState === 'success'
                  ? html`<p class="text-sm text-[var(--status-success-text,#14532d)] bg-[var(--status-success-bg,#dcfce7)] rounded px-2 py-1">${this.msg['intent.clientBillingWorkspace.getInvoice.list.title']}</p>`
                  : nothing}
            </div>

            ${invoiceLoading
              ? html`
                  <div class="animate-pulse space-y-3">
                    <div class="h-4 rounded bg-[var(--surface-alt-bg,#f1f5f9)] w-2/3"></div>
                    <div class="h-4 rounded bg-[var(--surface-alt-bg,#f1f5f9)] w-1/2"></div>
                    <div class="h-20 rounded bg-[var(--surface-alt-bg,#f1f5f9)]"></div>
                  </div>
                `
              : invoice
                ? html`
                    <div class="rounded-lg border border-[var(--border-subtle,#e2e8f0)] bg-[var(--surface-alt-bg,#f8fafc)] p-4 space-y-3">
                      <h3 class="text-sm font-semibold text-[var(--text-strong,#020617)]">
                        ${this.msg['intent.clientBillingWorkspace.getInvoice.list.title']}
                      </h3>
                      <dl class="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 text-sm">
                        <div>
                          <dt class="text-[var(--text-muted,#64748b)]">${this.msg['intent.clientBillingWorkspace.getInvoice.list.column.invoiceId.label']}</dt>
                          <dd class="font-medium text-[var(--text-default,#0f172a)]">${invoice.invoiceId ?? ''}</dd>
                        </div>
                        <div>
                          <dt class="text-[var(--text-muted,#64748b)]">${this.msg['intent.clientBillingWorkspace.getInvoice.list.column.invoiceNumber.label']}</dt>
                          <dd class="font-medium text-[var(--text-default,#0f172a)]">${invoice.invoiceNumber ?? ''}</dd>
                        </div>
                        <div>
                          <dt class="text-[var(--text-muted,#64748b)]">${this.msg['intent.clientBillingWorkspace.getInvoice.list.column.projectId.label']}</dt>
                          <dd class="font-medium text-[var(--text-default,#0f172a)]">${invoice.projectId ?? ''}</dd>
                        </div>
                        <div>
                          <dt class="text-[var(--text-muted,#64748b)]">${this.msg['intent.clientBillingWorkspace.getInvoice.list.column.clientId.label']}</dt>
                          <dd class="font-medium text-[var(--text-default,#0f172a)]">${invoice.clientId ?? ''}</dd>
                        </div>
                        <div>
                          <dt class="text-[var(--text-muted,#64748b)]">${this.msg['intent.clientBillingWorkspace.getInvoice.list.column.status.label']}</dt>
                          <dd>
                            <span class="inline-flex px-2 py-0.5 rounded text-xs bg-[var(--status-neutral-bg,#f1f5f9)] text-[var(--status-neutral-text,#334155)]">
                              ${invoice.status ?? ''}
                            </span>
                          </dd>
                        </div>
                        <div>
                          <dt class="text-[var(--text-muted,#64748b)]">${this.msg['intent.clientBillingWorkspace.getInvoice.list.column.totalAmount.label']}</dt>
                          <dd class="font-semibold text-[var(--text-strong,#020617)]">${invoice.totalAmount ?? ''}</dd>
                        </div>
                        <div>
                          <dt class="text-[var(--text-muted,#64748b)]">${this.msg['intent.clientBillingWorkspace.getInvoice.list.column.sentAt.label']}</dt>
                          <dd class="font-medium text-[var(--text-default,#0f172a)]">${invoice.sentAt ?? ''}</dd>
                        </div>
                        <div>
                          <dt class="text-[var(--text-muted,#64748b)]">${this.msg['intent.clientBillingWorkspace.getInvoice.list.column.createdAt.label']}</dt>
                          <dd class="font-medium text-[var(--text-default,#0f172a)]">${invoice.createdAt ?? ''}</dd>
                        </div>
                      </dl>
                    </div>
                  `
                : html`
                    <p class="text-sm text-[var(--text-muted,#64748b)] py-6 text-center">
                      ${this.msg['intent.clientBillingWorkspace.getInvoice.list.empty']}
                    </p>
                  `}
          </section>
        </div>
      </div>
    `;
  }
}
