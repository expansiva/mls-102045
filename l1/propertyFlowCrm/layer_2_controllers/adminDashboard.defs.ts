/// <mls fileReference="_102045_/l1/propertyFlowCrm/layer_2_controllers/adminDashboard.defs.ts" enhancement="_blank"/>

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
    "id": "adminDashboard__layer_2_controllers",
    "type": "layer_2_controllers",
    "outputPath": "_102045_/l1/propertyFlowCrm/layer_2_controllers/adminDashboard.ts",
    "defPath": "_102045_/l1/propertyFlowCrm/layer_2_controllers/adminDashboard.defs.ts",
    "dependsFiles": [
      "_102045_/l1/propertyFlowCrm/layer_3_usecases/visualizarAdminDashboard.d.ts",
      "_102045_/l1/propertyFlowCrm/layer_3_usecases/listarAtualizacoesMetricas.d.ts",
      "_102045_/l1/propertyFlowCrm/layer_3_usecases/atualizarMetricasDashboard.d.ts",
      "_102045_/l2/propertyFlowCrm/web/contracts/adminDashboard.ts"
    ],
    "dependsOn": [],
    "skills": [
      "_102021_/l2/skills/layer_2.md"
    ],
    "afterSaveBackEnd": "_102021_/l2/agentMaterializeSolution/registerBackEnd.ts?registerController",
    "rulesPath": "_102045_/l5/propertyFlowCrm/rules.defs.ts",
    "rulesApplied": [
      "ruleMetricRefresh"
    ],
    "agent": "agentMaterializeGen"
  }
] as const;
