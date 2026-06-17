/// <mls fileReference="_102045_/l1/propertyFlowCrm/layer_3_usecases/atualizarMetricasDashboard.defs.ts" enhancement="_blank"/>

export const useCase = {
  "usecaseId": "atualizarMetricasDashboard",
  "title": "Atualizar métricas do dashboard",
  "purpose": "Recalcular e persistir todas as métricas do dashboard",
  "actor": "admin",
  "layer": "layer_3_usecases",
  "inputEntities": [],
  "outputEntities": [
    "dashboardMetricEntity"
  ],
  "readsTables": [
    {
      "tableName": "property",
      "ownership": "mdmOwned"
    },
    {
      "tableName": "lead",
      "ownership": "mdmOwned"
    },
    {
      "tableName": "visit",
      "ownership": "mdmOwned"
    },
    {
      "tableName": "deal",
      "ownership": "mdmOwned"
    },
    {
      "tableName": "property_description_request",
      "ownership": "moduleOwned"
    },
    {
      "tableName": "lead_qualification_request",
      "ownership": "moduleOwned"
    },
    {
      "tableName": "lead_stage_change",
      "ownership": "moduleOwned"
    },
    {
      "tableName": "deal_stage_change",
      "ownership": "moduleOwned"
    }
  ],
  "writesTables": [
    {
      "tableName": "property_status_metrics",
      "ownership": "moduleOwned"
    },
    {
      "tableName": "lead_pipeline_metrics",
      "ownership": "moduleOwned"
    },
    {
      "tableName": "deal_pipeline_metrics",
      "ownership": "moduleOwned"
    },
    {
      "tableName": "broker_activity_metrics",
      "ownership": "moduleOwned"
    },
    {
      "tableName": "dashboard_metric_update",
      "ownership": "moduleOwned"
    }
  ],
  "rulesApplied": [
    "ruleMetricRefresh"
  ],
  "entityRefs": [
    "dashboardMetricEntity",
    "dealEntity",
    "dealStageChangeEntity",
    "leadEntity",
    "leadQualificationRequestEntity",
    "leadStageChangeEntity",
    "propertyDescriptionRequestEntity",
    "propertyEntity",
    "visitEntity"
  ],
  "commands": [
    {
      "commandId": "atualizarMetricasDashboard",
      "input": [],
      "output": [
        {
          "name": "dashboardMetricEntity",
          "type": "dashboardMetricEntity"
        }
      ]
    }
  ]
} as const;

export default useCase;
