/// <mls fileReference="_102045_/l2/buildFlowFsm/web/desktop/page21/projectDetailWorkspace.ts" enhancement="_102020_/l2/enhancementAura"/>

import { html, nothing } from 'lit';
import { customElement } from 'lit/decorators.js';
import { BuildFlowFsmProjectDetailWorkspaceBase } from '/_102045_/l2/buildFlowFsm/web/shared/projectDetailWorkspace.js';

type WorkTaskRow = {
  workTaskId?: string;
  title?: string;
  name?: string;
  assignee?: string;
  assignedWorkerId?: string;
  assignedWorkerName?: string;
  status?: string;
  dueDate?: string;
};

type ChangeOrderRow = {
  changeOrderId?: string;
  title?: string;
  costAdjustment?: number;
  scheduleAdjustmentDays?: number;
  status?: string;
  impactType?: string;
};

type TimeLogRow = {
  timeLogId?: string;
  workerName?: string;
  hoursWorked?: number;
  laborCost?: number;
  logDate?: string;
  status?: string;
  workTaskId?: string;
};

type MaterialUsageRow = {
  materialUsageId?: string;
  materialName?: string;
  quantity?: number;
  unitCost?: number;
  status?: string;
  costCode?: string;
};

type DelayRiskRow = {
  delayRiskSuggestionId?: string;
  workTaskId?: string;
  workTaskTitle?: string;
  riskLevel?: string;
  reason?: string;
  suggestedAction?: string;
  acknowledged?: boolean;
  createdAt?: string;
};

