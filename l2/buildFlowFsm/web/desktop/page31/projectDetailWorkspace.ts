/// <mls fileReference="_102045_/l2/buildFlowFsm/web/desktop/page31/projectDetailWorkspace.ts" enhancement="_102020_/l2/enhancementAura"/>

import { html, nothing } from 'lit';
import { customElement } from 'lit/decorators.js';
import { BuildFlowFsmProjectDetailWorkspaceBase, messages as sharedMessages } from '/_102045_/l2/buildFlowFsm/web/shared/projectDetailWorkspace.js';
import type {
  GetChangeOrderDetailOutput,
  GetProjectDetailOutput,
  ListChangeOrdersOutput,
  ListDelayRiskSuggestionsOutput,
  ListMaterialUsagesOutput,
  ListTimeLogsOutput,
  ListWorkTasksOutput,
} from '/_102045_/l2/buildFlowFsm/web/shared/projectDetailWorkspace.js';

const sharedFallback = sharedMessages[Object.keys(sharedMessages)[0]];

/// **collab_i18n_start**
const s_en = sharedMessages['en'] ?? sharedFallback;
const pageMessage_en = {
  'col.name': s_en['intent.projectDetailWorkspace.getProjectDetail.list.column.name.label'],
  'col.clientName': s_en['intent.projectDetailWorkspace.getProjectDetail.list.column.clientName.label'],
  'col.clientCompany': s_en['intent.projectDetailWorkspace.getProjectDetail.list.column.clientCompany.label'],
  'col.siteAddress': s_en['intent.projectDetailWorkspace.getProjectDetail.list.column.siteAddress.label'],
  'col.budget': s_en['intent.projectDetailWorkspace.getProjectDetail.list.column.budget.label'],
  'col.startDate': s_en['intent.projectDetailWorkspace.getProjectDetail.list.column.startDate.label'],
  'col.endDate': s_en['intent.projectDetailWorkspace.getProjectDetail.list.column.endDate.label'],
  'col.status': s_en['intent.projectDetailWorkspace.getProjectDetail.list.column.status.label'],
  'col.holdReason': s_en['intent.projectDetailWorkspace.getProjectDetail.list.column.holdReason.label'],
  'col.taskTitle': s_en['intent.projectDetailWorkspace.listDelayRiskSuggestions.list.column.workTaskTitle.label'],
  'col.assignee': s_en['intent.projectDetailWorkspace.listWorkTasks.list.filter.assignedWorkerId.label'],
  'col.dueDate': s_en['intent.projectDetailWorkspace.getProjectDetail.list.column.endDate.label'],
  'col.impactType': s_en['intent.projectDetailWorkspace.listChangeOrders.list.filter.impactType.label'],
  'col.costAdjustment': s_en['intent.projectDetailWorkspace.getChangeOrderDetail.list.column.costAdjustment.label'],
  'col.scheduleDays': s_en['intent.projectDetailWorkspace.getChangeOrderDetail.list.column.scheduleAdjustmentDays.label'],
  'col.coTitle': s_en['intent.projectDetailWorkspace.getChangeOrderDetail.list.column.title.label'],
  'col.description': s_en['intent.projectDetailWorkspace.getChangeOrderDetail.list.column.description.label'],
  'col.projectBudget': s_en['intent.projectDetailWorkspace.getChangeOrderDetail.list.column.projectBudget.label'],
  'col.approvedAt': s_en['intent.projectDetailWorkspace.getChangeOrderDetail.list.column.approvedAt.label'],
  'col.rejectedAt': s_en['intent.projectDetailWorkspace.getChangeOrderDetail.list.column.rejectedAt.label'],
  'col.rejectionReason': s_en['intent.projectDetailWorkspace.getChangeOrderDetail.list.column.rejectionReason.label'],
  'col.affectsJobCosting': s_en['intent.projectDetailWorkspace.getChangeOrderDetail.list.column.affectsJobCosting.label'],
  'col.workerName': s_en['intent.projectDetailWorkspace.listTimeLogs.list.filter.workerName.label'],
  'col.logDate': s_en['intent.projectDetailWorkspace.listTimeLogs.list.filter.logDate.label'],
  'col.workTaskId': s_en['intent.projectDetailWorkspace.listTimeLogs.list.filter.workTaskId.label'],
  'col.riskLevel': s_en['intent.projectDetailWorkspace.listDelayRiskSuggestions.list.column.riskLevel.label'],
  'col.reason': s_en['intent.projectDetailWorkspace.listDelayRiskSuggestions.list.column.reason.label'],
  'col.suggestedAction': s_en['intent.projectDetailWorkspace.listDelayRiskSuggestions.list.column.suggestedAction.label'],
  'col.acknowledged': s_en['intent.projectDetailWorkspace.listDelayRiskSuggestions.list.column.acknowledged.label'],
  'col.createdAt': s_en['intent.projectDetailWorkspace.listDelayRiskSuggestions.list.column.createdAt.label'],
  'filter.status': s_en['intent.projectDetailWorkspace.listWorkTasks.list.filter.status.label'],
  'filter.assignee': s_en['intent.projectDetailWorkspace.listWorkTasks.list.filter.assignedWorkerId.label'],
  'filter.impactType': s_en['intent.projectDetailWorkspace.listChangeOrders.list.filter.impactType.label'],
  'filter.workerName': s_en['intent.projectDetailWorkspace.listTimeLogs.list.filter.workerName.label'],
  'filter.logDate': s_en['intent.projectDetailWorkspace.listTimeLogs.list.filter.logDate.label'],
  'filter.workTaskId': s_en['intent.projectDetailWorkspace.listTimeLogs.list.filter.workTaskId.label'],
  'filter.acknowledged': s_en['intent.projectDetailWorkspace.listDelayRiskSuggestions.list.filter.acknowledged.label'],
  'tasks.empty': s_en['intent.projectDetailWorkspace.listWorkTasks.list.empty'],
  'changeOrders.empty': s_en['intent.projectDetailWorkspace.listChangeOrders.list.empty'],
  'changeOrderDetail.empty': s_en['intent.projectDetailWorkspace.getChangeOrderDetail.list.empty'],
  'timeLogs.empty': s_en['intent.projectDetailWorkspace.listTimeLogs.list.empty'],
  'materials.empty': s_en['intent.projectDetailWorkspace.listMaterialUsages.list.empty'],
  'delayRisk.empty': s_en['intent.projectDetailWorkspace.listDelayRiskSuggestions.list.empty'],
  'project.empty': s_en['intent.projectDetailWorkspace.getProjectDetail.list.empty'],
  'action.generateRisk': s_en['intent.projectDetailWorkspace.triggerDelayRiskSuggestions.form.action.triggerDelayRiskSuggestions'],
  'action.generateRisk.success': s_en['action.triggerDelayRiskSuggestions.success'],
  'action.generateRisk.error': s_en['action.triggerDelayRiskSuggestions.error'],
  'tab.tasks': 'Work tasks',
  'tab.changeOrders': 'Change orders',
  'tab.costs': 'Cost tracking',
  'tab.delayRisk': 'Delay risk',
  'section.timeLogs': 'Labor — time logs',
  'section.materials': 'Materials usage',
  'section.changeOrderDetail': 'Cost & schedule impact',
  'btn.applyFilters': 'Apply filters',
  'btn.refresh': 'Refresh',
  'btn.prev': 'Previous',
  'btn.next': 'Next',
  'btn.viewDetail': 'View impact',
  'btn.dismissFeedback': 'Dismiss',
  'btn.loading': 'Loading…',
  'btn.generating': 'Generating…',
  'label.page': 'Page',
  'label.total': 'Total',
  'label.hoursWorked': 'Hours worked',
  'label.laborCost': 'Labor cost',
  'label.materialName': 'Material',
  'label.quantity': 'Quantity',
  'label.unitCost': 'Unit cost',
  'label.overdue': 'Overdue',
  'label.yes': 'Yes',
  'label.no': 'No',
  'label.all': 'All',
  'label.ackOnly': 'Acknowledged',
  'label.unackOnly': 'Not acknowledged',
  'placeholder.noProject': 'Open a project to review its detail and timeline.',
  'placeholder.selectChangeOrder': 'Select a change order to inspect cost and schedule impact.',
  'placeholder.noStatusReport': 'A status report must be selected in context before risk analysis can run.',
  'ack.filter.any': 'Any',
  'feedback.success': 'Risk analysis generated.',
};
type PageMessageType = typeof pageMessage_en;
const s_pt_br = sharedMessages['pt-br'] ?? sharedFallback;
const pageMessage_pt_br: PageMessageType = {
  'col.name': s_pt_br['intent.projectDetailWorkspace.getProjectDetail.list.column.name.label'],
  'col.clientName': s_pt_br['intent.projectDetailWorkspace.getProjectDetail.list.column.clientName.label'],
  'col.clientCompany': s_pt_br['intent.projectDetailWorkspace.getProjectDetail.list.column.clientCompany.label'],
  'col.siteAddress': s_pt_br['intent.projectDetailWorkspace.getProjectDetail.list.column.siteAddress.label'],
  'col.budget': s_pt_br['intent.projectDetailWorkspace.getProjectDetail.list.column.budget.label'],
  'col.startDate': s_pt_br['intent.projectDetailWorkspace.getProjectDetail.list.column.startDate.label'],
  'col.endDate': s_pt_br['intent.projectDetailWorkspace.getProjectDetail.list.column.endDate.label'],
  'col.status': s_pt_br['intent.projectDetailWorkspace.getProjectDetail.list.column.status.label'],
  'col.holdReason': s_pt_br['intent.projectDetailWorkspace.getProjectDetail.list.column.holdReason.label'],
  'col.taskTitle': s_pt_br['intent.projectDetailWorkspace.listDelayRiskSuggestions.list.column.workTaskTitle.label'],
  'col.assignee': s_pt_br['intent.projectDetailWorkspace.listWorkTasks.list.filter.assignedWorkerId.label'],
  'col.dueDate': s_pt_br['intent.projectDetailWorkspace.getProjectDetail.list.column.endDate.label'],
  'col.impactType': s_pt_br['intent.projectDetailWorkspace.listChangeOrders.list.filter.impactType.label'],
  'col.costAdjustment': s_pt_br['intent.projectDetailWorkspace.getChangeOrderDetail.list.column.costAdjustment.label'],
  'col.scheduleDays': s_pt_br['intent.projectDetailWorkspace.getChangeOrderDetail.list.column.scheduleAdjustmentDays.label'],
  'col.coTitle': s_pt_br['intent.projectDetailWorkspace.getChangeOrderDetail.list.column.title.label'],
  'col.description': s_pt_br['intent.projectDetailWorkspace.getChangeOrderDetail.list.column.description.label'],
  'col.projectBudget': s_pt_br['intent.projectDetailWorkspace.getChangeOrderDetail.list.column.projectBudget.label'],
  'col.approvedAt': s_pt_br['intent.projectDetailWorkspace.getChangeOrderDetail.list.column.approvedAt.label'],
  'col.rejectedAt': s_pt_br['intent.projectDetailWorkspace.getChangeOrderDetail.list.column.rejectedAt.label'],
  'col.rejectionReason': s_pt_br['intent.projectDetailWorkspace.getChangeOrderDetail.list.column.rejectionReason.label'],
  'col.affectsJobCosting': s_pt_br['intent.projectDetailWorkspace.getChangeOrderDetail.list.column.affectsJobCosting.label'],
  'col.workerName': s_pt_br['intent.projectDetailWorkspace.listTimeLogs.list.filter.workerName.label'],
  'col.logDate': s_pt_br['intent.projectDetailWorkspace.listTimeLogs.list.filter.logDate.label'],
  'col.workTaskId': s_pt_br['intent.projectDetailWorkspace.listTimeLogs.list.filter.workTaskId.label'],
  'col.riskLevel': s_pt_br['intent.projectDetailWorkspace.listDelayRiskSuggestions.list.column.riskLevel.label'],
  'col.reason': s_pt_br['intent.projectDetailWorkspace.listDelayRiskSuggestions.list.column.reason.label'],
  'col.suggestedAction': s_pt_br['intent.projectDetailWorkspace.listDelayRiskSuggestions.list.column.suggestedAction.label'],
  'col.acknowledged': s_pt_br['intent.projectDetailWorkspace.listDelayRiskSuggestions.list.column.acknowledged.label'],
  'col.createdAt': s_pt_br['intent.projectDetailWorkspace.listDelayRiskSuggestions.list.column.createdAt.label'],
  'filter.status': s_pt_br['intent.projectDetailWorkspace.listWorkTasks.list.filter.status.label'],
  'filter.assignee': s_pt_br['intent.projectDetailWorkspace.listWorkTasks.list.filter.assignedWorkerId.label'],
  'filter.impactType': s_pt_br['intent.projectDetailWorkspace.listChangeOrders.list.filter.impactType.label'],
  'filter.workerName': s_pt_br['intent.projectDetailWorkspace.listTimeLogs.list.filter.workerName.label'],
  'filter.logDate': s_pt_br['intent.projectDetailWorkspace.listTimeLogs.list.filter.logDate.label'],
  'filter.workTaskId': s_pt_br['intent.projectDetailWorkspace.listTimeLogs.list.filter.workTaskId.label'],
  'filter.acknowledged': s_pt_br['intent.projectDetailWorkspace.listDelayRiskSuggestions.list.filter.acknowledged.label'],
  'tasks.empty': s_pt_br['intent.projectDetailWorkspace.listWorkTasks.list.empty'],
  'changeOrders.empty': s_pt_br['intent.projectDetailWorkspace.listChangeOrders.list.empty'],
  'changeOrderDetail.empty': s_pt_br['intent.projectDetailWorkspace.getChangeOrderDetail.list.empty'],
  'timeLogs.empty': s_pt_br['intent.projectDetailWorkspace.listTimeLogs.list.empty'],
  'materials.empty': s_pt_br['intent.projectDetailWorkspace.listMaterialUsages.list.empty'],
  'delayRisk.empty': s_pt_br['intent.projectDetailWorkspace.listDelayRiskSuggestions.list.empty'],
  'project.empty': s_pt_br['intent.projectDetailWorkspace.getProjectDetail.list.empty'],
  'action.generateRisk': s_pt_br['intent.projectDetailWorkspace.triggerDelayRiskSuggestions.form.action.triggerDelayRiskSuggestions'],
  'action.generateRisk.success': s_pt_br['action.triggerDelayRiskSuggestions.success'],
  'action.generateRisk.error': s_pt_br['action.triggerDelayRiskSuggestions.error'],
  'tab.tasks': 'Tarefas',
  'tab.changeOrders': 'Ordens de mudança',
  'tab.costs': 'Custos',
  'tab.delayRisk': 'Risco de atraso',
  'section.timeLogs': 'Mão de obra — apontamentos',
  'section.materials': 'Uso de materiais',
  'section.changeOrderDetail': 'Impacto de custo e prazo',
  'btn.applyFilters': 'Aplicar filtros',
  'btn.refresh': 'Atualizar',
  'btn.prev': 'Anterior',
  'btn.next': 'Próxima',
  'btn.viewDetail': 'Ver impacto',
  'btn.dismissFeedback': 'Dispensar',
  'btn.loading': 'Carregando…',
  'btn.generating': 'Gerando…',
  'label.page': 'Página',
  'label.total': 'Total',
  'label.hoursWorked': 'Horas trabalhadas',
  'label.laborCost': 'Custo de mão de obra',
  'label.materialName': 'Material',
  'label.quantity': 'Quantidade',
  'label.unitCost': 'Custo unitário',
  'label.overdue': 'Atrasada',
  'label.yes': 'Sim',
  'label.no': 'Não',
  'label.all': 'Todos',
  'label.ackOnly': 'Reconhecidos',
  'label.unackOnly': 'Não reconhecidos',
  'placeholder.noProject': 'Abra um projeto para revisar o detalhe e a linha do tempo.',
  'placeholder.selectChangeOrder': 'Selecione uma ordem de mudança para inspecionar o impacto de custo e prazo.',
  'placeholder.noStatusReport': 'Um relatório de status precisa estar selecionado no contexto antes da análise de risco.',
  'ack.filter.any': 'Qualquer',
  'feedback.success': 'Análise de risco gerada.',
};
const s_es = sharedMessages['es'] ?? sharedFallback;
const pageMessage_es: PageMessageType = {
  'col.name': s_es['intent.projectDetailWorkspace.getProjectDetail.list.column.name.label'],
  'col.clientName': s_es['intent.projectDetailWorkspace.getProjectDetail.list.column.clientName.label'],
  'col.clientCompany': s_es['intent.projectDetailWorkspace.getProjectDetail.list.column.clientCompany.label'],
  'col.siteAddress': s_es['intent.projectDetailWorkspace.getProjectDetail.list.column.siteAddress.label'],
  'col.budget': s_es['intent.projectDetailWorkspace.getProjectDetail.list.column.budget.label'],
  'col.startDate': s_es['intent.projectDetailWorkspace.getProjectDetail.list.column.startDate.label'],
  'col.endDate': s_es['intent.projectDetailWorkspace.getProjectDetail.list.column.endDate.label'],
  'col.status': s_es['intent.projectDetailWorkspace.getProjectDetail.list.column.status.label'],
  'col.holdReason': s_es['intent.projectDetailWorkspace.getProjectDetail.list.column.holdReason.label'],
  'col.taskTitle': s_es['intent.projectDetailWorkspace.listDelayRiskSuggestions.list.column.workTaskTitle.label'],
  'col.assignee': s_es['intent.projectDetailWorkspace.listWorkTasks.list.filter.assignedWorkerId.label'],
  'col.dueDate': s_es['intent.projectDetailWorkspace.getProjectDetail.list.column.endDate.label'],
  'col.impactType': s_es['intent.projectDetailWorkspace.listChangeOrders.list.filter.impactType.label'],
  'col.costAdjustment': s_es['intent.projectDetailWorkspace.getChangeOrderDetail.list.column.costAdjustment.label'],
  'col.scheduleDays': s_es['intent.projectDetailWorkspace.getChangeOrderDetail.list.column.scheduleAdjustmentDays.label'],
  'col.coTitle': s_es['intent.projectDetailWorkspace.getChangeOrderDetail.list.column.title.label'],
  'col.description': s_es['intent.projectDetailWorkspace.getChangeOrderDetail.list.column.description.label'],
  'col.projectBudget': s_es['intent.projectDetailWorkspace.getChangeOrderDetail.list.column.projectBudget.label'],
  'col.approvedAt': s_es['intent.projectDetailWorkspace.getChangeOrderDetail.list.column.approvedAt.label'],
  'col.rejectedAt': s_es['intent.projectDetailWorkspace.getChangeOrderDetail.list.column.rejectedAt.label'],
  'col.rejectionReason': s_es['intent.projectDetailWorkspace.getChangeOrderDetail.list.column.rejectionReason.label'],
  'col.affectsJobCosting': s_es['intent.projectDetailWorkspace.getChangeOrderDetail.list.column.affectsJobCosting.label'],
  'col.workerName': s_es['intent.projectDetailWorkspace.listTimeLogs.list.filter.workerName.label'],
  'col.logDate': s_es['intent.projectDetailWorkspace.listTimeLogs.list.filter.logDate.label'],
  'col.workTaskId': s_es['intent.projectDetailWorkspace.listTimeLogs.list.filter.workTaskId.label'],
  'col.riskLevel': s_es['intent.projectDetailWorkspace.listDelayRiskSuggestions.list.column.riskLevel.label'],
  'col.reason': s_es['intent.projectDetailWorkspace.listDelayRiskSuggestions.list.column.reason.label'],
  'col.suggestedAction': s_es['intent.projectDetailWorkspace.listDelayRiskSuggestions.list.column.suggestedAction.label'],
  'col.acknowledged': s_es['intent.projectDetailWorkspace.listDelayRiskSuggestions.list.column.acknowledged.label'],
  'col.createdAt': s_es['intent.projectDetailWorkspace.listDelayRiskSuggestions.list.column.createdAt.label'],
  'filter.status': s_es['intent.projectDetailWorkspace.listWorkTasks.list.filter.status.label'],
  'filter.assignee': s_es['intent.projectDetailWorkspace.listWorkTasks.list.filter.assignedWorkerId.label'],
  'filter.impactType': s_es['intent.projectDetailWorkspace.listChangeOrders.list.filter.impactType.label'],
  'filter.workerName': s_es['intent.projectDetailWorkspace.listTimeLogs.list.filter.workerName.label'],
  'filter.logDate': s_es['intent.projectDetailWorkspace.listTimeLogs.list.filter.logDate.label'],
  'filter.workTaskId': s_es['intent.projectDetailWorkspace.listTimeLogs.list.filter.workTaskId.label'],
  'filter.acknowledged': s_es['intent.projectDetailWorkspace.listDelayRiskSuggestions.list.filter.acknowledged.label'],
  'tasks.empty': s_es['intent.projectDetailWorkspace.listWorkTasks.list.empty'],
  'changeOrders.empty': s_es['intent.projectDetailWorkspace.listChangeOrders.list.empty'],
  'changeOrderDetail.empty': s_es['intent.projectDetailWorkspace.getChangeOrderDetail.list.empty'],
  'timeLogs.empty': s_es['intent.projectDetailWorkspace.listTimeLogs.list.empty'],
  'materials.empty': s_es['intent.projectDetailWorkspace.listMaterialUsages.list.empty'],
  'delayRisk.empty': s_es['intent.projectDetailWorkspace.listDelayRiskSuggestions.list.empty'],
  'project.empty': s_es['intent.projectDetailWorkspace.getProjectDetail.list.empty'],
  'action.generateRisk': s_es['intent.projectDetailWorkspace.triggerDelayRiskSuggestions.form.action.triggerDelayRiskSuggestions'],
  'action.generateRisk.success': s_es['action.triggerDelayRiskSuggestions.success'],
  'action.generateRisk.error': s_es['action.triggerDelayRiskSuggestions.error'],
  'tab.tasks': 'Tareas',
  'tab.changeOrders': 'Órdenes de cambio',
  'tab.costs': 'Costos',
  'tab.delayRisk': 'Riesgo de retraso',
  'section.timeLogs': 'Mano de obra — partes de horas',
  'section.materials': 'Uso de materiales',
  'section.changeOrderDetail': 'Impacto de costo y plazo',
  'btn.applyFilters': 'Aplicar filtros',
  'btn.refresh': 'Actualizar',
  'btn.prev': 'Anterior',
  'btn.next': 'Siguiente',
  'btn.viewDetail': 'Ver impacto',
  'btn.dismissFeedback': 'Descartar',
  'btn.loading': 'Cargando…',
  'btn.generating': 'Generando…',
  'label.page': 'Página',
  'label.total': 'Total',
  'label.hoursWorked': 'Horas trabajadas',
  'label.laborCost': 'Costo de mano de obra',
  'label.materialName': 'Material',
  'label.quantity': 'Cantidad',
  'label.unitCost': 'Costo unitario',
  'label.overdue': 'Vencida',
  'label.yes': 'Sí',
  'label.no': 'No',
  'label.all': 'Todos',
  'label.ackOnly': 'Reconocidos',
  'label.unackOnly': 'No reconocidos',
  'placeholder.noProject': 'Abra un proyecto para revisar el detalle y la línea de tiempo.',
  'placeholder.selectChangeOrder': 'Seleccione una orden de cambio para inspeccionar el impacto de costo y plazo.',
  'placeholder.noStatusReport': 'Debe haber un informe de estado seleccionado en el contexto antes de ejecutar el análisis de riesgo.',
  'ack.filter.any': 'Cualquiera',
  'feedback.success': 'Análisis de riesgo generado.',
};
const pageMessages: { [key: string]: PageMessageType } = { 'en': pageMessage_en, 'pt-br': pageMessage_pt_br, 'es': pageMessage_es };
/// **collab_i18n_end**

