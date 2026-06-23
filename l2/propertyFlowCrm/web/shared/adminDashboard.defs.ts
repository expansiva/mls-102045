/// <mls fileReference="_102045_/l2/propertyFlowCrm/web/shared/adminDashboard.defs.ts" enhancement="_blank"/>

export const definition = {
  "bffCommands": [
    {
      "commandName": "visualizarAdminDashboard",
      "purpose": "Carregar indicadores administrativos.",
      "kind": "query",
      "input": [
        {
          "name": "periodStart",
          "type": "date",
          "required": false
        },
        {
          "name": "periodEnd",
          "type": "date",
          "required": false
        }
      ],
      "output": [
        {
          "name": "dashboardMetrics",
          "type": "dashboardMetricEntity"
        },
        {
          "name": "lastUpdateAt",
          "type": "datetime"
        }
      ],
      "readsEntities": [
        "dashboardMetricEntity"
      ],
      "writesEntities": [],
      "readsTables": [
        "property_status_metrics",
        "lead_pipeline_metrics",
        "deal_pipeline_metrics",
        "broker_activity_metrics",
        "dashboard_metric_update"
      ],
      "writesTables": [],
      "usecaseRefs": [
        "visualizarAdminDashboard"
      ],
      "layerContract": {
        "controllerLayer": "layer_2_controllers",
        "mustCallLayer": "layer_3_usecases",
        "directTableAccessForbidden": true
      },
      "rulesApplied": [
        "ruleMetricRefresh"
      ]
    },
    {
      "commandName": "listarAtualizacoesMetricas",
      "purpose": "Exibir histórico de atualizações de métricas.",
      "kind": "query",
      "input": [
        {
          "name": "periodStart",
          "type": "date",
          "required": false
        },
        {
          "name": "periodEnd",
          "type": "date",
          "required": false
        }
      ],
      "output": [
        {
          "name": "dashboardMetricUpdates",
          "type": "DashboardMetricUpdate[]"
        }
      ],
      "readsEntities": [
        "DashboardMetricUpdate"
      ],
      "writesEntities": [],
      "readsTables": [
        "dashboard_metric_update"
      ],
      "writesTables": [],
      "usecaseRefs": [
        "listarAtualizacoesMetricas"
      ],
      "layerContract": {
        "controllerLayer": "layer_2_controllers",
        "mustCallLayer": "layer_3_usecases",
        "directTableAccessForbidden": true
      },
      "rulesApplied": [
        "ruleMetricRefresh"
      ]
    },
    {
      "commandName": "atualizarMetricasDashboard",
      "purpose": "Forçar atualização das métricas.",
      "kind": "command",
      "input": [
        {
          "name": "periodStart",
          "type": "date",
          "required": false
        },
        {
          "name": "periodEnd",
          "type": "date",
          "required": false
        }
      ],
      "output": [
        {
          "name": "refreshStatus",
          "type": "string"
        },
        {
          "name": "requestedAt",
          "type": "datetime"
        }
      ],
      "readsEntities": [
        "dashboardMetricEntity"
      ],
      "writesEntities": [
        "dashboardMetricEntity",
        "DashboardMetricUpdate"
      ],
      "readsTables": [
        "property_description_request",
        "lead_qualification_request",
        "lead_stage_change",
        "deal_stage_change"
      ],
      "writesTables": [
        "property_status_metrics",
        "lead_pipeline_metrics",
        "deal_pipeline_metrics",
        "broker_activity_metrics",
        "dashboard_metric_update"
      ],
      "usecaseRefs": [
        "atualizarMetricasDashboard"
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
    "id": "adminDashboard__l2_shared",
    "type": "l2_shared",
    "outputPath": "_102045_/l2/propertyFlowCrm/web/shared/adminDashboard.ts",
    "defPath": "_102045_/l2/propertyFlowCrm/web/shared/adminDashboard.defs.ts",
    "dependsFiles": [
      "_102045_/l2/propertyFlowCrm/web/contracts/adminDashboard.ts"
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