@customElement('build-flow-fsm--web--desktop--page21--project-detail-workspace-102045')
export class BuildFlowFsmDesktopPage21ProjectDetailWorkspacePage extends BuildFlowFsmProjectDetailWorkspaceBase {
  render() {
    const formatText = (value: unknown): string => {
      if (value === null || value === undefined || value === '') return '—';
      return String(value);
    };
    const formatMoney = (value: unknown): string => {
      if (value === null || value === undefined || value === '') return '—';
      const n = Number(value);
      if (Number.isNaN(n)) return formatText(value);
      return n.toLocaleString(undefined, { style: 'currency', currency: 'USD' });
    };
    const formatBool = (value: unknown): string => {
      if (value === true || value === 'true') return 'Yes';
      if (value === false || value === 'false') return 'No';
      return formatText(value);
    };
    const isOverdue = (dueDate: string | undefined, status: string | undefined): boolean => {
      if (!dueDate) return false;
      const normalized = (status ?? '').toLowerCase();
      if (normalized === 'done' || normalized === 'completed' || normalized === 'cancelled' || normalized === 'closed') {
        return false;
      }
      return dueDate.slice(0, 10) < '2026-07-31';
    };
    const statusBadgeClass = (status: string | undefined): string => {
      const s = (status ?? '').toLowerCase();
      if (s === 'approved' || s === 'completed' || s === 'done' || s === 'active' || s === 'posted') {
        return 'bg-[var(--status-success-bg,#dcfce7)] text-[var(--status-success-text,#166534)]';
      }
      if (s === 'rejected' || s === 'cancelled' || s === 'error' || s === 'voided') {
        return 'bg-[var(--status-error-bg,#fee2e2)] text-[var(--status-error-text,#991b1b)]';
      }
      if (s === 'on_hold' || s === 'hold' || s === 'pending' || s === 'draft' || s === 'high' || s === 'critical') {
        return 'bg-[var(--status-warning-bg,#fef3c7)] text-[var(--status-warning-text,#92400e)]';
      }
      if (s === 'in_progress' || s === 'submitted' || s === 'medium' || s === 'info') {
        return 'bg-[var(--status-info-bg,#e0f2fe)] text-[var(--status-info-text,#075985)]';
      }
      return 'bg-[var(--status-neutral-bg,#f1f5f9)] text-[var(--status-neutral-text,#334155)]';
    };

    const project = this.getProjectDetailData;
    const workTasksRaw = (this.listWorkTasksData as { workTasks?: WorkTaskRow[] } | null | undefined)?.workTasks;
    const workTasks: WorkTaskRow[] = Array.isArray(workTasksRaw) ? workTasksRaw : [];
    const workTasksTotal = (this.listWorkTasksData as { total?: number } | null | undefined)?.total;

    const changeOrdersRaw = (this.listChangeOrdersData as { changeOrders?: ChangeOrderRow[] } | null | undefined)?.changeOrders;
    const changeOrders: ChangeOrderRow[] = Array.isArray(changeOrdersRaw) ? changeOrdersRaw : [];
    const changeOrdersTotal = (this.listChangeOrdersData as { total?: number } | null | undefined)?.total;
    const selectedChangeOrderId = this.getChangeOrderDetailChangeOrderId;
    const changeOrderDetail = this.getChangeOrderDetailData;

    const timeLogsRaw = (this.listTimeLogsData as { timeLogs?: TimeLogRow[] } | null | undefined)?.timeLogs;
    const timeLogs: TimeLogRow[] = Array.isArray(timeLogsRaw) ? timeLogsRaw : [];
    const timeLogsTotal = (this.listTimeLogsData as { total?: number } | null | undefined)?.total;
    const laborCostSum = timeLogs.reduce((acc: number, row: TimeLogRow) => acc + (Number(row.laborCost) || 0), 0);
    const hoursSum = timeLogs.reduce((acc: number, row: TimeLogRow) => acc + (Number(row.hoursWorked) || 0), 0);

    const materialUsagesRaw = (this.listMaterialUsagesData as { materialUsages?: MaterialUsageRow[] } | null | undefined)?.materialUsages;
    const materialUsages: MaterialUsageRow[] = Array.isArray(materialUsagesRaw) ? materialUsagesRaw : [];
    const materialUsagesTotal = (this.listMaterialUsagesData as { total?: number } | null | undefined)?.total;
    const materialCostSum = materialUsages.reduce((acc: number, row: MaterialUsageRow) => {
      const qty = Number(row.quantity) || 0;
      const unit = Number(row.unitCost) || 0;
      return acc + qty * unit;
    }, 0);

    const delaySuggestionsRaw = this.listDelayRiskSuggestionsData;
    const delaySuggestions: DelayRiskRow[] = Array.isArray(delaySuggestionsRaw)
      ? (delaySuggestionsRaw as DelayRiskRow[])
      : [];

    const triggerLoading = this.triggerDelayRiskSuggestionsState === 'loading';
    const triggerSuccess = this.triggerDelayRiskSuggestionsState === 'success';
    const triggerError = this.triggerDelayRiskSuggestionsState === 'error';

    return html`
      <div class="min-h-full bg-[var(--page-bg,#f8fafc)] text-[var(--text-default,#0f172a)] p-6 space-y-6">
        <header class="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
          <div>
            <h1 class="text-2xl font-semibold text-[var(--text-strong,#020617)]">
              ${project?.name ? formatText(project.name) : this.msg['section.projectDetailWorkspace.sec-project-header.title']}
            </h1>
            <p class="text-sm text-[var(--text-muted,#64748b)]">
              ${this.msg['organism.projectDetailWorkspace.getProjectDetail.title']}
            </p>
          </div>
          ${project
            ? html`
                <div class="flex flex-wrap items-center gap-2">
                  <span class="inline-flex items-center rounded-md px-3 py-1 text-sm font-medium ${statusBadgeClass(project.status)}">
                    ${formatText(project.status)}
                  </span>
                  <span class="inline-flex items-center rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] px-3 py-1 text-sm text-[var(--text-default,#0f172a)]">
                    ${this.msg['intent.projectDetailWorkspace.getProjectDetail.list.column.budget.label']}: ${formatMoney(project.budget)}
                  </span>
                </div>
              `
            : nothing}
        </header>

        <!-- 1. Project header -->
        <section class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] shadow-sm">
          <div class="flex items-center justify-between gap-3 border-b border-[var(--border-subtle,#f1f5f9)] px-4 py-3">
            <h2 class="text-lg font-medium text-[var(--text-strong,#020617)]">
              ${this.msg['section.projectDetailWorkspace.sec-project-header.title']}
            </h2>
            <button
              type="button"
              class="rounded-md px-3 py-2 text-sm font-medium bg-[var(--button-secondary-bg,#f8fafc)] text-[var(--button-secondary-text,#0f172a)] border border-[var(--button-secondary-border,#e2e8f0)] disabled:opacity-60"
              ?disabled=${this.getProjectDetailState === 'loading'}
              @click=${this.handleGetProjectDetailClick}
            >
              ${this.getProjectDetailState === 'loading' ? 'Loading…' : this.msg['intent.projectDetailWorkspace.getProjectDetail.list.title']}
            </button>
          </div>
          <div class="p-4">
            ${this.getProjectDetailState === 'loading'
              ? html`
                  <div class="grid grid-cols-2 md:grid-cols-4 gap-3 animate-pulse">
                    <div class="h-16 rounded-md bg-[var(--surface-alt-bg,#f1f5f9)]"></div>
                    <div class="h-16 rounded-md bg-[var(--surface-alt-bg,#f1f5f9)]"></div>
                    <div class="h-16 rounded-md bg-[var(--surface-alt-bg,#f1f5f9)]"></div>
                    <div class="h-16 rounded-md bg-[var(--surface-alt-bg,#f1f5f9)]"></div>
                  </div>
                `
              : project
                ? html`
                    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                      <div class="rounded-md border border-[var(--border-subtle,#f1f5f9)] bg-[var(--surface-alt-bg,#f8fafc)] p-3">
                        <div class="text-xs text-[var(--text-muted,#64748b)]">${this.msg['intent.projectDetailWorkspace.getProjectDetail.list.column.clientName.label']}</div>
                        <div class="mt-1 font-medium">${formatText(project.clientName)}</div>
                        <div class="text-sm text-[var(--text-muted,#64748b)]">${formatText(project.clientCompany)}</div>
                      </div>
                      <div class="rounded-md border border-[var(--border-subtle,#f1f5f9)] bg-[var(--surface-alt-bg,#f8fafc)] p-3">
                        <div class="text-xs text-[var(--text-muted,#64748b)]">${this.msg['intent.projectDetailWorkspace.getProjectDetail.list.column.siteAddress.label']}</div>
                        <div class="mt-1 font-medium">${formatText(project.siteAddress)}</div>
                      </div>
                      <div class="rounded-md border border-[var(--border-subtle,#f1f5f9)] bg-[var(--surface-alt-bg,#f8fafc)] p-3">
                        <div class="text-xs text-[var(--text-muted,#64748b)]">${this.msg['intent.projectDetailWorkspace.getProjectDetail.list.column.startDate.label']} → ${this.msg['intent.projectDetailWorkspace.getProjectDetail.list.column.endDate.label']}</div>
                        <div class="mt-1 font-medium">${formatText(project.startDate)} → ${formatText(project.endDate)}</div>
                      </div>
                      <div class="rounded-md border border-[var(--border-subtle,#f1f5f9)] bg-[var(--surface-alt-bg,#f8fafc)] p-3">
                        <div class="text-xs text-[var(--text-muted,#64748b)]">${this.msg['intent.projectDetailWorkspace.getProjectDetail.list.column.budget.label']}</div>
                        <div class="mt-1 font-medium">${formatMoney(project.budget)}</div>
                        <div class="text-sm ${statusBadgeClass(project.status)} inline-flex mt-2 rounded px-2 py-0.5">${formatText(project.status)}</div>
                      </div>
                    </div>
                    <div class="mt-4 grid grid-cols-1 md:grid-cols-3 gap-3 text-sm">
                      <div>
                        <span class="text-[var(--text-muted,#64748b)]">${this.msg['intent.projectDetailWorkspace.getProjectDetail.list.column.holdReason.label']}:</span>
                        ${formatText(project.holdReason)}
                      </div>
                      <div>
                        <span class="text-[var(--text-muted,#64748b)]">${this.msg['intent.projectDetailWorkspace.getProjectDetail.list.column.closedAt.label']}:</span>
                        ${formatText(project.closedAt)}
                      </div>
                      <div>
                        <span class="text-[var(--text-muted,#64748b)]">${this.msg['intent.projectDetailWorkspace.getProjectDetail.list.column.cancellationReason.label']}:</span>
                        ${formatText(project.cancellationReason)}
                      </div>
                      <div>
                        <span class="text-[var(--text-muted,#64748b)]">${this.msg['intent.projectDetailWorkspace.getProjectDetail.list.column.createdAt.label']}:</span>
                        ${formatText(project.createdAt)}
                      </div>
                      <div>
                        <span class="text-[var(--text-muted,#64748b)]">${this.msg['intent.projectDetailWorkspace.getProjectDetail.list.column.updatedAt.label']}:</span>
                        ${formatText(project.updatedAt)}
                      </div>
                      <div>
                        <span class="text-[var(--text-muted,#64748b)]">${this.msg['intent.projectDetailWorkspace.getProjectDetail.list.column.cancelledAt.label']}:</span>
                        ${formatText(project.cancelledAt)}
                      </div>
                    </div>
                  `
                : html`
                    <p class="text-sm text-[var(--text-muted,#64748b)]">
                      ${this.msg['intent.projectDetailWorkspace.getProjectDetail.list.empty']}
                    </p>
                  `}
          </div>
        </section>

        <!-- 2. Work task timeline -->
        <section class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] shadow-sm">
          <div class="flex flex-col gap-3 border-b border-[var(--border-subtle,#f1f5f9)] px-4 py-3 md:flex-row md:items-center md:justify-between">
            <h2 class="text-lg font-medium text-[var(--text-strong,#020617)]">
              ${this.msg['section.projectDetailWorkspace.sec-task-timeline.title']}
            </h2>
            <div class="flex flex-wrap items-end gap-2">
              <label class="flex flex-col gap-1 text-xs text-[var(--text-muted,#64748b)]">
                ${this.msg['intent.projectDetailWorkspace.listWorkTasks.list.filter.status.label']}
                <input
                  class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-sm text-[var(--text-default,#0f172a)] min-w-[8rem]"
                  .value=${this.listWorkTasksStatus}
                  @input=${this.handleListWorkTasksStatusChange}
                />
              </label>
              <label class="flex flex-col gap-1 text-xs text-[var(--text-muted,#64748b)]">
                ${this.msg['intent.projectDetailWorkspace.listWorkTasks.list.filter.assignedWorkerId.label']}
                <input
                  class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-sm text-[var(--text-default,#0f172a)] min-w-[8rem]"
                  .value=${this.listWorkTasksAssignedWorkerId}
                  @input=${this.handleListWorkTasksAssignedWorkerIdChange}
                />
              </label>
              <label class="flex flex-col gap-1 text-xs text-[var(--text-muted,#64748b)]">
                ${this.msg['intent.projectDetailWorkspace.listWorkTasks.list.filter.page.label']}
                <input
                  type="number"
                  class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-sm text-[var(--text-default,#0f172a)] w-20"
                  .value=${this.listWorkTasksPage}
                  @input=${this.handleListWorkTasksPageChange}
                />
              </label>
              <label class="flex flex-col gap-1 text-xs text-[var(--text-muted,#64748b)]">
                ${this.msg['intent.projectDetailWorkspace.listWorkTasks.list.filter.pageSize.label']}
                <input
                  type="number"
                  class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-sm text-[var(--text-default,#0f172a)] w-20"
                  .value=${this.listWorkTasksPageSize}
                  @input=${this.handleListWorkTasksPageSizeChange}
                />
              </label>
              <button
                type="button"
                class="rounded-md px-4 py-2 text-sm font-medium bg-[var(--button-primary-bg,#2563eb)] text-[var(--button-primary-text,#ffffff)] disabled:opacity-60"
                ?disabled=${this.listWorkTasksState === 'loading'}
                @click=${this.handleListWorkTasksClick}
              >
                ${this.listWorkTasksState === 'loading' ? 'Loading…' : this.msg['organism.projectDetailWorkspace.listWorkTasks.title']}
              </button>
            </div>
          </div>
          <div class="p-4">
            <div class="mb-3 flex items-center justify-between text-sm text-[var(--text-muted,#64748b)]">
              <span>${this.msg['intent.projectDetailWorkspace.listWorkTasks.list.title']}</span>
              <span>${this.msg['intent.projectDetailWorkspace.listWorkTasks.list.column.total.label']}: ${formatText(workTasksTotal ?? workTasks.length)}</span>
            </div>
            ${this.listWorkTasksState === 'loading'
              ? html`
                  <div class="space-y-2 animate-pulse">
                    <div class="h-14 rounded-md bg-[var(--surface-alt-bg,#f1f5f9)]"></div>
                    <div class="h-14 rounded-md bg-[var(--surface-alt-bg,#f1f5f9)]"></div>
                    <div class="h-14 rounded-md bg-[var(--surface-alt-bg,#f1f5f9)]"></div>
                  </div>
                `
              : workTasks.length === 0
                ? html`<p class="text-sm text-[var(--text-muted,#64748b)]">${this.msg['intent.projectDetailWorkspace.listWorkTasks.list.empty']}</p>`
                : html`
                    <ul class="space-y-2">
                      ${workTasks.map((task: WorkTaskRow) => {
                        const title = task.title ?? task.name ?? task.workTaskId ?? '—';
                        const assignee = task.assignee ?? task.assignedWorkerName ?? task.assignedWorkerId ?? '—';
                        const overdue = isOverdue(task.dueDate, task.status);
                        return html`
                          <li
                            class="flex flex-col gap-2 rounded-md border border-[var(--border-default,#e2e8f0)] px-3 py-3 sm:flex-row sm:items-center sm:justify-between ${overdue
                              ? 'bg-[var(--status-warning-bg,#fef3c7)]'
                              : 'bg-[var(--surface-bg,#ffffff)]'}"
                          >
                            <div class="min-w-0">
                              <div class="font-medium text-[var(--text-strong,#020617)] truncate">${formatText(title)}</div>
                              <div class="text-sm text-[var(--text-muted,#64748b)]">
                                ${formatText(assignee)}
                                · ${this.msg['intent.projectDetailWorkspace.listWorkTasks.list.filter.status.label']}: ${formatText(task.status)}
                                · due ${formatText(task.dueDate)}
                                ${overdue
                                  ? html`<span class="ml-2 inline-flex rounded px-2 py-0.5 text-xs font-medium bg-[var(--status-error-bg,#fee2e2)] text-[var(--status-error-text,#991b1b)]">Overdue</span>`
                                  : nothing}
                              </div>
                            </div>
                            <span class="inline-flex self-start rounded-md px-2 py-1 text-xs font-medium ${statusBadgeClass(task.status)}">
                              ${formatText(task.status)}
                            </span>
                          </li>
                        `;
                      })}
                    </ul>
                  `}
          </div>
        </section>

        <!-- 3. Change orders master-detail -->
        <section class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] shadow-sm">
          <div class="flex flex-col gap-3 border-b border-[var(--border-subtle,#f1f5f9)] px-4 py-3 md:flex-row md:items-center md:justify-between">
            <h2 class="text-lg font-medium text-[var(--text-strong,#020617)]">
              ${this.msg['section.projectDetailWorkspace.sec-change-orders.title']}
            </h2>
            <div class="flex flex-wrap items-end gap-2">
              <label class="flex flex-col gap-1 text-xs text-[var(--text-muted,#64748b)]">
                ${this.msg['intent.projectDetailWorkspace.listChangeOrders.list.filter.status.label']}
                <input
                  class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-sm text-[var(--text-default,#0f172a)] min-w-[8rem]"
                  .value=${this.listChangeOrdersStatus}
                  @input=${this.handleListChangeOrdersStatusChange}
                />
              </label>
              <label class="flex flex-col gap-1 text-xs text-[var(--text-muted,#64748b)]">
                ${this.msg['intent.projectDetailWorkspace.listChangeOrders.list.filter.impactType.label']}
                <input
                  class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-sm text-[var(--text-default,#0f172a)] min-w-[8rem]"
                  .value=${this.listChangeOrdersImpactType}
                  @input=${this.handleListChangeOrdersImpactTypeChange}
                />
              </label>
              <label class="flex flex-col gap-1 text-xs text-[var(--text-muted,#64748b)]">
                ${this.msg['intent.projectDetailWorkspace.listChangeOrders.list.filter.page.label']}
                <input
                  type="number"
                  class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-sm text-[var(--text-default,#0f172a)] w-20"
                  .value=${this.listChangeOrdersPage}
                  @input=${this.handleListChangeOrdersPageChange}
                />
              </label>
              <label class="flex flex-col gap-1 text-xs text-[var(--text-muted,#64748b)]">
                ${this.msg['intent.projectDetailWorkspace.listChangeOrders.list.filter.pageSize.label']}
                <input
                  type="number"
                  class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-sm text-[var(--text-default,#0f172a)] w-20"
                  .value=${this.listChangeOrdersPageSize}
                  @input=${this.handleListChangeOrdersPageSizeChange}
                />
              </label>
              <button
                type="button"
                class="rounded-md px-4 py-2 text-sm font-medium bg-[var(--button-primary-bg,#2563eb)] text-[var(--button-primary-text,#ffffff)] disabled:opacity-60"
                ?disabled=${this.listChangeOrdersState === 'loading'}
                @click=${this.handleListChangeOrdersClick}
              >
                ${this.listChangeOrdersState === 'loading' ? 'Loading…' : this.msg['organism.projectDetailWorkspace.listChangeOrders.title']}
              </button>
            </div>
          </div>
          <div class="p-4 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div class="md:col-span-1 space-y-2">
              <div class="flex items-center justify-between text-sm text-[var(--text-muted,#64748b)] mb-2">
                <span>${this.msg['intent.projectDetailWorkspace.listChangeOrders.list.title']}</span>
                <span>${this.msg['intent.projectDetailWorkspace.listChangeOrders.list.column.total.label']}: ${formatText(changeOrdersTotal ?? changeOrders.length)}</span>
              </div>
              ${this.listChangeOrdersState === 'loading'
                ? html`
                    <div class="space-y-2 animate-pulse">
                      <div class="h-16 rounded-md bg-[var(--surface-alt-bg,#f1f5f9)]"></div>
                      <div class="h-16 rounded-md bg-[var(--surface-alt-bg,#f1f5f9)]"></div>
                    </div>
                  `
                : changeOrders.length === 0
                  ? html`<p class="text-sm text-[var(--text-muted,#64748b)]">${this.msg['intent.projectDetailWorkspace.listChangeOrders.list.empty']}</p>`
                  : html`
                      <ul class="space-y-2 max-h-[28rem] overflow-y-auto">
                        ${changeOrders.map((co: ChangeOrderRow) => {
                          const id = co.changeOrderId ? String(co.changeOrderId) : '';
                          const selected = id !== '' && id === selectedChangeOrderId;
                          return html`
                            <li>
                              <button
                                type="button"
                                class="w-full text-left rounded-md border px-3 py-3 transition ${selected
                                  ? 'border-[var(--selected-border,#2563eb)] bg-[var(--selected-bg,#eff6ff)] text-[var(--selected-text,#1e3a8a)]'
                                  : 'border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] hover:bg-[var(--surface-alt-bg,#f8fafc)]'}"
                                @click=${() => {
                                  if (!id) return;
                                  this.setGetChangeOrderDetailChangeOrderId(id);
                                  this.handleGetChangeOrderDetailClick();
                                }}
                              >
                                <div class="font-medium truncate">${formatText(co.title ?? id)}</div>
                                <div class="mt-1 flex flex-wrap gap-2 text-xs">
                                  <span class="inline-flex rounded px-2 py-0.5 ${statusBadgeClass(co.status)}">${formatText(co.status)}</span>
                                  <span class="text-[var(--text-muted,#64748b)]">${formatText(co.impactType)}</span>
                                  <span class="text-[var(--text-muted,#64748b)]">${formatMoney(co.costAdjustment)}</span>
                                  <span class="text-[var(--text-muted,#64748b)]">${formatText(co.scheduleAdjustmentDays)}d</span>
                                </div>
                              </button>
                            </li>
                          `;
                        })}
                      </ul>
                    `}
            </div>
            <div class="md:col-span-2 rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-alt-bg,#f8fafc)] p-4">
              <h3 class="text-base font-medium text-[var(--text-strong,#020617)] mb-3">
                ${this.msg['organism.projectDetailWorkspace.getChangeOrderDetail.title']}
              </h3>
              ${this.getChangeOrderDetailState === 'loading'
                ? html`
                    <div class="space-y-2 animate-pulse">
                      <div class="h-6 w-1/2 rounded bg-[var(--surface-bg,#ffffff)]"></div>
                      <div class="h-24 rounded bg-[var(--surface-bg,#ffffff)]"></div>
                    </div>
                  `
                : changeOrderDetail
                  ? html`
                      <div class="space-y-3">
                        <div class="flex flex-wrap items-start justify-between gap-2">
                          <div>
                            <div class="text-lg font-semibold text-[var(--text-strong,#020617)]">${formatText(changeOrderDetail.title)}</div>
                            <div class="text-sm text-[var(--text-muted,#64748b)]">${formatText(changeOrderDetail.projectName)}</div>
                          </div>
                          <span class="inline-flex rounded-md px-2 py-1 text-xs font-medium ${statusBadgeClass(changeOrderDetail.status)}">
                            ${formatText(changeOrderDetail.status)}
                          </span>
                        </div>
                        <p class="text-sm text-[var(--text-default,#0f172a)] whitespace-pre-wrap">${formatText(changeOrderDetail.description)}</p>
                        <div class="grid grid-cols-2 lg:grid-cols-3 gap-3">
                          <div class="rounded-md bg-[var(--surface-bg,#ffffff)] border border-[var(--border-subtle,#f1f5f9)] p-3">
                            <div class="text-xs text-[var(--text-muted,#64748b)]">${this.msg['intent.projectDetailWorkspace.getChangeOrderDetail.list.column.costAdjustment.label']}</div>
                            <div class="mt-1 font-medium">${formatMoney(changeOrderDetail.costAdjustment)}</div>
                          </div>
                          <div class="rounded-md bg-[var(--surface-bg,#ffffff)] border border-[var(--border-subtle,#f1f5f9)] p-3">
                            <div class="text-xs text-[var(--text-muted,#64748b)]">${this.msg['intent.projectDetailWorkspace.getChangeOrderDetail.list.column.projectBudget.label']}</div>
                            <div class="mt-1 font-medium">${formatMoney(changeOrderDetail.projectBudget)}</div>
                          </div>
                          <div class="rounded-md bg-[var(--surface-bg,#ffffff)] border border-[var(--border-subtle,#f1f5f9)] p-3">
                            <div class="text-xs text-[var(--text-muted,#64748b)]">${this.msg['intent.projectDetailWorkspace.getChangeOrderDetail.list.column.scheduleAdjustmentDays.label']}</div>
                            <div class="mt-1 font-medium">${formatText(changeOrderDetail.scheduleAdjustmentDays)}</div>
                          </div>
                          <div class="rounded-md bg-[var(--surface-bg,#ffffff)] border border-[var(--border-subtle,#f1f5f9)] p-3">
                            <div class="text-xs text-[var(--text-muted,#64748b)]">${this.msg['intent.projectDetailWorkspace.getChangeOrderDetail.list.column.impactType.label']}</div>
                            <div class="mt-1 font-medium">${formatText(changeOrderDetail.impactType)}</div>
                          </div>
                          <div class="rounded-md bg-[var(--surface-bg,#ffffff)] border border-[var(--border-subtle,#f1f5f9)] p-3">
                            <div class="text-xs text-[var(--text-muted,#64748b)]">${this.msg['intent.projectDetailWorkspace.getChangeOrderDetail.list.column.affectsJobCosting.label']}</div>
                            <div class="mt-1 font-medium">${formatBool(changeOrderDetail.affectsJobCosting)}</div>
                          </div>
                          <div class="rounded-md bg-[var(--surface-bg,#ffffff)] border border-[var(--border-subtle,#f1f5f9)] p-3">
                            <div class="text-xs text-[var(--text-muted,#64748b)]">${this.msg['intent.projectDetailWorkspace.getChangeOrderDetail.list.column.approvedAt.label']}</div>
                            <div class="mt-1 font-medium">${formatText(changeOrderDetail.approvedAt)}</div>
                          </div>
                        </div>
                        ${changeOrderDetail.rejectionReason
                          ? html`
                              <div class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--status-error-bg,#fee2e2)] p-3 text-sm text-[var(--status-error-text,#991b1b)]">
                                <span class="font-medium">${this.msg['intent.projectDetailWorkspace.getChangeOrderDetail.list.column.rejectionReason.label']}:</span>
                                ${formatText(changeOrderDetail.rejectionReason)}
                                <span class="ml-2 text-xs">(${this.msg['intent.projectDetailWorkspace.getChangeOrderDetail.list.column.rejectedAt.label']}: ${formatText(changeOrderDetail.rejectedAt)})</span>
                              </div>
                            `
                          : nothing}
                      </div>
                    `
                  : html`
                      <p class="text-sm text-[var(--text-muted,#64748b)]">
                        ${this.msg['intent.projectDetailWorkspace.getChangeOrderDetail.list.empty']}
                      </p>
                    `}
            </div>
          </div>
        </section>

        <!-- 4. Cost tracking -->
        <section class="space-y-3">
          <h2 class="text-lg font-medium text-[var(--text-strong,#020617)]">
            ${this.msg['section.projectDetailWorkspace.sec-cost-tracking.title']}
          </h2>
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <!-- Time logs -->
            <div class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] shadow-sm">
              <div class="flex flex-col gap-3 border-b border-[var(--border-subtle,#f1f5f9)] px-4 py-3">
                <div class="flex items-center justify-between gap-2">
                  <h3 class="font-medium text-[var(--text-strong,#020617)]">${this.msg['organism.projectDetailWorkspace.listTimeLogs.title']}</h3>
                  <div class="flex gap-2 text-xs">
                    <span class="rounded-md bg-[var(--status-info-bg,#e0f2fe)] text-[var(--status-info-text,#075985)] px-2 py-1">${hoursSum.toFixed(1)} h</span>
                    <span class="rounded-md bg-[var(--status-neutral-bg,#f1f5f9)] text-[var(--status-neutral-text,#334155)] px-2 py-1">${formatMoney(laborCostSum)}</span>
                  </div>
                </div>
                <div class="flex flex-wrap items-end gap-2">
                  <label class="flex flex-col gap-1 text-xs text-[var(--text-muted,#64748b)]">
                    ${this.msg['intent.projectDetailWorkspace.listTimeLogs.list.filter.workTaskId.label']}
                    <input
                      class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-2 py-1.5 text-sm w-28"
                      .value=${this.listTimeLogsWorkTaskId}
                      @input=${this.handleListTimeLogsWorkTaskIdChange}
                    />
                  </label>
                  <label class="flex flex-col gap-1 text-xs text-[var(--text-muted,#64748b)]">
                    ${this.msg['intent.projectDetailWorkspace.listTimeLogs.list.filter.workerName.label']}
                    <input
                      class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-2 py-1.5 text-sm w-28"
                      .value=${this.listTimeLogsWorkerName}
                      @input=${this.handleListTimeLogsWorkerNameChange}
                    />
                  </label>
                  <label class="flex flex-col gap-1 text-xs text-[var(--text-muted,#64748b)]">
                    ${this.msg['intent.projectDetailWorkspace.listTimeLogs.list.filter.logDate.label']}
                    <input
                      type="date"
                      class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-2 py-1.5 text-sm"
                      .value=${this.listTimeLogsLogDate}
                      @input=${this.handleListTimeLogsLogDateChange}
                    />
                  </label>
                  <label class="flex flex-col gap-1 text-xs text-[var(--text-muted,#64748b)]">
                    ${this.msg['intent.projectDetailWorkspace.listTimeLogs.list.filter.status.label']}
                    <input
                      class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-2 py-1.5 text-sm w-24"
                      .value=${this.listTimeLogsStatus}
                      @input=${this.handleListTimeLogsStatusChange}
                    />
                  </label>
                  <button
                    type="button"
                    class="rounded-md px-3 py-2 text-sm font-medium bg-[var(--button-secondary-bg,#f8fafc)] text-[var(--button-secondary-text,#0f172a)] border border-[var(--button-secondary-border,#e2e8f0)] disabled:opacity-60"
                    ?disabled=${this.listTimeLogsState === 'loading'}
                    @click=${this.handleListTimeLogsClick}
                  >
                    ${this.listTimeLogsState === 'loading' ? 'Loading…' : this.msg['intent.projectDetailWorkspace.listTimeLogs.list.title']}
                  </button>
                </div>
              </div>
              <div class="p-3">
                <div class="mb-2 text-xs text-[var(--text-muted,#64748b)]">
                  ${this.msg['intent.projectDetailWorkspace.listTimeLogs.list.column.total.label']}: ${formatText(timeLogsTotal ?? timeLogs.length)}
                </div>
                ${this.listTimeLogsState === 'loading'
                  ? html`<div class="h-24 rounded-md bg-[var(--surface-alt-bg,#f1f5f9)] animate-pulse"></div>`
                  : timeLogs.length === 0
                    ? html`<p class="text-sm text-[var(--text-muted,#64748b)]">${this.msg['intent.projectDetailWorkspace.listTimeLogs.list.empty']}</p>`
                    : html`
                        <div class="overflow-x-auto">
                          <table class="min-w-full text-sm">
                            <thead>
                              <tr class="text-left text-[var(--text-muted,#64748b)] border-b border-[var(--border-subtle,#f1f5f9)]">
                                <th class="py-2 pr-2 font-medium">Worker</th>
                                <th class="py-2 pr-2 font-medium">Hours</th>
                                <th class="py-2 pr-2 font-medium">Cost</th>
                                <th class="py-2 pr-2 font-medium">Date</th>
                                <th class="py-2 font-medium">Status</th>
                              </tr>
                            </thead>
                            <tbody>
                              ${timeLogs.map(
                                (row: TimeLogRow) => html`
                                  <tr class="border-b border-[var(--border-subtle,#f1f5f9)]">
                                    <td class="py-2 pr-2">${formatText(row.workerName)}</td>
                                    <td class="py-2 pr-2">${formatText(row.hoursWorked)}</td>
                                    <td class="py-2 pr-2">${formatMoney(row.laborCost)}</td>
                                    <td class="py-2 pr-2">${formatText(row.logDate)}</td>
                                    <td class="py-2">
                                      <span class="inline-flex rounded px-2 py-0.5 text-xs ${statusBadgeClass(row.status)}">${formatText(row.status)}</span>
                                    </td>
                                  </tr>
                                `,
                              )}
                            </tbody>
                          </table>
                        </div>
                      `}
              </div>
            </div>

            <!-- Material usages -->
            <div class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] shadow-sm">
              <div class="flex flex-col gap-3 border-b border-[var(--border-subtle,#f1f5f9)] px-4 py-3">
                <div class="flex items-center justify-between gap-2">
                  <h3 class="font-medium text-[var(--text-strong,#020617)]">${this.msg['organism.projectDetailWorkspace.listMaterialUsages.title']}</h3>
                  <span class="rounded-md bg-[var(--status-neutral-bg,#f1f5f9)] text-[var(--status-neutral-text,#334155)] px-2 py-1 text-xs">${formatMoney(materialCostSum)}</span>
                </div>
                <div class="flex flex-wrap items-end gap-2">
                  <label class="flex flex-col gap-1 text-xs text-[var(--text-muted,#64748b)]">
                    ${this.msg['intent.projectDetailWorkspace.listMaterialUsages.list.filter.status.label']}
                    <input
                      class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-2 py-1.5 text-sm w-28"
                      .value=${this.listMaterialUsagesStatus}
                      @input=${this.handleListMaterialUsagesStatusChange}
                    />
                  </label>
                  <label class="flex flex-col gap-1 text-xs text-[var(--text-muted,#64748b)]">
                    ${this.msg['intent.projectDetailWorkspace.listMaterialUsages.list.filter.page.label']}
                    <input
                      type="number"
                      class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-2 py-1.5 text-sm w-20"
                      .value=${this.listMaterialUsagesPage}
                      @input=${this.handleListMaterialUsagesPageChange}
                    />
                  </label>
                  <label class="flex flex-col gap-1 text-xs text-[var(--text-muted,#64748b)]">
                    ${this.msg['intent.projectDetailWorkspace.listMaterialUsages.list.filter.pageSize.label']}
                    <input
                      type="number"
                      class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-2 py-1.5 text-sm w-20"
                      .value=${this.listMaterialUsagesPageSize}
                      @input=${this.handleListMaterialUsagesPageSizeChange}
                    />
                  </label>
                  <button
                    type="button"
                    class="rounded-md px-3 py-2 text-sm font-medium bg-[var(--button-secondary-bg,#f8fafc)] text-[var(--button-secondary-text,#0f172a)] border border-[var(--button-secondary-border,#e2e8f0)] disabled:opacity-60"
                    ?disabled=${this.listMaterialUsagesState === 'loading'}
                    @click=${this.handleListMaterialUsagesClick}
                  >
                    ${this.listMaterialUsagesState === 'loading' ? 'Loading…' : this.msg['intent.projectDetailWorkspace.listMaterialUsages.list.title']}
                  </button>
                </div>
              </div>
              <div class="p-3">
                <div class="mb-2 text-xs text-[var(--text-muted,#64748b)]">
                  ${this.msg['intent.projectDetailWorkspace.listMaterialUsages.list.column.total.label']}: ${formatText(materialUsagesTotal ?? materialUsages.length)}
                </div>
                ${this.listMaterialUsagesState === 'loading'
                  ? html`<div class="h-24 rounded-md bg-[var(--surface-alt-bg,#f1f5f9)] animate-pulse"></div>`
                  : materialUsages.length === 0
                    ? html`<p class="text-sm text-[var(--text-muted,#64748b)]">${this.msg['intent.projectDetailWorkspace.listMaterialUsages.list.empty']}</p>`
                    : html`
                        <div class="overflow-x-auto">
                          <table class="min-w-full text-sm">
                            <thead>
                              <tr class="text-left text-[var(--text-muted,#64748b)] border-b border-[var(--border-subtle,#f1f5f9)]">
                                <th class="py-2 pr-2 font-medium">Material</th>
                                <th class="py-2 pr-2 font-medium">Qty</th>
                                <th class="py-2 pr-2 font-medium">Unit</th>
                                <th class="py-2 font-medium">Status</th>
                              </tr>
                            </thead>
                            <tbody>
                              ${materialUsages.map(
                                (row: MaterialUsageRow) => html`
                                  <tr class="border-b border-[var(--border-subtle,#f1f5f9)]">
                                    <td class="py-2 pr-2">${formatText(row.materialName)}</td>
                                    <td class="py-2 pr-2">${formatText(row.quantity)}</td>
                                    <td class="py-2 pr-2">${formatMoney(row.unitCost)}</td>
                                    <td class="py-2">
                                      <span class="inline-flex rounded px-2 py-0.5 text-xs ${statusBadgeClass(row.status)}">${formatText(row.status)}</span>
                                    </td>
                                  </tr>
                                `,
                              )}
                            </tbody>
                          </table>
                        </div>
                      `}
              </div>
            </div>
          </div>
        </section>

        <!-- 5. Delay-risk insights -->
        <section class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] shadow-sm">
          <div class="flex flex-col gap-3 border-b border-[var(--border-subtle,#f1f5f9)] px-4 py-3 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 class="text-lg font-medium text-[var(--text-strong,#020617)]">
                ${this.msg['section.projectDetailWorkspace.sec-delay-risk-insights.title']}
              </h2>
              <p class="text-sm text-[var(--text-muted,#64748b)]">${this.msg['organism.projectDetailWorkspace.triggerDelayRiskSuggestions.title']}</p>
            </div>
            <div class="flex flex-wrap items-center gap-2">
              <button
                type="button"
                class="rounded-md px-4 py-2.5 text-sm font-semibold bg-[var(--button-primary-bg,#2563eb)] text-[var(--button-primary-text,#ffffff)] disabled:opacity-60 min-h-[2.75rem]"
                ?disabled=${triggerLoading}
                @click=${this.handleTriggerDelayRiskSuggestionsClick}
              >
                ${triggerLoading
                  ? 'Generating…'
                  : this.msg['intent.projectDetailWorkspace.triggerDelayRiskSuggestions.form.action.triggerDelayRiskSuggestions']}
              </button>
              <button
                type="button"
                class="rounded-md px-3 py-2 text-sm font-medium bg-[var(--button-secondary-bg,#f8fafc)] text-[var(--button-secondary-text,#0f172a)] border border-[var(--button-secondary-border,#e2e8f0)] disabled:opacity-60"
                ?disabled=${this.listDelayRiskSuggestionsState === 'loading'}
                @click=${this.handleListDelayRiskSuggestionsClick}
              >
                ${this.listDelayRiskSuggestionsState === 'loading' ? 'Loading…' : this.msg['organism.projectDetailWorkspace.listDelayRiskSuggestions.title']}
              </button>
            </div>
          </div>

          ${triggerSuccess
            ? html`
                <div class="mx-4 mt-4 flex items-start justify-between gap-3 rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--status-success-bg,#dcfce7)] px-3 py-2 text-sm text-[var(--status-success-text,#166534)]">
                  <span>${this.msg['action.triggerDelayRiskSuggestions.success']}</span>
                </div>
              `
            : nothing}
          ${triggerError
            ? html`
                <div class="mx-4 mt-4 flex items-start justify-between gap-3 rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--status-error-bg,#fee2e2)] px-3 py-2 text-sm text-[var(--status-error-text,#991b1b)]">
                  <span>${this.triggerDelayRiskSuggestionsError || this.msg['action.triggerDelayRiskSuggestions.error']}</span>
                </div>
              `
            : nothing}

          <div class="p-4 space-y-3">
            <div class="flex flex-wrap items-end gap-3">
              <label class="flex flex-col gap-1 text-xs text-[var(--text-muted,#64748b)]">
                ${this.msg['intent.projectDetailWorkspace.listDelayRiskSuggestions.list.filter.acknowledged.label']}
                <input
                  class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-sm text-[var(--text-default,#0f172a)] min-w-[8rem]"
                  .value=${this.listDelayRiskSuggestionsAcknowledged}
                  @input=${this.handleListDelayRiskSuggestionsAcknowledgedChange}
                  placeholder="true / false"
                />
              </label>
            </div>

            <h3 class="text-base font-medium text-[var(--text-strong,#020617)]">
              ${this.msg['intent.projectDetailWorkspace.listDelayRiskSuggestions.list.title']}
            </h3>

            ${this.listDelayRiskSuggestionsState === 'loading'
              ? html`
                  <div class="space-y-2 animate-pulse">
                    <div class="h-20 rounded-md bg-[var(--surface-alt-bg,#f1f5f9)]"></div>
                    <div class="h-20 rounded-md bg-[var(--surface-alt-bg,#f1f5f9)]"></div>
                  </div>
                `
              : delaySuggestions.length === 0
                ? html`<p class="text-sm text-[var(--text-muted,#64748b)]">${this.msg['intent.projectDetailWorkspace.listDelayRiskSuggestions.list.empty']}</p>`
                : html`
                    <ul class="space-y-3">
                      ${delaySuggestions.map((item: DelayRiskRow) => {
                        const risk = item.riskLevel;
                        return html`
                          <li class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-alt-bg,#f8fafc)] p-3">
                            <div class="flex flex-wrap items-start justify-between gap-2">
                              <div class="min-w-0">
                                <div class="font-medium text-[var(--text-strong,#020617)]">
                                  ${formatText(item.workTaskTitle ?? item.workTaskId)}
                                </div>
                                <div class="mt-1 text-sm text-[var(--text-default,#0f172a)]">${formatText(item.reason)}</div>
                                <div class="mt-2 text-sm">
                                  <span class="text-[var(--text-muted,#64748b)]">${this.msg['intent.projectDetailWorkspace.listDelayRiskSuggestions.list.column.suggestedAction.label']}:</span>
                                  ${formatText(item.suggestedAction)}
                                </div>
                              </div>
                              <div class="flex flex-col items-end gap-1">
                                <span class="inline-flex rounded-md px-2 py-1 text-xs font-semibold ${statusBadgeClass(risk)}">
                                  ${this.msg['intent.projectDetailWorkspace.listDelayRiskSuggestions.list.column.riskLevel.label']}: ${formatText(risk)}
                                </span>
                                <span class="text-xs text-[var(--text-muted,#64748b)]">
                                  ${this.msg['intent.projectDetailWorkspace.listDelayRiskSuggestions.list.column.acknowledged.label']}:
                                  ${formatBool(item.acknowledged)}
                                </span>
                                <span class="text-xs text-[var(--text-muted,#64748b)]">
                                  ${this.msg['intent.projectDetailWorkspace.listDelayRiskSuggestions.list.column.createdAt.label']}:
                                  ${formatText(item.createdAt)}
                                </span>
                              </div>
                            </div>
                          </li>
                        `;
                      })}
                    </ul>
                  `}
          </div>
        </section>
      </div>
    `;
  }
}
