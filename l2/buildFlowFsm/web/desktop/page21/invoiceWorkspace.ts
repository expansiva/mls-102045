/// <mls fileReference="_102045_/l2/buildFlowFsm/web/desktop/page21/invoiceWorkspace.ts" enhancement="_102020_/l2/enhancementAura"/>

import { html, nothing } from 'lit';
import { customElement } from 'lit/decorators.js';
import type { TemplateResult } from 'lit';
import {
  BuildFlowFsmInvoiceWorkspaceBase,
  type MessageType,
  type ListInvoicesOutput,
} from '/_102045_/l2/buildFlowFsm/web/shared/invoiceWorkspace.js';

type InvoiceRow = {
  invoiceId?: string;
  invoiceNumber?: string;
  status?: string;
  totalAmount?: number | string;
  currency?: string;
  clientId?: string;
  projectId?: string;
  sentAt?: string;
  createdAt?: string;
};

@customElement('build-flow-fsm--web--desktop--page21--invoice-workspace-102045')
export class BuildFlowFsmDesktopPage21InvoiceWorkspacePage extends BuildFlowFsmInvoiceWorkspaceBase {
  /** Runtime i18n catalog provided by CollabLitElement; declared for strict typing. */
  declare readonly msg: MessageType;

  render(): TemplateResult {
    const msg = this.msg;
    return html`
      <div class="min-h-full bg-[var(--page-bg,#f8fafc)] text-[var(--text-default,#0f172a)] p-4 md:p-6 space-y-4">
        <div class="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
          <div class="space-y-1">
            <h1 class="text-xl font-semibold text-[var(--text-strong,#0f172a)]">
              ${msg['section.invoiceWorkspace.invoiceListSection.title']}
            </h1>
            <p class="text-sm text-[var(--text-muted,#64748b)]">
              ${msg['organism.invoiceWorkspace.listInvoices.title']}
            </p>
          </div>
          <div class="flex flex-wrap items-center gap-2">
            <button
              type="button"
              class="inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium bg-[var(--button-primary-bg,#2563eb)] text-[var(--button-primary-text,#ffffff)] disabled:opacity-60"
              ?disabled=${this.createInvoiceCmdState === 'loading'}
              @click=${() => this.requestUpdate()}
              data-panel-toggle="create"
            >
              ${msg['intent.invoiceWorkspace.createInvoiceCmd.form.action.createInvoiceCmd']}
            </button>
          </div>
        </div>

        ${this.renderTotalsBar()}
        ${this.renderFilterBar()}
        ${this.renderSendFeedback()}
        ${this.renderCreatePanel()}
        ${this.renderInvoiceTable()}
      </div>
    `;
  }

  private renderTotalsBar(): TemplateResult {
    const msg = this.msg;
    const isLoading = this.listInvoicesState === 'loading';
    const data: ListInvoicesOutput = this.listInvoicesData ?? { invoices: [], total: 0 };
    const rows: InvoiceRow[] = Array.isArray(data.invoices) ? (data.invoices as InvoiceRow[]) : [];
    const count = typeof data.total === 'number' ? data.total : rows.length;
    const sum = rows.reduce((acc: number, row: InvoiceRow) => {
      const raw = row.totalAmount;
      const n = typeof raw === 'number' ? raw : Number(raw);
      return acc + (Number.isFinite(n) ? n : 0);
    }, 0);
    const currency = rows.find((r: InvoiceRow) => !!r.currency)?.currency ?? '';

    return html`
      <section
        class="sticky top-0 z-10 rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] px-4 py-3 shadow-sm"
        aria-live="polite"
      >
        <div class="grid grid-cols-2 md:grid-cols-3 gap-3">
          <div class="rounded-md bg-[var(--surface-alt-bg,#f1f5f9)] px-3 py-2">
            <div class="text-xs uppercase tracking-wide text-[var(--text-muted,#64748b)]">
              ${msg['intent.invoiceWorkspace.listInvoices.list.column.invoices.label']}
            </div>
            <div class="mt-1 text-lg font-semibold tabular-nums text-[var(--text-strong,#0f172a)]">
              ${isLoading ? '—' : count}
            </div>
          </div>
          <div class="rounded-md bg-[var(--surface-alt-bg,#f1f5f9)] px-3 py-2">
            <div class="text-xs uppercase tracking-wide text-[var(--text-muted,#64748b)]">
              ${msg['intent.invoiceWorkspace.listInvoices.list.column.total.label']}
            </div>
            <div class="mt-1 text-lg font-semibold tabular-nums text-right text-[var(--text-strong,#0f172a)]">
              ${isLoading ? '—' : this.formatAmount(sum, currency)}
            </div>
          </div>
          <div class="rounded-md bg-[var(--surface-alt-bg,#f1f5f9)] px-3 py-2 col-span-2 md:col-span-1">
            <div class="text-xs uppercase tracking-wide text-[var(--text-muted,#64748b)]">
              ${msg['intent.invoiceWorkspace.listInvoices.list.filter.status.label']}
            </div>
            <div class="mt-1 text-sm font-medium text-[var(--text-default,#0f172a)] truncate">
              ${this.listInvoicesStatus
                ? this.listInvoicesStatus
                : msg['organism.invoiceWorkspace.listInvoices.title']}
            </div>
          </div>
        </div>
      </section>
    `;
  }

