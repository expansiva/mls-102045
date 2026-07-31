/// <mls fileReference="_102045_/l1/buildFlowFsm/layer_1_external/adapters/persistence/materialUsageRepositoryAdapter.defs.ts" enhancement="_blank"/>

export const materialUsageRepositoryAdapter = {
  "schemaVersion": "2026-06-26",
  "artifactType": "repositoryAdapter",
  "artifactId": "MaterialUsageRepositoryAdapter",
  "moduleName": "buildFlowFsm",
  "status": "draft",
  "source": {
    "agentName": "agentCbRepositoryAdapter",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "entityId": "MaterialUsage",
    "className": "MaterialUsageRepositoryAdapter",
    "portRef": "IMaterialUsageRepository",
    "tableRef": "material_usages",
    "mdmReads": [],
    "notes": [
      "Append-only event adapter. Columns: material_usage_id, project_id, status, unit, created_at. Details JSONB holds materialName, quantity, unitCost, costCode, usageDate, recordedBy, voidedAt, voidReason.",
      "Implements append(insert one row, no update/delete) + read finders. Voiding is done by appending a new row with status=voided and details.voidedAt/voidReason, not by updating existing rows.",
      "No MDM refs. toRow maps columns + details JSONB. fromRow unpacks columns + details JSONB."
    ]
  }
} as const;

export default materialUsageRepositoryAdapter;

export const pipeline = [
  {
    "id": "materialUsageRepositoryAdapter__repositoryAdapter",
    "type": "repositoryAdapter",
    "outputPath": "_102045_/l1/buildFlowFsm/layer_1_external/adapters/persistence/materialUsageRepositoryAdapter.ts",
    "defPath": "_102045_/l1/buildFlowFsm/layer_1_external/adapters/persistence/materialUsageRepositoryAdapter.defs.ts",
    "dependsFiles": [
      "_102045_/l1/buildFlowFsm/layer_2_application/ports/materialUsageRepository.d.ts",
      "_102045_/l1/buildFlowFsm/layer_1_external/adapters/persistence/materialUsage.d.ts",
      "_102045_/l1/buildFlowFsm/layer_3_domain/entities/materialUsage.d.ts"
    ],
    "dependsOn": [],
    "skills": [
      "_102021_/l2/agentChangeBackend/skills/architecture.md",
      "_102021_/l2/agentChangeBackend/skills/repositoryAdapter.md",
      "_102034_.d.ts"
    ],
    "agent": "agentCbMaterialize"
  }
] as const;
