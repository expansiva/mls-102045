/// <mls fileReference="_102045_/l1/buildFlowFsm/layer_1_external/adapters/persistence/invoice.defs.ts" enhancement="_blank"/>

export const invoiceTableDefinition = {
  "schemaVersion": "2026-06-26",
  "artifactType": "table",
  "artifactId": "Invoice",
  "moduleName": "buildFlowFsm",
  "status": "draft",
  "source": {
    "agentName": "agentCbPersistenceTable",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "tableId": "Invoice",
    "tableName": "invoice",
    "columns": [
      {
        "name": "invoice_id",
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
        "name": "client_id",
        "type": "uuid",
        "nullable": false,
        "description": "FK to client"
      },
      {
        "name": "status",
        "type": "varchar",
        "nullable": false,
        "description": "Invoice status"
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
        "description": "invoiceNumber, totalAmount, sentAt, updatedAt"
      }
    ],
    "primaryKey": [
      "invoice_id"
    ],
    "indexes": [
      {
        "indexName": "idx_invoice_project_id",
        "columns": [
          "project_id"
        ],
        "unique": false
      },
      {
        "indexName": "idx_invoice_client_id",
        "columns": [
          "client_id"
        ],
        "unique": false
      },
      {
        "indexName": "idx_invoice_status",
        "columns": [
          "status"
        ],
        "unique": false
      },
      {
        "indexName": "idx_invoice_created_at",
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

export default invoiceTableDefinition;

export const pipeline = [
  {
    "id": "invoice__persistenceTable",
    "type": "persistenceTable",
    "outputPath": "_102045_/l1/buildFlowFsm/layer_1_external/adapters/persistence/invoice.ts",
    "defPath": "_102045_/l1/buildFlowFsm/layer_1_external/adapters/persistence/invoice.defs.ts",
    "dependsFiles": [
      "_102045_/l1/buildFlowFsm/layer_3_domain/entities/invoice.d.ts"
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
