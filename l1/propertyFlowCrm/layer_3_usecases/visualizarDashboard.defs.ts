/// <mls fileReference="_102045_/l1/propertyFlowCrm/layer_3_usecases/visualizarDashboard.defs.ts" enhancement="_blank"/>

export const useCase = {
  "usecaseId": "visualizarDashboard",
  "title": "Visualizar dashboard de métricas",
  "purpose": "Apresentar métricas consolidadas para gestores",
  "actor": "gestor",
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
      "commandId": "getDashboardMetrics",
      "input": [],
      "output": [
        {
          "name": "metrics",
          "type": "dashboardMetricEntity[]"
        }
      ]
    }
  ]
} as const;

export default useCase;

export const pipeline = [
  {
    "id": "visualizarDashboard__layer_3_usecases",
    "type": "layer_3_usecases",
    "outputPath": "_102045_/l1/propertyFlowCrm/layer_3_usecases/visualizarDashboard.ts",
    "defPath": "_102045_/l1/propertyFlowCrm/layer_3_usecases/visualizarDashboard.defs.ts",
    "dependsFiles": [
      "_102045_/l1/propertyFlowCrm/layer_4_entities/dashboardMetricEntity.d.ts"
    ],
    "dependsOn": [],
    "skills": [
      "_102021_/l2/skills/layer_3.md"
    ],
    "rulesPath": "_102045_/l5/propertyFlowCrm/rules.defs.ts",
    "rulesApplied": [
      "ruleMetricRefresh"
    ],
    "agent": "agentMaterializeGen"
  }
] as const;
