/// <mls fileReference="_102045_/l1/buildFlowFsm/layer_2_application/usecases/updateChangeOrderStatus.defs.ts" enhancement="_blank"/>

export const updateChangeOrderStatusUsecase = {
  "schemaVersion": "2026-06-26",
  "artifactType": "usecase",
  "artifactId": "updateChangeOrderStatus",
  "moduleName": "buildFlowFsm",
  "status": "draft",
  "source": {
    "agentName": "agentCbUsecase",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "usecaseId": "updateChangeOrderStatus",
    "ports": [
      "ChangeOrder",
      "Project",
      "MaterialUsage"
    ],
    "functions": [
      {
        "functionName": "updateChangeOrderStatus",
        "inputTypeName": "UpdateChangeOrderStatusInput",
        "outputTypeName": "UpdateChangeOrderStatusOutput",
        "input": [
          {
            "name": "changeOrderId",
            "type": "string",
            "required": true,
            "ofEntity": "ChangeOrder",
            "fieldRef": "ChangeOrder.changeOrderId",
            "description": "Identifier of the change order whose status is being updated"
          },
          {
            "name": "status",
            "type": "string",
            "required": true,
            "ofEntity": "ChangeOrder",
            "fieldRef": "ChangeOrder.status",
            "description": "New lifecycle status to apply: approved or rejected (or pendingReview from draft)"
          },
          {
            "name": "rejectionReason",
            "type": "string",
            "required": false,
            "ofEntity": "ChangeOrder",
            "fieldRef": "ChangeOrder.rejectionReason",
            "description": "Reason recorded when the change order is rejected during review"
          }
        ],
        "output": [
          {
            "name": "changeOrderId",
            "type": "string",
            "required": true,
            "ofEntity": "ChangeOrder"
          },
          {
            "name": "projectId",
            "type": "string",
            "required": true,
            "ofEntity": "ChangeOrder"
          },
          {
            "name": "title",
            "type": "string",
            "required": true,
            "ofEntity": "ChangeOrder"
          },
          {
            "name": "status",
            "type": "string",
            "required": true,
            "ofEntity": "ChangeOrder"
          },
          {
            "name": "costAdjustment",
            "type": "number",
            "required": true,
            "ofEntity": "ChangeOrder"
          },
          {
            "name": "scheduleAdjustmentDays",
            "type": "number",
            "required": false,
            "ofEntity": "ChangeOrder"
          },
          {
            "name": "rejectionReason",
            "type": "string",
            "required": false,
            "ofEntity": "ChangeOrder"
          },
          {
            "name": "approvedAt",
            "type": "string",
            "required": false,
            "ofEntity": "ChangeOrder"
          },
          {
            "name": "rejectedAt",
            "type": "string",
            "required": false,
            "ofEntity": "ChangeOrder"
          },
          {
            "name": "updatedAt",
            "type": "string",
            "required": true,
            "ofEntity": "ChangeOrder"
          }
        ],
        "ports": [
          "ChangeOrder",
          "Project"
        ],
        "rulesApplied": [
          "operationsRequireActiveProject",
          "onlyApprovedChangeOrdersAffectCosting",
          "jobCostDerivation"
        ],
        "transactional": true,
        "steps": [
          "1. Load the ChangeOrder by changeOrderId via ChangeOrder port (getById). If not found, throw a not-found validation error.",
          "2. Load the parent Project by changeOrder.projectId via Project port (getById).",
          "3. Apply rule 'operationsRequireActiveProject': verify project.status === 'active'. If the project is not active (registered, onHold, closed, cancelled), throw a validation error with rule id 'operationsRequireActiveProject' and a message that the change order must belong to an active project.",
          "4. Validate the requested status transition: allowed target statuses are 'approved', 'rejected', and 'pendingReview'. The current status must permit the transition (draft -> pendingReview/approved/rejected; pendingReview -> approved/rejected). If the transition is invalid, throw a validation error.",
          "5. If status === 'rejected': require rejectionReason to be non-empty (rule: onlyApprovedChangeOrdersAffectCosting implies rejected orders must carry a reason). Set rejectedAt = ctx.clock.now() and clear approvedAt. Set rejectionReason on the entity.",
          "6. If status === 'approved': set approvedAt = ctx.clock.now() and clear rejectedAt and rejectionReason. Apply rule 'onlyApprovedChangeOrdersAffectCosting' and 'jobCostDerivation': the costAdjustment and scheduleAdjustmentDays of this change order now become eligible for job cost derivation — no separate costing write is performed here, but the approved status is the gate that makes downstream costing/billing include this change order.",
          "7. If status === 'pendingReview': clear approvedAt, rejectedAt, and rejectionReason (reset to review state).",
          "8. Set updatedAt = ctx.clock.now() on the change order.",
          "9. Save the updated ChangeOrder via ChangeOrder port (update) inside the transaction.",
          "10. Return the updated change order fields: changeOrderId, projectId, title, status, costAdjustment, scheduleAdjustmentDays, rejectionReason, approvedAt, rejectedAt, updatedAt."
        ],
        "outputShape": {
          "kind": "object",
          "fields": [
            {
              "name": "changeOrderId",
              "type": "string",
              "required": true,
              "fieldRef": "ChangeOrder.changeOrderId"
            },
            {
              "name": "projectId",
              "type": "string",
              "required": true,
              "fieldRef": "ChangeOrder.projectId"
            },
            {
              "name": "title",
              "type": "string",
              "required": true,
              "fieldRef": "ChangeOrder.title"
            },
            {
              "name": "status",
              "type": "string",
              "required": true,
              "fieldRef": "ChangeOrder.status"
            },
            {
              "name": "costAdjustment",
              "type": "number",
              "required": true,
              "fieldRef": "ChangeOrder.costAdjustment"
            },
            {
              "name": "scheduleAdjustmentDays",
              "type": "number",
              "required": false,
              "fieldRef": "ChangeOrder.scheduleAdjustmentDays"
            },
            {
              "name": "rejectionReason",
              "type": "string",
              "required": false,
              "fieldRef": "ChangeOrder.rejectionReason"
            },
            {
              "name": "approvedAt",
              "type": "string",
              "required": false,
              "fieldRef": "ChangeOrder.approvedAt"
            },
            {
              "name": "rejectedAt",
              "type": "string",
              "required": false,
              "fieldRef": "ChangeOrder.rejectedAt"
            },
            {
              "name": "updatedAt",
              "type": "string",
              "required": true,
              "fieldRef": "ChangeOrder.updatedAt"
            }
          ]
        }
      }
    ],
    "mdmRefs": []
  }
} as const;

