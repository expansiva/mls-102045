/// <mls fileReference="_102045_/l1/propertyFlowCrm/layer_1_external/brokerActivityMetrics.defs.ts" enhancement="_blank"/>

export const brokerActivityMetricsTableDefinition = {
  "schemaVersion": "2026-06-06",
  "artifactType": "metricTable",
  "artifactId": "brokerActivityMetrics",
  "moduleName": "propertyFlowCrm",
  "status": "draft",
  "source": {
    "agentName": "agentPlanMetricTableDefinition",
    "stepId": 54,
    "planId": ""
  },
  "data": {
    "metricTableDefinition": {
      "metricTableId": "brokerActivityMetrics",
      "tableName": "broker_activity_metrics",
      "moduleId": "propertyFlowCrm",
      "title": "Métricas de Atividade dos Corretores",
      "purpose": "Consolidar a atividade operacional dos corretores em um índice temporal unificado.",
      "tableKind": "metricTimeseries",
      "storageEngine": "postgresTimescaleDB",
      "layer": "layer_1_external",
      "timeColumn": "event_time",
      "columns": [
        {
          "name": "event_time",
          "type": "timestamptz",
          "nullable": false,
          "description": "Data e hora do evento de atividade consolidado."
        },
        {
          "name": "broker_id",
          "type": "uuid",
          "nullable": false,
          "description": "ID do corretor responsável pela atividade."
        },
        {
          "name": "activity_type",
          "type": "varchar",
          "nullable": false,
          "description": "Tipo de atividade registrada."
        },
        {
          "name": "property_id",
          "type": "uuid",
          "nullable": true,
          "description": "Imóvel associado à atividade, quando aplicável."
        },
        {
          "name": "lead_id",
          "type": "uuid",
          "nullable": true,
          "description": "Lead associado à atividade, quando aplicável."
        },
        {
          "name": "activity_count",
          "type": "integer",
          "nullable": false,
          "default": 1,
          "description": "Contagem unitária da atividade registrada."
        }
      ],
      "dimensions": [
        {
          "dimensionId": "brokerId",
          "column": "broker_id",
          "type": "string",
          "description": "ID do corretor"
        },
        {
          "dimensionId": "activityType",
          "column": "activity_type",
          "type": "string",
          "description": "Tipo de atividade registrada"
        },
        {
          "dimensionId": "propertyId",
          "column": "property_id",
          "type": "string",
          "description": "FK dimension derived from ontology relationship visitLinksProperty (Visit -> Property)"
        },
        {
          "dimensionId": "leadId",
          "column": "lead_id",
          "type": "string",
          "description": "FK dimension derived from ontology relationship visitLinksLead (Visit -> Lead)"
        }
      ],
      "measures": [
        {
          "measureId": "activityCount",
          "column": "activity_count",
          "aggregation": "sum",
          "unit": "atividades",
          "description": "Contagem de atividades"
        }
      ],
      "sourceWriteEvents": [
        "propertyCreated",
        "leadCreated",
        "visitCreated",
        "dealCreated",
        "leadStageChanged",
        "dealStageChanged",
        "propertyDescriptionRequested",
        "leadQualificationRequested"
      ],
      "hypertable": {
        "timeColumn": "event_time",
        "chunkTimeInterval": "7 days",
        "retentionPolicy": "1 year",
        "compressionPolicy": "90 days",
        "indexes": [
          {
            "indexName": "idx_broker_activity_metrics_event_time",
            "columns": [
              "event_time"
            ],
            "purpose": "Acelerar filtros temporais e políticas de chunk."
          },
          {
            "indexName": "idx_broker_activity_metrics_broker_time",
            "columns": [
              "broker_id",
              "event_time"
            ],
            "purpose": "Consulta de atividade por corretor ao longo do tempo."
          },
          {
            "indexName": "idx_broker_activity_metrics_activity_time",
            "columns": [
              "activity_type",
              "event_time"
            ],
            "purpose": "Filtro por tipo de atividade com recorte temporal."
          },
          {
            "indexName": "idx_broker_activity_metrics_property_time",
            "columns": [
              "property_id",
              "event_time"
            ],
            "purpose": "Análises de atividade por imóvel quando aplicável."
          },
          {
            "indexName": "idx_broker_activity_metrics_lead_time",
            "columns": [
              "lead_id",
              "event_time"
            ],
            "purpose": "Análises de atividade por lead quando aplicável."
          }
        ]
      },
      "updatePolicy": {
        "updatedByLayer": "layer_3_usecases",
        "pagesMayUpdate": false,
        "controllersMayUpdate": false,
        "usecaseRefs": [
          "dashboardMetricsRefreshWorkflow"
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
        "ruleMetricRefresh"
      ]
    },
    "defsPlan": {
      "fileName": "tables/brokerActivityMetrics.defs.ts",
      "exportName": "brokerActivityMetricsTableDefinition",
      "saveAsDefs": true
    }
  }
} as const;

export default brokerActivityMetricsTableDefinition;

export const pipeline = [
  {
    "id": "brokerActivityMetrics__layer_1_external",
    "type": "layer_1_external",
    "outputPath": "_102045_/l1/propertyFlowCrm/layer_1_external/brokerActivityMetrics.ts",
    "defPath": "_102045_/l1/propertyFlowCrm/layer_1_external/brokerActivityMetrics.defs.ts",
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
