/// <mls fileReference="_102045_/l2/buildFlowFsm/web/desktop/page21/projectDetailWorkspace.ts" enhancement="_102020_/l2/enhancementAura"/>

import { html, nothing } from 'lit';
import { customElement } from 'lit/decorators.js';
import { BuildFlowFsmProjectDetailWorkspaceBase, messages as sharedMessages } from '/_102045_/l2/buildFlowFsm/web/shared/projectDetailWorkspace.js';
import type {
  GetProjectDetailOutput,
  GetChangeOrderDetailOutput,
  ListWorkTasksOutput,
  ListChangeOrdersOutput,
  ListTimeLogsOutput,
  ListMaterialUsagesOutput,
  ListDelayRiskSuggestionsOutput,
} from '/_102045_/l2/buildFlowFsm/web/shared/projectDetailWorkspace.js';

const sharedFallback = sharedMessages[Object.keys(sharedMessages)[0]];

/// **collab_i18n_start**
const s_en = sharedMessages['en'] ?? sharedFallback;
const pageMessage_en = {
  'header.loading': 'Loading project…',
  'header.empty': 'Project details are not available yet.',
  'header.client': s_en['intent.projectDetailWorkspace.getProjectDetail.list.column.clientName.label'],
  'header.company': s_en['intent.projectDetailWorkspace.getProjectDetail.list.column.clientCompany.label'],
  'header.site': s_en['intent.projectDetailWorkspace.getProjectDetail.list.column.siteAddress.label'],
  'header.budget': s_en['intent.projectDetailWorkspace.getProjectDetail.list.column.budget.label'],
  'header.start': s_en['intent.projectDetailWorkspace.getProjectDetail.list.column.startDate.label'],
  'header.end': s_en['intent.projectDetailWorkspace.getProjectDetail.list.column.endDate.label'],
  'header.status': s_en['intent.projectDetailWorkspace.getProjectDetail.list.column.status.label'],
  'header.hold': s_en['intent.projectDetailWorkspace.getProjectDetail.list.column.holdReason.label'],
  'tasks.title': s_en['section.projectDetailWorkspace.sec-task-timeline.title'],
  'tasks.empty': s_en['intent.projectDetailWorkspace.listWorkTasks.list.empty'],
  'tasks.filterStatus': s_en['intent.projectDetailWorkspace.listWorkTasks.list.filter.status.label'],
  'tasks.filterWorker': 'Assignee',
  'tasks.apply': 'Apply filters',
  'tasks.colTitle': 'Task',
  'tasks.colAssignee': 'Assignee',
  'tasks.colStatus': s_en['intent.projectDetailWorkspace.listWorkTasks.list.filter.status.label'],
  'tasks.colDue': 'Due date',
  'tasks.overdue': 'Overdue',
  'tasks.total': s_en['intent.projectDetailWorkspace.listWorkTasks.list.column.total.label'],
  'tasks.prev': 'Previous',
  'tasks.next': 'Next',
  'tasks.page': 'Page',
  'tasks.loading': 'Loading work tasks…',
  'co.title': s_en['section.projectDetailWorkspace.sec-change-orders.title'],
  'co.empty': s_en['intent.projectDetailWorkspace.listChangeOrders.list.empty'],
  'co.filterStatus': s_en['intent.projectDetailWorkspace.listChangeOrders.list.filter.status.label'],
  'co.filterImpact': s_en['intent.projectDetailWorkspace.listChangeOrders.list.filter.impactType.label'],
  'co.apply': 'Apply filters',
  'co.colTitle': s_en['intent.projectDetailWorkspace.getChangeOrderDetail.list.column.title.label'],
  'co.colCost': s_en['intent.projectDetailWorkspace.getChangeOrderDetail.list.column.costAdjustment.label'],
  'co.colSchedule': s_en['intent.projectDetailWorkspace.getChangeOrderDetail.list.column.scheduleAdjustmentDays.label'],
  'co.colStatus': s_en['intent.projectDetailWorkspace.getChangeOrderDetail.list.column.status.label'],
  'co.colImpact': s_en['intent.projectDetailWorkspace.getChangeOrderDetail.list.column.impactType.label'],
  'co.total': s_en['intent.projectDetailWorkspace.listChangeOrders.list.column.total.label'],
  'co.prev': 'Previous',
  'co.next': 'Next',
  'co.page': 'Page',
  'co.loading': 'Loading change orders…',
  'co.detailTitle': 'Cost & schedule impact',
  'co.detailEmpty': 'Select a change order to inspect its cost and schedule impact.',
  'co.detailLoading': 'Loading change order detail…',
  'co.description': s_en['intent.projectDetailWorkspace.getChangeOrderDetail.list.column.description.label'],
  'co.projectBudget': s_en['intent.projectDetailWorkspace.getChangeOrderDetail.list.column.projectBudget.label'],
  'co.approvedAt': s_en['intent.projectDetailWorkspace.getChangeOrderDetail.list.column.approvedAt.label'],
  'co.rejectedAt': s_en['intent.projectDetailWorkspace.getChangeOrderDetail.list.column.rejectedAt.label'],
  'co.rejectionReason': s_en['intent.projectDetailWorkspace.getChangeOrderDetail.list.column.rejectionReason.label'],
  'co.affectsCosting': s_en['intent.projectDetailWorkspace.getChangeOrderDetail.list.column.affectsJobCosting.label'],
  'cost.title': s_en['section.projectDetailWorkspace.sec-cost-tracking.title'],
  'cost.timeTitle': s_en['organism.projectDetailWorkspace.listTimeLogs.title'],
  'cost.materialTitle': s_en['organism.projectDetailWorkspace.listMaterialUsages.title'],
  'cost.timeEmpty': s_en['intent.projectDetailWorkspace.listTimeLogs.list.empty'],
  'cost.materialEmpty': s_en['intent.projectDetailWorkspace.listMaterialUsages.list.empty'],
  'cost.filterWorker': s_en['intent.projectDetailWorkspace.listTimeLogs.list.filter.workerName.label'],
  'cost.filterDate': s_en['intent.projectDetailWorkspace.listTimeLogs.list.filter.logDate.label'],
  'cost.filterStatus': s_en['intent.projectDetailWorkspace.listTimeLogs.list.filter.status.label'],
  'cost.filterMatStatus': s_en['intent.projectDetailWorkspace.listMaterialUsages.list.filter.status.label'],
  'cost.applyTime': 'Apply filters',
  'cost.applyMat': 'Apply filters',
  'cost.colWorker': s_en['intent.projectDetailWorkspace.listTimeLogs.list.filter.workerName.label'],
  'cost.colHours': 'Hours',
  'cost.colLabor': 'Labor cost',
  'cost.colDate': s_en['intent.projectDetailWorkspace.listTimeLogs.list.filter.logDate.label'],
  'cost.colStatus': s_en['intent.projectDetailWorkspace.listTimeLogs.list.filter.status.label'],
  'cost.colMaterial': 'Material',
  'cost.colQty': 'Quantity',
  'cost.colUnitCost': 'Unit cost',
  'cost.timeTotal': s_en['intent.projectDetailWorkspace.listTimeLogs.list.column.total.label'],
  'cost.matTotal': s_en['intent.projectDetailWorkspace.listMaterialUsages.list.column.total.label'],
  'cost.prev': 'Previous',
  'cost.next': 'Next',
  'cost.page': 'Page',
  'cost.timeLoading': 'Loading time logs…',
  'cost.matLoading': 'Loading material usage…',
  'risk.title': s_en['section.projectDetailWorkspace.sec-delay-risk-insights.title'],
  'risk.generate': s_en['intent.projectDetailWorkspace.triggerDelayRiskSuggestions.form.action.triggerDelayRiskSuggestions'],
  'risk.generating': 'Generating analysis…',
  'risk.success': s_en['action.triggerDelayRiskSuggestions.success'],
  'risk.error': s_en['action.triggerDelayRiskSuggestions.error'],
  'risk.filterAck': s_en['intent.projectDetailWorkspace.listDelayRiskSuggestions.list.filter.acknowledged.label'],
  'risk.apply': 'Apply filter',
  'risk.empty': s_en['intent.projectDetailWorkspace.listDelayRiskSuggestions.list.empty'],
  'risk.loading': 'Loading delay-risk suggestions…',
  'risk.colTask': s_en['intent.projectDetailWorkspace.listDelayRiskSuggestions.list.column.workTaskTitle.label'],
  'risk.colLevel': s_en['intent.projectDetailWorkspace.listDelayRiskSuggestions.list.column.riskLevel.label'],
  'risk.colReason': s_en['intent.projectDetailWorkspace.listDelayRiskSuggestions.list.column.reason.label'],
  'risk.colAction': s_en['intent.projectDetailWorkspace.listDelayRiskSuggestions.list.column.suggestedAction.label'],
  'risk.colAck': s_en['intent.projectDetailWorkspace.listDelayRiskSuggestions.list.column.acknowledged.label'],
  'risk.needsReport': 'A status report must be in context before risk analysis can run.',
  'risk.ackAll': 'All',
  'risk.ackYes': 'Acknowledged',
  'risk.ackNo': 'Open',
  'yes': 'Yes',
  'no': 'No',
  'status.all': 'All statuses',
};
type PageMessageType = typeof pageMessage_en;
const s_pt_br = sharedMessages['pt-br'] ?? sharedFallback;
const pageMessage_pt_br: PageMessageType = {
  'header.loading': 'Carregando projeto…',
  'header.empty': 'Os detalhes do projeto ainda não estão disponíveis.',
  'header.client': s_pt_br['intent.projectDetailWorkspace.getProjectDetail.list.column.clientName.label'],
  'header.company': s_pt_br['intent.projectDetailWorkspace.getProjectDetail.list.column.clientCompany.label'],
  'header.site': s_pt_br['intent.projectDetailWorkspace.getProjectDetail.list.column.siteAddress.label'],
  'header.budget': s_pt_br['intent.projectDetailWorkspace.getProjectDetail.list.column.budget.label'],
  'header.start': s_pt_br['intent.projectDetailWorkspace.getProjectDetail.list.column.startDate.label'],
  'header.end': s_pt_br['intent.projectDetailWorkspace.getProjectDetail.list.column.endDate.label'],
  'header.status': s_pt_br['intent.projectDetailWorkspace.getProjectDetail.list.column.status.label'],
  'header.hold': s_pt_br['intent.projectDetailWorkspace.getProjectDetail.list.column.holdReason.label'],
  'tasks.title': s_pt_br['section.projectDetailWorkspace.sec-task-timeline.title'],
  'tasks.empty': s_pt_br['intent.projectDetailWorkspace.listWorkTasks.list.empty'],
  'tasks.filterStatus': s_pt_br['intent.projectDetailWorkspace.listWorkTasks.list.filter.status.label'],
  'tasks.filterWorker': 'Responsável',
  'tasks.apply': 'Aplicar filtros',
  'tasks.colTitle': 'Tarefa',
  'tasks.colAssignee': 'Responsável',
  'tasks.colStatus': s_pt_br['intent.projectDetailWorkspace.listWorkTasks.list.filter.status.label'],
  'tasks.colDue': 'Vencimento',
  'tasks.overdue': 'Atrasada',
  'tasks.total': s_pt_br['intent.projectDetailWorkspace.listWorkTasks.list.column.total.label'],
  'tasks.prev': 'Anterior',
  'tasks.next': 'Próxima',
  'tasks.page': 'Página',
  'tasks.loading': 'Carregando tarefas…',
  'co.title': s_pt_br['section.projectDetailWorkspace.sec-change-orders.title'],
  'co.empty': s_pt_br['intent.projectDetailWorkspace.listChangeOrders.list.empty'],
  'co.filterStatus': s_pt_br['intent.projectDetailWorkspace.listChangeOrders.list.filter.status.label'],
  'co.filterImpact': s_pt_br['intent.projectDetailWorkspace.listChangeOrders.list.filter.impactType.label'],
  'co.apply': 'Aplicar filtros',
  'co.colTitle': s_pt_br['intent.projectDetailWorkspace.getChangeOrderDetail.list.column.title.label'],
  'co.colCost': s_pt_br['intent.projectDetailWorkspace.getChangeOrderDetail.list.column.costAdjustment.label'],
  'co.colSchedule': s_pt_br['intent.projectDetailWorkspace.getChangeOrderDetail.list.column.scheduleAdjustmentDays.label'],
  'co.colStatus': s_pt_br['intent.projectDetailWorkspace.getChangeOrderDetail.list.column.status.label'],
  'co.colImpact': s_pt_br['intent.projectDetailWorkspace.getChangeOrderDetail.list.column.impactType.label'],
  'co.total': s_pt_br['intent.projectDetailWorkspace.listChangeOrders.list.column.total.label'],
  'co.prev': 'Anterior',
  'co.next': 'Próxima',
  'co.page': 'Página',
  'co.loading': 'Carregando ordens de mudança…',
  'co.detailTitle': 'Impacto de custo e prazo',
  'co.detailEmpty': 'Selecione uma ordem de mudança para inspecionar o impacto de custo e prazo.',
  'co.detailLoading': 'Carregando detalhe da ordem de mudança…',
  'co.description': s_pt_br['intent.projectDetailWorkspace.getChangeOrderDetail.list.column.description.label'],
  'co.projectBudget': s_pt_br['intent.projectDetailWorkspace.getChangeOrderDetail.list.column.projectBudget.label'],
  'co.approvedAt': s_pt_br['intent.projectDetailWorkspace.getChangeOrderDetail.list.column.approvedAt.label'],
  'co.rejectedAt': s_pt_br['intent.projectDetailWorkspace.getChangeOrderDetail.list.column.rejectedAt.label'],
  'co.rejectionReason': s_pt_br['intent.projectDetailWorkspace.getChangeOrderDetail.list.column.rejectionReason.label'],
  'co.affectsCosting': s_pt_br['intent.projectDetailWorkspace.getChangeOrderDetail.list.column.affectsJobCosting.label'],
  'cost.title': s_pt_br['section.projectDetailWorkspace.sec-cost-tracking.title'],
  'cost.timeTitle': s_pt_br['organism.projectDetailWorkspace.listTimeLogs.title'],
  'cost.materialTitle': s_pt_br['organism.projectDetailWorkspace.listMaterialUsages.title'],
  'cost.timeEmpty': s_pt_br['intent.projectDetailWorkspace.listTimeLogs.list.empty'],
  'cost.materialEmpty': s_pt_br['intent.projectDetailWorkspace.listMaterialUsages.list.empty'],
  'cost.filterWorker': s_pt_br['intent.projectDetailWorkspace.listTimeLogs.list.filter.workerName.label'],
  'cost.filterDate': s_pt_br['intent.projectDetailWorkspace.listTimeLogs.list.filter.logDate.label'],
  'cost.filterStatus': s_pt_br['intent.projectDetailWorkspace.listTimeLogs.list.filter.status.label'],
  'cost.filterMatStatus': s_pt_br['intent.projectDetailWorkspace.listMaterialUsages.list.filter.status.label'],
  'cost.applyTime': 'Aplicar filtros',
  'cost.applyMat': 'Aplicar filtros',
  'cost.colWorker': s_pt_br['intent.projectDetailWorkspace.listTimeLogs.list.filter.workerName.label'],
  'cost.colHours': 'Horas',
  'cost.colLabor': 'Custo de mão de obra',
  'cost.colDate': s_pt_br['intent.projectDetailWorkspace.listTimeLogs.list.filter.logDate.label'],
  'cost.colStatus': s_pt_br['intent.projectDetailWorkspace.listTimeLogs.list.filter.status.label'],
  'cost.colMaterial': 'Material',
  'cost.colQty': 'Quantidade',
  'cost.colUnitCost': 'Custo unitário',
  'cost.timeTotal': s_pt_br['intent.projectDetailWorkspace.listTimeLogs.list.column.total.label'],
  'cost.matTotal': s_pt_br['intent.projectDetailWorkspace.listMaterialUsages.list.column.total.label'],
  'cost.prev': 'Anterior',
  'cost.next': 'Próxima',
  'cost.page': 'Página',
  'cost.timeLoading': 'Carregando registros de tempo…',
  'cost.matLoading': 'Carregando uso de materiais…',
  'risk.title': s_pt_br['section.projectDetailWorkspace.sec-delay-risk-insights.title'],
  'risk.generate': s_pt_br['intent.projectDetailWorkspace.triggerDelayRiskSuggestions.form.action.triggerDelayRiskSuggestions'],
  'risk.generating': 'Gerando análise…',
  'risk.success': s_pt_br['action.triggerDelayRiskSuggestions.success'],
  'risk.error': s_pt_br['action.triggerDelayRiskSuggestions.error'],
  'risk.filterAck': s_pt_br['intent.projectDetailWorkspace.listDelayRiskSuggestions.list.filter.acknowledged.label'],
  'risk.apply': 'Aplicar filtro',
  'risk.empty': s_pt_br['intent.projectDetailWorkspace.listDelayRiskSuggestions.list.empty'],
  'risk.loading': 'Carregando sugestões de risco de atraso…',
  'risk.colTask': s_pt_br['intent.projectDetailWorkspace.listDelayRiskSuggestions.list.column.workTaskTitle.label'],
  'risk.colLevel': s_pt_br['intent.projectDetailWorkspace.listDelayRiskSuggestions.list.column.riskLevel.label'],
  'risk.colReason': s_pt_br['intent.projectDetailWorkspace.listDelayRiskSuggestions.list.column.reason.label'],
  'risk.colAction': s_pt_br['intent.projectDetailWorkspace.listDelayRiskSuggestions.list.column.suggestedAction.label'],
  'risk.colAck': s_pt_br['intent.projectDetailWorkspace.listDelayRiskSuggestions.list.column.acknowledged.label'],
  'risk.needsReport': 'É necessário um relatório de status no contexto para gerar a análise de risco.',
  'risk.ackAll': 'Todos',
  'risk.ackYes': 'Reconhecidos',
  'risk.ackNo': 'Abertos',
  'yes': 'Sim',
  'no': 'Não',
  'status.all': 'Todos os status',
};
const s_es = sharedMessages['es'] ?? sharedFallback;
const pageMessage_es: PageMessageType = {
  'header.loading': 'Cargando proyecto…',
  'header.empty': 'Los detalles del proyecto aún no están disponibles.',
  'header.client': s_es['intent.projectDetailWorkspace.getProjectDetail.list.column.clientName.label'],
  'header.company': s_es['intent.projectDetailWorkspace.getProjectDetail.list.column.clientCompany.label'],
  'header.site': s_es['intent.projectDetailWorkspace.getProjectDetail.list.column.siteAddress.label'],
  'header.budget': s_es['intent.projectDetailWorkspace.getProjectDetail.list.column.budget.label'],
  'header.start': s_es['intent.projectDetailWorkspace.getProjectDetail.list.column.startDate.label'],
  'header.end': s_es['intent.projectDetailWorkspace.getProjectDetail.list.column.endDate.label'],
  'header.status': s_es['intent.projectDetailWorkspace.getProjectDetail.list.column.status.label'],
  'header.hold': s_es['intent.projectDetailWorkspace.getProjectDetail.list.column.holdReason.label'],
  'tasks.title': s_es['section.projectDetailWorkspace.sec-task-timeline.title'],
  'tasks.empty': s_es['intent.projectDetailWorkspace.listWorkTasks.list.empty'],
  'tasks.filterStatus': s_es['intent.projectDetailWorkspace.listWorkTasks.list.filter.status.label'],
  'tasks.filterWorker': 'Asignado',
  'tasks.apply': 'Aplicar filtros',
  'tasks.colTitle': 'Tarea',
  'tasks.colAssignee': 'Asignado',
  'tasks.colStatus': s_es['intent.projectDetailWorkspace.listWorkTasks.list.filter.status.label'],
  'tasks.colDue': 'Vencimiento',
  'tasks.overdue': 'Atrasada',
  'tasks.total': s_es['intent.projectDetailWorkspace.listWorkTasks.list.column.total.label'],
  'tasks.prev': 'Anterior',
  'tasks.next': 'Siguiente',
  'tasks.page': 'Página',
  'tasks.loading': 'Cargando tareas…',
  'co.title': s_es['section.projectDetailWorkspace.sec-change-orders.title'],
  'co.empty': s_es['intent.projectDetailWorkspace.listChangeOrders.list.empty'],
  'co.filterStatus': s_es['intent.projectDetailWorkspace.listChangeOrders.list.filter.status.label'],
  'co.filterImpact': s_es['intent.projectDetailWorkspace.listChangeOrders.list.filter.impactType.label'],
  'co.apply': 'Aplicar filtros',
  'co.colTitle': s_es['intent.projectDetailWorkspace.getChangeOrderDetail.list.column.title.label'],
  'co.colCost': s_es['intent.projectDetailWorkspace.getChangeOrderDetail.list.column.costAdjustment.label'],
  'co.colSchedule': s_es['intent.projectDetailWorkspace.getChangeOrderDetail.list.column.scheduleAdjustmentDays.label'],
  'co.colStatus': s_es['intent.projectDetailWorkspace.getChangeOrderDetail.list.column.status.label'],
  'co.colImpact': s_es['intent.projectDetailWorkspace.getChangeOrderDetail.list.column.impactType.label'],
  'co.total': s_es['intent.projectDetailWorkspace.listChangeOrders.list.column.total.label'],
  'co.prev': 'Anterior',
  'co.next': 'Siguiente',
  'co.page': 'Página',
  'co.loading': 'Cargando órdenes de cambio…',
  'co.detailTitle': 'Impacto de costo y plazo',
  'co.detailEmpty': 'Seleccione una orden de cambio para inspeccionar el impacto de costo y plazo.',
  'co.detailLoading': 'Cargando detalle de la orden de cambio…',
  'co.description': s_es['intent.projectDetailWorkspace.getChangeOrderDetail.list.column.description.label'],
  'co.projectBudget': s_es['intent.projectDetailWorkspace.getChangeOrderDetail.list.column.projectBudget.label'],
  'co.approvedAt': s_es['intent.projectDetailWorkspace.getChangeOrderDetail.list.column.approvedAt.label'],
  'co.rejectedAt': s_es['intent.projectDetailWorkspace.getChangeOrderDetail.list.column.rejectedAt.label'],
  'co.rejectionReason': s_es['intent.projectDetailWorkspace.getChangeOrderDetail.list.column.rejectionReason.label'],
  'co.affectsCosting': s_es['intent.projectDetailWorkspace.getChangeOrderDetail.list.column.affectsJobCosting.label'],
  'cost.title': s_es['section.projectDetailWorkspace.sec-cost-tracking.title'],
  'cost.timeTitle': s_es['organism.projectDetailWorkspace.listTimeLogs.title'],
  'cost.materialTitle': s_es['organism.projectDetailWorkspace.listMaterialUsages.title'],
  'cost.timeEmpty': s_es['intent.projectDetailWorkspace.listTimeLogs.list.empty'],
  'cost.materialEmpty': s_es['intent.projectDetailWorkspace.listMaterialUsages.list.empty'],
  'cost.filterWorker': s_es['intent.projectDetailWorkspace.listTimeLogs.list.filter.workerName.label'],
  'cost.filterDate': s_es['intent.projectDetailWorkspace.listTimeLogs.list.filter.logDate.label'],
  'cost.filterStatus': s_es['intent.projectDetailWorkspace.listTimeLogs.list.filter.status.label'],
  'cost.filterMatStatus': s_es['intent.projectDetailWorkspace.listMaterialUsages.list.filter.status.label'],
  'cost.applyTime': 'Aplicar filtros',
  'cost.applyMat': 'Aplicar filtros',
  'cost.colWorker': s_es['intent.projectDetailWorkspace.listTimeLogs.list.filter.workerName.label'],
  'cost.colHours': 'Horas',
  'cost.colLabor': 'Costo laboral',
  'cost.colDate': s_es['intent.projectDetailWorkspace.listTimeLogs.list.filter.logDate.label'],
  'cost.colStatus': s_es['intent.projectDetailWorkspace.listTimeLogs.list.filter.status.label'],
  'cost.colMaterial': 'Material',
  'cost.colQty': 'Cantidad',
  'cost.colUnitCost': 'Costo unitario',
  'cost.timeTotal': s_es['intent.projectDetailWorkspace.listTimeLogs.list.column.total.label'],
  'cost.matTotal': s_es['intent.projectDetailWorkspace.listMaterialUsages.list.column.total.label'],
  'cost.prev': 'Anterior',
  'cost.next': 'Siguiente',
  'cost.page': 'Página',
  'cost.timeLoading': 'Cargando registros de tiempo…',
  'cost.matLoading': 'Cargando uso de materiales…',
  'risk.title': s_es['section.projectDetailWorkspace.sec-delay-risk-insights.title'],
  'risk.generate': s_es['intent.projectDetailWorkspace.triggerDelayRiskSuggestions.form.action.triggerDelayRiskSuggestions'],
  'risk.generating': 'Generando análisis…',
  'risk.success': s_es['action.triggerDelayRiskSuggestions.success'],
  'risk.error': s_es['action.triggerDelayRiskSuggestions.error'],
  'risk.filterAck': s_es['intent.projectDetailWorkspace.listDelayRiskSuggestions.list.filter.acknowledged.label'],
  'risk.apply': 'Aplicar filtro',
  'risk.empty': s_es['intent.projectDetailWorkspace.listDelayRiskSuggestions.list.empty'],
  'risk.loading': 'Cargando sugerencias de riesgo de retraso…',
  'risk.colTask': s_es['intent.projectDetailWorkspace.listDelayRiskSuggestions.list.column.workTaskTitle.label'],
  'risk.colLevel': s_es['intent.projectDetailWorkspace.listDelayRiskSuggestions.list.column.riskLevel.label'],
  'risk.colReason': s_es['intent.projectDetailWorkspace.listDelayRiskSuggestions.list.column.reason.label'],
  'risk.colAction': s_es['intent.projectDetailWorkspace.listDelayRiskSuggestions.list.column.suggestedAction.label'],
  'risk.colAck': s_es['intent.projectDetailWorkspace.listDelayRiskSuggestions.list.column.acknowledged.label'],
  'risk.needsReport': 'Se necesita un informe de estado en contexto para ejecutar el análisis de riesgo.',
  'risk.ackAll': 'Todos',
  'risk.ackYes': 'Reconocidos',
  'risk.ackNo': 'Abiertos',
  'yes': 'Sí',
  'no': 'No',
  'status.all': 'Todos los estados',
};
const pageMessages: { [key: string]: PageMessageType } = { 'en': pageMessage_en, 'pt-br': pageMessage_pt_br, 'es': pageMessage_es };
/// **collab_i18n_end**

