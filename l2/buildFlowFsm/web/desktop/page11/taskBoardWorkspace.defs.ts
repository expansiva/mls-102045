/// <mls fileReference="_102045_/l2/buildFlowFsm/web/desktop/page11/taskBoardWorkspace.defs.ts" enhancement="_blank"/>

export const definition = {
  "pageId": "taskBoardWorkspace",
  "pageName": "Task Board",
  "baseClassName": "BuildFlowFsmTaskBoardWorkspaceBase",
  "actor": "projectManager",
  "purpose": "Project manager creates and assigns work tasks; field workers update task status from the field.",
  "presentation": {
    "categoryRef": "workPlanningBoard"
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
    "id": "taskBoardWorkspace__l2_page",
    "type": "l2_page",
    "outputPath": "_102045_/l2/buildFlowFsm/web/desktop/page11/taskBoardWorkspace.ts",
    "defPath": "_102045_/l2/buildFlowFsm/web/desktop/page11/taskBoardWorkspace.defs.ts",
    "dependsFiles": [
      "_102045_/l2/buildFlowFsm/web/shared/taskBoardWorkspace.ts",
      "_102045_/l2/designSystem.ts"
    ],
    "dependsOn": [
      "taskBoardWorkspace__l2_shared"
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
