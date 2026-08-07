/// <mls fileReference="_102045_/l2/buildFlowFsm/web/desktop/page11/billingSummaryWorkspace.defs.ts" enhancement="_blank"/>

export const definition = {
  "pageId": "billingSummaryWorkspace",
  "pageName": "Billing Summaries",
  "baseClassName": "BuildFlowFsmBillingSummaryWorkspaceBase",
  "actor": "billingStaff",
  "purpose": "Billing staff compiles and shares client-facing billing summaries from approved job cost data.",
  "presentation": {
    "categoryRef": "financialTransactions"
  },
  "dataBindings": [
    {
      "id": "binding.billingSummaryWorkspace.listBillingSummaries",
      "source": "bff.listBillingSummaries",
      "command": "listBillingSummaries",
      "description": "Browse billing summaries",
      "kind": "query",
      "stateKey": "ui.billingSummaryWorkspace.data.listBillingSummaries",
      "inputStateKeys": [
        "ui.billingSummaryWorkspace.input.listBillingSummaries.projectId",
        "ui.billingSummaryWorkspace.input.listBillingSummaries.status",
        "ui.billingSummaryWorkspace.input.listBillingSummaries.page",
        "ui.billingSummaryWorkspace.input.listBillingSummaries.pageSize"
      ],
      "inputs": [
        {
          "name": "projectId",
          "stateKey": "ui.billingSummaryWorkspace.input.listBillingSummaries.projectId",
          "source": "userInput",
          "required": false,
          "presentation": "form"
        },
        {
          "name": "status",
          "stateKey": "ui.billingSummaryWorkspace.input.listBillingSummaries.status",
          "source": "userInput",
          "required": false,
          "presentation": "form"
        },
        {
          "name": "page",
          "stateKey": "ui.billingSummaryWorkspace.input.listBillingSummaries.page",
          "source": "userInput",
          "required": false,
          "presentation": "form"
        },
        {
          "name": "pageSize",
          "stateKey": "ui.billingSummaryWorkspace.input.listBillingSummaries.pageSize",
          "source": "userInput",
          "required": false,
          "presentation": "form"
        }
      ]
    },
    {
      "id": "binding.billingSummaryWorkspace.createBillingSummaryCmd",
      "source": "bff.createBillingSummaryCmd",
      "command": "createBillingSummaryCmd",
      "description": "Create billing summary",
      "kind": "command",
      "stateKey": "ui.billingSummaryWorkspace.output.createBillingSummaryCmd",
      "inputStateKeys": [
        "ui.billingSummaryWorkspace.input.createBillingSummaryCmd.projectId",
        "ui.billingSummaryWorkspace.input.createBillingSummaryCmd.periodStart",
        "ui.billingSummaryWorkspace.input.createBillingSummaryCmd.periodEnd"
      ],
      "inputs": [
        {
          "name": "projectId",
          "stateKey": "ui.billingSummaryWorkspace.input.createBillingSummaryCmd.projectId",
          "source": "routeParam",
          "required": true,
          "presentation": "route"
        },
        {
          "name": "periodStart",
          "stateKey": "ui.billingSummaryWorkspace.input.createBillingSummaryCmd.periodStart",
          "source": "userInput",
          "required": true,
          "presentation": "form"
        },
        {
          "name": "periodEnd",
          "stateKey": "ui.billingSummaryWorkspace.input.createBillingSummaryCmd.periodEnd",
          "source": "userInput",
          "required": true,
          "presentation": "form"
        }
      ]
    },
    {
      "id": "binding.billingSummaryWorkspace.shareBillingSummaryCmd",
      "source": "bff.shareBillingSummaryCmd",
      "command": "shareBillingSummaryCmd",
      "description": "Share billing summary with client",
      "kind": "command",
      "stateKey": "ui.billingSummaryWorkspace.output.shareBillingSummaryCmd",
      "inputStateKeys": [
        "ui.billingSummaryWorkspace.input.shareBillingSummaryCmd.billingSummaryId",
        "ui.billingSummaryWorkspace.input.shareBillingSummaryCmd.status"
      ],
      "inputs": [
        {
          "name": "billingSummaryId",
          "stateKey": "ui.billingSummaryWorkspace.input.shareBillingSummaryCmd.billingSummaryId",
          "source": "routeParam",
          "required": true,
          "presentation": "route"
        },
        {
          "name": "status",
          "stateKey": "ui.billingSummaryWorkspace.input.shareBillingSummaryCmd.status",
          "source": "systemDefault",
          "required": true,
          "presentation": "form"
        }
      ]
    }
  ]
};

export const pipeline = [
  {
    "id": "billingSummaryWorkspace__l2_page",
    "type": "l2_page",
    "outputPath": "_102045_/l2/buildFlowFsm/web/desktop/page11/billingSummaryWorkspace.ts",
    "defPath": "_102045_/l2/buildFlowFsm/web/desktop/page11/billingSummaryWorkspace.defs.ts",
    "dependsFiles": [
      "_102045_/l2/buildFlowFsm/web/shared/billingSummaryWorkspace.ts",
      "_102045_/l2/designSystem.ts"
    ],
    "dependsOn": [
      "billingSummaryWorkspace__l2_shared"
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