export default updateChangeOrderStatusUsecase;

export const pipeline = [
  {
    "id": "updateChangeOrderStatus__applicationUsecase",
    "type": "applicationUsecase",
    "outputPath": "_102045_/l1/buildFlowFsm/layer_2_application/usecases/updateChangeOrderStatus.ts",
    "defPath": "_102045_/l1/buildFlowFsm/layer_2_application/usecases/updateChangeOrderStatus.defs.ts",
    "dependsFiles": [
      "_102045_/l1/buildFlowFsm/layer_2_application/ports/changeOrderRepository.d.ts",
      "_102045_/l1/buildFlowFsm/layer_2_application/ports/projectRepository.d.ts",
      "_102045_/l1/buildFlowFsm/layer_2_application/ports/materialUsageRepository.d.ts",
      "_102045_/l1/buildFlowFsm/layer_3_domain/entities/changeOrder.d.ts",
      "_102045_/l1/buildFlowFsm/layer_3_domain/entities/project.d.ts",
      "_102045_/l1/buildFlowFsm/layer_3_domain/entities/materialUsage.d.ts"
    ],
    "dependsOn": [],
    "skills": [
      "_102021_/l2/agentChangeBackend/skills/architecture.md",
      "_102021_/l2/agentChangeBackend/skills/applicationUsecase.md",
      "_102034_.d.ts"
    ],
    "agent": "agentCbMaterialize"
  }
] as const;
