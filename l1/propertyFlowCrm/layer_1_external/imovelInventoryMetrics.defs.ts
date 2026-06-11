/// <mls fileReference="_102045_/l1/propertyFlowCrm/layer_1_external/imovelInventoryMetrics.defs.ts" enhancement="_blank"/>

export const imovelInventoryMetricsTable = {
  "schemaVersion": "2026-06-06",
  "artifactType": "metricTable",
  "artifactId": "imovelInventoryMetrics",
  "moduleName": "propertyFlowCrm",
  "status": "draft",
  "source": {
    "agentName": "agentPlanMetricTableDefinition",
    "stepId": 48,
    "planId": ""
  },
  "data": {
    "metricTableDefinition": {
      "metricTableId": "imovelInventoryMetrics",
      "tableName": "imovel_inventory_metrics",
      "moduleId": "propertyFlowCrm",
      "title": "Métricas de Inventário de Imóveis",
      "purpose": "Série temporal do inventário de imóveis, capturando ativações, arquivamentos e atualizações",
      "tableKind": "metricTimeseries",
      "storageEngine": "postgresTimescaleDB",
      "layer": "layer_1_external",
      "timeColumn": "event_timestamp",
      "columns": [
        {
          "name": "event_timestamp",
          "type": "timestamptz",
          "nullable": false,
          "description": "Timestamp do evento de inventário do imóvel"
        },
        {
          "name": "imovel_id",
          "type": "uuid",
          "nullable": false,
          "description": "Identificador do imóvel"
        },
        {
          "name": "status",
          "type": "text",
          "nullable": false,
          "description": "Status do imóvel"
        },
        {
          "name": "corretor_id",
          "type": "uuid",
          "nullable": true,
          "description": "Corretor responsável"
        },
        {
          "name": "property_type",
          "type": "text",
          "nullable": false,
          "description": "Tipo do imóvel"
        },
        {
          "name": "property_count",
          "type": "integer",
          "nullable": false,
          "default": 1,
          "description": "Contagem de imóveis no evento"
        },
        {
          "name": "listed_value",
          "type": "numeric(14,2)",
          "nullable": true,
          "description": "Valor de listagem"
        }
      ],
      "dimensions": [
        {
          "dimensionId": "imovelId",
          "column": "imovel_id",
          "type": "string",
          "description": "Identificador do imóvel"
        },
        {
          "dimensionId": "status",
          "column": "status",
          "type": "string",
          "description": "Status do imóvel"
        },
        {
          "dimensionId": "corretorId",
          "column": "corretor_id",
          "type": "string",
          "description": "Corretor responsável"
        },
        {
          "dimensionId": "propertyType",
          "column": "property_type",
          "type": "string",
          "description": "Tipo do imóvel"
        }
      ],
      "measures": [
        {
          "measureId": "propertyCount",
          "column": "property_count",
          "aggregation": "sum",
          "unit": "imóveis",
          "description": "Contagem de imóveis"
        },
        {
          "measureId": "listedValue",
          "column": "listed_value",
          "aggregation": "sum",
          "unit": "BRL",
          "description": "Valor de listagem"
        }
      ],
      "sourceWriteEvents": [
        "imovel_created",
        "imovel_updated",
        "imovel_archived"
      ],
      "hypertable": {
        "timeColumn": "event_timestamp",
        "chunkTimeInterval": "7 days",
        "retentionPolicy": "2 years",
        "compressionPolicy": "90 days",
        "indexes": [
          {
            "indexName": "imovel_inventory_metrics_time_idx",
            "columns": [
              "event_timestamp"
            ],
            "purpose": "Acelerar consultas por janela temporal"
          },
          {
            "indexName": "imovel_inventory_metrics_time_status_idx",
            "columns": [
              "event_timestamp",
              "status"
            ],
            "purpose": "Filtros por tempo e status"
          },
          {
            "indexName": "imovel_inventory_metrics_imovel_idx",
            "columns": [
              "imovel_id"
            ],
            "purpose": "Filtrar por imóvel"
          },
          {
            "indexName": "imovel_inventory_metrics_corretor_idx",
            "columns": [
              "corretor_id"
            ],
            "purpose": "Filtrar por corretor"
          },
          {
            "indexName": "imovel_inventory_metrics_property_type_idx",
            "columns": [
              "property_type"
            ],
            "purpose": "Filtrar por tipo de imóvel"
          }
        ]
      },
      "updatePolicy": {
        "updatedByLayer": "layer_3_usecases",
        "pagesMayUpdate": false,
        "controllersMayUpdate": false,
        "usecaseRefs": [
          "crudImovelUsecase",
          "arquivarImovelUsecase",
          "atualizarImovelUsecase"
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
      "rulesApplied": [
        "imovelActiveStatus"
      ]
    },
    "defsPlan": {
      "fileName": "tables/imovelInventoryMetrics.defs.ts",
      "exportName": "imovelInventoryMetricsTable",
      "saveAsDefs": true
    }
  }
} as const;

export default imovelInventoryMetricsTable;
