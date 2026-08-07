/// <mls fileReference="_102045_/l2/buildFlowFsm/web/shared/projectDetailWorkspace.ts" enhancement="_102020_/l2/enhancementAura"/>

import { CollabLitElement } from '/_102029_/l2/collabLitElement.js';
import { property } from 'lit/decorators.js';
import { execBff, type BffClientOptions } from '/_102029_/l2/bffClient.js';
import { getState, setState, subscribe, unsubscribe } from '/_102029_/l2/collabState.js';
import { runBlockingUiAction } from '/_102029_/l2/interactionRuntime.js';
import type {
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
  'section.projectDetailWorkspace.sec-projectHeader.title': 'Project Header',
  'organism.projectDetailWorkspace.getProjectDetail.title': 'View project detail and timeline',
  'intent.projectDetailWorkspace.getProjectDetail.list.title': 'View project detail and timeline',
  'intent.projectDetailWorkspace.getProjectDetail.list.empty': 'Nenhum registro encontrado',
  'intent.projectDetailWorkspace.getProjectDetail.list.column.projectId.label': 'Project Id',
  'intent.projectDetailWorkspace.getProjectDetail.list.column.name.label': 'Name',
  'intent.projectDetailWorkspace.getProjectDetail.list.column.clientId.label': 'Client Id',
  'intent.projectDetailWorkspace.getProjectDetail.list.column.clientName.label': 'Client Name',
  'intent.projectDetailWorkspace.getProjectDetail.list.column.clientCompany.label': 'Client Company',
  'intent.projectDetailWorkspace.getProjectDetail.list.column.siteAddress.label': 'Site Address',
  'intent.projectDetailWorkspace.getProjectDetail.list.column.budget.label': 'Budget',
  'intent.projectDetailWorkspace.getProjectDetail.list.column.startDate.label': 'Start Date',
  'intent.projectDetailWorkspace.getProjectDetail.list.column.endDate.label': 'End Date',
  'intent.projectDetailWorkspace.getProjectDetail.list.column.status.label': 'Status',
  'intent.projectDetailWorkspace.getProjectDetail.list.column.holdReason.label': 'Hold Reason',
  'intent.projectDetailWorkspace.getProjectDetail.list.column.closedAt.label': 'Closed At',
  'intent.projectDetailWorkspace.getProjectDetail.list.column.cancelledAt.label': 'Cancelled At',
  'intent.projectDetailWorkspace.getProjectDetail.list.column.cancellationReason.label': 'Cancellation Reason',
  'intent.projectDetailWorkspace.getProjectDetail.list.column.createdAt.label': 'Created At',
  'intent.projectDetailWorkspace.getProjectDetail.list.column.updatedAt.label': 'Updated At',
  'section.projectDetailWorkspace.sec-taskTimeline.title': 'Work Tasks & Timeline',
  'organism.projectDetailWorkspace.listWorkTasks.title': 'Browse work tasks',
  'intent.projectDetailWorkspace.listWorkTasks.list.title': 'Browse work tasks',
  'intent.projectDetailWorkspace.listWorkTasks.list.empty': 'Nenhum registro encontrado',
  'intent.projectDetailWorkspace.listWorkTasks.list.column.workTasks.label': 'Work Tasks',
  'intent.projectDetailWorkspace.listWorkTasks.list.column.total.label': 'Total',
  'intent.projectDetailWorkspace.listWorkTasks.list.filter.projectId.label': 'Project Id',
  'intent.projectDetailWorkspace.listWorkTasks.list.filter.status.label': 'Status',
  'intent.projectDetailWorkspace.listWorkTasks.list.filter.assignedWorkerId.label': 'Assigned Worker Id',
  'intent.projectDetailWorkspace.listWorkTasks.list.filter.page.label': 'Page',
  'intent.projectDetailWorkspace.listWorkTasks.list.filter.pageSize.label': 'Page Size',
  'section.projectDetailWorkspace.sec-changeOrders.title': 'Change Orders',
  'organism.projectDetailWorkspace.listChangeOrders.title': 'Browse change orders',
  'intent.projectDetailWorkspace.listChangeOrders.list.title': 'Browse change orders',
  'intent.projectDetailWorkspace.listChangeOrders.list.empty': 'Nenhum registro encontrado',
  'intent.projectDetailWorkspace.listChangeOrders.list.column.changeOrders.label': 'Change Orders',
  'intent.projectDetailWorkspace.listChangeOrders.list.column.total.label': 'Total',
  'intent.projectDetailWorkspace.listChangeOrders.list.filter.status.label': 'Status',
  'intent.projectDetailWorkspace.listChangeOrders.list.filter.impactType.label': 'Impact Type',
  'intent.projectDetailWorkspace.listChangeOrders.list.filter.page.label': 'Page',
  'intent.projectDetailWorkspace.listChangeOrders.list.filter.pageSize.label': 'Page Size',
  'organism.projectDetailWorkspace.getChangeOrderDetail.title': 'View change order and cost impact',
  'intent.projectDetailWorkspace.getChangeOrderDetail.list.title': 'View change order and cost impact',
  'intent.projectDetailWorkspace.getChangeOrderDetail.list.empty': 'Nenhum registro encontrado',
  'intent.projectDetailWorkspace.getChangeOrderDetail.list.column.changeOrderId.label': 'Change Order Id',
  'intent.projectDetailWorkspace.getChangeOrderDetail.list.column.projectId.label': 'Project Id',
  'intent.projectDetailWorkspace.getChangeOrderDetail.list.column.title.label': 'Title',
  'intent.projectDetailWorkspace.getChangeOrderDetail.list.column.description.label': 'Description',
  'intent.projectDetailWorkspace.getChangeOrderDetail.list.column.impactType.label': 'Impact Type',
  'intent.projectDetailWorkspace.getChangeOrderDetail.list.column.costAdjustment.label': 'Cost Adjustment',
  'intent.projectDetailWorkspace.getChangeOrderDetail.list.column.scheduleAdjustmentDays.label': 'Schedule Adjustment Days',
  'intent.projectDetailWorkspace.getChangeOrderDetail.list.column.status.label': 'Status',
  'intent.projectDetailWorkspace.getChangeOrderDetail.list.column.rejectionReason.label': 'Rejection Reason',
  'intent.projectDetailWorkspace.getChangeOrderDetail.list.column.approvedAt.label': 'Approved At',
  'intent.projectDetailWorkspace.getChangeOrderDetail.list.column.rejectedAt.label': 'Rejected At',
  'intent.projectDetailWorkspace.getChangeOrderDetail.list.column.projectName.label': 'Project Name',
  'intent.projectDetailWorkspace.getChangeOrderDetail.list.column.projectBudget.label': 'Project Budget',
  'intent.projectDetailWorkspace.getChangeOrderDetail.list.column.affectsJobCosting.label': 'Affects Job Costing',
  'section.projectDetailWorkspace.sec-costTracking.title': 'Cost Tracking — Time Logs',
  'organism.projectDetailWorkspace.listTimeLogs.title': 'Browse time logs',
  'intent.projectDetailWorkspace.listTimeLogs.list.title': 'Browse time logs',
  'intent.projectDetailWorkspace.listTimeLogs.list.empty': 'Nenhum registro encontrado',
  'intent.projectDetailWorkspace.listTimeLogs.list.column.timeLogs.label': 'Time Logs',
  'intent.projectDetailWorkspace.listTimeLogs.list.column.total.label': 'Total',
  'intent.projectDetailWorkspace.listTimeLogs.list.filter.workTaskId.label': 'Work Task Id',
  'intent.projectDetailWorkspace.listTimeLogs.list.filter.workerName.label': 'Worker Name',
  'intent.projectDetailWorkspace.listTimeLogs.list.filter.logDate.label': 'Log Date',
  'intent.projectDetailWorkspace.listTimeLogs.list.filter.status.label': 'Status',
  'intent.projectDetailWorkspace.listTimeLogs.list.filter.page.label': 'Page',
  'intent.projectDetailWorkspace.listTimeLogs.list.filter.pageSize.label': 'Page Size',
  'section.projectDetailWorkspace.sec-materialUsage.title': 'Material Usage',
  'organism.projectDetailWorkspace.listMaterialUsages.title': 'Browse material usage',
  'intent.projectDetailWorkspace.listMaterialUsages.list.title': 'Browse material usage',
  'intent.projectDetailWorkspace.listMaterialUsages.list.empty': 'Nenhum registro encontrado',
  'intent.projectDetailWorkspace.listMaterialUsages.list.column.materialUsages.label': 'Material Usages',
  'intent.projectDetailWorkspace.listMaterialUsages.list.column.total.label': 'Total',
  'intent.projectDetailWorkspace.listMaterialUsages.list.filter.status.label': 'Status',
  'intent.projectDetailWorkspace.listMaterialUsages.list.filter.page.label': 'Page',
  'intent.projectDetailWorkspace.listMaterialUsages.list.filter.pageSize.label': 'Page Size',
  'section.projectDetailWorkspace.sec-delayRiskInsights.title': 'Delay Risk Insights',
  'organism.projectDetailWorkspace.triggerDelayRiskSuggestions.title': 'Generate delay-risk suggestions',
  'intent.projectDetailWorkspace.triggerDelayRiskSuggestions.form.title': 'Generate delay-risk suggestions',
  'intent.projectDetailWorkspace.triggerDelayRiskSuggestions.form.action.triggerDelayRiskSuggestions': 'Generate delay-risk suggestions',
  'organism.projectDetailWorkspace.listDelayRiskSuggestions.title': 'Review delay-risk suggestions',
  'intent.projectDetailWorkspace.listDelayRiskSuggestions.list.title': 'Review delay-risk suggestions',
  'intent.projectDetailWorkspace.listDelayRiskSuggestions.list.empty': 'Nenhum registro encontrado',
  'intent.projectDetailWorkspace.listDelayRiskSuggestions.list.column.delayRiskSuggestionId.label': 'Delay Risk Suggestion Id',
  'intent.projectDetailWorkspace.listDelayRiskSuggestions.list.column.workTaskId.label': 'Work Task Id',
  'intent.projectDetailWorkspace.listDelayRiskSuggestions.list.column.workTaskTitle.label': 'Work Task Title',
  'intent.projectDetailWorkspace.listDelayRiskSuggestions.list.column.riskLevel.label': 'Risk Level',
  'intent.projectDetailWorkspace.listDelayRiskSuggestions.list.column.reason.label': 'Reason',
  'intent.projectDetailWorkspace.listDelayRiskSuggestions.list.column.suggestedAction.label': 'Suggested Action',
  'intent.projectDetailWorkspace.listDelayRiskSuggestions.list.column.acknowledged.label': 'Acknowledged',
  'intent.projectDetailWorkspace.listDelayRiskSuggestions.list.column.createdAt.label': 'Created At',
  'intent.projectDetailWorkspace.listDelayRiskSuggestions.list.filter.acknowledged.label': 'Acknowledged',
  'action.triggerDelayRiskSuggestions.success': 'Generate delay-risk suggestions: OK',
  'action.triggerDelayRiskSuggestions.error': 'Generate delay-risk suggestions: falhou',
  'section.projectDetailWorkspace.sec-project-header.title': 'Project Header',
  'section.projectDetailWorkspace.sec-task-timeline.title': 'Work Task Timeline',
  'section.projectDetailWorkspace.sec-change-orders.title': 'Change Orders',
  'section.projectDetailWorkspace.sec-cost-tracking.title': 'Cost Tracking',
  'section.projectDetailWorkspace.sec-delay-risk-insights.title': 'Delay Risk Insights',
};
export type MessageType = typeof message_en;
const message_pt_br: MessageType = {
  'section.projectDetailWorkspace.sec-projectHeader.title': 'Project Header',
  'organism.projectDetailWorkspace.getProjectDetail.title': 'View project detail and timeline',
  'intent.projectDetailWorkspace.getProjectDetail.list.title': 'View project detail and timeline',
  'intent.projectDetailWorkspace.getProjectDetail.list.empty': 'Nenhum registro encontrado',
  'intent.projectDetailWorkspace.getProjectDetail.list.column.projectId.label': 'Project Id',
  'intent.projectDetailWorkspace.getProjectDetail.list.column.name.label': 'Name',
  'intent.projectDetailWorkspace.getProjectDetail.list.column.clientId.label': 'Client Id',
  'intent.projectDetailWorkspace.getProjectDetail.list.column.clientName.label': 'Client Name',
  'intent.projectDetailWorkspace.getProjectDetail.list.column.clientCompany.label': 'Client Company',
  'intent.projectDetailWorkspace.getProjectDetail.list.column.siteAddress.label': 'Site Address',
  'intent.projectDetailWorkspace.getProjectDetail.list.column.budget.label': 'Budget',
  'intent.projectDetailWorkspace.getProjectDetail.list.column.startDate.label': 'Start Date',
  'intent.projectDetailWorkspace.getProjectDetail.list.column.endDate.label': 'End Date',
  'intent.projectDetailWorkspace.getProjectDetail.list.column.status.label': 'Status',
  'intent.projectDetailWorkspace.getProjectDetail.list.column.holdReason.label': 'Hold Reason',
  'intent.projectDetailWorkspace.getProjectDetail.list.column.closedAt.label': 'Closed At',
  'intent.projectDetailWorkspace.getProjectDetail.list.column.cancelledAt.label': 'Cancelled At',
  'intent.projectDetailWorkspace.getProjectDetail.list.column.cancellationReason.label': 'Cancellation Reason',
  'intent.projectDetailWorkspace.getProjectDetail.list.column.createdAt.label': 'Created At',
  'intent.projectDetailWorkspace.getProjectDetail.list.column.updatedAt.label': 'Updated At',
  'section.projectDetailWorkspace.sec-taskTimeline.title': 'Work Tasks & Timeline',
  'organism.projectDetailWorkspace.listWorkTasks.title': 'Browse work tasks',
  'intent.projectDetailWorkspace.listWorkTasks.list.title': 'Browse work tasks',
  'intent.projectDetailWorkspace.listWorkTasks.list.empty': 'Nenhum registro encontrado',
  'intent.projectDetailWorkspace.listWorkTasks.list.column.workTasks.label': 'Work Tasks',
  'intent.projectDetailWorkspace.listWorkTasks.list.column.total.label': 'Total',
  'intent.projectDetailWorkspace.listWorkTasks.list.filter.projectId.label': 'Project Id',
  'intent.projectDetailWorkspace.listWorkTasks.list.filter.status.label': 'Status',
  'intent.projectDetailWorkspace.listWorkTasks.list.filter.assignedWorkerId.label': 'Assigned Worker Id',
  'intent.projectDetailWorkspace.listWorkTasks.list.filter.page.label': 'Page',
  'intent.projectDetailWorkspace.listWorkTasks.list.filter.pageSize.label': 'Page Size',
  'section.projectDetailWorkspace.sec-changeOrders.title': 'Change Orders',
  'organism.projectDetailWorkspace.listChangeOrders.title': 'Browse change orders',
  'intent.projectDetailWorkspace.listChangeOrders.list.title': 'Browse change orders',
  'intent.projectDetailWorkspace.listChangeOrders.list.empty': 'Nenhum registro encontrado',
  'intent.projectDetailWorkspace.listChangeOrders.list.column.changeOrders.label': 'Change Orders',
  'intent.projectDetailWorkspace.listChangeOrders.list.column.total.label': 'Total',
  'intent.projectDetailWorkspace.listChangeOrders.list.filter.status.label': 'Status',
  'intent.projectDetailWorkspace.listChangeOrders.list.filter.impactType.label': 'Impact Type',
  'intent.projectDetailWorkspace.listChangeOrders.list.filter.page.label': 'Page',
  'intent.projectDetailWorkspace.listChangeOrders.list.filter.pageSize.label': 'Page Size',
  'organism.projectDetailWorkspace.getChangeOrderDetail.title': 'View change order and cost impact',
  'intent.projectDetailWorkspace.getChangeOrderDetail.list.title': 'View change order and cost impact',
  'intent.projectDetailWorkspace.getChangeOrderDetail.list.empty': 'Nenhum registro encontrado',
  'intent.projectDetailWorkspace.getChangeOrderDetail.list.column.changeOrderId.label': 'Change Order Id',
  'intent.projectDetailWorkspace.getChangeOrderDetail.list.column.projectId.label': 'Project Id',
  'intent.projectDetailWorkspace.getChangeOrderDetail.list.column.title.label': 'Title',
  'intent.projectDetailWorkspace.getChangeOrderDetail.list.column.description.label': 'Description',
  'intent.projectDetailWorkspace.getChangeOrderDetail.list.column.impactType.label': 'Impact Type',
  'intent.projectDetailWorkspace.getChangeOrderDetail.list.column.costAdjustment.label': 'Cost Adjustment',
  'intent.projectDetailWorkspace.getChangeOrderDetail.list.column.scheduleAdjustmentDays.label': 'Schedule Adjustment Days',
  'intent.projectDetailWorkspace.getChangeOrderDetail.list.column.status.label': 'Status',
  'intent.projectDetailWorkspace.getChangeOrderDetail.list.column.rejectionReason.label': 'Rejection Reason',
  'intent.projectDetailWorkspace.getChangeOrderDetail.list.column.approvedAt.label': 'Approved At',
  'intent.projectDetailWorkspace.getChangeOrderDetail.list.column.rejectedAt.label': 'Rejected At',
  'intent.projectDetailWorkspace.getChangeOrderDetail.list.column.projectName.label': 'Project Name',
  'intent.projectDetailWorkspace.getChangeOrderDetail.list.column.projectBudget.label': 'Project Budget',
  'intent.projectDetailWorkspace.getChangeOrderDetail.list.column.affectsJobCosting.label': 'Affects Job Costing',
  'section.projectDetailWorkspace.sec-costTracking.title': 'Cost Tracking — Time Logs',
  'organism.projectDetailWorkspace.listTimeLogs.title': 'Browse time logs',
  'intent.projectDetailWorkspace.listTimeLogs.list.title': 'Browse time logs',
  'intent.projectDetailWorkspace.listTimeLogs.list.empty': 'Nenhum registro encontrado',
  'intent.projectDetailWorkspace.listTimeLogs.list.column.timeLogs.label': 'Time Logs',
  'intent.projectDetailWorkspace.listTimeLogs.list.column.total.label': 'Total',
  'intent.projectDetailWorkspace.listTimeLogs.list.filter.workTaskId.label': 'Work Task Id',
  'intent.projectDetailWorkspace.listTimeLogs.list.filter.workerName.label': 'Worker Name',
  'intent.projectDetailWorkspace.listTimeLogs.list.filter.logDate.label': 'Log Date',
  'intent.projectDetailWorkspace.listTimeLogs.list.filter.status.label': 'Status',
  'intent.projectDetailWorkspace.listTimeLogs.list.filter.page.label': 'Page',
  'intent.projectDetailWorkspace.listTimeLogs.list.filter.pageSize.label': 'Page Size',
  'section.projectDetailWorkspace.sec-materialUsage.title': 'Material Usage',
  'organism.projectDetailWorkspace.listMaterialUsages.title': 'Browse material usage',
  'intent.projectDetailWorkspace.listMaterialUsages.list.title': 'Browse material usage',
  'intent.projectDetailWorkspace.listMaterialUsages.list.empty': 'Nenhum registro encontrado',
  'intent.projectDetailWorkspace.listMaterialUsages.list.column.materialUsages.label': 'Material Usages',
  'intent.projectDetailWorkspace.listMaterialUsages.list.column.total.label': 'Total',
  'intent.projectDetailWorkspace.listMaterialUsages.list.filter.status.label': 'Status',
  'intent.projectDetailWorkspace.listMaterialUsages.list.filter.page.label': 'Page',
  'intent.projectDetailWorkspace.listMaterialUsages.list.filter.pageSize.label': 'Page Size',
  'section.projectDetailWorkspace.sec-delayRiskInsights.title': 'Delay Risk Insights',
  'organism.projectDetailWorkspace.triggerDelayRiskSuggestions.title': 'Generate delay-risk suggestions',
  'intent.projectDetailWorkspace.triggerDelayRiskSuggestions.form.title': 'Generate delay-risk suggestions',
  'intent.projectDetailWorkspace.triggerDelayRiskSuggestions.form.action.triggerDelayRiskSuggestions': 'Generate delay-risk suggestions',
  'organism.projectDetailWorkspace.listDelayRiskSuggestions.title': 'Review delay-risk suggestions',
  'intent.projectDetailWorkspace.listDelayRiskSuggestions.list.title': 'Review delay-risk suggestions',
  'intent.projectDetailWorkspace.listDelayRiskSuggestions.list.empty': 'Nenhum registro encontrado',
  'intent.projectDetailWorkspace.listDelayRiskSuggestions.list.column.delayRiskSuggestionId.label': 'Delay Risk Suggestion Id',
  'intent.projectDetailWorkspace.listDelayRiskSuggestions.list.column.workTaskId.label': 'Work Task Id',
  'intent.projectDetailWorkspace.listDelayRiskSuggestions.list.column.workTaskTitle.label': 'Work Task Title',
  'intent.projectDetailWorkspace.listDelayRiskSuggestions.list.column.riskLevel.label': 'Risk Level',
  'intent.projectDetailWorkspace.listDelayRiskSuggestions.list.column.reason.label': 'Reason',
  'intent.projectDetailWorkspace.listDelayRiskSuggestions.list.column.suggestedAction.label': 'Suggested Action',
  'intent.projectDetailWorkspace.listDelayRiskSuggestions.list.column.acknowledged.label': 'Acknowledged',
  'intent.projectDetailWorkspace.listDelayRiskSuggestions.list.column.createdAt.label': 'Created At',
  'intent.projectDetailWorkspace.listDelayRiskSuggestions.list.filter.acknowledged.label': 'Acknowledged',
  'action.triggerDelayRiskSuggestions.success': 'Generate delay-risk suggestions: OK',
  'action.triggerDelayRiskSuggestions.error': 'Generate delay-risk suggestions: falhou',
  'section.projectDetailWorkspace.sec-project-header.title': 'Project Header',
  'section.projectDetailWorkspace.sec-task-timeline.title': 'Work Task Timeline',
  'section.projectDetailWorkspace.sec-change-orders.title': 'Change Orders',
  'section.projectDetailWorkspace.sec-cost-tracking.title': 'Cost Tracking',
  'section.projectDetailWorkspace.sec-delay-risk-insights.title': 'Delay Risk Insights',
};
const message_es: MessageType = {
  'section.projectDetailWorkspace.sec-projectHeader.title': 'Project Header',
  'organism.projectDetailWorkspace.getProjectDetail.title': 'View project detail and timeline',
  'intent.projectDetailWorkspace.getProjectDetail.list.title': 'View project detail and timeline',
  'intent.projectDetailWorkspace.getProjectDetail.list.empty': 'Nenhum registro encontrado',
  'intent.projectDetailWorkspace.getProjectDetail.list.column.projectId.label': 'Project Id',
  'intent.projectDetailWorkspace.getProjectDetail.list.column.name.label': 'Name',
  'intent.projectDetailWorkspace.getProjectDetail.list.column.clientId.label': 'Client Id',
  'intent.projectDetailWorkspace.getProjectDetail.list.column.clientName.label': 'Client Name',
  'intent.projectDetailWorkspace.getProjectDetail.list.column.clientCompany.label': 'Client Company',
  'intent.projectDetailWorkspace.getProjectDetail.list.column.siteAddress.label': 'Site Address',
  'intent.projectDetailWorkspace.getProjectDetail.list.column.budget.label': 'Budget',
  'intent.projectDetailWorkspace.getProjectDetail.list.column.startDate.label': 'Start Date',
  'intent.projectDetailWorkspace.getProjectDetail.list.column.endDate.label': 'End Date',
  'intent.projectDetailWorkspace.getProjectDetail.list.column.status.label': 'Status',
  'intent.projectDetailWorkspace.getProjectDetail.list.column.holdReason.label': 'Hold Reason',
  'intent.projectDetailWorkspace.getProjectDetail.list.column.closedAt.label': 'Closed At',
  'intent.projectDetailWorkspace.getProjectDetail.list.column.cancelledAt.label': 'Cancelled At',
  'intent.projectDetailWorkspace.getProjectDetail.list.column.cancellationReason.label': 'Cancellation Reason',
  'intent.projectDetailWorkspace.getProjectDetail.list.column.createdAt.label': 'Created At',
  'intent.projectDetailWorkspace.getProjectDetail.list.column.updatedAt.label': 'Updated At',
  'section.projectDetailWorkspace.sec-taskTimeline.title': 'Work Tasks & Timeline',
  'organism.projectDetailWorkspace.listWorkTasks.title': 'Browse work tasks',
  'intent.projectDetailWorkspace.listWorkTasks.list.title': 'Browse work tasks',
  'intent.projectDetailWorkspace.listWorkTasks.list.empty': 'Nenhum registro encontrado',
  'intent.projectDetailWorkspace.listWorkTasks.list.column.workTasks.label': 'Work Tasks',
  'intent.projectDetailWorkspace.listWorkTasks.list.column.total.label': 'Total',
  'intent.projectDetailWorkspace.listWorkTasks.list.filter.projectId.label': 'Project Id',
  'intent.projectDetailWorkspace.listWorkTasks.list.filter.status.label': 'Status',
  'intent.projectDetailWorkspace.listWorkTasks.list.filter.assignedWorkerId.label': 'Assigned Worker Id',
  'intent.projectDetailWorkspace.listWorkTasks.list.filter.page.label': 'Page',
  'intent.projectDetailWorkspace.listWorkTasks.list.filter.pageSize.label': 'Page Size',
  'section.projectDetailWorkspace.sec-changeOrders.title': 'Change Orders',
  'organism.projectDetailWorkspace.listChangeOrders.title': 'Browse change orders',
  'intent.projectDetailWorkspace.listChangeOrders.list.title': 'Browse change orders',
  'intent.projectDetailWorkspace.listChangeOrders.list.empty': 'Nenhum registro encontrado',
  'intent.projectDetailWorkspace.listChangeOrders.list.column.changeOrders.label': 'Change Orders',
  'intent.projectDetailWorkspace.listChangeOrders.list.column.total.label': 'Total',
  'intent.projectDetailWorkspace.listChangeOrders.list.filter.status.label': 'Status',
  'intent.projectDetailWorkspace.listChangeOrders.list.filter.impactType.label': 'Impact Type',
  'intent.projectDetailWorkspace.listChangeOrders.list.filter.page.label': 'Page',
  'intent.projectDetailWorkspace.listChangeOrders.list.filter.pageSize.label': 'Page Size',
  'organism.projectDetailWorkspace.getChangeOrderDetail.title': 'View change order and cost impact',
  'intent.projectDetailWorkspace.getChangeOrderDetail.list.title': 'View change order and cost impact',
  'intent.projectDetailWorkspace.getChangeOrderDetail.list.empty': 'Nenhum registro encontrado',
  'intent.projectDetailWorkspace.getChangeOrderDetail.list.column.changeOrderId.label': 'Change Order Id',
  'intent.projectDetailWorkspace.getChangeOrderDetail.list.column.projectId.label': 'Project Id',
  'intent.projectDetailWorkspace.getChangeOrderDetail.list.column.title.label': 'Title',
  'intent.projectDetailWorkspace.getChangeOrderDetail.list.column.description.label': 'Description',
  'intent.projectDetailWorkspace.getChangeOrderDetail.list.column.impactType.label': 'Impact Type',
  'intent.projectDetailWorkspace.getChangeOrderDetail.list.column.costAdjustment.label': 'Cost Adjustment',
  'intent.projectDetailWorkspace.getChangeOrderDetail.list.column.scheduleAdjustmentDays.label': 'Schedule Adjustment Days',
  'intent.projectDetailWorkspace.getChangeOrderDetail.list.column.status.label': 'Status',
  'intent.projectDetailWorkspace.getChangeOrderDetail.list.column.rejectionReason.label': 'Rejection Reason',
  'intent.projectDetailWorkspace.getChangeOrderDetail.list.column.approvedAt.label': 'Approved At',
  'intent.projectDetailWorkspace.getChangeOrderDetail.list.column.rejectedAt.label': 'Rejected At',
  'intent.projectDetailWorkspace.getChangeOrderDetail.list.column.projectName.label': 'Project Name',
  'intent.projectDetailWorkspace.getChangeOrderDetail.list.column.projectBudget.label': 'Project Budget',
  'intent.projectDetailWorkspace.getChangeOrderDetail.list.column.affectsJobCosting.label': 'Affects Job Costing',
  'section.projectDetailWorkspace.sec-costTracking.title': 'Cost Tracking — Time Logs',
  'organism.projectDetailWorkspace.listTimeLogs.title': 'Browse time logs',
  'intent.projectDetailWorkspace.listTimeLogs.list.title': 'Browse time logs',
  'intent.projectDetailWorkspace.listTimeLogs.list.empty': 'Nenhum registro encontrado',
  'intent.projectDetailWorkspace.listTimeLogs.list.column.timeLogs.label': 'Time Logs',
  'intent.projectDetailWorkspace.listTimeLogs.list.column.total.label': 'Total',
  'intent.projectDetailWorkspace.listTimeLogs.list.filter.workTaskId.label': 'Work Task Id',
  'intent.projectDetailWorkspace.listTimeLogs.list.filter.workerName.label': 'Worker Name',
  'intent.projectDetailWorkspace.listTimeLogs.list.filter.logDate.label': 'Log Date',
  'intent.projectDetailWorkspace.listTimeLogs.list.filter.status.label': 'Status',
  'intent.projectDetailWorkspace.listTimeLogs.list.filter.page.label': 'Page',
  'intent.projectDetailWorkspace.listTimeLogs.list.filter.pageSize.label': 'Page Size',
  'section.projectDetailWorkspace.sec-materialUsage.title': 'Material Usage',
  'organism.projectDetailWorkspace.listMaterialUsages.title': 'Browse material usage',
  'intent.projectDetailWorkspace.listMaterialUsages.list.title': 'Browse material usage',
  'intent.projectDetailWorkspace.listMaterialUsages.list.empty': 'Nenhum registro encontrado',
  'intent.projectDetailWorkspace.listMaterialUsages.list.column.materialUsages.label': 'Material Usages',
  'intent.projectDetailWorkspace.listMaterialUsages.list.column.total.label': 'Total',
  'intent.projectDetailWorkspace.listMaterialUsages.list.filter.status.label': 'Status',
  'intent.projectDetailWorkspace.listMaterialUsages.list.filter.page.label': 'Page',
  'intent.projectDetailWorkspace.listMaterialUsages.list.filter.pageSize.label': 'Page Size',
  'section.projectDetailWorkspace.sec-delayRiskInsights.title': 'Delay Risk Insights',
  'organism.projectDetailWorkspace.triggerDelayRiskSuggestions.title': 'Generate delay-risk suggestions',
  'intent.projectDetailWorkspace.triggerDelayRiskSuggestions.form.title': 'Generate delay-risk suggestions',
  'intent.projectDetailWorkspace.triggerDelayRiskSuggestions.form.action.triggerDelayRiskSuggestions': 'Generate delay-risk suggestions',
  'organism.projectDetailWorkspace.listDelayRiskSuggestions.title': 'Review delay-risk suggestions',
  'intent.projectDetailWorkspace.listDelayRiskSuggestions.list.title': 'Review delay-risk suggestions',
  'intent.projectDetailWorkspace.listDelayRiskSuggestions.list.empty': 'Nenhum registro encontrado',
  'intent.projectDetailWorkspace.listDelayRiskSuggestions.list.column.delayRiskSuggestionId.label': 'Delay Risk Suggestion Id',
  'intent.projectDetailWorkspace.listDelayRiskSuggestions.list.column.workTaskId.label': 'Work Task Id',
  'intent.projectDetailWorkspace.listDelayRiskSuggestions.list.column.workTaskTitle.label': 'Work Task Title',
  'intent.projectDetailWorkspace.listDelayRiskSuggestions.list.column.riskLevel.label': 'Risk Level',
  'intent.projectDetailWorkspace.listDelayRiskSuggestions.list.column.reason.label': 'Reason',
  'intent.projectDetailWorkspace.listDelayRiskSuggestions.list.column.suggestedAction.label': 'Suggested Action',
  'intent.projectDetailWorkspace.listDelayRiskSuggestions.list.column.acknowledged.label': 'Acknowledged',
  'intent.projectDetailWorkspace.listDelayRiskSuggestions.list.column.createdAt.label': 'Created At',
  'intent.projectDetailWorkspace.listDelayRiskSuggestions.list.filter.acknowledged.label': 'Acknowledged',
  'action.triggerDelayRiskSuggestions.success': 'Generate delay-risk suggestions: OK',
  'action.triggerDelayRiskSuggestions.error': 'Generate delay-risk suggestions: falhou',
  'section.projectDetailWorkspace.sec-project-header.title': 'Project Header',
  'section.projectDetailWorkspace.sec-task-timeline.title': 'Work Task Timeline',
  'section.projectDetailWorkspace.sec-change-orders.title': 'Change Orders',
  'section.projectDetailWorkspace.sec-cost-tracking.title': 'Cost Tracking',
  'section.projectDetailWorkspace.sec-delay-risk-insights.title': 'Delay Risk Insights',
};
export const messages: { [key: string]: MessageType } = { 'en': message_en, 'pt-br': message_pt_br, 'es': message_es };
/// **collab_i18n_end**

