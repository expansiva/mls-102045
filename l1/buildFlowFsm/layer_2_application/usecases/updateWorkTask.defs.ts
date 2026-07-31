/// <mls fileReference="_102045_/l1/buildFlowFsm/layer_2_application/usecases/updateWorkTask.defs.ts" enhancement="_blank"/>

export const updateWorkTaskUsecase = {
  "schemaVersion": "2026-06-26",
  "artifactType": "usecase",
  "artifactId": "updateWorkTask",
  "moduleName": "buildFlowFsm",
  "status": "draft",
  "source": {
    "agentName": "agentCbUsecase",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "usecaseId": "updateWorkTask",
    "ports": [
      "WorkTask",
      "Project",
      "TimeLog",
      "MaterialUsage"
    ],
    "functions": [
      {
        "functionName": "updateWorkTask",
        "inputTypeName": "UpdateWorkTaskInput",
        "outputTypeName": "UpdateWorkTaskOutput",
        "input": [
          {
            "name": "workTaskId",
            "type": "string",
            "required": true,
            "ofEntity": "WorkTask",
            "fieldRef": "WorkTask.workTaskId",
            "description": "Identifier of the work task being updated"
          },
          {
            "name": "title",
            "type": "string",
            "required": false,
            "ofEntity": "WorkTask",
            "fieldRef": "WorkTask.title",
            "description": "Updated short name for the work task"
          },
          {
            "name": "description",
            "type": "string",
            "required": false,
            "ofEntity": "WorkTask",
            "fieldRef": "WorkTask.description",
            "description": "Updated detailed scope or instructions for the task"
          },
          {
            "name": "assignedWorkerId",
            "type": "string",
            "required": false,
            "ofEntity": "WorkTask",
            "fieldRef": "WorkTask.assignedWorkerId",
            "description": "Updated field worker assigned to this task (single worker only)"
          },
          {
            "name": "dueDate",
            "type": "string",
            "required": false,
            "ofEntity": "WorkTask",
            "fieldRef": "WorkTask.dueDate",
            "description": "Updated due date for completing the task"
          },
          {
            "name": "status",
            "type": "string",
            "required": false,
            "ofEntity": "WorkTask",
            "fieldRef": "WorkTask.status",
            "description": "Updated lifecycle status of the task (assigned, inProgress, completed, cancelled)"
          },
          {
            "name": "cancellationReason",
            "type": "string",
            "required": false,
            "ofEntity": "WorkTask",
            "fieldRef": "WorkTask.cancellationReason",
            "description": "Reason when cancelling the task"
          }
        ],
        "output": [
          {
            "name": "workTaskId",
            "type": "string",
            "required": true,
            "ofEntity": "WorkTask"
          },
          {
            "name": "projectId",
            "type": "string",
            "required": true,
            "ofEntity": "WorkTask"
          },
          {
            "name": "title",
            "type": "string",
            "required": true,
            "ofEntity": "WorkTask"
          },
          {
            "name": "description",
            "type": "string",
            "required": false,
            "ofEntity": "WorkTask"
          },
          {
            "name": "assignedWorkerId",
            "type": "string",
            "required": true,
            "ofEntity": "WorkTask"
          },
          {
            "name": "status",
            "type": "string",
            "required": true,
            "ofEntity": "WorkTask"
          },
          {
            "name": "dueDate",
            "type": "string",
            "required": true,
            "ofEntity": "WorkTask"
          },
          {
            "name": "completedAt",
            "type": "string",
            "required": false,
            "ofEntity": "WorkTask"
          },
          {
            "name": "cancelledAt",
            "type": "string",
            "required": false,
            "ofEntity": "WorkTask"
          },
          {
            "name": "cancellationReason",
            "type": "string",
            "required": false,
            "ofEntity": "WorkTask"
          },
          {
            "name": "updatedAt",
            "type": "string",
            "required": true,
            "ofEntity": "WorkTask"
          }
        ],
        "ports": [
          "WorkTask",
          "Project",
          "TimeLog"
        ],
        "rulesApplied": [
          "operationsRequireActiveProject",
          "singleTaskAssignment",
          "taskDueDateWithinSchedule",
          "taskStatusUpdateAuthorization"
        ],
        "transactional": true,
        "steps": [
          "1. Load the existing WorkTask by workTaskId via WorkTask port (getById). If not found, throw validation error 'WorkTask not found'.",
          "2. Load the parent Project by task.projectId via Project port (getById). If not found, throw validation error 'Parent project not found'.",
          "3. RULE operationsRequireActiveProject: Validate that project.status === 'active'. If not, throw validation error with rule id 'operationsRequireActiveProject': 'Cannot update a work task whose parent project is not active (current: {project.status})'.",
          "4. RULE taskStatusUpdateAuthorization: Resolve the actor from ctx.sessionContext (actorId, actorRole). If status is being changed: (a) if actorRole is 'projectManager' for this project, allow; (b) if actorId equals the current task.assignedWorkerId, allow status changes only; (c) otherwise throw validation error with rule id 'taskStatusUpdateAuthorization': 'Actor is not authorized to update this work task'.",
          "5. RULE singleTaskAssignment: If assignedWorkerId is provided, validate it is a single non-empty string (not a list or comma-separated set). The field type enforces a single worker; if empty or whitespace-only, throw validation error with rule id 'singleTaskAssignment': 'A work task must be assigned to exactly one field worker'.",
          "6. RULE taskDueDateWithinSchedule: If dueDate is provided, validate that project.startDate <= dueDate <= project.endDate. If outside the window, throw validation error with rule id 'taskDueDateWithinSchedule': 'Due date {dueDate} must fall within the project schedule window ({project.startDate} to {project.endDate})'.",
          "7. Apply provided field updates to the loaded WorkTask: title (if provided), description (if provided), assignedWorkerId (if provided), dueDate (if provided), status (if provided), cancellationReason (if provided).",
          "8. If status is set to 'completed', set task.completedAt = ctx.clock.now(). If status is set to 'cancelled', set task.cancelledAt = ctx.clock.now() and require cancellationReason to be provided (throw validation error if missing).",
          "9. Set task.updatedAt = ctx.clock.now() (systemDefault, not user input).",
          "10. Save the updated WorkTask via WorkTask port (update) inside the transaction.",
          "11. Build a TimeLog audit event record: { timeLogId: ctx.idGenerator.generate(), workTaskId: task.workTaskId, action: 'workTaskUpdated', actorId: ctx.sessionContext.actorId, timestamp: ctx.clock.now(), details: { changedFields: list of fields that changed } }. Append it via TimeLog port (create) inside the same transaction.",
          "12. Return the updated WorkTask fields: workTaskId, projectId, title, description, assignedWorkerId, status, dueDate, completedAt, cancelledAt, cancellationReason, updatedAt."
        ],
        "outputShape": {
          "kind": "object",
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
              "name": "cancellationReason",
              "type": "string",
              "required": false,
              "fieldRef": "WorkTask.cancellationReason"
            },
            {
              "name": "updatedAt",
              "type": "string",
              "required": true,
              "fieldRef": "WorkTask.updatedAt"
            }
          ]
        }
      }
    ],
    "mdmRefs": []
  }
} as const;

export default updateWorkTaskUsecase;

export const pipeline = [
  {
    "id": "updateWorkTask__applicationUsecase",
    "type": "applicationUsecase",
    "outputPath": "_102045_/l1/buildFlowFsm/layer_2_application/usecases/updateWorkTask.ts",
    "defPath": "_102045_/l1/buildFlowFsm/layer_2_application/usecases/updateWorkTask.defs.ts",
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
    "agent": "agentCbMaterialize"
  }
] as const;
