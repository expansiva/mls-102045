/// <mls fileReference="_102045_/l2/buildFlowFsm/web/desktop/page31/jobCostWorkspace.defs.ts" enhancement="_blank"/>

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
    "jobToBeDone": "Review the full accumulated cost picture for a project — identity, budget, labor, materials, change orders, and variance — before preparing billing documents.",
    "primaryDecision": "Is the total actual cost within budget, and are the cost components (labor, materials, change orders) accurate enough to proceed with billing?",
    "decisiveInfo": [
      "name",
      "clientName",
      "status",
      "budget",
      "totalCost",
      "budgetVariance",
      "laborCost",
      "materialCost",
      "changeOrderCost",
      "startDate",
      "endDate"
    ],
    "usageFrequency": "Occasional / back-office — triggered when billing staff prepares invoices or billing documents for a specific project.",
    "criticalActions": [
      {
        "action": "viewJobCostSummary",
        "presentation": "summary-first — load automatically from route param; display as a structured cost summary panel with headline KPIs (budget, totalCost, budgetVariance) at the top and a cost breakdown below"
      }
    ],
    "informationHierarchy": [
      "Project identity: name, clientName, status, startDate, endDate",
      "Budget headline: budget vs totalCost vs budgetVariance (over/under)",
      "Cost breakdown: laborCost, materialCost, changeOrderCost",
      "Supporting context: projectId (read-only reference)"
    ],
    "successCriteria": "Billing staff can immediately see whether the project is over or under budget and understand which cost category drives the variance, without navigating away or performing any manual input.",
    "antiPatterns": [
      "Exposing projectId as a typed input — it is a route param, always context-derived",
      "Rendering a status <select> — status is system-owned and read-only here",
      "Splitting cost categories into separate sections or tabs that require navigation",
      "Showing raw entity lists (time logs, material usage rows) instead of aggregated totals",
      "Placing the budget variance below the fold where it is not immediately visible"
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
    "id": "jobCostWorkspace__page31__l2_page",
    "type": "l2_page",
    "outputPath": "_102045_/l2/buildFlowFsm/web/desktop/page31/jobCostWorkspace.ts",
    "defPath": "_102045_/l2/buildFlowFsm/web/desktop/page31/jobCostWorkspace.defs.ts",
    "dependsFiles": [
      "_102045_/l2/buildFlowFsm/web/shared/jobCostWorkspace.ts",
      "_102045_/l2/designSystem.ts"
    ],
    "dependsOn": [
      "jobCostWorkspace__l2_shared"
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
