/// <mls fileReference="_102045_/l2/propertyFlowCrm/managerMetricsDashboard.defs.ts" enhancement="_blank"/>

export const managerMetricsDashboardPagePlan = {
  "schemaVersion": "2026-06-06",
  "artifactType": "page",
  "artifactId": "managerMetricsDashboard",
  "moduleName": "propertyFlowCrm",
  "status": "draft",
  "source": {
    "agentName": "agentPlanPageDefinition",
    "stepId": 68,
    "planId": ""
  },
  "data": {
    "pageDefinition": {
      "pageId": "managerMetricsDashboard",
      "pageName": "Dashboard de Métricas do Gerente",
      "actor": "agencyManager",
      "purpose": "Visualizar métricas consolidadas de imóveis, leads, visitas e negócios para tomada de decisão estratégica.",
      "capabilities": [
        "viewDashboard"
      ],
      "flowRefs": {
        "experienceFlows": [],
        "entityLifecycles": [],
        "taskWorkflows": [],
        "automations": []
      },
      "pluginRefs": [],
      "mdmRefs": [
        "property",
        "lead",
        "broker"
      ],
      "pageInputs": [],
      "navigationRefs": [],
      "sections": [
        {
          "sectionName": "Filtros de Período",
          "mode": "interactive",
          "organisms": [
            {
              "organismName": "PeriodFilterBar",
              "purpose": "Permitir ao gerente selecionar o período e filtros para análise das métricas.",
              "userActions": [
                "Filtrar por período",
                "Filtrar por corretor"
              ],
              "requiredEntities": [],
              "readsFields": [],
              "writesFields": [],
              "rulesApplied": []
            }
          ]
        },
        {
          "sectionName": "Resumo de Métricas",
          "mode": "readonly",
          "organisms": [
            {
              "organismName": "MetricsSummaryCards",
              "purpose": "Exibir cards com métricas principais: imóveis ativos, leads do mês, visitas agendadas, negócios abertos e valor fechado.",
              "userActions": [
                "Visualizar métricas"
              ],
              "requiredEntities": [],
              "readsFields": [
                "activeProperties",
                "newLeadsThisMonth",
                "scheduledVisits",
                "openDeals",
                "closedDealsValue",
                "conversionRate"
              ],
              "writesFields": [],
              "rulesApplied": []
            }
          ]
        },
        {
          "sectionName": "Desempenho de Corretores",
          "mode": "readonly",
          "organisms": [
            {
              "organismName": "BrokerPerformanceTable",
              "purpose": "Exibir tabela com desempenho individual de cada corretor incluindo leads, visitas e negócios.",
              "userActions": [
                "Analisar desempenho"
              ],
              "requiredEntities": [],
              "readsFields": [
                "brokerPerformance"
              ],
              "writesFields": [],
              "rulesApplied": []
            }
          ]
        }
      ]
    },
    "bffCommands": [
      {
        "commandName": "getDashboardMetrics",
        "purpose": "Obter métricas consolidadas do CRM para o dashboard do gerente, incluindo imóveis, leads, visitas, negócios e desempenho de corretores.",
        "kind": "query",
        "input": [
          {
            "name": "period",
            "type": "string",
            "required": false
          },
          {
            "name": "brokerId",
            "type": "string",
            "required": false
          }
        ],
        "output": [
          {
            "name": "activeProperties",
            "type": "number"
          },
          {
            "name": "newLeadsThisMonth",
            "type": "number"
          },
          {
            "name": "scheduledVisits",
            "type": "number"
          },
          {
            "name": "openDeals",
            "type": "number"
          },
          {
            "name": "closedDealsValue",
            "type": "number"
          },
          {
            "name": "conversionRate",
            "type": "number"
          },
          {
            "name": "brokerPerformance",
            "type": "BrokerMetric[]"
          }
        ],
        "readsEntities": [],
        "writesEntities": [],
        "readsTables": [
          "property_metrics",
          "lead_metrics",
          "deal_pipeline_metrics",
          "visit_metrics",
          "crm_activity_metrics"
        ],
        "writesTables": [],
        "usecaseRefs": [
          "getDashboardMetrics"
        ],
        "layerContract": {
          "controllerLayer": "layer_2_controllers",
          "mustCallLayer": "layer_3_usecases",
          "directTableAccessForbidden": true
        },
        "rulesApplied": []
      }
    ]
  }
} as const;

export default managerMetricsDashboardPagePlan;
