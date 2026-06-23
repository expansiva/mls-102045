/// <mls fileReference="_102045_/l1/propertyFlowCrm/layer_3_usecases/visualizarDashboard.ts" enhancement="_blank"/>
import { type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { DashboardMetricEntity, type DashboardMetricUpdateRecord } from '/_102045_/l1/propertyFlowCrm/layer_4_entities/dashboardMetricEntity.js';

export interface GetDashboardMetricsInput {}

export interface GetDashboardMetricsOutput {
  metrics: DashboardMetricUpdateRecord[];
}

export async function getDashboardMetrics(
  ctx: RequestContext,
  input: GetDashboardMetricsInput
): Promise<GetDashboardMetricsOutput> {
  const metrics = await DashboardMetricEntity.list(ctx);
  return { metrics };
}
