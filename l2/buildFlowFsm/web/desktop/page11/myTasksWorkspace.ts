/// <mls fileReference="_102045_/l2/buildFlowFsm/web/desktop/page11/myTasksWorkspace.ts" enhancement="_102020_/l2/enhancementAura"/>

import { html, nothing, type TemplateResult } from 'lit';
import { customElement } from 'lit/decorators.js';
import { BuildFlowFsmMyTasksWorkspaceBase, messages as sharedMessages } from '/_102045_/l2/buildFlowFsm/web/shared/myTasksWorkspace.js';
import type {
  ListMyWorkTasksOutput,
  GetWorkTaskDetailOutput,
} from '/_102045_/l2/buildFlowFsm/web/shared/myTasksWorkspace.js';

const sharedFallback = sharedMessages[Object.keys(sharedMessages)[0]];

// Return type for render<Name>() helpers: a template, or the Lit sentinel for an empty branch.
// Annotating them `: TemplateResult` alone is wrong — returning `nothing` is TS2322.
type Rendered = TemplateResult | typeof nothing;

type WorkTaskRow = ListMyWorkTasksOutput['workTasks'][number];

/// **collab_i18n_start**
const s_en = sharedMessages['en'] ?? sharedFallback;
const pageMessage_en = {
  'page.title': s_en['section.myTasksWorkspace.taskListSection.title'],
  'list.title': s_en['intent.myTasksWorkspace.listMyWorkTasks.list.title'],
  'list.empty': s_en['intent.myTasksWorkspace.listMyWorkTasks.list.empty'],
  'list.loading': 'Loading your tasks…',
  'list.error': 'Could not load your tasks. Try again.',
  'list.refresh': 'Refresh',
  'list.filter.status': s_en['intent.myTasksWorkspace.listMyWorkTasks.list.filter.status.label'],
  'list.filter.status.all': 'All statuses',
  'list.filter.apply': 'Apply filters',
  'list.col.title': s_en['intent.myTasksWorkspace.getWorkTaskDetail.list.column.title.label'],
  'list.col.project': s_en['intent.myTasksWorkspace.getWorkTaskDetail.list.column.projectName.label'],
  'list.col.status': s_en['intent.myTasksWorkspace.getWorkTaskDetail.list.column.status.label'],
  'list.col.dueDate': s_en['intent.myTasksWorkspace.getWorkTaskDetail.list.column.dueDate.label'],
  'list.col.overdue': s_en['intent.myTasksWorkspace.getWorkTaskDetail.list.column.isOverdue.label'],
  'list.total': s_en['intent.myTasksWorkspace.listMyWorkTasks.list.column.total.label'],
  'list.pager.prev': 'Previous',
  'list.pager.next': 'Next',
  'list.pager.page': 'Page',
  'list.openDetail': 'View details',
  'detail.title': s_en['organism.myTasksWorkspace.getWorkTaskDetail.title'],
  'detail.empty': 'Select a task to review its details.',
  'detail.loading': 'Loading task details…',
  'detail.error': 'Could not load task details. Try again.',
  'detail.col.workTaskId': s_en['intent.myTasksWorkspace.getWorkTaskDetail.list.column.workTaskId.label'],
  'detail.col.projectId': s_en['intent.myTasksWorkspace.getWorkTaskDetail.list.column.projectId.label'],
  'detail.col.projectName': s_en['intent.myTasksWorkspace.getWorkTaskDetail.list.column.projectName.label'],
  'detail.col.title': s_en['intent.myTasksWorkspace.getWorkTaskDetail.list.column.title.label'],
  'detail.col.description': s_en['intent.myTasksWorkspace.getWorkTaskDetail.list.column.description.label'],
  'detail.col.status': s_en['intent.myTasksWorkspace.getWorkTaskDetail.list.column.status.label'],
  'detail.col.dueDate': s_en['intent.myTasksWorkspace.getWorkTaskDetail.list.column.dueDate.label'],
  'detail.col.isOverdue': s_en['intent.myTasksWorkspace.getWorkTaskDetail.list.column.isOverdue.label'],
  'detail.col.completedAt': s_en['intent.myTasksWorkspace.getWorkTaskDetail.list.column.completedAt.label'],
  'detail.col.cancelledAt': s_en['intent.myTasksWorkspace.getWorkTaskDetail.list.column.cancelledAt.label'],
  'detail.col.cancellationReason': s_en['intent.myTasksWorkspace.getWorkTaskDetail.list.column.cancellationReason.label'],
  'detail.col.createdAt': s_en['intent.myTasksWorkspace.getWorkTaskDetail.list.column.createdAt.label'],
  'detail.col.updatedAt': s_en['intent.myTasksWorkspace.getWorkTaskDetail.list.column.updatedAt.label'],
  'yes': 'Yes',
  'no': 'No',
};
type PageMessageType = typeof pageMessage_en;
const s_pt_br = sharedMessages['pt-br'] ?? sharedFallback;
const pageMessage_pt_br: PageMessageType = {
  'page.title': s_pt_br['section.myTasksWorkspace.taskListSection.title'],
  'list.title': s_pt_br['intent.myTasksWorkspace.listMyWorkTasks.list.title'],
  'list.empty': s_pt_br['intent.myTasksWorkspace.listMyWorkTasks.list.empty'],
  'list.loading': 'Carregando suas tarefas…',
  'list.error': 'Não foi possível carregar suas tarefas. Tente novamente.',
  'list.refresh': 'Atualizar',
  'list.filter.status': s_pt_br['intent.myTasksWorkspace.listMyWorkTasks.list.filter.status.label'],
  'list.filter.status.all': 'Todos os status',
  'list.filter.apply': 'Aplicar filtros',
  'list.col.title': s_pt_br['intent.myTasksWorkspace.getWorkTaskDetail.list.column.title.label'],
  'list.col.project': s_pt_br['intent.myTasksWorkspace.getWorkTaskDetail.list.column.projectName.label'],
  'list.col.status': s_pt_br['intent.myTasksWorkspace.getWorkTaskDetail.list.column.status.label'],
  'list.col.dueDate': s_pt_br['intent.myTasksWorkspace.getWorkTaskDetail.list.column.dueDate.label'],
  'list.col.overdue': s_pt_br['intent.myTasksWorkspace.getWorkTaskDetail.list.column.isOverdue.label'],
  'list.total': s_pt_br['intent.myTasksWorkspace.listMyWorkTasks.list.column.total.label'],
  'list.pager.prev': 'Anterior',
  'list.pager.next': 'Próxima',
  'list.pager.page': 'Página',
  'list.openDetail': 'Ver detalhes',
  'detail.title': s_pt_br['organism.myTasksWorkspace.getWorkTaskDetail.title'],
  'detail.empty': 'Selecione uma tarefa para revisar os detalhes.',
  'detail.loading': 'Carregando detalhes da tarefa…',
  'detail.error': 'Não foi possível carregar os detalhes. Tente novamente.',
  'detail.col.workTaskId': s_pt_br['intent.myTasksWorkspace.getWorkTaskDetail.list.column.workTaskId.label'],
  'detail.col.projectId': s_pt_br['intent.myTasksWorkspace.getWorkTaskDetail.list.column.projectId.label'],
  'detail.col.projectName': s_pt_br['intent.myTasksWorkspace.getWorkTaskDetail.list.column.projectName.label'],
  'detail.col.title': s_pt_br['intent.myTasksWorkspace.getWorkTaskDetail.list.column.title.label'],
  'detail.col.description': s_pt_br['intent.myTasksWorkspace.getWorkTaskDetail.list.column.description.label'],
  'detail.col.status': s_pt_br['intent.myTasksWorkspace.getWorkTaskDetail.list.column.status.label'],
  'detail.col.dueDate': s_pt_br['intent.myTasksWorkspace.getWorkTaskDetail.list.column.dueDate.label'],
  'detail.col.isOverdue': s_pt_br['intent.myTasksWorkspace.getWorkTaskDetail.list.column.isOverdue.label'],
  'detail.col.completedAt': s_pt_br['intent.myTasksWorkspace.getWorkTaskDetail.list.column.completedAt.label'],
  'detail.col.cancelledAt': s_pt_br['intent.myTasksWorkspace.getWorkTaskDetail.list.column.cancelledAt.label'],
  'detail.col.cancellationReason': s_pt_br['intent.myTasksWorkspace.getWorkTaskDetail.list.column.cancellationReason.label'],
  'detail.col.createdAt': s_pt_br['intent.myTasksWorkspace.getWorkTaskDetail.list.column.createdAt.label'],
  'detail.col.updatedAt': s_pt_br['intent.myTasksWorkspace.getWorkTaskDetail.list.column.updatedAt.label'],
  'yes': 'Sim',
  'no': 'Não',
};
const s_es = sharedMessages['es'] ?? sharedFallback;
const pageMessage_es: PageMessageType = {
  'page.title': s_es['section.myTasksWorkspace.taskListSection.title'],
  'list.title': s_es['intent.myTasksWorkspace.listMyWorkTasks.list.title'],
  'list.empty': s_es['intent.myTasksWorkspace.listMyWorkTasks.list.empty'],
  'list.loading': 'Cargando tus tareas…',
  'list.error': 'No se pudieron cargar tus tareas. Inténtalo de nuevo.',
  'list.refresh': 'Actualizar',
  'list.filter.status': s_es['intent.myTasksWorkspace.listMyWorkTasks.list.filter.status.label'],
  'list.filter.status.all': 'Todos los estados',
  'list.filter.apply': 'Aplicar filtros',
  'list.col.title': s_es['intent.myTasksWorkspace.getWorkTaskDetail.list.column.title.label'],
  'list.col.project': s_es['intent.myTasksWorkspace.getWorkTaskDetail.list.column.projectName.label'],
  'list.col.status': s_es['intent.myTasksWorkspace.getWorkTaskDetail.list.column.status.label'],
  'list.col.dueDate': s_es['intent.myTasksWorkspace.getWorkTaskDetail.list.column.dueDate.label'],
  'list.col.overdue': s_es['intent.myTasksWorkspace.getWorkTaskDetail.list.column.isOverdue.label'],
  'list.total': s_es['intent.myTasksWorkspace.listMyWorkTasks.list.column.total.label'],
  'list.pager.prev': 'Anterior',
  'list.pager.next': 'Siguiente',
  'list.pager.page': 'Página',
  'list.openDetail': 'Ver detalles',
  'detail.title': s_es['organism.myTasksWorkspace.getWorkTaskDetail.title'],
  'detail.empty': 'Selecciona una tarea para revisar sus detalles.',
  'detail.loading': 'Cargando detalles de la tarea…',
  'detail.error': 'No se pudieron cargar los detalles. Inténtalo de nuevo.',
  'detail.col.workTaskId': s_es['intent.myTasksWorkspace.getWorkTaskDetail.list.column.workTaskId.label'],
  'detail.col.projectId': s_es['intent.myTasksWorkspace.getWorkTaskDetail.list.column.projectId.label'],
  'detail.col.projectName': s_es['intent.myTasksWorkspace.getWorkTaskDetail.list.column.projectName.label'],
  'detail.col.title': s_es['intent.myTasksWorkspace.getWorkTaskDetail.list.column.title.label'],
  'detail.col.description': s_es['intent.myTasksWorkspace.getWorkTaskDetail.list.column.description.label'],
  'detail.col.status': s_es['intent.myTasksWorkspace.getWorkTaskDetail.list.column.status.label'],
  'detail.col.dueDate': s_es['intent.myTasksWorkspace.getWorkTaskDetail.list.column.dueDate.label'],
  'detail.col.isOverdue': s_es['intent.myTasksWorkspace.getWorkTaskDetail.list.column.isOverdue.label'],
  'detail.col.completedAt': s_es['intent.myTasksWorkspace.getWorkTaskDetail.list.column.completedAt.label'],
  'detail.col.cancelledAt': s_es['intent.myTasksWorkspace.getWorkTaskDetail.list.column.cancelledAt.label'],
  'detail.col.cancellationReason': s_es['intent.myTasksWorkspace.getWorkTaskDetail.list.column.cancellationReason.label'],
  'detail.col.createdAt': s_es['intent.myTasksWorkspace.getWorkTaskDetail.list.column.createdAt.label'],
  'detail.col.updatedAt': s_es['intent.myTasksWorkspace.getWorkTaskDetail.list.column.updatedAt.label'],
  'yes': 'Sí',
  'no': 'No',
};
const pageMessages: { [key: string]: PageMessageType } = { 'en': pageMessage_en, 'pt-br': pageMessage_pt_br, 'es': pageMessage_es };
/// **collab_i18n_end**

