/// <mls fileReference="_102045_/l1/propertyFlowCrm/layer_1_external/propertyMetrics.defs.ts" enhancement="_blank"/>

export const propertyMetricsDefinition = {
  "schemaVersion": "2026-06-06",
  "artifactType": "metricTable",
  "artifactId": "propertyMetrics",
  "moduleName": "propertyFlowCrm",
  "status": "draft",
  "source": {
    "agentName": "agentPlanMetricTableDefinition",
    "stepId": 46,
    "planId": ""
  },
  "data": {
    "metricTableDefinition": {
      "metricTableId": "propertyMetrics",
      "tableName": "property_metrics",
      "title": "Métrica de Imóveis Ativos",
      "purpose": "Acompanhar a evolução do estoque e status dos imóveis ao longo do tempo.",
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
          "name": "property_id",
          "type": "uuid",
          "nullable": false,
          "description": "Identificador do imóvel"
        },
        {
          "name": "broker_id",
          "type": "uuid",
          "nullable": true,
          "description": "Corretor responsável pelo imóvel"
        },
        {
          "name": "status",
          "type": "varchar(20)",
          "nullable": false,
          "description": "Status do imóvel (active, inactive, sold, rented, reserved)"
        },
        {
          "name": "lifecycle_state",
          "type": "varchar(20)",
          "nullable": false,
          "description": "Estado do ciclo de vida do imóvel (draft, published, archived)"
        },
        {
          "name": "property_count",
          "type": "integer",
          "nullable": false,
          "default": 1,
          "description": "Contagem de imóveis (sempre 1 por evento)"
        },
        {
          "name": "property_value",
          "type": "numeric(15,2)",
          "nullable": true,
          "description": "Valor do imóvel para métricas de estoque em BRL"
        }
      ],
      "dimensions": [
        {
          "dimensionId": "propertyId",
          "column": "property_id",
          "type": "string",
          "description": "Identificador do imóvel"
        },
        {
          "dimensionId": "brokerId",
          "column": "broker_id",
          "type": "string",
          "description": "Corretor responsável pelo imóvel"
        },
        {
          "dimensionId": "status",
          "column": "status",
          "type": "string",
          "description": "Status do imóvel"
        },
        {
          "dimensionId": "lifecycleState",
          "column": "lifecycle_state",
          "type": "string",
          "description": "Estado do ciclo de vida do imóvel"
        }
      ],
      "measures": [
        {
          "measureId": "propertyCount",
          "column": "property_count",
          "aggregation": "count",
          "unit": "imóveis",
          "description": "Contagem de imóveis"
        },
        {
          "measureId": "propertyValue",
          "column": "property_value",
          "aggregation": "sum",
          "unit": "BRL",
          "description": "Valor do imóvel para métricas de estoque"
        }
      ],
      "sourceWriteEvents": [
        "createProperty",
        "updateProperty",
        "changePropertyStatus"
      ],
      "updatePolicy": {
        "updatedByLayer": "layer_3_usecases",
        "pagesMayUpdate": false,
        "controllersMayUpdate": false,
        "usecaseRefs": [
          "createPropertyUsecase",
          "updatePropertyUsecase",
          "changePropertyStatusUsecase"
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
        "compressionPolicy": "7 days",
        "indexes": [
          {
            "indexName": "idx_property_metrics_event_time",
            "columns": [
              "event_time"
            ],
            "purpose": "Índice primário de tempo para consultas de série temporal",
            "unique": false
          },
          {
            "indexName": "idx_property_metrics_property_id_time",
            "columns": [
              "property_id",
              "event_time"
            ],
            "purpose": "Consultas de histórico de métricas por imóvel",
            "unique": false
          },
          {
            "indexName": "idx_property_metrics_broker_id_time",
            "columns": [
              "broker_id",
              "event_time"
            ],
            "purpose": "Consultas de métricas por corretor responsável",
            "unique": false
          },
          {
            "indexName": "idx_property_metrics_status_time",
            "columns": [
              "status",
              "event_time"
            ],
            "purpose": "Filtragem por status do imóvel ao longo do tempo",
            "unique": false
          },
          {
            "indexName": "idx_property_metrics_lifecycle_time",
            "columns": [
              "lifecycle_state",
              "event_time"
            ],
            "purpose": "Filtragem por estado do ciclo de vida ao longo do tempo",
            "unique": false
          }
        ]
      },
      "rulesApplied": [
        "rulePropertyRequiredFields",
        "rulePropertyStatusTransition",
        "ruleBrokerAssignment"
      ]
    },
    "defsPlan": {
      "fileName": "tables/propertyMetrics.defs.ts",
      "exportName": "propertyMetricsDefinition",
      "saveAsDefs": true
    }
  }
} as const;

export default propertyMetricsDefinition;
