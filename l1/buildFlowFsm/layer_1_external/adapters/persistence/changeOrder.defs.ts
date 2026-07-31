/// <mls fileReference="_102045_/l1/buildFlowFsm/layer_1_external/adapters/persistence/changeOrder.defs.ts" enhancement="_blank"/>

export const changeOrderTableDefinition = {
  "schemaVersion": "2026-06-26",
  "artifactType": "table",
  "artifactId": "ChangeOrder",
  "moduleName": "buildFlowFsm",
  "status": "draft",
  "source": {
    "agentName": "agentCbPersistenceTable",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "tableId": "ChangeOrder",
    "tableName": "change_order",
    "columns": [
      {
        "name": "change_order_id",
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
        "name": "impact_type",
        "type": "varchar",
        "nullable": false,
        "description": "Impact type filter"
      },
      {
        "name": "status",
        "type": "varchar",
        "nullable": false,
        "description": "Change order status"
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
        "description": "title, description, costAdjustment, scheduleAdjustmentDays, rejectionReason, approvedAt, rejectedAt, updatedAt"
      }
    ],
    "primaryKey": [
      "change_order_id"
    ],
    "indexes": [
      {
        "indexName": "idx_change_order_project_id",
        "columns": [
          "project_id"
        ],
        "unique": false
      },
      {
        "indexName": "idx_change_order_impact_type",
        "columns": [
          "impact_type"
        ],
        "unique": false
      },
      {
        "indexName": "idx_change_order_status",
        "columns": [
          "status"
        ],
        "unique": false
      },
      {
        "indexName": "idx_change_order_created_at",
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
    "appendOnly": false,
    "purpose": "domain"
  }
} as const;

export default changeOrderTableDefinition;

export const pipeline = [
  {
    "id": "changeOrder__persistenceTable",
    "type": "persistenceTable",
    "outputPath": "_102045_/l1/buildFlowFsm/layer_1_external/adapters/persistence/changeOrder.ts",
    "defPath": "_102045_/l1/buildFlowFsm/layer_1_external/adapters/persistence/changeOrder.defs.ts",
    "dependsFiles": [
      "_102045_/l1/buildFlowFsm/layer_3_domain/entities/changeOrder.d.ts"
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
