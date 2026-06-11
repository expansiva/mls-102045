/// <mls fileReference="_102045_/l1/propertyFlowCrm/layer_1_external/leadPipelineMetrics.defs.ts" enhancement="_blank"/>

export const leadPipelineMetricsDefs = {
  "schemaVersion": "2026-06-06",
  "artifactType": "metricTable",
  "artifactId": "leadPipelineMetrics",
  "moduleName": "propertyFlowCrm",
  "status": "draft",
  "source": {
    "agentName": "agentPlanMetricTableDefinition",
    "stepId": 45,
    "planId": ""
  },
  "data": {
    "metricTableDefinition": {
      "metricTableId": "leadPipelineMetrics",
      "tableName": "lead_pipeline_metrics",
      "moduleId": "propertyFlowCrm",
      "title": "Métricas do Pipeline de Leads",
      "purpose": "Série temporal de eventos do pipeline de leads para análise de volume, etapas e conversões",
      "tableKind": "metricTimeseries",
      "storageEngine": "postgresTimescaleDB",
      "layer": "layer_1_external",
      "timeColumn": "event_timestamp",
      "columns": [
        {
          "name": "event_timestamp",
          "type": "timestamptz",
          "nullable": false,
          "description": "Momento do evento do pipeline"
        },
        {
          "name": "lead_id",
          "type": "uuid",
          "nullable": false,
          "description": "Identificador do lead"
        },
        {
          "name": "stage",
          "type": "text",
          "nullable": false,
          "description": "Etapa atual do pipeline"
        },
        {
          "name": "corretor_id",
          "type": "uuid",
          "nullable": true,
          "description": "Corretor responsável"
        },
        {
          "name": "origin",
          "type": "text",
          "nullable": true,
          "description": "Origem do lead"
        },
        {
          "name": "lead_count",
          "type": "integer",
          "nullable": false,
          "default": 1,
          "description": "Quantidade de leads no evento"
        },
        {
          "name": "stage_transition_count",
          "type": "integer",
          "nullable": false,
          "default": 0,
          "description": "Quantidade de transições de etapa"
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
          "dimensionId": "stage",
          "column": "stage",
          "type": "string",
          "description": "Etapa atual do pipeline"
        },
        {
          "dimensionId": "corretorId",
          "column": "corretor_id",
          "type": "string",
          "description": "Corretor responsável"
        },
        {
          "dimensionId": "origin",
          "column": "origin",
          "type": "string",
          "description": "Origem do lead"
        }
      ],
      "measures": [
        {
          "measureId": "leadCount",
          "column": "lead_count",
          "aggregation": "sum",
          "unit": "leads",
          "description": "Quantidade de leads no evento"
        },
        {
          "measureId": "stageTransitionCount",
          "column": "stage_transition_count",
          "aggregation": "sum",
          "unit": "transições",
          "description": "Quantidade de transições de etapa"
        }
      ],
      "sourceWriteEvents": [
        "lead_created",
        "lead_updated",
        "lead_stage_changed"
      ],
      "hypertable": {
        "timeColumn": "event_timestamp",
        "chunkTimeInterval": "7 days",
        "retentionPolicy": "2 years",
        "compressionPolicy": "90 days",
        "indexes": [
          {
            "indexName": "lead_pipeline_metrics_time_idx",
            "columns": [
              "event_timestamp"
            ],
            "purpose": "Ordenação temporal e queries por período"
          },
          {
            "indexName": "lead_pipeline_metrics_lead_time_idx",
            "columns": [
              "lead_id",
              "event_timestamp"
            ],
            "purpose": "Filtrar séries por lead"
          },
          {
            "indexName": "lead_pipeline_metrics_stage_time_idx",
            "columns": [
              "stage",
              "event_timestamp"
            ],
            "purpose": "Filtrar séries por etapa"
          },
          {
            "indexName": "lead_pipeline_metrics_corretor_time_idx",
            "columns": [
              "corretor_id",
              "event_timestamp"
            ],
            "purpose": "Filtrar séries por corretor"
          },
          {
            "indexName": "lead_pipeline_metrics_origin_time_idx",
            "columns": [
              "origin",
              "event_timestamp"
            ],
            "purpose": "Filtrar séries por origem"
          }
        ]
      },
      "updatePolicy": {
        "updatedByLayer": "layer_3_usecases",
        "pagesMayUpdate": false,
        "controllersMayUpdate": false,
        "usecaseRefs": [
          "kanbanLeadUsecase",
          "classificarLeadUsecase"
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
        "leadPipelineStages",
        "kanbanMoveUpdatesStatus"
      ]
    },
    "defsPlan": {
      "fileName": "tables/leadPipelineMetrics.defs.ts",
      "exportName": "leadPipelineMetricsDefs",
      "saveAsDefs": true
    }
  }
} as const;

export default leadPipelineMetricsDefs;
