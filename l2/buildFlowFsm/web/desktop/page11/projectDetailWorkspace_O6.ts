/// <mls fileReference="_102045_/l2/buildFlowFsm/web/desktop/page11/projectDetailWorkspace_O6.ts" enhancement="_102020_/l2/enhancementAura"/>

import { html, nothing } from 'lit';
import { type BuildFlowFsmProjectDetailWorkspaceBase as Host, messages as sharedMessages, type MessageType } from '/_102045_/l2/buildFlowFsm/web/shared/projectDetailWorkspace.js';
import type { ListDelayRiskSuggestionsOutput } from '/_102045_/l2/buildFlowFsm/web/shared/projectDetailWorkspace.js';

const sharedFallback = sharedMessages[Object.keys(sharedMessages)[0]];

/// **collab_i18n_start**
// Text from the shared catalog, mapped ONCE — the locale is the parameter. Reference it, never
// inline the string: the reference is what keeps this file translated. Use SHORT keys:
//   'orders.empty': m['intent.<page>.<bff>.list.empty'],
const fromShared = (m: MessageType) => ({
  'section.delayRisk': m['section.projectDetailWorkspace.sec-delay-risk-insights.title'],
  'trigger.title': m['organism.projectDetailWorkspace.triggerDelayRiskSuggestions.title'],
  'trigger.action': m['intent.projectDetailWorkspace.triggerDelayRiskSuggestions.form.action.triggerDelayRiskSuggestions'],
  'list.title': m['organism.projectDetailWorkspace.listDelayRiskSuggestions.title'],
  'list.empty': m['intent.projectDetailWorkspace.listDelayRiskSuggestions.list.empty'],
  'col.suggestionId': m['intent.projectDetailWorkspace.listDelayRiskSuggestions.list.column.delayRiskSuggestionId.label'],
  'col.workTaskId': m['intent.projectDetailWorkspace.listDelayRiskSuggestions.list.column.workTaskId.label'],
  'col.workTaskTitle': m['intent.projectDetailWorkspace.listDelayRiskSuggestions.list.column.workTaskTitle.label'],
  'col.riskLevel': m['intent.projectDetailWorkspace.listDelayRiskSuggestions.list.column.riskLevel.label'],
  'col.reason': m['intent.projectDetailWorkspace.listDelayRiskSuggestions.list.column.reason.label'],
  'col.suggestedAction': m['intent.projectDetailWorkspace.listDelayRiskSuggestions.list.column.suggestedAction.label'],
  'col.acknowledged': m['intent.projectDetailWorkspace.listDelayRiskSuggestions.list.column.acknowledged.label'],
  'col.createdAt': m['intent.projectDetailWorkspace.listDelayRiskSuggestions.list.column.createdAt.label'],
  'filter.acknowledged': m['intent.projectDetailWorkspace.listDelayRiskSuggestions.list.filter.acknowledged.label'],
  'feedback.success': m['action.triggerDelayRiskSuggestions.success'],
  'feedback.error': m['action.triggerDelayRiskSuggestions.error'],
});
const o6Message_en = {
  ...fromShared(sharedMessages['en'] ?? sharedFallback),
  // The copy you invent, with short keys. Only this part repeats per language.
  'page.loading': 'Loading…',
  'page.refresh': 'Refresh',
  'trigger.help': 'Select a status report to generate delay-risk suggestions for this project.',
  'trigger.selected': 'Selected status report',
  'trigger.none': 'No status report selected',
  'trigger.running': 'Generating…',
  'trigger.dismiss': 'Dismiss',
  'list.filter.apply': 'Apply filters',
  'list.filter.all': 'All',
  'list.filter.yes': 'Acknowledged',
  'list.filter.no': 'Not acknowledged',
  'list.total': 'Suggestions',
  'bool.yes': 'Yes',
  'bool.no': 'No',
};
type O6Msg = typeof o6Message_en;
const o6Message_pt_br: O6Msg = {
  ...fromShared(sharedMessages['pt-br'] ?? sharedFallback),
  // The SAME invented keys as o6Message_en, translated to pt-br.
  'page.loading': 'Carregando…',
  'page.refresh': 'Atualizar',
  'trigger.help': 'Selecione um relatório de status para gerar sugestões de risco de atraso neste projeto.',
  'trigger.selected': 'Relatório de status selecionado',
  'trigger.none': 'Nenhum relatório de status selecionado',
  'trigger.running': 'Gerando…',
  'trigger.dismiss': 'Dispensar',
  'list.filter.apply': 'Aplicar filtros',
  'list.filter.all': 'Todos',
  'list.filter.yes': 'Reconhecidos',
  'list.filter.no': 'Não reconhecidos',
  'list.total': 'Sugestões',
  'bool.yes': 'Sim',
  'bool.no': 'Não',
};
const o6Message_es: O6Msg = {
  ...fromShared(sharedMessages['es'] ?? sharedFallback),
  // The SAME invented keys as o6Message_en, translated to es.
  'page.loading': 'Cargando…',
  'page.refresh': 'Actualizar',
  'trigger.help': 'Seleccione un informe de estado para generar sugerencias de riesgo de retraso en este proyecto.',
  'trigger.selected': 'Informe de estado seleccionado',
  'trigger.none': 'Ningún informe de estado seleccionado',
  'trigger.running': 'Generando…',
  'trigger.dismiss': 'Descartar',
  'list.filter.apply': 'Aplicar filtros',
  'list.filter.all': 'Todos',
  'list.filter.yes': 'Reconocidos',
  'list.filter.no': 'No reconocidos',
  'list.total': 'Sugerencias',
  'bool.yes': 'Sí',
  'bool.no': 'No',
};
const o6Messages: { [key: string]: O6Msg } = { 'en': o6Message_en, 'pt-br': o6Message_pt_br, 'es': o6Message_es };
/// **collab_i18n_end**

