/// <mls fileReference="_102045_/l1/buildFlowFsm/layer_2_application/usecases/queryWorkTasks.defs.ts" enhancement="_blank"/>

export const queryWorkTasksUsecase = {
  "schemaVersion": "2026-06-26",
  "artifactType": "usecase",
  "artifactId": "queryWorkTasks",
  "moduleName": "buildFlowFsm",
  "status": "draft",
  "source": {
    "agentName": "agentCbUsecase",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "usecaseId": "queryWorkTasks",
    "ports": [
      "WorkTask",
      "TimeLog"
    ],
    "functions": [
      {
        "functionName": "queryWorkTasks",
        "inputTypeName": "QueryWorkTasksInput",
        "outputTypeName": "QueryWorkTasksOutput",
        "input": [
          {
            "name": "projectId",
            "type": "string",
            "required": false,
            "description": "Optional project filter to list only tasks belonging to one project",
            "fieldRef": "WorkTask.projectId"
          },
          {
            "name": "status",
            "type": "string",
            "required": false,
            "description": "Optional lifecycle status filter (assigned, inProgress, completed, cancelled)",
            "fieldRef": "WorkTask.status"
          },
          {
            "name": "assignedWorkerId",
            "type": "string",
            "required": false,
            "description": "Optional filter by the field worker currently assigned to the task",
            "fieldRef": "WorkTask.assignedWorkerId"
          },
          {
            "name": "page",
            "type": "number",
            "required": false,
            "description": "Optional page number when paginating the task list"
          },
          {
            "name": "pageSize",
            "type": "number",
            "required": false,
            "description": "Optional page size when paginating the task list"
          }
        ],
        "output": [
          {
            "name": "workTasks",
            "type": "array",
            "required": true
          },
          {
            "name": "total",
            "type": "number",
            "required": true
          }
        ],
        "ports": [
          "WorkTask"
        ],
        "rulesApplied": [
          "overdueTaskHighlighting",
          "taskSortingByDueDate"
        ],
        "transactional": false,
        "steps": [
          "1. Build filter criteria from optional inputs: if projectId is provided add filter on WorkTask.projectId; if status is provided add filter on WorkTask.status (must be one of assigned, inProgress, completed, cancelled); if assignedWorkerId is provided add filter on WorkTask.assignedWorkerId.",
          "2. Call WorkTask port list with the assembled filter criteria to retrieve all matching tasks.",
          "3. Apply rule taskSortingByDueDate: sort the retrieved tasks by dueDate ascending so the most urgent work appears first.",
          "4. Apply rule overdueTaskHighlighting: for each task compute isOverdue = (dueDate < ctx.clock.today()) AND (status !== 'completed' AND status !== 'cancelled'). Set isOverdue on each task record.",
          "5. Capture total as the full count of filtered tasks before pagination.",
          "6. Apply optional pagination: if page and pageSize are both provided, slice the sorted list to offset=(page-1)*pageSize and limit=pageSize; otherwise return the full list.",
          "7. Map each task to the output shape including workTaskId, projectId, title, description, assignedWorkerId, status, dueDate, completedAt, cancelledAt, createdAt, updatedAt, and the computed isOverdue field.",
          "8. Return { workTasks, total }."
        ],
        "outputShape": {
          "kind": "paginated",
          "fields": [
            {
              "name": "workTasks",
              "type": "array",
              "required": true,
              "item": {
                "fields": [
                  {
                    "name": "workTaskId",
                    "type": "string",
                    "required": true,
                    "fieldRef": "WorkTask.workTaskId"
                  },
                  {
                    "name": "projectId",
                    "type": "string",
                    "required": true,
                    "fieldRef": "WorkTask.projectId"
                  },
                  {
                    "name": "title",
                    "type": "string",
                    "required": true,
                    "fieldRef": "WorkTask.title"
                  },
                  {
                    "name": "description",
                    "type": "string",
                    "required": false,
                    "fieldRef": "WorkTask.description"
                  },
                  {
                    "name": "assignedWorkerId",
                    "type": "string",
                    "required": true,
                    "fieldRef": "WorkTask.assignedWorkerId"
                  },
                  {
                    "name": "status",
                    "type": "string",
                    "required": true,
                    "fieldRef": "WorkTask.status"
                  },
                  {
                    "name": "dueDate",
                    "type": "string",
                    "required": true,
                    "fieldRef": "WorkTask.dueDate"
                  },
                  {
                    "name": "completedAt",
                    "type": "string",
                    "required": false,
                    "fieldRef": "WorkTask.completedAt"
                  },
                  {
                    "name": "cancelledAt",
                    "type": "string",
                    "required": false,
                    "fieldRef": "WorkTask.cancelledAt"
                  },
                  {
                    "name": "createdAt",
                    "type": "string",
                    "required": true,
                    "fieldRef": "WorkTask.createdAt"
                  },
                  {
                    "name": "updatedAt",
                    "type": "string",
                    "required": true,
                    "fieldRef": "WorkTask.updatedAt"
                  },
                  {
                    "name": "isOverdue",
                    "type": "boolean",
                    "required": true
                  }
                ]
              }
            },
            {
              "name": "total",
              "type": "number",
              "required": true
            }
          ]
        }
      }
    ],
    "mdmRefs": []
  }
} as const;

export default queryWorkTasksUsecase;

export const pipeline = [
  {
    "id": "queryWorkTasks__applicationUsecase",
    "type": "applicationUsecase",
    "outputPath": "_102045_/l1/buildFlowFsm/layer_2_application/usecases/queryWorkTasks.ts",
    "defPath": "_102045_/l1/buildFlowFsm/layer_2_application/usecases/queryWorkTasks.defs.ts",
    "dependsFiles": [
      "_102045_/l1/buildFlowFsm/layer_2_application/ports/workTaskRepository.d.ts",
      "_102045_/l1/buildFlowFsm/layer_2_application/ports/timeLogRepository.d.ts",
      "_102045_/l1/buildFlowFsm/layer_3_domain/entities/workTask.d.ts",
      "_102045_/l1/buildFlowFsm/layer_3_domain/entities/timeLog.d.ts"
    ],
    "dependsOn": [],
    "skills": [
      "_102021_/l2/agentChangeBackend/skills/architecture.md",
      "_102021_/l2/agentChangeBackend/skills/applicationUsecase.md",
      "_102034_.d.ts"
    ],
    "agent": "agentCbMaterialize"
  }
] as const;
