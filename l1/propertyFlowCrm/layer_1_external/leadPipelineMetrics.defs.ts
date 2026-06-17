/// <mls fileReference="_102045_/l1/propertyFlowCrm/layer_1_external/leadPipelineMetrics.defs.ts" enhancement="_blank"/>

export const leadPipelineMetricsTableDefinition = {
  "schemaVersion": "2026-06-06",
  "artifactType": "metricTable",
  "artifactId": "leadPipelineMetrics",
  "moduleName": "propertyFlowCrm",
  "status": "draft",
  "source": {
    "agentName": "agentPlanMetricTableDefinition",
    "stepId": 52,
    "planId": ""
  },
  "data": {
    "metricTableDefinition": {
      "metricTableId": "leadPipelineMetrics",
      "tableName": "lead_pipeline_metrics",
      "moduleId": "propertyFlowCrm",
      "title": "Métricas de Pipeline de Leads",
      "purpose": "Monitorar o volume, qualificação e conversão de leads por etapa do pipeline e corretor.",
      "tableKind": "metricTimeseries",
      "storageEngine": "postgresTimescaleDB",
      "layer": "layer_1_external",
      "timeColumn": "event_time",
      "columns": [
        {
          "name": "event_time",
          "type": "timestamptz",
          "nullable": false,
          "description": "Momento do evento agregado para o pipeline de leads."
        },
        {
          "name": "lead_id",
          "type": "uuid",
          "nullable": false,
          "description": "ID do lead."
        },
        {
          "name": "broker_id",
          "type": "uuid",
          "nullable": false,
          "description": "ID do corretor responsável."
        },
        {
          "name": "stage",
          "type": "varchar",
          "nullable": false,
          "description": "Etapa atual do pipeline do lead."
        },
        {
          "name": "status",
          "type": "varchar",
          "nullable": false,
          "description": "Status do lead."
        },
        {
          "name": "lead_count",
          "type": "bigint",
          "nullable": false,
          "default": 0,
          "description": "Contagem de leads."
        },
        {
          "name": "qualified_count",
          "type": "bigint",
          "nullable": false,
          "default": 0,
          "description": "Contagem de leads qualificados."
        }
      ],
      "dimensions": [
        {
          "dimensionId": "leadId",
          "column": "lead_id",
          "type": "string",
          "description": "ID do lead"
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
          "description": "Etapa atual do pipeline do lead"
        },
        {
          "dimensionId": "status",
          "column": "status",
          "type": "string",
          "description": "Status do lead"
        }
      ],
      "measures": [
        {
          "measureId": "leadCount",
          "column": "lead_count",
          "aggregation": "sum",
          "unit": "leads",
          "description": "Contagem de leads"
        },
        {
          "measureId": "qualifiedCount",
          "column": "qualified_count",
          "aggregation": "sum",
          "unit": "leads",
          "description": "Contagem de leads qualificados"
        }
      ],
      "sourceWriteEvents": [
        "leadCreated",
        "leadUpdated",
        "leadStageChanged"
      ],
      "hypertable": {
        "timeColumn": "event_time",
        "chunkTimeInterval": "7 days",
        "retentionPolicy": "1 year",
        "compressionPolicy": "30 days",
        "indexes": [
          {
            "indexName": "idx_lead_pipeline_metrics_event_time",
            "columns": [
              "event_time"
            ],
            "purpose": "Consulta temporal principal da série."
          },
          {
            "indexName": "idx_lead_pipeline_metrics_lead_time",
            "columns": [
              "lead_id",
              "event_time"
            ],
            "purpose": "Filtros por lead com ordenação temporal."
          },
          {
            "indexName": "idx_lead_pipeline_metrics_broker_time",
            "columns": [
              "broker_id",
              "event_time"
            ],
            "purpose": "Filtros por corretor com ordenação temporal."
          },
          {
            "indexName": "idx_lead_pipeline_metrics_stage_time",
            "columns": [
              "stage",
              "event_time"
            ],
            "purpose": "Análises por etapa do pipeline."
          },
          {
            "indexName": "idx_lead_pipeline_metrics_status_time",
            "columns": [
              "status",
              "event_time"
            ],
            "purpose": "Análises por status do lead."
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
        "ruleLeadPipelineStages"
      ]
    },
    "defsPlan": {
      "fileName": "tables/leadPipelineMetrics.defs.ts",
      "exportName": "leadPipelineMetricsTableDefinition",
      "saveAsDefs": true
    }
  }
} as const;

export default leadPipelineMetricsTableDefinition;