  private renderFilterBar(): TemplateResult {
    const msg = this.msg;
    const hasStatus = !!this.listInvoicesStatus;
    const hasProject = !!this.listInvoicesProjectId;
    const hasClient = !!this.listInvoicesClientId;

    return html`
      <section class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-4 space-y-3">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-3 items-end">
          <label class="flex flex-col gap-1 text-sm">
            <span class="text-[var(--text-muted,#64748b)]">
              ${msg['intent.invoiceWorkspace.listInvoices.list.filter.status.label']}
            </span>
            <select
              class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-[var(--text-default,#0f172a)]"
              .value=${this.listInvoicesStatus}
              @change=${(event: Event) => {
                this.handleListInvoicesStatusChange(event);
                this.handleListInvoicesClick();
              }}
            >
              <option value=""></option>
              <option value="draft" ?selected=${this.listInvoicesStatus === 'draft'}>draft</option>
              <option value="sent" ?selected=${this.listInvoicesStatus === 'sent'}>sent</option>
              <option value="paid" ?selected=${this.listInvoicesStatus === 'paid'}>paid</option>
              <option value="cancelled" ?selected=${this.listInvoicesStatus === 'cancelled'}>cancelled</option>
            </select>
          </label>

          <label class="flex flex-col gap-1 text-sm">
            <span class="text-[var(--text-muted,#64748b)]">
              ${msg['intent.invoiceWorkspace.listInvoices.list.filter.projectId.label']}
            </span>
            <input
              type="text"
              class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-[var(--text-default,#0f172a)]"
              .value=${this.listInvoicesProjectId}
              @change=${(event: Event) => {
                this.handleListInvoicesProjectIdChange(event);
                this.handleListInvoicesClick();
              }}
            />
          </label>

          <label class="flex flex-col gap-1 text-sm">
            <span class="text-[var(--text-muted,#64748b)]">
              ${msg['intent.invoiceWorkspace.listInvoices.list.filter.clientId.label']}
            </span>
            <input
              type="text"
              class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-[var(--text-default,#0f172a)]"
              .value=${this.listInvoicesClientId}
              @change=${(event: Event) => {
                this.handleListInvoicesClientIdChange(event);
                this.handleListInvoicesClick();
              }}
            />
          </label>

          <div class="flex gap-2">
            <button
              type="button"
              class="inline-flex flex-1 items-center justify-center rounded-md px-3 py-2 text-sm font-medium bg-[var(--button-secondary-bg,#e2e8f0)] text-[var(--button-secondary-text,#0f172a)] border border-[var(--button-secondary-border,#cbd5e1)] disabled:opacity-60"
              ?disabled=${this.listInvoicesState === 'loading'}
              @click=${(event: Event) => this.handleListInvoicesClick(event)}
            >
              ${msg['intent.invoiceWorkspace.listInvoices.list.title']}
            </button>
          </div>
        </div>

        ${hasStatus || hasProject || hasClient
          ? html`
              <div class="flex flex-wrap gap-2">
                ${hasStatus
                  ? html`
                      <button
                        type="button"
                        class="inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs bg-[var(--status-neutral-bg,#e2e8f0)] text-[var(--status-neutral-text,#334155)]"
                        @click=${() => {
                          this.setListInvoicesStatus('');
                          this.handleListInvoicesClick();
                        }}
                      >
                        <span>${msg['intent.invoiceWorkspace.listInvoices.list.filter.status.label']}: ${this.listInvoicesStatus}</span>
                        <span aria-hidden="true">×</span>
                      </button>
                    `
                  : nothing}
                ${hasProject
                  ? html`
                      <button
                        type="button"
                        class="inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs bg-[var(--status-neutral-bg,#e2e8f0)] text-[var(--status-neutral-text,#334155)]"
                        @click=${() => {
                          this.setListInvoicesProjectId('');
                          this.handleListInvoicesClick();
                        }}
                      >
                        <span>${msg['intent.invoiceWorkspace.listInvoices.list.filter.projectId.label']}: ${this.listInvoicesProjectId}</span>
                        <span aria-hidden="true">×</span>
                      </button>
                    `
                  : nothing}
                ${hasClient
                  ? html`
                      <button
                        type="button"
                        class="inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs bg-[var(--status-neutral-bg,#e2e8f0)] text-[var(--status-neutral-text,#334155)]"
                        @click=${() => {
                          this.setListInvoicesClientId('');
                          this.handleListInvoicesClick();
                        }}
                      >
                        <span>${msg['intent.invoiceWorkspace.listInvoices.list.filter.clientId.label']}: ${this.listInvoicesClientId}</span>
                        <span aria-hidden="true">×</span>
                      </button>
                    `
                  : nothing}
              </div>
            `
          : nothing}
      </section>
    `;
  }

