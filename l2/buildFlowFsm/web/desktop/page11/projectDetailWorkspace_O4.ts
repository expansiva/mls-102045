/// <mls fileReference="_102045_/l2/buildFlowFsm/web/desktop/page11/projectDetailWorkspace_O4.ts" enhancement="_102020_/l2/enhancementAura"/>

import { html, nothing } from 'lit';
import { type BuildFlowFsmProjectDetailWorkspaceBase as Host, messages as sharedMessages, type MessageType } from '/_102045_/l2/buildFlowFsm/web/shared/projectDetailWorkspace.js';
import type {
  ListTimeLogsOutput,
  ListMaterialUsagesOutput,
} from '/_102045_/l2/buildFlowFsm/web/shared/projectDetailWorkspace.js';

const sharedFallback = sharedMessages[Object.keys(sharedMessages)[0]];

/// **collab_i18n_start**
// Text from the shared catalog, mapped ONCE — the locale is the parameter. Reference it, never
// inline the string: the reference is what keeps this file translated. Use SHORT keys:
//   'orders.empty': m['intent.<page>.<bff>.list.empty'],
const fromShared = (m: MessageType) => ({
  'section.cost': m['section.projectDetailWorkspace.sec-cost-tracking.title'],
  'timeLogs.title': m['organism.projectDetailWorkspace.listTimeLogs.title'],
  'timeLogs.empty': m['intent.projectDetailWorkspace.listTimeLogs.list.empty'],
  'timeLogs.total': m['intent.projectDetailWorkspace.listTimeLogs.list.column.total.label'],
  'timeLogs.filter.workTaskId': m['intent.projectDetailWorkspace.listTimeLogs.list.filter.workTaskId.label'],
  'timeLogs.filter.workerName': m['intent.projectDetailWorkspace.listTimeLogs.list.filter.workerName.label'],
  'timeLogs.filter.logDate': m['intent.projectDetailWorkspace.listTimeLogs.list.filter.logDate.label'],
  'timeLogs.filter.status': m['intent.projectDetailWorkspace.listTimeLogs.list.filter.status.label'],
  'materials.title': m['organism.projectDetailWorkspace.listMaterialUsages.title'],
  'materials.empty': m['intent.projectDetailWorkspace.listMaterialUsages.list.empty'],
  'materials.total': m['intent.projectDetailWorkspace.listMaterialUsages.list.column.total.label'],
  'materials.filter.status': m['intent.projectDetailWorkspace.listMaterialUsages.list.filter.status.label'],
});
const o4Message_en = {
  ...fromShared(sharedMessages['en'] ?? sharedFallback),
  // The copy you invent, with short keys. Only this part repeats per language.
  'timeLogs.refresh': 'Refresh time logs',
  'timeLogs.loading': 'Loading time logs…',
  'timeLogs.col.workTaskId': 'Work task',
  'timeLogs.col.workerName': 'Worker',
  'timeLogs.col.logDate': 'Log date',
  'timeLogs.col.status': 'Status',
  'timeLogs.col.hours': 'Hours',
  'timeLogs.pager.prev': 'Previous',
  'timeLogs.pager.next': 'Next',
  'timeLogs.pager.summary': 'Page',
  'timeLogs.apply': 'Apply filters',
  'materials.refresh': 'Refresh material usage',
  'materials.loading': 'Loading material usage…',
  'materials.project': 'Project',
  'materials.project.none': 'No project selected',
  'materials.col.status': 'Status',
  'materials.col.quantity': 'Quantity',
  'materials.col.material': 'Material',
  'materials.col.unit': 'Unit',
  'materials.pager.prev': 'Previous',
  'materials.pager.next': 'Next',
  'materials.pager.summary': 'Page',
  'materials.apply': 'Apply filters',
  'yes': 'Yes',
  'no': 'No',
};
type O4Msg = typeof o4Message_en;
const o4Message_pt_br: O4Msg = {
  ...fromShared(sharedMessages['pt-br'] ?? sharedFallback),
  // The SAME invented keys as o4Message_en, translated to pt-br.
  'timeLogs.refresh': 'Atualizar registros de tempo',
  'timeLogs.loading': 'Carregando registros de tempo…',
  'timeLogs.col.workTaskId': 'Tarefa',
  'timeLogs.col.workerName': 'Trabalhador',
  'timeLogs.col.logDate': 'Data do registro',
  'timeLogs.col.status': 'Status',
  'timeLogs.col.hours': 'Horas',
  'timeLogs.pager.prev': 'Anterior',
  'timeLogs.pager.next': 'Próxima',
  'timeLogs.pager.summary': 'Página',
  'timeLogs.apply': 'Aplicar filtros',
  'materials.refresh': 'Atualizar uso de materiais',
  'materials.loading': 'Carregando uso de materiais…',
  'materials.project': 'Projeto',
  'materials.project.none': 'Nenhum projeto selecionado',
  'materials.col.status': 'Status',
  'materials.col.quantity': 'Quantidade',
  'materials.col.material': 'Material',
  'materials.col.unit': 'Unidade',
  'materials.pager.prev': 'Anterior',
  'materials.pager.next': 'Próxima',
  'materials.pager.summary': 'Página',
  'materials.apply': 'Aplicar filtros',
  'yes': 'Sim',
  'no': 'Não',
};
const o4Message_es: O4Msg = {
  ...fromShared(sharedMessages['es'] ?? sharedFallback),
  // The SAME invented keys as o4Message_en, translated to es.
  'timeLogs.refresh': 'Actualizar registros de tiempo',
  'timeLogs.loading': 'Cargando registros de tiempo…',
  'timeLogs.col.workTaskId': 'Tarea',
  'timeLogs.col.workerName': 'Trabajador',
  'timeLogs.col.logDate': 'Fecha del registro',
  'timeLogs.col.status': 'Estado',
  'timeLogs.col.hours': 'Horas',
  'timeLogs.pager.prev': 'Anterior',
  'timeLogs.pager.next': 'Siguiente',
  'timeLogs.pager.summary': 'Página',
  'timeLogs.apply': 'Aplicar filtros',
  'materials.refresh': 'Actualizar uso de materiales',
  'materials.loading': 'Cargando uso de materiales…',
  'materials.project': 'Proyecto',
  'materials.project.none': 'Ningún proyecto seleccionado',
  'materials.col.status': 'Estado',
  'materials.col.quantity': 'Cantidad',
  'materials.col.material': 'Material',
  'materials.col.unit': 'Unidad',
  'materials.pager.prev': 'Anterior',
  'materials.pager.next': 'Siguiente',
  'materials.pager.summary': 'Página',
  'materials.apply': 'Aplicar filtros',
  'yes': 'Sí',
  'no': 'No',
};
const o4Messages: { [key: string]: O4Msg } = { 'en': o4Message_en, 'pt-br': o4Message_pt_br, 'es': o4Message_es };
/// **collab_i18n_end**

