/// <mls fileReference="_102045_/l1/buildFlowFsm/layer_2_application/usecases/createWorkTask.defs.ts" enhancement="_blank"/>

export const createWorkTaskUsecase = {
  "schemaVersion": "2026-06-26",
  "artifactType": "usecase",
  "artifactId": "createWorkTask",
  "moduleName": "buildFlowFsm",
  "status": "draft",
  "source": {
    "agentName": "agentCbUsecase",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "usecaseId": "createWorkTask",
    "ports": [
      "WorkTask",
      "Project",
      "TimeLog",
      "MaterialUsage"
    ],
    "functions": [
      {
        "functionName": "createWorkTask",
        "inputTypeName": "CreateWorkTaskInput",
        "outputTypeName": "CreateWorkTaskOutput",
        "input": [
          {
            "name": "projectId",
            "type": "string",
            "required": true,
            "ofEntity": "WorkTask",
            "description": "Project the new work task belongs to"
          },
          {
            "name": "title",
            "type": "string",
            "required": true,
            "ofEntity": "WorkTask",
            "description": "Short name describing the work task"
          },
          {
            "name": "description",
            "type": "string",
            "required": false,
            "ofEntity": "WorkTask",
            "description": "Detailed scope or instructions for completing the task"
          },
          {
            "name": "assignedWorkerId",
            "type": "string",
            "required": true,
            "ofEntity": "WorkTask",
            "description": "Identifier of the single field worker assigned to this task"
          },
          {
            "name": "dueDate",
            "type": "string",
            "required": true,
            "ofEntity": "WorkTask",
            "description": "Date by which the task should be completed, within the project schedule"
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
          "Project",
          "TimeLog"
        ],
        "rulesApplied": [
          "operationsRequireActiveProject",
          "singleTaskAssignment",
          "taskDueDateWithinSchedule"
        ],
        "transactional": true,
        "steps": [
          "1. Load the Project referenced by projectId through the Project port (getById). If not found, reject with a validation error.",
          "2. Rule operationsRequireActiveProject: check that project.status === 'active'. If the project is in any other status (registered, onHold, closed, cancelled), reject creation with error detail referencing rule 'operationsRequireActiveProject'.",
          "3. Rule taskDueDateWithinSchedule: parse dueDate and compare against project.startDate and project.endDate. If dueDate is before startDate or after endDate, reject with error detail referencing rule 'taskDueDateWithinSchedule'.",
          "4. Rule singleTaskAssignment: validate that assignedWorkerId is a single non-empty string value (not an array or comma-separated list). If multiple worker ids are detected, reject with error detail referencing rule 'singleTaskAssignment'.",
          "5. Generate workTaskId using ctx.idGenerator (UUID).",
          "6. Set status to 'assigned' (initial lifecycle status on create).",
          "7. Set createdAt and updatedAt to ctx.clock.now() (current server timestamp).",
          "8. Build the WorkTask entity with all fields: workTaskId, projectId, title, description (if provided), assignedWorkerId, status='assigned', dueDate, createdAt, updatedAt.",
          "9. Persist the WorkTask through the WorkTask port (create) inside a single transaction via ctx.data transaction wrapper.",
          "10. Build a TimeLog audit event record for the task creation (entityId: workTaskId, action: 'taskCreated', timestamp: createdAt) and append it through the TimeLog port inside the same transaction.",
          "11. Return the created WorkTask projection: workTaskId, projectId, title, description, assignedWorkerId, status, dueDate, createdAt, updatedAt."
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

export default createWorkTaskUsecase;

export const pipeline = [
  {
    "id": "createWorkTask__applicationUsecase",
    "type": "applicationUsecase",
    "outputPath": "_102045_/l1/buildFlowFsm/layer_2_application/usecases/createWorkTask.ts",
    "defPath": "_102045_/l1/buildFlowFsm/layer_2_application/usecases/createWorkTask.defs.ts",
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
