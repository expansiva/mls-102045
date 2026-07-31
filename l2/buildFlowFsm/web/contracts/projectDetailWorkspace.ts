/// <mls fileReference="_102045_/l2/buildFlowFsm/web/contracts/projectDetailWorkspace.ts" enhancement="_blank"/>

// GENERATED from l4 bffCalls — do not edit (workspace projectDetailWorkspace; one contract file per workspace, all bffCalls).

// bffCall getProjectDetail (query) — Output kind=object; route buildFlowFsm.projectDetailWorkspace.getProjectDetail.
export interface GetProjectDetailInput {
  projectId: string;
}
export interface GetProjectDetailOutput {
  projectId: string;
  name: string;
  clientId: string;
  clientName: string;
  clientCompany: string;
  siteAddress: string;
  budget: number;
  startDate: string;
  endDate: string;
  status: string;
  holdReason: string;
  closedAt: string;
  cancelledAt: string;
  cancellationReason: string;
  createdAt: string;
  updatedAt: string;
}
export const getProjectDetailRoute = 'buildFlowFsm.projectDetailWorkspace.getProjectDetail' as const;

// bffCall listWorkTasks (query) — Output kind=paginated; route buildFlowFsm.projectDetailWorkspace.listWorkTasks.
export interface ListWorkTasksInput {
  projectId: string;
  status?: string;
  assignedWorkerId?: string;
  page?: number;
  pageSize?: number;
}
export interface ListWorkTasksOutput {
  workTasks: { workTaskId: string; projectId: string; title: string; assignedWorkerId: string; status: string; dueDate: string; completedAt: string; isOverdue: boolean }[];
  total: number;
}
export const listWorkTasksRoute = 'buildFlowFsm.projectDetailWorkspace.listWorkTasks' as const;

// bffCall listChangeOrders (query) — Output kind=paginated; route buildFlowFsm.projectDetailWorkspace.listChangeOrders.
export interface ListChangeOrdersInput {
  projectId: string;
  status?: string;
  impactType?: string;
  page?: number;
  pageSize?: number;
}
export interface ListChangeOrdersOutput {
  changeOrders: { changeOrderId: string; title: string; impactType: string; costAdjustment: number; scheduleAdjustmentDays: number; status: string; approvedAt: string; rejectedAt: string; createdAt: string }[];
  total: number;
}
export const listChangeOrdersRoute = 'buildFlowFsm.projectDetailWorkspace.listChangeOrders' as const;

// bffCall getChangeOrderDetail (query) — Output kind=object; route buildFlowFsm.projectDetailWorkspace.getChangeOrderDetail.
export interface GetChangeOrderDetailInput {
  changeOrderId: string;
}
export interface GetChangeOrderDetailOutput {
  changeOrderId: string;
  projectId: string;
  title: string;
  description: string;
  impactType: string;
  costAdjustment: number;
  scheduleAdjustmentDays: number;
  status: string;
  rejectionReason: string;
  approvedAt: string;
  rejectedAt: string;
  projectName: string;
  projectBudget: number;
  affectsJobCosting: boolean;
}
export const getChangeOrderDetailRoute = 'buildFlowFsm.projectDetailWorkspace.getChangeOrderDetail' as const;

// bffCall listTimeLogs (query) — Output kind=paginated; route buildFlowFsm.projectDetailWorkspace.listTimeLogs.
export interface ListTimeLogsInput {
  workTaskId?: string;
  workerName?: string;
  logDate?: string;
  status?: string;
  page?: number;
  pageSize?: number;
}
export interface ListTimeLogsOutput {
  timeLogs: { timeLogId: string; workTaskId: string; workerName: string; logDate: string; hoursWorked: number; laborCost: number; status: string }[];
  total: number;
}
export const listTimeLogsRoute = 'buildFlowFsm.projectDetailWorkspace.listTimeLogs' as const;

// bffCall listMaterialUsages (query) — Output kind=paginated; route buildFlowFsm.projectDetailWorkspace.listMaterialUsages.
export interface ListMaterialUsagesInput {
  projectId: string;
  status?: string;
  page?: number;
  pageSize?: number;
}
export interface ListMaterialUsagesOutput {
  materialUsages: { materialUsageId: string; materialName: string; quantity: number; unit: string; unitCost: number; costCode: string; usageDate: string; status: string; recordedBy: string }[];
  total: number;
}
export const listMaterialUsagesRoute = 'buildFlowFsm.projectDetailWorkspace.listMaterialUsages' as const;

// bffCall triggerDelayRiskSuggestions (command) — Output kind=object; route buildFlowFsm.projectDetailWorkspace.triggerDelayRiskSuggestions.
export interface TriggerDelayRiskSuggestionsInput {
  statusReportId: string;
}
export interface TriggerDelayRiskSuggestionsOutput {}
export const triggerDelayRiskSuggestionsRoute = 'buildFlowFsm.projectDetailWorkspace.triggerDelayRiskSuggestions' as const;

// bffCall listDelayRiskSuggestions (query) — Output kind=array; route buildFlowFsm.projectDetailWorkspace.listDelayRiskSuggestions.
export interface ListDelayRiskSuggestionsInput {
  statusReportId: string;
  acknowledged?: boolean;
}
export interface ListDelayRiskSuggestionsOutput {
  delayRiskSuggestionId: string;
  workTaskId: string;
  workTaskTitle: string;
  riskLevel: string;
  reason: string;
  suggestedAction: string;
  acknowledged: boolean;
  createdAt: string;
}
export const listDelayRiskSuggestionsRoute = 'buildFlowFsm.projectDetailWorkspace.listDelayRiskSuggestions' as const;
