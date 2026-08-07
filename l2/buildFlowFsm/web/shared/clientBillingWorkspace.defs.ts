/// <mls fileReference="_102045_/l2/buildFlowFsm/web/shared/clientBillingWorkspace.defs.ts" enhancement="_blank"/>

export const definition = {
  "pageId": "clientBillingWorkspace",
  "pageName": "My Billing",
  "moduleName": "buildFlowFsm",
  "baseClassName": "BuildFlowFsmClientBillingWorkspaceBase",
  "routePattern": "/buildFlowFsm/clientBillingWorkspace/:billingSummaryId?/:invoiceId?",
  "sourceKind": "operation",
  "ownerIds": [
    "operation:viewBillingSummary",
    "operation:viewInvoice"
  ],
  "operationIds": [
    "viewBillingSummary",
    "viewInvoice"
  ],
  "origin": {
    "source": "l4-journey",
    "workspaceId": "clientBillingWorkspace",
    "workspaceKind": "operation",
    "actor": "client",
    "entity": "BillingSummary",
    "owners": [
      {
        "kind": "operation",
        "id": "viewBillingSummary",
        "defPath": "_102045_/l4/buildFlowFsm/operations/viewBillingSummary.defs.ts"
      },
      {
        "kind": "operation",
        "id": "viewInvoice",
        "defPath": "_102045_/l4/buildFlowFsm/operations/viewInvoice.defs.ts"
      }
    ],
    "microUserFlow": {
      "source": "l4/story.steps",
      "workflowSteps": [],
      "operations": [
        {
          "operationId": "viewBillingSummary",
          "commandName": "viewBillingSummary",
          "steps": [
            "Open the billing summary shared by billing staff for the project",
            "Review the billing period and the labor, material, and approved change-order cost totals",
            "Confirm the overall total and note any questions about the charges"
          ]
        },
        {
          "operationId": "viewInvoice",
          "commandName": "viewInvoice",
          "steps": [
            "Open the invoice shared by billing staff using its identifier",
            "Review invoice number, project and client references, status, total amount, and sent date",
            "Confirm the document is for information only with payment handled externally"
          ]
        }
      ]
    }
  },
  "contractRef": {
    "tsPath": "_102045_/l2/buildFlowFsm/web/contracts/clientBillingWorkspace.ts",
    "contracts": [
      {
        "commandName": "getBillingSummary",
        "routeConst": "getBillingSummaryRoute"
      },
      {
        "commandName": "getInvoice",
        "routeConst": "getInvoiceRoute"
      }
    ]
  },
  "layoutRef": {
    "defPath": "_102045_/l2/buildFlowFsm/web/desktop/page11/clientBillingWorkspace.defs.ts",
    "layoutId": "cfe-20260731185234.1000"
  },
  "states": [
    {
      "stateKey": "ui.clientBillingWorkspace.status",
      "name": "status",
      "kind": "pageStatus",
      "defaultValue": ""
    },
    {
      "stateKey": "ui.clientBillingWorkspace.action.getBillingSummary.status",
      "name": "getBillingSummaryState",
      "kind": "actionStatus",
      "actionRef": "getBillingSummary",
      "valueSet": [
        "idle",
        "loading",
        "success",
        "error"
      ],
      "defaultValue": "idle"
    },
    {
      "stateKey": "ui.clientBillingWorkspace.input.getBillingSummary.billingSummaryId",
      "name": "getBillingSummaryBillingSummaryId",
      "kind": "input",
      "source": "routeParam",
      "presentation": "route",
      "contractRef": {
        "commandName": "getBillingSummary",
        "direction": "input",
        "field": "billingSummaryId"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.clientBillingWorkspace.input.getBillingSummary.clientId",
      "name": "getBillingSummaryClientId",
      "kind": "input",
      "source": "actorSession",
      "presentation": "form",
      "contractRef": {
        "commandName": "getBillingSummary",
        "direction": "input",
        "field": "clientId"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.clientBillingWorkspace.data.getBillingSummary",
      "name": "getBillingSummaryData",
      "kind": "queryResult",
      "contractRef": {
        "commandName": "getBillingSummary",
        "direction": "output"
      },
      "outputShape": "object",
      "collection": false,
      "defaultValue": null
    },
    {
      "stateKey": "ui.clientBillingWorkspace.action.getInvoice.status",
      "name": "getInvoiceState",
      "kind": "actionStatus",
      "actionRef": "getInvoice",
      "valueSet": [
        "idle",
        "loading",
        "success",
        "error"
      ],
      "defaultValue": "idle"
    },
    {
      "stateKey": "ui.clientBillingWorkspace.input.getInvoice.invoiceId",
      "name": "getInvoiceInvoiceId",
      "kind": "input",
      "source": "routeParam",
      "presentation": "route",
      "contractRef": {
        "commandName": "getInvoice",
        "direction": "input",
        "field": "invoiceId"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.clientBillingWorkspace.input.getInvoice.clientId",
      "name": "getInvoiceClientId",
      "kind": "input",
      "source": "actorSession",
      "presentation": "form",
      "contractRef": {
        "commandName": "getInvoice",
        "direction": "input",
        "field": "clientId"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.clientBillingWorkspace.data.getInvoice",
      "name": "getInvoiceData",
      "kind": "queryResult",
      "contractRef": {
        "commandName": "getInvoice",
        "direction": "output"
      },
      "outputShape": "object",
      "collection": false,
      "defaultValue": null
    }
  ],
  "actions": [
    {
      "actionId": "getBillingSummary",
      "kind": "query",
      "commandRef": "getBillingSummary",
      "routeKey": "buildFlowFsm.clientBillingWorkspace.getBillingSummary",
      "purpose": "View billing summary",
      "methodName": "loadGetBillingSummary",
      "handlerName": "handleGetBillingSummaryClick",
      "inputStateKeys": [
        "ui.clientBillingWorkspace.input.getBillingSummary.billingSummaryId",
        "ui.clientBillingWorkspace.input.getBillingSummary.clientId"
      ],
      "routeParamInputStateKeys": [
        "ui.clientBillingWorkspace.input.getBillingSummary.billingSummaryId"
      ],
      "selectedEntityInputStateKeys": [],
      "outputStateKeys": [
        "ui.clientBillingWorkspace.data.getBillingSummary"
      ],
      "statusStateKey": "ui.clientBillingWorkspace.action.getBillingSummary.status"
    },
    {
      "actionId": "getInvoice",
      "kind": "query",
      "commandRef": "getInvoice",
      "routeKey": "buildFlowFsm.clientBillingWorkspace.getInvoice",
      "purpose": "View invoice",
      "methodName": "loadGetInvoice",
      "handlerName": "handleGetInvoiceClick",
      "inputStateKeys": [
        "ui.clientBillingWorkspace.input.getInvoice.invoiceId",
        "ui.clientBillingWorkspace.input.getInvoice.clientId"
      ],
      "routeParamInputStateKeys": [
        "ui.clientBillingWorkspace.input.getInvoice.invoiceId"
      ],
      "selectedEntityInputStateKeys": [],
      "outputStateKeys": [
        "ui.clientBillingWorkspace.data.getInvoice"
      ],
      "statusStateKey": "ui.clientBillingWorkspace.action.getInvoice.status"
    },
    {
      "actionId": "set.getBillingSummaryBillingSummaryId",
      "kind": "stateSetter",
      "stateKey": "ui.clientBillingWorkspace.input.getBillingSummary.billingSummaryId",
      "methodName": "setGetBillingSummaryBillingSummaryId",
      "handlerName": "handleGetBillingSummaryBillingSummaryIdChange"
    },
    {
      "actionId": "set.getBillingSummaryClientId",
      "kind": "stateSetter",
      "stateKey": "ui.clientBillingWorkspace.input.getBillingSummary.clientId",
      "methodName": "setGetBillingSummaryClientId",
      "handlerName": "handleGetBillingSummaryClientIdChange"
    },
    {
      "actionId": "set.getInvoiceInvoiceId",
      "kind": "stateSetter",
      "stateKey": "ui.clientBillingWorkspace.input.getInvoice.invoiceId",
      "methodName": "setGetInvoiceInvoiceId",
      "handlerName": "handleGetInvoiceInvoiceIdChange"
    },
    {
      "actionId": "set.getInvoiceClientId",
      "kind": "stateSetter",
      "stateKey": "ui.clientBillingWorkspace.input.getInvoice.clientId",
      "methodName": "setGetInvoiceClientId",
      "handlerName": "handleGetInvoiceClientIdChange"
    }
  ],
  "initialLoads": [],
  "businessContextRefs": [],
  "navigationRefs": [],
  "i18nMeta": {
    "defaultLocale": "en",
    "activeLocales": [
      "en",
      "pt",
      "es"
    ],
    "runtimeLocales": [
      "en",
      "pt-br",
      "es"
    ]
  },
  "i18n": {
    "section.clientBillingWorkspace.billingSummarySection.title": "Billing Summary",
    "organism.clientBillingWorkspace.getBillingSummary.title": "View billing summary",
    "intent.clientBillingWorkspace.getBillingSummary.list.title": "View billing summary",
    "intent.clientBillingWorkspace.getBillingSummary.list.empty": "Nenhum registro encontrado",
    "intent.clientBillingWorkspace.getBillingSummary.list.column.billingSummaryId.label": "Billing Summary Id",
    "intent.clientBillingWorkspace.getBillingSummary.list.column.projectId.label": "Project Id",
    "intent.clientBillingWorkspace.getBillingSummary.list.column.projectName.label": "Project Name",
    "intent.clientBillingWorkspace.getBillingSummary.list.column.status.label": "Status",
    "intent.clientBillingWorkspace.getBillingSummary.list.column.periodStart.label": "Period Start",
    "intent.clientBillingWorkspace.getBillingSummary.list.column.periodEnd.label": "Period End",
    "intent.clientBillingWorkspace.getBillingSummary.list.column.laborCost.label": "Labor Cost",
    "intent.clientBillingWorkspace.getBillingSummary.list.column.materialCost.label": "Material Cost",
    "intent.clientBillingWorkspace.getBillingSummary.list.column.changeOrderCost.label": "Change Order Cost",
    "intent.clientBillingWorkspace.getBillingSummary.list.column.totalCost.label": "Total Cost",
    "intent.clientBillingWorkspace.getBillingSummary.list.column.sharedAt.label": "Shared At",
    "intent.clientBillingWorkspace.getBillingSummary.list.filter.clientId.label": "Client Id",
    "section.clientBillingWorkspace.invoiceSection.title": "Invoice",
    "organism.clientBillingWorkspace.getInvoice.title": "View invoice",
    "intent.clientBillingWorkspace.getInvoice.list.title": "View invoice",
    "intent.clientBillingWorkspace.getInvoice.list.empty": "Nenhum registro encontrado",
    "intent.clientBillingWorkspace.getInvoice.list.column.invoiceId.label": "Invoice Id",
    "intent.clientBillingWorkspace.getInvoice.list.column.projectId.label": "Project Id",
    "intent.clientBillingWorkspace.getInvoice.list.column.clientId.label": "Client Id",
    "intent.clientBillingWorkspace.getInvoice.list.column.invoiceNumber.label": "Invoice Number",
    "intent.clientBillingWorkspace.getInvoice.list.column.status.label": "Status",
    "intent.clientBillingWorkspace.getInvoice.list.column.totalAmount.label": "Total Amount",
    "intent.clientBillingWorkspace.getInvoice.list.column.sentAt.label": "Sent At",
    "intent.clientBillingWorkspace.getInvoice.list.column.createdAt.label": "Created At",
    "intent.clientBillingWorkspace.getInvoice.list.filter.clientId.label": "Client Id",
    "section.clientBillingWorkspace.billing-summary-section.title": "Billing Summary",
    "section.clientBillingWorkspace.invoice-section.title": "Invoice"
  },
  "automation": {
    "statePrefix": "ui.clientBillingWorkspace",
    "stateKeys": [
      "ui.clientBillingWorkspace.status",
      "ui.clientBillingWorkspace.action.getBillingSummary.status",
      "ui.clientBillingWorkspace.input.getBillingSummary.billingSummaryId",
      "ui.clientBillingWorkspace.input.getBillingSummary.clientId",
      "ui.clientBillingWorkspace.data.getBillingSummary",
      "ui.clientBillingWorkspace.action.getInvoice.status",
      "ui.clientBillingWorkspace.input.getInvoice.invoiceId",
      "ui.clientBillingWorkspace.input.getInvoice.clientId",
      "ui.clientBillingWorkspace.data.getInvoice"
    ],
    "actionIds": [
      "getBillingSummary",
      "getInvoice",
      "set.getBillingSummaryBillingSummaryId",
      "set.getBillingSummaryClientId",
      "set.getInvoiceInvoiceId",
      "set.getInvoiceClientId"
    ]
  }
};

export const pipeline = [
  {
    "id": "clientBillingWorkspace__l2_shared",
    "type": "l2_shared",
    "outputPath": "_102045_/l2/buildFlowFsm/web/shared/clientBillingWorkspace.ts",
    "defPath": "_102045_/l2/buildFlowFsm/web/shared/clientBillingWorkspace.defs.ts",
    "dependsFiles": [
      "_102045_/l2/buildFlowFsm/web/contracts/clientBillingWorkspace.ts",
      "_102029_.d.ts"
    ],
    "dependsOn": [],
    "skills": [
      "_102020_/l2/agentChangeFrontend/skills/genCfeSharedTs.ts"
    ],
    "rulesApplied": [
      "onlyApprovedChangeOrdersAffectCosting",
      "billingSummaryClientFacing",
      "clientBillingAccess",
      "invoiceScopeExternalPayment",
      "invoiceMustReferenceProjectAndClient"
    ],
    "agent": "agentCfeMaterializeGen"
  }
] as const;