  private renderSendFeedback(): TemplateResult | typeof nothing {
    const msg = this.msg;
    if (this.sendInvoiceCmdState === 'success') {
      return html`
        <div class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--status-success-bg,#dcfce7)] px-3 py-2 text-sm text-[var(--status-success-text,#166534)]">
          ${msg['action.sendInvoiceCmd.success']}
        </div>
      `;
    }
    if (this.sendInvoiceCmdState === 'error') {
      const errText = this.sendInvoiceCmdError || msg['action.sendInvoiceCmd.error'];
      return html`
        <div class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--status-error-bg,#fee2e2)] px-3 py-2 text-sm text-[var(--status-error-text,#991b1b)] flex items-center justify-between gap-3">
          <span>${errText}</span>
          <button
            type="button"
            class="rounded-md px-2 py-1 text-xs font-medium bg-[var(--button-secondary-bg,#e2e8f0)] text-[var(--button-secondary-text,#0f172a)]"
            @click=${(event: Event) => this.handleSendInvoiceCmdClick(event)}
          >
            ${msg['intent.invoiceWorkspace.sendInvoiceCmd.form.action.sendInvoiceCmd']}
          </button>
        </div>
      `;
    }
    return nothing;
  }

  private renderCreatePanel(): TemplateResult {
    const msg = this.msg;
    const isLoading = this.createInvoiceCmdState === 'loading';
    const canSubmit =
      !!this.createInvoiceCmdProjectId &&
      !!this.createInvoiceCmdClientId &&
      !!this.createInvoiceCmdInvoiceNumber &&
      !isLoading;

    return html`
      <section class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-4 space-y-3">
        <div class="flex items-center justify-between gap-2">
          <h2 class="text-base font-semibold text-[var(--text-strong,#0f172a)]">
            ${msg['section.invoiceWorkspace.createInvoiceSection.title']}
          </h2>
        </div>

        ${this.createInvoiceCmdState === 'success'
          ? html`
              <div class="rounded-md bg-[var(--status-success-bg,#dcfce7)] px-3 py-2 text-sm text-[var(--status-success-text,#166534)]">
                ${msg['action.createInvoiceCmd.success']}
              </div>
            `
          : nothing}
        ${this.createInvoiceCmdState === 'error'
          ? html`
              <div class="rounded-md bg-[var(--status-error-bg,#fee2e2)] px-3 py-2 text-sm text-[var(--status-error-text,#991b1b)]">
                ${this.createInvoiceCmdError || msg['action.createInvoiceCmd.error']}
              </div>
            `
          : nothing}

        <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
          <label class="flex flex-col gap-1 text-sm">
            <span class="text-[var(--text-muted,#64748b)]">
              ${msg['intent.invoiceWorkspace.listInvoices.list.filter.projectId.label']}
            </span>
            <input
              type="text"
              class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-[var(--text-default,#0f172a)]"
              .value=${this.createInvoiceCmdProjectId}
              ?disabled=${isLoading}
              @input=${(event: Event) => this.handleCreateInvoiceCmdProjectIdChange(event)}
            />
          </label>

          <label class="flex flex-col gap-1 text-sm">
            <span class="text-[var(--text-muted,#64748b)]">
              ${msg['intent.invoiceWorkspace.listInvoices.list.filter.clientId.label']}
            </span>
            <input
              type="text"
              class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-[var(--text-default,#0f172a)]"
              .value=${this.createInvoiceCmdClientId}
              ?disabled=${isLoading}
              @input=${(event: Event) => this.handleCreateInvoiceCmdClientIdChange(event)}
            />
          </label>

          <label class="flex flex-col gap-1 text-sm">
            <span class="text-[var(--text-muted,#64748b)]">
              ${msg['intent.invoiceWorkspace.createInvoiceCmd.form.field.invoiceNumber.label']}
            </span>
            <input
              type="text"
              class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-[var(--text-default,#0f172a)]"
              .value=${this.createInvoiceCmdInvoiceNumber}
              ?disabled=${isLoading}
              @input=${(event: Event) => this.handleCreateInvoiceCmdInvoiceNumberChange(event)}
            />
          </label>
        </div>

        <div class="flex justify-end">
          <button
            type="button"
            class="inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium bg-[var(--button-primary-bg,#2563eb)] text-[var(--button-primary-text,#ffffff)] disabled:opacity-60"
            ?disabled=${!canSubmit}
            @click=${(event: Event) => this.handleCreateInvoiceCmdClick(event)}
          >
            ${isLoading
              ? msg['intent.invoiceWorkspace.createInvoiceCmd.form.action.createInvoiceCmd']
              : msg['intent.invoiceWorkspace.createInvoiceCmd.form.action.createInvoiceCmd']}
          </button>
        </div>
      </section>
    `;
  }

