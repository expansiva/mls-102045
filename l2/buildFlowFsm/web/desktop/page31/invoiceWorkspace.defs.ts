/// <mls fileReference="_102045_/l2/buildFlowFsm/web/desktop/page31/invoiceWorkspace.defs.ts" enhancement="_blank"/>

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
    "primaryDecision": "Which invoice to act on next — create a new draft or send an existing draft to the client.",
    "decisiveInfo": [
      "invoiceNumber",
      "status (draft/sent)",
      "totalAmount",
      "clientId",
      "projectId",
      "sentAt",
      "createdAt"
    ],
    "usageFrequency": "Occasional / back-office — billing staff visits this page per billing cycle to generate and dispatch invoices.",
    "criticalActions": [
      {
        "action": "createInvoiceCmd",
        "presentation": "primary-button opening an inline creation form with project picker, client picker (context-derived), and invoice number input"
      },
      {
        "action": "sendInvoiceCmd",
        "presentation": "contextual-transition-actions — a single 'Send to Client' button rendered inline on each draft-status row; never a free select or manually typed id"
      },
      {
        "action": "listInvoices",
        "presentation": "master-detail paginated table as the dominant surface, with filter controls folded into the toolbar"
      }
    ],
    "informationHierarchy": [
      "Invoice list with status, invoice number, client, project, total amount, and dates — the primary scan surface",
      "Filter controls (status, project, client) folded into the list toolbar for quick narrowing",
      "Contextual 'Send to Client' action on each draft row — visible only when status = draft",
      "Create Invoice form — accessible via a prominent primary button, collects only true user decisions (project, client, invoice number)"
    ],
    "successCriteria": "Billing staff can scan all invoices at a glance, filter to the relevant subset, create a new draft in under 30 seconds, and send a draft to the client with a single contextual action — without typing any system-owned id.",
    "antiPatterns": [
      "Separate full-page form for sendInvoiceCmd — it must be an inline row action",
      "Free <select> over all invoice status enum values for the send transition",
      "Manually typed invoiceId or projectId as form inputs",
      "Separate section per query — filters must fold into the list surface",
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
    "id": "invoiceWorkspace__page31__l2_page",
    "type": "l2_page",
    "outputPath": "_102045_/l2/buildFlowFsm/web/desktop/page31/invoiceWorkspace.ts",
    "defPath": "_102045_/l2/buildFlowFsm/web/desktop/page31/invoiceWorkspace.defs.ts",
    "dependsFiles": [
      "_102045_/l2/buildFlowFsm/web/shared/invoiceWorkspace.ts",
      "_102045_/l2/designSystem.ts"
    ],
    "dependsOn": [
      "invoiceWorkspace__l2_shared"
    ],
    "skills": [
      "_102020_/l2/agentChangeFrontend/skills/genCfePage21RenderTs.ts",
      "_102020_/l4/collabux/templates/financialTransactions/page31.md"
    ],
    "visualStyle": {
      "description": "Desktop-first for PM and billing staff with mobile-optimized field entry; dashboard-driven, status-aware, touch-friendly UI with Gantt-ish timeline views."
    },
    "agent": "agentCfeMaterializeGen"
  }
] as const;
