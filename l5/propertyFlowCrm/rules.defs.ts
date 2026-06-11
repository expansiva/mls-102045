/// <mls fileReference="_102045_/l5/propertyFlowCrm/rules.defs.ts" enhancement="_blank"/>

export const rulesPlan = {
  "schemaVersion": "2026-06-06",
  "artifactType": "rules",
  "artifactId": "propertyFlowCrmRules",
  "moduleName": "propertyFlowCrm",
  "status": "draft",
  "source": {
    "agentName": "agentFinalizeSolutionPlan",
    "stepId": 11,
    "planId": "plan-finalize-solution-plan"
  },
  "data": {
    "moduleName": "propertyFlowCrm",
    "rules": [
      {
        "ruleId": "leadPipelineStages",
        "title": "Etapas do pipeline de leads",
        "description": "O lead deve estar em uma das etapas: Novo, Contato, Visita agendada, Proposta enviada, Fechado.",
        "appliesTo": [
          "Lead"
        ],
        "layer": "layer_1"
      },
      {
        "ruleId": "visitaRequiresLinks",
        "title": "Visita exige vínculos",
        "description": "Toda visita deve estar vinculada a um imóvel, um lead e um corretor.",
        "appliesTo": [
          "Visita"
        ],
        "layer": "layer_1"
      },
      {
        "ruleId": "negocioRequiresLinks",
        "title": "Negócio exige vínculos",
        "description": "Toda proposta deve referenciar imóvel, lead e corretor responsáveis.",
        "appliesTo": [
          "Negocio"
        ],
        "layer": "layer_1"
      },
      {
        "ruleId": "imovelActiveStatus",
        "title": "Imóvel ativo para agendar visita",
        "description": "Somente imóveis com status ativo podem receber visitas agendadas.",
        "appliesTo": [
          "Visita",
          "Imovel"
        ],
        "layer": "layer_3"
      },
      {
        "ruleId": "kanbanMoveUpdatesStatus",
        "title": "Movimentação no Kanban atualiza status",
        "description": "Mover o lead no Kanban atualiza o campo statusFunil e registra data de atualização.",
        "appliesTo": [
          "Lead"
        ],
        "layer": "layer_3"
      },
      {
        "ruleId": "dashboardMetricsRefresh",
        "title": "Atualização de métricas",
        "description": "Mudanças em imóveis, leads e negócios atualizam as métricas do dashboard.",
        "appliesTo": [
          "Imovel",
          "Lead",
          "Negocio"
        ],
        "layer": "layer_3"
      }
    ]
  }
} as const;

export default rulesPlan;
