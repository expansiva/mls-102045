/// <mls fileReference="_102045_/l1/buildFlowFsm/layer_2_application/usecases/shareBillingSummary.defs.ts" enhancement="_blank"/>

export const shareBillingSummaryUsecase = {
  "schemaVersion": "2026-06-26",
  "artifactType": "usecase",
  "artifactId": "shareBillingSummary",
  "moduleName": "buildFlowFsm",
  "status": "draft",
  "source": {
    "agentName": "agentCbUsecase",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "usecaseId": "shareBillingSummary",
    "ports": [
      "BillingSummary"
    ],
    "functions": [
      {
        "functionName": "shareBillingSummary",
        "inputTypeName": "ShareBillingSummaryInput",
        "outputTypeName": "ShareBillingSummaryOutput",
        "input": [
          {
            "name": "billingSummaryId",
            "type": "string",
            "required": true,
            "ofEntity": "BillingSummary",
            "fieldRef": "BillingSummary.billingSummaryId",
            "description": "Identifier of the draft billing summary to share with the client"
          }
        ],
        "output": [
          {
            "name": "billingSummaryId",
            "type": "string",
            "required": true,
            "ofEntity": "BillingSummary"
          },
          {
            "name": "projectId",
            "type": "string",
            "required": true,
            "ofEntity": "BillingSummary"
          },
          {
            "name": "status",
            "type": "string",
            "required": true,
            "ofEntity": "BillingSummary"
          },
          {
            "name": "periodStart",
            "type": "string",
            "required": true,
            "ofEntity": "BillingSummary"
          },
          {
            "name": "periodEnd",
            "type": "string",
            "required": true,
            "ofEntity": "BillingSummary"
          },
          {
            "name": "laborCost",
            "type": "number",
            "required": true,
            "ofEntity": "BillingSummary"
          },
          {
            "name": "materialCost",
            "type": "number",
            "required": true,
            "ofEntity": "BillingSummary"
          },
          {
            "name": "changeOrderCost",
            "type": "number",
            "required": true,
            "ofEntity": "BillingSummary"
          },
          {
            "name": "totalCost",
            "type": "number",
            "required": true,
            "ofEntity": "BillingSummary"
          },
          {
            "name": "sharedAt",
            "type": "string",
            "required": true,
            "ofEntity": "BillingSummary"
          },
          {
            "name": "updatedAt",
            "type": "string",
            "required": true,
            "ofEntity": "BillingSummary"
          }
        ],
        "ports": [
          "BillingSummary"
        ],
        "rulesApplied": [
          "billingSummaryClientFacing",
          "clientBillingAccess"
        ],
        "transactional": true,
        "steps": [
          "1. Load the BillingSummary aggregate by billingSummaryId via the BillingSummary port (getById). If not found, throw a validation error 'BillingSummary not found'.",
          "2. Validate the current status is 'draft' (rule: clientBillingAccess — only a draft billing summary can be shared). If status is already 'shared', throw a validation error with rule id 'clientBillingAccess': 'BillingSummary is already shared and cannot be shared again'.",
          "3. Set status to 'shared' (systemDefault), sharedAt to ctx.clock.now() (systemDefault), and updatedAt to ctx.clock.now() (systemDefault).",
          "4. Save the updated BillingSummary aggregate through the BillingSummary port inside a single transaction (ctx.data transaction wrapper).",
          "5. Return the updated BillingSummary projection with billingSummaryId, projectId, status, periodStart, periodEnd, laborCost, materialCost, changeOrderCost, totalCost, sharedAt, and updatedAt. The returned projection is client-facing (rule: billingSummaryClientFacing) — it exposes only summary cost fields (laborCost, materialCost, changeOrderCost, totalCost) and never internal cost-code detail."
        ],
        "outputShape": {
          "kind": "object",
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
              "required": true,
              "fieldRef": "BillingSummary.sharedAt"
            },
            {
              "name": "updatedAt",
              "type": "string",
              "required": true,
              "fieldRef": "BillingSummary.updatedAt"
            }
          ]
        }
      }
    ],
    "rulesApplied": [
      "billingSummaryClientFacing",
      "clientBillingAccess"
    ],
    "mdmRefs": []
  }
} as const;

export default shareBillingSummaryUsecase;

export const pipeline = [
  {
    "id": "shareBillingSummary__applicationUsecase",
    "type": "applicationUsecase",
    "outputPath": "_102045_/l1/buildFlowFsm/layer_2_application/usecases/shareBillingSummary.ts",
    "defPath": "_102045_/l1/buildFlowFsm/layer_2_application/usecases/shareBillingSummary.defs.ts",
    "dependsFiles": [
      "_102045_/l1/buildFlowFsm/layer_2_application/ports/billingSummaryRepository.d.ts",
      "_102045_/l1/buildFlowFsm/layer_3_domain/entities/billingSummary.d.ts"
    ],
    "dependsOn": [],
    "skills": [
      "_102021_/l2/agentChangeBackend/skills/architecture.md",
      "_102021_/l2/agentChangeBackend/skills/applicationUsecase.md",
      "_102034_.d.ts"
    ],
    "rulesApplied": [
      "billingSummaryClientFacing",
      "clientBillingAccess"
    ],
    "agent": "agentCbMaterialize"
  }
] as const;
