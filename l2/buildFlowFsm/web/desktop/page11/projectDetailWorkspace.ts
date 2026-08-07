/// <mls fileReference="_102045_/l2/buildFlowFsm/web/desktop/page11/projectDetailWorkspace.ts" enhancement="_102020_/l2/enhancementAura"/>

import { html, nothing } from 'lit';
import { customElement } from 'lit/decorators.js';
import { BuildFlowFsmProjectDetailWorkspaceBase, messages as sharedMessages, type MessageType } from '/_102045_/l2/buildFlowFsm/web/shared/projectDetailWorkspace.js';
import { renderProjectHeader } from '/_102045_/l2/buildFlowFsm/web/desktop/page11/projectDetailWorkspace_O1.js';
import { renderTaskTimeline } from '/_102045_/l2/buildFlowFsm/web/desktop/page11/projectDetailWorkspace_O2.js';
import { renderChangeOrdersSection } from '/_102045_/l2/buildFlowFsm/web/desktop/page11/projectDetailWorkspace_O3.js';
import { renderCostTracking } from '/_102045_/l2/buildFlowFsm/web/desktop/page11/projectDetailWorkspace_O4.js';
import { renderMaterialUsageSection } from '/_102045_/l2/buildFlowFsm/web/desktop/page11/projectDetailWorkspace_O5.js';
import { renderDelayRiskInsights } from '/_102045_/l2/buildFlowFsm/web/desktop/page11/projectDetailWorkspace_O6.js';

const sharedFallback = sharedMessages[Object.keys(sharedMessages)[0]];

/// **collab_i18n_start**
// Text from the shared catalog, mapped ONCE — the locale is the parameter. Reference it, never
// inline the string: the reference is what keeps this file translated. Use SHORT keys:
//   'orders.empty': m['intent.<page>.<bff>.list.empty'],
const fromShared = (m: MessageType) => ({
  'sec.projectHeader': m['section.projectDetailWorkspace.sec-project-header.title'],
  'sec.taskTimeline': m['section.projectDetailWorkspace.sec-task-timeline.title'],
  'sec.changeOrders': m['section.projectDetailWorkspace.sec-change-orders.title'],
  'sec.costTracking': m['section.projectDetailWorkspace.sec-cost-tracking.title'],
  'sec.delayRisk': m['section.projectDetailWorkspace.sec-delay-risk-insights.title'],
  'project.empty': m['intent.projectDetailWorkspace.getProjectDetail.list.empty'],
  'tasks.empty': m['intent.projectDetailWorkspace.listWorkTasks.list.empty'],
  'changeOrders.empty': m['intent.projectDetailWorkspace.listChangeOrders.list.empty'],
  'timeLogs.empty': m['intent.projectDetailWorkspace.listTimeLogs.list.empty'],
  'materials.empty': m['intent.projectDetailWorkspace.listMaterialUsages.list.empty'],
  'delayRisk.empty': m['intent.projectDetailWorkspace.listDelayRiskSuggestions.list.empty'],
  'trigger.action': m['intent.projectDetailWorkspace.triggerDelayRiskSuggestions.form.action.triggerDelayRiskSuggestions'],
  'trigger.success': m['action.triggerDelayRiskSuggestions.success'],
  'trigger.error': m['action.triggerDelayRiskSuggestions.error'],
});
const pageMessage_en = {
  ...fromShared(sharedMessages['en'] ?? sharedFallback),
  // The copy you invent, with short keys. Only this part repeats per language.
  'title': 'Project Detail & Timeline',
  'subtitle': 'Review project detail, tasks, change orders, costs, and delay-risk insights.',
  'loading': 'Loading…',
  'refresh': 'Refresh',
};
type PageMessageType = typeof pageMessage_en;
const pageMessage_pt_br: PageMessageType = {
  ...fromShared(sharedMessages['pt-br'] ?? sharedFallback),
  // The SAME invented keys as pageMessage_en, translated to pt-br.
  'title': 'Detalhe e cronograma do projeto',
  'subtitle': 'Revise o detalhe do projeto, tarefas, ordens de mudança, custos e riscos de atraso.',
  'loading': 'Carregando…',
  'refresh': 'Atualizar',
};
const pageMessage_es: PageMessageType = {
  ...fromShared(sharedMessages['es'] ?? sharedFallback),
  // The SAME invented keys as pageMessage_en, translated to es.
  'title': 'Detalle y cronograma del proyecto',
  'subtitle': 'Revise el detalle del proyecto, tareas, órdenes de cambio, costos e insights de riesgo de retraso.',
  'loading': 'Cargando…',
  'refresh': 'Actualizar',
};
const pageMessages: { [key: string]: PageMessageType } = { 'en': pageMessage_en, 'pt-br': pageMessage_pt_br, 'es': pageMessage_es };
/// **collab_i18n_end**

const pageFallback = pageMessages[Object.keys(pageMessages)[0]];

@customElement('build-flow-fsm--web--desktop--page11--project-detail-workspace-102045')
export class BuildFlowFsmDesktopPage11ProjectDetailWorkspacePage extends BuildFlowFsmProjectDetailWorkspaceBase {
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

  /** Main render. Compose the page from the organisms — never re-implement what they already render. */
  render() {
    const msg = this.msg;
    return html`
      <div class="min-h-full bg-[var(--page-bg,#f8fafc)] text-[var(--text-default,#0f172a)]">
        <div class="max-w-6xl mx-auto px-4 py-6 space-y-6">
          ${this.renderPageHeader()}
          ${renderProjectHeader(this)}
          ${renderTaskTimeline(this)}
          ${renderChangeOrdersSection(this)}
          ${renderCostTracking(this)}
          ${renderMaterialUsageSection(this)}
          ${renderDelayRiskInsights(this)}
        </div>
      </div>
    `;
  }

  renderPageHeader() {
    const msg = this.msg;
    const isLoading =
      this.getProjectDetailState === 'loading' ||
      this.listWorkTasksState === 'loading' ||
      this.listChangeOrdersState === 'loading' ||
      this.listTimeLogsState === 'loading' ||
      this.listMaterialUsagesState === 'loading' ||
      this.listDelayRiskSuggestionsState === 'loading';

    return html`
      <header class="space-y-2">
        <div class="flex flex-wrap items-start justify-between gap-3">
          <div class="space-y-1 min-w-0">
            <h1 class="text-2xl font-semibold text-[var(--text-strong,#0f172a)]">${msg['title']}</h1>
            <p class="text-sm text-[var(--text-muted,#64748b)]">${msg['subtitle']}</p>
          </div>
          <button
            type="button"
            class="inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium bg-[var(--button-secondary-bg,#f1f5f9)] text-[var(--button-secondary-text,#0f172a)] border border-[var(--button-secondary-border,#e2e8f0)]"
            ?disabled=${isLoading}
            @click=${(event: Event) => this.handleGetProjectDetailClick(event)}
          >
            ${isLoading ? msg['loading'] : msg['refresh']}
          </button>
        </div>
        ${isLoading
          ? html`<div class="text-sm text-[var(--text-muted,#64748b)]">${msg['loading']}</div>`
          : nothing}
      </header>
    `;
  }
}
