/// <mls fileReference="_102045_/l2/buildFlowFsm/web/desktop/page11/dashboardWorkspace.ts" enhancement="_102020_/l2/enhancementAura"/>

import { html, nothing } from 'lit';
import { customElement } from 'lit/decorators.js';
import { BuildFlowFsmDashboardWorkspaceBase } from '/_102045_/l2/buildFlowFsm/web/shared/dashboardWorkspace.js';
import type {
  GetDashboardSummaryOutput,
  GetProjectListOutput,
} from '/_102045_/l2/buildFlowFsm/web/shared/dashboardWorkspace.js';

type DashboardSummaryRow = NonNullable<GetDashboardSummaryOutput['projects']>[number];
type ProjectListRow = NonNullable<GetProjectListOutput['projects']>[number];

@customElement('build-flow-fsm--web--desktop--page11--dashboard-workspace-102045')
export class BuildFlowFsmDesktopPage11DashboardWorkspacePage extends BuildFlowFsmDashboardWorkspaceBase {
  render() {
    const summaryLoading = this.getDashboardSummaryState === 'loading';
    const summaryData = this.getDashboardSummaryData;
    const summaryProjects: DashboardSummaryRow[] = summaryData?.projects ?? [];
    const summaryTotal = summaryData?.total ?? 0;

    const projectListLoading = this.getProjectListState === 'loading';
    const projectListData = this.getProjectListData;
    const projectRows: ProjectListRow[] = projectListData?.projects ?? [];
    const projectTotal = projectListData?.total ?? 0;

    const formatValue = (value: unknown): string => {
      if (value === null || value === undefined) return '';
      return String(value);
    };

    const rowRecord = (row: object): Record<string, unknown> => row as Record<string, unknown>;

    return html`
      <div class="min-h-full bg-[var(--surface-bg,#ffffff)] text-[var(--text-default,#0f172a)]">
        <div class="max-w-6xl mx-auto px-4 py-6 space-y-6">
          <header class="space-y-1">
            <h1 class="text-2xl font-semibold text-[var(--text-strong,#0f172a)]">
              ${this.msg['section.dashboardWorkspace.kpiAndBudgetSection.title']}
            </h1>
          </header>

          <section class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-4 space-y-4 shadow-sm">
            <h2 class="text-lg font-semibold text-[var(--text-strong,#0f172a)]">
              ${this.msg['section.dashboardWorkspace.kpiAndBudgetSection.title']}
            </h2>

            <div class="rounded-lg border border-[var(--border-subtle,#e2e8f0)] bg-[var(--surface-alt-bg,#f8fafc)] p-3 space-y-3">
              <div class="text-sm font-medium text-[var(--text-muted,#64748b)]">
                ${this.msg['organism.dashboardWorkspace.inline-row-command10.title']}
              </div>
              <div class="flex flex-wrap items-end gap-3">
                <label class="flex flex-col gap-1 text-sm min-w-[8rem]">
                  <span class="text-[var(--text-muted,#64748b)]">${this.msg['intent.dashboardWorkspace.getDashboardSummary.list.filter.status.label']}</span>
                  <input
                    class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-[var(--text-default,#0f172a)]"
                    .value=${this.getDashboardSummaryStatus ?? ''}
                    @input=${(e: Event) => this.handleGetDashboardSummaryStatusChange(e)}
                  />
                </label>
                <label class="flex flex-col gap-1 text-sm min-w-[6rem]">
                  <span class="text-[var(--text-muted,#64748b)]">${this.msg['intent.dashboardWorkspace.getDashboardSummary.list.filter.page.label']}</span>
                  <input
                    type="number"
                    class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-[var(--text-default,#0f172a)]"
                    .value=${this.getDashboardSummaryPage ?? ''}
                    @input=${(e: Event) => this.handleGetDashboardSummaryPageChange(e)}
                  />
                </label>
                <label class="flex flex-col gap-1 text-sm min-w-[6rem]">
                  <span class="text-[var(--text-muted,#64748b)]">${this.msg['intent.dashboardWorkspace.getDashboardSummary.list.filter.pageSize.label']}</span>
                  <input
                    type="number"
                    class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-[var(--text-default,#0f172a)]"
                    .value=${this.getDashboardSummaryPageSize ?? ''}
                    @input=${(e: Event) => this.handleGetDashboardSummaryPageSizeChange(e)}
                  />
                </label>
                <button
                  type="button"
                  class="inline-flex items-center gap-2 rounded-md px-4 py-2 text-sm font-medium bg-[var(--button-primary-bg,#2563eb)] text-[var(--button-primary-text,#ffffff)] disabled:opacity-60"
                  ?disabled=${summaryLoading}
                  @click=${() => this.handleGetDashboardSummaryClick()}
                >
                  ${summaryLoading
                    ? html`<span class="inline-block h-4 w-4 animate-spin rounded-full border-2 border-current border-r-transparent"></span>`
                    : nothing}
                  ${this.msg['organism.dashboardWorkspace.getDashboardSummary.title']}
                </button>
              </div>
            </div>

            <div class="space-y-3">
              <div class="flex flex-wrap items-center justify-between gap-2">
                <h3 class="text-base font-medium text-[var(--text-strong,#0f172a)]">
                  ${this.msg['intent.dashboardWorkspace.getDashboardSummary.list.title']}
                </h3>
                <span class="text-sm text-[var(--text-muted,#64748b)]">
                  ${this.msg['intent.dashboardWorkspace.getDashboardSummary.list.column.total.label']}: ${formatValue(summaryTotal)}
                </span>
              </div>

              ${summaryLoading
                ? html`
                    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3" aria-busy="true">
                      ${[0, 1, 2].map(
                        () => html`
                          <div class="h-28 rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-alt-bg,#f8fafc)] animate-pulse"></div>
                        `,
                      )}
                    </div>
                  `
                : summaryProjects.length === 0
                  ? html`
                      <p class="text-sm text-[var(--text-muted,#64748b)] py-6">
                        ${this.msg['intent.dashboardWorkspace.getDashboardSummary.list.empty']}
                      </p>
                    `
                  : html`
                      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                        ${summaryProjects.map((item: DashboardSummaryRow) => {
                          const r = rowRecord(item as object);
                          const name = formatValue(r['name'] ?? r['projectName'] ?? r['title'] ?? '');
                          const status = formatValue(r['status'] ?? '');
                          const budget = formatValue(r['budget'] ?? r['budgetAmount'] ?? '');
                          const actualCost = formatValue(r['actualCost'] ?? r['actual'] ?? '');
                          const variance = formatValue(r['variance'] ?? r['budgetVariance'] ?? '');
                          const overdue = formatValue(r['overdueTasks'] ?? r['tasksOverdue'] ?? r['overdueCount'] ?? '');
                          const urgent = formatValue(r['urgentTasks'] ?? r['tasksUrgent'] ?? r['urgentCount'] ?? '');
                          return html`
                            <article class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-alt-bg,#f8fafc)] p-3 space-y-2">
                              <div class="flex items-start justify-between gap-2">
                                <h4 class="font-medium text-[var(--text-strong,#0f172a)]">${name || this.msg['intent.dashboardWorkspace.getDashboardSummary.list.column.projects.label']}</h4>
                                ${status
                                  ? html`<span class="inline-flex rounded-full px-2 py-0.5 text-xs bg-[var(--status-neutral-bg,#e2e8f0)] text-[var(--status-neutral-text,#334155)]">${status}</span>`
                                  : nothing}
                              </div>
                              <dl class="grid grid-cols-2 gap-x-2 gap-y-1 text-sm">
                                ${budget
                                  ? html`<div><dt class="text-[var(--text-muted,#64748b)]">Budget</dt><dd class="font-medium">${budget}</dd></div>`
                                  : nothing}
                                ${actualCost
                                  ? html`<div><dt class="text-[var(--text-muted,#64748b)]">Actual</dt><dd class="font-medium">${actualCost}</dd></div>`
                                  : nothing}
                                ${variance
                                  ? html`<div><dt class="text-[var(--text-muted,#64748b)]">Variance</dt><dd class="font-medium">${variance}</dd></div>`
                                  : nothing}
                                ${overdue
                                  ? html`<div><dt class="text-[var(--text-muted,#64748b)]">Overdue</dt><dd class="font-medium text-[var(--status-error-text,#b91c1c)]">${overdue}</dd></div>`
                                  : nothing}
                                ${urgent
                                  ? html`<div><dt class="text-[var(--text-muted,#64748b)]">Urgent</dt><dd class="font-medium text-[var(--status-warning-text,#b45309)]">${urgent}</dd></div>`
                                  : nothing}
                              </dl>
                            </article>
                          `;
                        })}
                      </div>
                    `}
            </div>
          </section>

          <section class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-4 space-y-4 shadow-sm">
            <h2 class="text-lg font-semibold text-[var(--text-strong,#0f172a)]">
              ${this.msg['section.dashboardWorkspace.projectListSection.title']}
            </h2>

            <div class="rounded-lg border border-[var(--border-subtle,#e2e8f0)] bg-[var(--surface-alt-bg,#f8fafc)] p-3 space-y-3">
              <div class="text-sm font-medium text-[var(--text-muted,#64748b)]">
                ${this.msg['organism.dashboardWorkspace.inline-row-command10.title']}
              </div>
              <div class="flex flex-wrap items-end gap-3">
                <label class="flex flex-col gap-1 text-sm min-w-[8rem]">
                  <span class="text-[var(--text-muted,#64748b)]">${this.msg['intent.dashboardWorkspace.getProjectList.list.filter.status.label']}</span>
                  <input
                    class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-[var(--text-default,#0f172a)]"
                    .value=${this.getProjectListStatus ?? ''}
                    @input=${(e: Event) => this.handleGetProjectListStatusChange(e)}
                  />
                </label>
                <label class="flex flex-col gap-1 text-sm min-w-[6rem]">
                  <span class="text-[var(--text-muted,#64748b)]">${this.msg['intent.dashboardWorkspace.getProjectList.list.filter.page.label']}</span>
                  <input
                    type="number"
                    class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-[var(--text-default,#0f172a)]"
                    .value=${this.getProjectListPage ?? ''}
                    @input=${(e: Event) => this.handleGetProjectListPageChange(e)}
                  />
                </label>
                <label class="flex flex-col gap-1 text-sm min-w-[6rem]">
                  <span class="text-[var(--text-muted,#64748b)]">${this.msg['intent.dashboardWorkspace.getProjectList.list.filter.pageSize.label']}</span>
                  <input
                    type="number"
                    class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-[var(--text-default,#0f172a)]"
                    .value=${this.getProjectListPageSize ?? ''}
                    @input=${(e: Event) => this.handleGetProjectListPageSizeChange(e)}
                  />
                </label>
                <button
                  type="button"
                  class="inline-flex items-center gap-2 rounded-md px-4 py-2 text-sm font-medium bg-[var(--button-primary-bg,#2563eb)] text-[var(--button-primary-text,#ffffff)] disabled:opacity-60"
                  ?disabled=${projectListLoading}
                  @click=${() => this.handleGetProjectListClick()}
                >
                  ${projectListLoading
                    ? html`<span class="inline-block h-4 w-4 animate-spin rounded-full border-2 border-current border-r-transparent"></span>`
                    : nothing}
                  ${this.msg['organism.dashboardWorkspace.getProjectList.title']}
                </button>
              </div>
            </div>

            <div class="space-y-3">
              <div class="flex flex-wrap items-center justify-between gap-2">
                <h3 class="text-base font-medium text-[var(--text-strong,#0f172a)]">
                  ${this.msg['intent.dashboardWorkspace.getProjectList.list.title']}
                </h3>
                <span class="text-sm text-[var(--text-muted,#64748b)]">
                  ${this.msg['intent.dashboardWorkspace.getProjectList.list.column.total.label']}: ${formatValue(projectTotal)}
                </span>
              </div>

              ${projectListLoading
                ? html`
                    <div class="space-y-2" aria-busy="true">
                      ${[0, 1, 2, 3].map(
                        () => html`
                          <div class="h-10 rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-alt-bg,#f8fafc)] animate-pulse"></div>
                        `,
                      )}
                    </div>
                  `
                : projectRows.length === 0
                  ? html`
                      <p class="text-sm text-[var(--text-muted,#64748b)] py-6">
                        ${this.msg['intent.dashboardWorkspace.getProjectList.list.empty']}
                      </p>
                    `
                  : html`
                      <div class="overflow-x-auto rounded-lg border border-[var(--border-default,#e2e8f0)]">
                        <table class="min-w-full text-sm text-left">
                          <thead class="bg-[var(--surface-alt-bg,#f8fafc)] text-[var(--text-muted,#64748b)]">
                            <tr>
                              <th class="px-3 py-2 font-medium">${this.msg['intent.dashboardWorkspace.getProjectList.list.column.projects.label']}</th>
                              <th class="px-3 py-2 font-medium">Client</th>
                              <th class="px-3 py-2 font-medium">Site</th>
                              <th class="px-3 py-2 font-medium">Budget</th>
                              <th class="px-3 py-2 font-medium">Schedule</th>
                              <th class="px-3 py-2 font-medium">Status</th>
                            </tr>
                          </thead>
                          <tbody>
                            ${projectRows.map((item: ProjectListRow) => {
                              const r = rowRecord(item as object);
                              const name = formatValue(r['name'] ?? r['projectName'] ?? r['title'] ?? '');
                              const client = formatValue(r['client'] ?? r['clientName'] ?? '');
                              const site = formatValue(r['siteAddress'] ?? r['address'] ?? r['site'] ?? '');
                              const budget = formatValue(r['budget'] ?? r['budgetAmount'] ?? '');
                              const startDate = formatValue(r['startDate'] ?? r['scheduledStart'] ?? '');
                              const endDate = formatValue(r['endDate'] ?? r['scheduledEnd'] ?? '');
                              const schedule =
                                startDate || endDate ? `${startDate}${startDate && endDate ? ' – ' : ''}${endDate}` : '';
                              const status = formatValue(r['status'] ?? '');
                              return html`
                                <tr class="border-t border-[var(--border-subtle,#e2e8f0)]">
                                  <td class="px-3 py-2 font-medium text-[var(--text-strong,#0f172a)]">${name}</td>
                                  <td class="px-3 py-2">${client}</td>
                                  <td class="px-3 py-2">${site}</td>
                                  <td class="px-3 py-2">${budget}</td>
                                  <td class="px-3 py-2">${schedule}</td>
                                  <td class="px-3 py-2">
                                    ${status
                                      ? html`<span class="inline-flex rounded-full px-2 py-0.5 text-xs bg-[var(--status-neutral-bg,#e2e8f0)] text-[var(--status-neutral-text,#334155)]">${status}</span>`
                                      : nothing}
                                  </td>
                                </tr>
                              `;
                            })}
                          </tbody>
                        </table>
                      </div>
                    `}
            </div>
          </section>
        </div>
      </div>
    `;
  }
}
