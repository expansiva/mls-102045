/// <mls fileReference="_102045_/l2/buildFlowFsm/web/shared/projectDetailWorkspace.ts" enhancement="_102020_/l2/enhancementAura"/>

import { CollabLitElement } from '/_102029_/l2/collabLitElement.js';
import { property } from 'lit/decorators.js';
import { execBff, type BffClientOptions } from '/_102029_/l2/bffClient.js';
import { getState, setState, subscribe, unsubscribe } from '/_102029_/l2/collabState.js';
import { runBlockingUiAction } from '/_102029_/l2/interactionRuntime.js';
import type {
  GetProjectDetailOutput,
  ListWorkTasksOutput,
  ListChangeOrdersOutput,
  GetChangeOrderDetailOutput,
  ListTimeLogsOutput,
  ListMaterialUsagesOutput,
  TriggerDelayRiskSuggestionsOutput,
  ListDelayRiskSuggestionsOutput,
} from '/_102045_/l2/buildFlowFsm/web/contracts/projectDetailWorkspace.js';
import {
  getProjectDetailRoute,
  listWorkTasksRoute,
  listChangeOrdersRoute,
  getChangeOrderDetailRoute,
  listTimeLogsRoute,
  listMaterialUsagesRoute,
  triggerDelayRiskSuggestionsRoute,
  listDelayRiskSuggestionsRoute,
} from '/_102045_/l2/buildFlowFsm/web/contracts/projectDetailWorkspace.js';
export type {
  GetProjectDetailInput,
  GetProjectDetailOutput,
  ListWorkTasksInput,
  ListWorkTasksOutput,
  ListChangeOrdersInput,
  ListChangeOrdersOutput,
  GetChangeOrderDetailInput,
  GetChangeOrderDetailOutput,
  ListTimeLogsInput,
  ListTimeLogsOutput,
  ListMaterialUsagesInput,
  ListMaterialUsagesOutput,
  TriggerDelayRiskSuggestionsInput,
  TriggerDelayRiskSuggestionsOutput,
  ListDelayRiskSuggestionsInput,
  ListDelayRiskSuggestionsOutput,
} from '/_102045_/l2/buildFlowFsm/web/contracts/projectDetailWorkspace.js';

/// **collab_i18n_start**
const message_en = {
"section.projectDetailWorkspace.sec-projectHeader.title": "Project Header",
"organism.projectDetailWorkspace.getProjectDetail.title": "View project detail and timeline",
"intent.projectDetailWorkspace.getProjectDetail.list.title": "View project detail and timeline",
"intent.projectDetailWorkspace.getProjectDetail.list.empty": "Nenhum registro encontrado",
"intent.projectDetailWorkspace.getProjectDetail.list.column.projectId.label": "Project Id",
"intent.projectDetailWorkspace.getProjectDetail.list.column.name.label": "Name",
"intent.projectDetailWorkspace.getProjectDetail.list.column.clientId.label": "Client Id",
"intent.projectDetailWorkspace.getProjectDetail.list.column.clientName.label": "Client Name",
"intent.projectDetailWorkspace.getProjectDetail.list.column.clientCompany.label": "Client Company",
"intent.projectDetailWorkspace.getProjectDetail.list.column.siteAddress.label": "Site Address",
"intent.projectDetailWorkspace.getProjectDetail.list.column.budget.label": "Budget",
"intent.projectDetailWorkspace.getProjectDetail.list.column.startDate.label": "Start Date",
"intent.projectDetailWorkspace.getProjectDetail.list.column.endDate.label": "End Date",
"intent.projectDetailWorkspace.getProjectDetail.list.column.status.label": "Status",
"intent.projectDetailWorkspace.getProjectDetail.list.column.holdReason.label": "Hold Reason",
"intent.projectDetailWorkspace.getProjectDetail.list.column.closedAt.label": "Closed At",
"intent.projectDetailWorkspace.getProjectDetail.list.column.cancelledAt.label": "Cancelled At",
"intent.projectDetailWorkspace.getProjectDetail.list.column.cancellationReason.label": "Cancellation Reason",
"intent.projectDetailWorkspace.getProjectDetail.list.column.createdAt.label": "Created At",
"intent.projectDetailWorkspace.getProjectDetail.list.column.updatedAt.label": "Updated At",
"section.projectDetailWorkspace.sec-taskTimeline.title": "Work Tasks & Timeline",
"organism.projectDetailWorkspace.listWorkTasks.title": "Browse work tasks",
"intent.projectDetailWorkspace.listWorkTasks.list.title": "Browse work tasks",
"intent.projectDetailWorkspace.listWorkTasks.list.empty": "Nenhum registro encontrado",
"intent.projectDetailWorkspace.listWorkTasks.list.column.workTasks.label": "Work Tasks",
"intent.projectDetailWorkspace.listWorkTasks.list.column.total.label": "Total",
"intent.projectDetailWorkspace.listWorkTasks.list.filter.projectId.label": "Project Id",
"intent.projectDetailWorkspace.listWorkTasks.list.filter.status.label": "Status",
"intent.projectDetailWorkspace.listWorkTasks.list.filter.assignedWorkerId.label": "Assigned Worker Id",
"intent.projectDetailWorkspace.listWorkTasks.list.filter.page.label": "Page",
"intent.projectDetailWorkspace.listWorkTasks.list.filter.pageSize.label": "Page Size",
"section.projectDetailWorkspace.sec-changeOrders.title": "Change Orders",
"organism.projectDetailWorkspace.listChangeOrders.title": "Browse change orders",
"intent.projectDetailWorkspace.listChangeOrders.list.title": "Browse change orders",
"intent.projectDetailWorkspace.listChangeOrders.list.empty": "Nenhum registro encontrado",
"intent.projectDetailWorkspace.listChangeOrders.list.column.changeOrders.label": "Change Orders",
"intent.projectDetailWorkspace.listChangeOrders.list.column.total.label": "Total",
"intent.projectDetailWorkspace.listChangeOrders.list.filter.status.label": "Status",
"intent.projectDetailWorkspace.listChangeOrders.list.filter.impactType.label": "Impact Type",
"intent.projectDetailWorkspace.listChangeOrders.list.filter.page.label": "Page",
"intent.projectDetailWorkspace.listChangeOrders.list.filter.pageSize.label": "Page Size",
"organism.projectDetailWorkspace.getChangeOrderDetail.title": "View change order and cost impact",
"intent.projectDetailWorkspace.getChangeOrderDetail.list.title": "View change order and cost impact",
"intent.projectDetailWorkspace.getChangeOrderDetail.list.empty": "Nenhum registro encontrado",
"intent.projectDetailWorkspace.getChangeOrderDetail.list.column.changeOrderId.label": "Change Order Id",
"intent.projectDetailWorkspace.getChangeOrderDetail.list.column.projectId.label": "Project Id",
"intent.projectDetailWorkspace.getChangeOrderDetail.list.column.title.label": "Title",
"intent.projectDetailWorkspace.getChangeOrderDetail.list.column.description.label": "Description",
"intent.projectDetailWorkspace.getChangeOrderDetail.list.column.impactType.label": "Impact Type",
"intent.projectDetailWorkspace.getChangeOrderDetail.list.column.costAdjustment.label": "Cost Adjustment",
"intent.projectDetailWorkspace.getChangeOrderDetail.list.column.scheduleAdjustmentDays.label": "Schedule Adjustment Days",
"intent.projectDetailWorkspace.getChangeOrderDetail.list.column.status.label": "Status",
"intent.projectDetailWorkspace.getChangeOrderDetail.list.column.rejectionReason.label": "Rejection Reason",
"intent.projectDetailWorkspace.getChangeOrderDetail.list.column.approvedAt.label": "Approved At",
"intent.projectDetailWorkspace.getChangeOrderDetail.list.column.rejectedAt.label": "Rejected At",
"intent.projectDetailWorkspace.getChangeOrderDetail.list.column.projectName.label": "Project Name",
"intent.projectDetailWorkspace.getChangeOrderDetail.list.column.projectBudget.label": "Project Budget",
"intent.projectDetailWorkspace.getChangeOrderDetail.list.column.affectsJobCosting.label": "Affects Job Costing",
"section.projectDetailWorkspace.sec-costTracking.title": "Cost Tracking — Time Logs",
"organism.projectDetailWorkspace.listTimeLogs.title": "Browse time logs",
"intent.projectDetailWorkspace.listTimeLogs.list.title": "Browse time logs",
"intent.projectDetailWorkspace.listTimeLogs.list.empty": "Nenhum registro encontrado",
"intent.projectDetailWorkspace.listTimeLogs.list.column.timeLogs.label": "Time Logs",
"intent.projectDetailWorkspace.listTimeLogs.list.column.total.label": "Total",
"intent.projectDetailWorkspace.listTimeLogs.list.filter.workTaskId.label": "Work Task Id",
"intent.projectDetailWorkspace.listTimeLogs.list.filter.workerName.label": "Worker Name",
"intent.projectDetailWorkspace.listTimeLogs.list.filter.logDate.label": "Log Date",
"intent.projectDetailWorkspace.listTimeLogs.list.filter.status.label": "Status",
"intent.projectDetailWorkspace.listTimeLogs.list.filter.page.label": "Page",
"intent.projectDetailWorkspace.listTimeLogs.list.filter.pageSize.label": "Page Size",
"section.projectDetailWorkspace.sec-materialUsage.title": "Material Usage",
"organism.projectDetailWorkspace.listMaterialUsages.title": "Browse material usage",
"intent.projectDetailWorkspace.listMaterialUsages.list.title": "Browse material usage",
"intent.projectDetailWorkspace.listMaterialUsages.list.empty": "Nenhum registro encontrado",
"intent.projectDetailWorkspace.listMaterialUsages.list.column.materialUsages.label": "Material Usages",
"intent.projectDetailWorkspace.listMaterialUsages.list.column.total.label": "Total",
"intent.projectDetailWorkspace.listMaterialUsages.list.filter.status.label": "Status",
"intent.projectDetailWorkspace.listMaterialUsages.list.filter.page.label": "Page",
"intent.projectDetailWorkspace.listMaterialUsages.list.filter.pageSize.label": "Page Size",
"section.projectDetailWorkspace.sec-delayRiskInsights.title": "Delay Risk Insights",
"organism.projectDetailWorkspace.triggerDelayRiskSuggestions.title": "Generate delay-risk suggestions",
"intent.projectDetailWorkspace.triggerDelayRiskSuggestions.form.title": "Generate delay-risk suggestions",
"intent.projectDetailWorkspace.triggerDelayRiskSuggestions.form.action.triggerDelayRiskSuggestions": "Generate delay-risk suggestions",
"organism.projectDetailWorkspace.listDelayRiskSuggestions.title": "Review delay-risk suggestions",
"intent.projectDetailWorkspace.listDelayRiskSuggestions.list.title": "Review delay-risk suggestions",
"intent.projectDetailWorkspace.listDelayRiskSuggestions.list.empty": "Nenhum registro encontrado",
"intent.projectDetailWorkspace.listDelayRiskSuggestions.list.column.delayRiskSuggestionId.label": "Delay Risk Suggestion Id",
"intent.projectDetailWorkspace.listDelayRiskSuggestions.list.column.workTaskId.label": "Work Task Id",
"intent.projectDetailWorkspace.listDelayRiskSuggestions.list.column.workTaskTitle.label": "Work Task Title",
"intent.projectDetailWorkspace.listDelayRiskSuggestions.list.column.riskLevel.label": "Risk Level",
"intent.projectDetailWorkspace.listDelayRiskSuggestions.list.column.reason.label": "Reason",
"intent.projectDetailWorkspace.listDelayRiskSuggestions.list.column.suggestedAction.label": "Suggested Action",
"intent.projectDetailWorkspace.listDelayRiskSuggestions.list.column.acknowledged.label": "Acknowledged",
"intent.projectDetailWorkspace.listDelayRiskSuggestions.list.column.createdAt.label": "Created At",
"intent.projectDetailWorkspace.listDelayRiskSuggestions.list.filter.acknowledged.label": "Acknowledged",
"section.projectDetailWorkspace.sec-project-header.title": "Project Header",
"section.projectDetailWorkspace.sec-task-timeline.title": "Work Task Timeline",
"section.projectDetailWorkspace.sec-change-orders.title": "Change Orders",
"section.projectDetailWorkspace.sec-cost-tracking.title": "Cost Tracking",
"section.projectDetailWorkspace.sec-delay-risk-insights.title": "Delay-Risk Insights",
"action.triggerDelayRiskSuggestions.success": "Generate delay-risk suggestions",
"action.triggerDelayRiskSuggestions.error": "Generate delay-risk suggestions",
};

