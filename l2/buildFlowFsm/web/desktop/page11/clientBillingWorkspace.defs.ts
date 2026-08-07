/// <mls fileReference="_102045_/l2/buildFlowFsm/web/desktop/page11/clientBillingWorkspace.defs.ts" enhancement="_blank"/>

export const definition = {
  "pageId": "clientBillingWorkspace",
  "pageName": "My Billing",
  "baseClassName": "BuildFlowFsmClientBillingWorkspaceBase",
  "actor": "client",
  "purpose": "Client reviews billing summaries and invoices shared by billing staff.",
  "presentation": {
    "categoryRef": "readOnlyDetailPortal"
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
    "id": "clientBillingWorkspace__l2_page",
    "type": "l2_page",
    "outputPath": "_102045_/l2/buildFlowFsm/web/desktop/page11/clientBillingWorkspace.ts",
    "defPath": "_102045_/l2/buildFlowFsm/web/desktop/page11/clientBillingWorkspace.defs.ts",
    "dependsFiles": [
      "_102045_/l2/buildFlowFsm/web/shared/clientBillingWorkspace.ts",
      "_102045_/l2/designSystem.ts"
    ],
    "dependsOn": [
      "clientBillingWorkspace__l2_shared"
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
