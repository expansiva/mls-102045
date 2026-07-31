/// <mls fileReference="_102045_/l1/buildFlowFsm/layer_1_external/adapters/http/controllers/clientStatusWorkspace.defs.ts" enhancement="_blank"/>

export const clientStatusWorkspaceController = {
  "schemaVersion": "2026-06-26",
  "artifactType": "httpController",
  "artifactId": "clientStatusWorkspace",
  "moduleName": "buildFlowFsm",
  "status": "draft",
  "source": {
    "agentName": "agentCbHttpController",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "pageId": "clientStatusWorkspace",
    "controllerName": "ClientStatusWorkspaceController",
    "ownerKind": "workspace",
    "workspaceId": "clientStatusWorkspace",
    "actors": [
      "client"
    ],
    "allowedScopes": [
      "buildFlowFsm:client"
    ],
    "handlers": [
      {
        "handlerName": "clientStatusWorkspaceViewStatusReportHandler",
        "command": "viewStatusReport",
        "bffId": "viewStatusReport",
        "route": "buildFlowFsm.clientStatusWorkspace.viewStatusReport",
        "kind": "query",
        "usecaseRef": "viewStatusReport",
        "usecaseRefs": [
          "viewStatusReport"
        ],
        "inputTypeName": "ViewStatusReportInput",
        "inputContract": [
          {
            "inputId": "statusReportId",
            "fieldRef": "StatusReport.statusReportId",
            "required": true,
            "source": "routeParam",
            "description": "Identifier of the shared status report to open"
          },
          {
            "inputId": "clientId",
            "fieldRef": "Client.clientId",
            "required": true,
            "source": "actorSession",
            "description": "Authenticated client viewing the report; used to enforce project ownership"
          }
        ],
        "projection": {
          "kind": "object",
          "arrayFieldName": null,
          "itemFields": [],
          "topFields": [
            {
              "name": "statusReportId",
              "operationId": "viewStatusReport",
              "path": [
                "statusReportId"
              ],
              "fromItems": false
            },
            {
              "name": "projectId",
              "operationId": "viewStatusReport",
              "path": [
                "projectId"
              ],
              "fromItems": false
            },
            {
              "name": "projectName",
              "operationId": "viewStatusReport",
              "path": [
                "projectName"
              ],
              "fromItems": false
            },
            {
              "name": "status",
              "operationId": "viewStatusReport",
              "path": [
                "status"
              ],
              "fromItems": false
            },
            {
              "name": "reportPeriodStart",
              "operationId": "viewStatusReport",
              "path": [
                "reportPeriodStart"
              ],
              "fromItems": false
            },
            {
              "name": "reportPeriodEnd",
              "operationId": "viewStatusReport",
              "path": [
                "reportPeriodEnd"
              ],
              "fromItems": false
            },
            {
              "name": "summary",
              "operationId": "viewStatusReport",
              "path": [
                "summary"
              ],
              "fromItems": false
            },
            {
              "name": "tasksOverview",
              "operationId": "viewStatusReport",
              "path": [
                "tasksOverview"
              ],
              "fromItems": false
            },
            {
              "name": "timeLogsOverview",
              "operationId": "viewStatusReport",
              "path": [
                "timeLogsOverview"
              ],
              "fromItems": false
            },
            {
              "name": "materialsOverview",
              "operationId": "viewStatusReport",
              "path": [
                "materialsOverview"
              ],
              "fromItems": false
            },
            {
              "name": "delayRiskAssessment",
              "operationId": "viewStatusReport",
              "path": [
                "delayRiskAssessment"
              ],
              "fromItems": false
            },
            {
              "name": "pmNotes",
              "operationId": "viewStatusReport",
              "path": [
                "pmNotes"
              ],
              "fromItems": false
            },
            {
              "name": "generatedAt",
              "operationId": "viewStatusReport",
              "path": [
                "generatedAt"
              ],
              "fromItems": false
            },
            {
              "name": "sharedAt",
              "operationId": "viewStatusReport",
              "path": [
                "sharedAt"
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
        "key": "buildFlowFsm.clientStatusWorkspace.viewStatusReport",
        "handlerName": "clientStatusWorkspaceViewStatusReportHandler"
      }
    ]
  }
} as const;

export default clientStatusWorkspaceController;

export const pipeline = [
  {
    "id": "clientStatusWorkspace__httpController",
    "type": "httpController",
    "outputPath": "_102045_/l1/buildFlowFsm/layer_1_external/adapters/http/controllers/clientStatusWorkspace.ts",
    "defPath": "_102045_/l1/buildFlowFsm/layer_1_external/adapters/http/controllers/clientStatusWorkspace.defs.ts",
    "dependsFiles": [
      "_102045_/l1/buildFlowFsm/layer_2_application/usecases/viewStatusReport.d.ts",
      "_102045_/l4/buildFlowFsm/contracts/clientStatusWorkspace.viewStatusReport.defs.ts"
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
