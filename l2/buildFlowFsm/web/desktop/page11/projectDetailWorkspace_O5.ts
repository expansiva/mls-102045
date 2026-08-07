/// <mls fileReference="_102045_/l2/buildFlowFsm/web/desktop/page11/projectDetailWorkspace_O5.ts" enhancement="_102020_/l2/enhancementAura"/>

import { html, nothing } from 'lit';
import { type BuildFlowFsmProjectDetailWorkspaceBase as Host, messages as sharedMessages, type MessageType } from '/_102045_/l2/buildFlowFsm/web/shared/projectDetailWorkspace.js';
import type { ListMaterialUsagesOutput } from '/_102045_/l2/buildFlowFsm/web/shared/projectDetailWorkspace.js';

const sharedFallback = sharedMessages[Object.keys(sharedMessages)[0]];

/// **collab_i18n_start**
// Text from the shared catalog, mapped ONCE — the locale is the parameter. Reference it, never
// inline the string: the reference is what keeps this file translated. Use SHORT keys:
//   'orders.empty': m['intent.<page>.<bff>.list.empty'],
const fromShared = (m: MessageType) => ({
  'section.title': m['section.projectDetailWorkspace.sec-materialUsage.title'],
  'list.title': m['intent.projectDetailWorkspace.listMaterialUsages.list.title'],
  'list.empty': m['intent.projectDetailWorkspace.listMaterialUsages.list.empty'],
  'filter.status': m['intent.projectDetailWorkspace.listMaterialUsages.list.filter.status.label'],
  'col.total': m['intent.projectDetailWorkspace.listMaterialUsages.list.column.total.label'],
  'col.materialUsages': m['intent.projectDetailWorkspace.listMaterialUsages.list.column.materialUsages.label'],
});
const o5Message_en = {
  ...fromShared(sharedMessages['en'] ?? sharedFallback),
  // The copy you invent, with short keys. Only this part repeats per language.
  'refresh': 'Refresh',
  'loading': 'Loading material usage…',
  'applyFilters': 'Apply filters',
  'prevPage': 'Previous',
  'nextPage': 'Next',
  'pageOf': 'Page',
  'statusAll': 'All statuses',
  'needProject': 'Material usage appears once a project is in context.',
  'col.id': 'Usage ID',
  'col.material': 'Material',
  'col.quantity': 'Quantity',
  'col.unit': 'Unit',
  'col.status': 'Status',
  'col.workTask': 'Work task',
  'col.recordedAt': 'Recorded at',
};
type O5Msg = typeof o5Message_en;
const o5Message_pt_br: O5Msg = {
  ...fromShared(sharedMessages['pt-br'] ?? sharedFallback),
  // The SAME invented keys as o5Message_en, translated to pt-br.
  'refresh': 'Atualizar',
  'loading': 'Carregando uso de materiais…',
  'applyFilters': 'Aplicar filtros',
  'prevPage': 'Anterior',
  'nextPage': 'Próxima',
  'pageOf': 'Página',
  'statusAll': 'Todos os status',
  'needProject': 'O uso de materiais aparece quando um projeto está no contexto.',
  'col.id': 'ID do uso',
  'col.material': 'Material',
  'col.quantity': 'Quantidade',
  'col.unit': 'Unidade',
  'col.status': 'Status',
  'col.workTask': 'Tarefa',
  'col.recordedAt': 'Registrado em',
};
const o5Message_es: O5Msg = {
  ...fromShared(sharedMessages['es'] ?? sharedFallback),
  // The SAME invented keys as o5Message_en, translated to es.
  'refresh': 'Actualizar',
  'loading': 'Cargando uso de materiales…',
  'applyFilters': 'Aplicar filtros',
  'prevPage': 'Anterior',
  'nextPage': 'Siguiente',
  'pageOf': 'Página',
  'statusAll': 'Todos los estados',
  'needProject': 'El uso de materiales aparece cuando hay un proyecto en contexto.',
  'col.id': 'ID de uso',
  'col.material': 'Material',
  'col.quantity': 'Cantidad',
  'col.unit': 'Unidad',
  'col.status': 'Estado',
  'col.workTask': 'Tarea',
  'col.recordedAt': 'Registrado el',
};
const o5Messages: { [key: string]: O5Msg } = { 'en': o5Message_en, 'pt-br': o5Message_pt_br, 'es': o5Message_es };
/// **collab_i18n_end**