const pageFallback = pageMessages[Object.keys(pageMessages)[0]];

@customElement('build-flow-fsm--web--desktop--page11--my-tasks-workspace-102045')
export class BuildFlowFsmDesktopPage11MyTasksWorkspacePage extends BuildFlowFsmMyTasksWorkspaceBase {
  #msgLang: string | null = null;
  #msgCache: PageMessageType = pageFallback;

  /** i18n catalog — resolved once per language, refreshed only when the document language changes. */
  protected get msg(): PageMessageType {
    const lang = (document.documentElement.lang || '').toLowerCase();
    if (lang !== this.#msgLang) {
      this.#msgLang = lang;
      this.#msgCache = pageMessages[this.getMessageKey(pageMessages)] || pageFallback;
    }
    return this.#msgCache;
  }

  /** Main render. Split the page into render<Name>() methods and call them from here. */
  render(): TemplateResult {
    const msg = this.msg;
    return html`
      <div class="min-h-full bg-[var(--page-bg,#f8fafc)] text-[var(--text-default,#0f172a)]">
        <div class="max-w-6xl mx-auto px-4 py-6 space-y-6">
          <header class="space-y-1">
            <h1 class="text-2xl font-semibold text-[var(--text-strong,#0f172a)]">${msg['page.title']}</h1>
          </header>
          ${this.renderTaskList()}
          ${this.renderTaskDetail()}
        </div>
      </div>
    `;
  }

