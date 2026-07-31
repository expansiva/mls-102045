/// <mls fileReference="_102045_/l1/buildFlowFsm/layer_2_application/usecases/createMaterialUsage.defs.ts" enhancement="_blank"/>

export const createMaterialUsageUsecase = {
  "schemaVersion": "2026-06-26",
  "artifactType": "usecase",
  "artifactId": "createMaterialUsage",
  "moduleName": "buildFlowFsm",
  "status": "draft",
  "source": {
    "agentName": "agentCbUsecase",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "usecaseId": "createMaterialUsage",
    "ports": [
      "Project",
      "MaterialUsage"
    ],
    "functions": [
      {
        "functionName": "createMaterialUsage",
        "inputTypeName": "CreateMaterialUsageInput",
        "outputTypeName": "CreateMaterialUsageOutput",
        "input": [
          {
            "name": "projectId",
            "type": "string",
            "required": true,
            "ofEntity": "MaterialUsage",
            "description": "Project the material usage is recorded against (resolved from selected project)"
          },
          {
            "name": "materialName",
            "type": "string",
            "required": true,
            "ofEntity": "MaterialUsage",
            "description": "Name or description of the material consumed"
          },
          {
            "name": "quantity",
            "type": "number",
            "required": true,
            "ofEntity": "MaterialUsage",
            "description": "Quantity of the material consumed"
          },
          {
            "name": "unit",
            "type": "string",
            "required": true,
            "ofEntity": "MaterialUsage",
            "description": "Unit of measure for the material quantity"
          },
          {
            "name": "unitCost",
            "type": "number",
            "required": true,
            "ofEntity": "MaterialUsage",
            "description": "Cost per unit of the material at the time of usage"
          },
          {
            "name": "costCode",
            "type": "string",
            "required": false,
            "ofEntity": "MaterialUsage",
            "description": "Optional internal cost classification code for job costing detail"
          },
          {
            "name": "usageDate",
            "type": "string",
            "required": true,
            "ofEntity": "MaterialUsage",
            "description": "Date the material was consumed on the project site"
          }
        ],
        "output": [
          {
            "name": "materialUsageId",
            "type": "string",
            "required": true,
            "ofEntity": "MaterialUsage"
          },
          {
            "name": "projectId",
            "type": "string",
            "required": true,
            "ofEntity": "MaterialUsage"
          },
          {
            "name": "status",
            "type": "string",
            "required": true,
            "ofEntity": "MaterialUsage"
          },
          {
            "name": "materialName",
            "type": "string",
            "required": true,
            "ofEntity": "MaterialUsage"
          },
          {
            "name": "quantity",
            "type": "number",
            "required": true,
            "ofEntity": "MaterialUsage"
          },
          {
            "name": "unit",
            "type": "string",
            "required": true,
            "ofEntity": "MaterialUsage"
          },
          {
            "name": "unitCost",
            "type": "number",
            "required": true,
            "ofEntity": "MaterialUsage"
          },
          {
            "name": "costCode",
            "type": "string",
            "required": false,
            "ofEntity": "MaterialUsage"
          },
          {
            "name": "usageDate",
            "type": "string",
            "required": true,
            "ofEntity": "MaterialUsage"
          },
          {
            "name": "recordedBy",
            "type": "string",
            "required": false,
            "ofEntity": "MaterialUsage"
          },
          {
            "name": "createdAt",
            "type": "string",
            "required": true,
            "ofEntity": "MaterialUsage"
          }
        ],
        "ports": [
          "Project",
          "MaterialUsage"
        ],
        "rulesApplied": [
          "jobCostDerivation",
          "materialUsageIsProjectLevel"
        ],
        "transactional": true,
        "steps": [
          "1. Load the Project referenced by projectId through the Project port (getById). If not found, reject with validation error 'Project not found for projectId'.",
          "2. Apply rule materialUsageIsProjectLevel: verify the Project status is 'active' or 'registered' (a project on hold, closed, or cancelled does not accept new material usage). If the project is not in an accepting status, reject with error 'Cannot record material usage against a project with status {status}' and include rule id materialUsageIsProjectLevel in details.",
          "3. Validate user-supplied fields: materialName is non-empty, quantity > 0, unit is one of [kg, liter, meter, unit, bag, box], unitCost >= 0, usageDate is a valid date string. Reject with field-level validation errors if any check fails.",
          "4. Resolve context values: generate materialUsageId via ctx.idGenerator.uuid(); set status to 'posted'; set recordedBy from ctx.sessionContext.actorId; set createdAt from ctx.clock.now() as ISO datetime string.",
          "5. Apply rule jobCostDerivation: because status is 'posted', the record's line cost (quantity * unitCost) contributes to the project's job cost and budget-vs-actual derivation. This is enforced by the domain invariant that only 'posted' material usage records are included in job cost aggregation — no separate write is needed here; the status 'posted' is the signal.",
          "6. Construct the MaterialUsage entity with all fields: materialUsageId, projectId, status='posted', materialName, quantity, unit, unitCost, costCode (only if provided), usageDate, recordedBy, createdAt.",
          "7. Persist the MaterialUsage record through the MaterialUsage port (create) inside a single transaction via ctx.data transaction wrapper.",
          "8. Return the created MaterialUsage record with all output fields: materialUsageId, projectId, status, materialName, quantity, unit, unitCost, costCode, usageDate, recordedBy, createdAt."
        ],
        "outputShape": {
          "kind": "object",
          "fields": [
            {
              "name": "materialUsageId",
              "type": "string",
              "required": true,
              "fieldRef": "MaterialUsage.materialUsageId"
            },
            {
              "name": "projectId",
              "type": "string",
              "required": true,
              "fieldRef": "MaterialUsage.projectId"
            },
            {
              "name": "status",
              "type": "string",
              "required": true,
              "fieldRef": "MaterialUsage.status"
            },
            {
              "name": "materialName",
              "type": "string",
              "required": true,
              "fieldRef": "MaterialUsage.materialName"
            },
            {
              "name": "quantity",
              "type": "number",
              "required": true,
              "fieldRef": "MaterialUsage.quantity"
            },
            {
              "name": "unit",
              "type": "string",
              "required": true,
              "fieldRef": "MaterialUsage.unit"
            },
            {
              "name": "unitCost",
              "type": "number",
              "required": true,
              "fieldRef": "MaterialUsage.unitCost"
            },
            {
              "name": "costCode",
              "type": "string",
              "required": false,
              "fieldRef": "MaterialUsage.costCode"
            },
            {
              "name": "usageDate",
              "type": "string",
              "required": true,
              "fieldRef": "MaterialUsage.usageDate"
            },
            {
              "name": "recordedBy",
              "type": "string",
              "required": false,
              "fieldRef": "MaterialUsage.recordedBy"
            },
            {
              "name": "createdAt",
              "type": "string",
              "required": true,
              "fieldRef": "MaterialUsage.createdAt"
            }
          ]
        }
      }
    ],
    "mdmRefs": []
  }
} as const;

export default createMaterialUsageUsecase;

export const pipeline = [
  {
    "id": "createMaterialUsage__applicationUsecase",
    "type": "applicationUsecase",
    "outputPath": "_102045_/l1/buildFlowFsm/layer_2_application/usecases/createMaterialUsage.ts",
    "defPath": "_102045_/l1/buildFlowFsm/layer_2_application/usecases/createMaterialUsage.defs.ts",
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
