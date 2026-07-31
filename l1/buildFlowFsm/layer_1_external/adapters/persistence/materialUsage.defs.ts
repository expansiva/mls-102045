/// <mls fileReference="_102045_/l1/buildFlowFsm/layer_1_external/adapters/persistence/materialUsage.defs.ts" enhancement="_blank"/>

export const materialUsageTableDefinition = {
  "schemaVersion": "2026-06-26",
  "artifactType": "table",
  "artifactId": "MaterialUsage",
  "moduleName": "buildFlowFsm",
  "status": "draft",
  "source": {
    "agentName": "agentCbPersistenceTable",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "tableId": "MaterialUsage",
    "tableName": "material_usage",
    "columns": [
      {
        "name": "material_usage_id",
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
        "description": "Material usage status"
      },
      {
        "name": "unit",
        "type": "varchar",
        "nullable": false,
        "description": "Unit filter"
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
        "description": "materialName, quantity, unitCost, costCode, usageDate, recordedBy, voidedAt, voidedReason"
      }
    ],
    "primaryKey": [
      "material_usage_id"
    ],
    "indexes": [
      {
        "indexName": "idx_material_usage_project_id",
        "columns": [
          "project_id"
        ],
        "unique": false
      },
      {
        "indexName": "idx_material_usage_status",
        "columns": [
          "status"
        ],
        "unique": false
      },
      {
        "indexName": "idx_material_usage_unit",
        "columns": [
          "unit"
        ],
        "unique": false
      },
      {
        "indexName": "idx_material_usage_created_at",
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

export default materialUsageTableDefinition;

export const pipeline = [
  {
    "id": "materialUsage__persistenceTable",
    "type": "persistenceTable",
    "outputPath": "_102045_/l1/buildFlowFsm/layer_1_external/adapters/persistence/materialUsage.ts",
    "defPath": "_102045_/l1/buildFlowFsm/layer_1_external/adapters/persistence/materialUsage.defs.ts",
    "dependsFiles": [
      "_102045_/l1/buildFlowFsm/layer_3_domain/entities/materialUsage.d.ts"
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
