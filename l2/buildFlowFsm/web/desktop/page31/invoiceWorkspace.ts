/// <mls fileReference="_102045_/l2/buildFlowFsm/web/desktop/page31/invoiceWorkspace.ts" enhancement="_102020_/l2/enhancementAura"/>

import { html, nothing } from 'lit';
import { customElement } from 'lit/decorators.js';
import {
  BuildFlowFsmInvoiceWorkspaceBase,
  type MessageType,
} from '/_102045_/l2/buildFlowFsm/web/shared/invoiceWorkspace.js';

type InvoiceRow = {
  invoiceId?: string;
  invoiceNumber?: string;
  status?: string;
  totalAmount?: number | string;
  clientId?: string;
  projectId?: string;
  sentAt?: string;
  createdAt?: string;
};

type InvoiceDayGroup = {
  dayKey: string;
  label: string;
  subtotal: number;
  entries: InvoiceRow[];
};

@customElement('build-flow-fsm--web--desktop--page31--invoice-workspace-102045')
export class BuildFlowFsmDesktopPage31InvoiceWorkspacePage extends BuildFlowFsmInvoiceWorkspaceBase {
  declare msg: MessageType;

  render() {
    const msg = this.msg;
    return html`
      <div class="min-h-full bg-[var(--page-bg,#f8fafc)] text-[var(--text-default,#0f172a)] p-6 space-y-6">
        ${this.renderSummary()}
        ${this.renderCreatePanel()}
        <section class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] shadow-sm">
          <div class="flex flex-wrap items-center justify-between gap-3 px-4 py-3 border-b border-[var(--border-subtle,#e2e8f0)]">
            <h2 class="text-lg font-semibold text-[var(--text-strong,#0f172a)]">
              ${msg['section.invoiceWorkspace.sec-invoice-list.title']}
            </h2>
            <button
              type="button"
              class="rounded-md px-3 py-1.5 text-sm bg-[var(--button-secondary-bg,#f1f5f9)] text-[var(--button-secondary-text,#0f172a)] border border-[var(--button-secondary-border,#e2e8f0)]"
              @click=${(e: Event) => this.handleListInvoicesClick(e)}
              ?disabled=${this.listInvoicesState === 'loading'}
            >
              ${msg['organism.invoiceWorkspace.listInvoices.title']}
            </button>
          </div>
          ${this.renderFilters()}
          ${this.renderInvoiceStatement()}
          ${this.renderPager()}
        </section>
      </div>
    `;
  }

  renderSummary() {
    const msg = this.msg;
    const rows: InvoiceRow[] = Array.isArray(this.listInvoicesData?.invoices)
      ? (this.listInvoicesData.invoices as InvoiceRow[])
      : [];
    const totalCount =
      typeof this.listInvoicesData?.total === 'number'
        ? this.listInvoicesData.total
        : rows.length;
    let totalAmount = 0;
    let draftCount = 0;
    let sentCount = 0;
    for (const row of rows) {
      const amount = Number(row.totalAmount);
      if (!Number.isNaN(amount)) {
        totalAmount += amount;
      }
      const status = String(row.status ?? '').toLowerCase();
      if (status === 'draft') {
        draftCount += 1;
      } else if (status === 'sent') {
        sentCount += 1;
      }
    }
    const loading = this.listInvoicesState === 'loading';
    return html`
      <section
        class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] px-4 py-3"
        aria-live="polite"
      >
        <div class="flex flex-wrap gap-6 text-sm tabular-nums">
          <div class="min-w-[7rem]">
            <div class="text-[var(--text-muted,#64748b)]">
              ${msg['intent.invoiceWorkspace.listInvoices.list.column.invoices.label']}
            </div>
            <div class="text-base font-semibold text-[var(--text-strong,#0f172a)]">
              ${loading ? '—' : totalCount}
            </div>
          </div>
          <div class="min-w-[7rem]">
            <div class="text-[var(--text-muted,#64748b)]">
              ${msg['intent.invoiceWorkspace.listInvoices.list.column.total.label']}
            </div>
            <div class="text-base font-semibold text-[var(--text-strong,#0f172a)]">
              ${loading ? '—' : this.formatAmount(totalAmount)}
            </div>
          </div>
          <div class="min-w-[7rem]">
            <div class="text-[var(--text-muted,#64748b)]">
              ${msg['intent.invoiceWorkspace.listInvoices.list.filter.status.label']}
            </div>
            <div class="text-base font-semibold text-[var(--text-strong,#0f172a)]">
              ${loading ? '—' : `${draftCount} / ${sentCount}`}
            </div>
          </div>
        </div>
      </section>
    `;
  }