const message_pt_br = {
"section.projectDetailWorkspace.sec-projectHeader.title": "Cabeçalho do Projeto",
"organism.projectDetailWorkspace.getProjectDetail.title": "Visualizar detalhes do projeto e cronograma",
"intent.projectDetailWorkspace.getProjectDetail.list.title": "Visualizar detalhes do projeto e cronograma",
"intent.projectDetailWorkspace.getProjectDetail.list.empty": "Nenhum registro encontrado",
"intent.projectDetailWorkspace.getProjectDetail.list.column.projectId.label": "ID do Projeto",
"intent.projectDetailWorkspace.getProjectDetail.list.column.name.label": "Nome",
"intent.projectDetailWorkspace.getProjectDetail.list.column.clientId.label": "ID do Cliente",
"intent.projectDetailWorkspace.getProjectDetail.list.column.clientName.label": "Nome do Cliente",
"intent.projectDetailWorkspace.getProjectDetail.list.column.clientCompany.label": "Empresa do Cliente",
"intent.projectDetailWorkspace.getProjectDetail.list.column.siteAddress.label": "Endereço do Local",
"intent.projectDetailWorkspace.getProjectDetail.list.column.budget.label": "Orçamento",
"intent.projectDetailWorkspace.getProjectDetail.list.column.startDate.label": "Data de Início",
"intent.projectDetailWorkspace.getProjectDetail.list.column.endDate.label": "Data de Término",
"intent.projectDetailWorkspace.getProjectDetail.list.column.status.label": "Status",
"intent.projectDetailWorkspace.getProjectDetail.list.column.holdReason.label": "Motivo da Suspensão",
"intent.projectDetailWorkspace.getProjectDetail.list.column.closedAt.label": "Fechado Em",
"intent.projectDetailWorkspace.getProjectDetail.list.column.cancelledAt.label": "Cancelado Em",
"intent.projectDetailWorkspace.getProjectDetail.list.column.cancellationReason.label": "Motivo do Cancelamento",
"intent.projectDetailWorkspace.getProjectDetail.list.column.createdAt.label": "Criado Em",
"intent.projectDetailWorkspace.getProjectDetail.list.column.updatedAt.label": "Atualizado Em",
"section.projectDetailWorkspace.sec-taskTimeline.title": "Tarefas de Trabalho e Cronograma",
"organism.projectDetailWorkspace.listWorkTasks.title": "Navegar pelas tarefas de trabalho",
"intent.projectDetailWorkspace.listWorkTasks.list.title": "Navegar pelas tarefas de trabalho",
"intent.projectDetailWorkspace.listWorkTasks.list.empty": "Nenhum registro encontrado",
"intent.projectDetailWorkspace.listWorkTasks.list.column.workTasks.label": "Tarefas de Trabalho",
"intent.projectDetailWorkspace.listWorkTasks.list.column.total.label": "Total",
"intent.projectDetailWorkspace.listWorkTasks.list.filter.projectId.label": "ID do Projeto",
"intent.projectDetailWorkspace.listWorkTasks.list.filter.status.label": "Status",
"intent.projectDetailWorkspace.listWorkTasks.list.filter.assignedWorkerId.label": "ID do Trabalhador Designado",
"intent.projectDetailWorkspace.listWorkTasks.list.filter.page.label": "Página",
"intent.projectDetailWorkspace.listWorkTasks.list.filter.pageSize.label": "Tamanho da Página",
"section.projectDetailWorkspace.sec-changeOrders.title": "Ordens de Mudança",
"organism.projectDetailWorkspace.listChangeOrders.title": "Navegar pelas ordens de mudança",
"intent.projectDetailWorkspace.listChangeOrders.list.title": "Navegar pelas ordens de mudança",
"intent.projectDetailWorkspace.listChangeOrders.list.empty": "Nenhum registro encontrado",
"intent.projectDetailWorkspace.listChangeOrders.list.column.changeOrders.label": "Ordens de Mudança",
"intent.projectDetailWorkspace.listChangeOrders.list.column.total.label": "Total",
"intent.projectDetailWorkspace.listChangeOrders.list.filter.status.label": "Status",
"intent.projectDetailWorkspace.listChangeOrders.list.filter.impactType.label": "Tipo de Impacto",
"intent.projectDetailWorkspace.listChangeOrders.list.filter.page.label": "Página",
"intent.projectDetailWorkspace.listChangeOrders.list.filter.pageSize.label": "Tamanho da Página",
"organism.projectDetailWorkspace.getChangeOrderDetail.title": "Visualizar ordem de mudança e impacto de custo",
"intent.projectDetailWorkspace.getChangeOrderDetail.list.title": "Visualizar ordem de mudança e impacto de custo",
"intent.projectDetailWorkspace.getChangeOrderDetail.list.empty": "Nenhum registro encontrado",
"intent.projectDetailWorkspace.getChangeOrderDetail.list.column.changeOrderId.label": "ID da Ordem de Mudança",
"intent.projectDetailWorkspace.getChangeOrderDetail.list.column.projectId.label": "ID do Projeto",
"intent.projectDetailWorkspace.getChangeOrderDetail.list.column.title.label": "Título",
"intent.projectDetailWorkspace.getChangeOrderDetail.list.column.description.label": "Descrição",
"intent.projectDetailWorkspace.getChangeOrderDetail.list.column.impactType.label": "Tipo de Impacto",
"intent.projectDetailWorkspace.getChangeOrderDetail.list.column.costAdjustment.label": "Ajuste de Custo",
"intent.projectDetailWorkspace.getChangeOrderDetail.list.column.scheduleAdjustmentDays.label": "Dias de Ajuste de Cronograma",
"intent.projectDetailWorkspace.getChangeOrderDetail.list.column.status.label": "Status",
"intent.projectDetailWorkspace.getChangeOrderDetail.list.column.rejectionReason.label": "Motivo da Rejeição",
"intent.projectDetailWorkspace.getChangeOrderDetail.list.column.approvedAt.label": "Aprovado Em",
"intent.projectDetailWorkspace.getChangeOrderDetail.list.column.rejectedAt.label": "Rejeitado Em",
"intent.projectDetailWorkspace.getChangeOrderDetail.list.column.projectName.label": "Nome do Projeto",
"intent.projectDetailWorkspace.getChangeOrderDetail.list.column.projectBudget.label": "Orçamento do Projeto",
"intent.projectDetailWorkspace.getChangeOrderDetail.list.column.affectsJobCosting.label": "Afeta Custeio do Trabalho",
"section.projectDetailWorkspace.sec-costTracking.title": "Rastreamento de Custos — Registros de Tempo",
"organism.projectDetailWorkspace.listTimeLogs.title": "Navegar pelos registros de tempo",
"intent.projectDetailWorkspace.listTimeLogs.list.title": "Navegar pelos registros de tempo",
"intent.projectDetailWorkspace.listTimeLogs.list.empty": "Nenhum registro encontrado",
"intent.projectDetailWorkspace.listTimeLogs.list.column.timeLogs.label": "Registros de Tempo",
"intent.projectDetailWorkspace.listTimeLogs.list.column.total.label": "Total",
"intent.projectDetailWorkspace.listTimeLogs.list.filter.workTaskId.label": "ID da Tarefa de Trabalho",
"intent.projectDetailWorkspace.listTimeLogs.list.filter.workerName.label": "Nome do Trabalhador",
"intent.projectDetailWorkspace.listTimeLogs.list.filter.logDate.label": "Data do Registro",
"intent.projectDetailWorkspace.listTimeLogs.list.filter.status.label": "Status",
"intent.projectDetailWorkspace.listTimeLogs.list.filter.page.label": "Página",
"intent.projectDetailWorkspace.listTimeLogs.list.filter.pageSize.label": "Tamanho da Página",
"section.projectDetailWorkspace.sec-materialUsage.title": "Uso de Material",
"organism.projectDetailWorkspace.listMaterialUsages.title": "Navegar pelo uso de material",
"intent.projectDetailWorkspace.listMaterialUsages.list.title": "Navegar pelo uso de material",
"intent.projectDetailWorkspace.listMaterialUsages.list.empty": "Nenhum registro encontrado",
"intent.projectDetailWorkspace.listMaterialUsages.list.column.materialUsages.label": "Uso de Material",
"intent.projectDetailWorkspace.listMaterialUsages.list.column.total.label": "Total",
"intent.projectDetailWorkspace.listMaterialUsages.list.filter.status.label": "Status",
"intent.projectDetailWorkspace.listMaterialUsages.list.filter.page.label": "Página",
"intent.projectDetailWorkspace.listMaterialUsages.list.filter.pageSize.label": "Tamanho da Página",
"section.projectDetailWorkspace.sec-delayRiskInsights.title": "Insights de Risco de Atraso",
"organism.projectDetailWorkspace.triggerDelayRiskSuggestions.title": "Gerar sugestões de risco de atraso",
"intent.projectDetailWorkspace.triggerDelayRiskSuggestions.form.title": "Gerar sugestões de risco de atraso",
"intent.projectDetailWorkspace.triggerDelayRiskSuggestions.form.action.triggerDelayRiskSuggestions": "Gerar sugestões de risco de atraso",
"organism.projectDetailWorkspace.listDelayRiskSuggestions.title": "Revisar sugestões de risco de atraso",
"intent.projectDetailWorkspace.listDelayRiskSuggestions.list.title": "Revisar sugestões de risco de atraso",
"intent.projectDetailWorkspace.listDelayRiskSuggestions.list.empty": "Nenhum registro encontrado",
"intent.projectDetailWorkspace.listDelayRiskSuggestions.list.column.delayRiskSuggestionId.label": "ID da Sugestão de Risco de Atraso",
"intent.projectDetailWorkspace.listDelayRiskSuggestions.list.column.workTaskId.label": "ID da Tarefa de Trabalho",
"intent.projectDetailWorkspace.listDelayRiskSuggestions.list.column.workTaskTitle.label": "Título da Tarefa de Trabalho",
"intent.projectDetailWorkspace.listDelayRiskSuggestions.list.column.riskLevel.label": "Nível de Risco",
"intent.projectDetailWorkspace.listDelayRiskSuggestions.list.column.reason.label": "Razão",
"intent.projectDetailWorkspace.listDelayRiskSuggestions.list.column.suggestedAction.label": "Ação Sugerida",
"intent.projectDetailWorkspace.listDelayRiskSuggestions.list.column.acknowledged.label": "Reconhecido",
"intent.projectDetailWorkspace.listDelayRiskSuggestions.list.column.createdAt.label": "Criado Em",
"intent.projectDetailWorkspace.listDelayRiskSuggestions.list.filter.acknowledged.label": "Reconhecido",
"section.projectDetailWorkspace.sec-project-header.title": "Cabeçalho do Projeto",
"section.projectDetailWorkspace.sec-task-timeline.title": "Cronograma da Tarefa de Trabalho",
"section.projectDetailWorkspace.sec-change-orders.title": "Ordens de Mudança",
"section.projectDetailWorkspace.sec-cost-tracking.title": "Rastreamento de Custos",
"section.projectDetailWorkspace.sec-delay-risk-insights.title": "Insights de Risco de Atraso",
"action.triggerDelayRiskSuggestions.success": "Sugestões de risco de atraso geradas",
"action.triggerDelayRiskSuggestions.error": "Erro ao gerar sugestões de risco de atraso"
};

