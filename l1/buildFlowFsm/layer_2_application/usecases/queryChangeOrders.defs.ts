/// <mls fileReference="_102045_/l1/buildFlowFsm/layer_2_application/usecases/queryChangeOrders.defs.ts" enhancement="_blank"/>

export const queryChangeOrdersUsecase = {
  "schemaVersion": "2026-06-26",
  "artifactType": "usecase",
  "artifactId": "queryChangeOrders",
  "moduleName": "buildFlowFsm",
  "status": "draft",
  "source": {
    "agentName": "agentCbUsecase",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "usecaseId": "queryChangeOrders",
    "ports": [
      "ChangeOrder",
      "Project",
      "MaterialUsage"
    ],
    "functions": [
      {
        "functionName": "queryChangeOrders",
        "inputTypeName": "QueryChangeOrdersInput",
        "outputTypeName": "QueryChangeOrdersOutput",
        "input": [
          {
            "name": "projectId",
            "type": "string",
            "required": true,
            "ofEntity": "ChangeOrder",
            "description": "The project whose change orders are listed."
          },
          {
            "name": "status",
            "type": "string",
            "required": false,
            "ofEntity": "ChangeOrder",
            "description": "Optional filter by change-order lifecycle status (draft, pendingReview, approved, rejected)."
          },
          {
            "name": "impactType",
            "type": "string",
            "required": false,
            "ofEntity": "ChangeOrder",
            "description": "Optional filter by primary impact category (scope, cost, schedule)."
          },
          {
            "name": "page",
            "type": "number",
            "required": false,
            "description": "Optional page number for paginated results."
          },
          {
            "name": "pageSize",
            "type": "number",
            "required": false,
            "description": "Optional page size for paginated results."
          }
        ],
        "output": [
          {
            "name": "changeOrders",
            "type": "array",
            "required": true
          },
          {
            "name": "total",
            "type": "number",
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
          "1. Validate that projectId is provided; throw a validation error if missing.",
          "2. Build a filter object: { projectId } as the mandatory scope filter; add status and impactType to the filter only when they are provided by the user.",
          "3. Call the ChangeOrder port list method with the filter, sorted by createdAt descending.",
          "4. If page and pageSize are both provided, apply pagination: offset = (page - 1) * pageSize, limit = pageSize. Otherwise return all matching records.",
          "5. Map each ChangeOrder record to the output projection: changeOrderId, projectId, title, description, impactType, costAdjustment, scheduleAdjustmentDays, status, rejectionReason, approvedAt, rejectedAt, createdAt, updatedAt.",
          "6. Compute total as the count of all matching records (before pagination slice).",
          "7. Rule onlyApprovedChangeOrdersAffectCosting: the status field is always included in the output so downstream job-costing and billing consumers can distinguish approved change orders (status === 'approved') from non-approved ones. Only approved change orders may affect costing — this is enforced by downstream consumers reading the status field returned here.",
          "8. Rule jobCostDerivation: the costAdjustment field is always included for each change order so downstream job-cost derivation can sum costAdjustment across only approved change orders. This query does not compute the derived job cost; it provides the raw data (status + costAdjustment) needed for that derivation.",
          "9. Return { changeOrders, total }."
        ],
        "outputShape": {
          "kind": "paginated",
          "fields": [
            {
              "name": "changeOrders",
              "type": "array",
              "required": true,
              "item": {
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
                  }
                ]
              }
            },
            {
              "name": "total",
              "type": "number",
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

export default queryChangeOrdersUsecase;

export const pipeline = [
  {
    "id": "queryChangeOrders__applicationUsecase",
    "type": "applicationUsecase",
    "outputPath": "_102045_/l1/buildFlowFsm/layer_2_application/usecases/queryChangeOrders.ts",
    "defPath": "_102045_/l1/buildFlowFsm/layer_2_application/usecases/queryChangeOrders.defs.ts",
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
