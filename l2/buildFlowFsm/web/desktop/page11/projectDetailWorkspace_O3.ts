/// <mls fileReference="_102045_/l2/buildFlowFsm/web/desktop/page11/projectDetailWorkspace_O3.ts" enhancement="_102020_/l2/enhancementAura"/>

import { html, nothing } from 'lit';
import { type BuildFlowFsmProjectDetailWorkspaceBase as Host, messages as sharedMessages, type MessageType } from '/_102045_/l2/buildFlowFsm/web/shared/projectDetailWorkspace.js';
import type {
  GetChangeOrderDetailOutput,
  ListChangeOrdersOutput,
} from '/_102045_/l2/buildFlowFsm/web/shared/projectDetailWorkspace.js';

const sharedFallback = sharedMessages[Object.keys(sharedMessages)[0]];

/// **collab_i18n_start**
// Text from the shared catalog, mapped ONCE — the locale is the parameter. Reference it, never
// inline the string: the reference is what keeps this file translated. Use SHORT keys:
//   'orders.empty': m['intent.<page>.<bff>.list.empty'],
const fromShared = (m: MessageType) => ({
  'sec.title': m['section.projectDetailWorkspace.sec-changeOrders.title'],
  'list.title': m['intent.projectDetailWorkspace.listChangeOrders.list.title'],
  'list.empty': m['intent.projectDetailWorkspace.listChangeOrders.list.empty'],
  'filter.status': m['intent.projectDetailWorkspace.listChangeOrders.list.filter.status.label'],
  'filter.impactType': m['intent.projectDetailWorkspace.listChangeOrders.list.filter.impactType.label'],
  'col.total': m['intent.projectDetailWorkspace.listChangeOrders.list.column.total.label'],
  'detail.title': m['intent.projectDetailWorkspace.getChangeOrderDetail.list.title'],
  'detail.empty': m['intent.projectDetailWorkspace.getChangeOrderDetail.list.empty'],
  'col.changeOrderId': m['intent.projectDetailWorkspace.getChangeOrderDetail.list.column.changeOrderId.label'],
  'col.projectId': m['intent.projectDetailWorkspace.getChangeOrderDetail.list.column.projectId.label'],
  'col.title': m['intent.projectDetailWorkspace.getChangeOrderDetail.list.column.title.label'],
  'col.description': m['intent.projectDetailWorkspace.getChangeOrderDetail.list.column.description.label'],
  'col.impactType': m['intent.projectDetailWorkspace.getChangeOrderDetail.list.column.impactType.label'],
  'col.costAdjustment': m['intent.projectDetailWorkspace.getChangeOrderDetail.list.column.costAdjustment.label'],
  'col.scheduleAdjustmentDays': m['intent.projectDetailWorkspace.getChangeOrderDetail.list.column.scheduleAdjustmentDays.label'],
  'col.status': m['intent.projectDetailWorkspace.getChangeOrderDetail.list.column.status.label'],
  'col.rejectionReason': m['intent.projectDetailWorkspace.getChangeOrderDetail.list.column.rejectionReason.label'],
  'col.approvedAt': m['intent.projectDetailWorkspace.getChangeOrderDetail.list.column.approvedAt.label'],
  'col.rejectedAt': m['intent.projectDetailWorkspace.getChangeOrderDetail.list.column.rejectedAt.label'],
  'col.projectName': m['intent.projectDetailWorkspace.getChangeOrderDetail.list.column.projectName.label'],
  'col.projectBudget': m['intent.projectDetailWorkspace.getChangeOrderDetail.list.column.projectBudget.label'],
  'col.affectsJobCosting': m['intent.projectDetailWorkspace.getChangeOrderDetail.list.column.affectsJobCosting.label'],
});
const o3Message_en = {
  ...fromShared(sharedMessages['en'] ?? sharedFallback),
  // The copy you invent, with short keys. Only this part repeats per language.
  'refresh': 'Refresh',
  'applyFilters': 'Apply filters',
  'loading': 'Loading…',
  'prev': 'Previous',
  'next': 'Next',
  'pageLabel': 'Page',
  'viewDetail': 'View detail',
  'detail.heading': 'Cost impact detail',
  'detail.none': 'Select a change order to review its cost and schedule impact.',
  'yes': 'Yes',
  'no': 'No',
  'selected': 'Selected',
};
type O3Msg = typeof o3Message_en;
const o3Message_pt_br: O3Msg = {
  ...fromShared(sharedMessages['pt-br'] ?? sharedFallback),
  // The SAME invented keys as o3Message_en, translated to pt-br.
  'refresh': 'Atualizar',
  'applyFilters': 'Aplicar filtros',
  'loading': 'Carregando…',
  'prev': 'Anterior',
  'next': 'Próxima',
  'pageLabel': 'Página',
  'viewDetail': 'Ver detalhe',
  'detail.heading': 'Detalhe de impacto de custo',
  'detail.none': 'Selecione uma ordem de mudança para revisar o impacto de custo e prazo.',
  'yes': 'Sim',
  'no': 'Não',
  'selected': 'Selecionado',
};
const o3Message_es: O3Msg = {
  ...fromShared(sharedMessages['es'] ?? sharedFallback),
  // The SAME invented keys as o3Message_en, translated to es.
  'refresh': 'Actualizar',
  'applyFilters': 'Aplicar filtros',
  'loading': 'Cargando…',
  'prev': 'Anterior',
  'next': 'Siguiente',
  'pageLabel': 'Página',
  'viewDetail': 'Ver detalle',
  'detail.heading': 'Detalle de impacto de costo',
  'detail.none': 'Seleccione una orden de cambio para revisar el impacto de costo y plazo.',
  'yes': 'Sí',
  'no': 'No',
  'selected': 'Seleccionado',
};
const o3Messages: { [key: string]: O3Msg } = { 'en': o3Message_en, 'pt-br': o3Message_pt_br, 'es': o3Message_es };
/// **collab_i18n_end**

