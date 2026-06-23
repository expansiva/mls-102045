/// <mls fileReference="_102045_/l1/propertyFlowCrm/layer_2_controllers/adminDashboard.ts" enhancement="_blank"/>
import { ok, type BffHandler } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import {
  atualizarMetricasDashboard,
  type AtualizarMetricasDashboardInput,
  type AtualizarMetricasDashboardOutput,
} from '/_102045_/l1/propertyFlowCrm/layer_3_usecases/atualizarMetricasDashboard.js';
import {
  listarAtualizacoesMetricas,
  type ListarAtualizacoesMetricasInput,
  type ListarAtualizacoesMetricasOutput,
} from '/_102045_/l1/propertyFlowCrm/layer_3_usecases/listarAtualizacoesMetricas.js';
import {
  visualizarAdminDashboard,
  type VisualizarAdminDashboardInput,
  type VisualizarAdminDashboardOutput,
} from '/_102045_/l1/propertyFlowCrm/layer_3_usecases/visualizarAdminDashboard.js';
import {
  type AdminDashboardAtualizarMetricasDashboardInput,
  type AdminDashboardAtualizarMetricasDashboardOutput,
  type AdminDashboardListarAtualizacoesMetricasInput,
  type AdminDashboardListarAtualizacoesMetricasOutput,
  type AdminDashboardVisualizarAdminDashboardInput,
  type AdminDashboardVisualizarAdminDashboardOutput,
} from '/_102045_/l2/propertyFlowCrm/web/contracts/adminDashboard.js';

export const propertyFlowCrmAdminDashboardVisualizarAdminDashboardHandler: BffHandler = async ({ request, ctx }) => {
  const _input = request.params as AdminDashboardVisualizarAdminDashboardInput;
  const usecaseInput: VisualizarAdminDashboardInput = {};
  const result: VisualizarAdminDashboardOutput = await visualizarAdminDashboard(ctx, usecaseInput);
  const dashboardMetrics = JSON.stringify(result.dashboardMetrics ?? []);
  const lastUpdateAt = (result.dashboardMetrics ?? []).reduce((latest, metric) => {
    if (!latest) return metric.updated_at;
    return metric.updated_at > latest ? metric.updated_at : latest;
  }, '');
  const output: AdminDashboardVisualizarAdminDashboardOutput = {
    dashboardMetrics,
    lastUpdateAt,
  };
  return ok(output);
};

export const propertyFlowCrmAdminDashboardListarAtualizacoesMetricasHandler: BffHandler = async ({ request, ctx }) => {
  const _input = request.params as AdminDashboardListarAtualizacoesMetricasInput;
  const usecaseInput: ListarAtualizacoesMetricasInput = {};
  const result: ListarAtualizacoesMetricasOutput = await listarAtualizacoesMetricas(ctx, usecaseInput);
  const output: AdminDashboardListarAtualizacoesMetricasOutput = (result.atualizacoes ?? []).map((update) => ({
    dashboardMetricUpdates: JSON.stringify(update),
  }));
  return ok(output);
};

export const propertyFlowCrmAdminDashboardAtualizarMetricasDashboardHandler: BffHandler = async ({ request, ctx }) => {
  const _input = request.params as AdminDashboardAtualizarMetricasDashboardInput;
  const usecaseInput: AtualizarMetricasDashboardInput = {};
  const result: AtualizarMetricasDashboardOutput = await atualizarMetricasDashboard(ctx, usecaseInput);
  const output: AdminDashboardAtualizarMetricasDashboardOutput = {
    refreshStatus: result.dashboardMetricEntity.dashboard_metric_update_id,
    requestedAt: result.dashboardMetricEntity.created_at,
  };
  return ok(output);
};

export const adminDashboardRouterEntries = [
  {
    key: 'propertyFlowCrm.adminDashboard.visualizarAdminDashboard',
    handlerName: 'propertyFlowCrmAdminDashboardVisualizarAdminDashboardHandler',
    importPath: '/_102045_/l1/propertyFlowCrm/layer_2_controllers/adminDashboard.js',
  },
  {
    key: 'propertyFlowCrm.adminDashboard.listarAtualizacoesMetricas',
    handlerName: 'propertyFlowCrmAdminDashboardListarAtualizacoesMetricasHandler',
    importPath: '/_102045_/l1/propertyFlowCrm/layer_2_controllers/adminDashboard.js',
  },
  {
    key: 'propertyFlowCrm.adminDashboard.atualizarMetricasDashboard',
    handlerName: 'propertyFlowCrmAdminDashboardAtualizarMetricasDashboardHandler',
    importPath: '/_102045_/l1/propertyFlowCrm/layer_2_controllers/adminDashboard.js',
  },
];
