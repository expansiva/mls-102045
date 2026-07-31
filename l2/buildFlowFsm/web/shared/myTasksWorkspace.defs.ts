/// <mls fileReference="_102045_/l2/buildFlowFsm/web/shared/myTasksWorkspace.defs.ts" enhancement="_blank"/>

export const definition = {
  "pageId": "myTasksWorkspace",
  "pageName": "My Tasks",
  "moduleName": "buildFlowFsm",
  "baseClassName": "BuildFlowFsmMyTasksWorkspaceBase",
  "routePattern": "/buildFlowFsm/myTasksWorkspace/:workTaskId?",
  "sourceKind": "operation",
  "ownerIds": [
    "operation:queryMyWorkTasks",
    "operation:viewWorkTask"
  ],
  "operationIds": [
    "queryMyWorkTasks",
    "viewWorkTask"
  ],
  "origin": {
    "source": "l4-journey",
    "workspaceId": "myTasksWorkspace",
    "workspaceKind": "operation",
    "actor": "fieldWorker",
    "entity": "WorkTask",
    "owners": [
      {
        "kind": "operation",
        "id": "queryMyWorkTasks",
        "defPath": "_102045_/l4/buildFlowFsm/operations/queryMyWorkTasks.defs.ts"
      },
      {
        "kind": "operation",
        "id": "viewWorkTask",
        "defPath": "_102045_/l4/buildFlowFsm/operations/viewWorkTask.defs.ts"
      }
    ],
    "microUserFlow": {
      "source": "l4/story.steps",
      "workflowSteps": [],
      "operations": [
        {
          "operationId": "queryMyWorkTasks",
          "commandName": "queryMyWorkTasks",
          "steps": [
            "Open the mobile app to the my-tasks list",
            "System loads only tasks assigned to the signed-in field worker",
            "Tasks are shown sorted by due date with overdue items highlighted",
            "Review each task title, description, due date, status, and project context",
            "Select a task to work on or open its details"
          ]
        },
        {
          "operationId": "viewWorkTask",
          "commandName": "viewWorkTask",
          "steps": [
            "Open a specific work task from the assigned-tasks list on mobile",
            "Load the task details including description, due date, status, and project context",
            "Confirm the task is assigned to the current field worker before showing it"
          ]
        }
      ]
    }
  },
  "contractRef": {
    "tsPath": "_102045_/l2/buildFlowFsm/web/contracts/myTasksWorkspace.ts",
    "contracts": [
      {
        "commandName": "listMyWorkTasks",
        "routeConst": "listMyWorkTasksRoute"
      },
      {
        "commandName": "getWorkTaskDetail",
        "routeConst": "getWorkTaskDetailRoute"
      }
    ]
  },
  "layoutRef": {
    "defPath": "_102045_/l2/buildFlowFsm/web/desktop/page11/myTasksWorkspace.defs.ts",
    "layoutId": "cfe-20260731060448.1000"
  },
  "states": [
    {
      "stateKey": "ui.myTasksWorkspace.status",
      "name": "status",
      "kind": "pageStatus",
      "defaultValue": ""
    },
    {
      "stateKey": "ui.myTasksWorkspace.action.listMyWorkTasks.status",
      "name": "listMyWorkTasksState",
      "kind": "actionStatus",
      "actionRef": "listMyWorkTasks",
      "valueSet": [
        "idle",
        "loading",
        "success",
        "error"
      ],
      "defaultValue": "idle"
    },
    {
      "stateKey": "ui.myTasksWorkspace.input.listMyWorkTasks.assignedWorkerId",
      "name": "listMyWorkTasksAssignedWorkerId",
      "kind": "input",
      "source": "actorSession",
      "presentation": "form",
      "contractRef": {
        "commandName": "listMyWorkTasks",
        "direction": "input",
        "field": "assignedWorkerId"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.myTasksWorkspace.input.listMyWorkTasks.status",
      "name": "listMyWorkTasksStatus",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "listMyWorkTasks",
        "direction": "input",
        "field": "status"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.myTasksWorkspace.input.listMyWorkTasks.page",
      "name": "listMyWorkTasksPage",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "listMyWorkTasks",
        "direction": "input",
        "field": "page"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.myTasksWorkspace.input.listMyWorkTasks.pageSize",
      "name": "listMyWorkTasksPageSize",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "listMyWorkTasks",
        "direction": "input",
        "field": "pageSize"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.myTasksWorkspace.data.listMyWorkTasks",
      "name": "listMyWorkTasksData",
      "kind": "queryResult",
      "contractRef": {
        "commandName": "listMyWorkTasks",
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
      "stateKey": "ui.myTasksWorkspace.action.getWorkTaskDetail.status",
      "name": "getWorkTaskDetailState",
      "kind": "actionStatus",
      "actionRef": "getWorkTaskDetail",
      "valueSet": [
        "idle",
        "loading",
        "success",
        "error"
      ],
      "defaultValue": "idle"
    },
    {
      "stateKey": "ui.myTasksWorkspace.input.getWorkTaskDetail.workTaskId",
      "name": "getWorkTaskDetailWorkTaskId",
      "kind": "input",
      "source": "routeParam",
      "presentation": "route",
      "contractRef": {
        "commandName": "getWorkTaskDetail",
        "direction": "input",
        "field": "workTaskId"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.myTasksWorkspace.input.getWorkTaskDetail.actorId",
      "name": "getWorkTaskDetailActorId",
      "kind": "input",
      "source": "actorSession",
      "presentation": "form",
      "contractRef": {
        "commandName": "getWorkTaskDetail",
        "direction": "input",
        "field": "actorId"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.myTasksWorkspace.data.getWorkTaskDetail",
      "name": "getWorkTaskDetailData",
      "kind": "queryResult",
      "contractRef": {
        "commandName": "getWorkTaskDetail",
        "direction": "output"
      },
      "outputShape": "object",
      "collection": false,
      "defaultValue": null
    }
  ],
  "actions": [
    {
      "actionId": "listMyWorkTasks",
      "kind": "query",
      "commandRef": "listMyWorkTasks",
      "routeKey": "buildFlowFsm.myTasksWorkspace.listMyWorkTasks",
      "purpose": "Browse my assigned tasks",
      "methodName": "loadListMyWorkTasks",
      "handlerName": "handleListMyWorkTasksClick",
      "inputStateKeys": [
        "ui.myTasksWorkspace.input.listMyWorkTasks.assignedWorkerId",
        "ui.myTasksWorkspace.input.listMyWorkTasks.status",
        "ui.myTasksWorkspace.input.listMyWorkTasks.page",
        "ui.myTasksWorkspace.input.listMyWorkTasks.pageSize"
      ],
      "routeParamInputStateKeys": [],
      "selectedEntityInputStateKeys": [],
      "outputStateKeys": [
        "ui.myTasksWorkspace.data.listMyWorkTasks"
      ],
      "statusStateKey": "ui.myTasksWorkspace.action.listMyWorkTasks.status"
    },
    {
      "actionId": "getWorkTaskDetail",
      "kind": "query",
      "commandRef": "getWorkTaskDetail",
      "routeKey": "buildFlowFsm.myTasksWorkspace.getWorkTaskDetail",
      "purpose": "View work task details",
      "methodName": "loadGetWorkTaskDetail",
      "handlerName": "handleGetWorkTaskDetailClick",
      "inputStateKeys": [
        "ui.myTasksWorkspace.input.getWorkTaskDetail.workTaskId",
        "ui.myTasksWorkspace.input.getWorkTaskDetail.actorId"
      ],
      "routeParamInputStateKeys": [
        "ui.myTasksWorkspace.input.getWorkTaskDetail.workTaskId"
      ],
      "selectedEntityInputStateKeys": [],
      "outputStateKeys": [
        "ui.myTasksWorkspace.data.getWorkTaskDetail"
      ],
      "statusStateKey": "ui.myTasksWorkspace.action.getWorkTaskDetail.status"
    },
    {
      "actionId": "set.listMyWorkTasksAssignedWorkerId",
      "kind": "stateSetter",
      "stateKey": "ui.myTasksWorkspace.input.listMyWorkTasks.assignedWorkerId",
      "methodName": "setListMyWorkTasksAssignedWorkerId",
      "handlerName": "handleListMyWorkTasksAssignedWorkerIdChange"
    },
    {
      "actionId": "set.listMyWorkTasksStatus",
      "kind": "stateSetter",
      "stateKey": "ui.myTasksWorkspace.input.listMyWorkTasks.status",
      "methodName": "setListMyWorkTasksStatus",
      "handlerName": "handleListMyWorkTasksStatusChange"
    },
    {
      "actionId": "set.listMyWorkTasksPage",
      "kind": "stateSetter",
      "stateKey": "ui.myTasksWorkspace.input.listMyWorkTasks.page",
      "methodName": "setListMyWorkTasksPage",
      "handlerName": "handleListMyWorkTasksPageChange"
    },
    {
      "actionId": "set.listMyWorkTasksPageSize",
      "kind": "stateSetter",
      "stateKey": "ui.myTasksWorkspace.input.listMyWorkTasks.pageSize",
      "methodName": "setListMyWorkTasksPageSize",
      "handlerName": "handleListMyWorkTasksPageSizeChange"
    },
    {
      "actionId": "set.getWorkTaskDetailWorkTaskId",
      "kind": "stateSetter",
      "stateKey": "ui.myTasksWorkspace.input.getWorkTaskDetail.workTaskId",
      "methodName": "setGetWorkTaskDetailWorkTaskId",
      "handlerName": "handleGetWorkTaskDetailWorkTaskIdChange"
    },
    {
      "actionId": "set.getWorkTaskDetailActorId",
      "kind": "stateSetter",
      "stateKey": "ui.myTasksWorkspace.input.getWorkTaskDetail.actorId",
      "methodName": "setGetWorkTaskDetailActorId",
      "handlerName": "handleGetWorkTaskDetailActorIdChange"
    }
  ],
  "initialLoads": [],
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
    "section.myTasksWorkspace.taskListSection.title": "My Tasks",
    "organism.myTasksWorkspace.summary-first10.title": "Summary first",
    "intent.myTasksWorkspace.summary-first10.content.title": "Summary first",
    "organism.myTasksWorkspace.listMyWorkTasks.title": "Browse my assigned tasks",
    "intent.myTasksWorkspace.listMyWorkTasks.list.title": "Browse my assigned tasks",
    "intent.myTasksWorkspace.listMyWorkTasks.list.empty": "Nenhum registro encontrado",
    "intent.myTasksWorkspace.listMyWorkTasks.list.column.workTasks.label": "Work Tasks",
    "intent.myTasksWorkspace.listMyWorkTasks.list.column.total.label": "Total",
    "intent.myTasksWorkspace.listMyWorkTasks.list.filter.assignedWorkerId.label": "Assigned Worker Id",
    "intent.myTasksWorkspace.listMyWorkTasks.list.filter.status.label": "Status",
    "intent.myTasksWorkspace.listMyWorkTasks.list.filter.page.label": "Page",
    "intent.myTasksWorkspace.listMyWorkTasks.list.filter.pageSize.label": "Page Size",
    "organism.myTasksWorkspace.getWorkTaskDetail.title": "View work task details",
    "intent.myTasksWorkspace.getWorkTaskDetail.list.title": "View work task details",
    "intent.myTasksWorkspace.getWorkTaskDetail.list.empty": "Nenhum registro encontrado",
    "intent.myTasksWorkspace.getWorkTaskDetail.list.column.workTaskId.label": "Work Task Id",
    "intent.myTasksWorkspace.getWorkTaskDetail.list.column.projectId.label": "Project Id",
    "intent.myTasksWorkspace.getWorkTaskDetail.list.column.projectName.label": "Project Name",
    "intent.myTasksWorkspace.getWorkTaskDetail.list.column.title.label": "Title",
    "intent.myTasksWorkspace.getWorkTaskDetail.list.column.description.label": "Description",
    "intent.myTasksWorkspace.getWorkTaskDetail.list.column.assignedWorkerId.label": "Assigned Worker Id",
    "intent.myTasksWorkspace.getWorkTaskDetail.list.column.status.label": "Status",
    "intent.myTasksWorkspace.getWorkTaskDetail.list.column.dueDate.label": "Due Date",
    "intent.myTasksWorkspace.getWorkTaskDetail.list.column.isOverdue.label": "Is Overdue",
    "intent.myTasksWorkspace.getWorkTaskDetail.list.column.completedAt.label": "Completed At",
    "intent.myTasksWorkspace.getWorkTaskDetail.list.column.cancelledAt.label": "Cancelled At",
    "intent.myTasksWorkspace.getWorkTaskDetail.list.column.cancellationReason.label": "Cancellation Reason",
    "intent.myTasksWorkspace.getWorkTaskDetail.list.column.createdAt.label": "Created At",
    "intent.myTasksWorkspace.getWorkTaskDetail.list.column.updatedAt.label": "Updated At",
    "intent.myTasksWorkspace.getWorkTaskDetail.list.filter.actorId.label": "Actor Id",
    "organism.myTasksWorkspace.inline-row-command20.title": "Inline row command",
    "intent.myTasksWorkspace.inline-row-command20.content.title": "Inline row command"
  },
  "automation": {
    "statePrefix": "ui.myTasksWorkspace",
    "stateKeys": [
      "ui.myTasksWorkspace.status",
      "ui.myTasksWorkspace.action.listMyWorkTasks.status",
      "ui.myTasksWorkspace.input.listMyWorkTasks.assignedWorkerId",
      "ui.myTasksWorkspace.input.listMyWorkTasks.status",
      "ui.myTasksWorkspace.input.listMyWorkTasks.page",
      "ui.myTasksWorkspace.input.listMyWorkTasks.pageSize",
      "ui.myTasksWorkspace.data.listMyWorkTasks",
      "ui.myTasksWorkspace.action.getWorkTaskDetail.status",
      "ui.myTasksWorkspace.input.getWorkTaskDetail.workTaskId",
      "ui.myTasksWorkspace.input.getWorkTaskDetail.actorId",
      "ui.myTasksWorkspace.data.getWorkTaskDetail"
    ],
    "actionIds": [
      "listMyWorkTasks",
      "getWorkTaskDetail",
      "set.listMyWorkTasksAssignedWorkerId",
      "set.listMyWorkTasksStatus",
      "set.listMyWorkTasksPage",
      "set.listMyWorkTasksPageSize",
      "set.getWorkTaskDetailWorkTaskId",
      "set.getWorkTaskDetailActorId"
    ]
  }
};

export const pipeline = [
  {
    "id": "myTasksWorkspace__l2_shared",
    "type": "l2_shared",
    "outputPath": "_102045_/l2/buildFlowFsm/web/shared/myTasksWorkspace.ts",
    "defPath": "_102045_/l2/buildFlowFsm/web/shared/myTasksWorkspace.defs.ts",
    "dependsFiles": [
      "_102045_/l2/buildFlowFsm/web/contracts/myTasksWorkspace.ts",
      "_102029_.d.ts"
    ],
    "dependsOn": [],
    "skills": [
      "_102020_/l2/agentChangeFrontend/skills/genCfeSharedTs.ts"
    ],
    "rulesApplied": [
      "fieldWorkerTaskVisibility",
      "taskSortingByDueDate",
      "overdueTaskHighlighting",
      "mobileFieldUsability",
      "singleTaskAssignment"
    ],
    "agent": "agentCfeMaterializeGen"
  }
] as const;
