/// <mls fileReference="_102045_/l1/buildFlowFsm/layer_2_application/ports/billingSummaryRepository.defs.ts" enhancement="_blank"/>

export const billingSummaryRepositoryPort = {
  "schemaVersion": "2026-06-26",
  "artifactType": "repositoryPort",
  "artifactId": "BillingSummaryRepository",
  "moduleName": "buildFlowFsm",
  "status": "draft",
  "source": {
    "agentName": "agentCbRepositoryPort",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "entityId": "BillingSummary",
    "interfaceName": "IBillingSummaryRepository",
    "methods": [
      {
        "name": "getById",
        "returns": "BillingSummary",
        "description": "Retrieve a billing summary by its unique identifier"
      },
      {
        "name": "list",
        "returns": "BillingSummary[]",
        "description": "List billing summaries matching the given filter criteria"
      },
      {
        "name": "save",
        "returns": "void",
        "description": "Persist or update the billing summary aggregate"
      },
      {
        "name": "findByProject",
        "returns": "BillingSummary",
        "description": "Find the billing summary for a given project"
      },
      {
        "name": "findByPeriod",
        "returns": "BillingSummary[]",
        "description": "Find billing summaries within a billing period"
      }
    ]
  }
} as const;

export default billingSummaryRepositoryPort;

export const pipeline = [
  {
    "id": "billingSummaryRepository__repositoryPort",
    "type": "repositoryPort",
    "outputPath": "_102045_/l1/buildFlowFsm/layer_2_application/ports/billingSummaryRepository.ts",
    "defPath": "_102045_/l1/buildFlowFsm/layer_2_application/ports/billingSummaryRepository.defs.ts",
    "dependsFiles": [
      "_102045_/l1/buildFlowFsm/layer_3_domain/entities/billingSummary.d.ts"
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