  renderTaskList(): Rendered {
    const msg = this.msg;
    const isLoading = this.listMyWorkTasksState === 'loading';
    const isError = this.listMyWorkTasksState === 'error';
    const rows: WorkTaskRow[] = this.listMyWorkTasksData?.workTasks ?? [];
    const total = this.listMyWorkTasksData?.total ?? 0;
    const pageNum = this.listMyWorkTasksPage !== '' && !Number.isNaN(Number(this.listMyWorkTasksPage))
      ? Math.max(1, Number(this.listMyWorkTasksPage))
      : 1;
    const pageSizeNum = this.listMyWorkTasksPageSize !== '' && !Number.isNaN(Number(this.listMyWorkTasksPageSize))
      ? Math.max(1, Number(this.listMyWorkTasksPageSize))
      : 10;
    const totalPages = Math.max(1, Math.ceil(total / pageSizeNum) || 1);
    const canPrev = pageNum > 1 && !isLoading;
    const canNext = pageNum < totalPages && !isLoading;
    const selectedId = this.getWorkTaskDetailWorkTaskId;

    const goToPage = (nextPage: number): void => {
      this.setListMyWorkTasksPage(String(nextPage));
      void this.loadListMyWorkTasks();
    };

    const openDetail = (row: WorkTaskRow): void => {
      const id = row && typeof row === 'object' && 'workTaskId' in row
        ? String((row as { workTaskId?: unknown }).workTaskId ?? '')
        : '';
      if (!id) {
        return;
      }
      this.setGetWorkTaskDetailWorkTaskId(id);
      void this.loadGetWorkTaskDetail();
    };

    const rowTitle = (row: WorkTaskRow): string => {
      if (row && typeof row === 'object' && 'title' in row) {
        return String((row as { title?: unknown }).title ?? '');
      }
      return '';
    };
    const rowProject = (row: WorkTaskRow): string => {
      if (row && typeof row === 'object' && 'projectName' in row) {
        return String((row as { projectName?: unknown }).projectName ?? '');
      }
      return '';
    };
    const rowStatus = (row: WorkTaskRow): string => {
      if (row && typeof row === 'object' && 'status' in row) {
        return String((row as { status?: unknown }).status ?? '');
      }
      return '';
    };
    const rowDueDate = (row: WorkTaskRow): string => {
      if (row && typeof row === 'object' && 'dueDate' in row) {
        const v = (row as { dueDate?: unknown }).dueDate;
        return v == null ? '' : String(v);
      }
      return '';
    };
    const rowOverdue = (row: WorkTaskRow): string => {
      if (row && typeof row === 'object' && 'isOverdue' in row) {
        const v = (row as { isOverdue?: unknown }).isOverdue;
        if (v === true) return msg['yes'];
        if (v === false) return msg['no'];
      }
      return '';
    };
    const rowId = (row: WorkTaskRow): string => {
      if (row && typeof row === 'object' && 'workTaskId' in row) {
        return String((row as { workTaskId?: unknown }).workTaskId ?? '');
      }
      return '';
    };

    return html`
      <section class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] shadow-sm">
        <div class="flex flex-wrap items-center justify-between gap-3 px-4 py-3 border-b border-[var(--border-subtle,#e2e8f0)]">
          <h2 class="text-lg font-medium text-[var(--text-strong,#0f172a)]">${msg['list.title']}</h2>
          <button
            type="button"
            class="inline-flex items-center gap-2 rounded-md px-3 py-1.5 text-sm bg-[var(--button-secondary-bg,#f1f5f9)] text-[var(--button-secondary-text,#0f172a)] border border-[var(--button-secondary-border,#cbd5e1)] disabled:opacity-60"
            ?disabled=${isLoading}
            @click=${this.handleListMyWorkTasksClick}
          >
            ${isLoading
              ? html`<span class="inline-block h-3.5 w-3.5 animate-spin rounded-full border-2 border-current border-t-transparent" aria-hidden="true"></span>`
              : nothing}
            <span>${msg['list.refresh']}</span>
          </button>
        </div>

        <div class="px-4 py-3 flex flex-wrap items-end gap-3 border-b border-[var(--border-subtle,#e2e8f0)]">
          <label class="flex flex-col gap-1 text-sm min-w-[12rem]">
            <span class="text-[var(--text-muted,#64748b)]">${msg['list.filter.status']}</span>
            <input
              type="text"
              class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-1.5 text-[var(--text-default,#0f172a)]"
              .value=${this.listMyWorkTasksStatus}
              placeholder=${msg['list.filter.status.all']}
              @change=${this.handleListMyWorkTasksStatusChange}
            />
          </label>
          <button
            type="button"
            class="inline-flex items-center rounded-md px-3 py-1.5 text-sm bg-[var(--button-primary-bg,#2563eb)] text-[var(--button-primary-text,#ffffff)] disabled:opacity-60"
            ?disabled=${isLoading}
            @click=${this.handleListMyWorkTasksClick}
          >
            ${msg['list.filter.apply']}
          </button>
        </div>

        ${isError
          ? html`
              <div class="mx-4 mt-3 rounded-md px-3 py-2 text-sm bg-[var(--status-error-bg,#fef2f2)] text-[var(--status-error-text,#991b1b)]" role="alert">
                ${msg['list.error']}
              </div>
            `
          : nothing}

        <div class="p-4">
          ${isLoading && rows.length === 0
            ? html`
                <div class="space-y-2" aria-busy="true" aria-live="polite">
                  <p class="text-sm text-[var(--text-muted,#64748b)]">${msg['list.loading']}</p>
                  <div class="h-10 rounded bg-[var(--surface-alt-bg,#f1f5f9)] animate-pulse"></div>
                  <div class="h-10 rounded bg-[var(--surface-alt-bg,#f1f5f9)] animate-pulse"></div>
                  <div class="h-10 rounded bg-[var(--surface-alt-bg,#f1f5f9)] animate-pulse"></div>
                </div>
              `
            : rows.length === 0
              ? html`<p class="text-sm text-[var(--text-muted,#64748b)] py-6 text-center">${msg['list.empty']}</p>`
              : html`
                  <div class="overflow-x-auto">
                    <table class="min-w-full text-sm text-left">
                      <thead>
                        <tr class="border-b border-[var(--border-default,#e2e8f0)] text-[var(--text-muted,#64748b)]">
                          <th class="py-2 pr-3 font-medium">${msg['list.col.title']}</th>
                          <th class="py-2 pr-3 font-medium">${msg['list.col.project']}</th>
                          <th class="py-2 pr-3 font-medium">${msg['list.col.status']}</th>
                          <th class="py-2 pr-3 font-medium">${msg['list.col.dueDate']}</th>
                          <th class="py-2 pr-3 font-medium">${msg['list.col.overdue']}</th>
                          <th class="py-2 font-medium"></th>
                        </tr>
                      </thead>
                      <tbody>
                        ${rows.map((row: WorkTaskRow) => {
                          const id = rowId(row);
                          const isSelected = id !== '' && id === selectedId;
                          return html`
                            <tr
                              class="border-b border-[var(--border-subtle,#e2e8f0)] ${isSelected
                                ? 'bg-[var(--selected-bg,#eff6ff)] text-[var(--selected-text,#0f172a)]'
                                : ''}"
                            >
                              <td class="py-2 pr-3 font-medium">${rowTitle(row)}</td>
                              <td class="py-2 pr-3">${rowProject(row)}</td>
                              <td class="py-2 pr-3">
                                <span class="inline-flex rounded-full px-2 py-0.5 text-xs bg-[var(--status-neutral-bg,#f1f5f9)] text-[var(--status-neutral-text,#334155)]">
                                  ${rowStatus(row)}
                                </span>
                              </td>
                              <td class="py-2 pr-3">${rowDueDate(row)}</td>
                              <td class="py-2 pr-3">
                                ${rowOverdue(row) === msg['yes']
                                  ? html`<span class="text-[var(--status-warning-text,#92400e)]">${rowOverdue(row)}</span>`
                                  : rowOverdue(row)}
                              </td>
                              <td class="py-2 text-right">
                                <button
                                  type="button"
                                  class="inline-flex items-center rounded-md px-2.5 py-1 text-xs bg-[var(--button-secondary-bg,#f1f5f9)] text-[var(--button-secondary-text,#0f172a)] border border-[var(--button-secondary-border,#cbd5e1)]"
                                  @click=${(event: Event) => {
                                    event.preventDefault();
                                    openDetail(row);
                                  }}
                                >
                                  ${msg['list.openDetail']}
                                </button>
                              </td>
                            </tr>
                          `;
                        })}
                      </tbody>
                    </table>
                  </div>
                `}

          <div class="mt-4 flex flex-wrap items-center justify-between gap-3 text-sm text-[var(--text-muted,#64748b)]">
            <span>${msg['list.total']}: ${total}</span>
            <div class="flex items-center gap-2">
              <button
                type="button"
                class="rounded-md px-2.5 py-1 border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] text-[var(--text-default,#0f172a)] disabled:opacity-50"
                ?disabled=${!canPrev}
                @click=${(event: Event) => {
                  event.preventDefault();
                  if (canPrev) goToPage(pageNum - 1);
                }}
              >
                ${msg['list.pager.prev']}
              </button>
              <span>${msg['list.pager.page']} ${pageNum} / ${totalPages}</span>
              <button
                type="button"
                class="rounded-md px-2.5 py-1 border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] text-[var(--text-default,#0f172a)] disabled:opacity-50"
                ?disabled=${!canNext}
                @click=${(event: Event) => {
                  event.preventDefault();
                  if (canNext) goToPage(pageNum + 1);
                }}
              >
                ${msg['list.pager.next']}
              </button>
            </div>
          </div>
        </div>
      </section>
    `;
  }

