/// <mls fileReference="_102045_/l5/propertyFlowCrm/ontology/LeadQualificationRequest.defs.ts" enhancement="_blank"/>

export const LeadQualificationRequestEntityDefinition = {
  "schemaVersion": "2026-06-06",
  "artifactType": "ontologyEntity",
  "artifactId": "LeadQualificationRequest",
  "moduleName": "propertyFlowCrm",
  "status": "draft",
  "source": {
    "agentName": "agentPlanEntityDefinition",
    "stepId": 38,
    "planId": ""
  },
  "data": {
    "entityDefinition": {
      "entityId": "LeadQualificationRequest",
      "title": "Solicitação de qualificação do lead",
      "description": "Comando para classificar temperatura do lead e sugerir follow-up.",
      "ownership": "moduleOwned",
      "kind": "usecaseEntity",
      "fields": [
        {
          "fieldId": "leadQualificationRequestId",
          "type": "uuid",
          "required": true,
          "description": "Identificador único da solicitação de qualificação do lead."
        },
        {
          "fieldId": "leadId",
          "type": "Lead",
          "required": true,
          "description": "Referência ao lead alvo da qualificação."
        },
        {
          "fieldId": "leadTemperature",
          "type": "string",
          "required": true,
          "description": "Temperatura/classificação do lead sugerida.",
          "enum": [
            "frio",
            "morno",
            "quente"
          ]
        },
        {
          "fieldId": "followUpSuggestion",
          "type": "text",
          "required": false,
          "description": "Sugestão de ação de follow-up para o lead."
        },
        {
          "fieldId": "aiGenerated",
          "type": "boolean",
          "required": true,
          "description": "Indica se a qualificação e sugestão foram geradas por IA."
        },
        {
          "fieldId": "reviewStatus",
          "type": "string",
          "required": true,
          "description": "Status de revisão humana da qualificação gerada por IA.",
          "enum": [
            "pendente",
            "aprovado",
            "rejeitado"
          ]
        },
        {
          "fieldId": "createdAt",
          "type": "datetime",
          "required": true,
          "description": "Data/hora de criação da solicitação."
        },
        {
          "fieldId": "updatedAt",
          "type": "datetime",
          "required": true,
          "description": "Data/hora da última atualização da solicitação."
        }
      ],
      "statusEnum": [
        "pendente",
        "emRevisao",
        "concluida",
        "cancelada"
      ],
      "lifecycleStates": [
        "criada",
        "qualificada",
        "revisada",
        "finalizada"
      ],
      "rulesApplied": [
        "ruleAiHumanReview"
      ]
    }
  }
} as const;

export default LeadQualificationRequestEntityDefinition;
