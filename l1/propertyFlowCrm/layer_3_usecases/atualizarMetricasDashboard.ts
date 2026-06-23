/// <mls fileReference="_102045_/l1/propertyFlowCrm/layer_3_usecases/atualizarMetricasDashboard.ts" enhancement="_blank"/>
import { AppError, type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { DashboardMetricEntity, type DashboardMetricUpdateRecord } from '/_102045_/l1/propertyFlowCrm/layer_4_entities/dashboardMetricEntity.js';
import { DealEntity } from '/_102045_/l1/propertyFlowCrm/layer_4_entities/dealEntity.js';
import { DealStageChangeEntity } from '/_102045_/l1/propertyFlowCrm/layer_4_entities/dealStageChangeEntity.js';
import { LeadEntity } from '/_102045_/l1/propertyFlowCrm/layer_4_entities/leadEntity.js';
import { LeadQualificationRequestEntity } from '/_102045_/l1/propertyFlowCrm/layer_4_entities/leadQualificationRequestEntity.js';
import { LeadStageChangeEntity } from '/_102045_/l1/propertyFlowCrm/layer_4_entities/leadStageChangeEntity.js';
import { PropertyDescriptionRequestEntity } from '/_102045_/l1/propertyFlowCrm/layer_4_entities/propertyDescriptionRequestEntity.js';
import { PropertyEntity } from '/_102045_/l1/propertyFlowCrm/layer_4_entities/propertyEntity.js';
import { VisitEntity } from '/_102045_/l1/propertyFlowCrm/layer_4_entities/visitEntity.js';

export interface AtualizarMetricasDashboardInput {}

export interface AtualizarMetricasDashboardOutput {
  dashboardMetricEntity: DashboardMetricUpdateRecord;
}

export async function atualizarMetricasDashboard(
  ctx: RequestContext,
  _input: AtualizarMetricasDashboardInput,
): Promise<AtualizarMetricasDashboardOutput> {
  const missingMetricTables = [
    'property_status_metrics',
    'lead_pipeline_metrics',
    'deal_pipeline_metrics',
    'broker_activity_metrics',
  ];

  if (missingMetricTables.length > 0) {
    throw new AppError(
      'CONFLICT',
      'Entidades de métricas ausentes para aplicar ruleMetricRefresh.',
      409,
      {
        ruleId: 'ruleMetricRefresh',
        missingTables: missingMetricTables,
      },
    );
  }

  const [properties, leads, _visits, deals] = await Promise.all([
    PropertyEntity.list(ctx),
    LeadEntity.list(ctx),
    VisitEntity.list(ctx),
    DealEntity.list(ctx),
  ]);

  await Promise.all([
    PropertyDescriptionRequestEntity.list(ctx, {}),
    LeadQualificationRequestEntity.list(ctx, {}),
    LeadStageChangeEntity.list(ctx, {}),
    DealStageChangeEntity.list(ctx, {}),
  ]);

  const dashboardMetricUpdate = await DashboardMetricEntity.create(ctx, {
    propertyIds: properties.map((property) => property.propertyId),
    leadIds: leads.map((lead) => lead.leadId),
    dealIds: deals.map((deal) => deal.dealId),
  });

  return { dashboardMetricEntity: dashboardMetricUpdate };
}
