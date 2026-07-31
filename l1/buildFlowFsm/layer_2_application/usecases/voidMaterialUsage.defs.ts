/// <mls fileReference="_102045_/l1/buildFlowFsm/layer_2_application/usecases/voidMaterialUsage.defs.ts" enhancement="_blank"/>

export const voidMaterialUsageUsecase = {
  "schemaVersion": "2026-06-26",
  "artifactType": "usecase",
  "artifactId": "voidMaterialUsage",
  "moduleName": "buildFlowFsm",
  "status": "draft",
  "source": {
    "agentName": "agentCbUsecase",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "usecaseId": "voidMaterialUsage",
    "ports": [
      "MaterialUsage"
    ],
    "functions": [
      {
        "functionName": "voidMaterialUsage",
        "inputTypeName": "VoidMaterialUsageInput",
        "outputTypeName": "VoidMaterialUsageOutput",
        "input": [
          {
            "name": "materialUsageId",
            "type": "string",
            "required": true,
            "ofEntity": "MaterialUsage",
            "fieldRef": "MaterialUsage.materialUsageId",
            "description": "Identifier of the posted material usage record to void"
          },
          {
            "name": "voidedReason",
            "type": "string",
            "required": true,
            "ofEntity": "MaterialUsage",
            "fieldRef": "MaterialUsage.voidedReason",
            "description": "Reason provided by the field worker for voiding the material usage entry"
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
            "name": "voidedAt",
            "type": "string",
            "required": true,
            "ofEntity": "MaterialUsage"
          },
          {
            "name": "voidedReason",
            "type": "string",
            "required": true,
            "ofEntity": "MaterialUsage"
          }
        ],
        "ports": [
          "MaterialUsage"
        ],
        "rulesApplied": [
          "jobCostDerivation",
          "materialUsageIsProjectLevel"
        ],
        "transactional": true,
        "steps": [
          "1. Load the MaterialUsage aggregate by materialUsageId through the MaterialUsage port (getById). If not found, throw a validation error 'Material usage record not found'.",
          "2. Validate the loaded record has status 'posted' (rule: only a posted material usage record can be voided). If status is not 'posted', throw a validation error with rule id 'materialUsageIsProjectLevel' — 'Only a material usage record with status posted can be voided'.",
          "3. Mutate the aggregate: set status to 'voided' (systemDefault), set voidedAt to ctx.clock.now() (systemDefault), set voidedReason to the provided input value.",
          "4. Save the updated MaterialUsage aggregate through the MaterialUsage port inside a single transaction (ctx.data transaction wrapper).",
          "5. Apply rule 'jobCostDerivation': because the record is now voided, it no longer contributes to project job cost and budget-vs-actual totals. This is a derived consequence — the voided status itself signals downstream cost calculations to exclude this record. No separate job-cost entity mutation is performed in this usecase.",
          "6. Return the updated record fields: materialUsageId, projectId, status, materialName, quantity, unit, unitCost, voidedAt, voidedReason."
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
              "name": "voidedAt",
              "type": "string",
              "required": true,
              "fieldRef": "MaterialUsage.voidedAt"
            },
            {
              "name": "voidedReason",
              "type": "string",
              "required": true,
              "fieldRef": "MaterialUsage.voidedReason"
            }
          ]
        }
      }
    ],
    "mdmRefs": []
  }
} as const;

export default voidMaterialUsageUsecase;

export const pipeline = [
  {
    "id": "voidMaterialUsage__applicationUsecase",
    "type": "applicationUsecase",
    "outputPath": "_102045_/l1/buildFlowFsm/layer_2_application/usecases/voidMaterialUsage.ts",
    "defPath": "_102045_/l1/buildFlowFsm/layer_2_application/usecases/voidMaterialUsage.defs.ts",
    "dependsFiles": [
      "_102045_/l1/buildFlowFsm/layer_2_application/ports/materialUsageRepository.d.ts",
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