const message_es = {
"section.projectDetailWorkspace.sec-projectHeader.title": "Encabezado del Proyecto",
"organism.projectDetailWorkspace.getProjectDetail.title": "Ver detalles del proyecto y cronograma",
"intent.projectDetailWorkspace.getProjectDetail.list.title": "Ver detalles del proyecto y cronograma",
"intent.projectDetailWorkspace.getProjectDetail.list.empty": "Ningún registro encontrado",
"intent.projectDetailWorkspace.getProjectDetail.list.column.projectId.label": "ID del Proyecto",
"intent.projectDetailWorkspace.getProjectDetail.list.column.name.label": "Nombre",
"intent.projectDetailWorkspace.getProjectDetail.list.column.clientId.label": "ID del Cliente",
"intent.projectDetailWorkspace.getProjectDetail.list.column.clientName.label": "Nombre del Cliente",
"intent.projectDetailWorkspace.getProjectDetail.list.column.clientCompany.label": "Empresa del Cliente",
"intent.projectDetailWorkspace.getProjectDetail.list.column.siteAddress.label": "Dirección del Sitio",
"intent.projectDetailWorkspace.getProjectDetail.list.column.budget.label": "Presupuesto",
"intent.projectDetailWorkspace.getProjectDetail.list.column.startDate.label": "Fecha de Inicio",
"intent.projectDetailWorkspace.getProjectDetail.list.column.endDate.label": "Fecha de Fin",
"intent.projectDetailWorkspace.getProjectDetail.list.column.status.label": "Estado",
"intent.projectDetailWorkspace.getProjectDetail.list.column.holdReason.label": "Razón de Suspensión",
"intent.projectDetailWorkspace.getProjectDetail.list.column.closedAt.label": "Cerrado En",
"intent.projectDetailWorkspace.getProjectDetail.list.column.cancelledAt.label": "Cancelado En",
"intent.projectDetailWorkspace.getProjectDetail.list.column.cancellationReason.label": "Razón de Cancelación",
"intent.projectDetailWorkspace.getProjectDetail.list.column.createdAt.label": "Creado En",
"intent.projectDetailWorkspace.getProjectDetail.list.column.updatedAt.label": "Actualizado En",
"section.projectDetailWorkspace.sec-taskTimeline.title": "Tareas de Trabajo y Cronograma",
"organism.projectDetailWorkspace.listWorkTasks.title": "Explorar tareas de trabajo",
"intent.projectDetailWorkspace.listWorkTasks.list.title": "Explorar tareas de trabajo",
"intent.projectDetailWorkspace.listWorkTasks.list.empty": "Ningún registro encontrado",
"intent.projectDetailWorkspace.listWorkTasks.list.column.workTasks.label": "Tareas de Trabajo",
"intent.projectDetailWorkspace.listWorkTasks.list.column.total.label": "Total",
"intent.projectDetailWorkspace.listWorkTasks.list.filter.projectId.label": "ID del Proyecto",
"intent.projectDetailWorkspace.listWorkTasks.list.filter.status.label": "Estado",
"intent.projectDetailWorkspace.listWorkTasks.list.filter.assignedWorkerId.label": "ID del Trabajador Asignado",
"intent.projectDetailWorkspace.listWorkTasks.list.filter.page.label": "Página",
"intent.projectDetailWorkspace.listWorkTasks.list.filter.pageSize.label": "Tamaño de Página",
"section.projectDetailWorkspace.sec-changeOrders.title": "Órdenes de Cambio",
"organism.projectDetailWorkspace.listChangeOrders.title": "Explorar órdenes de cambio",
"intent.projectDetailWorkspace.listChangeOrders.list.title": "Explorar órdenes de cambio",
"intent.projectDetailWorkspace.listChangeOrders.list.empty": "Ningún registro encontrado",
"intent.projectDetailWorkspace.listChangeOrders.list.column.changeOrders.label": "Órdenes de Cambio",
"intent.projectDetailWorkspace.listChangeOrders.list.column.total.label": "Total",
"intent.projectDetailWorkspace.listChangeOrders.list.filter.status.label": "Estado",
"intent.projectDetailWorkspace.listChangeOrders.list.filter.impactType.label": "Tipo de Impacto",
"intent.projectDetailWorkspace.listChangeOrders.list.filter.page.label": "Página",
"intent.projectDetailWorkspace.listChangeOrders.list.filter.pageSize.label": "Tamaño de Página",
"organism.projectDetailWorkspace.getChangeOrderDetail.title": "Ver orden de cambio e impacto de costo",
"intent.projectDetailWorkspace.getChangeOrderDetail.list.title": "Ver orden de cambio e impacto de costo",
"intent.projectDetailWorkspace.getChangeOrderDetail.list.empty": "Ningún registro encontrado",
"intent.projectDetailWorkspace.getChangeOrderDetail.list.column.changeOrderId.label": "ID de Orden de Cambio",
"intent.projectDetailWorkspace.getChangeOrderDetail.list.column.projectId.label": "ID del Proyecto",
"intent.projectDetailWorkspace.getChangeOrderDetail.list.column.title.label": "Título",
"intent.projectDetailWorkspace.getChangeOrderDetail.list.column.description.label": "Descripción",
"intent.projectDetailWorkspace.getChangeOrderDetail.list.column.impactType.label": "Tipo de Impacto",
"intent.projectDetailWorkspace.getChangeOrderDetail.list.column.costAdjustment.label": "Ajuste de Costo",
"intent.projectDetailWorkspace.getChangeOrderDetail.list.column.scheduleAdjustmentDays.label": "Días de Ajuste de Cronograma",
"intent.projectDetailWorkspace.getChangeOrderDetail.list.column.status.label": "Estado",
"intent.projectDetailWorkspace.getChangeOrderDetail.list.column.rejectionReason.label": "Razón de Rechazo",
"intent.projectDetailWorkspace.getChangeOrderDetail.list.column.approvedAt.label": "Aprobado En",
"intent.projectDetailWorkspace.getChangeOrderDetail.list.column.rejectedAt.label": "Rechazado En",
"intent.projectDetailWorkspace.getChangeOrderDetail.list.column.projectName.label": "Nombre del Proyecto",
"intent.projectDetailWorkspace.getChangeOrderDetail.list.column.projectBudget.label": "Presupuesto del Proyecto",
"intent.projectDetailWorkspace.getChangeOrderDetail.list.column.affectsJobCosting.label": "Afecta Costeo del Trabajo",
"section.projectDetailWorkspace.sec-costTracking.title": "Seguimiento de Costos — Registros de Tiempo",
"organism.projectDetailWorkspace.listTimeLogs.title": "Explorar registros de tiempo",
"intent.projectDetailWorkspace.listTimeLogs.list.title": "Explorar registros de tiempo",
"intent.projectDetailWorkspace.listTimeLogs.list.empty": "Ningún registro encontrado",
"intent.projectDetailWorkspace.listTimeLogs.list.column.timeLogs.label": "Registros de Tiempo",
"intent.projectDetailWorkspace.listTimeLogs.list.column.total.label": "Total",
"intent.projectDetailWorkspace.listTimeLogs.list.filter.workTaskId.label": "ID de Tarea de Trabajo",
"intent.projectDetailWorkspace.listTimeLogs.list.filter.workerName.label": "Nombre del Trabajador",
"intent.projectDetailWorkspace.listTimeLogs.list.filter.logDate.label": "Fecha del Registro",
"intent.projectDetailWorkspace.listTimeLogs.list.filter.status.label": "Estado",
"intent.projectDetailWorkspace.listTimeLogs.list.filter.page.label": "Página",
"intent.projectDetailWorkspace.listTimeLogs.list.filter.pageSize.label": "Tamaño de Página",
"section.projectDetailWorkspace.sec-materialUsage.title": "Uso de Material",
"organism.projectDetailWorkspace.listMaterialUsages.title": "Explorar uso de material",
"intent.projectDetailWorkspace.listMaterialUsages.list.title": "Explorar uso de material",
"intent.projectDetailWorkspace.listMaterialUsages.list.empty": "Ningún registro encontrado",
"intent.projectDetailWorkspace.listMaterialUsages.list.column.materialUsages.label": "Uso de Material",
"intent.projectDetailWorkspace.listMaterialUsages.list.column.total.label": "Total",
"intent.projectDetailWorkspace.listMaterialUsages.list.filter.status.label": "Estado",
"intent.projectDetailWorkspace.listMaterialUsages.list.filter.page.label": "Página",
"intent.projectDetailWorkspace.listMaterialUsages.list.filter.pageSize.label": "Tamaño de Página",
"section.projectDetailWorkspace.sec-delayRiskInsights.title": "Perspectivas de Riesgo de Retraso",
"organism.projectDetailWorkspace.triggerDelayRiskSuggestions.title": "Generar sugerencias de riesgo de retraso",
"intent.projectDetailWorkspace.triggerDelayRiskSuggestions.form.title": "Generar sugerencias de riesgo de retraso",
"intent.projectDetailWorkspace.triggerDelayRiskSuggestions.form.action.triggerDelayRiskSuggestions": "Generar sugerencias de riesgo de retraso",
"organism.projectDetailWorkspace.listDelayRiskSuggestions.title": "Revisar sugerencias de riesgo de retraso",
"intent.projectDetailWorkspace.listDelayRiskSuggestions.list.title": "Revisar sugerencias de riesgo de retraso",
"intent.projectDetailWorkspace.listDelayRiskSuggestions.list.empty": "Ningún registro encontrado",
"intent.projectDetailWorkspace.listDelayRiskSuggestions.list.column.delayRiskSuggestionId.label": "ID de Sugerencia de Riesgo de Retraso",
"intent.projectDetailWorkspace.listDelayRiskSuggestions.list.column.workTaskId.label": "ID de Tarea de Trabajo",
"intent.projectDetailWorkspace.listDelayRiskSuggestions.list.column.workTaskTitle.label": "Título de la Tarea de Trabajo",
"intent.projectDetailWorkspace.listDelayRiskSuggestions.list.column.riskLevel.label": "Nivel de Riesgo",
"intent.projectDetailWorkspace.listDelayRiskSuggestions.list.column.reason.label": "Razón",
"intent.projectDetailWorkspace.listDelayRiskSuggestions.list.column.suggestedAction.label": "Acción Sugerida",
"intent.projectDetailWorkspace.listDelayRiskSuggestions.list.column.acknowledged.label": "Reconocido",
"intent.projectDetailWorkspace.listDelayRiskSuggestions.list.column.createdAt.label": "Creado En",
"intent.projectDetailWorkspace.listDelayRiskSuggestions.list.filter.acknowledged.label": "Reconocido",
"section.projectDetailWorkspace.sec-project-header.title": "Encabezado del Proyecto",
"section.projectDetailWorkspace.sec-task-timeline.title": "Cronograma de Tareas de Trabajo",
"section.projectDetailWorkspace.sec-change-orders.title": "Órdenes de Cambio",
"section.projectDetailWorkspace.sec-cost-tracking.title": "Seguimiento de Costos",
"section.projectDetailWorkspace.sec-delay-risk-insights.title": "Perspectivas de Riesgo de Retraso",
"action.triggerDelayRiskSuggestions.success": "Sugerencias de riesgo de retraso generadas",
"action.triggerDelayRiskSuggestions.error": "Error al generar sugerencias de riesgo de retraso"
};