const pageFallback = pageMessages[Object.keys(pageMessages)[0]];

type WorkTaskRow = ListWorkTasksOutput['workTasks'][number];
type ChangeOrderRow = ListChangeOrdersOutput['changeOrders'][number];
type TimeLogRow = ListTimeLogsOutput['timeLogs'][number];
type MaterialUsageRow = ListMaterialUsagesOutput['materialUsages'][number];

@customElement('build-flow-fsm--web--desktop--page21--project-detail-workspace-102045')
export class BuildFlowFsmDesktopPage21ProjectDetailWorkspacePage extends BuildFlowFsmProjectDetailWorkspaceBase {
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
  render() {
    const msg = this.msg;
    return html`
      <div class="min-h-full w-full bg-[var(--page-bg,#f8fafc)] text-[var(--text-default,#0f172a)]">
        <div class="mx-auto flex w-full max-w-7xl flex-col gap-6 p-4 md:p-6">
          ${this.renderProjectHeader()}
          ${this.renderTaskTimeline()}
          ${this.renderChangeOrders()}
          ${this.renderCostTracking()}
          ${this.renderDelayRiskInsights()}
        </div>
        <span class="sr-only">${msg['tasks.title']}</span>
      </div>
    `;
  }

  renderProjectHeader() {
    const msg = this.msg;
    const loading = this.getProjectDetailState === 'loading';
    const project: GetProjectDetailOutput | null = this.getProjectDetailData;

    if (loading && !project) {
      return html`
        <section class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-5 shadow-sm">
          <p class="text-sm text-[var(--text-muted,#64748b)]">${msg['header.loading']}</p>
        </section>
      `;
    }

    if (!project) {
      return html`
        <section class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-5 shadow-sm">
          <p class="text-sm text-[var(--text-muted,#64748b)]">${msg['header.empty']}</p>
        </section>
      `;
    }

    const name = project.name ?? '';
    const status = project.status ?? '';
    const holdReason = project.holdReason ?? '';

    return html`
      <section class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-5 shadow-sm">
        <div class="flex flex-wrap items-start justify-between gap-3">
          <div class="min-w-0 flex-1">
            <h1 class="truncate text-2xl font-semibold text-[var(--text-strong,#020617)]">${name}</h1>
            <p class="mt-1 text-sm text-[var(--text-muted,#64748b)]">
              ${msg['header.client']}: ${project.clientName ?? '—'}
              ${project.clientCompany ? html` · ${msg['header.company']}: ${project.clientCompany}` : nothing}
            </p>
          </div>
          ${status
            ? html`<span class="inline-flex items-center rounded-full bg-[var(--status-neutral-bg,#f1f5f9)] px-3 py-1 text-xs font-medium text-[var(--status-neutral-text,#334155)]">${status}</span>`
            : nothing}
        </div>
        <dl class="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <dt class="text-xs uppercase tracking-wide text-[var(--text-muted,#64748b)]">${msg['header.site']}</dt>
            <dd class="mt-0.5 text-sm text-[var(--text-default,#0f172a)]">${project.siteAddress ?? '—'}</dd>
          </div>
          <div>
            <dt class="text-xs uppercase tracking-wide text-[var(--text-muted,#64748b)]">${msg['header.budget']}</dt>
            <dd class="mt-0.5 text-sm text-[var(--text-default,#0f172a)]">${project.budget ?? '—'}</dd>
          </div>
          <div>
            <dt class="text-xs uppercase tracking-wide text-[var(--text-muted,#64748b)]">${msg['header.start']}</dt>
            <dd class="mt-0.5 text-sm text-[var(--text-default,#0f172a)]">${project.startDate ?? '—'}</dd>
          </div>
          <div>
            <dt class="text-xs uppercase tracking-wide text-[var(--text-muted,#64748b)]">${msg['header.end']}</dt>
            <dd class="mt-0.5 text-sm text-[var(--text-default,#0f172a)]">${project.endDate ?? '—'}</dd>
          </div>
        </dl>
        ${holdReason
          ? html`
              <p class="mt-3 rounded-md bg-[var(--status-warning-bg,#fffbeb)] px-3 py-2 text-sm text-[var(--status-warning-text,#92400e)]">
                ${msg['header.hold']}: ${holdReason}
              </p>
            `
          : nothing}
      </section>
    `;
  }

