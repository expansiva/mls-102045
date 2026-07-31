/// <mls fileReference="_102045_/l1/buildFlowFsm/layer_1_external/adapters/http/controllers/myTasksWorkspace.defs.ts" enhancement="_blank"/>

export const myTasksWorkspaceController = {
  "schemaVersion": "2026-06-26",
  "artifactType": "httpController",
  "artifactId": "myTasksWorkspace",
  "moduleName": "buildFlowFsm",
  "status": "draft",
  "source": {
    "agentName": "agentCbHttpController",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "pageId": "myTasksWorkspace",
    "controllerName": "MyTasksWorkspaceController",
    "ownerKind": "workspace",
    "workspaceId": "myTasksWorkspace",
    "actors": [
      "fieldWorker",
      "projectManager"
    ],
    "allowedScopes": [
      "buildFlowFsm:fieldWorker",
      "buildFlowFsm:projectManager"
    ],
    "handlers": [
      {
        "handlerName": "myTasksWorkspaceListMyWorkTasksHandler",
        "command": "listMyWorkTasks",
        "bffId": "listMyWorkTasks",
        "route": "buildFlowFsm.myTasksWorkspace.listMyWorkTasks",
        "kind": "query",
        "usecaseRef": "queryMyWorkTasks",
        "usecaseRefs": [
          "queryMyWorkTasks"
        ],
        "inputTypeName": "QueryMyWorkTasksInput",
        "inputContract": [
          {
            "inputId": "assignedWorkerId",
            "fieldRef": "WorkTask.assignedWorkerId",
            "required": true,
            "source": "actorSession",
            "description": "Identifier of the signed-in field worker; used to restrict the list to their assignments only"
          },
          {
            "inputId": "status",
            "fieldRef": "WorkTask.status",
            "required": false,
            "source": "userInput",
            "description": "Optional filter to show tasks in a specific lifecycle status (assigned, inProgress, completed, cancelled)"
          },
          {
            "inputId": "page",
            "fieldRef": "",
            "type": "number",
            "required": false,
            "source": "userInput",
            "description": "Optional page number for paginated results"
          },
          {
            "inputId": "pageSize",
            "fieldRef": "",
            "type": "number",
            "required": false,
            "source": "userInput",
            "description": "Optional page size for paginated results"
          }
        ],
        "projection": {
          "kind": "paginated",
          "arrayFieldName": "workTasks",
          "itemFields": [
            {
              "name": "workTaskId",
              "operationId": "queryMyWorkTasks",
              "path": [
                "workTasks",
                "$items",
                "workTaskId"
              ],
              "fromItems": false
            },
            {
              "name": "projectId",
              "operationId": "queryMyWorkTasks",
              "path": [
                "workTasks",
                "$items",
                "projectId"
              ],
              "fromItems": false
            },
            {
              "name": "projectName",
              "operationId": "queryMyWorkTasks",
              "path": [
                "workTasks",
                "$items",
                "projectName"
              ],
              "fromItems": false
            },
            {
              "name": "title",
              "operationId": "queryMyWorkTasks",
              "path": [
                "workTasks",
                "$items",
                "title"
              ],
              "fromItems": false
            },
            {
              "name": "description",
              "operationId": "queryMyWorkTasks",
              "path": [
                "workTasks",
                "$items",
                "description"
              ],
              "fromItems": false
            },
            {
              "name": "status",
              "operationId": "queryMyWorkTasks",
              "path": [
                "workTasks",
                "$items",
                "status"
              ],
              "fromItems": false
            },
            {
              "name": "dueDate",
              "operationId": "queryMyWorkTasks",
              "path": [
                "workTasks",
                "$items",
                "dueDate"
              ],
              "fromItems": false
            },
            {
              "name": "isOverdue",
              "operationId": "queryMyWorkTasks",
              "path": [
                "workTasks",
                "$items",
                "isOverdue"
              ],
              "fromItems": false
            },
            {
              "name": "completedAt",
              "operationId": "queryMyWorkTasks",
              "path": [
                "workTasks",
                "$items",
                "completedAt"
              ],
              "fromItems": false
            }
          ],
          "topFields": [
            {
              "name": "total",
              "operationId": "queryMyWorkTasks",
              "path": [
                "total"
              ],
              "fromItems": false
            }
          ]
        },
        "optionalUses": []
      },
      {
        "handlerName": "myTasksWorkspaceGetWorkTaskDetailHandler",
        "command": "getWorkTaskDetail",
        "bffId": "getWorkTaskDetail",
        "route": "buildFlowFsm.myTasksWorkspace.getWorkTaskDetail",
        "kind": "query",
        "usecaseRef": "viewWorkTask",
        "usecaseRefs": [
          "viewWorkTask"
        ],
        "inputTypeName": "ViewWorkTaskInput",
        "inputContract": [
          {
            "inputId": "workTaskId",
            "fieldRef": "WorkTask.workTaskId",
            "required": true,
            "source": "routeParam",
            "description": "Identifier of the work task to open on the detail screen."
          },
          {
            "inputId": "actorId",
            "fieldRef": "WorkTask.assignedWorkerId",
            "required": true,
            "source": "actorSession",
            "description": "Authenticated field worker id used to enforce assigned-only visibility."
          }
        ],
        "projection": {
          "kind": "object",
          "arrayFieldName": null,
          "itemFields": [],
          "topFields": [
            {
              "name": "workTaskId",
              "operationId": "viewWorkTask",
              "path": [
                "workTaskId"
              ],
              "fromItems": false
            },
            {
              "name": "projectId",
              "operationId": "viewWorkTask",
              "path": [
                "projectId"
              ],
              "fromItems": false
            },
            {
              "name": "projectName",
              "operationId": "viewWorkTask",
              "path": [
                "projectName"
              ],
              "fromItems": false
            },
            {
              "name": "title",
              "operationId": "viewWorkTask",
              "path": [
                "title"
              ],
              "fromItems": false
            },
            {
              "name": "description",
              "operationId": "viewWorkTask",
              "path": [
                "description"
              ],
              "fromItems": false
            },
            {
              "name": "assignedWorkerId",
              "operationId": "viewWorkTask",
              "path": [
                "assignedWorkerId"
              ],
              "fromItems": false
            },
            {
              "name": "status",
              "operationId": "viewWorkTask",
              "path": [
                "status"
              ],
              "fromItems": false
            },
            {
              "name": "dueDate",
              "operationId": "viewWorkTask",
              "path": [
                "dueDate"
              ],
              "fromItems": false
            },
            {
              "name": "isOverdue",
              "operationId": "viewWorkTask",
              "path": [
                "isOverdue"
              ],
              "fromItems": false
            },
            {
              "name": "completedAt",
              "operationId": "viewWorkTask",
              "path": [
                "completedAt"
              ],
              "fromItems": false
            },
            {
              "name": "cancelledAt",
              "operationId": "viewWorkTask",
              "path": [
                "cancelledAt"
              ],
              "fromItems": false
            },
            {
              "name": "cancellationReason",
              "operationId": "viewWorkTask",
              "path": [
                "cancellationReason"
              ],
              "fromItems": false
            },
            {
              "name": "createdAt",
              "operationId": "viewWorkTask",
              "path": [
                "createdAt"
              ],
              "fromItems": false
            },
            {
              "name": "updatedAt",
              "operationId": "viewWorkTask",
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
        "key": "buildFlowFsm.myTasksWorkspace.listMyWorkTasks",
        "handlerName": "myTasksWorkspaceListMyWorkTasksHandler"
      },
      {
        "key": "buildFlowFsm.myTasksWorkspace.getWorkTaskDetail",
        "handlerName": "myTasksWorkspaceGetWorkTaskDetailHandler"
      }
    ]
  }
} as const;

export default myTasksWorkspaceController;

export const pipeline = [
  {
    "id": "myTasksWorkspace__httpController",
    "type": "httpController",
    "outputPath": "_102045_/l1/buildFlowFsm/layer_1_external/adapters/http/controllers/myTasksWorkspace.ts",
    "defPath": "_102045_/l1/buildFlowFsm/layer_1_external/adapters/http/controllers/myTasksWorkspace.defs.ts",
    "dependsFiles": [
      "_102045_/l1/buildFlowFsm/layer_2_application/usecases/queryMyWorkTasks.d.ts",
      "_102045_/l4/buildFlowFsm/contracts/myTasksWorkspace.listMyWorkTasks.defs.ts",
      "_102045_/l1/buildFlowFsm/layer_2_application/usecases/viewWorkTask.d.ts",
      "_102045_/l4/buildFlowFsm/contracts/myTasksWorkspace.getWorkTaskDetail.defs.ts"
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
