/// <mls fileReference="_102045_/l2/buildFlowFsm/web/desktop/page11/projectDetailWorkspace_O2.ts" enhancement="_102020_/l2/enhancementAura"/>

import { html, nothing } from 'lit';
import { type BuildFlowFsmProjectDetailWorkspaceBase as Host, messages as sharedMessages, type MessageType } from '/_102045_/l2/buildFlowFsm/web/shared/projectDetailWorkspace.js';
import type { ListWorkTasksOutput } from '/_102045_/l2/buildFlowFsm/web/shared/projectDetailWorkspace.js';

const sharedFallback = sharedMessages[Object.keys(sharedMessages)[0]];

/// **collab_i18n_start**
// Text from the shared catalog, mapped ONCE — the locale is the parameter. Reference it, never
// inline the string: the reference is what keeps this file translated. Use SHORT keys:
//   'orders.empty': m['intent.<page>.<bff>.list.empty'],
const fromShared = (m: MessageType) => ({
  'section.tasks': m['section.projectDetailWorkspace.sec-task-timeline.title'],
  'list.title': m['intent.projectDetailWorkspace.listWorkTasks.list.title'],
  'list.empty': m['intent.projectDetailWorkspace.listWorkTasks.list.empty'],
  'filter.projectId': m['intent.projectDetailWorkspace.listWorkTasks.list.filter.projectId.label'],
  'filter.status': m['intent.projectDetailWorkspace.listWorkTasks.list.filter.status.label'],
  'filter.assignedWorkerId': m['intent.projectDetailWorkspace.listWorkTasks.list.filter.assignedWorkerId.label'],
  'col.workTasks': m['intent.projectDetailWorkspace.listWorkTasks.list.column.workTasks.label'],
  'col.total': m['intent.projectDetailWorkspace.listWorkTasks.list.column.total.label'],
});
const o2Message_en = {
  ...fromShared(sharedMessages['en'] ?? sharedFallback),
  // The copy you invent, with short keys. Only this part repeats per language.
  'applyFilters': 'Apply filters',
  'loading': 'Loading work tasks…',
  'refresh': 'Refresh',
  'totalLabel': 'Total tasks',
  'prevPage': 'Previous',
  'nextPage': 'Next',
  'pageLabel': 'Page',
  'col.id': 'Task',
  'col.title': 'Title',
  'col.status': 'Status',
  'col.assignee': 'Assignee',
  'col.start': 'Start',
  'col.end': 'End',
  'col.progress': 'Progress',
};
type O2Msg = typeof o2Message_en;
const o2Message_pt_br: O2Msg = {
  ...fromShared(sharedMessages['pt-br'] ?? sharedFallback),
  // The SAME invented keys as o2Message_en, translated to pt-br.
  'applyFilters': 'Aplicar filtros',
  'loading': 'Carregando tarefas…',
  'refresh': 'Atualizar',
  'totalLabel': 'Total de tarefas',
  'prevPage': 'Anterior',
  'nextPage': 'Próxima',
  'pageLabel': 'Página',
  'col.id': 'Tarefa',
  'col.title': 'Título',
  'col.status': 'Status',
  'col.assignee': 'Responsável',
  'col.start': 'Início',
  'col.end': 'Fim',
  'col.progress': 'Progresso',
};
const o2Message_es: O2Msg = {
  ...fromShared(sharedMessages['es'] ?? sharedFallback),
  // The SAME invented keys as o2Message_en, translated to es.
  'applyFilters': 'Aplicar filtros',
  'loading': 'Cargando tareas…',
  'refresh': 'Actualizar',
  'totalLabel': 'Total de tareas',
  'prevPage': 'Anterior',
  'nextPage': 'Siguiente',
  'pageLabel': 'Página',
  'col.id': 'Tarea',
  'col.title': 'Título',
  'col.status': 'Estado',
  'col.assignee': 'Asignado',
  'col.start': 'Inicio',
  'col.end': 'Fin',
  'col.progress': 'Progreso',
};
const o2Messages: { [key: string]: O2Msg } = { 'en': o2Message_en, 'pt-br': o2Message_pt_br, 'es': o2Message_es };
/// **collab_i18n_end**

const o2Fallback = o2Messages[Object.keys(o2Messages)[0]];

type WorkTaskRow = ListWorkTasksOutput['workTasks'][number];

const readRowString = (row: WorkTaskRow, key: string): string => {
  const record = row as unknown as Record<string, unknown>;
  const value = record[key];
  if (value === null || value === undefined) {
    return '';
  }
  return String(value);
};

