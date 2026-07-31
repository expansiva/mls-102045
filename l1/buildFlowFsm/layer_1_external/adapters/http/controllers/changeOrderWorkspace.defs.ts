/// <mls fileReference="_102045_/l1/buildFlowFsm/layer_1_external/adapters/http/controllers/changeOrderWorkspace.defs.ts" enhancement="_blank"/>

export const changeOrderWorkspaceController = {
  "schemaVersion": "2026-06-26",
  "artifactType": "httpController",
  "artifactId": "changeOrderWorkspace",
  "moduleName": "buildFlowFsm",
  "status": "draft",
  "source": {
    "agentName": "agentCbHttpController",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "pageId": "changeOrderWorkspace",
    "controllerName": "ChangeOrderWorkspaceController",
    "ownerKind": "workspace",
    "workspaceId": "changeOrderWorkspace",
    "actors": [
      "projectManager"
    ],
    "allowedScopes": [
      "buildFlowFsm:projectManager"
    ],
    "handlers": [
      {
        "handlerName": "changeOrderWorkspaceCmdCreateChangeOrderHandler",
        "command": "cmdCreateChangeOrder",
        "bffId": "cmdCreateChangeOrder",
        "route": "buildFlowFsm.changeOrderWorkspace.cmdCreateChangeOrder",
        "kind": "command",
        "usecaseRef": "createChangeOrder",
        "usecaseRefs": [
          "createChangeOrder"
        ],
        "inputTypeName": "CreateChangeOrderInput",
        "inputContract": [
          {
            "inputId": "projectId",
            "fieldRef": "ChangeOrder.projectId",
            "required": true,
            "source": "selectedEntity",
            "description": "Identifier of the active project the change order applies to"
          },
          {
            "inputId": "title",
            "fieldRef": "ChangeOrder.title",
            "required": true,
            "source": "userInput",
            "description": "Short summary title of the change order"
          },
          {
            "inputId": "description",
            "fieldRef": "ChangeOrder.description",
            "required": true,
            "source": "userInput",
            "description": "Detailed description of the scope, cost, or schedule impact being requested"
          },
          {
            "inputId": "impactType",
            "fieldRef": "ChangeOrder.impactType",
            "required": true,
            "source": "userInput",
            "description": "Primary category of impact: scope, cost, or schedule"
          },
          {
            "inputId": "costAdjustment",
            "fieldRef": "ChangeOrder.costAdjustment",
            "required": true,
            "source": "userInput",
            "description": "Monetary amount of the cost adjustment; positive for additions, negative for deductions"
          },
          {
            "inputId": "scheduleAdjustmentDays",
            "fieldRef": "ChangeOrder.scheduleAdjustmentDays",
            "required": false,
            "source": "userInput",
            "description": "Optional number of days added to or removed from the project schedule"
          },
          {
            "inputId": "changeOrderId",
            "fieldRef": "ChangeOrder.changeOrderId",
            "required": true,
            "source": "systemDefault",
            "description": "System-generated unique identifier for the new change order"
          },
          {
            "inputId": "status",
            "fieldRef": "ChangeOrder.status",
            "required": true,
            "source": "systemDefault",
            "description": "Initial lifecycle status set to draft on creation"
          },
          {
            "inputId": "createdAt",
            "fieldRef": "ChangeOrder.createdAt",
            "required": true,
            "source": "systemDefault",
            "description": "Timestamp when the change order is created"
          },
          {
            "inputId": "updatedAt",
            "fieldRef": "ChangeOrder.updatedAt",
            "required": true,
            "source": "systemDefault",
            "description": "Timestamp of the initial creation modification"
          }
        ],
        "projection": {
          "kind": "object",
          "arrayFieldName": null,
          "itemFields": [],
          "topFields": [
            {
              "name": "changeOrderId",
              "operationId": "createChangeOrder",
              "path": [
                "changeOrderId"
              ],
              "fromItems": false
            },
            {
              "name": "projectId",
              "operationId": "createChangeOrder",
              "path": [
                "projectId"
              ],
              "fromItems": false
            },
            {
              "name": "title",
              "operationId": "createChangeOrder",
              "path": [
                "title"
              ],
              "fromItems": false
            },
            {
              "name": "description",
              "operationId": "createChangeOrder",
              "path": [
                "description"
              ],
              "fromItems": false
            },
            {
              "name": "impactType",
              "operationId": "createChangeOrder",
              "path": [
                "impactType"
              ],
              "fromItems": false
            },
            {
              "name": "costAdjustment",
              "operationId": "createChangeOrder",
              "path": [
                "costAdjustment"
              ],
              "fromItems": false
            },
            {
              "name": "scheduleAdjustmentDays",
              "operationId": "createChangeOrder",
              "path": [
                "scheduleAdjustmentDays"
              ],
              "fromItems": false
            },
            {
              "name": "status",
              "operationId": "createChangeOrder",
              "path": [
                "status"
              ],
              "fromItems": false
            },
            {
              "name": "createdAt",
              "operationId": "createChangeOrder",
              "path": [
                "createdAt"
              ],
              "fromItems": false
            }
          ]
        },
        "optionalUses": []
      },
      {
        "handlerName": "changeOrderWorkspaceCmdUpdateChangeOrderHandler",
        "command": "cmdUpdateChangeOrder",
        "bffId": "cmdUpdateChangeOrder",
        "route": "buildFlowFsm.changeOrderWorkspace.cmdUpdateChangeOrder",
        "kind": "command",
        "usecaseRef": "updateChangeOrder",
        "usecaseRefs": [
          "updateChangeOrder"
        ],
        "inputTypeName": "UpdateChangeOrderInput",
        "inputContract": [
          {
            "inputId": "changeOrderId",
            "fieldRef": "ChangeOrder.changeOrderId",
            "required": true,
            "source": "routeParam",
            "description": "Identifier of the change order being updated"
          },
          {
            "inputId": "title",
            "fieldRef": "ChangeOrder.title",
            "required": true,
            "source": "userInput",
            "description": "Revised short summary title of the change order"
          },
          {
            "inputId": "description",
            "fieldRef": "ChangeOrder.description",
            "required": true,
            "source": "userInput",
            "description": "Revised detailed description of the scope, cost, or schedule impact"
          },
          {
            "inputId": "impactType",
            "fieldRef": "ChangeOrder.impactType",
            "required": true,
            "source": "userInput",
            "description": "Revised primary impact category: scope, cost, or schedule"
          },
          {
            "inputId": "costAdjustment",
            "fieldRef": "ChangeOrder.costAdjustment",
            "required": true,
            "source": "userInput",
            "description": "Revised monetary cost adjustment amount"
          },
          {
            "inputId": "scheduleAdjustmentDays",
            "fieldRef": "ChangeOrder.scheduleAdjustmentDays",
            "required": false,
            "source": "userInput",
            "description": "Revised number of days added to or removed from the project schedule"
          },
          {
            "inputId": "updatedAt",
            "fieldRef": "ChangeOrder.updatedAt",
            "required": true,
            "source": "systemDefault",
            "description": "Server timestamp recorded when the change order is saved"
          }
        ],
        "projection": {
          "kind": "object",
          "arrayFieldName": null,
          "itemFields": [],
          "topFields": [
            {
              "name": "changeOrderId",
              "operationId": "updateChangeOrder",
              "path": [
                "changeOrderId"
              ],
              "fromItems": false
            },
            {
              "name": "projectId",
              "operationId": "updateChangeOrder",
              "path": [
                "projectId"
              ],
              "fromItems": false
            },
            {
              "name": "title",
              "operationId": "updateChangeOrder",
              "path": [
                "title"
              ],
              "fromItems": false
            },
            {
              "name": "description",
              "operationId": "updateChangeOrder",
              "path": [
                "description"
              ],
              "fromItems": false
            },
            {
              "name": "impactType",
              "operationId": "updateChangeOrder",
              "path": [
                "impactType"
              ],
              "fromItems": false
            },
            {
              "name": "costAdjustment",
              "operationId": "updateChangeOrder",
              "path": [
                "costAdjustment"
              ],
              "fromItems": false
            },
            {
              "name": "scheduleAdjustmentDays",
              "operationId": "updateChangeOrder",
              "path": [
                "scheduleAdjustmentDays"
              ],
              "fromItems": false
            },
            {
              "name": "status",
              "operationId": "updateChangeOrder",
              "path": [
                "status"
              ],
              "fromItems": false
            },
            {
              "name": "updatedAt",
              "operationId": "updateChangeOrder",
              "path": [
                "updatedAt"
              ],
              "fromItems": false
            }
          ]
        },
        "optionalUses": []
      },
      {
        "handlerName": "changeOrderWorkspaceCmdUpdateChangeOrderStatusHandler",
        "command": "cmdUpdateChangeOrderStatus",
        "bffId": "cmdUpdateChangeOrderStatus",
        "route": "buildFlowFsm.changeOrderWorkspace.cmdUpdateChangeOrderStatus",
        "kind": "command",
        "usecaseRef": "updateChangeOrderStatus",
        "usecaseRefs": [
          "updateChangeOrderStatus"
        ],
        "inputTypeName": "UpdateChangeOrderStatusInput",
        "inputContract": [
          {
            "inputId": "changeOrderId",
            "fieldRef": "ChangeOrder.changeOrderId",
            "required": true,
            "source": "routeParam",
            "description": "Identifier of the change order whose status is being updated"
          },
          {
            "inputId": "status",
            "fieldRef": "ChangeOrder.status",
            "required": true,
            "source": "userInput",
            "description": "New lifecycle status to apply: approved or rejected (or pendingReview from draft)"
          },
          {
            "inputId": "rejectionReason",
            "fieldRef": "ChangeOrder.rejectionReason",
            "required": false,
            "source": "userInput",
            "description": "Reason recorded when the change order is rejected during review"
          },
          {
            "inputId": "approvedAt",
            "fieldRef": "ChangeOrder.approvedAt",
            "required": false,
            "source": "systemDefault",
            "description": "Timestamp set automatically when the change order is approved"
          },
          {
            "inputId": "rejectedAt",
            "fieldRef": "ChangeOrder.rejectedAt",
            "required": false,
            "source": "systemDefault",
            "description": "Timestamp set automatically when the change order is rejected"
          },
          {
            "inputId": "updatedAt",
            "fieldRef": "ChangeOrder.updatedAt",
            "required": true,
            "source": "systemDefault",
            "description": "Timestamp of this status update"
          }
        ],
        "projection": {
          "kind": "object",
          "arrayFieldName": null,
          "itemFields": [],
          "topFields": [
            {
              "name": "changeOrderId",
              "operationId": "updateChangeOrderStatus",
              "path": [
                "changeOrderId"
              ],
              "fromItems": false
            },
            {
              "name": "projectId",
              "operationId": "updateChangeOrderStatus",
              "path": [
                "projectId"
              ],
              "fromItems": false
            },
            {
              "name": "title",
              "operationId": "updateChangeOrderStatus",
              "path": [
                "title"
              ],
              "fromItems": false
            },
            {
              "name": "status",
              "operationId": "updateChangeOrderStatus",
              "path": [
                "status"
              ],
              "fromItems": false
            },
            {
              "name": "costAdjustment",
              "operationId": "updateChangeOrderStatus",
              "path": [
                "costAdjustment"
              ],
              "fromItems": false
            },
            {
              "name": "scheduleAdjustmentDays",
              "operationId": "updateChangeOrderStatus",
              "path": [
                "scheduleAdjustmentDays"
              ],
              "fromItems": false
            },
            {
              "name": "rejectionReason",
              "operationId": "updateChangeOrderStatus",
              "path": [
                "rejectionReason"
              ],
              "fromItems": false
            },
            {
              "name": "approvedAt",
              "operationId": "updateChangeOrderStatus",
              "path": [
                "approvedAt"
              ],
              "fromItems": false
            },
            {
              "name": "rejectedAt",
              "operationId": "updateChangeOrderStatus",
              "path": [
                "rejectedAt"
              ],
              "fromItems": false
            },
            {
              "name": "updatedAt",
              "operationId": "updateChangeOrderStatus",
              "path": [
                "updatedAt"
              ],
              "fromItems": false
            }
          ]
        },
        "optionalUses": []
      }
    ],
    "routes": [
      {
        "key": "buildFlowFsm.changeOrderWorkspace.cmdCreateChangeOrder",
        "handlerName": "changeOrderWorkspaceCmdCreateChangeOrderHandler"
      },
      {
        "key": "buildFlowFsm.changeOrderWorkspace.cmdUpdateChangeOrder",
        "handlerName": "changeOrderWorkspaceCmdUpdateChangeOrderHandler"
      },
      {
        "key": "buildFlowFsm.changeOrderWorkspace.cmdUpdateChangeOrderStatus",
        "handlerName": "changeOrderWorkspaceCmdUpdateChangeOrderStatusHandler"
      }
    ]
  }
} as const;

