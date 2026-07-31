/// <mls fileReference="_102045_/l1/buildFlowFsm/layer_1_external/adapters/http/controllers/statusReportWorkspace.ts" enhancement="_blank"/>
import { ok, fail, AppError, type BffHandler, type BffResponse, type ControllerRoute, type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { generateStatusReport, type GenerateStatusReportInput } from '/_102045_/l1/buildFlowFsm/layer_2_application/usecases/generateStatusReport.js';
import { updateStatusReport, type UpdateStatusReportInput } from '/_102045_/l1/buildFlowFsm/layer_2_application/usecases/updateStatusReport.js';
import { updateStatusReportStatus, type UpdateStatusReportStatusInput } from '/_102045_/l1/buildFlowFsm/layer_2_application/usecases/updateStatusReportStatus.js';

const ALLOWED: readonly string[] = ['buildFlowFsm:projectManager'];

function enforceActors(ctx: RequestContext, allowed: readonly string[], route: string): BffResponse | null {
  if (allowed.length === 0) return null;
  const scope = ctx.sessionContext?.actorScope ?? [];
  if (scope.length === 0) {
    ctx.log.info('bff.actor.no-scope', { route, allowed });
    return null;
  }
  if (scope.some((s) => allowed.includes(s))) return null;
  return fail(new AppError('FORBIDDEN_ACTOR', 'actor scope not permitted for ' + route, 403, { route }));
}

function isValidId(value: string): boolean {
  return typeof value === 'string' && value.length > 0 && !/\s/.test(value) && /^[A-Za-z0-9_-]+$/.test(value);
}

export const statusReportWorkspaceGenerateReportHandler: BffHandler = async ({ request, ctx }) => {
  const denial = enforceActors(ctx, ALLOWED, 'buildFlowFsm.statusReportWorkspace.generateReport');
  if (denial) return denial;

  const params = (request.params ?? {}) as {
    projectId?: string;
    reportPeriodStart?: string;
    reportPeriodEnd?: string;
  };

  if (!params.projectId) {
    throw new AppError('VALIDATION_ERROR', 'projectId is required', 400, { field: 'projectId' });
  }
  if (!isValidId(params.projectId)) {
    throw new AppError('VALIDATION_ERROR', 'projectId is not a valid identifier', 400, { field: 'projectId' });
  }
  if (!params.reportPeriodStart) {
    throw new AppError('VALIDATION_ERROR', 'reportPeriodStart is required', 400, { field: 'reportPeriodStart' });
  }
  if (!params.reportPeriodEnd) {
    throw new AppError('VALIDATION_ERROR', 'reportPeriodEnd is required', 400, { field: 'reportPeriodEnd' });
  }

  const input: GenerateStatusReportInput = {
    projectId: params.projectId,
    reportPeriodStart: params.reportPeriodStart,
    reportPeriodEnd: params.reportPeriodEnd,
  };

  const result = await generateStatusReport(ctx, input);

  return ok({
    statusReportId: result.statusReportId,
    projectId: result.projectId,
    status: result.status,
    reportPeriodStart: result.reportPeriodStart,
    reportPeriodEnd: result.reportPeriodEnd,
    summary: result.summary,
    tasksOverview: result.tasksOverview,
    timeLogsOverview: result.timeLogsOverview,
    materialsOverview: result.materialsOverview,
    delayRiskAssessment: result.delayRiskAssessment,
    generatedAt: result.generatedAt,
    createdAt: result.createdAt,
    updatedAt: result.updatedAt,
  });
};

export const statusReportWorkspaceUpdateReportContentHandler: BffHandler = async ({ request, ctx }) => {
  const denial = enforceActors(ctx, ALLOWED, 'buildFlowFsm.statusReportWorkspace.updateReportContent');
  if (denial) return denial;

  const params = (request.params ?? {}) as {
    statusReportId?: string;
    summary?: string;
    tasksOverview?: string;
    timeLogsOverview?: string;
    materialsOverview?: string;
    delayRiskAssessment?: string;
    pmNotes?: string;
  };

  if (!params.statusReportId) {
    throw new AppError('VALIDATION_ERROR', 'statusReportId is required', 400, { field: 'statusReportId' });
  }
  if (!isValidId(params.statusReportId)) {
    throw new AppError('VALIDATION_ERROR', 'statusReportId is not a valid identifier', 400, { field: 'statusReportId' });
  }
  if (!params.summary) {
    throw new AppError('VALIDATION_ERROR', 'summary is required', 400, { field: 'summary' });
  }

  const input: UpdateStatusReportInput = {
    statusReportId: params.statusReportId,
    summary: params.summary,
    tasksOverview: params.tasksOverview,
    timeLogsOverview: params.timeLogsOverview,
    materialsOverview: params.materialsOverview,
    delayRiskAssessment: params.delayRiskAssessment,
    pmNotes: params.pmNotes,
  };

  const result = await updateStatusReport(ctx, input);

  return ok({
    statusReportId: result.statusReportId,
    projectId: result.projectId,
    status: result.status,
    reportPeriodStart: result.reportPeriodStart,
    reportPeriodEnd: result.reportPeriodEnd,
    summary: result.summary,
    tasksOverview: result.tasksOverview,
    timeLogsOverview: result.timeLogsOverview,
    materialsOverview: result.materialsOverview,
    delayRiskAssessment: result.delayRiskAssessment,
    pmNotes: result.pmNotes,
    updatedAt: result.updatedAt,
  });
};

export const statusReportWorkspaceUpdateReportStatusHandler: BffHandler = async ({ request, ctx }) => {
  const denial = enforceActors(ctx, ALLOWED, 'buildFlowFsm.statusReportWorkspace.updateReportStatus');
  if (denial) return denial;

  const params = (request.params ?? {}) as {
    statusReportId?: string;
    status?: string;
  };

  if (!params.statusReportId) {
    throw new AppError('VALIDATION_ERROR', 'statusReportId is required', 400, { field: 'statusReportId' });
  }
  if (!isValidId(params.statusReportId)) {
    throw new AppError('VALIDATION_ERROR', 'statusReportId is not a valid identifier', 400, { field: 'statusReportId' });
  }
  if (!params.status) {
    throw new AppError('VALIDATION_ERROR', 'status is required', 400, { field: 'status' });
  }

  const input: UpdateStatusReportStatusInput = {
    statusReportId: params.statusReportId,
    status: params.status,
  };

  const result = await updateStatusReportStatus(ctx, input);

  return ok({
    statusReportId: result.statusReportId,
    projectId: result.projectId,
    status: result.status,
    reviewedAt: result.reviewedAt,
    sharedAt: result.sharedAt,
    updatedAt: result.updatedAt,
  });
};

export const routes: ControllerRoute[] = [
  { key: 'buildFlowFsm.statusReportWorkspace.generateReport', handler: statusReportWorkspaceGenerateReportHandler },
  { key: 'buildFlowFsm.statusReportWorkspace.updateReportContent', handler: statusReportWorkspaceUpdateReportContentHandler },
  { key: 'buildFlowFsm.statusReportWorkspace.updateReportStatus', handler: statusReportWorkspaceUpdateReportStatusHandler },
];
