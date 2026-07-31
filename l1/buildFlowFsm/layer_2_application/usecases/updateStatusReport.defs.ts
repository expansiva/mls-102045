/// <mls fileReference="_102045_/l1/buildFlowFsm/layer_2_application/usecases/updateStatusReport.defs.ts" enhancement="_blank"/>

export const updateStatusReportUsecase = {
  "schemaVersion": "2026-06-26",
  "artifactType": "usecase",
  "artifactId": "updateStatusReport",
  "moduleName": "buildFlowFsm",
  "status": "draft",
  "source": {
    "agentName": "agentCbUsecase",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "usecaseId": "updateStatusReport",
    "ports": [
      "StatusReport"
    ],
    "functions": [
      {
        "functionName": "updateStatusReport",
        "inputTypeName": "UpdateStatusReportInput",
        "outputTypeName": "UpdateStatusReportOutput",
        "input": [
          {
            "name": "statusReportId",
            "type": "string",
            "required": true,
            "ofEntity": "StatusReport",
            "fieldRef": "StatusReport.statusReportId",
            "description": "Identifier of the status report being edited"
          },
          {
            "name": "summary",
            "type": "string",
            "required": true,
            "ofEntity": "StatusReport",
            "fieldRef": "StatusReport.summary",
            "description": "Edited narrative summary of overall project status for the period"
          },
          {
            "name": "tasksOverview",
            "type": "string",
            "required": false,
            "ofEntity": "StatusReport",
            "fieldRef": "StatusReport.tasksOverview",
            "description": "Edited overview of task progress derived from work tasks"
          },
          {
            "name": "timeLogsOverview",
            "type": "string",
            "required": false,
            "ofEntity": "StatusReport",
            "fieldRef": "StatusReport.timeLogsOverview",
            "description": "Edited overview of hours logged from time logs"
          },
          {
            "name": "materialsOverview",
            "type": "string",
            "required": false,
            "ofEntity": "StatusReport",
            "fieldRef": "StatusReport.materialsOverview",
            "description": "Edited overview of material consumption"
          },
          {
            "name": "delayRiskAssessment",
            "type": "string",
            "required": false,
            "ofEntity": "StatusReport",
            "fieldRef": "StatusReport.delayRiskAssessment",
            "description": "Edited assessment of delay risks for the period"
          },
          {
            "name": "pmNotes",
            "type": "string",
            "required": false,
            "ofEntity": "StatusReport",
            "fieldRef": "StatusReport.pmNotes",
            "description": "Notes or edits added by the project manager during review"
          }
        ],
        "output": [
          {
            "name": "statusReportId",
            "type": "string",
            "required": true,
            "ofEntity": "StatusReport"
          },
          {
            "name": "projectId",
            "type": "string",
            "required": true,
            "ofEntity": "StatusReport"
          },
          {
            "name": "status",
            "type": "string",
            "required": true,
            "ofEntity": "StatusReport"
          },
          {
            "name": "reportPeriodStart",
            "type": "string",
            "required": true,
            "ofEntity": "StatusReport"
          },
          {
            "name": "reportPeriodEnd",
            "type": "string",
            "required": true,
            "ofEntity": "StatusReport"
          },
          {
            "name": "summary",
            "type": "string",
            "required": true,
            "ofEntity": "StatusReport"
          },
          {
            "name": "tasksOverview",
            "type": "string",
            "required": false,
            "ofEntity": "StatusReport"
          },
          {
            "name": "timeLogsOverview",
            "type": "string",
            "required": false,
            "ofEntity": "StatusReport"
          },
          {
            "name": "materialsOverview",
            "type": "string",
            "required": false,
            "ofEntity": "StatusReport"
          },
          {
            "name": "delayRiskAssessment",
            "type": "string",
            "required": false,
            "ofEntity": "StatusReport"
          },
          {
            "name": "pmNotes",
            "type": "string",
            "required": false,
            "ofEntity": "StatusReport"
          },
          {
            "name": "updatedAt",
            "type": "string",
            "required": true,
            "ofEntity": "StatusReport"
          }
        ],
        "ports": [
          "StatusReport"
        ],
        "rulesApplied": [
          "pmControlsStatusReportLifecycle"
        ],
        "transactional": true,
        "steps": [
          "1. Load the StatusReport aggregate by statusReportId through the StatusReport port (getById). If not found, throw a validation error 'Status report not found'.",
          "2. Apply rule pmControlsStatusReportLifecycle: verify the report status is not 'shared' — only reports in 'draft' or 'reviewed' status may be edited. If status is 'shared', throw validation error 'Cannot edit a status report that has already been shared with the client (rule: pmControlsStatusReportLifecycle).'",
          "3. Apply the submitted content edits to the loaded aggregate: set summary (required), and optionally tasksOverview, timeLogsOverview, materialsOverview, delayRiskAssessment, and pmNotes when provided. Do NOT change the status field or any lifecycle timestamps (generatedAt, reviewedAt, sharedAt) — this operation only updates narrative content.",
          "4. Set updatedAt to ctx.clock.now() (systemDefault resolution — the server stamps the save time; the client never sends this value).",
          "5. Save the mutated StatusReport aggregate through the StatusReport port inside the transaction.",
          "6. Return the updated aggregate fields: statusReportId, projectId, status, reportPeriodStart, reportPeriodEnd, summary, tasksOverview, timeLogsOverview, materialsOverview, delayRiskAssessment, pmNotes, and updatedAt."
        ],
        "outputShape": {
          "kind": "object",
          "fields": [
            {
              "name": "statusReportId",
              "type": "string",
              "required": true,
              "fieldRef": "StatusReport.statusReportId"
            },
            {
              "name": "projectId",
              "type": "string",
              "required": true,
              "fieldRef": "StatusReport.projectId"
            },
            {
              "name": "status",
              "type": "string",
              "required": true,
              "fieldRef": "StatusReport.status"
            },
            {
              "name": "reportPeriodStart",
              "type": "string",
              "required": true,
              "fieldRef": "StatusReport.reportPeriodStart"
            },
            {
              "name": "reportPeriodEnd",
              "type": "string",
              "required": true,
              "fieldRef": "StatusReport.reportPeriodEnd"
            },
            {
              "name": "summary",
              "type": "string",
              "required": true,
              "fieldRef": "StatusReport.summary"
            },
            {
              "name": "tasksOverview",
              "type": "string",
              "required": false,
              "fieldRef": "StatusReport.tasksOverview"
            },
            {
              "name": "timeLogsOverview",
              "type": "string",
              "required": false,
              "fieldRef": "StatusReport.timeLogsOverview"
            },
            {
              "name": "materialsOverview",
              "type": "string",
              "required": false,
              "fieldRef": "StatusReport.materialsOverview"
            },
            {
              "name": "delayRiskAssessment",
              "type": "string",
              "required": false,
              "fieldRef": "StatusReport.delayRiskAssessment"
            },
            {
              "name": "pmNotes",
              "type": "string",
              "required": false,
              "fieldRef": "StatusReport.pmNotes"
            },
            {
              "name": "updatedAt",
              "type": "string",
              "required": true,
              "fieldRef": "StatusReport.updatedAt"
            }
          ]
        }
      }
    ],
    "mdmRefs": []
  }
} as const;

export default updateStatusReportUsecase;

export const pipeline = [
  {
    "id": "updateStatusReport__applicationUsecase",
    "type": "applicationUsecase",
    "outputPath": "_102045_/l1/buildFlowFsm/layer_2_application/usecases/updateStatusReport.ts",
    "defPath": "_102045_/l1/buildFlowFsm/layer_2_application/usecases/updateStatusReport.defs.ts",
    "dependsFiles": [
      "_102045_/l1/buildFlowFsm/layer_2_application/ports/statusReportRepository.d.ts",
      "_102045_/l1/buildFlowFsm/layer_3_domain/entities/statusReport.d.ts"
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