  renderTaskTimeline() {
    const msg = this.msg;
    const loading = this.listWorkTasksState === 'loading';
    const rows: WorkTaskRow[] = this.listWorkTasksData?.workTasks ?? [];
    const total = this.listWorkTasksData?.total ?? 0;
    const pageNum = Number(this.listWorkTasksPage || '1');
    const safePage = Number.isFinite(pageNum) && pageNum > 0 ? pageNum : 1;
    const pageSizeNum = Number(this.listWorkTasksPageSize || '10');
    const safeSize = Number.isFinite(pageSizeNum) && pageSizeNum > 0 ? pageSizeNum : 10;
    const maxPage = Math.max(1, Math.ceil(total / safeSize) || 1);
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    return html`
      <section class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-5 shadow-sm">
        <div class="mb-4 flex flex-wrap items-center justify-between gap-2">
          <h2 class="text-lg font-semibold text-[var(--text-strong,#020617)]">${msg['tasks.title']}</h2>
          <span class="text-xs text-[var(--text-muted,#64748b)]">${msg['tasks.total']}: ${total}</span>
        </div>
        <div class="mb-4 flex flex-wrap items-end gap-3">
          <label class="flex min-w-[10rem] flex-col gap-1 text-xs text-[var(--text-muted,#64748b)]">
            ${msg['tasks.filterStatus']}
            <select
              class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-sm text-[var(--text-default,#0f172a)]"
              .value=${this.listWorkTasksStatus}
              @change=${(e: Event) => this.handleListWorkTasksStatusChange(e)}
            >
              <option value="">${msg['status.all']}</option>
              <option value="pending">pending</option>
              <option value="in_progress">in_progress</option>
              <option value="blocked">blocked</option>
              <option value="done">done</option>
              <option value="cancelled">cancelled</option>
            </select>
          </label>
          <label class="flex min-w-[12rem] flex-1 flex-col gap-1 text-xs text-[var(--text-muted,#64748b)]">
            ${msg['tasks.filterWorker']}
            <input
              type="text"
              class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-sm text-[var(--text-default,#0f172a)]"
              .value=${this.listWorkTasksAssignedWorkerId}
              @input=${(e: Event) => this.handleListWorkTasksAssignedWorkerIdChange(e)}
            />
          </label>
          <button
            type="button"
            class="rounded-md bg-[var(--button-secondary-bg,#e2e8f0)] px-4 py-2 text-sm font-medium text-[var(--button-secondary-text,#0f172a)] disabled:opacity-60"
            ?disabled=${loading}
            @click=${(e: Event) => this.handleListWorkTasksClick(e)}
          >
            ${msg['tasks.apply']}
          </button>
        </div>
        ${loading
          ? html`<p class="py-6 text-sm text-[var(--text-muted,#64748b)]">${msg['tasks.loading']}</p>`
          : rows.length === 0
            ? html`<p class="py-6 text-sm text-[var(--text-muted,#64748b)]">${msg['tasks.empty']}</p>`
            : html`
                <div class="overflow-x-auto">
                  <table class="min-w-full border-collapse text-left text-sm">
                    <thead>
                      <tr class="border-b border-[var(--border-subtle,#e2e8f0)] text-xs uppercase tracking-wide text-[var(--text-muted,#64748b)]">
                        <th class="px-2 py-2 font-medium">${msg['tasks.colTitle']}</th>
                        <th class="px-2 py-2 font-medium">${msg['tasks.colAssignee']}</th>
                        <th class="px-2 py-2 font-medium">${msg['tasks.colStatus']}</th>
                        <th class="px-2 py-2 font-medium">${msg['tasks.colDue']}</th>
                      </tr>
                    </thead>
                    <tbody>
                      ${rows.map((row: WorkTaskRow) => {
                        const dueRaw = row.dueDate ? String(row.dueDate) : '';
                        let overdue = false;
                        if (dueRaw) {
                          const due = new Date(dueRaw);
                          if (!Number.isNaN(due.getTime())) {
                            due.setHours(0, 0, 0, 0);
                            const st = row.status ? String(row.status).toLowerCase() : '';
                            overdue = due.getTime() < today.getTime() && st !== 'done' && st !== 'cancelled' && st !== 'completed';
                          }
                        }
                        return html`
                          <tr class="border-b border-[var(--border-subtle,#e2e8f0)] ${overdue ? 'bg-[var(--status-warning-bg,#fffbeb)]' : ''}">
                            <td class="px-2 py-2 text-[var(--text-default,#0f172a)]">
                              ${row.title ?? '—'}
                              ${overdue
                                ? html`<span class="ml-2 inline-flex rounded-full bg-[var(--status-warning-bg,#fffbeb)] px-2 py-0.5 text-xs text-[var(--status-warning-text,#92400e)]">${msg['tasks.overdue']}</span>`
                                : nothing}
                            </td>
                            <td class="px-2 py-2 text-[var(--text-muted,#64748b)]">${row.assignedWorkerId ?? '—'}</td>
                            <td class="px-2 py-2">
                              <span class="inline-flex rounded-full bg-[var(--status-neutral-bg,#f1f5f9)] px-2 py-0.5 text-xs text-[var(--status-neutral-text,#334155)]">${row.status ?? '—'}</span>
                            </td>
                            <td class="px-2 py-2 text-[var(--text-default,#0f172a)]">${dueRaw || '—'}</td>
                          </tr>
                        `;
                      })}
                    </tbody>
                  </table>
                </div>
              `}
        <div class="mt-4 flex flex-wrap items-center justify-between gap-2">
          <span class="text-xs text-[var(--text-muted,#64748b)]">${msg['tasks.page']} ${safePage} / ${maxPage}</span>
          <div class="flex gap-2">
            <button
              type="button"
              class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] px-3 py-1.5 text-sm text-[var(--text-default,#0f172a)] disabled:opacity-50"
              ?disabled=${loading || safePage <= 1}
              @click=${() => {
                this.setListWorkTasksPage(String(Math.max(1, safePage - 1)));
                this.handleListWorkTasksClick();
              }}
            >
              ${msg['tasks.prev']}
            </button>
            <button
              type="button"
              class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] px-3 py-1.5 text-sm text-[var(--text-default,#0f172a)] disabled:opacity-50"
              ?disabled=${loading || safePage >= maxPage}
              @click=${() => {
                this.setListWorkTasksPage(String(safePage + 1));
                this.handleListWorkTasksClick();
              }}
            >
              ${msg['tasks.next']}
            </button>
          </div>
        </div>
      </section>
    `;
  }