const LIST_WORK_TASKS_DATA_DEFAULT: ListWorkTasksOutput = { workTasks: [], total: 0 };
const LIST_CHANGE_ORDERS_DATA_DEFAULT: ListChangeOrdersOutput = { changeOrders: [], total: 0 };
const LIST_TIME_LOGS_DATA_DEFAULT: ListTimeLogsOutput = { timeLogs: [], total: 0 };
const LIST_MATERIAL_USAGES_DATA_DEFAULT: ListMaterialUsagesOutput = { materialUsages: [], total: 0 };

const SUBSCRIBED_STATE_KEYS: string[] = [
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
  @property() getProjectDetailState: 'idle' | 'loading' | 'success' | 'error' = 'idle';
  /** state getProjectDetailProjectId — input */
  @property() getProjectDetailProjectId: string = '';
  /** state getProjectDetailData — queryResult, outputShape: object */
  @property() getProjectDetailData: GetProjectDetailOutput | null = null;
  /** state listWorkTasksState — actionStatus, values: idle|loading|success|error */
  @property() listWorkTasksState: 'idle' | 'loading' | 'success' | 'error' = 'idle';
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
  @property() listWorkTasksData: ListWorkTasksOutput = LIST_WORK_TASKS_DATA_DEFAULT;
  /** state listChangeOrdersState — actionStatus, values: idle|loading|success|error */
  @property() listChangeOrdersState: 'idle' | 'loading' | 'success' | 'error' = 'idle';
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
  @property() listChangeOrdersData: ListChangeOrdersOutput = LIST_CHANGE_ORDERS_DATA_DEFAULT;
  /** state getChangeOrderDetailState — actionStatus, values: idle|loading|success|error */
  @property() getChangeOrderDetailState: 'idle' | 'loading' | 'success' | 'error' = 'idle';
  /** state getChangeOrderDetailChangeOrderId — input */
  @property() getChangeOrderDetailChangeOrderId: string = '';
  /** state getChangeOrderDetailData — queryResult, outputShape: object */
  @property() getChangeOrderDetailData: GetChangeOrderDetailOutput | null = null;
  /** state listTimeLogsState — actionStatus, values: idle|loading|success|error */
  @property() listTimeLogsState: 'idle' | 'loading' | 'success' | 'error' = 'idle';
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
  @property() listTimeLogsData: ListTimeLogsOutput = LIST_TIME_LOGS_DATA_DEFAULT;
  /** state listMaterialUsagesState — actionStatus, values: idle|loading|success|error */
  @property() listMaterialUsagesState: 'idle' | 'loading' | 'success' | 'error' = 'idle';
  /** state listMaterialUsagesProjectId — input */
  @property() listMaterialUsagesProjectId: string = '';
  /** state listMaterialUsagesStatus — input */
  @property() listMaterialUsagesStatus: string = '';
  /** state listMaterialUsagesPage — input */
  @property() listMaterialUsagesPage: string = '';
  /** state listMaterialUsagesPageSize — input */
  @property() listMaterialUsagesPageSize: string = '';
  /** state listMaterialUsagesData — queryResult, outputShape: paginated */
  @property() listMaterialUsagesData: ListMaterialUsagesOutput = LIST_MATERIAL_USAGES_DATA_DEFAULT;
  /** state triggerDelayRiskSuggestionsState — actionStatus, values: idle|loading|success|error */
  @property() triggerDelayRiskSuggestionsState: 'idle' | 'loading' | 'success' | 'error' = 'idle';
  /** state triggerDelayRiskSuggestionsStatusReportId — input */
  @property() triggerDelayRiskSuggestionsStatusReportId: string = '';
  /** state triggerDelayRiskSuggestionsOutput — commandOutput */
  @property() triggerDelayRiskSuggestionsOutput: TriggerDelayRiskSuggestionsOutput | null = null;
  /** state triggerDelayRiskSuggestionsError — actionError */
  @property() triggerDelayRiskSuggestionsError: string = '';
  /** state listDelayRiskSuggestionsState — actionStatus, values: idle|loading|success|error */
  @property() listDelayRiskSuggestionsState: 'idle' | 'loading' | 'success' | 'error' = 'idle';
  /** state listDelayRiskSuggestionsStatusReportId — input */
  @property() listDelayRiskSuggestionsStatusReportId: string = '';
  /** state listDelayRiskSuggestionsAcknowledged — input */
  @property() listDelayRiskSuggestionsAcknowledged: string = '';
  /** state listDelayRiskSuggestionsData — queryResult, outputShape: array */
  @property() listDelayRiskSuggestionsData: ListDelayRiskSuggestionsOutput[] = [];

  connectedCallback(): void {
    super.connectedCallback();
    this.initStateValue('ui.projectDetailWorkspace.status', '');
    this.initStateValue('ui.projectDetailWorkspace.action.getProjectDetail.status', 'idle');
    this.initStateValue('ui.projectDetailWorkspace.input.getProjectDetail.projectId', '');
    this.initStateValue('ui.projectDetailWorkspace.data.getProjectDetail', null);
    this.initStateValue('ui.projectDetailWorkspace.action.listWorkTasks.status', 'idle');
    this.initStateValue('ui.projectDetailWorkspace.input.listWorkTasks.projectId', '');
    this.initStateValue('ui.projectDetailWorkspace.input.listWorkTasks.status', '');
    this.initStateValue('ui.projectDetailWorkspace.input.listWorkTasks.assignedWorkerId', '');
    this.initStateValue('ui.projectDetailWorkspace.input.listWorkTasks.page', '');
    this.initStateValue('ui.projectDetailWorkspace.input.listWorkTasks.pageSize', '');
    this.initStateValue('ui.projectDetailWorkspace.data.listWorkTasks', LIST_WORK_TASKS_DATA_DEFAULT);
    this.initStateValue('ui.projectDetailWorkspace.action.listChangeOrders.status', 'idle');
    this.initStateValue('ui.projectDetailWorkspace.input.listChangeOrders.projectId', '');
    this.initStateValue('ui.projectDetailWorkspace.input.listChangeOrders.status', '');
    this.initStateValue('ui.projectDetailWorkspace.input.listChangeOrders.impactType', '');
    this.initStateValue('ui.projectDetailWorkspace.input.listChangeOrders.page', '');
    this.initStateValue('ui.projectDetailWorkspace.input.listChangeOrders.pageSize', '');
    this.initStateValue('ui.projectDetailWorkspace.data.listChangeOrders', LIST_CHANGE_ORDERS_DATA_DEFAULT);
    this.initStateValue('ui.projectDetailWorkspace.action.getChangeOrderDetail.status', 'idle');
    this.initStateValue('ui.projectDetailWorkspace.input.getChangeOrderDetail.changeOrderId', '');
    this.initStateValue('ui.projectDetailWorkspace.data.getChangeOrderDetail', null);
    this.initStateValue('ui.projectDetailWorkspace.action.listTimeLogs.status', 'idle');
    this.initStateValue('ui.projectDetailWorkspace.input.listTimeLogs.workTaskId', '');
    this.initStateValue('ui.projectDetailWorkspace.input.listTimeLogs.workerName', '');
    this.initStateValue('ui.projectDetailWorkspace.input.listTimeLogs.logDate', '');
    this.initStateValue('ui.projectDetailWorkspace.input.listTimeLogs.status', '');
    this.initStateValue('ui.projectDetailWorkspace.input.listTimeLogs.page', '');
    this.initStateValue('ui.projectDetailWorkspace.input.listTimeLogs.pageSize', '');
    this.initStateValue('ui.projectDetailWorkspace.data.listTimeLogs', LIST_TIME_LOGS_DATA_DEFAULT);
    this.initStateValue('ui.projectDetailWorkspace.action.listMaterialUsages.status', 'idle');
    this.initStateValue('ui.projectDetailWorkspace.input.listMaterialUsages.projectId', '');
    this.initStateValue('ui.projectDetailWorkspace.input.listMaterialUsages.status', '');
    this.initStateValue('ui.projectDetailWorkspace.input.listMaterialUsages.page', '');
    this.initStateValue('ui.projectDetailWorkspace.input.listMaterialUsages.pageSize', '');
    this.initStateValue('ui.projectDetailWorkspace.data.listMaterialUsages', LIST_MATERIAL_USAGES_DATA_DEFAULT);
    this.initStateValue('ui.projectDetailWorkspace.action.triggerDelayRiskSuggestions.status', 'idle');
    this.initStateValue('ui.projectDetailWorkspace.input.triggerDelayRiskSuggestions.statusReportId', '');
    this.initStateValue('ui.projectDetailWorkspace.output.triggerDelayRiskSuggestions', null);
    this.initStateValue('ui.projectDetailWorkspace.action.triggerDelayRiskSuggestions.error', '');
    this.initStateValue('ui.projectDetailWorkspace.action.listDelayRiskSuggestions.status', 'idle');
    this.initStateValue('ui.projectDetailWorkspace.input.listDelayRiskSuggestions.statusReportId', '');
    this.initStateValue('ui.projectDetailWorkspace.input.listDelayRiskSuggestions.acknowledged', '');
    this.initStateValue('ui.projectDetailWorkspace.data.listDelayRiskSuggestions', []);
    this.syncRouteParams();
    subscribe(SUBSCRIBED_STATE_KEYS, this);
    void this.loadListTimeLogs();
  }

  disconnectedCallback(): void {
    unsubscribe(SUBSCRIBED_STATE_KEYS, this);
    super.disconnectedCallback();
  }

  /** handleIcaStateChange — collabState notify contract; maps state keys onto class fields */
  handleIcaStateChange(key: string, value: unknown): void {
    switch (key) {
      case 'ui.projectDetailWorkspace.status':
        this.status = (value as string) ?? '';
        break;
      case 'ui.projectDetailWorkspace.action.getProjectDetail.status':
        this.getProjectDetailState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.projectDetailWorkspace.input.getProjectDetail.projectId':
        this.getProjectDetailProjectId = (value as string) ?? '';
        break;
      case 'ui.projectDetailWorkspace.data.getProjectDetail':
        this.getProjectDetailData = (value as GetProjectDetailOutput | null) ?? null;
        break;
      case 'ui.projectDetailWorkspace.action.listWorkTasks.status':
        this.listWorkTasksState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.projectDetailWorkspace.input.listWorkTasks.projectId':
        this.listWorkTasksProjectId = (value as string) ?? '';
        break;
      case 'ui.projectDetailWorkspace.input.listWorkTasks.status':
        this.listWorkTasksStatus = (value as string) ?? '';
        break;
      case 'ui.projectDetailWorkspace.input.listWorkTasks.assignedWorkerId':
        this.listWorkTasksAssignedWorkerId = (value as string) ?? '';
        break;
      case 'ui.projectDetailWorkspace.input.listWorkTasks.page':
        this.listWorkTasksPage = (value as string) ?? '';
        break;
      case 'ui.projectDetailWorkspace.input.listWorkTasks.pageSize':
        this.listWorkTasksPageSize = (value as string) ?? '';
        break;
      case 'ui.projectDetailWorkspace.data.listWorkTasks':
        this.listWorkTasksData = (value as ListWorkTasksOutput) ?? LIST_WORK_TASKS_DATA_DEFAULT;
        break;
      case 'ui.projectDetailWorkspace.action.listChangeOrders.status':
        this.listChangeOrdersState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.projectDetailWorkspace.input.listChangeOrders.projectId':
        this.listChangeOrdersProjectId = (value as string) ?? '';
        break;
      case 'ui.projectDetailWorkspace.input.listChangeOrders.status':
        this.listChangeOrdersStatus = (value as string) ?? '';
        break;
      case 'ui.projectDetailWorkspace.input.listChangeOrders.impactType':
        this.listChangeOrdersImpactType = (value as string) ?? '';
        break;
      case 'ui.projectDetailWorkspace.input.listChangeOrders.page':
        this.listChangeOrdersPage = (value as string) ?? '';
        break;
      case 'ui.projectDetailWorkspace.input.listChangeOrders.pageSize':
        this.listChangeOrdersPageSize = (value as string) ?? '';
        break;
      case 'ui.projectDetailWorkspace.data.listChangeOrders':
        this.listChangeOrdersData = (value as ListChangeOrdersOutput) ?? LIST_CHANGE_ORDERS_DATA_DEFAULT;
        break;
      case 'ui.projectDetailWorkspace.action.getChangeOrderDetail.status':
        this.getChangeOrderDetailState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.projectDetailWorkspace.input.getChangeOrderDetail.changeOrderId':
        this.getChangeOrderDetailChangeOrderId = (value as string) ?? '';
        break;
      case 'ui.projectDetailWorkspace.data.getChangeOrderDetail':
        this.getChangeOrderDetailData = (value as GetChangeOrderDetailOutput | null) ?? null;
        break;
      case 'ui.projectDetailWorkspace.action.listTimeLogs.status':
        this.listTimeLogsState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.projectDetailWorkspace.input.listTimeLogs.workTaskId':
        this.listTimeLogsWorkTaskId = (value as string) ?? '';
        break;
      case 'ui.projectDetailWorkspace.input.listTimeLogs.workerName':
        this.listTimeLogsWorkerName = (value as string) ?? '';
        break;
      case 'ui.projectDetailWorkspace.input.listTimeLogs.logDate':
        this.listTimeLogsLogDate = (value as string) ?? '';
        break;
      case 'ui.projectDetailWorkspace.input.listTimeLogs.status':
        this.listTimeLogsStatus = (value as string) ?? '';
        break;
      case 'ui.projectDetailWorkspace.input.listTimeLogs.page':
        this.listTimeLogsPage = (value as string) ?? '';
        break;
      case 'ui.projectDetailWorkspace.input.listTimeLogs.pageSize':
        this.listTimeLogsPageSize = (value as string) ?? '';
        break;
      case 'ui.projectDetailWorkspace.data.listTimeLogs':
        this.listTimeLogsData = (value as ListTimeLogsOutput) ?? LIST_TIME_LOGS_DATA_DEFAULT;
        break;
      case 'ui.projectDetailWorkspace.action.listMaterialUsages.status':
        this.listMaterialUsagesState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.projectDetailWorkspace.input.listMaterialUsages.projectId':
        this.listMaterialUsagesProjectId = (value as string) ?? '';
        break;
      case 'ui.projectDetailWorkspace.input.listMaterialUsages.status':
        this.listMaterialUsagesStatus = (value as string) ?? '';
        break;
      case 'ui.projectDetailWorkspace.input.listMaterialUsages.page':
        this.listMaterialUsagesPage = (value as string) ?? '';
        break;
      case 'ui.projectDetailWorkspace.input.listMaterialUsages.pageSize':
        this.listMaterialUsagesPageSize = (value as string) ?? '';
        break;
      case 'ui.projectDetailWorkspace.data.listMaterialUsages':
        this.listMaterialUsagesData = (value as ListMaterialUsagesOutput) ?? LIST_MATERIAL_USAGES_DATA_DEFAULT;
        break;
      case 'ui.projectDetailWorkspace.action.triggerDelayRiskSuggestions.status':
        this.triggerDelayRiskSuggestionsState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.projectDetailWorkspace.input.triggerDelayRiskSuggestions.statusReportId':
        this.triggerDelayRiskSuggestionsStatusReportId = (value as string) ?? '';
        break;
      case 'ui.projectDetailWorkspace.output.triggerDelayRiskSuggestions':
        this.triggerDelayRiskSuggestionsOutput = (value as TriggerDelayRiskSuggestionsOutput | null) ?? null;
        break;
      case 'ui.projectDetailWorkspace.action.triggerDelayRiskSuggestions.error':
        this.triggerDelayRiskSuggestionsError = (value as string) ?? '';
        break;
      case 'ui.projectDetailWorkspace.action.listDelayRiskSuggestions.status':
        this.listDelayRiskSuggestionsState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.projectDetailWorkspace.input.listDelayRiskSuggestions.statusReportId':
        this.listDelayRiskSuggestionsStatusReportId = (value as string) ?? '';
        break;
      case 'ui.projectDetailWorkspace.input.listDelayRiskSuggestions.acknowledged':
        this.listDelayRiskSuggestionsAcknowledged = (value as string) ?? '';
        break;
      case 'ui.projectDetailWorkspace.data.listDelayRiskSuggestions':
        this.listDelayRiskSuggestionsData = (value as ListDelayRiskSuggestionsOutput[]) ?? [];
        break;
      default:
        break;
    }
    this.requestUpdate();
  }

  private initStateValue(stateKey: string, defaultValue: unknown): void {
    const existing: unknown = getState(stateKey);
    const value: unknown = existing !== undefined ? existing : defaultValue;
    switch (stateKey) {
      case 'ui.projectDetailWorkspace.status':
        this.status = (value as string) ?? '';
        break;
      case 'ui.projectDetailWorkspace.action.getProjectDetail.status':
        this.getProjectDetailState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.projectDetailWorkspace.input.getProjectDetail.projectId':
        this.getProjectDetailProjectId = (value as string) ?? '';
        break;
      case 'ui.projectDetailWorkspace.data.getProjectDetail':
        this.getProjectDetailData = (value as GetProjectDetailOutput | null) ?? null;
        break;
      case 'ui.projectDetailWorkspace.action.listWorkTasks.status':
        this.listWorkTasksState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.projectDetailWorkspace.input.listWorkTasks.projectId':
        this.listWorkTasksProjectId = (value as string) ?? '';
        break;
      case 'ui.projectDetailWorkspace.input.listWorkTasks.status':
        this.listWorkTasksStatus = (value as string) ?? '';
        break;
      case 'ui.projectDetailWorkspace.input.listWorkTasks.assignedWorkerId':
        this.listWorkTasksAssignedWorkerId = (value as string) ?? '';
        break;
      case 'ui.projectDetailWorkspace.input.listWorkTasks.page':
        this.listWorkTasksPage = (value as string) ?? '';
        break;
      case 'ui.projectDetailWorkspace.input.listWorkTasks.pageSize':
        this.listWorkTasksPageSize = (value as string) ?? '';
        break;
      case 'ui.projectDetailWorkspace.data.listWorkTasks':
        this.listWorkTasksData = (value as ListWorkTasksOutput) ?? LIST_WORK_TASKS_DATA_DEFAULT;
        break;
      case 'ui.projectDetailWorkspace.action.listChangeOrders.status':
        this.listChangeOrdersState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.projectDetailWorkspace.input.listChangeOrders.projectId':
        this.listChangeOrdersProjectId = (value as string) ?? '';
        break;
      case 'ui.projectDetailWorkspace.input.listChangeOrders.status':
        this.listChangeOrdersStatus = (value as string) ?? '';
        break;
      case 'ui.projectDetailWorkspace.input.listChangeOrders.impactType':
        this.listChangeOrdersImpactType = (value as string) ?? '';
        break;
      case 'ui.projectDetailWorkspace.input.listChangeOrders.page':
        this.listChangeOrdersPage = (value as string) ?? '';
        break;
      case 'ui.projectDetailWorkspace.input.listChangeOrders.pageSize':
        this.listChangeOrdersPageSize = (value as string) ?? '';
        break;
      case 'ui.projectDetailWorkspace.data.listChangeOrders':
        this.listChangeOrdersData = (value as ListChangeOrdersOutput) ?? LIST_CHANGE_ORDERS_DATA_DEFAULT;
        break;
      case 'ui.projectDetailWorkspace.action.getChangeOrderDetail.status':
        this.getChangeOrderDetailState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.projectDetailWorkspace.input.getChangeOrderDetail.changeOrderId':
        this.getChangeOrderDetailChangeOrderId = (value as string) ?? '';
        break;
      case 'ui.projectDetailWorkspace.data.getChangeOrderDetail':
        this.getChangeOrderDetailData = (value as GetChangeOrderDetailOutput | null) ?? null;
        break;
      case 'ui.projectDetailWorkspace.action.listTimeLogs.status':
        this.listTimeLogsState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.projectDetailWorkspace.input.listTimeLogs.workTaskId':
        this.listTimeLogsWorkTaskId = (value as string) ?? '';
        break;
      case 'ui.projectDetailWorkspace.input.listTimeLogs.workerName':
        this.listTimeLogsWorkerName = (value as string) ?? '';
        break;
      case 'ui.projectDetailWorkspace.input.listTimeLogs.logDate':
        this.listTimeLogsLogDate = (value as string) ?? '';
        break;
      case 'ui.projectDetailWorkspace.input.listTimeLogs.status':
        this.listTimeLogsStatus = (value as string) ?? '';
        break;
      case 'ui.projectDetailWorkspace.input.listTimeLogs.page':
        this.listTimeLogsPage = (value as string) ?? '';
        break;
      case 'ui.projectDetailWorkspace.input.listTimeLogs.pageSize':
        this.listTimeLogsPageSize = (value as string) ?? '';
        break;
      case 'ui.projectDetailWorkspace.data.listTimeLogs':
        this.listTimeLogsData = (value as ListTimeLogsOutput) ?? LIST_TIME_LOGS_DATA_DEFAULT;
        break;
      case 'ui.projectDetailWorkspace.action.listMaterialUsages.status':
        this.listMaterialUsagesState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.projectDetailWorkspace.input.listMaterialUsages.projectId':
        this.listMaterialUsagesProjectId = (value as string) ?? '';
        break;
      case 'ui.projectDetailWorkspace.input.listMaterialUsages.status':
        this.listMaterialUsagesStatus = (value as string) ?? '';
        break;
      case 'ui.projectDetailWorkspace.input.listMaterialUsages.page':
        this.listMaterialUsagesPage = (value as string) ?? '';
        break;
      case 'ui.projectDetailWorkspace.input.listMaterialUsages.pageSize':
        this.listMaterialUsagesPageSize = (value as string) ?? '';
        break;
      case 'ui.projectDetailWorkspace.data.listMaterialUsages':
        this.listMaterialUsagesData = (value as ListMaterialUsagesOutput) ?? LIST_MATERIAL_USAGES_DATA_DEFAULT;
        break;
      case 'ui.projectDetailWorkspace.action.triggerDelayRiskSuggestions.status':
        this.triggerDelayRiskSuggestionsState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.projectDetailWorkspace.input.triggerDelayRiskSuggestions.statusReportId':
        this.triggerDelayRiskSuggestionsStatusReportId = (value as string) ?? '';
        break;
      case 'ui.projectDetailWorkspace.output.triggerDelayRiskSuggestions':
        this.triggerDelayRiskSuggestionsOutput = (value as TriggerDelayRiskSuggestionsOutput | null) ?? null;
        break;
      case 'ui.projectDetailWorkspace.action.triggerDelayRiskSuggestions.error':
        this.triggerDelayRiskSuggestionsError = (value as string) ?? '';
        break;
      case 'ui.projectDetailWorkspace.action.listDelayRiskSuggestions.status':
        this.listDelayRiskSuggestionsState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.projectDetailWorkspace.input.listDelayRiskSuggestions.statusReportId':
        this.listDelayRiskSuggestionsStatusReportId = (value as string) ?? '';
        break;
      case 'ui.projectDetailWorkspace.input.listDelayRiskSuggestions.acknowledged':
        this.listDelayRiskSuggestionsAcknowledged = (value as string) ?? '';
        break;
      case 'ui.projectDetailWorkspace.data.listDelayRiskSuggestions':
        this.listDelayRiskSuggestionsData = (value as ListDelayRiskSuggestionsOutput[]) ?? [];
        break;
      default:
        break;
    }
    if (existing === undefined) {
      setState(stateKey, value);
    }
  }

  private syncRouteParams(): void {
    const pathname: string = window.location.pathname;
    const match: RegExpMatchArray | null = pathname.match(
      /^\/buildFlowFsm\/projectDetailWorkspace(?:\/([^/]+))?(?:\/([^/]+))?\/?$/,
    );
    const rawProjectId: string = match && match[1] ? match[1] : '';
    let projectId: string = '';
    if (rawProjectId) {
      try {
        projectId = decodeURIComponent(rawProjectId);
      } catch {
        projectId = rawProjectId;
      }
    }
    if (projectId) {
      if (!this.getProjectDetailProjectId) {
        this.getProjectDetailProjectId = projectId;
        setState('ui.projectDetailWorkspace.input.getProjectDetail.projectId', projectId);
      }
    }
    const rawChangeOrderId: string = match && match[2] ? match[2] : '';
    let changeOrderId: string = '';
    if (rawChangeOrderId) {
      try {
        changeOrderId = decodeURIComponent(rawChangeOrderId);
      } catch {
        changeOrderId = rawChangeOrderId;
      }
    }
    if (changeOrderId) {
      if (!this.getChangeOrderDetailChangeOrderId) {
        this.getChangeOrderDetailChangeOrderId = changeOrderId;
        setState('ui.projectDetailWorkspace.input.getChangeOrderDetail.changeOrderId', changeOrderId);
      }
    }
  }

  private readErrorMessage(error: unknown, fallback: string): string {
    if (error && typeof error === 'object') {
      const record = error as { message?: unknown; error?: unknown };
      if (typeof record.message === 'string' && record.message) {
        return record.message;
      }
      if (typeof record.error === 'string' && record.error) {
        return record.error;
      }
    }
    return fallback;
  }

  /** action getProjectDetail (query) — route buildFlowFsm.projectDetailWorkspace.getProjectDetail; inputs: projectId; writes ui.projectDetailWorkspace.data.getProjectDetail; status ui.projectDetailWorkspace.action.getProjectDetail.status */
  async loadGetProjectDetail(): Promise<void> {
    this.syncRouteParams();
    if (!this.getProjectDetailProjectId) {
      this.getProjectDetailState = 'idle';
      setState('ui.projectDetailWorkspace.action.getProjectDetail.status', 'idle');
      this.requestUpdate();
      return;
    }
    this.getProjectDetailState = 'loading';
    setState('ui.projectDetailWorkspace.action.getProjectDetail.status', 'loading');
    const params: GetProjectDetailInput = {
      projectId: this.getProjectDetailProjectId,
    };
    const options: BffClientOptions = { mode: 'silent' };
    const response = await execBff<GetProjectDetailOutput>(getProjectDetailRoute, params, options);
    if (response.ok) {
      const data = response.data ?? null;
      this.getProjectDetailData = data;
      setState('ui.projectDetailWorkspace.data.getProjectDetail', data);
      this.getProjectDetailState = 'success';
      setState('ui.projectDetailWorkspace.action.getProjectDetail.status', 'success');
    } else {
      this.getProjectDetailState = 'error';
      setState('ui.projectDetailWorkspace.action.getProjectDetail.status', 'error');
      if (response.error) {
        console.error('getProjectDetail failed', response.error);
      }
    }
    this.requestUpdate();
  }

  /** handler for action getProjectDetail — bind UI events here */
  handleGetProjectDetailClick(event?: Event): void {
    if (event) {
      event.preventDefault();
    }
    void this.loadGetProjectDetail();
  }

  /** action listWorkTasks (query) — route buildFlowFsm.projectDetailWorkspace.listWorkTasks; inputs: projectId, status, assignedWorkerId, page, pageSize; writes ui.projectDetailWorkspace.data.listWorkTasks; status ui.projectDetailWorkspace.action.listWorkTasks.status */
  async loadListWorkTasks(): Promise<void> {
    this.syncRouteParams();
    this.listWorkTasksState = 'loading';
    setState('ui.projectDetailWorkspace.action.listWorkTasks.status', 'loading');
    const params: ListWorkTasksInput = {
      projectId: this.listWorkTasksProjectId,
    };
    if (this.listWorkTasksStatus) {
      params.status = this.listWorkTasksStatus;
    }
    if (this.listWorkTasksAssignedWorkerId) {
      params.assignedWorkerId = this.listWorkTasksAssignedWorkerId;
    }
    if (this.listWorkTasksPage !== '') {
      const pageNum = Number(this.listWorkTasksPage);
      if (!Number.isNaN(pageNum)) {
        params.page = pageNum;
      }
    }
    if (this.listWorkTasksPageSize !== '') {
      const pageSizeNum = Number(this.listWorkTasksPageSize);
      if (!Number.isNaN(pageSizeNum)) {
        params.pageSize = pageSizeNum;
      }
    }
    const options: BffClientOptions = { mode: 'silent' };
    const response = await execBff<ListWorkTasksOutput>(listWorkTasksRoute, params, options);
    if (response.ok) {
      const data = response.data ?? LIST_WORK_TASKS_DATA_DEFAULT;
      this.listWorkTasksData = data;
      setState('ui.projectDetailWorkspace.data.listWorkTasks', data);
      this.listWorkTasksState = 'success';
      setState('ui.projectDetailWorkspace.action.listWorkTasks.status', 'success');
    } else {
      this.listWorkTasksState = 'error';
      setState('ui.projectDetailWorkspace.action.listWorkTasks.status', 'error');
      if (response.error) {
        console.error('listWorkTasks failed', response.error);
      }
    }
    this.requestUpdate();
  }

  /** handler for action listWorkTasks — bind UI events here */
  handleListWorkTasksClick(event?: Event): void {
    if (event) {
      event.preventDefault();
    }
    void this.loadListWorkTasks();
  }

  /** action listChangeOrders (query) — route buildFlowFsm.projectDetailWorkspace.listChangeOrders; inputs: projectId, status, impactType, page, pageSize; writes ui.projectDetailWorkspace.data.listChangeOrders; status ui.projectDetailWorkspace.action.listChangeOrders.status */
  async loadListChangeOrders(): Promise<void> {
    this.syncRouteParams();
    if (!this.listChangeOrdersProjectId) {
      this.listChangeOrdersState = 'idle';
      setState('ui.projectDetailWorkspace.action.listChangeOrders.status', 'idle');
      this.requestUpdate();
      return;
    }
    this.listChangeOrdersState = 'loading';
    setState('ui.projectDetailWorkspace.action.listChangeOrders.status', 'loading');
    const params: ListChangeOrdersInput = {
      projectId: this.listChangeOrdersProjectId,
    };
    if (this.listChangeOrdersStatus) {
      params.status = this.listChangeOrdersStatus;
    }
    if (this.listChangeOrdersImpactType) {
      params.impactType = this.listChangeOrdersImpactType;
    }
    if (this.listChangeOrdersPage !== '') {
      const pageNum = Number(this.listChangeOrdersPage);
      if (!Number.isNaN(pageNum)) {
        params.page = pageNum;
      }
    }
    if (this.listChangeOrdersPageSize !== '') {
      const pageSizeNum = Number(this.listChangeOrdersPageSize);
      if (!Number.isNaN(pageSizeNum)) {
        params.pageSize = pageSizeNum;
      }
    }
    const options: BffClientOptions = { mode: 'silent' };
    const response = await execBff<ListChangeOrdersOutput>(listChangeOrdersRoute, params, options);
    if (response.ok) {
      const data = response.data ?? LIST_CHANGE_ORDERS_DATA_DEFAULT;
      this.listChangeOrdersData = data;
      setState('ui.projectDetailWorkspace.data.listChangeOrders', data);
      this.listChangeOrdersState = 'success';
      setState('ui.projectDetailWorkspace.action.listChangeOrders.status', 'success');
    } else {
      this.listChangeOrdersState = 'error';
      setState('ui.projectDetailWorkspace.action.listChangeOrders.status', 'error');
      if (response.error) {
        console.error('listChangeOrders failed', response.error);
      }
    }
    this.requestUpdate();
  }

  /** handler for action listChangeOrders — bind UI events here */
  handleListChangeOrdersClick(event?: Event): void {
    if (event) {
      event.preventDefault();
    }
    void this.loadListChangeOrders();
  }

  /** action getChangeOrderDetail (query) — route buildFlowFsm.projectDetailWorkspace.getChangeOrderDetail; inputs: changeOrderId; writes ui.projectDetailWorkspace.data.getChangeOrderDetail; status ui.projectDetailWorkspace.action.getChangeOrderDetail.status */
  async loadGetChangeOrderDetail(): Promise<void> {
    this.syncRouteParams();
    if (!this.getChangeOrderDetailChangeOrderId) {
      this.getChangeOrderDetailState = 'idle';
      setState('ui.projectDetailWorkspace.action.getChangeOrderDetail.status', 'idle');
      this.requestUpdate();
      return;
    }
    this.getChangeOrderDetailState = 'loading';
    setState('ui.projectDetailWorkspace.action.getChangeOrderDetail.status', 'loading');
    const params: GetChangeOrderDetailInput = {
      changeOrderId: this.getChangeOrderDetailChangeOrderId,
    };
    const options: BffClientOptions = { mode: 'silent' };
    const response = await execBff<GetChangeOrderDetailOutput>(getChangeOrderDetailRoute, params, options);
    if (response.ok) {
      const data = response.data ?? null;
      this.getChangeOrderDetailData = data;
      setState('ui.projectDetailWorkspace.data.getChangeOrderDetail', data);
      this.getChangeOrderDetailState = 'success';
      setState('ui.projectDetailWorkspace.action.getChangeOrderDetail.status', 'success');
    } else {
      this.getChangeOrderDetailState = 'error';
      setState('ui.projectDetailWorkspace.action.getChangeOrderDetail.status', 'error');
      if (response.error) {
        console.error('getChangeOrderDetail failed', response.error);
      }
    }
    this.requestUpdate();
  }

  /** handler for action getChangeOrderDetail — bind UI events here */
  handleGetChangeOrderDetailClick(event?: Event): void {
    if (event) {
      event.preventDefault();
    }
    void this.loadGetChangeOrderDetail();
  }

  /** action listTimeLogs (query) — route buildFlowFsm.projectDetailWorkspace.listTimeLogs; inputs: workTaskId, workerName, logDate, status, page, pageSize; writes ui.projectDetailWorkspace.data.listTimeLogs; status ui.projectDetailWorkspace.action.listTimeLogs.status */
  async loadListTimeLogs(): Promise<void> {
    this.syncRouteParams();
    this.listTimeLogsState = 'loading';
    setState('ui.projectDetailWorkspace.action.listTimeLogs.status', 'loading');
    const params: ListTimeLogsInput = {
    };
    if (this.listTimeLogsWorkTaskId) {
      params.workTaskId = this.listTimeLogsWorkTaskId;
    }
    if (this.listTimeLogsWorkerName) {
      params.workerName = this.listTimeLogsWorkerName;
    }
    if (this.listTimeLogsLogDate) {
      params.logDate = this.listTimeLogsLogDate;
    }
    if (this.listTimeLogsStatus) {
      params.status = this.listTimeLogsStatus;
    }
    if (this.listTimeLogsPage !== '') {
      const pageNum = Number(this.listTimeLogsPage);
      if (!Number.isNaN(pageNum)) {
        params.page = pageNum;
      }
    }
    if (this.listTimeLogsPageSize !== '') {
      const pageSizeNum = Number(this.listTimeLogsPageSize);
      if (!Number.isNaN(pageSizeNum)) {
        params.pageSize = pageSizeNum;
      }
    }
    const options: BffClientOptions = { mode: 'silent' };
    const response = await execBff<ListTimeLogsOutput>(listTimeLogsRoute, params, options);
    if (response.ok) {
      const data = response.data ?? LIST_TIME_LOGS_DATA_DEFAULT;
      this.listTimeLogsData = data;
      setState('ui.projectDetailWorkspace.data.listTimeLogs', data);
      this.listTimeLogsState = 'success';
      setState('ui.projectDetailWorkspace.action.listTimeLogs.status', 'success');
    } else {
      this.listTimeLogsState = 'error';
      setState('ui.projectDetailWorkspace.action.listTimeLogs.status', 'error');
      if (response.error) {
        console.error('listTimeLogs failed', response.error);
      }
    }
    this.requestUpdate();
  }

  /** handler for action listTimeLogs — bind UI events here */
  handleListTimeLogsClick(event?: Event): void {
    if (event) {
      event.preventDefault();
    }
    void this.loadListTimeLogs();
  }

  /** action listMaterialUsages (query) — route buildFlowFsm.projectDetailWorkspace.listMaterialUsages; inputs: projectId, status, page, pageSize; writes ui.projectDetailWorkspace.data.listMaterialUsages; status ui.projectDetailWorkspace.action.listMaterialUsages.status */
  async loadListMaterialUsages(): Promise<void> {
    this.syncRouteParams();
    if (!this.listMaterialUsagesProjectId) {
      this.listMaterialUsagesState = 'idle';
      setState('ui.projectDetailWorkspace.action.listMaterialUsages.status', 'idle');
      this.requestUpdate();
      return;
    }
    this.listMaterialUsagesState = 'loading';
    setState('ui.projectDetailWorkspace.action.listMaterialUsages.status', 'loading');
    const params: ListMaterialUsagesInput = {
      projectId: this.listMaterialUsagesProjectId,
    };
    if (this.listMaterialUsagesStatus) {
      params.status = this.listMaterialUsagesStatus;
    }
    if (this.listMaterialUsagesPage !== '') {
      const pageNum = Number(this.listMaterialUsagesPage);
      if (!Number.isNaN(pageNum)) {
        params.page = pageNum;
      }
    }
    if (this.listMaterialUsagesPageSize !== '') {
      const pageSizeNum = Number(this.listMaterialUsagesPageSize);
      if (!Number.isNaN(pageSizeNum)) {
        params.pageSize = pageSizeNum;
      }
    }
    const options: BffClientOptions = { mode: 'silent' };
    const response = await execBff<ListMaterialUsagesOutput>(listMaterialUsagesRoute, params, options);
    if (response.ok) {
      const data = response.data ?? LIST_MATERIAL_USAGES_DATA_DEFAULT;
      this.listMaterialUsagesData = data;
      setState('ui.projectDetailWorkspace.data.listMaterialUsages', data);
      this.listMaterialUsagesState = 'success';
      setState('ui.projectDetailWorkspace.action.listMaterialUsages.status', 'success');
    } else {
      this.listMaterialUsagesState = 'error';
      setState('ui.projectDetailWorkspace.action.listMaterialUsages.status', 'error');
      if (response.error) {
        console.error('listMaterialUsages failed', response.error);
      }
    }
    this.requestUpdate();
  }

  /** handler for action listMaterialUsages — bind UI events here */
  handleListMaterialUsagesClick(event?: Event): void {
    if (event) {
      event.preventDefault();
    }
    void this.loadListMaterialUsages();
  }

  /** action triggerDelayRiskSuggestions (command) — route buildFlowFsm.projectDetailWorkspace.triggerDelayRiskSuggestions; inputs: statusReportId; writes ui.projectDetailWorkspace.output.triggerDelayRiskSuggestions; status ui.projectDetailWorkspace.action.triggerDelayRiskSuggestions.status; feedback keys action.triggerDelayRiskSuggestions.success / action.triggerDelayRiskSuggestions.error */
  async triggerDelayRiskSuggestions(): Promise<void> {
    this.syncRouteParams();
    if (!this.triggerDelayRiskSuggestionsStatusReportId) {
      this.triggerDelayRiskSuggestionsState = 'idle';
      setState('ui.projectDetailWorkspace.action.triggerDelayRiskSuggestions.status', 'idle');
      this.requestUpdate();
      return;
    }
    this.triggerDelayRiskSuggestionsState = 'loading';
    setState('ui.projectDetailWorkspace.action.triggerDelayRiskSuggestions.status', 'loading');
    this.triggerDelayRiskSuggestionsError = '';
    setState('ui.projectDetailWorkspace.action.triggerDelayRiskSuggestions.error', '');
    const params: TriggerDelayRiskSuggestionsInput = {
      statusReportId: this.triggerDelayRiskSuggestionsStatusReportId,
    };
    const options: BffClientOptions = { mode: 'blocking' };
    const response = await execBff<TriggerDelayRiskSuggestionsOutput>(triggerDelayRiskSuggestionsRoute, params, options);
    if (!response.ok) {
      const errMsg: string = this.readErrorMessage(response.error, 'action.triggerDelayRiskSuggestions.error');
      this.triggerDelayRiskSuggestionsError = errMsg;
      setState('ui.projectDetailWorkspace.action.triggerDelayRiskSuggestions.error', errMsg);
      this.triggerDelayRiskSuggestionsState = 'error';
      setState('ui.projectDetailWorkspace.action.triggerDelayRiskSuggestions.status', 'error');
      this.requestUpdate();
      return;
    }
    const data: TriggerDelayRiskSuggestionsOutput | null = response.data ?? null;
    this.triggerDelayRiskSuggestionsOutput = data;
    setState('ui.projectDetailWorkspace.output.triggerDelayRiskSuggestions', data);
    try {
      await this.loadGetProjectDetail();
      if (this.getProjectDetailState === 'error') {
        this.triggerDelayRiskSuggestionsState = 'error';
        setState('ui.projectDetailWorkspace.action.triggerDelayRiskSuggestions.status', 'error');
        this.requestUpdate();
        return;
      }
    } catch (refreshError: unknown) {
      console.error('triggerDelayRiskSuggestions refresh failed', refreshError);
      this.triggerDelayRiskSuggestionsState = 'error';
      setState('ui.projectDetailWorkspace.action.triggerDelayRiskSuggestions.status', 'error');
      this.requestUpdate();
      return;
    }
    try {
      await this.loadListWorkTasks();
      if (this.listWorkTasksState === 'error') {
        this.triggerDelayRiskSuggestionsState = 'error';
        setState('ui.projectDetailWorkspace.action.triggerDelayRiskSuggestions.status', 'error');
        this.requestUpdate();
        return;
      }
    } catch (refreshError: unknown) {
      console.error('triggerDelayRiskSuggestions refresh failed', refreshError);
      this.triggerDelayRiskSuggestionsState = 'error';
      setState('ui.projectDetailWorkspace.action.triggerDelayRiskSuggestions.status', 'error');
      this.requestUpdate();
      return;
    }
    try {
      await this.loadListChangeOrders();
      if (this.listChangeOrdersState === 'error') {
        this.triggerDelayRiskSuggestionsState = 'error';
        setState('ui.projectDetailWorkspace.action.triggerDelayRiskSuggestions.status', 'error');
        this.requestUpdate();
        return;
      }
    } catch (refreshError: unknown) {
      console.error('triggerDelayRiskSuggestions refresh failed', refreshError);
      this.triggerDelayRiskSuggestionsState = 'error';
      setState('ui.projectDetailWorkspace.action.triggerDelayRiskSuggestions.status', 'error');
      this.requestUpdate();
      return;
    }
    try {
      await this.loadGetChangeOrderDetail();
      if (this.getChangeOrderDetailState === 'error') {
        this.triggerDelayRiskSuggestionsState = 'error';
        setState('ui.projectDetailWorkspace.action.triggerDelayRiskSuggestions.status', 'error');
        this.requestUpdate();
        return;
      }
    } catch (refreshError: unknown) {
      console.error('triggerDelayRiskSuggestions refresh failed', refreshError);
      this.triggerDelayRiskSuggestionsState = 'error';
      setState('ui.projectDetailWorkspace.action.triggerDelayRiskSuggestions.status', 'error');
      this.requestUpdate();
      return;
    }
    try {
      await this.loadListTimeLogs();
      if (this.listTimeLogsState === 'error') {
        this.triggerDelayRiskSuggestionsState = 'error';
        setState('ui.projectDetailWorkspace.action.triggerDelayRiskSuggestions.status', 'error');
        this.requestUpdate();
        return;
      }
    } catch (refreshError: unknown) {
      console.error('triggerDelayRiskSuggestions refresh failed', refreshError);
      this.triggerDelayRiskSuggestionsState = 'error';
      setState('ui.projectDetailWorkspace.action.triggerDelayRiskSuggestions.status', 'error');
      this.requestUpdate();
      return;
    }
    try {
      await this.loadListMaterialUsages();
      if (this.listMaterialUsagesState === 'error') {
        this.triggerDelayRiskSuggestionsState = 'error';
        setState('ui.projectDetailWorkspace.action.triggerDelayRiskSuggestions.status', 'error');
        this.requestUpdate();
        return;
      }
    } catch (refreshError: unknown) {
      console.error('triggerDelayRiskSuggestions refresh failed', refreshError);
      this.triggerDelayRiskSuggestionsState = 'error';
      setState('ui.projectDetailWorkspace.action.triggerDelayRiskSuggestions.status', 'error');
      this.requestUpdate();
      return;
    }
    try {
      await this.loadListDelayRiskSuggestions();
      if (this.listDelayRiskSuggestionsState === 'error') {
        this.triggerDelayRiskSuggestionsState = 'error';
        setState('ui.projectDetailWorkspace.action.triggerDelayRiskSuggestions.status', 'error');
        this.requestUpdate();
        return;
      }
    } catch (refreshError: unknown) {
      console.error('triggerDelayRiskSuggestions refresh failed', refreshError);
      this.triggerDelayRiskSuggestionsState = 'error';
      setState('ui.projectDetailWorkspace.action.triggerDelayRiskSuggestions.status', 'error');
      this.requestUpdate();
      return;
    }
    this.triggerDelayRiskSuggestionsStatusReportId = '';
    setState('ui.projectDetailWorkspace.input.triggerDelayRiskSuggestions.statusReportId', '');
    this.triggerDelayRiskSuggestionsState = 'success';
    setState('ui.projectDetailWorkspace.action.triggerDelayRiskSuggestions.status', 'success');
    this.requestUpdate();
  }

  /** handler for action triggerDelayRiskSuggestions — bind UI events here */
  handleTriggerDelayRiskSuggestionsClick(event?: Event): void {
    if (event) {
      event.preventDefault();
    }
    void runBlockingUiAction(async (_signal: AbortSignal) => {
      await this.triggerDelayRiskSuggestions();
    });
  }

  /** action listDelayRiskSuggestions (query) — route buildFlowFsm.projectDetailWorkspace.listDelayRiskSuggestions; inputs: statusReportId, acknowledged; writes ui.projectDetailWorkspace.data.listDelayRiskSuggestions; status ui.projectDetailWorkspace.action.listDelayRiskSuggestions.status */
  async loadListDelayRiskSuggestions(): Promise<void> {
    this.syncRouteParams();
    if (!this.listDelayRiskSuggestionsStatusReportId) {
      this.listDelayRiskSuggestionsState = 'idle';
      setState('ui.projectDetailWorkspace.action.listDelayRiskSuggestions.status', 'idle');
      this.requestUpdate();
      return;
    }
    this.listDelayRiskSuggestionsState = 'loading';
    setState('ui.projectDetailWorkspace.action.listDelayRiskSuggestions.status', 'loading');
    const params: ListDelayRiskSuggestionsInput = {
      statusReportId: this.listDelayRiskSuggestionsStatusReportId,
    };
    if (this.listDelayRiskSuggestionsAcknowledged !== '') {
      params.acknowledged = this.listDelayRiskSuggestionsAcknowledged === 'true';
    }
    const options: BffClientOptions = { mode: 'silent' };
    const response = await execBff<ListDelayRiskSuggestionsOutput[]>(listDelayRiskSuggestionsRoute, params, options);
    if (response.ok) {
      const data = response.data ?? [];
      this.listDelayRiskSuggestionsData = data;
      setState('ui.projectDetailWorkspace.data.listDelayRiskSuggestions', data);
      this.listDelayRiskSuggestionsState = 'success';
      setState('ui.projectDetailWorkspace.action.listDelayRiskSuggestions.status', 'success');
    } else {
      this.listDelayRiskSuggestionsState = 'error';
      setState('ui.projectDetailWorkspace.action.listDelayRiskSuggestions.status', 'error');
      if (response.error) {
        console.error('listDelayRiskSuggestions failed', response.error);
      }
    }
    this.requestUpdate();
  }

  /** handler for action listDelayRiskSuggestions — bind UI events here */
  handleListDelayRiskSuggestionsClick(event?: Event): void {
    if (event) {
      event.preventDefault();
    }
    void this.loadListDelayRiskSuggestions();
  }

  /** setter for state ui.projectDetailWorkspace.input.getProjectDetail.projectId */
  setGetProjectDetailProjectId(value: string): void {
    this.getProjectDetailProjectId = value;
    setState('ui.projectDetailWorkspace.input.getProjectDetail.projectId', value);
    this.requestUpdate();
  }

  /** handler for action set.getProjectDetailProjectId — bind UI events here */
  handleGetProjectDetailProjectIdChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setGetProjectDetailProjectId(value);
  }

  /** setter for state ui.projectDetailWorkspace.input.listWorkTasks.projectId */
  setListWorkTasksProjectId(value: string): void {
    this.listWorkTasksProjectId = value;
    setState('ui.projectDetailWorkspace.input.listWorkTasks.projectId', value);
    this.requestUpdate();
  }

  /** handler for action set.listWorkTasksProjectId — bind UI events here */
  handleListWorkTasksProjectIdChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setListWorkTasksProjectId(value);
  }

  /** setter for state ui.projectDetailWorkspace.input.listWorkTasks.status */
  setListWorkTasksStatus(value: string): void {
    this.listWorkTasksStatus = value;
    setState('ui.projectDetailWorkspace.input.listWorkTasks.status', value);
    this.requestUpdate();
  }

  /** handler for action set.listWorkTasksStatus — bind UI events here */
  handleListWorkTasksStatusChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setListWorkTasksStatus(value);
  }

  /** setter for state ui.projectDetailWorkspace.input.listWorkTasks.assignedWorkerId */
  setListWorkTasksAssignedWorkerId(value: string): void {
    this.listWorkTasksAssignedWorkerId = value;
    setState('ui.projectDetailWorkspace.input.listWorkTasks.assignedWorkerId', value);
    this.requestUpdate();
  }

  /** handler for action set.listWorkTasksAssignedWorkerId — bind UI events here */
  handleListWorkTasksAssignedWorkerIdChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setListWorkTasksAssignedWorkerId(value);
  }

  /** setter for state ui.projectDetailWorkspace.input.listWorkTasks.page */
  setListWorkTasksPage(value: string): void {
    this.listWorkTasksPage = value;
    setState('ui.projectDetailWorkspace.input.listWorkTasks.page', value);
    this.requestUpdate();
  }

  /** handler for action set.listWorkTasksPage — bind UI events here */
  handleListWorkTasksPageChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setListWorkTasksPage(value);
  }

  /** setter for state ui.projectDetailWorkspace.input.listWorkTasks.pageSize */
  setListWorkTasksPageSize(value: string): void {
    this.listWorkTasksPageSize = value;
    setState('ui.projectDetailWorkspace.input.listWorkTasks.pageSize', value);
    this.requestUpdate();
  }

  /** handler for action set.listWorkTasksPageSize — bind UI events here */
  handleListWorkTasksPageSizeChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setListWorkTasksPageSize(value);
  }

  /** setter for state ui.projectDetailWorkspace.input.listChangeOrders.projectId */
  setListChangeOrdersProjectId(value: string): void {
    this.listChangeOrdersProjectId = value;
    setState('ui.projectDetailWorkspace.input.listChangeOrders.projectId', value);
    this.requestUpdate();
  }

  /** handler for action set.listChangeOrdersProjectId — bind UI events here */
  handleListChangeOrdersProjectIdChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setListChangeOrdersProjectId(value);
  }

  /** setter for state ui.projectDetailWorkspace.input.listChangeOrders.status */
  setListChangeOrdersStatus(value: string): void {
    this.listChangeOrdersStatus = value;
    setState('ui.projectDetailWorkspace.input.listChangeOrders.status', value);
    this.requestUpdate();
  }

  /** handler for action set.listChangeOrdersStatus — bind UI events here */
  handleListChangeOrdersStatusChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setListChangeOrdersStatus(value);
  }

  /** setter for state ui.projectDetailWorkspace.input.listChangeOrders.impactType */
  setListChangeOrdersImpactType(value: string): void {
    this.listChangeOrdersImpactType = value;
    setState('ui.projectDetailWorkspace.input.listChangeOrders.impactType', value);
    this.requestUpdate();
  }

  /** handler for action set.listChangeOrdersImpactType — bind UI events here */
  handleListChangeOrdersImpactTypeChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setListChangeOrdersImpactType(value);
  }

  /** setter for state ui.projectDetailWorkspace.input.listChangeOrders.page */
  setListChangeOrdersPage(value: string): void {
    this.listChangeOrdersPage = value;
    setState('ui.projectDetailWorkspace.input.listChangeOrders.page', value);
    this.requestUpdate();
  }

  /** handler for action set.listChangeOrdersPage — bind UI events here */
  handleListChangeOrdersPageChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setListChangeOrdersPage(value);
  }

  /** setter for state ui.projectDetailWorkspace.input.listChangeOrders.pageSize */
  setListChangeOrdersPageSize(value: string): void {
    this.listChangeOrdersPageSize = value;
    setState('ui.projectDetailWorkspace.input.listChangeOrders.pageSize', value);
    this.requestUpdate();
  }

  /** handler for action set.listChangeOrdersPageSize — bind UI events here */
  handleListChangeOrdersPageSizeChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setListChangeOrdersPageSize(value);
  }

  /** setter for state ui.projectDetailWorkspace.input.getChangeOrderDetail.changeOrderId */
  setGetChangeOrderDetailChangeOrderId(value: string): void {
    this.getChangeOrderDetailChangeOrderId = value;
    setState('ui.projectDetailWorkspace.input.getChangeOrderDetail.changeOrderId', value);
    this.requestUpdate();
  }

  /** handler for action set.getChangeOrderDetailChangeOrderId — bind UI events here */
  handleGetChangeOrderDetailChangeOrderIdChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setGetChangeOrderDetailChangeOrderId(value);
  }

  /** setter for state ui.projectDetailWorkspace.input.listTimeLogs.workTaskId */
  setListTimeLogsWorkTaskId(value: string): void {
    this.listTimeLogsWorkTaskId = value;
    setState('ui.projectDetailWorkspace.input.listTimeLogs.workTaskId', value);
    this.requestUpdate();
  }

  /** handler for action set.listTimeLogsWorkTaskId — bind UI events here */
  handleListTimeLogsWorkTaskIdChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setListTimeLogsWorkTaskId(value);
  }

  /** setter for state ui.projectDetailWorkspace.input.listTimeLogs.workerName */
  setListTimeLogsWorkerName(value: string): void {
    this.listTimeLogsWorkerName = value;
    setState('ui.projectDetailWorkspace.input.listTimeLogs.workerName', value);
    this.requestUpdate();
  }

  /** handler for action set.listTimeLogsWorkerName — bind UI events here */
  handleListTimeLogsWorkerNameChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setListTimeLogsWorkerName(value);
  }

  /** setter for state ui.projectDetailWorkspace.input.listTimeLogs.logDate */
  setListTimeLogsLogDate(value: string): void {
    this.listTimeLogsLogDate = value;
    setState('ui.projectDetailWorkspace.input.listTimeLogs.logDate', value);
    this.requestUpdate();
  }

  /** handler for action set.listTimeLogsLogDate — bind UI events here */
  handleListTimeLogsLogDateChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setListTimeLogsLogDate(value);
  }

  /** setter for state ui.projectDetailWorkspace.input.listTimeLogs.status */
  setListTimeLogsStatus(value: string): void {
    this.listTimeLogsStatus = value;
    setState('ui.projectDetailWorkspace.input.listTimeLogs.status', value);
    this.requestUpdate();
  }

  /** handler for action set.listTimeLogsStatus — bind UI events here */
  handleListTimeLogsStatusChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setListTimeLogsStatus(value);
  }

  /** setter for state ui.projectDetailWorkspace.input.listTimeLogs.page */
  setListTimeLogsPage(value: string): void {
    this.listTimeLogsPage = value;
    setState('ui.projectDetailWorkspace.input.listTimeLogs.page', value);
    this.requestUpdate();
  }

  /** handler for action set.listTimeLogsPage — bind UI events here */
  handleListTimeLogsPageChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setListTimeLogsPage(value);
  }

  /** setter for state ui.projectDetailWorkspace.input.listTimeLogs.pageSize */
  setListTimeLogsPageSize(value: string): void {
    this.listTimeLogsPageSize = value;
    setState('ui.projectDetailWorkspace.input.listTimeLogs.pageSize', value);
    this.requestUpdate();
  }

  /** handler for action set.listTimeLogsPageSize — bind UI events here */
  handleListTimeLogsPageSizeChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setListTimeLogsPageSize(value);
  }

  /** setter for state ui.projectDetailWorkspace.input.listMaterialUsages.projectId */
  setListMaterialUsagesProjectId(value: string): void {
    this.listMaterialUsagesProjectId = value;
    setState('ui.projectDetailWorkspace.input.listMaterialUsages.projectId', value);
    this.requestUpdate();
  }

  /** handler for action set.listMaterialUsagesProjectId — bind UI events here */
  handleListMaterialUsagesProjectIdChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setListMaterialUsagesProjectId(value);
  }

  /** setter for state ui.projectDetailWorkspace.input.listMaterialUsages.status */
  setListMaterialUsagesStatus(value: string): void {
    this.listMaterialUsagesStatus = value;
    setState('ui.projectDetailWorkspace.input.listMaterialUsages.status', value);
    this.requestUpdate();
  }

  /** handler for action set.listMaterialUsagesStatus — bind UI events here */
  handleListMaterialUsagesStatusChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setListMaterialUsagesStatus(value);
  }

  /** setter for state ui.projectDetailWorkspace.input.listMaterialUsages.page */
  setListMaterialUsagesPage(value: string): void {
    this.listMaterialUsagesPage = value;
    setState('ui.projectDetailWorkspace.input.listMaterialUsages.page', value);
    this.requestUpdate();
  }

  /** handler for action set.listMaterialUsagesPage — bind UI events here */
  handleListMaterialUsagesPageChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setListMaterialUsagesPage(value);
  }

  /** setter for state ui.projectDetailWorkspace.input.listMaterialUsages.pageSize */
  setListMaterialUsagesPageSize(value: string): void {
    this.listMaterialUsagesPageSize = value;
    setState('ui.projectDetailWorkspace.input.listMaterialUsages.pageSize', value);
    this.requestUpdate();
  }

  /** handler for action set.listMaterialUsagesPageSize — bind UI events here */
  handleListMaterialUsagesPageSizeChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setListMaterialUsagesPageSize(value);
  }

  /** setter for state ui.projectDetailWorkspace.input.triggerDelayRiskSuggestions.statusReportId */
  setTriggerDelayRiskSuggestionsStatusReportId(value: string): void {
    this.triggerDelayRiskSuggestionsStatusReportId = value;
    setState('ui.projectDetailWorkspace.input.triggerDelayRiskSuggestions.statusReportId', value);
    this.requestUpdate();
  }

  /** handler for action set.triggerDelayRiskSuggestionsStatusReportId — bind UI events here */
  handleTriggerDelayRiskSuggestionsStatusReportIdChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setTriggerDelayRiskSuggestionsStatusReportId(value);
  }

  /** setter for state ui.projectDetailWorkspace.input.listDelayRiskSuggestions.statusReportId */
  setListDelayRiskSuggestionsStatusReportId(value: string): void {
    this.listDelayRiskSuggestionsStatusReportId = value;
    setState('ui.projectDetailWorkspace.input.listDelayRiskSuggestions.statusReportId', value);
    this.requestUpdate();
  }

  /** handler for action set.listDelayRiskSuggestionsStatusReportId — bind UI events here */
  handleListDelayRiskSuggestionsStatusReportIdChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setListDelayRiskSuggestionsStatusReportId(value);
  }

  /** setter for state ui.projectDetailWorkspace.input.listDelayRiskSuggestions.acknowledged */
  setListDelayRiskSuggestionsAcknowledged(value: string): void {
    this.listDelayRiskSuggestionsAcknowledged = value;
    setState('ui.projectDetailWorkspace.input.listDelayRiskSuggestions.acknowledged', value);
    this.requestUpdate();
  }

  /** handler for action set.listDelayRiskSuggestionsAcknowledged — bind UI events here */
  handleListDelayRiskSuggestionsAcknowledgedChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setListDelayRiskSuggestionsAcknowledged(value);
  }
}
