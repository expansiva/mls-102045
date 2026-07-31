/// <mls fileReference="_102045_/l2/buildFlowFsm/web/desktop/page31/jobCostWorkspace.ts" enhancement="_102020_/l2/enhancementAura"/>

import { html, nothing } from 'lit';
import { customElement } from 'lit/decorators.js';
import { BuildFlowFsmJobCostWorkspaceBase } from '/_102045_/l2/buildFlowFsm/web/shared/jobCostWorkspace.js';

@customElement('build-flow-fsm--web--desktop--page31--job-cost-workspace-102045')
export class BuildFlowFsmDesktopPage31JobCostWorkspacePage extends BuildFlowFsmJobCostWorkspaceBase {
  render() {
    const data = this.viewJobCostSummaryData;
    const isLoading = this.viewJobCostSummaryState === 'loading';
    const isError = this.viewJobCostSummaryState === 'error';
    const isSuccess = this.viewJobCostSummaryState === 'success';

    const formatMoney = (value: unknown): string => {
      if (value === null || value === undefined || value === '') return '—';
      const n = typeof value === 'number' ? value : Number(value);
      if (Number.isFinite(n)) {
        return n.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
      }
      return String(value);
    };

    const formatDate = (value: unknown): string => {
      if (value === null || value === undefined || value === '') return '—';
      return String(value);
    };

    const display = (value: unknown): string => {
      if (value === null || value === undefined || value === '') return '—';
      return String(value);
    };

    return html`
      <div class="min-h-full bg-[var(--page-bg,#f8fafc)] text-[var(--text-default,#0f172a)] p-6 space-y-6">
        <header class="space-y-1">
          <h1 class="text-2xl font-semibold text-[var(--text-strong,#0f172a)]">
            ${this.msg['section.jobCostWorkspace.sec-costSummary.title']}
          </h1>
        </header>

        <section class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] shadow-sm">
          <div class="flex flex-wrap items-center justify-between gap-3 border-b border-[var(--border-subtle,#e2e8f0)] px-4 py-3">
            <h2 class="text-lg font-medium text-[var(--text-strong,#0f172a)]">
              ${this.msg['organism.jobCostWorkspace.viewJobCostSummary.title']}
            </h2>
            <button
              type="button"
              class="inline-flex items-center rounded-md px-4 py-2 text-sm font-medium bg-[var(--button-secondary-bg,#f1f5f9)] text-[var(--button-secondary-text,#0f172a)] border border-[var(--button-secondary-border,#e2e8f0)] disabled:opacity-60"
              ?disabled=${isLoading}
              @click=${this.handleViewJobCostSummaryClick}
            >
              ${isLoading
                ? this.msg['intent.jobCostWorkspace.viewJobCostSummary.list.title']
                : this.msg['intent.jobCostWorkspace.viewJobCostSummary.list.title']}
            </button>
          </div>

          <div class="p-4 space-y-4">
            ${isLoading
              ? html`
                  <div class="animate-pulse space-y-3" aria-busy="true">
                    <div class="h-4 w-1/3 rounded bg-[var(--surface-alt-bg,#f1f5f9)]"></div>
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
                      <div class="h-16 rounded bg-[var(--surface-alt-bg,#f1f5f9)]"></div>
                      <div class="h-16 rounded bg-[var(--surface-alt-bg,#f1f5f9)]"></div>
                      <div class="h-16 rounded bg-[var(--surface-alt-bg,#f1f5f9)]"></div>
                    </div>
                    <div class="h-32 rounded bg-[var(--surface-alt-bg,#f1f5f9)]"></div>
                  </div>
                `
              : nothing}

            ${isError
              ? html`
                  <div
                    class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--status-error-bg,#fef2f2)] text-[var(--status-error-text,#991b1b)] px-3 py-2 text-sm"
                    role="alert"
                  >
                    ${this.msg['intent.jobCostWorkspace.viewJobCostSummary.list.empty']}
                  </div>
                `
              : nothing}

            ${!isLoading && !data
              ? html`
                  <p class="text-sm text-[var(--text-muted,#64748b)]">
                    ${this.msg['intent.jobCostWorkspace.viewJobCostSummary.list.empty']}
                  </p>
                `
              : nothing}

            ${!isLoading && data
              ? html`
                  <div class="space-y-4">
                    <h3 class="text-base font-medium text-[var(--text-strong,#0f172a)]">
                      ${this.msg['intent.jobCostWorkspace.viewJobCostSummary.list.title']}
                    </h3>

                    <div class="grid grid-cols-2 md:grid-cols-4 gap-3">
                      <div class="rounded-md border border-[var(--border-subtle,#e2e8f0)] bg-[var(--surface-alt-bg,#f8fafc)] p-3">
                        <div class="text-xs text-[var(--text-muted,#64748b)]">
                          ${this.msg['intent.jobCostWorkspace.viewJobCostSummary.list.column.totalCost.label']}
                        </div>
                        <div class="mt-1 text-lg font-semibold text-[var(--text-strong,#0f172a)]">
                          ${formatMoney((data as { totalCost?: unknown }).totalCost)}
                        </div>
                      </div>
                      <div class="rounded-md border border-[var(--border-subtle,#e2e8f0)] bg-[var(--surface-alt-bg,#f8fafc)] p-3">
                        <div class="text-xs text-[var(--text-muted,#64748b)]">
                          ${this.msg['intent.jobCostWorkspace.viewJobCostSummary.list.column.budget.label']}
                        </div>
                        <div class="mt-1 text-lg font-semibold text-[var(--text-strong,#0f172a)]">
                          ${formatMoney((data as { budget?: unknown }).budget)}
                        </div>
                      </div>
                      <div class="rounded-md border border-[var(--border-subtle,#e2e8f0)] bg-[var(--surface-alt-bg,#f8fafc)] p-3">
                        <div class="text-xs text-[var(--text-muted,#64748b)]">
                          ${this.msg['intent.jobCostWorkspace.viewJobCostSummary.list.column.budgetVariance.label']}
                        </div>
                        <div class="mt-1 text-lg font-semibold text-[var(--text-strong,#0f172a)]">
                          ${formatMoney((data as { budgetVariance?: unknown }).budgetVariance)}
                        </div>
                      </div>
                      <div class="rounded-md border border-[var(--border-subtle,#e2e8f0)] bg-[var(--surface-alt-bg,#f8fafc)] p-3">
                        <div class="text-xs text-[var(--text-muted,#64748b)]">
                          ${this.msg['intent.jobCostWorkspace.viewJobCostSummary.list.column.status.label']}
                        </div>
                        <div class="mt-1 text-lg font-semibold text-[var(--text-strong,#0f172a)]">
                          ${display((data as { status?: unknown }).status)}
                        </div>
                      </div>
                    </div>

                    <dl class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-3 text-sm">
                      <div>
                        <dt class="text-[var(--text-muted,#64748b)]">
                          ${this.msg['intent.jobCostWorkspace.viewJobCostSummary.list.column.projectId.label']}
                        </dt>
                        <dd class="font-medium text-[var(--text-default,#0f172a)]">
                          ${display((data as { projectId?: unknown }).projectId ?? this.viewJobCostSummaryProjectId)}
                        </dd>
                      </div>
                      <div>
                        <dt class="text-[var(--text-muted,#64748b)]">
                          ${this.msg['intent.jobCostWorkspace.viewJobCostSummary.list.column.name.label']}
                        </dt>
                        <dd class="font-medium text-[var(--text-default,#0f172a)]">
                          ${display((data as { name?: unknown }).name)}
                        </dd>
                      </div>
                      <div>
                        <dt class="text-[var(--text-muted,#64748b)]">
                          ${this.msg['intent.jobCostWorkspace.viewJobCostSummary.list.column.clientId.label']}
                        </dt>
                        <dd class="font-medium text-[var(--text-default,#0f172a)]">
                          ${display((data as { clientId?: unknown }).clientId)}
                        </dd>
                      </div>
                      <div>
                        <dt class="text-[var(--text-muted,#64748b)]">
                          ${this.msg['intent.jobCostWorkspace.viewJobCostSummary.list.column.clientName.label']}
                        </dt>
                        <dd class="font-medium text-[var(--text-default,#0f172a)]">
                          ${display((data as { clientName?: unknown }).clientName)}
                        </dd>
                      </div>
                      <div>
                        <dt class="text-[var(--text-muted,#64748b)]">
                          ${this.msg['intent.jobCostWorkspace.viewJobCostSummary.list.column.startDate.label']}
                        </dt>
                        <dd class="font-medium text-[var(--text-default,#0f172a)]">
                          ${formatDate((data as { startDate?: unknown }).startDate)}
                        </dd>
                      </div>
                      <div>
                        <dt class="text-[var(--text-muted,#64748b)]">
                          ${this.msg['intent.jobCostWorkspace.viewJobCostSummary.list.column.endDate.label']}
                        </dt>
                        <dd class="font-medium text-[var(--text-default,#0f172a)]">
                          ${formatDate((data as { endDate?: unknown }).endDate)}
                        </dd>
                      </div>
                      <div>
                        <dt class="text-[var(--text-muted,#64748b)]">
                          ${this.msg['intent.jobCostWorkspace.viewJobCostSummary.list.column.laborCost.label']}
                        </dt>
                        <dd class="font-medium text-[var(--text-default,#0f172a)]">
                          ${formatMoney((data as { laborCost?: unknown }).laborCost)}
                        </dd>
                      </div>
                      <div>
                        <dt class="text-[var(--text-muted,#64748b)]">
                          ${this.msg['intent.jobCostWorkspace.viewJobCostSummary.list.column.materialCost.label']}
                        </dt>
                        <dd class="font-medium text-[var(--text-default,#0f172a)]">
                          ${formatMoney((data as { materialCost?: unknown }).materialCost)}
                        </dd>
                      </div>
                      <div>
                        <dt class="text-[var(--text-muted,#64748b)]">
                          ${this.msg['intent.jobCostWorkspace.viewJobCostSummary.list.column.changeOrderCost.label']}
                        </dt>
                        <dd class="font-medium text-[var(--text-default,#0f172a)]">
                          ${formatMoney((data as { changeOrderCost?: unknown }).changeOrderCost)}
                        </dd>
                      </div>
                    </dl>
                  </div>
                `
              : nothing}

            ${isSuccess && data
              ? html`
                  <div
                    class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--status-success-bg,#f0fdf4)] text-[var(--status-success-text,#166534)] px-3 py-2 text-sm"
                    role="status"
                  >
                    ${this.msg['intent.jobCostWorkspace.viewJobCostSummary.list.title']}
                  </div>
                `
              : nothing}
          </div>
        </section>
      </div>
    `;
  }
}
