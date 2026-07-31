/// <mls fileReference="_102045_/l1/buildFlowFsm/layer_1_external/adapters/persistence/timeLogRepositoryAdapter.defs.ts" enhancement="_blank"/>

export const timeLogRepositoryAdapter = {
  "schemaVersion": "2026-06-26",
  "artifactType": "repositoryAdapter",
  "artifactId": "TimeLogRepositoryAdapter",
  "moduleName": "buildFlowFsm",
  "status": "draft",
  "source": {
    "agentName": "agentCbRepositoryAdapter",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "entityId": "TimeLog",
    "className": "TimeLogRepositoryAdapter",
    "portRef": "ITimeLogRepository",
    "tableRef": "time_logs",
    "mdmReads": [],
    "notes": [
      "Append-only event adapter. Columns: time_log_id, work_task_id, status, created_at. Details JSONB holds workerName, logDate, hoursWorked, laborCost, voidedAt, voidReason.",
      "Implements append(insert one row, no update/delete) + read finders. Voiding is done by appending a new row with status=voided and details.voidedAt/voidReason, not by updating existing rows.",
      "No MDM refs. toRow maps columns + details JSONB. fromRow unpacks columns + details JSONB."
    ]
  }
} as const;

export default timeLogRepositoryAdapter;

export const pipeline = [
  {
    "id": "timeLogRepositoryAdapter__repositoryAdapter",
    "type": "repositoryAdapter",
    "outputPath": "_102045_/l1/buildFlowFsm/layer_1_external/adapters/persistence/timeLogRepositoryAdapter.ts",
    "defPath": "_102045_/l1/buildFlowFsm/layer_1_external/adapters/persistence/timeLogRepositoryAdapter.defs.ts",
    "dependsFiles": [
      "_102045_/l1/buildFlowFsm/layer_2_application/ports/timeLogRepository.d.ts",
      "_102045_/l1/buildFlowFsm/layer_1_external/adapters/persistence/timeLog.d.ts",
      "_102045_/l1/buildFlowFsm/layer_3_domain/entities/timeLog.d.ts"
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
