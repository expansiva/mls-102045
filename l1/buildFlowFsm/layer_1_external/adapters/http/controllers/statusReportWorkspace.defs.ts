/// <mls fileReference="_102045_/l1/buildFlowFsm/layer_1_external/adapters/http/controllers/statusReportWorkspace.defs.ts" enhancement="_blank"/>

export const statusReportWorkspaceController = {
  "schemaVersion": "2026-06-26",
  "artifactType": "httpController",
  "artifactId": "statusReportWorkspace",
  "moduleName": "buildFlowFsm",
  "status": "draft",
  "source": {
    "agentName": "agentCbHttpController",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "pageId": "statusReportWorkspace",
    "controllerName": "StatusReportWorkspaceController",
    "ownerKind": "workspace",
    "workspaceId": "statusReportWorkspace",
    "actors": [
      "projectManager"
    ],
    "allowedScopes": [
      "buildFlowFsm:projectManager"
    ],
    "handlers": [
      {
        "handlerName": "statusReportWorkspaceGenerateReportHandler",
        "command": "generateReport",
        "bffId": "generateReport",
        "route": "buildFlowFsm.statusReportWorkspace.generateReport",
        "kind": "command",
        "usecaseRef": "generateStatusReport",
        "usecaseRefs": [
          "generateStatusReport"
        ],
        "inputTypeName": "GenerateStatusReportInput",
        "inputContract": [
          {
            "inputId": "projectId",
            "fieldRef": "StatusReport.projectId",
            "required": true,
            "source": "selectedEntity",
            "description": "The project for which the status report is generated"
          },
          {
            "inputId": "reportPeriodStart",
            "fieldRef": "StatusReport.reportPeriodStart",
            "required": true,
            "source": "userInput",
            "description": "Start date of the reporting period covered by the status report"
          },
          {
            "inputId": "reportPeriodEnd",
            "fieldRef": "StatusReport.reportPeriodEnd",
            "required": true,
            "source": "userInput",
            "description": "End date of the reporting period covered by the status report"
          },
          {
            "inputId": "statusReportId",
            "fieldRef": "StatusReport.statusReportId",
            "required": true,
            "source": "systemDefault",
            "description": "System-generated primary identifier for the new status report"
          },
          {
            "inputId": "status",
            "fieldRef": "StatusReport.status",
            "required": true,
            "source": "systemDefault",
            "description": "Initial lifecycle status set to draft on generation"
          },
          {
            "inputId": "generatedAt",
            "fieldRef": "StatusReport.generatedAt",
            "required": true,
            "source": "systemDefault",
            "description": "Timestamp when the AI generated the initial report content"
          },
          {
            "inputId": "createdAt",
            "fieldRef": "StatusReport.createdAt",
            "required": true,
            "source": "systemDefault",
            "description": "Record creation timestamp"
          },
          {
            "inputId": "updatedAt",
            "fieldRef": "StatusReport.updatedAt",
            "required": true,
            "source": "systemDefault",
            "description": "Last update timestamp set at creation"
          }
        ],
        "projection": {
          "kind": "object",
          "arrayFieldName": null,
          "itemFields": [],
          "topFields": [
            {
              "name": "statusReportId",
              "operationId": "generateStatusReport",
              "path": [
                "statusReportId"
              ],
              "fromItems": false
            },
            {
              "name": "projectId",
              "operationId": "generateStatusReport",
              "path": [
                "projectId"
              ],
              "fromItems": false
            },
            {
              "name": "status",
              "operationId": "generateStatusReport",
              "path": [
                "status"
              ],
              "fromItems": false
            },
            {
              "name": "reportPeriodStart",
              "operationId": "generateStatusReport",
              "path": [
                "reportPeriodStart"
              ],
              "fromItems": false
            },
            {
              "name": "reportPeriodEnd",
              "operationId": "generateStatusReport",
              "path": [
                "reportPeriodEnd"
              ],
              "fromItems": false
            },
            {
              "name": "summary",
              "operationId": "generateStatusReport",
              "path": [
                "summary"
              ],
              "fromItems": false
            },
            {
              "name": "tasksOverview",
              "operationId": "generateStatusReport",
              "path": [
                "tasksOverview"
              ],
              "fromItems": false
            },
            {
              "name": "timeLogsOverview",
              "operationId": "generateStatusReport",
              "path": [
                "timeLogsOverview"
              ],
              "fromItems": false
            },
            {
              "name": "materialsOverview",
              "operationId": "generateStatusReport",
              "path": [
                "materialsOverview"
              ],
              "fromItems": false
            },
            {
              "name": "delayRiskAssessment",
              "operationId": "generateStatusReport",
              "path": [
                "delayRiskAssessment"
              ],
              "fromItems": false
            },
            {
              "name": "generatedAt",
              "operationId": "generateStatusReport",
              "path": [
                "generatedAt"
              ],
              "fromItems": false
            },
            {
              "name": "createdAt",
              "operationId": "generateStatusReport",
              "path": [
                "createdAt"
              ],
              "fromItems": false
            },
            {
              "name": "updatedAt",
              "operationId": "generateStatusReport",
              "path": [
                "updatedAt"
              ],
              "fromItems": false
            }
          ]
        },
        "optionalUses": []
      },
      {
        "handlerName": "statusReportWorkspaceUpdateReportContentHandler",
        "command": "updateReportContent",
        "bffId": "updateReportContent",
        "route": "buildFlowFsm.statusReportWorkspace.updateReportContent",
        "kind": "command",
        "usecaseRef": "updateStatusReport",
        "usecaseRefs": [
          "updateStatusReport"
        ],
        "inputTypeName": "UpdateStatusReportInput",
        "inputContract": [
          {
            "inputId": "statusReportId",
            "fieldRef": "StatusReport.statusReportId",
            "required": true,
            "source": "routeParam",
            "description": "Identifier of the status report being edited"
          },
          {
            "inputId": "summary",
            "fieldRef": "StatusReport.summary",
            "required": true,
            "source": "userInput",
            "description": "Edited narrative summary of overall project status for the period"
          },
          {
            "inputId": "tasksOverview",
            "fieldRef": "StatusReport.tasksOverview",
            "required": false,
            "source": "userInput",
            "description": "Edited overview of task progress derived from work tasks"
          },
          {
            "inputId": "timeLogsOverview",
            "fieldRef": "StatusReport.timeLogsOverview",
            "required": false,
            "source": "userInput",
            "description": "Edited overview of hours logged from time logs"
          },
          {
            "inputId": "materialsOverview",
            "fieldRef": "StatusReport.materialsOverview",
            "required": false,
            "source": "userInput",
            "description": "Edited overview of material consumption"
          },
          {
            "inputId": "delayRiskAssessment",
            "fieldRef": "StatusReport.delayRiskAssessment",
            "required": false,
            "source": "userInput",
            "description": "Edited assessment of delay risks for the period"
          },
          {
            "inputId": "pmNotes",
            "fieldRef": "StatusReport.pmNotes",
            "required": false,
            "source": "userInput",
            "description": "Notes or edits added by the project manager during review"
          },
          {
            "inputId": "updatedAt",
            "fieldRef": "StatusReport.updatedAt",
            "required": true,
            "source": "systemDefault",
            "description": "Timestamp when the content edits are saved"
          }
        ],
        "projection": {
          "kind": "object",
          "arrayFieldName": null,
          "itemFields": [],
          "topFields": [
            {
              "name": "statusReportId",
              "operationId": "updateStatusReport",
              "path": [
                "statusReportId"
              ],
              "fromItems": false
            },
            {
              "name": "projectId",
              "operationId": "updateStatusReport",
              "path": [
                "projectId"
              ],
              "fromItems": false
            },
            {
              "name": "status",
              "operationId": "updateStatusReport",
              "path": [
                "status"
              ],
              "fromItems": false
            },
            {
              "name": "reportPeriodStart",
              "operationId": "updateStatusReport",
              "path": [
                "reportPeriodStart"
              ],
              "fromItems": false
            },
            {
              "name": "reportPeriodEnd",
              "operationId": "updateStatusReport",
              "path": [
                "reportPeriodEnd"
              ],
              "fromItems": false
            },
            {
              "name": "summary",
              "operationId": "updateStatusReport",
              "path": [
                "summary"
              ],
              "fromItems": false
            },
            {
              "name": "tasksOverview",
              "operationId": "updateStatusReport",
              "path": [
                "tasksOverview"
              ],
              "fromItems": false
            },
            {
              "name": "timeLogsOverview",
              "operationId": "updateStatusReport",
              "path": [
                "timeLogsOverview"
              ],
              "fromItems": false
            },
            {
              "name": "materialsOverview",
              "operationId": "updateStatusReport",
              "path": [
                "materialsOverview"
              ],
              "fromItems": false
            },
            {
              "name": "delayRiskAssessment",
              "operationId": "updateStatusReport",
              "path": [
                "delayRiskAssessment"
              ],
              "fromItems": false
            },
            {
              "name": "pmNotes",
              "operationId": "updateStatusReport",
              "path": [
                "pmNotes"
              ],
              "fromItems": false
            },
            {
              "name": "updatedAt",
              "operationId": "updateStatusReport",
              "path": [
                "updatedAt"
              ],
              "fromItems": false
            }
          ]
        },
        "optionalUses": []
      },
      {
        "handlerName": "statusReportWorkspaceUpdateReportStatusHandler",
        "command": "updateReportStatus",
        "bffId": "updateReportStatus",
        "route": "buildFlowFsm.statusReportWorkspace.updateReportStatus",
        "kind": "command",
        "usecaseRef": "updateStatusReportStatus",
        "usecaseRefs": [
          "updateStatusReportStatus"
        ],
        "inputTypeName": "UpdateStatusReportStatusInput",
        "inputContract": [
          {
            "inputId": "statusReportId",
            "fieldRef": "StatusReport.statusReportId",
            "required": true,
            "source": "routeParam",
            "description": "Identifier of the status report whose lifecycle status is being updated"
          },
          {
            "inputId": "status",
            "fieldRef": "StatusReport.status",
            "required": true,
            "source": "userInput",
            "description": "Target lifecycle status for the report: reviewed after PM review, or shared when releasing to the client"
          },
          {
            "inputId": "updatedAt",
            "fieldRef": "StatusReport.updatedAt",
            "required": true,
            "source": "systemDefault",
            "description": "Server timestamp recorded when the status change is applied"
          },
          {
            "inputId": "reviewedAt",
            "fieldRef": "StatusReport.reviewedAt",
            "required": false,
            "source": "systemDefault",
            "description": "Server timestamp set when the report is moved to reviewed"
          },
          {
            "inputId": "sharedAt",
            "fieldRef": "StatusReport.sharedAt",
            "required": false,
            "source": "systemDefault",
            "description": "Server timestamp set when the report is moved to shared with the client"
          }
        ],
        "projection": {
          "kind": "object",
          "arrayFieldName": null,
          "itemFields": [],
          "topFields": [
            {
              "name": "statusReportId",
              "operationId": "updateStatusReportStatus",
              "path": [
                "statusReportId"
              ],
              "fromItems": false
            },
            {
              "name": "projectId",
              "operationId": "updateStatusReportStatus",
              "path": [
                "projectId"
              ],
              "fromItems": false
            },
            {
              "name": "status",
              "operationId": "updateStatusReportStatus",
              "path": [
                "status"
              ],
              "fromItems": false
            },
            {
              "name": "reviewedAt",
              "operationId": "updateStatusReportStatus",
              "path": [
                "reviewedAt"
              ],
              "fromItems": false
            },
            {
              "name": "sharedAt",
              "operationId": "updateStatusReportStatus",
              "path": [
                "sharedAt"
              ],
              "fromItems": false
            },
            {
              "name": "updatedAt",
              "operationId": "updateStatusReportStatus",
              "path": [
                "updatedAt"
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
        "key": "buildFlowFsm.statusReportWorkspace.generateReport",
        "handlerName": "statusReportWorkspaceGenerateReportHandler"
      },
      {
        "key": "buildFlowFsm.statusReportWorkspace.updateReportContent",
        "handlerName": "statusReportWorkspaceUpdateReportContentHandler"
      },
      {
        "key": "buildFlowFsm.statusReportWorkspace.updateReportStatus",
        "handlerName": "statusReportWorkspaceUpdateReportStatusHandler"
      }
    ]
  }
} as const;

export default statusReportWorkspaceController;

export const pipeline = [
  {
    "id": "statusReportWorkspace__httpController",
    "type": "httpController",
    "outputPath": "_102045_/l1/buildFlowFsm/layer_1_external/adapters/http/controllers/statusReportWorkspace.ts",
    "defPath": "_102045_/l1/buildFlowFsm/layer_1_external/adapters/http/controllers/statusReportWorkspace.defs.ts",
    "dependsFiles": [
      "_102045_/l1/buildFlowFsm/layer_2_application/usecases/generateStatusReport.d.ts",
      "_102045_/l4/buildFlowFsm/contracts/statusReportWorkspace.generateReport.defs.ts",
      "_102045_/l1/buildFlowFsm/layer_2_application/usecases/updateStatusReport.d.ts",
      "_102045_/l4/buildFlowFsm/contracts/statusReportWorkspace.updateReportContent.defs.ts",
      "_102045_/l1/buildFlowFsm/layer_2_application/usecases/updateStatusReportStatus.d.ts",
      "_102045_/l4/buildFlowFsm/contracts/statusReportWorkspace.updateReportStatus.defs.ts"
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
