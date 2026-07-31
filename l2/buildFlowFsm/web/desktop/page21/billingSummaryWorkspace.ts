/// <mls fileReference="_102045_/l2/buildFlowFsm/web/desktop/page21/billingSummaryWorkspace.ts" enhancement="_102020_/l2/enhancementAura"/>

import { html, nothing } from 'lit';
import { customElement } from 'lit/decorators.js';
import { BuildFlowFsmBillingSummaryWorkspaceBase } from '/_102045_/l2/buildFlowFsm/web/shared/billingSummaryWorkspace.js';
import type { ListBillingSummariesOutput } from '/_102045_/l2/buildFlowFsm/web/shared/billingSummaryWorkspace.js';

type BillingSummaryRow = {
  billingSummaryId?: string;
  projectId?: string;
  periodStart?: string;
  periodEnd?: string;
  laborCost?: number | string;
  materialCost?: number | string;
  changeOrderCost?: number | string;
  totalCost?: number | string;
  status?: string;
  sharedAt?: string;
};

@customElement('build-flow-fsm--web--desktop--page21--billing-summary-workspace-102045')
export class BuildFlowFsmDesktopPage21BillingSummaryWorkspacePage extends BuildFlowFsmBillingSummaryWorkspaceBase {
  render() {
    const listData = this.listBillingSummariesData as ListBillingSummariesOutput & {
      billingSummaries?: BillingSummaryRow[];
      total?: number;
    };
    const rows: BillingSummaryRow[] = Array.isArray(listData?.billingSummaries)
      ? listData.billingSummaries
      : [];
    const totalCount =
      typeof listData?.total === 'number' ? listData.total : rows.length;

    const selectedId = this.shareBillingSummaryCmdBillingSummaryId || '';
    const selectedRow: BillingSummaryRow | undefined = rows.find(
      (row: BillingSummaryRow) =>
        String(row.billingSummaryId ?? '') === selectedId,
    );

    const listLoading = this.listBillingSummariesState === 'loading';
    const createLoading = this.createBillingSummaryCmdState === 'loading';
    const shareLoading = this.shareBillingSummaryCmdState === 'loading';

    const formatMoney = (value: number | string | undefined): string => {
      if (value === undefined || value === null || value === '') return '—';
      const num = typeof value === 'number' ? value : Number(value);
      if (Number.isNaN(num)) return String(value);
      return num.toLocaleString(undefined, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      });
    };

    const statusLabel = (status: string | undefined): string => {
      if (!status) return '—';
      return status;
    };

    const canShare =
      !!selectedRow &&
      String(selectedRow.status ?? '').toLowerCase() === 'draft' &&
      !!selectedId;

