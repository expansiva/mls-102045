/// <mls fileReference="_102045_/l2/propertyFlowCrm/dashboard.defs.ts" enhancement="_blank"/>

export const dashboardPagePlan = {
  "schemaVersion": "2026-06-06",
  "artifactType": "page",
  "artifactId": "dashboard",
  "moduleName": "propertyFlowCrm",
  "status": "draft",
  "source": {
    "agentName": "agentPlanPageDefinition",
    "stepId": 58,
    "planId": ""
  },
  "data": {
    "pageDefinition": {
      "pageId": "dashboard",
      "pageName": "Dashboard de métricas",
      "actor": "gestor",
      "purpose": "Acompanhar KPIs e métricas de leads, imóveis e negócios.",
      "capabilities": [
        "viewDashboard"
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
          "name": "startDate",
          "type": "date",
          "required": false,
          "sources": [
            "queryParam"
          ],
          "description": "Data inicial do período para filtros de métricas."
        },
        {
          "name": "endDate",
          "type": "date",
          "required": false,
          "sources": [
            "queryParam"
          ],
          "description": "Data final do período para filtros de métricas."
        }
      ],
      "navigationRefs": [],
      "sections": [
        {
          "sectionName": "Filtros do dashboard",
          "mode": "filter",
          "organisms": [
            {
              "organismName": "filtroPeriodoDashboard",
              "purpose": "Selecionar período de análise das métricas.",
              "userActions": [
                "aplicarFiltroPeriodo"
              ],
              "requiredEntities": [],
              "readsFields": [],
              "writesFields": [],
              "rulesApplied": []
            }
          ]
        },
        {
          "sectionName": "KPIs principais",
          "mode": "view",
          "organisms": [
            {
              "organismName": "cardsKpiDashboard",
              "purpose": "Exibir indicadores consolidados de imóveis, leads, negócios e atividade.",
              "userActions": [
                "visualizarIndicadores"
              ],
              "requiredEntities": [
                "dashboardMetricEntity"
              ],
              "readsFields": [
                "dashboardMetricEntity.propertyStatusMetrics",
                "dashboardMetricEntity.leadPipelineMetrics",
                "dashboardMetricEntity.dealPipelineMetrics",
                "dashboardMetricEntity.brokerActivityMetrics",
                "dashboardMetricEntity.dashboardMetricUpdate"
              ],
              "writesFields": [],
              "rulesApplied": [
                "ruleMetricRefresh"
              ]
            }
          ]
        },
        {
          "sectionName": "Séries e distribuição",
          "mode": "view",
          "organisms": [
            {
              "organismName": "graficosMetricasDashboard",
              "purpose": "Visualizar séries temporais e distribuição por status, etapas e corretores.",
              "userActions": [
                "visualizarSeries"
              ],
              "requiredEntities": [
                "dashboardMetricEntity"
              ],
              "readsFields": [
                "dashboardMetricEntity.propertyStatusMetrics",
                "dashboardMetricEntity.leadPipelineMetrics",
                "dashboardMetricEntity.dealPipelineMetrics",
                "dashboardMetricEntity.brokerActivityMetrics"
              ],
              "writesFields": [],
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
    ]
  }
} as const;

export default dashboardPagePlan;
