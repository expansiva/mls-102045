/// <mls fileReference="_102045_/l1/buildFlowFsm/layer_2_application/usecases/viewWorkTask.defs.ts" enhancement="_blank"/>

export const viewWorkTaskUsecase = {
  "schemaVersion": "2026-06-26",
  "artifactType": "usecase",
  "artifactId": "viewWorkTask",
  "moduleName": "buildFlowFsm",
  "status": "draft",
  "source": {
    "agentName": "agentCbUsecase",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "usecaseId": "viewWorkTask",
    "ports": [
      "WorkTask",
      "Project",
      "TimeLog",
      "MaterialUsage"
    ],
    "functions": [
      {
        "functionName": "viewWorkTask",
        "inputTypeName": "ViewWorkTaskInput",
        "outputTypeName": "ViewWorkTaskOutput",
        "input": [
          {
            "name": "workTaskId",
            "type": "string",
            "required": true,
            "ofEntity": "WorkTask",
            "fieldRef": "WorkTask.workTaskId",
            "description": "Identifier of the work task to open on the detail screen."
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
            "name": "projectName",
            "type": "string",
            "required": true,
            "ofEntity": "Project"
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
            "name": "isOverdue",
            "type": "boolean",
            "required": true
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
            "name": "createdAt",
            "type": "string",
            "required": true,
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
          "Project"
        ],
        "rulesApplied": [
          "fieldWorkerTaskVisibility",
          "mobileFieldUsability",
          "overdueTaskHighlighting"
        ],
        "transactional": false,
        "steps": [
          "1. Resolve actorId from ctx.sessionContext.actorId (actorSession context — never a public input).",
          "2. Load the WorkTask by workTaskId through the WorkTask port (getById). If not found, throw a NOT_FOUND error without leaking any other worker's task data.",
          "3. Apply rule fieldWorkerTaskVisibility: compare task.assignedWorkerId against the resolved actorId. If they do not match, throw a NOT_FOUND error (same error as a missing task) so that no information about other workers' assignments is leaked.",
          "4. Load the parent Project by task.projectId through the Project port (getById). If the project is not found, throw a NOT_FOUND error.",
          "5. Apply rule overdueTaskHighlighting: compute isOverdue = (task.dueDate < ctx.clock.today()) && (task.status !== 'completed' && task.status !== 'cancelled').",
          "6. Apply rule mobileFieldUsability: assemble the full detail payload with all fields from the WorkTask plus projectName from Project and the computed isOverdue flag, ensuring the response is complete for the mobile field-worker detail screen.",
          "7. Return the assembled ViewWorkTaskOutput object."
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
              "name": "isOverdue",
              "type": "boolean",
              "required": true
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
      }
    ],
    "mdmRefs": []
  }
} as const;

export default viewWorkTaskUsecase;

export const pipeline = [
  {
    "id": "viewWorkTask__applicationUsecase",
    "type": "applicationUsecase",
    "outputPath": "_102045_/l1/buildFlowFsm/layer_2_application/usecases/viewWorkTask.ts",
    "defPath": "_102045_/l1/buildFlowFsm/layer_2_application/usecases/viewWorkTask.defs.ts",
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
