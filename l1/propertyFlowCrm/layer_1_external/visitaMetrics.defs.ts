/// <mls fileReference="_102045_/l1/propertyFlowCrm/layer_1_external/visitaMetrics.defs.ts" enhancement="_blank"/>

export const visitaMetricsTableDefs = {
  "schemaVersion": "2026-06-06",
  "artifactType": "metricTable",
  "artifactId": "visitaMetrics",
  "moduleName": "propertyFlowCrm",
  "status": "draft",
  "source": {
    "agentName": "agentPlanMetricTableDefinition",
    "stepId": 46,
    "planId": ""
  },
  "data": {
    "metricTableDefinition": {
      "metricTableId": "visitaMetrics",
      "tableName": "visita_metrics",
      "moduleId": "propertyFlowCrm",
      "title": "Métricas de Visitas",
      "purpose": "Série temporal de agendamentos, reagendamentos, cancelamentos e conclusões de visitas",
      "tableKind": "metricTimeseries",
      "storageEngine": "postgresTimescaleDB",
      "layer": "layer_1_external",
      "timeColumn": "event_timestamp",
      "columns": [
        {
          "name": "event_timestamp",
          "type": "timestamptz",
          "nullable": false,
          "description": "Timestamp do evento de visita"
        },
        {
          "name": "visita_id",
          "type": "uuid",
          "nullable": false,
          "description": "Identificador da visita"
        },
        {
          "name": "imovel_id",
          "type": "uuid",
          "nullable": false,
          "description": "Imóvel visitado"
        },
        {
          "name": "lead_id",
          "type": "uuid",
          "nullable": false,
          "description": "Lead/cliente associado"
        },
        {
          "name": "corretor_id",
          "type": "uuid",
          "nullable": false,
          "description": "Corretor responsável"
        },
        {
          "name": "status",
          "type": "text",
          "nullable": false,
          "description": "Status da visita"
        },
        {
          "name": "visit_count",
          "type": "integer",
          "nullable": false,
          "default": 0,
          "description": "Contagem de visitas"
        },
        {
          "name": "cancellation_count",
          "type": "integer",
          "nullable": false,
          "default": 0,
          "description": "Contagem de cancelamentos"
        },
        {
          "name": "reschedule_count",
          "type": "integer",
          "nullable": false,
          "default": 0,
          "description": "Contagem de reagendamentos"
        }
      ],
      "dimensions": [
        {
          "dimensionId": "visitaId",
          "column": "visita_id",
          "type": "string",
          "description": "Identificador da visita"
        },
        {
          "dimensionId": "imovelId",
          "column": "imovel_id",
          "type": "string",
          "description": "Imóvel visitado"
        },
        {
          "dimensionId": "leadId",
          "column": "lead_id",
          "type": "string",
          "description": "Lead/cliente associado"
        },
        {
          "dimensionId": "corretorId",
          "column": "corretor_id",
          "type": "string",
          "description": "Corretor responsável"
        },
        {
          "dimensionId": "status",
          "column": "status",
          "type": "string",
          "description": "Status da visita"
        }
      ],
      "measures": [
        {
          "measureId": "visitCount",
          "column": "visit_count",
          "aggregation": "sum",
          "unit": "visitas",
          "description": "Contagem de visitas"
        },
        {
          "measureId": "cancellationCount",
          "column": "cancellation_count",
          "aggregation": "sum",
          "unit": "cancelamentos",
          "description": "Contagem de cancelamentos"
        },
        {
          "measureId": "rescheduleCount",
          "column": "reschedule_count",
          "aggregation": "sum",
          "unit": "reagendamentos",
          "description": "Contagem de reagendamentos"
        }
      ],
      "sourceWriteEvents": [
        "visita_created",
        "visita_updated",
        "visita_cancelled",
        "visita_rescheduled",
        "visita_completed"
      ],
      "hypertable": {
        "timeColumn": "event_timestamp",
        "chunkTimeInterval": "7 days",
        "retentionPolicy": "2 years",
        "compressionPolicy": "30 days",
        "indexes": [
          {
            "indexName": "visita_metrics_time_idx",
            "columns": [
              "event_timestamp"
            ],
            "purpose": "Acelerar queries por janela de tempo"
          },
          {
            "indexName": "visita_metrics_imovel_time_idx",
            "columns": [
              "imovel_id",
              "event_timestamp"
            ],
            "purpose": "Filtros por imóvel e tempo"
          },
          {
            "indexName": "visita_metrics_lead_time_idx",
            "columns": [
              "lead_id",
              "event_timestamp"
            ],
            "purpose": "Filtros por lead e tempo"
          },
          {
            "indexName": "visita_metrics_corretor_time_idx",
            "columns": [
              "corretor_id",
              "event_timestamp"
            ],
            "purpose": "Filtros por corretor e tempo"
          },
          {
            "indexName": "visita_metrics_status_time_idx",
            "columns": [
              "status",
              "event_timestamp"
            ],
            "purpose": "Filtros por status e tempo"
          },
          {
            "indexName": "visita_metrics_visita_time_idx",
            "columns": [
              "visita_id",
              "event_timestamp"
            ],
            "purpose": "Rastreamento por visita e tempo"
          }
        ]
      },
      "updatePolicy": {
        "updatedByLayer": "layer_3_usecases",
        "pagesMayUpdate": false,
        "controllersMayUpdate": false,
        "usecaseRefs": [
          "agendarVisitaUsecase",
          "reagendarVisitaUsecase",
          "cancelarVisitaUsecase"
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
        "visitaRequiresLinks",
        "imovelActiveStatus"
      ]
    },
    "defsPlan": {
      "fileName": "tables/visitaMetrics.defs.ts",
      "exportName": "visitaMetricsTableDefs",
      "saveAsDefs": true
    }
  }
} as const;

export default visitaMetricsTableDefs;
