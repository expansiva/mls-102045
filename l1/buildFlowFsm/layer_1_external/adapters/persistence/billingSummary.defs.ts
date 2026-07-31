/// <mls fileReference="_102045_/l1/buildFlowFsm/layer_1_external/adapters/persistence/billingSummary.defs.ts" enhancement="_blank"/>

export const billingSummaryTableDefinition = {
  "schemaVersion": "2026-06-26",
  "artifactType": "table",
  "artifactId": "BillingSummary",
  "moduleName": "buildFlowFsm",
  "status": "draft",
  "source": {
    "agentName": "agentCbPersistenceTable",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "tableId": "BillingSummary",
    "tableName": "billing_summary",
    "columns": [
      {
        "name": "billing_summary_id",
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
        "description": "Billing summary status"
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
        "description": "periodStart, periodEnd, laborCost, materialCost, changeOrderCost, totalCost, sharedAt, updatedAt"
      }
    ],
    "primaryKey": [
      "billing_summary_id"
    ],
    "indexes": [
      {
        "indexName": "idx_billing_summary_project_id",
        "columns": [
          "project_id"
        ],
        "unique": false
      },
      {
        "indexName": "idx_billing_summary_status",
        "columns": [
          "status"
        ],
        "unique": false
      },
      {
        "indexName": "idx_billing_summary_created_at",
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

export default billingSummaryTableDefinition;

export const pipeline = [
  {
    "id": "billingSummary__persistenceTable",
    "type": "persistenceTable",
    "outputPath": "_102045_/l1/buildFlowFsm/layer_1_external/adapters/persistence/billingSummary.ts",
    "defPath": "_102045_/l1/buildFlowFsm/layer_1_external/adapters/persistence/billingSummary.defs.ts",
    "dependsFiles": [
      "_102045_/l1/buildFlowFsm/layer_3_domain/entities/billingSummary.d.ts"
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
