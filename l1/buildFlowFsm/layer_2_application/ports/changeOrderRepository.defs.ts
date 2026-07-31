/// <mls fileReference="_102045_/l1/buildFlowFsm/layer_2_application/ports/changeOrderRepository.defs.ts" enhancement="_blank"/>

export const changeOrderRepositoryPort = {
  "schemaVersion": "2026-06-26",
  "artifactType": "repositoryPort",
  "artifactId": "ChangeOrderRepository",
  "moduleName": "buildFlowFsm",
  "status": "draft",
  "source": {
    "agentName": "agentCbRepositoryPort",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "entityId": "ChangeOrder",
    "interfaceName": "IChangeOrderRepository",
    "methods": [
      {
        "name": "getById",
        "returns": "ChangeOrder",
        "description": "Retrieve a change order by its unique identifier"
      },
      {
        "name": "list",
        "returns": "ChangeOrder[]",
        "description": "List change orders matching the given filter criteria"
      },
      {
        "name": "save",
        "returns": "void",
        "description": "Persist or update the change order aggregate"
      },
      {
        "name": "findByProject",
        "returns": "ChangeOrder[]",
        "description": "Find all change orders for a given project"
      },
      {
        "name": "findByStatus",
        "returns": "ChangeOrder[]",
        "description": "Find change orders by their approval status"
      }
    ]
  }
} as const;

export default changeOrderRepositoryPort;

export const pipeline = [
  {
    "id": "changeOrderRepository__repositoryPort",
    "type": "repositoryPort",
    "outputPath": "_102045_/l1/buildFlowFsm/layer_2_application/ports/changeOrderRepository.ts",
    "defPath": "_102045_/l1/buildFlowFsm/layer_2_application/ports/changeOrderRepository.defs.ts",
    "dependsFiles": [
      "_102045_/l1/buildFlowFsm/layer_3_domain/entities/changeOrder.d.ts"
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