  renderFilters() {
    const msg = this.msg;
    return html`
      <div class="flex flex-wrap items-end gap-3 px-4 py-3 border-b border-[var(--border-subtle,#e2e8f0)] bg-[var(--surface-alt-bg,#f8fafc)]">
        <label class="flex flex-col gap-1 text-xs text-[var(--text-muted,#64748b)]">
          <span>${msg['intent.invoiceWorkspace.listInvoices.list.filter.status.label']}</span>
          <select
            class="min-w-[9rem] rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-2 py-1.5 text-sm text-[var(--text-default,#0f172a)]"
            .value=${this.listInvoicesStatus}
            @change=${(e: Event) => {
              this.handleListInvoicesStatusChange(e);
              this.handleListInvoicesClick();
            }}
          >
            <option value=""></option>
            <option value="draft">draft</option>
            <option value="sent">sent</option>
          </select>
        </label>
        <label class="flex flex-col gap-1 text-xs text-[var(--text-muted,#64748b)]">
          <span>${msg['intent.invoiceWorkspace.listInvoices.list.filter.projectId.label']}</span>
          <input
            type="text"
            class="min-w-[10rem] rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-2 py-1.5 text-sm text-[var(--text-default,#0f172a)]"
            .value=${this.listInvoicesProjectId}
            @change=${(e: Event) => this.handleListInvoicesProjectIdChange(e)}
          />
        </label>
        <label class="flex flex-col gap-1 text-xs text-[var(--text-muted,#64748b)]">
          <span>${msg['intent.invoiceWorkspace.listInvoices.list.filter.clientId.label']}</span>
          <input
            type="text"
            class="min-w-[10rem] rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-2 py-1.5 text-sm text-[var(--text-default,#0f172a)]"
            .value=${this.listInvoicesClientId}
            @change=${(e: Event) => this.handleListInvoicesClientIdChange(e)}
          />
        </label>
        <button
          type="button"
          class="rounded-md px-3 py-1.5 text-sm bg-[var(--button-primary-bg,#2563eb)] text-[var(--button-primary-text,#ffffff)]"
          @click=${(e: Event) => this.handleListInvoicesClick(e)}
          ?disabled=${this.listInvoicesState === 'loading'}
        >
          ${msg['intent.invoiceWorkspace.listInvoices.list.title']}
        </button>
      </div>
    `;
  }

  renderInvoiceStatement() {
    const msg = this.msg;
    if (this.listInvoicesState === 'loading') {
      return html`
        <div class="px-4 py-6 space-y-4 animate-pulse">
          <div class="h-4 w-40 rounded bg-[var(--surface-alt-bg,#e2e8f0)]"></div>
          <div class="h-10 rounded bg-[var(--surface-alt-bg,#e2e8f0)]"></div>
          <div class="h-10 rounded bg-[var(--surface-alt-bg,#e2e8f0)]"></div>
          <div class="h-4 w-32 rounded bg-[var(--surface-alt-bg,#e2e8f0)]"></div>
          <div class="h-10 rounded bg-[var(--surface-alt-bg,#e2e8f0)]"></div>
        </div>
      `;
    }
    if (this.listInvoicesState === 'error') {
      return html`
        <div class="px-4 py-6 text-sm text-[var(--text-default,#0f172a)]">
          <p>${msg['intent.invoiceWorkspace.listInvoices.list.empty']}</p>
          <button
            type="button"
            class="mt-3 rounded-md px-3 py-1.5 text-sm bg-[var(--button-secondary-bg,#f1f5f9)] text-[var(--button-secondary-text,#0f172a)] border border-[var(--button-secondary-border,#e2e8f0)]"
            @click=${(e: Event) => this.handleListInvoicesClick(e)}
          >
            ${msg['organism.invoiceWorkspace.listInvoices.title']}
          </button>
        </div>
      `;
    }
    const rows: InvoiceRow[] = Array.isArray(this.listInvoicesData?.invoices)
      ? (this.listInvoicesData.invoices as InvoiceRow[])
      : [];
    if (rows.length === 0) {
      return html`
        <div class="px-4 py-8 text-sm text-[var(--text-muted,#64748b)]">
          ${msg['intent.invoiceWorkspace.listInvoices.list.empty']}
        </div>
      `;
    }
    const groups = this.groupInvoicesByDay(rows);
    return html`
      <div class="divide-y divide-[var(--border-subtle,#e2e8f0)]">
        ${groups.map((group) => this.renderDayGroup(group))}
      </div>
      ${this.renderSendFeedback()}
    `;
  }