const o6Fallback = o6Messages[Object.keys(o6Messages)[0]];

/** delayRiskInsights — listDelayRiskSuggestions, triggerDelayRiskSuggestions */
export function renderDelayRiskInsights(host: Host) {
  const msg = o6Messages[host.getMessageKey(o6Messages)] || o6Fallback;

  const triggerLoading = host.triggerDelayRiskSuggestionsState === 'loading';
  const triggerSuccess = host.triggerDelayRiskSuggestionsState === 'success';
  const triggerError = host.triggerDelayRiskSuggestionsState === 'error';
  const listLoading = host.listDelayRiskSuggestionsState === 'loading';
  const statusReportId =
    host.listDelayRiskSuggestionsStatusReportId ||
    host.triggerDelayRiskSuggestionsStatusReportId ||
    '';
  const hasStatusReport = Boolean(statusReportId);
  const rows: ListDelayRiskSuggestionsOutput[] = Array.isArray(host.listDelayRiskSuggestionsData)
    ? host.listDelayRiskSuggestionsData
    : [];
  const formatBool = (value: unknown): string => {
    if (value === true || value === 'true') {
      return msg['bool.yes'];
    }
    if (value === false || value === 'false') {
      return msg['bool.no'];
    }
    return value == null || value === '' ? '—' : String(value);
  };
  const formatCell = (value: unknown): string => {
    if (value == null || value === '') {
      return '—';
    }
    if (typeof value === 'boolean') {
      return formatBool(value);
    }
    return String(value);
  };

  return html`
    <section class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-4 space-y-4">
      <div class="flex flex-wrap items-start justify-between gap-3">
        <div class="space-y-1">
          <h2 class="text-lg font-semibold text-[var(--text-strong,#0f172a)]">${msg['section.delayRisk']}</h2>
          <p class="text-sm text-[var(--text-muted,#64748b)]">${msg['trigger.help']}</p>
        </div>
        <button
          type="button"
          class="inline-flex items-center rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--button-secondary-bg,#f8fafc)] px-3 py-1.5 text-sm font-medium text-[var(--button-secondary-text,#0f172a)] disabled:opacity-60"
          ?disabled=${listLoading || !hasStatusReport}
          @click=${(event: Event) => host.handleListDelayRiskSuggestionsClick(event)}
        >
          ${listLoading ? msg['page.loading'] : msg['page.refresh']}
        </button>
      </div>

      <div class="rounded-md border border-[var(--border-subtle,#e2e8f0)] bg-[var(--surface-alt-bg,#f8fafc)] p-3 space-y-3">
        <div class="flex flex-wrap items-center justify-between gap-3">
          <div class="space-y-1 min-w-0">
            <p class="text-sm font-medium text-[var(--text-default,#0f172a)]">${msg['trigger.title']}</p>
            <p class="text-sm text-[var(--text-muted,#64748b)]">
              ${hasStatusReport
                ? html`${msg['trigger.selected']}: <span class="font-medium text-[var(--text-default,#0f172a)]">${statusReportId}</span>`
                : msg['trigger.none']}
            </p>
          </div>
          <button
            type="button"
            class="inline-flex items-center rounded-md bg-[var(--button-primary-bg,#2563eb)] px-3 py-1.5 text-sm font-medium text-[var(--button-primary-text,#ffffff)] disabled:opacity-60"
            ?disabled=${triggerLoading || !host.triggerDelayRiskSuggestionsStatusReportId}
            @click=${(event: Event) => host.handleTriggerDelayRiskSuggestionsClick(event)}
          >
            ${triggerLoading ? msg['trigger.running'] : msg['trigger.action']}
          </button>
        </div>

        ${triggerSuccess
          ? html`
              <div
                class="flex flex-wrap items-start justify-between gap-2 rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--status-success-bg,#dcfce7)] px-3 py-2 text-sm text-[var(--status-success-text,#166534)]"
                role="status"
              >
                <span>${msg['feedback.success']}</span>
                <button
                  type="button"
                  class="underline"
                  @click=${() => {
                    host.triggerDelayRiskSuggestionsState = 'idle';
                  }}
                >
                  ${msg['trigger.dismiss']}
                </button>
              </div>
            `
          : nothing}

        ${triggerError
          ? html`
              <div
                class="flex flex-wrap items-start justify-between gap-2 rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--status-error-bg,#fee2e2)] px-3 py-2 text-sm text-[var(--status-error-text,#991b1b)]"
                role="alert"
              >
                <span>${host.triggerDelayRiskSuggestionsError || msg['feedback.error']}</span>
                <button
                  type="button"
                  class="underline"
                  @click=${() => {
                    host.triggerDelayRiskSuggestionsState = 'idle';
                    host.triggerDelayRiskSuggestionsError = '';
                  }}
                >
                  ${msg['trigger.dismiss']}
                </button>
              </div>
            `
          : nothing}
      </div>

      <div class="space-y-3">
        <div class="flex flex-wrap items-end gap-3">
          <label class="flex min-w-[12rem] flex-col gap-1 text-sm text-[var(--text-default,#0f172a)]">
            <span>${msg['filter.acknowledged']}</span>
            <select
              class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-sm text-[var(--text-default,#0f172a)]"
              .value=${host.listDelayRiskSuggestionsAcknowledged ?? ''}
              @change=${(event: Event) => host.handleListDelayRiskSuggestionsAcknowledgedChange(event)}
            >
              <option value="">${msg['list.filter.all']}</option>
              <option value="true">${msg['list.filter.yes']}</option>
              <option value="false">${msg['list.filter.no']}</option>
            </select>
          </label>
          <button
            type="button"
            class="inline-flex items-center rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--button-secondary-bg,#f8fafc)] px-3 py-2 text-sm font-medium text-[var(--button-secondary-text,#0f172a)] disabled:opacity-60"
            ?disabled=${listLoading || !hasStatusReport}
            @click=${(event: Event) => host.handleListDelayRiskSuggestionsClick(event)}
          >
            ${msg['list.filter.apply']}
          </button>
        </div>

        <div class="flex items-center justify-between gap-2">
          <h3 class="text-base font-medium text-[var(--text-default,#0f172a)]">${msg['list.title']}</h3>
          <span class="text-sm text-[var(--text-muted,#64748b)]">${msg['list.total']}: ${rows.length}</span>
        </div>

        ${listLoading
          ? html`
              <div class="space-y-2" aria-busy="true">
                <div class="h-10 animate-pulse rounded-md bg-[var(--surface-alt-bg,#f1f5f9)]"></div>
                <div class="h-10 animate-pulse rounded-md bg-[var(--surface-alt-bg,#f1f5f9)]"></div>
                <div class="h-10 animate-pulse rounded-md bg-[var(--surface-alt-bg,#f1f5f9)]"></div>
              </div>
            `
          : rows.length === 0
            ? html`<p class="text-sm text-[var(--text-muted,#64748b)]">${msg['list.empty']}</p>`
            : html`
                <div class="overflow-x-auto rounded-md border border-[var(--border-default,#e2e8f0)]">
                  <table class="min-w-full divide-y divide-[var(--border-subtle,#e2e8f0)] text-left text-sm">
                    <thead class="bg-[var(--surface-alt-bg,#f8fafc)] text-[var(--text-muted,#64748b)]">
                      <tr>
                        <th class="px-3 py-2 font-medium">${msg['col.workTaskTitle']}</th>
                        <th class="px-3 py-2 font-medium">${msg['col.riskLevel']}</th>
                        <th class="px-3 py-2 font-medium">${msg['col.reason']}</th>
                        <th class="px-3 py-2 font-medium">${msg['col.suggestedAction']}</th>
                        <th class="px-3 py-2 font-medium">${msg['col.acknowledged']}</th>
                        <th class="px-3 py-2 font-medium">${msg['col.createdAt']}</th>
                      </tr>
                    </thead>
                    <tbody class="divide-y divide-[var(--border-subtle,#e2e8f0)] text-[var(--text-default,#0f172a)]">
                      ${rows.map((row: ListDelayRiskSuggestionsOutput) => {
                        const item = row as ListDelayRiskSuggestionsOutput & Record<string, unknown>;
                        return html`
                          <tr class="bg-[var(--surface-bg,#ffffff)]">
                            <td class="px-3 py-2">
                              <div class="font-medium">${formatCell(item['workTaskTitle'])}</div>
                              <div class="text-xs text-[var(--text-muted,#64748b)]">
                                ${formatCell(item['workTaskId'] ?? item['delayRiskSuggestionId'])}
                              </div>
                            </td>
                            <td class="px-3 py-2">${formatCell(item['riskLevel'])}</td>
                            <td class="px-3 py-2 max-w-xs">${formatCell(item['reason'])}</td>
                            <td class="px-3 py-2 max-w-xs">${formatCell(item['suggestedAction'])}</td>
                            <td class="px-3 py-2">${formatBool(item['acknowledged'])}</td>
                            <td class="px-3 py-2 whitespace-nowrap">${formatCell(item['createdAt'])}</td>
                          </tr>
                        `;
                      })}
                    </tbody>
                  </table>
                </div>
              `}
      </div>
    </section>
  `;
}

/* Helpers stay INSIDE this file and are NOT exported: exactly one render function leaves it. */
