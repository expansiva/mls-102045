/// <mls fileReference="_102045_/l2/buildFlowFsm/web/desktop/page11/projectDetailWorkspace_O1.ts" enhancement="_102020_/l2/enhancementAura"/>

import { html, nothing } from 'lit';
import { type BuildFlowFsmProjectDetailWorkspaceBase as Host, messages as sharedMessages, type MessageType } from '/_102045_/l2/buildFlowFsm/web/shared/projectDetailWorkspace.js';
import type { GetProjectDetailOutput } from '/_102045_/l2/buildFlowFsm/web/shared/projectDetailWorkspace.js';

const sharedFallback = sharedMessages[Object.keys(sharedMessages)[0]];

/// **collab_i18n_start**
// Text from the shared catalog, mapped ONCE — the locale is the parameter. Reference it, never
// inline the string: the reference is what keeps this file translated. Use SHORT keys:
//   'orders.empty': m['intent.<page>.<bff>.list.empty'],
const fromShared = (m: MessageType) => ({
  'section.title': m['section.projectDetailWorkspace.sec-project-header.title'],
  'detail.empty': m['intent.projectDetailWorkspace.getProjectDetail.list.empty'],
  'col.projectId': m['intent.projectDetailWorkspace.getProjectDetail.list.column.projectId.label'],
  'col.name': m['intent.projectDetailWorkspace.getProjectDetail.list.column.name.label'],
  'col.clientId': m['intent.projectDetailWorkspace.getProjectDetail.list.column.clientId.label'],
  'col.clientName': m['intent.projectDetailWorkspace.getProjectDetail.list.column.clientName.label'],
  'col.clientCompany': m['intent.projectDetailWorkspace.getProjectDetail.list.column.clientCompany.label'],
  'col.siteAddress': m['intent.projectDetailWorkspace.getProjectDetail.list.column.siteAddress.label'],
  'col.budget': m['intent.projectDetailWorkspace.getProjectDetail.list.column.budget.label'],
  'col.startDate': m['intent.projectDetailWorkspace.getProjectDetail.list.column.startDate.label'],
  'col.endDate': m['intent.projectDetailWorkspace.getProjectDetail.list.column.endDate.label'],
  'col.status': m['intent.projectDetailWorkspace.getProjectDetail.list.column.status.label'],
  'col.holdReason': m['intent.projectDetailWorkspace.getProjectDetail.list.column.holdReason.label'],
  'col.closedAt': m['intent.projectDetailWorkspace.getProjectDetail.list.column.closedAt.label'],
  'col.cancelledAt': m['intent.projectDetailWorkspace.getProjectDetail.list.column.cancelledAt.label'],
  'col.cancellationReason': m['intent.projectDetailWorkspace.getProjectDetail.list.column.cancellationReason.label'],
  'col.createdAt': m['intent.projectDetailWorkspace.getProjectDetail.list.column.createdAt.label'],
  'col.updatedAt': m['intent.projectDetailWorkspace.getProjectDetail.list.column.updatedAt.label'],
});
const o1Message_en = {
  ...fromShared(sharedMessages['en'] ?? sharedFallback),
  // The copy you invent, with short keys. Only this part repeats per language.
  'refresh': 'Refresh project',
  'loading': 'Loading project details…',
  'dash': '—',
};
type O1Msg = typeof o1Message_en;
const o1Message_pt_br: O1Msg = {
  ...fromShared(sharedMessages['pt-br'] ?? sharedFallback),
  // The SAME invented keys as o1Message_en, translated to pt-br.
  'refresh': 'Atualizar projeto',
  'loading': 'Carregando detalhes do projeto…',
  'dash': '—',
};
const o1Message_es: O1Msg = {
  ...fromShared(sharedMessages['es'] ?? sharedFallback),
  // The SAME invented keys as o1Message_en, translated to es.
  'refresh': 'Actualizar proyecto',
  'loading': 'Cargando detalles del proyecto…',
  'dash': '—',
};
const o1Messages: { [key: string]: O1Msg } = { 'en': o1Message_en, 'pt-br': o1Message_pt_br, 'es': o1Message_es };
/// **collab_i18n_end**

const o1Fallback = o1Messages[Object.keys(o1Messages)[0]];

