/// <mls fileReference="_102045_/l1/buildFlowFsm/layer_2_application/usecases/updateProjectStatus.defs.ts" enhancement="_blank"/>

export const updateProjectStatusUsecase = {
  "schemaVersion": "2026-06-26",
  "artifactType": "usecase",
  "artifactId": "updateProjectStatus",
  "moduleName": "buildFlowFsm",
  "status": "draft",
  "source": {
    "agentName": "agentCbUsecase",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "usecaseId": "updateProjectStatus",
    "ports": [
      "Project",
      "MaterialUsage"
    ],
    "functions": [
      {
        "functionName": "updateProjectStatus",
        "inputTypeName": "UpdateProjectStatusInput",
        "outputTypeName": "UpdateProjectStatusOutput",
        "input": [
          {
            "name": "projectId",
            "type": "string",
            "required": true,
            "ofEntity": "Project",
            "fieldRef": "Project.projectId",
            "description": "Identifier of the project whose status is being updated"
          },
          {
            "name": "status",
            "type": "string",
            "required": true,
            "ofEntity": "Project",
            "fieldRef": "Project.status",
            "description": "New lifecycle status for the project (registered, active, onHold, closed, or cancelled)"
          },
          {
            "name": "holdReason",
            "type": "string",
            "required": false,
            "ofEntity": "Project",
            "fieldRef": "Project.holdReason",
            "description": "Reason recorded when the project is placed on hold"
          },
          {
            "name": "cancellationReason",
            "type": "string",
            "required": false,
            "ofEntity": "Project",
            "fieldRef": "Project.cancellationReason",
            "description": "Reason recorded when the project is cancelled"
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
            "name": "updatedAt",
            "type": "string",
            "required": true,
            "ofEntity": "Project"
          }
        ],
        "ports": [
          "Project"
        ],
        "rulesApplied": [
          "projectActivationRequiresCoreFields",
          "jobCostingRequiresBudgetAndSchedule",
          "operationsRequireActiveProject"
        ],
        "transactional": true,
        "steps": [
          "1. Load the Project aggregate from the Project port by projectId. If not found, throw a validation error 'Project not found'.",
          "2. Validate the requested status is one of the allowed enum values: registered, active, onHold, closed, cancelled. If invalid, throw a validation error with rule detail.",
          "3. Apply rule 'projectActivationRequiresCoreFields': if the new status is 'active', verify the loaded project already has non-empty name, clientId, and siteAddress. If any is missing, reject with error 'projectActivationRequiresCoreFields: project must have name, clientId, and siteAddress before activation'.",
          "4. Apply rule 'jobCostingRequiresBudgetAndSchedule': if the new status is 'active', verify the loaded project already has non-null budget, startDate, and endDate. If any is missing, reject with error 'jobCostingRequiresBudgetAndSchedule: project must have budget, startDate, and endDate before activation'.",
          "5. Apply rule 'operationsRequireActiveProject': if the current project status is not 'active' and the new status is not 'active' (i.e. attempting operational transitions like onHold->closed without being active first), reject with error 'operationsRequireActiveProject: only an active project allows subsequent field entries, tasks, and change orders'. Allow transitions FROM active to onHold/closed/cancelled, and FROM registered to active. Reject transitions from registered/onHold/closed/cancelled to closed/cancelled/onHold unless the project was previously active.",
          "6. If new status is 'onHold', set project.holdReason to the provided holdReason (required when status is onHold; if missing, throw validation error 'holdReason is required when status is onHold').",
          "7. If new status is 'cancelled', set project.cancelledAt to ctx.clock.now() and project.cancellationReason to the provided cancellationReason (required when status is cancelled; if missing, throw validation error 'cancellationReason is required when status is cancelled').",
          "8. If new status is 'closed', set project.closedAt to ctx.clock.now().",
          "9. Set project.status to the new status value. Set project.updatedAt to ctx.clock.now().",
          "10. Save the Project aggregate through the Project port inside the same transaction.",
          "11. Append a MaterialUsage audit event through the MaterialUsage port (inside the same transaction) recording the status transition: { projectId, previousStatus, newStatus, changedAt: ctx.clock.now(), actorId: ctx.sessionContext.actorId }. This event is persisted for audit history.",
          "12. Return the updated project fields: projectId, name, status, holdReason, closedAt, cancelledAt, cancellationReason, updatedAt."
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
              "name": "updatedAt",
              "type": "string",
              "required": true,
              "fieldRef": "Project.updatedAt"
            }
          ]
        }
      }
    ],
    "mdmRefs": []
  }
} as const;

export default updateProjectStatusUsecase;

export const pipeline = [
  {
    "id": "updateProjectStatus__applicationUsecase",
    "type": "applicationUsecase",
    "outputPath": "_102045_/l1/buildFlowFsm/layer_2_application/usecases/updateProjectStatus.ts",
    "defPath": "_102045_/l1/buildFlowFsm/layer_2_application/usecases/updateProjectStatus.defs.ts",
    "dependsFiles": [
      "_102045_/l1/buildFlowFsm/layer_2_application/ports/projectRepository.d.ts",
      "_102045_/l1/buildFlowFsm/layer_2_application/ports/materialUsageRepository.d.ts",
      "_102045_/l1/buildFlowFsm/layer_3_domain/entities/project.d.ts",
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
