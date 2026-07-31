/// <mls fileReference="_102045_/l2/buildFlowFsm/web/desktop/page11/billingSummaryWorkspace.ts" enhancement="_102020_/l2/enhancementAura"/>

import { html, nothing } from 'lit';
import { customElement } from 'lit/decorators.js';
import { BuildFlowFsmBillingSummaryWorkspaceBase } from '/_102045_/l2/buildFlowFsm/web/shared/billingSummaryWorkspace.js';
import type { ListBillingSummariesOutput } from '/_102045_/l2/buildFlowFsm/web/shared/billingSummaryWorkspace.js';

type BillingSummaryRow = {
  billingSummaryId?: string;
  id?: string;
  projectId?: string;
  status?: string;
  periodStart?: string;
  periodEnd?: string;
  sharedAt?: string;
  totalAmount?: number | string;
  amount?: number | string;
  name?: string;
  title?: string;
};

@customElement('build-flow-fsm--web--desktop--page11--billing-summary-workspace-102045')
export class BuildFlowFsmDesktopPage11BillingSummaryWorkspacePage extends BuildFlowFsmBillingSummaryWorkspaceBase {
  render() {
    const listData = this.listBillingSummariesData as ListBillingSummariesOutput | null | undefined;
    const rowsUnknown: unknown =
      listData && typeof listData === 'object' && 'billingSummaries' in listData
        ? (listData as { billingSummaries?: unknown }).billingSummaries
        : undefined;
    const rows: BillingSummaryRow[] = Array.isArray(rowsUnknown)
      ? (rowsUnknown as BillingSummaryRow[])
      : [];
    const totalUnknown: unknown =
      listData && typeof listData === 'object' && 'total' in listData
        ? (listData as { total?: unknown }).total
        : undefined;
    const total =
      typeof totalUnknown === 'number'
        ? totalUnknown
        : typeof totalUnknown === 'string'
          ? totalUnknown
          : rows.length;

    const listLoading = this.listBillingSummariesState === 'loading';
    const createLoading = this.createBillingSummaryCmdState === 'loading';
    const shareLoading = this.shareBillingSummaryCmdState === 'loading';

    const draftRows = rows.filter((item) => {
      const status = (item.status ?? '').toLowerCase();
      return status === 'draft' || status === '';
    });
    const sharedRows = rows.filter((item) => {
      const status = (item.status ?? '').toLowerCase();
      return status === 'shared';
    });
    const otherRows = rows.filter((item) => {
      const status = (item.status ?? '').toLowerCase();
      return status !== 'draft' && status !== '' && status !== 'shared';
    });

    const renderCard = (item: BillingSummaryRow) => {
      const id = item.billingSummaryId ?? item.id ?? '';
      const label = item.name ?? item.title ?? id;
      const amount = item.totalAmount ?? item.amount;
      return html`
        <button
          type="button"
          class="text-left rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-3 shadow-sm hover:bg-[var(--surface-alt-bg,#f8fafc)] focus:outline-none focus:ring-2 focus:ring-[var(--focus-ring,#94a3b8)] space-y-1 w-full"
          @click=${() => {
            if (id) {
              this.setShareBillingSummaryCmdBillingSummaryId(id);
            }
          }}
        >
          <div class="text-sm font-medium text-[var(--text-strong,#0f172a)] truncate">${label || '—'}</div>
          <div class="text-xs text-[var(--text-muted,#64748b)]">
            ${item.periodStart ?? '—'} → ${item.periodEnd ?? '—'}
          </div>
          <div class="flex items-center justify-between gap-2 text-xs">
            <span class="inline-flex px-2 py-0.5 rounded-full bg-[var(--status-neutral-bg,#f1f5f9)] text-[var(--status-neutral-text,#334155)]">
              ${item.status ?? 'draft'}
            </span>
            ${amount !== undefined && amount !== null
              ? html`<span class="text-[var(--text-default,#0f172a)] font-medium">${amount}</span>`
              : nothing}
          </div>
          ${item.projectId
            ? html`<div class="text-xs text-[var(--text-muted,#64748b)] truncate">Project: ${item.projectId}</div>`
            : nothing}
        </button>
      `;
    };

    const renderLane = (laneTitle: string, laneRows: BillingSummaryRow[]) => html`
      <div class="flex flex-col min-w-[16rem] flex-1 rounded-lg border border-[var(--border-subtle,#e2e8f0)] bg-[var(--surface-alt-bg,#f8fafc)]">
        <div class="px-3 py-2 border-b border-[var(--border-subtle,#e2e8f0)] flex items-center justify-between gap-2">
          <h3 class="text-sm font-semibold text-[var(--text-strong,#0f172a)]">${laneTitle}</h3>
          <span class="text-xs px-2 py-0.5 rounded-full bg-[var(--status-neutral-bg,#f1f5f9)] text-[var(--status-neutral-text,#334155)]">
            ${laneRows.length}
          </span>
        </div>
        <div class="p-2 space-y-2 min-h-[8rem]">
          ${laneRows.length > 0
            ? laneRows.map((item) => renderCard(item))
            : html`<p class="text-xs text-[var(--text-muted,#64748b)] px-1 py-2"><!-- TODO: i18n key missing from shared MessageType -->No items</p>`}
        </div>
      </div>
    `;

    return html`
      <div class="min-h-full bg-[var(--page-bg,#f8fafc)]">
        <div class="max-w-6xl mx-auto px-4 py-6 space-y-6">
          <header class="space-y-1">
            <h1 class="text-2xl font-semibold text-[var(--text-strong,#0f172a)]">
              <!-- TODO: i18n key missing from shared MessageType -->Billing Summaries
            </h1>
          </header>

          <section class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-4 space-y-4 shadow-sm">
            <h2 class="text-lg font-semibold text-[var(--text-strong,#0f172a)]">
              <!-- TODO: i18n key section.billingSummaryWorkspace.sec-billing-board.title -->Billing Summary Pipeline
            </h2>

            <!-- Filter bar -->
            <div class="rounded-lg border border-[var(--border-subtle,#e2e8f0)] bg-[var(--surface-alt-bg,#f8fafc)] p-3 space-y-3">
              <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                <label class="flex flex-col gap-1 text-sm text-[var(--text-default,#0f172a)]">
                  <span><!-- TODO: i18n -->Project</span>
                  <input
                    type="text"
                    class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-sm text-[var(--text-default,#0f172a)]"
                    .value=${this.listBillingSummariesProjectId ?? ''}
                    @input=${(e: Event) => this.handleListBillingSummariesProjectIdChange(e)}
                  />
                </label>
                <label class="flex flex-col gap-1 text-sm text-[var(--text-default,#0f172a)]">
                  <span><!-- TODO: i18n -->Status</span>
                  <input
                    type="text"
                    class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-sm text-[var(--text-default,#0f172a)]"
                    .value=${this.listBillingSummariesStatus ?? ''}
                    @input=${(e: Event) => this.handleListBillingSummariesStatusChange(e)}
                  />
                </label>
                <label class="flex flex-col gap-1 text-sm text-[var(--text-default,#0f172a)]">
                  <span><!-- TODO: i18n -->Page</span>
                  <input
                    type="text"
                    class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-sm text-[var(--text-default,#0f172a)]"
                    .value=${this.listBillingSummariesPage ?? ''}
                    @input=${(e: Event) => this.handleListBillingSummariesPageChange(e)}
                  />
                </label>
                <label class="flex flex-col gap-1 text-sm text-[var(--text-default,#0f172a)]">
                  <span><!-- TODO: i18n -->Page size</span>
                  <input
                    type="text"
                    class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-sm text-[var(--text-default,#0f172a)]"
                    .value=${this.listBillingSummariesPageSize ?? ''}
                    @input=${(e: Event) => this.handleListBillingSummariesPageSizeChange(e)}
                  />
                </label>
              </div>
              <div class="flex flex-wrap items-center gap-2">
                <button
                  type="button"
                  class="inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium bg-[var(--button-primary-bg,#2563eb)] text-[var(--button-primary-text,#ffffff)] disabled:opacity-60"
                  ?disabled=${listLoading}
                  @click=${(e: Event) => this.handleListBillingSummariesClick(e)}
                >
                  ${listLoading
                    ? html`<span class="inline-block h-3 w-3 rounded-full border-2 border-current border-t-transparent animate-spin"></span>`
                    : nothing}
                  <!-- TODO: i18n -->Refresh
                </button>
                <span class="text-xs text-[var(--text-muted,#64748b)]">
                  <!-- TODO: i18n -->Total: ${total}
                </span>
              </div>
            </div>

            <!-- Kanban board -->
            <div class="space-y-2">
              ${listLoading
                ? html`
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                      <div class="h-40 rounded-lg bg-[var(--surface-alt-bg,#f1f5f9)] animate-pulse"></div>
                      <div class="h-40 rounded-lg bg-[var(--surface-alt-bg,#f1f5f9)] animate-pulse"></div>
                    </div>
                  `
                : rows.length === 0
                  ? html`
                      <p class="text-sm text-[var(--text-muted,#64748b)] py-6 text-center">
                        <!-- TODO: i18n intent.billingSummaryWorkspace.listBillingSummaries.list.empty -->No billing summaries found
                      </p>
                    `
                  : html`
                      <div class="flex flex-col md:flex-row gap-3 overflow-x-auto pb-1">
                        ${renderLane('Draft', draftRows)}
                        ${renderLane('Shared', sharedRows)}
                        ${otherRows.length > 0 ? renderLane('Other', otherRows) : nothing}
                      </div>
                    `}
            </div>

            <!-- Create form -->
            <div class="rounded-lg border border-[var(--border-subtle,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-4 space-y-3">
              <h3 class="text-base font-semibold text-[var(--text-strong,#0f172a)]">
                <!-- TODO: i18n organism.billingSummaryWorkspace.createBillingSummaryCmd.title -->Create billing summary
              </h3>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <label class="flex flex-col gap-1 text-sm text-[var(--text-default,#0f172a)]">
                  <span><!-- TODO: i18n -->Period start</span>
                  <input
                    type="date"
                    class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-sm text-[var(--text-default,#0f172a)]"
                    .value=${this.createBillingSummaryCmdPeriodStart ?? ''}
                    @input=${(e: Event) => this.handleCreateBillingSummaryCmdPeriodStartChange(e)}
                  />
                </label>
                <label class="flex flex-col gap-1 text-sm text-[var(--text-default,#0f172a)]">
                  <span><!-- TODO: i18n -->Period end</span>
                  <input
                    type="date"
                    class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-sm text-[var(--text-default,#0f172a)]"
                    .value=${this.createBillingSummaryCmdPeriodEnd ?? ''}
                    @input=${(e: Event) => this.handleCreateBillingSummaryCmdPeriodEndChange(e)}
                  />
                </label>
              </div>
              <div class="flex flex-wrap items-center gap-2">
                <button
                  type="button"
                  class="inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium bg-[var(--button-primary-bg,#2563eb)] text-[var(--button-primary-text,#ffffff)] disabled:opacity-60"
                  ?disabled=${createLoading}
                  @click=${(e: Event) => this.handleCreateBillingSummaryCmdClick(e)}
                >
                  ${createLoading
                    ? html`<span class="inline-block h-3 w-3 rounded-full border-2 border-current border-t-transparent animate-spin"></span>`
                    : nothing}
                  <!-- TODO: i18n intent.billingSummaryWorkspace.createBillingSummaryCmd.form.action.createBillingSummaryCmd -->Create
                </button>
              </div>
              ${this.createBillingSummaryCmdState === 'success'
                ? html`
                    <div
                      class="flex items-start justify-between gap-2 rounded-md px-3 py-2 bg-[var(--status-success-bg,#dcfce7)] text-[var(--status-success-text,#166534)] text-sm"
                      role="status"
                    >
                      <span><!-- TODO: i18n action.createBillingSummaryCmd.success -->Billing summary created successfully.</span>
                      <button
                        type="button"
                        class="text-xs underline"
                        @click=${() => {
                          this.createBillingSummaryCmdState = 'idle';
                        }}
                      >
                        Dismiss
                      </button>
                    </div>
                  `
                : this.createBillingSummaryCmdState === 'error'
                  ? html`
                      <div
                        class="flex items-start justify-between gap-2 rounded-md px-3 py-2 bg-[var(--status-error-bg,#fee2e2)] text-[var(--status-error-text,#991b1b)] text-sm"
                        role="alert"
                      >
                        <span
                          >${this.createBillingSummaryCmdError
                            ? this.createBillingSummaryCmdError
                            : html`<!-- TODO: i18n action.createBillingSummaryCmd.error -->Failed to create billing summary.`}</span
                        >
                        <button
                          type="button"
                          class="text-xs underline"
                          @click=${() => {
                            this.createBillingSummaryCmdState = 'idle';
                          }}
                        >
                          Dismiss
                        </button>
                      </div>
                    `
                  : nothing}
            </div>

            <!-- Share action -->
            <div class="rounded-lg border border-[var(--border-subtle,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-4 space-y-3">
              <h3 class="text-base font-semibold text-[var(--text-strong,#0f172a)]">
                <!-- TODO: i18n organism.billingSummaryWorkspace.shareBillingSummaryCmd.title -->Share billing summary
              </h3>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <label class="flex flex-col gap-1 text-sm text-[var(--text-default,#0f172a)]">
                  <span><!-- TODO: i18n -->Billing summary ID</span>
                  <input
                    type="text"
                    class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-sm text-[var(--text-default,#0f172a)]"
                    .value=${this.shareBillingSummaryCmdBillingSummaryId ?? ''}
                    @input=${(e: Event) => this.handleShareBillingSummaryCmdBillingSummaryIdChange(e)}
                  />
                </label>
                <label class="flex flex-col gap-1 text-sm text-[var(--text-default,#0f172a)]">
                  <span><!-- TODO: i18n -->Status</span>
                  <input
                    type="text"
                    class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-sm text-[var(--text-default,#0f172a)]"
                    .value=${this.shareBillingSummaryCmdStatus ?? ''}
                    @input=${(e: Event) => this.handleShareBillingSummaryCmdStatusChange(e)}
                  />
                </label>
              </div>
              <div class="flex flex-wrap items-center gap-2">
                <button
                  type="button"
                  class="inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium bg-[var(--button-primary-bg,#2563eb)] text-[var(--button-primary-text,#ffffff)] disabled:opacity-60"
                  ?disabled=${shareLoading || !this.shareBillingSummaryCmdBillingSummaryId}
                  @click=${(e: Event) => this.handleShareBillingSummaryCmdClick(e)}
                >
                  ${shareLoading
                    ? html`<span class="inline-block h-3 w-3 rounded-full border-2 border-current border-t-transparent animate-spin"></span>`
                    : nothing}
                  <!-- TODO: i18n intent.billingSummaryWorkspace.shareBillingSummaryCmd.form.action.shareBillingSummaryCmd -->Share
                </button>
              </div>
              ${this.shareBillingSummaryCmdState === 'success'
                ? html`
                    <div
                      class="flex items-start justify-between gap-2 rounded-md px-3 py-2 bg-[var(--status-success-bg,#dcfce7)] text-[var(--status-success-text,#166534)] text-sm"
                      role="status"
                    >
                      <span><!-- TODO: i18n action.shareBillingSummaryCmd.success -->Billing summary shared successfully.</span>
                      <button
                        type="button"
                        class="text-xs underline"
                        @click=${() => {
                          this.shareBillingSummaryCmdState = 'idle';
                        }}
                      >
                        Dismiss
                      </button>
                    </div>
                  `
                : this.shareBillingSummaryCmdState === 'error'
                  ? html`
                      <div
                        class="flex items-start justify-between gap-2 rounded-md px-3 py-2 bg-[var(--status-error-bg,#fee2e2)] text-[var(--status-error-text,#991b1b)] text-sm"
                        role="alert"
                      >
                        <span
                          >${this.shareBillingSummaryCmdError
                            ? this.shareBillingSummaryCmdError
                            : html`<!-- TODO: i18n action.shareBillingSummaryCmd.error -->Failed to share billing summary.`}</span
                        >
                        <button
                          type="button"
                          class="text-xs underline"
                          @click=${() => {
                            this.shareBillingSummaryCmdState = 'idle';
                          }}
                        >
                          Dismiss
                        </button>
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
