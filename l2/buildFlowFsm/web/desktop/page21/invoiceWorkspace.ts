/// <mls fileReference="_102045_/l2/buildFlowFsm/web/desktop/page21/invoiceWorkspace.ts" enhancement="_102020_/l2/enhancementAura"/>

import { html, nothing } from 'lit';
import { customElement } from 'lit/decorators.js';
import { BuildFlowFsmInvoiceWorkspaceBase } from '/_102045_/l2/buildFlowFsm/web/shared/invoiceWorkspace.js';
import type { ListInvoicesOutput } from '/_102045_/l2/buildFlowFsm/web/shared/invoiceWorkspace.js';

type InvoiceRow = {
  invoiceId?: string;
  id?: string;
  invoiceNumber?: string;
  status?: string;
  clientId?: string;
  clientName?: string;
  projectId?: string;
  projectName?: string;
  totalAmount?: number | string;
  sentAt?: string;
  createdAt?: string;
};

@customElement('build-flow-fsm--web--desktop--page21--invoice-workspace-102045')
export class BuildFlowFsmDesktopPage21InvoiceWorkspacePage extends BuildFlowFsmInvoiceWorkspaceBase {
  render() {
    const listLoading = this.listInvoicesState === 'loading';
    const createLoading = this.createInvoiceCmdState === 'loading';
    const sendLoading = this.sendInvoiceCmdState === 'loading';

    const listData = this.listInvoicesData as ListInvoicesOutput | null | undefined;
    const rawInvoices =
      listData &&
      typeof listData === 'object' &&
      Array.isArray((listData as { invoices?: unknown }).invoices)
        ? ((listData as { invoices: InvoiceRow[] }).invoices)
        : [];
    const invoices: InvoiceRow[] = rawInvoices;
    const totalFromData =
      listData && typeof listData === 'object' && typeof (listData as { total?: unknown }).total === 'number'
        ? ((listData as { total: number }).total)
        : invoices.length;

    const draftCount = invoices.filter((row) => String(row.status ?? '').toLowerCase() === 'draft').length;
    const sentCount = invoices.filter((row) => String(row.status ?? '').toLowerCase() === 'sent').length;

    const formatAmount = (value: number | string | undefined): string => {
      if (value === undefined || value === null || value === '') return '—';
      const num = typeof value === 'number' ? value : Number(value);
      if (Number.isFinite(num)) {
        return num.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
      }
      return String(value);
    };

    const formatDate = (value: string | undefined): string => {
      if (!value) return '—';
      const d = new Date(value);
      if (Number.isNaN(d.getTime())) return value;
      return d.toLocaleDateString();
    };

    const statusBadgeClass = (status: string | undefined): string => {
      const s = String(status ?? '').toLowerCase();
      if (s === 'sent') {
        return 'bg-[var(--status-success-bg,#dcfce7)] text-[var(--status-success-text,#166534)]';
      }
      if (s === 'draft') {
        return 'bg-[var(--status-warning-bg,#fef9c3)] text-[var(--status-warning-text,#854d0e)]';
      }
      return 'bg-[var(--status-neutral-bg,#f1f5f9)] text-[var(--status-neutral-text,#334155)]';
    };

    const rowId = (row: InvoiceRow): string => row.invoiceId || row.id || '';

    return html`
      <div class="min-h-full bg-[var(--page-bg,#f8fafc)] text-[var(--text-default,#0f172a)] p-6 space-y-6">
        <header class="flex flex-wrap items-start justify-between gap-4">
          <div>
            <h1 class="text-2xl font-semibold text-[var(--text-strong,#0f172a)]">
              ${this.msg['section.invoiceWorkspace.sec-invoice-list.title']}
            </h1>
            <p class="mt-1 text-sm text-[var(--text-muted,#64748b)]">
              ${this.msg['intent.invoiceWorkspace.listInvoices.list.title']}
            </p>
          </div>
        </header>

        <section
          class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-4 shadow-sm"
          aria-label=${this.msg['organism.invoiceWorkspace.summary-first10.title']}
        >
          <div class="flex flex-wrap items-center justify-between gap-3 mb-3">
            <h2 class="text-sm font-semibold uppercase tracking-wide text-[var(--text-muted,#64748b)]">
              ${this.msg['organism.invoiceWorkspace.summary-first10.title']}
            </h2>
          </div>
          <div class="grid grid-cols-2 md:grid-cols-4 gap-3">
            <div class="rounded-lg border border-[var(--border-subtle,#e2e8f0)] bg-[var(--surface-alt-bg,#f8fafc)] px-4 py-3">
              <div class="text-xs text-[var(--text-muted,#64748b)]">${this.msg['intent.invoiceWorkspace.listInvoices.list.column.total.label']}</div>
              <div class="mt-1 text-xl font-semibold text-[var(--text-strong,#0f172a)]">${totalFromData}</div>
            </div>
            <div class="rounded-lg border border-[var(--border-subtle,#e2e8f0)] bg-[var(--surface-alt-bg,#f8fafc)] px-4 py-3">
              <div class="text-xs text-[var(--text-muted,#64748b)]">Draft</div>
              <div class="mt-1 text-xl font-semibold text-[var(--status-warning-text,#854d0e)]">${draftCount}</div>
            </div>
            <div class="rounded-lg border border-[var(--border-subtle,#e2e8f0)] bg-[var(--surface-alt-bg,#f8fafc)] px-4 py-3">
              <div class="text-xs text-[var(--text-muted,#64748b)]">Sent</div>
              <div class="mt-1 text-xl font-semibold text-[var(--status-success-text,#166534)]">${sentCount}</div>
            </div>
            <div class="rounded-lg border border-[var(--border-subtle,#e2e8f0)] bg-[var(--surface-alt-bg,#f8fafc)] px-4 py-3">
              <div class="text-xs text-[var(--text-muted,#64748b)]">${this.msg['intent.invoiceWorkspace.listInvoices.list.filter.status.label']}</div>
              <div class="mt-1 text-sm font-medium text-[var(--text-default,#0f172a)] truncate">
                ${this.listInvoicesStatus || '—'}
              </div>
            </div>
          </div>
        </section>

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
          <section
            class="lg:col-span-2 rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] shadow-sm overflow-hidden"
            aria-label=${this.msg['organism.invoiceWorkspace.listInvoices.title']}
          >
            <div class="border-b border-[var(--border-subtle,#e2e8f0)] px-4 py-3 space-y-3 bg-[var(--surface-alt-bg,#f8fafc)]">
              <div class="flex flex-wrap items-center justify-between gap-2">
                <h2 class="text-base font-semibold text-[var(--text-strong,#0f172a)]">
                  ${this.msg['organism.invoiceWorkspace.listInvoices.title']}
                </h2>
                <button
                  type="button"
                  class="inline-flex items-center rounded-lg px-3 py-1.5 text-sm font-medium bg-[var(--button-secondary-bg,#f1f5f9)] text-[var(--button-secondary-text,#0f172a)] border border-[var(--button-secondary-border,#e2e8f0)] hover:opacity-90 disabled:opacity-50"
                  ?disabled=${listLoading}
                  @click=${this.handleListInvoicesClick}
                >
                  ${listLoading ? 'Loading…' : this.msg['intent.invoiceWorkspace.listInvoices.list.title']}
                </button>
              </div>

              <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-5 gap-2">
                <label class="flex flex-col gap-1 text-xs text-[var(--text-muted,#64748b)]">
                  <span>${this.msg['intent.invoiceWorkspace.listInvoices.list.filter.status.label']}</span>
                  <select
                    class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] text-[var(--text-default,#0f172a)] px-2 py-1.5 text-sm"
                    .value=${this.listInvoicesStatus ?? ''}
                    @change=${this.handleListInvoicesStatusChange}
                  >
                    <option value="">All</option>
                    <option value="draft">draft</option>
                    <option value="sent">sent</option>
                  </select>
                </label>
                <label class="flex flex-col gap-1 text-xs text-[var(--text-muted,#64748b)]">
                  <span>${this.msg['intent.invoiceWorkspace.listInvoices.list.filter.projectId.label']}</span>
                  <input
                    type="text"
                    class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] text-[var(--text-default,#0f172a)] px-2 py-1.5 text-sm"
                    .value=${this.listInvoicesProjectId ?? ''}
                    @change=${this.handleListInvoicesProjectIdChange}
                  />
                </label>
                <label class="flex flex-col gap-1 text-xs text-[var(--text-muted,#64748b)]">
                  <span>${this.msg['intent.invoiceWorkspace.listInvoices.list.filter.clientId.label']}</span>
                  <input
                    type="text"
                    class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] text-[var(--text-default,#0f172a)] px-2 py-1.5 text-sm"
                    .value=${this.listInvoicesClientId ?? ''}
                    @change=${this.handleListInvoicesClientIdChange}
                  />
                </label>
                <label class="flex flex-col gap-1 text-xs text-[var(--text-muted,#64748b)]">
                  <span>${this.msg['intent.invoiceWorkspace.listInvoices.list.filter.page.label']}</span>
                  <input
                    type="number"
                    min="1"
                    class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] text-[var(--text-default,#0f172a)] px-2 py-1.5 text-sm"
                    .value=${this.listInvoicesPage ?? ''}
                    @change=${this.handleListInvoicesPageChange}
                  />
                </label>
                <label class="flex flex-col gap-1 text-xs text-[var(--text-muted,#64748b)]">
                  <span>${this.msg['intent.invoiceWorkspace.listInvoices.list.filter.pageSize.label']}</span>
                  <input
                    type="number"
                    min="1"
                    class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] text-[var(--text-default,#0f172a)] px-2 py-1.5 text-sm"
                    .value=${this.listInvoicesPageSize ?? ''}
                    @change=${this.handleListInvoicesPageSizeChange}
                  />
                </label>
              </div>
            </div>

            ${this.sendInvoiceCmdState === 'success'
              ? html`
                  <div
                    class="mx-4 mt-3 rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--status-success-bg,#dcfce7)] text-[var(--status-success-text,#166534)] px-3 py-2 text-sm"
                    role="status"
                  >
                    <!-- TODO: action.sendInvoiceCmd.success not in MessageType -->
                    Invoice sent to client.
                  </div>
                `
              : nothing}
            ${this.sendInvoiceCmdState === 'error'
              ? html`
                  <div
                    class="mx-4 mt-3 rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--status-error-bg,#fee2e2)] text-[var(--status-error-text,#991b1b)] px-3 py-2 text-sm"
                    role="alert"
                  >
                    ${this.sendInvoiceCmdError || 'Failed to send invoice.'}
                  </div>
                `
              : nothing}

            ${listLoading
              ? html`
                  <div class="p-6 space-y-3" aria-busy="true">
                    <div class="h-10 rounded-lg bg-[var(--surface-alt-bg,#f1f5f9)] animate-pulse"></div>
                    <div class="h-10 rounded-lg bg-[var(--surface-alt-bg,#f1f5f9)] animate-pulse"></div>
                    <div class="h-10 rounded-lg bg-[var(--surface-alt-bg,#f1f5f9)] animate-pulse"></div>
                  </div>
                `
              : invoices.length === 0
                ? html`
                    <div class="p-8 text-center text-sm text-[var(--text-muted,#64748b)]">
                      ${this.msg['intent.invoiceWorkspace.listInvoices.list.empty']}
                    </div>
                  `
                : html`
                    <div class="overflow-x-auto">
                      <table class="min-w-full text-sm">
                        <thead class="bg-[var(--surface-alt-bg,#f8fafc)] text-left text-xs uppercase tracking-wide text-[var(--text-muted,#64748b)]">
                          <tr>
                            <th class="px-4 py-3 font-medium">${this.msg['intent.invoiceWorkspace.listInvoices.list.column.invoices.label']}</th>
                            <th class="px-4 py-3 font-medium">${this.msg['intent.invoiceWorkspace.listInvoices.list.filter.clientId.label']}</th>
                            <th class="px-4 py-3 font-medium">${this.msg['intent.invoiceWorkspace.listInvoices.list.filter.projectId.label']}</th>
                            <th class="px-4 py-3 font-medium">${this.msg['intent.invoiceWorkspace.listInvoices.list.filter.status.label']}</th>
                            <th class="px-4 py-3 font-medium text-right">${this.msg['intent.invoiceWorkspace.listInvoices.list.column.total.label']}</th>
                            <th class="px-4 py-3 font-medium">Created</th>
                            <th class="px-4 py-3 font-medium">Sent</th>
                            <th class="px-4 py-3 font-medium text-right">${this.msg['organism.invoiceWorkspace.sendInvoiceCmd.title']}</th>
                          </tr>
                        </thead>
                        <tbody class="divide-y divide-[var(--border-subtle,#e2e8f0)]">
                          ${invoices.map((item: InvoiceRow) => {
                            const id = rowId(item);
                            const statusValue = String(item.status ?? '');
                            const canSend = statusValue.toLowerCase() === 'draft' && !!id;
                            const isSendingThis =
                              sendLoading && this.sendInvoiceCmdInvoiceId === id;
                            return html`
                              <tr
                                class="hover:bg-[var(--selected-bg,#f1f5f9)] ${this.sendInvoiceCmdInvoiceId === id
                                  ? 'bg-[var(--selected-bg,#eff6ff)]'
                                  : ''}"
                              >
                                <td class="px-4 py-3 font-medium text-[var(--text-strong,#0f172a)]">
                                  ${item.invoiceNumber || id || '—'}
                                </td>
                                <td class="px-4 py-3 text-[var(--text-default,#0f172a)]">
                                  ${item.clientName || item.clientId || '—'}
                                </td>
                                <td class="px-4 py-3 text-[var(--text-default,#0f172a)]">
                                  ${item.projectName || item.projectId || '—'}
                                </td>
                                <td class="px-4 py-3">
                                  <span class="inline-flex rounded-full px-2.5 py-0.5 text-xs font-medium ${statusBadgeClass(statusValue)}">
                                    ${statusValue || '—'}
                                  </span>
                                </td>
                                <td class="px-4 py-3 text-right tabular-nums text-[var(--text-default,#0f172a)]">
                                  ${formatAmount(item.totalAmount)}
                                </td>
                                <td class="px-4 py-3 text-[var(--text-muted,#64748b)] whitespace-nowrap">
                                  ${formatDate(item.createdAt)}
                                </td>
                                <td class="px-4 py-3 text-[var(--text-muted,#64748b)] whitespace-nowrap">
                                  ${formatDate(item.sentAt)}
                                </td>
                                <td class="px-4 py-3 text-right">
                                  ${canSend
                                    ? html`
                                        <button
                                          type="button"
                                          class="inline-flex items-center rounded-lg px-3 py-1.5 text-xs font-medium bg-[var(--button-primary-bg,#2563eb)] text-[var(--button-primary-text,#ffffff)] hover:opacity-90 disabled:opacity-50"
                                          ?disabled=${sendLoading}
                                          @click=${(e: Event) => {
                                            this.setSendInvoiceCmdInvoiceId(id);
                                            this.handleSendInvoiceCmdClick(e);
                                          }}
                                        >
                                          ${isSendingThis
                                            ? 'Sending…'
                                            : this.msg['intent.invoiceWorkspace.sendInvoiceCmd.form.action.sendInvoiceCmd']}
                                        </button>
                                      `
                                    : html`
                                        <span class="text-xs text-[var(--text-muted,#64748b)]">—</span>
                                      `}
                                </td>
                              </tr>
                            `;
                          })}
                        </tbody>
                      </table>
                    </div>
                  `}

            <div
              class="flex flex-wrap items-center justify-between gap-2 border-t border-[var(--border-subtle,#e2e8f0)] px-4 py-3 text-xs text-[var(--text-muted,#64748b)] bg-[var(--surface-alt-bg,#f8fafc)]"
            >
              <span>
                ${this.msg['intent.invoiceWorkspace.listInvoices.list.column.total.label']}: ${totalFromData}
              </span>
              <span>
                ${this.msg['intent.invoiceWorkspace.listInvoices.list.filter.page.label']}
                ${this.listInvoicesPage || '1'}
                ·
                ${this.msg['intent.invoiceWorkspace.listInvoices.list.filter.pageSize.label']}
                ${this.listInvoicesPageSize || '—'}
              </span>
            </div>
          </section>

          <aside
            class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] shadow-sm p-4 space-y-4"
            aria-label=${this.msg['section.invoiceWorkspace.sec-create-invoice.title']}
          >
            <div>
              <h2 class="text-base font-semibold text-[var(--text-strong,#0f172a)]">
                ${this.msg['organism.invoiceWorkspace.createInvoiceCmd.title']}
              </h2>
              <p class="mt-1 text-xs text-[var(--text-muted,#64748b)]">
                ${this.msg['intent.invoiceWorkspace.createInvoiceCmd.form.title']}
              </p>
            </div>

            ${this.createInvoiceCmdState === 'success'
              ? html`
                  <div
                    class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--status-success-bg,#dcfce7)] text-[var(--status-success-text,#166534)] px-3 py-2 text-sm"
                    role="status"
                  >
                    <!-- TODO: action.createInvoiceCmd.success not in MessageType -->
                    Invoice draft created.
                  </div>
                `
              : nothing}
            ${this.createInvoiceCmdState === 'error'
              ? html`
                  <div
                    class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--status-error-bg,#fee2e2)] text-[var(--status-error-text,#991b1b)] px-3 py-2 text-sm"
                    role="alert"
                  >
                    ${this.createInvoiceCmdError || 'Failed to create invoice.'}
                  </div>
                `
              : nothing}

            <div class="space-y-3">
              <label class="flex flex-col gap-1 text-xs text-[var(--text-muted,#64748b)]">
                <span>${this.msg['intent.invoiceWorkspace.listInvoices.list.filter.projectId.label']}</span>
                <input
                  type="text"
                  class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] text-[var(--text-default,#0f172a)] px-3 py-2 text-sm"
                  .value=${this.createInvoiceCmdProjectId ?? ''}
                  @change=${this.handleCreateInvoiceCmdProjectIdChange}
                  ?disabled=${createLoading}
                />
              </label>
              <label class="flex flex-col gap-1 text-xs text-[var(--text-muted,#64748b)]">
                <span>${this.msg['intent.invoiceWorkspace.listInvoices.list.filter.clientId.label']}</span>
                <input
                  type="text"
                  class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] text-[var(--text-default,#0f172a)] px-3 py-2 text-sm"
                  .value=${this.createInvoiceCmdClientId ?? ''}
                  @change=${this.handleCreateInvoiceCmdClientIdChange}
                  ?disabled=${createLoading}
                />
              </label>
              <label class="flex flex-col gap-1 text-xs text-[var(--text-muted,#64748b)]">
                <span>${this.msg['intent.invoiceWorkspace.createInvoiceCmd.form.field.invoiceNumber.label']}</span>
                <input
                  type="text"
                  class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] text-[var(--text-default,#0f172a)] px-3 py-2 text-sm"
                  .value=${this.createInvoiceCmdInvoiceNumber ?? ''}
                  @input=${this.handleCreateInvoiceCmdInvoiceNumberChange}
                  ?disabled=${createLoading}
                />
              </label>
            </div>

            <button
              type="button"
              class="w-full inline-flex items-center justify-center rounded-lg px-4 py-2.5 text-sm font-medium bg-[var(--button-primary-bg,#2563eb)] text-[var(--button-primary-text,#ffffff)] hover:opacity-90 disabled:opacity-50"
              ?disabled=${createLoading}
              @click=${this.handleCreateInvoiceCmdClick}
            >
              ${createLoading
                ? 'Creating…'
                : this.msg['intent.invoiceWorkspace.createInvoiceCmd.form.action.createInvoiceCmd']}
            </button>
          </aside>
        </div>
      </div>
    `;
  }
}
