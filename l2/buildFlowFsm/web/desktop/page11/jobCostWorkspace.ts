/// <mls fileReference="_102045_/l2/buildFlowFsm/web/desktop/page11/jobCostWorkspace.ts" enhancement="_102020_/l2/enhancementAura"/>

import { html, nothing } from 'lit';
import { customElement } from 'lit/decorators.js';
import { BuildFlowFsmJobCostWorkspaceBase } from '/_102045_/l2/buildFlowFsm/web/shared/jobCostWorkspace.js';

@customElement('build-flow-fsm--web--desktop--page11--job-cost-workspace-102045')
export class BuildFlowFsmDesktopPage11JobCostWorkspacePage extends BuildFlowFsmJobCostWorkspaceBase {
  render() {
    const data = this.viewJobCostSummaryData;
    const isLoading = this.viewJobCostSummaryState === 'loading';
    const isError = this.viewJobCostSummaryState === 'error';
    const isSuccess = this.viewJobCostSummaryState === 'success';

    return html`
      <div class="min-h-full bg-[var(--page-bg,#f8fafc)] text-[var(--text-default,#0f172a)]">
        <div class="max-w-6xl mx-auto px-4 py-6 space-y-6">
          <header class="flex flex-wrap items-center justify-between gap-3">
            <h1 class="text-2xl font-semibold text-[var(--text-strong,#0f172a)]">
              ${this.msg['section.jobCostWorkspace.sec-costSummary.title']}
            </h1>
            <button
              type="button"
              class="inline-flex items-center gap-2 rounded-lg px-4 py-2 bg-[var(--button-primary-bg,#2563eb)] text-[var(--button-primary-text,#ffffff)] disabled:opacity-60"
              ?disabled=${isLoading}
              @click=${this.handleViewJobCostSummaryClick}
            >
              ${isLoading
                ? html`<span class="inline-block h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent"></span>`
                : nothing}
              <span>${this.msg['intent.jobCostWorkspace.viewJobCostSummary.list.title']}</span>
            </button>
          </header>

          ${isSuccess
            ? html`
                <div
                  class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--status-success-bg,#dcfce7)] text-[var(--status-success-text,#166534)] px-4 py-3 flex items-start justify-between gap-3"
                  role="status"
                >
                  <span>${this.msg['intent.jobCostWorkspace.viewJobCostSummary.list.title']}</span>
                  <button
                    type="button"
                    class="text-sm underline"
                    @click=${this.handleViewJobCostSummaryClick}
                  >
                    ×
                  </button>
                </div>
              `
            : nothing}

          ${isError
            ? html`
                <div
                  class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--status-error-bg,#fee2e2)] text-[var(--status-error-text,#991b1b)] px-4 py-3 flex items-start justify-between gap-3"
                  role="alert"
                >
                  <span>${this.msg['intent.jobCostWorkspace.viewJobCostSummary.list.empty']}</span>
                  <button
                    type="button"
                    class="text-sm underline"
                    @click=${this.handleViewJobCostSummaryClick}
                  >
                    ×
                  </button>
                </div>
              `
            : nothing}

          <section class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] shadow-sm">
            <div class="px-4 py-3 border-b border-[var(--border-subtle,#e2e8f0)]">
              <h2 class="text-lg font-medium text-[var(--text-strong,#0f172a)]">
                ${this.msg['organism.jobCostWorkspace.viewJobCostSummary.title']}
              </h2>
            </div>

            <div class="p-4 space-y-6">
              ${isLoading
                ? html`
                    <div class="space-y-3 animate-pulse" aria-busy="true">
                      <div class="h-4 w-1/3 rounded bg-[var(--surface-alt-bg,#f1f5f9)]"></div>
                      <div class="h-20 rounded bg-[var(--surface-alt-bg,#f1f5f9)]"></div>
                      <div class="h-24 rounded bg-[var(--surface-alt-bg,#f1f5f9)]"></div>
                    </div>
                  `
                : data
                  ? html`
                      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        <div class="rounded-lg border border-[var(--border-subtle,#e2e8f0)] bg-[var(--surface-alt-bg,#f8fafc)] p-4 space-y-3">
                          <h3 class="text-sm font-semibold uppercase tracking-wide text-[var(--text-muted,#64748b)]">
                            ${this.msg['organism.jobCostWorkspace.viewJobCostSummary.title']}
                          </h3>
                          <dl class="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-3 text-sm">
                            <div>
                              <dt class="text-[var(--text-muted,#64748b)]">
                                ${this.msg['intent.jobCostWorkspace.viewJobCostSummary.list.column.projectId.label']}
                              </dt>
                              <dd class="font-medium text-[var(--text-default,#0f172a)]">${data.projectId ?? ''}</dd>
                            </div>
                            <div>
                              <dt class="text-[var(--text-muted,#64748b)]">
                                ${this.msg['intent.jobCostWorkspace.viewJobCostSummary.list.column.name.label']}
                              </dt>
                              <dd class="font-medium text-[var(--text-default,#0f172a)]">${data.name ?? ''}</dd>
                            </div>
                            <div>
                              <dt class="text-[var(--text-muted,#64748b)]">
                                ${this.msg['intent.jobCostWorkspace.viewJobCostSummary.list.column.clientId.label']}
                              </dt>
                              <dd class="font-medium text-[var(--text-default,#0f172a)]">${data.clientId ?? ''}</dd>
                            </div>
                            <div>
                              <dt class="text-[var(--text-muted,#64748b)]">
                                ${this.msg['intent.jobCostWorkspace.viewJobCostSummary.list.column.clientName.label']}
                              </dt>
                              <dd class="font-medium text-[var(--text-default,#0f172a)]">${data.clientName ?? ''}</dd>
                            </div>
                            <div>
                              <dt class="text-[var(--text-muted,#64748b)]">
                                ${this.msg['intent.jobCostWorkspace.viewJobCostSummary.list.column.status.label']}
                              </dt>
                              <dd>
                                <span
                                  class="inline-flex items-center rounded-md px-2 py-0.5 text-xs font-medium bg-[var(--status-neutral-bg,#f1f5f9)] text-[var(--status-neutral-text,#334155)]"
                                >
                                  ${data.status ?? ''}
                                </span>
                              </dd>
                            </div>
                            <div>
                              <dt class="text-[var(--text-muted,#64748b)]">
                                ${this.msg['intent.jobCostWorkspace.viewJobCostSummary.list.column.startDate.label']}
                              </dt>
                              <dd class="font-medium text-[var(--text-default,#0f172a)]">${data.startDate ?? ''}</dd>
                            </div>
                            <div>
                              <dt class="text-[var(--text-muted,#64748b)]">
                                ${this.msg['intent.jobCostWorkspace.viewJobCostSummary.list.column.endDate.label']}
                              </dt>
                              <dd class="font-medium text-[var(--text-default,#0f172a)]">${data.endDate ?? ''}</dd>
                            </div>
                          </dl>
                        </div>

                        <div class="rounded-lg border border-[var(--border-subtle,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-4 space-y-3">
                          <h3 class="text-sm font-semibold uppercase tracking-wide text-[var(--text-muted,#64748b)]">
                            ${this.msg['intent.jobCostWorkspace.viewJobCostSummary.list.title']}
                          </h3>
                          <dl class="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-3 text-sm">
                            <div>
                              <dt class="text-[var(--text-muted,#64748b)]">
                                ${this.msg['intent.jobCostWorkspace.viewJobCostSummary.list.column.budget.label']}
                              </dt>
                              <dd class="font-medium text-[var(--text-default,#0f172a)]">${data.budget ?? ''}</dd>
                            </div>
                            <div>
                              <dt class="text-[var(--text-muted,#64748b)]">
                                ${this.msg['intent.jobCostWorkspace.viewJobCostSummary.list.column.laborCost.label']}
                              </dt>
                              <dd class="font-medium text-[var(--text-default,#0f172a)]">${data.laborCost ?? ''}</dd>
                            </div>
                            <div>
                              <dt class="text-[var(--text-muted,#64748b)]">
                                ${this.msg['intent.jobCostWorkspace.viewJobCostSummary.list.column.materialCost.label']}
                              </dt>
                              <dd class="font-medium text-[var(--text-default,#0f172a)]">${data.materialCost ?? ''}</dd>
                            </div>
                            <div>
                              <dt class="text-[var(--text-muted,#64748b)]">
                                ${this.msg['intent.jobCostWorkspace.viewJobCostSummary.list.column.changeOrderCost.label']}
                              </dt>
                              <dd class="font-medium text-[var(--text-default,#0f172a)]">${data.changeOrderCost ?? ''}</dd>
                            </div>
                            <div>
                              <dt class="text-[var(--text-muted,#64748b)]">
                                ${this.msg['intent.jobCostWorkspace.viewJobCostSummary.list.column.totalCost.label']}
                              </dt>
                              <dd class="font-semibold text-[var(--text-strong,#0f172a)]">${data.totalCost ?? ''}</dd>
                            </div>
                            <div>
                              <dt class="text-[var(--text-muted,#64748b)]">
                                ${this.msg['intent.jobCostWorkspace.viewJobCostSummary.list.column.budgetVariance.label']}
                              </dt>
                              <dd class="font-semibold text-[var(--text-strong,#0f172a)]">${data.budgetVariance ?? ''}</dd>
                            </div>
                          </dl>
                        </div>
                      </div>
                    `
                  : html`
                      <p class="text-sm text-[var(--text-muted,#64748b)] py-6 text-center">
                        ${this.msg['intent.jobCostWorkspace.viewJobCostSummary.list.empty']}
                      </p>
                    `}
            </div>
          </section>
        </div>
      </div>
    `;
  }
}
