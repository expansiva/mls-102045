/// <mls fileReference="_102045_/l1/buildFlowFsm/layer_1_external/adapters/http/controllers/taskBoardWorkspace.defs.ts" enhancement="_blank"/>

export const taskBoardWorkspaceController = {
  "schemaVersion": "2026-06-26",
  "artifactType": "httpController",
  "artifactId": "taskBoardWorkspace",
  "moduleName": "buildFlowFsm",
  "status": "draft",
  "source": {
    "agentName": "agentCbHttpController",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "pageId": "taskBoardWorkspace",
    "controllerName": "TaskBoardWorkspaceController",
    "ownerKind": "workspace",
    "workspaceId": "taskBoardWorkspace",
    "actors": [
      "projectManager",
      "fieldWorker"
    ],
    "allowedScopes": [
      "buildFlowFsm:projectManager",
      "buildFlowFsm:fieldWorker"
    ],
    "handlers": [
      {
        "handlerName": "taskBoardWorkspaceCmdCreateWorkTaskHandler",
        "command": "cmdCreateWorkTask",
        "bffId": "cmdCreateWorkTask",
        "route": "buildFlowFsm.taskBoardWorkspace.cmdCreateWorkTask",
        "kind": "command",
        "usecaseRef": "createWorkTask",
        "usecaseRefs": [
          "createWorkTask"
        ],
        "inputTypeName": "CreateWorkTaskInput",
        "inputContract": [
          {
            "inputId": "projectId",
            "fieldRef": "WorkTask.projectId",
            "required": true,
            "source": "selectedEntity",
            "description": "Project the new work task belongs to"
          },
          {
            "inputId": "title",
            "fieldRef": "WorkTask.title",
            "required": true,
            "source": "userInput",
            "description": "Short name describing the work task"
          },
          {
            "inputId": "description",
            "fieldRef": "WorkTask.description",
            "required": false,
            "source": "userInput",
            "description": "Detailed scope or instructions for completing the task"
          },
          {
            "inputId": "assignedWorkerId",
            "fieldRef": "WorkTask.assignedWorkerId",
            "required": true,
            "source": "userInput",
            "description": "Identifier of the single field worker assigned to this task"
          },
          {
            "inputId": "dueDate",
            "fieldRef": "WorkTask.dueDate",
            "required": true,
            "source": "userInput",
            "description": "Date by which the task should be completed, within the project schedule"
          },
          {
            "inputId": "workTaskId",
            "fieldRef": "WorkTask.workTaskId",
            "required": true,
            "source": "systemDefault",
            "description": "System-generated primary identifier for the new work task"
          },
          {
            "inputId": "status",
            "fieldRef": "WorkTask.status",
            "required": true,
            "source": "systemDefault",
            "description": "Initial lifecycle status set to assigned on creation"
          },
          {
            "inputId": "createdAt",
            "fieldRef": "WorkTask.createdAt",
            "required": true,
            "source": "systemDefault",
            "description": "Timestamp when the work task is created"
          },
          {
            "inputId": "updatedAt",
            "fieldRef": "WorkTask.updatedAt",
            "required": true,
            "source": "systemDefault",
            "description": "Timestamp of the initial create update"
          }
        ],
        "projection": {
          "kind": "object",
          "arrayFieldName": null,
          "itemFields": [],
          "topFields": [
            {
              "name": "workTaskId",
              "operationId": "createWorkTask",
              "path": [
                "workTaskId"
              ],
              "fromItems": false
            },
            {
              "name": "projectId",
              "operationId": "createWorkTask",
              "path": [
                "projectId"
              ],
              "fromItems": false
            },
            {
              "name": "title",
              "operationId": "createWorkTask",
              "path": [
                "title"
              ],
              "fromItems": false
            },
            {
              "name": "description",
              "operationId": "createWorkTask",
              "path": [
                "description"
              ],
              "fromItems": false
            },
            {
              "name": "assignedWorkerId",
              "operationId": "createWorkTask",
              "path": [
                "assignedWorkerId"
              ],
              "fromItems": false
            },
            {
              "name": "status",
              "operationId": "createWorkTask",
              "path": [
                "status"
              ],
              "fromItems": false
            },
            {
              "name": "dueDate",
              "operationId": "createWorkTask",
              "path": [
                "dueDate"
              ],
              "fromItems": false
            },
            {
              "name": "createdAt",
              "operationId": "createWorkTask",
              "path": [
                "createdAt"
              ],
              "fromItems": false
            },
            {
              "name": "updatedAt",
              "operationId": "createWorkTask",
              "path": [
                "updatedAt"
              ],
              "fromItems": false
            }
          ]
        },
        "optionalUses": []
      },
      {
        "handlerName": "taskBoardWorkspaceCmdUpdateWorkTaskHandler",
        "command": "cmdUpdateWorkTask",
        "bffId": "cmdUpdateWorkTask",
        "route": "buildFlowFsm.taskBoardWorkspace.cmdUpdateWorkTask",
        "kind": "command",
        "usecaseRef": "updateWorkTask",
        "usecaseRefs": [
          "updateWorkTask"
        ],
        "inputTypeName": "UpdateWorkTaskInput",
        "inputContract": [
          {
            "inputId": "workTaskId",
            "fieldRef": "WorkTask.workTaskId",
            "required": true,
            "source": "routeParam",
            "description": "Identifier of the work task being updated"
          },
          {
            "inputId": "title",
            "fieldRef": "WorkTask.title",
            "required": false,
            "source": "userInput",
            "description": "Updated short name for the work task"
          },
          {
            "inputId": "description",
            "fieldRef": "WorkTask.description",
            "required": false,
            "source": "userInput",
            "description": "Updated detailed scope or instructions for the task"
          },
          {
            "inputId": "assignedWorkerId",
            "fieldRef": "WorkTask.assignedWorkerId",
            "required": false,
            "source": "userInput",
            "description": "Updated field worker assigned to this task (single worker only)"
          },
          {
            "inputId": "dueDate",
            "fieldRef": "WorkTask.dueDate",
            "required": false,
            "source": "userInput",
            "description": "Updated due date for completing the task"
          },
          {
            "inputId": "status",
            "fieldRef": "WorkTask.status",
            "required": false,
            "source": "userInput",
            "description": "Updated lifecycle status of the task"
          },
          {
            "inputId": "cancellationReason",
            "fieldRef": "WorkTask.cancellationReason",
            "required": false,
            "source": "userInput",
            "description": "Reason when cancelling the task"
          },
          {
            "inputId": "updatedAt",
            "fieldRef": "WorkTask.updatedAt",
            "required": true,
            "source": "systemDefault",
            "description": "Timestamp of this update, set by the system"
          }
        ],
        "projection": {
          "kind": "object",
          "arrayFieldName": null,
          "itemFields": [],
          "topFields": [
            {
              "name": "workTaskId",
              "operationId": "updateWorkTask",
              "path": [
                "workTaskId"
              ],
              "fromItems": false
            },
            {
              "name": "projectId",
              "operationId": "updateWorkTask",
              "path": [
                "projectId"
              ],
              "fromItems": false
            },
            {
              "name": "title",
              "operationId": "updateWorkTask",
              "path": [
                "title"
              ],
              "fromItems": false
            },
            {
              "name": "description",
              "operationId": "updateWorkTask",
              "path": [
                "description"
              ],
              "fromItems": false
            },
            {
              "name": "assignedWorkerId",
              "operationId": "updateWorkTask",
              "path": [
                "assignedWorkerId"
              ],
              "fromItems": false
            },
            {
              "name": "status",
              "operationId": "updateWorkTask",
              "path": [
                "status"
              ],
              "fromItems": false
            },
            {
              "name": "dueDate",
              "operationId": "updateWorkTask",
              "path": [
                "dueDate"
              ],
              "fromItems": false
            },
            {
              "name": "completedAt",
              "operationId": "updateWorkTask",
              "path": [
                "completedAt"
              ],
              "fromItems": false
            },
            {
              "name": "cancelledAt",
              "operationId": "updateWorkTask",
              "path": [
                "cancelledAt"
              ],
              "fromItems": false
            },
            {
              "name": "cancellationReason",
              "operationId": "updateWorkTask",
              "path": [
                "cancellationReason"
              ],
              "fromItems": false
            },
            {
              "name": "updatedAt",
              "operationId": "updateWorkTask",
              "path": [
                "updatedAt"
              ],
              "fromItems": false
            }
          ]
        },
        "optionalUses": []
      },
      {
        "handlerName": "taskBoardWorkspaceCmdUpdateWorkTaskStatusHandler",
        "command": "cmdUpdateWorkTaskStatus",
        "bffId": "cmdUpdateWorkTaskStatus",
        "route": "buildFlowFsm.taskBoardWorkspace.cmdUpdateWorkTaskStatus",
        "kind": "command",
        "usecaseRef": "updateWorkTaskStatus",
        "usecaseRefs": [
          "updateWorkTaskStatus"
        ],
        "inputTypeName": "UpdateWorkTaskStatusInput",
        "inputContract": [
          {
            "inputId": "workTaskId",
            "fieldRef": "WorkTask.workTaskId",
            "required": true,
            "source": "selectedEntity",
            "description": "Identifier of the work task whose status is being updated."
          },
          {
            "inputId": "status",
            "fieldRef": "WorkTask.status",
            "required": true,
            "source": "userInput",
            "description": "New lifecycle status for the work task (assigned, inProgress, completed, or cancelled)."
          },
          {
            "inputId": "cancellationReason",
            "fieldRef": "WorkTask.cancellationReason",
            "required": false,
            "source": "userInput",
            "description": "Optional reason recorded when the task is cancelled."
          },
          {
            "inputId": "updatedAt",
            "fieldRef": "WorkTask.updatedAt",
            "required": true,
            "source": "systemDefault",
            "description": "Timestamp of this status update, set automatically by the system."
          },
          {
            "inputId": "completedAt",
            "fieldRef": "WorkTask.completedAt",
            "required": false,
            "source": "systemDefault",
            "description": "Timestamp set automatically when status is changed to completed."
          },
          {
            "inputId": "cancelledAt",
            "fieldRef": "WorkTask.cancelledAt",
            "required": false,
            "source": "systemDefault",
            "description": "Timestamp set automatically when status is changed to cancelled."
          },
          {
            "inputId": "actorId",
            "fieldRef": "",
            "type": "string",
            "required": true,
            "source": "actorSession",
            "description": "Authenticated actor performing the status update; must be the assigned worker or a project manager."
          }
        ],
        "projection": {
          "kind": "object",
          "arrayFieldName": null,
          "itemFields": [],
          "topFields": [
            {
              "name": "workTaskId",
              "operationId": "updateWorkTaskStatus",
              "path": [
                "workTaskId"
              ],
              "fromItems": false
            },
            {
              "name": "projectId",
              "operationId": "updateWorkTaskStatus",
              "path": [
                "projectId"
              ],
              "fromItems": false
            },
            {
              "name": "title",
              "operationId": "updateWorkTaskStatus",
              "path": [
                "title"
              ],
              "fromItems": false
            },
            {
              "name": "status",
              "operationId": "updateWorkTaskStatus",
              "path": [
                "status"
              ],
              "fromItems": false
            },
            {
              "name": "dueDate",
              "operationId": "updateWorkTaskStatus",
              "path": [
                "dueDate"
              ],
              "fromItems": false
            },
            {
              "name": "assignedWorkerId",
              "operationId": "updateWorkTaskStatus",
              "path": [
                "assignedWorkerId"
              ],
              "fromItems": false
            },
            {
              "name": "completedAt",
              "operationId": "updateWorkTaskStatus",
              "path": [
                "completedAt"
              ],
              "fromItems": false
            },
            {
              "name": "cancelledAt",
              "operationId": "updateWorkTaskStatus",
              "path": [
                "cancelledAt"
              ],
              "fromItems": false
            },
            {
              "name": "cancellationReason",
              "operationId": "updateWorkTaskStatus",
              "path": [
                "cancellationReason"
              ],
              "fromItems": false
            },
            {
              "name": "updatedAt",
              "operationId": "updateWorkTaskStatus",
              "path": [
                "updatedAt"
              ],
              "fromItems": false
            }
          ]
        },
        "optionalUses": []
      }
    ],
    "routes": [
      {
        "key": "buildFlowFsm.taskBoardWorkspace.cmdCreateWorkTask",
        "handlerName": "taskBoardWorkspaceCmdCreateWorkTaskHandler"
      },
      {
        "key": "buildFlowFsm.taskBoardWorkspace.cmdUpdateWorkTask",
        "handlerName": "taskBoardWorkspaceCmdUpdateWorkTaskHandler"
      },
      {
        "key": "buildFlowFsm.taskBoardWorkspace.cmdUpdateWorkTaskStatus",
        "handlerName": "taskBoardWorkspaceCmdUpdateWorkTaskStatusHandler"
      }
    ]
  }
} as const;

