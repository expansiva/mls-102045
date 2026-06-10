/// <mls fileReference="_102045_/l1/propertyFlowCrm/layer_1_external/leadMetrics.defs.ts" enhancement="_blank"/>

export const leadMetricsDefinition = {
  "schemaVersion": "2026-06-06",
  "artifactType": "metricTable",
  "artifactId": "leadMetrics",
  "moduleName": "propertyFlowCrm",
  "status": "draft",
  "source": {
    "agentName": "agentPlanMetricTableDefinition",
    "stepId": 47,
    "planId": ""
  },
  "data": {
    "metricTableDefinition": {
      "metricTableId": "leadMetrics",
      "tableName": "lead_metrics",
      "title": "Métrica de Leads do Mês",
      "purpose": "Monitorar a quantidade, qualificação e movimentação de leads no pipeline.",
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
          "description": "Timestamp do evento de métrica"
        },
        {
          "name": "lead_id",
          "type": "uuid",
          "nullable": false,
          "description": "Identificador do lead"
        },
        {
          "name": "broker_id",
          "type": "uuid",
          "nullable": false,
          "description": "Corretor responsável pelo lead"
        },
        {
          "name": "status",
          "type": "varchar(30)",
          "nullable": false,
          "description": "Status do lead (new, contacted, qualified, negotiating, converted, lost)"
        },
        {
          "name": "lifecycle_state",
          "type": "varchar(20)",
          "nullable": false,
          "description": "Estado do ciclo de vida do lead (active, archived)"
        },
        {
          "name": "lead_count",
          "type": "integer",
          "nullable": false,
          "default": 1,
          "description": "Contagem de leads (sempre 1 por evento)"
        },
        {
          "name": "qualified_count",
          "type": "integer",
          "nullable": false,
          "default": 0,
          "description": "Indicador de lead qualificado (1 se qualificado, 0 caso contrário)"
        },
        {
          "name": "converted_count",
          "type": "integer",
          "nullable": false,
          "default": 0,
          "description": "Indicador de lead convertido (1 se convertido, 0 caso contrário)"
        }
      ],
      "dimensions": [
        {
          "dimensionId": "leadId",
          "column": "lead_id",
          "type": "string",
          "description": "Identificador do lead"
        },
        {
          "dimensionId": "brokerId",
          "column": "broker_id",
          "type": "string",
          "description": "Corretor responsável pelo lead"
        },
        {
          "dimensionId": "status",
          "column": "status",
          "type": "string",
          "description": "Status do lead"
        },
        {
          "dimensionId": "lifecycleState",
          "column": "lifecycle_state",
          "type": "string",
          "description": "Estado do ciclo de vida do lead"
        }
      ],
      "measures": [
        {
          "measureId": "leadCount",
          "column": "lead_count",
          "aggregation": "count",
          "unit": "leads",
          "description": "Contagem de leads"
        },
        {
          "measureId": "qualifiedCount",
          "column": "qualified_count",
          "aggregation": "sum",
          "unit": "leads",
          "description": "Indicador de lead qualificado"
        },
        {
          "measureId": "convertedCount",
          "column": "converted_count",
          "aggregation": "sum",
          "unit": "leads",
          "description": "Indicador de lead convertido"
        }
      ],
      "sourceWriteEvents": [
        "createLead",
        "updateLead",
        "moveLeadStage",
        "classifyLeadTemperature"
      ],
      "updatePolicy": {
        "updatedByLayer": "layer_3_usecases",
        "pagesMayUpdate": false,
        "controllersMayUpdate": false,
        "usecaseRefs": [
          "createLeadUsecase",
          "updateLeadUsecase",
          "moveLeadStageUsecase"
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
        "retentionPolicy": "2 years",
        "compressionPolicy": "30 days",
        "indexes": [
          {
            "indexName": "idx_lead_metrics_event_time",
            "columns": [
              "event_time"
            ],
            "purpose": "Índice primário de tempo para consultas de séries temporais",
            "unique": false
          },
          {
            "indexName": "idx_lead_metrics_lead_id_time",
            "columns": [
              "lead_id",
              "event_time"
            ],
            "purpose": "Consultas de histórico de métricas por lead específico",
            "unique": false
          },
          {
            "indexName": "idx_lead_metrics_broker_id_time",
            "columns": [
              "broker_id",
              "event_time"
            ],
            "purpose": "Consultas de métricas por corretor para dashboard de desempenho",
            "unique": false
          },
          {
            "indexName": "idx_lead_metrics_status",
            "columns": [
              "status"
            ],
            "purpose": "Filtragem por status do lead para análise de pipeline",
            "unique": false
          },
          {
            "indexName": "idx_lead_metrics_lifecycle_state",
            "columns": [
              "lifecycle_state"
            ],
            "purpose": "Filtragem por estado do ciclo de vida",
            "unique": false
          }
        ]
      },
      "rulesApplied": [
        "ruleLeadRequiredFields",
        "ruleLeadPipelineTransition",
        "ruleBrokerAssignment"
      ]
    },
    "defsPlan": {
      "fileName": "tables/leadMetrics.defs.ts",
      "exportName": "leadMetricsDefinition",
      "saveAsDefs": true
    }
  }
} as const;

export default leadMetricsDefinition;
