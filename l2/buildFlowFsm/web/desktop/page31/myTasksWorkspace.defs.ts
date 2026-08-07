/// <mls fileReference="_102045_/l2/buildFlowFsm/web/desktop/page31/myTasksWorkspace.defs.ts" enhancement="_blank"/>

export const definition = {
  "pageId": "myTasksWorkspace",
  "pageName": "My Tasks",
  "baseClassName": "BuildFlowFsmMyTasksWorkspaceBase",
  "actor": "fieldWorker",
  "purpose": "Field worker browses and reviews their assigned tasks for the day.",
  "presentation": {
    "categoryRef": "operationsQueue"
  },
  "pageObjective": {
    "actor": "Field worker (signed-in mobile user)",
    "jobToBeDone": "Quickly scan all tasks assigned to me today, spot overdue items at a glance, and drill into any task to review its full details before starting work.",
    "primaryDecision": "Which task should I work on next — select a task from the list to view its details.",
    "decisiveInfo": [
      "title",
      "status",
      "dueDate",
      "isOverdue",
      "projectName",
      "description"
    ],
    "usageFrequency": "High-frequency / daily — field worker opens this screen at the start of each shift and returns throughout the day; must be fast and mobile-first.",
    "criticalActions": [
      {
        "action": "Browse assigned tasks filtered by status",
        "presentation": "card-board or compact list with inline status badge and overdue highlight; status filter folded into the surface header"
      },
      {
        "action": "Select a task to view full details",
        "presentation": "master-detail — tapping a card loads the detail panel without leaving the list"
      }
    ],
    "informationHierarchy": [
      "1. Task list filtered to the signed-in worker, sorted by due date, overdue items highlighted",
      "2. Status filter control folded into the list surface header",
      "3. Task detail panel — title, description, status, dueDate, projectName, completedAt / cancelledAt / cancellationReason as applicable",
      "4. Pagination controls at the bottom of the list"
    ],
    "successCriteria": "A field worker can open the app, immediately see their prioritised task list (overdue first), tap any task and read its full context — all without typing any identifier or navigating away from the screen.",
    "antiPatterns": [
      "Separate full-page form for task detail",
      "Manual input of assignedWorkerId or workTaskId",
      "Free <select> over all status enum values for filtering",
      "Stacking detail as a separate section below the list instead of a side/bottom panel",
      "Showing system-owned fields (createdAt, updatedAt, actorId) as editable inputs"
    ]
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
    "id": "myTasksWorkspace__page31__l2_page",
    "type": "l2_page",
    "outputPath": "_102045_/l2/buildFlowFsm/web/desktop/page31/myTasksWorkspace.ts",
    "defPath": "_102045_/l2/buildFlowFsm/web/desktop/page31/myTasksWorkspace.defs.ts",
    "dependsFiles": [
      "_102045_/l2/buildFlowFsm/web/shared/myTasksWorkspace.ts",
      "_102045_/l2/designSystem.ts"
    ],
    "dependsOn": [
      "myTasksWorkspace__l2_shared"
    ],
    "skills": [
      "_102020_/l2/agentChangeFrontend/skills/genCfePage21RenderTs.ts",
      "_102020_/l4/collabux/templates/operationsQueue/page31.md"
    ],
    "visualStyle": {
      "description": "Desktop-first for PM and billing staff with mobile-optimized field entry; dashboard-driven, status-aware, touch-friendly UI with Gantt-ish timeline views."
    },
    "agent": "agentCfeMaterializeGen"
  }
] as const;
