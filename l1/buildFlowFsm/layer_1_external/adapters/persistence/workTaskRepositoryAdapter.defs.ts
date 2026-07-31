/// <mls fileReference="_102045_/l1/buildFlowFsm/layer_1_external/adapters/persistence/workTaskRepositoryAdapter.defs.ts" enhancement="_blank"/>

export const workTaskRepositoryAdapter = {
  "schemaVersion": "2026-06-26",
  "artifactType": "repositoryAdapter",
  "artifactId": "WorkTaskRepositoryAdapter",
  "moduleName": "buildFlowFsm",
  "status": "draft",
  "source": {
    "agentName": "agentCbRepositoryAdapter",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "entityId": "WorkTask",
    "className": "WorkTaskRepositoryAdapter",
    "portRef": "IWorkTaskRepository",
    "tableRef": "work_tasks",
    "mdmReads": [],
    "notes": [
      "Columns: work_task_id, project_id, assigned_worker_id, status, created_at. Details JSONB holds title, description, dueDate, completedAt, cancelledAt, cancellationReason, updatedAt.",
      "No MDM refs. toRow/fromRow map columns + details JSONB only.",
      "project_id and assigned_worker_id are FK columns stored locally (module tables via ctx.data.moduleData)."
    ]
  }
} as const;

export default workTaskRepositoryAdapter;

export const pipeline = [
  {
    "id": "workTaskRepositoryAdapter__repositoryAdapter",
    "type": "repositoryAdapter",
    "outputPath": "_102045_/l1/buildFlowFsm/layer_1_external/adapters/persistence/workTaskRepositoryAdapter.ts",
    "defPath": "_102045_/l1/buildFlowFsm/layer_1_external/adapters/persistence/workTaskRepositoryAdapter.defs.ts",
    "dependsFiles": [
      "_102045_/l1/buildFlowFsm/layer_2_application/ports/workTaskRepository.d.ts",
      "_102045_/l1/buildFlowFsm/layer_1_external/adapters/persistence/workTask.d.ts",
      "_102045_/l1/buildFlowFsm/layer_3_domain/entities/workTask.d.ts"
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
