/// <mls fileReference="_102045_/l1/buildFlowFsm/layer_2_application/usecases/queryMaterialUsages.defs.ts" enhancement="_blank"/>

export const queryMaterialUsagesUsecase = {
  "schemaVersion": "2026-06-26",
  "artifactType": "usecase",
  "artifactId": "queryMaterialUsages",
  "moduleName": "buildFlowFsm",
  "status": "draft",
  "source": {
    "agentName": "agentCbUsecase",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "usecaseId": "queryMaterialUsages",
    "ports": [
      "MaterialUsage"
    ],
    "functions": [
      {
        "functionName": "queryMaterialUsages",
        "inputTypeName": "QueryMaterialUsagesInput",
        "outputTypeName": "QueryMaterialUsagesOutput",
        "input": [
          {
            "name": "projectId",
            "type": "string",
            "required": true,
            "ofEntity": "MaterialUsage",
            "description": "Project whose material usage records are listed for job costing review"
          },
          {
            "name": "status",
            "type": "string",
            "required": false,
            "ofEntity": "MaterialUsage",
            "description": "Optional filter by lifecycle status (posted or voided)"
          },
          {
            "name": "page",
            "type": "number",
            "required": false,
            "description": "Optional page number for paginated results"
          },
          {
            "name": "pageSize",
            "type": "number",
            "required": false,
            "description": "Optional page size for paginated results"
          }
        ],
        "output": [
          {
            "name": "materialUsages",
            "type": "array",
            "required": true
          },
          {
            "name": "total",
            "type": "number",
            "required": true
          }
        ],
        "ports": [
          "MaterialUsage"
        ],
        "rulesApplied": [
          "jobCostDerivation",
          "materialUsageIsProjectLevel"
        ],
        "transactional": false,
        "steps": [
          "1. Resolve the MaterialUsage port via ctx.resolveRepository('MaterialUsage').",
          "2. Validate that projectId is provided (required input from selectedEntity context).",
          "3. Apply rule materialUsageIsProjectLevel: all material usage records are scoped to the given projectId — no cross-project or warehouse-level records are returned.",
          "4. Build a filter object: { projectId } and, if status is provided and equals 'posted' or 'voided', add { status } to the filter.",
          "5. Query the MaterialUsage port with the filter, sorted by usageDate ascending then createdAt ascending.",
          "6. Apply optional pagination: if page and pageSize are provided, slice the result set accordingly (default page=1, pageSize=50 when omitted).",
          "7. Apply rule jobCostDerivation: each returned record includes materialName, quantity, unit, unitCost, and status so that job costing (budget-vs-actual) can be derived from material usage alongside time logs and approved change orders.",
          "8. Map each MaterialUsage entity to the output projection: materialUsageId, projectId, status, materialName, quantity, unit, unitCost, costCode, usageDate, recordedBy, voidedAt, voidedReason, createdAt.",
          "9. Compute total as the full count of records matching the filter (before pagination slice).",
          "10. Return { materialUsages, total }."
        ],
        "outputShape": {
          "kind": "paginated",
          "fields": [
            {
              "name": "materialUsages",
              "type": "array",
              "required": true,
              "item": {
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
                    "name": "voidedAt",
                    "type": "string",
                    "required": false,
                    "fieldRef": "MaterialUsage.voidedAt"
                  },
                  {
                    "name": "voidedReason",
                    "type": "string",
                    "required": false,
                    "fieldRef": "MaterialUsage.voidedReason"
                  },
                  {
                    "name": "createdAt",
                    "type": "string",
                    "required": true,
                    "fieldRef": "MaterialUsage.createdAt"
                  }
                ]
              }
            },
            {
              "name": "total",
              "type": "number",
              "required": true
            }
          ]
        }
      }
    ],
    "mdmRefs": []
  }
} as const;

export default queryMaterialUsagesUsecase;

export const pipeline = [
  {
    "id": "queryMaterialUsages__applicationUsecase",
    "type": "applicationUsecase",
    "outputPath": "_102045_/l1/buildFlowFsm/layer_2_application/usecases/queryMaterialUsages.ts",
    "defPath": "_102045_/l1/buildFlowFsm/layer_2_application/usecases/queryMaterialUsages.defs.ts",
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
