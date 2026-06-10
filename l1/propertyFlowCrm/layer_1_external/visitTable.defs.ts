/// <mls fileReference="_102045_/l1/propertyFlowCrm/layer_1_external/visitTable.defs.ts" enhancement="_blank"/>

export const visitTableDefinition = {
  "schemaVersion": "2026-06-06",
  "artifactType": "table",
  "artifactId": "visitTable",
  "moduleName": "propertyFlowCrm",
  "status": "draft",
  "source": {
    "agentName": "agentPlanTableDefinition",
    "stepId": 40,
    "planId": ""
  },
  "data": {
    "tableDefinition": {
      "tableId": "visitTable",
      "tableName": "visit",
      "title": "Visitas/Agendamentos",
      "purpose": "Armazenar registros de visitas agendadas entre leads e imóveis, incluindo status, data/hora e feedback",
      "moduleId": "propertyFlowCrm",
      "ownership": "moduleOwned",
      "layer": "layer_1_external",
      "tableKind": "transactional",
      "rootEntity": "Visit",
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
      "columns": [
        {
          "name": "visit_id",
          "type": "uuid",
          "nullable": false,
          "primaryKey": true,
          "description": "Identificador único da visita"
        },
        {
          "name": "lead_id",
          "type": "uuid",
          "nullable": false,
          "description": "ID do lead que fará a visita"
        },
        {
          "name": "property_id",
          "type": "uuid",
          "nullable": false,
          "description": "ID do imóvel a ser visitado"
        },
        {
          "name": "broker_id",
          "type": "uuid",
          "nullable": false,
          "description": "ID do corretor responsável pela visita"
        },
        {
          "name": "scheduled_at",
          "type": "timestamptz",
          "nullable": false,
          "description": "Data e hora agendada para a visita"
        },
        {
          "name": "status",
          "type": "varchar(20)",
          "nullable": false,
          "default": "scheduled",
          "description": "Status da visita: scheduled, confirmed, completed, cancelled, noShow"
        },
        {
          "name": "notes",
          "type": "text",
          "nullable": true,
          "description": "Observações sobre a visita"
        },
        {
          "name": "feedback",
          "type": "text",
          "nullable": true,
          "description": "Feedback do lead após a visita"
        },
        {
          "name": "rating",
          "type": "smallint",
          "nullable": true,
          "description": "Avaliação do lead sobre o imóvel (1-5)"
        },
        {
          "name": "details",
          "type": "jsonb",
          "nullable": true,
          "description": "Dados adicionais da visita em formato JSON"
        },
        {
          "name": "created_at",
          "type": "timestamptz",
          "nullable": false,
          "description": "Data de criação do registro"
        },
        {
          "name": "updated_at",
          "type": "timestamptz",
          "nullable": false,
          "description": "Data da última atualização"
        }
      ],
      "primaryKey": [
        "visit_id"
      ],
      "detailsColumn": {
        "enabled": true,
        "columnName": "details",
        "reason": "Armazenar dados adicionais como preferências de horário alternativo, informações de acompanhantes, ou metadados de integração com calendário"
      },
      "foreignRefs": [
        {
          "fieldName": "lead_id",
          "targetEntity": "Lead",
          "targetOwnership": "mdmOwned",
          "reason": "Referência ao lead/cliente que realizará a visita, gerenciado pelo MDM de Lead"
        },
        {
          "fieldName": "property_id",
          "targetEntity": "Property",
          "targetOwnership": "mdmOwned",
          "reason": "Referência ao imóvel a ser visitado, gerenciado pelo MDM de Imóvel"
        },
        {
          "fieldName": "broker_id",
          "targetEntity": "Broker",
          "targetOwnership": "mdmOwned",
          "reason": "Referência ao corretor responsável pela visita, gerenciado pelo MDM de Corretor"
        }
      ],
      "indexes": [
        {
          "indexName": "idx_visit_lead_id",
          "columns": [
            "lead_id"
          ],
          "unique": false,
          "reason": "Consultas frequentes de visitas por lead para histórico e dashboard"
        },
        {
          "indexName": "idx_visit_property_id",
          "columns": [
            "property_id"
          ],
          "unique": false,
          "reason": "Consultas de visitas agendadas por imóvel na página de detalhe do imóvel"
        },
        {
          "indexName": "idx_visit_broker_id",
          "columns": [
            "broker_id"
          ],
          "unique": false,
          "reason": "Consultas de agenda do corretor no agendador de visitas"
        },
        {
          "indexName": "idx_visit_scheduled_at",
          "columns": [
            "scheduled_at"
          ],
          "unique": false,
          "reason": "Filtros por data/hora para calendário e workflows de confirmação"
        },
        {
          "indexName": "idx_visit_status",
          "columns": [
            "status"
          ],
          "unique": false,
          "reason": "Filtros por status para dashboard e relatórios de conversão"
        },
        {
          "indexName": "idx_visit_broker_scheduled",
          "columns": [
            "broker_id",
            "scheduled_at"
          ],
          "unique": false,
          "reason": "Consulta composta para agenda do corretor ordenada por data"
        }
      ],
      "metricUpdatePolicy": {
        "feedsMetrics": true,
        "updatedByLayer": "layer_3_usecases",
        "metricRefs": [
          "crmMetricsTable"
        ]
      },
      "rulesApplied": [
        "ruleVisitRequiredFields",
        "ruleVisitStatusTransition",
        "ruleVisitPropertyActive"
      ]
    },
    "defsPlan": {
      "fileName": "tables/visitTable.defs.ts",
      "exportName": "visitTableDefinition",
      "saveAsDefs": true
    }
  }
} as const;

export default visitTableDefinition;
