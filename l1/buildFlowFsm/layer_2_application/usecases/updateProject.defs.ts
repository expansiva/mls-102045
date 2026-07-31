/// <mls fileReference="_102045_/l1/buildFlowFsm/layer_2_application/usecases/updateProject.defs.ts" enhancement="_blank"/>

export const updateProjectUsecase = {
  "schemaVersion": "2026-06-26",
  "artifactType": "usecase",
  "artifactId": "updateProject",
  "moduleName": "buildFlowFsm",
  "status": "draft",
  "source": {
    "agentName": "agentCbUsecase",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "usecaseId": "updateProject",
    "ports": [
      "Project",
      "MaterialUsage"
    ],
    "functions": [
      {
        "functionName": "updateProject",
        "inputTypeName": "UpdateProjectInput",
        "outputTypeName": "UpdateProjectOutput",
        "input": [
          {
            "name": "projectId",
            "type": "string",
            "required": true,
            "ofEntity": "Project",
            "fieldRef": "Project.projectId",
            "description": "Identifier of the project being updated"
          },
          {
            "name": "name",
            "type": "string",
            "required": true,
            "ofEntity": "Project",
            "fieldRef": "Project.name",
            "description": "Updated human-readable project name"
          },
          {
            "name": "clientId",
            "type": "string",
            "required": true,
            "ofEntity": "Project",
            "fieldRef": "Project.clientId",
            "description": "Updated client who owns this project"
          },
          {
            "name": "siteAddress",
            "type": "string",
            "required": true,
            "ofEntity": "Project",
            "fieldRef": "Project.siteAddress",
            "description": "Updated physical address of the work site"
          },
          {
            "name": "budget",
            "type": "number",
            "required": true,
            "ofEntity": "Project",
            "fieldRef": "Project.budget",
            "description": "Updated approved total budget baseline"
          },
          {
            "name": "startDate",
            "type": "string",
            "required": true,
            "ofEntity": "Project",
            "fieldRef": "Project.startDate",
            "description": "Updated planned project start date"
          },
          {
            "name": "endDate",
            "type": "string",
            "required": true,
            "ofEntity": "Project",
            "fieldRef": "Project.endDate",
            "description": "Updated planned project completion date"
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
          "jobCostingRequiresBudgetAndSchedule"
        ],
        "transactional": true,
        "steps": [
          "1. Load the existing Project aggregate by projectId via ProjectPort.getById(projectId). If not found, throw a validation error 'Project not found'.",
          "2. Validate that the submitted clientId references an existing Client in MDM by calling ctx.mdm.entity.get({ mdmId: clientId }). If the Client does not exist, throw a validation error 'Referenced client does not exist'.",
          "3. Apply rule 'projectActivationRequiresCoreFields': if the existing project status is 'active' (or would transition to 'active'), verify that name, clientId, and siteAddress are all non-empty after the update. If any is missing, throw a validation error with rule id 'projectActivationRequiresCoreFields' detailing which core field is absent.",
          "4. Apply rule 'jobCostingRequiresBudgetAndSchedule': verify that budget is a positive number, startDate and endDate are both present, and startDate <= endDate. If any condition fails, throw a validation error with rule id 'jobCostingRequiresBudgetAndSchedule' detailing the missing or invalid field.",
          "5. Mutate the loaded Project aggregate: set name, clientId, siteAddress, budget, startDate, endDate to the submitted values. Set updatedAt to ctx.clock.now() (ISO string). Leave status, holdReason, closedAt, cancelledAt, cancellationReason, and createdAt unchanged.",
          "6. Save the updated Project aggregate via ProjectPort.save(project) inside the same transaction (ctx.data transaction wrapper).",
          "7. Emit a MaterialUsage audit event recording the project update (entityId: MaterialUsage, owner: Project, purpose: audit, persisted: true). NOTE: the declared port 'MaterialUsage' is not present in the provided ports list — this is a modeling gap; the event cannot be appended without the MaterialUsage port. Record the event intent in trace and skip the actual append until the port is provisioned.",
          "8. Return the updated project fields: projectId, name, clientId, siteAddress, budget, startDate, endDate, status, updatedAt."
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
              "name": "updatedAt",
              "type": "string",
              "required": true,
              "fieldRef": "Project.updatedAt"
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

export default updateProjectUsecase;

export const pipeline = [
  {
    "id": "updateProject__applicationUsecase",
    "type": "applicationUsecase",
    "outputPath": "_102045_/l1/buildFlowFsm/layer_2_application/usecases/updateProject.ts",
    "defPath": "_102045_/l1/buildFlowFsm/layer_2_application/usecases/updateProject.defs.ts",
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