/** projectHeader — getProjectDetail */
export function renderProjectHeader(host: Host) {
  const msg = o1Messages[host.getMessageKey(o1Messages)] || o1Fallback;
  // State and handlers come from `host` (host.<state>, host.handle<X>) — the shared owns them.
  const isLoading = host.getProjectDetailState === 'loading';
  const detail: GetProjectDetailOutput | null = host.getProjectDetailData;
  const fmt = (value: unknown): string => {
    if (value === null || value === undefined || value === '') {
      return msg['dash'];
    }
    if (typeof value === 'boolean') {
      return value ? 'true' : 'false';
    }
    return String(value);
  };

  return html`
    <section class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-4 space-y-4">
      <div class="flex flex-wrap items-center justify-between gap-3">
        <h2 class="text-lg font-semibold text-[var(--text-strong,#0f172a)]">${msg['section.title']}</h2>
        <button
          type="button"
          class="inline-flex items-center rounded-md px-3 py-1.5 text-sm bg-[var(--button-secondary-bg,#f1f5f9)] text-[var(--button-secondary-text,#0f172a)] border border-[var(--button-secondary-border,#e2e8f0)] disabled:opacity-60"
          ?disabled=${isLoading}
          @click=${(e: Event) => host.handleGetProjectDetailClick(e)}
        >
          ${isLoading ? msg['loading'] : msg['refresh']}
        </button>
      </div>

      ${isLoading && !detail
        ? html`<p class="text-sm text-[var(--text-muted,#64748b)]">${msg['loading']}</p>`
        : !detail
          ? html`<p class="text-sm text-[var(--text-muted,#64748b)]">${msg['detail.empty']}</p>`
          : html`
              <dl class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-3 text-sm">
                <div>
                  <dt class="text-[var(--text-muted,#64748b)]">${msg['col.name']}</dt>
                  <dd class="font-medium text-[var(--text-default,#0f172a)]">${fmt(detail.name)}</dd>
                </div>
                <div>
                  <dt class="text-[var(--text-muted,#64748b)]">${msg['col.status']}</dt>
                  <dd class="font-medium text-[var(--text-default,#0f172a)]">
                    <span class="inline-flex rounded-md px-2 py-0.5 bg-[var(--status-neutral-bg,#f1f5f9)] text-[var(--status-neutral-text,#334155)]">${fmt(detail.status)}</span>
                  </dd>
                </div>
                <div>
                  <dt class="text-[var(--text-muted,#64748b)]">${msg['col.budget']}</dt>
                  <dd class="font-medium text-[var(--text-default,#0f172a)]">${fmt(detail.budget)}</dd>
                </div>
                <div>
                  <dt class="text-[var(--text-muted,#64748b)]">${msg['col.clientName']}</dt>
                  <dd class="font-medium text-[var(--text-default,#0f172a)]">${fmt(detail.clientName)}</dd>
                </div>
                <div>
                  <dt class="text-[var(--text-muted,#64748b)]">${msg['col.clientCompany']}</dt>
                  <dd class="font-medium text-[var(--text-default,#0f172a)]">${fmt(detail.clientCompany)}</dd>
                </div>
                <div>
                  <dt class="text-[var(--text-muted,#64748b)]">${msg['col.clientId']}</dt>
                  <dd class="font-medium text-[var(--text-default,#0f172a)]">${fmt(detail.clientId)}</dd>
                </div>
                <div class="sm:col-span-2">
                  <dt class="text-[var(--text-muted,#64748b)]">${msg['col.siteAddress']}</dt>
                  <dd class="font-medium text-[var(--text-default,#0f172a)]">${fmt(detail.siteAddress)}</dd>
                </div>
                <div>
                  <dt class="text-[var(--text-muted,#64748b)]">${msg['col.projectId']}</dt>
                  <dd class="font-medium text-[var(--text-default,#0f172a)]">${fmt(detail.projectId)}</dd>
                </div>
                <div>
                  <dt class="text-[var(--text-muted,#64748b)]">${msg['col.startDate']}</dt>
                  <dd class="font-medium text-[var(--text-default,#0f172a)]">${fmt(detail.startDate)}</dd>
                </div>
                <div>
                  <dt class="text-[var(--text-muted,#64748b)]">${msg['col.endDate']}</dt>
                  <dd class="font-medium text-[var(--text-default,#0f172a)]">${fmt(detail.endDate)}</dd>
                </div>
                <div>
                  <dt class="text-[var(--text-muted,#64748b)]">${msg['col.holdReason']}</dt>
                  <dd class="font-medium text-[var(--text-default,#0f172a)]">${fmt(detail.holdReason)}</dd>
                </div>
                <div>
                  <dt class="text-[var(--text-muted,#64748b)]">${msg['col.closedAt']}</dt>
                  <dd class="font-medium text-[var(--text-default,#0f172a)]">${fmt(detail.closedAt)}</dd>
                </div>
                <div>
                  <dt class="text-[var(--text-muted,#64748b)]">${msg['col.cancelledAt']}</dt>
                  <dd class="font-medium text-[var(--text-default,#0f172a)]">${fmt(detail.cancelledAt)}</dd>
                </div>
                <div class="sm:col-span-2">
                  <dt class="text-[var(--text-muted,#64748b)]">${msg['col.cancellationReason']}</dt>
                  <dd class="font-medium text-[var(--text-default,#0f172a)]">${fmt(detail.cancellationReason)}</dd>
                </div>
                <div>
                  <dt class="text-[var(--text-muted,#64748b)]">${msg['col.createdAt']}</dt>
                  <dd class="font-medium text-[var(--text-default,#0f172a)]">${fmt(detail.createdAt)}</dd>
                </div>
                <div>
                  <dt class="text-[var(--text-muted,#64748b)]">${msg['col.updatedAt']}</dt>
                  <dd class="font-medium text-[var(--text-default,#0f172a)]">${fmt(detail.updatedAt)}</dd>
                </div>
              </dl>
            `}
    </section>
  `;
}

/* Helpers stay INSIDE this file and are NOT exported: exactly one render function leaves it. */
