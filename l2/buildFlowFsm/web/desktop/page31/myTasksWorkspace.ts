/// <mls fileReference="_102045_/l2/buildFlowFsm/web/desktop/page31/myTasksWorkspace.ts" enhancement="_102020_/l2/enhancementAura"/>

import { html, nothing } from 'lit';
import { customElement } from 'lit/decorators.js';
import { BuildFlowFsmMyTasksWorkspaceBase } from '/_102045_/l2/buildFlowFsm/web/shared/myTasksWorkspace.js';
import type { ListMyWorkTasksOutput, GetWorkTaskDetailOutput } from '/_102045_/l2/buildFlowFsm/web/shared/myTasksWorkspace.js';

type WorkTaskRow = {
  workTaskId?: string;
  projectId?: string;
  projectName?: string;
  title?: string;
  description?: string;
  assignedWorkerId?: string;
  status?: string;
  dueDate?: string;
  isOverdue?: boolean;
  completedAt?: string;
  cancelledAt?: string;
  cancellationReason?: string;
  createdAt?: string;
  updatedAt?: string;
};

@customElement('build-flow-fsm--web--desktop--page31--my-tasks-workspace-102045')
export class BuildFlowFsmDesktopPage31MyTasksWorkspacePage extends BuildFlowFsmMyTasksWorkspaceBase {
  render() {
    const listData = this.listMyWorkTasksData as ListMyWorkTasksOutput | null | undefined;
    const listRecord = listData as (ListMyWorkTasksOutput & { workTasks?: WorkTaskRow[]; items?: WorkTaskRow[]; total?: number }) | null | undefined;
    const workTasks: WorkTaskRow[] = Array.isArray(listRecord?.workTasks)
      ? listRecord!.workTasks!
      : Array.isArray(listRecord?.items)
        ? listRecord!.items!
        : [];
    const totalCount =
      typeof listRecord?.total === 'number' ? listRecord.total : workTasks.length;

    const detail = this.getWorkTaskDetailData as GetWorkTaskDetailOutput | null;
    const detailRow = detail as (GetWorkTaskDetailOutput & WorkTaskRow) | null;

    const selectedId = this.getWorkTaskDetailWorkTaskId || '';
    const isListLoading = this.listMyWorkTasksState === 'loading';
    const isDetailLoading = this.getWorkTaskDetailState === 'loading';

    const overdueCount = workTasks.filter((t: WorkTaskRow) => t.isOverdue === true).length;
    const openCount = workTasks.filter((t: WorkTaskRow) => {
      const s = (t.status || '').toLowerCase();
      return s !== 'completed' && s !== 'cancelled' && s !== 'done';
    }).length;

    const statusBadge = (status: string | undefined) => {
      const s = (status || '').toLowerCase();
      if (s === 'completed' || s === 'done') {
        return html`<span class="inline-flex px-2 py-0.5 rounded text-xs font-medium bg-[var(--status-success-bg,#dcfce7)] text-[var(--status-success-text,#166534)]">${status}</span>`;
      }
      if (s === 'cancelled') {
        return html`<span class="inline-flex px-2 py-0.5 rounded text-xs font-medium bg-[var(--status-neutral-bg,#f1f5f9)] text-[var(--status-neutral-text,#475569)]">${status}</span>`;
      }
      if (s === 'in_progress' || s === 'in-progress' || s === 'active') {
        return html`<span class="inline-flex px-2 py-0.5 rounded text-xs font-medium bg-[var(--status-info-bg,#e0f2fe)] text-[var(--status-info-text,#075985)]">${status}</span>`;
      }
      if (s === 'overdue' || s.includes('over')) {
        return html`<span class="inline-flex px-2 py-0.5 rounded text-xs font-medium bg-[var(--status-error-bg,#fee2e2)] text-[var(--status-error-text,#991b1b)]">${status}</span>`;
      }
      return html`<span class="inline-flex px-2 py-0.5 rounded text-xs font-medium bg-[var(--status-warning-bg,#fef3c7)] text-[var(--status-warning-text,#92400e)]">${status || '—'}</span>`;
    };

    const selectTask = (taskId: string) => {
      this.setGetWorkTaskDetailWorkTaskId(taskId);
      this.handleGetWorkTaskDetailClick();
    };

    return html`
      <div class="min-h-screen bg-[var(--page-bg,#f8fafc)] text-[var(--text-default,#0f172a)] p-4 md:p-6">
        <div class="max-w-7xl mx-auto space-y-4">
          <header class="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <h1 class="text-2xl font-semibold text-[var(--text-strong,#020617)]">
              ${this.msg['section.myTasksWorkspace.taskListSection.title']}
            </h1>
          </header>

          <!-- summary-first -->
          <section class="grid grid-cols-2 md:grid-cols-3 gap-3" aria-label="${this.msg['organism.myTasksWorkspace.summary-first10.title']}">
            <div class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-4 shadow-sm">
              <p class="text-xs uppercase tracking-wide text-[var(--text-muted,#64748b)]">${this.msg['intent.myTasksWorkspace.listMyWorkTasks.list.column.total.label']}</p>
              <p class="mt-1 text-2xl font-semibold text-[var(--text-strong,#020617)]">${totalCount}</p>
            </div>
            <div class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-4 shadow-sm">
              <p class="text-xs uppercase tracking-wide text-[var(--text-muted,#64748b)]">${this.msg['intent.myTasksWorkspace.summary-first10.content.title']}</p>
              <p class="mt-1 text-2xl font-semibold text-[var(--text-strong,#020617)]">${openCount}</p>
            </div>
            <div class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-4 shadow-sm col-span-2 md:col-span-1">
              <p class="text-xs uppercase tracking-wide text-[var(--text-muted,#64748b)]">${this.msg['intent.myTasksWorkspace.getWorkTaskDetail.list.column.isOverdue.label']}</p>
              <p class="mt-1 text-2xl font-semibold ${overdueCount > 0 ? 'text-[var(--status-error-text,#991b1b)]' : 'text-[var(--text-strong,#020617)]'}">${overdueCount}</p>
            </div>
          </section>

          <!-- filters -->
          <section class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-4 shadow-sm">
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 items-end">
              <label class="flex flex-col gap-1 text-sm">
                <span class="text-[var(--text-muted,#64748b)]">${this.msg['intent.myTasksWorkspace.listMyWorkTasks.list.filter.status.label']}</span>
                <input
                  class="rounded border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-[var(--text-default,#0f172a)] focus:outline-none focus:ring-2 focus:ring-[var(--focus-ring,#94a3b8)]"
                  .value=${this.listMyWorkTasksStatus || ''}
                  @change=${(e: Event) => this.handleListMyWorkTasksStatusChange(e)}
                />
              </label>
              <label class="flex flex-col gap-1 text-sm">
                <span class="text-[var(--text-muted,#64748b)]">${this.msg['intent.myTasksWorkspace.listMyWorkTasks.list.filter.page.label']}</span>
                <input
                  type="number"
                  min="1"
                  class="rounded border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-[var(--text-default,#0f172a)] focus:outline-none focus:ring-2 focus:ring-[var(--focus-ring,#94a3b8)]"
                  .value=${this.listMyWorkTasksPage || ''}
                  @change=${(e: Event) => this.handleListMyWorkTasksPageChange(e)}
                />
              </label>
              <label class="flex flex-col gap-1 text-sm">
                <span class="text-[var(--text-muted,#64748b)]">${this.msg['intent.myTasksWorkspace.listMyWorkTasks.list.filter.pageSize.label']}</span>
                <input
                  type="number"
                  min="1"
                  class="rounded border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-[var(--text-default,#0f172a)] focus:outline-none focus:ring-2 focus:ring-[var(--focus-ring,#94a3b8)]"
                  .value=${this.listMyWorkTasksPageSize || ''}
                  @change=${(e: Event) => this.handleListMyWorkTasksPageSizeChange(e)}
                />
              </label>
              <button
                type="button"
                class="inline-flex justify-center items-center rounded-lg px-4 py-2 font-medium bg-[var(--button-primary-bg,#2563eb)] text-[var(--button-primary-text,#ffffff)] disabled:opacity-60"
                ?disabled=${isListLoading}
                @click=${() => this.handleListMyWorkTasksClick()}
              >
                ${isListLoading ? '…' : this.msg['organism.myTasksWorkspace.listMyWorkTasks.title']}
              </button>
            </div>
          </section>

          <!-- master-detail -->
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <!-- task list / inline-row-command -->
            <section class="md:col-span-1 rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] shadow-sm overflow-hidden">
              <div class="px-4 py-3 border-b border-[var(--border-subtle,#f1f5f9)]">
                <h2 class="text-sm font-semibold text-[var(--text-strong,#020617)]">
                  ${this.msg['organism.myTasksWorkspace.listMyWorkTasks.title']}
                </h2>
              </div>

              ${isListLoading
                ? html`
                    <div class="p-4 space-y-3" aria-busy="true">
                      <div class="h-16 rounded bg-[var(--surface-alt-bg,#f1f5f9)] animate-pulse"></div>
                      <div class="h-16 rounded bg-[var(--surface-alt-bg,#f1f5f9)] animate-pulse"></div>
                      <div class="h-16 rounded bg-[var(--surface-alt-bg,#f1f5f9)] animate-pulse"></div>
                    </div>
                  `
                : workTasks.length === 0
                  ? html`
                      <p class="p-4 text-sm text-[var(--text-muted,#64748b)]">
                        ${this.msg['intent.myTasksWorkspace.listMyWorkTasks.list.empty']}
                      </p>
                    `
                  : html`
                      <ul class="divide-y divide-[var(--border-subtle,#f1f5f9)] max-h-[32rem] overflow-y-auto">
                        ${workTasks.map((task: WorkTaskRow) => {
                          const id = task.workTaskId || '';
                          const isSelected = id !== '' && id === selectedId;
                          return html`
                            <li>
                              <button
                                type="button"
                                class="w-full text-left px-4 py-3 transition-colors ${isSelected
                                  ? 'bg-[var(--selected-bg,#e0e7ff)] text-[var(--selected-text,#1e3a8a)] border-l-4 border-[var(--selected-border,#6366f1)]'
                                  : 'hover:bg-[var(--surface-alt-bg,#f8fafc)] border-l-4 border-transparent'}"
                                @click=${() => selectTask(id)}
                              >
                                <div class="flex items-start justify-between gap-2">
                                  <div class="min-w-0">
                                    <p class="font-medium truncate">${task.title || id || '—'}</p>
                                    <p class="text-xs text-[var(--text-muted,#64748b)] truncate mt-0.5">
                                      ${task.projectName || task.projectId || ''}
                                    </p>
                                  </div>
                                  <div class="flex flex-col items-end gap-1 shrink-0">
                                    ${statusBadge(task.status)}
                                    ${task.isOverdue
                                      ? html`<span class="text-xs font-medium text-[var(--status-error-text,#991b1b)]">${this.msg['intent.myTasksWorkspace.getWorkTaskDetail.list.column.isOverdue.label']}</span>`
                                      : nothing}
                                  </div>
                                </div>
                                ${task.dueDate
                                  ? html`<p class="mt-1 text-xs text-[var(--text-muted,#64748b)]">${this.msg['intent.myTasksWorkspace.getWorkTaskDetail.list.column.dueDate.label']}: ${task.dueDate}</p>`
                                  : nothing}
                              </button>
                            </li>
                          `;
                        })}
                      </ul>
                    `}
            </section>

            <!-- detail panel -->
            <section class="md:col-span-2 rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] shadow-sm overflow-hidden">
              <div class="px-4 py-3 border-b border-[var(--border-subtle,#f1f5f9)] flex items-center justify-between gap-2">
                <h2 class="text-sm font-semibold text-[var(--text-strong,#020617)]">
                  ${this.msg['organism.myTasksWorkspace.getWorkTaskDetail.title']}
                </h2>
                ${isDetailLoading
                  ? html`<span class="text-xs text-[var(--text-muted,#64748b)]">…</span>`
                  : nothing}
              </div>

              ${isDetailLoading
                ? html`
                    <div class="p-6 space-y-4" aria-busy="true">
                      <div class="h-6 w-1/2 rounded bg-[var(--surface-alt-bg,#f1f5f9)] animate-pulse"></div>
                      <div class="h-4 w-full rounded bg-[var(--surface-alt-bg,#f1f5f9)] animate-pulse"></div>
                      <div class="h-4 w-3/4 rounded bg-[var(--surface-alt-bg,#f1f5f9)] animate-pulse"></div>
                      <div class="h-24 rounded bg-[var(--surface-alt-bg,#f1f5f9)] animate-pulse"></div>
                    </div>
                  `
                : !detailRow || !selectedId
                  ? html`
                      <p class="p-6 text-sm text-[var(--text-muted,#64748b)]">
                        ${this.msg['intent.myTasksWorkspace.getWorkTaskDetail.list.empty']}
                      </p>
                    `
                  : html`
                      <div class="p-6 space-y-5">
                        <div class="flex flex-wrap items-start justify-between gap-3">
                          <div>
                            <h3 class="text-xl font-semibold text-[var(--text-strong,#020617)]">
                              ${detailRow.title || detailRow.workTaskId || '—'}
                            </h3>
                            <p class="mt-1 text-sm text-[var(--text-muted,#64748b)]">
                              ${detailRow.projectName || detailRow.projectId || ''}
                            </p>
                          </div>
                          <div class="flex flex-wrap items-center gap-2">
                            ${statusBadge(detailRow.status)}
                            ${detailRow.isOverdue
                              ? html`<span class="inline-flex px-2 py-0.5 rounded text-xs font-medium bg-[var(--status-error-bg,#fee2e2)] text-[var(--status-error-text,#991b1b)]">${this.msg['intent.myTasksWorkspace.getWorkTaskDetail.list.column.isOverdue.label']}</span>`
                              : nothing}
                          </div>
                        </div>

                        ${detailRow.description
                          ? html`
                              <div>
                                <p class="text-xs uppercase tracking-wide text-[var(--text-muted,#64748b)] mb-1">
                                  ${this.msg['intent.myTasksWorkspace.getWorkTaskDetail.list.column.description.label']}
                                </p>
                                <p class="text-sm whitespace-pre-wrap">${detailRow.description}</p>
                              </div>
                            `
                          : nothing}

                        <dl class="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 text-sm">
                          <div>
                            <dt class="text-xs text-[var(--text-muted,#64748b)]">${this.msg['intent.myTasksWorkspace.getWorkTaskDetail.list.column.workTaskId.label']}</dt>
                            <dd class="mt-0.5 font-medium">${detailRow.workTaskId || '—'}</dd>
                          </div>
                          <div>
                            <dt class="text-xs text-[var(--text-muted,#64748b)]">${this.msg['intent.myTasksWorkspace.getWorkTaskDetail.list.column.projectId.label']}</dt>
                            <dd class="mt-0.5 font-medium">${detailRow.projectId || '—'}</dd>
                          </div>
                          <div>
                            <dt class="text-xs text-[var(--text-muted,#64748b)]">${this.msg['intent.myTasksWorkspace.getWorkTaskDetail.list.column.assignedWorkerId.label']}</dt>
                            <dd class="mt-0.5 font-medium">${detailRow.assignedWorkerId || '—'}</dd>
                          </div>
                          <div>
                            <dt class="text-xs text-[var(--text-muted,#64748b)]">${this.msg['intent.myTasksWorkspace.getWorkTaskDetail.list.column.dueDate.label']}</dt>
                            <dd class="mt-0.5 font-medium">${detailRow.dueDate || '—'}</dd>
                          </div>
                          <div>
                            <dt class="text-xs text-[var(--text-muted,#64748b)]">${this.msg['intent.myTasksWorkspace.getWorkTaskDetail.list.column.completedAt.label']}</dt>
                            <dd class="mt-0.5 font-medium">${detailRow.completedAt || '—'}</dd>
                          </div>
                          <div>
                            <dt class="text-xs text-[var(--text-muted,#64748b)]">${this.msg['intent.myTasksWorkspace.getWorkTaskDetail.list.column.cancelledAt.label']}</dt>
                            <dd class="mt-0.5 font-medium">${detailRow.cancelledAt || '—'}</dd>
                          </div>
                          ${detailRow.cancellationReason
                            ? html`
                                <div class="sm:col-span-2">
                                  <dt class="text-xs text-[var(--text-muted,#64748b)]">${this.msg['intent.myTasksWorkspace.getWorkTaskDetail.list.column.cancellationReason.label']}</dt>
                                  <dd class="mt-0.5 font-medium">${detailRow.cancellationReason}</dd>
                                </div>
                              `
                            : nothing}
                          <div>
                            <dt class="text-xs text-[var(--text-muted,#64748b)]">${this.msg['intent.myTasksWorkspace.getWorkTaskDetail.list.column.createdAt.label']}</dt>
                            <dd class="mt-0.5 font-medium">${detailRow.createdAt || '—'}</dd>
                          </div>
                          <div>
                            <dt class="text-xs text-[var(--text-muted,#64748b)]">${this.msg['intent.myTasksWorkspace.getWorkTaskDetail.list.column.updatedAt.label']}</dt>
                            <dd class="mt-0.5 font-medium">${detailRow.updatedAt || '—'}</dd>
                          </div>
                        </dl>
                      </div>
                    `}
            </section>
          </div>
        </div>
      </div>
    `;
  }
}
