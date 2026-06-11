/// <mls fileReference="_102045_/l2/propertyFlowCrm/dashboardAdministrativo.defs.ts" enhancement="_blank"/>

export const dashboardAdministrativoPagePlan = {
  "schemaVersion": "2026-06-06",
  "artifactType": "page",
  "artifactId": "dashboardAdministrativo",
  "moduleName": "propertyFlowCrm",
  "status": "draft",
  "source": {
    "agentName": "agentPlanPageDefinition",
    "stepId": 55,
    "planId": ""
  },
  "data": {
    "pageDefinition": {
      "pageId": "dashboardAdministrativo",
      "pageName": "Dashboard administrativo",
      "actor": "adminImobiliaria",
      "purpose": "Visualizar métricas do pipeline, visitas, negócios, inventário e corretores.",
      "capabilities": [
        "dashboardBasico"
      ],
      "flowRefs": {
        "experienceFlows": [],
        "entityLifecycles": [],
        "taskWorkflows": [],
        "automations": [
          "dashboardMetricsWorkflow"
        ]
      },
      "pluginRefs": [],
      "mdmRefs": [],
      "pageInputs": [
        {
          "name": "periodo",
          "type": "string",
          "required": false,
          "sources": [
            "query",
            "session"
          ],
          "description": "Janela temporal para agregação das métricas."
        },
        {
          "name": "filtroCorretor",
          "type": "string",
          "required": false,
          "sources": [
            "query",
            "session"
          ],
          "description": "Filtro opcional por corretor responsável.",
          "entityRef": "corretorEntity",
          "fieldRef": "corretorId"
        }
      ],
      "navigationRefs": [],
      "sections": [
        {
          "sectionName": "Filtros e período",
          "mode": "view",
          "organisms": [
            {
              "organismName": "filtroDashboard",
              "purpose": "Selecionar período e filtros para atualização das métricas.",
              "userActions": [
                "definirPeriodo",
                "filtrarPorCorretor",
                "atualizarDashboard"
              ],
              "requiredEntities": [
                "dashboardMetricsEntity"
              ],
              "readsFields": [
                "periodo",
                "filtroCorretor"
              ],
              "writesFields": [],
              "rulesApplied": [
                "dashboardMetricsRefresh"
              ]
            }
          ]
        },
        {
          "sectionName": "Resumo do pipeline de leads",
          "mode": "view",
          "organisms": [
            {
              "organismName": "leadPipelineMetricsCards",
              "purpose": "Exibir volume e transições do pipeline de leads.",
              "userActions": [
                "visualizarMetricasLeads"
              ],
              "requiredEntities": [
                "dashboardMetricsEntity"
              ],
              "readsFields": [
                "leadCount",
                "stageTransitionCount",
                "stage",
                "corretorId",
                "origin"
              ],
              "writesFields": [],
              "rulesApplied": [
                "dashboardMetricsRefresh"
              ]
            }
          ]
        },
        {
          "sectionName": "Métricas de visitas",
          "mode": "view",
          "organisms": [
            {
              "organismName": "visitaMetricsCards",
              "purpose": "Exibir contagem de visitas, cancelamentos e reagendamentos.",
              "userActions": [
                "visualizarMetricasVisitas"
              ],
              "requiredEntities": [
                "dashboardMetricsEntity"
              ],
              "readsFields": [
                "visitCount",
                "cancellationCount",
                "rescheduleCount",
                "status",
                "corretorId"
              ],
              "writesFields": [],
              "rulesApplied": [
                "dashboardMetricsRefresh"
              ]
            }
          ]
        },
        {
          "sectionName": "Métricas de negócios",
          "mode": "view",
          "organisms": [
            {
              "organismName": "negocioMetricsCards",
              "purpose": "Exibir volume de negócios e valores agregados.",
              "userActions": [
                "visualizarMetricasNegocios"
              ],
              "requiredEntities": [
                "dashboardMetricsEntity"
              ],
              "readsFields": [
                "dealCount",
                "proposalValue",
                "closedValue",
                "status",
                "corretorId"
              ],
              "writesFields": [],
              "rulesApplied": [
                "dashboardMetricsRefresh"
              ]
            }
          ]
        },
        {
          "sectionName": "Inventário de imóveis",
          "mode": "view",
          "organisms": [
            {
              "organismName": "imovelInventoryMetricsCards",
              "purpose": "Exibir volume e valor do inventário de imóveis.",
              "userActions": [
                "visualizarMetricasImoveis"
              ],
              "requiredEntities": [
                "dashboardMetricsEntity"
              ],
              "readsFields": [
                "propertyCount",
                "listedValue",
                "status",
                "propertyType",
                "corretorId"
              ],
              "writesFields": [],
              "rulesApplied": [
                "dashboardMetricsRefresh"
              ]
            }
          ]
        },
        {
          "sectionName": "Status de corretores",
          "mode": "view",
          "organisms": [
            {
              "organismName": "corretorStatusMetricsCards",
              "purpose": "Exibir status e total de corretores ativos.",
              "userActions": [
                "visualizarMetricasCorretores"
              ],
              "requiredEntities": [
                "dashboardMetricsEntity"
              ],
              "readsFields": [
                "statusChangeCount",
                "activeBrokerCount",
                "status",
                "corretorId"
              ],
              "writesFields": [],
              "rulesApplied": [
                "dashboardMetricsRefresh"
              ]
            }
          ]
        }
      ]
    },
    "bffCommands": [
      {
        "commandName": "visualizarDashboard",
        "purpose": "Carregar métricas agregadas para o dashboard.",
        "kind": "query",
        "input": [
          {
            "name": "periodo",
            "type": "string",
            "required": false
          },
          {
            "name": "filtroCorretor",
            "type": "string",
            "required": false
          }
        ],
        "output": [
          {
            "name": "leadPipelineMetrics",
            "type": "dashboardMetricsEntity"
          },
          {
            "name": "visitaMetrics",
            "type": "dashboardMetricsEntity"
          },
          {
            "name": "negocioMetrics",
            "type": "dashboardMetricsEntity"
          },
          {
            "name": "imovelInventoryMetrics",
            "type": "dashboardMetricsEntity"
          },
          {
            "name": "corretorStatusMetrics",
            "type": "dashboardMetricsEntity"
          }
        ],
        "readsEntities": [
          "dashboardMetricsEntity"
        ],
        "writesEntities": [],
        "readsTables": [
          "lead_pipeline_metrics",
          "visita_metrics",
          "negocio_metrics",
          "imovel_inventory_metrics",
          "corretor_status_metrics"
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
          "dashboardMetricsRefresh"
        ]
      }
    ]
  }
} as const;

export default dashboardAdministrativoPagePlan;
