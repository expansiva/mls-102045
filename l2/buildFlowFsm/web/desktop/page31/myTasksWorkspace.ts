/// <mls fileReference="_102045_/l2/buildFlowFsm/web/desktop/page31/myTasksWorkspace.ts" enhancement="_102020_/l2/enhancementAura"/>

import { html, nothing } from 'lit';
import { customElement } from 'lit/decorators.js';
import {
  BuildFlowFsmMyTasksWorkspaceBase,
  type MessageType,
  type ListMyWorkTasksOutput,
  type GetWorkTaskDetailOutput,
} from '/_102045_/l2/buildFlowFsm/web/shared/myTasksWorkspace.js';

type WorkTaskRow = ListMyWorkTasksOutput['workTasks'][number];

@customElement('build-flow-fsm--desktop--page31--my-tasks-workspace-102045')
export class BuildFlowFsmDesktopPage31MyTasksWorkspacePage extends BuildFlowFsmMyTasksWorkspaceBase {
  declare msg: MessageType;

  render() {
    const msg = this.msg;
    return html`
      <div class="min-h-full bg-[var(--page-bg,#f8fafc)] text-[var(--text-default,#0f172a)] p-3 sm:p-4">
        <header class="mb-3">
          <h1 class="text-xl font-semibold text-[var(--text-strong,#020617)]">
            ${msg['section.myTasksWorkspace.taskListSection.title']}
          </h1>
        </header>
        ${this.renderStatusChips()}
        ${this.renderTaskDeck()}
        ${this.renderPager()}
        ${this.renderExpandedDetail()}
      </div>
    `;
  }

  renderStatusChips() {
    const msg = this.msg;
    const current = this.listMyWorkTasksStatus ?? '';
    const fromData: string[] = [];
    const rows: WorkTaskRow[] = this.listMyWorkTasksData?.workTasks ?? [];
    for (const row of rows) {
      const statusVal = row && typeof row === 'object' && 'status' in row ? String((row as { status?: unknown }).status ?? '') : '';
      if (statusVal && fromData.indexOf(statusVal) === -1) {
        fromData.push(statusVal);
      }
    }
    const chipBase =
      'shrink-0 min-h-11 px-4 py-2 rounded-full text-sm font-medium border transition-colors';
    const chipIdle =
      `${chipBase} bg-[var(--surface-bg,#ffffff)] text-[var(--text-default,#0f172a)] border-[var(--border-default,#e2e8f0)]`;
    const chipActive =
      `${chipBase} bg-[var(--selected-bg,#e2e8f0)] text-[var(--selected-text,#0f172a)] border-[var(--selected-border,#94a3b8)]`;

    return html`
      <div
        class="mb-3 flex gap-2 overflow-x-auto pb-1"
        role="toolbar"
        aria-label=${msg['intent.myTasksWorkspace.listMyWorkTasks.list.filter.status.label']}
      >
        <button
          type="button"
          class=${current === '' ? chipActive : chipIdle}
          @click=${(event: Event) => {
            event.preventDefault();
            this.setListMyWorkTasksStatus('');
            this.setListMyWorkTasksPage('1');
            void this.loadListMyWorkTasks();
          }}
        >
          ${msg['intent.myTasksWorkspace.listMyWorkTasks.list.column.workTasks.label']}
        </button>
        ${fromData.map(
          (statusVal: string) => html`
            <button
              type="button"
              class=${current === statusVal ? chipActive : chipIdle}
              @click=${(event: Event) => {
                event.preventDefault();
                this.setListMyWorkTasksStatus(statusVal);
                this.setListMyWorkTasksPage('1');
                void this.loadListMyWorkTasks();
              }}
            >
              ${statusVal}
            </button>
          `,
        )}
      </div>
    `;
  }

