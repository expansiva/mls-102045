/// <mls fileReference="_102045_/l1/propertyFlowCrm/layer_3_usecases/visualizarAdminDashboard.defs.ts" enhancement="_blank"/>

export const useCase = {
  "usecaseId": "visualizarAdminDashboard",
  "title": "Visualizar dashboard administrativo",
  "purpose": "Apresentar métricas e histórico de atualizações para admin",
  "actor": "admin",
  "layer": "layer_3_usecases",
  "inputEntities": [],
  "outputEntities": [
    "dashboardMetricEntity"
  ],
  "readsTables": [
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
  "writesTables": [],
  "rulesApplied": [
    "ruleMetricRefresh"
  ],
  "entityRefs": [
    "dashboardMetricEntity"
  ],
  "commands": [
    {
      "commandId": "visualizarAdminDashboard",
      "input": [],
      "output": [
        {
          "name": "dashboardMetrics",
          "type": "dashboardMetricEntity[]"
        }
      ]
    }
  ]
} as const;

export default useCase;
