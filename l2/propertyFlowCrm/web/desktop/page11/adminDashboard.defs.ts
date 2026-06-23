/// <mls fileReference="_102045_/l2/propertyFlowCrm/web/desktop/page11/adminDashboard.defs.ts" enhancement="_blank"/>

export const definition = {
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
};

export const pipeline = [
  {
    "id": "adminDashboard__l2_page",
    "type": "l2_page",
    "outputPath": "_102045_/l2/propertyFlowCrm/web/desktop/page11/adminDashboard.ts",
    "defPath": "_102045_/l2/propertyFlowCrm/web/desktop/page11/adminDashboard.defs.ts",
    "dependsFiles": [
      "_102045_/l2/propertyFlowCrm/web/shared/adminDashboard.ts",
      "_102045_/l2/propertyFlowCrm/web/contracts/adminDashboard.ts"
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
