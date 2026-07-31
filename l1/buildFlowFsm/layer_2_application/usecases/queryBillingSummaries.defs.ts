/// <mls fileReference="_102045_/l1/buildFlowFsm/layer_2_application/usecases/queryBillingSummaries.defs.ts" enhancement="_blank"/>

export const queryBillingSummariesUsecase = {
  "schemaVersion": "2026-06-26",
  "artifactType": "usecase",
  "artifactId": "queryBillingSummaries",
  "moduleName": "buildFlowFsm",
  "status": "draft",
  "source": {
    "agentName": "agentCbUsecase",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "usecaseId": "queryBillingSummaries",
    "ports": [
      "BillingSummary",
      "Project",
      "MaterialUsage"
    ],
    "functions": [
      {
        "functionName": "queryBillingSummaries",
        "inputTypeName": "QueryBillingSummariesInput",
        "outputTypeName": "QueryBillingSummariesOutput",
        "input": [
          {
            "name": "projectId",
            "type": "string",
            "required": false,
            "ofEntity": "BillingSummary",
            "fieldRef": "BillingSummary.projectId",
            "description": "Optional filter to list billing summaries for a specific project"
          },
          {
            "name": "status",
            "type": "string",
            "required": false,
            "ofEntity": "BillingSummary",
            "fieldRef": "BillingSummary.status",
            "description": "Optional filter by billing summary lifecycle status (draft or shared)"
          },
          {
            "name": "page",
            "type": "number",
            "required": false,
            "description": "1-based page index for paginated results"
          },
          {
            "name": "pageSize",
            "type": "number",
            "required": false,
            "description": "Number of billing summaries per page"
          }
        ],
        "output": [
          {
            "name": "billingSummaries",
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
          "BillingSummary",
          "Project"
        ],
        "rulesApplied": [
          "onlyApprovedChangeOrdersAffectCosting",
          "billingSummaryClientFacing"
        ],
        "transactional": false,
        "steps": [
          "1. Resolve pagination defaults: page = page ?? 1, pageSize = pageSize ?? 20. Validate page >= 1 and pageSize >= 1; throw ValidationError if invalid.",
          "2. Build filter criteria from optional inputs: if projectId provided add filter BillingSummary.projectId == projectId; if status provided add filter BillingSummary.status == status (must be 'draft' or 'shared').",
          "3. Query the BillingSummary port (list) with the assembled filters, sorted by periodStart desc then createdAt desc, applying offset = (page - 1) * pageSize and limit = pageSize. Obtain both the page items and the total match count.",
          "4. Collect all unique projectId values from the page items into a Set.",
          "5. Bulk-load the corresponding Project entities via the Project port (getById for each unique projectId, or a batch read if available). Build a lookup map projectId -> Project.name.",
          "6. Apply rule 'onlyApprovedChangeOrdersAffectCosting': the stored changeOrderCost and totalCost on each BillingSummary already reflect only approved change orders (enforced at write time). For the query projection, return these stored values as-is — do not recompute or include any pending/rejected change order amounts.",
          "7. Apply rule 'billingSummaryClientFacing': project each BillingSummary to only client-facing cost fields (laborCost, materialCost, changeOrderCost, totalCost) plus identity, period, status, and timestamps. Never include internal material cost-code breakdown or any non-client-facing detail in the projection.",
          "8. Map each BillingSummary row to the output item shape: billingSummaryId, projectId, projectName (from the Project lookup map), status, periodStart, periodEnd, laborCost, materialCost, changeOrderCost, totalCost, sharedAt (may be null when status is 'draft'), createdAt, updatedAt.",
          "9. Return { billingSummaries: [...projectedItems], total: matchCount }."
        ],
        "outputShape": {
          "kind": "paginated",
          "fields": [
            {
              "name": "billingSummaries",
              "type": "array",
              "required": true,
              "item": {
                "fields": [
                  {
                    "name": "billingSummaryId",
                    "type": "string",
                    "required": true,
                    "fieldRef": "BillingSummary.billingSummaryId"
                  },
                  {
                    "name": "projectId",
                    "type": "string",
                    "required": true,
                    "fieldRef": "BillingSummary.projectId"
                  },
                  {
                    "name": "projectName",
                    "type": "string",
                    "required": true,
                    "fieldRef": "Project.name"
                  },
                  {
                    "name": "status",
                    "type": "string",
                    "required": true,
                    "fieldRef": "BillingSummary.status"
                  },
                  {
                    "name": "periodStart",
                    "type": "string",
                    "required": true,
                    "fieldRef": "BillingSummary.periodStart"
                  },
                  {
                    "name": "periodEnd",
                    "type": "string",
                    "required": true,
                    "fieldRef": "BillingSummary.periodEnd"
                  },
                  {
                    "name": "laborCost",
                    "type": "number",
                    "required": true,
                    "fieldRef": "BillingSummary.laborCost"
                  },
                  {
                    "name": "materialCost",
                    "type": "number",
                    "required": true,
                    "fieldRef": "BillingSummary.materialCost"
                  },
                  {
                    "name": "changeOrderCost",
                    "type": "number",
                    "required": true,
                    "fieldRef": "BillingSummary.changeOrderCost"
                  },
                  {
                    "name": "totalCost",
                    "type": "number",
                    "required": true,
                    "fieldRef": "BillingSummary.totalCost"
                  },
                  {
                    "name": "sharedAt",
                    "type": "string",
                    "required": false,
                    "fieldRef": "BillingSummary.sharedAt"
                  },
                  {
                    "name": "createdAt",
                    "type": "string",
                    "required": true,
                    "fieldRef": "BillingSummary.createdAt"
                  },
                  {
                    "name": "updatedAt",
                    "type": "string",
                    "required": true,
                    "fieldRef": "BillingSummary.updatedAt"
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

export default queryBillingSummariesUsecase;

export const pipeline = [
  {
    "id": "queryBillingSummaries__applicationUsecase",
    "type": "applicationUsecase",
    "outputPath": "_102045_/l1/buildFlowFsm/layer_2_application/usecases/queryBillingSummaries.ts",
    "defPath": "_102045_/l1/buildFlowFsm/layer_2_application/usecases/queryBillingSummaries.defs.ts",
    "dependsFiles": [
      "_102045_/l1/buildFlowFsm/layer_2_application/ports/billingSummaryRepository.d.ts",
      "_102045_/l1/buildFlowFsm/layer_2_application/ports/projectRepository.d.ts",
      "_102045_/l1/buildFlowFsm/layer_2_application/ports/materialUsageRepository.d.ts",
      "_102045_/l1/buildFlowFsm/layer_3_domain/entities/billingSummary.d.ts",
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
