/// <mls fileReference="_102045_/l1/propertyFlowCrm/layer_4_entities/visitScheduleRequestEntity.defs.ts" enhancement="_blank"/>

export const entity = {
  "entityId": "visitScheduleRequestEntity",
  "title": "Solicitação de Agendamento de Visita",
  "purpose": "Registro de solicitações de agendamento de visita",
  "layer": "layer_4_entities",
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
  "sourceTables": [
    {
      "tableName": "visit_schedule_request",
      "ownership": "moduleOwned"
    }
  ],
  "storage": [
    {
      "kind": "moduleTable",
      "tableId": "visitScheduleRequest",
      "tableName": "visit_schedule_request",
      "fileRef": "_102045_/l1/propertyFlowCrm/layer_1_external/visitScheduleRequest.defs.ts"
    }
  ],
  "allowedOperations": [
    "create",
    "read",
    "list"
  ],
  "rulesApplied": [],
  "usecaseRefs": [
    "agendarVisita",
    "listarSolicitacoesAgendamentoVisita",
    "obterSolicitacaoAgendamentoVisita"
  ],
  "materialization": {
    "fileName": "layer_4_entities/VisitScheduleRequestEntity.ts",
    "className": "VisitScheduleRequestEntity",
    "contractName": "IVisitScheduleRequestEntity"
  }
} as const;

export default entity;
