/// <mls fileReference="_102045_/l2/buildFlowFsm/web/desktop/page21/jobCostWorkspace.ts" enhancement="_102020_/l2/enhancementAura"/>

import { html, nothing } from 'lit';
import { customElement } from 'lit/decorators.js';
import { BuildFlowFsmJobCostWorkspaceBase } from '/_102045_/l2/buildFlowFsm/web/shared/jobCostWorkspace.js';
import type { ViewJobCostSummaryOutput } from '/_102045_/l2/buildFlowFsm/web/shared/jobCostWorkspace.js';

@customElement('build-flow-fsm--web--desktop--page21--job-cost-workspace-102045')
export class BuildFlowFsmDesktopPage21JobCostWorkspacePage extends BuildFlowFsmJobCostWorkspaceBase {
  render() {
    const data: ViewJobCostSummaryOutput | null = this.viewJobCostSummaryData;
    const isLoading = this.viewJobCostSummaryState === 'loading';
    const isError = this.viewJobCostSummaryState === 'error';
    const isSuccess = this.viewJobCostSummaryState === 'success';

    const formatMoney = (value: unknown): string => {
      if (value === null || value === undefined || value === '') return '—';
      const num = typeof value === 'number' ? value : Number(value);
      if (Number.isNaN(num)) return String(value);
      return num.toLocaleString(undefined, { style: 'currency', currency: 'USD' });
    };

    const formatDate = (value: unknown): string => {
      if (value === null || value === undefined || value === '') return '—';
      return String(value);
    };

    const varianceValue =
      data && data.budgetVariance !== null && data.budgetVariance !== undefined
        ? typeof data.budgetVariance === 'number'
          ? data.budgetVariance
          : Number(data.budgetVariance)
        : null;
    const isOverBudget =
      varianceValue !== null && !Number.isNaN(varianceValue) ? varianceValue < 0 : false;

    return html`
      <div class="min-h-full p-6 bg-[var(--page-bg,#f8fafc)] text-[var(--text-default,#0f172a)]">
        <div class="mx-auto max-w-6xl space-y-6">
          <header class="space-y-1">
            <h1 class="text-2xl font-semibold text-[var(--text-strong,#020617)]">
              ${this.msg['organism.jobCostWorkspace.viewJobCostSummary.title']}
            </h1>
          </header>

          ${isLoading
            ? html`
                <div
                  class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-6 space-y-4"
                  aria-busy="true"
                >
                  <div class="h-6 w-1/3 rounded bg-[var(--surface-alt-bg,#f1f5f9)]"></div>
                  <div class="grid grid-cols-1 gap-4 md:grid-cols-3">
                    <div class="h-24 rounded-lg bg-[var(--surface-alt-bg,#f1f5f9)]"></div>
                    <div class="h-24 rounded-lg bg-[var(--surface-alt-bg,#f1f5f9)]"></div>
                    <div class="h-24 rounded-lg bg-[var(--surface-alt-bg,#f1f5f9)]"></div>
                  </div>
                  <div class="h-32 rounded-lg bg-[var(--surface-alt-bg,#f1f5f9)]"></div>
                </div>
              `
            : nothing}

          ${isError
            ? html`
                <div
                  class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--status-error-bg,#fef2f2)] px-4 py-3 text-[var(--status-error-text,#991b1b)]"
                  role="alert"
                >
                  ${this.msg['intent.jobCostWorkspace.viewJobCostSummary.list.empty']}
                </div>
              `
            : nothing}

          ${!isLoading && !data
            ? html`
                <div
                  class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] px-4 py-8 text-center text-[var(--text-muted,#64748b)]"
                >
                  ${this.msg['intent.jobCostWorkspace.viewJobCostSummary.list.empty']}
                </div>
              `
            : nothing}

          ${!isLoading && data
            ? html`
                <!-- 1. Project identity header -->
                <section
                  class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-5 shadow-sm"
                >
                  <div class="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                    <div class="space-y-2 min-w-0">
                      <p class="text-xs uppercase tracking-wide text-[var(--text-muted,#64748b)]">
                        ${this.msg['intent.jobCostWorkspace.viewJobCostSummary.list.column.name.label']}
                      </p>
                      <h2 class="text-xl font-semibold text-[var(--text-strong,#020617)] truncate">
                        ${data.name ?? '—'}
                      </h2>
                      <p class="text-sm text-[var(--text-default,#0f172a)]">
                        <span class="text-[var(--text-muted,#64748b)]">
                          ${this.msg['intent.jobCostWorkspace.viewJobCostSummary.list.column.clientName.label']}:
                        </span>
                        ${data.clientName ?? '—'}
                      </p>
                    </div>
                    <div class="flex flex-wrap items-center gap-3">
                      <span
                        class="inline-flex items-center rounded-md px-3 py-1 text-sm font-medium bg-[var(--status-neutral-bg,#f1f5f9)] text-[var(--status-neutral-text,#334155)]"
                      >
                        <span class="mr-1 text-[var(--text-muted,#64748b)]">
                          ${this.msg['intent.jobCostWorkspace.viewJobCostSummary.list.column.status.label']}:
                        </span>
                        ${data.status ?? '—'}
                      </span>
                      <div
                        class="rounded-md border border-[var(--border-subtle,#e2e8f0)] bg-[var(--surface-alt-bg,#f8fafc)] px-3 py-2 text-sm"
                      >
                        <span class="text-[var(--text-muted,#64748b)]">
                          ${this.msg['intent.jobCostWorkspace.viewJobCostSummary.list.column.startDate.label']}
                        </span>
                        <span class="mx-1">${formatDate(data.startDate)}</span>
                        <span class="text-[var(--text-muted,#64748b)]">–</span>
                        <span class="mx-1 text-[var(--text-muted,#64748b)]">
                          ${this.msg['intent.jobCostWorkspace.viewJobCostSummary.list.column.endDate.label']}
                        </span>
                        <span>${formatDate(data.endDate)}</span>
                      </div>
                    </div>
                  </div>
                </section>

                <!-- 2. Budget vs total cost variance (decisive) -->
                <section class="space-y-3">
                  <h2 class="text-lg font-semibold text-[var(--text-strong,#020617)]">
                    ${this.msg['section.jobCostWorkspace.sec-cost-summary.title']}
                  </h2>
                  <div class="grid grid-cols-1 gap-4 sm:grid-cols-3">
                    <div
                      class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-4"
                    >
                      <p class="text-xs uppercase tracking-wide text-[var(--text-muted,#64748b)]">
                        ${this.msg['intent.jobCostWorkspace.viewJobCostSummary.list.column.budget.label']}
                      </p>
                      <p class="mt-2 text-2xl font-semibold text-[var(--text-strong,#020617)]">
                        ${formatMoney(data.budget)}
                      </p>
                    </div>
                    <div
                      class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-4"
                    >
                      <p class="text-xs uppercase tracking-wide text-[var(--text-muted,#64748b)]">
                        ${this.msg['intent.jobCostWorkspace.viewJobCostSummary.list.column.totalCost.label']}
                      </p>
                      <p class="mt-2 text-2xl font-semibold text-[var(--text-strong,#020617)]">
                        ${formatMoney(data.totalCost)}
                      </p>
                    </div>
                    <div
                      class="rounded-lg border p-4 ${isOverBudget
                        ? 'border-[var(--border-default,#e2e8f0)] bg-[var(--status-error-bg,#fef2f2)]'
                        : 'border-[var(--border-default,#e2e8f0)] bg-[var(--status-success-bg,#f0fdf4)]'}"
                    >
                      <p
                        class="text-xs uppercase tracking-wide ${isOverBudget
                          ? 'text-[var(--status-error-text,#991b1b)]'
                          : 'text-[var(--status-success-text,#166534)]'}"
                      >
                        ${this.msg['intent.jobCostWorkspace.viewJobCostSummary.list.column.budgetVariance.label']}
                      </p>
                      <p
                        class="mt-2 text-2xl font-semibold ${isOverBudget
                          ? 'text-[var(--status-error-text,#991b1b)]'
                          : 'text-[var(--status-success-text,#166534)]'}"
                      >
                        ${formatMoney(data.budgetVariance)}
                      </p>
                    </div>
                  </div>
                </section>

                <!-- 3. Cost breakdown -->
                <section
                  class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-5"
                >
                  <h3 class="mb-4 text-base font-semibold text-[var(--text-strong,#020617)]">
                    ${this.msg['intent.jobCostWorkspace.viewJobCostSummary.list.title']}
                  </h3>
                  <div class="grid grid-cols-1 gap-4 sm:grid-cols-3">
                    <div
                      class="rounded-lg border border-[var(--border-subtle,#e2e8f0)] bg-[var(--surface-alt-bg,#f8fafc)] p-4"
                    >
                      <p class="text-xs uppercase tracking-wide text-[var(--text-muted,#64748b)]">
                        ${this.msg['intent.jobCostWorkspace.viewJobCostSummary.list.column.laborCost.label']}
                      </p>
                      <p class="mt-2 text-xl font-semibold text-[var(--text-default,#0f172a)]">
                        ${formatMoney(data.laborCost)}
                      </p>
                    </div>
                    <div
                      class="rounded-lg border border-[var(--border-subtle,#e2e8f0)] bg-[var(--surface-alt-bg,#f8fafc)] p-4"
                    >
                      <p class="text-xs uppercase tracking-wide text-[var(--text-muted,#64748b)]">
                        ${this.msg['intent.jobCostWorkspace.viewJobCostSummary.list.column.materialCost.label']}
                      </p>
                      <p class="mt-2 text-xl font-semibold text-[var(--text-default,#0f172a)]">
                        ${formatMoney(data.materialCost)}
                      </p>
                    </div>
                    <div
                      class="rounded-lg border border-[var(--border-subtle,#e2e8f0)] bg-[var(--surface-alt-bg,#f8fafc)] p-4"
                    >
                      <p class="text-xs uppercase tracking-wide text-[var(--text-muted,#64748b)]">
                        ${this.msg['intent.jobCostWorkspace.viewJobCostSummary.list.column.changeOrderCost.label']}
                      </p>
                      <p class="mt-2 text-xl font-semibold text-[var(--text-default,#0f172a)]">
                        ${formatMoney(data.changeOrderCost)}
                      </p>
                    </div>
                  </div>
                </section>

                ${isSuccess
                  ? html`
                      <p class="text-sm text-[var(--text-muted,#64748b)]" role="status">
                        ${this.msg['section.jobCostWorkspace.sec-costSummary.title']}
                      </p>
                    `
                  : nothing}
              `
            : nothing}
        </div>
      </div>
    `;
  }
}
