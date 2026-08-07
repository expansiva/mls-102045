/// <mls fileReference="_102045_/l2/buildFlowFsm/web/desktop/page21/myTasksWorkspace.ts" enhancement="_102020_/l2/enhancementAura"/>

import { html, nothing } from 'lit';
import { customElement } from 'lit/decorators.js';
import {
  BuildFlowFsmMyTasksWorkspaceBase,
  messages,
  type MessageType,
  type ListMyWorkTasksOutput,
  type GetWorkTaskDetailOutput,
} from '/_102045_/l2/buildFlowFsm/web/shared/myTasksWorkspace.js';

type WorkTaskRow = ListMyWorkTasksOutput['workTasks'][number];

@customElement('build-flow-fsm--web--desktop--page21--my-tasks-workspace-102045')
export class BuildFlowFsmDesktopPage21MyTasksWorkspacePage extends BuildFlowFsmMyTasksWorkspaceBase {
  render() {
    const msg: MessageType = messages['en'] ?? messages['pt-br'] ?? messages['es']!;
    const rows: WorkTaskRow[] = this.listMyWorkTasksData?.workTasks ?? [];
    const total: number = this.listMyWorkTasksData?.total ?? 0;
    const listLoading: boolean = this.listMyWorkTasksState === 'loading';
    const selectedId: string = this.getWorkTaskDetailWorkTaskId || '';
    const pageNum: number = this.listMyWorkTasksPage !== '' && !Number.isNaN(Number(this.listMyWorkTasksPage))
      ? Number(this.listMyWorkTasksPage)
      : 1;
    const pageSizeNum: number = this.listMyWorkTasksPageSize !== '' && !Number.isNaN(Number(this.listMyWorkTasksPageSize))
      ? Number(this.listMyWorkTasksPageSize)
      : 20;
    const totalPages: number = pageSizeNum > 0 ? Math.max(1, Math.ceil(total / pageSizeNum)) : 1;

    const statusSet: string[] = [];
    for (const row of rows) {
      const statusValue = (row as { status?: string }).status;
      if (statusValue && statusSet.indexOf(statusValue) === -1) {
        statusSet.push(statusValue);
      }
    }
    if (this.listMyWorkTasksStatus && statusSet.indexOf(this.listMyWorkTasksStatus) === -1) {
      statusSet.push(this.listMyWorkTasksStatus);
    }

    return html`
      <div class="min-h-full bg-[var(--page-bg,#f8fafc)] text-[var(--text-default,#0f172a)] p-4 md:p-6">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 items-start">
          <section class="md:col-span-1 flex flex-col gap-3 rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-3 shadow-[var(--shadow-small,0_1px_2px_rgba(0,0,0,0.05))]">
            <div class="flex flex-wrap gap-2" role="toolbar" aria-label=${msg['intent.myTasksWorkspace.listMyWorkTasks.list.filter.status.label']}>
              <button
                type="button"
                class=${this.listMyWorkTasksStatus === ''
                  ? 'px-3 py-1.5 text-sm rounded-full border border-[var(--selected-border,#94a3b8)] bg-[var(--selected-bg,#e2e8f0)] text-[var(--selected-text,#0f172a)]'
                  : 'px-3 py-1.5 text-sm rounded-full border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-alt-bg,#f1f5f9)] text-[var(--text-muted,#64748b)]'}
                @click=${() => {
                  this.setListMyWorkTasksStatus('');
                  this.setListMyWorkTasksPage('1');
                  this.handleListMyWorkTasksClick();
                }}
              >
                ${msg['intent.myTasksWorkspace.listMyWorkTasks.list.column.workTasks.label']}
                <span class="ml-1 text-[var(--text-muted,#64748b)]">${total}</span>
              </button>
              ${statusSet.map((statusValue: string) => html`
                <button
                  type="button"
                  class=${this.listMyWorkTasksStatus === statusValue
                    ? 'px-3 py-1.5 text-sm rounded-full border border-[var(--selected-border,#94a3b8)] bg-[var(--selected-bg,#e2e8f0)] text-[var(--selected-text,#0f172a)]'
                    : 'px-3 py-1.5 text-sm rounded-full border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-alt-bg,#f1f5f9)] text-[var(--text-muted,#64748b)]'}
                  @click=${() => {
                    this.setListMyWorkTasksStatus(statusValue);
                    this.setListMyWorkTasksPage('1');
                    this.handleListMyWorkTasksClick();
                  }}
                >
                  ${statusValue}
                </button>
              `)}
            </div>

            ${listLoading
              ? html`
                  <div class="flex flex-col gap-2" aria-busy="true">
                    <div class="h-16 rounded-lg bg-[var(--surface-alt-bg,#f1f5f9)] animate-pulse"></div>
                    <div class="h-16 rounded-lg bg-[var(--surface-alt-bg,#f1f5f9)] animate-pulse"></div>
                    <div class="h-16 rounded-lg bg-[var(--surface-alt-bg,#f1f5f9)] animate-pulse"></div>
                  </div>
                `
              : rows.length === 0
                ? html`
                    <p class="text-sm text-[var(--text-muted,#64748b)] py-6 text-center">
                      ${msg['intent.myTasksWorkspace.listMyWorkTasks.list.empty']}
                    </p>
                  `
                : html`
                    <ul class="flex flex-col gap-2 max-h-[70vh] overflow-y-auto" role="listbox">
                      ${rows.map((row: WorkTaskRow) => this.renderQueueRow(row, selectedId, msg))}
                    </ul>
                  `}

            ${totalPages > 1
              ? html`
                  <div class="flex items-center justify-between gap-2 pt-2 border-t border-[var(--border-subtle,#e2e8f0)]">
                    <button
                      type="button"
                      class="px-3 py-1.5 text-sm rounded-lg border border-[var(--button-secondary-border,#e2e8f0)] bg-[var(--button-secondary-bg,#ffffff)] text-[var(--button-secondary-text,#0f172a)] disabled:opacity-50"
                      ?disabled=${pageNum <= 1 || listLoading}
                      @click=${() => {
                        this.setListMyWorkTasksPage(String(Math.max(1, pageNum - 1)));
                        this.handleListMyWorkTasksClick();
                      }}
                    >
                      ‹
                    </button>
                    <span class="text-xs text-[var(--text-muted,#64748b)]">${pageNum} / ${totalPages}</span>
                    <button
                      type="button"
                      class="px-3 py-1.5 text-sm rounded-lg border border-[var(--button-secondary-border,#e2e8f0)] bg-[var(--button-secondary-bg,#ffffff)] text-[var(--button-secondary-text,#0f172a)] disabled:opacity-50"
                      ?disabled=${pageNum >= totalPages || listLoading}
                      @click=${() => {
                        this.setListMyWorkTasksPage(String(pageNum + 1));
                        this.handleListMyWorkTasksClick();
                      }}
                    >
                      ›
                    </button>
                  </div>
                `
              : nothing}
          </section>

          <section class="md:col-span-2 rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-4 shadow-[var(--shadow-small,0_1px_2px_rgba(0,0,0,0.05))] min-h-[20rem]">
            ${this.renderDetailPanel(msg)}
          </section>
        </div>
      </div>
    `;
  }

