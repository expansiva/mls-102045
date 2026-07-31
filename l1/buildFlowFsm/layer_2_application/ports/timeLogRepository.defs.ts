/// <mls fileReference="_102045_/l1/buildFlowFsm/layer_2_application/ports/timeLogRepository.defs.ts" enhancement="_blank"/>

export const timeLogRepositoryPort = {
  "schemaVersion": "2026-06-26",
  "artifactType": "repositoryPort",
  "artifactId": "TimeLogRepository",
  "moduleName": "buildFlowFsm",
  "status": "draft",
  "source": {
    "agentName": "agentCbRepositoryPort",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "entityId": "TimeLog",
    "interfaceName": "ITimeLogRepository",
    "methods": [
      {
        "name": "append",
        "returns": "void",
        "description": "Append a new time log event record (append-only, no update or delete)"
      },
      {
        "name": "listByWorkTaskId",
        "returns": "TimeLog[]",
        "description": "List all time log events for a given work task"
      },
      {
        "name": "listByPeriod",
        "returns": "TimeLog[]",
        "description": "List time log events within a date range"
      },
      {
        "name": "listByUserId",
        "returns": "TimeLog[]",
        "description": "List time log events for a given user within a date range"
      }
    ]
  }
} as const;

export default timeLogRepositoryPort;

export const pipeline = [
  {
    "id": "timeLogRepository__repositoryPort",
    "type": "repositoryPort",
    "outputPath": "_102045_/l1/buildFlowFsm/layer_2_application/ports/timeLogRepository.ts",
    "defPath": "_102045_/l1/buildFlowFsm/layer_2_application/ports/timeLogRepository.defs.ts",
    "dependsFiles": [
      "_102045_/l1/buildFlowFsm/layer_3_domain/entities/timeLog.d.ts"
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
