/// <mls fileReference="_102045_/l2/buildFlowFsm/web/desktop/page11/dashboardWorkspace.defs.ts" enhancement="_blank"/>

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
      "id": "section.dashboardWorkspace.kpiAndBudgetSection",
      "type": "section",
      "sectionName": "KPI & Budget Overview",
      "titleKey": "section.dashboardWorkspace.kpiAndBudgetSection.title",
      "mode": "view",
      "order": 10,
      "organisms": [
        {
          "id": "dashboardSummaryFilter",
          "type": "content",
          "organismName": "DashboardSummaryFilter",
          "titleKey": "organism.dashboardWorkspace.inline-row-command10.title",
          "purpose": "Lets the project manager filter the KPI summary by project status so they can focus on a specific lifecycle group without leaving the dashboard.",
          "userActions": [],
          "requiredEntities": [],
          "readsFields": [],
          "writesFields": [],
          "rulesApplied": [],
          "order": 10,
          "intentionRefs": [
            {
              "id": "intent.dashboardWorkspace.inline-row-command10.content",
              "intent": "inline-row-command",
              "order": 10
            }
          ]
        },
        {
          "id": "dashboardSummaryBoard",
          "type": "queryResult",
          "organismName": "DashboardSummaryBoard",
          "titleKey": "organism.dashboardWorkspace.getDashboardSummary.title",
          "purpose": "Displays at-a-glance KPI cards per project — budget, actual cost, variance, and task urgency counts — so the manager can immediately spot budget drift and overdue work.",
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
      "id": "section.dashboardWorkspace.projectListSection",
      "type": "section",
      "sectionName": "Project List",
      "titleKey": "section.dashboardWorkspace.projectListSection.title",
      "mode": "view",
      "order": 20,
      "organisms": [
        {
          "id": "projectListFilter",
          "type": "content",
          "organismName": "ProjectListFilter",
          "titleKey": "organism.dashboardWorkspace.inline-row-command10.title",
          "purpose": "Allows filtering the project list by status so the manager can narrow results to active, on-hold, or other lifecycle groups before reviewing details.",
          "userActions": [],
          "requiredEntities": [],
          "readsFields": [],
          "writesFields": [],
          "rulesApplied": [],
          "order": 10,
          "intentionRefs": [
            {
              "id": "intent.dashboardWorkspace.inline-row-command10.content2",
              "intent": "inline-row-command",
              "order": 10
            }
          ]
        },
        {
          "id": "projectListSurface",
          "type": "queryResult",
          "organismName": "ProjectListSurface",
          "titleKey": "organism.dashboardWorkspace.getProjectList.title",
          "purpose": "Shows a paginated, scannable list of all projects with name, client, site address, budget, schedule dates, and status so the manager can review and compare projects at a glance.",
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
  "templateId": "status_overview",
  "visualStyle": "Desktop-first for PM and billing staff with mobile-optimized field entry; dashboard-driven, status-aware, touch-friendly UI with Gantt-ish timeline views.",
  "layout": {
    "id": "cfe-20260731060448.1000",
    "type": "page",
    "sections": [
      {
        "id": "section.dashboardWorkspace.kpiAndBudgetSection",
        "type": "section",
        "sectionName": "KPI & Budget Overview",
        "titleKey": "section.dashboardWorkspace.kpiAndBudgetSection.title",
        "mode": "view",
        "order": 10,
        "organisms": [
          {
            "id": "dashboardSummaryFilter",
            "type": "content",
            "organismName": "DashboardSummaryFilter",
            "titleKey": "organism.dashboardWorkspace.inline-row-command10.title",
            "purpose": "Lets the project manager filter the KPI summary by project status so they can focus on a specific lifecycle group without leaving the dashboard.",
            "userActions": [],
            "requiredEntities": [],
            "readsFields": [],
            "writesFields": [],
            "rulesApplied": [],
            "order": 10,
            "intentions": [
              {
                "id": "intent.dashboardWorkspace.inline-row-command10.content",
                "intent": "inline-row-command",
                "order": 10,
                "titleKey": "intent.dashboardWorkspace.inline-row-command10.content.title",
                "displayHint": "inline-row-command",
                "fields": [],
                "columns": [],
                "filters": [],
                "toolbar": [],
                "rowActions": [],
                "actions": []
              }
            ],
            "displayHint": "inline-row-command"
          },
          {
            "id": "dashboardSummaryBoard",
            "type": "queryResult",
            "organismName": "DashboardSummaryBoard",
            "titleKey": "organism.dashboardWorkspace.getDashboardSummary.title",
            "purpose": "Displays at-a-glance KPI cards per project — budget, actual cost, variance, and task urgency counts — so the manager can immediately spot budget drift and overdue work.",
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
            "displayHint": "card-board"
          }
        ]
      },
      {
        "id": "section.dashboardWorkspace.projectListSection",
        "type": "section",
        "sectionName": "Project List",
        "titleKey": "section.dashboardWorkspace.projectListSection.title",
        "mode": "view",
        "order": 20,
        "organisms": [
          {
            "id": "projectListFilter",
            "type": "content",
            "organismName": "ProjectListFilter",
            "titleKey": "organism.dashboardWorkspace.inline-row-command10.title",
            "purpose": "Allows filtering the project list by status so the manager can narrow results to active, on-hold, or other lifecycle groups before reviewing details.",
            "userActions": [],
            "requiredEntities": [],
            "readsFields": [],
            "writesFields": [],
            "rulesApplied": [],
            "order": 10,
            "intentions": [
              {
                "id": "intent.dashboardWorkspace.inline-row-command10.content2",
                "intent": "inline-row-command",
                "order": 10,
                "titleKey": "intent.dashboardWorkspace.inline-row-command10.content.title",
                "displayHint": "inline-row-command",
                "fields": [],
                "columns": [],
                "filters": [],
                "toolbar": [],
                "rowActions": [],
                "actions": []
              }
            ],
            "displayHint": "inline-row-command"
          },
          {
            "id": "projectListSurface",
            "type": "queryResult",
            "organismName": "ProjectListSurface",
            "titleKey": "organism.dashboardWorkspace.getProjectList.title",
            "purpose": "Shows a paginated, scannable list of all projects with name, client, site address, budget, schedule dates, and status so the manager can review and compare projects at a glance.",
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
            "displayHint": "summary-first"
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
    "id": "dashboardWorkspace__l2_page",
    "type": "l2_page",
    "outputPath": "_102045_/l2/buildFlowFsm/web/desktop/page11/dashboardWorkspace.ts",
    "defPath": "_102045_/l2/buildFlowFsm/web/desktop/page11/dashboardWorkspace.defs.ts",
    "dependsFiles": [
      "_102045_/l2/buildFlowFsm/web/shared/dashboardWorkspace.ts",
      "_102045_/l2/designSystem.ts"
    ],
    "dependsOn": [
      "dashboardWorkspace__l2_shared"
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
