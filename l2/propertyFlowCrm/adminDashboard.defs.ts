/// <mls fileReference="_102045_/l2/propertyFlowCrm/adminDashboard.defs.ts" enhancement="_blank"/>

export const adminDashboardPagePlan = {
  "schemaVersion": "2026-06-06",
  "artifactType": "page",
  "artifactId": "adminDashboard",
  "moduleName": "propertyFlowCrm",
  "status": "draft",
  "source": {
    "agentName": "agentPlanPageDefinition",
    "stepId": 59,
    "planId": ""
  },
  "data": {
    "pageDefinition": {
      "pageId": "adminDashboard",
      "pageName": "Dashboard administrativo",
      "actor": "admin",
      "purpose": "Monitorar métricas administrativas e forçar atualização.",
      "capabilities": [
        "adminDashboard"
      ],
      "flowRefs": {
        "experienceFlows": [],
        "entityLifecycles": [],
        "taskWorkflows": [],
        "automations": [
          "dashboardMetricsUpdateFlow"
        ]
      },
      "pluginRefs": [],
      "mdmRefs": [],
      "pageInputs": [
        {
          "name": "periodStart",
          "type": "date",
          "required": false,
          "sources": [
            "query"
          ],
          "description": "Data inicial do período de análise no dashboard administrativo."
        },
        {
          "name": "periodEnd",
          "type": "date",
          "required": false,
          "sources": [
            "query"
          ],
          "description": "Data final do período de análise no dashboard administrativo."
        }
      ],
      "navigationRefs": [],
      "sections": [
        {
          "sectionName": "Filtros de período",
          "mode": "view",
          "organisms": [
            {
              "organismName": "Seletor de período",
              "purpose": "Definir o recorte temporal das métricas exibidas.",
              "userActions": [
                "definirPeriodo",
                "limparPeriodo"
              ],
              "requiredEntities": [],
              "readsFields": [],
              "writesFields": [],
              "rulesApplied": [
                "ruleMetricRefresh"
              ]
            }
          ]
        },
        {
          "sectionName": "Indicadores administrativos",
          "mode": "view",
          "organisms": [
            {
              "organismName": "Painel de métricas administrativas",
              "purpose": "Exibir métricas agregadas de imóveis, leads, negócios e atividade dos corretores.",
              "userActions": [
                "visualizarIndicadores"
              ],
              "requiredEntities": [
                "dashboardMetricEntity"
              ],
              "readsFields": [],
              "writesFields": [],
              "rulesApplied": [
                "ruleMetricRefresh"
              ]
            }
          ]
        },
        {
          "sectionName": "Histórico de atualizações",
          "mode": "view",
          "organisms": [
            {
              "organismName": "Lista de atualizações de métricas",
              "purpose": "Mostrar o histórico recente de atualizações das métricas do dashboard.",
              "userActions": [
                "visualizarHistoricoAtualizacoes"
              ],
              "requiredEntities": [
                "DashboardMetricUpdate"
              ],
              "readsFields": [
                "dashboardMetricUpdateId",
                "createdAt",
                "updatedAt"
              ],
              "writesFields": [],
              "rulesApplied": [
                "ruleMetricRefresh"
              ]
            }
          ]
        },
        {
          "sectionName": "Ações administrativas",
          "mode": "action",
          "organisms": [
            {
              "organismName": "Botão de atualização de métricas",
              "purpose": "Permitir que o admin force a atualização das métricas do dashboard.",
              "userActions": [
                "refreshMetrics"
              ],
              "requiredEntities": [
                "dashboardMetricEntity",
                "DashboardMetricUpdate"
              ],
              "readsFields": [],
              "writesFields": [
                "updatedAt"
              ],
              "rulesApplied": [
                "ruleMetricRefresh"
              ]
            }
          ]
        }
      ]
    },
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
    ]
  }
} as const;

export default adminDashboardPagePlan;
