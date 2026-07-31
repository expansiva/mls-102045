/// <mls fileReference="_102045_/l2/buildFlowFsm/web/shared/invoiceWorkspace.defs.ts" enhancement="_blank"/>

export const definition = {
  "pageId": "invoiceWorkspace",
  "pageName": "Invoices",
  "moduleName": "buildFlowFsm",
  "baseClassName": "BuildFlowFsmInvoiceWorkspaceBase",
  "routePattern": "/buildFlowFsm/invoiceWorkspace",
  "sourceKind": "workflow",
  "ownerIds": [
    "workflow:invoiceLifecycle",
    "operation:queryInvoices",
    "operation:createInvoice",
    "operation:sendInvoice"
  ],
  "operationIds": [
    "queryInvoices",
    "createInvoice",
    "sendInvoice"
  ],
  "origin": {
    "source": "l4-journey",
    "workspaceId": "invoiceWorkspace",
    "workspaceKind": "workflow",
    "workflowId": "invoiceLifecycle",
    "actor": "billingStaff",
    "entity": "Invoice",
    "owners": [
      {
        "kind": "workflow",
        "id": "invoiceLifecycle",
        "defPath": "_102045_/l4/buildFlowFsm/workflows/invoiceLifecycle.defs.ts"
      },
      {
        "kind": "operation",
        "id": "queryInvoices",
        "defPath": "_102045_/l4/buildFlowFsm/operations/queryInvoices.defs.ts"
      },
      {
        "kind": "operation",
        "id": "createInvoice",
        "defPath": "_102045_/l4/buildFlowFsm/operations/createInvoice.defs.ts"
      },
      {
        "kind": "operation",
        "id": "sendInvoice",
        "defPath": "_102045_/l4/buildFlowFsm/operations/sendInvoice.defs.ts"
      }
    ],
    "microUserFlow": {
      "source": "l4/story.steps",
      "workflowSteps": [
        "Billing staff selects the approved job costs and change orders to include on the invoice.",
        "Billing staff generates a draft invoice from the selected costs for the project and client.",
        "Billing staff reviews the invoice for accuracy and sends it to the client."
      ],
      "operations": [
        {
          "operationId": "queryInvoices",
          "commandName": "queryInvoices",
          "steps": [
            "Open the invoices list",
            "Optionally filter by status, project, or client",
            "Scan invoice number, client, project, status, total amount, and dates",
            "Select an invoice to review or send"
          ]
        },
        {
          "operationId": "createInvoice",
          "commandName": "createInvoice",
          "steps": [
            "Select the project to bill",
            "Review approved labor, material, and change-order costs that will form the total",
            "Enter a human-readable invoice number",
            "Confirm creation of the invoice as a draft billing document"
          ]
        },
        {
          "operationId": "sendInvoice",
          "commandName": "sendInvoice",
          "steps": [
            "Select the draft invoice to send",
            "Review invoice number, client, project, and total amount for accuracy",
            "Confirm sending the invoice to the client",
            "System marks the invoice as sent and records the send timestamp"
          ]
        }
      ]
    }
  },
  "contractRef": {
    "tsPath": "_102045_/l2/buildFlowFsm/web/contracts/invoiceWorkspace.ts",
    "contracts": [
      {
        "commandName": "listInvoices",
        "routeConst": "listInvoicesRoute"
      },
      {
        "commandName": "createInvoiceCmd",
        "routeConst": "createInvoiceCmdRoute"
      },
      {
        "commandName": "sendInvoiceCmd",
        "routeConst": "sendInvoiceCmdRoute"
      }
    ]
  },
  "layoutRef": {
    "defPath": "_102045_/l2/buildFlowFsm/web/desktop/page11/invoiceWorkspace.defs.ts",
    "layoutId": "kanban_pipeline"
  },
  "states": [
    {
      "stateKey": "ui.invoiceWorkspace.status",
      "name": "status",
      "kind": "pageStatus",
      "defaultValue": ""
    },
    {
      "stateKey": "ui.invoiceWorkspace.action.listInvoices.status",
      "name": "listInvoicesState",
      "kind": "actionStatus",
      "actionRef": "listInvoices",
      "valueSet": [
        "idle",
        "loading",
        "success",
        "error"
      ],
      "defaultValue": "idle"
    },
    {
      "stateKey": "ui.invoiceWorkspace.input.listInvoices.status",
      "name": "listInvoicesStatus",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "listInvoices",
        "direction": "input",
        "field": "status"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.invoiceWorkspace.input.listInvoices.projectId",
      "name": "listInvoicesProjectId",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "listInvoices",
        "direction": "input",
        "field": "projectId"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.invoiceWorkspace.input.listInvoices.clientId",
      "name": "listInvoicesClientId",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "listInvoices",
        "direction": "input",
        "field": "clientId"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.invoiceWorkspace.input.listInvoices.page",
      "name": "listInvoicesPage",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "listInvoices",
        "direction": "input",
        "field": "page"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.invoiceWorkspace.input.listInvoices.pageSize",
      "name": "listInvoicesPageSize",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "listInvoices",
        "direction": "input",
        "field": "pageSize"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.invoiceWorkspace.data.listInvoices",
      "name": "listInvoicesData",
      "kind": "queryResult",
      "contractRef": {
        "commandName": "listInvoices",
        "direction": "output"
      },
      "outputShape": "paginated",
      "collection": false,
      "defaultValue": {
        "items": [],
        "total": 0
      }
    },
    {
      "stateKey": "ui.invoiceWorkspace.action.createInvoiceCmd.status",
      "name": "createInvoiceCmdState",
      "kind": "actionStatus",
      "actionRef": "createInvoiceCmd",
      "valueSet": [
        "idle",
        "loading",
        "success",
        "error"
      ],
      "defaultValue": "idle"
    },
    {
      "stateKey": "ui.invoiceWorkspace.input.createInvoiceCmd.projectId",
      "name": "createInvoiceCmdProjectId",
      "kind": "input",
      "source": "selectedEntity",
      "presentation": "selection",
      "contractRef": {
        "commandName": "createInvoiceCmd",
        "direction": "input",
        "field": "projectId"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.invoiceWorkspace.input.createInvoiceCmd.invoiceNumber",
      "name": "createInvoiceCmdInvoiceNumber",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "createInvoiceCmd",
        "direction": "input",
        "field": "invoiceNumber"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.invoiceWorkspace.input.createInvoiceCmd.clientId",
      "name": "createInvoiceCmdClientId",
      "kind": "input",
      "source": "selectedEntity",
      "presentation": "selection",
      "contractRef": {
        "commandName": "createInvoiceCmd",
        "direction": "input",
        "field": "clientId"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.invoiceWorkspace.output.createInvoiceCmd",
      "name": "createInvoiceCmdOutput",
      "kind": "commandOutput",
      "contractRef": {
        "commandName": "createInvoiceCmd",
        "direction": "output"
      },
      "defaultValue": null
    },
    {
      "stateKey": "ui.invoiceWorkspace.action.createInvoiceCmd.error",
      "name": "createInvoiceCmdError",
      "kind": "actionError",
      "actionRef": "createInvoiceCmd",
      "defaultValue": ""
    },
    {
      "stateKey": "ui.invoiceWorkspace.action.sendInvoiceCmd.status",
      "name": "sendInvoiceCmdState",
      "kind": "actionStatus",
      "actionRef": "sendInvoiceCmd",
      "valueSet": [
        "idle",
        "loading",
        "success",
        "error"
      ],
      "defaultValue": "idle"
    },
    {
      "stateKey": "ui.invoiceWorkspace.input.sendInvoiceCmd.invoiceId",
      "name": "sendInvoiceCmdInvoiceId",
      "kind": "input",
      "source": "selectedEntity",
      "presentation": "selection",
      "contractRef": {
        "commandName": "sendInvoiceCmd",
        "direction": "input",
        "field": "invoiceId"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.invoiceWorkspace.output.sendInvoiceCmd",
      "name": "sendInvoiceCmdOutput",
      "kind": "commandOutput",
      "contractRef": {
        "commandName": "sendInvoiceCmd",
        "direction": "output"
      },
      "defaultValue": null
    },
    {
      "stateKey": "ui.invoiceWorkspace.action.sendInvoiceCmd.error",
      "name": "sendInvoiceCmdError",
      "kind": "actionError",
      "actionRef": "sendInvoiceCmd",
      "defaultValue": ""
    }
  ],
  "actions": [
    {
      "actionId": "listInvoices",
      "kind": "query",
      "commandRef": "listInvoices",
      "routeKey": "buildFlowFsm.invoiceWorkspace.listInvoices",
      "purpose": "Browse invoices",
      "methodName": "loadListInvoices",
      "handlerName": "handleListInvoicesClick",
      "inputStateKeys": [
        "ui.invoiceWorkspace.input.listInvoices.status",
        "ui.invoiceWorkspace.input.listInvoices.projectId",
        "ui.invoiceWorkspace.input.listInvoices.clientId",
        "ui.invoiceWorkspace.input.listInvoices.page",
        "ui.invoiceWorkspace.input.listInvoices.pageSize"
      ],
      "routeParamInputStateKeys": [],
      "selectedEntityInputStateKeys": [],
      "outputStateKeys": [
        "ui.invoiceWorkspace.data.listInvoices"
      ],
      "statusStateKey": "ui.invoiceWorkspace.action.listInvoices.status"
    },
    {
      "actionId": "createInvoiceCmd",
      "kind": "command",
      "commandRef": "createInvoiceCmd",
      "routeKey": "buildFlowFsm.invoiceWorkspace.createInvoiceCmd",
      "purpose": "Create invoice",
      "methodName": "createInvoiceCmd",
      "handlerName": "handleCreateInvoiceCmdClick",
      "inputStateKeys": [
        "ui.invoiceWorkspace.input.createInvoiceCmd.projectId",
        "ui.invoiceWorkspace.input.createInvoiceCmd.invoiceNumber",
        "ui.invoiceWorkspace.input.createInvoiceCmd.clientId"
      ],
      "routeParamInputStateKeys": [],
      "selectedEntityInputStateKeys": [
        "ui.invoiceWorkspace.input.createInvoiceCmd.projectId",
        "ui.invoiceWorkspace.input.createInvoiceCmd.clientId"
      ],
      "outputStateKeys": [
        "ui.invoiceWorkspace.output.createInvoiceCmd"
      ],
      "statusStateKey": "ui.invoiceWorkspace.action.createInvoiceCmd.status",
      "errorStateKey": "ui.invoiceWorkspace.action.createInvoiceCmd.error",
      "feedback": {
        "successMessageKey": "action.createInvoiceCmd.success",
        "errorMessageKey": "action.createInvoiceCmd.error",
        "dismissible": true
      },
      "clearInputStateKeys": [
        "ui.invoiceWorkspace.input.createInvoiceCmd.projectId",
        "ui.invoiceWorkspace.input.createInvoiceCmd.invoiceNumber",
        "ui.invoiceWorkspace.input.createInvoiceCmd.clientId"
      ],
      "refreshActionIds": [
        "listInvoices"
      ]
    },
    {
      "actionId": "sendInvoiceCmd",
      "kind": "command",
      "commandRef": "sendInvoiceCmd",
      "routeKey": "buildFlowFsm.invoiceWorkspace.sendInvoiceCmd",
      "purpose": "Send invoice to client",
      "methodName": "sendInvoiceCmd",
      "handlerName": "handleSendInvoiceCmdClick",
      "inputStateKeys": [
        "ui.invoiceWorkspace.input.sendInvoiceCmd.invoiceId"
      ],
      "routeParamInputStateKeys": [],
      "selectedEntityInputStateKeys": [
        "ui.invoiceWorkspace.input.sendInvoiceCmd.invoiceId"
      ],
      "outputStateKeys": [
        "ui.invoiceWorkspace.output.sendInvoiceCmd"
      ],
      "statusStateKey": "ui.invoiceWorkspace.action.sendInvoiceCmd.status",
      "errorStateKey": "ui.invoiceWorkspace.action.sendInvoiceCmd.error",
      "feedback": {
        "successMessageKey": "action.sendInvoiceCmd.success",
        "errorMessageKey": "action.sendInvoiceCmd.error",
        "dismissible": true
      },
      "clearInputStateKeys": [
        "ui.invoiceWorkspace.input.sendInvoiceCmd.invoiceId"
      ],
      "refreshActionIds": [
        "listInvoices"
      ]
    },
    {
      "actionId": "set.listInvoicesStatus",
      "kind": "stateSetter",
      "stateKey": "ui.invoiceWorkspace.input.listInvoices.status",
      "methodName": "setListInvoicesStatus",
      "handlerName": "handleListInvoicesStatusChange"
    },
    {
      "actionId": "set.listInvoicesProjectId",
      "kind": "stateSetter",
      "stateKey": "ui.invoiceWorkspace.input.listInvoices.projectId",
      "methodName": "setListInvoicesProjectId",
      "handlerName": "handleListInvoicesProjectIdChange"
    },
    {
      "actionId": "set.listInvoicesClientId",
      "kind": "stateSetter",
      "stateKey": "ui.invoiceWorkspace.input.listInvoices.clientId",
      "methodName": "setListInvoicesClientId",
      "handlerName": "handleListInvoicesClientIdChange"
    },
    {
      "actionId": "set.listInvoicesPage",
      "kind": "stateSetter",
      "stateKey": "ui.invoiceWorkspace.input.listInvoices.page",
      "methodName": "setListInvoicesPage",
      "handlerName": "handleListInvoicesPageChange"
    },
    {
      "actionId": "set.listInvoicesPageSize",
      "kind": "stateSetter",
      "stateKey": "ui.invoiceWorkspace.input.listInvoices.pageSize",
      "methodName": "setListInvoicesPageSize",
      "handlerName": "handleListInvoicesPageSizeChange"
    },
    {
      "actionId": "set.createInvoiceCmdProjectId",
      "kind": "stateSetter",
      "stateKey": "ui.invoiceWorkspace.input.createInvoiceCmd.projectId",
      "methodName": "setCreateInvoiceCmdProjectId",
      "handlerName": "handleCreateInvoiceCmdProjectIdChange"
    },
    {
      "actionId": "set.createInvoiceCmdInvoiceNumber",
      "kind": "stateSetter",
      "stateKey": "ui.invoiceWorkspace.input.createInvoiceCmd.invoiceNumber",
      "methodName": "setCreateInvoiceCmdInvoiceNumber",
      "handlerName": "handleCreateInvoiceCmdInvoiceNumberChange"
    },
    {
      "actionId": "set.createInvoiceCmdClientId",
      "kind": "stateSetter",
      "stateKey": "ui.invoiceWorkspace.input.createInvoiceCmd.clientId",
      "methodName": "setCreateInvoiceCmdClientId",
      "handlerName": "handleCreateInvoiceCmdClientIdChange"
    },
    {
      "actionId": "set.sendInvoiceCmdInvoiceId",
      "kind": "stateSetter",
      "stateKey": "ui.invoiceWorkspace.input.sendInvoiceCmd.invoiceId",
      "methodName": "setSendInvoiceCmdInvoiceId",
      "handlerName": "handleSendInvoiceCmdInvoiceIdChange"
    }
  ],
  "initialLoads": [
    {
      "actionId": "listInvoices",
      "stateKey": "ui.invoiceWorkspace.data.listInvoices"
    }
  ],
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
    "section.invoiceWorkspace.invoiceListSection.title": "Invoice Pipeline",
    "organism.invoiceWorkspace.inline-row-command10.title": "Inline row command",
    "intent.invoiceWorkspace.inline-row-command10.content.title": "Inline row command",
    "organism.invoiceWorkspace.listInvoices.title": "Browse invoices",
    "intent.invoiceWorkspace.listInvoices.list.title": "Browse invoices",
    "intent.invoiceWorkspace.listInvoices.list.empty": "Nenhum registro encontrado",
    "intent.invoiceWorkspace.listInvoices.list.column.invoices.label": "Invoices",
    "intent.invoiceWorkspace.listInvoices.list.column.total.label": "Total",
    "intent.invoiceWorkspace.listInvoices.list.filter.status.label": "Status",
    "intent.invoiceWorkspace.listInvoices.list.filter.projectId.label": "Project Id",
    "intent.invoiceWorkspace.listInvoices.list.filter.clientId.label": "Client Id",
    "intent.invoiceWorkspace.listInvoices.list.filter.page.label": "Page",
    "intent.invoiceWorkspace.listInvoices.list.filter.pageSize.label": "Page Size",
    "organism.invoiceWorkspace.sendInvoiceCmd.title": "Send invoice to client",
    "intent.invoiceWorkspace.sendInvoiceCmd.form.title": "Send invoice to client",
    "intent.invoiceWorkspace.sendInvoiceCmd.form.action.sendInvoiceCmd": "Send invoice to client",
    "section.invoiceWorkspace.createInvoiceSection.title": "Create Invoice",
    "organism.invoiceWorkspace.createInvoiceCmd.title": "Create invoice",
    "intent.invoiceWorkspace.createInvoiceCmd.form.title": "Create invoice",
    "intent.invoiceWorkspace.createInvoiceCmd.form.action.createInvoiceCmd": "Create invoice",
    "intent.invoiceWorkspace.createInvoiceCmd.form.field.invoiceNumber.label": "Invoice Number",
    "section.invoiceWorkspace.sec-invoice-list.title": "Invoice List",
    "organism.invoiceWorkspace.summary-first10.title": "Summary first",
    "intent.invoiceWorkspace.summary-first10.content.title": "Summary first",
    "section.invoiceWorkspace.sec-create-invoice.title": "Create Invoice"
  },
  "automation": {
    "statePrefix": "ui.invoiceWorkspace",
    "stateKeys": [
      "ui.invoiceWorkspace.status",
      "ui.invoiceWorkspace.action.listInvoices.status",
      "ui.invoiceWorkspace.input.listInvoices.status",
      "ui.invoiceWorkspace.input.listInvoices.projectId",
      "ui.invoiceWorkspace.input.listInvoices.clientId",
      "ui.invoiceWorkspace.input.listInvoices.page",
      "ui.invoiceWorkspace.input.listInvoices.pageSize",
      "ui.invoiceWorkspace.data.listInvoices",
      "ui.invoiceWorkspace.action.createInvoiceCmd.status",
      "ui.invoiceWorkspace.input.createInvoiceCmd.projectId",
      "ui.invoiceWorkspace.input.createInvoiceCmd.invoiceNumber",
      "ui.invoiceWorkspace.input.createInvoiceCmd.clientId",
      "ui.invoiceWorkspace.output.createInvoiceCmd",
      "ui.invoiceWorkspace.action.createInvoiceCmd.error",
      "ui.invoiceWorkspace.action.sendInvoiceCmd.status",
      "ui.invoiceWorkspace.input.sendInvoiceCmd.invoiceId",
      "ui.invoiceWorkspace.output.sendInvoiceCmd",
      "ui.invoiceWorkspace.action.sendInvoiceCmd.error"
    ],
    "actionIds": [
      "listInvoices",
      "createInvoiceCmd",
      "sendInvoiceCmd",
      "set.listInvoicesStatus",
      "set.listInvoicesProjectId",
      "set.listInvoicesClientId",
      "set.listInvoicesPage",
      "set.listInvoicesPageSize",
      "set.createInvoiceCmdProjectId",
      "set.createInvoiceCmdInvoiceNumber",
      "set.createInvoiceCmdClientId",
      "set.sendInvoiceCmdInvoiceId"
    ]
  }
};

export const pipeline = [
  {
    "id": "invoiceWorkspace__l2_shared",
    "type": "l2_shared",
    "outputPath": "_102045_/l2/buildFlowFsm/web/shared/invoiceWorkspace.ts",
    "defPath": "_102045_/l2/buildFlowFsm/web/shared/invoiceWorkspace.defs.ts",
    "dependsFiles": [
      "_102045_/l2/buildFlowFsm/web/contracts/invoiceWorkspace.ts",
      "_102029_.d.ts"
    ],
    "dependsOn": [],
    "skills": [
      "_102020_/l2/agentChangeFrontend/skills/genCfeSharedTs.ts"
    ],
    "rulesApplied": [
      "invoiceScopeExternalPayment",
      "invoiceMustReferenceProjectAndClient",
      "clientBillingAccess",
      "onlyApprovedChangeOrdersAffectCosting"
    ],
    "agent": "agentCfeMaterializeGen"
  }
] as const;
