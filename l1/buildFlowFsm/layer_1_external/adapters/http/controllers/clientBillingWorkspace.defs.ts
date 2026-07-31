/// <mls fileReference="_102045_/l1/buildFlowFsm/layer_1_external/adapters/http/controllers/clientBillingWorkspace.defs.ts" enhancement="_blank"/>

export const clientBillingWorkspaceController = {
  "schemaVersion": "2026-06-26",
  "artifactType": "httpController",
  "artifactId": "clientBillingWorkspace",
  "moduleName": "buildFlowFsm",
  "status": "draft",
  "source": {
    "agentName": "agentCbHttpController",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "pageId": "clientBillingWorkspace",
    "controllerName": "ClientBillingWorkspaceController",
    "ownerKind": "workspace",
    "workspaceId": "clientBillingWorkspace",
    "actors": [
      "client"
    ],
    "allowedScopes": [
      "buildFlowFsm:client"
    ],
    "handlers": [
      {
        "handlerName": "clientBillingWorkspaceGetBillingSummaryHandler",
        "command": "getBillingSummary",
        "bffId": "getBillingSummary",
        "route": "buildFlowFsm.clientBillingWorkspace.getBillingSummary",
        "kind": "query",
        "usecaseRef": "viewBillingSummary",
        "usecaseRefs": [
          "viewBillingSummary"
        ],
        "inputTypeName": "ViewBillingSummaryInput",
        "inputContract": [
          {
            "inputId": "billingSummaryId",
            "fieldRef": "BillingSummary.billingSummaryId",
            "required": true,
            "source": "routeParam",
            "description": "Identifier of the billing summary the client opens to review"
          },
          {
            "inputId": "clientId",
            "fieldRef": "Client.clientId",
            "required": true,
            "source": "actorSession",
            "description": "Authenticated client identity used to authorize access to summaries for their projects"
          }
        ],
        "projection": {
          "kind": "object",
          "arrayFieldName": null,
          "itemFields": [],
          "topFields": [
            {
              "name": "billingSummaryId",
              "operationId": "viewBillingSummary",
              "path": [
                "billingSummaryId"
              ],
              "fromItems": false
            },
            {
              "name": "projectId",
              "operationId": "viewBillingSummary",
              "path": [
                "projectId"
              ],
              "fromItems": false
            },
            {
              "name": "projectName",
              "operationId": "viewBillingSummary",
              "path": [
                "projectName"
              ],
              "fromItems": false
            },
            {
              "name": "status",
              "operationId": "viewBillingSummary",
              "path": [
                "status"
              ],
              "fromItems": false
            },
            {
              "name": "periodStart",
              "operationId": "viewBillingSummary",
              "path": [
                "periodStart"
              ],
              "fromItems": false
            },
            {
              "name": "periodEnd",
              "operationId": "viewBillingSummary",
              "path": [
                "periodEnd"
              ],
              "fromItems": false
            },
            {
              "name": "laborCost",
              "operationId": "viewBillingSummary",
              "path": [
                "laborCost"
              ],
              "fromItems": false
            },
            {
              "name": "materialCost",
              "operationId": "viewBillingSummary",
              "path": [
                "materialCost"
              ],
              "fromItems": false
            },
            {
              "name": "changeOrderCost",
              "operationId": "viewBillingSummary",
              "path": [
                "changeOrderCost"
              ],
              "fromItems": false
            },
            {
              "name": "totalCost",
              "operationId": "viewBillingSummary",
              "path": [
                "totalCost"
              ],
              "fromItems": false
            },
            {
              "name": "sharedAt",
              "operationId": "viewBillingSummary",
              "path": [
                "sharedAt"
              ],
              "fromItems": false
            }
          ]
        },
        "optionalUses": []
      },
      {
        "handlerName": "clientBillingWorkspaceGetInvoiceHandler",
        "command": "getInvoice",
        "bffId": "getInvoice",
        "route": "buildFlowFsm.clientBillingWorkspace.getInvoice",
        "kind": "query",
        "usecaseRef": "viewInvoice",
        "usecaseRefs": [
          "viewInvoice"
        ],
        "inputTypeName": "ViewInvoiceInput",
        "inputContract": [
          {
            "inputId": "invoiceId",
            "fieldRef": "Invoice.invoiceId",
            "required": true,
            "source": "routeParam",
            "description": "Identifier of the invoice the client wants to view"
          },
          {
            "inputId": "clientId",
            "fieldRef": "Invoice.clientId",
            "required": true,
            "source": "actorSession",
            "description": "Authenticated client identity used to scope which invoices can be viewed"
          }
        ],
        "projection": {
          "kind": "object",
          "arrayFieldName": null,
          "itemFields": [],
          "topFields": [
            {
              "name": "invoiceId",
              "operationId": "viewInvoice",
              "path": [
                "invoiceId"
              ],
              "fromItems": false
            },
            {
              "name": "projectId",
              "operationId": "viewInvoice",
              "path": [
                "projectId"
              ],
              "fromItems": false
            },
            {
              "name": "clientId",
              "operationId": "viewInvoice",
              "path": [
                "clientId"
              ],
              "fromItems": false
            },
            {
              "name": "invoiceNumber",
              "operationId": "viewInvoice",
              "path": [
                "invoiceNumber"
              ],
              "fromItems": false
            },
            {
              "name": "status",
              "operationId": "viewInvoice",
              "path": [
                "status"
              ],
              "fromItems": false
            },
            {
              "name": "totalAmount",
              "operationId": "viewInvoice",
              "path": [
                "totalAmount"
              ],
              "fromItems": false
            },
            {
              "name": "sentAt",
              "operationId": "viewInvoice",
              "path": [
                "sentAt"
              ],
              "fromItems": false
            },
            {
              "name": "createdAt",
              "operationId": "viewInvoice",
              "path": [
                "createdAt"
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
        "key": "buildFlowFsm.clientBillingWorkspace.getBillingSummary",
        "handlerName": "clientBillingWorkspaceGetBillingSummaryHandler"
      },
      {
        "key": "buildFlowFsm.clientBillingWorkspace.getInvoice",
        "handlerName": "clientBillingWorkspaceGetInvoiceHandler"
      }
    ]
  }
} as const;

export default clientBillingWorkspaceController;

export const pipeline = [
  {
    "id": "clientBillingWorkspace__httpController",
    "type": "httpController",
    "outputPath": "_102045_/l1/buildFlowFsm/layer_1_external/adapters/http/controllers/clientBillingWorkspace.ts",
    "defPath": "_102045_/l1/buildFlowFsm/layer_1_external/adapters/http/controllers/clientBillingWorkspace.defs.ts",
    "dependsFiles": [
      "_102045_/l1/buildFlowFsm/layer_2_application/usecases/viewBillingSummary.d.ts",
      "_102045_/l4/buildFlowFsm/contracts/clientBillingWorkspace.getBillingSummary.defs.ts",
      "_102045_/l1/buildFlowFsm/layer_2_application/usecases/viewInvoice.d.ts",
      "_102045_/l4/buildFlowFsm/contracts/clientBillingWorkspace.getInvoice.defs.ts"
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
