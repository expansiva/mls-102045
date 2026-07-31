/// <mls fileReference="_102045_/l2/buildFlowFsm/web/desktop/page31/dashboardWorkspace.ts" enhancement="_102020_/l2/enhancementAura"/>

import { html, nothing } from 'lit';
import { customElement } from 'lit/decorators.js';
import { BuildFlowFsmDashboardWorkspaceBase } from '/_102045_/l2/buildFlowFsm/web/shared/dashboardWorkspace.js';

@customElement('build-flow-fsm--web--desktop--page31--dashboard-workspace-102045')
export class BuildFlowFsmDesktopPage31DashboardWorkspacePage extends BuildFlowFsmDashboardWorkspaceBase {
  render() {
    const summaryLoading = this.getDashboardSummaryState === 'loading';
    const summaryRows =
      this.getDashboardSummaryData &&
      Array.isArray(
        (this.getDashboardSummaryData as { projects?: unknown }).projects,
      )
        ? (
            this.getDashboardSummaryData as {
              projects: Array<Record<string, unknown>>;
              total?: number;
            }
          ).projects
        : [];
    const summaryTotal =
      this.getDashboardSummaryData &&
      typeof (this.getDashboardSummaryData as { total?: unknown }).total ===
        'number'
        ? (this.getDashboardSummaryData as { total: number }).total
        : summaryRows.length;

    const projectLoading = this.getProjectListState === 'loading';
    const projectRows =
      this.getProjectListData &&
      Array.isArray(
        (this.getProjectListData as { projects?: unknown }).projects,
      )
        ? (
            this.getProjectListData as {
              projects: Array<Record<string, unknown>>;
              total?: number;
            }
          ).projects
        : [];
    const projectTotal =
      this.getProjectListData &&
      typeof (this.getProjectListData as { total?: unknown }).total === 'number'
        ? (this.getProjectListData as { total: number }).total
        : projectRows.length;

    const formatCell = (value: unknown): string => {
      if (value === null || value === undefined) return '';
      if (typeof value === 'string' || typeof value === 'number') {
        return String(value);
      }
      if (typeof value === 'boolean') return value ? 'true' : 'false';
      try {
        return JSON.stringify(value);
      } catch {
        return '';
      }
    };

    const rowLabel = (row: Record<string, unknown>): string => {
      const name = row['name'] ?? row['title'] ?? row['projectName'] ?? row['id'];
      return formatCell(name);
    };

    const rowStatus = (row: Record<string, unknown>): string => {
      return formatCell(row['status'] ?? row['stage'] ?? '');
    };

    const budgetDrift = (row: Record<string, unknown>): string => {
      const raw =
        row['budgetDrift'] ??
        row['budgetVariance'] ??
        row['drift'] ??
        row['budget'];
      return formatCell(raw);
    };

    const urgency = (row: Record<string, unknown>): string => {
      const raw =
        row['urgency'] ?? row['taskUrgency'] ?? row['priority'] ?? row['dueDate'];
      return formatCell(raw);
    };

    return html`
      <div
        class="min-h-full p-6 space-y-6 bg-[var(--page-bg,#f8fafc)] text-[var(--text-default,#0f172a)]"
      >
        <header class="space-y-1">
          <h1 class="text-2xl font-semibold text-[var(--text-strong,#020617)]">
            ${this.msg['section.dashboardWorkspace.kpiAndBudgetSection.title']}
          </h1>
        </header>

        <section
          class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-4 space-y-4 shadow-sm"
          aria-label=${this.msg['organism.dashboardWorkspace.getDashboardSummary.title']}
        >
          <div class="flex flex-wrap items-center justify-between gap-3">
            <h2 class="text-lg font-medium text-[var(--text-strong,#020617)]">
              ${this.msg['organism.dashboardWorkspace.getDashboardSummary.title']}
            </h2>
            <div class="flex flex-wrap items-end gap-3">
              <label class="flex flex-col gap-1 text-sm">
                <span class="text-[var(--text-muted,#64748b)]">
                  ${this.msg['intent.dashboardWorkspace.getDashboardSummary.list.filter.status.label']}
                </span>
                <input
                  class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-[var(--text-default,#0f172a)]"
                  .value=${this.getDashboardSummaryStatus ?? ''}
                  @change=${(e: Event) => this.handleGetDashboardSummaryStatusChange(e)}
                />
              </label>
              <label class="flex flex-col gap-1 text-sm">
                <span class="text-[var(--text-muted,#64748b)]">
                  ${this.msg['intent.dashboardWorkspace.getDashboardSummary.list.filter.page.label']}
                </span>
                <input
                  type="number"
                  class="w-24 rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-[var(--text-default,#0f172a)]"
                  .value=${this.getDashboardSummaryPage ?? ''}
                  @change=${(e: Event) => this.handleGetDashboardSummaryPageChange(e)}
                />
              </label>
              <label class="flex flex-col gap-1 text-sm">
                <span class="text-[var(--text-muted,#64748b)]">
                  ${this.msg['intent.dashboardWorkspace.getDashboardSummary.list.filter.pageSize.label']}
                </span>
                <input
                  type="number"
                  class="w-24 rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-[var(--text-default,#0f172a)]"
                  .value=${this.getDashboardSummaryPageSize ?? ''}
                  @change=${(e: Event) => this.handleGetDashboardSummaryPageSizeChange(e)}
                />
              </label>
              <button
                type="button"
                class="rounded-md px-4 py-2 bg-[var(--button-primary-bg,#2563eb)] text-[var(--button-primary-text,#ffffff)] disabled:opacity-60"
                ?disabled=${summaryLoading}
                @click=${() => this.handleGetDashboardSummaryClick()}
              >
                ${summaryLoading
                  ? 'Loading…'
                  : this.msg['intent.dashboardWorkspace.getDashboardSummary.list.title']}
              </button>
            </div>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div
              class="rounded-lg border border-[var(--border-subtle,#e2e8f0)] bg-[var(--surface-alt-bg,#f8fafc)] p-4"
            >
              <div class="text-sm text-[var(--text-muted,#64748b)]">
                ${this.msg['intent.dashboardWorkspace.getDashboardSummary.list.column.projects.label']}
              </div>
              <div class="mt-1 text-2xl font-semibold text-[var(--text-strong,#020617)]">
                ${summaryLoading ? '…' : String(summaryRows.length)}
              </div>
            </div>
            <div
              class="rounded-lg border border-[var(--border-subtle,#e2e8f0)] bg-[var(--surface-alt-bg,#f8fafc)] p-4"
            >
              <div class="text-sm text-[var(--text-muted,#64748b)]">
                ${this.msg['intent.dashboardWorkspace.getDashboardSummary.list.column.total.label']}
              </div>
              <div class="mt-1 text-2xl font-semibold text-[var(--text-strong,#020617)]">
                ${summaryLoading ? '…' : String(summaryTotal)}
              </div>
            </div>
          </div>

          ${summaryLoading
            ? html`
                <div
                  class="animate-pulse space-y-2 rounded-md border border-[var(--border-subtle,#e2e8f0)] p-4"
                >
                  <div class="h-4 w-1/3 rounded bg-[var(--surface-alt-bg,#e2e8f0)]"></div>
                  <div class="h-4 w-full rounded bg-[var(--surface-alt-bg,#e2e8f0)]"></div>
                  <div class="h-4 w-2/3 rounded bg-[var(--surface-alt-bg,#e2e8f0)]"></div>
                </div>
              `
            : summaryRows.length === 0
              ? html`
                  <p class="text-sm text-[var(--text-muted,#64748b)]">
                    ${this.msg['intent.dashboardWorkspace.getDashboardSummary.list.empty']}
                  </p>
                `
              : html`
                  <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3">
                    ${summaryRows.map((row: Record<string, unknown>) => {
                      const status = rowStatus(row);
                      return html`
                        <article
                          class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-4 space-y-2"
                        >
                          <div class="flex items-start justify-between gap-2">
                            <h3 class="font-medium text-[var(--text-strong,#020617)]">
                              ${rowLabel(row)}
                            </h3>
                            ${status
                              ? html`
                                  <span
                                    class="inline-flex rounded-full px-2 py-0.5 text-xs bg-[var(--status-neutral-bg,#e2e8f0)] text-[var(--status-neutral-text,#334155)]"
                                  >
                                    ${status}
                                  </span>
                                `
                              : nothing}
                          </div>
                          <dl class="grid grid-cols-2 gap-2 text-sm">
                            <div>
                              <dt class="text-[var(--text-muted,#64748b)]">
                                ${this.msg['intent.dashboardWorkspace.getDashboardSummary.list.column.projects.label']}
                              </dt>
                              <dd class="text-[var(--text-default,#0f172a)]">
                                ${budgetDrift(row) || '—'}
                              </dd>
                            </div>
                            <div>
                              <dt class="text-[var(--text-muted,#64748b)]">
                                ${this.msg['intent.dashboardWorkspace.getDashboardSummary.list.column.total.label']}
                              </dt>
                              <dd class="text-[var(--text-default,#0f172a)]">
                                ${urgency(row) || '—'}
                              </dd>
                            </div>
                          </dl>
                        </article>
                      `;
                    })}
                  </div>
                `}

          ${this.getDashboardSummaryState === 'error'
            ? html`
                <div
                  class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--status-error-bg,#fef2f2)] px-3 py-2 text-sm text-[var(--status-error-text,#991b1b)]"
                >
                  ${this.msg['intent.dashboardWorkspace.getDashboardSummary.list.title']}
                  — error
                </div>
              `
            : this.getDashboardSummaryState === 'success'
              ? html`
                  <div
                    class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--status-success-bg,#f0fdf4)] px-3 py-2 text-sm text-[var(--status-success-text,#166534)]"
                  >
                    ${this.msg['intent.dashboardWorkspace.getDashboardSummary.list.title']}
                    — ok
                  </div>
                `
              : nothing}
        </section>

        <section
          class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-4 space-y-4 shadow-sm"
          aria-label=${this.msg['section.dashboardWorkspace.projectListSection.title']}
        >
          <div class="flex flex-wrap items-center justify-between gap-3">
            <h2 class="text-lg font-medium text-[var(--text-strong,#020617)]">
              ${this.msg['section.dashboardWorkspace.projectListSection.title']}
            </h2>
            <div class="flex flex-wrap items-end gap-3">
              <label class="flex flex-col gap-1 text-sm">
                <span class="text-[var(--text-muted,#64748b)]">
                  ${this.msg['intent.dashboardWorkspace.getProjectList.list.filter.status.label']}
                </span>
                <input
                  class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-[var(--text-default,#0f172a)]"
                  .value=${this.getProjectListStatus ?? ''}
                  @change=${(e: Event) => this.handleGetProjectListStatusChange(e)}
                />
              </label>
              <label class="flex flex-col gap-1 text-sm">
                <span class="text-[var(--text-muted,#64748b)]">
                  ${this.msg['intent.dashboardWorkspace.getProjectList.list.filter.page.label']}
                </span>
                <input
                  type="number"
                  class="w-24 rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-[var(--text-default,#0f172a)]"
                  .value=${this.getProjectListPage ?? ''}
                  @change=${(e: Event) => this.handleGetProjectListPageChange(e)}
                />
              </label>
              <label class="flex flex-col gap-1 text-sm">
                <span class="text-[var(--text-muted,#64748b)]">
                  ${this.msg['intent.dashboardWorkspace.getProjectList.list.filter.pageSize.label']}
                </span>
                <input
                  type="number"
                  class="w-24 rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-[var(--text-default,#0f172a)]"
                  .value=${this.getProjectListPageSize ?? ''}
                  @change=${(e: Event) => this.handleGetProjectListPageSizeChange(e)}
                />
              </label>
              <button
                type="button"
                class="rounded-md px-4 py-2 bg-[var(--button-primary-bg,#2563eb)] text-[var(--button-primary-text,#ffffff)] disabled:opacity-60"
                ?disabled=${projectLoading}
                @click=${() => this.handleGetProjectListClick()}
              >
                ${projectLoading
                  ? 'Loading…'
                  : this.msg['intent.dashboardWorkspace.getProjectList.list.title']}
              </button>
            </div>
          </div>

          <p class="text-sm text-[var(--text-muted,#64748b)]">
            ${this.msg['organism.dashboardWorkspace.getProjectList.title']}
            ·
            ${this.msg['intent.dashboardWorkspace.getProjectList.list.column.total.label']}:
            ${projectLoading ? '…' : String(projectTotal)}
          </p>

          ${projectLoading
            ? html`
                <div
                  class="animate-pulse space-y-2 rounded-md border border-[var(--border-subtle,#e2e8f0)] p-4"
                >
                  <div class="h-4 w-1/4 rounded bg-[var(--surface-alt-bg,#e2e8f0)]"></div>
                  <div class="h-10 w-full rounded bg-[var(--surface-alt-bg,#e2e8f0)]"></div>
                  <div class="h-10 w-full rounded bg-[var(--surface-alt-bg,#e2e8f0)]"></div>
                </div>
              `
            : projectRows.length === 0
              ? html`
                  <p class="text-sm text-[var(--text-muted,#64748b)]">
                    ${this.msg['intent.dashboardWorkspace.getProjectList.list.empty']}
                  </p>
                `
              : html`
                  <div class="overflow-x-auto">
                    <table class="min-w-full text-sm text-left">
                      <thead>
                        <tr
                          class="border-b border-[var(--border-default,#e2e8f0)] text-[var(--text-muted,#64748b)]"
                        >
                          <th class="py-2 pr-4 font-medium">
                            ${this.msg['intent.dashboardWorkspace.getProjectList.list.column.projects.label']}
                          </th>
                          <th class="py-2 pr-4 font-medium">
                            ${this.msg['intent.dashboardWorkspace.getProjectList.list.filter.status.label']}
                          </th>
                          <th class="py-2 pr-4 font-medium">
                            ${this.msg['intent.dashboardWorkspace.getProjectList.list.column.total.label']}
                          </th>
                          <th class="py-2 font-medium">
                            ${this.msg['organism.dashboardWorkspace.inline-row-command10.title']}
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        ${projectRows.map((row: Record<string, unknown>) => {
                          const status = rowStatus(row);
                          return html`
                            <tr
                              class="border-b border-[var(--border-subtle,#e2e8f0)] align-top"
                            >
                              <td class="py-3 pr-4 text-[var(--text-default,#0f172a)]">
                                ${rowLabel(row)}
                              </td>
                              <td class="py-3 pr-4">
                                ${status
                                  ? html`
                                      <span
                                        class="inline-flex rounded-full px-2 py-0.5 text-xs bg-[var(--status-info-bg,#eff6ff)] text-[var(--status-info-text,#1e40af)]"
                                      >
                                        ${status}
                                      </span>
                                    `
                                  : html`<span class="text-[var(--text-muted,#64748b)]">—</span>`}
                              </td>
                              <td class="py-3 pr-4 text-[var(--text-default,#0f172a)]">
                                ${budgetDrift(row) || urgency(row) || '—'}
                              </td>
                              <td class="py-3">
                                <span
                                  class="inline-flex items-center rounded-md px-2 py-1 text-xs bg-[var(--surface-alt-bg,#f8fafc)] text-[var(--text-muted,#64748b)]"
                                  title=${this.msg['intent.dashboardWorkspace.inline-row-command10.content.title']}
                                >
                                  ${this.msg['intent.dashboardWorkspace.inline-row-command10.content.title']}
                                </span>
                              </td>
                            </tr>
                          `;
                        })}
                      </tbody>
                    </table>
                  </div>
                `}

          ${this.getProjectListState === 'error'
            ? html`
                <div
                  class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--status-error-bg,#fef2f2)] px-3 py-2 text-sm text-[var(--status-error-text,#991b1b)]"
                >
                  ${this.msg['intent.dashboardWorkspace.getProjectList.list.title']}
                  — error
                </div>
              `
            : this.getProjectListState === 'success'
              ? html`
                  <div
                    class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--status-success-bg,#f0fdf4)] px-3 py-2 text-sm text-[var(--status-success-text,#166534)]"
                  >
                    ${this.msg['intent.dashboardWorkspace.getProjectList.list.title']}
                    — ok
                  </div>
                `
              : nothing}
        </section>
      </div>
    `;
  }
}