type MessageType = typeof message_en;
const messages: { [key: string]: MessageType } = { 'en': message_en, 'pt-br': message_pt_br, 'es': message_es };
/// **collab_i18n_end**

type ActionStatus = "idle" | "loading" | "success" | "error";

const SUBSCRIBED_KEYS: string[] = [
  'ui.projectDetailWorkspace.status',
  'ui.projectDetailWorkspace.action.getProjectDetail.status',
  'ui.projectDetailWorkspace.input.getProjectDetail.projectId',
  'ui.projectDetailWorkspace.data.getProjectDetail',
  'ui.projectDetailWorkspace.action.listWorkTasks.status',
  'ui.projectDetailWorkspace.input.listWorkTasks.projectId',
  'ui.projectDetailWorkspace.input.listWorkTasks.status',
  'ui.projectDetailWorkspace.input.listWorkTasks.assignedWorkerId',
  'ui.projectDetailWorkspace.input.listWorkTasks.page',
  'ui.projectDetailWorkspace.input.listWorkTasks.pageSize',
  'ui.projectDetailWorkspace.data.listWorkTasks',
  'ui.projectDetailWorkspace.action.listChangeOrders.status',
  'ui.projectDetailWorkspace.input.listChangeOrders.projectId',
  'ui.projectDetailWorkspace.input.listChangeOrders.status',
  'ui.projectDetailWorkspace.input.listChangeOrders.impactType',
  'ui.projectDetailWorkspace.input.listChangeOrders.page',
  'ui.projectDetailWorkspace.input.listChangeOrders.pageSize',
  'ui.projectDetailWorkspace.data.listChangeOrders',
  'ui.projectDetailWorkspace.action.getChangeOrderDetail.status',
  'ui.projectDetailWorkspace.input.getChangeOrderDetail.changeOrderId',
  'ui.projectDetailWorkspace.data.getChangeOrderDetail',
  'ui.projectDetailWorkspace.action.listTimeLogs.status',
  'ui.projectDetailWorkspace.input.listTimeLogs.workTaskId',
  'ui.projectDetailWorkspace.input.listTimeLogs.workerName',
  'ui.projectDetailWorkspace.input.listTimeLogs.logDate',
  'ui.projectDetailWorkspace.input.listTimeLogs.status',
  'ui.projectDetailWorkspace.input.listTimeLogs.page',
  'ui.projectDetailWorkspace.input.listTimeLogs.pageSize',
  'ui.projectDetailWorkspace.data.listTimeLogs',
  'ui.projectDetailWorkspace.action.listMaterialUsages.status',
  'ui.projectDetailWorkspace.input.listMaterialUsages.projectId',
  'ui.projectDetailWorkspace.input.listMaterialUsages.status',
  'ui.projectDetailWorkspace.input.listMaterialUsages.page',
  'ui.projectDetailWorkspace.input.listMaterialUsages.pageSize',
  'ui.projectDetailWorkspace.data.listMaterialUsages',
  'ui.projectDetailWorkspace.action.triggerDelayRiskSuggestions.status',
  'ui.projectDetailWorkspace.input.triggerDelayRiskSuggestions.statusReportId',
  'ui.projectDetailWorkspace.output.triggerDelayRiskSuggestions',
  'ui.projectDetailWorkspace.action.triggerDelayRiskSuggestions.error',
  'ui.projectDetailWorkspace.action.listDelayRiskSuggestions.status',
  'ui.projectDetailWorkspace.input.listDelayRiskSuggestions.statusReportId',
  'ui.projectDetailWorkspace.input.listDelayRiskSuggestions.acknowledged',
  'ui.projectDetailWorkspace.data.listDelayRiskSuggestions',
];

export class BuildFlowFsmProjectDetailWorkspaceBase extends CollabLitElement {
  /** state status — pageStatus */
  @property() status: string = '';
  /** state getProjectDetailState — actionStatus, values: idle|loading|success|error */
  @property() getProjectDetailState: ActionStatus = 'idle';
  /** state getProjectDetailProjectId — input */
  @property() getProjectDetailProjectId: string = '';
  /** state getProjectDetailData — queryResult, outputShape: object */
  @property() getProjectDetailData: GetProjectDetailOutput | null = null;
  /** state listWorkTasksState — actionStatus, values: idle|loading|success|error */
  @property() listWorkTasksState: ActionStatus = 'idle';
  /** state listWorkTasksProjectId — input */
  @property() listWorkTasksProjectId: string = '';
  /** state listWorkTasksStatus — input */
  @property() listWorkTasksStatus: string = '';
  /** state listWorkTasksAssignedWorkerId — input */
  @property() listWorkTasksAssignedWorkerId: string = '';
  /** state listWorkTasksPage — input */
  @property() listWorkTasksPage: string = '';
  /** state listWorkTasksPageSize — input */
  @property() listWorkTasksPageSize: string = '';
  /** state listWorkTasksData — queryResult, outputShape: paginated */
  @property() listWorkTasksData: ListWorkTasksOutput = { workTasks: [], total: 0 };
  /** state listChangeOrdersState — actionStatus, values: idle|loading|success|error */
  @property() listChangeOrdersState: ActionStatus = 'idle';
  /** state listChangeOrdersProjectId — input */
  @property() listChangeOrdersProjectId: string = '';
  /** state listChangeOrdersStatus — input */
  @property() listChangeOrdersStatus: string = '';
  /** state listChangeOrdersImpactType — input */
  @property() listChangeOrdersImpactType: string = '';
  /** state listChangeOrdersPage — input */
  @property() listChangeOrdersPage: string = '';
  /** state listChangeOrdersPageSize — input */
  @property() listChangeOrdersPageSize: string = '';
  /** state listChangeOrdersData — queryResult, outputShape: paginated */
  @property() listChangeOrdersData: ListChangeOrdersOutput = { changeOrders: [], total: 0 };
  /** state getChangeOrderDetailState — actionStatus, values: idle|loading|success|error */
  @property() getChangeOrderDetailState: ActionStatus = 'idle';
  /** state getChangeOrderDetailChangeOrderId — input */
  @property() getChangeOrderDetailChangeOrderId: string = '';
  /** state getChangeOrderDetailData — queryResult, outputShape: object */
  @property() getChangeOrderDetailData: GetChangeOrderDetailOutput | null = null;
  /** state listTimeLogsState — actionStatus, values: idle|loading|success|error */
  @property() listTimeLogsState: ActionStatus = 'idle';
  /** state listTimeLogsWorkTaskId — input */
  @property() listTimeLogsWorkTaskId: string = '';
  /** state listTimeLogsWorkerName — input */
  @property() listTimeLogsWorkerName: string = '';
  /** state listTimeLogsLogDate — input */
  @property() listTimeLogsLogDate: string = '';
  /** state listTimeLogsStatus — input */
  @property() listTimeLogsStatus: string = '';
  /** state listTimeLogsPage — input */
  @property() listTimeLogsPage: string = '';
  /** state listTimeLogsPageSize — input */
  @property() listTimeLogsPageSize: string = '';
  /** state listTimeLogsData — queryResult, outputShape: paginated */
  @property() listTimeLogsData: ListTimeLogsOutput = { timeLogs: [], total: 0 };
  /** state listMaterialUsagesState — actionStatus, values: idle|loading|success|error */
  @property() listMaterialUsagesState: ActionStatus = 'idle';
  /** state listMaterialUsagesProjectId — input */
  @property() listMaterialUsagesProjectId: string = '';
  /** state listMaterialUsagesStatus — input */
  @property() listMaterialUsagesStatus: string = '';
  /** state listMaterialUsagesPage — input */
  @property() listMaterialUsagesPage: string = '';
  /** state listMaterialUsagesPageSize — input */
  @property() listMaterialUsagesPageSize: string = '';
  /** state listMaterialUsagesData — queryResult, outputShape: paginated */
  @property() listMaterialUsagesData: ListMaterialUsagesOutput = { materialUsages: [], total: 0 };
  /** state triggerDelayRiskSuggestionsState — actionStatus, values: idle|loading|success|error */
  @property() triggerDelayRiskSuggestionsState: ActionStatus = 'idle';
  /** state triggerDelayRiskSuggestionsStatusReportId — input */
  @property() triggerDelayRiskSuggestionsStatusReportId: string = '';
  /** state triggerDelayRiskSuggestionsOutput — commandOutput */
  @property() triggerDelayRiskSuggestionsOutput: TriggerDelayRiskSuggestionsOutput | null = null;
  /** state triggerDelayRiskSuggestionsError — actionError */
  @property() triggerDelayRiskSuggestionsError: string = '';
  /** state listDelayRiskSuggestionsState — actionStatus, values: idle|loading|success|error */
  @property() listDelayRiskSuggestionsState: ActionStatus = 'idle';
  /** state listDelayRiskSuggestionsStatusReportId — input */
  @property() listDelayRiskSuggestionsStatusReportId: string = '';
  /** state listDelayRiskSuggestionsAcknowledged — input */
  @property() listDelayRiskSuggestionsAcknowledged: string = '';
  /** state listDelayRiskSuggestionsData — queryResult, outputShape: array */
  @property() listDelayRiskSuggestionsData: ListDelayRiskSuggestionsOutput[] = [];

  /** i18n catalog — MessageType keys are the CLOSED msg vocabulary for page renders */
  protected get msg(): MessageType {
    const lang: string = this.getMessageKey(messages);
    return messages[lang] || message_en;
  }

