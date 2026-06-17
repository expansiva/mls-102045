/// <mls fileReference="_102045_/l5/propertyFlowCrm/ontology/DashboardMetricUpdate.defs.ts" enhancement="_blank"/>

export const DashboardMetricUpdateEntityDefinition = {
  "schemaVersion": "2026-06-06",
  "artifactType": "ontologyEntity",
  "artifactId": "DashboardMetricUpdate",
  "moduleName": "propertyFlowCrm",
  "status": "draft",
  "source": {
    "agentName": "agentPlanEntityDefinition",
    "stepId": 39,
    "planId": ""
  },
  "data": {
    "entityDefinition": {
      "entityId": "DashboardMetricUpdate",
      "title": "Atualização de métricas do dashboard",
      "description": "Evento de atualização agregada após mudanças de imóveis, leads e negócios.",
      "ownership": "moduleOwned",
      "kind": "usecaseEntity",
      "fields": [
        {
          "fieldId": "dashboardMetricUpdateId",
          "type": "uuid",
          "required": true,
          "description": "Identificador único da atualização de métricas do dashboard."
        },
        {
          "fieldId": "propertyIds",
          "type": "Property",
          "required": false,
          "description": "Imóveis agregados para cálculo das métricas nesta atualização."
        },
        {
          "fieldId": "leadIds",
          "type": "Lead",
          "required": false,
          "description": "Leads agregados para cálculo das métricas nesta atualização."
        },
        {
          "fieldId": "dealIds",
          "type": "Deal",
          "required": false,
          "description": "Negócios agregados para cálculo das métricas nesta atualização."
        },
        {
          "fieldId": "createdAt",
          "type": "datetime",
          "required": true,
          "description": "Data e hora de criação do evento de atualização."
        },
        {
          "fieldId": "updatedAt",
          "type": "datetime",
          "required": true,
          "description": "Data e hora da última atualização do registro."
        }
      ],
      "rulesApplied": [
        "ruleMetricRefresh"
      ]
    }
  }
} as const;

export default DashboardMetricUpdateEntityDefinition;
