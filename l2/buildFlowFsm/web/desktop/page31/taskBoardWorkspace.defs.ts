/// <mls fileReference="_102045_/l2/buildFlowFsm/web/desktop/page31/taskBoardWorkspace.defs.ts" enhancement="_blank"/>

export const definition = {
  "pageId": "taskBoardWorkspace",
  "pageName": "Task Board",
  "baseClassName": "BuildFlowFsmTaskBoardWorkspaceBase",
  "actor": "projectManager",
  "purpose": "Project manager creates and assigns work tasks; field workers update task status from the field.",
  "presentation": {
    "categoryRef": "workPlanningBoard"
  },
  "pageObjective": {
    "actor": "Project manager (creates/assigns tasks) and field worker (updates task status from the field)",
    "jobToBeDone": "Create work tasks tied to active projects, assign them to field workers with due dates, and allow field workers to advance task lifecycle status from assigned → in progress → completed.",
    "primaryDecision": "Which task to act on and what action to take — create a new task or advance the status of an existing one.",
    "decisiveInfo": [
      "title",
      "assignedWorkerId",
      "dueDate",
      "status (current lifecycle state)",
      "projectId (context-derived, read-only)"
    ],
    "usageFrequency": "Frequent operational use — project managers create/assign tasks daily; field workers update status throughout the workday from mobile or desktop.",
    "criticalActions": [
      {
        "action": "cmdCreateWorkTask",
        "presentation": "primary-button on an inline creation form within the task board header/toolbar area"
      },
      {
        "action": "cmdUpdateWorkTaskStatus",
        "presentation": "contextual-transition-actions — one button per valid next state rendered on each task card, never a free select"
      },
      {
        "action": "cmdUpdateWorkTask",
        "presentation": "inline-row-command or detail panel opened from a selected card for editing title, description, assignee, due date"
      }
    ],
    "informationHierarchy": [
      "1. Task board lanes grouped by status (assigned / inProgress / completed / cancelled) — the primary at-a-glance view",
      "2. Per-card: title, assignedWorkerId, dueDate, current status, and contextual transition action buttons",
      "3. Create task form — accessible from a persistent toolbar action, pre-filled with active projectId",
      "4. Edit task detail panel — opens on card selection, surfaces full editable fields and status update"
    ],
    "successCriteria": "A project manager can create and assign a task in under 30 seconds; a field worker can advance a task status in two taps without navigating away from the board; no manual id entry anywhere on the page.",
    "antiPatterns": [
      "Free <select> over all status enum values for transitions",
      "Manually typed workTaskId or projectId inputs",
      "Separate full-page form for status update",
      "One section per operation stacked vertically as independent forms",
      "Showing system-owned fields (createdAt, updatedAt, cancelledAt) as editable inputs"
    ]
  },
  "dataBindings": [
    {
      "id": "binding.taskBoardWorkspace.cmdCreateWorkTask",
      "source": "bff.cmdCreateWorkTask",
      "command": "cmdCreateWorkTask",
      "description": "Create work task",
      "kind": "command",
      "stateKey": "ui.taskBoardWorkspace.output.cmdCreateWorkTask",
      "inputStateKeys": [
        "ui.taskBoardWorkspace.input.cmdCreateWorkTask.projectId",
        "ui.taskBoardWorkspace.input.cmdCreateWorkTask.title",
        "ui.taskBoardWorkspace.input.cmdCreateWorkTask.description",
        "ui.taskBoardWorkspace.input.cmdCreateWorkTask.assignedWorkerId",
        "ui.taskBoardWorkspace.input.cmdCreateWorkTask.dueDate"
      ],
      "inputs": [
        {
          "name": "projectId",
          "stateKey": "ui.taskBoardWorkspace.input.cmdCreateWorkTask.projectId",
          "source": "selectedEntity",
          "required": true,
          "presentation": "selection"
        },
        {
          "name": "title",
          "stateKey": "ui.taskBoardWorkspace.input.cmdCreateWorkTask.title",
          "source": "userInput",
          "required": true,
          "presentation": "form"
        },
        {
          "name": "description",
          "stateKey": "ui.taskBoardWorkspace.input.cmdCreateWorkTask.description",
          "source": "userInput",
          "required": false,
          "presentation": "form"
        },
        {
          "name": "assignedWorkerId",
          "stateKey": "ui.taskBoardWorkspace.input.cmdCreateWorkTask.assignedWorkerId",
          "source": "userInput",
          "required": true,
          "presentation": "form"
        },
        {
          "name": "dueDate",
          "stateKey": "ui.taskBoardWorkspace.input.cmdCreateWorkTask.dueDate",
          "source": "userInput",
          "required": true,
          "presentation": "form"
        }
      ]
    },
    {
      "id": "binding.taskBoardWorkspace.cmdUpdateWorkTask",
      "source": "bff.cmdUpdateWorkTask",
      "command": "cmdUpdateWorkTask",
      "description": "Update work task assignment and details",
      "kind": "command",
      "stateKey": "ui.taskBoardWorkspace.output.cmdUpdateWorkTask",
      "inputStateKeys": [
        "ui.taskBoardWorkspace.input.cmdUpdateWorkTask.workTaskId",
        "ui.taskBoardWorkspace.input.cmdUpdateWorkTask.title",
        "ui.taskBoardWorkspace.input.cmdUpdateWorkTask.description",
        "ui.taskBoardWorkspace.input.cmdUpdateWorkTask.assignedWorkerId",
        "ui.taskBoardWorkspace.input.cmdUpdateWorkTask.dueDate",
        "ui.taskBoardWorkspace.input.cmdUpdateWorkTask.status",
        "ui.taskBoardWorkspace.input.cmdUpdateWorkTask.cancellationReason"
      ],
      "inputs": [
        {
          "name": "workTaskId",
          "stateKey": "ui.taskBoardWorkspace.input.cmdUpdateWorkTask.workTaskId",
          "source": "routeParam",
          "required": true,
          "presentation": "route"
        },
        {
          "name": "title",
          "stateKey": "ui.taskBoardWorkspace.input.cmdUpdateWorkTask.title",
          "source": "userInput",
          "required": false,
          "presentation": "form"
        },
        {
          "name": "description",
          "stateKey": "ui.taskBoardWorkspace.input.cmdUpdateWorkTask.description",
          "source": "userInput",
          "required": false,
          "presentation": "form"
        },
        {
          "name": "assignedWorkerId",
          "stateKey": "ui.taskBoardWorkspace.input.cmdUpdateWorkTask.assignedWorkerId",
          "source": "userInput",
          "required": false,
          "presentation": "form"
        },
        {
          "name": "dueDate",
          "stateKey": "ui.taskBoardWorkspace.input.cmdUpdateWorkTask.dueDate",
          "source": "userInput",
          "required": false,
          "presentation": "form"
        },
        {
          "name": "status",
          "stateKey": "ui.taskBoardWorkspace.input.cmdUpdateWorkTask.status",
          "source": "userInput",
          "required": false,
          "presentation": "form"
        },
        {
          "name": "cancellationReason",
          "stateKey": "ui.taskBoardWorkspace.input.cmdUpdateWorkTask.cancellationReason",
          "source": "userInput",
          "required": false,
          "presentation": "form"
        }
      ]
    },
    {
      "id": "binding.taskBoardWorkspace.cmdUpdateWorkTaskStatus",
      "source": "bff.cmdUpdateWorkTaskStatus",
      "command": "cmdUpdateWorkTaskStatus",
      "description": "Update work task status",
      "kind": "command",
      "stateKey": "ui.taskBoardWorkspace.output.cmdUpdateWorkTaskStatus",
      "inputStateKeys": [
        "ui.taskBoardWorkspace.input.cmdUpdateWorkTaskStatus.workTaskId",
        "ui.taskBoardWorkspace.input.cmdUpdateWorkTaskStatus.status",
        "ui.taskBoardWorkspace.input.cmdUpdateWorkTaskStatus.cancellationReason",
        "ui.taskBoardWorkspace.input.cmdUpdateWorkTaskStatus.completedAt",
        "ui.taskBoardWorkspace.input.cmdUpdateWorkTaskStatus.actorId"
      ],
      "inputs": [
        {
          "name": "workTaskId",
          "stateKey": "ui.taskBoardWorkspace.input.cmdUpdateWorkTaskStatus.workTaskId",
          "source": "selectedEntity",
          "required": true,
          "presentation": "selection"
        },
        {
          "name": "status",
          "stateKey": "ui.taskBoardWorkspace.input.cmdUpdateWorkTaskStatus.status",
          "source": "userInput",
          "required": true,
          "presentation": "form"
        },
        {
          "name": "cancellationReason",
          "stateKey": "ui.taskBoardWorkspace.input.cmdUpdateWorkTaskStatus.cancellationReason",
          "source": "userInput",
          "required": false,
          "presentation": "form"
        },
        {
          "name": "completedAt",
          "stateKey": "ui.taskBoardWorkspace.input.cmdUpdateWorkTaskStatus.completedAt",
          "source": "systemDefault",
          "required": false,
          "presentation": "form"
        },
        {
          "name": "actorId",
          "stateKey": "ui.taskBoardWorkspace.input.cmdUpdateWorkTaskStatus.actorId",
          "source": "userInput",
          "required": true,
          "presentation": "form"
        }
      ]
    }
  ]
};

export const pipeline = [
  {
    "id": "taskBoardWorkspace__page31__l2_page",
    "type": "l2_page",
    "outputPath": "_102045_/l2/buildFlowFsm/web/desktop/page31/taskBoardWorkspace.ts",
    "defPath": "_102045_/l2/buildFlowFsm/web/desktop/page31/taskBoardWorkspace.defs.ts",
    "dependsFiles": [
      "_102045_/l2/buildFlowFsm/web/shared/taskBoardWorkspace.ts",
      "_102045_/l2/designSystem.ts"
    ],
    "dependsOn": [
      "taskBoardWorkspace__l2_shared"
    ],
    "skills": [
      "_102020_/l2/agentChangeFrontend/skills/genCfePage21RenderTs.ts",
      "_102020_/l4/collabux/templates/workPlanningBoard/page31.md"
    ],
    "visualStyle": {
      "description": "Desktop-first for PM and billing staff with mobile-optimized field entry; dashboard-driven, status-aware, touch-friendly UI with Gantt-ish timeline views."
    },
    "agent": "agentCfeMaterializeGen"
  }
] as const;
