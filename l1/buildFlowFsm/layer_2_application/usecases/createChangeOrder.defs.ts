/// <mls fileReference="_102045_/l1/buildFlowFsm/layer_2_application/usecases/createChangeOrder.defs.ts" enhancement="_blank"/>

export const createChangeOrderUsecase = {
  "schemaVersion": "2026-06-26",
  "artifactType": "usecase",
  "artifactId": "createChangeOrder",
  "moduleName": "buildFlowFsm",
  "status": "draft",
  "source": {
    "agentName": "agentCbUsecase",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "usecaseId": "createChangeOrder",
    "ports": [
      "ChangeOrder",
      "Project",
      "MaterialUsage"
    ],
    "functions": [
      {
        "functionName": "createChangeOrder",
        "inputTypeName": "CreateChangeOrderInput",
        "outputTypeName": "CreateChangeOrderOutput",
        "input": [
          {
            "name": "projectId",
            "type": "string",
            "required": true,
            "ofEntity": "ChangeOrder",
            "fieldRef": "ChangeOrder.projectId",
            "description": "Identifier of the active project the change order applies to"
          },
          {
            "name": "title",
            "type": "string",
            "required": true,
            "ofEntity": "ChangeOrder",
            "fieldRef": "ChangeOrder.title",
            "description": "Short summary title of the change order"
          },
          {
            "name": "description",
            "type": "string",
            "required": true,
            "ofEntity": "ChangeOrder",
            "fieldRef": "ChangeOrder.description",
            "description": "Detailed description of the scope, cost, or schedule impact being requested"
          },
          {
            "name": "impactType",
            "type": "string",
            "required": true,
            "ofEntity": "ChangeOrder",
            "fieldRef": "ChangeOrder.impactType",
            "description": "Primary category of impact: scope, cost, or schedule"
          },
          {
            "name": "costAdjustment",
            "type": "number",
            "required": true,
            "ofEntity": "ChangeOrder",
            "fieldRef": "ChangeOrder.costAdjustment",
            "description": "Monetary amount of the cost adjustment; positive for additions, negative for deductions"
          },
          {
            "name": "scheduleAdjustmentDays",
            "type": "number",
            "required": false,
            "ofEntity": "ChangeOrder",
            "fieldRef": "ChangeOrder.scheduleAdjustmentDays",
            "description": "Optional number of days added to or removed from the project schedule"
          }
        ],
        "output": [
          {
            "name": "changeOrderId",
            "type": "string",
            "required": true,
            "ofEntity": "ChangeOrder"
          },
          {
            "name": "projectId",
            "type": "string",
            "required": true,
            "ofEntity": "ChangeOrder"
          },
          {
            "name": "title",
            "type": "string",
            "required": true,
            "ofEntity": "ChangeOrder"
          },
          {
            "name": "description",
            "type": "string",
            "required": true,
            "ofEntity": "ChangeOrder"
          },
          {
            "name": "impactType",
            "type": "string",
            "required": true,
            "ofEntity": "ChangeOrder"
          },
          {
            "name": "costAdjustment",
            "type": "number",
            "required": true,
            "ofEntity": "ChangeOrder"
          },
          {
            "name": "scheduleAdjustmentDays",
            "type": "number",
            "required": false,
            "ofEntity": "ChangeOrder"
          },
          {
            "name": "status",
            "type": "string",
            "required": true,
            "ofEntity": "ChangeOrder"
          },
          {
            "name": "createdAt",
            "type": "string",
            "required": true,
            "ofEntity": "ChangeOrder"
          }
        ],
        "ports": [
          "ChangeOrder",
          "Project"
        ],
        "rulesApplied": [
          "operationsRequireActiveProject",
          "changeOrderDescriptionRequired"
        ],
        "transactional": true,
        "steps": [
          "1. Validate that description is non-empty and non-whitespace (rule: changeOrderDescriptionRequired); if empty, throw validation error with rule id 'changeOrderDescriptionRequired'.",
          "2. Validate that impactType is one of 'scope', 'cost', 'schedule'.",
          "3. Load the Project aggregate via Project port using projectId; if not found, throw a not-found error.",
          "4. Check that project.status === 'active' (rule: operationsRequireActiveProject); if not active, throw validation error with rule id 'operationsRequireActiveProject' and the actual project status.",
          "5. Generate changeOrderId via ctx.idGenerator.uuid().",
          "6. Set status to 'draft', createdAt and updatedAt to ctx.clock.now() (ISO string).",
          "7. Build the ChangeOrder entity with all provided fields plus system-generated changeOrderId, status='draft', createdAt, updatedAt.",
          "8. Persist the ChangeOrder via the ChangeOrder port inside a single transaction (ctx.data transaction wrapper).",
          "9. Return the created ChangeOrder projection: changeOrderId, projectId, title, description, impactType, costAdjustment, scheduleAdjustmentDays, status, createdAt."
        ],
        "outputShape": {
          "kind": "object",
          "fields": [
            {
              "name": "changeOrderId",
              "type": "string",
              "required": true,
              "fieldRef": "ChangeOrder.changeOrderId"
            },
            {
              "name": "projectId",
              "type": "string",
              "required": true,
              "fieldRef": "ChangeOrder.projectId"
            },
            {
              "name": "title",
              "type": "string",
              "required": true,
              "fieldRef": "ChangeOrder.title"
            },
            {
              "name": "description",
              "type": "string",
              "required": true,
              "fieldRef": "ChangeOrder.description"
            },
            {
              "name": "impactType",
              "type": "string",
              "required": true,
              "fieldRef": "ChangeOrder.impactType"
            },
            {
              "name": "costAdjustment",
              "type": "number",
              "required": true,
              "fieldRef": "ChangeOrder.costAdjustment"
            },
            {
              "name": "scheduleAdjustmentDays",
              "type": "number",
              "required": false,
              "fieldRef": "ChangeOrder.scheduleAdjustmentDays"
            },
            {
              "name": "status",
              "type": "string",
              "required": true,
              "fieldRef": "ChangeOrder.status"
            },
            {
              "name": "createdAt",
              "type": "string",
              "required": true,
              "fieldRef": "ChangeOrder.createdAt"
            }
          ]
        }
      }
    ],
    "mdmRefs": []
  }
} as const;

export default createChangeOrderUsecase;

export const pipeline = [
  {
    "id": "createChangeOrder__applicationUsecase",
    "type": "applicationUsecase",
    "outputPath": "_102045_/l1/buildFlowFsm/layer_2_application/usecases/createChangeOrder.ts",
    "defPath": "_102045_/l1/buildFlowFsm/layer_2_application/usecases/createChangeOrder.defs.ts",
    "dependsFiles": [
      "_102045_/l1/buildFlowFsm/layer_2_application/ports/changeOrderRepository.d.ts",
      "_102045_/l1/buildFlowFsm/layer_2_application/ports/projectRepository.d.ts",
      "_102045_/l1/buildFlowFsm/layer_2_application/ports/materialUsageRepository.d.ts",
      "_102045_/l1/buildFlowFsm/layer_3_domain/entities/changeOrder.d.ts",
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
