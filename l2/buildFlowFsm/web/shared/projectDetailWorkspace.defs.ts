/// <mls fileReference="_102045_/l2/buildFlowFsm/web/shared/projectDetailWorkspace.defs.ts" enhancement="_blank"/>

export const definition = {
  "pageId": "projectDetailWorkspace",
  "pageName": "Project Detail & Timeline",
  "moduleName": "buildFlowFsm",
  "baseClassName": "BuildFlowFsmProjectDetailWorkspaceBase",
  "routePattern": "/buildFlowFsm/projectDetailWorkspace/:projectId?/:changeOrderId?",
  "sourceKind": "operation",
  "ownerIds": [
    "operation:viewProject",
    "operation:queryWorkTasks",
    "operation:queryChangeOrders",
    "operation:viewChangeOrder",
    "operation:queryTimeLogs",
    "operation:queryMaterialUsages",
    "operation:generateDelayRiskSuggestions",
    "operation:queryDelayRiskSuggestions"
  ],
  "operationIds": [
    "viewProject",
    "queryWorkTasks",
    "queryChangeOrders",
    "viewChangeOrder",
    "queryTimeLogs",
    "queryMaterialUsages",
    "generateDelayRiskSuggestions",
    "queryDelayRiskSuggestions"
  ],
  "origin": {
    "source": "l4-journey",
    "workspaceId": "projectDetailWorkspace",
    "workspaceKind": "operation",
    "actor": "projectManager",
    "entity": "Project",
    "owners": [
      {
        "kind": "operation",
        "id": "viewProject",
        "defPath": "_102045_/l4/buildFlowFsm/operations/viewProject.defs.ts"
      },
      {
        "kind": "operation",
        "id": "queryWorkTasks",
        "defPath": "_102045_/l4/buildFlowFsm/operations/queryWorkTasks.defs.ts"
      },
      {
        "kind": "operation",
        "id": "queryChangeOrders",
        "defPath": "_102045_/l4/buildFlowFsm/operations/queryChangeOrders.defs.ts"
      },
      {
        "kind": "operation",
        "id": "viewChangeOrder",
        "defPath": "_102045_/l4/buildFlowFsm/operations/viewChangeOrder.defs.ts"
      },
      {
        "kind": "operation",
        "id": "queryTimeLogs",
        "defPath": "_102045_/l4/buildFlowFsm/operations/queryTimeLogs.defs.ts"
      },
      {
        "kind": "operation",
        "id": "queryMaterialUsages",
        "defPath": "_102045_/l4/buildFlowFsm/operations/queryMaterialUsages.defs.ts"
      },
      {
        "kind": "operation",
        "id": "generateDelayRiskSuggestions",
        "defPath": "_102045_/l4/buildFlowFsm/operations/generateDelayRiskSuggestions.defs.ts"
      },
      {
        "kind": "operation",
        "id": "queryDelayRiskSuggestions",
        "defPath": "_102045_/l4/buildFlowFsm/operations/queryDelayRiskSuggestions.defs.ts"
      }
    ],
    "microUserFlow": {
      "source": "l4/story.steps",
      "workflowSteps": [],
      "operations": [
        {
          "operationId": "viewProject",
          "commandName": "viewProject",
          "steps": [
            "Navigate to a specific project from the portfolio or dashboard",
            "Load the project record with client and schedule fields",
            "Review the task list and simple timeline against the project dates",
            "Use the detail as the starting point for status reports or further planning"
          ]
        },
        {
          "operationId": "queryWorkTasks",
          "commandName": "queryWorkTasks",
          "steps": [
            "Open the task list, project timeline, or dashboard task panel",
            "Optionally filter by project, status, or assigned worker",
            "Review each task's title, assignee, status, and due date",
            "Identify overdue and upcoming tasks that need attention"
          ]
        },
        {
          "operationId": "queryChangeOrders",
          "commandName": "queryChangeOrders",
          "steps": [
            "Open the change-order list for the selected project",
            "Optionally filter by status or impact type",
            "Review titles, cost and schedule adjustments, and lifecycle status",
            "Select a change order to inspect or advance its approval"
          ]
        },
        {
          "operationId": "viewChangeOrder",
          "commandName": "viewChangeOrder",
          "steps": [
            "Open the selected change order detail",
            "Review title, description, impact type, cost adjustment, schedule impact, and approval status",
            "Compare the cost adjustment against the project budget to assess financial consequence"
          ]
        },
        {
          "operationId": "queryTimeLogs",
          "commandName": "queryTimeLogs",
          "steps": [
            "Open the time logs browse list",
            "Optionally filter by work task, worker name, log date, or status",
            "Review hours worked and labor cost on each entry"
          ]
        },
        {
          "operationId": "queryMaterialUsages",
          "commandName": "queryMaterialUsages",
          "steps": [
            "Open the material usage list for the selected project",
            "Review material name, quantity, unit, unit cost, cost code, usage date, and status of each entry",
            "Optionally filter by status to separate posted costs from voided corrections"
          ]
        },
        {
          "operationId": "generateDelayRiskSuggestions",
          "commandName": "generateDelayRiskSuggestions",
          "steps": [
            "Open or select the status report for the project period under review",
            "Trigger generation of delay-risk suggestions for that status report",
            "System analyzes related work tasks, time logs and material usage against progress and due dates",
            "System creates advisory DelayRiskSuggestion records linked to the status report and flagged tasks without changing task status"
          ]
        },
        {
          "operationId": "queryDelayRiskSuggestions",
          "commandName": "queryDelayRiskSuggestions",
          "steps": [
            "Open the status report under review",
            "Load the AI-generated delay-risk suggestions linked to that report",
            "Inspect each suggestion’s risk level, reason, related work task and optional recommended action",
            "Note that suggestions are advisory only and do not change task status"
          ]
        }
      ]
    }
  },
  "contractRef": {
    "tsPath": "_102045_/l2/buildFlowFsm/web/contracts/projectDetailWorkspace.ts",
    "contracts": [
      {
        "commandName": "getProjectDetail",
        "routeConst": "getProjectDetailRoute"
      },
      {
        "commandName": "listWorkTasks",
        "routeConst": "listWorkTasksRoute"
      },
      {
        "commandName": "listChangeOrders",
        "routeConst": "listChangeOrdersRoute"
      },
      {
        "commandName": "getChangeOrderDetail",
        "routeConst": "getChangeOrderDetailRoute"
      },
      {
        "commandName": "listTimeLogs",
        "routeConst": "listTimeLogsRoute"
      },
      {
        "commandName": "listMaterialUsages",
        "routeConst": "listMaterialUsagesRoute"
      },
      {
        "commandName": "triggerDelayRiskSuggestions",
        "routeConst": "triggerDelayRiskSuggestionsRoute"
      },
      {
        "commandName": "listDelayRiskSuggestions",
        "routeConst": "listDelayRiskSuggestionsRoute"
      }
    ]
  },
  "layoutRef": {
    "defPath": "_102045_/l2/buildFlowFsm/web/desktop/page11/projectDetailWorkspace.defs.ts",
    "layoutId": "pos_workspace"
  },
  "states": [
    {
      "stateKey": "ui.projectDetailWorkspace.status",
      "name": "status",
      "kind": "pageStatus",
      "defaultValue": ""
    },
    {
      "stateKey": "ui.projectDetailWorkspace.action.getProjectDetail.status",
      "name": "getProjectDetailState",
      "kind": "actionStatus",
      "actionRef": "getProjectDetail",
      "valueSet": [
        "idle",
        "loading",
        "success",
        "error"
      ],
      "defaultValue": "idle"
    },
    {
      "stateKey": "ui.projectDetailWorkspace.input.getProjectDetail.projectId",
      "name": "getProjectDetailProjectId",
      "kind": "input",
      "source": "routeParam",
      "presentation": "route",
      "contractRef": {
        "commandName": "getProjectDetail",
        "direction": "input",
        "field": "projectId"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.projectDetailWorkspace.data.getProjectDetail",
      "name": "getProjectDetailData",
      "kind": "queryResult",
      "contractRef": {
        "commandName": "getProjectDetail",
        "direction": "output"
      },
      "outputShape": "object",
      "collection": false,
      "defaultValue": null
    },
    {
      "stateKey": "ui.projectDetailWorkspace.action.listWorkTasks.status",
      "name": "listWorkTasksState",
      "kind": "actionStatus",
      "actionRef": "listWorkTasks",
      "valueSet": [
        "idle",
        "loading",
        "success",
        "error"
      ],
      "defaultValue": "idle"
    },
    {
      "stateKey": "ui.projectDetailWorkspace.input.listWorkTasks.projectId",
      "name": "listWorkTasksProjectId",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "listWorkTasks",
        "direction": "input",
        "field": "projectId"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.projectDetailWorkspace.input.listWorkTasks.status",
      "name": "listWorkTasksStatus",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "listWorkTasks",
        "direction": "input",
        "field": "status"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.projectDetailWorkspace.input.listWorkTasks.assignedWorkerId",
      "name": "listWorkTasksAssignedWorkerId",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "listWorkTasks",
        "direction": "input",
        "field": "assignedWorkerId"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.projectDetailWorkspace.input.listWorkTasks.page",
      "name": "listWorkTasksPage",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "listWorkTasks",
        "direction": "input",
        "field": "page"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.projectDetailWorkspace.input.listWorkTasks.pageSize",
      "name": "listWorkTasksPageSize",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "listWorkTasks",
        "direction": "input",
        "field": "pageSize"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.projectDetailWorkspace.data.listWorkTasks",
      "name": "listWorkTasksData",
      "kind": "queryResult",
      "contractRef": {
        "commandName": "listWorkTasks",
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
      "stateKey": "ui.projectDetailWorkspace.action.listChangeOrders.status",
      "name": "listChangeOrdersState",
      "kind": "actionStatus",
      "actionRef": "listChangeOrders",
      "valueSet": [
        "idle",
        "loading",
        "success",
        "error"
      ],
      "defaultValue": "idle"
    },
    {
      "stateKey": "ui.projectDetailWorkspace.input.listChangeOrders.projectId",
      "name": "listChangeOrdersProjectId",
      "kind": "input",
      "source": "selectedEntity",
      "presentation": "selection",
      "contractRef": {
        "commandName": "listChangeOrders",
        "direction": "input",
        "field": "projectId"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.projectDetailWorkspace.input.listChangeOrders.status",
      "name": "listChangeOrdersStatus",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "listChangeOrders",
        "direction": "input",
        "field": "status"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.projectDetailWorkspace.input.listChangeOrders.impactType",
      "name": "listChangeOrdersImpactType",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "listChangeOrders",
        "direction": "input",
        "field": "impactType"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.projectDetailWorkspace.input.listChangeOrders.page",
      "name": "listChangeOrdersPage",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "listChangeOrders",
        "direction": "input",
        "field": "page"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.projectDetailWorkspace.input.listChangeOrders.pageSize",
      "name": "listChangeOrdersPageSize",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "listChangeOrders",
        "direction": "input",
        "field": "pageSize"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.projectDetailWorkspace.data.listChangeOrders",
      "name": "listChangeOrdersData",
      "kind": "queryResult",
      "contractRef": {
        "commandName": "listChangeOrders",
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
      "stateKey": "ui.projectDetailWorkspace.action.getChangeOrderDetail.status",
      "name": "getChangeOrderDetailState",
      "kind": "actionStatus",
      "actionRef": "getChangeOrderDetail",
      "valueSet": [
        "idle",
        "loading",
        "success",
        "error"
      ],
      "defaultValue": "idle"
    },
    {
      "stateKey": "ui.projectDetailWorkspace.input.getChangeOrderDetail.changeOrderId",
      "name": "getChangeOrderDetailChangeOrderId",
      "kind": "input",
      "source": "routeParam",
      "presentation": "route",
      "contractRef": {
        "commandName": "getChangeOrderDetail",
        "direction": "input",
        "field": "changeOrderId"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.projectDetailWorkspace.data.getChangeOrderDetail",
      "name": "getChangeOrderDetailData",
      "kind": "queryResult",
      "contractRef": {
        "commandName": "getChangeOrderDetail",
        "direction": "output"
      },
      "outputShape": "object",
      "collection": false,
      "defaultValue": null
    },
    {
      "stateKey": "ui.projectDetailWorkspace.action.listTimeLogs.status",
      "name": "listTimeLogsState",
      "kind": "actionStatus",
      "actionRef": "listTimeLogs",
      "valueSet": [
        "idle",
        "loading",
        "success",
        "error"
      ],
      "defaultValue": "idle"
    },
    {
      "stateKey": "ui.projectDetailWorkspace.input.listTimeLogs.workTaskId",
      "name": "listTimeLogsWorkTaskId",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "listTimeLogs",
        "direction": "input",
        "field": "workTaskId"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.projectDetailWorkspace.input.listTimeLogs.workerName",
      "name": "listTimeLogsWorkerName",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "listTimeLogs",
        "direction": "input",
        "field": "workerName"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.projectDetailWorkspace.input.listTimeLogs.logDate",
      "name": "listTimeLogsLogDate",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "listTimeLogs",
        "direction": "input",
        "field": "logDate"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.projectDetailWorkspace.input.listTimeLogs.status",
      "name": "listTimeLogsStatus",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "listTimeLogs",
        "direction": "input",
        "field": "status"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.projectDetailWorkspace.input.listTimeLogs.page",
      "name": "listTimeLogsPage",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "listTimeLogs",
        "direction": "input",
        "field": "page"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.projectDetailWorkspace.input.listTimeLogs.pageSize",
      "name": "listTimeLogsPageSize",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "listTimeLogs",
        "direction": "input",
        "field": "pageSize"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.projectDetailWorkspace.data.listTimeLogs",
      "name": "listTimeLogsData",
      "kind": "queryResult",
      "contractRef": {
        "commandName": "listTimeLogs",
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
      "stateKey": "ui.projectDetailWorkspace.action.listMaterialUsages.status",
      "name": "listMaterialUsagesState",
      "kind": "actionStatus",
      "actionRef": "listMaterialUsages",
      "valueSet": [
        "idle",
        "loading",
        "success",
        "error"
      ],
      "defaultValue": "idle"
    },
    {
      "stateKey": "ui.projectDetailWorkspace.input.listMaterialUsages.projectId",
      "name": "listMaterialUsagesProjectId",
      "kind": "input",
      "source": "selectedEntity",
      "presentation": "selection",
      "contractRef": {
        "commandName": "listMaterialUsages",
        "direction": "input",
        "field": "projectId"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.projectDetailWorkspace.input.listMaterialUsages.status",
      "name": "listMaterialUsagesStatus",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "listMaterialUsages",
        "direction": "input",
        "field": "status"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.projectDetailWorkspace.input.listMaterialUsages.page",
      "name": "listMaterialUsagesPage",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "listMaterialUsages",
        "direction": "input",
        "field": "page"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.projectDetailWorkspace.input.listMaterialUsages.pageSize",
      "name": "listMaterialUsagesPageSize",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "listMaterialUsages",
        "direction": "input",
        "field": "pageSize"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.projectDetailWorkspace.data.listMaterialUsages",
      "name": "listMaterialUsagesData",
      "kind": "queryResult",
      "contractRef": {
        "commandName": "listMaterialUsages",
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
      "stateKey": "ui.projectDetailWorkspace.action.triggerDelayRiskSuggestions.status",
      "name": "triggerDelayRiskSuggestionsState",
      "kind": "actionStatus",
      "actionRef": "triggerDelayRiskSuggestions",
      "valueSet": [
        "idle",
        "loading",
        "success",
        "error"
      ],
      "defaultValue": "idle"
    },
    {
      "stateKey": "ui.projectDetailWorkspace.input.triggerDelayRiskSuggestions.statusReportId",
      "name": "triggerDelayRiskSuggestionsStatusReportId",
      "kind": "input",
      "source": "selectedEntity",
      "presentation": "selection",
      "contractRef": {
        "commandName": "triggerDelayRiskSuggestions",
        "direction": "input",
        "field": "statusReportId"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.projectDetailWorkspace.output.triggerDelayRiskSuggestions",
      "name": "triggerDelayRiskSuggestionsOutput",
      "kind": "commandOutput",
      "contractRef": {
        "commandName": "triggerDelayRiskSuggestions",
        "direction": "output"
      },
      "defaultValue": null
    },
    {
      "stateKey": "ui.projectDetailWorkspace.action.triggerDelayRiskSuggestions.error",
      "name": "triggerDelayRiskSuggestionsError",
      "kind": "actionError",
      "actionRef": "triggerDelayRiskSuggestions",
      "defaultValue": ""
    },
    {
      "stateKey": "ui.projectDetailWorkspace.action.listDelayRiskSuggestions.status",
      "name": "listDelayRiskSuggestionsState",
      "kind": "actionStatus",
      "actionRef": "listDelayRiskSuggestions",
      "valueSet": [
        "idle",
        "loading",
        "success",
        "error"
      ],
      "defaultValue": "idle"
    },
    {
      "stateKey": "ui.projectDetailWorkspace.input.listDelayRiskSuggestions.statusReportId",
      "name": "listDelayRiskSuggestionsStatusReportId",
      "kind": "input",
      "source": "selectedEntity",
      "presentation": "selection",
      "contractRef": {
        "commandName": "listDelayRiskSuggestions",
        "direction": "input",
        "field": "statusReportId"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.projectDetailWorkspace.input.listDelayRiskSuggestions.acknowledged",
      "name": "listDelayRiskSuggestionsAcknowledged",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "listDelayRiskSuggestions",
        "direction": "input",
        "field": "acknowledged"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.projectDetailWorkspace.data.listDelayRiskSuggestions",
      "name": "listDelayRiskSuggestionsData",
      "kind": "queryResult",
      "contractRef": {
        "commandName": "listDelayRiskSuggestions",
        "direction": "output"
      },
      "outputShape": "array",
      "collection": true,
      "defaultValue": []
    }
  ],
  "actions": [
    {
      "actionId": "getProjectDetail",
      "kind": "query",
      "commandRef": "getProjectDetail",
      "routeKey": "buildFlowFsm.projectDetailWorkspace.getProjectDetail",
      "purpose": "View project detail and timeline",
      "methodName": "loadGetProjectDetail",
      "handlerName": "handleGetProjectDetailClick",
      "inputStateKeys": [
        "ui.projectDetailWorkspace.input.getProjectDetail.projectId"
      ],
      "routeParamInputStateKeys": [
        "ui.projectDetailWorkspace.input.getProjectDetail.projectId"
      ],
      "selectedEntityInputStateKeys": [],
      "outputStateKeys": [
        "ui.projectDetailWorkspace.data.getProjectDetail"
      ],
      "statusStateKey": "ui.projectDetailWorkspace.action.getProjectDetail.status"
    },
    {
      "actionId": "listWorkTasks",
      "kind": "query",
      "commandRef": "listWorkTasks",
      "routeKey": "buildFlowFsm.projectDetailWorkspace.listWorkTasks",
      "purpose": "Browse work tasks",
      "methodName": "loadListWorkTasks",
      "handlerName": "handleListWorkTasksClick",
      "inputStateKeys": [
        "ui.projectDetailWorkspace.input.listWorkTasks.projectId",
        "ui.projectDetailWorkspace.input.listWorkTasks.status",
        "ui.projectDetailWorkspace.input.listWorkTasks.assignedWorkerId",
        "ui.projectDetailWorkspace.input.listWorkTasks.page",
        "ui.projectDetailWorkspace.input.listWorkTasks.pageSize"
      ],
      "routeParamInputStateKeys": [],
      "selectedEntityInputStateKeys": [],
      "outputStateKeys": [
        "ui.projectDetailWorkspace.data.listWorkTasks"
      ],
      "statusStateKey": "ui.projectDetailWorkspace.action.listWorkTasks.status"
    },
    {
      "actionId": "listChangeOrders",
      "kind": "query",
      "commandRef": "listChangeOrders",
      "routeKey": "buildFlowFsm.projectDetailWorkspace.listChangeOrders",
      "purpose": "Browse change orders",
      "methodName": "loadListChangeOrders",
      "handlerName": "handleListChangeOrdersClick",
      "inputStateKeys": [
        "ui.projectDetailWorkspace.input.listChangeOrders.projectId",
        "ui.projectDetailWorkspace.input.listChangeOrders.status",
        "ui.projectDetailWorkspace.input.listChangeOrders.impactType",
        "ui.projectDetailWorkspace.input.listChangeOrders.page",
        "ui.projectDetailWorkspace.input.listChangeOrders.pageSize"
      ],
      "routeParamInputStateKeys": [],
      "selectedEntityInputStateKeys": [
        "ui.projectDetailWorkspace.input.listChangeOrders.projectId"
      ],
      "outputStateKeys": [
        "ui.projectDetailWorkspace.data.listChangeOrders"
      ],
      "statusStateKey": "ui.projectDetailWorkspace.action.listChangeOrders.status"
    },
    {
      "actionId": "getChangeOrderDetail",
      "kind": "query",
      "commandRef": "getChangeOrderDetail",
      "routeKey": "buildFlowFsm.projectDetailWorkspace.getChangeOrderDetail",
      "purpose": "View change order and cost impact",
      "methodName": "loadGetChangeOrderDetail",
      "handlerName": "handleGetChangeOrderDetailClick",
      "inputStateKeys": [
        "ui.projectDetailWorkspace.input.getChangeOrderDetail.changeOrderId"
      ],
      "routeParamInputStateKeys": [
        "ui.projectDetailWorkspace.input.getChangeOrderDetail.changeOrderId"
      ],
      "selectedEntityInputStateKeys": [],
      "outputStateKeys": [
        "ui.projectDetailWorkspace.data.getChangeOrderDetail"
      ],
      "statusStateKey": "ui.projectDetailWorkspace.action.getChangeOrderDetail.status"
    },
    {
      "actionId": "listTimeLogs",
      "kind": "query",
      "commandRef": "listTimeLogs",
      "routeKey": "buildFlowFsm.projectDetailWorkspace.listTimeLogs",
      "purpose": "Browse time logs",
      "methodName": "loadListTimeLogs",
      "handlerName": "handleListTimeLogsClick",
      "inputStateKeys": [
        "ui.projectDetailWorkspace.input.listTimeLogs.workTaskId",
        "ui.projectDetailWorkspace.input.listTimeLogs.workerName",
        "ui.projectDetailWorkspace.input.listTimeLogs.logDate",
        "ui.projectDetailWorkspace.input.listTimeLogs.status",
        "ui.projectDetailWorkspace.input.listTimeLogs.page",
        "ui.projectDetailWorkspace.input.listTimeLogs.pageSize"
      ],
      "routeParamInputStateKeys": [],
      "selectedEntityInputStateKeys": [],
      "outputStateKeys": [
        "ui.projectDetailWorkspace.data.listTimeLogs"
      ],
      "statusStateKey": "ui.projectDetailWorkspace.action.listTimeLogs.status"
    },
    {
      "actionId": "listMaterialUsages",
      "kind": "query",
      "commandRef": "listMaterialUsages",
      "routeKey": "buildFlowFsm.projectDetailWorkspace.listMaterialUsages",
      "purpose": "Browse material usage",
      "methodName": "loadListMaterialUsages",
      "handlerName": "handleListMaterialUsagesClick",
      "inputStateKeys": [
        "ui.projectDetailWorkspace.input.listMaterialUsages.projectId",
        "ui.projectDetailWorkspace.input.listMaterialUsages.status",
        "ui.projectDetailWorkspace.input.listMaterialUsages.page",
        "ui.projectDetailWorkspace.input.listMaterialUsages.pageSize"
      ],
      "routeParamInputStateKeys": [],
      "selectedEntityInputStateKeys": [
        "ui.projectDetailWorkspace.input.listMaterialUsages.projectId"
      ],
      "outputStateKeys": [
        "ui.projectDetailWorkspace.data.listMaterialUsages"
      ],
      "statusStateKey": "ui.projectDetailWorkspace.action.listMaterialUsages.status"
    },
    {
      "actionId": "triggerDelayRiskSuggestions",
      "kind": "command",
      "commandRef": "triggerDelayRiskSuggestions",
      "routeKey": "buildFlowFsm.projectDetailWorkspace.triggerDelayRiskSuggestions",
      "purpose": "Generate delay-risk suggestions",
      "methodName": "triggerDelayRiskSuggestions",
      "handlerName": "handleTriggerDelayRiskSuggestionsClick",
      "inputStateKeys": [
        "ui.projectDetailWorkspace.input.triggerDelayRiskSuggestions.statusReportId"
      ],
      "routeParamInputStateKeys": [],
      "selectedEntityInputStateKeys": [
        "ui.projectDetailWorkspace.input.triggerDelayRiskSuggestions.statusReportId"
      ],
      "outputStateKeys": [
        "ui.projectDetailWorkspace.output.triggerDelayRiskSuggestions"
      ],
      "statusStateKey": "ui.projectDetailWorkspace.action.triggerDelayRiskSuggestions.status",
      "errorStateKey": "ui.projectDetailWorkspace.action.triggerDelayRiskSuggestions.error",
      "feedback": {
        "successMessageKey": "action.triggerDelayRiskSuggestions.success",
        "errorMessageKey": "action.triggerDelayRiskSuggestions.error",
        "dismissible": true
      },
      "clearInputStateKeys": [
        "ui.projectDetailWorkspace.input.triggerDelayRiskSuggestions.statusReportId"
      ],
      "refreshActionIds": [
        "getProjectDetail",
        "listWorkTasks",
        "listChangeOrders",
        "getChangeOrderDetail",
        "listTimeLogs",
        "listMaterialUsages",
        "listDelayRiskSuggestions"
      ]
    },
    {
      "actionId": "listDelayRiskSuggestions",
      "kind": "query",
      "commandRef": "listDelayRiskSuggestions",
      "routeKey": "buildFlowFsm.projectDetailWorkspace.listDelayRiskSuggestions",
      "purpose": "Review delay-risk suggestions",
      "methodName": "loadListDelayRiskSuggestions",
      "handlerName": "handleListDelayRiskSuggestionsClick",
      "inputStateKeys": [
        "ui.projectDetailWorkspace.input.listDelayRiskSuggestions.statusReportId",
        "ui.projectDetailWorkspace.input.listDelayRiskSuggestions.acknowledged"
      ],
      "routeParamInputStateKeys": [],
      "selectedEntityInputStateKeys": [
        "ui.projectDetailWorkspace.input.listDelayRiskSuggestions.statusReportId"
      ],
      "outputStateKeys": [
        "ui.projectDetailWorkspace.data.listDelayRiskSuggestions"
      ],
      "statusStateKey": "ui.projectDetailWorkspace.action.listDelayRiskSuggestions.status"
    },
    {
      "actionId": "set.getProjectDetailProjectId",
      "kind": "stateSetter",
      "stateKey": "ui.projectDetailWorkspace.input.getProjectDetail.projectId",
      "methodName": "setGetProjectDetailProjectId",
      "handlerName": "handleGetProjectDetailProjectIdChange"
    },
    {
      "actionId": "set.listWorkTasksProjectId",
      "kind": "stateSetter",
      "stateKey": "ui.projectDetailWorkspace.input.listWorkTasks.projectId",
      "methodName": "setListWorkTasksProjectId",
      "handlerName": "handleListWorkTasksProjectIdChange"
    },
    {
      "actionId": "set.listWorkTasksStatus",
      "kind": "stateSetter",
      "stateKey": "ui.projectDetailWorkspace.input.listWorkTasks.status",
      "methodName": "setListWorkTasksStatus",
      "handlerName": "handleListWorkTasksStatusChange"
    },
    {
      "actionId": "set.listWorkTasksAssignedWorkerId",
      "kind": "stateSetter",
      "stateKey": "ui.projectDetailWorkspace.input.listWorkTasks.assignedWorkerId",
      "methodName": "setListWorkTasksAssignedWorkerId",
      "handlerName": "handleListWorkTasksAssignedWorkerIdChange"
    },
    {
      "actionId": "set.listWorkTasksPage",
      "kind": "stateSetter",
      "stateKey": "ui.projectDetailWorkspace.input.listWorkTasks.page",
      "methodName": "setListWorkTasksPage",
      "handlerName": "handleListWorkTasksPageChange"
    },
    {
      "actionId": "set.listWorkTasksPageSize",
      "kind": "stateSetter",
      "stateKey": "ui.projectDetailWorkspace.input.listWorkTasks.pageSize",
      "methodName": "setListWorkTasksPageSize",
      "handlerName": "handleListWorkTasksPageSizeChange"
    },
    {
      "actionId": "set.listChangeOrdersProjectId",
      "kind": "stateSetter",
      "stateKey": "ui.projectDetailWorkspace.input.listChangeOrders.projectId",
      "methodName": "setListChangeOrdersProjectId",
      "handlerName": "handleListChangeOrdersProjectIdChange"
    },
    {
      "actionId": "set.listChangeOrdersStatus",
      "kind": "stateSetter",
      "stateKey": "ui.projectDetailWorkspace.input.listChangeOrders.status",
      "methodName": "setListChangeOrdersStatus",
      "handlerName": "handleListChangeOrdersStatusChange"
    },
    {
      "actionId": "set.listChangeOrdersImpactType",
      "kind": "stateSetter",
      "stateKey": "ui.projectDetailWorkspace.input.listChangeOrders.impactType",
      "methodName": "setListChangeOrdersImpactType",
      "handlerName": "handleListChangeOrdersImpactTypeChange"
    },
    {
      "actionId": "set.listChangeOrdersPage",
      "kind": "stateSetter",
      "stateKey": "ui.projectDetailWorkspace.input.listChangeOrders.page",
      "methodName": "setListChangeOrdersPage",
      "handlerName": "handleListChangeOrdersPageChange"
    },
    {
      "actionId": "set.listChangeOrdersPageSize",
      "kind": "stateSetter",
      "stateKey": "ui.projectDetailWorkspace.input.listChangeOrders.pageSize",
      "methodName": "setListChangeOrdersPageSize",
      "handlerName": "handleListChangeOrdersPageSizeChange"
    },
    {
      "actionId": "set.getChangeOrderDetailChangeOrderId",
      "kind": "stateSetter",
      "stateKey": "ui.projectDetailWorkspace.input.getChangeOrderDetail.changeOrderId",
      "methodName": "setGetChangeOrderDetailChangeOrderId",
      "handlerName": "handleGetChangeOrderDetailChangeOrderIdChange"
    },
    {
      "actionId": "set.listTimeLogsWorkTaskId",
      "kind": "stateSetter",
      "stateKey": "ui.projectDetailWorkspace.input.listTimeLogs.workTaskId",
      "methodName": "setListTimeLogsWorkTaskId",
      "handlerName": "handleListTimeLogsWorkTaskIdChange"
    },
    {
      "actionId": "set.listTimeLogsWorkerName",
      "kind": "stateSetter",
      "stateKey": "ui.projectDetailWorkspace.input.listTimeLogs.workerName",
      "methodName": "setListTimeLogsWorkerName",
      "handlerName": "handleListTimeLogsWorkerNameChange"
    },
    {
      "actionId": "set.listTimeLogsLogDate",
      "kind": "stateSetter",
      "stateKey": "ui.projectDetailWorkspace.input.listTimeLogs.logDate",
      "methodName": "setListTimeLogsLogDate",
      "handlerName": "handleListTimeLogsLogDateChange"
    },
    {
      "actionId": "set.listTimeLogsStatus",
      "kind": "stateSetter",
      "stateKey": "ui.projectDetailWorkspace.input.listTimeLogs.status",
      "methodName": "setListTimeLogsStatus",
      "handlerName": "handleListTimeLogsStatusChange"
    },
    {
      "actionId": "set.listTimeLogsPage",
      "kind": "stateSetter",
      "stateKey": "ui.projectDetailWorkspace.input.listTimeLogs.page",
      "methodName": "setListTimeLogsPage",
      "handlerName": "handleListTimeLogsPageChange"
    },
    {
      "actionId": "set.listTimeLogsPageSize",
      "kind": "stateSetter",
      "stateKey": "ui.projectDetailWorkspace.input.listTimeLogs.pageSize",
      "methodName": "setListTimeLogsPageSize",
      "handlerName": "handleListTimeLogsPageSizeChange"
    },
    {
      "actionId": "set.listMaterialUsagesProjectId",
      "kind": "stateSetter",
      "stateKey": "ui.projectDetailWorkspace.input.listMaterialUsages.projectId",
      "methodName": "setListMaterialUsagesProjectId",
      "handlerName": "handleListMaterialUsagesProjectIdChange"
    },
    {
      "actionId": "set.listMaterialUsagesStatus",
      "kind": "stateSetter",
      "stateKey": "ui.projectDetailWorkspace.input.listMaterialUsages.status",
      "methodName": "setListMaterialUsagesStatus",
      "handlerName": "handleListMaterialUsagesStatusChange"
    },
    {
      "actionId": "set.listMaterialUsagesPage",
      "kind": "stateSetter",
      "stateKey": "ui.projectDetailWorkspace.input.listMaterialUsages.page",
      "methodName": "setListMaterialUsagesPage",
      "handlerName": "handleListMaterialUsagesPageChange"
    },
    {
      "actionId": "set.listMaterialUsagesPageSize",
      "kind": "stateSetter",
      "stateKey": "ui.projectDetailWorkspace.input.listMaterialUsages.pageSize",
      "methodName": "setListMaterialUsagesPageSize",
      "handlerName": "handleListMaterialUsagesPageSizeChange"
    },
    {
      "actionId": "set.triggerDelayRiskSuggestionsStatusReportId",
      "kind": "stateSetter",
      "stateKey": "ui.projectDetailWorkspace.input.triggerDelayRiskSuggestions.statusReportId",
      "methodName": "setTriggerDelayRiskSuggestionsStatusReportId",
      "handlerName": "handleTriggerDelayRiskSuggestionsStatusReportIdChange"
    },
    {
      "actionId": "set.listDelayRiskSuggestionsStatusReportId",
      "kind": "stateSetter",
      "stateKey": "ui.projectDetailWorkspace.input.listDelayRiskSuggestions.statusReportId",
      "methodName": "setListDelayRiskSuggestionsStatusReportId",
      "handlerName": "handleListDelayRiskSuggestionsStatusReportIdChange"
    },
    {
      "actionId": "set.listDelayRiskSuggestionsAcknowledged",
      "kind": "stateSetter",
      "stateKey": "ui.projectDetailWorkspace.input.listDelayRiskSuggestions.acknowledged",
      "methodName": "setListDelayRiskSuggestionsAcknowledged",
      "handlerName": "handleListDelayRiskSuggestionsAcknowledgedChange"
    }
  ],
  "initialLoads": [
    {
      "actionId": "listTimeLogs",
      "stateKey": "ui.projectDetailWorkspace.data.listTimeLogs"
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
    "section.projectDetailWorkspace.sec-projectHeader.title": "Project Header",
    "organism.projectDetailWorkspace.getProjectDetail.title": "View project detail and timeline",
    "intent.projectDetailWorkspace.getProjectDetail.list.title": "View project detail and timeline",
    "intent.projectDetailWorkspace.getProjectDetail.list.empty": "Nenhum registro encontrado",
    "intent.projectDetailWorkspace.getProjectDetail.list.column.projectId.label": "Project Id",
    "intent.projectDetailWorkspace.getProjectDetail.list.column.name.label": "Name",
    "intent.projectDetailWorkspace.getProjectDetail.list.column.clientId.label": "Client Id",
    "intent.projectDetailWorkspace.getProjectDetail.list.column.clientName.label": "Client Name",
    "intent.projectDetailWorkspace.getProjectDetail.list.column.clientCompany.label": "Client Company",
    "intent.projectDetailWorkspace.getProjectDetail.list.column.siteAddress.label": "Site Address",
    "intent.projectDetailWorkspace.getProjectDetail.list.column.budget.label": "Budget",
    "intent.projectDetailWorkspace.getProjectDetail.list.column.startDate.label": "Start Date",
    "intent.projectDetailWorkspace.getProjectDetail.list.column.endDate.label": "End Date",
    "intent.projectDetailWorkspace.getProjectDetail.list.column.status.label": "Status",
    "intent.projectDetailWorkspace.getProjectDetail.list.column.holdReason.label": "Hold Reason",
    "intent.projectDetailWorkspace.getProjectDetail.list.column.closedAt.label": "Closed At",
    "intent.projectDetailWorkspace.getProjectDetail.list.column.cancelledAt.label": "Cancelled At",
    "intent.projectDetailWorkspace.getProjectDetail.list.column.cancellationReason.label": "Cancellation Reason",
    "intent.projectDetailWorkspace.getProjectDetail.list.column.createdAt.label": "Created At",
    "intent.projectDetailWorkspace.getProjectDetail.list.column.updatedAt.label": "Updated At",
    "section.projectDetailWorkspace.sec-taskTimeline.title": "Work Tasks & Timeline",
    "organism.projectDetailWorkspace.listWorkTasks.title": "Browse work tasks",
    "intent.projectDetailWorkspace.listWorkTasks.list.title": "Browse work tasks",
    "intent.projectDetailWorkspace.listWorkTasks.list.empty": "Nenhum registro encontrado",
    "intent.projectDetailWorkspace.listWorkTasks.list.column.workTasks.label": "Work Tasks",
    "intent.projectDetailWorkspace.listWorkTasks.list.column.total.label": "Total",
    "intent.projectDetailWorkspace.listWorkTasks.list.filter.projectId.label": "Project Id",
    "intent.projectDetailWorkspace.listWorkTasks.list.filter.status.label": "Status",
    "intent.projectDetailWorkspace.listWorkTasks.list.filter.assignedWorkerId.label": "Assigned Worker Id",
    "intent.projectDetailWorkspace.listWorkTasks.list.filter.page.label": "Page",
    "intent.projectDetailWorkspace.listWorkTasks.list.filter.pageSize.label": "Page Size",
    "section.projectDetailWorkspace.sec-changeOrders.title": "Change Orders",
    "organism.projectDetailWorkspace.listChangeOrders.title": "Browse change orders",
    "intent.projectDetailWorkspace.listChangeOrders.list.title": "Browse change orders",
    "intent.projectDetailWorkspace.listChangeOrders.list.empty": "Nenhum registro encontrado",
    "intent.projectDetailWorkspace.listChangeOrders.list.column.changeOrders.label": "Change Orders",
    "intent.projectDetailWorkspace.listChangeOrders.list.column.total.label": "Total",
    "intent.projectDetailWorkspace.listChangeOrders.list.filter.status.label": "Status",
    "intent.projectDetailWorkspace.listChangeOrders.list.filter.impactType.label": "Impact Type",
    "intent.projectDetailWorkspace.listChangeOrders.list.filter.page.label": "Page",
    "intent.projectDetailWorkspace.listChangeOrders.list.filter.pageSize.label": "Page Size",
    "organism.projectDetailWorkspace.getChangeOrderDetail.title": "View change order and cost impact",
    "intent.projectDetailWorkspace.getChangeOrderDetail.list.title": "View change order and cost impact",
    "intent.projectDetailWorkspace.getChangeOrderDetail.list.empty": "Nenhum registro encontrado",
    "intent.projectDetailWorkspace.getChangeOrderDetail.list.column.changeOrderId.label": "Change Order Id",
    "intent.projectDetailWorkspace.getChangeOrderDetail.list.column.projectId.label": "Project Id",
    "intent.projectDetailWorkspace.getChangeOrderDetail.list.column.title.label": "Title",
    "intent.projectDetailWorkspace.getChangeOrderDetail.list.column.description.label": "Description",
    "intent.projectDetailWorkspace.getChangeOrderDetail.list.column.impactType.label": "Impact Type",
    "intent.projectDetailWorkspace.getChangeOrderDetail.list.column.costAdjustment.label": "Cost Adjustment",
    "intent.projectDetailWorkspace.getChangeOrderDetail.list.column.scheduleAdjustmentDays.label": "Schedule Adjustment Days",
    "intent.projectDetailWorkspace.getChangeOrderDetail.list.column.status.label": "Status",
    "intent.projectDetailWorkspace.getChangeOrderDetail.list.column.rejectionReason.label": "Rejection Reason",
    "intent.projectDetailWorkspace.getChangeOrderDetail.list.column.approvedAt.label": "Approved At",
    "intent.projectDetailWorkspace.getChangeOrderDetail.list.column.rejectedAt.label": "Rejected At",
    "intent.projectDetailWorkspace.getChangeOrderDetail.list.column.projectName.label": "Project Name",
    "intent.projectDetailWorkspace.getChangeOrderDetail.list.column.projectBudget.label": "Project Budget",
    "intent.projectDetailWorkspace.getChangeOrderDetail.list.column.affectsJobCosting.label": "Affects Job Costing",
    "section.projectDetailWorkspace.sec-costTracking.title": "Cost Tracking — Time Logs",
    "organism.projectDetailWorkspace.listTimeLogs.title": "Browse time logs",
    "intent.projectDetailWorkspace.listTimeLogs.list.title": "Browse time logs",
    "intent.projectDetailWorkspace.listTimeLogs.list.empty": "Nenhum registro encontrado",
    "intent.projectDetailWorkspace.listTimeLogs.list.column.timeLogs.label": "Time Logs",
    "intent.projectDetailWorkspace.listTimeLogs.list.column.total.label": "Total",
    "intent.projectDetailWorkspace.listTimeLogs.list.filter.workTaskId.label": "Work Task Id",
    "intent.projectDetailWorkspace.listTimeLogs.list.filter.workerName.label": "Worker Name",
    "intent.projectDetailWorkspace.listTimeLogs.list.filter.logDate.label": "Log Date",
    "intent.projectDetailWorkspace.listTimeLogs.list.filter.status.label": "Status",
    "intent.projectDetailWorkspace.listTimeLogs.list.filter.page.label": "Page",
    "intent.projectDetailWorkspace.listTimeLogs.list.filter.pageSize.label": "Page Size",
    "section.projectDetailWorkspace.sec-materialUsage.title": "Material Usage",
    "organism.projectDetailWorkspace.listMaterialUsages.title": "Browse material usage",
    "intent.projectDetailWorkspace.listMaterialUsages.list.title": "Browse material usage",
    "intent.projectDetailWorkspace.listMaterialUsages.list.empty": "Nenhum registro encontrado",
    "intent.projectDetailWorkspace.listMaterialUsages.list.column.materialUsages.label": "Material Usages",
    "intent.projectDetailWorkspace.listMaterialUsages.list.column.total.label": "Total",
    "intent.projectDetailWorkspace.listMaterialUsages.list.filter.status.label": "Status",
    "intent.projectDetailWorkspace.listMaterialUsages.list.filter.page.label": "Page",
    "intent.projectDetailWorkspace.listMaterialUsages.list.filter.pageSize.label": "Page Size",
    "section.projectDetailWorkspace.sec-delayRiskInsights.title": "Delay Risk Insights",
    "organism.projectDetailWorkspace.triggerDelayRiskSuggestions.title": "Generate delay-risk suggestions",
    "intent.projectDetailWorkspace.triggerDelayRiskSuggestions.form.title": "Generate delay-risk suggestions",
    "intent.projectDetailWorkspace.triggerDelayRiskSuggestions.form.action.triggerDelayRiskSuggestions": "Generate delay-risk suggestions",
    "organism.projectDetailWorkspace.listDelayRiskSuggestions.title": "Review delay-risk suggestions",
    "intent.projectDetailWorkspace.listDelayRiskSuggestions.list.title": "Review delay-risk suggestions",
    "intent.projectDetailWorkspace.listDelayRiskSuggestions.list.empty": "Nenhum registro encontrado",
    "intent.projectDetailWorkspace.listDelayRiskSuggestions.list.column.delayRiskSuggestionId.label": "Delay Risk Suggestion Id",
    "intent.projectDetailWorkspace.listDelayRiskSuggestions.list.column.workTaskId.label": "Work Task Id",
    "intent.projectDetailWorkspace.listDelayRiskSuggestions.list.column.workTaskTitle.label": "Work Task Title",
    "intent.projectDetailWorkspace.listDelayRiskSuggestions.list.column.riskLevel.label": "Risk Level",
    "intent.projectDetailWorkspace.listDelayRiskSuggestions.list.column.reason.label": "Reason",
    "intent.projectDetailWorkspace.listDelayRiskSuggestions.list.column.suggestedAction.label": "Suggested Action",
    "intent.projectDetailWorkspace.listDelayRiskSuggestions.list.column.acknowledged.label": "Acknowledged",
    "intent.projectDetailWorkspace.listDelayRiskSuggestions.list.column.createdAt.label": "Created At",
    "intent.projectDetailWorkspace.listDelayRiskSuggestions.list.filter.acknowledged.label": "Acknowledged",
    "section.projectDetailWorkspace.sec-project-header.title": "Project Header",
    "section.projectDetailWorkspace.sec-task-timeline.title": "Work Task Timeline",
    "section.projectDetailWorkspace.sec-change-orders.title": "Change Orders",
    "section.projectDetailWorkspace.sec-cost-tracking.title": "Cost Tracking",
    "section.projectDetailWorkspace.sec-delay-risk-insights.title": "Delay-Risk Insights"
  },
  "automation": {
    "statePrefix": "ui.projectDetailWorkspace",
    "stateKeys": [
      "ui.projectDetailWorkspace.status",
      "ui.projectDetailWorkspace.action.getProjectDetail.status",
      "ui.projectDetailWorkspace.input.getProjectDetail.projectId",
      "ui.projectDetailWorkspace.data.getProjectDetail",
      "ui.projectDetailWorkspace.action.listWorkTasks.status",
      "ui.projectDetailWorkspace.input.listWorkTasks.projectId",
      "ui.projectDetailWorkspace.input.listWorkTasks.status",
      "ui.projectDetailWorkspace.input.listWorkTasks.assignedWorkerId",
      "ui.projectDetailWorkspace.input.listWorkTasks.page",
      "ui.projectDetailWorkspace.input.listWorkTasks.pageSize",
      "ui.projectDetailWorkspace.data.listWorkTasks",
      "ui.projectDetailWorkspace.action.listChangeOrders.status",
      "ui.projectDetailWorkspace.input.listChangeOrders.projectId",
      "ui.projectDetailWorkspace.input.listChangeOrders.status",
      "ui.projectDetailWorkspace.input.listChangeOrders.impactType",
      "ui.projectDetailWorkspace.input.listChangeOrders.page",
      "ui.projectDetailWorkspace.input.listChangeOrders.pageSize",
      "ui.projectDetailWorkspace.data.listChangeOrders",
      "ui.projectDetailWorkspace.action.getChangeOrderDetail.status",
      "ui.projectDetailWorkspace.input.getChangeOrderDetail.changeOrderId",
      "ui.projectDetailWorkspace.data.getChangeOrderDetail",
      "ui.projectDetailWorkspace.action.listTimeLogs.status",
      "ui.projectDetailWorkspace.input.listTimeLogs.workTaskId",
      "ui.projectDetailWorkspace.input.listTimeLogs.workerName",
      "ui.projectDetailWorkspace.input.listTimeLogs.logDate",
      "ui.projectDetailWorkspace.input.listTimeLogs.status",
      "ui.projectDetailWorkspace.input.listTimeLogs.page",
      "ui.projectDetailWorkspace.input.listTimeLogs.pageSize",
      "ui.projectDetailWorkspace.data.listTimeLogs",
      "ui.projectDetailWorkspace.action.listMaterialUsages.status",
      "ui.projectDetailWorkspace.input.listMaterialUsages.projectId",
      "ui.projectDetailWorkspace.input.listMaterialUsages.status",
      "ui.projectDetailWorkspace.input.listMaterialUsages.page",
      "ui.projectDetailWorkspace.input.listMaterialUsages.pageSize",
      "ui.projectDetailWorkspace.data.listMaterialUsages",
      "ui.projectDetailWorkspace.action.triggerDelayRiskSuggestions.status",
      "ui.projectDetailWorkspace.input.triggerDelayRiskSuggestions.statusReportId",
      "ui.projectDetailWorkspace.output.triggerDelayRiskSuggestions",
      "ui.projectDetailWorkspace.action.triggerDelayRiskSuggestions.error",
      "ui.projectDetailWorkspace.action.listDelayRiskSuggestions.status",
      "ui.projectDetailWorkspace.input.listDelayRiskSuggestions.statusReportId",
      "ui.projectDetailWorkspace.input.listDelayRiskSuggestions.acknowledged",
      "ui.projectDetailWorkspace.data.listDelayRiskSuggestions"
    ],
    "actionIds": [
      "getProjectDetail",
      "listWorkTasks",
      "listChangeOrders",
      "getChangeOrderDetail",
      "listTimeLogs",
      "listMaterialUsages",
      "triggerDelayRiskSuggestions",
      "listDelayRiskSuggestions",
      "set.getProjectDetailProjectId",
      "set.listWorkTasksProjectId",
      "set.listWorkTasksStatus",
      "set.listWorkTasksAssignedWorkerId",
      "set.listWorkTasksPage",
      "set.listWorkTasksPageSize",
      "set.listChangeOrdersProjectId",
      "set.listChangeOrdersStatus",
      "set.listChangeOrdersImpactType",
      "set.listChangeOrdersPage",
      "set.listChangeOrdersPageSize",
      "set.getChangeOrderDetailChangeOrderId",
      "set.listTimeLogsWorkTaskId",
      "set.listTimeLogsWorkerName",
      "set.listTimeLogsLogDate",
      "set.listTimeLogsStatus",
      "set.listTimeLogsPage",
      "set.listTimeLogsPageSize",
      "set.listMaterialUsagesProjectId",
      "set.listMaterialUsagesStatus",
      "set.listMaterialUsagesPage",
      "set.listMaterialUsagesPageSize",
      "set.triggerDelayRiskSuggestionsStatusReportId",
      "set.listDelayRiskSuggestionsStatusReportId",
      "set.listDelayRiskSuggestionsAcknowledged"
    ]
  }
};

export const pipeline = [
  {
    "id": "projectDetailWorkspace__l2_shared",
    "type": "l2_shared",
    "outputPath": "_102045_/l2/buildFlowFsm/web/shared/projectDetailWorkspace.ts",
    "defPath": "_102045_/l2/buildFlowFsm/web/shared/projectDetailWorkspace.defs.ts",
    "dependsFiles": [
      "_102045_/l2/buildFlowFsm/web/contracts/projectDetailWorkspace.ts",
      "_102029_.d.ts"
    ],
    "dependsOn": [],
    "skills": [
      "_102020_/l2/agentChangeFrontend/skills/genCfeSharedTs.ts"
    ],
    "rulesApplied": [
      "operationsRequireActiveProject",
      "overdueTaskHighlighting",
      "taskSortingByDueDate",
      "onlyApprovedChangeOrdersAffectCosting",
      "jobCostDerivation",
      "timeLogLinkingRequired",
      "materialUsageIsProjectLevel",
      "delayRiskSuggestionsAdvisory"
    ],
    "agent": "agentCfeMaterializeGen"
  }
] as const;
