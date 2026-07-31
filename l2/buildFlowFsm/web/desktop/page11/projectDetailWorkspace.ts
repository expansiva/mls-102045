/// <mls fileReference="_102045_/l2/buildFlowFsm/web/desktop/page11/projectDetailWorkspace.ts" enhancement="_102020_/l2/enhancementAura"/>

import { html, nothing } from 'lit';
import { customElement } from 'lit/decorators.js';
import { BuildFlowFsmProjectDetailWorkspaceBase } from '/_102045_/l2/buildFlowFsm/web/shared/projectDetailWorkspace.js';
import type {
  GetProjectDetailOutput,
  GetChangeOrderDetailOutput,
  ListWorkTasksOutput,
  ListChangeOrdersOutput,
  ListTimeLogsOutput,
  ListMaterialUsagesOutput,
  ListDelayRiskSuggestionsOutput,
} from '/_102045_/l2/buildFlowFsm/web/shared/projectDetailWorkspace.js';

type WorkTaskRow = NonNullable<ListWorkTasksOutput['workTasks']>[number];
type ChangeOrderRow = NonNullable<ListChangeOrdersOutput['changeOrders']>[number];
type TimeLogRow = NonNullable<ListTimeLogsOutput['timeLogs']>[number];
type MaterialUsageRow = NonNullable<ListMaterialUsagesOutput['materialUsages']>[number];