const pageFallback = pageMessages[Object.keys(pageMessages)[0]];

type WorkspaceTab = 'tasks' | 'changeOrders' | 'costs' | 'delayRisk';
type WorkTaskRow = ListWorkTasksOutput['workTasks'][number];
type ChangeOrderRow = ListChangeOrdersOutput['changeOrders'][number];
type TimeLogRow = ListTimeLogsOutput['timeLogs'][number];
type MaterialUsageRow = ListMaterialUsagesOutput['materialUsages'][number];

@customElement('build-flow-fsm--web--desktop--page31--project-detail-workspace-102045')
export class BuildFlowFsmDesktopPage31ProjectDetailWorkspacePage extends BuildFlowFsmProjectDetailWorkspaceBase {
  #msgLang: string | null = null;
  #msgCache: PageMessageType = pageFallback;
  #activeTab: WorkspaceTab = 'tasks';
  #riskFeedbackDismissed = false;

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
  render() {
    const msg = this.msg;
    return html`
      <div class="min-h-full w-full bg-[var(--page-bg,#f8fafc)] text-[var(--text-default,#0f172a)]">
        <div class="mx-auto flex w-full max-w-7xl flex-col gap-4 p-4 md:p-6">
          ${this.renderProjectHeader()}
          ${this.renderTabRail(msg)}
          <div class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-4 md:p-5">
            ${this.#activeTab === 'tasks' ? this.renderWorkTasks() : nothing}
            ${this.#activeTab === 'changeOrders' ? this.renderChangeOrders() : nothing}
            ${this.#activeTab === 'costs' ? this.renderCostTracking() : nothing}
            ${this.#activeTab === 'delayRisk' ? this.renderDelayRisk() : nothing}
          </div>
        </div>
      </div>
    `;
  }

