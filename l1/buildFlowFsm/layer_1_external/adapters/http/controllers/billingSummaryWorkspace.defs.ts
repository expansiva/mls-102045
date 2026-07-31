/// <mls fileReference="_102045_/l1/buildFlowFsm/layer_1_external/adapters/http/controllers/billingSummaryWorkspace.defs.ts" enhancement="_blank"/>

export const billingSummaryWorkspaceController = {
  "schemaVersion": "2026-06-26",
  "artifactType": "httpController",
  "artifactId": "billingSummaryWorkspace",
  "moduleName": "buildFlowFsm",
  "status": "draft",
  "source": {
    "agentName": "agentCbHttpController",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "pageId": "billingSummaryWorkspace",
    "controllerName": "BillingSummaryWorkspaceController",
    "ownerKind": "workspace",
    "workspaceId": "billingSummaryWorkspace",
    "actors": [
      "billingStaff"
    ],
    "allowedScopes": [
      "buildFlowFsm:billingStaff"
    ],
    "handlers": [
      {
        "handlerName": "billingSummaryWorkspaceListBillingSummariesHandler",
        "command": "listBillingSummaries",
        "bffId": "listBillingSummaries",
        "route": "buildFlowFsm.billingSummaryWorkspace.listBillingSummaries",
        "kind": "query",
        "usecaseRef": "queryBillingSummaries",
        "usecaseRefs": [
          "queryBillingSummaries"
        ],
        "inputTypeName": "QueryBillingSummariesInput",
        "inputContract": [
          {
            "inputId": "projectId",
            "fieldRef": "BillingSummary.projectId",
            "required": false,
            "source": "userInput",
            "description": "Optional filter to list billing summaries for a specific project"
          },
          {
            "inputId": "status",
            "fieldRef": "BillingSummary.status",
            "required": false,
            "source": "userInput",
            "description": "Optional filter by billing summary lifecycle status (draft or shared)"
          },
          {
            "inputId": "page",
            "fieldRef": "",
            "type": "number",
            "required": false,
            "source": "userInput",
            "description": "1-based page index for paginated results"
          },
          {
            "inputId": "pageSize",
            "fieldRef": "",
            "type": "number",
            "required": false,
            "source": "userInput",
            "description": "Number of billing summaries per page"
          }
        ],
        "projection": {
          "kind": "paginated",
          "arrayFieldName": "billingSummaries",
          "itemFields": [
            {
              "name": "billingSummaryId",
              "operationId": "queryBillingSummaries",
              "path": [
                "billingSummaries",
                "$items",
                "billingSummaryId"
              ],
              "fromItems": false
            },
            {
              "name": "projectId",
              "operationId": "queryBillingSummaries",
              "path": [
                "billingSummaries",
                "$items",
                "projectId"
              ],
              "fromItems": false
            },
            {
              "name": "projectName",
              "operationId": "queryBillingSummaries",
              "path": [
                "billingSummaries",
                "$items",
                "projectName"
              ],
              "fromItems": false
            },
            {
              "name": "status",
              "operationId": "queryBillingSummaries",
              "path": [
                "billingSummaries",
                "$items",
                "status"
              ],
              "fromItems": false
            },
            {
              "name": "periodStart",
              "operationId": "queryBillingSummaries",
              "path": [
                "billingSummaries",
                "$items",
                "periodStart"
              ],
              "fromItems": false
            },
            {
              "name": "periodEnd",
              "operationId": "queryBillingSummaries",
              "path": [
                "billingSummaries",
                "$items",
                "periodEnd"
              ],
              "fromItems": false
            },
            {
              "name": "laborCost",
              "operationId": "queryBillingSummaries",
              "path": [
                "billingSummaries",
                "$items",
                "laborCost"
              ],
              "fromItems": false
            },
            {
              "name": "materialCost",
              "operationId": "queryBillingSummaries",
              "path": [
                "billingSummaries",
                "$items",
                "materialCost"
              ],
              "fromItems": false
            },
            {
              "name": "changeOrderCost",
              "operationId": "queryBillingSummaries",
              "path": [
                "billingSummaries",
                "$items",
                "changeOrderCost"
              ],
              "fromItems": false
            },
            {
              "name": "totalCost",
              "operationId": "queryBillingSummaries",
              "path": [
                "billingSummaries",
                "$items",
                "totalCost"
              ],
              "fromItems": false
            },
            {
              "name": "sharedAt",
              "operationId": "queryBillingSummaries",
              "path": [
                "billingSummaries",
                "$items",
                "sharedAt"
              ],
              "fromItems": false
            },
            {
              "name": "createdAt",
              "operationId": "queryBillingSummaries",
              "path": [
                "billingSummaries",
                "$items",
                "createdAt"
              ],
              "fromItems": false
            },
            {
              "name": "updatedAt",
              "operationId": "queryBillingSummaries",
              "path": [
                "billingSummaries",
                "$items",
                "updatedAt"
              ],
              "fromItems": false
            }
          ],
          "topFields": [
            {
              "name": "total",
              "operationId": "queryBillingSummaries",
              "path": [
                "total"
              ],
              "fromItems": false
            }
          ]
        },
        "optionalUses": []
      },
      {
        "handlerName": "billingSummaryWorkspaceCreateBillingSummaryCmdHandler",
        "command": "createBillingSummaryCmd",
        "bffId": "createBillingSummaryCmd",
        "route": "buildFlowFsm.billingSummaryWorkspace.createBillingSummaryCmd",
        "kind": "command",
        "usecaseRef": "createBillingSummary",
        "usecaseRefs": [
          "createBillingSummary"
        ],
        "inputTypeName": "CreateBillingSummaryInput",
        "inputContract": [
          {
            "inputId": "projectId",
            "fieldRef": "BillingSummary.projectId",
            "required": true,
            "source": "routeParam",
            "description": "Project for which the billing summary is compiled"
          },
          {
            "inputId": "periodStart",
            "fieldRef": "BillingSummary.periodStart",
            "required": true,
            "source": "userInput",
            "description": "Start date of the billing period to include in the summary"
          },
          {
            "inputId": "periodEnd",
            "fieldRef": "BillingSummary.periodEnd",
            "required": true,
            "source": "userInput",
            "description": "End date of the billing period to include in the summary"
          },
          {
            "inputId": "billingSummaryId",
            "fieldRef": "BillingSummary.billingSummaryId",
            "required": true,
            "source": "systemDefault",
            "description": "Server-generated primary key for the new billing summary"
          },
          {
            "inputId": "createdAt",
            "fieldRef": "BillingSummary.createdAt",
            "required": true,
            "source": "systemDefault",
            "description": "Server timestamp when the billing summary is created"
          },
          {
            "inputId": "updatedAt",
            "fieldRef": "BillingSummary.updatedAt",
            "required": true,
            "source": "systemDefault",
            "description": "Server timestamp of the initial billing summary write"
          }
        ],
        "projection": {
          "kind": "object",
          "arrayFieldName": null,
          "itemFields": [],
          "topFields": [
            {
              "name": "billingSummaryId",
              "operationId": "createBillingSummary",
              "path": [
                "billingSummaryId"
              ],
              "fromItems": false
            },
            {
              "name": "projectId",
              "operationId": "createBillingSummary",
              "path": [
                "projectId"
              ],
              "fromItems": false
            },
            {
              "name": "status",
              "operationId": "createBillingSummary",
              "path": [
                "status"
              ],
              "fromItems": false
            },
            {
              "name": "periodStart",
              "operationId": "createBillingSummary",
              "path": [
                "periodStart"
              ],
              "fromItems": false
            },
            {
              "name": "periodEnd",
              "operationId": "createBillingSummary",
              "path": [
                "periodEnd"
              ],
              "fromItems": false
            },
            {
              "name": "laborCost",
              "operationId": "createBillingSummary",
              "path": [
                "laborCost"
              ],
              "fromItems": false
            },
            {
              "name": "materialCost",
              "operationId": "createBillingSummary",
              "path": [
                "materialCost"
              ],
              "fromItems": false
            },
            {
              "name": "changeOrderCost",
              "operationId": "createBillingSummary",
              "path": [
                "changeOrderCost"
              ],
              "fromItems": false
            },
            {
              "name": "totalCost",
              "operationId": "createBillingSummary",
              "path": [
                "totalCost"
              ],
              "fromItems": false
            },
            {
              "name": "createdAt",
              "operationId": "createBillingSummary",
              "path": [
                "createdAt"
              ],
              "fromItems": false
            },
            {
              "name": "updatedAt",
              "operationId": "createBillingSummary",
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
        "handlerName": "billingSummaryWorkspaceShareBillingSummaryCmdHandler",
        "command": "shareBillingSummaryCmd",
        "bffId": "shareBillingSummaryCmd",
        "route": "buildFlowFsm.billingSummaryWorkspace.shareBillingSummaryCmd",
        "kind": "command",
        "usecaseRef": "shareBillingSummary",
        "usecaseRefs": [
          "shareBillingSummary"
        ],
        "inputTypeName": "ShareBillingSummaryInput",
        "inputContract": [
          {
            "inputId": "billingSummaryId",
            "fieldRef": "BillingSummary.billingSummaryId",
            "required": true,
            "source": "routeParam",
            "description": "Identifier of the draft billing summary to share with the client"
          },
          {
            "inputId": "status",
            "fieldRef": "BillingSummary.status",
            "required": true,
            "source": "systemDefault",
            "description": "Lifecycle status set to shared when the summary is sent to the client"
          },
          {
            "inputId": "sharedAt",
            "fieldRef": "BillingSummary.sharedAt",
            "required": true,
            "source": "systemDefault",
            "description": "Timestamp recorded when the billing summary is shared with the client"
          },
          {
            "inputId": "updatedAt",
            "fieldRef": "BillingSummary.updatedAt",
            "required": true,
            "source": "systemDefault",
            "description": "Timestamp of this share update"
          }
        ],
        "projection": {
          "kind": "object",
          "arrayFieldName": null,
          "itemFields": [],
          "topFields": [
            {
              "name": "billingSummaryId",
              "operationId": "shareBillingSummary",
              "path": [
                "billingSummaryId"
              ],
              "fromItems": false
            },
            {
              "name": "projectId",
              "operationId": "shareBillingSummary",
              "path": [
                "projectId"
              ],
              "fromItems": false
            },
            {
              "name": "status",
              "operationId": "shareBillingSummary",
              "path": [
                "status"
              ],
              "fromItems": false
            },
            {
              "name": "periodStart",
              "operationId": "shareBillingSummary",
              "path": [
                "periodStart"
              ],
              "fromItems": false
            },
            {
              "name": "periodEnd",
              "operationId": "shareBillingSummary",
              "path": [
                "periodEnd"
              ],
              "fromItems": false
            },
            {
              "name": "laborCost",
              "operationId": "shareBillingSummary",
              "path": [
                "laborCost"
              ],
              "fromItems": false
            },
            {
              "name": "materialCost",
              "operationId": "shareBillingSummary",
              "path": [
                "materialCost"
              ],
              "fromItems": false
            },
            {
              "name": "changeOrderCost",
              "operationId": "shareBillingSummary",
              "path": [
                "changeOrderCost"
              ],
              "fromItems": false
            },
            {
              "name": "totalCost",
              "operationId": "shareBillingSummary",
              "path": [
                "totalCost"
              ],
              "fromItems": false
            },
            {
              "name": "sharedAt",
              "operationId": "shareBillingSummary",
              "path": [
                "sharedAt"
              ],
              "fromItems": false
            },
            {
              "name": "updatedAt",
              "operationId": "shareBillingSummary",
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
        "key": "buildFlowFsm.billingSummaryWorkspace.listBillingSummaries",
        "handlerName": "billingSummaryWorkspaceListBillingSummariesHandler"
      },
      {
        "key": "buildFlowFsm.billingSummaryWorkspace.createBillingSummaryCmd",
        "handlerName": "billingSummaryWorkspaceCreateBillingSummaryCmdHandler"
      },
      {
        "key": "buildFlowFsm.billingSummaryWorkspace.shareBillingSummaryCmd",
        "handlerName": "billingSummaryWorkspaceShareBillingSummaryCmdHandler"
      }
    ]
  }
} as const;

export default billingSummaryWorkspaceController;

export const pipeline = [
  {
    "id": "billingSummaryWorkspace__httpController",
    "type": "httpController",
    "outputPath": "_102045_/l1/buildFlowFsm/layer_1_external/adapters/http/controllers/billingSummaryWorkspace.ts",
    "defPath": "_102045_/l1/buildFlowFsm/layer_1_external/adapters/http/controllers/billingSummaryWorkspace.defs.ts",
    "dependsFiles": [
      "_102045_/l1/buildFlowFsm/layer_2_application/usecases/queryBillingSummaries.d.ts",
      "_102045_/l4/buildFlowFsm/contracts/billingSummaryWorkspace.listBillingSummaries.defs.ts",
      "_102045_/l1/buildFlowFsm/layer_2_application/usecases/createBillingSummary.d.ts",
      "_102045_/l4/buildFlowFsm/contracts/billingSummaryWorkspace.createBillingSummaryCmd.defs.ts",
      "_102045_/l1/buildFlowFsm/layer_2_application/usecases/shareBillingSummary.d.ts",
      "_102045_/l4/buildFlowFsm/contracts/billingSummaryWorkspace.shareBillingSummaryCmd.defs.ts"
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