export default changeOrderWorkspaceController;

export const pipeline = [
  {
    "id": "changeOrderWorkspace__httpController",
    "type": "httpController",
    "outputPath": "_102045_/l1/buildFlowFsm/layer_1_external/adapters/http/controllers/changeOrderWorkspace.ts",
    "defPath": "_102045_/l1/buildFlowFsm/layer_1_external/adapters/http/controllers/changeOrderWorkspace.defs.ts",
    "dependsFiles": [
      "_102045_/l1/buildFlowFsm/layer_2_application/usecases/createChangeOrder.d.ts",
      "_102045_/l4/buildFlowFsm/contracts/changeOrderWorkspace.cmdCreateChangeOrder.defs.ts",
      "_102045_/l1/buildFlowFsm/layer_2_application/usecases/updateChangeOrder.d.ts",
      "_102045_/l4/buildFlowFsm/contracts/changeOrderWorkspace.cmdUpdateChangeOrder.defs.ts",
      "_102045_/l1/buildFlowFsm/layer_2_application/usecases/updateChangeOrderStatus.d.ts",
      "_102045_/l4/buildFlowFsm/contracts/changeOrderWorkspace.cmdUpdateChangeOrderStatus.defs.ts"
    ],
    "dependsOn": [],
    "skills": [
      "_102021_/l2/agentChangeBackend/skills/architecture.md",
      "_102021_/l2/agentChangeBackend/skills/httpController.md",
      "_102034_.d.ts"
    ],
    "agent": "agentCbMaterialize"
  }
] as const;
