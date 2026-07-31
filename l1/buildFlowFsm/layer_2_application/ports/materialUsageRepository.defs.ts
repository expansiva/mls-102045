/// <mls fileReference="_102045_/l1/buildFlowFsm/layer_2_application/ports/materialUsageRepository.defs.ts" enhancement="_blank"/>

export const materialUsageRepositoryPort = {
  "schemaVersion": "2026-06-26",
  "artifactType": "repositoryPort",
  "artifactId": "MaterialUsageRepository",
  "moduleName": "buildFlowFsm",
  "status": "draft",
  "source": {
    "agentName": "agentCbRepositoryPort",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "entityId": "MaterialUsage",
    "interfaceName": "IMaterialUsageRepository",
    "methods": [
      {
        "name": "append",
        "returns": "void",
        "description": "Append a new material usage event record (append-only, no update or delete)"
      },
      {
        "name": "listByProjectId",
        "returns": "MaterialUsage[]",
        "description": "List all material usage events for a given project"
      },
      {
        "name": "listByPeriod",
        "returns": "MaterialUsage[]",
        "description": "List material usage events within a date range"
      },
      {
        "name": "listByMaterialType",
        "returns": "MaterialUsage[]",
        "description": "List material usage events for a given material type within a project"
      }
    ]
  }
} as const;

export default materialUsageRepositoryPort;

export const pipeline = [
  {
    "id": "materialUsageRepository__repositoryPort",
    "type": "repositoryPort",
    "outputPath": "_102045_/l1/buildFlowFsm/layer_2_application/ports/materialUsageRepository.ts",
    "defPath": "_102045_/l1/buildFlowFsm/layer_2_application/ports/materialUsageRepository.defs.ts",
    "dependsFiles": [
      "_102045_/l1/buildFlowFsm/layer_3_domain/entities/materialUsage.d.ts"
    ],
    "dependsOn": [],
    "skills": [
      "_102021_/l2/agentChangeBackend/skills/architecture.md",
      "_102021_/l2/agentChangeBackend/skills/repositoryPort.md",
      "_102034_.d.ts"
    ],
    "agent": "agentCbMaterialize"
  }
] as const;
