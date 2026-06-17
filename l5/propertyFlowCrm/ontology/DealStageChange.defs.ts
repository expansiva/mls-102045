/// <mls fileReference="_102045_/l5/propertyFlowCrm/ontology/DealStageChange.defs.ts" enhancement="_blank"/>

export const DealStageChangeEntityDefinition = {
  "schemaVersion": "2026-06-06",
  "artifactType": "ontologyEntity",
  "artifactId": "DealStageChange",
  "moduleName": "propertyFlowCrm",
  "status": "draft",
  "source": {
    "agentName": "agentPlanEntityDefinition",
    "stepId": 42,
    "planId": ""
  },
  "data": {
    "entityDefinition": {
      "entityId": "DealStageChange",
      "title": "Mudança de etapa do negócio",
      "description": "Comando para avançar etapa do negócio/proposta.",
      "ownership": "moduleOwned",
      "kind": "usecaseEntity",
      "fields": [
        {
          "fieldId": "dealStageChangeId",
          "type": "uuid",
          "required": true,
          "description": "Identificador único da mudança de etapa do negócio."
        },
        {
          "fieldId": "dealId",
          "type": "Deal",
          "required": true,
          "description": "Negócio alvo cuja etapa será alterada."
        },
        {
          "fieldId": "fromStage",
          "type": "string",
          "required": true,
          "description": "Etapa anterior do negócio antes da mudança."
        },
        {
          "fieldId": "toStage",
          "type": "string",
          "required": true,
          "description": "Nova etapa do negócio após a mudança."
        },
        {
          "fieldId": "changedAt",
          "type": "datetime",
          "required": true,
          "description": "Data e hora em que a mudança de etapa ocorreu."
        },
        {
          "fieldId": "createdAt",
          "type": "datetime",
          "required": true,
          "description": "Data e hora de criação do registro de mudança."
        },
        {
          "fieldId": "updatedAt",
          "type": "datetime",
          "required": true,
          "description": "Data e hora da última atualização do registro de mudança."
        }
      ],
      "rulesApplied": [
        "ruleDealStages"
      ]
    }
  }
} as const;

export default DealStageChangeEntityDefinition;
