/// <mls fileReference="_102045_/l1/buildFlowFsm/layer_2_application/ports/statusReportRepository.defs.ts" enhancement="_blank"/>

export const statusReportRepositoryPort = {
  "schemaVersion": "2026-06-26",
  "artifactType": "repositoryPort",
  "artifactId": "StatusReportRepository",
  "moduleName": "buildFlowFsm",
  "status": "draft",
  "source": {
    "agentName": "agentCbRepositoryPort",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "entityId": "StatusReport",
    "interfaceName": "IStatusReportRepository",
    "methods": [
      {
        "name": "getById",
        "returns": "StatusReport",
        "description": "Retrieve a status report by its unique identifier (includes embedded DelayRiskSuggestion)"
      },
      {
        "name": "list",
        "returns": "StatusReport[]",
        "description": "List status reports matching the given filter criteria"
      },
      {
        "name": "save",
        "returns": "void",
        "description": "Persist or update the status report aggregate with its embedded DelayRiskSuggestion"
      },
      {
        "name": "findByProject",
        "returns": "StatusReport[]",
        "description": "Find all status reports for a given project"
      },
      {
        "name": "findByPeriod",
        "returns": "StatusReport[]",
        "description": "Find status reports within a reporting period"
      },
      {
        "name": "findLatestByProject",
        "returns": "StatusReport",
        "description": "Find the most recent status report for a project"
      }
    ]
  }
} as const;

export default statusReportRepositoryPort;

export const pipeline = [
  {
    "id": "statusReportRepository__repositoryPort",
    "type": "repositoryPort",
    "outputPath": "_102045_/l1/buildFlowFsm/layer_2_application/ports/statusReportRepository.ts",
    "defPath": "_102045_/l1/buildFlowFsm/layer_2_application/ports/statusReportRepository.defs.ts",
    "dependsFiles": [
      "_102045_/l1/buildFlowFsm/layer_3_domain/entities/statusReport.d.ts"
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
