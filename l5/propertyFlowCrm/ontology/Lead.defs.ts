/// <mls fileReference="_102045_/l5/propertyFlowCrm/ontology/Lead.defs.ts" enhancement="_blank"/>

export const LeadEntityDefinition = {
  "schemaVersion": "2026-06-06",
  "artifactType": "ontologyEntity",
  "artifactId": "Lead",
  "moduleName": "propertyFlowCrm",
  "status": "draft",
  "source": {
    "agentName": "agentPlanEntityDefinition",
    "stepId": 39,
    "planId": ""
  },
  "data": {
    "entityDefinition": {
      "entityId": "Lead",
      "title": "Lead/Cliente",
      "description": "Lead ou cliente com dados de contato, anotações e temperatura.",
      "ownership": "mdmOwned",
      "fields": [
        {
          "fieldId": "leadId",
          "type": "uuid",
          "required": true,
          "description": "Identificador único do lead."
        },
        {
          "fieldId": "brokerId",
          "type": "Broker",
          "required": true,
          "description": "Corretor responsável pelo lead."
        },
        {
          "fieldId": "fullName",
          "type": "string",
          "required": true,
          "description": "Nome completo do lead."
        },
        {
          "fieldId": "email",
          "type": "string",
          "required": false,
          "description": "E-mail principal do lead."
        },
        {
          "fieldId": "phone",
          "type": "string",
          "required": false,
          "description": "Telefone de contato do lead."
        },
        {
          "fieldId": "notes",
          "type": "text",
          "required": false,
          "description": "Anotações sobre o lead."
        },
        {
          "fieldId": "leadTemperature",
          "type": "string",
          "required": false,
          "description": "Temperatura do lead (ex.: frio, morno, quente)."
        },
        {
          "fieldId": "source",
          "type": "string",
          "required": false,
          "description": "Origem do lead (ex.: indicação, portal, anúncio)."
        },
        {
          "fieldId": "leadStatus",
          "type": "string",
          "required": true,
          "description": "Status atual do lead no pipeline.",
          "enum": [
            "novo",
            "emContato",
            "qualificado",
            "proposta",
            "fechado",
            "perdido"
          ]
        },
        {
          "fieldId": "createdAt",
          "type": "datetime",
          "required": true,
          "description": "Data e hora de criação do registro."
        },
        {
          "fieldId": "updatedAt",
          "type": "datetime",
          "required": true,
          "description": "Data e hora da última atualização do registro."
        }
      ],
      "statusEnum": [
        "novo",
        "emContato",
        "qualificado",
        "proposta",
        "fechado",
        "perdido"
      ],
      "lifecycleStates": [
        "captado",
        "qualificado",
        "negociacao",
        "fechado",
        "perdido"
      ],
      "rulesApplied": [
        "ruleLeadPipelineStages"
      ]
    }
  }
} as const;

export default LeadEntityDefinition;
