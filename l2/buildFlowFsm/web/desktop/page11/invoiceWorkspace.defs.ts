/// <mls fileReference="_102045_/l2/buildFlowFsm/web/desktop/page11/invoiceWorkspace.defs.ts" enhancement="_blank"/>

export const definition = {
  "pageId": "invoiceWorkspace",
  "pageName": "Invoices",
  "baseClassName": "BuildFlowFsmInvoiceWorkspaceBase",
  "actor": "billingStaff",
  "purpose": "Billing staff generates invoices from approved costs and sends them to clients.",
  "presentation": {
    "categoryRef": "financialTransactions"
  },
  "dataBindings": [
    {
      "id": "binding.invoiceWorkspace.listInvoices",
      "source": "bff.listInvoices",
      "command": "listInvoices",
      "description": "Browse invoices",
      "kind": "query",
      "stateKey": "ui.invoiceWorkspace.data.listInvoices",
      "inputStateKeys": [
        "ui.invoiceWorkspace.input.listInvoices.status",
        "ui.invoiceWorkspace.input.listInvoices.projectId",
        "ui.invoiceWorkspace.input.listInvoices.clientId",
        "ui.invoiceWorkspace.input.listInvoices.page",
        "ui.invoiceWorkspace.input.listInvoices.pageSize"
      ],
      "inputs": [
        {
          "name": "status",
          "stateKey": "ui.invoiceWorkspace.input.listInvoices.status",
          "source": "userInput",
          "required": false,
          "presentation": "form"
        },
        {
          "name": "projectId",
          "stateKey": "ui.invoiceWorkspace.input.listInvoices.projectId",
          "source": "userInput",
          "required": false,
          "presentation": "form"
        },
        {
          "name": "clientId",
          "stateKey": "ui.invoiceWorkspace.input.listInvoices.clientId",
          "source": "userInput",
          "required": false,
          "presentation": "form"
        },
        {
          "name": "page",
          "stateKey": "ui.invoiceWorkspace.input.listInvoices.page",
          "source": "userInput",
          "required": false,
          "presentation": "form"
        },
        {
          "name": "pageSize",
          "stateKey": "ui.invoiceWorkspace.input.listInvoices.pageSize",
          "source": "userInput",
          "required": false,
          "presentation": "form"
        }
      ]
    },
    {
      "id": "binding.invoiceWorkspace.createInvoiceCmd",
      "source": "bff.createInvoiceCmd",
      "command": "createInvoiceCmd",
      "description": "Create invoice",
      "kind": "command",
      "stateKey": "ui.invoiceWorkspace.output.createInvoiceCmd",
      "inputStateKeys": [
        "ui.invoiceWorkspace.input.createInvoiceCmd.projectId",
        "ui.invoiceWorkspace.input.createInvoiceCmd.invoiceNumber",
        "ui.invoiceWorkspace.input.createInvoiceCmd.clientId"
      ],
      "inputs": [
        {
          "name": "projectId",
          "stateKey": "ui.invoiceWorkspace.input.createInvoiceCmd.projectId",
          "source": "selectedEntity",
          "required": true,
          "presentation": "selection"
        },
        {
          "name": "invoiceNumber",
          "stateKey": "ui.invoiceWorkspace.input.createInvoiceCmd.invoiceNumber",
          "source": "userInput",
          "required": true,
          "presentation": "form"
        },
        {
          "name": "clientId",
          "stateKey": "ui.invoiceWorkspace.input.createInvoiceCmd.clientId",
          "source": "selectedEntity",
          "required": true,
          "presentation": "selection"
        }
      ]
    },
    {
      "id": "binding.invoiceWorkspace.sendInvoiceCmd",
      "source": "bff.sendInvoiceCmd",
      "command": "sendInvoiceCmd",
      "description": "Send invoice to client",
      "kind": "command",
      "stateKey": "ui.invoiceWorkspace.output.sendInvoiceCmd",
      "inputStateKeys": [
        "ui.invoiceWorkspace.input.sendInvoiceCmd.invoiceId"
      ],
      "inputs": [
        {
          "name": "invoiceId",
          "stateKey": "ui.invoiceWorkspace.input.sendInvoiceCmd.invoiceId",
          "source": "selectedEntity",
          "required": true,
          "presentation": "selection"
        }
      ]
    }
  ]
};

export const pipeline = [
  {
    "id": "invoiceWorkspace__l2_page",
    "type": "l2_page",
    "outputPath": "_102045_/l2/buildFlowFsm/web/desktop/page11/invoiceWorkspace.ts",
    "defPath": "_102045_/l2/buildFlowFsm/web/desktop/page11/invoiceWorkspace.defs.ts",
    "dependsFiles": [
      "_102045_/l2/buildFlowFsm/web/shared/invoiceWorkspace.ts",
      "_102045_/l2/designSystem.ts"
    ],
    "dependsOn": [
      "invoiceWorkspace__l2_shared"
    ],
    "skills": [
      "_102020_/l2/agentChangeFrontend/skills/genCfePage11RenderTs.ts"
    ],
    "visualStyle": {
      "description": "Desktop-first for PM and billing staff with mobile-optimized field entry; dashboard-driven, status-aware, touch-friendly UI with Gantt-ish timeline views."
    },
    "agent": "agentCfeMaterializeGen"
  }
] as const;
