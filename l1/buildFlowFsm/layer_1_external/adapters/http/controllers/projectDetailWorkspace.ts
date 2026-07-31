/// <mls fileReference="_102045_/l1/buildFlowFsm/layer_1_external/adapters/http/controllers/projectDetailWorkspace.ts" enhancement="_blank"/>
import { ok, fail, AppError, type BffHandler, type BffResponse, type ControllerRoute, type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { viewProject, type ViewProjectInput } from '/_102045_/l1/buildFlowFsm/layer_2_application/usecases/viewProject.js';
import { queryWorkTasks, type QueryWorkTasksInput } from '/_102045_/l1/buildFlowFsm/layer_2_application/usecases/queryWorkTasks.js';
import { queryChangeOrders, type QueryChangeOrdersInput } from '/_102045_/l1/buildFlowFsm/layer_2_application/usecases/queryChangeOrders.js';
import { viewChangeOrder, type ViewChangeOrderInput } from '/_102045_/l1/buildFlowFsm/layer_2_application/usecases/viewChangeOrder.js';
import { queryTimeLogs, type QueryTimeLogsInput } from '/_102045_/l1/buildFlowFsm/layer_2_application/usecases/queryTimeLogs.js';
import { queryMaterialUsages, type QueryMaterialUsagesInput } from '/_102045_/l1/buildFlowFsm/layer_2_application/usecases/queryMaterialUsages.js';
import { generateDelayRiskSuggestions, type GenerateDelayRiskSuggestionsInput } from '/_102045_/l1/buildFlowFsm/layer_2_application/usecases/generateDelayRiskSuggestions.js';
import { queryDelayRiskSuggestions, type QueryDelayRiskSuggestionsInput } from '/_102045_/l1/buildFlowFsm/layer_2_application/usecases/queryDelayRiskSuggestions.js';

const ALLOWED: readonly string[] = ['buildFlowFsm:projectManager'];

function enforceActors(ctx: RequestContext, allowed: readonly string[], route: string): BffResponse | null {
  if (allowed.length === 0) return null;
  const scope = ctx.sessionContext?.actorScope ?? [];
  if (scope.length === 0) { ctx.log.info('bff.actor.no-scope', { route, allowed }); return null; }
  if (scope.some((s) => allowed.includes(s))) return null;
  return fail(new AppError('FORBIDDEN_ACTOR', 'actor scope not permitted for ' + route, 403, { route }));
}

function isValidId(value: unknown): value is string {
  return typeof value === 'string' && value.length > 0 && !/\s/.test(value) && /^[A-Za-z0-9_-]+$/.test(value);
}

export const projectDetailWorkspaceGetProjectDetailHandler: BffHandler = async ({ request, ctx }) => {
  const denial = enforceActors(ctx, ALLOWED, 'buildFlowFsm.projectDetailWorkspace.getProjectDetail');
  if (denial) return denial;
  const params = (request.params ?? {}) as { projectId?: string };
  if (!params.projectId) throw new AppError('VALIDATION_ERROR', 'projectId is required', 400, { field: 'projectId' });
  if (!isValidId(params.projectId)) throw new AppError('VALIDATION_ERROR', 'projectId is not a valid identifier', 400, { field: 'projectId' });
  const input: ViewProjectInput = { projectId: params.projectId };
  const result = await viewProject(ctx, input);
  return ok({
    projectId: result.projectId,
    name: result.name,
    clientId: result.clientId,
    clientName: result.clientName,
    clientCompany: result.clientCompany ?? '',
    siteAddress: result.siteAddress,
    budget: result.budget,
    startDate: result.startDate,
    endDate: result.endDate,
    status: result.status,
    holdReason: result.holdReason ?? '',
    closedAt: result.closedAt ?? '',
    cancelledAt: result.cancelledAt ?? '',
    cancellationReason: result.cancellationReason ?? '',
    createdAt: result.createdAt,
    updatedAt: result.updatedAt,
  });
};

export const projectDetailWorkspaceListWorkTasksHandler: BffHandler = async ({ request, ctx }) => {
  const denial = enforceActors(ctx, ALLOWED, 'buildFlowFsm.projectDetailWorkspace.listWorkTasks');
  if (denial) return denial;
  const params = (request.params ?? {}) as { projectId?: string; status?: string; assignedWorkerId?: string; page?: number; pageSize?: number };
  const input: QueryWorkTasksInput = {
    projectId: params.projectId,
    status: params.status,
    assignedWorkerId: params.assignedWorkerId,
    page: params.page,
    pageSize: params.pageSize,
  };
  const result = await queryWorkTasks(ctx, input);
  const workTasks = (result.workTasks ?? []).map((row) => ({
    workTaskId: row.workTaskId,
    projectId: row.projectId,
    title: row.title,
    assignedWorkerId: row.assignedWorkerId,
    status: row.status,
    dueDate: row.dueDate,
    completedAt: row.completedAt ?? '',
    isOverdue: row.isOverdue,
  }));
  return ok({ workTasks, total: result.total });
};

export const projectDetailWorkspaceListChangeOrdersHandler: BffHandler = async ({ request, ctx }) => {
  const denial = enforceActors(ctx, ALLOWED, 'buildFlowFsm.projectDetailWorkspace.listChangeOrders');
  if (denial) return denial;
  const params = (request.params ?? {}) as { projectId?: string; status?: string; impactType?: string; page?: number; pageSize?: number };
  if (!params.projectId) throw new AppError('VALIDATION_ERROR', 'projectId is required', 400, { field: 'projectId' });
  if (!isValidId(params.projectId)) throw new AppError('VALIDATION_ERROR', 'projectId is not a valid identifier', 400, { field: 'projectId' });
  const input: QueryChangeOrdersInput = {
    projectId: params.projectId,
    status: params.status,
    impactType: params.impactType,
    page: params.page,
    pageSize: params.pageSize,
  };
  const result = await queryChangeOrders(ctx, input);
  const changeOrders = (result.changeOrders ?? []).map((row) => ({
    changeOrderId: row.changeOrderId,
    title: row.title,
    impactType: row.impactType,
    costAdjustment: row.costAdjustment,
    scheduleAdjustmentDays: row.scheduleAdjustmentDays ?? 0,
    status: row.status,
    approvedAt: row.approvedAt ?? '',
    rejectedAt: row.rejectedAt ?? '',
    createdAt: row.createdAt,
  }));
  return ok({ changeOrders, total: result.total });
};

export const projectDetailWorkspaceGetChangeOrderDetailHandler: BffHandler = async ({ request, ctx }) => {
  const denial = enforceActors(ctx, ALLOWED, 'buildFlowFsm.projectDetailWorkspace.getChangeOrderDetail');
  if (denial) return denial;
  const params = (request.params ?? {}) as { changeOrderId?: string };
  if (!params.changeOrderId) throw new AppError('VALIDATION_ERROR', 'changeOrderId is required', 400, { field: 'changeOrderId' });
  if (!isValidId(params.changeOrderId)) throw new AppError('VALIDATION_ERROR', 'changeOrderId is not a valid identifier', 400, { field: 'changeOrderId' });
  const input: ViewChangeOrderInput = { changeOrderId: params.changeOrderId };
  const result = await viewChangeOrder(ctx, input);
  return ok({
    changeOrderId: result.changeOrderId,
    projectId: result.projectId,
    title: result.title,
    description: result.description,
    impactType: result.impactType,
    costAdjustment: result.costAdjustment,
    scheduleAdjustmentDays: result.scheduleAdjustmentDays ?? 0,
    status: result.status,
    rejectionReason: result.rejectionReason ?? '',
    approvedAt: result.approvedAt ?? '',
    rejectedAt: result.rejectedAt ?? '',
    projectName: result.projectName,
    projectBudget: result.projectBudget,
    affectsJobCosting: result.affectsJobCosting,
  });
};

export const projectDetailWorkspaceListTimeLogsHandler: BffHandler = async ({ request, ctx }) => {
  const denial = enforceActors(ctx, ALLOWED, 'buildFlowFsm.projectDetailWorkspace.listTimeLogs');
  if (denial) return denial;
  const params = (request.params ?? {}) as { workTaskId?: string; workerName?: string; logDate?: string; status?: string; page?: number; pageSize?: number };
  const input: QueryTimeLogsInput = {
    workTaskId: params.workTaskId,
    workerName: params.workerName,
    logDate: params.logDate,
    status: params.status,
    page: params.page,
    pageSize: params.pageSize,
  };
  const result = await queryTimeLogs(ctx, input);
  const timeLogs = (result.timeLogs ?? []).map((row) => ({
    timeLogId: row.timeLogId,
    workTaskId: row.workTaskId,
    workerName: row.workerName,
    logDate: row.logDate,
    hoursWorked: row.hoursWorked,
    laborCost: row.laborCost,
    status: row.status,
  }));
  return ok({ timeLogs, total: result.total });
};

export const projectDetailWorkspaceListMaterialUsagesHandler: BffHandler = async ({ request, ctx }) => {
  const denial = enforceActors(ctx, ALLOWED, 'buildFlowFsm.projectDetailWorkspace.listMaterialUsages');
  if (denial) return denial;
  const params = (request.params ?? {}) as { projectId?: string; status?: string; page?: number; pageSize?: number };
  if (!params.projectId) throw new AppError('VALIDATION_ERROR', 'projectId is required', 400, { field: 'projectId' });
  if (!isValidId(params.projectId)) throw new AppError('VALIDATION_ERROR', 'projectId is not a valid identifier', 400, { field: 'projectId' });
  const input: QueryMaterialUsagesInput = {
    projectId: params.projectId,
    status: params.status,
    page: params.page,
    pageSize: params.pageSize,
  };
  const result = await queryMaterialUsages(ctx, input);
  const materialUsages = (result.materialUsages ?? []).map((row) => ({
    materialUsageId: row.materialUsageId,
    materialName: row.materialName,
    quantity: row.quantity,
    unit: row.unit,
    unitCost: row.unitCost,
    costCode: row.costCode ?? '',
    usageDate: row.usageDate,
    status: row.status,
    recordedBy: row.recordedBy ?? '',
  }));
  return ok({ materialUsages, total: result.total });
};

export const projectDetailWorkspaceTriggerDelayRiskSuggestionsHandler: BffHandler = async ({ request, ctx }) => {
  const denial = enforceActors(ctx, ALLOWED, 'buildFlowFsm.projectDetailWorkspace.triggerDelayRiskSuggestions');
  if (denial) return denial;
  const params = (request.params ?? {}) as { statusReportId?: string };
  if (!params.statusReportId) throw new AppError('VALIDATION_ERROR', 'statusReportId is required', 400, { field: 'statusReportId' });
  if (!isValidId(params.statusReportId)) throw new AppError('VALIDATION_ERROR', 'statusReportId is not a valid identifier', 400, { field: 'statusReportId' });
  const input: GenerateDelayRiskSuggestionsInput = { statusReportId: params.statusReportId };
  const result = await generateDelayRiskSuggestions(ctx, input);
  return ok(result.suggestions);
};

export const projectDetailWorkspaceListDelayRiskSuggestionsHandler: BffHandler = async ({ request, ctx }) => {
  const denial = enforceActors(ctx, ALLOWED, 'buildFlowFsm.projectDetailWorkspace.listDelayRiskSuggestions');
  if (denial) return denial;
  const params = (request.params ?? {}) as { statusReportId?: string; acknowledged?: boolean };
  if (!params.statusReportId) throw new AppError('VALIDATION_ERROR', 'statusReportId is required', 400, { field: 'statusReportId' });
  if (!isValidId(params.statusReportId)) throw new AppError('VALIDATION_ERROR', 'statusReportId is not a valid identifier', 400, { field: 'statusReportId' });
  const input: QueryDelayRiskSuggestionsInput = {
    statusReportId: params.statusReportId,
    acknowledged: params.acknowledged,
  };
  const result = await queryDelayRiskSuggestions(ctx, input);
  const items = (result ?? []).map((row) => ({
    delayRiskSuggestionId: row.delayRiskSuggestionId,
    workTaskId: row.workTaskId,
    workTaskTitle: row.workTaskTitle,
    riskLevel: row.riskLevel,
    reason: row.reason,
    suggestedAction: row.suggestedAction ?? '',
    acknowledged: row.acknowledged,
    createdAt: row.createdAt,
  }));
  return ok(items);
};

export const routes: ControllerRoute[] = [
  { key: 'buildFlowFsm.projectDetailWorkspace.getProjectDetail', handler: projectDetailWorkspaceGetProjectDetailHandler },
  { key: 'buildFlowFsm.projectDetailWorkspace.listWorkTasks', handler: projectDetailWorkspaceListWorkTasksHandler },
  { key: 'buildFlowFsm.projectDetailWorkspace.listChangeOrders', handler: projectDetailWorkspaceListChangeOrdersHandler },
  { key: 'buildFlowFsm.projectDetailWorkspace.getChangeOrderDetail', handler: projectDetailWorkspaceGetChangeOrderDetailHandler },
  { key: 'buildFlowFsm.projectDetailWorkspace.listTimeLogs', handler: projectDetailWorkspaceListTimeLogsHandler },
  { key: 'buildFlowFsm.projectDetailWorkspace.listMaterialUsages', handler: projectDetailWorkspaceListMaterialUsagesHandler },
  { key: 'buildFlowFsm.projectDetailWorkspace.triggerDelayRiskSuggestions', handler: projectDetailWorkspaceTriggerDelayRiskSuggestionsHandler },
  { key: 'buildFlowFsm.projectDetailWorkspace.listDelayRiskSuggestions', handler: projectDetailWorkspaceListDelayRiskSuggestionsHandler },
];
