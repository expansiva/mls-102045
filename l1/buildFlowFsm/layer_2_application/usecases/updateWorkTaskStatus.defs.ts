/// <mls fileReference="_102045_/l1/buildFlowFsm/layer_2_application/usecases/updateWorkTaskStatus.defs.ts" enhancement="_blank"/>

export const updateWorkTaskStatusUsecase = {
  "schemaVersion": "2026-06-26",
  "artifactType": "usecase",
  "artifactId": "updateWorkTaskStatus",
  "moduleName": "buildFlowFsm",
  "status": "draft",
  "source": {
    "agentName": "agentCbUsecase",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "usecaseId": "updateWorkTaskStatus",
    "ports": [
      "WorkTask",
      "Project",
      "TimeLog",
      "MaterialUsage"
    ],
    "functions": [
      {
        "functionName": "updateWorkTaskStatus",
        "inputTypeName": "UpdateWorkTaskStatusInput",
        "outputTypeName": "UpdateWorkTaskStatusOutput",
        "input": [
          {
            "name": "workTaskId",
            "type": "string",
            "required": true,
            "ofEntity": "WorkTask",
            "description": "Identifier of the work task whose status is being updated."
          },
          {
            "name": "status",
            "type": "string",
            "required": true,
            "ofEntity": "WorkTask",
            "description": "New lifecycle status for the work task (assigned, inProgress, completed, or cancelled)."
          },
          {
            "name": "cancellationReason",
            "type": "string",
            "required": false,
            "ofEntity": "WorkTask",
            "description": "Optional reason recorded when the task is cancelled."
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
            "name": "assignedWorkerId",
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
          "taskStatusUpdateAuthorization",
          "operationsRequireActiveProject",
          "fieldWorkerTaskVisibility"
        ],
        "transactional": true,
        "steps": [
          "1. Resolve actorId from ctx.sessionContext.actorId (actorSession context).",
          "2. Load the WorkTask by workTaskId through the WorkTask port (getById). If not found, throw a validation error 'Work task not found'.",
          "3. Apply rule fieldWorkerTaskVisibility: if the actor's role is fieldWorker, verify task.assignedWorkerId === actorId; otherwise throw 'Field worker can only update tasks assigned to them' with ruleId fieldWorkerTaskVisibility.",
          "4. Apply rule taskStatusUpdateAuthorization: verify the actor is either the assignedWorkerId of the task or a project manager (determined from ctx.sessionContext role). If neither, throw 'Only the assigned field worker or a project manager can update task status' with ruleId taskStatusUpdateAuthorization.",
          "5. Load the parent Project by task.projectId through the Project port (getById). If not found, throw 'Parent project not found'.",
          "6. Apply rule operationsRequireActiveProject: verify project.status === 'active'. If not, throw 'Status updates are rejected when the parent project is not active' with ruleId operationsRequireActiveProject.",
          "7. Validate the requested status is one of the allowed enum values: assigned, inProgress, completed, cancelled. If invalid, throw 'Invalid status value'.",
          "8. Set now = ctx.clock.now(). Update task.status to the new value. Set task.updatedAt = now.",
          "9. If new status is 'completed', set task.completedAt = now. If new status is 'cancelled', set task.cancelledAt = now and store task.cancellationReason from input (if provided).",
          "10. Save the updated WorkTask through the WorkTask port (update) inside the transaction.",
          "11. Build a TimeLog audit event record capturing workTaskId, previous status, new status, actorId, and timestamp. Append it through the TimeLog port inside the same transaction.",
          "12. Return the updated WorkTask fields: workTaskId, projectId, title, status, dueDate, assignedWorkerId, completedAt, cancelledAt, cancellationReason, updatedAt."
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
              "name": "assignedWorkerId",
              "type": "string",
              "required": true,
              "fieldRef": "WorkTask.assignedWorkerId"
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
    "rulesApplied": [
      "taskStatusUpdateAuthorization",
      "operationsRequireActiveProject",
      "fieldWorkerTaskVisibility"
    ],
    "mdmRefs": []
  }
} as const;

export default updateWorkTaskStatusUsecase;

export const pipeline = [
  {
    "id": "updateWorkTaskStatus__applicationUsecase",
    "type": "applicationUsecase",
    "outputPath": "_102045_/l1/buildFlowFsm/layer_2_application/usecases/updateWorkTaskStatus.ts",
    "defPath": "_102045_/l1/buildFlowFsm/layer_2_application/usecases/updateWorkTaskStatus.defs.ts",
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
      "taskStatusUpdateAuthorization",
      "operationsRequireActiveProject",
      "fieldWorkerTaskVisibility"
    ],
    "agent": "agentCbMaterialize"
  }
] as const;
