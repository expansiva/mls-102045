/// <mls fileReference="_102045_/l2/buildFlowFsm/web/desktop/page31/dashboardWorkspace.defs.ts" enhancement="_blank"/>

export const definition = {
  "pageId": "dashboardWorkspace",
  "pageName": "Operational Dashboard",
  "baseClassName": "BuildFlowFsmDashboardWorkspaceBase",
  "actor": "projectManager",
  "purpose": "Project manager gets a quick overview of all active projects, budget drift, and task urgency.",
  "presentation": {
    "categoryRef": "analyticalList"
  },
  "pageObjective": {
    "actor": "Project Manager",
    "jobToBeDone": "Get an at-a-glance view of all active projects' budget drift, actual cost, and task urgency, then drill into the project list to spot issues and decide where to act next.",
    "primaryDecision": "Which projects need immediate attention based on budget variance and task urgency?",
    "decisiveInfo": [
      "projects (budget, actual cost, variance, task counts by status)",
      "status (project lifecycle state)",
      "total (aggregate count for pagination context)"
    ],
    "usageFrequency": "Daily / continuous — opened at the start of each working session to triage the day's priorities.",
    "criticalActions": [
      {
        "action": "Filter dashboard summary by status",
        "presentation": "inline filter control folded into the KPI surface (chip/select, not a separate form section)"
      },
      {
        "action": "Page through dashboard results",
        "presentation": "pagination control attached to the KPI surface"
      },
      {
        "action": "Filter project list by status",
        "presentation": "inline filter control folded into the project list surface"
      },
      {
        "action": "Page through project list",
        "presentation": "pagination control attached to the project list surface"
      }
    ],
    "informationHierarchy": [
      "1. KPI summary cards — budget drift, actual cost, task urgency counts across all active projects",
      "2. Status filter chip — narrow the KPI view without leaving the dashboard",
      "3. Project list — scannable rows with name, client, site, budget, schedule, status",
      "4. Project list status filter + pagination — refine and navigate the full project catalogue"
    ],
    "successCriteria": "A project manager can open the page, immediately see which projects are over budget or have overdue tasks, and scroll to the project list to confirm details — all without typing any id or navigating away.",
    "antiPatterns": [
      "Separate full-width form for status filter",
      "Manually typed project or client id inputs",
      "Free <select> over all status enum values for lifecycle transitions",
      "Raw CRUD stack as the primary experience",
      "Duplicating the same filter UI in its own section instead of folding it into the surface"
    ]
  },
  "dataBindings": [
    {
      "id": "binding.dashboardWorkspace.getDashboardSummary",
      "source": "bff.getDashboardSummary",
      "command": "getDashboardSummary",
      "description": "View operational dashboard",
      "kind": "query",
      "stateKey": "ui.dashboardWorkspace.data.getDashboardSummary",
      "inputStateKeys": [
        "ui.dashboardWorkspace.input.getDashboardSummary.status",
        "ui.dashboardWorkspace.input.getDashboardSummary.page",
        "ui.dashboardWorkspace.input.getDashboardSummary.pageSize"
      ],
      "inputs": [
        {
          "name": "status",
          "stateKey": "ui.dashboardWorkspace.input.getDashboardSummary.status",
          "source": "userInput",
          "required": false,
          "presentation": "form"
        },
        {
          "name": "page",
          "stateKey": "ui.dashboardWorkspace.input.getDashboardSummary.page",
          "source": "userInput",
          "required": false,
          "presentation": "form"
        },
        {
          "name": "pageSize",
          "stateKey": "ui.dashboardWorkspace.input.getDashboardSummary.pageSize",
          "source": "userInput",
          "required": false,
          "presentation": "form"
        }
      ]
    },
    {
      "id": "binding.dashboardWorkspace.getProjectList",
      "source": "bff.getProjectList",
      "command": "getProjectList",
      "description": "Browse projects",
      "kind": "query",
      "stateKey": "ui.dashboardWorkspace.data.getProjectList",
      "inputStateKeys": [
        "ui.dashboardWorkspace.input.getProjectList.status",
        "ui.dashboardWorkspace.input.getProjectList.page",
        "ui.dashboardWorkspace.input.getProjectList.pageSize"
      ],
      "inputs": [
        {
          "name": "status",
          "stateKey": "ui.dashboardWorkspace.input.getProjectList.status",
          "source": "userInput",
          "required": false,
          "presentation": "form"
        },
        {
          "name": "page",
          "stateKey": "ui.dashboardWorkspace.input.getProjectList.page",
          "source": "userInput",
          "required": false,
          "presentation": "form"
        },
        {
          "name": "pageSize",
          "stateKey": "ui.dashboardWorkspace.input.getProjectList.pageSize",
          "source": "userInput",
          "required": false,
          "presentation": "form"
        }
      ]
    }
  ]
};

export const pipeline = [
  {
    "id": "dashboardWorkspace__page31__l2_page",
    "type": "l2_page",
    "outputPath": "_102045_/l2/buildFlowFsm/web/desktop/page31/dashboardWorkspace.ts",
    "defPath": "_102045_/l2/buildFlowFsm/web/desktop/page31/dashboardWorkspace.defs.ts",
    "dependsFiles": [
      "_102045_/l2/buildFlowFsm/web/shared/dashboardWorkspace.ts",
      "_102045_/l2/designSystem.ts"
    ],
    "dependsOn": [
      "dashboardWorkspace__l2_shared"
    ],
    "skills": [
      "_102020_/l2/agentChangeFrontend/skills/genCfePage21RenderTs.ts",
      "_102020_/l4/collabux/templates/analyticalList/page31.md"
    ],
    "visualStyle": {
      "description": "Desktop-first for PM and billing staff with mobile-optimized field entry; dashboard-driven, status-aware, touch-friendly UI with Gantt-ish timeline views."
    },
    "agent": "agentCfeMaterializeGen"
  }
] as const;