  renderProjectHeader() {
    const msg = this.msg;
    const loading = this.getProjectDetailState === 'loading';
    const project: GetProjectDetailOutput | null = this.getProjectDetailData;
    const hasRouteProject = Boolean(this.getProjectDetailProjectId);

    return html`
      <section class="sticky top-0 z-10 rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-4 shadow-[var(--shadow-small,0_1px_2px_rgba(15,23,42,0.06))] md:p-5">
        <div class="flex flex-wrap items-start justify-between gap-3">
          <div class="min-w-0 flex-1">
            ${loading
              ? html`<div class="h-7 w-48 animate-pulse rounded bg-[var(--surface-alt-bg,#f1f5f9)]"></div>`
              : project
                ? html`
                    <div class="flex flex-wrap items-center gap-2">
                      <h2 class="truncate text-xl font-semibold text-[var(--text-strong,#020617)]">${project.name ?? ''}</h2>
                      ${project.status
                        ? html`<span class="inline-flex rounded-full bg-[var(--status-neutral-bg,#e2e8f0)] px-2.5 py-0.5 text-xs font-medium text-[var(--status-neutral-text,#334155)]">${project.status}</span>`
                        : nothing}
                    </div>
                    <p class="mt-1 text-sm text-[var(--text-muted,#64748b)]">
                      ${project.clientName ?? ''}${project.clientCompany ? html` · ${project.clientCompany}` : nothing}
                    </p>
                  `
                : html`<p class="text-sm text-[var(--text-muted,#64748b)]">${hasRouteProject ? msg['project.empty'] : msg['placeholder.noProject']}</p>`}
          </div>
          <button
            type="button"
            class="rounded-md bg-[var(--button-secondary-bg,#f8fafc)] px-3 py-1.5 text-sm font-medium text-[var(--button-secondary-text,#0f172a)] ring-1 ring-inset ring-[var(--button-secondary-border,#cbd5e1)] disabled:opacity-60"
            ?disabled=${loading || !hasRouteProject}
            @click=${(event: Event) => this.handleGetProjectDetailClick(event)}
          >
            ${loading ? msg['btn.loading'] : msg['btn.refresh']}
          </button>
        </div>
        ${project
          ? html`
              <dl class="mt-4 grid grid-cols-2 gap-3 text-sm md:grid-cols-4 lg:grid-cols-6">
                <div>
                  <dt class="text-[var(--text-muted,#64748b)]">${msg['col.budget']}</dt>
                  <dd class="font-medium text-[var(--text-strong,#020617)]">${project.budget ?? '—'}</dd>
                </div>
                <div>
                  <dt class="text-[var(--text-muted,#64748b)]">${msg['col.startDate']}</dt>
                  <dd class="font-medium text-[var(--text-strong,#020617)]">${project.startDate ?? '—'}</dd>
                </div>
                <div>
                  <dt class="text-[var(--text-muted,#64748b)]">${msg['col.endDate']}</dt>
                  <dd class="font-medium text-[var(--text-strong,#020617)]">${project.endDate ?? '—'}</dd>
                </div>
                <div class="col-span-2 md:col-span-1 lg:col-span-2">
                  <dt class="text-[var(--text-muted,#64748b)]">${msg['col.siteAddress']}</dt>
                  <dd class="font-medium text-[var(--text-strong,#020617)]">${project.siteAddress ?? '—'}</dd>
                </div>
                ${project.holdReason
                  ? html`
                      <div class="col-span-2">
                        <dt class="text-[var(--text-muted,#64748b)]">${msg['col.holdReason']}</dt>
                        <dd class="font-medium text-[var(--status-warning-text,#92400e)]">${project.holdReason}</dd>
                      </div>
                    `
                  : nothing}
              </dl>
            `
          : nothing}
      </section>
    `;
  }