@customElement('build-flow-fsm--web--desktop--page11--project-detail-workspace-102045')
export class BuildFlowFsmDesktopPage11ProjectDetailWorkspacePage extends BuildFlowFsmProjectDetailWorkspaceBase {
  render() {
    const project = this.getProjectDetailData;
    const workTasks: WorkTaskRow[] = this.listWorkTasksData?.workTasks ?? [];
    const workTasksTotal = this.listWorkTasksData?.total;
    const changeOrders: ChangeOrderRow[] = this.listChangeOrdersData?.changeOrders ?? [];
    const changeOrdersTotal = this.listChangeOrdersData?.total;
    const changeOrderDetail = this.getChangeOrderDetailData;
    const timeLogs: TimeLogRow[] = this.listTimeLogsData?.timeLogs ?? [];
    const timeLogsTotal = this.listTimeLogsData?.total;
    const materialUsages: MaterialUsageRow[] = this.listMaterialUsagesData?.materialUsages ?? [];
    const materialUsagesTotal = this.listMaterialUsagesData?.total;
    const delaySuggestions: ListDelayRiskSuggestionsOutput[] = this.listDelayRiskSuggestionsData ?? [];

    const fmt = (value: unknown): string => {
      if (value === null || value === undefined || value === '') return '—';
      if (typeof value === 'boolean') return value ? 'Yes' : 'No';
      return String(value);
    };

    const rowRecord = (item: object): Record<string, unknown> => item as Record<string, unknown>;

    return html`
      <div class="min-h-full bg-[var(--page-bg,#f8fafc)] text-[var(--text-default,#0f172a)]">
        <div class="max-w-6xl mx-auto px-4 py-6 space-y-6">
          <header class="space-y-1">
            <h1 class="text-2xl font-semibold text-[var(--text-strong,#0f172a)]">
              ${this.msg['section.projectDetailWorkspace.sec-projectHeader.title']}
            </h1>
          </header>

          <!-- Project Header / Detail -->
          <section class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-4 space-y-4">
            <div class="flex flex-wrap items-center justify-between gap-3">
              <h2 class="text-lg font-medium text-[var(--text-strong,#0f172a)]">
                ${this.msg['organism.projectDetailWorkspace.getProjectDetail.title']}
              </h2>
              <button
                type="button"
                class="inline-flex items-center gap-2 rounded-md px-3 py-1.5 text-sm bg-[var(--button-secondary-bg,#f1f5f9)] text-[var(--button-secondary-text,#0f172a)] border border-[var(--button-secondary-border,#e2e8f0)] disabled:opacity-60"
                ?disabled=${this.getProjectDetailState === 'loading'}
                @click=${(e: Event) => this.handleGetProjectDetailClick(e)}
              >
                ${this.getProjectDetailState === 'loading' ? html`<span class="animate-pulse">…</span>` : nothing}
                ${this.msg['intent.projectDetailWorkspace.getProjectDetail.list.title']}
              </button>
            </div>

            ${this.getProjectDetailState === 'loading'
              ? html`<div class="h-24 rounded-md bg-[var(--surface-alt-bg,#f1f5f9)] animate-pulse"></div>`
              : project
                ? html`
                    <dl class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 text-sm">
                      <div>
                        <dt class="text-[var(--text-muted,#64748b)]">${this.msg['intent.projectDetailWorkspace.getProjectDetail.list.column.projectId.label']}</dt>
                        <dd class="font-medium">${fmt(project.projectId)}</dd>
                      </div>
                      <div>
                        <dt class="text-[var(--text-muted,#64748b)]">${this.msg['intent.projectDetailWorkspace.getProjectDetail.list.column.name.label']}</dt>
                        <dd class="font-medium">${fmt(project.name)}</dd>
                      </div>
                      <div>
                        <dt class="text-[var(--text-muted,#64748b)]">${this.msg['intent.projectDetailWorkspace.getProjectDetail.list.column.clientId.label']}</dt>
                        <dd class="font-medium">${fmt(project.clientId)}</dd>
                      </div>
                      <div>
                        <dt class="text-[var(--text-muted,#64748b)]">${this.msg['intent.projectDetailWorkspace.getProjectDetail.list.column.clientName.label']}</dt>
                        <dd class="font-medium">${fmt(project.clientName)}</dd>
                      </div>
                      <div>
                        <dt class="text-[var(--text-muted,#64748b)]">${this.msg['intent.projectDetailWorkspace.getProjectDetail.list.column.clientCompany.label']}</dt>
                        <dd class="font-medium">${fmt(project.clientCompany)}</dd>
                      </div>
                      <div>
                        <dt class="text-[var(--text-muted,#64748b)]">${this.msg['intent.projectDetailWorkspace.getProjectDetail.list.column.siteAddress.label']}</dt>
                        <dd class="font-medium">${fmt(project.siteAddress)}</dd>
                      </div>
                      <div>
                        <dt class="text-[var(--text-muted,#64748b)]">${this.msg['intent.projectDetailWorkspace.getProjectDetail.list.column.budget.label']}</dt>
                        <dd class="font-medium">${fmt(project.budget)}</dd>
                      </div>
                      <div>
                        <dt class="text-[var(--text-muted,#64748b)]">${this.msg['intent.projectDetailWorkspace.getProjectDetail.list.column.startDate.label']}</dt>
                        <dd class="font-medium">${fmt(project.startDate)}</dd>
                      </div>
                      <div>
                        <dt class="text-[var(--text-muted,#64748b)]">${this.msg['intent.projectDetailWorkspace.getProjectDetail.list.column.endDate.label']}</dt>
                        <dd class="font-medium">${fmt(project.endDate)}</dd>
                      </div>
                      <div>
                        <dt class="text-[var(--text-muted,#64748b)]">${this.msg['intent.projectDetailWorkspace.getProjectDetail.list.column.status.label']}</dt>
                        <dd>
                          <span class="inline-flex rounded-md px-2 py-0.5 text-xs bg-[var(--status-info-bg,#e0f2fe)] text-[var(--status-info-text,#0c4a6e)]">
                            ${fmt(project.status)}
                          </span>
                        </dd>
                      </div>
                      <div>
                        <dt class="text-[var(--text-muted,#64748b)]">${this.msg['intent.projectDetailWorkspace.getProjectDetail.list.column.holdReason.label']}</dt>
                        <dd class="font-medium">${fmt(project.holdReason)}</dd>
                      </div>
                      <div>
                        <dt class="text-[var(--text-muted,#64748b)]">${this.msg['intent.projectDetailWorkspace.getProjectDetail.list.column.closedAt.label']}</dt>
                        <dd class="font-medium">${fmt(project.closedAt)}</dd>
                      </div>
                      <div>
                        <dt class="text-[var(--text-muted,#64748b)]">${this.msg['intent.projectDetailWorkspace.getProjectDetail.list.column.cancelledAt.label']}</dt>
                        <dd class="font-medium">${fmt(project.cancelledAt)}</dd>
                      </div>
                      <div>
                        <dt class="text-[var(--text-muted,#64748b)]">${this.msg['intent.projectDetailWorkspace.getProjectDetail.list.column.cancellationReason.label']}</dt>
                        <dd class="font-medium">${fmt(project.cancellationReason)}</dd>
                      </div>
                      <div>
                        <dt class="text-[var(--text-muted,#64748b)]">${this.msg['intent.projectDetailWorkspace.getProjectDetail.list.column.createdAt.label']}</dt>
                        <dd class="font-medium">${fmt(project.createdAt)}</dd>
                      </div>
                      <div>
                        <dt class="text-[var(--text-muted,#64748b)]">${this.msg['intent.projectDetailWorkspace.getProjectDetail.list.column.updatedAt.label']}</dt>
                        <dd class="font-medium">${fmt(project.updatedAt)}</dd>
                      </div>
                    </dl>
                  `
                : html`
                    <p class="text-sm text-[var(--text-muted,#64748b)]">
                      ${this.msg['intent.projectDetailWorkspace.getProjectDetail.list.empty']}
                    </p>
                  `}
          </section>

          <!-- Work Tasks & Timeline -->
          <section class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-4 space-y-4">
            <div class="flex flex-wrap items-center justify-between gap-3">
              <h2 class="text-lg font-medium text-[var(--text-strong,#0f172a)]">
                ${this.msg['section.projectDetailWorkspace.sec-taskTimeline.title']}
              </h2>
              <button
                type="button"
                class="inline-flex items-center gap-2 rounded-md px-3 py-1.5 text-sm bg-[var(--button-primary-bg,#2563eb)] text-[var(--button-primary-text,#ffffff)] disabled:opacity-60"
                ?disabled=${this.listWorkTasksState === 'loading'}
                @click=${(e: Event) => this.handleListWorkTasksClick(e)}
              >
                ${this.listWorkTasksState === 'loading' ? html`<span class="animate-pulse">…</span>` : nothing}
                ${this.msg['organism.projectDetailWorkspace.listWorkTasks.title']}
              </button>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
              <label class="flex flex-col gap-1 text-sm">
                <span class="text-[var(--text-muted,#64748b)]">${this.msg['intent.projectDetailWorkspace.listWorkTasks.list.filter.projectId.label']}</span>
                <input
                  class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-2 py-1.5"
                  .value=${this.listWorkTasksProjectId}
                  @input=${(e: Event) => this.handleListWorkTasksProjectIdChange(e)}
                />
              </label>
              <label class="flex flex-col gap-1 text-sm">
                <span class="text-[var(--text-muted,#64748b)]">${this.msg['intent.projectDetailWorkspace.listWorkTasks.list.filter.status.label']}</span>
                <input
                  class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-2 py-1.5"
                  .value=${this.listWorkTasksStatus}
                  @input=${(e: Event) => this.handleListWorkTasksStatusChange(e)}
                />
              </label>
              <label class="flex flex-col gap-1 text-sm">
                <span class="text-[var(--text-muted,#64748b)]">${this.msg['intent.projectDetailWorkspace.listWorkTasks.list.filter.assignedWorkerId.label']}</span>
                <input
                  class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-2 py-1.5"
                  .value=${this.listWorkTasksAssignedWorkerId}
                  @input=${(e: Event) => this.handleListWorkTasksAssignedWorkerIdChange(e)}
                />
              </label>
              <label class="flex flex-col gap-1 text-sm">
                <span class="text-[var(--text-muted,#64748b)]">${this.msg['intent.projectDetailWorkspace.listWorkTasks.list.filter.page.label']}</span>
                <input
                  class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-2 py-1.5"
                  .value=${this.listWorkTasksPage}
                  @input=${(e: Event) => this.handleListWorkTasksPageChange(e)}
                />
              </label>
              <label class="flex flex-col gap-1 text-sm">
                <span class="text-[var(--text-muted,#64748b)]">${this.msg['intent.projectDetailWorkspace.listWorkTasks.list.filter.pageSize.label']}</span>
                <input
                  class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-2 py-1.5"
                  .value=${this.listWorkTasksPageSize}
                  @input=${(e: Event) => this.handleListWorkTasksPageSizeChange(e)}
                />
              </label>
            </div>

            ${this.listWorkTasksState === 'loading'
              ? html`<div class="h-32 rounded-md bg-[var(--surface-alt-bg,#f1f5f9)] animate-pulse"></div>`
              : workTasks.length === 0
                ? html`<p class="text-sm text-[var(--text-muted,#64748b)]">${this.msg['intent.projectDetailWorkspace.listWorkTasks.list.empty']}</p>`
                : html`
                    <div class="flex items-center justify-between text-sm text-[var(--text-muted,#64748b)]">
                      <span>${this.msg['intent.projectDetailWorkspace.listWorkTasks.list.column.workTasks.label']}</span>
                      <span>${this.msg['intent.projectDetailWorkspace.listWorkTasks.list.column.total.label']}: ${fmt(workTasksTotal)}</span>
                    </div>
                    <div class="overflow-x-auto">
                      <table class="min-w-full text-sm">
                        <thead>
                          <tr class="border-b border-[var(--border-subtle,#e2e8f0)] text-left text-[var(--text-muted,#64748b)]">
                            <th class="py-2 pr-3 font-medium">ID</th>
                            <th class="py-2 pr-3 font-medium">Title</th>
                            <th class="py-2 pr-3 font-medium">Status</th>
                            <th class="py-2 pr-3 font-medium">Assignee</th>
                            <th class="py-2 pr-3 font-medium">Due</th>
                          </tr>
                        </thead>
                        <tbody>
                          ${workTasks.map((item: WorkTaskRow) => {
                            const r = rowRecord(item as object);
                            return html`
                              <tr class="border-b border-[var(--border-subtle,#e2e8f0)]">
                                <td class="py-2 pr-3">${fmt(r['workTaskId'] ?? r['id'])}</td>
                                <td class="py-2 pr-3">${fmt(r['title'] ?? r['name'])}</td>
                                <td class="py-2 pr-3">
                                  <span class="inline-flex rounded-md px-2 py-0.5 text-xs bg-[var(--status-neutral-bg,#f1f5f9)] text-[var(--status-neutral-text,#334155)]">
                                    ${fmt(r['status'])}
                                  </span>
                                </td>
                                <td class="py-2 pr-3">${fmt(r['assignedWorkerName'] ?? r['assignedWorkerId'])}</td>
                                <td class="py-2 pr-3">${fmt(r['dueDate'])}</td>
                              </tr>
                            `;
                          })}
                        </tbody>
                      </table>
                    </div>
                  `}
          </section>

          <!-- Change Orders (master-detail) -->
          <section class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-4 space-y-4">
            <h2 class="text-lg font-medium text-[var(--text-strong,#0f172a)]">
              ${this.msg['section.projectDetailWorkspace.sec-changeOrders.title']}
            </h2>

            <div class="space-y-3">
              <div class="flex flex-wrap items-center justify-between gap-3">
                <h3 class="text-base font-medium">${this.msg['organism.projectDetailWorkspace.listChangeOrders.title']}</h3>
                <button
                  type="button"
                  class="inline-flex items-center gap-2 rounded-md px-3 py-1.5 text-sm bg-[var(--button-primary-bg,#2563eb)] text-[var(--button-primary-text,#ffffff)] disabled:opacity-60"
                  ?disabled=${this.listChangeOrdersState === 'loading'}
                  @click=${(e: Event) => this.handleListChangeOrdersClick(e)}
                >
                  ${this.listChangeOrdersState === 'loading' ? html`<span class="animate-pulse">…</span>` : nothing}
                  ${this.msg['intent.projectDetailWorkspace.listChangeOrders.list.title']}
                </button>
              </div>

              <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                <label class="flex flex-col gap-1 text-sm">
                  <span class="text-[var(--text-muted,#64748b)]">${this.msg['intent.projectDetailWorkspace.listChangeOrders.list.filter.status.label']}</span>
                  <input
                    class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-2 py-1.5"
                    .value=${this.listChangeOrdersStatus}
                    @input=${(e: Event) => this.handleListChangeOrdersStatusChange(e)}
                  />
                </label>
                <label class="flex flex-col gap-1 text-sm">
                  <span class="text-[var(--text-muted,#64748b)]">${this.msg['intent.projectDetailWorkspace.listChangeOrders.list.filter.impactType.label']}</span>
                  <input
                    class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-2 py-1.5"
                    .value=${this.listChangeOrdersImpactType}
                    @input=${(e: Event) => this.handleListChangeOrdersImpactTypeChange(e)}
                  />
                </label>
                <label class="flex flex-col gap-1 text-sm">
                  <span class="text-[var(--text-muted,#64748b)]">${this.msg['intent.projectDetailWorkspace.listChangeOrders.list.filter.page.label']}</span>
                  <input
                    class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-2 py-1.5"
                    .value=${this.listChangeOrdersPage}
                    @input=${(e: Event) => this.handleListChangeOrdersPageChange(e)}
                  />
                </label>
                <label class="flex flex-col gap-1 text-sm">
                  <span class="text-[var(--text-muted,#64748b)]">${this.msg['intent.projectDetailWorkspace.listChangeOrders.list.filter.pageSize.label']}</span>
                  <input
                    class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-2 py-1.5"
                    .value=${this.listChangeOrdersPageSize}
                    @input=${(e: Event) => this.handleListChangeOrdersPageSizeChange(e)}
                  />
                </label>
              </div>

              ${this.listChangeOrdersState === 'loading'
                ? html`<div class="h-28 rounded-md bg-[var(--surface-alt-bg,#f1f5f9)] animate-pulse"></div>`
                : changeOrders.length === 0
                  ? html`<p class="text-sm text-[var(--text-muted,#64748b)]">${this.msg['intent.projectDetailWorkspace.listChangeOrders.list.empty']}</p>`
                  : html`
                      <div class="flex items-center justify-between text-sm text-[var(--text-muted,#64748b)]">
                        <span>${this.msg['intent.projectDetailWorkspace.listChangeOrders.list.column.changeOrders.label']}</span>
                        <span>${this.msg['intent.projectDetailWorkspace.listChangeOrders.list.column.total.label']}: ${fmt(changeOrdersTotal)}</span>
                      </div>
                      <div class="overflow-x-auto">
                        <table class="min-w-full text-sm">
                          <thead>
                            <tr class="border-b border-[var(--border-subtle,#e2e8f0)] text-left text-[var(--text-muted,#64748b)]">
                              <th class="py-2 pr-3 font-medium">ID</th>
                              <th class="py-2 pr-3 font-medium">Title</th>
                              <th class="py-2 pr-3 font-medium">Status</th>
                              <th class="py-2 pr-3 font-medium">Impact</th>
                              <th class="py-2 pr-3 font-medium">Cost</th>
                              <th class="py-2 pr-3 font-medium"></th>
                            </tr>
                          </thead>
                          <tbody>
                            ${changeOrders.map((item: ChangeOrderRow) => {
                              const r = rowRecord(item as object);
                              const id = String(r['changeOrderId'] ?? '');
                              return html`
                                <tr class="border-b border-[var(--border-subtle,#e2e8f0)]">
                                  <td class="py-2 pr-3">${fmt(r['changeOrderId'])}</td>
                                  <td class="py-2 pr-3">${fmt(r['title'])}</td>
                                  <td class="py-2 pr-3">
                                    <span class="inline-flex rounded-md px-2 py-0.5 text-xs bg-[var(--status-neutral-bg,#f1f5f9)] text-[var(--status-neutral-text,#334155)]">
                                      ${fmt(r['status'])}
                                    </span>
                                  </td>
                                  <td class="py-2 pr-3">${fmt(r['impactType'])}</td>
                                  <td class="py-2 pr-3">${fmt(r['costAdjustment'])}</td>
                                  <td class="py-2 pr-3">
                                    <button
                                      type="button"
                                      class="rounded-md px-2 py-1 text-xs bg-[var(--button-secondary-bg,#f1f5f9)] text-[var(--button-secondary-text,#0f172a)] border border-[var(--button-secondary-border,#e2e8f0)]"
                                      @click=${(_e: Event) => {
                                        this.setGetChangeOrderDetailChangeOrderId(id);
                                        this.handleGetChangeOrderDetailClick();
                                      }}
                                    >
                                      ${this.msg['organism.projectDetailWorkspace.getChangeOrderDetail.title']}
                                    </button>
                                  </td>
                                </tr>
                              `;
                            })}
                          </tbody>
                        </table>
                      </div>
                    `}
            </div>

            <div class="rounded-md border border-[var(--border-subtle,#e2e8f0)] bg-[var(--surface-alt-bg,#f8fafc)] p-3 space-y-3">
              <div class="flex flex-wrap items-center justify-between gap-3">
                <h3 class="text-base font-medium">${this.msg['organism.projectDetailWorkspace.getChangeOrderDetail.title']}</h3>
                <div class="flex flex-wrap items-end gap-2">
                  <label class="flex flex-col gap-1 text-sm">
                    <span class="text-[var(--text-muted,#64748b)]">${this.msg['intent.projectDetailWorkspace.getChangeOrderDetail.list.column.changeOrderId.label']}</span>
                    <input
                      class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-2 py-1.5"
                      .value=${this.getChangeOrderDetailChangeOrderId}
                      @input=${(e: Event) => this.handleGetChangeOrderDetailChangeOrderIdChange(e)}
                    />
                  </label>
                  <button
                    type="button"
                    class="inline-flex items-center gap-2 rounded-md px-3 py-1.5 text-sm bg-[var(--button-secondary-bg,#f1f5f9)] text-[var(--button-secondary-text,#0f172a)] border border-[var(--button-secondary-border,#e2e8f0)] disabled:opacity-60"
                    ?disabled=${this.getChangeOrderDetailState === 'loading'}
                    @click=${(e: Event) => this.handleGetChangeOrderDetailClick(e)}
                  >
                    ${this.getChangeOrderDetailState === 'loading' ? html`<span class="animate-pulse">…</span>` : nothing}
                    ${this.msg['intent.projectDetailWorkspace.getChangeOrderDetail.list.title']}
                  </button>
                </div>
              </div>

              ${this.getChangeOrderDetailState === 'loading'
                ? html`<div class="h-24 rounded-md bg-[var(--surface-bg,#ffffff)] animate-pulse"></div>`
                : changeOrderDetail
                  ? html`
                      <dl class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 text-sm">
                        <div>
                          <dt class="text-[var(--text-muted,#64748b)]">${this.msg['intent.projectDetailWorkspace.getChangeOrderDetail.list.column.changeOrderId.label']}</dt>
                          <dd class="font-medium">${fmt(changeOrderDetail.changeOrderId)}</dd>
                        </div>
                        <div>
                          <dt class="text-[var(--text-muted,#64748b)]">${this.msg['intent.projectDetailWorkspace.getChangeOrderDetail.list.column.projectId.label']}</dt>
                          <dd class="font-medium">${fmt(changeOrderDetail.projectId)}</dd>
                        </div>
                        <div>
                          <dt class="text-[var(--text-muted,#64748b)]">${this.msg['intent.projectDetailWorkspace.getChangeOrderDetail.list.column.title.label']}</dt>
                          <dd class="font-medium">${fmt(changeOrderDetail.title)}</dd>
                        </div>
                        <div class="sm:col-span-2">
                          <dt class="text-[var(--text-muted,#64748b)]">${this.msg['intent.projectDetailWorkspace.getChangeOrderDetail.list.column.description.label']}</dt>
                          <dd class="font-medium">${fmt(changeOrderDetail.description)}</dd>
                        </div>
                        <div>
                          <dt class="text-[var(--text-muted,#64748b)]">${this.msg['intent.projectDetailWorkspace.getChangeOrderDetail.list.column.impactType.label']}</dt>
                          <dd class="font-medium">${fmt(changeOrderDetail.impactType)}</dd>
                        </div>
                        <div>
                          <dt class="text-[var(--text-muted,#64748b)]">${this.msg['intent.projectDetailWorkspace.getChangeOrderDetail.list.column.costAdjustment.label']}</dt>
                          <dd class="font-medium">${fmt(changeOrderDetail.costAdjustment)}</dd>
                        </div>
                        <div>
                          <dt class="text-[var(--text-muted,#64748b)]">${this.msg['intent.projectDetailWorkspace.getChangeOrderDetail.list.column.scheduleAdjustmentDays.label']}</dt>
                          <dd class="font-medium">${fmt(changeOrderDetail.scheduleAdjustmentDays)}</dd>
                        </div>
                        <div>
                          <dt class="text-[var(--text-muted,#64748b)]">${this.msg['intent.projectDetailWorkspace.getChangeOrderDetail.list.column.status.label']}</dt>
                          <dd>
                            <span class="inline-flex rounded-md px-2 py-0.5 text-xs bg-[var(--status-info-bg,#e0f2fe)] text-[var(--status-info-text,#0c4a6e)]">
                              ${fmt(changeOrderDetail.status)}
                            </span>
                          </dd>
                        </div>
                        <div>
                          <dt class="text-[var(--text-muted,#64748b)]">${this.msg['intent.projectDetailWorkspace.getChangeOrderDetail.list.column.rejectionReason.label']}</dt>
                          <dd class="font-medium">${fmt(changeOrderDetail.rejectionReason)}</dd>
                        </div>
                        <div>
                          <dt class="text-[var(--text-muted,#64748b)]">${this.msg['intent.projectDetailWorkspace.getChangeOrderDetail.list.column.approvedAt.label']}</dt>
                          <dd class="font-medium">${fmt(changeOrderDetail.approvedAt)}</dd>
                        </div>
                        <div>
                          <dt class="text-[var(--text-muted,#64748b)]">${this.msg['intent.projectDetailWorkspace.getChangeOrderDetail.list.column.rejectedAt.label']}</dt>
                          <dd class="font-medium">${fmt(changeOrderDetail.rejectedAt)}</dd>
                        </div>
                        <div>
                          <dt class="text-[var(--text-muted,#64748b)]">${this.msg['intent.projectDetailWorkspace.getChangeOrderDetail.list.column.projectName.label']}</dt>
                          <dd class="font-medium">${fmt(changeOrderDetail.projectName)}</dd>
                        </div>
                        <div>
                          <dt class="text-[var(--text-muted,#64748b)]">${this.msg['intent.projectDetailWorkspace.getChangeOrderDetail.list.column.projectBudget.label']}</dt>
                          <dd class="font-medium">${fmt(changeOrderDetail.projectBudget)}</dd>
                        </div>
                        <div>
                          <dt class="text-[var(--text-muted,#64748b)]">${this.msg['intent.projectDetailWorkspace.getChangeOrderDetail.list.column.affectsJobCosting.label']}</dt>
                          <dd class="font-medium">${fmt(changeOrderDetail.affectsJobCosting)}</dd>
                        </div>
                      </dl>
                    `
                  : html`
                      <p class="text-sm text-[var(--text-muted,#64748b)]">
                        ${this.msg['intent.projectDetailWorkspace.getChangeOrderDetail.list.empty']}
                      </p>
                    `}
            </div>
          </section>

          <!-- Cost Tracking — Time Logs -->
          <section class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-4 space-y-4">
            <div class="flex flex-wrap items-center justify-between gap-3">
              <h2 class="text-lg font-medium text-[var(--text-strong,#0f172a)]">
                ${this.msg['section.projectDetailWorkspace.sec-costTracking.title']}
              </h2>
              <button
                type="button"
                class="inline-flex items-center gap-2 rounded-md px-3 py-1.5 text-sm bg-[var(--button-primary-bg,#2563eb)] text-[var(--button-primary-text,#ffffff)] disabled:opacity-60"
                ?disabled=${this.listTimeLogsState === 'loading'}
                @click=${(e: Event) => this.handleListTimeLogsClick(e)}
              >
                ${this.listTimeLogsState === 'loading' ? html`<span class="animate-pulse">…</span>` : nothing}
                ${this.msg['organism.projectDetailWorkspace.listTimeLogs.title']}
              </button>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              <label class="flex flex-col gap-1 text-sm">
                <span class="text-[var(--text-muted,#64748b)]">${this.msg['intent.projectDetailWorkspace.listTimeLogs.list.filter.workTaskId.label']}</span>
                <input
                  class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-2 py-1.5"
                  .value=${this.listTimeLogsWorkTaskId}
                  @input=${(e: Event) => this.handleListTimeLogsWorkTaskIdChange(e)}
                />
              </label>
              <label class="flex flex-col gap-1 text-sm">
                <span class="text-[var(--text-muted,#64748b)]">${this.msg['intent.projectDetailWorkspace.listTimeLogs.list.filter.workerName.label']}</span>
                <input
                  class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-2 py-1.5"
                  .value=${this.listTimeLogsWorkerName}
                  @input=${(e: Event) => this.handleListTimeLogsWorkerNameChange(e)}
                />
              </label>
              <label class="flex flex-col gap-1 text-sm">
                <span class="text-[var(--text-muted,#64748b)]">${this.msg['intent.projectDetailWorkspace.listTimeLogs.list.filter.logDate.label']}</span>
                <input
                  type="date"
                  class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-2 py-1.5"
                  .value=${this.listTimeLogsLogDate}
                  @input=${(e: Event) => this.handleListTimeLogsLogDateChange(e)}
                />
              </label>
              <label class="flex flex-col gap-1 text-sm">
                <span class="text-[var(--text-muted,#64748b)]">${this.msg['intent.projectDetailWorkspace.listTimeLogs.list.filter.status.label']}</span>
                <input
                  class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-2 py-1.5"
                  .value=${this.listTimeLogsStatus}
                  @input=${(e: Event) => this.handleListTimeLogsStatusChange(e)}
                />
              </label>
              <label class="flex flex-col gap-1 text-sm">
                <span class="text-[var(--text-muted,#64748b)]">${this.msg['intent.projectDetailWorkspace.listTimeLogs.list.filter.page.label']}</span>
                <input
                  class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-2 py-1.5"
                  .value=${this.listTimeLogsPage}
                  @input=${(e: Event) => this.handleListTimeLogsPageChange(e)}
                />
              </label>
              <label class="flex flex-col gap-1 text-sm">
                <span class="text-[var(--text-muted,#64748b)]">${this.msg['intent.projectDetailWorkspace.listTimeLogs.list.filter.pageSize.label']}</span>
                <input
                  class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-2 py-1.5"
                  .value=${this.listTimeLogsPageSize}
                  @input=${(e: Event) => this.handleListTimeLogsPageSizeChange(e)}
                />
              </label>
            </div>

            ${this.listTimeLogsState === 'loading'
              ? html`<div class="h-32 rounded-md bg-[var(--surface-alt-bg,#f1f5f9)] animate-pulse"></div>`
              : timeLogs.length === 0
                ? html`<p class="text-sm text-[var(--text-muted,#64748b)]">${this.msg['intent.projectDetailWorkspace.listTimeLogs.list.empty']}</p>`
                : html`
                    <div class="flex items-center justify-between text-sm text-[var(--text-muted,#64748b)]">
                      <span>${this.msg['intent.projectDetailWorkspace.listTimeLogs.list.column.timeLogs.label']}</span>
                      <span>${this.msg['intent.projectDetailWorkspace.listTimeLogs.list.column.total.label']}: ${fmt(timeLogsTotal)}</span>
                    </div>
                    <div class="overflow-x-auto">
                      <table class="min-w-full text-sm">
                        <thead>
                          <tr class="border-b border-[var(--border-subtle,#e2e8f0)] text-left text-[var(--text-muted,#64748b)]">
                            <th class="py-2 pr-3 font-medium">ID</th>
                            <th class="py-2 pr-3 font-medium">Task</th>
                            <th class="py-2 pr-3 font-medium">Worker</th>
                            <th class="py-2 pr-3 font-medium">Date</th>
                            <th class="py-2 pr-3 font-medium">Hours</th>
                            <th class="py-2 pr-3 font-medium">Status</th>
                          </tr>
                        </thead>
                        <tbody>
                          ${timeLogs.map((item: TimeLogRow) => {
                            const r = rowRecord(item as object);
                            return html`
                              <tr class="border-b border-[var(--border-subtle,#e2e8f0)]">
                                <td class="py-2 pr-3">${fmt(r['timeLogId'] ?? r['id'])}</td>
                                <td class="py-2 pr-3">${fmt(r['workTaskId'])}</td>
                                <td class="py-2 pr-3">${fmt(r['workerName'])}</td>
                                <td class="py-2 pr-3">${fmt(r['logDate'])}</td>
                                <td class="py-2 pr-3">${fmt(r['hours'] ?? r['hoursWorked'])}</td>
                                <td class="py-2 pr-3">
                                  <span class="inline-flex rounded-md px-2 py-0.5 text-xs bg-[var(--status-neutral-bg,#f1f5f9)] text-[var(--status-neutral-text,#334155)]">
                                    ${fmt(r['status'])}
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

          <!-- Material Usage -->
          <section class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-4 space-y-4">
            <div class="flex flex-wrap items-center justify-between gap-3">
              <h2 class="text-lg font-medium text-[var(--text-strong,#0f172a)]">
                ${this.msg['section.projectDetailWorkspace.sec-materialUsage.title']}
              </h2>
              <button
                type="button"
                class="inline-flex items-center gap-2 rounded-md px-3 py-1.5 text-sm bg-[var(--button-primary-bg,#2563eb)] text-[var(--button-primary-text,#ffffff)] disabled:opacity-60"
                ?disabled=${this.listMaterialUsagesState === 'loading'}
                @click=${(e: Event) => this.handleListMaterialUsagesClick(e)}
              >
                ${this.listMaterialUsagesState === 'loading' ? html`<span class="animate-pulse">…</span>` : nothing}
                ${this.msg['organism.projectDetailWorkspace.listMaterialUsages.title']}
              </button>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <label class="flex flex-col gap-1 text-sm">
                <span class="text-[var(--text-muted,#64748b)]">${this.msg['intent.projectDetailWorkspace.listMaterialUsages.list.filter.status.label']}</span>
                <input
                  class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-2 py-1.5"
                  .value=${this.listMaterialUsagesStatus}
                  @input=${(e: Event) => this.handleListMaterialUsagesStatusChange(e)}
                />
              </label>
              <label class="flex flex-col gap-1 text-sm">
                <span class="text-[var(--text-muted,#64748b)]">${this.msg['intent.projectDetailWorkspace.listMaterialUsages.list.filter.page.label']}</span>
                <input
                  class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-2 py-1.5"
                  .value=${this.listMaterialUsagesPage}
                  @input=${(e: Event) => this.handleListMaterialUsagesPageChange(e)}
                />
              </label>
              <label class="flex flex-col gap-1 text-sm">
                <span class="text-[var(--text-muted,#64748b)]">${this.msg['intent.projectDetailWorkspace.listMaterialUsages.list.filter.pageSize.label']}</span>
                <input
                  class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-2 py-1.5"
                  .value=${this.listMaterialUsagesPageSize}
                  @input=${(e: Event) => this.handleListMaterialUsagesPageSizeChange(e)}
                />
              </label>
            </div>

            ${this.listMaterialUsagesState === 'loading'
              ? html`<div class="h-32 rounded-md bg-[var(--surface-alt-bg,#f1f5f9)] animate-pulse"></div>`
              : materialUsages.length === 0
                ? html`<p class="text-sm text-[var(--text-muted,#64748b)]">${this.msg['intent.projectDetailWorkspace.listMaterialUsages.list.empty']}</p>`
                : html`
                    <div class="flex items-center justify-between text-sm text-[var(--text-muted,#64748b)]">
                      <span>${this.msg['intent.projectDetailWorkspace.listMaterialUsages.list.column.materialUsages.label']}</span>
                      <span>${this.msg['intent.projectDetailWorkspace.listMaterialUsages.list.column.total.label']}: ${fmt(materialUsagesTotal)}</span>
                    </div>
                    <div class="overflow-x-auto">
                      <table class="min-w-full text-sm">
                        <thead>
                          <tr class="border-b border-[var(--border-subtle,#e2e8f0)] text-left text-[var(--text-muted,#64748b)]">
                            <th class="py-2 pr-3 font-medium">ID</th>
                            <th class="py-2 pr-3 font-medium">Material</th>
                            <th class="py-2 pr-3 font-medium">Qty</th>
                            <th class="py-2 pr-3 font-medium">Unit cost</th>
                            <th class="py-2 pr-3 font-medium">Cost code</th>
                            <th class="py-2 pr-3 font-medium">Date</th>
                            <th class="py-2 pr-3 font-medium">Status</th>
                          </tr>
                        </thead>
                        <tbody>
                          ${materialUsages.map((item: MaterialUsageRow) => {
                            const r = rowRecord(item as object);
                            return html`
                              <tr class="border-b border-[var(--border-subtle,#e2e8f0)]">
                                <td class="py-2 pr-3">${fmt(r['materialUsageId'] ?? r['id'])}</td>
                                <td class="py-2 pr-3">${fmt(r['materialName'] ?? r['name'])}</td>
                                <td class="py-2 pr-3">${fmt(r['quantity'])}</td>
                                <td class="py-2 pr-3">${fmt(r['unitCost'])}</td>
                                <td class="py-2 pr-3">${fmt(r['costCode'])}</td>
                                <td class="py-2 pr-3">${fmt(r['usageDate'])}</td>
                                <td class="py-2 pr-3">
                                  <span class="inline-flex rounded-md px-2 py-0.5 text-xs bg-[var(--status-neutral-bg,#f1f5f9)] text-[var(--status-neutral-text,#334155)]">
                                    ${fmt(r['status'])}
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

          <!-- Delay Risk Insights -->
          <section class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-4 space-y-4">
            <h2 class="text-lg font-medium text-[var(--text-strong,#0f172a)]">
              ${this.msg['section.projectDetailWorkspace.sec-delayRiskInsights.title']}
            </h2>

            <div class="rounded-md border border-[var(--border-subtle,#e2e8f0)] bg-[var(--surface-alt-bg,#f8fafc)] p-3 space-y-3">
              <h3 class="text-base font-medium">${this.msg['organism.projectDetailWorkspace.triggerDelayRiskSuggestions.title']}</h3>
              <div class="flex flex-wrap items-end gap-3">
                <label class="flex flex-col gap-1 text-sm min-w-[12rem]">
                  <span class="text-[var(--text-muted,#64748b)]">Status report ID</span>
                  <input
                    class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-2 py-1.5"
                    .value=${this.triggerDelayRiskSuggestionsStatusReportId}
                    @input=${(e: Event) => this.handleTriggerDelayRiskSuggestionsStatusReportIdChange(e)}
                  />
                </label>
                <button
                  type="button"
                  class="inline-flex items-center gap-2 rounded-md px-3 py-1.5 text-sm bg-[var(--button-primary-bg,#2563eb)] text-[var(--button-primary-text,#ffffff)] disabled:opacity-60"
                  ?disabled=${this.triggerDelayRiskSuggestionsState === 'loading'}
                  @click=${(e: Event) => this.handleTriggerDelayRiskSuggestionsClick(e)}
                >
                  ${this.triggerDelayRiskSuggestionsState === 'loading'
                    ? html`<span class="animate-pulse">…</span>`
                    : nothing}
                  ${this.msg['intent.projectDetailWorkspace.triggerDelayRiskSuggestions.form.action.triggerDelayRiskSuggestions']}
                </button>
              </div>

              ${this.triggerDelayRiskSuggestionsState === 'success'
                ? html`
                    <div
                      class="flex items-start justify-between gap-3 rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--status-success-bg,#dcfce7)] px-3 py-2 text-sm text-[var(--status-success-text,#166534)]"
                      role="status"
                    >
                      <p>${this.msg['action.triggerDelayRiskSuggestions.success']}</p>
                      <button
                        type="button"
                        class="shrink-0 text-[var(--status-success-text,#166534)] underline"
                        @click=${(_e: Event) => {
                          /* visual dismiss only — status owned by base */
                        }}
                      >
                        ×
                      </button>
                    </div>
                  `
                : this.triggerDelayRiskSuggestionsState === 'error'
                  ? html`
                      <div
                        class="flex items-start justify-between gap-3 rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--status-error-bg,#fee2e2)] px-3 py-2 text-sm text-[var(--status-error-text,#991b1b)]"
                        role="alert"
                      >
                        <p>
                          ${this.triggerDelayRiskSuggestionsError
                            ? this.triggerDelayRiskSuggestionsError
                            : this.msg['action.triggerDelayRiskSuggestions.error']}
                        </p>
                        <button
                          type="button"
                          class="shrink-0 text-[var(--status-error-text,#991b1b)] underline"
                          @click=${(_e: Event) => {
                            /* visual dismiss only — status owned by base */
                          }}
                        >
                          ×
                        </button>
                      </div>
                    `
                  : nothing}
            </div>

            <div class="space-y-3">
              <div class="flex flex-wrap items-center justify-between gap-3">
                <h3 class="text-base font-medium">${this.msg['organism.projectDetailWorkspace.listDelayRiskSuggestions.title']}</h3>
                <button
                  type="button"
                  class="inline-flex items-center gap-2 rounded-md px-3 py-1.5 text-sm bg-[var(--button-secondary-bg,#f1f5f9)] text-[var(--button-secondary-text,#0f172a)] border border-[var(--button-secondary-border,#e2e8f0)] disabled:opacity-60"
                  ?disabled=${this.listDelayRiskSuggestionsState === 'loading'}
                  @click=${(e: Event) => this.handleListDelayRiskSuggestionsClick(e)}
                >
                  ${this.listDelayRiskSuggestionsState === 'loading' ? html`<span class="animate-pulse">…</span>` : nothing}
                  ${this.msg['intent.projectDetailWorkspace.listDelayRiskSuggestions.list.title']}
                </button>
              </div>

              <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <label class="flex flex-col gap-1 text-sm">
                  <span class="text-[var(--text-muted,#64748b)]">Status report ID</span>
                  <input
                    class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-2 py-1.5"
                    .value=${this.listDelayRiskSuggestionsStatusReportId}
                    @input=${(e: Event) => this.handleListDelayRiskSuggestionsStatusReportIdChange(e)}
                  />
                </label>
                <label class="flex flex-col gap-1 text-sm">
                  <span class="text-[var(--text-muted,#64748b)]">${this.msg['intent.projectDetailWorkspace.listDelayRiskSuggestions.list.filter.acknowledged.label']}</span>
                  <input
                    class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-2 py-1.5"
                    .value=${this.listDelayRiskSuggestionsAcknowledged}
                    @input=${(e: Event) => this.handleListDelayRiskSuggestionsAcknowledgedChange(e)}
                  />
                </label>
              </div>

              ${this.listDelayRiskSuggestionsState === 'loading'
                ? html`<div class="h-32 rounded-md bg-[var(--surface-alt-bg,#f1f5f9)] animate-pulse"></div>`
                : delaySuggestions.length === 0
                  ? html`<p class="text-sm text-[var(--text-muted,#64748b)]">${this.msg['intent.projectDetailWorkspace.listDelayRiskSuggestions.list.empty']}</p>`
                  : html`
                      <div class="overflow-x-auto">
                        <table class="min-w-full text-sm">
                          <thead>
                            <tr class="border-b border-[var(--border-subtle,#e2e8f0)] text-left text-[var(--text-muted,#64748b)]">
                              <th class="py-2 pr-3 font-medium">${this.msg['intent.projectDetailWorkspace.listDelayRiskSuggestions.list.column.delayRiskSuggestionId.label']}</th>
                              <th class="py-2 pr-3 font-medium">${this.msg['intent.projectDetailWorkspace.listDelayRiskSuggestions.list.column.workTaskId.label']}</th>
                              <th class="py-2 pr-3 font-medium">${this.msg['intent.projectDetailWorkspace.listDelayRiskSuggestions.list.column.workTaskTitle.label']}</th>
                              <th class="py-2 pr-3 font-medium">${this.msg['intent.projectDetailWorkspace.listDelayRiskSuggestions.list.column.riskLevel.label']}</th>
                              <th class="py-2 pr-3 font-medium">${this.msg['intent.projectDetailWorkspace.listDelayRiskSuggestions.list.column.reason.label']}</th>
                              <th class="py-2 pr-3 font-medium">${this.msg['intent.projectDetailWorkspace.listDelayRiskSuggestions.list.column.suggestedAction.label']}</th>
                              <th class="py-2 pr-3 font-medium">${this.msg['intent.projectDetailWorkspace.listDelayRiskSuggestions.list.column.acknowledged.label']}</th>
                              <th class="py-2 pr-3 font-medium">${this.msg['intent.projectDetailWorkspace.listDelayRiskSuggestions.list.column.createdAt.label']}</th>
                            </tr>
                          </thead>
                          <tbody>
                            ${delaySuggestions.map((item: ListDelayRiskSuggestionsOutput) => html`
                              <tr class="border-b border-[var(--border-subtle,#e2e8f0)]">
                                <td class="py-2 pr-3">${fmt(item.delayRiskSuggestionId)}</td>
                                <td class="py-2 pr-3">${fmt(item.workTaskId)}</td>
                                <td class="py-2 pr-3">${fmt(item.workTaskTitle)}</td>
                                <td class="py-2 pr-3">
                                  <span class="inline-flex rounded-md px-2 py-0.5 text-xs bg-[var(--status-warning-bg,#fef3c7)] text-[var(--status-warning-text,#92400e)]">
                                    ${fmt(item.riskLevel)}
                                  </span>
                                </td>
                                <td class="py-2 pr-3">${fmt(item.reason)}</td>
                                <td class="py-2 pr-3">${fmt(item.suggestedAction)}</td>
                                <td class="py-2 pr-3">${fmt(item.acknowledged)}</td>
                                <td class="py-2 pr-3">${fmt(item.createdAt)}</td>
                              </tr>
                            `)}
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
