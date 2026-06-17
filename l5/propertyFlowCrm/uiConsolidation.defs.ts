/// <mls fileReference="_102045_/l5/propertyFlowCrm/uiConsolidation.defs.ts" enhancement="_blank"/>

export const uiConsolidationPlan = {
  "schemaVersion": "2026-06-06",
  "artifactType": "uiConsolidation",
  "artifactId": "uiConsolidation",
  "moduleName": "propertyFlowCrm",
  "status": "draft",
  "source": {
    "agentName": "agentPlanUiConsolidation",
    "stepId": 28,
    "planId": "plan-ui-consolidation"
  },
  "data": {
    "sharedComponents": [
      {
        "componentId": "periodFilter",
        "title": "Filtro de período",
        "kind": "molecule",
        "pages": [
          "adminDashboard",
          "dashboard"
        ],
        "replacesOrganisms": [
          "adminDashboard.Seletor de período",
          "dashboard.filtroPeriodoDashboard"
        ],
        "responsibilities": "Selecionar o período para análise das métricas exibidas."
      },
      {
        "componentId": "metricsKpiCards",
        "title": "Cards de indicadores de métricas",
        "kind": "organism",
        "pages": [
          "adminDashboard",
          "dashboard"
        ],
        "replacesOrganisms": [
          "adminDashboard.Painel de métricas administrativas",
          "dashboard.cardsKpiDashboard"
        ],
        "responsibilities": "Exibir indicadores consolidados de imóveis, leads, negócios e atividade."
      },
      {
        "componentId": "leadStageHistory",
        "title": "Histórico de etapas do lead",
        "kind": "organism",
        "pages": [
          "leadDetails",
          "leadsPipeline"
        ],
        "replacesOrganisms": [
          "leadDetails.LeadHistoryTimeline",
          "leadsPipeline.leadStageChangeHistory"
        ],
        "responsibilities": "Visualizar o histórico de mudanças de etapa do lead."
      }
    ],
    "namingFixes": [
      {
        "pageId": "adminDashboard",
        "organismName": "Seletor de período",
        "suggestedName": "periodFilter",
        "reason": "Padronizar em camelCase e alinhar com o filtro de período compartilhado."
      },
      {
        "pageId": "adminDashboard",
        "organismName": "Painel de métricas administrativas",
        "suggestedName": "adminMetricsKpiCards",
        "reason": "Padronizar em camelCase e explicitar que são cards de indicadores."
      },
      {
        "pageId": "adminDashboard",
        "organismName": "Lista de atualizações de métricas",
        "suggestedName": "metricsUpdateList",
        "reason": "Padronizar em camelCase e descrever o conteúdo."
      },
      {
        "pageId": "adminDashboard",
        "organismName": "Botão de atualização de métricas",
        "suggestedName": "metricsRefreshButton",
        "reason": "Padronizar em camelCase e indicar ação de atualização."
      },
      {
        "pageId": "dashboard",
        "organismName": "filtroPeriodoDashboard",
        "suggestedName": "periodFilter",
        "reason": "Padronizar em camelCase e alinhar com o filtro de período compartilhado."
      },
      {
        "pageId": "dashboard",
        "organismName": "cardsKpiDashboard",
        "suggestedName": "metricsKpiCards",
        "reason": "Padronizar em camelCase e alinhar com o componente compartilhado."
      },
      {
        "pageId": "dashboard",
        "organismName": "graficosMetricasDashboard",
        "suggestedName": "dashboardMetricsCharts",
        "reason": "Padronizar em camelCase e descrever o conteúdo."
      },
      {
        "pageId": "dealsTracker",
        "organismName": "FiltroETabelaDeNegocios",
        "suggestedName": "dealFilterTable",
        "reason": "Padronizar em camelCase e manter o significado."
      },
      {
        "pageId": "dealsTracker",
        "organismName": "CriarPropostaRapida",
        "suggestedName": "quickDealCreate",
        "reason": "Padronizar em camelCase e manter o significado."
      },
      {
        "pageId": "dealsTracker",
        "organismName": "ResumoDoNegocio",
        "suggestedName": "dealSummary",
        "reason": "Padronizar em camelCase e manter o significado."
      },
      {
        "pageId": "dealsTracker",
        "organismName": "AvancarEtapaDoNegocio",
        "suggestedName": "advanceDealStage",
        "reason": "Padronizar em camelCase e manter o significado."
      },
      {
        "pageId": "dealsTracker",
        "organismName": "HistoricoDeEtapas",
        "suggestedName": "dealStageHistory",
        "reason": "Padronizar em camelCase e manter o significado."
      },
      {
        "pageId": "leadDetails",
        "organismName": "LeadInfoForm",
        "suggestedName": "leadInfoForm",
        "reason": "Padronizar em camelCase."
      },
      {
        "pageId": "leadDetails",
        "organismName": "LeadHistoryTimeline",
        "suggestedName": "leadHistoryTimeline",
        "reason": "Padronizar em camelCase."
      },
      {
        "pageId": "propertyDetails",
        "organismName": "FormularioDadosImovel",
        "suggestedName": "propertyDetailsForm",
        "reason": "Padronizar em camelCase e descrever a função."
      },
      {
        "pageId": "propertyDetails",
        "organismName": "SolicitarDescricaoImovel",
        "suggestedName": "requestPropertyDescription",
        "reason": "Padronizar em camelCase e descrever a ação."
      },
      {
        "pageId": "propertyDetails",
        "organismName": "HistoricoSolicitacoesDescricao",
        "suggestedName": "propertyDescriptionRequestHistory",
        "reason": "Padronizar em camelCase e descrever o conteúdo."
      }
    ],
    "notes": [
      "Filtro de período e cards de indicadores são compartilhados entre adminDashboard e dashboard; manter apenas variações de dados, não de estrutura.",
      "Histórico de etapas do lead é reutilizável entre leadDetails e leadsPipeline com o mesmo comportamento."
    ]
  }
} as const;

export default uiConsolidationPlan;