  connectedCallback(): void {
    super.connectedCallback();
    this.initStateValue('ui.projectDetailWorkspace.status', 'status', '');
    this.initStateValue('ui.projectDetailWorkspace.action.getProjectDetail.status', 'getProjectDetailState', 'idle');
    this.initStateValue('ui.projectDetailWorkspace.input.getProjectDetail.projectId', 'getProjectDetailProjectId', '');
    this.initStateValue('ui.projectDetailWorkspace.data.getProjectDetail', 'getProjectDetailData', null);
    this.initStateValue('ui.projectDetailWorkspace.action.listWorkTasks.status', 'listWorkTasksState', 'idle');
    this.initStateValue('ui.projectDetailWorkspace.input.listWorkTasks.projectId', 'listWorkTasksProjectId', '');
    this.initStateValue('ui.projectDetailWorkspace.input.listWorkTasks.status', 'listWorkTasksStatus', '');
    this.initStateValue('ui.projectDetailWorkspace.input.listWorkTasks.assignedWorkerId', 'listWorkTasksAssignedWorkerId', '');
    this.initStateValue('ui.projectDetailWorkspace.input.listWorkTasks.page', 'listWorkTasksPage', '');
    this.initStateValue('ui.projectDetailWorkspace.input.listWorkTasks.pageSize', 'listWorkTasksPageSize', '');
    this.initStateValue('ui.projectDetailWorkspace.data.listWorkTasks', 'listWorkTasksData', { workTasks: [], total: 0 });
    this.initStateValue('ui.projectDetailWorkspace.action.listChangeOrders.status', 'listChangeOrdersState', 'idle');
    this.initStateValue('ui.projectDetailWorkspace.input.listChangeOrders.projectId', 'listChangeOrdersProjectId', '');
    this.initStateValue('ui.projectDetailWorkspace.input.listChangeOrders.status', 'listChangeOrdersStatus', '');
    this.initStateValue('ui.projectDetailWorkspace.input.listChangeOrders.impactType', 'listChangeOrdersImpactType', '');
    this.initStateValue('ui.projectDetailWorkspace.input.listChangeOrders.page', 'listChangeOrdersPage', '');
    this.initStateValue('ui.projectDetailWorkspace.input.listChangeOrders.pageSize', 'listChangeOrdersPageSize', '');
    this.initStateValue('ui.projectDetailWorkspace.data.listChangeOrders', 'listChangeOrdersData', { changeOrders: [], total: 0 });
    this.initStateValue('ui.projectDetailWorkspace.action.getChangeOrderDetail.status', 'getChangeOrderDetailState', 'idle');
    this.initStateValue('ui.projectDetailWorkspace.input.getChangeOrderDetail.changeOrderId', 'getChangeOrderDetailChangeOrderId', '');
    this.initStateValue('ui.projectDetailWorkspace.data.getChangeOrderDetail', 'getChangeOrderDetailData', null);
    this.initStateValue('ui.projectDetailWorkspace.action.listTimeLogs.status', 'listTimeLogsState', 'idle');
    this.initStateValue('ui.projectDetailWorkspace.input.listTimeLogs.workTaskId', 'listTimeLogsWorkTaskId', '');
    this.initStateValue('ui.projectDetailWorkspace.input.listTimeLogs.workerName', 'listTimeLogsWorkerName', '');
    this.initStateValue('ui.projectDetailWorkspace.input.listTimeLogs.logDate', 'listTimeLogsLogDate', '');
    this.initStateValue('ui.projectDetailWorkspace.input.listTimeLogs.status', 'listTimeLogsStatus', '');
    this.initStateValue('ui.projectDetailWorkspace.input.listTimeLogs.page', 'listTimeLogsPage', '');
    this.initStateValue('ui.projectDetailWorkspace.input.listTimeLogs.pageSize', 'listTimeLogsPageSize', '');
    this.initStateValue('ui.projectDetailWorkspace.data.listTimeLogs', 'listTimeLogsData', { timeLogs: [], total: 0 });
    this.initStateValue('ui.projectDetailWorkspace.action.listMaterialUsages.status', 'listMaterialUsagesState', 'idle');
    this.initStateValue('ui.projectDetailWorkspace.input.listMaterialUsages.projectId', 'listMaterialUsagesProjectId', '');
    this.initStateValue('ui.projectDetailWorkspace.input.listMaterialUsages.status', 'listMaterialUsagesStatus', '');
    this.initStateValue('ui.projectDetailWorkspace.input.listMaterialUsages.page', 'listMaterialUsagesPage', '');
    this.initStateValue('ui.projectDetailWorkspace.input.listMaterialUsages.pageSize', 'listMaterialUsagesPageSize', '');
    this.initStateValue('ui.projectDetailWorkspace.data.listMaterialUsages', 'listMaterialUsagesData', { materialUsages: [], total: 0 });
    this.initStateValue('ui.projectDetailWorkspace.action.triggerDelayRiskSuggestions.status', 'triggerDelayRiskSuggestionsState', 'idle');
    this.initStateValue('ui.projectDetailWorkspace.input.triggerDelayRiskSuggestions.statusReportId', 'triggerDelayRiskSuggestionsStatusReportId', '');
    this.initStateValue('ui.projectDetailWorkspace.output.triggerDelayRiskSuggestions', 'triggerDelayRiskSuggestionsOutput', null);
    this.initStateValue('ui.projectDetailWorkspace.action.triggerDelayRiskSuggestions.error', 'triggerDelayRiskSuggestionsError', '');
    this.initStateValue('ui.projectDetailWorkspace.action.listDelayRiskSuggestions.status', 'listDelayRiskSuggestionsState', 'idle');
    this.initStateValue('ui.projectDetailWorkspace.input.listDelayRiskSuggestions.statusReportId', 'listDelayRiskSuggestionsStatusReportId', '');
    this.initStateValue('ui.projectDetailWorkspace.input.listDelayRiskSuggestions.acknowledged', 'listDelayRiskSuggestionsAcknowledged', '');
    this.initStateValue('ui.projectDetailWorkspace.data.listDelayRiskSuggestions', 'listDelayRiskSuggestionsData', []);
    subscribe(SUBSCRIBED_KEYS, this);
    void this.loadListTimeLogs();
  }

  disconnectedCallback(): void {
    unsubscribe(SUBSCRIBED_KEYS, this);
    super.disconnectedCallback();
  }

  /** Notify contract of collabState — assign subscribed values to class fields */
  handleIcaStateChange(key: string, value: unknown): void {
    switch (key) {
      case 'ui.projectDetailWorkspace.status':
        this.status = value as string;
        break;
      case 'ui.projectDetailWorkspace.action.getProjectDetail.status':
        this.getProjectDetailState = value as ActionStatus;
        break;
      case 'ui.projectDetailWorkspace.input.getProjectDetail.projectId':
        this.getProjectDetailProjectId = value as string;
        break;
      case 'ui.projectDetailWorkspace.data.getProjectDetail':
        this.getProjectDetailData = value as GetProjectDetailOutput | null;
        break;
      case 'ui.projectDetailWorkspace.action.listWorkTasks.status':
        this.listWorkTasksState = value as ActionStatus;
        break;
      case 'ui.projectDetailWorkspace.input.listWorkTasks.projectId':
        this.listWorkTasksProjectId = value as string;
        break;
      case 'ui.projectDetailWorkspace.input.listWorkTasks.status':
        this.listWorkTasksStatus = value as string;
        break;
      case 'ui.projectDetailWorkspace.input.listWorkTasks.assignedWorkerId':
        this.listWorkTasksAssignedWorkerId = value as string;
        break;
      case 'ui.projectDetailWorkspace.input.listWorkTasks.page':
        this.listWorkTasksPage = value as string;
        break;
      case 'ui.projectDetailWorkspace.input.listWorkTasks.pageSize':
        this.listWorkTasksPageSize = value as string;
        break;
      case 'ui.projectDetailWorkspace.data.listWorkTasks':
        this.listWorkTasksData = value as ListWorkTasksOutput;
        break;
      case 'ui.projectDetailWorkspace.action.listChangeOrders.status':
        this.listChangeOrdersState = value as ActionStatus;
        break;
      case 'ui.projectDetailWorkspace.input.listChangeOrders.projectId':
        this.listChangeOrdersProjectId = value as string;
        break;
      case 'ui.projectDetailWorkspace.input.listChangeOrders.status':
        this.listChangeOrdersStatus = value as string;
        break;
      case 'ui.projectDetailWorkspace.input.listChangeOrders.impactType':
        this.listChangeOrdersImpactType = value as string;
        break;
      case 'ui.projectDetailWorkspace.input.listChangeOrders.page':
        this.listChangeOrdersPage = value as string;
        break;
      case 'ui.projectDetailWorkspace.input.listChangeOrders.pageSize':
        this.listChangeOrdersPageSize = value as string;
        break;
      case 'ui.projectDetailWorkspace.data.listChangeOrders':
        this.listChangeOrdersData = value as ListChangeOrdersOutput;
        break;
      case 'ui.projectDetailWorkspace.action.getChangeOrderDetail.status':
        this.getChangeOrderDetailState = value as ActionStatus;
        break;
      case 'ui.projectDetailWorkspace.input.getChangeOrderDetail.changeOrderId':
        this.getChangeOrderDetailChangeOrderId = value as string;
        break;
      case 'ui.projectDetailWorkspace.data.getChangeOrderDetail':
        this.getChangeOrderDetailData = value as GetChangeOrderDetailOutput | null;
        break;
      case 'ui.projectDetailWorkspace.action.listTimeLogs.status':
        this.listTimeLogsState = value as ActionStatus;
        break;
      case 'ui.projectDetailWorkspace.input.listTimeLogs.workTaskId':
        this.listTimeLogsWorkTaskId = value as string;
        break;
      case 'ui.projectDetailWorkspace.input.listTimeLogs.workerName':
        this.listTimeLogsWorkerName = value as string;
        break;
      case 'ui.projectDetailWorkspace.input.listTimeLogs.logDate':
        this.listTimeLogsLogDate = value as string;
        break;
      case 'ui.projectDetailWorkspace.input.listTimeLogs.status':
        this.listTimeLogsStatus = value as string;
        break;
      case 'ui.projectDetailWorkspace.input.listTimeLogs.page':
        this.listTimeLogsPage = value as string;
        break;
      case 'ui.projectDetailWorkspace.input.listTimeLogs.pageSize':
        this.listTimeLogsPageSize = value as string;
        break;
      case 'ui.projectDetailWorkspace.data.listTimeLogs':
        this.listTimeLogsData = value as ListTimeLogsOutput;
        break;
      case 'ui.projectDetailWorkspace.action.listMaterialUsages.status':
        this.listMaterialUsagesState = value as ActionStatus;
        break;
      case 'ui.projectDetailWorkspace.input.listMaterialUsages.projectId':
        this.listMaterialUsagesProjectId = value as string;
        break;
      case 'ui.projectDetailWorkspace.input.listMaterialUsages.status':
        this.listMaterialUsagesStatus = value as string;
        break;
      case 'ui.projectDetailWorkspace.input.listMaterialUsages.page':
        this.listMaterialUsagesPage = value as string;
        break;
      case 'ui.projectDetailWorkspace.input.listMaterialUsages.pageSize':
        this.listMaterialUsagesPageSize = value as string;
        break;
      case 'ui.projectDetailWorkspace.data.listMaterialUsages':
        this.listMaterialUsagesData = value as ListMaterialUsagesOutput;
        break;
      case 'ui.projectDetailWorkspace.action.triggerDelayRiskSuggestions.status':
        this.triggerDelayRiskSuggestionsState = value as ActionStatus;
        break;
      case 'ui.projectDetailWorkspace.input.triggerDelayRiskSuggestions.statusReportId':
        this.triggerDelayRiskSuggestionsStatusReportId = value as string;
        break;
      case 'ui.projectDetailWorkspace.output.triggerDelayRiskSuggestions':
        this.triggerDelayRiskSuggestionsOutput = value as TriggerDelayRiskSuggestionsOutput | null;
        break;
      case 'ui.projectDetailWorkspace.action.triggerDelayRiskSuggestions.error':
        this.triggerDelayRiskSuggestionsError = value as string;
        break;
      case 'ui.projectDetailWorkspace.action.listDelayRiskSuggestions.status':
        this.listDelayRiskSuggestionsState = value as ActionStatus;
        break;
      case 'ui.projectDetailWorkspace.input.listDelayRiskSuggestions.statusReportId':
        this.listDelayRiskSuggestionsStatusReportId = value as string;
        break;
      case 'ui.projectDetailWorkspace.input.listDelayRiskSuggestions.acknowledged':
        this.listDelayRiskSuggestionsAcknowledged = value as string;
        break;
      case 'ui.projectDetailWorkspace.data.listDelayRiskSuggestions':
        this.listDelayRiskSuggestionsData = value as ListDelayRiskSuggestionsOutput[];
        break;
      default:
        break;
    }
    this.requestUpdate();
  }

