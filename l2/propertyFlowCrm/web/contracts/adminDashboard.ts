/// <mls fileReference="_102045_/l2/propertyFlowCrm/web/contracts/adminDashboard.ts" enhancement="_blank"/>

export interface AdminDashboardVisualizarAdminDashboardInput {
  periodStart?: string;
  periodEnd?: string;
}

export interface AdminDashboardVisualizarAdminDashboardOutput {
  dashboardMetrics: string;
  lastUpdateAt: string;
}

export interface AdminDashboardListarAtualizacoesMetricasInput {
  periodStart?: string;
  periodEnd?: string;
}

export interface AdminDashboardListarAtualizacoesMetricasOutputItem {
  dashboardMetricUpdates: string;
}

export type AdminDashboardListarAtualizacoesMetricasOutput = AdminDashboardListarAtualizacoesMetricasOutputItem[];

export interface AdminDashboardAtualizarMetricasDashboardInput {
  periodStart?: string;
  periodEnd?: string;
}

export interface AdminDashboardAtualizarMetricasDashboardOutput {
  refreshStatus: string;
  requestedAt: string;
}
