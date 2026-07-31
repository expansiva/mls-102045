/// <mls fileReference="_102045_/l1/buildFlowFsm/layer_2_application/ports/workTaskRepository.defs.ts" enhancement="_blank"/>

export const workTaskRepositoryPort = {
  "schemaVersion": "2026-06-26",
  "artifactType": "repositoryPort",
  "artifactId": "WorkTaskRepository",
  "moduleName": "buildFlowFsm",
  "status": "draft",
  "source": {
    "agentName": "agentCbRepositoryPort",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "entityId": "WorkTask",
    "interfaceName": "IWorkTaskRepository",
    "methods": [
      {
        "name": "getById",
        "returns": "WorkTask",
        "description": "Retrieve a work task by its unique identifier"
      },
      {
        "name": "list",
        "returns": "WorkTask[]",
        "description": "List work tasks matching the given filter criteria"
      },
      {
        "name": "save",
        "returns": "void",
        "description": "Persist or update the work task aggregate"
      },
      {
        "name": "findByProject",
        "returns": "WorkTask[]",
        "description": "Find all work tasks belonging to a project"
      },
      {
        "name": "findByAssignee",
        "returns": "WorkTask[]",
        "description": "Find all work tasks assigned to a given team member"
      },
      {
        "name": "findByStatus",
        "returns": "WorkTask[]",
        "description": "Find work tasks by their current status"
      }
    ]
  }
} as const;

export default workTaskRepositoryPort;

export const pipeline = [
  {
    "id": "workTaskRepository__repositoryPort",
    "type": "repositoryPort",
    "outputPath": "_102045_/l1/buildFlowFsm/layer_2_application/ports/workTaskRepository.ts",
    "defPath": "_102045_/l1/buildFlowFsm/layer_2_application/ports/workTaskRepository.defs.ts",
    "dependsFiles": [
      "_102045_/l1/buildFlowFsm/layer_3_domain/entities/workTask.d.ts"
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