  renderTabRail(msg: PageMessageType) {
    const tabs: { id: WorkspaceTab; label: string }[] = [
      { id: 'tasks', label: msg['tab.tasks'] },
      { id: 'changeOrders', label: msg['tab.changeOrders'] },
      { id: 'costs', label: msg['tab.costs'] },
      { id: 'delayRisk', label: msg['tab.delayRisk'] },
    ];
    return html`
      <nav class="flex flex-wrap gap-1 border-b border-[var(--border-default,#e2e8f0)]" aria-label="subjects">
        ${tabs.map((tab) => {
          const active = this.#activeTab === tab.id;
          return html`
            <button
              type="button"
              class="rounded-t-md px-3 py-2 text-sm font-medium transition-colors ${active
                ? 'bg-[var(--nav-active-bg,#e2e8f0)] text-[var(--nav-active-text,#0f172a)]'
                : 'bg-transparent text-[var(--text-muted,#64748b)] hover:bg-[var(--surface-alt-bg,#f1f5f9)] hover:text-[var(--text-default,#0f172a)]'}"
              aria-current=${active ? 'page' : 'false'}
              @click=${() => {
                this.#activeTab = tab.id;
                this.requestUpdate();
              }}
            >
              ${tab.label}
            </button>
          `;
        })}
      </nav>
    `;
  }

  renderWorkTasks() {
    const msg = this.msg;
    const loading = this.listWorkTasksState === 'loading';
    const rows: WorkTaskRow[] = this.listWorkTasksData?.workTasks ?? [];
    const total = this.listWorkTasksData?.total ?? 0;
    const page = Number(this.listWorkTasksPage) || 1;
    const pageSize = Number(this.listWorkTasksPageSize) || 20;
    const maxPage = Math.max(1, Math.ceil(total / pageSize) || 1);
    const today = new Date().toISOString().slice(0, 10);

    return html`
      <div class="flex flex-col gap-4">
        <div class="flex flex-wrap items-end gap-3 rounded-md bg-[var(--surface-alt-bg,#f1f5f9)] p-3">
          <label class="flex min-w-[8rem] flex-col gap-1 text-xs text-[var(--text-muted,#64748b)]">
            ${msg['filter.status']}
            <input
              class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-2 py-1.5 text-sm text-[var(--text-default,#0f172a)]"
              .value=${this.listWorkTasksStatus}
              @input=${(event: Event) => this.handleListWorkTasksStatusChange(event)}
            />
          </label>
          <label class="flex min-w-[10rem] flex-col gap-1 text-xs text-[var(--text-muted,#64748b)]">
            ${msg['filter.assignee']}
            <input
              class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-2 py-1.5 text-sm text-[var(--text-default,#0f172a)]"
              .value=${this.listWorkTasksAssignedWorkerId}
              @input=${(event: Event) => this.handleListWorkTasksAssignedWorkerIdChange(event)}
            />
          </label>
          <button
            type="button"
            class="rounded-md bg-[var(--button-primary-bg,#2563eb)] px-3 py-1.5 text-sm font-medium text-[var(--button-primary-text,#ffffff)] disabled:opacity-60"
            ?disabled=${loading}
            @click=${(event: Event) => {
              const projectId = this.getProjectDetailProjectId || this.listWorkTasksProjectId;
              if (projectId && this.listWorkTasksProjectId !== projectId) {
                this.setListWorkTasksProjectId(projectId);
              }
              this.handleListWorkTasksClick(event);
            }}
          >
            ${loading ? msg['btn.loading'] : msg['btn.applyFilters']}
          </button>
        </div>

        ${loading
          ? html`<div class="space-y-2">${[0, 1, 2].map(() => html`<div class="h-12 animate-pulse rounded bg-[var(--surface-alt-bg,#f1f5f9)]"></div>`)}</div>`
          : rows.length === 0
            ? html`<p class="py-6 text-center text-sm text-[var(--text-muted,#64748b)]">${msg['tasks.empty']}</p>`
            : html`
                <div class="overflow-x-auto">
                  <table class="min-w-full text-left text-sm">
                    <thead class="border-b border-[var(--border-subtle,#e2e8f0)] text-xs uppercase tracking-wide text-[var(--text-muted,#64748b)]">
                      <tr>
                        <th class="px-2 py-2 font-medium">${msg['col.taskTitle']}</th>
                        <th class="px-2 py-2 font-medium">${msg['col.assignee']}</th>
                        <th class="px-2 py-2 font-medium">${msg['col.status']}</th>
                        <th class="px-2 py-2 font-medium">${msg['col.dueDate']}</th>
                      </tr>
                    </thead>
                    <tbody>
                      ${rows.map((row: WorkTaskRow) => {
                        const due = (row as { dueDate?: string }).dueDate ?? '';
                        const status = (row as { status?: string }).status ?? '';
                        const overdue = Boolean(due && due < today && status !== 'completed' && status !== 'done' && status !== 'cancelled');
                        return html`
                          <tr class="border-b border-[var(--border-subtle,#e2e8f0)] last:border-0">
                            <td class="px-2 py-2 font-medium text-[var(--text-strong,#020617)]">${(row as { title?: string }).title ?? ''}</td>
                            <td class="px-2 py-2">${(row as { assignedWorkerId?: string }).assignedWorkerId ?? '—'}</td>
                            <td class="px-2 py-2">
                              <span class="inline-flex rounded-full bg-[var(--status-neutral-bg,#e2e8f0)] px-2 py-0.5 text-xs text-[var(--status-neutral-text,#334155)]">${status || '—'}</span>
                              ${overdue
                                ? html`<span class="ml-1 inline-flex rounded-full bg-[var(--status-warning-bg,#fef3c7)] px-2 py-0.5 text-xs text-[var(--status-warning-text,#92400e)]">${msg['label.overdue']}</span>`
                                : nothing}
                            </td>
                            <td class="px-2 py-2">${due || '—'}</td>
                          </tr>
                        `;
                      })}
                    </tbody>
                  </table>
                </div>
              `}

        ${this.renderPager({
          page,
          maxPage,
          total,
          loading,
          onPrev: () => {
            const next = Math.max(1, page - 1);
            this.setListWorkTasksPage(String(next));
            const projectId = this.getProjectDetailProjectId || this.listWorkTasksProjectId;
            if (projectId && this.listWorkTasksProjectId !== projectId) {
              this.setListWorkTasksProjectId(projectId);
            }
            this.handleListWorkTasksClick();
          },
          onNext: () => {
            const next = Math.min(maxPage, page + 1);
            this.setListWorkTasksPage(String(next));
            const projectId = this.getProjectDetailProjectId || this.listWorkTasksProjectId;
            if (projectId && this.listWorkTasksProjectId !== projectId) {
              this.setListWorkTasksProjectId(projectId);
            }
            this.handleListWorkTasksClick();
          },
        })}
      </div>
    `;
  }

  renderChangeOrders() {
    const msg = this.msg;
    const loading = this.listChangeOrdersState === 'loading';
    const rows: ChangeOrderRow[] = this.listChangeOrdersData?.changeOrders ?? [];
    const total = this.listChangeOrdersData?.total ?? 0;
    const page = Number(this.listChangeOrdersPage) || 1;
    const pageSize = Number(this.listChangeOrdersPageSize) || 20;
    const maxPage = Math.max(1, Math.ceil(total / pageSize) || 1);
    const selectedId = this.getChangeOrderDetailChangeOrderId;

    return html`
      <div class="grid grid-cols-1 gap-4 lg:grid-cols-5">
        <div class="flex flex-col gap-4 lg:col-span-3">
          <div class="flex flex-wrap items-end gap-3 rounded-md bg-[var(--surface-alt-bg,#f1f5f9)] p-3">
            <label class="flex min-w-[8rem] flex-col gap-1 text-xs text-[var(--text-muted,#64748b)]">
              ${msg['filter.status']}
              <input
                class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-2 py-1.5 text-sm text-[var(--text-default,#0f172a)]"
                .value=${this.listChangeOrdersStatus}
                @input=${(event: Event) => this.handleListChangeOrdersStatusChange(event)}
              />
            </label>
            <label class="flex min-w-[8rem] flex-col gap-1 text-xs text-[var(--text-muted,#64748b)]">
              ${msg['filter.impactType']}
              <input
                class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-2 py-1.5 text-sm text-[var(--text-default,#0f172a)]"
                .value=${this.listChangeOrdersImpactType}
                @input=${(event: Event) => this.handleListChangeOrdersImpactTypeChange(event)}
              />
            </label>
            <button
              type="button"
              class="rounded-md bg-[var(--button-primary-bg,#2563eb)] px-3 py-1.5 text-sm font-medium text-[var(--button-primary-text,#ffffff)] disabled:opacity-60"
              ?disabled=${loading}
              @click=${(event: Event) => {
                const projectId = this.getProjectDetailProjectId || this.listChangeOrdersProjectId;
                if (projectId && this.listChangeOrdersProjectId !== projectId) {
                  this.setListChangeOrdersProjectId(projectId);
                }
                this.handleListChangeOrdersClick(event);
              }}
            >
              ${loading ? msg['btn.loading'] : msg['btn.applyFilters']}
            </button>
          </div>

          ${loading
            ? html`<div class="space-y-2">${[0, 1, 2].map(() => html`<div class="h-14 animate-pulse rounded bg-[var(--surface-alt-bg,#f1f5f9)]"></div>`)}</div>`
            : rows.length === 0
              ? html`<p class="py-6 text-center text-sm text-[var(--text-muted,#64748b)]">${msg['changeOrders.empty']}</p>`
              : html`
                  <ul class="divide-y divide-[var(--border-subtle,#e2e8f0)] rounded-md border border-[var(--border-default,#e2e8f0)]">
                    ${rows.map((row: ChangeOrderRow) => {
                      const id = String((row as { changeOrderId?: string }).changeOrderId ?? '');
                      const isSelected = Boolean(id && id === selectedId);
                      return html`
                        <li
                          class="flex flex-wrap items-center justify-between gap-2 px-3 py-3 ${isSelected
                            ? 'bg-[var(--selected-bg,#eff6ff)] text-[var(--selected-text,#1e3a8a)]'
                            : 'bg-[var(--surface-bg,#ffffff)]'}"
                        >
                          <div class="min-w-0">
                            <p class="truncate font-medium">${(row as { title?: string }).title ?? id}</p>
                            <p class="mt-0.5 text-xs text-[var(--text-muted,#64748b)]">
                              ${(row as { impactType?: string }).impactType ?? '—'}
                              · ${(row as { costAdjustment?: string | number }).costAdjustment ?? '—'}
                              · ${msg['col.scheduleDays']}: ${(row as { scheduleAdjustmentDays?: string | number }).scheduleAdjustmentDays ?? '—'}
                            </p>
                          </div>
                          <div class="flex items-center gap-2">
                            <span class="inline-flex rounded-full bg-[var(--status-neutral-bg,#e2e8f0)] px-2 py-0.5 text-xs text-[var(--status-neutral-text,#334155)]">${(row as { status?: string }).status ?? '—'}</span>
                            <button
                              type="button"
                              class="rounded-md bg-[var(--button-secondary-bg,#f8fafc)] px-2.5 py-1 text-xs font-medium text-[var(--button-secondary-text,#0f172a)] ring-1 ring-inset ring-[var(--button-secondary-border,#cbd5e1)]"
                              ?disabled=${!id}
                              @click=${() => {
                                if (!id) return;
                                this.setGetChangeOrderDetailChangeOrderId(id);
                                this.handleGetChangeOrderDetailClick();
                              }}
                            >
                              ${msg['btn.viewDetail']}
                            </button>
                          </div>
                        </li>
                      `;
                    })}
                  </ul>
                `}

          ${this.renderPager({
            page,
            maxPage,
            total,
            loading,
            onPrev: () => {
              const next = Math.max(1, page - 1);
              this.setListChangeOrdersPage(String(next));
              const projectId = this.getProjectDetailProjectId || this.listChangeOrdersProjectId;
              if (projectId && this.listChangeOrdersProjectId !== projectId) {
                this.setListChangeOrdersProjectId(projectId);
              }
              this.handleListChangeOrdersClick();
            },
            onNext: () => {
              const next = Math.min(maxPage, page + 1);
              this.setListChangeOrdersPage(String(next));
              const projectId = this.getProjectDetailProjectId || this.listChangeOrdersProjectId;
              if (projectId && this.listChangeOrdersProjectId !== projectId) {
                this.setListChangeOrdersProjectId(projectId);
              }
              this.handleListChangeOrdersClick();
            },
          })}
        </div>

        <div class="lg:col-span-2">
          ${this.renderChangeOrderDetail()}
        </div>
      </div>
    `;
  }

  renderChangeOrderDetail() {
    const msg = this.msg;
    const loading = this.getChangeOrderDetailState === 'loading';
    const detail: GetChangeOrderDetailOutput | null = this.getChangeOrderDetailData;

    if (!this.getChangeOrderDetailChangeOrderId) {
      return html`
        <div class="flex h-full min-h-[12rem] items-center justify-center rounded-md border border-dashed border-[var(--border-default,#e2e8f0)] bg-[var(--surface-alt-bg,#f1f5f9)] p-4 text-center text-sm text-[var(--text-muted,#64748b)]">
          ${msg['placeholder.selectChangeOrder']}
        </div>
      `;
    }

    if (loading) {
      return html`<div class="space-y-2 rounded-md border border-[var(--border-default,#e2e8f0)] p-4">${[0, 1, 2, 3].map(() => html`<div class="h-8 animate-pulse rounded bg-[var(--surface-alt-bg,#f1f5f9)]"></div>`)}</div>`;
    }

    if (!detail) {
      return html`<p class="rounded-md border border-[var(--border-default,#e2e8f0)] p-4 text-sm text-[var(--text-muted,#64748b)]">${msg['changeOrderDetail.empty']}</p>`;
    }

    return html`
      <aside class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-4">
        <p class="text-xs font-medium uppercase tracking-wide text-[var(--text-muted,#64748b)]">${msg['section.changeOrderDetail']}</p>
        <h3 class="mt-1 text-base font-semibold text-[var(--text-strong,#020617)]">${detail.title ?? ''}</h3>
        ${detail.status
          ? html`<span class="mt-2 inline-flex rounded-full bg-[var(--status-info-bg,#dbeafe)] px-2.5 py-0.5 text-xs font-medium text-[var(--status-info-text,#1e40af)]">${detail.status}</span>`
          : nothing}
        ${detail.description
          ? html`<p class="mt-3 text-sm text-[var(--text-default,#0f172a)]">${detail.description}</p>`
          : nothing}
        <dl class="mt-4 grid grid-cols-1 gap-3 text-sm sm:grid-cols-2">
          <div>
            <dt class="text-[var(--text-muted,#64748b)]">${msg['col.impactType']}</dt>
            <dd class="font-medium">${detail.impactType ?? '—'}</dd>
          </div>
          <div>
            <dt class="text-[var(--text-muted,#64748b)]">${msg['col.costAdjustment']}</dt>
            <dd class="font-medium">${detail.costAdjustment ?? '—'}</dd>
          </div>
          <div>
            <dt class="text-[var(--text-muted,#64748b)]">${msg['col.projectBudget']}</dt>
            <dd class="font-medium">${detail.projectBudget ?? '—'}</dd>
          </div>
          <div>
            <dt class="text-[var(--text-muted,#64748b)]">${msg['col.scheduleDays']}</dt>
            <dd class="font-medium">${detail.scheduleAdjustmentDays ?? '—'}</dd>
          </div>
          <div>
            <dt class="text-[var(--text-muted,#64748b)]">${msg['col.approvedAt']}</dt>
            <dd class="font-medium">${detail.approvedAt ?? '—'}</dd>
          </div>
          <div>
            <dt class="text-[var(--text-muted,#64748b)]">${msg['col.rejectedAt']}</dt>
            <dd class="font-medium">${detail.rejectedAt ?? '—'}</dd>
          </div>
          <div>
            <dt class="text-[var(--text-muted,#64748b)]">${msg['col.affectsJobCosting']}</dt>
            <dd class="font-medium">${detail.affectsJobCosting ? msg['label.yes'] : msg['label.no']}</dd>
          </div>
          ${detail.rejectionReason
            ? html`
                <div class="sm:col-span-2">
                  <dt class="text-[var(--text-muted,#64748b)]">${msg['col.rejectionReason']}</dt>
                  <dd class="font-medium">${detail.rejectionReason}</dd>
                </div>
              `
            : nothing}
        </dl>
      </aside>
    `;
  }

  renderCostTracking() {
    const msg = this.msg;
    return html`
      <div class="flex flex-col gap-8">
        ${this.renderTimeLogs(msg)}
        ${this.renderMaterialUsages(msg)}
      </div>
    `;
  }

  renderTimeLogs(msg: PageMessageType) {
    const loading = this.listTimeLogsState === 'loading';
    const rows: TimeLogRow[] = this.listTimeLogsData?.timeLogs ?? [];
    const total = this.listTimeLogsData?.total ?? 0;
    const page = Number(this.listTimeLogsPage) || 1;
    const pageSize = Number(this.listTimeLogsPageSize) || 20;
    const maxPage = Math.max(1, Math.ceil(total / pageSize) || 1);

    return html`
      <section class="flex flex-col gap-3">
        <h3 class="text-sm font-semibold text-[var(--text-strong,#020617)]">${msg['section.timeLogs']}</h3>
        <div class="flex flex-wrap items-end gap-3 rounded-md bg-[var(--surface-alt-bg,#f1f5f9)] p-3">
          <label class="flex min-w-[8rem] flex-col gap-1 text-xs text-[var(--text-muted,#64748b)]">
            ${msg['filter.workTaskId']}
            <input
              class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-2 py-1.5 text-sm text-[var(--text-default,#0f172a)]"
              .value=${this.listTimeLogsWorkTaskId}
              @input=${(event: Event) => this.handleListTimeLogsWorkTaskIdChange(event)}
            />
          </label>
          <label class="flex min-w-[8rem] flex-col gap-1 text-xs text-[var(--text-muted,#64748b)]">
            ${msg['filter.workerName']}
            <input
              class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-2 py-1.5 text-sm text-[var(--text-default,#0f172a)]"
              .value=${this.listTimeLogsWorkerName}
              @input=${(event: Event) => this.handleListTimeLogsWorkerNameChange(event)}
            />
          </label>
          <label class="flex min-w-[8rem] flex-col gap-1 text-xs text-[var(--text-muted,#64748b)]">
            ${msg['filter.logDate']}
            <input
              type="date"
              class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-2 py-1.5 text-sm text-[var(--text-default,#0f172a)]"
              .value=${this.listTimeLogsLogDate}
              @input=${(event: Event) => this.handleListTimeLogsLogDateChange(event)}
            />
          </label>
          <label class="flex min-w-[8rem] flex-col gap-1 text-xs text-[var(--text-muted,#64748b)]">
            ${msg['filter.status']}
            <input
              class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-2 py-1.5 text-sm text-[var(--text-default,#0f172a)]"
              .value=${this.listTimeLogsStatus}
              @input=${(event: Event) => this.handleListTimeLogsStatusChange(event)}
            />
          </label>
          <button
            type="button"
            class="rounded-md bg-[var(--button-primary-bg,#2563eb)] px-3 py-1.5 text-sm font-medium text-[var(--button-primary-text,#ffffff)] disabled:opacity-60"
            ?disabled=${loading}
            @click=${(event: Event) => this.handleListTimeLogsClick(event)}
          >
            ${loading ? msg['btn.loading'] : msg['btn.applyFilters']}
          </button>
        </div>

        ${loading
          ? html`<div class="space-y-2">${[0, 1].map(() => html`<div class="h-10 animate-pulse rounded bg-[var(--surface-alt-bg,#f1f5f9)]"></div>`)}</div>`
          : rows.length === 0
            ? html`<p class="py-4 text-center text-sm text-[var(--text-muted,#64748b)]">${msg['timeLogs.empty']}</p>`
            : html`
                <div class="overflow-x-auto">
                  <table class="min-w-full text-left text-sm">
                    <thead class="border-b border-[var(--border-subtle,#e2e8f0)] text-xs uppercase tracking-wide text-[var(--text-muted,#64748b)]">
                      <tr>
                        <th class="px-2 py-2 font-medium">${msg['col.workerName']}</th>
                        <th class="px-2 py-2 font-medium">${msg['col.logDate']}</th>
                        <th class="px-2 py-2 font-medium">${msg['label.hoursWorked']}</th>
                        <th class="px-2 py-2 font-medium">${msg['label.laborCost']}</th>
                        <th class="px-2 py-2 font-medium">${msg['col.status']}</th>
                      </tr>
                    </thead>
                    <tbody>
                      ${rows.map(
                        (row: TimeLogRow) => html`
                          <tr class="border-b border-[var(--border-subtle,#e2e8f0)] last:border-0">
                            <td class="px-2 py-2">${(row as { workerName?: string }).workerName ?? '—'}</td>
                            <td class="px-2 py-2">${(row as { logDate?: string }).logDate ?? '—'}</td>
                            <td class="px-2 py-2">${(row as { hoursWorked?: string | number }).hoursWorked ?? '—'}</td>
                            <td class="px-2 py-2">${(row as { laborCost?: string | number }).laborCost ?? '—'}</td>
                            <td class="px-2 py-2">
                              <span class="inline-flex rounded-full bg-[var(--status-neutral-bg,#e2e8f0)] px-2 py-0.5 text-xs text-[var(--status-neutral-text,#334155)]">${(row as { status?: string }).status ?? '—'}</span>
                            </td>
                          </tr>
                        `,
                      )}
                    </tbody>
                  </table>
                </div>
              `}

        ${this.renderPager({
          page,
          maxPage,
          total,
          loading,
          onPrev: () => {
            this.setListTimeLogsPage(String(Math.max(1, page - 1)));
            this.handleListTimeLogsClick();
          },
          onNext: () => {
            this.setListTimeLogsPage(String(Math.min(maxPage, page + 1)));
            this.handleListTimeLogsClick();
          },
        })}
      </section>
    `;
  }

  renderMaterialUsages(msg: PageMessageType) {
    const loading = this.listMaterialUsagesState === 'loading';
    const rows: MaterialUsageRow[] = this.listMaterialUsagesData?.materialUsages ?? [];
    const total = this.listMaterialUsagesData?.total ?? 0;
    const page = Number(this.listMaterialUsagesPage) || 1;
    const pageSize = Number(this.listMaterialUsagesPageSize) || 20;
    const maxPage = Math.max(1, Math.ceil(total / pageSize) || 1);

    return html`
      <section class="flex flex-col gap-3">
        <h3 class="text-sm font-semibold text-[var(--text-strong,#020617)]">${msg['section.materials']}</h3>
        <div class="flex flex-wrap items-end gap-3 rounded-md bg-[var(--surface-alt-bg,#f1f5f9)] p-3">
          <label class="flex min-w-[8rem] flex-col gap-1 text-xs text-[var(--text-muted,#64748b)]">
            ${msg['filter.status']}
            <input
              class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-2 py-1.5 text-sm text-[var(--text-default,#0f172a)]"
              .value=${this.listMaterialUsagesStatus}
              @input=${(event: Event) => this.handleListMaterialUsagesStatusChange(event)}
            />
          </label>
          <button
            type="button"
            class="rounded-md bg-[var(--button-primary-bg,#2563eb)] px-3 py-1.5 text-sm font-medium text-[var(--button-primary-text,#ffffff)] disabled:opacity-60"
            ?disabled=${loading}
            @click=${(event: Event) => {
              const projectId = this.getProjectDetailProjectId || this.listMaterialUsagesProjectId;
              if (projectId && this.listMaterialUsagesProjectId !== projectId) {
                this.setListMaterialUsagesProjectId(projectId);
              }
              this.handleListMaterialUsagesClick(event);
            }}
          >
            ${loading ? msg['btn.loading'] : msg['btn.applyFilters']}
          </button>
        </div>

        ${loading
          ? html`<div class="space-y-2">${[0, 1].map(() => html`<div class="h-10 animate-pulse rounded bg-[var(--surface-alt-bg,#f1f5f9)]"></div>`)}</div>`
          : rows.length === 0
            ? html`<p class="py-4 text-center text-sm text-[var(--text-muted,#64748b)]">${msg['materials.empty']}</p>`
            : html`
                <div class="overflow-x-auto">
                  <table class="min-w-full text-left text-sm">
                    <thead class="border-b border-[var(--border-subtle,#e2e8f0)] text-xs uppercase tracking-wide text-[var(--text-muted,#64748b)]">
                      <tr>
                        <th class="px-2 py-2 font-medium">${msg['label.materialName']}</th>
                        <th class="px-2 py-2 font-medium">${msg['label.quantity']}</th>
                        <th class="px-2 py-2 font-medium">${msg['label.unitCost']}</th>
                        <th class="px-2 py-2 font-medium">${msg['col.status']}</th>
                      </tr>
                    </thead>
                    <tbody>
                      ${rows.map(
                        (row: MaterialUsageRow) => html`
                          <tr class="border-b border-[var(--border-subtle,#e2e8f0)] last:border-0">
                            <td class="px-2 py-2 font-medium">${(row as { materialName?: string }).materialName ?? '—'}</td>
                            <td class="px-2 py-2">${(row as { quantity?: string | number }).quantity ?? '—'}</td>
                            <td class="px-2 py-2">${(row as { unitCost?: string | number }).unitCost ?? '—'}</td>
                            <td class="px-2 py-2">
                              <span class="inline-flex rounded-full bg-[var(--status-neutral-bg,#e2e8f0)] px-2 py-0.5 text-xs text-[var(--status-neutral-text,#334155)]">${(row as { status?: string }).status ?? '—'}</span>
                            </td>
                          </tr>
                        `,
                      )}
                    </tbody>
                  </table>
                </div>
              `}

        ${this.renderPager({
          page,
          maxPage,
          total,
          loading,
          onPrev: () => {
            this.setListMaterialUsagesPage(String(Math.max(1, page - 1)));
            const projectId = this.getProjectDetailProjectId || this.listMaterialUsagesProjectId;
            if (projectId && this.listMaterialUsagesProjectId !== projectId) {
              this.setListMaterialUsagesProjectId(projectId);
            }
            this.handleListMaterialUsagesClick();
          },
          onNext: () => {
            this.setListMaterialUsagesPage(String(Math.min(maxPage, page + 1)));
            const projectId = this.getProjectDetailProjectId || this.listMaterialUsagesProjectId;
            if (projectId && this.listMaterialUsagesProjectId !== projectId) {
              this.setListMaterialUsagesProjectId(projectId);
            }
            this.handleListMaterialUsagesClick();
          },
        })}
      </section>
    `;
  }

  renderDelayRisk() {
    const msg = this.msg;
    const listLoading = this.listDelayRiskSuggestionsState === 'loading';
    const cmdLoading = this.triggerDelayRiskSuggestionsState === 'loading';
    const rows: ListDelayRiskSuggestionsOutput[] = this.listDelayRiskSuggestionsData ?? [];
    const hasStatusReport = Boolean(this.triggerDelayRiskSuggestionsStatusReportId || this.listDelayRiskSuggestionsStatusReportId);
    const statusReportId = this.triggerDelayRiskSuggestionsStatusReportId || this.listDelayRiskSuggestionsStatusReportId;
    const showSuccess = this.triggerDelayRiskSuggestionsState === 'success' && !this.#riskFeedbackDismissed;
    const showError = this.triggerDelayRiskSuggestionsState === 'error' && !this.#riskFeedbackDismissed;
    const errorText = this.triggerDelayRiskSuggestionsError || msg['action.generateRisk.error'];

    return html`
      <div class="flex flex-col gap-4">
        <div class="flex flex-wrap items-center justify-between gap-3">
          <div class="min-w-0">
            ${hasStatusReport
              ? nothing
              : html`<p class="text-sm text-[var(--text-muted,#64748b)]">${msg['placeholder.noStatusReport']}</p>`}
          </div>
          <button
            type="button"
            class="rounded-md bg-[var(--button-primary-bg,#2563eb)] px-4 py-2 text-sm font-medium text-[var(--button-primary-text,#ffffff)] disabled:opacity-60"
            ?disabled=${cmdLoading || !statusReportId}
            @click=${(event: Event) => {
              this.#riskFeedbackDismissed = false;
              if (statusReportId && this.triggerDelayRiskSuggestionsStatusReportId !== statusReportId) {
                this.setTriggerDelayRiskSuggestionsStatusReportId(statusReportId);
              }
              this.handleTriggerDelayRiskSuggestionsClick(event);
            }}
          >
            ${cmdLoading ? msg['btn.generating'] : msg['action.generateRisk']}
          </button>
        </div>

        ${showSuccess
          ? html`
              <div class="flex items-start justify-between gap-3 rounded-md bg-[var(--status-success-bg,#dcfce7)] px-3 py-2 text-sm text-[var(--status-success-text,#166534)]">
                <span>${msg['feedback.success']}</span>
                <button type="button" class="underline" @click=${() => { this.#riskFeedbackDismissed = true; this.requestUpdate(); }}>${msg['btn.dismissFeedback']}</button>
              </div>
            `
          : nothing}
        ${showError
          ? html`
              <div class="flex items-start justify-between gap-3 rounded-md bg-[var(--status-error-bg,#fee2e2)] px-3 py-2 text-sm text-[var(--status-error-text,#991b1b)]">
                <span>${errorText}</span>
                <button type="button" class="underline" @click=${() => { this.#riskFeedbackDismissed = true; this.requestUpdate(); }}>${msg['btn.dismissFeedback']}</button>
              </div>
            `
          : nothing}

        <div class="flex flex-wrap items-end gap-3 rounded-md bg-[var(--surface-alt-bg,#f1f5f9)] p-3">
          <label class="flex min-w-[10rem] flex-col gap-1 text-xs text-[var(--text-muted,#64748b)]">
            ${msg['filter.acknowledged']}
            <select
              class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-2 py-1.5 text-sm text-[var(--text-default,#0f172a)]"
              .value=${this.listDelayRiskSuggestionsAcknowledged}
              @change=${(event: Event) => this.handleListDelayRiskSuggestionsAcknowledgedChange(event)}
            >
              <option value="">${msg['ack.filter.any']}</option>
              <option value="true">${msg['label.ackOnly']}</option>
              <option value="false">${msg['label.unackOnly']}</option>
            </select>
          </label>
          <button
            type="button"
            class="rounded-md bg-[var(--button-secondary-bg,#f8fafc)] px-3 py-1.5 text-sm font-medium text-[var(--button-secondary-text,#0f172a)] ring-1 ring-inset ring-[var(--button-secondary-border,#cbd5e1)] disabled:opacity-60"
            ?disabled=${listLoading || !statusReportId}
            @click=${(event: Event) => {
              if (statusReportId && this.listDelayRiskSuggestionsStatusReportId !== statusReportId) {
                this.setListDelayRiskSuggestionsStatusReportId(statusReportId);
              }
              this.handleListDelayRiskSuggestionsClick(event);
            }}
          >
            ${listLoading ? msg['btn.loading'] : msg['btn.applyFilters']}
          </button>
        </div>

        ${listLoading
          ? html`<div class="grid gap-3 md:grid-cols-2">${[0, 1, 2].map(() => html`<div class="h-28 animate-pulse rounded-lg bg-[var(--surface-alt-bg,#f1f5f9)]"></div>`)}</div>`
          : rows.length === 0
            ? html`<p class="py-6 text-center text-sm text-[var(--text-muted,#64748b)]">${msg['delayRisk.empty']}</p>`
            : html`
                <div class="grid gap-3 md:grid-cols-2">
                  ${rows.map((row: ListDelayRiskSuggestionsOutput) => {
                    const riskLevel = String((row as { riskLevel?: string }).riskLevel ?? '');
                    const riskClass =
                      riskLevel.toLowerCase() === 'high' || riskLevel.toLowerCase() === 'critical'
                        ? 'bg-[var(--status-error-bg,#fee2e2)] text-[var(--status-error-text,#991b1b)]'
                        : riskLevel.toLowerCase() === 'medium' || riskLevel.toLowerCase() === 'moderate'
                          ? 'bg-[var(--status-warning-bg,#fef3c7)] text-[var(--status-warning-text,#92400e)]'
                          : 'bg-[var(--status-info-bg,#dbeafe)] text-[var(--status-info-text,#1e40af)]';
                    const acknowledged = Boolean((row as { acknowledged?: boolean }).acknowledged);
                    return html`
                      <article class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-4">
                        <div class="flex flex-wrap items-center gap-2">
                          <span class="inline-flex rounded-full px-2.5 py-0.5 text-xs font-semibold ${riskClass}">${riskLevel || '—'}</span>
                          <span class="text-xs text-[var(--text-muted,#64748b)]">${msg['col.acknowledged']}: ${acknowledged ? msg['label.yes'] : msg['label.no']}</span>
                        </div>
                        <p class="mt-2 text-sm font-medium text-[var(--text-strong,#020617)]">${(row as { workTaskTitle?: string }).workTaskTitle ?? ''}</p>
                        <p class="mt-2 text-sm text-[var(--text-default,#0f172a)]">${(row as { reason?: string }).reason ?? ''}</p>
                        <p class="mt-2 text-sm text-[var(--text-muted,#64748b)]">
                          <span class="font-medium text-[var(--text-default,#0f172a)]">${msg['col.suggestedAction']}:</span>
                          ${(row as { suggestedAction?: string }).suggestedAction ?? '—'}
                        </p>
                        ${(row as { createdAt?: string }).createdAt
                          ? html`<p class="mt-2 text-xs text-[var(--text-muted,#64748b)]">${msg['col.createdAt']}: ${(row as { createdAt?: string }).createdAt}</p>`
                          : nothing}
                      </article>
                    `;
                  })}
                </div>
              `}
      </div>
    `;
  }

  renderPager(opts: {
    page: number;
    maxPage: number;
    total: number;
    loading: boolean;
    onPrev: () => void;
    onNext: () => void;
  }) {
    const msg = this.msg;
    if (opts.total <= 0 && opts.maxPage <= 1) {
      return nothing;
    }
    return html`
      <div class="flex flex-wrap items-center justify-between gap-2 border-t border-[var(--border-subtle,#e2e8f0)] pt-3 text-sm">
        <span class="text-[var(--text-muted,#64748b)]">${msg['label.total']}: ${opts.total} · ${msg['label.page']} ${opts.page}/${opts.maxPage}</span>
        <div class="flex gap-2">
          <button
            type="button"
            class="rounded-md bg-[var(--button-secondary-bg,#f8fafc)] px-3 py-1 text-sm text-[var(--button-secondary-text,#0f172a)] ring-1 ring-inset ring-[var(--button-secondary-border,#cbd5e1)] disabled:opacity-50"
            ?disabled=${opts.loading || opts.page <= 1}
            @click=${opts.onPrev}
          >
            ${msg['btn.prev']}
          </button>
          <button
            type="button"
            class="rounded-md bg-[var(--button-secondary-bg,#f8fafc)] px-3 py-1 text-sm text-[var(--button-secondary-text,#0f172a)] ring-1 ring-inset ring-[var(--button-secondary-border,#cbd5e1)] disabled:opacity-50"
            ?disabled=${opts.loading || opts.page >= opts.maxPage}
            @click=${opts.onNext}
          >
            ${msg['btn.next']}
          </button>
        </div>
      </div>
    `;
  }
}