const o4Fallback = o4Messages[Object.keys(o4Messages)[0]];

type TimeLogRow = ListTimeLogsOutput['timeLogs'][number];
type MaterialUsageRow = ListMaterialUsagesOutput['materialUsages'][number];

const asRecord = (row: unknown): Record<string, unknown> => {
  if (row && typeof row === 'object') {
    return row as Record<string, unknown>;
  }
  return {};
};

const cellText = (value: unknown, msg: O4Msg): string => {
  if (value === null || value === undefined || value === '') {
    return '—';
  }
  if (typeof value === 'boolean') {
    return value ? msg['yes'] : msg['no'];
  }
  return String(value);
};

const readPage = (raw: string): number => {
  const n = Number(raw);
  if (!Number.isFinite(n) || n < 1) {
    return 1;
  }
  return Math.floor(n);
};

const readPageSize = (raw: string): number => {
  const n = Number(raw);
  if (!Number.isFinite(n) || n < 1) {
    return 10;
  }
  return Math.floor(n);
};

/** costTracking — listTimeLogs, listMaterialUsages */
export function renderCostTracking(host: Host) {
  const msg = o4Messages[host.getMessageKey(o4Messages)] || o4Fallback;

  const timeLogsLoading = host.listTimeLogsState === 'loading';
  const timeLogRows: TimeLogRow[] = host.listTimeLogsData?.timeLogs ?? [];
  const timeLogsTotal = host.listTimeLogsData?.total ?? 0;
  const timeLogsPage = readPage(host.listTimeLogsPage);
  const timeLogsPageSize = readPageSize(host.listTimeLogsPageSize);
  const timeLogsPageCount = Math.max(1, Math.ceil(timeLogsTotal / timeLogsPageSize) || 1);

  const materialsLoading = host.listMaterialUsagesState === 'loading';
  const materialRows: MaterialUsageRow[] = host.listMaterialUsagesData?.materialUsages ?? [];
  const materialsTotal = host.listMaterialUsagesData?.total ?? 0;
  const materialsPage = readPage(host.listMaterialUsagesPage);
  const materialsPageSize = readPageSize(host.listMaterialUsagesPageSize);
  const materialsPageCount = Math.max(1, Math.ceil(materialsTotal / materialsPageSize) || 1);
  const materialsProjectId = host.listMaterialUsagesProjectId;

  const goTimeLogsPage = (next: number): void => {
    const clamped = Math.min(Math.max(1, next), timeLogsPageCount);
    host.setListTimeLogsPage(String(clamped));
    host.handleListTimeLogsClick();
  };

  const goMaterialsPage = (next: number): void => {
    const clamped = Math.min(Math.max(1, next), materialsPageCount);
    host.setListMaterialUsagesPage(String(clamped));
    host.handleListMaterialUsagesClick();
  };

  return html`
    <section class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-4 space-y-6">
      <header class="flex flex-wrap items-center justify-between gap-3">
        <h2 class="text-lg font-semibold text-[var(--text-strong,#0f172a)]">${msg['section.cost']}</h2>
      </header>

      <div class="rounded-lg border border-[var(--border-subtle,#e2e8f0)] bg-[var(--surface-alt-bg,#f8fafc)] p-4 space-y-4">
        <div class="flex flex-wrap items-center justify-between gap-3">
          <h3 class="text-base font-semibold text-[var(--text-default,#0f172a)]">${msg['timeLogs.title']}</h3>
          <button
            type="button"
            class="inline-flex items-center rounded-md px-3 py-1.5 text-sm bg-[var(--button-secondary-bg,#e2e8f0)] text-[var(--button-secondary-text,#0f172a)] border border-[var(--button-secondary-border,#cbd5e1)] disabled:opacity-60"
            ?disabled=${timeLogsLoading}
            @click=${(e: Event) => host.handleListTimeLogsClick(e)}
          >
            ${timeLogsLoading ? msg['timeLogs.loading'] : msg['timeLogs.refresh']}
          </button>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          <label class="flex flex-col gap-1 text-sm text-[var(--text-muted,#64748b)]">
            <span>${msg['timeLogs.filter.workTaskId']}</span>
            <input
              type="text"
              class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-[var(--text-default,#0f172a)]"
              .value=${host.listTimeLogsWorkTaskId}
              @change=${(e: Event) => host.handleListTimeLogsWorkTaskIdChange(e)}
            />
          </label>
          <label class="flex flex-col gap-1 text-sm text-[var(--text-muted,#64748b)]">
            <span>${msg['timeLogs.filter.workerName']}</span>
            <input
              type="text"
              class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-[var(--text-default,#0f172a)]"
              .value=${host.listTimeLogsWorkerName}
              @change=${(e: Event) => host.handleListTimeLogsWorkerNameChange(e)}
            />
          </label>
          <label class="flex flex-col gap-1 text-sm text-[var(--text-muted,#64748b)]">
            <span>${msg['timeLogs.filter.logDate']}</span>
            <input
              type="date"
              class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-[var(--text-default,#0f172a)]"
              .value=${host.listTimeLogsLogDate}
              @change=${(e: Event) => host.handleListTimeLogsLogDateChange(e)}
            />
          </label>
          <label class="flex flex-col gap-1 text-sm text-[var(--text-muted,#64748b)]">
            <span>${msg['timeLogs.filter.status']}</span>
            <input
              type="text"
              class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-[var(--text-default,#0f172a)]"
              .value=${host.listTimeLogsStatus}
              @change=${(e: Event) => host.handleListTimeLogsStatusChange(e)}
            />
          </label>
        </div>

        <div class="flex flex-wrap items-center gap-2">
          <button
            type="button"
            class="inline-flex items-center rounded-md px-3 py-1.5 text-sm bg-[var(--button-primary-bg,#2563eb)] text-[var(--button-primary-text,#ffffff)] disabled:opacity-60"
            ?disabled=${timeLogsLoading}
            @click=${(e: Event) => {
              host.setListTimeLogsPage('1');
              host.handleListTimeLogsClick(e);
            }}
          >
            ${msg['timeLogs.apply']}
          </button>
          <span class="text-sm text-[var(--text-muted,#64748b)]">
            ${msg['timeLogs.total']}: ${timeLogsTotal}
          </span>
        </div>

        ${timeLogsLoading
          ? html`<p class="text-sm text-[var(--text-muted,#64748b)]">${msg['timeLogs.loading']}</p>`
          : timeLogRows.length === 0
            ? html`<p class="text-sm text-[var(--text-muted,#64748b)]">${msg['timeLogs.empty']}</p>`
            : html`
              <div class="overflow-x-auto rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)]">
                <table class="min-w-full text-sm text-left">
                  <thead class="bg-[var(--surface-alt-bg,#f8fafc)] text-[var(--text-muted,#64748b)]">
                    <tr>
                      <th class="px-3 py-2 font-medium">${msg['timeLogs.col.workTaskId']}</th>
                      <th class="px-3 py-2 font-medium">${msg['timeLogs.col.workerName']}</th>
                      <th class="px-3 py-2 font-medium">${msg['timeLogs.col.logDate']}</th>
                      <th class="px-3 py-2 font-medium">${msg['timeLogs.col.hours']}</th>
                      <th class="px-3 py-2 font-medium">${msg['timeLogs.col.status']}</th>
                    </tr>
                  </thead>
                  <tbody class="divide-y divide-[var(--border-subtle,#e2e8f0)] text-[var(--text-default,#0f172a)]">
                    ${timeLogRows.map((row: TimeLogRow) => {
                      const r = asRecord(row);
                      return html`
                        <tr>
                          <td class="px-3 py-2">${cellText(r['workTaskId'] ?? r['workTaskTitle'], msg)}</td>
                          <td class="px-3 py-2">${cellText(r['workerName'], msg)}</td>
                          <td class="px-3 py-2">${cellText(r['logDate'], msg)}</td>
                          <td class="px-3 py-2">${cellText(r['hours'] ?? r['hoursWorked'] ?? r['durationHours'], msg)}</td>
                          <td class="px-3 py-2">${cellText(r['status'], msg)}</td>
                        </tr>
                      `;
                    })}
                  </tbody>
                </table>
              </div>
              <div class="flex flex-wrap items-center justify-between gap-3">
                <span class="text-sm text-[var(--text-muted,#64748b)]">
                  ${msg['timeLogs.pager.summary']} ${timeLogsPage} / ${timeLogsPageCount}
                </span>
                <div class="flex items-center gap-2">
                  <button
                    type="button"
                    class="inline-flex items-center rounded-md px-3 py-1.5 text-sm bg-[var(--button-secondary-bg,#e2e8f0)] text-[var(--button-secondary-text,#0f172a)] border border-[var(--button-secondary-border,#cbd5e1)] disabled:opacity-60"
                    ?disabled=${timeLogsLoading || timeLogsPage <= 1}
                    @click=${() => goTimeLogsPage(timeLogsPage - 1)}
                  >
                    ${msg['timeLogs.pager.prev']}
                  </button>
                  <button
                    type="button"
                    class="inline-flex items-center rounded-md px-3 py-1.5 text-sm bg-[var(--button-secondary-bg,#e2e8f0)] text-[var(--button-secondary-text,#0f172a)] border border-[var(--button-secondary-border,#cbd5e1)] disabled:opacity-60"
                    ?disabled=${timeLogsLoading || timeLogsPage >= timeLogsPageCount}
                    @click=${() => goTimeLogsPage(timeLogsPage + 1)}
                  >
                    ${msg['timeLogs.pager.next']}
                  </button>
                </div>
              </div>
            `}
      </div>

      <div class="rounded-lg border border-[var(--border-subtle,#e2e8f0)] bg-[var(--surface-alt-bg,#f8fafc)] p-4 space-y-4">
        <div class="flex flex-wrap items-center justify-between gap-3">
          <h3 class="text-base font-semibold text-[var(--text-default,#0f172a)]">${msg['materials.title']}</h3>
          <button
            type="button"
            class="inline-flex items-center rounded-md px-3 py-1.5 text-sm bg-[var(--button-secondary-bg,#e2e8f0)] text-[var(--button-secondary-text,#0f172a)] border border-[var(--button-secondary-border,#cbd5e1)] disabled:opacity-60"
            ?disabled=${materialsLoading || !materialsProjectId}
            @click=${(e: Event) => host.handleListMaterialUsagesClick(e)}
          >
            ${materialsLoading ? msg['materials.loading'] : msg['materials.refresh']}
          </button>
        </div>

        <div class="flex flex-wrap items-center gap-2">
          <span class="text-sm text-[var(--text-muted,#64748b)]">${msg['materials.project']}</span>
          ${materialsProjectId
            ? html`<span class="inline-flex items-center rounded-md px-2 py-1 text-sm bg-[var(--selected-bg,#e0e7ff)] text-[var(--selected-text,#1e3a8a)] border border-[var(--selected-border,#a5b4fc)]">${materialsProjectId}</span>`
            : html`<span class="text-sm text-[var(--text-muted,#64748b)]">${msg['materials.project.none']}</span>`}
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-md">
          <label class="flex flex-col gap-1 text-sm text-[var(--text-muted,#64748b)]">
            <span>${msg['materials.filter.status']}</span>
            <input
              type="text"
              class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-[var(--text-default,#0f172a)]"
              .value=${host.listMaterialUsagesStatus}
              @change=${(e: Event) => host.handleListMaterialUsagesStatusChange(e)}
            />
          </label>
        </div>

        <div class="flex flex-wrap items-center gap-2">
          <button
            type="button"
            class="inline-flex items-center rounded-md px-3 py-1.5 text-sm bg-[var(--button-primary-bg,#2563eb)] text-[var(--button-primary-text,#ffffff)] disabled:opacity-60"
            ?disabled=${materialsLoading || !materialsProjectId}
            @click=${(e: Event) => {
              host.setListMaterialUsagesPage('1');
              host.handleListMaterialUsagesClick(e);
            }}
          >
            ${msg['materials.apply']}
          </button>
          <span class="text-sm text-[var(--text-muted,#64748b)]">
            ${msg['materials.total']}: ${materialsTotal}
          </span>
        </div>

        ${!materialsProjectId
          ? html`<p class="text-sm text-[var(--text-muted,#64748b)]">${msg['materials.project.none']}</p>`
          : materialsLoading
            ? html`<p class="text-sm text-[var(--text-muted,#64748b)]">${msg['materials.loading']}</p>`
            : materialRows.length === 0
              ? html`<p class="text-sm text-[var(--text-muted,#64748b)]">${msg['materials.empty']}</p>`
              : html`
                <div class="overflow-x-auto rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)]">
                  <table class="min-w-full text-sm text-left">
                    <thead class="bg-[var(--surface-alt-bg,#f8fafc)] text-[var(--text-muted,#64748b)]">
                      <tr>
                        <th class="px-3 py-2 font-medium">${msg['materials.col.material']}</th>
                        <th class="px-3 py-2 font-medium">${msg['materials.col.quantity']}</th>
                        <th class="px-3 py-2 font-medium">${msg['materials.col.unit']}</th>
                        <th class="px-3 py-2 font-medium">${msg['materials.col.status']}</th>
                      </tr>
                    </thead>
                    <tbody class="divide-y divide-[var(--border-subtle,#e2e8f0)] text-[var(--text-default,#0f172a)]">
                      ${materialRows.map((row: MaterialUsageRow) => {
                        const r = asRecord(row);
                        return html`
                          <tr>
                            <td class="px-3 py-2">${cellText(r['materialName'] ?? r['name'] ?? r['materialId'], msg)}</td>
                            <td class="px-3 py-2">${cellText(r['quantity'] ?? r['qty'], msg)}</td>
                            <td class="px-3 py-2">${cellText(r['unit'] ?? r['unitOfMeasure'], msg)}</td>
                            <td class="px-3 py-2">${cellText(r['status'], msg)}</td>
                          </tr>
                        `;
                      })}
                    </tbody>
                  </table>
                </div>
                <div class="flex flex-wrap items-center justify-between gap-3">
                  <span class="text-sm text-[var(--text-muted,#64748b)]">
                    ${msg['materials.pager.summary']} ${materialsPage} / ${materialsPageCount}
                  </span>
                  <div class="flex items-center gap-2">
                    <button
                      type="button"
                      class="inline-flex items-center rounded-md px-3 py-1.5 text-sm bg-[var(--button-secondary-bg,#e2e8f0)] text-[var(--button-secondary-text,#0f172a)] border border-[var(--button-secondary-border,#cbd5e1)] disabled:opacity-60"
                      ?disabled=${materialsLoading || materialsPage <= 1}
                      @click=${() => goMaterialsPage(materialsPage - 1)}
                    >
                      ${msg['materials.pager.prev']}
                    </button>
                    <button
                      type="button"
                      class="inline-flex items-center rounded-md px-3 py-1.5 text-sm bg-[var(--button-secondary-bg,#e2e8f0)] text-[var(--button-secondary-text,#0f172a)] border border-[var(--button-secondary-border,#cbd5e1)] disabled:opacity-60"
                      ?disabled=${materialsLoading || materialsPage >= materialsPageCount}
                      @click=${() => goMaterialsPage(materialsPage + 1)}
                    >
                      ${msg['materials.pager.next']}
                    </button>
                  </div>
                </div>
              `}
      </div>
    </section>
  `;
}

/* Helpers stay INSIDE this file and are NOT exported: exactly one render function leaves it. */