  private initStateValue(stateKey: string, propName: string, defaultValue: unknown): void {
    const existing: unknown = getState(stateKey);
    const value: unknown = existing !== undefined ? existing : defaultValue;
    (this as unknown as Record<string, unknown>)[propName] = value;
    if (existing === undefined) {
      setState(stateKey, value);
    }
  }

  private applyRouteParams(): void {
    const pattern: string = '/buildFlowFsm/projectDetailWorkspace/:projectId?/:changeOrderId?';
    const patternParts: string[] = pattern.split('/').filter((p: string) => p.length > 0);
    const pathParts: string[] = window.location.pathname.split('/').filter((p: string) => p.length > 0);
    const paramMap: Record<string, string> = {};
    let pathIndex: number = 0;
    for (let i: number = 0; i < patternParts.length; i++) {
      const part: string = patternParts[i];
      if (part.startsWith(':')) {
        const optional: boolean = part.endsWith('?');
        const name: string = optional ? part.slice(1, -1) : part.slice(1);
        if (pathIndex < pathParts.length) {
          paramMap[name] = decodeURIComponent(pathParts[pathIndex]);
          pathIndex++;
        } else if (!optional) {
          paramMap[name] = '';
        }
      } else {
        if (pathIndex < pathParts.length && pathParts[pathIndex] === part) {
          pathIndex++;
        }
      }
    }
    if (paramMap['projectId'] !== undefined && paramMap['projectId'] !== '') {
      if (!this.getProjectDetailProjectId) {
        this.getProjectDetailProjectId = paramMap['projectId'];
        setState('ui.projectDetailWorkspace.input.getProjectDetail.projectId', paramMap['projectId']);
      }
    }
    if (paramMap['changeOrderId'] !== undefined && paramMap['changeOrderId'] !== '') {
      if (!this.getChangeOrderDetailChangeOrderId) {
        this.getChangeOrderDetailChangeOrderId = paramMap['changeOrderId'];
        setState('ui.projectDetailWorkspace.input.getChangeOrderDetail.changeOrderId', paramMap['changeOrderId']);
      }
    }
  }

  private optionalNumber(value: string): number | undefined {
    if (value === '' || value === undefined || value === null) {
      return undefined;
    }
    const n: number = Number(value);
    return Number.isFinite(n) ? n : undefined;
  }

  private optionalString(value: string): string | undefined {
    if (value === '' || value === undefined || value === null) {
      return undefined;
    }
    return value;
  }

  private optionalBoolean(value: string): boolean | undefined {
    if (value === '' || value === undefined || value === null) {
      return undefined;
    }
    if (value === 'true' || value === '1') {
      return true;
    }
    if (value === 'false' || value === '0') {
      return false;
    }
    return undefined;
  }

  /** action getProjectDetail (query) — route buildFlowFsm.projectDetailWorkspace.getProjectDetail; inputs: projectId; writes ui.projectDetailWorkspace.data.getProjectDetail; status ui.projectDetailWorkspace.action.getProjectDetail.status */
  async loadGetProjectDetail(): Promise<void> {
    this.applyRouteParams();
    const projectId: string = this.getProjectDetailProjectId;
    if (!projectId) {
      this.getProjectDetailState = 'idle';
      setState('ui.projectDetailWorkspace.action.getProjectDetail.status', 'idle');
      this.getProjectDetailData = null;
      setState('ui.projectDetailWorkspace.data.getProjectDetail', null);
      return;
    }
    this.getProjectDetailState = 'loading';
    setState('ui.projectDetailWorkspace.action.getProjectDetail.status', 'loading');
    const options: BffClientOptions = { mode: 'silent' };
    const response = await execBff<GetProjectDetailOutput>(getProjectDetailRoute, { projectId }, options);
    if (response.ok) {
      const data: GetProjectDetailOutput | null = response.data ?? null;
      this.getProjectDetailData = data;
      setState('ui.projectDetailWorkspace.data.getProjectDetail', data);
      this.getProjectDetailState = 'success';
      setState('ui.projectDetailWorkspace.action.getProjectDetail.status', 'success');
    } else {
      console.error('getProjectDetail failed', response.error);
      this.getProjectDetailState = 'error';
      setState('ui.projectDetailWorkspace.action.getProjectDetail.status', 'error');
    }
  }

  /** handler for action getProjectDetail — bind UI events here */
  handleGetProjectDetailClick(_e?: Event): void {
    void this.loadGetProjectDetail();
  }

  /** action listWorkTasks (query) — route buildFlowFsm.projectDetailWorkspace.listWorkTasks; inputs: projectId, status, assignedWorkerId, page, pageSize; writes ui.projectDetailWorkspace.data.listWorkTasks; status ui.projectDetailWorkspace.action.listWorkTasks.status */
  async loadListWorkTasks(): Promise<void> {
    this.listWorkTasksState = 'loading';
    setState('ui.projectDetailWorkspace.action.listWorkTasks.status', 'loading');
    const params: Record<string, unknown> = {
      projectId: this.listWorkTasksProjectId,
    };
    const status: string | undefined = this.optionalString(this.listWorkTasksStatus);
    if (status !== undefined) params['status'] = status;
    const assignedWorkerId: string | undefined = this.optionalString(this.listWorkTasksAssignedWorkerId);
    if (assignedWorkerId !== undefined) params['assignedWorkerId'] = assignedWorkerId;
    const page: number | undefined = this.optionalNumber(this.listWorkTasksPage);
    if (page !== undefined) params['page'] = page;
    const pageSize: number | undefined = this.optionalNumber(this.listWorkTasksPageSize);
    if (pageSize !== undefined) params['pageSize'] = pageSize;
    const options: BffClientOptions = { mode: 'silent' };
    const response = await execBff<ListWorkTasksOutput>(listWorkTasksRoute, params, options);
    if (response.ok) {
      const data: ListWorkTasksOutput = response.data ?? { workTasks: [], total: 0 };
      this.listWorkTasksData = data;
      setState('ui.projectDetailWorkspace.data.listWorkTasks', data);
      this.listWorkTasksState = 'success';
      setState('ui.projectDetailWorkspace.action.listWorkTasks.status', 'success');
    } else {
      console.error('listWorkTasks failed', response.error);
      this.listWorkTasksState = 'error';
      setState('ui.projectDetailWorkspace.action.listWorkTasks.status', 'error');
    }
  }

  /** handler for action listWorkTasks — bind UI events here */
  handleListWorkTasksClick(_e?: Event): void {
    void this.loadListWorkTasks();
  }

  /** action listChangeOrders (query) — route buildFlowFsm.projectDetailWorkspace.listChangeOrders; inputs: projectId, status, impactType, page, pageSize; writes ui.projectDetailWorkspace.data.listChangeOrders; status ui.projectDetailWorkspace.action.listChangeOrders.status */
  async loadListChangeOrders(): Promise<void> {
    this.listChangeOrdersState = 'loading';
    setState('ui.projectDetailWorkspace.action.listChangeOrders.status', 'loading');
    const params: Record<string, unknown> = {
      projectId: this.listChangeOrdersProjectId,
    };
    const status: string | undefined = this.optionalString(this.listChangeOrdersStatus);
    if (status !== undefined) params['status'] = status;
    const impactType: string | undefined = this.optionalString(this.listChangeOrdersImpactType);
    if (impactType !== undefined) params['impactType'] = impactType;
    const page: number | undefined = this.optionalNumber(this.listChangeOrdersPage);
    if (page !== undefined) params['page'] = page;
    const pageSize: number | undefined = this.optionalNumber(this.listChangeOrdersPageSize);
    if (pageSize !== undefined) params['pageSize'] = pageSize;
    const options: BffClientOptions = { mode: 'silent' };
    const response = await execBff<ListChangeOrdersOutput>(listChangeOrdersRoute, params, options);
    if (response.ok) {
      const data: ListChangeOrdersOutput = response.data ?? { changeOrders: [], total: 0 };
      this.listChangeOrdersData = data;
      setState('ui.projectDetailWorkspace.data.listChangeOrders', data);
      this.listChangeOrdersState = 'success';
      setState('ui.projectDetailWorkspace.action.listChangeOrders.status', 'success');
    } else {
      console.error('listChangeOrders failed', response.error);
      this.listChangeOrdersState = 'error';
      setState('ui.projectDetailWorkspace.action.listChangeOrders.status', 'error');
    }
  }

  /** handler for action listChangeOrders — bind UI events here */
  handleListChangeOrdersClick(_e?: Event): void {
    void this.loadListChangeOrders();
  }

  /** action getChangeOrderDetail (query) — route buildFlowFsm.projectDetailWorkspace.getChangeOrderDetail; inputs: changeOrderId; writes ui.projectDetailWorkspace.data.getChangeOrderDetail; status ui.projectDetailWorkspace.action.getChangeOrderDetail.status */
  async loadGetChangeOrderDetail(): Promise<void> {
    this.applyRouteParams();
    const changeOrderId: string = this.getChangeOrderDetailChangeOrderId;
    if (!changeOrderId) {
      this.getChangeOrderDetailState = 'idle';
      setState('ui.projectDetailWorkspace.action.getChangeOrderDetail.status', 'idle');
      this.getChangeOrderDetailData = null;
      setState('ui.projectDetailWorkspace.data.getChangeOrderDetail', null);
      return;
    }
    this.getChangeOrderDetailState = 'loading';
    setState('ui.projectDetailWorkspace.action.getChangeOrderDetail.status', 'loading');
    const options: BffClientOptions = { mode: 'silent' };
    const response = await execBff<GetChangeOrderDetailOutput>(getChangeOrderDetailRoute, { changeOrderId }, options);
    if (response.ok) {
      const data: GetChangeOrderDetailOutput | null = response.data ?? null;
      this.getChangeOrderDetailData = data;
      setState('ui.projectDetailWorkspace.data.getChangeOrderDetail', data);
      this.getChangeOrderDetailState = 'success';
      setState('ui.projectDetailWorkspace.action.getChangeOrderDetail.status', 'success');
    } else {
      console.error('getChangeOrderDetail failed', response.error);
      this.getChangeOrderDetailState = 'error';
      setState('ui.projectDetailWorkspace.action.getChangeOrderDetail.status', 'error');
    }
  }

  /** handler for action getChangeOrderDetail — bind UI events here */
  handleGetChangeOrderDetailClick(_e?: Event): void {
    void this.loadGetChangeOrderDetail();
  }

