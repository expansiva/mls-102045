/// <mls fileReference="_102045_/l1/propertyFlowCrm/layer_1_external/dealPipelineMetrics.defs.ts" enhancement="_blank"/>

export const dealPipelineMetricsMetricTableDefinition = {
  "schemaVersion": "2026-06-06",
  "artifactType": "metricTable",
  "artifactId": "dealPipelineMetrics",
  "moduleName": "propertyFlowCrm",
  "status": "draft",
  "source": {
    "agentName": "agentPlanMetricTableDefinition",
    "stepId": 53,
    "planId": ""
  },
  "data": {
    "metricTableDefinition": {
      "metricTableId": "dealPipelineMetrics",
      "tableName": "deal_pipeline_metrics",
      "moduleId": "propertyFlowCrm",
      "title": "Métricas de Pipeline de Negócios",
      "purpose": "Rastrear o volume e valor dos negócios por etapa, corretor, lead e imóvel relacionado.",
      "tableKind": "metricTimeseries",
      "storageEngine": "postgresTimescaleDB",
      "layer": "layer_1_external",
      "timeColumn": "event_time",
      "columns": [
        {
          "name": "event_time",
          "type": "timestamptz",
          "nullable": false,
          "description": "Data e hora do evento de negócio usado para agregação temporal."
        },
        {
          "name": "deal_id",
          "type": "uuid",
          "nullable": false,
          "description": "ID do negócio relacionado ao evento."
        },
        {
          "name": "lead_id",
          "type": "uuid",
          "nullable": false,
          "description": "ID do lead relacionado ao negócio."
        },
        {
          "name": "property_id",
          "type": "uuid",
          "nullable": false,
          "description": "ID do imóvel relacionado ao negócio."
        },
        {
          "name": "broker_id",
          "type": "uuid",
          "nullable": false,
          "description": "ID do corretor responsável pelo negócio."
        },
        {
          "name": "stage",
          "type": "varchar",
          "nullable": false,
          "description": "Etapa atual do negócio."
        },
        {
          "name": "deal_count",
          "type": "integer",
          "nullable": false,
          "default": 0,
          "description": "Contagem de negócios."
        },
        {
          "name": "deal_value",
          "type": "numeric(14,2)",
          "nullable": false,
          "default": 0,
          "description": "Valor total dos negócios."
        },
        {
          "name": "avg_deal_value",
          "type": "numeric(14,2)",
          "nullable": true,
          "description": "Valor médio dos negócios."
        }
      ],
      "dimensions": [
        {
          "dimensionId": "dealId",
          "column": "deal_id",
          "type": "string",
          "description": "ID do negócio"
        },
        {
          "dimensionId": "leadId",
          "column": "lead_id",
          "type": "string",
          "description": "ID do lead relacionado"
        },
        {
          "dimensionId": "propertyId",
          "column": "property_id",
          "type": "string",
          "description": "ID do imóvel relacionado"
        },
        {
          "dimensionId": "brokerId",
          "column": "broker_id",
          "type": "string",
          "description": "ID do corretor responsável"
        },
        {
          "dimensionId": "stage",
          "column": "stage",
          "type": "string",
          "description": "Etapa atual do negócio"
        }
      ],
      "measures": [
        {
          "measureId": "dealCount",
          "column": "deal_count",
          "aggregation": "sum",
          "unit": "negócios",
          "description": "Contagem de negócios."
        },
        {
          "measureId": "dealValue",
          "column": "deal_value",
          "aggregation": "sum",
          "unit": "BRL",
          "description": "Valor total dos negócios."
        },
        {
          "measureId": "avgDealValue",
          "column": "avg_deal_value",
          "aggregation": "avg",
          "unit": "BRL",
          "description": "Valor médio dos negócios."
        }
      ],
      "sourceWriteEvents": [
        "dealCreated",
        "dealUpdated",
        "dealStageChanged"
      ],
      "hypertable": {
        "timeColumn": "event_time",
        "chunkTimeInterval": "7 days",
        "retentionPolicy": "1 year",
        "compressionPolicy": "30 days",
        "indexes": [
          {
            "indexName": "idx_deal_pipeline_metrics_event_time",
            "columns": [
              "event_time"
            ],
            "purpose": "Ordenação e filtros temporais para consultas de métricas."
          },
          {
            "indexName": "idx_deal_pipeline_metrics_stage_time",
            "columns": [
              "stage",
              "event_time"
            ],
            "purpose": "Consultas por etapa ao longo do tempo."
          },
          {
            "indexName": "idx_deal_pipeline_metrics_broker_time",
            "columns": [
              "broker_id",
              "event_time"
            ],
            "purpose": "Consultas por corretor e período."
          },
          {
            "indexName": "idx_deal_pipeline_metrics_lead_time",
            "columns": [
              "lead_id",
              "event_time"
            ],
            "purpose": "Consultas por lead e período."
          },
          {
            "indexName": "idx_deal_pipeline_metrics_property_time",
            "columns": [
              "property_id",
              "event_time"
            ],
            "purpose": "Consultas por imóvel e período."
          },
          {
            "indexName": "idx_deal_pipeline_metrics_deal_time",
            "columns": [
              "deal_id",
              "event_time"
            ],
            "purpose": "Consultas por negócio e período."
          }
        ]
      },
      "updatePolicy": {
        "updatedByLayer": "layer_3_usecases",
        "pagesMayUpdate": false,
        "controllersMayUpdate": false
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
        "ruleDealStages"
      ]
    },
    "defsPlan": {
      "fileName": "tables/dealPipelineMetrics.defs.ts",
      "exportName": "dealPipelineMetricsMetricTableDefinition",
      "saveAsDefs": true
    }
  }
} as const;

export default dealPipelineMetricsMetricTableDefinition;

export const pipeline = [
  {
    "id": "dealPipelineMetrics__layer_1_external",
    "type": "layer_1_external",
    "outputPath": "_102045_/l1/propertyFlowCrm/layer_1_external/dealPipelineMetrics.ts",
    "defPath": "_102045_/l1/propertyFlowCrm/layer_1_external/dealPipelineMetrics.defs.ts",
    "dependsFiles": [],
    "dependsOn": [],
    "skills": [
      "_102021_/l2/skills/layer_1.md",
      "_102034_.d.ts"
    ],
    "afterSaveBackEnd": "_102021_/l2/agentMaterializeSolution/registerBackEnd.ts?registerLayer1",
    "agent": "agentMaterializeGen"
  }
] as const;