export default taskBoardWorkspaceController;

export const pipeline = [
  {
    "id": "taskBoardWorkspace__httpController",
    "type": "httpController",
    "outputPath": "_102045_/l1/buildFlowFsm/layer_1_external/adapters/http/controllers/taskBoardWorkspace.ts",
    "defPath": "_102045_/l1/buildFlowFsm/layer_1_external/adapters/http/controllers/taskBoardWorkspace.defs.ts",
    "dependsFiles": [
      "_102045_/l1/buildFlowFsm/layer_2_application/usecases/createWorkTask.d.ts",
      "_102045_/l4/buildFlowFsm/contracts/taskBoardWorkspace.cmdCreateWorkTask.defs.ts",
      "_102045_/l1/buildFlowFsm/layer_2_application/usecases/updateWorkTask.d.ts",
      "_102045_/l4/buildFlowFsm/contracts/taskBoardWorkspace.cmdUpdateWorkTask.defs.ts",
      "_102045_/l1/buildFlowFsm/layer_2_application/usecases/updateWorkTaskStatus.d.ts",
      "_102045_/l4/buildFlowFsm/contracts/taskBoardWorkspace.cmdUpdateWorkTaskStatus.defs.ts"
    ],
    "dependsOn": [],
    "skills": [
      "_102021_/l2/agentChangeBackend/skills/architecture.md",
      "_102021_/l2/agentChangeBackend/skills/httpController.md",
      "_102034_.d.ts"
    ],
    "agent": "agentCbMaterialize"
  }
] as const;