  /** action listTimeLogs (query) — route buildFlowFsm.projectDetailWorkspace.listTimeLogs; inputs: workTaskId, workerName, logDate, status, page, pageSize; writes ui.projectDetailWorkspace.data.listTimeLogs; status ui.projectDetailWorkspace.action.listTimeLogs.status */
  async loadListTimeLogs(): Promise<void> {
    this.listTimeLogsState = 'loading';
    setState('ui.projectDetailWorkspace.action.listTimeLogs.status', 'loading');
    const params: Record<string, unknown> = {};
    const workTaskId: string | undefined = this.optionalString(this.listTimeLogsWorkTaskId);
    if (workTaskId !== undefined) params['workTaskId'] = workTaskId;
    const workerName: string | undefined = this.optionalString(this.listTimeLogsWorkerName);
    if (workerName !== undefined) params['workerName'] = workerName;
    const logDate: string | undefined = this.optionalString(this.listTimeLogsLogDate);
    if (logDate !== undefined) params['logDate'] = logDate;
    const status: string | undefined = this.optionalString(this.listTimeLogsStatus);
    if (status !== undefined) params['status'] = status;
    const page: number | undefined = this.optionalNumber(this.listTimeLogsPage);
    if (page !== undefined) params['page'] = page;
    const pageSize: number | undefined = this.optionalNumber(this.listTimeLogsPageSize);
    if (pageSize !== undefined) params['pageSize'] = pageSize;
    const options: BffClientOptions = { mode: 'silent' };
    const response = await execBff<ListTimeLogsOutput>(listTimeLogsRoute, params, options);
    if (response.ok) {
      const data: ListTimeLogsOutput = response.data ?? { timeLogs: [], total: 0 };
      this.listTimeLogsData = data;
      setState('ui.projectDetailWorkspace.data.listTimeLogs', data);
      this.listTimeLogsState = 'success';
      setState('ui.projectDetailWorkspace.action.listTimeLogs.status', 'success');
    } else {
      console.error('listTimeLogs failed', response.error);
      this.listTimeLogsState = 'error';
      setState('ui.projectDetailWorkspace.action.listTimeLogs.status', 'error');
    }
  }

  /** handler for action listTimeLogs — bind UI events here */
  handleListTimeLogsClick(_e?: Event): void {
    void this.loadListTimeLogs();
  }

  /** action listMaterialUsages (query) — route buildFlowFsm.projectDetailWorkspace.listMaterialUsages; inputs: projectId, status, page, pageSize; writes ui.projectDetailWorkspace.data.listMaterialUsages; status ui.projectDetailWorkspace.action.listMaterialUsages.status */
  async loadListMaterialUsages(): Promise<void> {
    this.listMaterialUsagesState = 'loading';
    setState('ui.projectDetailWorkspace.action.listMaterialUsages.status', 'loading');
    const params: Record<string, unknown> = {
      projectId: this.listMaterialUsagesProjectId,
    };
    const status: string | undefined = this.optionalString(this.listMaterialUsagesStatus);
    if (status !== undefined) params['status'] = status;
    const page: number | undefined = this.optionalNumber(this.listMaterialUsagesPage);
    if (page !== undefined) params['page'] = page;
    const pageSize: number | undefined = this.optionalNumber(this.listMaterialUsagesPageSize);
    if (pageSize !== undefined) params['pageSize'] = pageSize;
    const options: BffClientOptions = { mode: 'silent' };
    const response = await execBff<ListMaterialUsagesOutput>(listMaterialUsagesRoute, params, options);
    if (response.ok) {
      const data: ListMaterialUsagesOutput = response.data ?? { materialUsages: [], total: 0 };
      this.listMaterialUsagesData = data;
      setState('ui.projectDetailWorkspace.data.listMaterialUsages', data);
      this.listMaterialUsagesState = 'success';
      setState('ui.projectDetailWorkspace.action.listMaterialUsages.status', 'success');
    } else {
      console.error('listMaterialUsages failed', response.error);
      this.listMaterialUsagesState = 'error';
      setState('ui.projectDetailWorkspace.action.listMaterialUsages.status', 'error');
    }
  }

  /** handler for action listMaterialUsages — bind UI events here */
  handleListMaterialUsagesClick(_e?: Event): void {
    void this.loadListMaterialUsages();
  }

  /** action triggerDelayRiskSuggestions (command) — route buildFlowFsm.projectDetailWorkspace.triggerDelayRiskSuggestions; inputs: statusReportId; writes ui.projectDetailWorkspace.output.triggerDelayRiskSuggestions; status ui.projectDetailWorkspace.action.triggerDelayRiskSuggestions.status; feedback keys action.triggerDelayRiskSuggestions.success / action.triggerDelayRiskSuggestions.error */
  async triggerDelayRiskSuggestions(): Promise<void> {
    this.triggerDelayRiskSuggestionsState = 'loading';
    setState('ui.projectDetailWorkspace.action.triggerDelayRiskSuggestions.status', 'loading');
    this.triggerDelayRiskSuggestionsError = '';
    setState('ui.projectDetailWorkspace.action.triggerDelayRiskSuggestions.error', '');
    const params: Record<string, unknown> = {
      statusReportId: this.triggerDelayRiskSuggestionsStatusReportId,
    };
    const options: BffClientOptions = { mode: 'blocking' };
    const response = await execBff<TriggerDelayRiskSuggestionsOutput>(triggerDelayRiskSuggestionsRoute, params, options);
    if (response.ok) {
      const data: TriggerDelayRiskSuggestionsOutput | null = response.data ?? null;
      this.triggerDelayRiskSuggestionsOutput = data;
      setState('ui.projectDetailWorkspace.output.triggerDelayRiskSuggestions', data);
      try {
        await this.loadGetProjectDetail();
        await this.loadListWorkTasks();
        await this.loadListChangeOrders();
        await this.loadGetChangeOrderDetail();
        await this.loadListTimeLogs();
        await this.loadListMaterialUsages();
        await this.loadListDelayRiskSuggestions();
      } catch (refreshErr: unknown) {
        console.error('triggerDelayRiskSuggestions refresh failed', refreshErr);
        this.triggerDelayRiskSuggestionsState = 'error';
        setState('ui.projectDetailWorkspace.action.triggerDelayRiskSuggestions.status', 'error');
        return;
      }
      this.triggerDelayRiskSuggestionsStatusReportId = '';
      setState('ui.projectDetailWorkspace.input.triggerDelayRiskSuggestions.statusReportId', '');
      this.triggerDelayRiskSuggestionsState = 'success';
      setState('ui.projectDetailWorkspace.action.triggerDelayRiskSuggestions.status', 'success');
    } else {
      const errMsg: string = response.error?.message ?? '';
      this.triggerDelayRiskSuggestionsError = errMsg;
      setState('ui.projectDetailWorkspace.action.triggerDelayRiskSuggestions.error', errMsg);
      console.error('triggerDelayRiskSuggestions failed', response.error);
      this.triggerDelayRiskSuggestionsState = 'error';
      setState('ui.projectDetailWorkspace.action.triggerDelayRiskSuggestions.status', 'error');
    }
  }

  /** handler for action triggerDelayRiskSuggestions — bind UI events here */
  handleTriggerDelayRiskSuggestionsClick(_e?: Event): void {
    void runBlockingUiAction(async (_signal: AbortSignal) => {
      await this.triggerDelayRiskSuggestions();
    });
  }

  /** action listDelayRiskSuggestions (query) — route buildFlowFsm.projectDetailWorkspace.listDelayRiskSuggestions; inputs: statusReportId, acknowledged; writes ui.projectDetailWorkspace.data.listDelayRiskSuggestions; status ui.projectDetailWorkspace.action.listDelayRiskSuggestions.status */
  async loadListDelayRiskSuggestions(): Promise<void> {
    this.listDelayRiskSuggestionsState = 'loading';
    setState('ui.projectDetailWorkspace.action.listDelayRiskSuggestions.status', 'loading');
    const params: Record<string, unknown> = {
      statusReportId: this.listDelayRiskSuggestionsStatusReportId,
    };
    const acknowledged: boolean | undefined = this.optionalBoolean(this.listDelayRiskSuggestionsAcknowledged);
    if (acknowledged !== undefined) params['acknowledged'] = acknowledged;
    const options: BffClientOptions = { mode: 'silent' };
    const response = await execBff<ListDelayRiskSuggestionsOutput[]>(listDelayRiskSuggestionsRoute, params, options);
    if (response.ok) {
      const data: ListDelayRiskSuggestionsOutput[] = response.data ?? [];
      this.listDelayRiskSuggestionsData = data;
      setState('ui.projectDetailWorkspace.data.listDelayRiskSuggestions', data);
      this.listDelayRiskSuggestionsState = 'success';
      setState('ui.projectDetailWorkspace.action.listDelayRiskSuggestions.status', 'success');
    } else {
      console.error('listDelayRiskSuggestions failed', response.error);
      this.listDelayRiskSuggestionsState = 'error';
      setState('ui.projectDetailWorkspace.action.listDelayRiskSuggestions.status', 'error');
    }
  }

  /** handler for action listDelayRiskSuggestions — bind UI events here */
  handleListDelayRiskSuggestionsClick(_e?: Event): void {
    void this.loadListDelayRiskSuggestions();
  }

  /** setter for state ui.projectDetailWorkspace.input.getProjectDetail.projectId */
  setGetProjectDetailProjectId(value: string): void {
    this.getProjectDetailProjectId = value;
    setState('ui.projectDetailWorkspace.input.getProjectDetail.projectId', value);
    this.requestUpdate();
  }

  /** handler for action set.getProjectDetailProjectId — bind UI events here */
  handleGetProjectDetailProjectIdChange(e: Event): void {
    const target: HTMLInputElement = e.target as HTMLInputElement;
    this.setGetProjectDetailProjectId(target.value);
  }

  /** setter for state ui.projectDetailWorkspace.input.listWorkTasks.projectId */
  setListWorkTasksProjectId(value: string): void {
    this.listWorkTasksProjectId = value;
    setState('ui.projectDetailWorkspace.input.listWorkTasks.projectId', value);
    this.requestUpdate();
  }

  /** handler for action set.listWorkTasksProjectId — bind UI events here */
  handleListWorkTasksProjectIdChange(e: Event): void {
    const target: HTMLInputElement = e.target as HTMLInputElement;
    this.setListWorkTasksProjectId(target.value);
  }

  /** setter for state ui.projectDetailWorkspace.input.listWorkTasks.status */
  setListWorkTasksStatus(value: string): void {
    this.listWorkTasksStatus = value;
    setState('ui.projectDetailWorkspace.input.listWorkTasks.status', value);
    this.requestUpdate();
  }

  /** handler for action set.listWorkTasksStatus — bind UI events here */
  handleListWorkTasksStatusChange(e: Event): void {
    const target: HTMLInputElement = e.target as HTMLInputElement;
    this.setListWorkTasksStatus(target.value);
  }

  /** setter for state ui.projectDetailWorkspace.input.listWorkTasks.assignedWorkerId */
  setListWorkTasksAssignedWorkerId(value: string): void {
    this.listWorkTasksAssignedWorkerId = value;
    setState('ui.projectDetailWorkspace.input.listWorkTasks.assignedWorkerId', value);
    this.requestUpdate();
  }

  /** handler for action set.listWorkTasksAssignedWorkerId — bind UI events here */
  handleListWorkTasksAssignedWorkerIdChange(e: Event): void {
    const target: HTMLInputElement = e.target as HTMLInputElement;
    this.setListWorkTasksAssignedWorkerId(target.value);
  }

  /** setter for state ui.projectDetailWorkspace.input.listWorkTasks.page */
  setListWorkTasksPage(value: string): void {
    this.listWorkTasksPage = value;
    setState('ui.projectDetailWorkspace.input.listWorkTasks.page', value);
    this.requestUpdate();
  }

  /** handler for action set.listWorkTasksPage — bind UI events here */
  handleListWorkTasksPageChange(e: Event): void {
    const target: HTMLInputElement = e.target as HTMLInputElement;
    this.setListWorkTasksPage(target.value);
  }

  /** setter for state ui.projectDetailWorkspace.input.listWorkTasks.pageSize */
  setListWorkTasksPageSize(value: string): void {
    this.listWorkTasksPageSize = value;
    setState('ui.projectDetailWorkspace.input.listWorkTasks.pageSize', value);
    this.requestUpdate();
  }

  /** handler for action set.listWorkTasksPageSize — bind UI events here */
  handleListWorkTasksPageSizeChange(e: Event): void {
    const target: HTMLInputElement = e.target as HTMLInputElement;
    this.setListWorkTasksPageSize(target.value);
  }

