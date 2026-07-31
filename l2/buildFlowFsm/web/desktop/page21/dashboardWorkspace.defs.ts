/// <mls fileReference="_102045_/l2/buildFlowFsm/web/desktop/page21/dashboardWorkspace.defs.ts" enhancement="_blank"/>

export const definition = {
  "pageId": "dashboardWorkspace",
  "pageName": "Operational Dashboard",
  "baseClassName": "BuildFlowFsmDashboardWorkspaceBase",
  "actor": "projectManager",
  "purpose": "Executar Operational Dashboard.",
  "capabilities": [
    "viewDashboard",
    "queryProjects"
  ],
  "flowRefs": {
    "experienceFlows": [],
    "entityLifecycles": [],
    "taskWorkflows": [],
    "automations": []
  },
  "pluginRefs": [],
  "mdmRefs": [],
  "origin": {
    "source": "l4-journey",
    "workspaceId": "dashboardWorkspace",
    "workspaceKind": "operation",
    "actor": "projectManager",
    "entity": "Project",
    "owners": [
      {
        "kind": "operation",
        "id": "viewDashboard",
        "defPath": "_102045_/l4/buildFlowFsm/operations/viewDashboard.defs.ts"
      },
      {
        "kind": "operation",
        "id": "queryProjects",
        "defPath": "_102045_/l4/buildFlowFsm/operations/queryProjects.defs.ts"
      }
    ],
    "microUserFlow": {
      "source": "l4/story.steps",
      "workflowSteps": [],
      "operations": [
        {
          "operationId": "viewDashboard",
          "commandName": "viewDashboard",
          "steps": [
            "Open the operational dashboard",
            "Review active projects with budget, actual cost, and variance",
            "Scan upcoming and overdue task counts across projects to spot where attention is needed"
          ]
        },
        {
          "operationId": "queryProjects",
          "commandName": "queryProjects",
          "steps": [
            "Open the projects dashboard or project list",
            "Load projects with the default active-status filter applied",
            "Review each project's name, client, site, budget, schedule, and status",
            "Optionally change filters or page through results and select a project for deeper review"
          ]
        }
      ]
    }
  },
  "pageInputs": [],
  "navigationRefs": [],
  "sections": [
    {
      "id": "section.dashboardWorkspace.kpi-budget-section",
      "type": "section",
      "sectionName": "KPI & Budget Overview",
      "titleKey": "section.dashboardWorkspace.kpi-budget-section.title",
      "mode": "view",
      "order": 10,
      "organisms": [
        {
          "id": "dashboard-summary-filter",
          "type": "content",
          "organismName": "DashboardSummaryFilter",
          "titleKey": "organism.dashboardWorkspace.summary-first10.title",
          "purpose": "Provides a compact status filter chip bar that scopes the KPI summary to a specific project status (e.g. active, onHold), folded directly into the summary surface so the manager never leaves the overview.",
          "userActions": [],
          "requiredEntities": [],
          "readsFields": [],
          "writesFields": [],
          "rulesApplied": [],
          "order": 10,
          "intentionRefs": [
            {
              "id": "intent.dashboardWorkspace.summary-first10.content",
              "intent": "summary-first",
              "order": 10
            }
          ]
        },
        {
          "id": "dashboard-summary-surface",
          "type": "queryResult",
          "organismName": "DashboardSummaryKpiBoard",
          "titleKey": "organism.dashboardWorkspace.getDashboardSummary.title",
          "purpose": "Displays aggregate KPI cards and a compact summary list showing each project's budget, actual cost, variance, and task urgency counts — the primary at-a-glance view the manager needs to spot risk.",
          "userActions": [
            "getDashboardSummary"
          ],
          "requiredEntities": [],
          "readsFields": [],
          "writesFields": [],
          "rulesApplied": [
            "dashboardShowsActiveProjects",
            "jobCostingRequiresBudgetAndSchedule"
          ],
          "order": 20,
          "intentionRefs": [
            {
              "id": "intent.dashboardWorkspace.getDashboardSummary.list",
              "intent": "queryList",
              "stateKey": "ui.dashboardWorkspace.data.getDashboardSummary",
              "action": "getDashboardSummary",
              "order": 10
            }
          ]
        }
      ]
    },
    {
      "id": "section.dashboardWorkspace.project-list-section",
      "type": "section",
      "sectionName": "Project List",
      "titleKey": "section.dashboardWorkspace.project-list-section.title",
      "mode": "view",
      "order": 20,
      "organisms": [
        {
          "id": "project-list-filter",
          "type": "content",
          "organismName": "ProjectListFilter",
          "titleKey": "organism.dashboardWorkspace.summary-first10.title",
          "purpose": "Provides a status filter control (chip/toggle group defaulting to 'active') that scopes the project list, folded into the list surface so the manager can switch views without a separate filter form.",
          "userActions": [],
          "requiredEntities": [],
          "readsFields": [],
          "writesFields": [],
          "rulesApplied": [],
          "order": 10,
          "intentionRefs": [
            {
              "id": "intent.dashboardWorkspace.summary-first10.content2",
              "intent": "summary-first",
              "order": 10
            }
          ]
        },
        {
          "id": "project-list-surface",
          "type": "queryResult",
          "organismName": "ProjectListTable",
          "titleKey": "organism.dashboardWorkspace.getProjectList.title",
          "purpose": "Renders a paginated, filterable table of all projects showing name, client, site address, budget, schedule dates, and status so the manager can review and compare projects and page through results.",
          "userActions": [
            "getProjectList"
          ],
          "requiredEntities": [],
          "readsFields": [],
          "writesFields": [],
          "rulesApplied": [
            "dashboardShowsActiveProjects"
          ],
          "order": 20,
          "intentionRefs": [
            {
              "id": "intent.dashboardWorkspace.getProjectList.list",
              "intent": "queryList",
              "stateKey": "ui.dashboardWorkspace.data.getProjectList",
              "action": "getProjectList",
              "order": 10
            }
          ]
        }
      ]
    }
  ],
  "templateId": "goal_first",
  "visualStyle": "Desktop-first for PM and billing staff with mobile-optimized field entry; dashboard-driven, status-aware, touch-friendly UI with Gantt-ish timeline views.",
  "pageObjective": {
    "actor": "Project Manager",
    "jobToBeDone": "Get an at-a-glance view of all active projects' budget drift, actual cost, task urgency, and overall status so they can quickly identify where attention is needed.",
    "primaryDecision": "Which projects require immediate attention based on budget variance and task urgency?",
    "decisiveInfo": [
      "projects (name, status, budget, actual cost, variance)",
      "total active/on-hold project count",
      "overdue and upcoming task counts per project",
      "project schedule (startDate, endDate)",
      "client and site context (clientId, siteAddress)"
    ],
    "usageFrequency": "Daily / continuous — the project manager opens this as their home screen each morning and returns throughout the day to monitor progress.",
    "criticalActions": [
      {
        "action": "View dashboard KPI summary filtered by status",
        "presentation": "summary-first with inline status filter chip bar"
      },
      {
        "action": "Browse and filter project list by status",
        "presentation": "filterable paginated table with status filter control folded into the surface"
      }
    ],
    "informationHierarchy": [
      "1. KPI summary cards — budget drift, actual cost, task urgency counts across all projects",
      "2. Status filter for dashboard summary",
      "3. Paginated project list with name, client, site, budget, schedule, status",
      "4. Status filter and pagination controls for project list"
    ],
    "successCriteria": "The manager can identify at-risk projects and their key metrics within 10 seconds of landing on the page, without navigating away or typing any IDs.",
    "antiPatterns": [
      "Separate full-width form for status filtering",
      "Manually typed project or client IDs",
      "Status edited via free <select> over all enum values",
      "Raw CRUD stack as the primary experience",
      "Hiding KPI metrics below the fold"
    ]
  },
  "layout": {
    "id": "page21-goal-first",
    "type": "page",
    "sections": [
      {
        "id": "section.dashboardWorkspace.kpi-budget-section",
        "type": "section",
        "sectionName": "KPI & Budget Overview",
        "titleKey": "section.dashboardWorkspace.kpi-budget-section.title",
        "mode": "view",
        "order": 10,
        "organisms": [
          {
            "id": "dashboard-summary-filter",
            "type": "content",
            "organismName": "DashboardSummaryFilter",
            "titleKey": "organism.dashboardWorkspace.summary-first10.title",
            "purpose": "Provides a compact status filter chip bar that scopes the KPI summary to a specific project status (e.g. active, onHold), folded directly into the summary surface so the manager never leaves the overview.",
            "userActions": [],
            "requiredEntities": [],
            "readsFields": [],
            "writesFields": [],
            "rulesApplied": [],
            "order": 10,
            "intentions": [
              {
                "id": "intent.dashboardWorkspace.summary-first10.content",
                "intent": "summary-first",
                "order": 10,
                "titleKey": "intent.dashboardWorkspace.summary-first10.content.title",
                "displayHint": "summary-first",
                "fields": [],
                "columns": [],
                "filters": [],
                "toolbar": [],
                "rowActions": [],
                "actions": []
              }
            ],
            "displayHint": "summary-first"
          },
          {
            "id": "dashboard-summary-surface",
            "type": "queryResult",
            "organismName": "DashboardSummaryKpiBoard",
            "titleKey": "organism.dashboardWorkspace.getDashboardSummary.title",
            "purpose": "Displays aggregate KPI cards and a compact summary list showing each project's budget, actual cost, variance, and task urgency counts — the primary at-a-glance view the manager needs to spot risk.",
            "userActions": [
              "getDashboardSummary"
            ],
            "requiredEntities": [],
            "readsFields": [],
            "writesFields": [],
            "rulesApplied": [
              "dashboardShowsActiveProjects",
              "jobCostingRequiresBudgetAndSchedule"
            ],
            "order": 20,
            "intentions": [
              {
                "id": "intent.dashboardWorkspace.getDashboardSummary.list",
                "intent": "queryList",
                "order": 10,
                "titleKey": "intent.dashboardWorkspace.getDashboardSummary.list.title",
                "source": "bff.getDashboardSummary",
                "binding": "binding.dashboardWorkspace.getDashboardSummary",
                "action": "getDashboardSummary",
                "emptyKey": "intent.dashboardWorkspace.getDashboardSummary.list.empty",
                "fields": [],
                "columns": [
                  {
                    "id": "intent.dashboardWorkspace.getDashboardSummary.list.column.projects",
                    "field": "projects",
                    "labelKey": "intent.dashboardWorkspace.getDashboardSummary.list.column.projects.label",
                    "order": 10,
                    "stateKey": "ui.dashboardWorkspace.data.getDashboardSummary"
                  },
                  {
                    "id": "intent.dashboardWorkspace.getDashboardSummary.list.column.total",
                    "field": "total",
                    "labelKey": "intent.dashboardWorkspace.getDashboardSummary.list.column.total.label",
                    "order": 20,
                    "stateKey": "ui.dashboardWorkspace.data.getDashboardSummary"
                  }
                ],
                "filters": [
                  {
                    "id": "intent.dashboardWorkspace.getDashboardSummary.list.filter.status",
                    "field": "status",
                    "labelKey": "intent.dashboardWorkspace.getDashboardSummary.list.filter.status.label",
                    "order": 10,
                    "stateKey": "ui.dashboardWorkspace.input.getDashboardSummary.status"
                  },
                  {
                    "id": "intent.dashboardWorkspace.getDashboardSummary.list.filter.page",
                    "field": "page",
                    "labelKey": "intent.dashboardWorkspace.getDashboardSummary.list.filter.page.label",
                    "order": 20,
                    "stateKey": "ui.dashboardWorkspace.input.getDashboardSummary.page"
                  },
                  {
                    "id": "intent.dashboardWorkspace.getDashboardSummary.list.filter.pageSize",
                    "field": "pageSize",
                    "labelKey": "intent.dashboardWorkspace.getDashboardSummary.list.filter.pageSize.label",
                    "order": 30,
                    "stateKey": "ui.dashboardWorkspace.input.getDashboardSummary.pageSize"
                  }
                ],
                "toolbar": [],
                "rowActions": [],
                "actions": [],
                "stateKey": "ui.dashboardWorkspace.data.getDashboardSummary"
              }
            ],
            "displayHint": "summary-first"
          }
        ]
      },
      {
        "id": "section.dashboardWorkspace.project-list-section",
        "type": "section",
        "sectionName": "Project List",
        "titleKey": "section.dashboardWorkspace.project-list-section.title",
        "mode": "view",
        "order": 20,
        "organisms": [
          {
            "id": "project-list-filter",
            "type": "content",
            "organismName": "ProjectListFilter",
            "titleKey": "organism.dashboardWorkspace.summary-first10.title",
            "purpose": "Provides a status filter control (chip/toggle group defaulting to 'active') that scopes the project list, folded into the list surface so the manager can switch views without a separate filter form.",
            "userActions": [],
            "requiredEntities": [],
            "readsFields": [],
            "writesFields": [],
            "rulesApplied": [],
            "order": 10,
            "intentions": [
              {
                "id": "intent.dashboardWorkspace.summary-first10.content2",
                "intent": "summary-first",
                "order": 10,
                "titleKey": "intent.dashboardWorkspace.summary-first10.content.title",
                "displayHint": "summary-first",
                "fields": [],
                "columns": [],
                "filters": [],
                "toolbar": [],
                "rowActions": [],
                "actions": []
              }
            ],
            "displayHint": "summary-first"
          },
          {
            "id": "project-list-surface",
            "type": "queryResult",
            "organismName": "ProjectListTable",
            "titleKey": "organism.dashboardWorkspace.getProjectList.title",
            "purpose": "Renders a paginated, filterable table of all projects showing name, client, site address, budget, schedule dates, and status so the manager can review and compare projects and page through results.",
            "userActions": [
              "getProjectList"
            ],
            "requiredEntities": [],
            "readsFields": [],
            "writesFields": [],
            "rulesApplied": [
              "dashboardShowsActiveProjects"
            ],
            "order": 20,
            "intentions": [
              {
                "id": "intent.dashboardWorkspace.getProjectList.list",
                "intent": "queryList",
                "order": 10,
                "titleKey": "intent.dashboardWorkspace.getProjectList.list.title",
                "source": "bff.getProjectList",
                "binding": "binding.dashboardWorkspace.getProjectList",
                "action": "getProjectList",
                "emptyKey": "intent.dashboardWorkspace.getProjectList.list.empty",
                "fields": [],
                "columns": [
                  {
                    "id": "intent.dashboardWorkspace.getProjectList.list.column.projects",
                    "field": "projects",
                    "labelKey": "intent.dashboardWorkspace.getProjectList.list.column.projects.label",
                    "order": 10,
                    "stateKey": "ui.dashboardWorkspace.data.getProjectList"
                  },
                  {
                    "id": "intent.dashboardWorkspace.getProjectList.list.column.total",
                    "field": "total",
                    "labelKey": "intent.dashboardWorkspace.getProjectList.list.column.total.label",
                    "order": 20,
                    "stateKey": "ui.dashboardWorkspace.data.getProjectList"
                  }
                ],
                "filters": [
                  {
                    "id": "intent.dashboardWorkspace.getProjectList.list.filter.status",
                    "field": "status",
                    "labelKey": "intent.dashboardWorkspace.getProjectList.list.filter.status.label",
                    "order": 10,
                    "stateKey": "ui.dashboardWorkspace.input.getProjectList.status"
                  },
                  {
                    "id": "intent.dashboardWorkspace.getProjectList.list.filter.page",
                    "field": "page",
                    "labelKey": "intent.dashboardWorkspace.getProjectList.list.filter.page.label",
                    "order": 20,
                    "stateKey": "ui.dashboardWorkspace.input.getProjectList.page"
                  },
                  {
                    "id": "intent.dashboardWorkspace.getProjectList.list.filter.pageSize",
                    "field": "pageSize",
                    "labelKey": "intent.dashboardWorkspace.getProjectList.list.filter.pageSize.label",
                    "order": 30,
                    "stateKey": "ui.dashboardWorkspace.input.getProjectList.pageSize"
                  }
                ],
                "toolbar": [],
                "rowActions": [],
                "actions": [],
                "stateKey": "ui.dashboardWorkspace.data.getProjectList"
              }
            ],
            "displayHint": "master-detail"
          }
        ]
      }
    ]
  },
  "dataBindings": [
    {
      "id": "binding.dashboardWorkspace.getDashboardSummary",
      "source": "bff.getDashboardSummary",
      "command": "getDashboardSummary",
      "description": "View operational dashboard",
      "stateKey": "ui.dashboardWorkspace.data.getDashboardSummary",
      "inputStateKeys": [
        "ui.dashboardWorkspace.input.getDashboardSummary.status",
        "ui.dashboardWorkspace.input.getDashboardSummary.page",
        "ui.dashboardWorkspace.input.getDashboardSummary.pageSize"
      ]
    },
    {
      "id": "binding.dashboardWorkspace.getProjectList",
      "source": "bff.getProjectList",
      "command": "getProjectList",
      "description": "Browse projects",
      "stateKey": "ui.dashboardWorkspace.data.getProjectList",
      "inputStateKeys": [
        "ui.dashboardWorkspace.input.getProjectList.status",
        "ui.dashboardWorkspace.input.getProjectList.page",
        "ui.dashboardWorkspace.input.getProjectList.pageSize"
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
      "_102020_/l2/agentChangeFrontend/skills/genCfePage21RenderTs.ts"
    ],
    "visualStyle": {
      "description": "Desktop-first for PM and billing staff with mobile-optimized field entry; dashboard-driven, status-aware, touch-friendly UI with Gantt-ish timeline views."
    },
    "agent": "agentCfeMaterializeGen"
  }
] as const;
