/// <mls fileReference="_102045_/l5/propertyFlowCrm/ontology/VisitScheduleRequest.defs.ts" enhancement="_blank"/>

export const VisitScheduleRequestEntityDefinition = {
  "schemaVersion": "2026-06-06",
  "artifactType": "ontologyEntity",
  "artifactId": "VisitScheduleRequest",
  "moduleName": "propertyFlowCrm",
  "status": "draft",
  "source": {
    "agentName": "agentPlanEntityDefinition",
    "stepId": 40,
    "planId": ""
  },
  "data": {
    "entityDefinition": {
      "entityId": "VisitScheduleRequest",
      "title": "Solicitação de agendamento de visita",
      "description": "Comando para criar ou reagendar uma visita.",
      "ownership": "moduleOwned",
      "kind": "usecaseEntity",
      "fields": [
        {
          "fieldId": "visitScheduleRequestId",
          "type": "uuid",
          "required": true,
          "description": "Identificador único da solicitação de agendamento de visita."
        },
        {
          "fieldId": "visitId",
          "type": "Visit",
          "required": false,
          "description": "Referência à visita criada ou alterada pela solicitação."
        },
        {
          "fieldId": "propertyId",
          "type": "Property",
          "required": true,
          "description": "Imóvel alvo da solicitação de agendamento."
        },
        {
          "fieldId": "leadId",
          "type": "Lead",
          "required": true,
          "description": "Lead alvo da solicitação de agendamento."
        },
        {
          "fieldId": "requestedStartAt",
          "type": "datetime",
          "required": true,
          "description": "Data e hora solicitadas para início da visita."
        },
        {
          "fieldId": "requestedEndAt",
          "type": "datetime",
          "required": false,
          "description": "Data e hora solicitadas para término da visita."
        },
        {
          "fieldId": "status",
          "type": "string",
          "required": true,
          "description": "Status atual da solicitação de agendamento."
        },
        {
          "fieldId": "notes",
          "type": "text",
          "required": false,
          "description": "Observações adicionais para o agendamento."
        },
        {
          "fieldId": "createdAt",
          "type": "datetime",
          "required": true,
          "description": "Data e hora de criação da solicitação."
        },
        {
          "fieldId": "updatedAt",
          "type": "datetime",
          "required": true,
          "description": "Data e hora da última atualização da solicitação."
        }
      ],
      "rulesApplied": [
        "ruleVisitStatus"
      ]
    }
  }
} as const;

export default VisitScheduleRequestEntityDefinition;