  /** setter for state ui.projectDetailWorkspace.input.listChangeOrders.projectId */
  setListChangeOrdersProjectId(value: string): void {
    this.listChangeOrdersProjectId = value;
    setState('ui.projectDetailWorkspace.input.listChangeOrders.projectId', value);
    this.requestUpdate();
  }

  /** handler for action set.listChangeOrdersProjectId — bind UI events here */
  handleListChangeOrdersProjectIdChange(e: Event): void {
    const target: HTMLInputElement = e.target as HTMLInputElement;
    this.setListChangeOrdersProjectId(target.value);
  }

  /** setter for state ui.projectDetailWorkspace.input.listChangeOrders.status */
  setListChangeOrdersStatus(value: string): void {
    this.listChangeOrdersStatus = value;
    setState('ui.projectDetailWorkspace.input.listChangeOrders.status', value);
    this.requestUpdate();
  }

  /** handler for action set.listChangeOrdersStatus — bind UI events here */
  handleListChangeOrdersStatusChange(e: Event): void {
    const target: HTMLInputElement = e.target as HTMLInputElement;
    this.setListChangeOrdersStatus(target.value);
  }

  /** setter for state ui.projectDetailWorkspace.input.listChangeOrders.impactType */
  setListChangeOrdersImpactType(value: string): void {
    this.listChangeOrdersImpactType = value;
    setState('ui.projectDetailWorkspace.input.listChangeOrders.impactType', value);
    this.requestUpdate();
  }

  /** handler for action set.listChangeOrdersImpactType — bind UI events here */
  handleListChangeOrdersImpactTypeChange(e: Event): void {
    const target: HTMLInputElement = e.target as HTMLInputElement;
    this.setListChangeOrdersImpactType(target.value);
  }

  /** setter for state ui.projectDetailWorkspace.input.listChangeOrders.page */
  setListChangeOrdersPage(value: string): void {
    this.listChangeOrdersPage = value;
    setState('ui.projectDetailWorkspace.input.listChangeOrders.page', value);
    this.requestUpdate();
  }

  /** handler for action set.listChangeOrdersPage — bind UI events here */
  handleListChangeOrdersPageChange(e: Event): void {
    const target: HTMLInputElement = e.target as HTMLInputElement;
    this.setListChangeOrdersPage(target.value);
  }

  /** setter for state ui.projectDetailWorkspace.input.listChangeOrders.pageSize */
  setListChangeOrdersPageSize(value: string): void {
    this.listChangeOrdersPageSize = value;
    setState('ui.projectDetailWorkspace.input.listChangeOrders.pageSize', value);
    this.requestUpdate();
  }

  /** handler for action set.listChangeOrdersPageSize — bind UI events here */
  handleListChangeOrdersPageSizeChange(e: Event): void {
    const target: HTMLInputElement = e.target as HTMLInputElement;
    this.setListChangeOrdersPageSize(target.value);
  }

  /** setter for state ui.projectDetailWorkspace.input.getChangeOrderDetail.changeOrderId */
  setGetChangeOrderDetailChangeOrderId(value: string): void {
    this.getChangeOrderDetailChangeOrderId = value;
    setState('ui.projectDetailWorkspace.input.getChangeOrderDetail.changeOrderId', value);
    this.requestUpdate();
  }

  /** handler for action set.getChangeOrderDetailChangeOrderId — bind UI events here */
  handleGetChangeOrderDetailChangeOrderIdChange(e: Event): void {
    const target: HTMLInputElement = e.target as HTMLInputElement;
    this.setGetChangeOrderDetailChangeOrderId(target.value);
  }

  /** setter for state ui.projectDetailWorkspace.input.listTimeLogs.workTaskId */
  setListTimeLogsWorkTaskId(value: string): void {
    this.listTimeLogsWorkTaskId = value;
    setState('ui.projectDetailWorkspace.input.listTimeLogs.workTaskId', value);
    this.requestUpdate();
  }

  /** handler for action set.listTimeLogsWorkTaskId — bind UI events here */
  handleListTimeLogsWorkTaskIdChange(e: Event): void {
    const target: HTMLInputElement = e.target as HTMLInputElement;
    this.setListTimeLogsWorkTaskId(target.value);
  }

  /** setter for state ui.projectDetailWorkspace.input.listTimeLogs.workerName */
  setListTimeLogsWorkerName(value: string): void {
    this.listTimeLogsWorkerName = value;
    setState('ui.projectDetailWorkspace.input.listTimeLogs.workerName', value);
    this.requestUpdate();
  }

  /** handler for action set.listTimeLogsWorkerName — bind UI events here */
  handleListTimeLogsWorkerNameChange(e: Event): void {
    const target: HTMLInputElement = e.target as HTMLInputElement;
    this.setListTimeLogsWorkerName(target.value);
  }

  /** setter for state ui.projectDetailWorkspace.input.listTimeLogs.logDate */
  setListTimeLogsLogDate(value: string): void {
    this.listTimeLogsLogDate = value;
    setState('ui.projectDetailWorkspace.input.listTimeLogs.logDate', value);
    this.requestUpdate();
  }

  /** handler for action set.listTimeLogsLogDate — bind UI events here */
  handleListTimeLogsLogDateChange(e: Event): void {
    const target: HTMLInputElement = e.target as HTMLInputElement;
    this.setListTimeLogsLogDate(target.value);
  }

  /** setter for state ui.projectDetailWorkspace.input.listTimeLogs.status */
  setListTimeLogsStatus(value: string): void {
    this.listTimeLogsStatus = value;
    setState('ui.projectDetailWorkspace.input.listTimeLogs.status', value);
    this.requestUpdate();
  }

  /** handler for action set.listTimeLogsStatus — bind UI events here */
  handleListTimeLogsStatusChange(e: Event): void {
    const target: HTMLInputElement = e.target as HTMLInputElement;
    this.setListTimeLogsStatus(target.value);
  }

  /** setter for state ui.projectDetailWorkspace.input.listTimeLogs.page */
  setListTimeLogsPage(value: string): void {
    this.listTimeLogsPage = value;
    setState('ui.projectDetailWorkspace.input.listTimeLogs.page', value);
    this.requestUpdate();
  }

  /** handler for action set.listTimeLogsPage — bind UI events here */
  handleListTimeLogsPageChange(e: Event): void {
    const target: HTMLInputElement = e.target as HTMLInputElement;
    this.setListTimeLogsPage(target.value);
  }

  /** setter for state ui.projectDetailWorkspace.input.listTimeLogs.pageSize */
  setListTimeLogsPageSize(value: string): void {
    this.listTimeLogsPageSize = value;
    setState('ui.projectDetailWorkspace.input.listTimeLogs.pageSize', value);
    this.requestUpdate();
  }

  /** handler for action set.listTimeLogsPageSize — bind UI events here */
  handleListTimeLogsPageSizeChange(e: Event): void {
    const target: HTMLInputElement = e.target as HTMLInputElement;
    this.setListTimeLogsPageSize(target.value);
  }

  /** setter for state ui.projectDetailWorkspace.input.listMaterialUsages.projectId */
  setListMaterialUsagesProjectId(value: string): void {
    this.listMaterialUsagesProjectId = value;
    setState('ui.projectDetailWorkspace.input.listMaterialUsages.projectId', value);
    this.requestUpdate();
  }

  /** handler for action set.listMaterialUsagesProjectId — bind UI events here */
  handleListMaterialUsagesProjectIdChange(e: Event): void {
    const target: HTMLInputElement = e.target as HTMLInputElement;
    this.setListMaterialUsagesProjectId(target.value);
  }

  /** setter for state ui.projectDetailWorkspace.input.listMaterialUsages.status */
  setListMaterialUsagesStatus(value: string): void {
    this.listMaterialUsagesStatus = value;
    setState('ui.projectDetailWorkspace.input.listMaterialUsages.status', value);
    this.requestUpdate();
  }

  /** handler for action set.listMaterialUsagesStatus — bind UI events here */
  handleListMaterialUsagesStatusChange(e: Event): void {
    const target: HTMLInputElement = e.target as HTMLInputElement;
    this.setListMaterialUsagesStatus(target.value);
  }

  /** setter for state ui.projectDetailWorkspace.input.listMaterialUsages.page */
  setListMaterialUsagesPage(value: string): void {
    this.listMaterialUsagesPage = value;
    setState('ui.projectDetailWorkspace.input.listMaterialUsages.page', value);
    this.requestUpdate();
  }

  /** handler for action set.listMaterialUsagesPage — bind UI events here */
  handleListMaterialUsagesPageChange(e: Event): void {
    const target: HTMLInputElement = e.target as HTMLInputElement;
    this.setListMaterialUsagesPage(target.value);
  }

  /** setter for state ui.projectDetailWorkspace.input.listMaterialUsages.pageSize */
  setListMaterialUsagesPageSize(value: string): void {
    this.listMaterialUsagesPageSize = value;
    setState('ui.projectDetailWorkspace.input.listMaterialUsages.pageSize', value);
    this.requestUpdate();
  }

  /** handler for action set.listMaterialUsagesPageSize — bind UI events here */
  handleListMaterialUsagesPageSizeChange(e: Event): void {
    const target: HTMLInputElement = e.target as HTMLInputElement;
    this.setListMaterialUsagesPageSize(target.value);
  }

  /** setter for state ui.projectDetailWorkspace.input.triggerDelayRiskSuggestions.statusReportId */
  setTriggerDelayRiskSuggestionsStatusReportId(value: string): void {
    this.triggerDelayRiskSuggestionsStatusReportId = value;
    setState('ui.projectDetailWorkspace.input.triggerDelayRiskSuggestions.statusReportId', value);
    this.requestUpdate();
  }

  /** handler for action set.triggerDelayRiskSuggestionsStatusReportId — bind UI events here */
  handleTriggerDelayRiskSuggestionsStatusReportIdChange(e: Event): void {
    const target: HTMLInputElement = e.target as HTMLInputElement;
    this.setTriggerDelayRiskSuggestionsStatusReportId(target.value);
  }

  /** setter for state ui.projectDetailWorkspace.input.listDelayRiskSuggestions.statusReportId */
  setListDelayRiskSuggestionsStatusReportId(value: string): void {
    this.listDelayRiskSuggestionsStatusReportId = value;
    setState('ui.projectDetailWorkspace.input.listDelayRiskSuggestions.statusReportId', value);
    this.requestUpdate();
  }

  /** handler for action set.listDelayRiskSuggestionsStatusReportId — bind UI events here */
  handleListDelayRiskSuggestionsStatusReportIdChange(e: Event): void {
    const target: HTMLInputElement = e.target as HTMLInputElement;
    this.setListDelayRiskSuggestionsStatusReportId(target.value);
  }

  /** setter for state ui.projectDetailWorkspace.input.listDelayRiskSuggestions.acknowledged */
  setListDelayRiskSuggestionsAcknowledged(value: string): void {
    this.listDelayRiskSuggestionsAcknowledged = value;
    setState('ui.projectDetailWorkspace.input.listDelayRiskSuggestions.acknowledged', value);
    this.requestUpdate();
  }

  /** handler for action set.listDelayRiskSuggestionsAcknowledged — bind UI events here */
  handleListDelayRiskSuggestionsAcknowledgedChange(e: Event): void {
    const target: HTMLInputElement = e.target as HTMLInputElement;
    this.setListDelayRiskSuggestionsAcknowledged(target.value);
  }
}
