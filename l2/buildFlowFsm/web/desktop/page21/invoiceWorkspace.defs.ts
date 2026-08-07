/// <mls fileReference="_102045_/l2/buildFlowFsm/web/desktop/page21/invoiceWorkspace.defs.ts" enhancement="_blank"/>

export const definition = {
  "pageId": "invoiceWorkspace",
  "pageName": "Invoices",
  "baseClassName": "BuildFlowFsmInvoiceWorkspaceBase",
  "actor": "billingStaff",
  "purpose": "Billing staff generates invoices from approved costs and sends them to clients.",
  "presentation": {
    "categoryRef": "financialTransactions"
  },
  "pageObjective": {
    "actor": "Billing staff",
    "jobToBeDone": "Generate draft invoices from approved project costs and send them to clients, while being able to browse and filter all invoices by status, project, or client.",
    "primaryDecision": "Which invoice to act on — create a new one or send an existing draft to the client.",
    "decisiveInfo": [
      "invoiceNumber",
      "status",
      "totalAmount",
      "clientId",
      "projectId",
      "sentAt",
      "createdAt"
    ],
    "usageFrequency": "Occasional / back-office billing cycle — used when billing period closes and invoices need to be generated and dispatched.",
    "criticalActions": [
      {
        "action": "createInvoiceCmd",
        "presentation": "primary-button opening an inline form panel; projectId and clientId are pickers (never typed ids); invoiceNumber is the only free-text input"
      },
      {
        "action": "sendInvoiceCmd",
        "presentation": "contextual-transition-actions — a single 'Send to Client' button rendered inline on each draft-status row; invoiceId is derived from selection, never typed"
      },
      {
        "action": "listInvoices",
        "presentation": "paginated table as the primary surface with filter controls folded into the toolbar"
      }
    ],
    "informationHierarchy": [
      "Invoice list with status, invoiceNumber, client, project, totalAmount, sentAt/createdAt — the operational overview",
      "Filter bar (status, project, client) folded into the list toolbar — narrows the list without leaving the surface",
      "Contextual Send action on each draft row — the most frequent next step for existing invoices",
      "Create Invoice form panel — used less frequently, triggered from a toolbar primary button"
    ],
    "successCriteria": "Billing staff can scan all invoices, filter to the relevant subset, send a draft invoice in one click from the row, and create a new invoice without navigating away — all without typing any system-owned id.",
    "antiPatterns": [
      "Separate full-page form for sendInvoiceCmd — it is a one-decision transition and must be inline",
      "Free <select> over all invoice status enum values for the send transition",
      "Manually typed invoiceId, projectId, or clientId as form inputs",
      "Stacking createInvoice as a permanently visible form below the list",
      "Showing system-owned fields (invoiceId, createdAt, updatedAt) as editable inputs"
    ]
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
    "id": "invoiceWorkspace__page21__l2_page",
    "type": "l2_page",
    "outputPath": "_102045_/l2/buildFlowFsm/web/desktop/page21/invoiceWorkspace.ts",
    "defPath": "_102045_/l2/buildFlowFsm/web/desktop/page21/invoiceWorkspace.defs.ts",
    "dependsFiles": [
      "_102045_/l2/buildFlowFsm/web/shared/invoiceWorkspace.ts",
      "_102045_/l2/designSystem.ts"
    ],
    "dependsOn": [
      "invoiceWorkspace__l2_shared"
    ],
    "skills": [
      "_102020_/l2/agentChangeFrontend/skills/genCfePage21RenderTs.ts",
      "_102020_/l4/collabux/templates/financialTransactions/page21.md"
    ],
    "visualStyle": {
      "description": "Desktop-first for PM and billing staff with mobile-optimized field entry; dashboard-driven, status-aware, touch-friendly UI with Gantt-ish timeline views."
    },
    "agent": "agentCfeMaterializeGen"
  }
] as const;
