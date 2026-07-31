/// <mls fileReference="_102045_/l1/buildFlowFsm/layer_1_external/adapters/persistence/billingSummaryRepositoryAdapter.defs.ts" enhancement="_blank"/>

export const billingSummaryRepositoryAdapter = {
  "schemaVersion": "2026-06-26",
  "artifactType": "repositoryAdapter",
  "artifactId": "BillingSummaryRepositoryAdapter",
  "moduleName": "buildFlowFsm",
  "status": "draft",
  "source": {
    "agentName": "agentCbRepositoryAdapter",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "entityId": "BillingSummary",
    "className": "BillingSummaryRepositoryAdapter",
    "portRef": "IBillingSummaryRepository",
    "tableRef": "billing_summaries",
    "mdmReads": [],
    "notes": [
      "Columns: billing_summary_id, project_id, status, created_at. Details JSONB holds periodStart, periodEnd, laborCost, materialCost, changeOrderCost, totalCost, sharedAt, updatedAt.",
      "No MDM refs. toRow/fromRow map columns + details JSONB only."
    ]
  }
} as const;

export default billingSummaryRepositoryAdapter;

export const pipeline = [
  {
    "id": "billingSummaryRepositoryAdapter__repositoryAdapter",
    "type": "repositoryAdapter",
    "outputPath": "_102045_/l1/buildFlowFsm/layer_1_external/adapters/persistence/billingSummaryRepositoryAdapter.ts",
    "defPath": "_102045_/l1/buildFlowFsm/layer_1_external/adapters/persistence/billingSummaryRepositoryAdapter.defs.ts",
    "dependsFiles": [
      "_102045_/l1/buildFlowFsm/layer_2_application/ports/billingSummaryRepository.d.ts",
      "_102045_/l1/buildFlowFsm/layer_1_external/adapters/persistence/billingSummary.d.ts",
      "_102045_/l1/buildFlowFsm/layer_3_domain/entities/billingSummary.d.ts"
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
