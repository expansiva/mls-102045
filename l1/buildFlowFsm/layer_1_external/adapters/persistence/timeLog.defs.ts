/// <mls fileReference="_102045_/l1/buildFlowFsm/layer_1_external/adapters/persistence/timeLog.defs.ts" enhancement="_blank"/>

export const timeLogTableDefinition = {
  "schemaVersion": "2026-06-26",
  "artifactType": "table",
  "artifactId": "TimeLog",
  "moduleName": "buildFlowFsm",
  "status": "draft",
  "source": {
    "agentName": "agentCbPersistenceTable",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "tableId": "TimeLog",
    "tableName": "time_log",
    "columns": [
      {
        "name": "time_log_id",
        "type": "uuid",
        "nullable": false,
        "description": "PK"
      },
      {
        "name": "work_task_id",
        "type": "uuid",
        "nullable": false,
        "description": "FK to work_task"
      },
      {
        "name": "status",
        "type": "varchar",
        "nullable": false,
        "description": "Time log status"
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
        "description": "workerName, logDate, hoursWorked, laborCost, voidedAt, voidReason"
      }
    ],
    "primaryKey": [
      "time_log_id"
    ],
    "indexes": [
      {
        "indexName": "idx_time_log_work_task_id",
        "columns": [
          "work_task_id"
        ],
        "unique": false
      },
      {
        "indexName": "idx_time_log_status",
        "columns": [
          "status"
        ],
        "unique": false
      },
      {
        "indexName": "idx_time_log_created_at",
        "columns": [
          "created_at"
        ],
        "unique": false
      }
    ],
    "detailsColumn": {
      "enabled": true,
      "columnName": "details",
      "childCollections": []
    },
    "appendOnly": true,
    "purpose": "controle",
    "retentionDays": 2555
  }
} as const;

export default timeLogTableDefinition;

export const pipeline = [
  {
    "id": "timeLog__persistenceTable",
    "type": "persistenceTable",
    "outputPath": "_102045_/l1/buildFlowFsm/layer_1_external/adapters/persistence/timeLog.ts",
    "defPath": "_102045_/l1/buildFlowFsm/layer_1_external/adapters/persistence/timeLog.defs.ts",
    "dependsFiles": [
      "_102045_/l1/buildFlowFsm/layer_3_domain/entities/timeLog.d.ts"
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
