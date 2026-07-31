/// <mls fileReference="_102045_/l1/buildFlowFsm/layer_2_application/usecases/updateChangeOrder.defs.ts" enhancement="_blank"/>

export const updateChangeOrderUsecase = {
  "schemaVersion": "2026-06-26",
  "artifactType": "usecase",
  "artifactId": "updateChangeOrder",
  "moduleName": "buildFlowFsm",
  "status": "draft",
  "source": {
    "agentName": "agentCbUsecase",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "usecaseId": "updateChangeOrder",
    "ports": [
      "ChangeOrder",
      "Project",
      "MaterialUsage"
    ],
    "functions": [
      {
        "functionName": "updateChangeOrder",
        "inputTypeName": "UpdateChangeOrderInput",
        "outputTypeName": "UpdateChangeOrderOutput",
        "input": [
          {
            "name": "changeOrderId",
            "type": "string",
            "required": true,
            "ofEntity": "ChangeOrder",
            "fieldRef": "ChangeOrder.changeOrderId",
            "description": "Identifier of the change order being updated"
          },
          {
            "name": "title",
            "type": "string",
            "required": true,
            "ofEntity": "ChangeOrder",
            "fieldRef": "ChangeOrder.title",
            "description": "Revised short summary title of the change order"
          },
          {
            "name": "description",
            "type": "string",
            "required": true,
            "ofEntity": "ChangeOrder",
            "fieldRef": "ChangeOrder.description",
            "description": "Revised detailed description of the scope, cost, or schedule impact"
          },
          {
            "name": "impactType",
            "type": "string",
            "required": true,
            "ofEntity": "ChangeOrder",
            "fieldRef": "ChangeOrder.impactType",
            "description": "Revised primary impact category: scope, cost, or schedule"
          },
          {
            "name": "costAdjustment",
            "type": "number",
            "required": true,
            "ofEntity": "ChangeOrder",
            "fieldRef": "ChangeOrder.costAdjustment",
            "description": "Revised monetary cost adjustment amount"
          },
          {
            "name": "scheduleAdjustmentDays",
            "type": "number",
            "required": false,
            "ofEntity": "ChangeOrder",
            "fieldRef": "ChangeOrder.scheduleAdjustmentDays",
            "description": "Revised number of days added to or removed from the project schedule"
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
            "name": "description",
            "type": "string",
            "required": true,
            "ofEntity": "ChangeOrder"
          },
          {
            "name": "impactType",
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
            "name": "status",
            "type": "string",
            "required": true,
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
          "changeOrderDescriptionRequired"
        ],
        "transactional": true,
        "steps": [
          "1. Load the ChangeOrder by changeOrderId via the ChangeOrder port (getById). If not found, reject with a not-found error.",
          "2. Validate the loaded change order has status 'draft'. If the status is not 'draft' (e.g. pendingReview, approved, or rejected), reject the update with a validation error indicating only draft change orders can be edited.",
          "3. Load the referenced Project by changeOrder.projectId via the Project port (getById). If not found, reject with a not-found error.",
          "4. Apply rule 'operationsRequireActiveProject': validate that the project status is 'active'. If the project status is not 'active' (registered, onHold, closed, or cancelled), reject the update with a validation error referencing the rule id.",
          "5. Apply rule 'changeOrderDescriptionRequired': validate that the submitted description is non-empty after trimming whitespace. If empty or whitespace-only, reject with a validation error referencing the rule id.",
          "6. Validate that impactType is one of the allowed enum values: 'scope', 'cost', 'schedule'. If invalid, reject with a validation error.",
          "7. Apply the mutable field updates onto the loaded ChangeOrder: set title, description, impactType, costAdjustment, and scheduleAdjustmentDays (if provided; otherwise clear/leave unset). Do NOT change the status field — it remains 'draft'.",
          "8. Set updatedAt to the current server timestamp via ctx.clock.now().",
          "9. Save the updated ChangeOrder via the ChangeOrder port inside a single transaction (ctx.data transaction wrapper).",
          "10. Return the updated change order fields: changeOrderId, projectId, title, description, impactType, costAdjustment, scheduleAdjustmentDays, status (unchanged), and updatedAt."
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
              "name": "description",
              "type": "string",
              "required": true,
              "fieldRef": "ChangeOrder.description"
            },
            {
              "name": "impactType",
              "type": "string",
              "required": true,
              "fieldRef": "ChangeOrder.impactType"
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
              "name": "status",
              "type": "string",
              "required": true,
              "fieldRef": "ChangeOrder.status"
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

export default updateChangeOrderUsecase;

export const pipeline = [
  {
    "id": "updateChangeOrder__applicationUsecase",
    "type": "applicationUsecase",
    "outputPath": "_102045_/l1/buildFlowFsm/layer_2_application/usecases/updateChangeOrder.ts",
    "defPath": "_102045_/l1/buildFlowFsm/layer_2_application/usecases/updateChangeOrder.defs.ts",
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
