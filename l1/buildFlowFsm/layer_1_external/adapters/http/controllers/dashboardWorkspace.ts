/// <mls fileReference="_102045_/l1/buildFlowFsm/layer_1_external/adapters/http/controllers/dashboardWorkspace.ts" enhancement="_blank"/>
import { ok, fail, AppError, type BffHandler, type BffResponse, type ControllerRoute, type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { viewDashboard, type ViewDashboardInput } from '/_102045_/l1/buildFlowFsm/layer_2_application/usecases/viewDashboard.js';
import { queryProjects, type QueryProjectsInput } from '/_102045_/l1/buildFlowFsm/layer_2_application/usecases/queryProjects.js';

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

export const dashboardWorkspaceGetDashboardSummaryHandler: BffHandler = async ({ request, ctx }) => {
  const denial = enforceActors(ctx, ALLOWED, 'buildFlowFsm.dashboardWorkspace.getDashboardSummary');
  if (denial) return denial;

  const params = (request.params ?? {}) as { status?: string; page?: number; pageSize?: number };
  const input: ViewDashboardInput = {
    status: params.status,
    page: params.page,
    pageSize: params.pageSize,
  };

  const result = await viewDashboard(ctx, input);

  const projects = (result.projects ?? []).map((row) => ({
    projectId: row.projectId,
    name: row.name,
    clientName: row.clientName,
    budget: row.budget,
    actualCost: row.actualCost,
    budgetVariance: row.budgetVariance,
    startDate: row.startDate,
    endDate: row.endDate,
    status: row.status,
    upcomingTaskCount: row.upcomingTaskCount,
    overdueTaskCount: row.overdueTaskCount,
  }));

  return ok({ projects, total: result.total });
};

export const dashboardWorkspaceGetProjectListHandler: BffHandler = async ({ request, ctx }) => {
  const denial = enforceActors(ctx, ALLOWED, 'buildFlowFsm.dashboardWorkspace.getProjectList');
  if (denial) return denial;

  const params = (request.params ?? {}) as { status?: string; page?: number; pageSize?: number };
  const input: QueryProjectsInput = {
    status: params.status,
    page: params.page,
    pageSize: params.pageSize,
  };

  const result = await queryProjects(ctx, input);

  const projects = (result.projects ?? []).map((row) => ({
    projectId: row.projectId,
    name: row.name,
    clientName: row.clientName,
    siteAddress: row.siteAddress,
    budget: row.budget,
    startDate: row.startDate,
    endDate: row.endDate,
    status: row.status,
  }));

  return ok({ projects, total: result.total });
};

export const routes: ControllerRoute[] = [
  { key: 'buildFlowFsm.dashboardWorkspace.getDashboardSummary', handler: dashboardWorkspaceGetDashboardSummaryHandler },
  { key: 'buildFlowFsm.dashboardWorkspace.getProjectList', handler: dashboardWorkspaceGetProjectListHandler },
];