  renderDayGroup(group: InvoiceDayGroup) {
    return html`
      <section class="px-4 py-3">
        <header class="flex items-baseline justify-between gap-3 mb-2">
          <h3 class="text-sm font-semibold text-[var(--text-strong,#0f172a)]">${group.label}</h3>
          <span class="text-sm tabular-nums font-medium text-[var(--text-default,#0f172a)]">
            ${this.formatAmount(group.subtotal)}
          </span>
        </header>
        ${group.entries.length === 0
          ? html`<p class="text-sm text-[var(--text-muted,#64748b)]">—</p>`
          : html`
              <ul class="space-y-1">
                ${group.entries.map((entry) => this.renderEntryLine(entry))}
              </ul>
            `}
      </section>
    `;
  }

  renderEntryLine(entry: InvoiceRow) {
    const msg = this.msg;
    const status = String(entry.status ?? '').toLowerCase();
    const isDraft = status === 'draft';
    const invoiceId = entry.invoiceId ? String(entry.invoiceId) : '';
    const amount = Number(entry.totalAmount);
    const amountLabel = Number.isNaN(amount) ? '—' : this.formatAmount(amount);
    const identity = entry.invoiceNumber ? String(entry.invoiceNumber) : invoiceId || '—';
    const metaParts: string[] = [];
    if (entry.clientId) {
      metaParts.push(String(entry.clientId));
    }
    if (entry.projectId) {
      metaParts.push(String(entry.projectId));
    }
    if (status) {
      metaParts.push(status);
    }
    const sendingThis =
      this.sendInvoiceCmdState === 'loading' && this.sendInvoiceCmdInvoiceId === invoiceId;
    return html`
      <li
        class="flex flex-wrap items-center gap-2 py-2 border-b border-[var(--border-subtle,#e2e8f0)] last:border-b-0"
      >
        <div class="flex-1 min-w-[12rem]">
          <div class="text-sm font-medium text-[var(--text-default,#0f172a)]">${identity}</div>
          ${metaParts.length > 0
            ? html`<div class="text-xs text-[var(--text-muted,#64748b)]">${metaParts.join(' · ')}</div>`
            : nothing}
        </div>
        <div class="text-sm tabular-nums text-right min-w-[6rem] text-[var(--text-default,#0f172a)]">
          ${amountLabel}
        </div>
        ${isDraft && invoiceId
          ? html`
              <button
                type="button"
                class="rounded-md px-2.5 py-1 text-xs bg-[var(--button-secondary-bg,#f1f5f9)] text-[var(--button-secondary-text,#0f172a)] border border-[var(--button-secondary-border,#e2e8f0)] disabled:opacity-60"
                ?disabled=${this.sendInvoiceCmdState === 'loading'}
                @click=${(e: Event) => {
                  const label = identity;
                  const ok = globalThis.confirm(
                    `${msg['intent.invoiceWorkspace.sendInvoiceCmd.form.action.sendInvoiceCmd']}: ${label} (${amountLabel})`,
                  );
                  if (!ok) {
                    return;
                  }
                  this.setSendInvoiceCmdInvoiceId(invoiceId);
                  this.handleSendInvoiceCmdClick(e);
                }}
              >
                ${sendingThis
                  ? '…'
                  : msg['intent.invoiceWorkspace.sendInvoiceCmd.form.action.sendInvoiceCmd']}
              </button>
            `
          : nothing}
      </li>
    `;
  }

