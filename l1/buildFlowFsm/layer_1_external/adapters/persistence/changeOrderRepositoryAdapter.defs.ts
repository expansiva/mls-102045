/// <mls fileReference="_102045_/l1/buildFlowFsm/layer_1_external/adapters/persistence/changeOrderRepositoryAdapter.defs.ts" enhancement="_blank"/>

export const changeOrderRepositoryAdapter = {
  "schemaVersion": "2026-06-26",
  "artifactType": "repositoryAdapter",
  "artifactId": "ChangeOrderRepositoryAdapter",
  "moduleName": "buildFlowFsm",
  "status": "draft",
  "source": {
    "agentName": "agentCbRepositoryAdapter",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "entityId": "ChangeOrder",
    "className": "ChangeOrderRepositoryAdapter",
    "portRef": "IChangeOrderRepository",
    "tableRef": "change_orders",
    "mdmReads": [],
    "notes": [
      "Columns: change_order_id, project_id, impact_type, status, created_at. Details JSONB holds title, description, costAdjustment, scheduleAdjustmentDays, rejectionReason, approvedAt, rejectedAt, updatedAt.",
      "No MDM refs. toRow/fromRow map columns + details JSONB only."
    ]
  }
} as const;

export default changeOrderRepositoryAdapter;

export const pipeline = [
  {
    "id": "changeOrderRepositoryAdapter__repositoryAdapter",
    "type": "repositoryAdapter",
    "outputPath": "_102045_/l1/buildFlowFsm/layer_1_external/adapters/persistence/changeOrderRepositoryAdapter.ts",
    "defPath": "_102045_/l1/buildFlowFsm/layer_1_external/adapters/persistence/changeOrderRepositoryAdapter.defs.ts",
    "dependsFiles": [
      "_102045_/l1/buildFlowFsm/layer_2_application/ports/changeOrderRepository.d.ts",
      "_102045_/l1/buildFlowFsm/layer_1_external/adapters/persistence/changeOrder.d.ts",
      "_102045_/l1/buildFlowFsm/layer_3_domain/entities/changeOrder.d.ts"
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