  renderQueueRow(row: WorkTaskRow, selectedId: string, msg: MessageType) {
    const task = row as {
      workTaskId?: string;
      title?: string;
      status?: string;
      dueDate?: string;
      isOverdue?: boolean;
      projectName?: string;
    };
    const rowId: string = task.workTaskId ?? '';
    const isSelected: boolean = rowId !== '' && rowId === selectedId;
    const isOverdue: boolean = Boolean(task.isOverdue);

    return html`
      <li role="option" aria-selected=${isSelected ? 'true' : 'false'}>
        <button
          type="button"
          class=${isSelected
            ? 'w-full text-left rounded-lg border border-[var(--selected-border,#94a3b8)] bg-[var(--selected-bg,#e2e8f0)] text-[var(--selected-text,#0f172a)] p-3 flex flex-col gap-1'
            : 'w-full text-left rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] hover:bg-[var(--surface-alt-bg,#f1f5f9)] p-3 flex flex-col gap-1'}
          @click=${() => {
            if (!rowId) {
              return;
            }
            this.setGetWorkTaskDetailWorkTaskId(rowId);
            this.handleGetWorkTaskDetailClick();
          }}
        >
          <div class="flex items-start justify-between gap-2">
            <span class="font-medium text-sm text-[var(--text-strong,#020617)] truncate">
              ${task.title ?? msg['intent.myTasksWorkspace.getWorkTaskDetail.list.column.title.label']}
            </span>
            <span
              class=${isOverdue
                ? 'shrink-0 text-xs px-2 py-0.5 rounded-full bg-[var(--status-error-bg,#fee2e2)] text-[var(--status-error-text,#991b1b)]'
                : 'shrink-0 text-xs px-2 py-0.5 rounded-full bg-[var(--status-neutral-bg,#f1f5f9)] text-[var(--status-neutral-text,#334155)]'}
            >
              ${task.status ?? ''}
            </span>
          </div>
          <div class="flex items-center justify-between gap-2 text-xs text-[var(--text-muted,#64748b)]">
            <span class="truncate">${task.projectName ?? ''}</span>
            <span class=${isOverdue ? 'text-[var(--status-error-text,#991b1b)] font-medium' : ''}>
              ${task.dueDate ?? ''}
            </span>
          </div>
        </button>
      </li>
    `;
  }