  renderChangeOrders() {
    const msg = this.msg;
    const loading = this.listChangeOrdersState === 'loading';
    const rows: ChangeOrderRow[] = this.listChangeOrdersData?.changeOrders ?? [];
    const total = this.listChangeOrdersData?.total ?? 0;
    const pageNum = Number(this.listChangeOrdersPage || '1');
    const safePage = Number.isFinite(pageNum) && pageNum > 0 ? pageNum : 1;
    const pageSizeNum = Number(this.listChangeOrdersPageSize || '10');
    const safeSize = Number.isFinite(pageSizeNum) && pageSizeNum > 0 ? pageSizeNum : 10;
    const maxPage = Math.max(1, Math.ceil(total / safeSize) || 1);
    const selectedId = this.getChangeOrderDetailChangeOrderId;

    return html`
      <section class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-5 shadow-sm">
        <div class="mb-4 flex flex-wrap items-center justify-between gap-2">
          <h2 class="text-lg font-semibold text-[var(--text-strong,#020617)]">${msg['co.title']}</h2>
          <span class="text-xs text-[var(--text-muted,#64748b)]">${msg['co.total']}: ${total}</span>
        </div>
        <div class="mb-4 flex flex-wrap items-end gap-3">
          <label class="flex min-w-[10rem] flex-col gap-1 text-xs text-[var(--text-muted,#64748b)]">
            ${msg['co.filterStatus']}
            <select
              class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-sm text-[var(--text-default,#0f172a)]"
              .value=${this.listChangeOrdersStatus}
              @change=${(e: Event) => this.handleListChangeOrdersStatusChange(e)}
            >
              <option value="">${msg['status.all']}</option>
              <option value="draft">draft</option>
              <option value="submitted">submitted</option>
              <option value="approved">approved</option>
              <option value="rejected">rejected</option>
            </select>
          </label>
          <label class="flex min-w-[10rem] flex-col gap-1 text-xs text-[var(--text-muted,#64748b)]">
            ${msg['co.filterImpact']}
            <select
              class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-sm text-[var(--text-default,#0f172a)]"
              .value=${this.listChangeOrdersImpactType}
              @change=${(e: Event) => this.handleListChangeOrdersImpactTypeChange(e)}
            >
              <option value="">${msg['status.all']}</option>
              <option value="cost">cost</option>
              <option value="schedule">schedule</option>
              <option value="both">both</option>
            </select>
          </label>
          <button
            type="button"
            class="rounded-md bg-[var(--button-secondary-bg,#e2e8f0)] px-4 py-2 text-sm font-medium text-[var(--button-secondary-text,#0f172a)] disabled:opacity-60"
            ?disabled=${loading}
            @click=${(e: Event) => this.handleListChangeOrdersClick(e)}
          >
            ${msg['co.apply']}
          </button>
        </div>
        <div class="grid grid-cols-1 gap-4 lg:grid-cols-3">
          <div class="lg:col-span-2">
            ${loading
              ? html`<p class="py-6 text-sm text-[var(--text-muted,#64748b)]">${msg['co.loading']}</p>`
              : rows.length === 0
                ? html`<p class="py-6 text-sm text-[var(--text-muted,#64748b)]">${msg['co.empty']}</p>`
                : html`
                    <div class="overflow-x-auto">
                      <table class="min-w-full border-collapse text-left text-sm">
                        <thead>
                          <tr class="border-b border-[var(--border-subtle,#e2e8f0)] text-xs uppercase tracking-wide text-[var(--text-muted,#64748b)]">
                            <th class="px-2 py-2 font-medium">${msg['co.colTitle']}</th>
                            <th class="px-2 py-2 font-medium">${msg['co.colCost']}</th>
                            <th class="px-2 py-2 font-medium">${msg['co.colSchedule']}</th>
                            <th class="px-2 py-2 font-medium">${msg['co.colImpact']}</th>
                            <th class="px-2 py-2 font-medium">${msg['co.colStatus']}</th>
                          </tr>
                        </thead>
                        <tbody>
                          ${rows.map((row: ChangeOrderRow) => {
                            const id = row.changeOrderId ? String(row.changeOrderId) : '';
                            const isSelected = id !== '' && id === selectedId;
                            return html`
                              <tr
                                class="cursor-pointer border-b border-[var(--border-subtle,#e2e8f0)] ${isSelected
                                  ? 'bg-[var(--selected-bg,#e0f2fe)] text-[var(--selected-text,#0c4a6e)]'
                                  : 'hover:bg-[var(--surface-alt-bg,#f8fafc)]'}"
                                @click=${() => {
                                  if (!id) return;
                                  this.setGetChangeOrderDetailChangeOrderId(id);
                                  this.handleGetChangeOrderDetailClick();
                                }}
                              >
                                <td class="px-2 py-2 font-medium">${row.title ?? '—'}</td>
                                <td class="px-2 py-2">${row.costAdjustment ?? '—'}</td>
                                <td class="px-2 py-2">${row.scheduleAdjustmentDays ?? '—'}</td>
                                <td class="px-2 py-2">${row.impactType ?? '—'}</td>
                                <td class="px-2 py-2">
                                  <span class="inline-flex rounded-full bg-[var(--status-neutral-bg,#f1f5f9)] px-2 py-0.5 text-xs text-[var(--status-neutral-text,#334155)]">${row.status ?? '—'}</span>
                                </td>
                              </tr>
                            `;
                          })}
                        </tbody>
                      </table>
                    </div>
                  `}
            <div class="mt-4 flex flex-wrap items-center justify-between gap-2">
              <span class="text-xs text-[var(--text-muted,#64748b)]">${msg['co.page']} ${safePage} / ${maxPage}</span>
              <div class="flex gap-2">
                <button
                  type="button"
                  class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] px-3 py-1.5 text-sm text-[var(--text-default,#0f172a)] disabled:opacity-50"
                  ?disabled=${loading || safePage <= 1}
                  @click=${() => {
                    this.setListChangeOrdersPage(String(Math.max(1, safePage - 1)));
                    this.handleListChangeOrdersClick();
                  }}
                >
                  ${msg['co.prev']}
                </button>
                <button
                  type="button"
                  class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] px-3 py-1.5 text-sm text-[var(--text-default,#0f172a)] disabled:opacity-50"
                  ?disabled=${loading || safePage >= maxPage}
                  @click=${() => {
                    this.setListChangeOrdersPage(String(safePage + 1));
                    this.handleListChangeOrdersClick();
                  }}
                >
                  ${msg['co.next']}
                </button>
              </div>
            </div>
          </div>
          <div class="rounded-md border border-[var(--border-subtle,#e2e8f0)] bg-[var(--surface-alt-bg,#f8fafc)] p-4">
            ${this.renderChangeOrderDetail()}
          </div>
        </div>
      </section>
    `;
  }

