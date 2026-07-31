/// <mls fileReference="_102045_/l2/buildFlowFsm/web/desktop/page21/myTasksWorkspace.ts" enhancement="_102020_/l2/enhancementAura"/>

import { html, nothing } from 'lit';
import { customElement } from 'lit/decorators.js';
import { BuildFlowFsmMyTasksWorkspaceBase } from '/_102045_/l2/buildFlowFsm/web/shared/myTasksWorkspace.js';
import type { GetWorkTaskDetailOutput } from '/_102045_/l2/buildFlowFsm/web/shared/myTasksWorkspace.js';

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
};

@customElement('build-flow-fsm--web--desktop--page21--my-tasks-workspace-102045')
export class BuildFlowFsmDesktopPage21MyTasksWorkspacePage extends BuildFlowFsmMyTasksWorkspaceBase {
  render() {
    const listLoading = this.listMyWorkTasksState === 'loading';
    const listError = this.listMyWorkTasksState === 'error';
    const detailLoading = this.getWorkTaskDetailState === 'loading';
    const detailError = this.getWorkTaskDetailState === 'error';

    const rawList = this.listMyWorkTasksData as { workTasks?: WorkTaskRow[]; total?: number } | null | undefined;
    const workTasks: WorkTaskRow[] = Array.isArray(rawList?.workTasks) ? rawList!.workTasks! : [];
    const totalCount = typeof rawList?.total === 'number' ? rawList.total : workTasks.length;

    const sortedTasks = workTasks.slice().sort((a: WorkTaskRow, b: WorkTaskRow) => {
      const aOver = a.isOverdue === true ? 0 : 1;
      const bOver = b.isOverdue === true ? 0 : 1;
      if (aOver !== bOver) return aOver - bOver;
      const aDue = a.dueDate ? String(a.dueDate) : '';
      const bDue = b.dueDate ? String(b.dueDate) : '';
      return aDue.localeCompare(bDue);
    });

    const selectedId = this.getWorkTaskDetailWorkTaskId || '';
    const detail: GetWorkTaskDetailOutput | null = this.getWorkTaskDetailData;
    const detailRow = detail as GetWorkTaskDetailOutput & WorkTaskRow | null;

    const activeStatus = this.listMyWorkTasksStatus || '';
    const statusChips: { value: string; label: string }[] = [
      { value: '', label: 'All' /* TODO: no msg key for all-status chip */ },
      { value: 'assigned', label: 'assigned' },
      { value: 'inProgress', label: 'inProgress' },
      { value: 'completed', label: 'completed' },
      { value: 'cancelled', label: 'cancelled' },
    ];

    const statusBadgeClass = (status: string | undefined, isOverdue?: boolean): string => {
      if (isOverdue === true) {
        return 'bg-[var(--status-error-bg,#fef2f2)] text-[var(--status-error-text,#991b1b)]';
      }
      switch (status) {
        case 'completed':
          return 'bg-[var(--status-success-bg,#f0fdf4)] text-[var(--status-success-text,#166534)]';
        case 'inProgress':
          return 'bg-[var(--status-info-bg,#eff6ff)] text-[var(--status-info-text,#1e40af)]';
        case 'cancelled':
          return 'bg-[var(--status-neutral-bg,#f1f5f9)] text-[var(--status-neutral-text,#334155)]';
        case 'assigned':
          return 'bg-[var(--status-warning-bg,#fffbeb)] text-[var(--status-warning-text,#92400e)]';
        default:
          return 'bg-[var(--status-neutral-bg,#f1f5f9)] text-[var(--status-neutral-text,#334155)]';
      }
    };

    const formatDate = (value: string | undefined): string => {
      if (!value) return '';
      try {
        const d = new Date(value);
        if (Number.isNaN(d.getTime())) return String(value);
        return d.toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' });
      } catch {
        return String(value);
      }
    };

    return html`
      <div class="min-h-full bg-[var(--page-bg,#f8fafc)] text-[var(--text-default,#0f172a)] p-4 md:p-6">
        <header class="mb-4 md:mb-6">
          <h1 class="text-2xl font-semibold text-[var(--text-strong,#020617)]">
            ${this.msg['section.myTasksWorkspace.taskListSection.title']}
          </h1>
        </header>

        <div class="grid grid-cols-1 md:grid-cols-5 gap-4 md:gap-6">
          <!-- Master: task list -->
          <section class="md:col-span-3 flex flex-col gap-3">
            <div class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] shadow-sm">
              <div class="flex flex-wrap items-center justify-between gap-2 px-4 pt-4 pb-2">
                <h2 class="text-lg font-medium text-[var(--text-strong,#020617)]">
                  ${this.msg['organism.myTasksWorkspace.listMyWorkTasks.title']}
                </h2>
                <span class="text-sm text-[var(--text-muted,#64748b)]">
                  ${this.msg['intent.myTasksWorkspace.listMyWorkTasks.list.column.total.label']}: ${totalCount}
                </span>
              </div>

              <!-- Status filter chips -->
              <div class="px-4 pb-3 flex flex-wrap gap-2" role="tablist" aria-label=${this.msg['intent.myTasksWorkspace.listMyWorkTasks.list.filter.status.label']}>
                ${statusChips.map(
                  (chip: { value: string; label: string }) => html`
                    <button
                      type="button"
                      role="tab"
                      aria-selected=${activeStatus === chip.value ? 'true' : 'false'}
                      class=${activeStatus === chip.value
                        ? 'min-h-11 px-4 py-2 rounded-full text-sm font-medium border border-[var(--selected-border,#3b82f6)] bg-[var(--selected-bg,#eff6ff)] text-[var(--selected-text,#1e40af)]'
                        : 'min-h-11 px-4 py-2 rounded-full text-sm font-medium border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-alt-bg,#f8fafc)] text-[var(--text-default,#0f172a)]'}
                      ?disabled=${listLoading}
                      @click=${() => {
                        this.setListMyWorkTasksStatus(chip.value);
                        this.handleListMyWorkTasksClick();
                      }}
                    >
                      ${chip.label}
                    </button>
                  `,
                )}
              </div>

              ${listError
                ? html`
                    <div class="mx-4 mb-4 rounded-lg px-3 py-2 bg-[var(--status-error-bg,#fef2f2)] text-[var(--status-error-text,#991b1b)] text-sm">
                      ${this.msg['intent.myTasksWorkspace.listMyWorkTasks.list.title']} — error
                    </div>
                  `
                : nothing}

              ${listLoading
                ? html`
                    <div class="px-4 pb-4 space-y-3" aria-busy="true">
                      <div class="h-20 rounded-lg bg-[var(--surface-alt-bg,#f1f5f9)] animate-pulse"></div>
                      <div class="h-20 rounded-lg bg-[var(--surface-alt-bg,#f1f5f9)] animate-pulse"></div>
                      <div class="h-20 rounded-lg bg-[var(--surface-alt-bg,#f1f5f9)] animate-pulse"></div>
                    </div>
                  `
                : sortedTasks.length === 0
                  ? html`
                      <p class="px-4 pb-6 text-sm text-[var(--text-muted,#64748b)]">
                        ${this.msg['intent.myTasksWorkspace.listMyWorkTasks.list.empty']}
                      </p>
                    `
                  : html`
                      <ul class="px-3 pb-4 flex flex-col gap-2 max-h-[70vh] overflow-y-auto" role="listbox">
                        ${sortedTasks.map((task: WorkTaskRow) => {
                          const id = task.workTaskId ? String(task.workTaskId) : '';
                          const isSelected = id !== '' && id === selectedId;
                          const overdue = task.isOverdue === true;
                          return html`
                            <li>
                              <button
                                type="button"
                                role="option"
                                aria-selected=${isSelected ? 'true' : 'false'}
                                class=${isSelected
                                  ? 'w-full text-left min-h-16 p-3 rounded-lg border-2 border-[var(--selected-border,#3b82f6)] bg-[var(--selected-bg,#eff6ff)] text-[var(--selected-text,#1e40af)]'
                                  : overdue
                                    ? 'w-full text-left min-h-16 p-3 rounded-lg border border-[var(--status-error-bg,#fecaca)] bg-[var(--surface-bg,#ffffff)] hover:bg-[var(--surface-alt-bg,#f8fafc)]'
                                    : 'w-full text-left min-h-16 p-3 rounded-lg border border-[var(--border-subtle,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] hover:bg-[var(--surface-alt-bg,#f8fafc)]'}
                                @click=${() => {
                                  if (!id) return;
                                  this.setGetWorkTaskDetailWorkTaskId(id);
                                  this.handleGetWorkTaskDetailClick();
                                }}
                              >
                                <div class="flex items-start justify-between gap-2">
                                  <div class="min-w-0 flex-1">
                                    <div class="font-medium text-[var(--text-strong,#020617)] truncate">
                                      ${task.title ?? '—'}
                                    </div>
                                    <div class="mt-1 text-sm text-[var(--text-muted,#64748b)] truncate">
                                      ${task.projectName ?? ''}
                                    </div>
                                  </div>
                                  <span class=${`shrink-0 inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${statusBadgeClass(task.status, overdue)}`}>
                                    ${overdue ? 'overdue' : (task.status ?? '')}
                                  </span>
                                </div>
                                <div class="mt-2 flex flex-wrap items-center gap-2 text-xs text-[var(--text-muted,#64748b)]">
                                  <span>${this.msg['intent.myTasksWorkspace.getWorkTaskDetail.list.column.dueDate.label']}: ${formatDate(task.dueDate)}</span>
                                </div>
                              </button>
                            </li>
                          `;
                        })}
                      </ul>
                    `}
            </div>
          </section>

          <!-- Detail panel -->
          <aside class="md:col-span-2">
            <div class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] shadow-sm sticky top-4">
              <div class="px-4 pt-4 pb-2 border-b border-[var(--border-subtle,#e2e8f0)]">
                <h2 class="text-lg font-medium text-[var(--text-strong,#020617)]">
                  ${this.msg['organism.myTasksWorkspace.getWorkTaskDetail.title']}
                </h2>
              </div>

              ${detailError
                ? html`
                    <div class="m-4 rounded-lg px-3 py-2 bg-[var(--status-error-bg,#fef2f2)] text-[var(--status-error-text,#991b1b)] text-sm">
                      ${this.msg['intent.myTasksWorkspace.getWorkTaskDetail.list.title']} — error
                    </div>
                  `
                : nothing}

              ${detailLoading
                ? html`
                    <div class="p-4 space-y-3" aria-busy="true">
                      <div class="h-6 w-2/3 rounded bg-[var(--surface-alt-bg,#f1f5f9)] animate-pulse"></div>
                      <div class="h-4 w-full rounded bg-[var(--surface-alt-bg,#f1f5f9)] animate-pulse"></div>
                      <div class="h-4 w-5/6 rounded bg-[var(--surface-alt-bg,#f1f5f9)] animate-pulse"></div>
                      <div class="h-24 w-full rounded bg-[var(--surface-alt-bg,#f1f5f9)] animate-pulse"></div>
                    </div>
                  `
                : !selectedId || !detailRow
                  ? html`
                      <p class="p-4 text-sm text-[var(--text-muted,#64748b)]">
                        ${this.msg['intent.myTasksWorkspace.getWorkTaskDetail.list.empty']}
                      </p>
                    `
                  : html`
                      <div class="p-4 flex flex-col gap-4">
                        <div class="flex flex-wrap items-start justify-between gap-2">
                          <h3 class="text-xl font-semibold text-[var(--text-strong,#020617)]">
                            ${detailRow.title ?? '—'}
                          </h3>
                          <span class=${`inline-flex items-center px-2.5 py-1 rounded text-xs font-medium ${statusBadgeClass(detailRow.status, detailRow.isOverdue === true)}`}>
                            ${detailRow.isOverdue === true ? 'overdue' : (detailRow.status ?? '')}
                          </span>
                        </div>

                        <div class="grid grid-cols-1 gap-3 text-sm">
                          <div>
                            <div class="text-xs uppercase tracking-wide text-[var(--text-muted,#64748b)]">
                              ${this.msg['intent.myTasksWorkspace.getWorkTaskDetail.list.column.projectName.label']}
                            </div>
                            <div class="mt-0.5 text-[var(--text-default,#0f172a)]">${detailRow.projectName ?? '—'}</div>
                          </div>

                          <div>
                            <div class="text-xs uppercase tracking-wide text-[var(--text-muted,#64748b)]">
                              ${this.msg['intent.myTasksWorkspace.getWorkTaskDetail.list.column.dueDate.label']}
                            </div>
                            <div class=${detailRow.isOverdue === true
                              ? 'mt-0.5 font-medium text-[var(--status-error-text,#991b1b)]'
                              : 'mt-0.5 text-[var(--text-default,#0f172a)]'}>
                              ${formatDate(detailRow.dueDate)}
                              ${detailRow.isOverdue === true
                                ? html`<span class="ml-2 text-xs">(${this.msg['intent.myTasksWorkspace.getWorkTaskDetail.list.column.isOverdue.label']})</span>`
                                : nothing}
                            </div>
                          </div>

                          <div>
                            <div class="text-xs uppercase tracking-wide text-[var(--text-muted,#64748b)]">
                              ${this.msg['intent.myTasksWorkspace.getWorkTaskDetail.list.column.status.label']}
                            </div>
                            <div class="mt-0.5 text-[var(--text-default,#0f172a)]">${detailRow.status ?? '—'}</div>
                          </div>

                          <div>
                            <div class="text-xs uppercase tracking-wide text-[var(--text-muted,#64748b)]">
                              ${this.msg['intent.myTasksWorkspace.getWorkTaskDetail.list.column.description.label']}
                            </div>
                            <p class="mt-0.5 text-[var(--text-default,#0f172a)] whitespace-pre-wrap">
                              ${detailRow.description ?? '—'}
                            </p>
                          </div>

                          ${detailRow.completedAt
                            ? html`
                                <div>
                                  <div class="text-xs uppercase tracking-wide text-[var(--text-muted,#64748b)]">
                                    ${this.msg['intent.myTasksWorkspace.getWorkTaskDetail.list.column.completedAt.label']}
                                  </div>
                                  <div class="mt-0.5 text-[var(--text-default,#0f172a)]">${formatDate(detailRow.completedAt)}</div>
                                </div>
                              `
                            : nothing}

                          ${detailRow.cancelledAt
                            ? html`
                                <div>
                                  <div class="text-xs uppercase tracking-wide text-[var(--text-muted,#64748b)]">
                                    ${this.msg['intent.myTasksWorkspace.getWorkTaskDetail.list.column.cancelledAt.label']}
                                  </div>
                                  <div class="mt-0.5 text-[var(--text-default,#0f172a)]">${formatDate(detailRow.cancelledAt)}</div>
                                </div>
                              `
                            : nothing}

                          ${detailRow.cancellationReason
                            ? html`
                                <div>
                                  <div class="text-xs uppercase tracking-wide text-[var(--text-muted,#64748b)]">
                                    ${this.msg['intent.myTasksWorkspace.getWorkTaskDetail.list.column.cancellationReason.label']}
                                  </div>
                                  <p class="mt-0.5 text-[var(--text-default,#0f172a)] whitespace-pre-wrap">
                                    ${detailRow.cancellationReason}
                                  </p>
                                </div>
                              `
                            : nothing}
                        </div>
                      </div>
                    `}
            </div>
          </aside>
        </div>
      </div>
    `;
  }
}
