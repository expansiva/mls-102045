/// <mls fileReference="_102045_/l1/buildFlowFsm/layer_2_application/usecases/createProject.defs.ts" enhancement="_blank"/>

export const createProjectUsecase = {
  "schemaVersion": "2026-06-26",
  "artifactType": "usecase",
  "artifactId": "createProject",
  "moduleName": "buildFlowFsm",
  "status": "draft",
  "source": {
    "agentName": "agentCbUsecase",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "usecaseId": "createProject",
    "ports": [
      "Project",
      "MaterialUsage"
    ],
    "functions": [
      {
        "functionName": "createProject",
        "inputTypeName": "CreateProjectInput",
        "outputTypeName": "CreateProjectOutput",
        "input": [
          {
            "name": "name",
            "type": "string",
            "required": true,
            "ofEntity": "Project",
            "description": "Human-readable project name entered by the project manager"
          },
          {
            "name": "clientId",
            "type": "string",
            "required": true,
            "ofEntity": "Project",
            "description": "Identifier of the client who owns this project"
          },
          {
            "name": "siteAddress",
            "type": "string",
            "required": true,
            "ofEntity": "Project",
            "description": "Physical address of the construction or service site"
          },
          {
            "name": "budget",
            "type": "number",
            "required": true,
            "ofEntity": "Project",
            "description": "Approved total budget used as the job costing baseline"
          },
          {
            "name": "startDate",
            "type": "string",
            "required": true,
            "ofEntity": "Project",
            "description": "Planned start date of the project schedule"
          },
          {
            "name": "endDate",
            "type": "string",
            "required": true,
            "ofEntity": "Project",
            "description": "Planned completion date of the project schedule"
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
          "1. Validate core fields — rule projectActivationRequiresCoreFields: reject with validation error if name, clientId, or siteAddress is missing or blank.",
          "2. Validate job costing prerequisites — rule jobCostingRequiresBudgetAndSchedule: reject if budget is null/undefined or <= 0, or if startDate or endDate is missing; also reject if endDate < startDate (schedule integrity).",
          "3. Verify the referenced client exists in MDM: call ctx.mdm.entity.get({ mdmId: clientId }) and reject with a validation error if the client is not found or is inactive.",
          "4. Generate system defaults: projectId = ctx.idGenerator.uuid(), status = 'active' (rule operationsRequireActiveProject ensures the project starts active so tasks, time logs, materials, and change orders can be recorded), createdAt = ctx.clock.now(), updatedAt = ctx.clock.now().",
          "5. Build the Project aggregate root with all fields: projectId, name, clientId, siteAddress, budget, startDate, endDate, status='active', createdAt, updatedAt.",
          "6. Persist via the Project port inside a single transaction (ctx.data transaction wrapper): call projectPort.save(project).",
          "7. Note on eventWrites: the declared MaterialUsage audit event does not apply to project creation — no material-usage transition occurs during create. The event would be emitted by material-usage-specific usecases that mutate MaterialUsage records owned by this Project.",
          "8. Return the created project projection: projectId, name, clientId, siteAddress, budget, startDate, endDate, status, createdAt, updatedAt."
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

export default createProjectUsecase;

export const pipeline = [
  {
    "id": "createProject__applicationUsecase",
    "type": "applicationUsecase",
    "outputPath": "_102045_/l1/buildFlowFsm/layer_2_application/usecases/createProject.ts",
    "defPath": "_102045_/l1/buildFlowFsm/layer_2_application/usecases/createProject.defs.ts",
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
