/// <mls fileReference="_102045_/l1/buildFlowFsm/layer_1_external/adapters/persistence/statusReportRepositoryAdapter.defs.ts" enhancement="_blank"/>

export const statusReportRepositoryAdapter = {
  "schemaVersion": "2026-06-26",
  "artifactType": "repositoryAdapter",
  "artifactId": "StatusReportRepositoryAdapter",
  "moduleName": "buildFlowFsm",
  "status": "draft",
  "source": {
    "agentName": "agentCbRepositoryAdapter",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "entityId": "StatusReport",
    "className": "StatusReportRepositoryAdapter",
    "portRef": "IStatusReportRepository",
    "tableRef": "status_reports",
    "mdmReads": [],
    "notes": [
      "Columns: status_report_id, project_id, status, created_at. Details JSONB holds reportPeriodStart, reportPeriodEnd, summary, tasksOverview, timeLogsOverview, materialsOverview, delayRiskAssessment (embedded DelayRiskSuggestion), pmNotes, generatedAt, reviewedAt, sharedAt, updatedAt.",
      "Embedded member DelayRiskSuggestion is serialized inside details.delayRiskAssessment as a nested object. No MDM refs."
    ]
  }
} as const;

export default statusReportRepositoryAdapter;

export const pipeline = [
  {
    "id": "statusReportRepositoryAdapter__repositoryAdapter",
    "type": "repositoryAdapter",
    "outputPath": "_102045_/l1/buildFlowFsm/layer_1_external/adapters/persistence/statusReportRepositoryAdapter.ts",
    "defPath": "_102045_/l1/buildFlowFsm/layer_1_external/adapters/persistence/statusReportRepositoryAdapter.defs.ts",
    "dependsFiles": [
      "_102045_/l1/buildFlowFsm/layer_2_application/ports/statusReportRepository.d.ts",
      "_102045_/l1/buildFlowFsm/layer_1_external/adapters/persistence/statusReport.d.ts",
      "_102045_/l1/buildFlowFsm/layer_3_domain/entities/statusReport.d.ts"
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
