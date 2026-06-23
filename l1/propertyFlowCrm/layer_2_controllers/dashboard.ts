/// <mls fileReference="_102045_/l1/propertyFlowCrm/layer_2_controllers/dashboard.ts" enhancement="_blank"/>
import { ok, type BffHandler } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import {
  getDashboardMetrics,
  type GetDashboardMetricsInput,
  type GetDashboardMetricsOutput,
} from '/_102045_/l1/propertyFlowCrm/layer_3_usecases/visualizarDashboard.js';
import {
  type DashboardVisualizarDashboardInput,
  type DashboardVisualizarDashboardOutput,
} from '/_102045_/l2/propertyFlowCrm/web/contracts/dashboard.js';

export const propertyFlowCrmDashboardVisualizarDashboardHandler: BffHandler = async ({
  request,
  ctx,
}) => {
  const _input = request.params as DashboardVisualizarDashboardInput;
  const usecaseInput: GetDashboardMetricsInput = {};
  const result: GetDashboardMetricsOutput = await getDashboardMetrics(ctx, usecaseInput);
  const output = result as unknown as DashboardVisualizarDashboardOutput;
  return ok(output);
};

export const dashboardRouter = {
  'propertyFlowCrm.dashboard.visualizarDashboard': {
    handler: propertyFlowCrmDashboardVisualizarDashboardHandler,
    importPath: '/_102045_/l1/propertyFlowCrm/layer_2_controllers/dashboard.js',
  },
} as const;