  renderChangeOrderDetail() {
    const msg = this.msg;
    const loading = this.getChangeOrderDetailState === 'loading';
    const detail: GetChangeOrderDetailOutput | null = this.getChangeOrderDetailData;

    if (loading && !detail) {
      return html`<p class="text-sm text-[var(--text-muted,#64748b)]">${msg['co.detailLoading']}</p>`;
    }

    if (!detail) {
      return html`
        <h3 class="text-sm font-semibold text-[var(--text-strong,#020617)]">${msg['co.detailTitle']}</h3>
        <p class="mt-2 text-sm text-[var(--text-muted,#64748b)]">${msg['co.detailEmpty']}</p>
      `;
    }

    const affects = detail.affectsJobCosting === true ? msg['yes'] : detail.affectsJobCosting === false ? msg['no'] : '—';

    return html`
      <h3 class="text-sm font-semibold text-[var(--text-strong,#020617)]">${detail.title ?? msg['co.detailTitle']}</h3>
      <p class="mt-1">
        <span class="inline-flex rounded-full bg-[var(--status-info-bg,#eff6ff)] px-2 py-0.5 text-xs text-[var(--status-info-text,#1e40af)]">${detail.status ?? '—'}</span>
      </p>
      <dl class="mt-3 flex flex-col gap-2 text-sm">
        <div>
          <dt class="text-xs text-[var(--text-muted,#64748b)]">${msg['co.description']}</dt>
          <dd class="text-[var(--text-default,#0f172a)]">${detail.description ?? '—'}</dd>
        </div>
        <div>
          <dt class="text-xs text-[var(--text-muted,#64748b)]">${msg['co.colCost']}</dt>
          <dd class="font-medium text-[var(--text-default,#0f172a)]">${detail.costAdjustment ?? '—'}</dd>
        </div>
        <div>
          <dt class="text-xs text-[var(--text-muted,#64748b)]">${msg['co.projectBudget']}</dt>
          <dd class="text-[var(--text-default,#0f172a)]">${detail.projectBudget ?? '—'}</dd>
        </div>
        <div>
          <dt class="text-xs text-[var(--text-muted,#64748b)]">${msg['co.colSchedule']}</dt>
          <dd class="text-[var(--text-default,#0f172a)]">${detail.scheduleAdjustmentDays ?? '—'}</dd>
        </div>
        <div>
          <dt class="text-xs text-[var(--text-muted,#64748b)]">${msg['co.colImpact']}</dt>
          <dd class="text-[var(--text-default,#0f172a)]">${detail.impactType ?? '—'}</dd>
        </div>
        <div>
          <dt class="text-xs text-[var(--text-muted,#64748b)]">${msg['co.affectsCosting']}</dt>
          <dd class="text-[var(--text-default,#0f172a)]">${affects}</dd>
        </div>
        ${detail.approvedAt
          ? html`
              <div>
                <dt class="text-xs text-[var(--text-muted,#64748b)]">${msg['co.approvedAt']}</dt>
                <dd class="text-[var(--text-default,#0f172a)]">${detail.approvedAt}</dd>
              </div>
            `
          : nothing}
        ${detail.rejectedAt
          ? html`
              <div>
                <dt class="text-xs text-[var(--text-muted,#64748b)]">${msg['co.rejectedAt']}</dt>
                <dd class="text-[var(--text-default,#0f172a)]">${detail.rejectedAt}</dd>
              </div>
            `
          : nothing}
        ${detail.rejectionReason
          ? html`
              <div>
                <dt class="text-xs text-[var(--text-muted,#64748b)]">${msg['co.rejectionReason']}</dt>
                <dd class="text-[var(--status-error-text,#b91c1c)]">${detail.rejectionReason}</dd>
              </div>
            `
          : nothing}
      </dl>
    `;
  }