  renderTaskDeck() {
    const msg = this.msg;
    const loading = this.listMyWorkTasksState === 'loading';
    const rows: WorkTaskRow[] = this.listMyWorkTasksData?.workTasks ?? [];
    const selectedId = this.getWorkTaskDetailWorkTaskId ?? '';

    if (loading && rows.length === 0) {
      return html`
        <div class="flex flex-col gap-3" aria-busy="true">
          ${[0, 1, 2].map(
            () => html`
              <div
                class="h-28 rounded-lg bg-[var(--surface-alt-bg,#f1f5f9)] border border-[var(--border-subtle,#e2e8f0)] animate-pulse"
              ></div>
            `,
          )}
        </div>
      `;
    }

    if (!loading && rows.length === 0) {
      return html`
        <div
          class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-6 text-center text-[var(--text-muted,#64748b)]"
        >
          ${msg['intent.myTasksWorkspace.listMyWorkTasks.list.empty']}
        </div>
      `;
    }

    return html`
      <div class="flex flex-col gap-3" role="list">
        ${rows.map((row: WorkTaskRow) => this.renderTaskCard(row, selectedId))}
      </div>
    `;
  }

  renderTaskCard(row: WorkTaskRow, selectedId: string) {
    const msg = this.msg;
    const item = row as {
      workTaskId?: string;
      title?: string;
      status?: string;
      dueDate?: string;
      isOverdue?: boolean;
      projectName?: string;
      description?: string;
    };
    const workTaskId = item.workTaskId != null ? String(item.workTaskId) : '';
    const title = item.title != null ? String(item.title) : '';
    const status = item.status != null ? String(item.status) : '';
    const dueDate = item.dueDate != null ? String(item.dueDate) : '';
    const isOverdue = Boolean(item.isOverdue);
    const projectName = item.projectName != null ? String(item.projectName) : '';
    const isSelected = workTaskId !== '' && workTaskId === selectedId;
    const detailLoading =
      isSelected && this.getWorkTaskDetailState === 'loading';

    const cardBorder = isSelected
      ? 'border-[var(--selected-border,#94a3b8)] bg-[var(--selected-bg,#e2e8f0)]'
      : isOverdue
        ? 'border-[var(--status-error-bg,#fecaca)] bg-[var(--surface-bg,#ffffff)]'
        : 'border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)]';

    return html`
      <article
        role="listitem"
        class="rounded-lg border ${cardBorder} p-4 shadow-[var(--shadow-small,0_1px_2px_rgba(0,0,0,0.05))]"
      >
        <button
          type="button"
          class="w-full text-left min-h-11"
          ?disabled=${detailLoading || workTaskId === ''}
          @click=${(event: Event) => {
            event.preventDefault();
            if (!workTaskId) {
              return;
            }
            this.setGetWorkTaskDetailWorkTaskId(workTaskId);
            void this.loadGetWorkTaskDetail();
          }}
        >
          <div class="flex items-start justify-between gap-3">
            <div class="min-w-0 flex-1">
              <p class="text-lg font-semibold text-[var(--text-strong,#020617)] break-words">
                ${title || workTaskId}
              </p>
              ${projectName
                ? html`
                    <p class="mt-1 text-sm text-[var(--text-muted,#64748b)] truncate">
                      ${msg['intent.myTasksWorkspace.getWorkTaskDetail.list.column.projectName.label']}:
                      ${projectName}
                    </p>
                  `
                : nothing}
            </div>
            ${status
              ? html`
                  <span
                    class="shrink-0 inline-flex items-center min-h-8 px-3 rounded-full text-xs font-medium bg-[var(--status-neutral-bg,#f1f5f9)] text-[var(--status-neutral-text,#334155)]"
                  >
                    ${status}
                  </span>
                `
              : nothing}
          </div>
          <div class="mt-3 flex flex-wrap items-center gap-2 text-sm">
            ${dueDate
              ? html`
                  <span
                    class=${isOverdue
                      ? 'font-medium text-[var(--status-error-text,#b91c1c)]'
                      : 'text-[var(--text-muted,#64748b)]'}
                  >
                    ${msg['intent.myTasksWorkspace.getWorkTaskDetail.list.column.dueDate.label']}:
                    ${dueDate}
                  </span>
                `
              : nothing}
            ${isOverdue
              ? html`
                  <span
                    class="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-[var(--status-error-bg,#fee2e2)] text-[var(--status-error-text,#b91c1c)]"
                  >
                    ${msg['intent.myTasksWorkspace.getWorkTaskDetail.list.column.isOverdue.label']}
                  </span>
                `
              : nothing}
          </div>
          ${detailLoading
            ? html`
                <p class="mt-3 text-sm text-[var(--text-muted,#64748b)]">
                  ${msg['organism.myTasksWorkspace.getWorkTaskDetail.title']}…
                </p>
              `
            : nothing}
        </button>
        ${isSelected && !detailLoading ? this.renderCardDetailInline() : nothing}
      </article>
    `;
  }

