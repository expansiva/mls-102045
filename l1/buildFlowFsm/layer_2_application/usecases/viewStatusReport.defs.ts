/// <mls fileReference="_102045_/l1/buildFlowFsm/layer_2_application/usecases/viewStatusReport.defs.ts" enhancement="_blank"/>

export const viewStatusReportUsecase = {
  "schemaVersion": "2026-06-26",
  "artifactType": "usecase",
  "artifactId": "viewStatusReport",
  "moduleName": "buildFlowFsm",
  "status": "draft",
  "source": {
    "agentName": "agentCbUsecase",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "usecaseId": "viewStatusReport",
    "ports": [
      "StatusReport",
      "Project",
      "MaterialUsage"
    ],
    "functions": [
      {
        "functionName": "viewStatusReport",
        "inputTypeName": "ViewStatusReportInput",
        "outputTypeName": "ViewStatusReportOutput",
        "input": [
          {
            "name": "statusReportId",
            "type": "string",
            "required": true,
            "ofEntity": "StatusReport",
            "description": "Identifier of the shared status report to open"
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
            "name": "projectName",
            "type": "string",
            "required": true,
            "ofEntity": "Project"
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
            "name": "generatedAt",
            "type": "string",
            "required": true,
            "ofEntity": "StatusReport"
          },
          {
            "name": "sharedAt",
            "type": "string",
            "required": false,
            "ofEntity": "StatusReport"
          }
        ],
        "ports": [
          "StatusReport",
          "Project"
        ],
        "rulesApplied": [
          "pmControlsStatusReportLifecycle"
        ],
        "transactional": false,
        "steps": [
          "1. Resolve clientId from ctx.sessionContext.actorId (actorSession context — never a public input).",
          "2. Load the StatusReport by statusReportId through the StatusReport port (getById). If not found, return an empty result (null) — the report does not exist or is not accessible.",
          "3. Apply rule pmControlsStatusReportLifecycle: verify report.status === 'shared'. If the status is 'draft' or 'reviewed', the report is not visible to the client — return an empty result (null) with a validation detail referencing pmControlsStatusReportLifecycle.",
          "4. Load the Project by report.projectId through the Project port (getById). If not found, return an empty result (null).",
          "5. Verify project.clientId === resolved clientId. If the project does not belong to the authenticated client, return an empty result (null) — the client has no access to this report.",
          "6. Map the StatusReport fields and Project.name (as projectName) into the output object and return it."
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
              "name": "projectName",
              "type": "string",
              "required": true,
              "fieldRef": "Project.name"
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
              "name": "generatedAt",
              "type": "string",
              "required": true,
              "fieldRef": "StatusReport.generatedAt"
            },
            {
              "name": "sharedAt",
              "type": "string",
              "required": false,
              "fieldRef": "StatusReport.sharedAt"
            }
          ]
        }
      }
    ],
    "mdmRefs": []
  }
} as const;

export default viewStatusReportUsecase;

export const pipeline = [
  {
    "id": "viewStatusReport__applicationUsecase",
    "type": "applicationUsecase",
    "outputPath": "_102045_/l1/buildFlowFsm/layer_2_application/usecases/viewStatusReport.ts",
    "defPath": "_102045_/l1/buildFlowFsm/layer_2_application/usecases/viewStatusReport.defs.ts",
    "dependsFiles": [
      "_102045_/l1/buildFlowFsm/layer_2_application/ports/statusReportRepository.d.ts",
      "_102045_/l1/buildFlowFsm/layer_2_application/ports/projectRepository.d.ts",
      "_102045_/l1/buildFlowFsm/layer_2_application/ports/materialUsageRepository.d.ts",
      "_102045_/l1/buildFlowFsm/layer_3_domain/entities/statusReport.d.ts",
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
