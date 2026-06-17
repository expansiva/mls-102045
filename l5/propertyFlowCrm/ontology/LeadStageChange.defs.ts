/// <mls fileReference="_102045_/l5/propertyFlowCrm/ontology/LeadStageChange.defs.ts" enhancement="_blank"/>

export const LeadStageChangeEntityDefinition = {
  "schemaVersion": "2026-06-06",
  "artifactType": "ontologyEntity",
  "artifactId": "LeadStageChange",
  "moduleName": "propertyFlowCrm",
  "status": "draft",
  "source": {
    "agentName": "agentPlanEntityDefinition",
    "stepId": 41,
    "planId": ""
  },
  "data": {
    "entityDefinition": {
      "entityId": "LeadStageChange",
      "title": "Mudança de etapa do lead",
      "description": "Comando para mover lead no pipeline.",
      "ownership": "moduleOwned",
      "kind": "usecaseEntity",
      "fields": [
        {
          "fieldId": "leadStageChangeId",
          "type": "uuid",
          "required": true,
          "description": "Identificador único da mudança de etapa do lead."
        },
        {
          "fieldId": "leadId",
          "type": "Lead",
          "required": true,
          "description": "Lead alvo da mudança de etapa."
        },
        {
          "fieldId": "fromStage",
          "type": "string",
          "required": true,
          "description": "Etapa anterior do lead no pipeline."
        },
        {
          "fieldId": "toStage",
          "type": "string",
          "required": true,
          "description": "Nova etapa do lead no pipeline."
        },
        {
          "fieldId": "changedByBrokerId",
          "type": "Broker",
          "required": true,
          "description": "Responsável pela mudança de etapa."
        },
        {
          "fieldId": "changedAt",
          "type": "datetime",
          "required": true,
          "description": "Data e hora da mudança de etapa."
        },
        {
          "fieldId": "note",
          "type": "text",
          "required": false,
          "description": "Observações ou motivo da mudança de etapa."
        },
        {
          "fieldId": "createdAt",
          "type": "datetime",
          "required": true,
          "description": "Data de criação do registro de mudança."
        },
        {
          "fieldId": "updatedAt",
          "type": "datetime",
          "required": true,
          "description": "Data da última atualização do registro de mudança."
        }
      ],
      "rulesApplied": [
        "ruleLeadPipelineStages"
      ]
    }
  }
} as const;

export default LeadStageChangeEntityDefinition;
