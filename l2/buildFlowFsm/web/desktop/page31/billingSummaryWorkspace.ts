/// <mls fileReference="_102045_/l2/buildFlowFsm/web/desktop/page31/billingSummaryWorkspace.ts" enhancement="_102020_/l2/enhancementAura"/>

import { html, nothing } from 'lit';
import { customElement } from 'lit/decorators.js';
import { BuildFlowFsmBillingSummaryWorkspaceBase } from '/_102045_/l2/buildFlowFsm/web/shared/billingSummaryWorkspace.js';
import type { ListBillingSummariesOutput } from '/_102045_/l2/buildFlowFsm/web/shared/billingSummaryWorkspace.js';

type BillingSummaryRow = {
  billingSummaryId?: string;
  id?: string;
  projectId?: string;
  periodStart?: string;
  periodEnd?: string;
  status?: string;
  totalAmount?: number | string;
  currency?: string;
  sharedAt?: string;
  createdAt?: string;
};

type PaginatedBillingSummaries = ListBillingSummariesOutput & {
  billingSummaries?: BillingSummaryRow[];
  items?: BillingSummaryRow[];
  total?: number;
  totalCount?: number;
  page?: number;
  pageSize?: number;
};

const STATUS_TRANSITIONS: Record<string, string[]> = {
  draft: ['ready', 'shared'],
  ready: ['shared'],
  shared: [],
  paid: [],
  cancelled: [],
};

