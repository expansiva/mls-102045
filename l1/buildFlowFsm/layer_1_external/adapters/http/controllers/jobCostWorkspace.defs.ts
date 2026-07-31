/// <mls fileReference="_102045_/l1/buildFlowFsm/layer_1_external/adapters/http/controllers/jobCostWorkspace.defs.ts" enhancement="_blank"/>

export const jobCostWorkspaceController = {
  "schemaVersion": "2026-06-26",
  "artifactType": "httpController",
  "artifactId": "jobCostWorkspace",
  "moduleName": "buildFlowFsm",
  "status": "draft",
  "source": {
    "agentName": "agentCbHttpController",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "pageId": "jobCostWorkspace",
    "controllerName": "JobCostWorkspaceController",
    "ownerKind": "workspace",
    "workspaceId": "jobCostWorkspace",
    "actors": [
      "billingStaff"
    ],
    "allowedScopes": [
      "buildFlowFsm:billingStaff"
    ],
    "handlers": [
      {
        "handlerName": "jobCostWorkspaceViewJobCostSummaryHandler",
        "command": "viewJobCostSummary",
        "bffId": "viewJobCostSummary",
        "route": "buildFlowFsm.jobCostWorkspace.viewJobCostSummary",
        "kind": "query",
        "usecaseRef": "viewJobCostSummary",
        "usecaseRefs": [
          "viewJobCostSummary"
        ],
        "inputTypeName": "ViewJobCostSummaryInput",
        "inputContract": [
          {
            "inputId": "projectId",
            "fieldRef": "Project.projectId",
            "required": true,
            "source": "routeParam",
            "description": "Identifier of the project whose job cost summary is displayed"
          }
        ],
        "projection": {
          "kind": "object",
          "arrayFieldName": null,
          "itemFields": [],
          "topFields": [
            {
              "name": "projectId",
              "operationId": "viewJobCostSummary",
              "path": [
                "projectId"
              ],
              "fromItems": false
            },
            {
              "name": "name",
              "operationId": "viewJobCostSummary",
              "path": [
                "name"
              ],
              "fromItems": false
            },
            {
              "name": "clientId",
              "operationId": "viewJobCostSummary",
              "path": [
                "clientId"
              ],
              "fromItems": false
            },
            {
              "name": "clientName",
              "operationId": "viewJobCostSummary",
              "path": [
                "clientName"
              ],
              "fromItems": false
            },
            {
              "name": "budget",
              "operationId": "viewJobCostSummary",
              "path": [
                "budget"
              ],
              "fromItems": false
            },
            {
              "name": "status",
              "operationId": "viewJobCostSummary",
              "path": [
                "status"
              ],
              "fromItems": false
            },
            {
              "name": "startDate",
              "operationId": "viewJobCostSummary",
              "path": [
                "startDate"
              ],
              "fromItems": false
            },
            {
              "name": "endDate",
              "operationId": "viewJobCostSummary",
              "path": [
                "endDate"
              ],
              "fromItems": false
            },
            {
              "name": "laborCost",
              "operationId": "viewJobCostSummary",
              "path": [
                "laborCost"
              ],
              "fromItems": false
            },
            {
              "name": "materialCost",
              "operationId": "viewJobCostSummary",
              "path": [
                "materialCost"
              ],
              "fromItems": false
            },
            {
              "name": "changeOrderCost",
              "operationId": "viewJobCostSummary",
              "path": [
                "changeOrderCost"
              ],
              "fromItems": false
            },
            {
              "name": "totalCost",
              "operationId": "viewJobCostSummary",
              "path": [
                "totalCost"
              ],
              "fromItems": false
            },
            {
              "name": "budgetVariance",
              "operationId": "viewJobCostSummary",
              "path": [
                "budgetVariance"
              ],
              "fromItems": false
            }
          ]
        },
        "optionalUses": []
      }
    ],
    "routes": [
      {
        "key": "buildFlowFsm.jobCostWorkspace.viewJobCostSummary",
        "handlerName": "jobCostWorkspaceViewJobCostSummaryHandler"
      }
    ]
  }
} as const;

export default jobCostWorkspaceController;

export const pipeline = [
  {
    "id": "jobCostWorkspace__httpController",
    "type": "httpController",
    "outputPath": "_102045_/l1/buildFlowFsm/layer_1_external/adapters/http/controllers/jobCostWorkspace.ts",
    "defPath": "_102045_/l1/buildFlowFsm/layer_1_external/adapters/http/controllers/jobCostWorkspace.defs.ts",
    "dependsFiles": [
      "_102045_/l1/buildFlowFsm/layer_2_application/usecases/viewJobCostSummary.d.ts",
      "_102045_/l4/buildFlowFsm/contracts/jobCostWorkspace.viewJobCostSummary.defs.ts"
    ],
    "dependsOn": [],
    "skills": [
      "_102021_/l2/agentChangeBackend/skills/architecture.md",
      "_102021_/l2/agentChangeBackend/skills/httpController.md",
      "_102034_.d.ts"
    ],
    "agent": "agentCbMaterialize"
  }
] as const;
