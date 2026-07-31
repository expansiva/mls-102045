/// <mls fileReference="_102045_/l1/buildFlowFsm/layer_1_external/adapters/persistence/statusReport.defs.ts" enhancement="_blank"/>

export const statusReportTableDefinition = {
  "schemaVersion": "2026-06-26",
  "artifactType": "table",
  "artifactId": "StatusReport",
  "moduleName": "buildFlowFsm",
  "status": "draft",
  "source": {
    "agentName": "agentCbPersistenceTable",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "tableId": "StatusReport",
    "tableName": "status_report",
    "columns": [
      {
        "name": "status_report_id",
        "type": "uuid",
        "nullable": false,
        "description": "PK"
      },
      {
        "name": "project_id",
        "type": "uuid",
        "nullable": false,
        "description": "FK to project"
      },
      {
        "name": "status",
        "type": "varchar",
        "nullable": false,
        "description": "Report status"
      },
      {
        "name": "created_at",
        "type": "timestamp",
        "nullable": false,
        "description": "Ordering timestamp"
      },
      {
        "name": "details",
        "type": "jsonb",
        "nullable": true,
        "description": "reportPeriodStart, reportPeriodEnd, summary, tasksOverview, timeLogsOverview, materialsOverview, delayRiskAssessment, pmNotes, generatedAt, reviewedAt, sharedAt, updatedAt"
      }
    ],
    "primaryKey": [
      "status_report_id"
    ],
    "indexes": [
      {
        "indexName": "idx_status_report_project_id",
        "columns": [
          "project_id"
        ],
        "unique": false
      },
      {
        "indexName": "idx_status_report_status",
        "columns": [
          "status"
        ],
        "unique": false
      },
      {
        "indexName": "idx_status_report_created_at",
        "columns": [
          "created_at"
        ],
        "unique": false
      }
    ],
    "detailsColumn": {
      "enabled": true,
      "columnName": "details",
      "childCollections": [
        "DelayRiskSuggestion"
      ]
    },
    "appendOnly": false,
    "purpose": "domain"
  }
} as const;

export default statusReportTableDefinition;

export const pipeline = [
  {
    "id": "statusReport__persistenceTable",
    "type": "persistenceTable",
    "outputPath": "_102045_/l1/buildFlowFsm/layer_1_external/adapters/persistence/statusReport.ts",
    "defPath": "_102045_/l1/buildFlowFsm/layer_1_external/adapters/persistence/statusReport.defs.ts",
    "dependsFiles": [
      "_102045_/l1/buildFlowFsm/layer_3_domain/entities/statusReport.d.ts"
    ],
    "dependsOn": [],
    "skills": [
      "_102021_/l2/agentChangeBackend/skills/architecture.md",
      "_102021_/l2/agentChangeBackend/skills/persistenceTable.md",
      "_102034_.d.ts"
    ],
    "agent": "agentCbMaterialize"
  }
] as const;
