/// <mls fileReference="_102045_/l1/propertyFlowCrm/layer_1_external/dashboardMetricUpdate.defs.ts" enhancement="_blank"/>

export const dashboardMetricUpdateTableDefinition = {
  "schemaVersion": "2026-06-06",
  "artifactType": "table",
  "artifactId": "dashboardMetricUpdate",
  "moduleName": "propertyFlowCrm",
  "status": "draft",
  "source": {
    "agentName": "agentPlanTableDefinition",
    "stepId": 47,
    "planId": ""
  },
  "data": {
    "tableDefinition": {
      "tableId": "dashboardMetricUpdate",
      "tableName": "dashboard_metric_update",
      "moduleId": "propertyFlowCrm",
      "title": "Atualização de métricas do dashboard",
      "purpose": "Registrar execuções de atualização de métricas administrativas.",
      "ownership": "moduleOwned",
      "rootEntity": "DashboardMetricUpdate",
      "layer": "layer_1_external",
      "tableKind": "transactional",
      "columns": [
        {
          "name": "dashboard_metric_update_id",
          "type": "uuid",
          "nullable": false,
          "primaryKey": true,
          "description": "Identificador único da atualização de métricas do dashboard."
        },
        {
          "name": "status",
          "type": "varchar",
          "nullable": false,
          "default": "completed",
          "description": "Status de execução da atualização de métricas."
        },
        {
          "name": "created_at",
          "type": "datetime",
          "nullable": false,
          "description": "Data e hora de criação do evento de atualização."
        },
        {
          "name": "updated_at",
          "type": "datetime",
          "nullable": false,
          "description": "Data e hora da última atualização do registro."
        }
      ],
      "primaryKey": [
        "dashboard_metric_update_id"
      ],
      "indexes": [
        {
          "indexName": "idx_dashboard_metric_update_created_at",
          "columns": [
            "created_at"
          ],
          "reason": "Suporte a filtros por período no dashboard."
        },
        {
          "indexName": "idx_dashboard_metric_update_status",
          "columns": [
            "status"
          ],
          "reason": "Filtrar execuções por status."
        }
      ],
      "detailsColumn": {
        "enabled": true,
        "columnName": "details",
        "jsonSchemaRef": "DashboardMetricUpdateDetails",
        "reason": "Armazenar listas agregadas de imóveis, leads e negócios sem uso frequente em filtros."
      },
      "metricUpdatePolicy": {
        "feedsMetrics": true,
        "metricRefs": [
          "adminDashboardMetrics"
        ],
        "updatedByLayer": "layer_3_usecases"
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
      "fileName": "tables/dashboardMetricUpdate.defs.ts",
      "exportName": "dashboardMetricUpdateTableDefinition",
      "saveAsDefs": true
    }
  }
} as const;

export default dashboardMetricUpdateTableDefinition;
