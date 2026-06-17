/// <mls fileReference="_102045_/l1/propertyFlowCrm/layer_1_external/visitScheduleRequest.defs.ts" enhancement="_blank"/>

export const visitScheduleRequestTableDefinition = {
  "schemaVersion": "2026-06-06",
  "artifactType": "table",
  "artifactId": "visitScheduleRequest",
  "moduleName": "propertyFlowCrm",
  "status": "draft",
  "source": {
    "agentName": "agentPlanTableDefinition",
    "stepId": 49,
    "planId": ""
  },
  "data": {
    "tableDefinition": {
      "tableId": "visitScheduleRequest",
      "tableName": "visit_schedule_request",
      "moduleId": "propertyFlowCrm",
      "title": "Solicitação de agendamento de visita",
      "purpose": "Registrar pedidos de agendamento e alterações de visita.",
      "ownership": "moduleOwned",
      "rootEntity": "VisitScheduleRequest",
      "layer": "layer_1_external",
      "tableKind": "transactional",
      "columns": [
        {
          "name": "visit_schedule_request_id",
          "type": "uuid",
          "nullable": false,
          "primaryKey": true,
          "description": "Identificador único da solicitação de agendamento de visita."
        },
        {
          "name": "visit_id",
          "type": "uuid",
          "nullable": true,
          "description": "Referência à visita criada ou alterada pela solicitação."
        },
        {
          "name": "property_id",
          "type": "uuid",
          "nullable": false,
          "description": "Imóvel alvo da solicitação de agendamento."
        },
        {
          "name": "lead_id",
          "type": "uuid",
          "nullable": false,
          "description": "Lead alvo da solicitação de agendamento."
        },
        {
          "name": "requested_start_at",
          "type": "datetime",
          "nullable": false,
          "description": "Data e hora solicitadas para início da visita."
        },
        {
          "name": "requested_end_at",
          "type": "datetime",
          "nullable": true,
          "description": "Data e hora solicitadas para término da visita."
        },
        {
          "name": "status",
          "type": "string",
          "nullable": false,
          "description": "Status atual da solicitação de agendamento."
        },
        {
          "name": "notes",
          "type": "text",
          "nullable": true,
          "description": "Observações adicionais para o agendamento."
        },
        {
          "name": "created_at",
          "type": "datetime",
          "nullable": false,
          "description": "Data e hora de criação da solicitação."
        },
        {
          "name": "updated_at",
          "type": "datetime",
          "nullable": false,
          "description": "Data e hora da última atualização da solicitação."
        }
      ],
      "primaryKey": [
        "visit_schedule_request_id"
      ],
      "foreignRefs": [
        {
          "fieldName": "visit_id",
          "targetEntity": "Visit",
          "targetOwnership": "mdmOwned",
          "reason": "Vincular solicitação à visita criada ou alterada."
        },
        {
          "fieldName": "property_id",
          "targetEntity": "Property",
          "targetOwnership": "mdmOwned",
          "reason": "Vínculo obrigatório ao imóvel da solicitação."
        },
        {
          "fieldName": "lead_id",
          "targetEntity": "Lead",
          "targetOwnership": "mdmOwned",
          "reason": "Vínculo obrigatório ao lead da solicitação."
        }
      ],
      "indexes": [
        {
          "indexName": "idx_visit_schedule_request_property",
          "columns": [
            "property_id",
            "requested_start_at"
          ],
          "unique": false,
          "reason": "Filtrar solicitações por imóvel e janela de datas."
        },
        {
          "indexName": "idx_visit_schedule_request_lead",
          "columns": [
            "lead_id",
            "requested_start_at"
          ],
          "unique": false,
          "reason": "Filtrar solicitações por lead e janela de datas."
        },
        {
          "indexName": "idx_visit_schedule_request_status",
          "columns": [
            "status",
            "requested_start_at"
          ],
          "unique": false,
          "reason": "Listagens por status e data solicitada."
        },
        {
          "indexName": "idx_visit_schedule_request_visit",
          "columns": [
            "visit_id"
          ],
          "unique": false,
          "reason": "Localizar solicitação vinculada a uma visita."
        }
      ],
      "detailsColumn": {
        "enabled": true,
        "columnName": "details",
        "jsonSchemaRef": "VisitScheduleRequestDetails",
        "reason": "Armazenar dados adicionais da solicitação que não exigem filtro/consulta frequente."
      },
      "metricUpdatePolicy": {
        "feedsMetrics": true,
        "metricRefs": [
          "visitScheduling"
        ],
        "updatedByLayer": "layer_3_usecases"
      },
      "accessPolicy": {
        "directAccessAllowedFor": [
          "layer_3_usecases"
        ],
        "forbiddenFor": [
          "pages",
          "layer_2_controllers",
          "agents"
        ]
      },
      "rulesApplied": [
        "ruleVisitStatus"
      ]
    },
    "defsPlan": {
      "fileName": "tables/visitScheduleRequest.defs.ts",
      "exportName": "visitScheduleRequestTableDefinition",
      "saveAsDefs": true
    }
  }
} as const;

export default visitScheduleRequestTableDefinition;