/** taskTimeline — listWorkTasks */
export function renderTaskTimeline(host: Host) {
  const msg = o2Messages[host.getMessageKey(o2Messages)] || o2Fallback;
  // State and handlers come from `host` (host.<state>, host.handle<X>) — the shared owns them.
  const isLoading = host.listWorkTasksState === 'loading';
  const data: ListWorkTasksOutput = host.listWorkTasksData ?? { workTasks: [], total: 0 };
  const rows: WorkTaskRow[] = Array.isArray(data.workTasks) ? data.workTasks : [];
  const total = typeof data.total === 'number' ? data.total : rows.length;
  const pageNum = host.listWorkTasksPage !== '' && !Number.isNaN(Number(host.listWorkTasksPage))
    ? Math.max(1, Number(host.listWorkTasksPage))
    : 1;
  const pageSizeNum = host.listWorkTasksPageSize !== '' && !Number.isNaN(Number(host.listWorkTasksPageSize))
    ? Math.max(1, Number(host.listWorkTasksPageSize))
    : 10;
  const totalPages = Math.max(1, Math.ceil(total / pageSizeNum) || 1);
  const canPrev = pageNum > 1 && !isLoading;
  const canNext = pageNum < totalPages && !isLoading;

  const goToPage = (next: number): void => {
    host.setListWorkTasksPage(String(next));
    void host.loadListWorkTasks();
  };

  return html`
    <section class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-4 space-y-4">
      <div class="flex flex-wrap items-start justify-between gap-3">
        <div class="space-y-1">
          <h2 class="text-lg font-semibold text-[var(--text-strong,#0f172a)]">${msg['section.tasks']}</h2>
          <p class="text-sm text-[var(--text-muted,#64748b)]">${msg['list.title']}</p>
        </div>
        <button
          type="button"
          class="inline-flex items-center rounded-md px-3 py-1.5 text-sm font-medium bg-[var(--button-secondary-bg,#f1f5f9)] text-[var(--button-secondary-text,#0f172a)] border border-[var(--button-secondary-border,#e2e8f0)] disabled:opacity-60"
          ?disabled=${isLoading}
          @click=${(e: Event) => host.handleListWorkTasksClick(e)}
        >
          ${isLoading ? msg['loading'] : msg['refresh']}
        </button>
      </div>

      <form
        class="grid grid-cols-1 md:grid-cols-4 gap-3 items-end"
        @submit=${(e: Event) => {
          e.preventDefault();
          host.setListWorkTasksPage('1');
          host.handleListWorkTasksClick(e);
        }}
      >
        <label class="flex flex-col gap-1 text-sm text-[var(--text-default,#0f172a)]">
          <span>${msg['filter.projectId']}</span>
          <input
            type="text"
            class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-[var(--text-default,#0f172a)]"
            .value=${host.listWorkTasksProjectId}
            @input=${(e: Event) => host.handleListWorkTasksProjectIdChange(e)}
          />
        </label>
        <label class="flex flex-col gap-1 text-sm text-[var(--text-default,#0f172a)]">
          <span>${msg['filter.status']}</span>
          <input
            type="text"
            class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-[var(--text-default,#0f172a)]"
            .value=${host.listWorkTasksStatus}
            @input=${(e: Event) => host.handleListWorkTasksStatusChange(e)}
          />
        </label>
        <label class="flex flex-col gap-1 text-sm text-[var(--text-default,#0f172a)]">
          <span>${msg['filter.assignedWorkerId']}</span>
          <input
            type="text"
            class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-[var(--text-default,#0f172a)]"
            .value=${host.listWorkTasksAssignedWorkerId}
            @input=${(e: Event) => host.handleListWorkTasksAssignedWorkerIdChange(e)}
          />
        </label>
        <button
          type="submit"
          class="inline-flex justify-center items-center rounded-md px-3 py-2 text-sm font-medium bg-[var(--button-primary-bg,#2563eb)] text-[var(--button-primary-text,#ffffff)] disabled:opacity-60"
          ?disabled=${isLoading}
        >
          ${isLoading ? msg['loading'] : msg['applyFilters']}
        </button>
      </form>

      ${isLoading
        ? html`
            <div class="space-y-2" aria-busy="true">
              <div class="h-10 rounded-md bg-[var(--surface-alt-bg,#f8fafc)] animate-pulse"></div>
              <div class="h-10 rounded-md bg-[var(--surface-alt-bg,#f8fafc)] animate-pulse"></div>
              <div class="h-10 rounded-md bg-[var(--surface-alt-bg,#f8fafc)] animate-pulse"></div>
            </div>
          `
        : rows.length === 0
          ? html`<p class="text-sm text-[var(--text-muted,#64748b)] py-6 text-center">${msg['list.empty']}</p>`
          : html`
              <div class="overflow-x-auto rounded-md border border-[var(--border-subtle,#e2e8f0)]">
                <table class="min-w-full text-sm text-left">
                  <thead class="bg-[var(--surface-alt-bg,#f8fafc)] text-[var(--text-muted,#64748b)]">
                    <tr>
                      <th class="px-3 py-2 font-medium">${msg['col.id']}</th>
                      <th class="px-3 py-2 font-medium">${msg['col.title']}</th>
                      <th class="px-3 py-2 font-medium">${msg['col.status']}</th>
                      <th class="px-3 py-2 font-medium">${msg['col.assignee']}</th>
                      <th class="px-3 py-2 font-medium">${msg['col.start']}</th>
                      <th class="px-3 py-2 font-medium">${msg['col.end']}</th>
                      <th class="px-3 py-2 font-medium">${msg['col.progress']}</th>
                    </tr>
                  </thead>
                  <tbody class="divide-y divide-[var(--border-subtle,#e2e8f0)] text-[var(--text-default,#0f172a)]">
                    ${rows.map((row: WorkTaskRow) => {
                      const id =
                        readRowString(row, 'workTaskId') ||
                        readRowString(row, 'id') ||
                        readRowString(row, 'taskId');
                      const title =
                        readRowString(row, 'title') ||
                        readRowString(row, 'name') ||
                        readRowString(row, 'workTaskTitle');
                      const status = readRowString(row, 'status');
                      const assignee =
                        readRowString(row, 'assignedWorkerId') ||
                        readRowString(row, 'assigneeId') ||
                        readRowString(row, 'workerName');
                      const start =
                        readRowString(row, 'startDate') ||
                        readRowString(row, 'plannedStartDate');
                      const end =
                        readRowString(row, 'endDate') ||
                        readRowString(row, 'plannedEndDate') ||
                        readRowString(row, 'dueDate');
                      const progress =
                        readRowString(row, 'progress') ||
                        readRowString(row, 'percentComplete') ||
                        readRowString(row, 'completionPercent');
                      return html`
                        <tr class="hover:bg-[var(--surface-alt-bg,#f8fafc)]">
                          <td class="px-3 py-2 whitespace-nowrap font-medium text-[var(--text-strong,#0f172a)]">${id}</td>
                          <td class="px-3 py-2">${title}</td>
                          <td class="px-3 py-2">
                            ${status
                              ? html`<span class="inline-flex rounded-full px-2 py-0.5 text-xs bg-[var(--status-neutral-bg,#f1f5f9)] text-[var(--status-neutral-text,#334155)]">${status}</span>`
                              : nothing}
                          </td>
                          <td class="px-3 py-2 whitespace-nowrap">${assignee}</td>
                          <td class="px-3 py-2 whitespace-nowrap">${start}</td>
                          <td class="px-3 py-2 whitespace-nowrap">${end}</td>
                          <td class="px-3 py-2 whitespace-nowrap">${progress}</td>
                        </tr>
                      `;
                    })}
                  </tbody>
                </table>
              </div>
            `}

      <div class="flex flex-wrap items-center justify-between gap-3 text-sm text-[var(--text-muted,#64748b)]">
        <span>${msg['totalLabel']}: <span class="font-medium text-[var(--text-default,#0f172a)]">${total}</span></span>
        <div class="flex items-center gap-2">
          <button
            type="button"
            class="rounded-md px-2.5 py-1 border border-[var(--border-default,#e2e8f0)] bg-[var(--button-secondary-bg,#f1f5f9)] text-[var(--button-secondary-text,#0f172a)] disabled:opacity-50"
            ?disabled=${!canPrev}
            @click=${() => goToPage(pageNum - 1)}
          >
            ${msg['prevPage']}
          </button>
          <span>${msg['pageLabel']} ${pageNum} / ${totalPages}</span>
          <button
            type="button"
            class="rounded-md px-2.5 py-1 border border-[var(--border-default,#e2e8f0)] bg-[var(--button-secondary-bg,#f1f5f9)] text-[var(--button-secondary-text,#0f172a)] disabled:opacity-50"
            ?disabled=${!canNext}
            @click=${() => goToPage(pageNum + 1)}
          >
            ${msg['nextPage']}
          </button>
        </div>
      </div>
    </section>
  `;
}

/* Helpers stay INSIDE this file and are NOT exported: exactly one render function leaves it. */