  renderSendFeedback() {
    const msg = this.msg;
    if (this.sendInvoiceCmdState === 'success') {
      return html`
        <div
          class="mx-4 mb-3 rounded-md px-3 py-2 text-sm bg-[var(--status-success-bg,#dcfce7)] text-[var(--status-success-text,#166534)]"
        >
          ${msg['action.sendInvoiceCmd.success']}
        </div>
      `;
    }
    if (this.sendInvoiceCmdState === 'error') {
      const errText =
        this.sendInvoiceCmdError && this.sendInvoiceCmdError.trim() !== ''
          ? this.sendInvoiceCmdError
          : msg['action.sendInvoiceCmd.error'];
      return html`
        <div
          class="mx-4 mb-3 rounded-md px-3 py-2 text-sm bg-[var(--status-error-bg,#fee2e2)] text-[var(--status-error-text,#991b1b)]"
        >
          ${errText}
        </div>
      `;
    }
    return nothing;
  }

  renderPager() {
    const pageRaw = this.listInvoicesPage !== '' ? Number(this.listInvoicesPage) : 1;
    const page = !Number.isNaN(pageRaw) && pageRaw > 0 ? pageRaw : 1;
    const pageSizeRaw =
      this.listInvoicesPageSize !== '' ? Number(this.listInvoicesPageSize) : 20;
    const pageSize =
      !Number.isNaN(pageSizeRaw) && pageSizeRaw > 0 ? pageSizeRaw : 20;
    const total =
      typeof this.listInvoicesData?.total === 'number' ? this.listInvoicesData.total : 0;
    const maxPage = Math.max(1, Math.ceil(total / pageSize) || 1);
    if (total <= pageSize && page <= 1) {
      return nothing;
    }
    return html`
      <div class="flex items-center justify-end gap-2 px-4 py-3 border-t border-[var(--border-subtle,#e2e8f0)]">
        <button
          type="button"
          class="rounded-md px-3 py-1 text-sm bg-[var(--button-secondary-bg,#f1f5f9)] text-[var(--button-secondary-text,#0f172a)] border border-[var(--button-secondary-border,#e2e8f0)] disabled:opacity-50"
          ?disabled=${page <= 1 || this.listInvoicesState === 'loading'}
          @click=${() => {
            const next = String(Math.max(1, page - 1));
            this.setListInvoicesPage(next);
            void this.loadListInvoices();
          }}
        >
          ‹
        </button>
        <span class="text-xs tabular-nums text-[var(--text-muted,#64748b)]">${page} / ${maxPage}</span>
        <button
          type="button"
          class="rounded-md px-3 py-1 text-sm bg-[var(--button-secondary-bg,#f1f5f9)] text-[var(--button-secondary-text,#0f172a)] border border-[var(--button-secondary-border,#e2e8f0)] disabled:opacity-50"
          ?disabled=${page >= maxPage || this.listInvoicesState === 'loading'}
          @click=${() => {
            const next = String(Math.min(maxPage, page + 1));
            this.setListInvoicesPage(next);
            void this.loadListInvoices();
          }}
        >
          ›
        </button>
      </div>
    `;
  }

  renderCreatePanel() {
    const msg = this.msg;
    const creating = this.createInvoiceCmdState === 'loading';
    return html`
      <section class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] shadow-sm">
        <div class="px-4 py-3 border-b border-[var(--border-subtle,#e2e8f0)]">
          <h2 class="text-lg font-semibold text-[var(--text-strong,#0f172a)]">
            ${msg['section.invoiceWorkspace.createInvoiceSection.title']}
          </h2>
        </div>
        <div class="px-4 py-4 flex flex-wrap items-end gap-3">
          <label class="flex flex-col gap-1 text-xs text-[var(--text-muted,#64748b)]">
            <span>${msg['intent.invoiceWorkspace.listInvoices.list.filter.projectId.label']}</span>
            <input
              type="text"
              class="min-w-[10rem] rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-2 py-1.5 text-sm text-[var(--text-default,#0f172a)]"
              .value=${this.createInvoiceCmdProjectId}
              @input=${(e: Event) => this.handleCreateInvoiceCmdProjectIdChange(e)}
              ?disabled=${creating}
            />
          </label>
          <label class="flex flex-col gap-1 text-xs text-[var(--text-muted,#64748b)]">
            <span>${msg['intent.invoiceWorkspace.listInvoices.list.filter.clientId.label']}</span>
            <input
              type="text"
              class="min-w-[10rem] rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-2 py-1.5 text-sm text-[var(--text-default,#0f172a)]"
              .value=${this.createInvoiceCmdClientId}
              @input=${(e: Event) => this.handleCreateInvoiceCmdClientIdChange(e)}
              ?disabled=${creating}
            />
          </label>
          <label class="flex flex-col gap-1 text-xs text-[var(--text-muted,#64748b)]">
            <span>${msg['intent.invoiceWorkspace.createInvoiceCmd.form.field.invoiceNumber.label']}</span>
            <input
              type="text"
              class="min-w-[10rem] rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-2 py-1.5 text-sm text-[var(--text-default,#0f172a)]"
              .value=${this.createInvoiceCmdInvoiceNumber}
              @input=${(e: Event) => this.handleCreateInvoiceCmdInvoiceNumberChange(e)}
              ?disabled=${creating}
            />
          </label>
          <button
            type="button"
            class="rounded-md px-4 py-2 text-sm font-medium bg-[var(--button-primary-bg,#2563eb)] text-[var(--button-primary-text,#ffffff)] disabled:opacity-60"
            ?disabled=${creating ||
            !this.createInvoiceCmdProjectId ||
            !this.createInvoiceCmdClientId ||
            !this.createInvoiceCmdInvoiceNumber}
            @click=${(e: Event) => this.handleCreateInvoiceCmdClick(e)}
          >
            ${creating
              ? '…'
              : msg['intent.invoiceWorkspace.createInvoiceCmd.form.action.createInvoiceCmd']}
          </button>
        </div>
        ${this.renderCreateFeedback()}
      </section>
    `;
  }

