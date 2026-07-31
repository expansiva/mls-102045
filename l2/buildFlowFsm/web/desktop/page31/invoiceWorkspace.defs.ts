/// <mls fileReference="_102045_/l2/buildFlowFsm/web/desktop/page31/invoiceWorkspace.defs.ts" enhancement="_blank"/>

// TESTE (31/jul): defs REDUZIDO + skill de experiência no pipeline.
// A UX desta página vem inteira do skill `financialTransactions/page31.md`; este defs carrega só o
// contrato: identidade + amarração. Comparar com page21/invoiceWorkspace.defs.ts (defs completo + page21.md).

export const definition = {
  "pageId": "invoiceWorkspace",
  "pageName": "Invoices",
  "baseClassName": "BuildFlowFsmInvoiceWorkspaceBase",
  "actor": "billingStaff",
  "purpose": "Billing staff generates invoices from approved costs and sends them to clients.",

  "dataBindings": [
    {
      "id": "binding.invoiceWorkspace.listInvoices",
      "source": "bff.listInvoices",
      "command": "listInvoices",
      "description": "Browse invoices",
      "stateKey": "ui.invoiceWorkspace.data.listInvoices",
      "inputStateKeys": [
        "ui.invoiceWorkspace.input.listInvoices.status",
        "ui.invoiceWorkspace.input.listInvoices.projectId",
        "ui.invoiceWorkspace.input.listInvoices.clientId",
        "ui.invoiceWorkspace.input.listInvoices.page",
        "ui.invoiceWorkspace.input.listInvoices.pageSize"
      ]
    },
    {
      "id": "binding.invoiceWorkspace.createInvoiceCmd",
      "source": "bff.createInvoiceCmd",
      "command": "createInvoiceCmd",
      "description": "Create invoice",
      "stateKey": "ui.invoiceWorkspace.output.createInvoiceCmd",
      "inputStateKeys": [
        "ui.invoiceWorkspace.input.createInvoiceCmd.projectId",
        "ui.invoiceWorkspace.input.createInvoiceCmd.invoiceNumber",
        "ui.invoiceWorkspace.input.createInvoiceCmd.clientId"
      ]
    },
    {
      "id": "binding.invoiceWorkspace.sendInvoiceCmd",
      "source": "bff.sendInvoiceCmd",
      "command": "sendInvoiceCmd",
      "description": "Send invoice to client",
      "stateKey": "ui.invoiceWorkspace.output.sendInvoiceCmd",
      "inputStateKeys": [
        "ui.invoiceWorkspace.input.sendInvoiceCmd.invoiceId"
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
