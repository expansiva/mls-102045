/// <mls fileReference="_102045_/l1/buildFlowFsm/layer_2_application/usecases/viewProject.defs.ts" enhancement="_blank"/>

export const viewProjectUsecase = {
  "schemaVersion": "2026-06-26",
  "artifactType": "usecase",
  "artifactId": "viewProject",
  "moduleName": "buildFlowFsm",
  "status": "draft",
  "source": {
    "agentName": "agentCbUsecase",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "usecaseId": "viewProject",
    "ports": [
      "Project",
      "WorkTask",
      "TimeLog",
      "MaterialUsage"
    ],
    "functions": [
      {
        "functionName": "viewProject",
        "inputTypeName": "ViewProjectInput",
        "outputTypeName": "ViewProjectOutput",
        "input": [
          {
            "name": "projectId",
            "type": "string",
            "required": true,
            "ofEntity": "Project",
            "description": "Identifier of the project to open on the detail and timeline screen."
          }
        ],
        "output": [
          {
            "name": "projectId",
            "type": "string",
            "required": true,
            "ofEntity": "Project"
          },
          {
            "name": "name",
            "type": "string",
            "required": true,
            "ofEntity": "Project"
          },
          {
            "name": "clientId",
            "type": "string",
            "required": true,
            "ofEntity": "Project"
          },
          {
            "name": "clientName",
            "type": "string",
            "required": true,
            "ofEntity": "Client"
          },
          {
            "name": "clientCompany",
            "type": "string",
            "required": false,
            "ofEntity": "Client"
          },
          {
            "name": "siteAddress",
            "type": "string",
            "required": true,
            "ofEntity": "Project"
          },
          {
            "name": "budget",
            "type": "number",
            "required": true,
            "ofEntity": "Project"
          },
          {
            "name": "startDate",
            "type": "string",
            "required": true,
            "ofEntity": "Project"
          },
          {
            "name": "endDate",
            "type": "string",
            "required": true,
            "ofEntity": "Project"
          },
          {
            "name": "status",
            "type": "string",
            "required": true,
            "ofEntity": "Project"
          },
          {
            "name": "holdReason",
            "type": "string",
            "required": false,
            "ofEntity": "Project"
          },
          {
            "name": "closedAt",
            "type": "string",
            "required": false,
            "ofEntity": "Project"
          },
          {
            "name": "cancelledAt",
            "type": "string",
            "required": false,
            "ofEntity": "Project"
          },
          {
            "name": "cancellationReason",
            "type": "string",
            "required": false,
            "ofEntity": "Project"
          },
          {
            "name": "createdAt",
            "type": "string",
            "required": true,
            "ofEntity": "Project"
          },
          {
            "name": "updatedAt",
            "type": "string",
            "required": true,
            "ofEntity": "Project"
          },
          {
            "name": "tasks",
            "type": "array",
            "required": true
          }
        ],
        "ports": [
          "Project",
          "WorkTask"
        ],
        "rulesApplied": [
          "operationsRequireActiveProject"
        ],
        "transactional": false,
        "steps": [
          "1. Load the Project aggregate by projectId via the Project port (getById). If not found, throw a validation error referencing rule operationsRequireActiveProject — the project must exist to be viewed.",
          "2. Apply rule operationsRequireActiveProject: validate that the loaded project is non-null and has a valid status (registered, active, onHold, closed, or cancelled). The project is returned regardless of status so the manager can review hold/closed/cancelled details.",
          "3. Read the Client master-data record via ctx.mdm.entity.get({ mdmId: project.clientId }) to obtain clientName (Client.name) and clientCompany (Client.company when present).",
          "4. Load all WorkTask records scoped to this project via the WorkTask port (list by filter projectId === route projectId). Sort by dueDate ascending for timeline review.",
          "5. Assemble the output object: project core fields (projectId, name, clientId, siteAddress, budget, startDate, endDate, status, holdReason, closedAt, cancelledAt, cancellationReason, createdAt, updatedAt), client summary (clientName, clientCompany), and the tasks array with workTaskId, title, description, assignedWorkerId, status, dueDate, completedAt for each task.",
          "6. Return the assembled ViewProjectOutput. No mutations are performed; no events are emitted (read-only view operation)."
        ],
        "outputShape": {
          "kind": "object",
          "fields": [
            {
              "name": "projectId",
              "type": "string",
              "required": true,
              "fieldRef": "Project.projectId"
            },
            {
              "name": "name",
              "type": "string",
              "required": true,
              "fieldRef": "Project.name"
            },
            {
              "name": "clientId",
              "type": "string",
              "required": true,
              "fieldRef": "Project.clientId"
            },
            {
              "name": "clientName",
              "type": "string",
              "required": true,
              "fieldRef": "Client.name"
            },
            {
              "name": "clientCompany",
              "type": "string",
              "required": false,
              "fieldRef": "Client.company"
            },
            {
              "name": "siteAddress",
              "type": "string",
              "required": true,
              "fieldRef": "Project.siteAddress"
            },
            {
              "name": "budget",
              "type": "number",
              "required": true,
              "fieldRef": "Project.budget"
            },
            {
              "name": "startDate",
              "type": "string",
              "required": true,
              "fieldRef": "Project.startDate"
            },
            {
              "name": "endDate",
              "type": "string",
              "required": true,
              "fieldRef": "Project.endDate"
            },
            {
              "name": "status",
              "type": "string",
              "required": true,
              "fieldRef": "Project.status"
            },
            {
              "name": "holdReason",
              "type": "string",
              "required": false,
              "fieldRef": "Project.holdReason"
            },
            {
              "name": "closedAt",
              "type": "string",
              "required": false,
              "fieldRef": "Project.closedAt"
            },
            {
              "name": "cancelledAt",
              "type": "string",
              "required": false,
              "fieldRef": "Project.cancelledAt"
            },
            {
              "name": "cancellationReason",
              "type": "string",
              "required": false,
              "fieldRef": "Project.cancellationReason"
            },
            {
              "name": "createdAt",
              "type": "string",
              "required": true,
              "fieldRef": "Project.createdAt"
            },
            {
              "name": "updatedAt",
              "type": "string",
              "required": true,
              "fieldRef": "Project.updatedAt"
            },
            {
              "name": "tasks",
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
                    "required": false,
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
                    "required": false,
                    "fieldRef": "WorkTask.dueDate"
                  },
                  {
                    "name": "completedAt",
                    "type": "string",
                    "required": false,
                    "fieldRef": "WorkTask.completedAt"
                  }
                ]
              }
            }
          ]
        }
      }
    ],
    "mdmRefs": [
      "Client"
    ]
  }
} as const;

export default viewProjectUsecase;

export const pipeline = [
  {
    "id": "viewProject__applicationUsecase",
    "type": "applicationUsecase",
    "outputPath": "_102045_/l1/buildFlowFsm/layer_2_application/usecases/viewProject.ts",
    "defPath": "_102045_/l1/buildFlowFsm/layer_2_application/usecases/viewProject.defs.ts",
    "dependsFiles": [
      "_102045_/l1/buildFlowFsm/layer_2_application/ports/projectRepository.d.ts",
      "_102045_/l1/buildFlowFsm/layer_2_application/ports/workTaskRepository.d.ts",
      "_102045_/l1/buildFlowFsm/layer_2_application/ports/timeLogRepository.d.ts",
      "_102045_/l1/buildFlowFsm/layer_2_application/ports/materialUsageRepository.d.ts",
      "_102045_/l1/buildFlowFsm/layer_3_domain/entities/project.d.ts",
      "_102045_/l1/buildFlowFsm/layer_3_domain/entities/workTask.d.ts",
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
