/// <mls fileReference="_102045_/l1/propertyFlowCrm/layer_1_external/leadInteractionTable.defs.ts" enhancement="_blank"/>

export const leadInteractionTableDefinition = {
  "schemaVersion": "2026-06-06",
  "artifactType": "table",
  "artifactId": "leadInteractionTable",
  "moduleName": "propertyFlowCrm",
  "status": "draft",
  "source": {
    "agentName": "agentPlanTableDefinition",
    "stepId": 42,
    "planId": ""
  },
  "data": {
    "tableDefinition": {
      "tableId": "leadInteractionTable",
      "tableName": "lead_interaction",
      "title": "Interações com Lead",
      "purpose": "Registrar histórico de interações entre corretores e leads, incluindo tipo de contato, notas e data",
      "moduleId": "propertyFlowCrm",
      "ownership": "moduleOwned",
      "layer": "layer_1_external",
      "tableKind": "transactional",
      "rootEntity": "LeadInteraction",
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
          "name": "interaction_id",
          "type": "uuid",
          "nullable": false,
          "primaryKey": true,
          "description": "Identificador único da interação"
        },
        {
          "name": "lead_id",
          "type": "uuid",
          "nullable": false,
          "description": "ID do lead relacionado (referência ao MDM de Lead)"
        },
        {
          "name": "broker_id",
          "type": "uuid",
          "nullable": false,
          "description": "ID do corretor que realizou a interação (referência ao MDM de Corretor)"
        },
        {
          "name": "interaction_type",
          "type": "varchar(50)",
          "nullable": false,
          "description": "Tipo de interação (ligação, e-mail, WhatsApp, presencial, etc.)"
        },
        {
          "name": "direction",
          "type": "varchar(20)",
          "nullable": false,
          "description": "Direção da interação (entrada, saída)"
        },
        {
          "name": "summary",
          "type": "text",
          "nullable": false,
          "description": "Resumo da interação"
        },
        {
          "name": "interaction_at",
          "type": "timestamptz",
          "nullable": false,
          "description": "Data e hora da interação"
        },
        {
          "name": "created_at",
          "type": "timestamptz",
          "nullable": false,
          "description": "Data de criação do registro"
        },
        {
          "name": "details",
          "type": "jsonb",
          "nullable": true,
          "description": "Dados adicionais da interação em formato JSON (anexos, metadados, etc.)"
        }
      ],
      "primaryKey": [
        "interaction_id"
      ],
      "detailsColumn": {
        "enabled": true,
        "columnName": "details",
        "reason": "Armazenar dados adicionais como anexos, metadados de canal, informações complementares que não requerem filtragem frequente"
      },
      "foreignRefs": [
        {
          "fieldName": "lead_id",
          "targetEntity": "Lead",
          "targetOwnership": "mdmOwned",
          "reason": "Referência ao lead do MDM de Lead"
        },
        {
          "fieldName": "broker_id",
          "targetEntity": "Broker",
          "targetOwnership": "mdmOwned",
          "reason": "Referência ao corretor do MDM de Corretor"
        }
      ],
      "indexes": [
        {
          "indexName": "idx_lead_interaction_lead_id",
          "columns": [
            "lead_id"
          ],
          "unique": false,
          "reason": "Consulta frequente de interações por lead no pipeline e histórico"
        },
        {
          "indexName": "idx_lead_interaction_broker_id",
          "columns": [
            "broker_id"
          ],
          "unique": false,
          "reason": "Consulta de interações por corretor para relatórios e dashboards"
        },
        {
          "indexName": "idx_lead_interaction_lead_interaction_at",
          "columns": [
            "lead_id",
            "interaction_at"
          ],
          "unique": false,
          "reason": "Ordenação cronológica de interações por lead para timeline e agentes de IA"
        },
        {
          "indexName": "idx_lead_interaction_type",
          "columns": [
            "interaction_type"
          ],
          "unique": false,
          "reason": "Filtragem por tipo de interação para análises e relatórios"
        },
        {
          "indexName": "idx_lead_interaction_created_at",
          "columns": [
            "created_at"
          ],
          "unique": false,
          "reason": "Filtragem por data de criação para consultas recentes e sincronização"
        }
      ],
      "metricUpdatePolicy": {
        "feedsMetrics": true,
        "updatedByLayer": "layer_3_usecases",
        "metricRefs": [
          "interactionCountMetric",
          "brokerActivityMetric"
        ]
      },
      "rulesApplied": [
        "ruleInteractionRequiredFields",
        "ruleBrokerAssignment"
      ]
    },
    "defsPlan": {
      "fileName": "tables/leadInteractionTable.defs.ts",
      "exportName": "leadInteractionTableDefinition",
      "saveAsDefs": true
    }
  }
} as const;

export default leadInteractionTableDefinition;
