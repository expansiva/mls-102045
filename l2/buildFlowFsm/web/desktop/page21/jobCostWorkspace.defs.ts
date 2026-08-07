/// <mls fileReference="_102045_/l2/buildFlowFsm/web/desktop/page21/jobCostWorkspace.defs.ts" enhancement="_blank"/>

export const definition = {
  "pageId": "jobCostWorkspace",
  "pageName": "Job Cost Summary",
  "baseClassName": "BuildFlowFsmJobCostWorkspaceBase",
  "actor": "billingStaff",
  "purpose": "Billing staff reviews accumulated job costs per project before preparing billing documents.",
  "presentation": {
    "categoryRef": "readOnlyDetailPortal"
  },
  "pageObjective": {
    "actor": "Billing staff",
    "jobToBeDone": "Review the full accumulated cost picture for a project — labor, materials, change orders, and budget variance — so they can prepare accurate billing documents without switching screens.",
    "primaryDecision": "Is the total actual cost within budget, and are the cost components (labor, materials, change orders) correct before billing?",
    "decisiveInfo": [
      "budget",
      "totalCost",
      "budgetVariance",
      "laborCost",
      "materialCost",
      "changeOrderCost",
      "status",
      "name",
      "clientName",
      "startDate",
      "endDate"
    ],
    "usageFrequency": "Occasional / back-office — triggered when billing staff prepares invoices or billing documents for a specific project.",
    "criticalActions": [
      {
        "action": "Load job cost summary for the project",
        "presentation": "Auto-triggered on page load via route param; no manual input required"
      }
    ],
    "informationHierarchy": [
      "Project identity and lifecycle status (name, client, status, dates)",
      "Budget vs. total actual cost and variance (the decisive numbers)",
      "Cost breakdown: labor, materials, change orders",
      "Supporting context: project ID, client ID (read-only)"
    ],
    "successCriteria": "Billing staff can immediately see whether the project is over or under budget and understand which cost category drives the variance, all on a single screen without any manual data entry.",
    "antiPatterns": [
      "Manually typed projectId input — it must come from the route param",
      "Separate form section for the query trigger",
      "Status rendered as a free <select> — it is a read-only lifecycle output",
      "Hiding the budget variance behind a drill-down when it is the decisive number",
      "Splitting cost components across multiple sections that require scrolling to compare"
    ]
  },
  "dataBindings": [
    {
      "id": "binding.jobCostWorkspace.viewJobCostSummary",
      "source": "bff.viewJobCostSummary",
      "command": "viewJobCostSummary",
      "description": "View job cost summary",
      "kind": "query",
      "stateKey": "ui.jobCostWorkspace.data.viewJobCostSummary",
      "inputStateKeys": [
        "ui.jobCostWorkspace.input.viewJobCostSummary.projectId"
      ],
      "inputs": [
        {
          "name": "projectId",
          "stateKey": "ui.jobCostWorkspace.input.viewJobCostSummary.projectId",
          "source": "routeParam",
          "required": true,
          "presentation": "route"
        }
      ]
    }
  ]
};

export const pipeline = [
  {
    "id": "jobCostWorkspace__page21__l2_page",
    "type": "l2_page",
    "outputPath": "_102045_/l2/buildFlowFsm/web/desktop/page21/jobCostWorkspace.ts",
    "defPath": "_102045_/l2/buildFlowFsm/web/desktop/page21/jobCostWorkspace.defs.ts",
    "dependsFiles": [
      "_102045_/l2/buildFlowFsm/web/shared/jobCostWorkspace.ts",
      "_102045_/l2/designSystem.ts"
    ],
    "dependsOn": [
      "jobCostWorkspace__l2_shared"
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