  renderCreateFeedback() {
    const msg = this.msg;
    if (this.createInvoiceCmdState === 'success') {
      return html`
        <div
          class="mx-4 mb-4 rounded-md px-3 py-2 text-sm bg-[var(--status-success-bg,#dcfce7)] text-[var(--status-success-text,#166534)]"
        >
          ${msg['action.createInvoiceCmd.success']}
        </div>
      `;
    }
    if (this.createInvoiceCmdState === 'error') {
      const errText =
        this.createInvoiceCmdError && this.createInvoiceCmdError.trim() !== ''
          ? this.createInvoiceCmdError
          : msg['action.createInvoiceCmd.error'];
      return html`
        <div
          class="mx-4 mb-4 rounded-md px-3 py-2 text-sm bg-[var(--status-error-bg,#fee2e2)] text-[var(--status-error-text,#991b1b)]"
        >
          ${errText}
        </div>
      `;
    }
    return nothing;
  }

  private groupInvoicesByDay(rows: InvoiceRow[]): InvoiceDayGroup[] {
    const map = new Map<string, InvoiceDayGroup>();
    for (const row of rows) {
      const rawDate = row.createdAt || row.sentAt || '';
      const dayKey = this.toDayKey(rawDate);
      const existing = map.get(dayKey);
      const amount = Number(row.totalAmount);
      const safeAmount = Number.isNaN(amount) ? 0 : amount;
      if (existing) {
        existing.entries.push(row);
        existing.subtotal += safeAmount;
      } else {
        map.set(dayKey, {
          dayKey,
          label: this.formatDayLabel(rawDate, dayKey),
          subtotal: safeAmount,
          entries: [row],
        });
      }
    }
    const groups = Array.from(map.values());
    groups.sort((a, b) => (a.dayKey < b.dayKey ? 1 : a.dayKey > b.dayKey ? -1 : 0));
    return groups;
  }

  private toDayKey(raw: string): string {
    if (!raw) {
      return 'unknown';
    }
    const d = new Date(raw);
    if (Number.isNaN(d.getTime())) {
      return raw.slice(0, 10) || 'unknown';
    }
    const y = d.getFullYear();
    const m = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    return `${y}-${m}-${day}`;
  }

  private formatDayLabel(raw: string, dayKey: string): string {
    if (dayKey === 'unknown') {
      return '—';
    }
    const d = raw ? new Date(raw) : new Date(`${dayKey}T00:00:00`);
    if (Number.isNaN(d.getTime())) {
      return dayKey;
    }
    try {
      return new Intl.DateTimeFormat(undefined, {
        weekday: 'short',
        year: 'numeric',
        month: 'short',
        day: 'numeric',
      }).format(d);
    } catch {
      return dayKey;
    }
  }

  private formatAmount(value: number): string {
    try {
      return new Intl.NumberFormat(undefined, {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2,
      }).format(value);
    } catch {
      return String(value);
    }
  }
}
