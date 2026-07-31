/// <mls fileReference="_102045_/l2/buildFlowFsm/web/shared/dashboardWorkspace.defs.ts" enhancement="_blank"/>

export const definition = {
  "pageId": "dashboardWorkspace",
  "pageName": "Operational Dashboard",
  "moduleName": "buildFlowFsm",
  "baseClassName": "BuildFlowFsmDashboardWorkspaceBase",
  "routePattern": "/buildFlowFsm/dashboardWorkspace",
  "sourceKind": "operation",
  "ownerIds": [
    "operation:viewDashboard",
    "operation:queryProjects"
  ],
  "operationIds": [
    "viewDashboard",
    "queryProjects"
  ],
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
  "contractRef": {
    "tsPath": "_102045_/l2/buildFlowFsm/web/contracts/dashboardWorkspace.ts",
    "contracts": [
      {
        "commandName": "getDashboardSummary",
        "routeConst": "getDashboardSummaryRoute"
      },
      {
        "commandName": "getProjectList",
        "routeConst": "getProjectListRoute"
      }
    ]
  },
  "layoutRef": {
    "defPath": "_102045_/l2/buildFlowFsm/web/desktop/page11/dashboardWorkspace.defs.ts",
    "layoutId": "cfe-20260731060448.1000"
  },
  "states": [
    {
      "stateKey": "ui.dashboardWorkspace.status",
      "name": "status",
      "kind": "pageStatus",
      "defaultValue": ""
    },
    {
      "stateKey": "ui.dashboardWorkspace.action.getDashboardSummary.status",
      "name": "getDashboardSummaryState",
      "kind": "actionStatus",
      "actionRef": "getDashboardSummary",
      "valueSet": [
        "idle",
        "loading",
        "success",
        "error"
      ],
      "defaultValue": "idle"
    },
    {
      "stateKey": "ui.dashboardWorkspace.input.getDashboardSummary.status",
      "name": "getDashboardSummaryStatus",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "getDashboardSummary",
        "direction": "input",
        "field": "status"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.dashboardWorkspace.input.getDashboardSummary.page",
      "name": "getDashboardSummaryPage",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "getDashboardSummary",
        "direction": "input",
        "field": "page"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.dashboardWorkspace.input.getDashboardSummary.pageSize",
      "name": "getDashboardSummaryPageSize",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "getDashboardSummary",
        "direction": "input",
        "field": "pageSize"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.dashboardWorkspace.data.getDashboardSummary",
      "name": "getDashboardSummaryData",
      "kind": "queryResult",
      "contractRef": {
        "commandName": "getDashboardSummary",
        "direction": "output"
      },
      "outputShape": "paginated",
      "collection": false,
      "defaultValue": {
        "items": [],
        "total": 0
      }
    },
    {
      "stateKey": "ui.dashboardWorkspace.action.getProjectList.status",
      "name": "getProjectListState",
      "kind": "actionStatus",
      "actionRef": "getProjectList",
      "valueSet": [
        "idle",
        "loading",
        "success",
        "error"
      ],
      "defaultValue": "idle"
    },
    {
      "stateKey": "ui.dashboardWorkspace.input.getProjectList.status",
      "name": "getProjectListStatus",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "getProjectList",
        "direction": "input",
        "field": "status"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.dashboardWorkspace.input.getProjectList.page",
      "name": "getProjectListPage",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "getProjectList",
        "direction": "input",
        "field": "page"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.dashboardWorkspace.input.getProjectList.pageSize",
      "name": "getProjectListPageSize",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "getProjectList",
        "direction": "input",
        "field": "pageSize"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.dashboardWorkspace.data.getProjectList",
      "name": "getProjectListData",
      "kind": "queryResult",
      "contractRef": {
        "commandName": "getProjectList",
        "direction": "output"
      },
      "outputShape": "paginated",
      "collection": false,
      "defaultValue": {
        "items": [],
        "total": 0
      }
    }
  ],
  "actions": [
    {
      "actionId": "getDashboardSummary",
      "kind": "query",
      "commandRef": "getDashboardSummary",
      "routeKey": "buildFlowFsm.dashboardWorkspace.getDashboardSummary",
      "purpose": "View operational dashboard",
      "methodName": "loadGetDashboardSummary",
      "handlerName": "handleGetDashboardSummaryClick",
      "inputStateKeys": [
        "ui.dashboardWorkspace.input.getDashboardSummary.status",
        "ui.dashboardWorkspace.input.getDashboardSummary.page",
        "ui.dashboardWorkspace.input.getDashboardSummary.pageSize"
      ],
      "routeParamInputStateKeys": [],
      "selectedEntityInputStateKeys": [],
      "outputStateKeys": [
        "ui.dashboardWorkspace.data.getDashboardSummary"
      ],
      "statusStateKey": "ui.dashboardWorkspace.action.getDashboardSummary.status"
    },
    {
      "actionId": "getProjectList",
      "kind": "query",
      "commandRef": "getProjectList",
      "routeKey": "buildFlowFsm.dashboardWorkspace.getProjectList",
      "purpose": "Browse projects",
      "methodName": "loadGetProjectList",
      "handlerName": "handleGetProjectListClick",
      "inputStateKeys": [
        "ui.dashboardWorkspace.input.getProjectList.status",
        "ui.dashboardWorkspace.input.getProjectList.page",
        "ui.dashboardWorkspace.input.getProjectList.pageSize"
      ],
      "routeParamInputStateKeys": [],
      "selectedEntityInputStateKeys": [],
      "outputStateKeys": [
        "ui.dashboardWorkspace.data.getProjectList"
      ],
      "statusStateKey": "ui.dashboardWorkspace.action.getProjectList.status"
    },
    {
      "actionId": "set.getDashboardSummaryStatus",
      "kind": "stateSetter",
      "stateKey": "ui.dashboardWorkspace.input.getDashboardSummary.status",
      "methodName": "setGetDashboardSummaryStatus",
      "handlerName": "handleGetDashboardSummaryStatusChange"
    },
    {
      "actionId": "set.getDashboardSummaryPage",
      "kind": "stateSetter",
      "stateKey": "ui.dashboardWorkspace.input.getDashboardSummary.page",
      "methodName": "setGetDashboardSummaryPage",
      "handlerName": "handleGetDashboardSummaryPageChange"
    },
    {
      "actionId": "set.getDashboardSummaryPageSize",
      "kind": "stateSetter",
      "stateKey": "ui.dashboardWorkspace.input.getDashboardSummary.pageSize",
      "methodName": "setGetDashboardSummaryPageSize",
      "handlerName": "handleGetDashboardSummaryPageSizeChange"
    },
    {
      "actionId": "set.getProjectListStatus",
      "kind": "stateSetter",
      "stateKey": "ui.dashboardWorkspace.input.getProjectList.status",
      "methodName": "setGetProjectListStatus",
      "handlerName": "handleGetProjectListStatusChange"
    },
    {
      "actionId": "set.getProjectListPage",
      "kind": "stateSetter",
      "stateKey": "ui.dashboardWorkspace.input.getProjectList.page",
      "methodName": "setGetProjectListPage",
      "handlerName": "handleGetProjectListPageChange"
    },
    {
      "actionId": "set.getProjectListPageSize",
      "kind": "stateSetter",
      "stateKey": "ui.dashboardWorkspace.input.getProjectList.pageSize",
      "methodName": "setGetProjectListPageSize",
      "handlerName": "handleGetProjectListPageSizeChange"
    }
  ],
  "initialLoads": [
    {
      "actionId": "getDashboardSummary",
      "stateKey": "ui.dashboardWorkspace.data.getDashboardSummary"
    },
    {
      "actionId": "getProjectList",
      "stateKey": "ui.dashboardWorkspace.data.getProjectList"
    }
  ],
  "businessContextRefs": [],
  "navigationRefs": [],
  "i18nMeta": {
    "defaultLocale": "en",
    "activeLocales": [
      "en",
      "pt",
      "es"
    ],
    "runtimeLocales": [
      "en",
      "pt-br",
      "es"
    ]
  },
  "i18n": {
    "section.dashboardWorkspace.kpiAndBudgetSection.title": "KPI & Budget Overview",
    "organism.dashboardWorkspace.inline-row-command10.title": "Inline row command",
    "intent.dashboardWorkspace.inline-row-command10.content.title": "Inline row command",
    "organism.dashboardWorkspace.getDashboardSummary.title": "View operational dashboard",
    "intent.dashboardWorkspace.getDashboardSummary.list.title": "View operational dashboard",
    "intent.dashboardWorkspace.getDashboardSummary.list.empty": "Nenhum registro encontrado",
    "intent.dashboardWorkspace.getDashboardSummary.list.column.projects.label": "Projects",
    "intent.dashboardWorkspace.getDashboardSummary.list.column.total.label": "Total",
    "intent.dashboardWorkspace.getDashboardSummary.list.filter.status.label": "Status",
    "intent.dashboardWorkspace.getDashboardSummary.list.filter.page.label": "Page",
    "intent.dashboardWorkspace.getDashboardSummary.list.filter.pageSize.label": "Page Size",
    "section.dashboardWorkspace.projectListSection.title": "Project List",
    "organism.dashboardWorkspace.getProjectList.title": "Browse projects",
    "intent.dashboardWorkspace.getProjectList.list.title": "Browse projects",
    "intent.dashboardWorkspace.getProjectList.list.empty": "Nenhum registro encontrado",
    "intent.dashboardWorkspace.getProjectList.list.column.projects.label": "Projects",
    "intent.dashboardWorkspace.getProjectList.list.column.total.label": "Total",
    "intent.dashboardWorkspace.getProjectList.list.filter.status.label": "Status",
    "intent.dashboardWorkspace.getProjectList.list.filter.page.label": "Page",
    "intent.dashboardWorkspace.getProjectList.list.filter.pageSize.label": "Page Size",
    "section.dashboardWorkspace.kpi-budget-section.title": "KPI & Budget Overview",
    "organism.dashboardWorkspace.summary-first10.title": "Summary first",
    "intent.dashboardWorkspace.summary-first10.content.title": "Summary first",
    "section.dashboardWorkspace.project-list-section.title": "Project List"
  },
  "automation": {
    "statePrefix": "ui.dashboardWorkspace",
    "stateKeys": [
      "ui.dashboardWorkspace.status",
      "ui.dashboardWorkspace.action.getDashboardSummary.status",
      "ui.dashboardWorkspace.input.getDashboardSummary.status",
      "ui.dashboardWorkspace.input.getDashboardSummary.page",
      "ui.dashboardWorkspace.input.getDashboardSummary.pageSize",
      "ui.dashboardWorkspace.data.getDashboardSummary",
      "ui.dashboardWorkspace.action.getProjectList.status",
      "ui.dashboardWorkspace.input.getProjectList.status",
      "ui.dashboardWorkspace.input.getProjectList.page",
      "ui.dashboardWorkspace.input.getProjectList.pageSize",
      "ui.dashboardWorkspace.data.getProjectList"
    ],
    "actionIds": [
      "getDashboardSummary",
      "getProjectList",
      "set.getDashboardSummaryStatus",
      "set.getDashboardSummaryPage",
      "set.getDashboardSummaryPageSize",
      "set.getProjectListStatus",
      "set.getProjectListPage",
      "set.getProjectListPageSize"
    ]
  }
};

export const pipeline = [
  {
    "id": "dashboardWorkspace__l2_shared",
    "type": "l2_shared",
    "outputPath": "_102045_/l2/buildFlowFsm/web/shared/dashboardWorkspace.ts",
    "defPath": "_102045_/l2/buildFlowFsm/web/shared/dashboardWorkspace.defs.ts",
    "dependsFiles": [
      "_102045_/l2/buildFlowFsm/web/contracts/dashboardWorkspace.ts",
      "_102029_.d.ts"
    ],
    "dependsOn": [],
    "skills": [
      "_102020_/l2/agentChangeFrontend/skills/genCfeSharedTs.ts"
    ],
    "rulesApplied": [
      "dashboardShowsActiveProjects",
      "jobCostingRequiresBudgetAndSchedule"
    ],
    "agent": "agentCfeMaterializeGen"
  }
] as const;
