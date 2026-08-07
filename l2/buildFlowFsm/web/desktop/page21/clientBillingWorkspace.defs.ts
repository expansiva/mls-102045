/// <mls fileReference="_102045_/l2/buildFlowFsm/web/desktop/page21/clientBillingWorkspace.defs.ts" enhancement="_blank"/>

export const definition = {
  "pageId": "clientBillingWorkspace",
  "pageName": "My Billing",
  "baseClassName": "BuildFlowFsmClientBillingWorkspaceBase",
  "actor": "client",
  "purpose": "Client reviews billing summaries and invoices shared by billing staff.",
  "presentation": {
    "categoryRef": "readOnlyDetailPortal"
  },
  "pageObjective": {
    "actor": "Client (project owner reviewing charges)",
    "jobToBeDone": "Review the billing summary and invoice shared by billing staff so the client can understand project charges and confirm the amounts before external payment.",
    "primaryDecision": "Understand and verify the billing summary cost breakdown (labor, material, change orders, total) for the project period.",
    "decisiveInfo": [
      "projectName",
      "periodStart",
      "periodEnd",
      "laborCost",
      "materialCost",
      "changeOrderCost",
      "totalCost",
      "status (BillingSummary)",
      "invoiceNumber",
      "totalAmount (Invoice)",
      "status (Invoice)",
      "sentAt"
    ],
    "usageFrequency": "Occasional — client opens this page when notified that a billing summary or invoice has been shared; read-only review session.",
    "criticalActions": [
      {
        "action": "View billing summary cost breakdown",
        "presentation": "summary-first — lead with period and totals, then cost line items below"
      },
      {
        "action": "View invoice details",
        "presentation": "detail panel — invoice number, status, total amount, sent date as read-only fields"
      }
    ],
    "informationHierarchy": [
      "1. Billing summary header: project name, billing period, overall status",
      "2. Cost breakdown: labor, material, change-order, total cost",
      "3. Invoice panel: invoice number, status, total amount, sent date",
      "4. Contextual note: payment handled externally (informational)"
    ],
    "successCriteria": "The client can immediately see what they are being charged for, the period it covers, and the corresponding invoice details — all without any manual input or navigation away from the page.",
    "antiPatterns": [
      "Exposing billingSummaryId or invoiceId as typed inputs — both are route-param context",
      "Exposing clientId as a form field — it comes from the actor session",
      "Rendering status as an editable select — it is a system-owned read-only field",
      "Splitting billing summary and invoice into completely separate pages requiring extra navigation",
      "Showing a CRUD form for a read-only review screen"
    ]
  },
  "dataBindings": [
    {
      "id": "binding.clientBillingWorkspace.getBillingSummary",
      "source": "bff.getBillingSummary",
      "command": "getBillingSummary",
      "description": "View billing summary",
      "kind": "query",
      "stateKey": "ui.clientBillingWorkspace.data.getBillingSummary",
      "inputStateKeys": [
        "ui.clientBillingWorkspace.input.getBillingSummary.billingSummaryId",
        "ui.clientBillingWorkspace.input.getBillingSummary.clientId"
      ],
      "inputs": [
        {
          "name": "billingSummaryId",
          "stateKey": "ui.clientBillingWorkspace.input.getBillingSummary.billingSummaryId",
          "source": "routeParam",
          "required": true,
          "presentation": "route"
        },
        {
          "name": "clientId",
          "stateKey": "ui.clientBillingWorkspace.input.getBillingSummary.clientId",
          "source": "actorSession",
          "required": true,
          "presentation": "form"
        }
      ]
    },
    {
      "id": "binding.clientBillingWorkspace.getInvoice",
      "source": "bff.getInvoice",
      "command": "getInvoice",
      "description": "View invoice",
      "kind": "query",
      "stateKey": "ui.clientBillingWorkspace.data.getInvoice",
      "inputStateKeys": [
        "ui.clientBillingWorkspace.input.getInvoice.invoiceId",
        "ui.clientBillingWorkspace.input.getInvoice.clientId"
      ],
      "inputs": [
        {
          "name": "invoiceId",
          "stateKey": "ui.clientBillingWorkspace.input.getInvoice.invoiceId",
          "source": "routeParam",
          "required": true,
          "presentation": "route"
        },
        {
          "name": "clientId",
          "stateKey": "ui.clientBillingWorkspace.input.getInvoice.clientId",
          "source": "actorSession",
          "required": true,
          "presentation": "form"
        }
      ]
    }
  ]
};

export const pipeline = [
  {
    "id": "clientBillingWorkspace__page21__l2_page",
    "type": "l2_page",
    "outputPath": "_102045_/l2/buildFlowFsm/web/desktop/page21/clientBillingWorkspace.ts",
    "defPath": "_102045_/l2/buildFlowFsm/web/desktop/page21/clientBillingWorkspace.defs.ts",
    "dependsFiles": [
      "_102045_/l2/buildFlowFsm/web/shared/clientBillingWorkspace.ts",
      "_102045_/l2/designSystem.ts"
    ],
    "dependsOn": [
      "clientBillingWorkspace__l2_shared"
    ],
    "skills": [
      "_102020_/l2/agentChangeFrontend/skills/genCfePage21RenderTs.ts",
      "_102020_/l4/collabux/templates/readOnlyDetailPortal/page21.md"
    ],
    "visualStyle": {
      "description": "Desktop-first for PM and billing staff with mobile-optimized field entry; dashboard-driven, status-aware, touch-friendly UI with Gantt-ish timeline views."
    },
    "agent": "agentCfeMaterializeGen"
  }
] as const;
