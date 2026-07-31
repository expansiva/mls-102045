/// <mls fileReference="_102045_/l1/buildFlowFsm/layer_1_external/adapters/http/controllers/invoiceWorkspace.defs.ts" enhancement="_blank"/>

export const invoiceWorkspaceController = {
  "schemaVersion": "2026-06-26",
  "artifactType": "httpController",
  "artifactId": "invoiceWorkspace",
  "moduleName": "buildFlowFsm",
  "status": "draft",
  "source": {
    "agentName": "agentCbHttpController",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "pageId": "invoiceWorkspace",
    "controllerName": "InvoiceWorkspaceController",
    "ownerKind": "workspace",
    "workspaceId": "invoiceWorkspace",
    "actors": [
      "billingStaff"
    ],
    "allowedScopes": [
      "buildFlowFsm:billingStaff"
    ],
    "handlers": [
      {
        "handlerName": "invoiceWorkspaceListInvoicesHandler",
        "command": "listInvoices",
        "bffId": "listInvoices",
        "route": "buildFlowFsm.invoiceWorkspace.listInvoices",
        "kind": "query",
        "usecaseRef": "queryInvoices",
        "usecaseRefs": [
          "queryInvoices"
        ],
        "inputTypeName": "QueryInvoicesInput",
        "inputContract": [
          {
            "inputId": "status",
            "fieldRef": "Invoice.status",
            "required": false,
            "source": "userInput",
            "description": "Optional filter by invoice lifecycle status (draft or sent)"
          },
          {
            "inputId": "projectId",
            "fieldRef": "Invoice.projectId",
            "required": false,
            "source": "userInput",
            "description": "Optional filter to invoices for a specific project"
          },
          {
            "inputId": "clientId",
            "fieldRef": "Invoice.clientId",
            "required": false,
            "source": "userInput",
            "description": "Optional filter to invoices for a specific client"
          },
          {
            "inputId": "page",
            "fieldRef": "",
            "type": "number",
            "required": false,
            "source": "userInput",
            "description": "Optional page number for paginated results"
          },
          {
            "inputId": "pageSize",
            "fieldRef": "",
            "type": "number",
            "required": false,
            "source": "userInput",
            "description": "Optional page size for paginated results"
          }
        ],
        "projection": {
          "kind": "paginated",
          "arrayFieldName": "invoices",
          "itemFields": [
            {
              "name": "invoiceId",
              "operationId": "queryInvoices",
              "path": [
                "invoices",
                "$items",
                "invoiceId"
              ],
              "fromItems": false
            },
            {
              "name": "invoiceNumber",
              "operationId": "queryInvoices",
              "path": [
                "invoices",
                "$items",
                "invoiceNumber"
              ],
              "fromItems": false
            },
            {
              "name": "projectId",
              "operationId": "queryInvoices",
              "path": [
                "invoices",
                "$items",
                "projectId"
              ],
              "fromItems": false
            },
            {
              "name": "clientId",
              "operationId": "queryInvoices",
              "path": [
                "invoices",
                "$items",
                "clientId"
              ],
              "fromItems": false
            },
            {
              "name": "status",
              "operationId": "queryInvoices",
              "path": [
                "invoices",
                "$items",
                "status"
              ],
              "fromItems": false
            },
            {
              "name": "totalAmount",
              "operationId": "queryInvoices",
              "path": [
                "invoices",
                "$items",
                "totalAmount"
              ],
              "fromItems": false
            },
            {
              "name": "sentAt",
              "operationId": "queryInvoices",
              "path": [
                "invoices",
                "$items",
                "sentAt"
              ],
              "fromItems": false
            },
            {
              "name": "createdAt",
              "operationId": "queryInvoices",
              "path": [
                "invoices",
                "$items",
                "createdAt"
              ],
              "fromItems": false
            },
            {
              "name": "updatedAt",
              "operationId": "queryInvoices",
              "path": [
                "invoices",
                "$items",
                "updatedAt"
              ],
              "fromItems": false
            }
          ],
          "topFields": [
            {
              "name": "total",
              "operationId": "queryInvoices",
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
        "handlerName": "invoiceWorkspaceCreateInvoiceCmdHandler",
        "command": "createInvoiceCmd",
        "bffId": "createInvoiceCmd",
        "route": "buildFlowFsm.invoiceWorkspace.createInvoiceCmd",
        "kind": "command",
        "usecaseRef": "createInvoice",
        "usecaseRefs": [
          "createInvoice"
        ],
        "inputTypeName": "CreateInvoiceInput",
        "inputContract": [
          {
            "inputId": "projectId",
            "fieldRef": "Invoice.projectId",
            "required": true,
            "source": "selectedEntity",
            "description": "Project selected for invoice generation; approved costs are taken from this project"
          },
          {
            "inputId": "invoiceNumber",
            "fieldRef": "Invoice.invoiceNumber",
            "required": true,
            "source": "userInput",
            "description": "Human-readable invoice number used for external reference and client communication"
          },
          {
            "inputId": "invoiceId",
            "fieldRef": "Invoice.invoiceId",
            "required": true,
            "source": "systemDefault",
            "description": "System-generated unique identifier for the new invoice"
          },
          {
            "inputId": "clientId",
            "fieldRef": "Invoice.clientId",
            "required": true,
            "source": "selectedEntity",
            "description": "Client to bill, taken from the selected project's client reference"
          },
          {
            "inputId": "createdAt",
            "fieldRef": "Invoice.createdAt",
            "required": true,
            "source": "systemDefault",
            "description": "Server timestamp recorded when the invoice is created"
          },
          {
            "inputId": "updatedAt",
            "fieldRef": "Invoice.updatedAt",
            "required": true,
            "source": "systemDefault",
            "description": "Server timestamp recorded on creation (initially matches createdAt)"
          }
        ],
        "projection": {
          "kind": "object",
          "arrayFieldName": null,
          "itemFields": [],
          "topFields": [
            {
              "name": "invoiceId",
              "operationId": "createInvoice",
              "path": [
                "invoiceId"
              ],
              "fromItems": false
            },
            {
              "name": "projectId",
              "operationId": "createInvoice",
              "path": [
                "projectId"
              ],
              "fromItems": false
            },
            {
              "name": "clientId",
              "operationId": "createInvoice",
              "path": [
                "clientId"
              ],
              "fromItems": false
            },
            {
              "name": "invoiceNumber",
              "operationId": "createInvoice",
              "path": [
                "invoiceNumber"
              ],
              "fromItems": false
            },
            {
              "name": "status",
              "operationId": "createInvoice",
              "path": [
                "status"
              ],
              "fromItems": false
            },
            {
              "name": "totalAmount",
              "operationId": "createInvoice",
              "path": [
                "totalAmount"
              ],
              "fromItems": false
            },
            {
              "name": "createdAt",
              "operationId": "createInvoice",
              "path": [
                "createdAt"
              ],
              "fromItems": false
            },
            {
              "name": "updatedAt",
              "operationId": "createInvoice",
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
        "handlerName": "invoiceWorkspaceSendInvoiceCmdHandler",
        "command": "sendInvoiceCmd",
        "bffId": "sendInvoiceCmd",
        "route": "buildFlowFsm.invoiceWorkspace.sendInvoiceCmd",
        "kind": "command",
        "usecaseRef": "sendInvoice",
        "usecaseRefs": [
          "sendInvoice"
        ],
        "inputTypeName": "SendInvoiceInput",
        "inputContract": [
          {
            "inputId": "invoiceId",
            "fieldRef": "Invoice.invoiceId",
            "required": true,
            "source": "selectedEntity",
            "description": "Identifier of the draft invoice being sent to the client"
          }
        ],
        "projection": {
          "kind": "object",
          "arrayFieldName": null,
          "itemFields": [],
          "topFields": [
            {
              "name": "invoiceId",
              "operationId": "sendInvoice",
              "path": [
                "invoiceId"
              ],
              "fromItems": false
            },
            {
              "name": "projectId",
              "operationId": "sendInvoice",
              "path": [
                "projectId"
              ],
              "fromItems": false
            },
            {
              "name": "clientId",
              "operationId": "sendInvoice",
              "path": [
                "clientId"
              ],
              "fromItems": false
            },
            {
              "name": "invoiceNumber",
              "operationId": "sendInvoice",
              "path": [
                "invoiceNumber"
              ],
              "fromItems": false
            },
            {
              "name": "status",
              "operationId": "sendInvoice",
              "path": [
                "status"
              ],
              "fromItems": false
            },
            {
              "name": "totalAmount",
              "operationId": "sendInvoice",
              "path": [
                "totalAmount"
              ],
              "fromItems": false
            },
            {
              "name": "sentAt",
              "operationId": "sendInvoice",
              "path": [
                "sentAt"
              ],
              "fromItems": false
            },
            {
              "name": "updatedAt",
              "operationId": "sendInvoice",
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
        "key": "buildFlowFsm.invoiceWorkspace.listInvoices",
        "handlerName": "invoiceWorkspaceListInvoicesHandler"
      },
      {
        "key": "buildFlowFsm.invoiceWorkspace.createInvoiceCmd",
        "handlerName": "invoiceWorkspaceCreateInvoiceCmdHandler"
      },
      {
        "key": "buildFlowFsm.invoiceWorkspace.sendInvoiceCmd",
        "handlerName": "invoiceWorkspaceSendInvoiceCmdHandler"
      }
    ]
  }
} as const;

export default invoiceWorkspaceController;

export const pipeline = [
  {
    "id": "invoiceWorkspace__httpController",
    "type": "httpController",
    "outputPath": "_102045_/l1/buildFlowFsm/layer_1_external/adapters/http/controllers/invoiceWorkspace.ts",
    "defPath": "_102045_/l1/buildFlowFsm/layer_1_external/adapters/http/controllers/invoiceWorkspace.defs.ts",
    "dependsFiles": [
      "_102045_/l1/buildFlowFsm/layer_2_application/usecases/queryInvoices.d.ts",
      "_102045_/l4/buildFlowFsm/contracts/invoiceWorkspace.listInvoices.defs.ts",
      "_102045_/l1/buildFlowFsm/layer_2_application/usecases/createInvoice.d.ts",
      "_102045_/l4/buildFlowFsm/contracts/invoiceWorkspace.createInvoiceCmd.defs.ts",
      "_102045_/l1/buildFlowFsm/layer_2_application/usecases/sendInvoice.d.ts",
      "_102045_/l4/buildFlowFsm/contracts/invoiceWorkspace.sendInvoiceCmd.defs.ts"
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