  renderDetailPanel(msg: MessageType) {
    const detailLoading: boolean = this.getWorkTaskDetailState === 'loading';
    const detailError: boolean = this.getWorkTaskDetailState === 'error';
    const selectedId: string = this.getWorkTaskDetailWorkTaskId || '';
    const detail: GetWorkTaskDetailOutput | null = this.getWorkTaskDetailData;

    if (!selectedId) {
      return html`
        <p class="text-sm text-[var(--text-muted,#64748b)] py-10 text-center">
          ${msg['intent.myTasksWorkspace.getWorkTaskDetail.list.empty']}
        </p>
      `;
    }

    if (detailLoading) {
      return html`
        <div class="flex flex-col gap-3" aria-busy="true">
          <div class="h-6 w-1/2 rounded bg-[var(--surface-alt-bg,#f1f5f9)] animate-pulse"></div>
          <div class="h-4 w-1/3 rounded bg-[var(--surface-alt-bg,#f1f5f9)] animate-pulse"></div>
          <div class="h-24 w-full rounded bg-[var(--surface-alt-bg,#f1f5f9)] animate-pulse"></div>
          <div class="h-4 w-2/3 rounded bg-[var(--surface-alt-bg,#f1f5f9)] animate-pulse"></div>
        </div>
      `;
    }

    if (detailError) {
      return html`
        <div class="flex flex-col gap-3">
          <p class="text-sm text-[var(--status-error-text,#991b1b)]">
            ${msg['intent.myTasksWorkspace.getWorkTaskDetail.list.empty']}
          </p>
          <button
            type="button"
            class="self-start px-4 py-2 text-sm rounded-lg bg-[var(--button-primary-bg,#2563eb)] text-[var(--button-primary-text,#ffffff)]"
            @click=${(event: Event) => this.handleGetWorkTaskDetailClick(event)}
          >
            ${msg['organism.myTasksWorkspace.getWorkTaskDetail.title']}
          </button>
        </div>
      `;
    }

    if (!detail) {
      return html`
        <p class="text-sm text-[var(--text-muted,#64748b)] py-10 text-center">
          ${msg['intent.myTasksWorkspace.getWorkTaskDetail.list.empty']}
        </p>
      `;
    }

    const d = detail as {
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
    const isOverdue: boolean = Boolean(d.isOverdue);

    return html`
      <div class="flex flex-col gap-4">
        <div class="flex flex-wrap items-start justify-between gap-3">
          <div class="flex flex-col gap-1 min-w-0">
            <h2 class="text-lg font-semibold text-[var(--text-strong,#020617)] truncate">
              ${d.title ?? msg['intent.myTasksWorkspace.getWorkTaskDetail.list.column.title.label']}
            </h2>
            <p class="text-sm text-[var(--text-muted,#64748b)]">
              ${d.projectName ?? ''}
            </p>
          </div>
          <span
            class=${isOverdue
              ? 'shrink-0 text-xs px-2.5 py-1 rounded-full bg-[var(--status-error-bg,#fee2e2)] text-[var(--status-error-text,#991b1b)]'
              : 'shrink-0 text-xs px-2.5 py-1 rounded-full bg-[var(--status-neutral-bg,#f1f5f9)] text-[var(--status-neutral-text,#334155)]'}
          >
            ${d.status ?? ''}
          </span>
        </div>

        <dl class="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 text-sm">
          <div class="flex flex-col gap-0.5">
            <dt class="text-xs text-[var(--text-muted,#64748b)]">${msg['intent.myTasksWorkspace.getWorkTaskDetail.list.column.dueDate.label']}</dt>
            <dd class=${isOverdue ? 'text-[var(--status-error-text,#991b1b)] font-medium' : 'text-[var(--text-default,#0f172a)]'}>
              ${d.dueDate ?? '—'}
            </dd>
          </div>
          <div class="flex flex-col gap-0.5">
            <dt class="text-xs text-[var(--text-muted,#64748b)]">${msg['intent.myTasksWorkspace.getWorkTaskDetail.list.column.isOverdue.label']}</dt>
            <dd class="text-[var(--text-default,#0f172a)]">${d.isOverdue ? '✓' : '—'}</dd>
          </div>
          <div class="flex flex-col gap-0.5">
            <dt class="text-xs text-[var(--text-muted,#64748b)]">${msg['intent.myTasksWorkspace.getWorkTaskDetail.list.column.projectName.label']}</dt>
            <dd class="text-[var(--text-default,#0f172a)]">${d.projectName ?? '—'}</dd>
          </div>
          <div class="flex flex-col gap-0.5">
            <dt class="text-xs text-[var(--text-muted,#64748b)]">${msg['intent.myTasksWorkspace.getWorkTaskDetail.list.column.status.label']}</dt>
            <dd class="text-[var(--text-default,#0f172a)]">${d.status ?? '—'}</dd>
          </div>
          <div class="flex flex-col gap-0.5">
            <dt class="text-xs text-[var(--text-muted,#64748b)]">${msg['intent.myTasksWorkspace.getWorkTaskDetail.list.column.createdAt.label']}</dt>
            <dd class="text-[var(--text-default,#0f172a)]">${d.createdAt ?? '—'}</dd>
          </div>
          <div class="flex flex-col gap-0.5">
            <dt class="text-xs text-[var(--text-muted,#64748b)]">${msg['intent.myTasksWorkspace.getWorkTaskDetail.list.column.updatedAt.label']}</dt>
            <dd class="text-[var(--text-default,#0f172a)]">${d.updatedAt ?? '—'}</dd>
          </div>
          ${d.completedAt
            ? html`
                <div class="flex flex-col gap-0.5">
                  <dt class="text-xs text-[var(--text-muted,#64748b)]">${msg['intent.myTasksWorkspace.getWorkTaskDetail.list.column.completedAt.label']}</dt>
                  <dd class="text-[var(--text-default,#0f172a)]">${d.completedAt}</dd>
                </div>
              `
            : nothing}
          ${d.cancelledAt
            ? html`
                <div class="flex flex-col gap-0.5">
                  <dt class="text-xs text-[var(--text-muted,#64748b)]">${msg['intent.myTasksWorkspace.getWorkTaskDetail.list.column.cancelledAt.label']}</dt>
                  <dd class="text-[var(--text-default,#0f172a)]">${d.cancelledAt}</dd>
                </div>
              `
            : nothing}
          ${d.cancellationReason
            ? html`
                <div class="flex flex-col gap-0.5 sm:col-span-2">
                  <dt class="text-xs text-[var(--text-muted,#64748b)]">${msg['intent.myTasksWorkspace.getWorkTaskDetail.list.column.cancellationReason.label']}</dt>
                  <dd class="text-[var(--text-default,#0f172a)]">${d.cancellationReason}</dd>
                </div>
              `
            : nothing}
        </dl>

        <div class="flex flex-col gap-1 pt-2 border-t border-[var(--border-subtle,#e2e8f0)]">
          <span class="text-xs text-[var(--text-muted,#64748b)]">${msg['intent.myTasksWorkspace.getWorkTaskDetail.list.column.description.label']}</span>
          <p class="text-sm text-[var(--text-default,#0f172a)] whitespace-pre-wrap">
            ${d.description ?? '—'}
          </p>
        </div>
      </div>
    `;
  }
}
