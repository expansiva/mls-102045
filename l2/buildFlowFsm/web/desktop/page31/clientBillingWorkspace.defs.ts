/// <mls fileReference="_102045_/l2/buildFlowFsm/web/desktop/page31/clientBillingWorkspace.defs.ts" enhancement="_blank"/>

// TESTE (31/jul): defs REDUZIDO + skill de experiência no pipeline.
// A UX desta página vem inteira do skill `readOnlyDetailPortal/page31.md`; este defs carrega só o
// contrato: identidade + amarração. Comparar com page21/clientBillingWorkspace.defs.ts (defs completo + page21.md).

export const definition = {
  "pageId": "clientBillingWorkspace",
  "pageName": "My Billing",
  "baseClassName": "BuildFlowFsmClientBillingWorkspaceBase",
  "actor": "client",
  "purpose": "Client reviews billing summaries and invoices shared by billing staff.",

  "dataBindings": [
    {
      "id": "binding.clientBillingWorkspace.getBillingSummary",
      "source": "bff.getBillingSummary",
      "command": "getBillingSummary",
      "description": "View billing summary",
      "stateKey": "ui.clientBillingWorkspace.data.getBillingSummary",
      "inputStateKeys": [
        "ui.clientBillingWorkspace.input.getBillingSummary.billingSummaryId",
        "ui.clientBillingWorkspace.input.getBillingSummary.clientId"
      ]
    },
    {
      "id": "binding.clientBillingWorkspace.getInvoice",
      "source": "bff.getInvoice",
      "command": "getInvoice",
      "description": "View invoice",
      "stateKey": "ui.clientBillingWorkspace.data.getInvoice",
      "inputStateKeys": [
        "ui.clientBillingWorkspace.input.getInvoice.invoiceId",
        "ui.clientBillingWorkspace.input.getInvoice.clientId"
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