  renderCardDetailInline() {
    const msg = this.msg;
    const detail: GetWorkTaskDetailOutput | null = this.getWorkTaskDetailData;
    if (this.getWorkTaskDetailState === 'error') {
      return html`
        <div
          class="mt-3 pt-3 border-t border-[var(--border-subtle,#e2e8f0)] text-sm text-[var(--status-error-text,#b91c1c)]"
        >
          ${msg['intent.myTasksWorkspace.getWorkTaskDetail.list.empty']}
          <button
            type="button"
            class="mt-2 min-h-11 px-4 rounded-lg bg-[var(--button-secondary-bg,#f1f5f9)] text-[var(--button-secondary-text,#0f172a)] border border-[var(--button-secondary-border,#e2e8f0)]"
            @click=${(event: Event) => this.handleGetWorkTaskDetailClick(event)}
          >
            ${msg['organism.myTasksWorkspace.getWorkTaskDetail.title']}
          </button>
        </div>
      `;
    }
    if (!detail) {
      return nothing;
    }
    const d = detail as {
      title?: string;
      description?: string;
      status?: string;
      dueDate?: string;
      isOverdue?: boolean;
      projectName?: string;
      completedAt?: string;
      cancelledAt?: string;
      cancellationReason?: string;
    };
    const title = d.title != null ? String(d.title) : '';
    const description = d.description != null ? String(d.description) : '';
    const status = d.status != null ? String(d.status) : '';
    const dueDate = d.dueDate != null ? String(d.dueDate) : '';
    const isOverdue = Boolean(d.isOverdue);
    const projectName = d.projectName != null ? String(d.projectName) : '';
    const completedAt = d.completedAt != null ? String(d.completedAt) : '';
    const cancelledAt = d.cancelledAt != null ? String(d.cancelledAt) : '';
    const cancellationReason = d.cancellationReason != null ? String(d.cancellationReason) : '';

    return html`
      <div class="mt-3 pt-3 border-t border-[var(--border-subtle,#e2e8f0)] space-y-2 text-sm">
        ${title
          ? html`
              <p class="text-base font-medium text-[var(--text-strong,#020617)]">${title}</p>
            `
          : nothing}
        ${description
          ? html`
              <p class="text-[var(--text-default,#0f172a)] whitespace-pre-wrap">${description}</p>
            `
          : nothing}
        <dl class="grid grid-cols-1 gap-2">
          ${projectName
            ? html`
                <div>
                  <dt class="text-[var(--text-muted,#64748b)]">
                    ${msg['intent.myTasksWorkspace.getWorkTaskDetail.list.column.projectName.label']}
                  </dt>
                  <dd class="text-[var(--text-default,#0f172a)]">${projectName}</dd>
                </div>
              `
            : nothing}
          ${status
            ? html`
                <div>
                  <dt class="text-[var(--text-muted,#64748b)]">
                    ${msg['intent.myTasksWorkspace.getWorkTaskDetail.list.column.status.label']}
                  </dt>
                  <dd class="text-[var(--text-default,#0f172a)]">${status}</dd>
                </div>
              `
            : nothing}
          ${dueDate
            ? html`
                <div>
                  <dt class="text-[var(--text-muted,#64748b)]">
                    ${msg['intent.myTasksWorkspace.getWorkTaskDetail.list.column.dueDate.label']}
                  </dt>
                  <dd
                    class=${isOverdue
                      ? 'text-[var(--status-error-text,#b91c1c)] font-medium'
                      : 'text-[var(--text-default,#0f172a)]'}
                  >
                    ${dueDate}
                  </dd>
                </div>
              `
            : nothing}
          ${completedAt
            ? html`
                <div>
                  <dt class="text-[var(--text-muted,#64748b)]">
                    ${msg['intent.myTasksWorkspace.getWorkTaskDetail.list.column.completedAt.label']}
                  </dt>
                  <dd class="text-[var(--text-default,#0f172a)]">${completedAt}</dd>
                </div>
              `
            : nothing}
          ${cancelledAt
            ? html`
                <div>
                  <dt class="text-[var(--text-muted,#64748b)]">
                    ${msg['intent.myTasksWorkspace.getWorkTaskDetail.list.column.cancelledAt.label']}
                  </dt>
                  <dd class="text-[var(--text-default,#0f172a)]">${cancelledAt}</dd>
                </div>
              `
            : nothing}
          ${cancellationReason
            ? html`
                <div>
                  <dt class="text-[var(--text-muted,#64748b)]">
                    ${msg['intent.myTasksWorkspace.getWorkTaskDetail.list.column.cancellationReason.label']}
                  </dt>
                  <dd class="text-[var(--text-default,#0f172a)]">${cancellationReason}</dd>
                </div>
              `
            : nothing}
        </dl>
      </div>
    `;
  }

