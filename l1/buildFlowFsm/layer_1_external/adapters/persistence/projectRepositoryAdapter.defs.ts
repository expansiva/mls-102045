/// <mls fileReference="_102045_/l1/buildFlowFsm/layer_1_external/adapters/persistence/projectRepositoryAdapter.defs.ts" enhancement="_blank"/>

export const projectRepositoryAdapter = {
  "schemaVersion": "2026-06-26",
  "artifactType": "repositoryAdapter",
  "artifactId": "ProjectRepositoryAdapter",
  "moduleName": "buildFlowFsm",
  "status": "draft",
  "source": {
    "agentName": "agentCbRepositoryAdapter",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "entityId": "Project",
    "className": "ProjectRepositoryAdapter",
    "portRef": "IProjectRepository",
    "tableRef": "projects",
    "mdmReads": [
      "Client"
    ],
    "notes": [
      "Columns: project_id, client_id, status, created_at. Details JSONB holds name, siteAddress, budget, startDate, endDate, holdReason, closedAt, cancelledAt, cancellationReason, updatedAt.",
      "clientId is a real column; Client aggregate resolved via ctx.mdm.collection.getMany/hydrateMany (never ctx.mdm.entity.get in a loop). Collect clientIds from rows, bulk-load once.",
      "toRow: map domain fields to columns + pack detailsFields into details JSONB. fromRow: unpack columns + parse details JSONB, then hydrate Client via ctx.mdm.collection.getMany([clientIds])."
    ]
  }
} as const;

export default projectRepositoryAdapter;

export const pipeline = [
  {
    "id": "projectRepositoryAdapter__repositoryAdapter",
    "type": "repositoryAdapter",
    "outputPath": "_102045_/l1/buildFlowFsm/layer_1_external/adapters/persistence/projectRepositoryAdapter.ts",
    "defPath": "_102045_/l1/buildFlowFsm/layer_1_external/adapters/persistence/projectRepositoryAdapter.defs.ts",
    "dependsFiles": [
      "_102045_/l1/buildFlowFsm/layer_2_application/ports/projectRepository.d.ts",
      "_102045_/l1/buildFlowFsm/layer_1_external/adapters/persistence/project.d.ts",
      "_102045_/l1/buildFlowFsm/layer_3_domain/entities/project.d.ts"
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
