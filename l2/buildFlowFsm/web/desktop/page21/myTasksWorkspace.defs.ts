/// <mls fileReference="_102045_/l2/buildFlowFsm/web/desktop/page21/myTasksWorkspace.defs.ts" enhancement="_blank"/>

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
    "actor": "Field worker (signed-in, mobile)",
    "jobToBeDone": "Quickly scan all tasks assigned to me today, spot overdue items at a glance, and open any task to review its full details before starting work.",
    "primaryDecision": "Which task to open and act on next — driven by due date urgency and status.",
    "decisiveInfo": [
      "title",
      "status",
      "dueDate",
      "isOverdue",
      "projectName",
      "description"
    ],
    "usageFrequency": "Daily / continuous — field worker opens this at the start of each shift and returns throughout the day to check task status.",
    "criticalActions": [
      {
        "action": "Browse assigned tasks filtered by status",
        "presentation": "master-detail — scrollable card list on primary surface, status filter chip bar folded into the surface header"
      },
      {
        "action": "Select a task to view full details",
        "presentation": "master-detail — tapping a card loads the detail panel inline (mobile: full-screen slide-over; tablet: side panel)"
      }
    ],
    "informationHierarchy": [
      "1. Task list sorted by due date, overdue items highlighted — immediate situational awareness",
      "2. Status filter control — narrow to what matters right now",
      "3. Task detail panel — full context (description, project, dates, status) for the selected task"
    ],
    "successCriteria": "A field worker can open the app, immediately see their overdue and upcoming tasks, filter by status in one tap, and read full task details without navigating away — all within 5 seconds.",
    "antiPatterns": [
      "Separate full-page form for task detail",
      "Manual input of assignedWorkerId (must come from session)",
      "Free status <select> for filtering (use chip/tab filter)",
      "Showing workTaskId or actorId as visible typed inputs",
      "Stacking detail as a separate section below the list instead of a panel"
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
    "id": "myTasksWorkspace__page21__l2_page",
    "type": "l2_page",
    "outputPath": "_102045_/l2/buildFlowFsm/web/desktop/page21/myTasksWorkspace.ts",
    "defPath": "_102045_/l2/buildFlowFsm/web/desktop/page21/myTasksWorkspace.defs.ts",
    "dependsFiles": [
      "_102045_/l2/buildFlowFsm/web/shared/myTasksWorkspace.ts",
      "_102045_/l2/designSystem.ts"
    ],
    "dependsOn": [
      "myTasksWorkspace__l2_shared"
    ],
    "skills": [
      "_102020_/l2/agentChangeFrontend/skills/genCfePage21RenderTs.ts",
      "_102020_/l4/collabux/templates/operationsQueue/page21.md"
    ],
    "visualStyle": {
      "description": "Desktop-first for PM and billing staff with mobile-optimized field entry; dashboard-driven, status-aware, touch-friendly UI with Gantt-ish timeline views."
    },
    "agent": "agentCfeMaterializeGen"
  }
] as const;