  renderCostTracking() {
    const msg = this.msg;
    return html`
      <section class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-5 shadow-sm">
        <h2 class="mb-4 text-lg font-semibold text-[var(--text-strong,#020617)]">${msg['cost.title']}</h2>
        <div class="grid grid-cols-1 gap-6 xl:grid-cols-2">
          ${this.renderTimeLogs()}
          ${this.renderMaterialUsages()}
        </div>
      </section>
    `;
  }

  renderTimeLogs() {
    const msg = this.msg;
    const loading = this.listTimeLogsState === 'loading';
    const rows: TimeLogRow[] = this.listTimeLogsData?.timeLogs ?? [];
    const total = this.listTimeLogsData?.total ?? 0;
    const pageNum = Number(this.listTimeLogsPage || '1');
    const safePage = Number.isFinite(pageNum) && pageNum > 0 ? pageNum : 1;
    const pageSizeNum = Number(this.listTimeLogsPageSize || '10');
    const safeSize = Number.isFinite(pageSizeNum) && pageSizeNum > 0 ? pageSizeNum : 10;
    const maxPage = Math.max(1, Math.ceil(total / safeSize) || 1);

    return html`
      <div>
        <div class="mb-3 flex flex-wrap items-center justify-between gap-2">
          <h3 class="text-sm font-semibold text-[var(--text-strong,#020617)]">${msg['cost.timeTitle']}</h3>
          <span class="text-xs text-[var(--text-muted,#64748b)]">${msg['cost.timeTotal']}: ${total}</span>
        </div>
        <div class="mb-3 flex flex-wrap items-end gap-2">
          <label class="flex min-w-[8rem] flex-1 flex-col gap-1 text-xs text-[var(--text-muted,#64748b)]">
            ${msg['cost.filterWorker']}
            <input
              type="text"
              class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-2 py-1.5 text-sm text-[var(--text-default,#0f172a)]"
              .value=${this.listTimeLogsWorkerName}
              @input=${(e: Event) => this.handleListTimeLogsWorkerNameChange(e)}
            />
          </label>
          <label class="flex min-w-[8rem] flex-col gap-1 text-xs text-[var(--text-muted,#64748b)]">
            ${msg['cost.filterDate']}
            <input
              type="date"
              class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-2 py-1.5 text-sm text-[var(--text-default,#0f172a)]"
              .value=${this.listTimeLogsLogDate}
              @change=${(e: Event) => this.handleListTimeLogsLogDateChange(e)}
            />
          </label>
          <label class="flex min-w-[8rem] flex-col gap-1 text-xs text-[var(--text-muted,#64748b)]">
            ${msg['cost.filterStatus']}
            <select
              class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-2 py-1.5 text-sm text-[var(--text-default,#0f172a)]"
              .value=${this.listTimeLogsStatus}
              @change=${(e: Event) => this.handleListTimeLogsStatusChange(e)}
            >
              <option value="">${msg['status.all']}</option>
              <option value="pending">pending</option>
              <option value="approved">approved</option>
              <option value="rejected">rejected</option>
            </select>
          </label>
          <button
            type="button"
            class="rounded-md bg-[var(--button-secondary-bg,#e2e8f0)] px-3 py-1.5 text-sm font-medium text-[var(--button-secondary-text,#0f172a)] disabled:opacity-60"
            ?disabled=${loading}
            @click=${(e: Event) => this.handleListTimeLogsClick(e)}
          >
            ${msg['cost.applyTime']}
          </button>
        </div>
        ${loading
          ? html`<p class="py-4 text-sm text-[var(--text-muted,#64748b)]">${msg['cost.timeLoading']}</p>`
          : rows.length === 0
            ? html`<p class="py-4 text-sm text-[var(--text-muted,#64748b)]">${msg['cost.timeEmpty']}</p>`
            : html`
                <div class="overflow-x-auto">
                  <table class="min-w-full border-collapse text-left text-sm">
                    <thead>
                      <tr class="border-b border-[var(--border-subtle,#e2e8f0)] text-xs uppercase tracking-wide text-[var(--text-muted,#64748b)]">
                        <th class="px-2 py-2 font-medium">${msg['cost.colWorker']}</th>
                        <th class="px-2 py-2 font-medium">${msg['cost.colDate']}</th>
                        <th class="px-2 py-2 font-medium">${msg['cost.colHours']}</th>
                        <th class="px-2 py-2 font-medium">${msg['cost.colLabor']}</th>
                        <th class="px-2 py-2 font-medium">${msg['cost.colStatus']}</th>
                      </tr>
                    </thead>
                    <tbody>
                      ${rows.map(
                        (row: TimeLogRow) => html`
                          <tr class="border-b border-[var(--border-subtle,#e2e8f0)]">
                            <td class="px-2 py-2">${row.workerName ?? '—'}</td>
                            <td class="px-2 py-2">${row.logDate ?? '—'}</td>
                            <td class="px-2 py-2">${row.hoursWorked ?? '—'}</td>
                            <td class="px-2 py-2">${row.laborCost ?? '—'}</td>
                            <td class="px-2 py-2">
                              <span class="inline-flex rounded-full bg-[var(--status-neutral-bg,#f1f5f9)] px-2 py-0.5 text-xs text-[var(--status-neutral-text,#334155)]">${row.status ?? '—'}</span>
                            </td>
                          </tr>
                        `,
                      )}
                    </tbody>
                  </table>
                </div>
              `}
        <div class="mt-3 flex flex-wrap items-center justify-between gap-2">
          <span class="text-xs text-[var(--text-muted,#64748b)]">${msg['cost.page']} ${safePage} / ${maxPage}</span>
          <div class="flex gap-2">
            <button
              type="button"
              class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] px-3 py-1.5 text-sm disabled:opacity-50"
              ?disabled=${loading || safePage <= 1}
              @click=${() => {
                this.setListTimeLogsPage(String(Math.max(1, safePage - 1)));
                this.handleListTimeLogsClick();
              }}
            >
              ${msg['cost.prev']}
            </button>
            <button
              type="button"
              class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] px-3 py-1.5 text-sm disabled:opacity-50"
              ?disabled=${loading || safePage >= maxPage}
              @click=${() => {
                this.setListTimeLogsPage(String(safePage + 1));
                this.handleListTimeLogsClick();
              }}
            >
              ${msg['cost.next']}
            </button>
          </div>
        </div>
      </div>
    `;
  }

