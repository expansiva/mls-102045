/// <mls fileReference="_102045_/l2/buildFlowFsm/web/shared/taskBoardWorkspace.defs.ts" enhancement="_blank"/>

export const definition = {
  "pageId": "taskBoardWorkspace",
  "pageName": "Task Board",
  "moduleName": "buildFlowFsm",
  "baseClassName": "BuildFlowFsmTaskBoardWorkspaceBase",
  "routePattern": "/buildFlowFsm/taskBoardWorkspace/:workTaskId?",
  "sourceKind": "workflow",
  "ownerIds": [
    "workflow:workTaskLifecycle",
    "operation:createWorkTask",
    "operation:updateWorkTask",
    "operation:updateWorkTaskStatus"
  ],
  "operationIds": [
    "createWorkTask",
    "updateWorkTask",
    "updateWorkTaskStatus"
  ],
  "origin": {
    "source": "l4-journey",
    "workspaceId": "taskBoardWorkspace",
    "workspaceKind": "workflow",
    "workflowId": "workTaskLifecycle",
    "actor": "projectManager",
    "entity": "WorkTask",
    "owners": [
      {
        "kind": "workflow",
        "id": "workTaskLifecycle",
        "defPath": "_102045_/l4/buildFlowFsm/workflows/workTaskLifecycle.defs.ts"
      },
      {
        "kind": "operation",
        "id": "createWorkTask",
        "defPath": "_102045_/l4/buildFlowFsm/operations/createWorkTask.defs.ts"
      },
      {
        "kind": "operation",
        "id": "updateWorkTask",
        "defPath": "_102045_/l4/buildFlowFsm/operations/updateWorkTask.defs.ts"
      },
      {
        "kind": "operation",
        "id": "updateWorkTaskStatus",
        "defPath": "_102045_/l4/buildFlowFsm/operations/updateWorkTaskStatus.defs.ts"
      }
    ],
    "microUserFlow": {
      "source": "l4/story.steps",
      "workflowSteps": [
        "The project manager creates a work task tied to an active project with a clear description.",
        "The project manager assigns the task to one field worker and sets a due date within the project schedule.",
        "The field worker starts the task and updates its status from assigned to in progress.",
        "The field worker finishes the work and marks the task completed so project tracking stays current."
      ],
      "operations": [
        {
          "operationId": "createWorkTask",
          "commandName": "createWorkTask",
          "steps": [
            "Select or confirm the active project the task belongs to",
            "Enter the task title and optional description",
            "Assign exactly one field worker",
            "Set a due date within the project start and end dates",
            "Confirm creation so the task is stored with status assigned"
          ]
        },
        {
          "operationId": "updateWorkTask",
          "commandName": "updateWorkTask",
          "steps": [
            "Open the work task to edit",
            "Change title, description, assigned field worker, due date, and/or status as needed",
            "Confirm the update"
          ]
        },
        {
          "operationId": "updateWorkTaskStatus",
          "commandName": "updateWorkTaskStatus",
          "steps": [
            "Open the assigned work task being worked on",
            "Select the new lifecycle status (in progress or completed)",
            "Confirm the status change",
            "System records timestamps and persists the updated task"
          ]
        }
      ]
    }
  },
  "contractRef": {
    "tsPath": "_102045_/l2/buildFlowFsm/web/contracts/taskBoardWorkspace.ts",
    "contracts": [
      {
        "commandName": "cmdCreateWorkTask",
        "routeConst": "cmdCreateWorkTaskRoute"
      },
      {
        "commandName": "cmdUpdateWorkTask",
        "routeConst": "cmdUpdateWorkTaskRoute"
      },
      {
        "commandName": "cmdUpdateWorkTaskStatus",
        "routeConst": "cmdUpdateWorkTaskStatusRoute"
      }
    ]
  },
  "layoutRef": {
    "defPath": "_102045_/l2/buildFlowFsm/web/desktop/page11/taskBoardWorkspace.defs.ts",
    "layoutId": "cfe-20260731060448.1000"
  },
  "states": [
    {
      "stateKey": "ui.taskBoardWorkspace.status",
      "name": "status",
      "kind": "pageStatus",
      "defaultValue": ""
    },
    {
      "stateKey": "ui.taskBoardWorkspace.action.cmdCreateWorkTask.status",
      "name": "cmdCreateWorkTaskState",
      "kind": "actionStatus",
      "actionRef": "cmdCreateWorkTask",
      "valueSet": [
        "idle",
        "loading",
        "success",
        "error"
      ],
      "defaultValue": "idle"
    },
    {
      "stateKey": "ui.taskBoardWorkspace.input.cmdCreateWorkTask.projectId",
      "name": "cmdCreateWorkTaskProjectId",
      "kind": "input",
      "source": "selectedEntity",
      "presentation": "selection",
      "contractRef": {
        "commandName": "cmdCreateWorkTask",
        "direction": "input",
        "field": "projectId"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.taskBoardWorkspace.input.cmdCreateWorkTask.title",
      "name": "cmdCreateWorkTaskTitle",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "cmdCreateWorkTask",
        "direction": "input",
        "field": "title"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.taskBoardWorkspace.input.cmdCreateWorkTask.description",
      "name": "cmdCreateWorkTaskDescription",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "cmdCreateWorkTask",
        "direction": "input",
        "field": "description"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.taskBoardWorkspace.input.cmdCreateWorkTask.assignedWorkerId",
      "name": "cmdCreateWorkTaskAssignedWorkerId",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "cmdCreateWorkTask",
        "direction": "input",
        "field": "assignedWorkerId"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.taskBoardWorkspace.input.cmdCreateWorkTask.dueDate",
      "name": "cmdCreateWorkTaskDueDate",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "cmdCreateWorkTask",
        "direction": "input",
        "field": "dueDate"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.taskBoardWorkspace.output.cmdCreateWorkTask",
      "name": "cmdCreateWorkTaskOutput",
      "kind": "commandOutput",
      "contractRef": {
        "commandName": "cmdCreateWorkTask",
        "direction": "output"
      },
      "defaultValue": null
    },
    {
      "stateKey": "ui.taskBoardWorkspace.action.cmdCreateWorkTask.error",
      "name": "cmdCreateWorkTaskError",
      "kind": "actionError",
      "actionRef": "cmdCreateWorkTask",
      "defaultValue": ""
    },
    {
      "stateKey": "ui.taskBoardWorkspace.action.cmdUpdateWorkTask.status",
      "name": "cmdUpdateWorkTaskState",
      "kind": "actionStatus",
      "actionRef": "cmdUpdateWorkTask",
      "valueSet": [
        "idle",
        "loading",
        "success",
        "error"
      ],
      "defaultValue": "idle"
    },
    {
      "stateKey": "ui.taskBoardWorkspace.input.cmdUpdateWorkTask.workTaskId",
      "name": "cmdUpdateWorkTaskWorkTaskId",
      "kind": "input",
      "source": "routeParam",
      "presentation": "route",
      "contractRef": {
        "commandName": "cmdUpdateWorkTask",
        "direction": "input",
        "field": "workTaskId"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.taskBoardWorkspace.input.cmdUpdateWorkTask.title",
      "name": "cmdUpdateWorkTaskTitle",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "cmdUpdateWorkTask",
        "direction": "input",
        "field": "title"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.taskBoardWorkspace.input.cmdUpdateWorkTask.description",
      "name": "cmdUpdateWorkTaskDescription",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "cmdUpdateWorkTask",
        "direction": "input",
        "field": "description"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.taskBoardWorkspace.input.cmdUpdateWorkTask.assignedWorkerId",
      "name": "cmdUpdateWorkTaskAssignedWorkerId",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "cmdUpdateWorkTask",
        "direction": "input",
        "field": "assignedWorkerId"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.taskBoardWorkspace.input.cmdUpdateWorkTask.dueDate",
      "name": "cmdUpdateWorkTaskDueDate",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "cmdUpdateWorkTask",
        "direction": "input",
        "field": "dueDate"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.taskBoardWorkspace.input.cmdUpdateWorkTask.status",
      "name": "cmdUpdateWorkTaskStatusValue",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "cmdUpdateWorkTask",
        "direction": "input",
        "field": "status"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.taskBoardWorkspace.input.cmdUpdateWorkTask.cancellationReason",
      "name": "cmdUpdateWorkTaskCancellationReason",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "cmdUpdateWorkTask",
        "direction": "input",
        "field": "cancellationReason"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.taskBoardWorkspace.output.cmdUpdateWorkTask",
      "name": "cmdUpdateWorkTaskOutput",
      "kind": "commandOutput",
      "contractRef": {
        "commandName": "cmdUpdateWorkTask",
        "direction": "output"
      },
      "defaultValue": null
    },
    {
      "stateKey": "ui.taskBoardWorkspace.action.cmdUpdateWorkTask.error",
      "name": "cmdUpdateWorkTaskError",
      "kind": "actionError",
      "actionRef": "cmdUpdateWorkTask",
      "defaultValue": ""
    },
    {
      "stateKey": "ui.taskBoardWorkspace.action.cmdUpdateWorkTaskStatus.status",
      "name": "cmdUpdateWorkTaskStatusState",
      "kind": "actionStatus",
      "actionRef": "cmdUpdateWorkTaskStatus",
      "valueSet": [
        "idle",
        "loading",
        "success",
        "error"
      ],
      "defaultValue": "idle"
    },
    {
      "stateKey": "ui.taskBoardWorkspace.input.cmdUpdateWorkTaskStatus.workTaskId",
      "name": "cmdUpdateWorkTaskStatusWorkTaskId",
      "kind": "input",
      "source": "selectedEntity",
      "presentation": "selection",
      "contractRef": {
        "commandName": "cmdUpdateWorkTaskStatus",
        "direction": "input",
        "field": "workTaskId"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.taskBoardWorkspace.input.cmdUpdateWorkTaskStatus.status",
      "name": "cmdUpdateWorkTaskStatusStatus",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "cmdUpdateWorkTaskStatus",
        "direction": "input",
        "field": "status"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.taskBoardWorkspace.input.cmdUpdateWorkTaskStatus.cancellationReason",
      "name": "cmdUpdateWorkTaskStatusCancellationReason",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "cmdUpdateWorkTaskStatus",
        "direction": "input",
        "field": "cancellationReason"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.taskBoardWorkspace.input.cmdUpdateWorkTaskStatus.completedAt",
      "name": "cmdUpdateWorkTaskStatusCompletedAt",
      "kind": "input",
      "source": "systemDefault",
      "presentation": "form",
      "contractRef": {
        "commandName": "cmdUpdateWorkTaskStatus",
        "direction": "input",
        "field": "completedAt"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.taskBoardWorkspace.input.cmdUpdateWorkTaskStatus.actorId",
      "name": "cmdUpdateWorkTaskStatusActorId",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "cmdUpdateWorkTaskStatus",
        "direction": "input",
        "field": "actorId"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.taskBoardWorkspace.output.cmdUpdateWorkTaskStatus",
      "name": "cmdUpdateWorkTaskStatusOutput",
      "kind": "commandOutput",
      "contractRef": {
        "commandName": "cmdUpdateWorkTaskStatus",
        "direction": "output"
      },
      "defaultValue": null
    },
    {
      "stateKey": "ui.taskBoardWorkspace.action.cmdUpdateWorkTaskStatus.error",
      "name": "cmdUpdateWorkTaskStatusError",
      "kind": "actionError",
      "actionRef": "cmdUpdateWorkTaskStatus",
      "defaultValue": ""
    }
  ],
  "actions": [
    {
      "actionId": "cmdCreateWorkTask",
      "kind": "command",
      "commandRef": "cmdCreateWorkTask",
      "routeKey": "buildFlowFsm.taskBoardWorkspace.cmdCreateWorkTask",
      "purpose": "Create work task",
      "methodName": "cmdCreateWorkTask",
      "handlerName": "handleCmdCreateWorkTaskClick",
      "inputStateKeys": [
        "ui.taskBoardWorkspace.input.cmdCreateWorkTask.projectId",
        "ui.taskBoardWorkspace.input.cmdCreateWorkTask.title",
        "ui.taskBoardWorkspace.input.cmdCreateWorkTask.description",
        "ui.taskBoardWorkspace.input.cmdCreateWorkTask.assignedWorkerId",
        "ui.taskBoardWorkspace.input.cmdCreateWorkTask.dueDate"
      ],
      "routeParamInputStateKeys": [],
      "selectedEntityInputStateKeys": [
        "ui.taskBoardWorkspace.input.cmdCreateWorkTask.projectId"
      ],
      "outputStateKeys": [
        "ui.taskBoardWorkspace.output.cmdCreateWorkTask"
      ],
      "statusStateKey": "ui.taskBoardWorkspace.action.cmdCreateWorkTask.status",
      "errorStateKey": "ui.taskBoardWorkspace.action.cmdCreateWorkTask.error",
      "feedback": {
        "successMessageKey": "action.cmdCreateWorkTask.success",
        "errorMessageKey": "action.cmdCreateWorkTask.error",
        "dismissible": true
      },
      "clearInputStateKeys": [
        "ui.taskBoardWorkspace.input.cmdCreateWorkTask.projectId",
        "ui.taskBoardWorkspace.input.cmdCreateWorkTask.title",
        "ui.taskBoardWorkspace.input.cmdCreateWorkTask.description",
        "ui.taskBoardWorkspace.input.cmdCreateWorkTask.assignedWorkerId",
        "ui.taskBoardWorkspace.input.cmdCreateWorkTask.dueDate"
      ]
    },
    {
      "actionId": "cmdUpdateWorkTask",
      "kind": "command",
      "commandRef": "cmdUpdateWorkTask",
      "routeKey": "buildFlowFsm.taskBoardWorkspace.cmdUpdateWorkTask",
      "purpose": "Update work task assignment and details",
      "methodName": "cmdUpdateWorkTask",
      "handlerName": "handleCmdUpdateWorkTaskClick",
      "inputStateKeys": [
        "ui.taskBoardWorkspace.input.cmdUpdateWorkTask.workTaskId",
        "ui.taskBoardWorkspace.input.cmdUpdateWorkTask.title",
        "ui.taskBoardWorkspace.input.cmdUpdateWorkTask.description",
        "ui.taskBoardWorkspace.input.cmdUpdateWorkTask.assignedWorkerId",
        "ui.taskBoardWorkspace.input.cmdUpdateWorkTask.dueDate",
        "ui.taskBoardWorkspace.input.cmdUpdateWorkTask.status",
        "ui.taskBoardWorkspace.input.cmdUpdateWorkTask.cancellationReason"
      ],
      "routeParamInputStateKeys": [
        "ui.taskBoardWorkspace.input.cmdUpdateWorkTask.workTaskId"
      ],
      "selectedEntityInputStateKeys": [],
      "outputStateKeys": [
        "ui.taskBoardWorkspace.output.cmdUpdateWorkTask"
      ],
      "statusStateKey": "ui.taskBoardWorkspace.action.cmdUpdateWorkTask.status",
      "errorStateKey": "ui.taskBoardWorkspace.action.cmdUpdateWorkTask.error",
      "feedback": {
        "successMessageKey": "action.cmdUpdateWorkTask.success",
        "errorMessageKey": "action.cmdUpdateWorkTask.error",
        "dismissible": true
      },
      "clearInputStateKeys": [
        "ui.taskBoardWorkspace.input.cmdUpdateWorkTask.title",
        "ui.taskBoardWorkspace.input.cmdUpdateWorkTask.description",
        "ui.taskBoardWorkspace.input.cmdUpdateWorkTask.assignedWorkerId",
        "ui.taskBoardWorkspace.input.cmdUpdateWorkTask.dueDate",
        "ui.taskBoardWorkspace.input.cmdUpdateWorkTask.status",
        "ui.taskBoardWorkspace.input.cmdUpdateWorkTask.cancellationReason"
      ]
    },
    {
      "actionId": "cmdUpdateWorkTaskStatus",
      "kind": "command",
      "commandRef": "cmdUpdateWorkTaskStatus",
      "routeKey": "buildFlowFsm.taskBoardWorkspace.cmdUpdateWorkTaskStatus",
      "purpose": "Update work task status",
      "methodName": "cmdUpdateWorkTaskStatus",
      "handlerName": "handleCmdUpdateWorkTaskStatusClick",
      "inputStateKeys": [
        "ui.taskBoardWorkspace.input.cmdUpdateWorkTaskStatus.workTaskId",
        "ui.taskBoardWorkspace.input.cmdUpdateWorkTaskStatus.status",
        "ui.taskBoardWorkspace.input.cmdUpdateWorkTaskStatus.cancellationReason",
        "ui.taskBoardWorkspace.input.cmdUpdateWorkTaskStatus.completedAt",
        "ui.taskBoardWorkspace.input.cmdUpdateWorkTaskStatus.actorId"
      ],
      "routeParamInputStateKeys": [],
      "selectedEntityInputStateKeys": [
        "ui.taskBoardWorkspace.input.cmdUpdateWorkTaskStatus.workTaskId"
      ],
      "outputStateKeys": [
        "ui.taskBoardWorkspace.output.cmdUpdateWorkTaskStatus"
      ],
      "statusStateKey": "ui.taskBoardWorkspace.action.cmdUpdateWorkTaskStatus.status",
      "errorStateKey": "ui.taskBoardWorkspace.action.cmdUpdateWorkTaskStatus.error",
      "feedback": {
        "successMessageKey": "action.cmdUpdateWorkTaskStatus.success",
        "errorMessageKey": "action.cmdUpdateWorkTaskStatus.error",
        "dismissible": true
      },
      "clearInputStateKeys": [
        "ui.taskBoardWorkspace.input.cmdUpdateWorkTaskStatus.workTaskId",
        "ui.taskBoardWorkspace.input.cmdUpdateWorkTaskStatus.status",
        "ui.taskBoardWorkspace.input.cmdUpdateWorkTaskStatus.cancellationReason",
        "ui.taskBoardWorkspace.input.cmdUpdateWorkTaskStatus.completedAt",
        "ui.taskBoardWorkspace.input.cmdUpdateWorkTaskStatus.actorId"
      ]
    },
    {
      "actionId": "set.cmdCreateWorkTaskProjectId",
      "kind": "stateSetter",
      "stateKey": "ui.taskBoardWorkspace.input.cmdCreateWorkTask.projectId",
      "methodName": "setCmdCreateWorkTaskProjectId",
      "handlerName": "handleCmdCreateWorkTaskProjectIdChange"
    },
    {
      "actionId": "set.cmdCreateWorkTaskTitle",
      "kind": "stateSetter",
      "stateKey": "ui.taskBoardWorkspace.input.cmdCreateWorkTask.title",
      "methodName": "setCmdCreateWorkTaskTitle",
      "handlerName": "handleCmdCreateWorkTaskTitleChange"
    },
    {
      "actionId": "set.cmdCreateWorkTaskDescription",
      "kind": "stateSetter",
      "stateKey": "ui.taskBoardWorkspace.input.cmdCreateWorkTask.description",
      "methodName": "setCmdCreateWorkTaskDescription",
      "handlerName": "handleCmdCreateWorkTaskDescriptionChange"
    },
    {
      "actionId": "set.cmdCreateWorkTaskAssignedWorkerId",
      "kind": "stateSetter",
      "stateKey": "ui.taskBoardWorkspace.input.cmdCreateWorkTask.assignedWorkerId",
      "methodName": "setCmdCreateWorkTaskAssignedWorkerId",
      "handlerName": "handleCmdCreateWorkTaskAssignedWorkerIdChange"
    },
    {
      "actionId": "set.cmdCreateWorkTaskDueDate",
      "kind": "stateSetter",
      "stateKey": "ui.taskBoardWorkspace.input.cmdCreateWorkTask.dueDate",
      "methodName": "setCmdCreateWorkTaskDueDate",
      "handlerName": "handleCmdCreateWorkTaskDueDateChange"
    },
    {
      "actionId": "set.cmdUpdateWorkTaskWorkTaskId",
      "kind": "stateSetter",
      "stateKey": "ui.taskBoardWorkspace.input.cmdUpdateWorkTask.workTaskId",
      "methodName": "setCmdUpdateWorkTaskWorkTaskId",
      "handlerName": "handleCmdUpdateWorkTaskWorkTaskIdChange"
    },
    {
      "actionId": "set.cmdUpdateWorkTaskTitle",
      "kind": "stateSetter",
      "stateKey": "ui.taskBoardWorkspace.input.cmdUpdateWorkTask.title",
      "methodName": "setCmdUpdateWorkTaskTitle",
      "handlerName": "handleCmdUpdateWorkTaskTitleChange"
    },
    {
      "actionId": "set.cmdUpdateWorkTaskDescription",
      "kind": "stateSetter",
      "stateKey": "ui.taskBoardWorkspace.input.cmdUpdateWorkTask.description",
      "methodName": "setCmdUpdateWorkTaskDescription",
      "handlerName": "handleCmdUpdateWorkTaskDescriptionChange"
    },
    {
      "actionId": "set.cmdUpdateWorkTaskAssignedWorkerId",
      "kind": "stateSetter",
      "stateKey": "ui.taskBoardWorkspace.input.cmdUpdateWorkTask.assignedWorkerId",
      "methodName": "setCmdUpdateWorkTaskAssignedWorkerId",
      "handlerName": "handleCmdUpdateWorkTaskAssignedWorkerIdChange"
    },
    {
      "actionId": "set.cmdUpdateWorkTaskDueDate",
      "kind": "stateSetter",
      "stateKey": "ui.taskBoardWorkspace.input.cmdUpdateWorkTask.dueDate",
      "methodName": "setCmdUpdateWorkTaskDueDate",
      "handlerName": "handleCmdUpdateWorkTaskDueDateChange"
    },
    {
      "actionId": "set.cmdUpdateWorkTaskStatusValue",
      "kind": "stateSetter",
      "stateKey": "ui.taskBoardWorkspace.input.cmdUpdateWorkTask.status",
      "methodName": "setCmdUpdateWorkTaskStatusValue",
      "handlerName": "handleCmdUpdateWorkTaskStatusValueChange"
    },
    {
      "actionId": "set.cmdUpdateWorkTaskCancellationReason",
      "kind": "stateSetter",
      "stateKey": "ui.taskBoardWorkspace.input.cmdUpdateWorkTask.cancellationReason",
      "methodName": "setCmdUpdateWorkTaskCancellationReason",
      "handlerName": "handleCmdUpdateWorkTaskCancellationReasonChange"
    },
    {
      "actionId": "set.cmdUpdateWorkTaskStatusWorkTaskId",
      "kind": "stateSetter",
      "stateKey": "ui.taskBoardWorkspace.input.cmdUpdateWorkTaskStatus.workTaskId",
      "methodName": "setCmdUpdateWorkTaskStatusWorkTaskId",
      "handlerName": "handleCmdUpdateWorkTaskStatusWorkTaskIdChange"
    },
    {
      "actionId": "set.cmdUpdateWorkTaskStatusStatus",
      "kind": "stateSetter",
      "stateKey": "ui.taskBoardWorkspace.input.cmdUpdateWorkTaskStatus.status",
      "methodName": "setCmdUpdateWorkTaskStatusStatus",
      "handlerName": "handleCmdUpdateWorkTaskStatusStatusChange"
    },
    {
      "actionId": "set.cmdUpdateWorkTaskStatusCancellationReason",
      "kind": "stateSetter",
      "stateKey": "ui.taskBoardWorkspace.input.cmdUpdateWorkTaskStatus.cancellationReason",
      "methodName": "setCmdUpdateWorkTaskStatusCancellationReason",
      "handlerName": "handleCmdUpdateWorkTaskStatusCancellationReasonChange"
    },
    {
      "actionId": "set.cmdUpdateWorkTaskStatusCompletedAt",
      "kind": "stateSetter",
      "stateKey": "ui.taskBoardWorkspace.input.cmdUpdateWorkTaskStatus.completedAt",
      "methodName": "setCmdUpdateWorkTaskStatusCompletedAt",
      "handlerName": "handleCmdUpdateWorkTaskStatusCompletedAtChange"
    },
    {
      "actionId": "set.cmdUpdateWorkTaskStatusActorId",
      "kind": "stateSetter",
      "stateKey": "ui.taskBoardWorkspace.input.cmdUpdateWorkTaskStatus.actorId",
      "methodName": "setCmdUpdateWorkTaskStatusActorId",
      "handlerName": "handleCmdUpdateWorkTaskStatusActorIdChange"
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
    "section.taskBoardWorkspace.createTaskSection.title": "Create Work Task",
    "organism.taskBoardWorkspace.cmdCreateWorkTask.title": "Create work task",
    "intent.taskBoardWorkspace.cmdCreateWorkTask.form.title": "Create work task",
    "intent.taskBoardWorkspace.cmdCreateWorkTask.form.action.cmdCreateWorkTask": "Create work task",
    "intent.taskBoardWorkspace.cmdCreateWorkTask.form.field.title.label": "Title",
    "intent.taskBoardWorkspace.cmdCreateWorkTask.form.field.description.label": "Description",
    "intent.taskBoardWorkspace.cmdCreateWorkTask.form.field.assignedWorkerId.label": "Assigned Worker Id",
    "intent.taskBoardWorkspace.cmdCreateWorkTask.form.field.dueDate.label": "Due Date",
    "section.taskBoardWorkspace.editTaskSection.title": "Edit Work Task",
    "organism.taskBoardWorkspace.cmdUpdateWorkTask.title": "Update work task assignment and details",
    "intent.taskBoardWorkspace.cmdUpdateWorkTask.form.title": "Update work task assignment and details",
    "intent.taskBoardWorkspace.cmdUpdateWorkTask.form.action.cmdUpdateWorkTask": "Update work task assignment and details",
    "intent.taskBoardWorkspace.cmdUpdateWorkTask.form.field.title.label": "Title",
    "intent.taskBoardWorkspace.cmdUpdateWorkTask.form.field.description.label": "Description",
    "intent.taskBoardWorkspace.cmdUpdateWorkTask.form.field.assignedWorkerId.label": "Assigned Worker Id",
    "intent.taskBoardWorkspace.cmdUpdateWorkTask.form.field.dueDate.label": "Due Date",
    "intent.taskBoardWorkspace.cmdUpdateWorkTask.form.field.status.label": "Status",
    "intent.taskBoardWorkspace.cmdUpdateWorkTask.form.field.cancellationReason.label": "Cancellation Reason",
    "section.taskBoardWorkspace.fieldStatusSection.title": "Update Task Status",
    "organism.taskBoardWorkspace.cmdUpdateWorkTaskStatus.title": "Update work task status",
    "intent.taskBoardWorkspace.cmdUpdateWorkTaskStatus.form.title": "Update work task status",
    "intent.taskBoardWorkspace.cmdUpdateWorkTaskStatus.form.action.cmdUpdateWorkTaskStatus": "Update work task status",
    "intent.taskBoardWorkspace.cmdUpdateWorkTaskStatus.form.field.status.label": "Status",
    "intent.taskBoardWorkspace.cmdUpdateWorkTaskStatus.form.field.cancellationReason.label": "Cancellation Reason",
    "intent.taskBoardWorkspace.cmdUpdateWorkTaskStatus.form.field.completedAt.label": "Completed At",
    "intent.taskBoardWorkspace.cmdUpdateWorkTaskStatus.form.field.actorId.label": "Actor Id",
    "section.taskBoardWorkspace.sec-task-board.title": "Task Board",
    "organism.taskBoardWorkspace.card-board10.title": "Card board",
    "intent.taskBoardWorkspace.card-board10.content.title": "Card board",
    "section.taskBoardWorkspace.sec-task-detail.title": "Task Detail & Edit",
    "organism.taskBoardWorkspace.summary-first10.title": "Summary first",
    "intent.taskBoardWorkspace.summary-first10.content.title": "Summary first",
    "section.taskBoardWorkspace.sec-create-task.title": "Create New Task"
  },
  "automation": {
    "statePrefix": "ui.taskBoardWorkspace",
    "stateKeys": [
      "ui.taskBoardWorkspace.status",
      "ui.taskBoardWorkspace.action.cmdCreateWorkTask.status",
      "ui.taskBoardWorkspace.input.cmdCreateWorkTask.projectId",
      "ui.taskBoardWorkspace.input.cmdCreateWorkTask.title",
      "ui.taskBoardWorkspace.input.cmdCreateWorkTask.description",
      "ui.taskBoardWorkspace.input.cmdCreateWorkTask.assignedWorkerId",
      "ui.taskBoardWorkspace.input.cmdCreateWorkTask.dueDate",
      "ui.taskBoardWorkspace.output.cmdCreateWorkTask",
      "ui.taskBoardWorkspace.action.cmdCreateWorkTask.error",
      "ui.taskBoardWorkspace.action.cmdUpdateWorkTask.status",
      "ui.taskBoardWorkspace.input.cmdUpdateWorkTask.workTaskId",
      "ui.taskBoardWorkspace.input.cmdUpdateWorkTask.title",
      "ui.taskBoardWorkspace.input.cmdUpdateWorkTask.description",
      "ui.taskBoardWorkspace.input.cmdUpdateWorkTask.assignedWorkerId",
      "ui.taskBoardWorkspace.input.cmdUpdateWorkTask.dueDate",
      "ui.taskBoardWorkspace.input.cmdUpdateWorkTask.status",
      "ui.taskBoardWorkspace.input.cmdUpdateWorkTask.cancellationReason",
      "ui.taskBoardWorkspace.output.cmdUpdateWorkTask",
      "ui.taskBoardWorkspace.action.cmdUpdateWorkTask.error",
      "ui.taskBoardWorkspace.action.cmdUpdateWorkTaskStatus.status",
      "ui.taskBoardWorkspace.input.cmdUpdateWorkTaskStatus.workTaskId",
      "ui.taskBoardWorkspace.input.cmdUpdateWorkTaskStatus.status",
      "ui.taskBoardWorkspace.input.cmdUpdateWorkTaskStatus.cancellationReason",
      "ui.taskBoardWorkspace.input.cmdUpdateWorkTaskStatus.completedAt",
      "ui.taskBoardWorkspace.input.cmdUpdateWorkTaskStatus.actorId",
      "ui.taskBoardWorkspace.output.cmdUpdateWorkTaskStatus",
      "ui.taskBoardWorkspace.action.cmdUpdateWorkTaskStatus.error"
    ],
    "actionIds": [
      "cmdCreateWorkTask",
      "cmdUpdateWorkTask",
      "cmdUpdateWorkTaskStatus",
      "set.cmdCreateWorkTaskProjectId",
      "set.cmdCreateWorkTaskTitle",
      "set.cmdCreateWorkTaskDescription",
      "set.cmdCreateWorkTaskAssignedWorkerId",
      "set.cmdCreateWorkTaskDueDate",
      "set.cmdUpdateWorkTaskWorkTaskId",
      "set.cmdUpdateWorkTaskTitle",
      "set.cmdUpdateWorkTaskDescription",
      "set.cmdUpdateWorkTaskAssignedWorkerId",
      "set.cmdUpdateWorkTaskDueDate",
      "set.cmdUpdateWorkTaskStatusValue",
      "set.cmdUpdateWorkTaskCancellationReason",
      "set.cmdUpdateWorkTaskStatusWorkTaskId",
      "set.cmdUpdateWorkTaskStatusStatus",
      "set.cmdUpdateWorkTaskStatusCancellationReason",
      "set.cmdUpdateWorkTaskStatusCompletedAt",
      "set.cmdUpdateWorkTaskStatusActorId"
    ]
  }
};

export const pipeline = [
  {
    "id": "taskBoardWorkspace__l2_shared",
    "type": "l2_shared",
    "outputPath": "_102045_/l2/buildFlowFsm/web/shared/taskBoardWorkspace.ts",
    "defPath": "_102045_/l2/buildFlowFsm/web/shared/taskBoardWorkspace.defs.ts",
    "dependsFiles": [
      "_102045_/l2/buildFlowFsm/web/contracts/taskBoardWorkspace.ts",
      "_102029_.d.ts"
    ],
    "dependsOn": [],
    "skills": [
      "_102020_/l2/agentChangeFrontend/skills/genCfeSharedTs.ts"
    ],
    "rulesApplied": [
      "operationsRequireActiveProject",
      "singleTaskAssignment",
      "taskDueDateWithinSchedule",
      "taskStatusUpdateAuthorization",
      "fieldWorkerTaskVisibility"
    ],
    "agent": "agentCfeMaterializeGen"
  }
] as const;