  private renderInvoiceTable(): TemplateResult {
    const msg = this.msg;
    const isLoading = this.listInvoicesState === 'loading';
    const data: ListInvoicesOutput = this.listInvoicesData ?? { invoices: [], total: 0 };
    const rows: InvoiceRow[] = Array.isArray(data.invoices) ? (data.invoices as InvoiceRow[]) : [];
    const totalCount = typeof data.total === 'number' ? data.total : rows.length;
    const pageSizeNum = this.parsePositiveInt(this.listInvoicesPageSize, 20);
    const pageNum = this.parsePositiveInt(this.listInvoicesPage, 1);
    const totalPages = Math.max(1, Math.ceil(totalCount / pageSizeNum) || 1);
    const sendLoading = this.sendInvoiceCmdState === 'loading';

    return html`
      <section class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] overflow-hidden">
        <div class="overflow-x-auto">
          <table class="min-w-full text-sm">
            <thead class="bg-[var(--surface-alt-bg,#f1f5f9)] text-left text-[var(--text-muted,#64748b)]">
              <tr>
                <th class="px-3 py-2 font-medium">${msg['intent.invoiceWorkspace.createInvoiceCmd.form.field.invoiceNumber.label']}</th>
                <th class="px-3 py-2 font-medium">${msg['intent.invoiceWorkspace.listInvoices.list.filter.status.label']}</th>
                <th class="px-3 py-2 font-medium">${msg['intent.invoiceWorkspace.listInvoices.list.filter.clientId.label']}</th>
                <th class="px-3 py-2 font-medium">${msg['intent.invoiceWorkspace.listInvoices.list.filter.projectId.label']}</th>
                <th class="px-3 py-2 font-medium text-right">${msg['intent.invoiceWorkspace.listInvoices.list.column.total.label']}</th>
                <th class="px-3 py-2 font-medium">sentAt</th>
                <th class="px-3 py-2 font-medium">createdAt</th>
                <th class="px-3 py-2 font-medium text-right"></th>
              </tr>
            </thead>
            <tbody>
              ${isLoading
                ? html`
                    ${[0, 1, 2, 3, 4].map(
                      () => html`
                        <tr class="border-t border-[var(--border-subtle,#e2e8f0)]">
                          <td class="px-3 py-3" colspan="8">
                            <div class="h-4 w-full rounded bg-[var(--surface-alt-bg,#f1f5f9)] animate-pulse"></div>
                          </td>
                        </tr>
                      `,
                    )}
                  `
                : rows.length === 0
                  ? html`
                      <tr class="border-t border-[var(--border-subtle,#e2e8f0)]">
                        <td class="px-3 py-6 text-center text-[var(--text-muted,#64748b)]" colspan="8">
                          ${msg['intent.invoiceWorkspace.listInvoices.list.empty']}
                        </td>
                      </tr>
                    `
                  : rows.map((row: InvoiceRow) => {
                      const invoiceId = row.invoiceId ?? '';
                      const status = (row.status ?? '').toLowerCase();
                      const isDraft = status === 'draft';
                      const isRowSending = sendLoading && this.sendInvoiceCmdInvoiceId === invoiceId;
                      const amount = this.formatAmount(row.totalAmount, row.currency);
                      return html`
                        <tr class="border-t border-[var(--border-subtle,#e2e8f0)] hover:bg-[var(--surface-alt-bg,#f1f5f9)] ${isRowSending ? 'opacity-70' : ''}">
                          <td class="px-3 py-2 font-medium text-[var(--text-default,#0f172a)]">
                            ${row.invoiceNumber ?? '—'}
                          </td>
                          <td class="px-3 py-2">
                            ${this.renderStatusChip(row.status)}
                          </td>
                          <td class="px-3 py-2 text-[var(--text-muted,#64748b)]">${row.clientId ?? '—'}</td>
                          <td class="px-3 py-2 text-[var(--text-muted,#64748b)]">${row.projectId ?? '—'}</td>
                          <td class="px-3 py-2 text-right tabular-nums font-medium text-[var(--text-default,#0f172a)]">
                            ${amount}
                          </td>
                          <td class="px-3 py-2 text-[var(--text-muted,#64748b)]">${row.sentAt ?? '—'}</td>
                          <td class="px-3 py-2 text-[var(--text-muted,#64748b)]">${row.createdAt ?? '—'}</td>
                          <td class="px-3 py-2 text-right">
                            ${isDraft && invoiceId
                              ? html`
                                  <button
                                    type="button"
                                    class="inline-flex items-center justify-center rounded-md px-3 py-1.5 text-xs font-medium bg-[var(--button-primary-bg,#2563eb)] text-[var(--button-primary-text,#ffffff)] disabled:opacity-60"
                                    ?disabled=${sendLoading}
                                    @click=${(event: Event) => {
                                      event.preventDefault();
                                      const label = row.invoiceNumber || invoiceId;
                                      const confirmed = globalThis.confirm(
                                        `${msg['intent.invoiceWorkspace.sendInvoiceCmd.form.action.sendInvoiceCmd']}: ${label}`,
                                      );
                                      if (!confirmed) {
                                        return;
                                      }
                                      this.setSendInvoiceCmdInvoiceId(invoiceId);
                                      this.handleSendInvoiceCmdClick();
                                    }}
                                  >
                                    ${isRowSending
                                      ? msg['intent.invoiceWorkspace.sendInvoiceCmd.form.action.sendInvoiceCmd']
                                      : msg['intent.invoiceWorkspace.sendInvoiceCmd.form.action.sendInvoiceCmd']}
                                  </button>
                                `
                              : nothing}
                          </td>
                        </tr>
                      `;
                    })}
            </tbody>
          </table>
        </div>

        <div class="flex flex-col gap-2 md:flex-row md:items-center md:justify-between border-t border-[var(--border-default,#e2e8f0)] px-3 py-2 bg-[var(--surface-alt-bg,#f1f5f9)]">
          <div class="text-xs text-[var(--text-muted,#64748b)] tabular-nums">
            ${isLoading ? '—' : `${totalCount}`}
          </div>
          <div class="flex items-center gap-2">
            <button
              type="button"
              class="rounded-md px-3 py-1.5 text-xs font-medium bg-[var(--button-secondary-bg,#e2e8f0)] text-[var(--button-secondary-text,#0f172a)] border border-[var(--button-secondary-border,#cbd5e1)] disabled:opacity-50"
              ?disabled=${isLoading || pageNum <= 1}
              @click=${() => {
                const next = Math.max(1, pageNum - 1);
                this.setListInvoicesPage(String(next));
                this.handleListInvoicesClick();
              }}
            >
              ‹
            </button>
            <span class="text-xs tabular-nums text-[var(--text-default,#0f172a)]">${pageNum} / ${totalPages}</span>
            <button
              type="button"
              class="rounded-md px-3 py-1.5 text-xs font-medium bg-[var(--button-secondary-bg,#e2e8f0)] text-[var(--button-secondary-text,#0f172a)] border border-[var(--button-secondary-border,#cbd5e1)] disabled:opacity-50"
              ?disabled=${isLoading || pageNum >= totalPages}
              @click=${() => {
                const next = pageNum + 1;
                this.setListInvoicesPage(String(next));
                this.handleListInvoicesClick();
              }}
            >
              ›
            </button>
          </div>
        </div>
      </section>
    `;
  }

