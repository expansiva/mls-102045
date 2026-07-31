/// <mls fileReference="_102045_/l1/buildFlowFsm/layer_2_application/usecases/viewChangeOrder.defs.ts" enhancement="_blank"/>

export const viewChangeOrderUsecase = {
  "schemaVersion": "2026-06-26",
  "artifactType": "usecase",
  "artifactId": "viewChangeOrder",
  "moduleName": "buildFlowFsm",
  "status": "draft",
  "source": {
    "agentName": "agentCbUsecase",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "usecaseId": "viewChangeOrder",
    "ports": [
      "ChangeOrder",
      "Project",
      "MaterialUsage"
    ],
    "functions": [
      {
        "functionName": "viewChangeOrder",
        "inputTypeName": "ViewChangeOrderInput",
        "outputTypeName": "ViewChangeOrderOutput",
        "input": [
          {
            "name": "changeOrderId",
            "type": "string",
            "required": true,
            "ofEntity": "ChangeOrder",
            "fieldRef": "ChangeOrder.changeOrderId",
            "description": "Identifier of the change order to display"
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
            "name": "createdAt",
            "type": "string",
            "required": true,
            "ofEntity": "ChangeOrder"
          },
          {
            "name": "updatedAt",
            "type": "string",
            "required": true,
            "ofEntity": "ChangeOrder"
          },
          {
            "name": "projectName",
            "type": "string",
            "required": true,
            "ofEntity": "Project"
          },
          {
            "name": "projectBudget",
            "type": "number",
            "required": true,
            "ofEntity": "Project"
          },
          {
            "name": "affectsJobCosting",
            "type": "boolean",
            "required": true
          }
        ],
        "ports": [
          "ChangeOrder",
          "Project"
        ],
        "rulesApplied": [
          "onlyApprovedChangeOrdersAffectCosting",
          "jobCostDerivation"
        ],
        "transactional": false,
        "steps": [
          "1. Load the ChangeOrder aggregate by changeOrderId via the ChangeOrder port (getById). If not found, return a not-found error.",
          "2. From the loaded ChangeOrder, extract projectId and load the parent Project aggregate via the Project port (getById). If the Project is not found, return a not-found error.",
          "3. Apply rule onlyApprovedChangeOrdersAffectCosting: compute affectsJobCosting = (changeOrder.status === 'approved'). For statuses draft, pendingReview, or rejected, affectsJobCosting is false.",
          "4. Apply rule jobCostDerivation: the costAdjustment value is surfaced alongside the project budget so the caller can compare the adjustment against the project budget. No mutation is performed; this is a read-only derivation for cost-impact review.",
          "5. Assemble the output object with all ChangeOrder fields (changeOrderId, projectId, title, description, impactType, costAdjustment, scheduleAdjustmentDays, status, rejectionReason, approvedAt, rejectedAt, createdAt, updatedAt), the joined Project fields (projectName from Project.name, projectBudget from Project.budget), and the computed affectsJobCosting boolean.",
          "6. Return the assembled object. Optional fields (scheduleAdjustmentDays, rejectionReason, approvedAt, rejectedAt) are included only when present on the ChangeOrder."
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
              "name": "createdAt",
              "type": "string",
              "required": true,
              "fieldRef": "ChangeOrder.createdAt"
            },
            {
              "name": "updatedAt",
              "type": "string",
              "required": true,
              "fieldRef": "ChangeOrder.updatedAt"
            },
            {
              "name": "projectName",
              "type": "string",
              "required": true,
              "fieldRef": "Project.name"
            },
            {
              "name": "projectBudget",
              "type": "number",
              "required": true,
              "fieldRef": "Project.budget"
            },
            {
              "name": "affectsJobCosting",
              "type": "boolean",
              "required": true
            }
          ]
        }
      }
    ],
    "rulesApplied": [
      "onlyApprovedChangeOrdersAffectCosting",
      "jobCostDerivation"
    ],
    "mdmRefs": []
  }
} as const;

export default viewChangeOrderUsecase;

export const pipeline = [
  {
    "id": "viewChangeOrder__applicationUsecase",
    "type": "applicationUsecase",
    "outputPath": "_102045_/l1/buildFlowFsm/layer_2_application/usecases/viewChangeOrder.ts",
    "defPath": "_102045_/l1/buildFlowFsm/layer_2_application/usecases/viewChangeOrder.defs.ts",
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
    "rulesApplied": [
      "onlyApprovedChangeOrdersAffectCosting",
      "jobCostDerivation"
    ],
    "agent": "agentCbMaterialize"
  }
] as const;
