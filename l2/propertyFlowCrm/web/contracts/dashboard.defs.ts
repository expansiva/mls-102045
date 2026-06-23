/// <mls fileReference="_102045_/l2/propertyFlowCrm/web/contracts/dashboard.defs.ts" enhancement="_blank"/>

export const definition = [
  {
    "commandName": "visualizarDashboard",
    "purpose": "Carregar métricas para o dashboard do gestor.",
    "kind": "query",
    "input": [
      {
        "name": "startDate",
        "type": "date",
        "required": false
      },
      {
        "name": "endDate",
        "type": "date",
        "required": false
      }
    ],
    "output": [
      {
        "name": "totalProperties",
        "type": "number"
      },
      {
        "name": "activeProperties",
        "type": "number"
      },
      {
        "name": "leadsThisMonth",
        "type": "number"
      },
      {
        "name": "qualifiedLeads",
        "type": "number"
      },
      {
        "name": "dealCount",
        "type": "number"
      },
      {
        "name": "dealValue",
        "type": "number"
      },
      {
        "name": "avgDealValue",
        "type": "number"
      },
      {
        "name": "activityCount",
        "type": "number"
      },
      {
        "name": "propertyStatusSeries",
        "type": "MetricSeries"
      },
      {
        "name": "leadStageSeries",
        "type": "MetricSeries"
      },
      {
        "name": "dealStageSeries",
        "type": "MetricSeries"
      },
      {
        "name": "brokerActivitySeries",
        "type": "MetricSeries"
      },
      {
        "name": "lastUpdatedAt",
        "type": "date"
      }
    ],
    "readsEntities": [
      "dashboardMetricEntity"
    ],
    "writesEntities": [],
    "readsTables": [
      "dashboard_metric_update",
      "property_status_metrics",
      "lead_pipeline_metrics",
      "deal_pipeline_metrics",
      "broker_activity_metrics"
    ],
    "writesTables": [],
    "usecaseRefs": [
      "visualizarDashboard"
    ],
    "layerContract": {
      "controllerLayer": "layer_2_controllers",
      "mustCallLayer": "layer_3_usecases",
      "directTableAccessForbidden": true
    },
    "rulesApplied": [
      "ruleMetricRefresh"
    ]
  }
];

export const pipeline = [
  {
    "id": "dashboard__l2_contract",
    "type": "l2_contract",
    "outputPath": "_102045_/l2/propertyFlowCrm/web/contracts/dashboard.ts",
    "defPath": "_102045_/l2/propertyFlowCrm/web/contracts/dashboard.defs.ts",
    "dependsFiles": [],
    "dependsOn": [],
    "skills": [
      "_102020_/l2/agentMaterializeSolution/skills/genContract.ts"
    ],
    "agent": "agentMaterializeGen"
  }
] as const;
