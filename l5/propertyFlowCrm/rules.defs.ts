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
        "ruleId": "rulePropertyStatusLifecycle",
        "title": "Status do imóvel",
        "description": "Imóvel deve possuir status válido (ativo/inativo/vendido/reservado) e ciclo de vida coerente.",
        "appliesTo": [
          "Property"
        ],
        "layer": "layer_1"
      },
      {
        "ruleId": "ruleLeadPipelineStages",
        "title": "Etapas do pipeline de lead",
        "description": "Lead só pode mudar para etapas previstas no pipeline configurado; mudanças devem registrar responsável e data.",
        "appliesTo": [
          "Lead",
          "LeadStageChange"
        ],
        "layer": "layer_3"
      },
      {
        "ruleId": "ruleDealStages",
        "title": "Etapas do negócio",
        "description": "Negócio deve seguir etapas válidas e registrar valor e imóvel associado.",
        "appliesTo": [
          "Deal",
          "DealStageChange"
        ],
        "layer": "layer_3"
      },
      {
        "ruleId": "ruleVisitStatus",
        "title": "Status da visita",
        "description": "Visita deve ter status válido e vínculo obrigatório a imóvel e lead.",
        "appliesTo": [
          "Visit",
          "VisitScheduleRequest"
        ],
        "layer": "layer_3"
      },
      {
        "ruleId": "ruleMetricRefresh",
        "title": "Atualização de métricas",
        "description": "Alterações em imóveis, leads e negócios disparam atualização das métricas do dashboard.",
        "appliesTo": [
          "DashboardMetricUpdate"
        ],
        "layer": "layer_3"
      },
      {
        "ruleId": "ruleAiHumanReview",
        "title": "Revisão humana de IA",
        "description": "Descrições e qualificações geradas por IA devem permitir revisão manual antes da publicação.",
        "appliesTo": [
          "PropertyDescriptionRequest",
          "LeadQualificationRequest"
        ],
        "layer": "layer_2"
      }
    ]
  }
} as const;

export default rulesPlan;
