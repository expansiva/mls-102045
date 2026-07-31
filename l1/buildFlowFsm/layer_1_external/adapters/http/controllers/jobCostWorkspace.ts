/// <mls fileReference="_102045_/l1/buildFlowFsm/layer_1_external/adapters/http/controllers/jobCostWorkspace.ts" enhancement="_blank"/>
import { ok, fail, AppError, type BffHandler, type BffResponse, type ControllerRoute, type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { viewJobCostSummary, type ViewJobCostSummaryInput } from '/_102045_/l1/buildFlowFsm/layer_2_application/usecases/viewJobCostSummary.js';

const ALLOWED: readonly string[] = ['buildFlowFsm:billingStaff'];

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

export const jobCostWorkspaceViewJobCostSummaryHandler: BffHandler = async ({ request, ctx }) => {
  const denial = enforceActors(ctx, ALLOWED, 'buildFlowFsm.jobCostWorkspace.viewJobCostSummary');
  if (denial) return denial;

  const params = (request.params ?? {}) as { projectId?: string };

  if (!params.projectId) {
    throw new AppError('VALIDATION_ERROR', 'projectId is required', 400, { field: 'projectId' });
  }
  const projectId = params.projectId;
  if (typeof projectId !== 'string' || projectId.trim().length === 0 || /\s/.test(projectId)) {
    throw new AppError('VALIDATION_ERROR', 'projectId must be a well-formed identifier', 400, { field: 'projectId' });
  }

  const input: ViewJobCostSummaryInput = {
    projectId,
  };

  const result = await viewJobCostSummary(ctx, input);

  return ok({
    projectId: result.projectId,
    name: result.name,
    clientId: result.clientId,
    clientName: result.clientName,
    budget: result.budget,
    status: result.status,
    startDate: result.startDate,
    endDate: result.endDate,
    laborCost: result.laborCost,
    materialCost: result.materialCost,
    changeOrderCost: result.changeOrderCost,
    totalCost: result.totalCost,
    budgetVariance: result.budgetVariance,
  });
};

export const routes: ControllerRoute[] = [
  { key: 'buildFlowFsm.jobCostWorkspace.viewJobCostSummary', handler: jobCostWorkspaceViewJobCostSummaryHandler },
];
