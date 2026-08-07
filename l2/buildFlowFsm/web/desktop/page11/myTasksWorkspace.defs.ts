/// <mls fileReference="_102045_/l2/buildFlowFsm/web/desktop/page11/myTasksWorkspace.defs.ts" enhancement="_blank"/>

export const definition = {
  "pageId": "myTasksWorkspace",
  "pageName": "My Tasks",
  "baseClassName": "BuildFlowFsmMyTasksWorkspaceBase",
  "actor": "fieldWorker",
  "purpose": "Field worker browses and reviews their assigned tasks for the day.",
  "presentation": {
    "categoryRef": "operationsQueue"
  },
  "dataBindings": [
    {
      "id": "binding.myTasksWorkspace.listMyWorkTasks",
      "source": "bff.listMyWorkTasks",
      "command": "listMyWorkTasks",
      "description": "Browse my assigned tasks",
      "kind": "query",
      "stateKey": "ui.myTasksWorkspace.data.listMyWorkTasks",
      "inputStateKeys": [
        "ui.myTasksWorkspace.input.listMyWorkTasks.assignedWorkerId",
        "ui.myTasksWorkspace.input.listMyWorkTasks.status",
        "ui.myTasksWorkspace.input.listMyWorkTasks.page",
        "ui.myTasksWorkspace.input.listMyWorkTasks.pageSize"
      ],
      "inputs": [
        {
          "name": "assignedWorkerId",
          "stateKey": "ui.myTasksWorkspace.input.listMyWorkTasks.assignedWorkerId",
          "source": "actorSession",
          "required": true,
          "presentation": "form"
        },
        {
          "name": "status",
          "stateKey": "ui.myTasksWorkspace.input.listMyWorkTasks.status",
          "source": "userInput",
          "required": false,
          "presentation": "form"
        },
        {
          "name": "page",
          "stateKey": "ui.myTasksWorkspace.input.listMyWorkTasks.page",
          "source": "userInput",
          "required": false,
          "presentation": "form"
        },
        {
          "name": "pageSize",
          "stateKey": "ui.myTasksWorkspace.input.listMyWorkTasks.pageSize",
          "source": "userInput",
          "required": false,
          "presentation": "form"
        }
      ]
    },
    {
      "id": "binding.myTasksWorkspace.getWorkTaskDetail",
      "source": "bff.getWorkTaskDetail",
      "command": "getWorkTaskDetail",
      "description": "View work task details",
      "kind": "query",
      "stateKey": "ui.myTasksWorkspace.data.getWorkTaskDetail",
      "inputStateKeys": [
        "ui.myTasksWorkspace.input.getWorkTaskDetail.workTaskId",
        "ui.myTasksWorkspace.input.getWorkTaskDetail.actorId"
      ],
      "inputs": [
        {
          "name": "workTaskId",
          "stateKey": "ui.myTasksWorkspace.input.getWorkTaskDetail.workTaskId",
          "source": "routeParam",
          "required": true,
          "presentation": "route"
        },
        {
          "name": "actorId",
          "stateKey": "ui.myTasksWorkspace.input.getWorkTaskDetail.actorId",
          "source": "actorSession",
          "required": true,
          "presentation": "form"
        }
      ]
    }
  ]
};

export const pipeline = [
  {
    "id": "myTasksWorkspace__l2_page",
    "type": "l2_page",
    "outputPath": "_102045_/l2/buildFlowFsm/web/desktop/page11/myTasksWorkspace.ts",
    "defPath": "_102045_/l2/buildFlowFsm/web/desktop/page11/myTasksWorkspace.defs.ts",
    "dependsFiles": [
      "_102045_/l2/buildFlowFsm/web/shared/myTasksWorkspace.ts",
      "_102045_/l2/designSystem.ts"
    ],
    "dependsOn": [
      "myTasksWorkspace__l2_shared"
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