const o3Fallback = o3Messages[Object.keys(o3Messages)[0]];

type ChangeOrderRow = ListChangeOrdersOutput['changeOrders'][number];

/** changeOrdersSection — listChangeOrders, getChangeOrderDetail */
export function renderChangeOrdersSection(host: Host) {
  const msg = o3Messages[host.getMessageKey(o3Messages)] || o3Fallback;

  const formatValue = (value: unknown): string => {
    if (value === null || value === undefined || value === '') {
      return '—';
    }
    if (typeof value === 'boolean') {
      return value ? msg['yes'] : msg['no'];
    }
    return String(value);
  };

  const listData: ListChangeOrdersOutput = host.listChangeOrdersData;
  const rows: ChangeOrderRow[] = Array.isArray(listData?.changeOrders) ? listData.changeOrders : [];
  const total: number = typeof listData?.total === 'number' ? listData.total : 0;
  const listLoading: boolean = host.listChangeOrdersState === 'loading';
  const detailLoading: boolean = host.getChangeOrderDetailState === 'loading';
  const detail: GetChangeOrderDetailOutput | null = host.getChangeOrderDetailData;
  const selectedId: string = host.getChangeOrderDetailChangeOrderId || '';

  const pageNum: number = (() => {
    const n = Number(host.listChangeOrdersPage);
    return !Number.isNaN(n) && n > 0 ? n : 1;
  })();
  const pageSizeNum: number = (() => {
    const n = Number(host.listChangeOrdersPageSize);
    return !Number.isNaN(n) && n > 0 ? n : 10;
  })();
  const totalPages: number = Math.max(1, Math.ceil(total / pageSizeNum) || 1);

  const goToPage = (nextPage: number): void => {
    const safe = Math.min(Math.max(1, nextPage), totalPages);
    host.setListChangeOrdersPage(String(safe));
    void host.loadListChangeOrders();
  };

  const selectChangeOrder = (changeOrderId: string): void => {
    host.setGetChangeOrderDetailChangeOrderId(changeOrderId);
    void host.loadGetChangeOrderDetail();
  };

  return html`
    <section class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-4 space-y-4">
      <div class="flex flex-wrap items-center justify-between gap-3">
        <h2 class="text-lg font-semibold text-[var(--text-strong,#0f172a)]">${msg['sec.title']}</h2>
        <button
          type="button"
          class="inline-flex items-center rounded-md px-3 py-1.5 text-sm bg-[var(--button-secondary-bg,#f1f5f9)] text-[var(--button-secondary-text,#0f172a)] border border-[var(--button-secondary-border,#cbd5e1)] disabled:opacity-60"
          ?disabled=${listLoading}
          @click=${(e: Event) => host.handleListChangeOrdersClick(e)}
        >
          ${listLoading ? msg['loading'] : msg['refresh']}
        </button>
      </div>

      <div class="flex flex-wrap items-end gap-3 rounded-md border border-[var(--border-subtle,#e2e8f0)] bg-[var(--surface-alt-bg,#f8fafc)] p-3">
        <label class="flex flex-col gap-1 text-sm text-[var(--text-default,#0f172a)]">
          <span class="text-[var(--text-muted,#64748b)]">${msg['filter.status']}</span>
          <input
            type="text"
            class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-2 py-1.5 text-[var(--text-default,#0f172a)]"
            .value=${host.listChangeOrdersStatus ?? ''}
            @change=${(e: Event) => host.handleListChangeOrdersStatusChange(e)}
          />
        </label>
        <label class="flex flex-col gap-1 text-sm text-[var(--text-default,#0f172a)]">
          <span class="text-[var(--text-muted,#64748b)]">${msg['filter.impactType']}</span>
          <input
            type="text"
            class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-2 py-1.5 text-[var(--text-default,#0f172a)]"
            .value=${host.listChangeOrdersImpactType ?? ''}
            @change=${(e: Event) => host.handleListChangeOrdersImpactTypeChange(e)}
          />
        </label>
        <button
          type="button"
          class="inline-flex items-center rounded-md px-3 py-1.5 text-sm bg-[var(--button-primary-bg,#2563eb)] text-[var(--button-primary-text,#ffffff)] disabled:opacity-60"
          ?disabled=${listLoading || !host.listChangeOrdersProjectId}
          @click=${(e: Event) => host.handleListChangeOrdersClick(e)}
        >
          ${listLoading ? msg['loading'] : msg['applyFilters']}
        </button>
      </div>

      ${listLoading
        ? html`<div class="py-8 text-center text-sm text-[var(--text-muted,#64748b)]">${msg['loading']}</div>`
        : rows.length === 0
          ? html`<div class="py-6 text-center text-sm text-[var(--text-muted,#64748b)]">${msg['list.empty']}</div>`
          : html`
            <div class="overflow-x-auto rounded-md border border-[var(--border-default,#e2e8f0)]">
              <table class="min-w-full text-left text-sm">
                <thead class="bg-[var(--surface-alt-bg,#f8fafc)] text-[var(--text-muted,#64748b)]">
                  <tr>
                    <th class="px-3 py-2 font-medium">${msg['col.title']}</th>
                    <th class="px-3 py-2 font-medium">${msg['col.status']}</th>
                    <th class="px-3 py-2 font-medium">${msg['col.impactType']}</th>
                    <th class="px-3 py-2 font-medium">${msg['col.costAdjustment']}</th>
                    <th class="px-3 py-2 font-medium">${msg['col.scheduleAdjustmentDays']}</th>
                    <th class="px-3 py-2 font-medium"></th>
                  </tr>
                </thead>
                <tbody>
                  ${rows.map((row: ChangeOrderRow) => {
                    const rowId: string = row && typeof row === 'object' && 'changeOrderId' in row
                      ? String((row as { changeOrderId?: unknown }).changeOrderId ?? '')
                      : '';
                    const isSelected: boolean = !!rowId && rowId === selectedId;
                    const r = row as {
                      title?: unknown;
                      status?: unknown;
                      impactType?: unknown;
                      costAdjustment?: unknown;
                      scheduleAdjustmentDays?: unknown;
                    };
                    return html`
                      <tr
                        class="border-t border-[var(--border-subtle,#e2e8f0)] ${isSelected
                          ? 'bg-[var(--selected-bg,#dbeafe)] text-[var(--selected-text,#0f172a)]'
                          : 'text-[var(--text-default,#0f172a)]'}"
                      >
                        <td class="px-3 py-2">${formatValue(r.title)}</td>
                        <td class="px-3 py-2">${formatValue(r.status)}</td>
                        <td class="px-3 py-2">${formatValue(r.impactType)}</td>
                        <td class="px-3 py-2">${formatValue(r.costAdjustment)}</td>
                        <td class="px-3 py-2">${formatValue(r.scheduleAdjustmentDays)}</td>
                        <td class="px-3 py-2 text-right">
                          <button
                            type="button"
                            class="inline-flex items-center rounded-md px-2 py-1 text-xs bg-[var(--button-secondary-bg,#f1f5f9)] text-[var(--button-secondary-text,#0f172a)] border border-[var(--button-secondary-border,#cbd5e1)]"
                            ?disabled=${!rowId || detailLoading}
                            @click=${() => {
                              if (rowId) {
                                selectChangeOrder(rowId);
                              }
                            }}
                          >
                            ${isSelected ? msg['selected'] : msg['viewDetail']}
                          </button>
                        </td>
                      </tr>
                    `;
                  })}
                </tbody>
              </table>
            </div>
            <div class="flex flex-wrap items-center justify-between gap-2 text-sm text-[var(--text-muted,#64748b)]">
              <span>${msg['col.total']}: ${total}</span>
              <div class="flex items-center gap-2">
                <button
                  type="button"
                  class="rounded-md px-2 py-1 border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] text-[var(--text-default,#0f172a)] disabled:opacity-50"
                  ?disabled=${listLoading || pageNum <= 1}
                  @click=${() => goToPage(pageNum - 1)}
                >
                  ${msg['prev']}
                </button>
                <span>${msg['pageLabel']} ${pageNum} / ${totalPages}</span>
                <button
                  type="button"
                  class="rounded-md px-2 py-1 border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] text-[var(--text-default,#0f172a)] disabled:opacity-50"
                  ?disabled=${listLoading || pageNum >= totalPages}
                  @click=${() => goToPage(pageNum + 1)}
                >
                  ${msg['next']}
                </button>
              </div>
            </div>
          `}

      <div class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-alt-bg,#f8fafc)] p-4 space-y-3">
        <h3 class="text-base font-medium text-[var(--text-strong,#0f172a)]">${msg['detail.heading']}</h3>
        ${detailLoading
          ? html`<div class="py-4 text-sm text-[var(--text-muted,#64748b)]">${msg['loading']}</div>`
          : !detail
            ? html`<div class="py-4 text-sm text-[var(--text-muted,#64748b)]">${selectedId ? msg['detail.empty'] : msg['detail.none']}</div>`
            : html`
              <dl class="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 text-sm">
                <div>
                  <dt class="text-[var(--text-muted,#64748b)]">${msg['col.title']}</dt>
                  <dd class="text-[var(--text-default,#0f172a)] font-medium">${formatValue(detail.title)}</dd>
                </div>
                <div>
                  <dt class="text-[var(--text-muted,#64748b)]">${msg['col.status']}</dt>
                  <dd class="text-[var(--text-default,#0f172a)]">${formatValue(detail.status)}</dd>
                </div>
                <div>
                  <dt class="text-[var(--text-muted,#64748b)]">${msg['col.impactType']}</dt>
                  <dd class="text-[var(--text-default,#0f172a)]">${formatValue(detail.impactType)}</dd>
                </div>
                <div>
                  <dt class="text-[var(--text-muted,#64748b)]">${msg['col.costAdjustment']}</dt>
                  <dd class="text-[var(--text-default,#0f172a)]">${formatValue(detail.costAdjustment)}</dd>
                </div>
                <div>
                  <dt class="text-[var(--text-muted,#64748b)]">${msg['col.scheduleAdjustmentDays']}</dt>
                  <dd class="text-[var(--text-default,#0f172a)]">${formatValue(detail.scheduleAdjustmentDays)}</dd>
                </div>
                <div>
                  <dt class="text-[var(--text-muted,#64748b)]">${msg['col.affectsJobCosting']}</dt>
                  <dd class="text-[var(--text-default,#0f172a)]">${formatValue(detail.affectsJobCosting)}</dd>
                </div>
                <div class="sm:col-span-2">
                  <dt class="text-[var(--text-muted,#64748b)]">${msg['col.description']}</dt>
                  <dd class="text-[var(--text-default,#0f172a)]">${formatValue(detail.description)}</dd>
                </div>
                <div>
                  <dt class="text-[var(--text-muted,#64748b)]">${msg['col.projectName']}</dt>
                  <dd class="text-[var(--text-default,#0f172a)]">${formatValue(detail.projectName)}</dd>
                </div>
                <div>
                  <dt class="text-[var(--text-muted,#64748b)]">${msg['col.projectBudget']}</dt>
                  <dd class="text-[var(--text-default,#0f172a)]">${formatValue(detail.projectBudget)}</dd>
                </div>
                <div>
                  <dt class="text-[var(--text-muted,#64748b)]">${msg['col.approvedAt']}</dt>
                  <dd class="text-[var(--text-default,#0f172a)]">${formatValue(detail.approvedAt)}</dd>
                </div>
                <div>
                  <dt class="text-[var(--text-muted,#64748b)]">${msg['col.rejectedAt']}</dt>
                  <dd class="text-[var(--text-default,#0f172a)]">${formatValue(detail.rejectedAt)}</dd>
                </div>
                <div class="sm:col-span-2">
                  <dt class="text-[var(--text-muted,#64748b)]">${msg['col.rejectionReason']}</dt>
                  <dd class="text-[var(--text-default,#0f172a)]">${formatValue(detail.rejectionReason)}</dd>
                </div>
              </dl>
            `}
      </div>
    </section>
  `;
}

/* Helpers stay INSIDE this file and are NOT exported: exactly one render function leaves it. */
