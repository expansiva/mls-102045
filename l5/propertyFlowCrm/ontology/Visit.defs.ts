/// <mls fileReference="_102045_/l5/propertyFlowCrm/ontology/Visit.defs.ts" enhancement="_blank"/>

export const VisitEntityDefinition = {
  "schemaVersion": "2026-06-06",
  "artifactType": "ontologyEntity",
  "artifactId": "Visit",
  "moduleName": "propertyFlowCrm",
  "status": "draft",
  "source": {
    "agentName": "agentPlanEntityDefinition",
    "stepId": 40,
    "planId": ""
  },
  "data": {
    "entityDefinition": {
      "entityId": "Visit",
      "title": "Visita/Agendamento",
      "description": "Agendamento de visita vinculada a imóvel, lead e corretor.",
      "ownership": "mdmOwned",
      "fields": [
        {
          "fieldId": "visitId",
          "type": "uuid",
          "required": true,
          "description": "Identificador único da visita."
        },
        {
          "fieldId": "status",
          "type": "string",
          "required": true,
          "description": "Status atual da visita.",
          "enum": [
            "agendada",
            "confirmada",
            "reagendada",
            "realizada",
            "cancelada"
          ]
        },
        {
          "fieldId": "propertyId",
          "type": "Property",
          "required": true,
          "description": "Imóvel vinculado à visita."
        },
        {
          "fieldId": "leadId",
          "type": "Lead",
          "required": true,
          "description": "Lead vinculado à visita."
        },
        {
          "fieldId": "brokerId",
          "type": "Broker",
          "required": false,
          "description": "Corretor responsável pela visita."
        },
        {
          "fieldId": "scheduledAt",
          "type": "datetime",
          "required": true,
          "description": "Data e hora agendadas para a visita."
        },
        {
          "fieldId": "notes",
          "type": "text",
          "required": false,
          "description": "Observações ou instruções para a visita."
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
        "agendada",
        "confirmada",
        "reagendada",
        "realizada",
        "cancelada"
      ],
      "rulesApplied": [
        "ruleVisitStatus"
      ]
    }
  }
} as const;

export default VisitEntityDefinition;
