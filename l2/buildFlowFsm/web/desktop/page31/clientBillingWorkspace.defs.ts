/// <mls fileReference="_102045_/l2/buildFlowFsm/web/desktop/page31/clientBillingWorkspace.defs.ts" enhancement="_blank"/>

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
    "actor": "Client (project owner reviewing shared billing documents)",
    "jobToBeDone": "Review the billing summary and invoice shared by billing staff to understand project charges and confirm the total amount owed.",
    "primaryDecision": "Understand and verify the billing summary cost breakdown and the corresponding invoice total before handling payment externally.",
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
      "totalAmount",
      "status (Invoice)",
      "sentAt"
    ],
    "usageFrequency": "Occasional — client opens this page when notified that a billing summary or invoice has been shared; read-only review session.",
    "criticalActions": [
      {
        "action": "View billing summary cost breakdown",
        "presentation": "summary-first panel showing period, cost line items and total"
      },
      {
        "action": "View invoice details",
        "presentation": "detail panel showing invoice number, status, total amount and sent date"
      }
    ],
    "informationHierarchy": [
      "1. Billing summary header — project name, period, status",
      "2. Cost breakdown — labor, material, change-order costs and total",
      "3. Invoice header — invoice number, status, sent date",
      "4. Invoice financial detail — total amount, project and client references"
    ],
    "successCriteria": "The client can immediately see the project billing period, all cost components, the grand total, and the matching invoice details without any manual data entry or navigation confusion.",
    "antiPatterns": [
      "Exposing billingSummaryId or invoiceId as typed inputs — both are route-param context",
      "Exposing clientId as a form field — it comes from the actor session",
      "Rendering status as an editable select — it is a read-only system-owned field",
      "Stacking two independent full-width query forms instead of a cohesive summary-then-detail layout",
      "Adding any write/mutation actions — this page is read-only for the client"
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
    "id": "clientBillingWorkspace__page31__l2_page",
    "type": "l2_page",
    "outputPath": "_102045_/l2/buildFlowFsm/web/desktop/page31/clientBillingWorkspace.ts",
    "defPath": "_102045_/l2/buildFlowFsm/web/desktop/page31/clientBillingWorkspace.defs.ts",
    "dependsFiles": [
      "_102045_/l2/buildFlowFsm/web/shared/clientBillingWorkspace.ts",
      "_102045_/l2/designSystem.ts"
    ],
    "dependsOn": [
      "clientBillingWorkspace__l2_shared"
    ],
    "skills": [
      "_102020_/l2/agentChangeFrontend/skills/genCfePage21RenderTs.ts",
      "_102020_/l4/collabux/templates/readOnlyDetailPortal/page31.md"
    ],
    "visualStyle": {
      "description": "Desktop-first for PM and billing staff with mobile-optimized field entry; dashboard-driven, status-aware, touch-friendly UI with Gantt-ish timeline views."
    },
    "agent": "agentCfeMaterializeGen"
  }
] as const;
