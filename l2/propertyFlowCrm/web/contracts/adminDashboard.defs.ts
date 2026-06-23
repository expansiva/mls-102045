/// <mls fileReference="_102045_/l2/propertyFlowCrm/web/contracts/adminDashboard.defs.ts" enhancement="_blank"/>

export const definition = [
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
];

export const pipeline = [
  {
    "id": "adminDashboard__l2_contract",
    "type": "l2_contract",
    "outputPath": "_102045_/l2/propertyFlowCrm/web/contracts/adminDashboard.ts",
    "defPath": "_102045_/l2/propertyFlowCrm/web/contracts/adminDashboard.defs.ts",
    "dependsFiles": [],
    "dependsOn": [],
    "skills": [
      "_102020_/l2/agentMaterializeSolution/skills/genContract.ts"
    ],
    "agent": "agentMaterializeGen"
  }
] as const;