  renderTaskDetail(): Rendered {
    const msg = this.msg;
    const isLoading = this.getWorkTaskDetailState === 'loading';
    const isError = this.getWorkTaskDetailState === 'error';
    const detail: GetWorkTaskDetailOutput | null = this.getWorkTaskDetailData;
    const hasSelection = Boolean(this.getWorkTaskDetailWorkTaskId);

    const formatValue = (value: unknown): string => {
      if (value == null) return '—';
      if (typeof value === 'boolean') return value ? msg['yes'] : msg['no'];
      return String(value);
    };

    const field = (label: string, value: unknown): TemplateResult => html`
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-1 py-2 border-b border-[var(--border-subtle,#e2e8f0)] last:border-b-0">
        <dt class="text-sm text-[var(--text-muted,#64748b)]">${label}</dt>
        <dd class="sm:col-span-2 text-sm text-[var(--text-default,#0f172a)] break-words">${formatValue(value)}</dd>
      </div>
    `;

    return html`
      <section class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] shadow-sm">
        <div class="px-4 py-3 border-b border-[var(--border-subtle,#e2e8f0)]">
          <h2 class="text-lg font-medium text-[var(--text-strong,#0f172a)]">${msg['detail.title']}</h2>
        </div>
        <div class="p-4">
          ${isError
            ? html`
                <div class="mb-3 rounded-md px-3 py-2 text-sm bg-[var(--status-error-bg,#fef2f2)] text-[var(--status-error-text,#991b1b)]" role="alert">
                  ${msg['detail.error']}
                </div>
              `
            : nothing}

          ${isLoading
            ? html`
                <div class="space-y-2" aria-busy="true" aria-live="polite">
                  <p class="text-sm text-[var(--text-muted,#64748b)]">${msg['detail.loading']}</p>
                  <div class="h-8 rounded bg-[var(--surface-alt-bg,#f1f5f9)] animate-pulse"></div>
                  <div class="h-8 rounded bg-[var(--surface-alt-bg,#f1f5f9)] animate-pulse"></div>
                  <div class="h-8 rounded bg-[var(--surface-alt-bg,#f1f5f9)] animate-pulse"></div>
                </div>
              `
            : !hasSelection || !detail
              ? html`<p class="text-sm text-[var(--text-muted,#64748b)] py-4">${msg['detail.empty']}</p>`
              : html`
                  <dl>
                    ${field(msg['detail.col.title'], (detail as { title?: unknown }).title)}
                    ${field(msg['detail.col.description'], (detail as { description?: unknown }).description)}
                    ${field(msg['detail.col.projectName'], (detail as { projectName?: unknown }).projectName)}
                    ${field(msg['detail.col.status'], (detail as { status?: unknown }).status)}
                    ${field(msg['detail.col.dueDate'], (detail as { dueDate?: unknown }).dueDate)}
                    ${field(msg['detail.col.isOverdue'], (detail as { isOverdue?: unknown }).isOverdue)}
                    ${field(msg['detail.col.workTaskId'], (detail as { workTaskId?: unknown }).workTaskId)}
                    ${field(msg['detail.col.projectId'], (detail as { projectId?: unknown }).projectId)}
                    ${field(msg['detail.col.completedAt'], (detail as { completedAt?: unknown }).completedAt)}
                    ${field(msg['detail.col.cancelledAt'], (detail as { cancelledAt?: unknown }).cancelledAt)}
                    ${field(msg['detail.col.cancellationReason'], (detail as { cancellationReason?: unknown }).cancellationReason)}
                    ${field(msg['detail.col.createdAt'], (detail as { createdAt?: unknown }).createdAt)}
                    ${field(msg['detail.col.updatedAt'], (detail as { updatedAt?: unknown }).updatedAt)}
                  </dl>
                `}
        </div>
      </section>
    `;
  }
}
