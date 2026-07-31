/// <mls fileReference="_102045_/l1/buildFlowFsm/layer_2_application/usecases/viewJobCostSummary.defs.ts" enhancement="_blank"/>

export const viewJobCostSummaryUsecase = {
  "schemaVersion": "2026-06-26",
  "artifactType": "usecase",
  "artifactId": "viewJobCostSummary",
  "moduleName": "buildFlowFsm",
  "status": "draft",
  "source": {
    "agentName": "agentCbUsecase",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "usecaseId": "viewJobCostSummary",
    "ports": [
      "Project",
      "WorkTask",
      "ChangeOrder",
      "TimeLog",
      "MaterialUsage"
    ],
    "functions": [
      {
        "functionName": "viewJobCostSummary",
        "inputTypeName": "ViewJobCostSummaryInput",
        "outputTypeName": "JobCostSummary",
        "input": [
          {
            "name": "projectId",
            "type": "string",
            "required": true,
            "ofEntity": "Project",
            "description": "Identifier of the project whose job cost summary is displayed"
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
            "name": "clientName",
            "type": "string",
            "required": true,
            "ofEntity": "Client"
          },
          {
            "name": "budget",
            "type": "number",
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
            "name": "laborCost",
            "type": "number",
            "required": true
          },
          {
            "name": "materialCost",
            "type": "number",
            "required": true
          },
          {
            "name": "changeOrderCost",
            "type": "number",
            "required": true
          },
          {
            "name": "totalCost",
            "type": "number",
            "required": true
          },
          {
            "name": "budgetVariance",
            "type": "number",
            "required": true
          }
        ],
        "ports": [
          "Project",
          "WorkTask",
          "ChangeOrder"
        ],
        "rulesApplied": [
          "jobCostingRequiresBudgetAndSchedule"
        ],
        "transactional": false,
        "steps": [
          "1. Load the Project aggregate by projectId via the Project port (getById). If not found, throw a not-found error.",
          "2. Apply rule jobCostingRequiresBudgetAndSchedule: verify that project.budget is set (non-null and > 0) AND project.startDate and project.endDate are both set. If any is missing, throw a validation error with rule id 'jobCostingRequiresBudgetAndSchedule' — the job cost aggregation cannot be returned without budget and schedule dates.",
          "3. Fetch the Client master-data record via ctx.mdm.entity.get({ mdmId: project.clientId }) to obtain clientName. If the MDM record is not found, set clientName to null.",
          "4. Load all WorkTasks for the project via the WorkTask port (list by projectId). From each WorkTask's embedded TimeLog collection, collect every TimeLog whose status !== 'voided' and sum their laborCost fields to produce laborCost.",
          "5. From the loaded Project aggregate's embedded MaterialUsage collection, collect every MaterialUsage whose status !== 'voided' and compute sum(quantity * unitCost) to produce materialCost.",
          "6. Load all ChangeOrders for the project via the ChangeOrder port (list by projectId). Filter to those with status === 'approved' and sum their costAdjustment fields to produce changeOrderCost.",
          "7. Compute totalCost = laborCost + materialCost + changeOrderCost.",
          "8. Compute budgetVariance = project.budget - totalCost.",
          "9. Assemble and return the JobCostSummary object with all output fields: projectId, name, clientId, clientName, budget, status, startDate, endDate, laborCost, materialCost, changeOrderCost, totalCost, budgetVariance."
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
              "name": "clientName",
              "type": "string",
              "required": true,
              "fieldRef": "Client.name"
            },
            {
              "name": "budget",
              "type": "number",
              "required": true,
              "fieldRef": "Project.budget"
            },
            {
              "name": "status",
              "type": "string",
              "required": true,
              "fieldRef": "Project.status"
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
              "name": "laborCost",
              "type": "number",
              "required": true
            },
            {
              "name": "materialCost",
              "type": "number",
              "required": true
            },
            {
              "name": "changeOrderCost",
              "type": "number",
              "required": true
            },
            {
              "name": "totalCost",
              "type": "number",
              "required": true
            },
            {
              "name": "budgetVariance",
              "type": "number",
              "required": true
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

export default viewJobCostSummaryUsecase;

export const pipeline = [
  {
    "id": "viewJobCostSummary__applicationUsecase",
    "type": "applicationUsecase",
    "outputPath": "_102045_/l1/buildFlowFsm/layer_2_application/usecases/viewJobCostSummary.ts",
    "defPath": "_102045_/l1/buildFlowFsm/layer_2_application/usecases/viewJobCostSummary.defs.ts",
    "dependsFiles": [
      "_102045_/l1/buildFlowFsm/layer_2_application/ports/projectRepository.d.ts",
      "_102045_/l1/buildFlowFsm/layer_2_application/ports/workTaskRepository.d.ts",
      "_102045_/l1/buildFlowFsm/layer_2_application/ports/changeOrderRepository.d.ts",
      "_102045_/l1/buildFlowFsm/layer_2_application/ports/timeLogRepository.d.ts",
      "_102045_/l1/buildFlowFsm/layer_2_application/ports/materialUsageRepository.d.ts",
      "_102045_/l1/buildFlowFsm/layer_3_domain/entities/project.d.ts",
      "_102045_/l1/buildFlowFsm/layer_3_domain/entities/workTask.d.ts",
      "_102045_/l1/buildFlowFsm/layer_3_domain/entities/changeOrder.d.ts",
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