@customElement('build-flow-fsm--web--desktop--page31--billing-summary-workspace-102045')
export class BuildFlowFsmDesktopPage31BillingSummaryWorkspacePage extends BuildFlowFsmBillingSummaryWorkspaceBase {
  render() {
    const listData = this.listBillingSummariesData as PaginatedBillingSummaries | null | undefined;
    const rows: BillingSummaryRow[] = Array.isArray(listData?.billingSummaries)
      ? listData!.billingSummaries!
      : Array.isArray(listData?.items)
        ? listData!.items!
        : [];
    const totalCount =
      typeof listData?.totalCount === 'number'
        ? listData.totalCount
        : typeof listData?.total === 'number'
          ? listData.total
          : rows.length;
    const isListLoading = this.listBillingSummariesState === 'loading';
    const isCreateLoading = this.createBillingSummaryCmdState === 'loading';
    const isShareLoading = this.shareBillingSummaryCmdState === 'loading';

    const selectedId = this.shareBillingSummaryCmdBillingSummaryId || '';
    const selectedRow: BillingSummaryRow | undefined = rows.find((row: BillingSummaryRow) => {
      const rowId = row.billingSummaryId || row.id || '';
      return rowId !== '' && rowId === selectedId;
    });

    const selectedStatus = (selectedRow?.status || '').toLowerCase();
    const allowedNextStatuses: string[] =
      selectedStatus && STATUS_TRANSITIONS[selectedStatus]
        ? STATUS_TRANSITIONS[selectedStatus]
        : selectedRow
          ? ['shared']
          : [];

    const draftCount = rows.filter((r: BillingSummaryRow) => (r.status || '').toLowerCase() === 'draft').length;
    const readyCount = rows.filter((r: BillingSummaryRow) => (r.status || '').toLowerCase() === 'ready').length;
    const sharedCount = rows.filter((r: BillingSummaryRow) => (r.status || '').toLowerCase() === 'shared').length;

    const selectSummary = (row: BillingSummaryRow) => {
      const rowId = row.billingSummaryId || row.id || '';
      if (!rowId) return;
      this.setShareBillingSummaryCmdBillingSummaryId(rowId);
      if (row.status) {
        this.setShareBillingSummaryCmdStatus(row.status);
      }
    };

    return html`
      <div class="min-h-screen bg-[var(--page-bg,#f8fafc)] text-[var(--text-default,#0f172a)] p-6">
        <div class="max-w-7xl mx-auto flex flex-col gap-6">
          <header class="flex flex-col gap-2">
            <h1 class="text-2xl font-semibold text-[var(--text-strong,#020617)]">
              ${'Billing Summaries' /* TODO: page.title */}
            </h1>
            <p class="text-sm text-[var(--text-muted,#64748b)]">
              ${'Browse billing summaries by period and status, create a new summary, and share it with the client.' /* TODO: page.subtitle */}
            </p>
          </header>

          <!-- summary-first -->
          <section class="grid grid-cols-2 md:grid-cols-4 gap-3">
            <div class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-4">
              <div class="text-xs uppercase tracking-wide text-[var(--text-muted,#64748b)]">${'Total' /* TODO: summary.total.label */}</div>
              <div class="mt-1 text-2xl font-semibold text-[var(--text-strong,#020617)]">${totalCount}</div>
            </div>
            <div class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-4">
              <div class="text-xs uppercase tracking-wide text-[var(--text-muted,#64748b)]">${'Draft' /* TODO: summary.draft.label */}</div>
              <div class="mt-1 text-2xl font-semibold text-[var(--status-neutral-text,#334155)]">${draftCount}</div>
            </div>
            <div class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-4">
              <div class="text-xs uppercase tracking-wide text-[var(--text-muted,#64748b)]">${'Ready' /* TODO: summary.ready.label */}</div>
              <div class="mt-1 text-2xl font-semibold text-[var(--status-info-text,#1e40af)]">${readyCount}</div>
            </div>
            <div class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-4">
              <div class="text-xs uppercase tracking-wide text-[var(--text-muted,#64748b)]">${'Shared' /* TODO: summary.shared.label */}</div>
              <div class="mt-1 text-2xl font-semibold text-[var(--status-success-text,#166534)]">${sharedCount}</div>
            </div>
          </section>

          <!-- filters -->
          <section class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-4">
            <div class="grid grid-cols-1 md:grid-cols-4 gap-3 items-end">
              <label class="flex flex-col gap-1 text-sm">
                <span class="text-[var(--text-muted,#64748b)]">${'Project ID' /* TODO: field.projectId.label */}</span>
                <input
                  class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-[var(--text-default,#0f172a)]"
                  .value=${this.listBillingSummariesProjectId || ''}
                  @change=${(e: Event) => this.handleListBillingSummariesProjectIdChange(e)}
                />
              </label>
              <label class="flex flex-col gap-1 text-sm">
                <span class="text-[var(--text-muted,#64748b)]">${'Status' /* TODO: field.status.label */}</span>
                <input
                  class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-[var(--text-default,#0f172a)]"
                  .value=${this.listBillingSummariesStatus || ''}
                  @change=${(e: Event) => this.handleListBillingSummariesStatusChange(e)}
                />
              </label>
              <label class="flex flex-col gap-1 text-sm">
                <span class="text-[var(--text-muted,#64748b)]">${'Page' /* TODO: field.page.label */}</span>
                <input
                  type="number"
                  min="1"
                  class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-[var(--text-default,#0f172a)]"
                  .value=${this.listBillingSummariesPage || ''}
                  @change=${(e: Event) => this.handleListBillingSummariesPageChange(e)}
                />
              </label>
              <div class="flex gap-2">
                <label class="flex flex-col gap-1 text-sm flex-1">
                  <span class="text-[var(--text-muted,#64748b)]">${'Page size' /* TODO: field.pageSize.label */}</span>
                  <input
                    type="number"
                    min="1"
                    class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-[var(--text-default,#0f172a)]"
                    .value=${this.listBillingSummariesPageSize || ''}
                    @change=${(e: Event) => this.handleListBillingSummariesPageSizeChange(e)}
                  />
                </label>
                <button
                  type="button"
                  class="self-end rounded-md px-4 py-2 bg-[var(--button-primary-bg,#2563eb)] text-[var(--button-primary-text,#ffffff)] disabled:opacity-60"
                  ?disabled=${isListLoading}
                  @click=${(e: Event) => this.handleListBillingSummariesClick(e)}
                >
                  ${isListLoading ? ('Loading…' /* TODO: action.listBillingSummaries.loading */) : ('Search' /* TODO: action.listBillingSummaries.label */)}
                </button>
              </div>
            </div>
          </section>

          <!-- master-detail -->
          <section class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <!-- master list / card-board -->
            <div class="md:col-span-2 rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-4 flex flex-col gap-3">
              <h2 class="text-lg font-medium text-[var(--text-strong,#020617)]">
                ${'Summaries' /* TODO: organism.listBillingSummaries.title */}
              </h2>

              ${isListLoading
                ? html`
                    <div class="flex flex-col gap-2 animate-pulse">
                      <div class="h-16 rounded-md bg-[var(--surface-alt-bg,#f1f5f9)]"></div>
                      <div class="h-16 rounded-md bg-[var(--surface-alt-bg,#f1f5f9)]"></div>
                      <div class="h-16 rounded-md bg-[var(--surface-alt-bg,#f1f5f9)]"></div>
                    </div>
                  `
                : rows.length === 0
                  ? html`
                      <p class="text-sm text-[var(--text-muted,#64748b)] py-8 text-center">
                        ${'No billing summaries found for the current filters.' /* TODO: organism.listBillingSummaries.empty */}
                      </p>
                    `
                  : html`
                      <ul class="flex flex-col gap-2">
                        ${rows.map((row: BillingSummaryRow) => {
                          const rowId = row.billingSummaryId || row.id || '';
                          const isSelected = rowId !== '' && rowId === selectedId;
                          const status = row.status || '';
                          const statusLower = status.toLowerCase();
                          const statusBg =
                            statusLower === 'shared' || statusLower === 'paid'
                              ? 'bg-[var(--status-success-bg,#dcfce7)] text-[var(--status-success-text,#166534)]'
                              : statusLower === 'ready'
                                ? 'bg-[var(--status-info-bg,#dbeafe)] text-[var(--status-info-text,#1e40af)]'
                                : statusLower === 'draft'
                                  ? 'bg-[var(--status-neutral-bg,#f1f5f9)] text-[var(--status-neutral-text,#334155)]'
                                  : 'bg-[var(--status-warning-bg,#fef3c7)] text-[var(--status-warning-text,#92400e)]';
                          return html`
                            <li>
                              <button
                                type="button"
                                class="w-full text-left rounded-lg border p-3 transition-colors ${isSelected
                                  ? 'border-[var(--selected-border,#2563eb)] bg-[var(--selected-bg,#eff6ff)] text-[var(--selected-text,#1e3a8a)]'
                                  : 'border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] hover:bg-[var(--surface-alt-bg,#f1f5f9)]'}"
                                @click=${() => selectSummary(row)}
                              >
                                <div class="flex items-start justify-between gap-3">
                                  <div class="flex flex-col gap-1 min-w-0">
                                    <div class="font-medium truncate">
                                      ${row.periodStart || '—'} → ${row.periodEnd || '—'}
                                    </div>
                                    <div class="text-xs text-[var(--text-muted,#64748b)] truncate">
                                      ${'Project' /* TODO: field.projectId.label */}: ${row.projectId || '—'}
                                      · ID: ${rowId || '—'}
                                    </div>
                                    ${row.totalAmount !== undefined && row.totalAmount !== null
                                      ? html`
                                          <div class="text-sm text-[var(--text-default,#0f172a)]">
                                            ${row.totalAmount}${row.currency ? ` ${row.currency}` : ''}
                                          </div>
                                        `
                                      : nothing}
                                  </div>
                                  <span class="shrink-0 rounded-full px-2 py-0.5 text-xs font-medium ${statusBg}">
                                    ${status || '—'}
                                  </span>
                                </div>
                              </button>
                            </li>
                          `;
                        })}
                      </ul>
                    `}
            </div>

            <!-- detail / actions panel -->
            <div class="flex flex-col gap-4">
              <!-- create form -->
              <div class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-4 flex flex-col gap-3">
                <h2 class="text-lg font-medium text-[var(--text-strong,#020617)]">
                  ${'Create summary' /* TODO: organism.createBillingSummary.title */}
                </h2>
                <label class="flex flex-col gap-1 text-sm">
                  <span class="text-[var(--text-muted,#64748b)]">${'Project ID' /* TODO: field.projectId.label */}</span>
                  <input
                    class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-[var(--text-default,#0f172a)]"
                    .value=${this.createBillingSummaryCmdProjectId || ''}
                    @change=${(e: Event) => this.handleCreateBillingSummaryCmdProjectIdChange(e)}
                  />
                </label>
                <label class="flex flex-col gap-1 text-sm">
                  <span class="text-[var(--text-muted,#64748b)]">${'Period start' /* TODO: field.periodStart.label */}</span>
                  <input
                    type="date"
                    class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-[var(--text-default,#0f172a)]"
                    .value=${this.createBillingSummaryCmdPeriodStart || ''}
                    @change=${(e: Event) => this.handleCreateBillingSummaryCmdPeriodStartChange(e)}
                  />
                </label>
                <label class="flex flex-col gap-1 text-sm">
                  <span class="text-[var(--text-muted,#64748b)]">${'Period end' /* TODO: field.periodEnd.label */}</span>
                  <input
                    type="date"
                    class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-[var(--text-default,#0f172a)]"
                    .value=${this.createBillingSummaryCmdPeriodEnd || ''}
                    @change=${(e: Event) => this.handleCreateBillingSummaryCmdPeriodEndChange(e)}
                  />
                </label>
                <button
                  type="button"
                  class="rounded-md px-4 py-2 bg-[var(--button-primary-bg,#2563eb)] text-[var(--button-primary-text,#ffffff)] disabled:opacity-60"
                  ?disabled=${isCreateLoading}
                  @click=${(e: Event) => this.handleCreateBillingSummaryCmdClick(e)}
                >
                  ${isCreateLoading
                    ? ('Creating…' /* TODO: action.createBillingSummaryCmd.loading */)
                    : ('Create billing summary' /* TODO: action.createBillingSummaryCmd.label */)}
                </button>

                ${this.createBillingSummaryCmdState === 'success'
                  ? html`
                      <div
                        class="rounded-md border border-[var(--border-subtle,#e2e8f0)] bg-[var(--status-success-bg,#dcfce7)] text-[var(--status-success-text,#166534)] px-3 py-2 text-sm flex items-start justify-between gap-2"
                        role="status"
                      >
                        <span>${'Billing summary created successfully.' /* TODO: action.createBillingSummaryCmd.success */}</span>
                        <button
                          type="button"
                          class="text-[var(--status-success-text,#166534)] underline text-xs"
                          @click=${() => {
                            /* dismiss via re-render only — status owned by base */
                          }}
                        >
                          ${'Dismiss' /* TODO: feedback.dismiss */}
                        </button>
                      </div>
                    `
                  : nothing}
                ${this.createBillingSummaryCmdState === 'error'
                  ? html`
                      <div
                        class="rounded-md border border-[var(--border-subtle,#e2e8f0)] bg-[var(--status-error-bg,#fee2e2)] text-[var(--status-error-text,#991b1b)] px-3 py-2 text-sm"
                        role="alert"
                      >
                        ${this.createBillingSummaryCmdError ||
                        ('Could not create billing summary.' /* TODO: action.createBillingSummaryCmd.error */)}
                      </div>
                    `
                  : nothing}
              </div>

              <!-- selected detail + contextual share transitions -->
              <div class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-4 flex flex-col gap-3">
                <h2 class="text-lg font-medium text-[var(--text-strong,#020617)]">
                  ${'Share with client' /* TODO: organism.shareBillingSummary.title */}
                </h2>

                ${selectedRow
                  ? html`
                      <div class="rounded-md bg-[var(--surface-alt-bg,#f1f5f9)] p-3 text-sm flex flex-col gap-1">
                        <div>
                          <span class="text-[var(--text-muted,#64748b)]">${'Period' /* TODO: field.period.label */}:</span>
                          ${selectedRow.periodStart || '—'} → ${selectedRow.periodEnd || '—'}
                        </div>
                        <div>
                          <span class="text-[var(--text-muted,#64748b)]">${'Status' /* TODO: field.status.label */}:</span>
                          ${selectedRow.status || '—'}
                        </div>
                        <div>
                          <span class="text-[var(--text-muted,#64748b)]">${'ID' /* TODO: field.billingSummaryId.label */}:</span>
                          ${selectedId}
                        </div>
                      </div>

                      ${allowedNextStatuses.length > 0
                        ? html`
                            <div class="flex flex-col gap-2">
                              <span class="text-xs uppercase tracking-wide text-[var(--text-muted,#64748b)]">
                                ${'Next actions' /* TODO: action.shareBillingSummaryCmd.transitions */}
                              </span>
                              <div class="flex flex-wrap gap-2">
                                ${allowedNextStatuses.map(
                                  (nextStatus: string) => html`
                                    <button
                                      type="button"
                                      class="rounded-md px-3 py-2 text-sm bg-[var(--button-secondary-bg,#f8fafc)] text-[var(--button-secondary-text,#0f172a)] border border-[var(--button-secondary-border,#e2e8f0)] disabled:opacity-60"
                                      ?disabled=${isShareLoading}
                                      @click=${(e: Event) => {
                                        this.setShareBillingSummaryCmdBillingSummaryId(selectedId);
                                        this.setShareBillingSummaryCmdStatus(nextStatus);
                                        this.handleShareBillingSummaryCmdClick(e);
                                      }}
                                    >
                                      ${isShareLoading
                                        ? ('Sharing…' /* TODO: action.shareBillingSummaryCmd.loading */)
                                        : nextStatus === 'shared'
                                          ? ('Share with client' /* TODO: action.shareBillingSummaryCmd.label */)
                                          : `${'Mark as' /* TODO: action.transition.prefix */} ${nextStatus}`}
                                    </button>
                                  `,
                                )}
                              </div>
                            </div>
                          `
                        : html`
                            <p class="text-sm text-[var(--text-muted,#64748b)]">
                              ${'No further share transitions for this status.' /* TODO: organism.shareBillingSummary.noTransitions */}
                            </p>
                          `}
                    `
                  : html`
                      <p class="text-sm text-[var(--text-muted,#64748b)]">
                        ${'Select a billing summary from the list to share it with the client.' /* TODO: organism.shareBillingSummary.empty */}
                      </p>
                    `}

                ${this.shareBillingSummaryCmdState === 'success'
                  ? html`
                      <div
                        class="rounded-md border border-[var(--border-subtle,#e2e8f0)] bg-[var(--status-success-bg,#dcfce7)] text-[var(--status-success-text,#166534)] px-3 py-2 text-sm"
                        role="status"
                      >
                        ${'Billing summary shared successfully.' /* TODO: action.shareBillingSummaryCmd.success */}
                      </div>
                    `
                  : nothing}
                ${this.shareBillingSummaryCmdState === 'error'
                  ? html`
                      <div
                        class="rounded-md border border-[var(--border-subtle,#e2e8f0)] bg-[var(--status-error-bg,#fee2e2)] text-[var(--status-error-text,#991b1b)] px-3 py-2 text-sm"
                        role="alert"
                      >
                        ${this.shareBillingSummaryCmdError ||
                        ('Could not share billing summary.' /* TODO: action.shareBillingSummaryCmd.error */)}
                      </div>
                    `
                  : nothing}
              </div>
            </div>
          </section>
        </div>
      </div>
    `;
  }
}
