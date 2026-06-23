/// <mls fileReference="_102045_/l1/propertyFlowCrm/layer_3_usecases/agendarVisita.ts" enhancement="_blank"/>
import { AppError, type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { DashboardMetricEntity } from '/_102045_/l1/propertyFlowCrm/layer_4_entities/dashboardMetricEntity.js';
import { VisitEntity } from '/_102045_/l1/propertyFlowCrm/layer_4_entities/visitEntity.js';
import { VisitScheduleRequestEntity } from '/_102045_/l1/propertyFlowCrm/layer_4_entities/visitScheduleRequestEntity.js';

export interface AgendarVisitaInput {}

export interface AgendarVisitaOutput {
  visitId: string;
  visitScheduleRequestId: string;
}

export async function agendarVisita(
  ctx: RequestContext,
  input: AgendarVisitaInput,
): Promise<AgendarVisitaOutput> {
  void ctx;
  void input;
  void DashboardMetricEntity;
  void VisitEntity;
  void VisitScheduleRequestEntity;

  throw new AppError(
    'CONFLICT',
    'ruleMetricRefresh: broker_activity_metrics write requires an entity reference in entityRefs; none was provided.',
    409,
    { ruleId: 'ruleMetricRefresh', tableName: 'broker_activity_metrics' },
  );
}
