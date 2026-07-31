/// <mls fileReference="_102045_/l1/buildFlowFsm/layer_1_external/adapters/http/controllers/clientStatusWorkspace.ts" enhancement="_blank"/>
import { ok, fail, AppError, type BffHandler, type BffResponse, type ControllerRoute, type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { viewStatusReport, type ViewStatusReportInput } from '/_102045_/l1/buildFlowFsm/layer_2_application/usecases/viewStatusReport.js';

const ALLOWED: readonly string[] = ['buildFlowFsm:client'];

function enforceActors(ctx: RequestContext, allowed: readonly string[], route: string): BffResponse | null {
  if (allowed.length === 0) return null;
  const scope = ctx.sessionContext?.actorScope ?? [];
  if (scope.length === 0) { ctx.log.info('bff.actor.no-scope', { route, allowed }); return null; }
  if (scope.some((s) => allowed.includes(s))) return null;
  return fail(new AppError('FORBIDDEN_ACTOR', 'actor scope not permitted for ' + route, 403, { route }));
}

function isValidId(value: string): boolean {
  return value.length > 0 && !/\s/.test(value) && /^[A-Za-z0-9_-]+$/.test(value);
}

export const clientStatusWorkspaceViewStatusReportHandler: BffHandler = async ({ request, ctx }) => {
  const denial = enforceActors(ctx, ALLOWED, 'buildFlowFsm.clientStatusWorkspace.viewStatusReport');
  if (denial) return denial;

  const params = (request.params ?? {}) as { statusReportId?: string };

  if (!params.statusReportId) {
    throw new AppError('VALIDATION_ERROR', 'statusReportId is required', 400, { field: 'statusReportId' });
  }
  if (!isValidId(params.statusReportId)) {
    throw new AppError('VALIDATION_ERROR', 'statusReportId is not a valid identifier', 400, { field: 'statusReportId' });
  }

  // clientId is resolved from ctx.sessionContext.actorId inside the usecase — NOT a public boundary input.
  const input: ViewStatusReportInput = {
    statusReportId: params.statusReportId,
  };

  const result = await viewStatusReport(ctx, input);

  if (!result) {
    throw new AppError('NOT_FOUND', 'Status report not found or not accessible', 404, { field: 'statusReportId' });
  }

  return ok({
    statusReportId: result.statusReportId,
    projectId: result.projectId,
    projectName: result.projectName,
    status: result.status,
    reportPeriodStart: result.reportPeriodStart,
    reportPeriodEnd: result.reportPeriodEnd,
    summary: result.summary,
    tasksOverview: result.tasksOverview,
    timeLogsOverview: result.timeLogsOverview,
    materialsOverview: result.materialsOverview,
    delayRiskAssessment: result.delayRiskAssessment,
    pmNotes: result.pmNotes,
    generatedAt: result.generatedAt,
    sharedAt: result.sharedAt,
  });
};

export const routes: ControllerRoute[] = [
  { key: 'buildFlowFsm.clientStatusWorkspace.viewStatusReport', handler: clientStatusWorkspaceViewStatusReportHandler },
];