  renderExpandedDetail() {
    return nothing;
  }

  renderPager() {
    const msg = this.msg;
    const total = Number(this.listMyWorkTasksData?.total ?? 0);
    const pageSizeRaw = this.listMyWorkTasksPageSize !== '' ? Number(this.listMyWorkTasksPageSize) : 10;
    const pageSize = !Number.isNaN(pageSizeRaw) && pageSizeRaw > 0 ? pageSizeRaw : 10;
    const pageRaw = this.listMyWorkTasksPage !== '' ? Number(this.listMyWorkTasksPage) : 1;
    const page = !Number.isNaN(pageRaw) && pageRaw > 0 ? pageRaw : 1;
    const totalPages = Math.max(1, Math.ceil(total / pageSize));
    if (total <= pageSize && page <= 1) {
      return nothing;
    }
    const atStart = page <= 1;
    const atEnd = page >= totalPages;
    const loading = this.listMyWorkTasksState === 'loading';

    return html`
      <div class="mt-4 flex items-center justify-between gap-3">
        <button
          type="button"
          class="min-h-11 min-w-11 px-4 rounded-lg bg-[var(--button-secondary-bg,#f1f5f9)] text-[var(--button-secondary-text,#0f172a)] border border-[var(--button-secondary-border,#e2e8f0)] disabled:opacity-50"
          ?disabled=${atStart || loading}
          @click=${(event: Event) => {
            event.preventDefault();
            if (atStart || loading) {
              return;
            }
            this.setListMyWorkTasksPage(String(page - 1));
            void this.loadListMyWorkTasks();
          }}
        >
          ‹
        </button>
        <span class="text-sm text-[var(--text-muted,#64748b)]">
          ${msg['intent.myTasksWorkspace.listMyWorkTasks.list.filter.page.label']}
          ${page}
          /
          ${totalPages}
          ·
          ${msg['intent.myTasksWorkspace.listMyWorkTasks.list.column.total.label']}
          ${total}
        </span>
        <button
          type="button"
          class="min-h-11 min-w-11 px-4 rounded-lg bg-[var(--button-secondary-bg,#f1f5f9)] text-[var(--button-secondary-text,#0f172a)] border border-[var(--button-secondary-border,#e2e8f0)] disabled:opacity-50"
          ?disabled=${atEnd || loading}
          @click=${(event: Event) => {
            event.preventDefault();
            if (atEnd || loading) {
              return;
            }
            this.setListMyWorkTasksPage(String(page + 1));
            void this.loadListMyWorkTasks();
          }}
        >
          ›
        </button>
      </div>
    `;
  }
}
