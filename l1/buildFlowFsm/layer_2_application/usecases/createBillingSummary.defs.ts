/// <mls fileReference="_102045_/l1/buildFlowFsm/layer_2_application/usecases/createBillingSummary.defs.ts" enhancement="_blank"/>

export const createBillingSummaryUsecase = {
  "schemaVersion": "2026-06-26",
  "artifactType": "usecase",
  "artifactId": "createBillingSummary",
  "moduleName": "buildFlowFsm",
  "status": "draft",
  "source": {
    "agentName": "agentCbUsecase",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "usecaseId": "createBillingSummary",
    "ports": [
      "BillingSummary",
      "Project",
      "ChangeOrder",
      "WorkTask",
      "TimeLog",
      "MaterialUsage"
    ],
    "functions": [
      {
        "functionName": "createBillingSummary",
        "inputTypeName": "CreateBillingSummaryInput",
        "outputTypeName": "CreateBillingSummaryOutput",
        "input": [
          {
            "name": "projectId",
            "type": "string",
            "required": true,
            "ofEntity": "BillingSummary",
            "description": "Project for which the billing summary is compiled (route param)"
          },
          {
            "name": "periodStart",
            "type": "string",
            "required": true,
            "ofEntity": "BillingSummary",
            "description": "Start date of the billing period to include in the summary"
          },
          {
            "name": "periodEnd",
            "type": "string",
            "required": true,
            "ofEntity": "BillingSummary",
            "description": "End date of the billing period to include in the summary"
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
            "name": "createdAt",
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
          "BillingSummary",
          "Project",
          "ChangeOrder",
          "WorkTask"
        ],
        "rulesApplied": [
          "onlyApprovedChangeOrdersAffectCosting",
          "billingSummaryClientFacing"
        ],
        "transactional": true,
        "steps": [
          "1. Load the Project via ProjectPort.getById({ projectId }) to validate the project exists; throw a validation error if not found.",
          "2. Validate that periodStart <= periodEnd; throw a validation error with rule detail if the period is inverted.",
          "3. Load all WorkTasks for the project via WorkTaskPort.list({ projectId }) and collect their workTaskIds.",
          "4. For each WorkTask, read its embedded TimeLog collection; filter to TimeLogs where status !== 'voided' AND logDate >= periodStart AND logDate <= periodEnd; sum laborCost across all matching TimeLogs to produce laborCost.",
          "5. Read the MaterialUsage collection embedded in the Project aggregate; filter to records where status !== 'voided' AND usageDate >= periodStart AND usageDate <= periodEnd; for each record compute quantity * unitCost and sum to produce materialCost. Do NOT include costCode or any internal cost-code detail in the output (rule: billingSummaryClientFacing).",
          "6. Load all ChangeOrders for the project via ChangeOrderPort.list({ projectId }); apply rule onlyApprovedChangeOrdersAffectCosting — filter to ChangeOrders where status === 'approved' only; sum costAdjustment across approved change orders to produce changeOrderCost. Pending, draft, and rejected change orders are excluded.",
          "7. Compute totalCost = laborCost + materialCost + changeOrderCost.",
          "8. Generate billingSummaryId via ctx.idGenerator.uuid(), set createdAt and updatedAt to ctx.clock.now(), set status to 'draft', and leave sharedAt unset (null) since the summary is in draft status.",
          "9. Persist the new BillingSummary via BillingSummaryPort.create({ billingSummaryId, projectId, status: 'draft', periodStart, periodEnd, laborCost, materialCost, changeOrderCost, totalCost, sharedAt: null, createdAt, updatedAt }) inside a single transaction (ctx.data).",
          "10. Return the created BillingSummary projection: billingSummaryId, projectId, status, periodStart, periodEnd, laborCost, materialCost, changeOrderCost, totalCost, createdAt, updatedAt — excluding any internal cost-code detail per billingSummaryClientFacing rule."
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
      }
    ],
    "mdmRefs": []
  }
} as const;

export default createBillingSummaryUsecase;

export const pipeline = [
  {
    "id": "createBillingSummary__applicationUsecase",
    "type": "applicationUsecase",
    "outputPath": "_102045_/l1/buildFlowFsm/layer_2_application/usecases/createBillingSummary.ts",
    "defPath": "_102045_/l1/buildFlowFsm/layer_2_application/usecases/createBillingSummary.defs.ts",
    "dependsFiles": [
      "_102045_/l1/buildFlowFsm/layer_2_application/ports/billingSummaryRepository.d.ts",
      "_102045_/l1/buildFlowFsm/layer_2_application/ports/projectRepository.d.ts",
      "_102045_/l1/buildFlowFsm/layer_2_application/ports/changeOrderRepository.d.ts",
      "_102045_/l1/buildFlowFsm/layer_2_application/ports/workTaskRepository.d.ts",
      "_102045_/l1/buildFlowFsm/layer_2_application/ports/timeLogRepository.d.ts",
      "_102045_/l1/buildFlowFsm/layer_2_application/ports/materialUsageRepository.d.ts",
      "_102045_/l1/buildFlowFsm/layer_3_domain/entities/billingSummary.d.ts",
      "_102045_/l1/buildFlowFsm/layer_3_domain/entities/project.d.ts",
      "_102045_/l1/buildFlowFsm/layer_3_domain/entities/changeOrder.d.ts",
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
