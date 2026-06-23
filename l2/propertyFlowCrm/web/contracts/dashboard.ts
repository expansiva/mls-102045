/// <mls fileReference="_102045_/l2/propertyFlowCrm/web/contracts/dashboard.ts" enhancement="_blank" />

export interface DashboardVisualizarDashboardInput {
  startDate?: string;
  endDate?: string;
}

export interface DashboardVisualizarDashboardOutput {
  totalProperties: number;
  activeProperties: number;
  leadsThisMonth: number;
  qualifiedLeads: number;
  dealCount: number;
  dealValue: number;
  avgDealValue: number;
  activityCount: number;
  propertyStatusSeries: string;
  leadStageSeries: string;
  dealStageSeries: string;
  brokerActivitySeries: string;
  lastUpdatedAt: string;
}
