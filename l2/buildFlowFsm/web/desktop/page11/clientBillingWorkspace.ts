/// <mls fileReference="_102045_/l2/buildFlowFsm/web/desktop/page11/clientBillingWorkspace.ts" enhancement="_102020_/l2/enhancementAura"/>

import { html, nothing } from 'lit';
import { customElement } from 'lit/decorators.js';
import { BuildFlowFsmClientBillingWorkspaceBase } from '/_102045_/l2/buildFlowFsm/web/shared/clientBillingWorkspace.js';

@customElement('build-flow-fsm--web--desktop--page11--client-billing-workspace-102045')
export class BuildFlowFsmDesktopPage11ClientBillingWorkspacePage extends BuildFlowFsmClientBillingWorkspaceBase {
  render() {
    const billingSummary = this.getBillingSummaryData;
    const invoice = this.getInvoiceData;
    const billingLoading = this.getBillingSummaryState === 'loading';
    const invoiceLoading = this.getInvoiceState === 'loading';
    const billingError = this.getBillingSummaryState === 'error';
    const invoiceError = this.getInvoiceState === 'error';
    const billingSuccess = this.getBillingSummaryState === 'success';
    const invoiceSuccess = this.getInvoiceState === 'success';

    return html`
      <div class="min-h-full bg-[var(--page-bg,#f8fafc)]">
        <div class="max-w-6xl mx-auto px-4 py-6 space-y-6">
          <section class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-4 space-y-4 shadow-sm">
            <div class="flex flex-wrap items-center justify-between gap-3">
              <h1 class="text-2xl font-semibold text-[var(--text-strong,#0f172a)]">
                ${this.msg['section.clientBillingWorkspace.billingSummarySection.title']}
              </h1>
              <button
                type="button"
                class="inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium bg-[var(--button-primary-bg,#2563eb)] text-[var(--button-primary-text,#ffffff)] disabled:opacity-60"
                ?disabled=${billingLoading}
                @click=${this.handleGetBillingSummaryClick}
              >
                ${billingLoading
                  ? html`<span class="inline-block h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent"></span>`
                  : nothing}
                ${this.msg['organism.clientBillingWorkspace.getBillingSummary.title']}
              </button>
            </div>

            <div class="flex flex-wrap items-end gap-3">
              <label class="flex flex-col gap-1 text-sm text-[var(--text-default,#0f172a)]">
                <span>${this.msg['intent.clientBillingWorkspace.getBillingSummary.list.filter.clientId.label']}</span>
                <input
                  type="text"
                  class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-[var(--text-default,#0f172a)]"
                  .value=${this.getBillingSummaryClientId}
                  @input=${this.handleGetBillingSummaryClientIdChange}
                />
              </label>
            </div>

            ${billingError
              ? html`
                  <div class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--status-error-bg,#fef2f2)] px-3 py-2 text-sm text-[var(--status-error-text,#991b1b)]" role="alert">
                    ${this.msg['intent.clientBillingWorkspace.getBillingSummary.list.empty']}
                  </div>
                `
              : nothing}

            ${billingSuccess && billingSummary
              ? nothing
              : nothing}

            ${billingLoading
              ? html`
                  <div class="space-y-3 animate-pulse" aria-busy="true">
                    <div class="h-4 w-1/3 rounded bg-[var(--surface-alt-bg,#f1f5f9)]"></div>
                    <div class="h-4 w-2/3 rounded bg-[var(--surface-alt-bg,#f1f5f9)]"></div>
                    <div class="h-4 w-1/2 rounded bg-[var(--surface-alt-bg,#f1f5f9)]"></div>
                    <div class="h-4 w-3/4 rounded bg-[var(--surface-alt-bg,#f1f5f9)]"></div>
                  </div>
                `
              : billingSummary
                ? html`
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                      <div class="rounded-md border border-[var(--border-subtle,#e2e8f0)] bg-[var(--surface-alt-bg,#f8fafc)] p-3">
                        <div class="text-[var(--text-muted,#64748b)]">${this.msg['intent.clientBillingWorkspace.getBillingSummary.list.column.billingSummaryId.label']}</div>
                        <div class="font-medium text-[var(--text-default,#0f172a)]">${billingSummary.billingSummaryId}</div>
                      </div>
                      <div class="rounded-md border border-[var(--border-subtle,#e2e8f0)] bg-[var(--surface-alt-bg,#f8fafc)] p-3">
                        <div class="text-[var(--text-muted,#64748b)]">${this.msg['intent.clientBillingWorkspace.getBillingSummary.list.column.projectId.label']}</div>
                        <div class="font-medium text-[var(--text-default,#0f172a)]">${billingSummary.projectId}</div>
                      </div>
                      <div class="rounded-md border border-[var(--border-subtle,#e2e8f0)] bg-[var(--surface-alt-bg,#f8fafc)] p-3">
                        <div class="text-[var(--text-muted,#64748b)]">${this.msg['intent.clientBillingWorkspace.getBillingSummary.list.column.projectName.label']}</div>
                        <div class="font-medium text-[var(--text-default,#0f172a)]">${billingSummary.projectName}</div>
                      </div>
                      <div class="rounded-md border border-[var(--border-subtle,#e2e8f0)] bg-[var(--surface-alt-bg,#f8fafc)] p-3">
                        <div class="text-[var(--text-muted,#64748b)]">${this.msg['intent.clientBillingWorkspace.getBillingSummary.list.column.status.label']}</div>
                        <div class="font-medium text-[var(--text-default,#0f172a)]">
                          <span class="inline-flex rounded-full px-2 py-0.5 text-xs bg-[var(--status-info-bg,#eff6ff)] text-[var(--status-info-text,#1e40af)]">${billingSummary.status}</span>
                        </div>
                      </div>
                      <div class="rounded-md border border-[var(--border-subtle,#e2e8f0)] bg-[var(--surface-alt-bg,#f8fafc)] p-3">
                        <div class="text-[var(--text-muted,#64748b)]">${this.msg['intent.clientBillingWorkspace.getBillingSummary.list.column.periodStart.label']}</div>
                        <div class="font-medium text-[var(--text-default,#0f172a)]">${billingSummary.periodStart}</div>
                      </div>
                      <div class="rounded-md border border-[var(--border-subtle,#e2e8f0)] bg-[var(--surface-alt-bg,#f8fafc)] p-3">
                        <div class="text-[var(--text-muted,#64748b)]">${this.msg['intent.clientBillingWorkspace.getBillingSummary.list.column.periodEnd.label']}</div>
                        <div class="font-medium text-[var(--text-default,#0f172a)]">${billingSummary.periodEnd}</div>
                      </div>
                      <div class="rounded-md border border-[var(--border-subtle,#e2e8f0)] bg-[var(--surface-alt-bg,#f8fafc)] p-3">
                        <div class="text-[var(--text-muted,#64748b)]">${this.msg['intent.clientBillingWorkspace.getBillingSummary.list.column.laborCost.label']}</div>
                        <div class="font-medium text-[var(--text-default,#0f172a)]">${billingSummary.laborCost}</div>
                      </div>
                      <div class="rounded-md border border-[var(--border-subtle,#e2e8f0)] bg-[var(--surface-alt-bg,#f8fafc)] p-3">
                        <div class="text-[var(--text-muted,#64748b)]">${this.msg['intent.clientBillingWorkspace.getBillingSummary.list.column.materialCost.label']}</div>
                        <div class="font-medium text-[var(--text-default,#0f172a)]">${billingSummary.materialCost}</div>
                      </div>
                      <div class="rounded-md border border-[var(--border-subtle,#e2e8f0)] bg-[var(--surface-alt-bg,#f8fafc)] p-3">
                        <div class="text-[var(--text-muted,#64748b)]">${this.msg['intent.clientBillingWorkspace.getBillingSummary.list.column.changeOrderCost.label']}</div>
                        <div class="font-medium text-[var(--text-default,#0f172a)]">${billingSummary.changeOrderCost}</div>
                      </div>
                      <div class="rounded-md border border-[var(--border-subtle,#e2e8f0)] bg-[var(--surface-alt-bg,#f8fafc)] p-3">
                        <div class="text-[var(--text-muted,#64748b)]">${this.msg['intent.clientBillingWorkspace.getBillingSummary.list.column.totalCost.label']}</div>
                        <div class="font-semibold text-[var(--text-strong,#0f172a)]">${billingSummary.totalCost}</div>
                      </div>
                      <div class="rounded-md border border-[var(--border-subtle,#e2e8f0)] bg-[var(--surface-alt-bg,#f8fafc)] p-3 sm:col-span-2">
                        <div class="text-[var(--text-muted,#64748b)]">${this.msg['intent.clientBillingWorkspace.getBillingSummary.list.column.sharedAt.label']}</div>
                        <div class="font-medium text-[var(--text-default,#0f172a)]">${billingSummary.sharedAt}</div>
                      </div>
                    </div>
                  `
                : html`
                    <p class="text-sm text-[var(--text-muted,#64748b)]">
                      ${this.msg['intent.clientBillingWorkspace.getBillingSummary.list.empty']}
                    </p>
                  `}
          </section>

          <section class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-4 space-y-4 shadow-sm">
            <div class="flex flex-wrap items-center justify-between gap-3">
              <h2 class="text-xl font-semibold text-[var(--text-strong,#0f172a)]">
                ${this.msg['section.clientBillingWorkspace.invoiceSection.title']}
              </h2>
              <button
                type="button"
                class="inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium bg-[var(--button-primary-bg,#2563eb)] text-[var(--button-primary-text,#ffffff)] disabled:opacity-60"
                ?disabled=${invoiceLoading}
                @click=${this.handleGetInvoiceClick}
              >
                ${invoiceLoading
                  ? html`<span class="inline-block h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent"></span>`
                  : nothing}
                ${this.msg['organism.clientBillingWorkspace.getInvoice.title']}
              </button>
            </div>

            <div class="flex flex-wrap items-end gap-3">
              <label class="flex flex-col gap-1 text-sm text-[var(--text-default,#0f172a)]">
                <span>${this.msg['intent.clientBillingWorkspace.getInvoice.list.filter.clientId.label']}</span>
                <input
                  type="text"
                  class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-[var(--text-default,#0f172a)]"
                  .value=${this.getInvoiceClientId}
                  @input=${this.handleGetInvoiceClientIdChange}
                />
              </label>
            </div>

            ${invoiceError
              ? html`
                  <div class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--status-error-bg,#fef2f2)] px-3 py-2 text-sm text-[var(--status-error-text,#991b1b)]" role="alert">
                    ${this.msg['intent.clientBillingWorkspace.getInvoice.list.empty']}
                  </div>
                `
              : nothing}

            ${invoiceLoading
              ? html`
                  <div class="space-y-3 animate-pulse" aria-busy="true">
                    <div class="h-4 w-1/3 rounded bg-[var(--surface-alt-bg,#f1f5f9)]"></div>
                    <div class="h-4 w-2/3 rounded bg-[var(--surface-alt-bg,#f1f5f9)]"></div>
                    <div class="h-4 w-1/2 rounded bg-[var(--surface-alt-bg,#f1f5f9)]"></div>
                    <div class="h-4 w-3/4 rounded bg-[var(--surface-alt-bg,#f1f5f9)]"></div>
                  </div>
                `
              : invoice
                ? html`
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                      <div class="rounded-md border border-[var(--border-subtle,#e2e8f0)] bg-[var(--surface-alt-bg,#f8fafc)] p-3">
                        <div class="text-[var(--text-muted,#64748b)]">${this.msg['intent.clientBillingWorkspace.getInvoice.list.column.invoiceId.label']}</div>
                        <div class="font-medium text-[var(--text-default,#0f172a)]">${invoice.invoiceId}</div>
                      </div>
                      <div class="rounded-md border border-[var(--border-subtle,#e2e8f0)] bg-[var(--surface-alt-bg,#f8fafc)] p-3">
                        <div class="text-[var(--text-muted,#64748b)]">${this.msg['intent.clientBillingWorkspace.getInvoice.list.column.projectId.label']}</div>
                        <div class="font-medium text-[var(--text-default,#0f172a)]">${invoice.projectId}</div>
                      </div>
                      <div class="rounded-md border border-[var(--border-subtle,#e2e8f0)] bg-[var(--surface-alt-bg,#f8fafc)] p-3">
                        <div class="text-[var(--text-muted,#64748b)]">${this.msg['intent.clientBillingWorkspace.getInvoice.list.column.clientId.label']}</div>
                        <div class="font-medium text-[var(--text-default,#0f172a)]">${invoice.clientId}</div>
                      </div>
                      <div class="rounded-md border border-[var(--border-subtle,#e2e8f0)] bg-[var(--surface-alt-bg,#f8fafc)] p-3">
                        <div class="text-[var(--text-muted,#64748b)]">${this.msg['intent.clientBillingWorkspace.getInvoice.list.column.invoiceNumber.label']}</div>
                        <div class="font-medium text-[var(--text-default,#0f172a)]">${invoice.invoiceNumber}</div>
                      </div>
                      <div class="rounded-md border border-[var(--border-subtle,#e2e8f0)] bg-[var(--surface-alt-bg,#f8fafc)] p-3">
                        <div class="text-[var(--text-muted,#64748b)]">${this.msg['intent.clientBillingWorkspace.getInvoice.list.column.status.label']}</div>
                        <div class="font-medium text-[var(--text-default,#0f172a)]">
                          <span class="inline-flex rounded-full px-2 py-0.5 text-xs bg-[var(--status-info-bg,#eff6ff)] text-[var(--status-info-text,#1e40af)]">${invoice.status}</span>
                        </div>
                      </div>
                      <div class="rounded-md border border-[var(--border-subtle,#e2e8f0)] bg-[var(--surface-alt-bg,#f8fafc)] p-3">
                        <div class="text-[var(--text-muted,#64748b)]">${this.msg['intent.clientBillingWorkspace.getInvoice.list.column.totalAmount.label']}</div>
                        <div class="font-semibold text-[var(--text-strong,#0f172a)]">${invoice.totalAmount}</div>
                      </div>
                      <div class="rounded-md border border-[var(--border-subtle,#e2e8f0)] bg-[var(--surface-alt-bg,#f8fafc)] p-3">
                        <div class="text-[var(--text-muted,#64748b)]">${this.msg['intent.clientBillingWorkspace.getInvoice.list.column.sentAt.label']}</div>
                        <div class="font-medium text-[var(--text-default,#0f172a)]">${invoice.sentAt}</div>
                      </div>
                      <div class="rounded-md border border-[var(--border-subtle,#e2e8f0)] bg-[var(--surface-alt-bg,#f8fafc)] p-3">
                        <div class="text-[var(--text-muted,#64748b)]">${this.msg['intent.clientBillingWorkspace.getInvoice.list.column.createdAt.label']}</div>
                        <div class="font-medium text-[var(--text-default,#0f172a)]">${invoice.createdAt}</div>
                      </div>
                    </div>
                  `
                : html`
                    <p class="text-sm text-[var(--text-muted,#64748b)]">
                      ${this.msg['intent.clientBillingWorkspace.getInvoice.list.empty']}
                    </p>
                  `}
          </section>
        </div>
      </div>
    `;
  }
}
