/// <mls fileReference="_102045_/l1/buildFlowFsm/layer_2_application/usecases/viewBillingSummary.defs.ts" enhancement="_blank"/>

export const viewBillingSummaryUsecase = {
  "schemaVersion": "2026-06-26",
  "artifactType": "usecase",
  "artifactId": "viewBillingSummary",
  "moduleName": "buildFlowFsm",
  "status": "draft",
  "source": {
    "agentName": "agentCbUsecase",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "usecaseId": "viewBillingSummary",
    "ports": [
      "BillingSummary",
      "Project",
      "MaterialUsage"
    ],
    "functions": [
      {
        "functionName": "viewBillingSummary",
        "inputTypeName": "ViewBillingSummaryInput",
        "outputTypeName": "ViewBillingSummaryOutput",
        "input": [
          {
            "name": "billingSummaryId",
            "type": "string",
            "required": true,
            "ofEntity": "BillingSummary",
            "description": "Identifier of the billing summary the client opens to review"
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
            "name": "projectName",
            "type": "string",
            "required": true,
            "ofEntity": "Project"
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
            "required": false,
            "ofEntity": "BillingSummary"
          }
        ],
        "ports": [
          "BillingSummary",
          "Project"
        ],
        "rulesApplied": [
          "onlyApprovedChangeOrdersAffectCosting",
          "billingSummaryClientFacing",
          "clientBillingAccess"
        ],
        "transactional": false,
        "steps": [
          "1. Resolve clientId from ctx.sessionContext.actorId (actorSession) — this is the authenticated client identity, never sent by the caller.",
          "2. Load the BillingSummary by billingSummaryId via the BillingSummary port (getById). If not found, return a not-found error.",
          "3. Apply rule 'billingSummaryClientFacing': check that summary.status === 'shared'. If status is 'draft', reject with a validation error (billingSummaryClientFacing: summary is not yet shared with the client).",
          "4. Load the related Project by summary.projectId via the Project port (getById). If not found, return a not-found error.",
          "5. Apply rule 'clientBillingAccess': verify that project.clientId === resolved clientId. If they do not match, reject with an authorization error (clientBillingAccess: billing summary does not belong to the authenticated client's project).",
          "6. Apply rule 'onlyApprovedChangeOrdersAffectCosting': the stored changeOrderCost on the BillingSummary already reflects only approved change orders (enforced at write time). No re-computation is needed here; the value is returned as-is.",
          "7. Assemble the client-facing output projection: billingSummaryId, projectId, projectName (from Project.name), status, periodStart, periodEnd, laborCost, materialCost, changeOrderCost, totalCost, sharedAt. Do NOT expose any internal material cost-code detail or draft-only fields (rule 'billingSummaryClientFacing').",
          "8. Return the assembled object. This operation is read-only — no aggregate mutation, no event writes."
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
            }
          ]
        }
      }
    ],
    "mdmRefs": []
  }
} as const;

export default viewBillingSummaryUsecase;

export const pipeline = [
  {
    "id": "viewBillingSummary__applicationUsecase",
    "type": "applicationUsecase",
    "outputPath": "_102045_/l1/buildFlowFsm/layer_2_application/usecases/viewBillingSummary.ts",
    "defPath": "_102045_/l1/buildFlowFsm/layer_2_application/usecases/viewBillingSummary.defs.ts",
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
