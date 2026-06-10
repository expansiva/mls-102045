/// <mls fileReference="_102045_/l1/propertyFlowCrm/layer_1_external/visitMetrics.defs.ts" enhancement="_blank"/>

export const visitMetricsDefinition = {
  "schemaVersion": "2026-06-06",
  "artifactType": "metricTable",
  "artifactId": "visitMetrics",
  "moduleName": "propertyFlowCrm",
  "status": "draft",
  "source": {
    "agentName": "agentPlanMetricTableDefinition",
    "stepId": 49,
    "planId": ""
  },
  "data": {
    "metricTableDefinition": {
      "metricTableId": "visitMetrics",
      "tableName": "visit_metrics",
      "title": "Métrica de Visitas Agendadas",
      "purpose": "Acompanhar agendamentos, confirmações, realizações e cancelamentos de visitas.",
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
          "name": "visit_id",
          "type": "uuid",
          "nullable": false,
          "description": "Identificador da visita"
        },
        {
          "name": "broker_id",
          "type": "uuid",
          "nullable": false,
          "description": "Corretor responsável pela visita"
        },
        {
          "name": "lead_id",
          "type": "uuid",
          "nullable": false,
          "description": "Lead visitante"
        },
        {
          "name": "property_id",
          "type": "uuid",
          "nullable": false,
          "description": "Imóvel visitado"
        },
        {
          "name": "status",
          "type": "varchar(20)",
          "nullable": false,
          "description": "Status da visita (scheduled, confirmed, completed, cancelled, noShow)"
        },
        {
          "name": "lifecycle_state",
          "type": "varchar(20)",
          "nullable": false,
          "description": "Estado do ciclo de vida da visita (pending, done)"
        },
        {
          "name": "visit_count",
          "type": "integer",
          "nullable": false,
          "default": 1,
          "description": "Contagem de visitas"
        },
        {
          "name": "completed_count",
          "type": "integer",
          "nullable": false,
          "default": 0,
          "description": "Indicador de visita realizada (1 se completed, 0 caso contrário)"
        },
        {
          "name": "cancelled_count",
          "type": "integer",
          "nullable": false,
          "default": 0,
          "description": "Indicador de visita cancelada (1 se cancelled, 0 caso contrário)"
        },
        {
          "name": "no_show_count",
          "type": "integer",
          "nullable": false,
          "default": 0,
          "description": "Indicador de não comparecimento (1 se noShow, 0 caso contrário)"
        }
      ],
      "dimensions": [
        {
          "dimensionId": "visitId",
          "column": "visit_id",
          "type": "string",
          "description": "Identificador da visita"
        },
        {
          "dimensionId": "brokerId",
          "column": "broker_id",
          "type": "string",
          "description": "Corretor responsável pela visita"
        },
        {
          "dimensionId": "leadId",
          "column": "lead_id",
          "type": "string",
          "description": "Lead visitante"
        },
        {
          "dimensionId": "propertyId",
          "column": "property_id",
          "type": "string",
          "description": "Imóvel visitado"
        },
        {
          "dimensionId": "status",
          "column": "status",
          "type": "string",
          "description": "Status da visita"
        },
        {
          "dimensionId": "lifecycleState",
          "column": "lifecycle_state",
          "type": "string",
          "description": "Estado do ciclo de vida da visita"
        }
      ],
      "measures": [
        {
          "measureId": "visitCount",
          "column": "visit_count",
          "aggregation": "count",
          "unit": "visitas",
          "description": "Contagem de visitas"
        },
        {
          "measureId": "completedCount",
          "column": "completed_count",
          "aggregation": "sum",
          "unit": "visitas",
          "description": "Visitas realizadas"
        },
        {
          "measureId": "cancelledCount",
          "column": "cancelled_count",
          "aggregation": "sum",
          "unit": "visitas",
          "description": "Visitas canceladas"
        },
        {
          "measureId": "noShowCount",
          "column": "no_show_count",
          "aggregation": "sum",
          "unit": "visitas",
          "description": "Visitas com não comparecimento"
        }
      ],
      "sourceWriteEvents": [
        "scheduleVisit",
        "confirmVisit",
        "completeVisit",
        "cancelVisit"
      ],
      "updatePolicy": {
        "updatedByLayer": "layer_3_usecases",
        "pagesMayUpdate": false,
        "controllersMayUpdate": false,
        "usecaseRefs": [
          "scheduleVisitUsecase",
          "confirmVisitUsecase",
          "completeVisitUsecase",
          "cancelVisitUsecase"
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
            "indexName": "idx_visit_metrics_event_time",
            "columns": [
              "event_time"
            ],
            "purpose": "Índice primário de tempo para consultas de série temporal",
            "unique": false
          },
          {
            "indexName": "idx_visit_metrics_broker_time",
            "columns": [
              "broker_id",
              "event_time"
            ],
            "purpose": "Consultas de métricas por corretor ao longo do tempo",
            "unique": false
          },
          {
            "indexName": "idx_visit_metrics_lead_time",
            "columns": [
              "lead_id",
              "event_time"
            ],
            "purpose": "Consultas de métricas por lead ao longo do tempo",
            "unique": false
          },
          {
            "indexName": "idx_visit_metrics_property_time",
            "columns": [
              "property_id",
              "event_time"
            ],
            "purpose": "Consultas de métricas por imóvel ao longo do tempo",
            "unique": false
          },
          {
            "indexName": "idx_visit_metrics_status",
            "columns": [
              "status",
              "event_time"
            ],
            "purpose": "Filtragem por status da visita para análises de conversão",
            "unique": false
          },
          {
            "indexName": "idx_visit_metrics_visit_id",
            "columns": [
              "visit_id"
            ],
            "purpose": "Consultas por identificador da visita",
            "unique": false
          }
        ]
      },
      "rulesApplied": [
        "ruleVisitRequiredFields",
        "ruleVisitStatusTransition",
        "ruleBrokerAssignment",
        "ruleVisitPropertyActive"
      ]
    },
    "defsPlan": {
      "fileName": "tables/visitMetrics.defs.ts",
      "exportName": "visitMetricsDefinition",
      "saveAsDefs": true
    }
  }
} as const;

export default visitMetricsDefinition;
