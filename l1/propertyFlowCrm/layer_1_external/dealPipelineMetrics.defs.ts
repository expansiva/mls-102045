/// <mls fileReference="_102045_/l1/propertyFlowCrm/layer_1_external/dealPipelineMetrics.defs.ts" enhancement="_blank"/>

export const dealPipelineMetricsDefinition = {
  "schemaVersion": "2026-06-06",
  "artifactType": "metricTable",
  "artifactId": "dealPipelineMetrics",
  "moduleName": "propertyFlowCrm",
  "status": "draft",
  "source": {
    "agentName": "agentPlanMetricTableDefinition",
    "stepId": 48,
    "planId": ""
  },
  "data": {
    "metricTableDefinition": {
      "metricTableId": "dealPipelineMetrics",
      "tableName": "deal_pipeline_metrics",
      "title": "Métrica de Pipeline de Fechamentos",
      "purpose": "Rastrear movimentação, valor e resultados do pipeline de negócios.",
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
          "name": "deal_id",
          "type": "uuid",
          "nullable": false,
          "description": "Identificador do negócio"
        },
        {
          "name": "broker_id",
          "type": "uuid",
          "nullable": false,
          "description": "Corretor responsável pelo negócio"
        },
        {
          "name": "lead_id",
          "type": "uuid",
          "nullable": false,
          "description": "Lead relacionado ao negócio"
        },
        {
          "name": "property_id",
          "type": "uuid",
          "nullable": false,
          "description": "Imóvel relacionado ao negócio"
        },
        {
          "name": "status",
          "type": "varchar(20)",
          "nullable": false,
          "description": "Status do negócio"
        },
        {
          "name": "lifecycle_state",
          "type": "varchar(20)",
          "nullable": false,
          "description": "Estado do ciclo de vida do negócio"
        },
        {
          "name": "deal_count",
          "type": "integer",
          "nullable": false,
          "default": 1,
          "description": "Contagem de negócios"
        },
        {
          "name": "deal_value",
          "type": "numeric(15,2)",
          "nullable": false,
          "default": 0,
          "description": "Valor do negócio"
        },
        {
          "name": "won_value",
          "type": "numeric(15,2)",
          "nullable": false,
          "default": 0,
          "description": "Valor de negócios ganhos"
        },
        {
          "name": "lost_value",
          "type": "numeric(15,2)",
          "nullable": false,
          "default": 0,
          "description": "Valor de negócios perdidos"
        }
      ],
      "dimensions": [
        {
          "dimensionId": "dealId",
          "column": "deal_id",
          "type": "string",
          "description": "Identificador do negócio"
        },
        {
          "dimensionId": "brokerId",
          "column": "broker_id",
          "type": "string",
          "description": "Corretor responsável pelo negócio"
        },
        {
          "dimensionId": "leadId",
          "column": "lead_id",
          "type": "string",
          "description": "Lead relacionado ao negócio"
        },
        {
          "dimensionId": "propertyId",
          "column": "property_id",
          "type": "string",
          "description": "Imóvel relacionado ao negócio"
        },
        {
          "dimensionId": "status",
          "column": "status",
          "type": "string",
          "description": "Status do negócio"
        },
        {
          "dimensionId": "lifecycleState",
          "column": "lifecycle_state",
          "type": "string",
          "description": "Estado do ciclo de vida do negócio"
        }
      ],
      "measures": [
        {
          "measureId": "dealCount",
          "column": "deal_count",
          "aggregation": "count",
          "unit": "negócios",
          "description": "Contagem de negócios"
        },
        {
          "measureId": "dealValue",
          "column": "deal_value",
          "aggregation": "sum",
          "unit": "BRL",
          "description": "Valor do negócio"
        },
        {
          "measureId": "wonValue",
          "column": "won_value",
          "aggregation": "sum",
          "unit": "BRL",
          "description": "Valor de negócios ganhos"
        },
        {
          "measureId": "lostValue",
          "column": "lost_value",
          "aggregation": "sum",
          "unit": "BRL",
          "description": "Valor de negócios perdidos"
        }
      ],
      "sourceWriteEvents": [
        "createDeal",
        "advanceDealStage",
        "closeDealWon",
        "closeDealLost"
      ],
      "updatePolicy": {
        "updatedByLayer": "layer_3_usecases",
        "pagesMayUpdate": false,
        "controllersMayUpdate": false,
        "usecaseRefs": [
          "createDealUsecase",
          "advanceDealStageUsecase",
          "closeDealWonUsecase",
          "closeDealLostUsecase"
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
        "retentionPolicy": "3 years",
        "compressionPolicy": "7 days",
        "indexes": [
          {
            "indexName": "idx_deal_pipeline_metrics_time",
            "columns": [
              "event_time"
            ],
            "purpose": "Consultas por intervalo de tempo para agregações e dashboards",
            "unique": false
          },
          {
            "indexName": "idx_deal_pipeline_metrics_deal_id",
            "columns": [
              "deal_id"
            ],
            "purpose": "Consultas de métricas por negócio específico",
            "unique": false
          },
          {
            "indexName": "idx_deal_pipeline_metrics_broker_id",
            "columns": [
              "broker_id"
            ],
            "purpose": "Consultas de métricas por corretor para dashboard de performance",
            "unique": false
          },
          {
            "indexName": "idx_deal_pipeline_metrics_lead_id",
            "columns": [
              "lead_id"
            ],
            "purpose": "Consultas de métricas por lead relacionado",
            "unique": false
          },
          {
            "indexName": "idx_deal_pipeline_metrics_property_id",
            "columns": [
              "property_id"
            ],
            "purpose": "Consultas de métricas por imóvel relacionado",
            "unique": false
          },
          {
            "indexName": "idx_deal_pipeline_metrics_status",
            "columns": [
              "status"
            ],
            "purpose": "Filtragem por status do negócio para análises de pipeline",
            "unique": false
          },
          {
            "indexName": "idx_deal_pipeline_metrics_broker_time",
            "columns": [
              "broker_id",
              "event_time"
            ],
            "purpose": "Consultas combinadas de métricas por corretor e período",
            "unique": false
          }
        ]
      },
      "rulesApplied": [
        "ruleDealRequiredFields",
        "ruleDealPipelineTransition",
        "ruleBrokerAssignment",
        "ruleDealPropertyActive"
      ]
    },
    "defsPlan": {
      "fileName": "tables/dealPipelineMetrics.defs.ts",
      "exportName": "dealPipelineMetricsDefinition",
      "saveAsDefs": true
    }
  }
} as const;

export default dealPipelineMetricsDefinition;
