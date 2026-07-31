/// <mls fileReference="_102045_/l2/buildFlowFsm/web/desktop/page21/dashboardWorkspace.ts" enhancement="_102020_/l2/enhancementAura"/>

import { html, nothing } from 'lit';
import { customElement } from 'lit/decorators.js';
import {
  BuildFlowFsmDashboardWorkspaceBase,
} from '/_102045_/l2/buildFlowFsm/web/shared/dashboardWorkspace.js';
import type {
  GetDashboardSummaryOutput,
  GetProjectListOutput,
} from '/_102045_/l2/buildFlowFsm/web/shared/dashboardWorkspace.js';

type SummaryProject = NonNullable<GetDashboardSummaryOutput['projects']>[number];
type ListProject = NonNullable<GetProjectListOutput['projects']>[number];

@customElement('build-flow-fsm--web--desktop--page21--dashboard-workspace-102045')
export class BuildFlowFsmDesktopPage21DashboardWorkspacePage extends BuildFlowFsmDashboardWorkspaceBase {
  render() {
    const summaryLoading = this.getDashboardSummaryState === 'loading';
    const summaryError = this.getDashboardSummaryState === 'error';
    const listLoading = this.getProjectListState === 'loading';
    const listError = this.getProjectListState === 'error';

    const summaryProjects: SummaryProject[] = Array.isArray(this.getDashboardSummaryData?.projects)
      ? this.getDashboardSummaryData.projects
      : [];
    const summaryTotal =
      typeof this.getDashboardSummaryData?.total === 'number'
        ? this.getDashboardSummaryData.total
        : summaryProjects.length;

    const listProjects: ListProject[] = Array.isArray(this.getProjectListData?.projects)
      ? this.getProjectListData.projects
      : [];
    const listTotal =
      typeof this.getProjectListData?.total === 'number'
        ? this.getProjectListData.total
        : listProjects.length;

    const formatMoney = (value: unknown): string => {
      if (value == null || value === '') return '—';
      const n = typeof value === 'number' ? value : Number(value);
      if (Number.isNaN(n)) return String(value);
      return new Intl.NumberFormat(undefined, {
        style: 'currency',
        currency: 'USD',
        maximumFractionDigits: 0,
      }).format(n);
    };

    const formatDate = (value: unknown): string => {
      if (value == null || value === '') return '—';
      const raw = String(value);
      const d = new Date(raw);
      if (Number.isNaN(d.getTime())) return raw;
      return d.toLocaleDateString();
    };

    const readNum = (item: object, key: string): number => {
      const v = (item as Record<string, unknown>)[key];
      if (typeof v === 'number' && !Number.isNaN(v)) return v;
      if (typeof v === 'string' && v.trim() !== '' && !Number.isNaN(Number(v))) return Number(v);
      return 0;
    };

    const readStr = (item: object, key: string): string => {
      const v = (item as Record<string, unknown>)[key];
      if (v == null) return '';
      return String(v);
    };

    const pickStr = (item: object, keys: string[]): string => {
      for (const k of keys) {
        const s = readStr(item, k);
        if (s) return s;
      }
      return '';
    };

    const pickNum = (item: object, keys: string[]): number => {
      for (const k of keys) {
        if (Object.prototype.hasOwnProperty.call(item, k)) {
          return readNum(item, k);
        }
      }
      return 0;
    };

    let totalBudget = 0;
    let totalActual = 0;
    let totalVariance = 0;
    let overdueTasks = 0;
    let upcomingTasks = 0;
    let activeCount = 0;
    let onHoldCount = 0;

    for (const row of summaryProjects) {
      const item = row as object;
      totalBudget += pickNum(item, ['budget', 'budgetAmount', 'plannedBudget']);
      totalActual += pickNum(item, ['actualCost', 'actual', 'costActual']);
      totalVariance += pickNum(item, ['variance', 'budgetVariance', 'costVariance']);
      overdueTasks += pickNum(item, ['overdueTaskCount', 'overdueTasks', 'tasksOverdue']);
      upcomingTasks += pickNum(item, ['upcomingTaskCount', 'upcomingTasks', 'tasksUpcoming']);
      const st = pickStr(item, ['status', 'projectStatus']).toLowerCase();
      if (st === 'active') activeCount += 1;
      if (st === 'onhold' || st === 'on_hold' || st === 'on-hold') onHoldCount += 1;
    }

    const summaryStatusChips: { value: string; label: string }[] = [
      { value: '', label: 'All' },
      { value: 'active', label: 'Active' },
      { value: 'onHold', label: 'On hold' },
      { value: 'completed', label: 'Completed' },
    ];

    const listStatusChips: { value: string; label: string }[] = [
      { value: '', label: 'All' },
      { value: 'active', label: 'Active' },
      { value: 'onHold', label: 'On hold' },
      { value: 'completed', label: 'Completed' },
    ];

    const statusChipClass = (selected: boolean): string =>
      selected
        ? 'inline-flex items-center justify-center min-h-10 px-4 py-2 rounded-full text-sm font-medium border border-[var(--selected-border,#94a3b8)] bg-[var(--selected-bg,#e2e8f0)] text-[var(--selected-text,#0f172a)]'
        : 'inline-flex items-center justify-center min-h-10 px-4 py-2 rounded-full text-sm font-medium border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] text-[var(--text-default,#0f172a)] hover:bg-[var(--surface-alt-bg,#f8fafc)]';

    const statusBadgeClass = (statusRaw: string): string => {
      const st = statusRaw.toLowerCase();
      if (st === 'active' || st === 'completed' || st === 'done') {
        return 'inline-flex px-2 py-0.5 rounded text-xs font-medium bg-[var(--status-success-bg,#dcfce7)] text-[var(--status-success-text,#166534)]';
      }
      if (st === 'onhold' || st === 'on_hold' || st === 'on-hold' || st === 'warning' || st === 'at_risk') {
        return 'inline-flex px-2 py-0.5 rounded text-xs font-medium bg-[var(--status-warning-bg,#fef3c7)] text-[var(--status-warning-text,#92400e)]';
      }
      if (st === 'cancelled' || st === 'canceled' || st === 'error' || st === 'blocked') {
        return 'inline-flex px-2 py-0.5 rounded text-xs font-medium bg-[var(--status-error-bg,#fee2e2)] text-[var(--status-error-text,#991b1b)]';
      }
      return 'inline-flex px-2 py-0.5 rounded text-xs font-medium bg-[var(--status-neutral-bg,#f1f5f9)] text-[var(--status-neutral-text,#334155)]';
    };

    const varianceClass = (variance: number): string => {
      if (variance > 0) {
        return 'text-[var(--status-error-text,#991b1b)] font-medium';
      }
      if (variance < 0) {
        return 'text-[var(--status-success-text,#166534)] font-medium';
      }
      return 'text-[var(--text-default,#0f172a)]';
    };

    return html`
      <div class="min-h-full w-full bg-[var(--page-bg,#f8fafc)] text-[var(--text-default,#0f172a)] p-4 md:p-6 space-y-6">
        <header class="space-y-1">
          <h1 class="text-2xl font-semibold text-[var(--text-strong,#0f172a)]">
            ${this.msg['section.dashboardWorkspace.kpiAndBudgetSection.title']}
          </h1>
          <p class="text-sm text-[var(--text-muted,#64748b)]">
            ${this.msg['organism.dashboardWorkspace.getDashboardSummary.title']}
          </p>
        </header>

        <!-- KPI & Budget Overview -->
        <section class="space-y-4" aria-label=${this.msg['section.dashboardWorkspace.kpiAndBudgetSection.title']}>
          <div
            class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-4 shadow-[var(--shadow-small,0_1px_2px_rgba(0,0,0,0.05))] space-y-4"
          >
            <div class="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
              <div class="space-y-1">
                <h2 class="text-lg font-semibold text-[var(--text-strong,#0f172a)]">
                  ${this.msg['intent.dashboardWorkspace.getDashboardSummary.list.title']}
                </h2>
                <p class="text-xs text-[var(--text-muted,#64748b)]">
                  ${this.msg['intent.dashboardWorkspace.getDashboardSummary.list.filter.status.label']}
                </p>
              </div>
              <div class="flex flex-wrap gap-2" role="group" aria-label=${this.msg['intent.dashboardWorkspace.getDashboardSummary.list.filter.status.label']}>
                ${summaryStatusChips.map(
                  (chip) => html`
                    <button
                      type="button"
                      class=${statusChipClass(this.getDashboardSummaryStatus === chip.value)}
                      ?disabled=${summaryLoading}
                      @click=${() => {
                        this.setGetDashboardSummaryStatus(chip.value);
                        this.handleGetDashboardSummaryClick();
                      }}
                    >
                      ${chip.label}
                    </button>
                  `,
                )}
              </div>
            </div>

            ${summaryLoading
              ? html`
                  <div class="grid grid-cols-2 md:grid-cols-4 gap-3" aria-busy="true">
                    ${[0, 1, 2, 3].map(
                      () => html`
                        <div
                          class="h-24 rounded-lg bg-[var(--surface-alt-bg,#f1f5f9)] border border-[var(--border-subtle,#e2e8f0)] animate-pulse"
                        ></div>
                      `,
                    )}
                  </div>
                `
              : html`
                  <div class="grid grid-cols-2 lg:grid-cols-4 gap-3">
                    <div
                      class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-alt-bg,#f8fafc)] p-4 space-y-1"
                    >
                      <div class="text-xs uppercase tracking-wide text-[var(--text-muted,#64748b)]">
                        ${this.msg['intent.dashboardWorkspace.getDashboardSummary.list.column.total.label']}
                      </div>
                      <div class="text-2xl font-semibold text-[var(--text-strong,#0f172a)]">${summaryTotal}</div>
                      <div class="text-xs text-[var(--text-muted,#64748b)]">
                        ${activeCount} active · ${onHoldCount} on hold
                      </div>
                    </div>
                    <div
                      class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-alt-bg,#f8fafc)] p-4 space-y-1"
                    >
                      <div class="text-xs uppercase tracking-wide text-[var(--text-muted,#64748b)]">Budget</div>
                      <div class="text-2xl font-semibold text-[var(--text-strong,#0f172a)]">
                        ${formatMoney(totalBudget)}
                      </div>
                      <div class="text-xs text-[var(--text-muted,#64748b)]">Across visible projects</div>
                    </div>
                    <div
                      class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-alt-bg,#f8fafc)] p-4 space-y-1"
                    >
                      <div class="text-xs uppercase tracking-wide text-[var(--text-muted,#64748b)]">Actual cost</div>
                      <div class="text-2xl font-semibold text-[var(--text-strong,#0f172a)]">
                        ${formatMoney(totalActual)}
                      </div>
                      <div class=${`text-xs ${varianceClass(totalVariance)}`}>
                        Variance ${formatMoney(totalVariance)}
                      </div>
                    </div>
                    <div
                      class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-alt-bg,#f8fafc)] p-4 space-y-1"
                    >
                      <div class="text-xs uppercase tracking-wide text-[var(--text-muted,#64748b)]">Task urgency</div>
                      <div class="text-2xl font-semibold text-[var(--text-strong,#0f172a)]">${overdueTasks}</div>
                      <div class="text-xs text-[var(--text-muted,#64748b)]">
                        overdue · ${upcomingTasks} upcoming
                      </div>
                    </div>
                  </div>
                `}

            <div class="flex flex-wrap items-end gap-3 pt-1 border-t border-[var(--border-subtle,#e2e8f0)]">
              <label class="flex flex-col gap-1 text-sm min-w-[6rem]">
                <span class="text-[var(--text-muted,#64748b)]"
                  >${this.msg['intent.dashboardWorkspace.getDashboardSummary.list.filter.page.label']}</span
                >
                <input
                  type="number"
                  min="1"
                  class="min-h-10 rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 text-[var(--text-default,#0f172a)]"
                  .value=${this.getDashboardSummaryPage ?? ''}
                  ?disabled=${summaryLoading}
                  @change=${this.handleGetDashboardSummaryPageChange}
                />
              </label>
              <label class="flex flex-col gap-1 text-sm min-w-[6rem]">
                <span class="text-[var(--text-muted,#64748b)]"
                  >${this.msg['intent.dashboardWorkspace.getDashboardSummary.list.filter.pageSize.label']}</span
                >
                <input
                  type="number"
                  min="1"
                  class="min-h-10 rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 text-[var(--text-default,#0f172a)]"
                  .value=${this.getDashboardSummaryPageSize ?? ''}
                  ?disabled=${summaryLoading}
                  @change=${this.handleGetDashboardSummaryPageSizeChange}
                />
              </label>
              <button
                type="button"
                class="min-h-10 px-4 rounded-lg bg-[var(--button-primary-bg,#2563eb)] text-[var(--button-primary-text,#ffffff)] text-sm font-medium disabled:opacity-60"
                ?disabled=${summaryLoading}
                @click=${this.handleGetDashboardSummaryClick}
              >
                ${summaryLoading
                  ? 'Loading…'
                  : this.msg['organism.dashboardWorkspace.getDashboardSummary.title']}
              </button>
            </div>

            ${summaryError
              ? html`
                  <div
                    class="rounded-lg px-3 py-2 text-sm bg-[var(--status-error-bg,#fee2e2)] text-[var(--status-error-text,#991b1b)]"
                    role="alert"
                  >
                    ${this.msg['intent.dashboardWorkspace.getDashboardSummary.list.empty']}
                  </div>
                `
              : nothing}

            ${!summaryLoading && summaryProjects.length === 0
              ? html`
                  <div
                    class="rounded-lg border border-dashed border-[var(--border-default,#e2e8f0)] px-4 py-8 text-center text-sm text-[var(--text-muted,#64748b)]"
                  >
                    ${this.msg['intent.dashboardWorkspace.getDashboardSummary.list.empty']}
                  </div>
                `
              : nothing}

            ${!summaryLoading && summaryProjects.length > 0
              ? html`
                  <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3">
                    ${summaryProjects.map((row) => {
                      const item = row as object;
                      const name = pickStr(item, ['name', 'projectName', 'title']) || '—';
                      const status = pickStr(item, ['status', 'projectStatus']);
                      const budget = pickNum(item, ['budget', 'budgetAmount', 'plannedBudget']);
                      const actual = pickNum(item, ['actualCost', 'actual', 'costActual']);
                      const variance = pickNum(item, ['variance', 'budgetVariance', 'costVariance']);
                      const start = pickStr(item, ['startDate', 'scheduledStart', 'startsAt']);
                      const end = pickStr(item, ['endDate', 'scheduledEnd', 'endsAt']);
                      const client = pickStr(item, ['clientId', 'clientName', 'client']);
                      const site = pickStr(item, ['siteAddress', 'site', 'address']);
                      const overdue = pickNum(item, ['overdueTaskCount', 'overdueTasks', 'tasksOverdue']);
                      const upcoming = pickNum(item, ['upcomingTaskCount', 'upcomingTasks', 'tasksUpcoming']);
                      return html`
                        <article
                          class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-4 space-y-3 shadow-[var(--shadow-small,0_1px_2px_rgba(0,0,0,0.05))]"
                        >
                          <div class="flex items-start justify-between gap-2">
                            <h3 class="font-semibold text-[var(--text-strong,#0f172a)] leading-snug">${name}</h3>
                            ${status
                              ? html`<span class=${statusBadgeClass(status)}>${status}</span>`
                              : nothing}
                          </div>
                          <dl class="grid grid-cols-2 gap-x-3 gap-y-2 text-sm">
                            <div>
                              <dt class="text-xs text-[var(--text-muted,#64748b)]">Budget</dt>
                              <dd>${formatMoney(budget)}</dd>
                            </div>
                            <div>
                              <dt class="text-xs text-[var(--text-muted,#64748b)]">Actual</dt>
                              <dd>${formatMoney(actual)}</dd>
                            </div>
                            <div>
                              <dt class="text-xs text-[var(--text-muted,#64748b)]">Variance</dt>
                              <dd class=${varianceClass(variance)}>${formatMoney(variance)}</dd>
                            </div>
                            <div>
                              <dt class="text-xs text-[var(--text-muted,#64748b)]">Tasks</dt>
                              <dd>
                                <span class="text-[var(--status-error-text,#991b1b)]">${overdue}</span>
                                overdue /
                                <span>${upcoming}</span>
                                upcoming
                              </dd>
                            </div>
                            <div class="col-span-2">
                              <dt class="text-xs text-[var(--text-muted,#64748b)]">Schedule</dt>
                              <dd>${formatDate(start)} → ${formatDate(end)}</dd>
                            </div>
                            ${client || site
                              ? html`
                                  <div class="col-span-2">
                                    <dt class="text-xs text-[var(--text-muted,#64748b)]">Client / site</dt>
                                    <dd class="text-[var(--text-default,#0f172a)]">
                                      ${client || '—'}${site ? html` · ${site}` : nothing}
                                    </dd>
                                  </div>
                                `
                              : nothing}
                          </dl>
                        </article>
                      `;
                    })}
                  </div>
                `
              : nothing}
          </div>
        </section>

        <!-- Project List -->
        <section class="space-y-4" aria-label=${this.msg['section.dashboardWorkspace.projectListSection.title']}>
          <div
            class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-4 shadow-[var(--shadow-small,0_1px_2px_rgba(0,0,0,0.05))] space-y-4"
          >
            <div class="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
              <div class="space-y-1">
                <h2 class="text-lg font-semibold text-[var(--text-strong,#0f172a)]">
                  ${this.msg['section.dashboardWorkspace.projectListSection.title']}
                </h2>
                <p class="text-xs text-[var(--text-muted,#64748b)]">
                  ${this.msg['intent.dashboardWorkspace.getProjectList.list.title']}
                </p>
              </div>
              <div class="flex flex-wrap gap-2" role="group" aria-label=${this.msg['intent.dashboardWorkspace.getProjectList.list.filter.status.label']}>
                ${listStatusChips.map(
                  (chip) => html`
                    <button
                      type="button"
                      class=${statusChipClass(this.getProjectListStatus === chip.value)}
                      ?disabled=${listLoading}
                      @click=${() => {
                        this.setGetProjectListStatus(chip.value);
                        this.handleGetProjectListClick();
                      }}
                    >
                      ${chip.label}
                    </button>
                  `,
                )}
              </div>
            </div>

            <div class="flex flex-wrap items-end gap-3">
              <label class="flex flex-col gap-1 text-sm min-w-[6rem]">
                <span class="text-[var(--text-muted,#64748b)]"
                  >${this.msg['intent.dashboardWorkspace.getProjectList.list.filter.page.label']}</span
                >
                <input
                  type="number"
                  min="1"
                  class="min-h-10 rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 text-[var(--text-default,#0f172a)]"
                  .value=${this.getProjectListPage ?? ''}
                  ?disabled=${listLoading}
                  @change=${this.handleGetProjectListPageChange}
                />
              </label>
              <label class="flex flex-col gap-1 text-sm min-w-[6rem]">
                <span class="text-[var(--text-muted,#64748b)]"
                  >${this.msg['intent.dashboardWorkspace.getProjectList.list.filter.pageSize.label']}</span
                >
                <input
                  type="number"
                  min="1"
                  class="min-h-10 rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 text-[var(--text-default,#0f172a)]"
                  .value=${this.getProjectListPageSize ?? ''}
                  ?disabled=${listLoading}
                  @change=${this.handleGetProjectListPageSizeChange}
                />
              </label>
              <button
                type="button"
                class="min-h-10 px-4 rounded-lg bg-[var(--button-primary-bg,#2563eb)] text-[var(--button-primary-text,#ffffff)] text-sm font-medium disabled:opacity-60"
                ?disabled=${listLoading}
                @click=${this.handleGetProjectListClick}
              >
                ${listLoading ? 'Loading…' : this.msg['organism.dashboardWorkspace.getProjectList.title']}
              </button>
              <div class="ml-auto text-sm text-[var(--text-muted,#64748b)]">
                ${this.msg['intent.dashboardWorkspace.getProjectList.list.column.total.label']}:
                <span class="font-medium text-[var(--text-default,#0f172a)]">${listTotal}</span>
              </div>
            </div>

            ${listError
              ? html`
                  <div
                    class="rounded-lg px-3 py-2 text-sm bg-[var(--status-error-bg,#fee2e2)] text-[var(--status-error-text,#991b1b)]"
                    role="alert"
                  >
                    ${this.msg['intent.dashboardWorkspace.getProjectList.list.empty']}
                  </div>
                `
              : nothing}

            ${listLoading
              ? html`
                  <div class="space-y-2" aria-busy="true">
                    ${[0, 1, 2, 3, 4].map(
                      () => html`
                        <div
                          class="h-12 rounded-lg bg-[var(--surface-alt-bg,#f1f5f9)] border border-[var(--border-subtle,#e2e8f0)] animate-pulse"
                        ></div>
                      `,
                    )}
                  </div>
                `
              : listProjects.length === 0
                ? html`
                    <div
                      class="rounded-lg border border-dashed border-[var(--border-default,#e2e8f0)] px-4 py-8 text-center text-sm text-[var(--text-muted,#64748b)]"
                    >
                      ${this.msg['intent.dashboardWorkspace.getProjectList.list.empty']}
                    </div>
                  `
                : html`
                    <div class="overflow-x-auto -mx-1">
                      <table class="min-w-full text-sm text-left border-collapse">
                        <thead>
                          <tr class="border-b border-[var(--border-default,#e2e8f0)] text-[var(--text-muted,#64748b)]">
                            <th class="px-3 py-2 font-medium">
                              ${this.msg['intent.dashboardWorkspace.getProjectList.list.column.projects.label']}
                            </th>
                            <th class="px-3 py-2 font-medium">Client</th>
                            <th class="px-3 py-2 font-medium">Site</th>
                            <th class="px-3 py-2 font-medium">Budget</th>
                            <th class="px-3 py-2 font-medium">Schedule</th>
                            <th class="px-3 py-2 font-medium">Status</th>
                          </tr>
                        </thead>
                        <tbody>
                          ${listProjects.map((row) => {
                            const item = row as object;
                            const name = pickStr(item, ['name', 'projectName', 'title']) || '—';
                            const status = pickStr(item, ['status', 'projectStatus']);
                            const budget = pickNum(item, ['budget', 'budgetAmount', 'plannedBudget']);
                            const start = pickStr(item, ['startDate', 'scheduledStart', 'startsAt']);
                            const end = pickStr(item, ['endDate', 'scheduledEnd', 'endsAt']);
                            const client = pickStr(item, ['clientId', 'clientName', 'client']);
                            const site = pickStr(item, ['siteAddress', 'site', 'address']);
                            return html`
                              <tr
                                class="border-b border-[var(--border-subtle,#e2e8f0)] hover:bg-[var(--surface-alt-bg,#f8fafc)]"
                              >
                                <td class="px-3 py-3 font-medium text-[var(--text-strong,#0f172a)]">${name}</td>
                                <td class="px-3 py-3 text-[var(--text-default,#0f172a)]">${client || '—'}</td>
                                <td class="px-3 py-3 text-[var(--text-muted,#64748b)] max-w-[14rem] truncate">
                                  ${site || '—'}
                                </td>
                                <td class="px-3 py-3 whitespace-nowrap">${formatMoney(budget)}</td>
                                <td class="px-3 py-3 whitespace-nowrap text-[var(--text-muted,#64748b)]">
                                  ${formatDate(start)} → ${formatDate(end)}
                                </td>
                                <td class="px-3 py-3">
                                  ${status
                                    ? html`<span class=${statusBadgeClass(status)}>${status}</span>`
                                    : html`<span class="text-[var(--text-muted,#64748b)]">—</span>`}
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
    `;
  }
}
