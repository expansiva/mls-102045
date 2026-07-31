/// <mls fileReference="_102045_/l2/buildFlowFsm/web/desktop/page11/invoiceWorkspace.ts" enhancement="_102020_/l2/enhancementAura"/>

import { html, nothing } from 'lit';
import { customElement } from 'lit/decorators.js';
import { BuildFlowFsmInvoiceWorkspaceBase } from '/_102045_/l2/buildFlowFsm/web/shared/invoiceWorkspace.js';
import type { ListInvoicesOutput } from '/_102045_/l2/buildFlowFsm/web/shared/invoiceWorkspace.js';

type InvoiceRow = NonNullable<ListInvoicesOutput['invoices']>[number];

@customElement('build-flow-fsm--web--desktop--page11--invoice-workspace-102045')
export class BuildFlowFsmDesktopPage11InvoiceWorkspacePage extends BuildFlowFsmInvoiceWorkspaceBase {
  render() {
    const invoices: InvoiceRow[] = this.listInvoicesData?.invoices ?? [];
    const total = this.listInvoicesData?.total;
    const listLoading = this.listInvoicesState === 'loading';

    const byStatus = new Map<string, InvoiceRow[]>();
    for (const inv of invoices) {
      const lane = String((inv as { status?: string }).status ?? 'unknown');
      const bucket = byStatus.get(lane);
      if (bucket) {
        bucket.push(inv);
      } else {
        byStatus.set(lane, [inv]);
      }
    }
    const lanes = byStatus.size > 0 ? Array.from(byStatus.entries()) : [];

    const selectedInvoiceId = this.sendInvoiceCmdInvoiceId;
    const selectedInvoice =
      selectedInvoiceId
        ? invoices.find((inv) => String((inv as { invoiceId?: string }).invoiceId ?? '') === selectedInvoiceId)
        : undefined;

    return html`
      <div class="min-h-full bg-[var(--page-bg,#f8fafc)] text-[var(--text-default,#0f172a)]">
        <div class="max-w-6xl mx-auto px-4 py-6 space-y-6">
          <header class="space-y-1">
            <h1 class="text-2xl font-semibold text-[var(--text-strong,#0f172a)]">
              ${this.msg['section.invoiceWorkspace.invoiceListSection.title']}
            </h1>
          </header>

          <section class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-4 space-y-4">
            <div class="space-y-3">
              <h2 class="text-sm font-medium text-[var(--text-muted,#64748b)]">
                ${this.msg['organism.invoiceWorkspace.inline-row-command10.title']}
              </h2>
              <div class="flex flex-wrap items-end gap-3">
                <label class="flex flex-col gap-1 text-sm min-w-[8rem]">
                  <span class="text-[var(--text-muted,#64748b)]">${this.msg['intent.invoiceWorkspace.listInvoices.list.filter.status.label']}</span>
                  <input
                    class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-[var(--text-default,#0f172a)]"
                    .value=${this.listInvoicesStatus}
                    @input=${this.handleListInvoicesStatusChange}
                  />
                </label>
                <label class="flex flex-col gap-1 text-sm min-w-[8rem]">
                  <span class="text-[var(--text-muted,#64748b)]">${this.msg['intent.invoiceWorkspace.listInvoices.list.filter.projectId.label']}</span>
                  <input
                    class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-[var(--text-default,#0f172a)]"
                    .value=${this.listInvoicesProjectId}
                    @input=${this.handleListInvoicesProjectIdChange}
                  />
                </label>
                <label class="flex flex-col gap-1 text-sm min-w-[8rem]">
                  <span class="text-[var(--text-muted,#64748b)]">${this.msg['intent.invoiceWorkspace.listInvoices.list.filter.clientId.label']}</span>
                  <input
                    class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-[var(--text-default,#0f172a)]"
                    .value=${this.listInvoicesClientId}
                    @input=${this.handleListInvoicesClientIdChange}
                  />
                </label>
                <label class="flex flex-col gap-1 text-sm min-w-[6rem]">
                  <span class="text-[var(--text-muted,#64748b)]">${this.msg['intent.invoiceWorkspace.listInvoices.list.filter.page.label']}</span>
                  <input
                    type="number"
                    class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-[var(--text-default,#0f172a)]"
                    .value=${this.listInvoicesPage}
                    @input=${this.handleListInvoicesPageChange}
                  />
                </label>
                <label class="flex flex-col gap-1 text-sm min-w-[6rem]">
                  <span class="text-[var(--text-muted,#64748b)]">${this.msg['intent.invoiceWorkspace.listInvoices.list.filter.pageSize.label']}</span>
                  <input
                    type="number"
                    class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-[var(--text-default,#0f172a)]"
                    .value=${this.listInvoicesPageSize}
                    @input=${this.handleListInvoicesPageSizeChange}
                  />
                </label>
                <button
                  type="button"
                  class="rounded-md px-4 py-2 text-sm font-medium bg-[var(--button-primary-bg,#2563eb)] text-[var(--button-primary-text,#ffffff)] disabled:opacity-60"
                  ?disabled=${listLoading}
                  @click=${this.handleListInvoicesClick}
                >
                  ${listLoading ? '…' : this.msg['intent.invoiceWorkspace.listInvoices.list.title']}
                </button>
              </div>
            </div>

            <div class="space-y-3">
              <div class="flex items-center justify-between gap-3">
                <h2 class="text-lg font-medium text-[var(--text-strong,#0f172a)]">
                  ${this.msg['organism.invoiceWorkspace.listInvoices.title']}
                </h2>
                ${total !== undefined && total !== null
                  ? html`<span class="text-sm text-[var(--text-muted,#64748b)]">${this.msg['intent.invoiceWorkspace.listInvoices.list.column.total.label']}: ${total}</span>`
                  : nothing}
              </div>

              ${listLoading
                ? html`
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                      <div class="h-28 rounded-lg bg-[var(--surface-alt-bg,#f1f5f9)] animate-pulse"></div>
                      <div class="h-28 rounded-lg bg-[var(--surface-alt-bg,#f1f5f9)] animate-pulse"></div>
                    </div>
                  `
                : invoices.length === 0
                  ? html`
                      <p class="text-sm text-[var(--text-muted,#64748b)] py-6">
                        ${this.msg['intent.invoiceWorkspace.listInvoices.list.empty']}
                      </p>
                    `
                  : html`
                      <div class="flex gap-3 overflow-x-auto pb-2">
                        ${lanes.map(([lane, items]) => html`
                          <div class="min-w-[16rem] flex-1 rounded-lg border border-[var(--border-subtle,#e2e8f0)] bg-[var(--surface-alt-bg,#f1f5f9)] p-3 space-y-2">
                            <div class="flex items-center justify-between gap-2">
                              <h3 class="text-sm font-semibold uppercase tracking-wide text-[var(--text-muted,#64748b)]">${lane}</h3>
                              <span class="text-xs rounded-full px-2 py-0.5 bg-[var(--status-neutral-bg,#e2e8f0)] text-[var(--status-neutral-text,#334155)]">${items.length}</span>
                            </div>
                            <div class="space-y-2">
                              ${items.map((item: InvoiceRow) => {
                                const row = item as InvoiceRow & {
                                  invoiceId?: string;
                                  invoiceNumber?: string;
                                  clientId?: string;
                                  projectId?: string;
                                  totalAmount?: number | string;
                                  total?: number | string;
                                  issueDate?: string;
                                  dueDate?: string;
                                  status?: string;
                                };
                                const id = String(row.invoiceId ?? '');
                                const isSelected = id !== '' && id === selectedInvoiceId;
                                return html`
                                  <button
                                    type="button"
                                    class="w-full text-left rounded-md border p-3 space-y-1 transition-shadow ${isSelected
                                      ? 'border-[var(--selected-border,#2563eb)] bg-[var(--selected-bg,#eff6ff)] text-[var(--selected-text,#0f172a)] shadow-sm'
                                      : 'border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] text-[var(--text-default,#0f172a)] hover:border-[var(--border-default,#cbd5e1)]'}"
                                    @click=${(_e: Event) => this.setSendInvoiceCmdInvoiceId(id)}
                                  >
                                    <div class="font-medium text-sm">${row.invoiceNumber ?? id}</div>
                                    <div class="text-xs text-[var(--text-muted,#64748b)] space-y-0.5">
                                      ${row.clientId
                                        ? html`<div>${this.msg['intent.invoiceWorkspace.listInvoices.list.filter.clientId.label']}: ${row.clientId}</div>`
                                        : nothing}
                                      ${row.projectId
                                        ? html`<div>${this.msg['intent.invoiceWorkspace.listInvoices.list.filter.projectId.label']}: ${row.projectId}</div>`
                                        : nothing}
                                      ${row.totalAmount !== undefined && row.totalAmount !== null
                                        ? html`<div>${this.msg['intent.invoiceWorkspace.listInvoices.list.column.total.label']}: ${row.totalAmount}</div>`
                                        : row.total !== undefined && row.total !== null
                                          ? html`<div>${this.msg['intent.invoiceWorkspace.listInvoices.list.column.total.label']}: ${row.total}</div>`
                                          : nothing}
                                      ${row.issueDate ? html`<div>${row.issueDate}</div>` : nothing}
                                      ${row.dueDate ? html`<div>${row.dueDate}</div>` : nothing}
                                    </div>
                                  </button>
                                `;
                              })}
                            </div>
                          </div>
                        `)}
                      </div>
                    `}
            </div>

            <div class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-alt-bg,#f1f5f9)] p-4 space-y-3">
              <h2 class="text-base font-medium text-[var(--text-strong,#0f172a)]">
                ${this.msg['organism.invoiceWorkspace.sendInvoiceCmd.title']}
              </h2>
              ${selectedInvoice
                ? html`
                    <div class="text-sm space-y-1 text-[var(--text-default,#0f172a)]">
                      <div class="font-medium">${(selectedInvoice as { invoiceNumber?: string }).invoiceNumber ?? selectedInvoiceId}</div>
                      ${(selectedInvoice as { clientId?: string }).clientId
                        ? html`<div class="text-[var(--text-muted,#64748b)]">${this.msg['intent.invoiceWorkspace.listInvoices.list.filter.clientId.label']}: ${(selectedInvoice as { clientId?: string }).clientId}</div>`
                        : nothing}
                      ${(selectedInvoice as { projectId?: string }).projectId
                        ? html`<div class="text-[var(--text-muted,#64748b)]">${this.msg['intent.invoiceWorkspace.listInvoices.list.filter.projectId.label']}: ${(selectedInvoice as { projectId?: string }).projectId}</div>`
                        : nothing}
                      ${(selectedInvoice as { totalAmount?: number | string }).totalAmount !== undefined &&
                      (selectedInvoice as { totalAmount?: number | string }).totalAmount !== null
                        ? html`<div class="text-[var(--text-muted,#64748b)]">${this.msg['intent.invoiceWorkspace.listInvoices.list.column.total.label']}: ${(selectedInvoice as { totalAmount?: number | string }).totalAmount}</div>`
                        : nothing}
                    </div>
                  `
                : html`
                    <p class="text-sm text-[var(--text-muted,#64748b)]">
                      ${this.msg['intent.invoiceWorkspace.sendInvoiceCmd.form.title']}
                    </p>
                  `}
              <div class="flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  class="rounded-md px-4 py-2 text-sm font-medium bg-[var(--button-primary-bg,#2563eb)] text-[var(--button-primary-text,#ffffff)] disabled:opacity-60"
                  ?disabled=${this.sendInvoiceCmdState === 'loading' || !selectedInvoiceId}
                  @click=${this.handleSendInvoiceCmdClick}
                >
                  ${this.sendInvoiceCmdState === 'loading'
                    ? '…'
                    : this.msg['intent.invoiceWorkspace.sendInvoiceCmd.form.action.sendInvoiceCmd']}
                </button>
              </div>
              ${this.sendInvoiceCmdState === 'success'
                ? html`
                    <div class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--status-success-bg,#dcfce7)] text-[var(--status-success-text,#166534)] px-3 py-2 text-sm flex items-start justify-between gap-2">
                      <span><!-- TODO: action.sendInvoiceCmd.success -->Invoice sent.</span>
                      <button type="button" class="text-xs underline" @click=${(_e: Event) => { this.sendInvoiceCmdState = 'idle'; }}>×</button>
                    </div>
                  `
                : this.sendInvoiceCmdState === 'error'
                  ? html`
                      <div class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--status-error-bg,#fee2e2)] text-[var(--status-error-text,#991b1b)] px-3 py-2 text-sm flex items-start justify-between gap-2">
                        <span>${this.sendInvoiceCmdError || '<!-- TODO: action.sendInvoiceCmd.error -->Failed to send invoice.'}</span>
                        <button type="button" class="text-xs underline" @click=${(_e: Event) => { this.sendInvoiceCmdState = 'idle'; }}>×</button>
                      </div>
                    `
                  : nothing}
            </div>
          </section>

          <section class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-4 space-y-4">
            <h2 class="text-lg font-medium text-[var(--text-strong,#0f172a)]">
              ${this.msg['section.invoiceWorkspace.createInvoiceSection.title']}
            </h2>
            <div class="space-y-3 max-w-md">
              <h3 class="text-sm font-medium text-[var(--text-muted,#64748b)]">
                ${this.msg['organism.invoiceWorkspace.createInvoiceCmd.title']}
              </h3>
              <label class="flex flex-col gap-1 text-sm">
                <span class="text-[var(--text-muted,#64748b)]">${this.msg['intent.invoiceWorkspace.createInvoiceCmd.form.field.invoiceNumber.label']}</span>
                <input
                  class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-[var(--text-default,#0f172a)]"
                  .value=${this.createInvoiceCmdInvoiceNumber}
                  @input=${this.handleCreateInvoiceCmdInvoiceNumberChange}
                />
              </label>
              <div class="flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  class="rounded-md px-4 py-2 text-sm font-medium bg-[var(--button-primary-bg,#2563eb)] text-[var(--button-primary-text,#ffffff)] disabled:opacity-60"
                  ?disabled=${this.createInvoiceCmdState === 'loading'}
                  @click=${this.handleCreateInvoiceCmdClick}
                >
                  ${this.createInvoiceCmdState === 'loading'
                    ? '…'
                    : this.msg['intent.invoiceWorkspace.createInvoiceCmd.form.action.createInvoiceCmd']}
                </button>
              </div>
              ${this.createInvoiceCmdState === 'success'
                ? html`
                    <div class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--status-success-bg,#dcfce7)] text-[var(--status-success-text,#166534)] px-3 py-2 text-sm flex items-start justify-between gap-2">
                      <span><!-- TODO: action.createInvoiceCmd.success -->Invoice created.</span>
                      <button type="button" class="text-xs underline" @click=${(_e: Event) => { this.createInvoiceCmdState = 'idle'; }}>×</button>
                    </div>
                  `
                : this.createInvoiceCmdState === 'error'
                  ? html`
                      <div class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--status-error-bg,#fee2e2)] text-[var(--status-error-text,#991b1b)] px-3 py-2 text-sm flex items-start justify-between gap-2">
                        <span>${this.createInvoiceCmdError || '<!-- TODO: action.createInvoiceCmd.error -->Failed to create invoice.'}</span>
                        <button type="button" class="text-xs underline" @click=${(_e: Event) => { this.createInvoiceCmdState = 'idle'; }}>×</button>
                      </div>
                    `
                  : nothing}
            </div>
          </section>
        </div>
      </div>
    `;
  }
}