  renderMaterialUsages() {
    const msg = this.msg;
    const loading = this.listMaterialUsagesState === 'loading';
    const rows: MaterialUsageRow[] = this.listMaterialUsagesData?.materialUsages ?? [];
    const total = this.listMaterialUsagesData?.total ?? 0;
    const pageNum = Number(this.listMaterialUsagesPage || '1');
    const safePage = Number.isFinite(pageNum) && pageNum > 0 ? pageNum : 1;
    const pageSizeNum = Number(this.listMaterialUsagesPageSize || '10');
    const safeSize = Number.isFinite(pageSizeNum) && pageSizeNum > 0 ? pageSizeNum : 10;
    const maxPage = Math.max(1, Math.ceil(total / safeSize) || 1);

    return html`
      <div>
        <div class="mb-3 flex flex-wrap items-center justify-between gap-2">
          <h3 class="text-sm font-semibold text-[var(--text-strong,#020617)]">${msg['cost.materialTitle']}</h3>
          <span class="text-xs text-[var(--text-muted,#64748b)]">${msg['cost.matTotal']}: ${total}</span>
        </div>
        <div class="mb-3 flex flex-wrap items-end gap-2">
          <label class="flex min-w-[8rem] flex-col gap-1 text-xs text-[var(--text-muted,#64748b)]">
            ${msg['cost.filterMatStatus']}
            <select
              class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-2 py-1.5 text-sm text-[var(--text-default,#0f172a)]"
              .value=${this.listMaterialUsagesStatus}
              @change=${(e: Event) => this.handleListMaterialUsagesStatusChange(e)}
            >
              <option value="">${msg['status.all']}</option>
              <option value="pending">pending</option>
              <option value="approved">approved</option>
              <option value="rejected">rejected</option>
            </select>
          </label>
          <button
            type="button"
            class="rounded-md bg-[var(--button-secondary-bg,#e2e8f0)] px-3 py-1.5 text-sm font-medium text-[var(--button-secondary-text,#0f172a)] disabled:opacity-60"
            ?disabled=${loading}
            @click=${(e: Event) => this.handleListMaterialUsagesClick(e)}
          >
            ${msg['cost.applyMat']}
          </button>
        </div>
        ${loading
          ? html`<p class="py-4 text-sm text-[var(--text-muted,#64748b)]">${msg['cost.matLoading']}</p>`
          : rows.length === 0
            ? html`<p class="py-4 text-sm text-[var(--text-muted,#64748b)]">${msg['cost.materialEmpty']}</p>`
            : html`
                <div class="overflow-x-auto">
                  <table class="min-w-full border-collapse text-left text-sm">
                    <thead>
                      <tr class="border-b border-[var(--border-subtle,#e2e8f0)] text-xs uppercase tracking-wide text-[var(--text-muted,#64748b)]">
                        <th class="px-2 py-2 font-medium">${msg['cost.colMaterial']}</th>
                        <th class="px-2 py-2 font-medium">${msg['cost.colQty']}</th>
                        <th class="px-2 py-2 font-medium">${msg['cost.colUnitCost']}</th>
                        <th class="px-2 py-2 font-medium">${msg['cost.colStatus']}</th>
                      </tr>
                    </thead>
                    <tbody>
                      ${rows.map(
                        (row: MaterialUsageRow) => html`
                          <tr class="border-b border-[var(--border-subtle,#e2e8f0)]">
                            <td class="px-2 py-2">${row.materialName ?? '—'}</td>
                            <td class="px-2 py-2">${row.quantity ?? '—'}</td>
                            <td class="px-2 py-2">${row.unitCost ?? '—'}</td>
                            <td class="px-2 py-2">
                              <span class="inline-flex rounded-full bg-[var(--status-neutral-bg,#f1f5f9)] px-2 py-0.5 text-xs text-[var(--status-neutral-text,#334155)]">${row.status ?? '—'}</span>
                            </td>
                          </tr>
                        `,
                      )}
                    </tbody>
                  </table>
                </div>
              `}
        <div class="mt-3 flex flex-wrap items-center justify-between gap-2">
          <span class="text-xs text-[var(--text-muted,#64748b)]">${msg['cost.page']} ${safePage} / ${maxPage}</span>
          <div class="flex gap-2">
            <button
              type="button"
              class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] px-3 py-1.5 text-sm disabled:opacity-50"
              ?disabled=${loading || safePage <= 1}
              @click=${() => {
                this.setListMaterialUsagesPage(String(Math.max(1, safePage - 1)));
                this.handleListMaterialUsagesClick();
              }}
            >
              ${msg['cost.prev']}
            </button>
            <button
              type="button"
              class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] px-3 py-1.5 text-sm disabled:opacity-50"
              ?disabled=${loading || safePage >= maxPage}
              @click=${() => {
                this.setListMaterialUsagesPage(String(safePage + 1));
                this.handleListMaterialUsagesClick();
              }}
            >
              ${msg['cost.next']}
            </button>
          </div>
        </div>
      </div>
    `;
  }