  private renderStatusChip(status: string | undefined): TemplateResult {
    const value = (status ?? '').trim();
    const normalized = value.toLowerCase();
    let bg = 'var(--status-neutral-bg,#e2e8f0)';
    let fg = 'var(--status-neutral-text,#334155)';
    if (normalized === 'draft') {
      bg = 'var(--status-warning-bg,#fef3c7)';
      fg = 'var(--status-warning-text,#92400e)';
    } else if (normalized === 'sent') {
      bg = 'var(--status-info-bg,#dbeafe)';
      fg = 'var(--status-info-text,#1e40af)';
    } else if (normalized === 'paid') {
      bg = 'var(--status-success-bg,#dcfce7)';
      fg = 'var(--status-success-text,#166534)';
    } else if (normalized === 'cancelled' || normalized === 'canceled') {
      bg = 'var(--status-error-bg,#fee2e2)';
      fg = 'var(--status-error-text,#991b1b)';
    }
    return html`
      <span
        class="inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium"
        style="background: ${bg}; color: ${fg};"
      >
        ${value || '—'}
      </span>
    `;
  }

  private formatAmount(value: number | string | undefined, currency: string | undefined): string {
    if (value === undefined || value === null || value === '') {
      return '—';
    }
    const n = typeof value === 'number' ? value : Number(value);
    if (!Number.isFinite(n)) {
      return String(value);
    }
    const formatted = n.toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
    return currency ? `${formatted} ${currency}` : formatted;
  }

  private parsePositiveInt(raw: string, fallback: number): number {
    if (!raw) {
      return fallback;
    }
    const n = Number(raw);
    if (!Number.isFinite(n) || n <= 0) {
      return fallback;
    }
    return Math.floor(n);
  }
}
