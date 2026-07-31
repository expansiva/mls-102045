/// <mls fileReference="_102045_/l2/buildFlowFsm/web/desktop/page31/invoiceWorkspace.ts" enhancement="_102020_/l2/enhancementAura"/>

import { html, nothing } from 'lit';
import { customElement } from 'lit/decorators.js';
import { BuildFlowFsmInvoiceWorkspaceBase } from '/_102045_/l2/buildFlowFsm/web/shared/invoiceWorkspace.js';
import type { ListInvoicesOutput } from '/_102045_/l2/buildFlowFsm/web/shared/invoiceWorkspace.js';

@customElement('build-flow-fsm--web--desktop--page31--invoice-workspace-102045')
export class BuildFlowFsmDesktopPage31InvoiceWorkspacePage extends BuildFlowFsmInvoiceWorkspaceBase {
  render() {
    type InvoiceRow = {
      invoiceId?: string;
      id?: string;
      invoiceNumber?: string;
      status?: string;
      projectId?: string;
      clientId?: string;
      total?: number | string;
      amount?: number | string;
    };

    const listData: ListInvoicesOutput | null | undefined = this.listInvoicesData;
    const invoicesUnknown: unknown =
      listData && typeof listData === 'object' && listData !== null && 'invoices' in (listData as object)
        ? (listData as { invoices?: unknown }).invoices
        : undefined;
    const invoiceRows: InvoiceRow[] = Array.isArray(invoicesUnknown)
      ? (invoicesUnknown as InvoiceRow[])
      : [];

    const totalUnknown: unknown =
      listData && typeof listData === 'object' && listData !== null && 'total' in (listData as object)
        ? (listData as { total?: unknown }).total
        : undefined;
    const listTotal: number =
      typeof totalUnknown === 'number'
        ? totalUnknown
        : invoiceRows.length;

    const statusCounts: Record<string, number> = {};
    for (const row of invoiceRows) {
      const key = String(row.status ?? 'unknown');
      statusCounts[key] = (statusCounts[key] ?? 0) + 1;
    }
    const statusEntries = Object.entries(statusCounts);

    const listLoading = this.listInvoicesState === 'loading';
    const createLoading = this.createInvoiceCmdState === 'loading';
    const sendLoading = this.sendInvoiceCmdState === 'loading';

    const resolveInvoiceId = (row: InvoiceRow): string =>
      String(row.invoiceId ?? row.id ?? '');

    const canSendInvoice = (row: InvoiceRow): boolean => {
      const status = String(row.status ?? '').toLowerCase();
      if (!resolveInvoiceId(row)) return false;
      return status !== 'sent' && status !== 'paid' && status !== 'cancelled' && status !== 'void';
    };

    return html`
      <div class="min-h-full bg-[var(--page-bg,#f8fafc)] text-[var(--text-default,#0f172a)] p-6 space-y-6">
        <header class="space-y-1">
          <h1 class="text-2xl font-semibold text-[var(--text-strong,#020617)]">
            ${this.msg['section.invoiceWorkspace.sec-invoice-list.title']}
          </h1>
          <p class="text-sm text-[var(--text-muted,#64748b)]">
            ${this.msg['organism.invoiceWorkspace.summary-first10.title']}
          </p>
        </header>

        <!-- summary-first -->
        <section class="space-y-3" aria-label=${this.msg['organism.invoiceWorkspace.summary-first10.title']}>
          <h2 class="text-lg font-medium text-[var(--text-strong,#020617)]">
            ${this.msg['intent.invoiceWorkspace.summary-first10.content.title']}
          </h2>
          <div class="grid grid-cols-2 md:grid-cols-4 gap-3">
            <div class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-4 shadow-sm">
              <div class="text-xs uppercase tracking-wide text-[var(--text-muted,#64748b)]">
                ${this.msg['intent.invoiceWorkspace.listInvoices.list.column.invoices.label']}
              </div>
              <div class="mt-1 text-2xl font-semibold text-[var(--text-strong,#020617)]">${listTotal}</div>
            </div>
            ${statusEntries.length > 0
              ? statusEntries.map(
                  ([status, count]) => html`
                    <div class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-alt-bg,#f1f5f9)] p-4 shadow-sm">
                      <div class="text-xs uppercase tracking-wide text-[var(--text-muted,#64748b)]">${status}</div>
                      <div class="mt-1 text-2xl font-semibold text-[var(--text-strong,#020617)]">${count}</div>
                    </div>
                  `,
                )
              : html`
                  <div class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-alt-bg,#f1f5f9)] p-4 shadow-sm">
                    <div class="text-xs uppercase tracking-wide text-[var(--text-muted,#64748b)]">
                      ${this.msg['intent.invoiceWorkspace.listInvoices.list.filter.status.label']}
                    </div>
                    <div class="mt-1 text-2xl font-semibold text-[var(--text-strong,#020617)]">—</div>
                  </div>
                `}
          </div>
        </section>

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <!-- invoice list + inline-row-command -->
          <section class="lg:col-span-2 space-y-4" aria-label=${this.msg['section.invoiceWorkspace.invoiceListSection.title']}>
            <div class="flex items-center justify-between gap-3 flex-wrap">
              <h2 class="text-lg font-medium text-[var(--text-strong,#020617)]">
                ${this.msg['organism.invoiceWorkspace.listInvoices.title']}
              </h2>
              <button
                type="button"
                class="inline-flex items-center px-4 py-2 rounded-lg bg-[var(--button-secondary-bg,#e2e8f0)] text-[var(--button-secondary-text,#0f172a)] border border-[var(--button-secondary-border,#cbd5e1)] disabled:opacity-60"
                ?disabled=${listLoading}
                @click=${(e: Event) => this.handleListInvoicesClick(e)}
              >
                ${listLoading ? 'Loading…' : this.msg['intent.invoiceWorkspace.listInvoices.list.title']}
              </button>
            </div>

            <div class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-4 space-y-3">
              <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                <label class="flex flex-col gap-1 text-sm">
                  <span class="text-[var(--text-muted,#64748b)]">${this.msg['intent.invoiceWorkspace.listInvoices.list.filter.status.label']}</span>
                  <input
                    class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-[var(--text-default,#0f172a)]"
                    .value=${this.listInvoicesStatus ?? ''}
                    @change=${(e: Event) => this.handleListInvoicesStatusChange(e)}
                    @input=${(e: Event) => this.handleListInvoicesStatusChange(e)}
                  />
                </label>
                <label class="flex flex-col gap-1 text-sm">
                  <span class="text-[var(--text-muted,#64748b)]">${this.msg['intent.invoiceWorkspace.listInvoices.list.filter.projectId.label']}</span>
                  <input
                    class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-[var(--text-default,#0f172a)]"
                    .value=${this.listInvoicesProjectId ?? ''}
                    @change=${(e: Event) => this.handleListInvoicesProjectIdChange(e)}
                    @input=${(e: Event) => this.handleListInvoicesProjectIdChange(e)}
                  />
                </label>
                <label class="flex flex-col gap-1 text-sm">
                  <span class="text-[var(--text-muted,#64748b)]">${this.msg['intent.invoiceWorkspace.listInvoices.list.filter.clientId.label']}</span>
                  <input
                    class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-[var(--text-default,#0f172a)]"
                    .value=${this.listInvoicesClientId ?? ''}
                    @change=${(e: Event) => this.handleListInvoicesClientIdChange(e)}
                    @input=${(e: Event) => this.handleListInvoicesClientIdChange(e)}
                  />
                </label>
                <label class="flex flex-col gap-1 text-sm">
                  <span class="text-[var(--text-muted,#64748b)]">${this.msg['intent.invoiceWorkspace.listInvoices.list.filter.page.label']}</span>
                  <input
                    type="number"
                    class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-[var(--text-default,#0f172a)]"
                    .value=${this.listInvoicesPage ?? ''}
                    @change=${(e: Event) => this.handleListInvoicesPageChange(e)}
                    @input=${(e: Event) => this.handleListInvoicesPageChange(e)}
                  />
                </label>
                <label class="flex flex-col gap-1 text-sm">
                  <span class="text-[var(--text-muted,#64748b)]">${this.msg['intent.invoiceWorkspace.listInvoices.list.filter.pageSize.label']}</span>
                  <input
                    type="number"
                    class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-[var(--text-default,#0f172a)]"
                    .value=${this.listInvoicesPageSize ?? ''}
                    @change=${(e: Event) => this.handleListInvoicesPageSizeChange(e)}
                    @input=${(e: Event) => this.handleListInvoicesPageSizeChange(e)}
                  />
                </label>
              </div>
            </div>

            ${listLoading
              ? html`
                  <div class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-6 animate-pulse space-y-3">
                    <div class="h-4 bg-[var(--surface-alt-bg,#e2e8f0)] rounded w-1/3"></div>
                    <div class="h-10 bg-[var(--surface-alt-bg,#e2e8f0)] rounded"></div>
                    <div class="h-10 bg-[var(--surface-alt-bg,#e2e8f0)] rounded"></div>
                    <div class="h-10 bg-[var(--surface-alt-bg,#e2e8f0)] rounded"></div>
                  </div>
                `
              : invoiceRows.length === 0
                ? html`
                    <div class="rounded-lg border border-[var(--border-subtle,#e2e8f0)] bg-[var(--surface-alt-bg,#f1f5f9)] p-6 text-[var(--text-muted,#64748b)]">
                      ${this.msg['intent.invoiceWorkspace.listInvoices.list.empty']}
                    </div>
                  `
                : html`
                    <div class="overflow-x-auto rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)]">
                      <table class="min-w-full text-sm">
                        <thead class="bg-[var(--surface-alt-bg,#f1f5f9)] text-left text-[var(--text-muted,#64748b)]">
                          <tr>
                            <th class="px-4 py-3 font-medium">${this.msg['intent.invoiceWorkspace.listInvoices.list.column.invoices.label']}</th>
                            <th class="px-4 py-3 font-medium">${this.msg['intent.invoiceWorkspace.listInvoices.list.filter.status.label']}</th>
                            <th class="px-4 py-3 font-medium">${this.msg['intent.invoiceWorkspace.listInvoices.list.filter.projectId.label']}</th>
                            <th class="px-4 py-3 font-medium">${this.msg['intent.invoiceWorkspace.listInvoices.list.filter.clientId.label']}</th>
                            <th class="px-4 py-3 font-medium">${this.msg['intent.invoiceWorkspace.listInvoices.list.column.total.label']}</th>
                            <th class="px-4 py-3 font-medium">${this.msg['organism.invoiceWorkspace.inline-row-command10.title']}</th>
                          </tr>
                        </thead>
                        <tbody>
                          ${invoiceRows.map((row: InvoiceRow) => {
                            const invoiceId = resolveInvoiceId(row);
                            const rowTotal = row.total ?? row.amount ?? '—';
                            const showSend = canSendInvoice(row);
                            return html`
                              <tr class="border-t border-[var(--border-subtle,#e2e8f0)] hover:bg-[var(--surface-alt-bg,#f8fafc)]">
                                <td class="px-4 py-3">
                                  <div class="font-medium text-[var(--text-strong,#020617)]">
                                    ${row.invoiceNumber ?? invoiceId ?? '—'}
                                  </div>
                                  <div class="text-xs text-[var(--text-muted,#64748b)]">${invoiceId}</div>
                                </td>
                                <td class="px-4 py-3">
                                  <span class="inline-flex px-2 py-0.5 rounded-lg text-xs bg-[var(--status-neutral-bg,#e2e8f0)] text-[var(--status-neutral-text,#334155)]">
                                    ${row.status ?? '—'}
                                  </span>
                                </td>
                                <td class="px-4 py-3 text-[var(--text-default,#0f172a)]">${row.projectId ?? '—'}</td>
                                <td class="px-4 py-3 text-[var(--text-default,#0f172a)]">${row.clientId ?? '—'}</td>
                                <td class="px-4 py-3 font-medium text-[var(--text-strong,#020617)]">${rowTotal}</td>
                                <td class="px-4 py-3">
                                  ${showSend
                                    ? html`
                                        <button
                                          type="button"
                                          class="inline-flex items-center px-3 py-1.5 rounded-lg text-sm bg-[var(--button-primary-bg,#2563eb)] text-[var(--button-primary-text,#ffffff)] disabled:opacity-60"
                                          ?disabled=${sendLoading}
                                          title=${this.msg['intent.invoiceWorkspace.inline-row-command10.content.title']}
                                          @click=${(e: Event) => {
                                            this.setSendInvoiceCmdInvoiceId(invoiceId);
                                            this.handleSendInvoiceCmdClick(e);
                                          }}
                                        >
                                          ${sendLoading && this.sendInvoiceCmdInvoiceId === invoiceId
                                            ? 'Sending…'
                                            : this.msg['intent.invoiceWorkspace.sendInvoiceCmd.form.action.sendInvoiceCmd']}
                                        </button>
                                      `
                                    : html`
                                        <span class="text-xs text-[var(--text-muted,#64748b)]">${row.status ?? '—'}</span>
                                      `}
                                </td>
                              </tr>
                            `;
                          })}
                        </tbody>
                      </table>
                    </div>
                  `}

            ${this.sendInvoiceCmdState === 'success'
              ? html`
                  <div class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--status-success-bg,#dcfce7)] text-[var(--status-success-text,#166534)] px-4 py-3 text-sm">
                    <!-- TODO: action.sendInvoiceCmd.success not in MessageType -->
                    Invoice sent successfully.
                  </div>
                `
              : this.sendInvoiceCmdState === 'error'
                ? html`
                    <div class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--status-error-bg,#fee2e2)] text-[var(--status-error-text,#991b1b)] px-4 py-3 text-sm">
                      ${this.sendInvoiceCmdError
                        ? this.sendInvoiceCmdError
                        : html`<!-- TODO: action.sendInvoiceCmd.error not in MessageType -->Failed to send invoice.`}
                    </div>
                  `
                : nothing}
          </section>

          <!-- create invoice -->
          <section class="space-y-4" aria-label=${this.msg['section.invoiceWorkspace.sec-create-invoice.title']}>
            <h2 class="text-lg font-medium text-[var(--text-strong,#020617)]">
              ${this.msg['section.invoiceWorkspace.createInvoiceSection.title']}
            </h2>

            <div class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-4 space-y-4 shadow-sm">
              <h3 class="text-base font-medium text-[var(--text-strong,#020617)]">
                ${this.msg['organism.invoiceWorkspace.createInvoiceCmd.title']}
              </h3>
              <p class="text-sm text-[var(--text-muted,#64748b)]">
                ${this.msg['intent.invoiceWorkspace.createInvoiceCmd.form.title']}
              </p>

              <label class="flex flex-col gap-1 text-sm">
                <span class="text-[var(--text-muted,#64748b)]">${this.msg['intent.invoiceWorkspace.listInvoices.list.filter.projectId.label']}</span>
                <input
                  class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-[var(--text-default,#0f172a)]"
                  .value=${this.createInvoiceCmdProjectId ?? ''}
                  @change=${(e: Event) => this.handleCreateInvoiceCmdProjectIdChange(e)}
                  @input=${(e: Event) => this.handleCreateInvoiceCmdProjectIdChange(e)}
                />
              </label>

              <label class="flex flex-col gap-1 text-sm">
                <span class="text-[var(--text-muted,#64748b)]">${this.msg['intent.invoiceWorkspace.createInvoiceCmd.form.field.invoiceNumber.label']}</span>
                <input
                  class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-[var(--text-default,#0f172a)]"
                  .value=${this.createInvoiceCmdInvoiceNumber ?? ''}
                  @change=${(e: Event) => this.handleCreateInvoiceCmdInvoiceNumberChange(e)}
                  @input=${(e: Event) => this.handleCreateInvoiceCmdInvoiceNumberChange(e)}
                />
              </label>

              <label class="flex flex-col gap-1 text-sm">
                <span class="text-[var(--text-muted,#64748b)]">${this.msg['intent.invoiceWorkspace.listInvoices.list.filter.clientId.label']}</span>
                <input
                  class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-[var(--text-default,#0f172a)]"
                  .value=${this.createInvoiceCmdClientId ?? ''}
                  @change=${(e: Event) => this.handleCreateInvoiceCmdClientIdChange(e)}
                  @input=${(e: Event) => this.handleCreateInvoiceCmdClientIdChange(e)}
                />
              </label>

              <button
                type="button"
                class="w-full inline-flex justify-center items-center px-4 py-2.5 rounded-lg bg-[var(--button-primary-bg,#2563eb)] text-[var(--button-primary-text,#ffffff)] disabled:opacity-60"
                ?disabled=${createLoading}
                @click=${(e: Event) => this.handleCreateInvoiceCmdClick(e)}
              >
                ${createLoading
                  ? 'Creating…'
                  : this.msg['intent.invoiceWorkspace.createInvoiceCmd.form.action.createInvoiceCmd']}
              </button>

              ${this.createInvoiceCmdState === 'success'
                ? html`
                    <div class="rounded-lg bg-[var(--status-success-bg,#dcfce7)] text-[var(--status-success-text,#166534)] px-3 py-2 text-sm">
                      <!-- TODO: action.createInvoiceCmd.success not in MessageType -->
                      Invoice created successfully.
                    </div>
                  `
                : this.createInvoiceCmdState === 'error'
                  ? html`
                      <div class="rounded-lg bg-[var(--status-error-bg,#fee2e2)] text-[var(--status-error-text,#991b1b)] px-3 py-2 text-sm">
                        ${this.createInvoiceCmdError
                          ? this.createInvoiceCmdError
                          : html`<!-- TODO: action.createInvoiceCmd.error not in MessageType -->Failed to create invoice.`}
                      </div>
                    `
                  : nothing}
            </div>

            <div class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-alt-bg,#f1f5f9)] p-4 space-y-2">
              <h3 class="text-sm font-medium text-[var(--text-strong,#020617)]">
                ${this.msg['organism.invoiceWorkspace.sendInvoiceCmd.title']}
              </h3>
              <p class="text-xs text-[var(--text-muted,#64748b)]">
                ${this.msg['intent.invoiceWorkspace.sendInvoiceCmd.form.title']}
              </p>
              <p class="text-xs text-[var(--text-muted,#64748b)]">
                ${this.msg['intent.invoiceWorkspace.inline-row-command10.content.title']}
              </p>
            </div>
          </section>
        </div>
      </div>
    `;
  }
}
