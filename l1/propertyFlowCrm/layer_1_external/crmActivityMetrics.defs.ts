/// <mls fileReference="_102045_/l1/propertyFlowCrm/layer_1_external/crmActivityMetrics.defs.ts" enhancement="_blank"/>

export const crmActivityMetricsDefinition = {
  "schemaVersion": "2026-06-06",
  "artifactType": "metricTable",
  "artifactId": "crmActivityMetrics",
  "moduleName": "propertyFlowCrm",
  "status": "draft",
  "source": {
    "agentName": "agentPlanMetricTableDefinition",
    "stepId": 50,
    "planId": ""
  },
  "data": {
    "metricTableDefinition": {
      "metricTableId": "crmActivityMetrics",
      "tableName": "crm_activity_metrics",
      "title": "Tabela de Métricas do CRM",
      "purpose": "Consolidar eventos operacionais de todas as entidades do CRM para monitoramento unificado de produtividade e riscos operacionais.",
      "moduleId": "propertyFlowCrm",
      "tableKind": "metricTimeseries",
      "storageEngine": "postgresTimescaleDB",
      "layer": "layer_1_external",
      "timeColumn": "event_time",
      "columns": [
        {
          "name": "event_time",
          "type": "timestamptz",
          "nullable": false,
          "description": "Timestamp do evento operacional"
        },
        {
          "name": "entity_id",
          "type": "varchar(36)",
          "nullable": false,
          "description": "Identificador do registro afetado"
        },
        {
          "name": "entity_type",
          "type": "varchar(50)",
          "nullable": false,
          "description": "Tipo da entidade (Property, Lead, Deal, Visit, LeadInteraction)"
        },
        {
          "name": "broker_id",
          "type": "varchar(36)",
          "nullable": true,
          "description": "Corretor responsável pela ação"
        },
        {
          "name": "lead_id",
          "type": "varchar(36)",
          "nullable": true,
          "description": "Lead relacionado quando aplicável"
        },
        {
          "name": "property_id",
          "type": "varchar(36)",
          "nullable": true,
          "description": "Imóvel relacionado quando aplicável"
        },
        {
          "name": "action_type",
          "type": "varchar(50)",
          "nullable": false,
          "description": "Tipo de ação realizada"
        },
        {
          "name": "status",
          "type": "varchar(30)",
          "nullable": true,
          "description": "Status resultante da ação"
        },
        {
          "name": "event_count",
          "type": "integer",
          "nullable": false,
          "default": 1,
          "description": "Contagem de eventos operacionais"
        }
      ],
      "dimensions": [
        {
          "dimensionId": "entityId",
          "column": "entity_id",
          "type": "string",
          "description": "Identificador do registro afetado"
        },
        {
          "dimensionId": "entityType",
          "column": "entity_type",
          "type": "string",
          "description": "Tipo da entidade (Property, Lead, Deal, Visit, LeadInteraction)"
        },
        {
          "dimensionId": "brokerId",
          "column": "broker_id",
          "type": "string",
          "description": "Corretor responsável pela ação"
        },
        {
          "dimensionId": "leadId",
          "column": "lead_id",
          "type": "string",
          "description": "Lead relacionado quando aplicável"
        },
        {
          "dimensionId": "propertyId",
          "column": "property_id",
          "type": "string",
          "description": "Imóvel relacionado quando aplicável"
        },
        {
          "dimensionId": "actionType",
          "column": "action_type",
          "type": "string",
          "description": "Tipo de ação realizada"
        },
        {
          "dimensionId": "status",
          "column": "status",
          "type": "string",
          "description": "Status resultante da ação"
        }
      ],
      "measures": [
        {
          "measureId": "eventCount",
          "column": "event_count",
          "aggregation": "count",
          "unit": "eventos",
          "description": "Contagem de eventos operacionais"
        }
      ],
      "sourceWriteEvents": [
        "createProperty",
        "updateProperty",
        "changePropertyStatus",
        "createLead",
        "updateLead",
        "moveLeadStage",
        "classifyLeadTemperature",
        "createDeal",
        "advanceDealStage",
        "closeDealWon",
        "closeDealLost",
        "scheduleVisit",
        "confirmVisit",
        "completeVisit",
        "cancelVisit",
        "registerInteraction"
      ],
      "updatePolicy": {
        "updatedByLayer": "layer_3_usecases",
        "pagesMayUpdate": false,
        "controllersMayUpdate": false,
        "usecaseRefs": [
          "createPropertyUsecase",
          "updatePropertyUsecase",
          "changePropertyStatusUsecase",
          "createLeadUsecase",
          "updateLeadUsecase",
          "moveLeadStageUsecase",
          "classifyLeadTemperatureUsecase",
          "createDealUsecase",
          "advanceDealStageUsecase",
          "closeDealWonUsecase",
          "closeDealLostUsecase",
          "scheduleVisitUsecase",
          "confirmVisitUsecase",
          "completeVisitUsecase",
          "cancelVisitUsecase",
          "registerInteractionUsecase"
        ]
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
      "hypertable": {
        "timeColumn": "event_time",
        "chunkTimeInterval": "7 days",
        "retentionPolicy": "1 year",
        "compressionPolicy": "7 days",
        "indexes": [
          {
            "indexName": "idx_crm_activity_metrics_event_time",
            "columns": [
              "event_time"
            ],
            "purpose": "Índice primário de tempo para consultas de série temporal e particionamento",
            "unique": false
          },
          {
            "indexName": "idx_crm_activity_metrics_entity_type_time",
            "columns": [
              "entity_type",
              "event_time"
            ],
            "purpose": "Filtragem por tipo de entidade com ordenação temporal",
            "unique": false
          },
          {
            "indexName": "idx_crm_activity_metrics_broker_id_time",
            "columns": [
              "broker_id",
              "event_time"
            ],
            "purpose": "Consultas de atividade por corretor para dashboard de desempenho",
            "unique": false
          },
          {
            "indexName": "idx_crm_activity_metrics_lead_id_time",
            "columns": [
              "lead_id",
              "event_time"
            ],
            "purpose": "Histórico de eventos relacionados a um lead específico",
            "unique": false
          },
          {
            "indexName": "idx_crm_activity_metrics_property_id_time",
            "columns": [
              "property_id",
              "event_time"
            ],
            "purpose": "Histórico de eventos relacionados a um imóvel específico",
            "unique": false
          },
          {
            "indexName": "idx_crm_activity_metrics_action_type_time",
            "columns": [
              "action_type",
              "event_time"
            ],
            "purpose": "Análise de frequência de tipos de ação ao longo do tempo",
            "unique": false
          }
        ]
      },
      "rulesApplied": []
    },
    "defsPlan": {
      "fileName": "tables/crmActivityMetrics.defs.ts",
      "exportName": "crmActivityMetricsDefinition",
      "saveAsDefs": true
    }
  }
} as const;

export default crmActivityMetricsDefinition;
