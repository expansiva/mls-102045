/// <mls fileReference="_102045_/l2/buildFlowFsm/web/desktop/page11/myTasksWorkspace.ts" enhancement="_102020_/l2/enhancementAura"/>

import { html, nothing } from 'lit';
import { customElement } from 'lit/decorators.js';
import {
  BuildFlowFsmMyTasksWorkspaceBase,
} from '/_102045_/l2/buildFlowFsm/web/shared/myTasksWorkspace.js';
import type {
  GetWorkTaskDetailOutput,
  ListMyWorkTasksOutput,
} from '/_102045_/l2/buildFlowFsm/web/shared/myTasksWorkspace.js';

type WorkTaskRow = NonNullable<ListMyWorkTasksOutput['workTasks']>[number];

@customElement('build-flow-fsm--web--desktop--page11--my-tasks-workspace-102045')
export class BuildFlowFsmDesktopPage11MyTasksWorkspacePage extends BuildFlowFsmMyTasksWorkspaceBase {
  render() {
    const listLoading = this.listMyWorkTasksState === 'loading';
    const listError = this.listMyWorkTasksState === 'error';
    const listSuccess = this.listMyWorkTasksState === 'success';
    const detailLoading = this.getWorkTaskDetailState === 'loading';
    const detailError = this.getWorkTaskDetailState === 'error';
    const detailSuccess = this.getWorkTaskDetailState === 'success';
    const rows: WorkTaskRow[] = this.listMyWorkTasksData?.workTasks ?? [];
    const total = this.listMyWorkTasksData?.total ?? 0;
    const detail: GetWorkTaskDetailOutput | null = this.getWorkTaskDetailData;

    return html`
      <div class="min-h-full bg-[var(--page-bg,#f8fafc)]">
        <div class="max-w-6xl mx-auto px-4 py-6 space-y-6">
          <header class="space-y-1">
            <h1 class="text-2xl font-semibold text-[var(--text-strong,#0f172a)]">
              ${this.msg['section.myTasksWorkspace.taskListSection.title']}
            </h1>
          </header>

          <section class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-4 space-y-4 shadow-sm">
            <h2 class="text-lg font-medium text-[var(--text-default,#0f172a)]">
              ${this.msg['organism.myTasksWorkspace.summary-first10.title']}
            </h2>
            <p class="text-sm text-[var(--text-muted,#64748b)]">
              ${this.msg['intent.myTasksWorkspace.summary-first10.content.title']}
            </p>
            <div class="flex flex-wrap items-end gap-3">
              <label class="flex flex-col gap-1 text-sm text-[var(--text-default,#0f172a)]">
                <span>${this.msg['intent.myTasksWorkspace.listMyWorkTasks.list.filter.status.label']}</span>
                <input
                  class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-[var(--text-default,#0f172a)]"
                  .value=${this.listMyWorkTasksStatus ?? ''}
                  @change=${(e: Event) => this.handleListMyWorkTasksStatusChange(e)}
                />
              </label>
              <label class="flex flex-col gap-1 text-sm text-[var(--text-default,#0f172a)]">
                <span>${this.msg['intent.myTasksWorkspace.listMyWorkTasks.list.filter.page.label']}</span>
                <input
                  type="number"
                  class="w-24 rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-[var(--text-default,#0f172a)]"
                  .value=${this.listMyWorkTasksPage ?? ''}
                  @change=${(e: Event) => this.handleListMyWorkTasksPageChange(e)}
                />
              </label>
              <label class="flex flex-col gap-1 text-sm text-[var(--text-default,#0f172a)]">
                <span>${this.msg['intent.myTasksWorkspace.listMyWorkTasks.list.filter.pageSize.label']}</span>
                <input
                  type="number"
                  class="w-24 rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-[var(--text-default,#0f172a)]"
                  .value=${this.listMyWorkTasksPageSize ?? ''}
                  @change=${(e: Event) => this.handleListMyWorkTasksPageSizeChange(e)}
                />
              </label>
              <button
                type="button"
                class="inline-flex items-center gap-2 rounded-md px-4 py-2 bg-[var(--button-primary-bg,#2563eb)] text-[var(--button-primary-text,#ffffff)] disabled:opacity-60"
                ?disabled=${listLoading}
                @click=${() => this.handleListMyWorkTasksClick()}
              >
                ${listLoading
                  ? html`<span class="inline-block h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent"></span>`
                  : nothing}
                ${this.msg['organism.myTasksWorkspace.listMyWorkTasks.title']}
              </button>
            </div>
          </section>

          <section class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-4 space-y-4 shadow-sm">
            <div class="flex flex-wrap items-center justify-between gap-2">
              <h2 class="text-lg font-medium text-[var(--text-default,#0f172a)]">
                ${this.msg['organism.myTasksWorkspace.listMyWorkTasks.title']}
              </h2>
              <span class="text-sm text-[var(--text-muted,#64748b)]">
                ${this.msg['intent.myTasksWorkspace.listMyWorkTasks.list.column.total.label']}: ${total}
              </span>
            </div>

            ${listSuccess
              ? html`
                  <div
                    class="rounded-md border border-[var(--border-subtle,#e2e8f0)] bg-[var(--status-success-bg,#dcfce7)] px-3 py-2 text-sm text-[var(--status-success-text,#166534)]"
                    role="status"
                  >
                    ${this.msg['intent.myTasksWorkspace.listMyWorkTasks.list.title']}
                  </div>
                `
              : nothing}
            ${listError
              ? html`
                  <div
                    class="rounded-md border border-[var(--border-subtle,#e2e8f0)] bg-[var(--status-error-bg,#fee2e2)] px-3 py-2 text-sm text-[var(--status-error-text,#991b1b)]"
                    role="alert"
                  >
                    ${this.msg['intent.myTasksWorkspace.listMyWorkTasks.list.empty']}
                  </div>
                `
              : nothing}

            ${listLoading
              ? html`
                  <div class="space-y-2" aria-busy="true">
                    <div class="h-10 rounded-md bg-[var(--surface-alt-bg,#f1f5f9)]"></div>
                    <div class="h-10 rounded-md bg-[var(--surface-alt-bg,#f1f5f9)]"></div>
                    <div class="h-10 rounded-md bg-[var(--surface-alt-bg,#f1f5f9)]"></div>
                  </div>
                `
              : rows.length === 0
                ? html`
                    <p class="text-sm text-[var(--text-muted,#64748b)]">
                      ${this.msg['intent.myTasksWorkspace.listMyWorkTasks.list.empty']}
                    </p>
                  `
                : html`
                    <div class="overflow-x-auto">
                      <table class="min-w-full text-left text-sm">
                        <thead class="border-b border-[var(--border-default,#e2e8f0)] text-[var(--text-muted,#64748b)]">
                          <tr>
                            <th class="px-3 py-2 font-medium">
                              ${this.msg['intent.myTasksWorkspace.getWorkTaskDetail.list.column.title.label']}
                            </th>
                            <th class="px-3 py-2 font-medium">
                              ${this.msg['intent.myTasksWorkspace.getWorkTaskDetail.list.column.status.label']}
                            </th>
                            <th class="px-3 py-2 font-medium">
                              ${this.msg['intent.myTasksWorkspace.getWorkTaskDetail.list.column.dueDate.label']}
                            </th>
                            <th class="px-3 py-2 font-medium">
                              ${this.msg['intent.myTasksWorkspace.getWorkTaskDetail.list.column.projectName.label']}
                            </th>
                            <th class="px-3 py-2 font-medium">
                              ${this.msg['intent.myTasksWorkspace.getWorkTaskDetail.list.column.isOverdue.label']}
                            </th>
                            <th class="px-3 py-2 font-medium"></th>
                          </tr>
                        </thead>
                        <tbody>
                          ${rows.map(
                            (item: WorkTaskRow) => html`
                              <tr
                                class="border-b border-[var(--border-subtle,#e2e8f0)] ${item.isOverdue
                                  ? 'bg-[var(--status-warning-bg,#fef3c7)] text-[var(--status-warning-text,#92400e)]'
                                  : 'text-[var(--text-default,#0f172a)]'}"
                              >
                                <td class="px-3 py-2 font-medium">${item.title ?? ''}</td>
                                <td class="px-3 py-2">
                                  <span
                                    class="inline-flex rounded-full px-2 py-0.5 text-xs bg-[var(--status-neutral-bg,#f1f5f9)] text-[var(--status-neutral-text,#334155)]"
                                  >
                                    ${item.status ?? ''}
                                  </span>
                                </td>
                                <td class="px-3 py-2">${item.dueDate ?? ''}</td>
                                <td class="px-3 py-2">${item.projectName ?? ''}</td>
                                <td class="px-3 py-2">${item.isOverdue ? 'Yes' : 'No'}</td>
                                <td class="px-3 py-2 text-right">
                                  <button
                                    type="button"
                                    class="rounded-md px-3 py-1.5 text-sm bg-[var(--button-secondary-bg,#f8fafc)] text-[var(--button-secondary-text,#0f172a)] border border-[var(--button-secondary-border,#e2e8f0)]"
                                    ?disabled=${detailLoading}
                                    @click=${() => {
                                      const id = item.workTaskId ?? '';
                                      this.setGetWorkTaskDetailWorkTaskId(id);
                                      this.handleGetWorkTaskDetailClick();
                                    }}
                                  >
                                    ${this.msg['organism.myTasksWorkspace.getWorkTaskDetail.title']}
                                  </button>
                                </td>
                              </tr>
                            `,
                          )}
                        </tbody>
                      </table>
                    </div>
                  `}
          </section>

          <section class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-4 space-y-4 shadow-sm">
            <h2 class="text-lg font-medium text-[var(--text-default,#0f172a)]">
              ${this.msg['organism.myTasksWorkspace.getWorkTaskDetail.title']}
            </h2>

            ${detailSuccess
              ? html`
                  <div
                    class="rounded-md border border-[var(--border-subtle,#e2e8f0)] bg-[var(--status-success-bg,#dcfce7)] px-3 py-2 text-sm text-[var(--status-success-text,#166534)]"
                    role="status"
                  >
                    ${this.msg['intent.myTasksWorkspace.getWorkTaskDetail.list.title']}
                  </div>
                `
              : nothing}
            ${detailError
              ? html`
                  <div
                    class="rounded-md border border-[var(--border-subtle,#e2e8f0)] bg-[var(--status-error-bg,#fee2e2)] px-3 py-2 text-sm text-[var(--status-error-text,#991b1b)]"
                    role="alert"
                  >
                    ${this.msg['intent.myTasksWorkspace.getWorkTaskDetail.list.empty']}
                  </div>
                `
              : nothing}

            ${detailLoading
              ? html`
                  <div class="space-y-2" aria-busy="true">
                    <div class="h-6 w-1/3 rounded bg-[var(--surface-alt-bg,#f1f5f9)]"></div>
                    <div class="h-4 w-full rounded bg-[var(--surface-alt-bg,#f1f5f9)]"></div>
                    <div class="h-4 w-2/3 rounded bg-[var(--surface-alt-bg,#f1f5f9)]"></div>
                  </div>
                `
              : detail
                ? html`
                    <dl
                      class="grid grid-cols-1 gap-3 sm:grid-cols-2 ${detail.isOverdue
                        ? 'rounded-md border border-[var(--border-subtle,#e2e8f0)] bg-[var(--status-warning-bg,#fef3c7)] p-3 text-[var(--status-warning-text,#92400e)]'
                        : 'text-[var(--text-default,#0f172a)]'}"
                    >
                      <div>
                        <dt class="text-xs uppercase tracking-wide text-[var(--text-muted,#64748b)]">
                          ${this.msg['intent.myTasksWorkspace.getWorkTaskDetail.list.column.title.label']}
                        </dt>
                        <dd class="font-medium">${detail.title ?? ''}</dd>
                      </div>
                      <div>
                        <dt class="text-xs uppercase tracking-wide text-[var(--text-muted,#64748b)]">
                          ${this.msg['intent.myTasksWorkspace.getWorkTaskDetail.list.column.status.label']}
                        </dt>
                        <dd>${detail.status ?? ''}</dd>
                      </div>
                      <div>
                        <dt class="text-xs uppercase tracking-wide text-[var(--text-muted,#64748b)]">
                          ${this.msg['intent.myTasksWorkspace.getWorkTaskDetail.list.column.projectName.label']}
                        </dt>
                        <dd>${detail.projectName ?? ''}</dd>
                      </div>
                      <div>
                        <dt class="text-xs uppercase tracking-wide text-[var(--text-muted,#64748b)]">
                          ${this.msg['intent.myTasksWorkspace.getWorkTaskDetail.list.column.projectId.label']}
                        </dt>
                        <dd>${detail.projectId ?? ''}</dd>
                      </div>
                      <div>
                        <dt class="text-xs uppercase tracking-wide text-[var(--text-muted,#64748b)]">
                          ${this.msg['intent.myTasksWorkspace.getWorkTaskDetail.list.column.workTaskId.label']}
                        </dt>
                        <dd>${detail.workTaskId ?? ''}</dd>
                      </div>
                      <div>
                        <dt class="text-xs uppercase tracking-wide text-[var(--text-muted,#64748b)]">
                          ${this.msg['intent.myTasksWorkspace.getWorkTaskDetail.list.column.assignedWorkerId.label']}
                        </dt>
                        <dd>${detail.assignedWorkerId ?? ''}</dd>
                      </div>
                      <div>
                        <dt class="text-xs uppercase tracking-wide text-[var(--text-muted,#64748b)]">
                          ${this.msg['intent.myTasksWorkspace.getWorkTaskDetail.list.column.dueDate.label']}
                        </dt>
                        <dd>${detail.dueDate ?? ''}</dd>
                      </div>
                      <div>
                        <dt class="text-xs uppercase tracking-wide text-[var(--text-muted,#64748b)]">
                          ${this.msg['intent.myTasksWorkspace.getWorkTaskDetail.list.column.isOverdue.label']}
                        </dt>
                        <dd>${detail.isOverdue ? 'Yes' : 'No'}</dd>
                      </div>
                      <div class="sm:col-span-2">
                        <dt class="text-xs uppercase tracking-wide text-[var(--text-muted,#64748b)]">
                          ${this.msg['intent.myTasksWorkspace.getWorkTaskDetail.list.column.description.label']}
                        </dt>
                        <dd class="whitespace-pre-wrap">${detail.description ?? ''}</dd>
                      </div>
                      <div>
                        <dt class="text-xs uppercase tracking-wide text-[var(--text-muted,#64748b)]">
                          ${this.msg['intent.myTasksWorkspace.getWorkTaskDetail.list.column.completedAt.label']}
                        </dt>
                        <dd>${detail.completedAt ?? ''}</dd>
                      </div>
                      <div>
                        <dt class="text-xs uppercase tracking-wide text-[var(--text-muted,#64748b)]">
                          ${this.msg['intent.myTasksWorkspace.getWorkTaskDetail.list.column.cancelledAt.label']}
                        </dt>
                        <dd>${detail.cancelledAt ?? ''}</dd>
                      </div>
                      <div class="sm:col-span-2">
                        <dt class="text-xs uppercase tracking-wide text-[var(--text-muted,#64748b)]">
                          ${this.msg['intent.myTasksWorkspace.getWorkTaskDetail.list.column.cancellationReason.label']}
                        </dt>
                        <dd>${detail.cancellationReason ?? ''}</dd>
                      </div>
                      <div>
                        <dt class="text-xs uppercase tracking-wide text-[var(--text-muted,#64748b)]">
                          ${this.msg['intent.myTasksWorkspace.getWorkTaskDetail.list.column.createdAt.label']}
                        </dt>
                        <dd>${detail.createdAt ?? ''}</dd>
                      </div>
                      <div>
                        <dt class="text-xs uppercase tracking-wide text-[var(--text-muted,#64748b)]">
                          ${this.msg['intent.myTasksWorkspace.getWorkTaskDetail.list.column.updatedAt.label']}
                        </dt>
                        <dd>${detail.updatedAt ?? ''}</dd>
                      </div>
                    </dl>
                  `
                : html`
                    <p class="text-sm text-[var(--text-muted,#64748b)]">
                      ${this.msg['intent.myTasksWorkspace.getWorkTaskDetail.list.empty']}
                    </p>
                  `}
          </section>
        </div>
      </div>
    `;
  }
}