const o5Fallback = o5Messages[Object.keys(o5Messages)[0]];

type MaterialUsageRow = ListMaterialUsagesOutput['materialUsages'][number];

/** materialUsageSection — listMaterialUsages */
export function renderMaterialUsageSection(host: Host) {
  const msg = o5Messages[host.getMessageKey(o5Messages)] || o5Fallback;
  // State and handlers come from `host` (host.<state>, host.handle<X>) — the shared owns them.
  const isLoading = host.listMaterialUsagesState === 'loading';
  const hasProject = Boolean(host.listMaterialUsagesProjectId);
  const data: ListMaterialUsagesOutput = host.listMaterialUsagesData;
  const rows: MaterialUsageRow[] = data?.materialUsages ?? [];
  const total = data?.total ?? 0;
  const pageRaw = host.listMaterialUsagesPage !== '' ? Number(host.listMaterialUsagesPage) : 1;
  const page = Number.isFinite(pageRaw) && pageRaw > 0 ? pageRaw : 1;
  const pageSizeRaw = host.listMaterialUsagesPageSize !== '' ? Number(host.listMaterialUsagesPageSize) : 10;
  const pageSize = Number.isFinite(pageSizeRaw) && pageSizeRaw > 0 ? pageSizeRaw : 10;
  const totalPages = Math.max(1, Math.ceil(total / pageSize) || 1);

  const formatCell = (value: unknown): string => {
    if (value === null || value === undefined || value === '') {
      return '—';
    }
    if (typeof value === 'boolean') {
      return value ? 'Yes' : 'No';
    }
    return String(value);
  };

  const readRowField = (row: MaterialUsageRow, key: string): unknown => {
    const record = row as unknown as Record<string, unknown>;
    return record[key];
  };

  const goToPage = (nextPage: number): void => {
    const safe = Math.min(Math.max(1, nextPage), totalPages);
    host.setListMaterialUsagesPage(String(safe));
    host.handleListMaterialUsagesClick();
  };

  return html`
    <section class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-4 space-y-4">
      <div class="flex flex-wrap items-start justify-between gap-3">
        <div class="space-y-1">
          <h2 class="text-lg font-semibold text-[var(--text-strong,#0f172a)]">${msg['section.title']}</h2>
          <p class="text-sm text-[var(--text-muted,#64748b)]">${msg['list.title']}</p>
        </div>
        <button
          type="button"
          class="inline-flex items-center rounded-md px-3 py-2 text-sm font-medium bg-[var(--button-secondary-bg,#f1f5f9)] text-[var(--button-secondary-text,#0f172a)] border border-[var(--button-secondary-border,#e2e8f0)] disabled:opacity-60"
          ?disabled=${isLoading || !hasProject}
          @click=${(event: Event) => host.handleListMaterialUsagesClick(event)}
        >
          ${isLoading ? msg['loading'] : msg['refresh']}
        </button>
      </div>

      ${!hasProject
        ? html`<p class="text-sm text-[var(--text-muted,#64748b)]">${msg['needProject']}</p>`
        : html`
            <div class="flex flex-wrap items-end gap-3">
              <label class="flex flex-col gap-1 text-sm text-[var(--text-default,#0f172a)] min-w-[12rem]">
                <span>${msg['filter.status']}</span>
                <input
                  type="text"
                  class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-[var(--text-default,#0f172a)]"
                  .value=${host.listMaterialUsagesStatus}
                  placeholder=${msg['statusAll']}
                  @change=${(event: Event) => host.handleListMaterialUsagesStatusChange(event)}
                />
              </label>
              <button
                type="button"
                class="inline-flex items-center rounded-md px-3 py-2 text-sm font-medium bg-[var(--button-primary-bg,#2563eb)] text-[var(--button-primary-text,#ffffff)] disabled:opacity-60"
                ?disabled=${isLoading}
                @click=${(event: Event) => host.handleListMaterialUsagesClick(event)}
              >
                ${msg['applyFilters']}
              </button>
            </div>

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
                            <th class="px-3 py-2 font-medium">${msg['col.material']}</th>
                            <th class="px-3 py-2 font-medium">${msg['col.quantity']}</th>
                            <th class="px-3 py-2 font-medium">${msg['col.unit']}</th>
                            <th class="px-3 py-2 font-medium">${msg['col.status']}</th>
                            <th class="px-3 py-2 font-medium">${msg['col.workTask']}</th>
                            <th class="px-3 py-2 font-medium">${msg['col.recordedAt']}</th>
                          </tr>
                        </thead>
                        <tbody class="divide-y divide-[var(--border-subtle,#e2e8f0)] text-[var(--text-default,#0f172a)]">
                          ${rows.map((row: MaterialUsageRow) => {
                            const id =
                              readRowField(row, 'materialUsageId') ??
                              readRowField(row, 'id') ??
                              readRowField(row, 'usageId');
                            const material =
                              readRowField(row, 'materialName') ??
                              readRowField(row, 'materialId') ??
                              readRowField(row, 'name');
                            const quantity = readRowField(row, 'quantity') ?? readRowField(row, 'qty');
                            const unit =
                              readRowField(row, 'unit') ??
                              readRowField(row, 'unitOfMeasure') ??
                              readRowField(row, 'uom');
                            const status = readRowField(row, 'status');
                            const workTask =
                              readRowField(row, 'workTaskTitle') ??
                              readRowField(row, 'workTaskId');
                            const recordedAt =
                              readRowField(row, 'recordedAt') ??
                              readRowField(row, 'usedAt') ??
                              readRowField(row, 'createdAt') ??
                              readRowField(row, 'usageDate');
                            return html`
                              <tr class="hover:bg-[var(--surface-alt-bg,#f8fafc)]">
                                <td class="px-3 py-2 whitespace-nowrap">${formatCell(id)}</td>
                                <td class="px-3 py-2">${formatCell(material)}</td>
                                <td class="px-3 py-2 whitespace-nowrap">${formatCell(quantity)}</td>
                                <td class="px-3 py-2 whitespace-nowrap">${formatCell(unit)}</td>
                                <td class="px-3 py-2 whitespace-nowrap">
                                  <span class="inline-flex rounded-full px-2 py-0.5 text-xs bg-[var(--status-neutral-bg,#f1f5f9)] text-[var(--status-neutral-text,#334155)]">
                                    ${formatCell(status)}
                                  </span>
                                </td>
                                <td class="px-3 py-2">${formatCell(workTask)}</td>
                                <td class="px-3 py-2 whitespace-nowrap">${formatCell(recordedAt)}</td>
                              </tr>
                            `;
                          })}
                        </tbody>
                      </table>
                    </div>
                  `}

            <div class="flex flex-wrap items-center justify-between gap-3 text-sm text-[var(--text-muted,#64748b)]">
              <span>${msg['col.total']}: ${total}</span>
              <div class="flex items-center gap-2">
                <button
                  type="button"
                  class="rounded-md px-2.5 py-1.5 border border-[var(--border-default,#e2e8f0)] bg-[var(--button-secondary-bg,#f1f5f9)] text-[var(--button-secondary-text,#0f172a)] disabled:opacity-50"
                  ?disabled=${isLoading || page <= 1}
                  @click=${(_event: Event) => goToPage(page - 1)}
                >
                  ${msg['prevPage']}
                </button>
                <span>${msg['pageOf']} ${page} / ${totalPages}</span>
                <button
                  type="button"
                  class="rounded-md px-2.5 py-1.5 border border-[var(--border-default,#e2e8f0)] bg-[var(--button-secondary-bg,#f1f5f9)] text-[var(--button-secondary-text,#0f172a)] disabled:opacity-50"
                  ?disabled=${isLoading || page >= totalPages}
                  @click=${(_event: Event) => goToPage(page + 1)}
                >
                  ${msg['nextPage']}
                </button>
              </div>
            </div>
          `}
    </section>
  `;
}

/* Helpers stay INSIDE this file and are NOT exported: exactly one render function leaves it. */
