/// <mls fileReference="_102045_/l2/buildFlowFsm/web/desktop/page31/projectDetailWorkspace.ts" enhancement="_102020_/l2/enhancementAura"/>

import { html, nothing } from 'lit';
import { customElement } from 'lit/decorators.js';
import { BuildFlowFsmProjectDetailWorkspaceBase } from '/_102045_/l2/buildFlowFsm/web/shared/projectDetailWorkspace.js';
import type {
  GetChangeOrderDetailOutput,
  GetProjectDetailOutput,
  ListChangeOrdersOutput,
  ListDelayRiskSuggestionsOutput,
  ListMaterialUsagesOutput,
  ListTimeLogsOutput,
  ListWorkTasksOutput,
} from '/_102045_/l2/buildFlowFsm/web/shared/projectDetailWorkspace.js';

type WorkTaskRow = NonNullable<ListWorkTasksOutput['workTasks']>[number];
type ChangeOrderRow = NonNullable<ListChangeOrdersOutput['changeOrders']>[number];
type TimeLogRow = NonNullable<ListTimeLogsOutput['timeLogs']>[number];
type MaterialUsageRow = NonNullable<ListMaterialUsagesOutput['materialUsages']>[number];

@customElement('build-flow-fsm--web--desktop--page31--project-detail-workspace-102045')
export class BuildFlowFsmDesktopPage31ProjectDetailWorkspacePage extends BuildFlowFsmProjectDetailWorkspaceBase {
  render() {
    const project: GetProjectDetailOutput | null = this.getProjectDetailData;
    const workTasks: WorkTaskRow[] = this.listWorkTasksData?.workTasks ?? [];
    const workTasksTotal = this.listWorkTasksData?.total ?? 0;
    const changeOrders: ChangeOrderRow[] = this.listChangeOrdersData?.changeOrders ?? [];
    const changeOrdersTotal = this.listChangeOrdersData?.total ?? 0;
    const changeOrderDetail: GetChangeOrderDetailOutput | null = this.getChangeOrderDetailData;
    const timeLogs: TimeLogRow[] = this.listTimeLogsData?.timeLogs ?? [];
    const timeLogsTotal = this.listTimeLogsData?.total ?? 0;
    const materialUsages: MaterialUsageRow[] = this.listMaterialUsagesData?.materialUsages ?? [];
    const materialUsagesTotal = this.listMaterialUsagesData?.total ?? 0;
    const delayRisks: ListDelayRiskSuggestionsOutput[] = this.listDelayRiskSuggestionsData ?? [];

    const tasksByStatus = workTasks.reduce<Record<string, WorkTaskRow[]>>((acc, task) => {
      const key = String((task as { status?: string }).status ?? 'unknown');
      if (!acc[key]) acc[key] = [];
      acc[key].push(task);
      return acc;
    }, {});
    const taskStatusLanes = Object.keys(tasksByStatus);

    const formatValue = (value: unknown): string => {
      if (value === null || value === undefined || value === '') return '—';
      if (typeof value === 'boolean') return value ? 'Yes' : 'No';
      return String(value);
    };

    const selectedChangeOrderId = this.getChangeOrderDetailChangeOrderId;

    return html`
      <div class="min-h-screen bg-[var(--page-bg,#f8fafc)] text-[var(--text-default,#0f172a)] p-6 space-y-6">
        <header class="space-y-1">
          <h1 class="text-2xl font-semibold text-[var(--text-strong,#020617)]">
            ${this.msg['section.projectDetailWorkspace.sec-project-header.title']}
          </h1>
          <p class="text-sm text-[var(--text-muted,#64748b)]">
            ${this.msg['organism.projectDetailWorkspace.getProjectDetail.title']}
          </p>
        </header>

        <!-- Project summary -->
        <section class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-5 shadow-sm">
          <div class="flex flex-wrap items-center justify-between gap-3 mb-4">
            <h2 class="text-lg font-medium text-[var(--text-strong,#020617)]">
              ${this.msg['intent.projectDetailWorkspace.getProjectDetail.list.title']}
            </h2>
            <button
              type="button"
              class="px-4 py-2 rounded-md bg-[var(--button-secondary-bg,#f1f5f9)] text-[var(--button-secondary-text,#0f172a)] border border-[var(--button-secondary-border,#e2e8f0)] disabled:opacity-60"
              ?disabled=${this.getProjectDetailState === 'loading'}
              @click=${this.handleGetProjectDetailClick}
            >
              ${this.getProjectDetailState === 'loading' ? 'Loading…' : 'Refresh'}
            </button>
          </div>

          ${this.getProjectDetailState === 'loading'
            ? html`<div class="animate-pulse h-24 rounded-md bg-[var(--surface-alt-bg,#f1f5f9)]"></div>`
            : project
              ? html`
                  <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
                    <div class="rounded-md bg-[var(--surface-alt-bg,#f1f5f9)] p-3">
                      <div class="text-xs text-[var(--text-muted,#64748b)]">${this.msg['intent.projectDetailWorkspace.getProjectDetail.list.column.name.label']}</div>
                      <div class="font-semibold text-[var(--text-strong,#020617)]">${formatValue(project.name)}</div>
                    </div>
                    <div class="rounded-md bg-[var(--surface-alt-bg,#f1f5f9)] p-3">
                      <div class="text-xs text-[var(--text-muted,#64748b)]">${this.msg['intent.projectDetailWorkspace.getProjectDetail.list.column.status.label']}</div>
                      <div class="inline-flex mt-1 px-2 py-0.5 rounded-full text-sm bg-[var(--status-info-bg,#dbeafe)] text-[var(--status-info-text,#1e40af)]">
                        ${formatValue(project.status)}
                      </div>
                    </div>
                    <div class="rounded-md bg-[var(--surface-alt-bg,#f1f5f9)] p-3">
                      <div class="text-xs text-[var(--text-muted,#64748b)]">${this.msg['intent.projectDetailWorkspace.getProjectDetail.list.column.budget.label']}</div>
                      <div class="font-semibold">${formatValue(project.budget)}</div>
                    </div>
                    <div class="rounded-md bg-[var(--surface-alt-bg,#f1f5f9)] p-3">
                      <div class="text-xs text-[var(--text-muted,#64748b)]">${this.msg['intent.projectDetailWorkspace.getProjectDetail.list.column.clientName.label']}</div>
                      <div class="font-semibold">${formatValue(project.clientName)}</div>
                    </div>
                  </div>
                  <dl class="mt-4 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-6 gap-y-3 text-sm">
                    <div>
                      <dt class="text-[var(--text-muted,#64748b)]">${this.msg['intent.projectDetailWorkspace.getProjectDetail.list.column.projectId.label']}</dt>
                      <dd>${formatValue(project.projectId)}</dd>
                    </div>
                    <div>
                      <dt class="text-[var(--text-muted,#64748b)]">${this.msg['intent.projectDetailWorkspace.getProjectDetail.list.column.clientId.label']}</dt>
                      <dd>${formatValue(project.clientId)}</dd>
                    </div>
                    <div>
                      <dt class="text-[var(--text-muted,#64748b)]">${this.msg['intent.projectDetailWorkspace.getProjectDetail.list.column.clientCompany.label']}</dt>
                      <dd>${formatValue(project.clientCompany)}</dd>
                    </div>
                    <div>
                      <dt class="text-[var(--text-muted,#64748b)]">${this.msg['intent.projectDetailWorkspace.getProjectDetail.list.column.siteAddress.label']}</dt>
                      <dd>${formatValue(project.siteAddress)}</dd>
                    </div>
                    <div>
                      <dt class="text-[var(--text-muted,#64748b)]">${this.msg['intent.projectDetailWorkspace.getProjectDetail.list.column.startDate.label']}</dt>
                      <dd>${formatValue(project.startDate)}</dd>
                    </div>
                    <div>
                      <dt class="text-[var(--text-muted,#64748b)]">${this.msg['intent.projectDetailWorkspace.getProjectDetail.list.column.endDate.label']}</dt>
                      <dd>${formatValue(project.endDate)}</dd>
                    </div>
                    <div>
                      <dt class="text-[var(--text-muted,#64748b)]">${this.msg['intent.projectDetailWorkspace.getProjectDetail.list.column.holdReason.label']}</dt>
                      <dd>${formatValue(project.holdReason)}</dd>
                    </div>
                    <div>
                      <dt class="text-[var(--text-muted,#64748b)]">${this.msg['intent.projectDetailWorkspace.getProjectDetail.list.column.closedAt.label']}</dt>
                      <dd>${formatValue(project.closedAt)}</dd>
                    </div>
                    <div>
                      <dt class="text-[var(--text-muted,#64748b)]">${this.msg['intent.projectDetailWorkspace.getProjectDetail.list.column.cancelledAt.label']}</dt>
                      <dd>${formatValue(project.cancelledAt)}</dd>
                    </div>
                    <div>
                      <dt class="text-[var(--text-muted,#64748b)]">${this.msg['intent.projectDetailWorkspace.getProjectDetail.list.column.cancellationReason.label']}</dt>
                      <dd>${formatValue(project.cancellationReason)}</dd>
                    </div>
                    <div>
                      <dt class="text-[var(--text-muted,#64748b)]">${this.msg['intent.projectDetailWorkspace.getProjectDetail.list.column.createdAt.label']}</dt>
                      <dd>${formatValue(project.createdAt)}</dd>
                    </div>
                    <div>
                      <dt class="text-[var(--text-muted,#64748b)]">${this.msg['intent.projectDetailWorkspace.getProjectDetail.list.column.updatedAt.label']}</dt>
                      <dd>${formatValue(project.updatedAt)}</dd>
                    </div>
                  </dl>
                `
              : html`<p class="text-sm text-[var(--text-muted,#64748b)]">${this.msg['intent.projectDetailWorkspace.getProjectDetail.list.empty']}</p>`}
        </section>

        <!-- Task timeline board -->
        <section class="space-y-3">
          <div class="flex flex-wrap items-end justify-between gap-3">
            <h2 class="text-lg font-medium text-[var(--text-strong,#020617)]">
              ${this.msg['section.projectDetailWorkspace.sec-task-timeline.title']}
            </h2>
            <span class="text-sm text-[var(--text-muted,#64748b)]">
              ${this.msg['intent.projectDetailWorkspace.listWorkTasks.list.column.total.label']}: ${workTasksTotal}
            </span>
          </div>

          <div class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-4 space-y-4">
            <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-3">
              <label class="flex flex-col gap-1 text-sm">
                <span class="text-[var(--text-muted,#64748b)]">${this.msg['intent.projectDetailWorkspace.listWorkTasks.list.filter.projectId.label']}</span>
                <input
                  class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2"
                  .value=${this.listWorkTasksProjectId}
                  @input=${this.handleListWorkTasksProjectIdChange}
                />
              </label>
              <label class="flex flex-col gap-1 text-sm">
                <span class="text-[var(--text-muted,#64748b)]">${this.msg['intent.projectDetailWorkspace.listWorkTasks.list.filter.status.label']}</span>
                <input
                  class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2"
                  .value=${this.listWorkTasksStatus}
                  @input=${this.handleListWorkTasksStatusChange}
                />
              </label>
              <label class="flex flex-col gap-1 text-sm">
                <span class="text-[var(--text-muted,#64748b)]">${this.msg['intent.projectDetailWorkspace.listWorkTasks.list.filter.assignedWorkerId.label']}</span>
                <input
                  class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2"
                  .value=${this.listWorkTasksAssignedWorkerId}
                  @input=${this.handleListWorkTasksAssignedWorkerIdChange}
                />
              </label>
              <label class="flex flex-col gap-1 text-sm">
                <span class="text-[var(--text-muted,#64748b)]">${this.msg['intent.projectDetailWorkspace.listWorkTasks.list.filter.page.label']}</span>
                <input
                  class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2"
                  .value=${this.listWorkTasksPage}
                  @input=${this.handleListWorkTasksPageChange}
                />
              </label>
              <label class="flex flex-col gap-1 text-sm">
                <span class="text-[var(--text-muted,#64748b)]">${this.msg['intent.projectDetailWorkspace.listWorkTasks.list.filter.pageSize.label']}</span>
                <input
                  class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2"
                  .value=${this.listWorkTasksPageSize}
                  @input=${this.handleListWorkTasksPageSizeChange}
                />
              </label>
            </div>
            <button
              type="button"
              class="px-4 py-2 rounded-md bg-[var(--button-primary-bg,#2563eb)] text-[var(--button-primary-text,#ffffff)] disabled:opacity-60"
              ?disabled=${this.listWorkTasksState === 'loading'}
              @click=${this.handleListWorkTasksClick}
            >
              ${this.listWorkTasksState === 'loading' ? 'Loading…' : this.msg['organism.projectDetailWorkspace.listWorkTasks.title']}
            </button>

            ${this.listWorkTasksState === 'loading'
              ? html`<div class="animate-pulse h-32 rounded-md bg-[var(--surface-alt-bg,#f1f5f9)]"></div>`
              : workTasks.length === 0
                ? html`<p class="text-sm text-[var(--text-muted,#64748b)]">${this.msg['intent.projectDetailWorkspace.listWorkTasks.list.empty']}</p>`
                : html`
                    <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3">
                      ${taskStatusLanes.map(
                        (lane) => html`
                          <div class="rounded-md border border-[var(--border-subtle,#e2e8f0)] bg-[var(--surface-alt-bg,#f1f5f9)] p-3 space-y-2">
                            <div class="text-xs font-semibold uppercase tracking-wide text-[var(--text-muted,#64748b)]">${lane}</div>
                            ${(tasksByStatus[lane] ?? []).map((task: WorkTaskRow) => {
                              const row = task as WorkTaskRow & {
                                workTaskId?: string;
                                title?: string;
                                assignedWorkerId?: string;
                                status?: string;
                              };
                              return html`
                                <article class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-3 space-y-1">
                                  <div class="font-medium text-[var(--text-strong,#020617)]">${formatValue(row.title ?? row.workTaskId)}</div>
                                  <div class="text-xs text-[var(--text-muted,#64748b)]">ID: ${formatValue(row.workTaskId)}</div>
                                  <div class="text-xs text-[var(--text-muted,#64748b)]">Worker: ${formatValue(row.assignedWorkerId)}</div>
                                  <div class="inline-flex px-2 py-0.5 rounded-full text-xs bg-[var(--status-neutral-bg,#e2e8f0)] text-[var(--status-neutral-text,#334155)]">
                                    ${formatValue(row.status)}
                                  </div>
                                </article>
                              `;
                            })}
                          </div>
                        `,
                      )}
                    </div>
                  `}
          </div>
        </section>

        <!-- Change orders master-detail -->
        <section class="space-y-3">
          <h2 class="text-lg font-medium text-[var(--text-strong,#020617)]">
            ${this.msg['section.projectDetailWorkspace.sec-change-orders.title']}
          </h2>
          <div class="grid grid-cols-1 xl:grid-cols-3 gap-4">
            <div class="xl:col-span-2 rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-4 space-y-4">
              <div class="flex flex-wrap items-center justify-between gap-2">
                <h3 class="font-medium">${this.msg['organism.projectDetailWorkspace.listChangeOrders.title']}</h3>
                <span class="text-sm text-[var(--text-muted,#64748b)]">
                  ${this.msg['intent.projectDetailWorkspace.listChangeOrders.list.column.total.label']}: ${changeOrdersTotal}
                </span>
              </div>
              <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-3">
                <label class="flex flex-col gap-1 text-sm">
                  <span class="text-[var(--text-muted,#64748b)]">${this.msg['intent.projectDetailWorkspace.listChangeOrders.list.filter.status.label']}</span>
                  <input
                    class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2"
                    .value=${this.listChangeOrdersStatus}
                    @input=${this.handleListChangeOrdersStatusChange}
                  />
                </label>
                <label class="flex flex-col gap-1 text-sm">
                  <span class="text-[var(--text-muted,#64748b)]">${this.msg['intent.projectDetailWorkspace.listChangeOrders.list.filter.impactType.label']}</span>
                  <input
                    class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2"
                    .value=${this.listChangeOrdersImpactType}
                    @input=${this.handleListChangeOrdersImpactTypeChange}
                  />
                </label>
                <label class="flex flex-col gap-1 text-sm">
                  <span class="text-[var(--text-muted,#64748b)]">${this.msg['intent.projectDetailWorkspace.listChangeOrders.list.filter.page.label']}</span>
                  <input
                    class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2"
                    .value=${this.listChangeOrdersPage}
                    @input=${this.handleListChangeOrdersPageChange}
                  />
                </label>
                <label class="flex flex-col gap-1 text-sm">
                  <span class="text-[var(--text-muted,#64748b)]">${this.msg['intent.projectDetailWorkspace.listChangeOrders.list.filter.pageSize.label']}</span>
                  <input
                    class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2"
                    .value=${this.listChangeOrdersPageSize}
                    @input=${this.handleListChangeOrdersPageSizeChange}
                  />
                </label>
              </div>
              <button
                type="button"
                class="px-4 py-2 rounded-md bg-[var(--button-primary-bg,#2563eb)] text-[var(--button-primary-text,#ffffff)] disabled:opacity-60"
                ?disabled=${this.listChangeOrdersState === 'loading'}
                @click=${this.handleListChangeOrdersClick}
              >
                ${this.listChangeOrdersState === 'loading' ? 'Loading…' : this.msg['intent.projectDetailWorkspace.listChangeOrders.list.title']}
              </button>

              ${this.listChangeOrdersState === 'loading'
                ? html`<div class="animate-pulse h-40 rounded-md bg-[var(--surface-alt-bg,#f1f5f9)]"></div>`
                : changeOrders.length === 0
                  ? html`<p class="text-sm text-[var(--text-muted,#64748b)]">${this.msg['intent.projectDetailWorkspace.listChangeOrders.list.empty']}</p>`
                  : html`
                      <div class="overflow-x-auto">
                        <table class="min-w-full text-sm">
                          <thead>
                            <tr class="text-left text-[var(--text-muted,#64748b)] border-b border-[var(--border-subtle,#e2e8f0)]">
                              <th class="py-2 pr-3">${this.msg['intent.projectDetailWorkspace.getChangeOrderDetail.list.column.title.label']}</th>
                              <th class="py-2 pr-3">${this.msg['intent.projectDetailWorkspace.getChangeOrderDetail.list.column.impactType.label']}</th>
                              <th class="py-2 pr-3">${this.msg['intent.projectDetailWorkspace.getChangeOrderDetail.list.column.costAdjustment.label']}</th>
                              <th class="py-2 pr-3">${this.msg['intent.projectDetailWorkspace.getChangeOrderDetail.list.column.status.label']}</th>
                            </tr>
                          </thead>
                          <tbody>
                            ${changeOrders.map((item: ChangeOrderRow) => {
                              const row = item as ChangeOrderRow & {
                                changeOrderId?: string;
                                title?: string;
                                impactType?: string;
                                costAdjustment?: number | string;
                                status?: string;
                              };
                              const id = String(row.changeOrderId ?? '');
                              const isSelected = id !== '' && id === selectedChangeOrderId;
                              return html`
                                <tr
                                  class="border-b border-[var(--border-subtle,#e2e8f0)] cursor-pointer ${isSelected
                                    ? 'bg-[var(--selected-bg,#dbeafe)] text-[var(--selected-text,#1e3a8a)]'
                                    : 'hover:bg-[var(--surface-alt-bg,#f1f5f9)]'}"
                                  @click=${() => {
                                    this.setGetChangeOrderDetailChangeOrderId(id);
                                    this.handleGetChangeOrderDetailClick();
                                  }}
                                >
                                  <td class="py-2 pr-3 font-medium">${formatValue(row.title ?? row.changeOrderId)}</td>
                                  <td class="py-2 pr-3">${formatValue(row.impactType)}</td>
                                  <td class="py-2 pr-3">${formatValue(row.costAdjustment)}</td>
                                  <td class="py-2 pr-3">
                                    <span class="inline-flex px-2 py-0.5 rounded-full text-xs bg-[var(--status-neutral-bg,#e2e8f0)] text-[var(--status-neutral-text,#334155)]">
                                      ${formatValue(row.status)}
                                    </span>
                                  </td>
                                </tr>
                              `;
                            })}
                          </tbody>
                        </table>
                      </div>
                    `}
            </div>

            <aside class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-4 space-y-3">
              <h3 class="font-medium">${this.msg['organism.projectDetailWorkspace.getChangeOrderDetail.title']}</h3>
              ${this.getChangeOrderDetailState === 'loading'
                ? html`<div class="animate-pulse h-40 rounded-md bg-[var(--surface-alt-bg,#f1f5f9)]"></div>`
                : changeOrderDetail
                  ? html`
                      <dl class="space-y-2 text-sm">
                        <div>
                          <dt class="text-[var(--text-muted,#64748b)]">${this.msg['intent.projectDetailWorkspace.getChangeOrderDetail.list.column.changeOrderId.label']}</dt>
                          <dd class="font-medium">${formatValue(changeOrderDetail.changeOrderId)}</dd>
                        </div>
                        <div>
                          <dt class="text-[var(--text-muted,#64748b)]">${this.msg['intent.projectDetailWorkspace.getChangeOrderDetail.list.column.title.label']}</dt>
                          <dd class="font-medium">${formatValue(changeOrderDetail.title)}</dd>
                        </div>
                        <div>
                          <dt class="text-[var(--text-muted,#64748b)]">${this.msg['intent.projectDetailWorkspace.getChangeOrderDetail.list.column.description.label']}</dt>
                          <dd>${formatValue(changeOrderDetail.description)}</dd>
                        </div>
                        <div>
                          <dt class="text-[var(--text-muted,#64748b)]">${this.msg['intent.projectDetailWorkspace.getChangeOrderDetail.list.column.impactType.label']}</dt>
                          <dd>${formatValue(changeOrderDetail.impactType)}</dd>
                        </div>
                        <div>
                          <dt class="text-[var(--text-muted,#64748b)]">${this.msg['intent.projectDetailWorkspace.getChangeOrderDetail.list.column.costAdjustment.label']}</dt>
                          <dd>${formatValue(changeOrderDetail.costAdjustment)}</dd>
                        </div>
                        <div>
                          <dt class="text-[var(--text-muted,#64748b)]">${this.msg['intent.projectDetailWorkspace.getChangeOrderDetail.list.column.scheduleAdjustmentDays.label']}</dt>
                          <dd>${formatValue(changeOrderDetail.scheduleAdjustmentDays)}</dd>
                        </div>
                        <div>
                          <dt class="text-[var(--text-muted,#64748b)]">${this.msg['intent.projectDetailWorkspace.getChangeOrderDetail.list.column.status.label']}</dt>
                          <dd>
                            <span class="inline-flex px-2 py-0.5 rounded-full text-xs bg-[var(--status-info-bg,#dbeafe)] text-[var(--status-info-text,#1e40af)]">
                              ${formatValue(changeOrderDetail.status)}
                            </span>
                          </dd>
                        </div>
                        <div>
                          <dt class="text-[var(--text-muted,#64748b)]">${this.msg['intent.projectDetailWorkspace.getChangeOrderDetail.list.column.rejectionReason.label']}</dt>
                          <dd>${formatValue(changeOrderDetail.rejectionReason)}</dd>
                        </div>
                        <div>
                          <dt class="text-[var(--text-muted,#64748b)]">${this.msg['intent.projectDetailWorkspace.getChangeOrderDetail.list.column.approvedAt.label']}</dt>
                          <dd>${formatValue(changeOrderDetail.approvedAt)}</dd>
                        </div>
                        <div>
                          <dt class="text-[var(--text-muted,#64748b)]">${this.msg['intent.projectDetailWorkspace.getChangeOrderDetail.list.column.rejectedAt.label']}</dt>
                          <dd>${formatValue(changeOrderDetail.rejectedAt)}</dd>
                        </div>
                        <div>
                          <dt class="text-[var(--text-muted,#64748b)]">${this.msg['intent.projectDetailWorkspace.getChangeOrderDetail.list.column.projectName.label']}</dt>
                          <dd>${formatValue(changeOrderDetail.projectName)}</dd>
                        </div>
                        <div>
                          <dt class="text-[var(--text-muted,#64748b)]">${this.msg['intent.projectDetailWorkspace.getChangeOrderDetail.list.column.projectBudget.label']}</dt>
                          <dd>${formatValue(changeOrderDetail.projectBudget)}</dd>
                        </div>
                        <div>
                          <dt class="text-[var(--text-muted,#64748b)]">${this.msg['intent.projectDetailWorkspace.getChangeOrderDetail.list.column.affectsJobCosting.label']}</dt>
                          <dd>${formatValue(changeOrderDetail.affectsJobCosting)}</dd>
                        </div>
                      </dl>
                    `
                  : html`<p class="text-sm text-[var(--text-muted,#64748b)]">${this.msg['intent.projectDetailWorkspace.getChangeOrderDetail.list.empty']}</p>`}
            </aside>
          </div>
        </section>

        <!-- Cost tracking: time logs -->
        <section class="space-y-3">
          <h2 class="text-lg font-medium text-[var(--text-strong,#020617)]">
            ${this.msg['section.projectDetailWorkspace.sec-cost-tracking.title']}
          </h2>
          <div class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-4 space-y-4">
            <div class="flex flex-wrap items-center justify-between gap-2">
              <h3 class="font-medium">${this.msg['organism.projectDetailWorkspace.listTimeLogs.title']}</h3>
              <span class="text-sm text-[var(--text-muted,#64748b)]">
                ${this.msg['intent.projectDetailWorkspace.listTimeLogs.list.column.total.label']}: ${timeLogsTotal}
              </span>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3">
              <label class="flex flex-col gap-1 text-sm">
                <span class="text-[var(--text-muted,#64748b)]">${this.msg['intent.projectDetailWorkspace.listTimeLogs.list.filter.workTaskId.label']}</span>
                <input
                  class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2"
                  .value=${this.listTimeLogsWorkTaskId}
                  @input=${this.handleListTimeLogsWorkTaskIdChange}
                />
              </label>
              <label class="flex flex-col gap-1 text-sm">
                <span class="text-[var(--text-muted,#64748b)]">${this.msg['intent.projectDetailWorkspace.listTimeLogs.list.filter.workerName.label']}</span>
                <input
                  class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2"
                  .value=${this.listTimeLogsWorkerName}
                  @input=${this.handleListTimeLogsWorkerNameChange}
                />
              </label>
              <label class="flex flex-col gap-1 text-sm">
                <span class="text-[var(--text-muted,#64748b)]">${this.msg['intent.projectDetailWorkspace.listTimeLogs.list.filter.logDate.label']}</span>
                <input
                  type="date"
                  class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2"
                  .value=${this.listTimeLogsLogDate}
                  @input=${this.handleListTimeLogsLogDateChange}
                />
              </label>
              <label class="flex flex-col gap-1 text-sm">
                <span class="text-[var(--text-muted,#64748b)]">${this.msg['intent.projectDetailWorkspace.listTimeLogs.list.filter.status.label']}</span>
                <input
                  class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2"
                  .value=${this.listTimeLogsStatus}
                  @input=${this.handleListTimeLogsStatusChange}
                />
              </label>
              <label class="flex flex-col gap-1 text-sm">
                <span class="text-[var(--text-muted,#64748b)]">${this.msg['intent.projectDetailWorkspace.listTimeLogs.list.filter.page.label']}</span>
                <input
                  class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2"
                  .value=${this.listTimeLogsPage}
                  @input=${this.handleListTimeLogsPageChange}
                />
              </label>
              <label class="flex flex-col gap-1 text-sm">
                <span class="text-[var(--text-muted,#64748b)]">${this.msg['intent.projectDetailWorkspace.listTimeLogs.list.filter.pageSize.label']}</span>
                <input
                  class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2"
                  .value=${this.listTimeLogsPageSize}
                  @input=${this.handleListTimeLogsPageSizeChange}
                />
              </label>
            </div>
            <button
              type="button"
              class="px-4 py-2 rounded-md bg-[var(--button-primary-bg,#2563eb)] text-[var(--button-primary-text,#ffffff)] disabled:opacity-60"
              ?disabled=${this.listTimeLogsState === 'loading'}
              @click=${this.handleListTimeLogsClick}
            >
              ${this.listTimeLogsState === 'loading' ? 'Loading…' : this.msg['intent.projectDetailWorkspace.listTimeLogs.list.title']}
            </button>

            ${this.listTimeLogsState === 'loading'
              ? html`<div class="animate-pulse h-28 rounded-md bg-[var(--surface-alt-bg,#f1f5f9)]"></div>`
              : timeLogs.length === 0
                ? html`<p class="text-sm text-[var(--text-muted,#64748b)]">${this.msg['intent.projectDetailWorkspace.listTimeLogs.list.empty']}</p>`
                : html`
                    <div class="overflow-x-auto">
                      <table class="min-w-full text-sm">
                        <thead>
                          <tr class="text-left text-[var(--text-muted,#64748b)] border-b border-[var(--border-subtle,#e2e8f0)]">
                            <th class="py-2 pr-3">Task</th>
                            <th class="py-2 pr-3">Worker</th>
                            <th class="py-2 pr-3">Date</th>
                            <th class="py-2 pr-3">Hours</th>
                            <th class="py-2 pr-3">Status</th>
                          </tr>
                        </thead>
                        <tbody>
                          ${timeLogs.map((item: TimeLogRow) => {
                            const row = item as TimeLogRow & {
                              workTaskId?: string;
                              workerName?: string;
                              logDate?: string;
                              hours?: number | string;
                              status?: string;
                            };
                            return html`
                              <tr class="border-b border-[var(--border-subtle,#e2e8f0)]">
                                <td class="py-2 pr-3">${formatValue(row.workTaskId)}</td>
                                <td class="py-2 pr-3">${formatValue(row.workerName)}</td>
                                <td class="py-2 pr-3">${formatValue(row.logDate)}</td>
                                <td class="py-2 pr-3">${formatValue(row.hours)}</td>
                                <td class="py-2 pr-3">
                                  <span class="inline-flex px-2 py-0.5 rounded-full text-xs bg-[var(--status-neutral-bg,#e2e8f0)] text-[var(--status-neutral-text,#334155)]">
                                    ${formatValue(row.status)}
                                  </span>
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

        <!-- Material usage -->
        <section class="space-y-3">
          <h2 class="text-lg font-medium text-[var(--text-strong,#020617)]">
            ${this.msg['section.projectDetailWorkspace.sec-materialUsage.title']}
          </h2>
          <div class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-4 space-y-4">
            <div class="flex flex-wrap items-center justify-between gap-2">
              <h3 class="font-medium">${this.msg['organism.projectDetailWorkspace.listMaterialUsages.title']}</h3>
              <span class="text-sm text-[var(--text-muted,#64748b)]">
                ${this.msg['intent.projectDetailWorkspace.listMaterialUsages.list.column.total.label']}: ${materialUsagesTotal}
              </span>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
              <label class="flex flex-col gap-1 text-sm">
                <span class="text-[var(--text-muted,#64748b)]">${this.msg['intent.projectDetailWorkspace.listMaterialUsages.list.filter.status.label']}</span>
                <input
                  class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2"
                  .value=${this.listMaterialUsagesStatus}
                  @input=${this.handleListMaterialUsagesStatusChange}
                />
              </label>
              <label class="flex flex-col gap-1 text-sm">
                <span class="text-[var(--text-muted,#64748b)]">${this.msg['intent.projectDetailWorkspace.listMaterialUsages.list.filter.page.label']}</span>
                <input
                  class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2"
                  .value=${this.listMaterialUsagesPage}
                  @input=${this.handleListMaterialUsagesPageChange}
                />
              </label>
              <label class="flex flex-col gap-1 text-sm">
                <span class="text-[var(--text-muted,#64748b)]">${this.msg['intent.projectDetailWorkspace.listMaterialUsages.list.filter.pageSize.label']}</span>
                <input
                  class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2"
                  .value=${this.listMaterialUsagesPageSize}
                  @input=${this.handleListMaterialUsagesPageSizeChange}
                />
              </label>
            </div>
            <button
              type="button"
              class="px-4 py-2 rounded-md bg-[var(--button-primary-bg,#2563eb)] text-[var(--button-primary-text,#ffffff)] disabled:opacity-60"
              ?disabled=${this.listMaterialUsagesState === 'loading'}
              @click=${this.handleListMaterialUsagesClick}
            >
              ${this.listMaterialUsagesState === 'loading' ? 'Loading…' : this.msg['intent.projectDetailWorkspace.listMaterialUsages.list.title']}
            </button>

            ${this.listMaterialUsagesState === 'loading'
              ? html`<div class="animate-pulse h-28 rounded-md bg-[var(--surface-alt-bg,#f1f5f9)]"></div>`
              : materialUsages.length === 0
                ? html`<p class="text-sm text-[var(--text-muted,#64748b)]">${this.msg['intent.projectDetailWorkspace.listMaterialUsages.list.empty']}</p>`
                : html`
                    <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3">
                      ${materialUsages.map((item: MaterialUsageRow) => {
                        const row = item as MaterialUsageRow & {
                          materialUsageId?: string;
                          materialName?: string;
                          quantity?: number | string;
                          unit?: string;
                          status?: string;
                          projectId?: string;
                        };
                        return html`
                          <article class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-alt-bg,#f1f5f9)] p-3 space-y-1">
                            <div class="font-medium text-[var(--text-strong,#020617)]">${formatValue(row.materialName ?? row.materialUsageId)}</div>
                            <div class="text-xs text-[var(--text-muted,#64748b)]">Qty: ${formatValue(row.quantity)} ${formatValue(row.unit)}</div>
                            <div class="text-xs text-[var(--text-muted,#64748b)]">Project: ${formatValue(row.projectId)}</div>
                            <span class="inline-flex px-2 py-0.5 rounded-full text-xs bg-[var(--status-neutral-bg,#e2e8f0)] text-[var(--status-neutral-text,#334155)]">
                              ${formatValue(row.status)}
                            </span>
                          </article>
                        `;
                      })}
                    </div>
                  `}
          </div>
        </section>

        <!-- Delay-risk insights -->
        <section class="space-y-3">
          <h2 class="text-lg font-medium text-[var(--text-strong,#020617)]">
            ${this.msg['section.projectDetailWorkspace.sec-delay-risk-insights.title']}
          </h2>
          <div class="grid grid-cols-1 xl:grid-cols-3 gap-4">
            <div class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-4 space-y-4">
              <h3 class="font-medium">${this.msg['organism.projectDetailWorkspace.triggerDelayRiskSuggestions.title']}</h3>
              <p class="text-sm text-[var(--text-muted,#64748b)]">
                ${this.msg['intent.projectDetailWorkspace.triggerDelayRiskSuggestions.form.title']}
              </p>
              <label class="flex flex-col gap-1 text-sm">
                <span class="text-[var(--text-muted,#64748b)]">Status report ID</span>
                <input
                  class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2"
                  .value=${this.triggerDelayRiskSuggestionsStatusReportId}
                  @input=${this.handleTriggerDelayRiskSuggestionsStatusReportIdChange}
                />
              </label>
              <button
                type="button"
                class="w-full px-4 py-2 rounded-md bg-[var(--button-primary-bg,#2563eb)] text-[var(--button-primary-text,#ffffff)] disabled:opacity-60"
                ?disabled=${this.triggerDelayRiskSuggestionsState === 'loading'}
                @click=${this.handleTriggerDelayRiskSuggestionsClick}
              >
                ${this.triggerDelayRiskSuggestionsState === 'loading'
                  ? 'Generating…'
                  : this.msg['intent.projectDetailWorkspace.triggerDelayRiskSuggestions.form.action.triggerDelayRiskSuggestions']}
              </button>

              ${this.triggerDelayRiskSuggestionsState === 'success'
                ? html`
                    <div class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--status-success-bg,#dcfce7)] text-[var(--status-success-text,#166534)] px-3 py-2 text-sm">
                      ${this.msg['action.triggerDelayRiskSuggestions.success']}
                    </div>
                  `
                : nothing}
              ${this.triggerDelayRiskSuggestionsState === 'error'
                ? html`
                    <div class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--status-error-bg,#fee2e2)] text-[var(--status-error-text,#991b1b)] px-3 py-2 text-sm">
                      ${this.triggerDelayRiskSuggestionsError || this.msg['action.triggerDelayRiskSuggestions.error']}
                    </div>
                  `
                : nothing}
            </div>

            <div class="xl:col-span-2 rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-4 space-y-4">
              <div class="flex flex-wrap items-center justify-between gap-2">
                <h3 class="font-medium">${this.msg['organism.projectDetailWorkspace.listDelayRiskSuggestions.title']}</h3>
              </div>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                <label class="flex flex-col gap-1 text-sm">
                  <span class="text-[var(--text-muted,#64748b)]">Status report ID</span>
                  <input
                    class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2"
                    .value=${this.listDelayRiskSuggestionsStatusReportId}
                    @input=${this.handleListDelayRiskSuggestionsStatusReportIdChange}
                  />
                </label>
                <label class="flex flex-col gap-1 text-sm">
                  <span class="text-[var(--text-muted,#64748b)]">${this.msg['intent.projectDetailWorkspace.listDelayRiskSuggestions.list.filter.acknowledged.label']}</span>
                  <input
                    class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2"
                    .value=${this.listDelayRiskSuggestionsAcknowledged}
                    @input=${this.handleListDelayRiskSuggestionsAcknowledgedChange}
                  />
                </label>
              </div>
              <button
                type="button"
                class="px-4 py-2 rounded-md bg-[var(--button-secondary-bg,#f1f5f9)] text-[var(--button-secondary-text,#0f172a)] border border-[var(--button-secondary-border,#e2e8f0)] disabled:opacity-60"
                ?disabled=${this.listDelayRiskSuggestionsState === 'loading'}
                @click=${this.handleListDelayRiskSuggestionsClick}
              >
                ${this.listDelayRiskSuggestionsState === 'loading' ? 'Loading…' : this.msg['intent.projectDetailWorkspace.listDelayRiskSuggestions.list.title']}
              </button>

              ${this.listDelayRiskSuggestionsState === 'loading'
                ? html`<div class="animate-pulse h-32 rounded-md bg-[var(--surface-alt-bg,#f1f5f9)]"></div>`
                : delayRisks.length === 0
                  ? html`<p class="text-sm text-[var(--text-muted,#64748b)]">${this.msg['intent.projectDetailWorkspace.listDelayRiskSuggestions.list.empty']}</p>`
                  : html`
                      <div class="space-y-3">
                        ${delayRisks.map((item: ListDelayRiskSuggestionsOutput) => {
                          const riskLevel = String((item as { riskLevel?: string }).riskLevel ?? '').toLowerCase();
                          const riskBg =
                            riskLevel === 'high' || riskLevel === 'critical'
                              ? 'bg-[var(--status-error-bg,#fee2e2)] text-[var(--status-error-text,#991b1b)]'
                              : riskLevel === 'medium'
                                ? 'bg-[var(--status-warning-bg,#fef3c7)] text-[var(--status-warning-text,#92400e)]'
                                : 'bg-[var(--status-info-bg,#dbeafe)] text-[var(--status-info-text,#1e40af)]';
                          return html`
                            <article class="rounded-md border border-[var(--border-default,#e2e8f0)] p-3 space-y-2">
                              <div class="flex flex-wrap items-start justify-between gap-2">
                                <div>
                                  <div class="font-medium text-[var(--text-strong,#020617)]">
                                    ${formatValue((item as { workTaskTitle?: string }).workTaskTitle)}
                                  </div>
                                  <div class="text-xs text-[var(--text-muted,#64748b)]">
                                    ${this.msg['intent.projectDetailWorkspace.listDelayRiskSuggestions.list.column.delayRiskSuggestionId.label']}:
                                    ${formatValue((item as { delayRiskSuggestionId?: string }).delayRiskSuggestionId)}
                                  </div>
                                </div>
                                <span class="inline-flex px-2 py-0.5 rounded-full text-xs ${riskBg}">
                                  ${formatValue((item as { riskLevel?: string }).riskLevel)}
                                </span>
                              </div>
                              <div class="text-sm">
                                <span class="text-[var(--text-muted,#64748b)]">${this.msg['intent.projectDetailWorkspace.listDelayRiskSuggestions.list.column.reason.label']}:</span>
                                ${formatValue((item as { reason?: string }).reason)}
                              </div>
                              <div class="text-sm">
                                <span class="text-[var(--text-muted,#64748b)]">${this.msg['intent.projectDetailWorkspace.listDelayRiskSuggestions.list.column.suggestedAction.label']}:</span>
                                ${formatValue((item as { suggestedAction?: string }).suggestedAction)}
                              </div>
                              <div class="flex flex-wrap gap-4 text-xs text-[var(--text-muted,#64748b)]">
                                <span>
                                  ${this.msg['intent.projectDetailWorkspace.listDelayRiskSuggestions.list.column.workTaskId.label']}:
                                  ${formatValue((item as { workTaskId?: string }).workTaskId)}
                                </span>
                                <span>
                                  ${this.msg['intent.projectDetailWorkspace.listDelayRiskSuggestions.list.column.acknowledged.label']}:
                                  ${formatValue((item as { acknowledged?: boolean | string }).acknowledged)}
                                </span>
                                <span>
                                  ${this.msg['intent.projectDetailWorkspace.listDelayRiskSuggestions.list.column.createdAt.label']}:
                                  ${formatValue((item as { createdAt?: string }).createdAt)}
                                </span>
                              </div>
                            </article>
                          `;
                        })}
                      </div>
                    `}
            </div>
          </div>
        </section>
      </div>
    `;
  }
}
