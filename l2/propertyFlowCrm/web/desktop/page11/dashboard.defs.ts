/// <mls fileReference="_102045_/l2/propertyFlowCrm/web/desktop/page11/dashboard.defs.ts" enhancement="_blank"/>

export const definition = {
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
};

export const pipeline = [
  {
    "id": "dashboard__l2_page",
    "type": "l2_page",
    "outputPath": "_102045_/l2/propertyFlowCrm/web/desktop/page11/dashboard.ts",
    "defPath": "_102045_/l2/propertyFlowCrm/web/desktop/page11/dashboard.defs.ts",
    "dependsFiles": [
      "_102045_/l2/propertyFlowCrm/web/shared/dashboard.ts",
      "_102045_/l2/propertyFlowCrm/web/contracts/dashboard.ts"
    ],
    "dependsOn": [],
    "skills": [
      "_102020_/l2/agentMaterializeSolution/skills/genPageRender.ts",
      "_102020_/l2/agentMaterializeSolution/skills/genPageDS.ts"
    ],
    "afterSaveFrontEnd": "_102020_/l2/agentMaterializeSolution/registerFrontEnd.ts?registerPage",
    "visualStyle": {
      "tone": "Moderno e clean, com foco em usabilidade",
      "layout": "Painéis com cards, listas e kanban; calendário para visitas; navegação lateral simples",
      "palette": [
        "#0F172A",
        "#2563EB",
        "#22C55E",
        "#F59E0B",
        "#F8FAFC"
      ]
    },
    "agent": "agentMaterializeGen"
  }
] as const;
