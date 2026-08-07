/// <mls fileReference="_102045_/l2/buildFlowFsm/web/desktop/page21/dashboardWorkspace.defs.ts" enhancement="_blank"/>

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
    "jobToBeDone": "Get an at-a-glance view of all active projects' budget drift, actual cost, and task urgency, then browse and filter the full project list to decide where attention is needed.",
    "primaryDecision": "Which projects require immediate attention based on budget variance and task urgency?",
    "decisiveInfo": [
      "projects (budget, actual cost, variance, task counts)",
      "status (project lifecycle state)",
      "total (count of matching projects)",
      "startDate / endDate (schedule health)",
      "holdReason / cancellationReason (exception context)"
    ],
    "usageFrequency": "Daily / continuous — opened at the start of each working session to triage the day's priorities.",
    "criticalActions": [
      {
        "action": "Load dashboard KPI summary filtered by status",
        "presentation": "summary-first metric cards with inline status filter chip bar"
      },
      {
        "action": "Browse and filter project list by status with pagination",
        "presentation": "filterable paginated table with status filter chip and page controls"
      }
    ],
    "informationHierarchy": [
      "1. KPI summary cards — budget drift, actual cost, task urgency counts across all active projects",
      "2. Status filter for the KPI surface",
      "3. Project list table — name, client, site, budget, schedule, status",
      "4. Status filter and pagination for the project list"
    ],
    "successCriteria": "A project manager can open the dashboard, immediately see which projects are over budget or have overdue tasks, and navigate to the project list filtered by status — all without typing any IDs or navigating away.",
    "antiPatterns": [
      "Separate full-width form for status filter (fold into the surface)",
      "Free <select> over all status enum values instead of chip/button filters",
      "Manually typed project IDs or pagination values",
      "Raw CRUD forms as the primary experience",
      "Stacking every query as its own isolated section with no visual hierarchy"
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
    "id": "dashboardWorkspace__page21__l2_page",
    "type": "l2_page",
    "outputPath": "_102045_/l2/buildFlowFsm/web/desktop/page21/dashboardWorkspace.ts",
    "defPath": "_102045_/l2/buildFlowFsm/web/desktop/page21/dashboardWorkspace.defs.ts",
    "dependsFiles": [
      "_102045_/l2/buildFlowFsm/web/shared/dashboardWorkspace.ts",
      "_102045_/l2/designSystem.ts"
    ],
    "dependsOn": [
      "dashboardWorkspace__l2_shared"
    ],
    "skills": [
      "_102020_/l2/agentChangeFrontend/skills/genCfePage21RenderTs.ts",
      "_102020_/l4/collabux/templates/analyticalList/page21.md"
    ],
    "visualStyle": {
      "description": "Desktop-first for PM and billing staff with mobile-optimized field entry; dashboard-driven, status-aware, touch-friendly UI with Gantt-ish timeline views."
    },
    "agent": "agentCfeMaterializeGen"
  }
] as const;
