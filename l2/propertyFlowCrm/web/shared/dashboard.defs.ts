/// <mls fileReference="_102045_/l2/propertyFlowCrm/web/shared/dashboard.defs.ts" enhancement="_blank"/>

export const definition = {
  "bffCommands": [
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
  ],
  "navigationRefs": []
};

export const pipeline = [
  {
    "id": "dashboard__l2_shared",
    "type": "l2_shared",
    "outputPath": "_102045_/l2/propertyFlowCrm/web/shared/dashboard.ts",
    "defPath": "_102045_/l2/propertyFlowCrm/web/shared/dashboard.defs.ts",
    "dependsFiles": [
      "_102045_/l2/propertyFlowCrm/web/contracts/dashboard.ts"
    ],
    "dependsOn": [],
    "skills": [
      "/_102020_/l2/agentMaterializeSolution/skills/genPageShared.ts"
    ],
    "rulesPath": "_102045_/l5/propertyFlowCrm/rules.defs.ts",
    "rulesApplied": [
      "ruleMetricRefresh"
    ],
    "agent": "agentMaterializeGen"
  }
] as const;