    return html`
      <div class="min-h-screen bg-[var(--page-bg,#f8fafc)] text-[var(--text-default,#0f172a)] p-6">
        <div class="max-w-7xl mx-auto space-y-6">
          <header class="space-y-1">
            <h1 class="text-2xl font-semibold text-[var(--text-strong,#020617)]">
              Billing Summaries
            </h1>
            <p class="text-sm text-[var(--text-muted,#64748b)]">
              <!-- TODO: i18n key unavailable on base surface -->
              Review cost breakdowns, create period summaries, and share drafts with clients.
            </p>
          </header>

          <!-- Create form (summary-first / inline period picker) -->
          <section
            class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-4 shadow-sm"
          >
            <div class="flex flex-wrap items-end gap-4">
              <div class="flex-1 min-w-[12rem]">
                <h2 class="text-sm font-semibold text-[var(--text-strong,#020617)] mb-3">
                  <!-- TODO: organism.billingSummaryWorkspace.createBillingSummaryCmd.title -->
                  Create billing summary
                </h2>
                <div class="flex flex-wrap gap-3">
                  <label class="flex flex-col gap-1 text-xs text-[var(--text-muted,#64748b)]">
                    <!-- TODO: intent...periodStart.label -->
                    Period start
                    <input
                      type="date"
                      class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-sm text-[var(--text-default,#0f172a)]"
                      .value=${this.createBillingSummaryCmdPeriodStart || ''}
                      ?disabled=${createLoading}
                      @change=${(e: Event) => this.handleCreateBillingSummaryCmdPeriodStartChange(e)}
                    />
                  </label>
                  <label class="flex flex-col gap-1 text-xs text-[var(--text-muted,#64748b)]">
                    <!-- TODO: intent...periodEnd.label -->
                    Period end
                    <input
                      type="date"
                      class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-sm text-[var(--text-default,#0f172a)]"
                      .value=${this.createBillingSummaryCmdPeriodEnd || ''}
                      ?disabled=${createLoading}
                      @change=${(e: Event) => this.handleCreateBillingSummaryCmdPeriodEndChange(e)}
                    />
                  </label>
                </div>
              </div>
              <button
                type="button"
                class="inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium bg-[var(--button-primary-bg,#2563eb)] text-[var(--button-primary-text,#ffffff)] disabled:opacity-60"
                ?disabled=${createLoading ||
                !this.createBillingSummaryCmdPeriodStart ||
                !this.createBillingSummaryCmdPeriodEnd}
                @click=${(e: Event) => this.handleCreateBillingSummaryCmdClick(e)}
              >
                ${createLoading
                  ? 'Creating…'
                  : html`<!-- TODO: action.createBillingSummaryCmd -->Create summary`}
              </button>
            </div>
            ${this.createBillingSummaryCmdState === 'success'
              ? html`
                  <div
                    class="mt-3 rounded-md px-3 py-2 text-sm bg-[var(--status-success-bg,#dcfce7)] text-[var(--status-success-text,#166534)]"
                    role="status"
                  >
                    <!-- TODO: action.createBillingSummaryCmd.success -->
                    Billing summary created successfully.
                  </div>
                `
              : nothing}
            ${this.createBillingSummaryCmdState === 'error'
              ? html`
                  <div
                    class="mt-3 rounded-md px-3 py-2 text-sm bg-[var(--status-error-bg,#fee2e2)] text-[var(--status-error-text,#991b1b)]"
                    role="alert"
                  >
                    ${this.createBillingSummaryCmdError ||
                    '<!-- TODO: action.createBillingSummaryCmd.error -->Failed to create billing summary.'}
                  </div>
                `
              : nothing}
          </section>

          <!-- Master-detail: list + detail panel -->
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <!-- List (master) -->
            <section
              class="md:col-span-2 rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] shadow-sm"
            >
              <div
                class="flex flex-wrap items-center justify-between gap-3 border-b border-[var(--border-subtle,#f1f5f9)] px-4 py-3"
              >
                <h2 class="text-sm font-semibold text-[var(--text-strong,#020617)]">
                  <!-- TODO: organism.billingSummaryWorkspace.listBillingSummaries.title -->
                  Billing summaries
                </h2>
                <span class="text-xs text-[var(--text-muted,#64748b)]">
                  ${totalCount} total
                </span>
              </div>

              <!-- Filters -->
              <div
                class="flex flex-wrap gap-3 border-b border-[var(--border-subtle,#f1f5f9)] px-4 py-3 bg-[var(--surface-alt-bg,#f8fafc)]"
              >
                <label class="flex flex-col gap-1 text-xs text-[var(--text-muted,#64748b)]">
                  <!-- TODO: filter.projectId.label -->
                  Project
                  <input
                    type="text"
                    class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-1.5 text-sm text-[var(--text-default,#0f172a)] min-w-[8rem]"
                    .value=${this.listBillingSummariesProjectId || ''}
                    @change=${(e: Event) => this.handleListBillingSummariesProjectIdChange(e)}
                  />
                </label>
                <label class="flex flex-col gap-1 text-xs text-[var(--text-muted,#64748b)]">
                  <!-- TODO: filter.status.label -->
                  Status
                  <input
                    type="text"
                    class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-1.5 text-sm text-[var(--text-default,#0f172a)] min-w-[8rem]"
                    .value=${this.listBillingSummariesStatus || ''}
                    @change=${(e: Event) => this.handleListBillingSummariesStatusChange(e)}
                  />
                </label>
                <label class="flex flex-col gap-1 text-xs text-[var(--text-muted,#64748b)]">
                  <!-- TODO: filter.page.label -->
                  Page
                  <input
                    type="number"
                    min="1"
                    class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-1.5 text-sm text-[var(--text-default,#0f172a)] w-20"
                    .value=${this.listBillingSummariesPage || '1'}
                    @change=${(e: Event) => this.handleListBillingSummariesPageChange(e)}
                  />
                </label>
                <label class="flex flex-col gap-1 text-xs text-[var(--text-muted,#64748b)]">
                  <!-- TODO: filter.pageSize.label -->
                  Page size
                  <input
                    type="number"
                    min="1"
                    class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-1.5 text-sm text-[var(--text-default,#0f172a)] w-20"
                    .value=${this.listBillingSummariesPageSize || '10'}
                    @change=${(e: Event) => this.handleListBillingSummariesPageSizeChange(e)}
                  />
                </label>
                <div class="flex items-end">
                  <button
                    type="button"
                    class="inline-flex items-center rounded-md px-3 py-1.5 text-sm font-medium bg-[var(--button-secondary-bg,#f1f5f9)] text-[var(--button-secondary-text,#0f172a)] border border-[var(--button-secondary-border,#e2e8f0)]"
                    ?disabled=${listLoading}
                    @click=${(e: Event) => this.handleListBillingSummariesClick(e)}
                  >
                    ${listLoading ? 'Loading…' : 'Apply filters'}
                  </button>
                </div>
              </div>

              ${listLoading
                ? html`
                    <div class="p-6 space-y-3" aria-busy="true">
                      <div class="h-10 rounded bg-[var(--surface-alt-bg,#f1f5f9)] animate-pulse"></div>
                      <div class="h-10 rounded bg-[var(--surface-alt-bg,#f1f5f9)] animate-pulse"></div>
                      <div class="h-10 rounded bg-[var(--surface-alt-bg,#f1f5f9)] animate-pulse"></div>
                    </div>
                  `
                : rows.length === 0
                  ? html`
                      <div class="p-8 text-center text-sm text-[var(--text-muted,#64748b)]">
                        <!-- TODO: intent.billingSummaryWorkspace.listBillingSummaries.list.empty -->
                        No billing summaries found.
                      </div>
                    `
                  : html`
                      <div class="overflow-x-auto">
                        <table class="w-full text-sm text-left">
                          <thead
                            class="bg-[var(--surface-alt-bg,#f8fafc)] text-xs uppercase text-[var(--text-muted,#64748b)]"
                          >
                            <tr>
                              <th class="px-4 py-2 font-medium">Period</th>
                              <th class="px-4 py-2 font-medium">Project</th>
                              <th class="px-4 py-2 font-medium text-right">Labor</th>
                              <th class="px-4 py-2 font-medium text-right">Materials</th>
                              <th class="px-4 py-2 font-medium text-right">Change orders</th>
                              <th class="px-4 py-2 font-medium text-right">
                                <!-- TODO: column.total.label -->
                                Total
                              </th>
                              <th class="px-4 py-2 font-medium">Status</th>
                            </tr>
                          </thead>
                          <tbody>
                            ${rows.map((row: BillingSummaryRow) => {
                              const rowId = String(row.billingSummaryId ?? '');
                              const isSelected = rowId !== '' && rowId === selectedId;
                              return html`
                                <tr
                                  class="border-t border-[var(--border-subtle,#f1f5f9)] cursor-pointer ${isSelected
                                    ? 'bg-[var(--selected-bg,#eff6ff)] text-[var(--selected-text,#1e3a8a)]'
                                    : 'hover:bg-[var(--surface-alt-bg,#f8fafc)]'}"
                                  @click=${() => {
                                    if (rowId) {
                                      this.setShareBillingSummaryCmdBillingSummaryId(rowId);
                                      const st = String(row.status ?? '');
                                      if (st.toLowerCase() === 'draft') {
                                        this.setShareBillingSummaryCmdStatus('shared');
                                      }
                                    }
                                  }}
                                >
                                  <td class="px-4 py-2 whitespace-nowrap">
                                    ${row.periodStart || '—'}
                                    <span class="text-[var(--text-muted,#64748b)]">→</span>
                                    ${row.periodEnd || '—'}
                                  </td>
                                  <td class="px-4 py-2">${row.projectId || '—'}</td>
                                  <td class="px-4 py-2 text-right tabular-nums">
                                    ${formatMoney(row.laborCost)}
                                  </td>
                                  <td class="px-4 py-2 text-right tabular-nums">
                                    ${formatMoney(row.materialCost)}
                                  </td>
                                  <td class="px-4 py-2 text-right tabular-nums">
                                    ${formatMoney(row.changeOrderCost)}
                                  </td>
                                  <td class="px-4 py-2 text-right tabular-nums font-medium">
                                    ${formatMoney(row.totalCost)}
                                  </td>
                                  <td class="px-4 py-2">
                                    <span
                                      class="inline-flex rounded-full px-2 py-0.5 text-xs font-medium ${String(
                                        row.status ?? '',
                                      ).toLowerCase() === 'draft'
                                        ? 'bg-[var(--status-warning-bg,#fef3c7)] text-[var(--status-warning-text,#92400e)]'
                                        : String(row.status ?? '').toLowerCase() === 'shared'
                                          ? 'bg-[var(--status-success-bg,#dcfce7)] text-[var(--status-success-text,#166534)]'
                                          : 'bg-[var(--status-neutral-bg,#f1f5f9)] text-[var(--status-neutral-text,#334155)]'}"
                                    >
                                      ${statusLabel(row.status)}
                                    </span>
                                  </td>
                                </tr>
                              `;
                            })}
                          </tbody>
                        </table>
                      </div>
                    `}
            </section>

            <!-- Detail panel (contextual-transition-actions) -->
            <aside
              class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] shadow-sm p-4 space-y-4"
            >
              <h2 class="text-sm font-semibold text-[var(--text-strong,#020617)]">
                <!-- TODO: organism.billingSummaryWorkspace.shareBillingSummaryCmd.title -->
                Summary detail
              </h2>

              ${!selectedRow
                ? html`
                    <p class="text-sm text-[var(--text-muted,#64748b)]">
                      Select a billing summary to review its cost breakdown and available actions.
                    </p>
                  `
                : html`
                    <dl class="space-y-3 text-sm">
                      <div>
                        <dt class="text-xs text-[var(--text-muted,#64748b)]">Period</dt>
                        <dd class="font-medium text-[var(--text-default,#0f172a)]">
                          ${selectedRow.periodStart || '—'}
                          <span class="text-[var(--text-muted,#64748b)]">→</span>
                          ${selectedRow.periodEnd || '—'}
                        </dd>
                      </div>
                      <div>
                        <dt class="text-xs text-[var(--text-muted,#64748b)]">Project</dt>
                        <dd class="font-medium">${selectedRow.projectId || '—'}</dd>
                      </div>
                      <div class="grid grid-cols-2 gap-3 pt-2 border-t border-[var(--border-subtle,#f1f5f9)]">
                        <div>
                          <dt class="text-xs text-[var(--text-muted,#64748b)]">Labor</dt>
                          <dd class="font-medium tabular-nums">
                            ${formatMoney(selectedRow.laborCost)}
                          </dd>
                        </div>
                        <div>
                          <dt class="text-xs text-[var(--text-muted,#64748b)]">Materials</dt>
                          <dd class="font-medium tabular-nums">
                            ${formatMoney(selectedRow.materialCost)}
                          </dd>
                        </div>
                        <div>
                          <dt class="text-xs text-[var(--text-muted,#64748b)]">Change orders</dt>
                          <dd class="font-medium tabular-nums">
                            ${formatMoney(selectedRow.changeOrderCost)}
                          </dd>
                        </div>
                        <div>
                          <dt class="text-xs text-[var(--text-muted,#64748b)]">Total</dt>
                          <dd class="font-semibold tabular-nums text-[var(--text-strong,#020617)]">
                            ${formatMoney(selectedRow.totalCost)}
                          </dd>
                        </div>
                      </div>
                      <div class="pt-2 border-t border-[var(--border-subtle,#f1f5f9)]">
                        <dt class="text-xs text-[var(--text-muted,#64748b)]">Status</dt>
                        <dd class="mt-1">
                          <span
                            class="inline-flex rounded-full px-2 py-0.5 text-xs font-medium ${String(
                              selectedRow.status ?? '',
                            ).toLowerCase() === 'draft'
                              ? 'bg-[var(--status-warning-bg,#fef3c7)] text-[var(--status-warning-text,#92400e)]'
                              : String(selectedRow.status ?? '').toLowerCase() === 'shared'
                                ? 'bg-[var(--status-success-bg,#dcfce7)] text-[var(--status-success-text,#166534)]'
                                : 'bg-[var(--status-neutral-bg,#f1f5f9)] text-[var(--status-neutral-text,#334155)]'}"
                          >
                            ${statusLabel(selectedRow.status)}
                          </span>
                        </dd>
                      </div>
                      ${selectedRow.sharedAt
                        ? html`
                            <div>
                              <dt class="text-xs text-[var(--text-muted,#64748b)]">Shared at</dt>
                              <dd class="text-[var(--text-default,#0f172a)]">
                                ${selectedRow.sharedAt}
                              </dd>
                            </div>
                          `
                        : nothing}
                    </dl>

                    ${canShare
                      ? html`
                          <button
                            type="button"
                            class="w-full inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium bg-[var(--button-primary-bg,#2563eb)] text-[var(--button-primary-text,#ffffff)] disabled:opacity-60"
                            ?disabled=${shareLoading}
                            @click=${(e: Event) => {
                              this.setShareBillingSummaryCmdStatus('shared');
                              this.handleShareBillingSummaryCmdClick(e);
                            }}
                          >
                            ${shareLoading
                              ? 'Sharing…'
                              : html`<!-- TODO: action.shareBillingSummaryCmd -->Share with Client`}
                          </button>
                        `
                      : html`
                          <p class="text-xs text-[var(--text-muted,#64748b)]">
                            ${String(selectedRow.status ?? '').toLowerCase() === 'shared'
                              ? 'This summary has already been shared with the client.'
                              : 'Share is available only for draft summaries.'}
                          </p>
                        `}

                    ${this.shareBillingSummaryCmdState === 'success'
                      ? html`
                          <div
                            class="rounded-md px-3 py-2 text-sm bg-[var(--status-success-bg,#dcfce7)] text-[var(--status-success-text,#166534)]"
                            role="status"
                          >
                            <!-- TODO: action.shareBillingSummaryCmd.success -->
                            Billing summary shared with client.
                          </div>
                        `
                      : nothing}
                    ${this.shareBillingSummaryCmdState === 'error'
                      ? html`
                          <div
                            class="rounded-md px-3 py-2 text-sm bg-[var(--status-error-bg,#fee2e2)] text-[var(--status-error-text,#991b1b)]"
                            role="alert"
                          >
                            ${this.shareBillingSummaryCmdError ||
                            '<!-- TODO: action.shareBillingSummaryCmd.error -->Failed to share billing summary.'}
                          </div>
                        `
                      : nothing}
                  `}
            </aside>
          </div>
        </div>
      </div>
    `;
  }
}