  renderDelayRiskInsights() {
    const msg = this.msg;
    const cmdLoading = this.triggerDelayRiskSuggestionsState === 'loading';
    const listLoading = this.listDelayRiskSuggestionsState === 'loading';
    const hasReport =
      Boolean(this.triggerDelayRiskSuggestionsStatusReportId) ||
      Boolean(this.listDelayRiskSuggestionsStatusReportId);
    const rows: ListDelayRiskSuggestionsOutput[] = Array.isArray(this.listDelayRiskSuggestionsData)
      ? this.listDelayRiskSuggestionsData
      : [];
    const success = this.triggerDelayRiskSuggestionsState === 'success';
    const error = this.triggerDelayRiskSuggestionsState === 'error';
    const errorText =
      this.triggerDelayRiskSuggestionsError && this.triggerDelayRiskSuggestionsError.trim() !== ''
        ? this.triggerDelayRiskSuggestionsError
        : msg['risk.error'];

    return html`
      <section class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-5 shadow-sm">
        <div class="mb-4 flex flex-wrap items-center justify-between gap-3">
          <h2 class="text-lg font-semibold text-[var(--text-strong,#020617)]">${msg['risk.title']}</h2>
          <button
            type="button"
            class="rounded-md bg-[var(--button-primary-bg,#2563eb)] px-4 py-2 text-sm font-medium text-[var(--button-primary-text,#ffffff)] disabled:opacity-60"
            ?disabled=${cmdLoading || !this.triggerDelayRiskSuggestionsStatusReportId}
            @click=${(e: Event) => this.handleTriggerDelayRiskSuggestionsClick(e)}
          >
            ${cmdLoading ? msg['risk.generating'] : msg['risk.generate']}
          </button>
        </div>
        ${!hasReport
          ? html`<p class="mb-3 text-sm text-[var(--text-muted,#64748b)]">${msg['risk.needsReport']}</p>`
          : nothing}
        ${success
          ? html`
              <div class="mb-3 flex items-start justify-between gap-2 rounded-md bg-[var(--status-success-bg,#ecfdf5)] px-3 py-2 text-sm text-[var(--status-success-text,#065f46)]">
                <span>${msg['risk.success']}</span>
              </div>
            `
          : nothing}
        ${error
          ? html`
              <div class="mb-3 flex flex-wrap items-center justify-between gap-2 rounded-md bg-[var(--status-error-bg,#fef2f2)] px-3 py-2 text-sm text-[var(--status-error-text,#b91c1c)]">
                <span>${errorText}</span>
                <button
                  type="button"
                  class="rounded-md bg-[var(--button-secondary-bg,#e2e8f0)] px-3 py-1 text-xs font-medium text-[var(--button-secondary-text,#0f172a)]"
                  ?disabled=${cmdLoading || !this.triggerDelayRiskSuggestionsStatusReportId}
                  @click=${(e: Event) => this.handleTriggerDelayRiskSuggestionsClick(e)}
                >
                  ${msg['risk.generate']}
                </button>
              </div>
            `
          : nothing}
        <div class="mb-4 flex flex-wrap items-end gap-3">
          <label class="flex min-w-[10rem] flex-col gap-1 text-xs text-[var(--text-muted,#64748b)]">
            ${msg['risk.filterAck']}
            <select
              class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-sm text-[var(--text-default,#0f172a)]"
              .value=${this.listDelayRiskSuggestionsAcknowledged}
              @change=${(e: Event) => this.handleListDelayRiskSuggestionsAcknowledgedChange(e)}
            >
              <option value="">${msg['risk.ackAll']}</option>
              <option value="true">${msg['risk.ackYes']}</option>
              <option value="false">${msg['risk.ackNo']}</option>
            </select>
          </label>
          <button
            type="button"
            class="rounded-md bg-[var(--button-secondary-bg,#e2e8f0)] px-4 py-2 text-sm font-medium text-[var(--button-secondary-text,#0f172a)] disabled:opacity-60"
            ?disabled=${listLoading || !this.listDelayRiskSuggestionsStatusReportId}
            @click=${(e: Event) => this.handleListDelayRiskSuggestionsClick(e)}
          >
            ${msg['risk.apply']}
          </button>
        </div>
        ${listLoading
          ? html`<p class="py-6 text-sm text-[var(--text-muted,#64748b)]">${msg['risk.loading']}</p>`
          : rows.length === 0
            ? html`<p class="py-6 text-sm text-[var(--text-muted,#64748b)]">${msg['risk.empty']}</p>`
            : html`
                <div class="grid grid-cols-1 gap-3 md:grid-cols-2">
                  ${rows.map((row: ListDelayRiskSuggestionsOutput) => {
                    const level = row.riskLevel ? String(row.riskLevel).toLowerCase() : '';
                    const levelBg =
                      level === 'high' || level === 'critical'
                        ? 'bg-[var(--status-error-bg,#fef2f2)] text-[var(--status-error-text,#b91c1c)]'
                        : level === 'medium'
                          ? 'bg-[var(--status-warning-bg,#fffbeb)] text-[var(--status-warning-text,#92400e)]'
                          : 'bg-[var(--status-info-bg,#eff6ff)] text-[var(--status-info-text,#1e40af)]';
                    const ackLabel = row.acknowledged === true ? msg['yes'] : row.acknowledged === false ? msg['no'] : '—';
                    return html`
                      <article class="rounded-md border border-[var(--border-subtle,#e2e8f0)] bg-[var(--surface-alt-bg,#f8fafc)] p-4">
                        <div class="flex flex-wrap items-start justify-between gap-2">
                          <h3 class="text-sm font-semibold text-[var(--text-strong,#020617)]">${row.workTaskTitle ?? '—'}</h3>
                          <span class="inline-flex rounded-full px-2 py-0.5 text-xs font-medium ${levelBg}">${row.riskLevel ?? '—'}</span>
                        </div>
                        <p class="mt-2 text-sm text-[var(--text-default,#0f172a)]">
                          <span class="text-xs uppercase tracking-wide text-[var(--text-muted,#64748b)]">${msg['risk.colReason']}</span><br />
                          ${row.reason ?? '—'}
                        </p>
                        <p class="mt-2 text-sm text-[var(--text-default,#0f172a)]">
                          <span class="text-xs uppercase tracking-wide text-[var(--text-muted,#64748b)]">${msg['risk.colAction']}</span><br />
                          ${row.suggestedAction ?? '—'}
                        </p>
                        <p class="mt-3 text-xs text-[var(--text-muted,#64748b)]">${msg['risk.colAck']}: ${ackLabel}</p>
                      </article>
                    `;
                  })}
                </div>
              `}
      </section>
    `;
  }
}
