/// <mls fileReference="_102045_/l1/buildFlowFsm/layer_2_application/usecases/queryMyWorkTasks.defs.ts" enhancement="_blank"/>

export const queryMyWorkTasksUsecase = {
  "schemaVersion": "2026-06-26",
  "artifactType": "usecase",
  "artifactId": "queryMyWorkTasks",
  "moduleName": "buildFlowFsm",
  "status": "draft",
  "source": {
    "agentName": "agentCbUsecase",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "usecaseId": "queryMyWorkTasks",
    "ports": [
      "WorkTask",
      "Project",
      "TimeLog",
      "MaterialUsage"
    ],
    "functions": [
      {
        "functionName": "queryMyWorkTasks",
        "inputTypeName": "QueryMyWorkTasksInput",
        "outputTypeName": "QueryMyWorkTasksOutput",
        "input": [
          {
            "name": "status",
            "type": "string",
            "required": false,
            "description": "Optional filter to show tasks in a specific lifecycle status (assigned, inProgress, completed, cancelled)"
          },
          {
            "name": "page",
            "type": "number",
            "required": false,
            "description": "Optional page number for paginated results"
          },
          {
            "name": "pageSize",
            "type": "number",
            "required": false,
            "description": "Optional page size for paginated results"
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
          "WorkTask",
          "Project"
        ],
        "rulesApplied": [
          "fieldWorkerTaskVisibility",
          "taskSortingByDueDate",
          "overdueTaskHighlighting",
          "mobileFieldUsability",
          "singleTaskAssignment"
        ],
        "transactional": false,
        "steps": [
          "1. Resolve assignedWorkerId from ctx.sessionContext.actorId (rule fieldWorkerTaskVisibility: only tasks belonging to the signed-in field worker are visible; singleTaskAssignment guarantees each task has exactly one assignedWorkerId so the filter is unambiguous).",
          "2. Build a filter object for the WorkTask port: { assignedWorkerId: resolvedWorkerId }. If the optional `status` input is provided, add { status } to the filter so only tasks in that lifecycle status are returned.",
          "3. Call WorkTask port list with the filter, requesting all matching records (no server-side pagination yet — we need the full set to sort and compute totals).",
          "4. Apply rule taskSortingByDueDate: sort the returned tasks by dueDate ascending so the most urgent work appears first.",
          "5. Collect all unique projectId values from the sorted task list. Bulk-fetch the corresponding Project records via the Project port (list by ids or getById in a single batch call — never one-by-one in a loop). Build a lookup map projectId -> Project.name.",
          "6. Apply rule overdueTaskHighlighting: for each task compute isOverdue = (dueDate < ctx.clock.today()) AND (status !== 'completed' AND status !== 'cancelled'). Use the current date from ctx.clock for the comparison.",
          "7. Apply rule mobileFieldUsability: project only the fields needed for the mobile field-worker view — workTaskId, projectId, projectName (from the Project lookup), title, description, assignedWorkerId, status, dueDate, completedAt, isOverdue, createdAt, updatedAt. Omit internal/cancellation fields not relevant to the mobile list.",
          "8. Apply optional pagination: if page and pageSize are provided, slice the sorted+enriched array to the requested page window (offset = (page - 1) * pageSize, limit = pageSize). If not provided, return all items (page defaults to 1, pageSize defaults to full set).",
          "9. Return { workTasks: enrichedAndPaginatedArray, total: totalCountOfMatchingAssignedTasks } where total is the count BEFORE pagination slicing."
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
                    "name": "projectName",
                    "type": "string",
                    "required": true,
                    "fieldRef": "Project.name"
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
                    "name": "isOverdue",
                    "type": "boolean",
                    "required": true
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
    "rulesApplied": [
      "fieldWorkerTaskVisibility",
      "taskSortingByDueDate",
      "overdueTaskHighlighting",
      "mobileFieldUsability",
      "singleTaskAssignment"
    ],
    "mdmRefs": []
  }
} as const;

export default queryMyWorkTasksUsecase;

export const pipeline = [
  {
    "id": "queryMyWorkTasks__applicationUsecase",
    "type": "applicationUsecase",
    "outputPath": "_102045_/l1/buildFlowFsm/layer_2_application/usecases/queryMyWorkTasks.ts",
    "defPath": "_102045_/l1/buildFlowFsm/layer_2_application/usecases/queryMyWorkTasks.defs.ts",
    "dependsFiles": [
      "_102045_/l1/buildFlowFsm/layer_2_application/ports/workTaskRepository.d.ts",
      "_102045_/l1/buildFlowFsm/layer_2_application/ports/projectRepository.d.ts",
      "_102045_/l1/buildFlowFsm/layer_2_application/ports/timeLogRepository.d.ts",
      "_102045_/l1/buildFlowFsm/layer_2_application/ports/materialUsageRepository.d.ts",
      "_102045_/l1/buildFlowFsm/layer_3_domain/entities/workTask.d.ts",
      "_102045_/l1/buildFlowFsm/layer_3_domain/entities/project.d.ts",
      "_102045_/l1/buildFlowFsm/layer_3_domain/entities/timeLog.d.ts",
      "_102045_/l1/buildFlowFsm/layer_3_domain/entities/materialUsage.d.ts"
    ],
    "dependsOn": [],
    "skills": [
      "_102021_/l2/agentChangeBackend/skills/architecture.md",
      "_102021_/l2/agentChangeBackend/skills/applicationUsecase.md",
      "_102034_.d.ts"
    ],
    "rulesApplied": [
      "fieldWorkerTaskVisibility",
      "taskSortingByDueDate",
      "overdueTaskHighlighting",
      "mobileFieldUsability",
      "singleTaskAssignment"
    ],
    "agent": "agentCbMaterialize"
  }
] as const;
