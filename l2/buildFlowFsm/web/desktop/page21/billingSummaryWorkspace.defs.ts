/// <mls fileReference="_102045_/l2/buildFlowFsm/web/desktop/page21/billingSummaryWorkspace.defs.ts" enhancement="_blank"/>

export const definition = {
  "pageId": "billingSummaryWorkspace",
  "pageName": "Billing Summaries",
  "baseClassName": "BuildFlowFsmBillingSummaryWorkspaceBase",
  "actor": "billingStaff",
  "purpose": "Billing staff compiles and shares client-facing billing summaries from approved job cost data.",
  "presentation": {
    "categoryRef": "financialTransactions"
  },
  "pageObjective": {
    "actor": "Billing staff",
    "jobToBeDone": "Compile and share client-facing billing summaries by reviewing accumulated job costs, creating draft summaries for a billing period, and sharing them with the client before invoice generation.",
    "primaryDecision": "Select a billing summary to review its cost breakdown, then either create a new one or share a draft with the client.",
    "decisiveInfo": [
      "periodStart",
      "periodEnd",
      "laborCost",
      "materialCost",
      "changeOrderCost",
      "totalCost",
      "status",
      "sharedAt"
    ],
    "usageFrequency": "Occasional / back-office — billing staff uses this at billing cycle milestones, not continuously.",
    "criticalActions": [
      {
        "action": "createBillingSummaryCmd",
        "presentation": "primary-button opening an inline period-date form above the list; projectId is context-derived from route, never typed"
      },
      {
        "action": "shareBillingSummaryCmd",
        "presentation": "contextual-transition-actions — a single 'Share with Client' button rendered on the selected draft row/detail panel; billingSummaryId is derived from selection, never typed; status transition is a button, never a select"
      },
      {
        "action": "listBillingSummaries",
        "presentation": "master-detail table with filter bar folded into the surface header"
      }
    ],
    "informationHierarchy": [
      "1. Billing summaries list filtered by project and status (browse context)",
      "2. Selected summary cost breakdown: labor, material, change-order, total, period, status",
      "3. Create new billing summary (period date inputs, project from context)",
      "4. Share selected draft summary with client (transition action)"
    ],
    "successCriteria": "Billing staff can scan all summaries for a project, see cost totals at a glance, create a new draft in two date inputs, and share a draft with one click — without typing any ids or manually setting status.",
    "antiPatterns": [
      "Separate full-page form for sharing (should be inline contextual transition)",
      "Status field as a free <select> input",
      "Manually typed billingSummaryId or projectId",
      "Stacking create form and share form as independent sections below the list",
      "Showing system-owned fields (createdAt, updatedAt) as editable inputs"
    ]
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
    "id": "billingSummaryWorkspace__page21__l2_page",
    "type": "l2_page",
    "outputPath": "_102045_/l2/buildFlowFsm/web/desktop/page21/billingSummaryWorkspace.ts",
    "defPath": "_102045_/l2/buildFlowFsm/web/desktop/page21/billingSummaryWorkspace.defs.ts",
    "dependsFiles": [
      "_102045_/l2/buildFlowFsm/web/shared/billingSummaryWorkspace.ts",
      "_102045_/l2/designSystem.ts"
    ],
    "dependsOn": [
      "billingSummaryWorkspace__l2_shared"
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
