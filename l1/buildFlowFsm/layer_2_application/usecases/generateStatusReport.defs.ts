/// <mls fileReference="_102045_/l1/buildFlowFsm/layer_2_application/usecases/generateStatusReport.defs.ts" enhancement="_blank"/>

export const generateStatusReportUsecase = {
  "schemaVersion": "2026-06-26",
  "artifactType": "usecase",
  "artifactId": "generateStatusReport",
  "moduleName": "buildFlowFsm",
  "status": "draft",
  "source": {
    "agentName": "agentCbUsecase",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "usecaseId": "generateStatusReport",
    "ports": [
      "StatusReport",
      "Project",
      "WorkTask",
      "TimeLog",
      "MaterialUsage"
    ],
    "functions": [
      {
        "functionName": "generateStatusReport",
        "inputTypeName": "GenerateStatusReportInput",
        "outputTypeName": "GenerateStatusReportOutput",
        "input": [
          {
            "name": "projectId",
            "type": "string",
            "required": true,
            "ofEntity": "StatusReport",
            "description": "The project for which the status report is generated"
          },
          {
            "name": "reportPeriodStart",
            "type": "string",
            "required": true,
            "ofEntity": "StatusReport",
            "description": "Start date of the reporting period covered by the status report"
          },
          {
            "name": "reportPeriodEnd",
            "type": "string",
            "required": true,
            "ofEntity": "StatusReport",
            "description": "End date of the reporting period covered by the status report"
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
            "name": "generatedAt",
            "type": "string",
            "required": true,
            "ofEntity": "StatusReport"
          },
          {
            "name": "createdAt",
            "type": "string",
            "required": true,
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
          "StatusReport",
          "Project",
          "WorkTask"
        ],
        "rulesApplied": [
          "statusReportGenerationSource",
          "pmControlsStatusReportLifecycle"
        ],
        "transactional": true,
        "steps": [
          "1. Validate that reportPeriodStart is on or before reportPeriodEnd; throw validation error 'reportPeriodStart must be on or before reportPeriodEnd' if not.",
          "2. Load the Project via Project port (getById projectId). If not found, throw validation error 'Project not found for projectId'.",
          "3. Rule pmControlsStatusReportLifecycle: verify the actor session role is 'project_manager' (from ctx.sessionContext). If not, throw authorization error 'Only the project manager can generate status reports'.",
          "4. List WorkTask records for the project via WorkTask port (list by projectId). Filter tasks whose dueDate or completedAt falls within [reportPeriodStart, reportPeriodEnd].",
          "5. Rule statusReportGenerationSource: gather source data — collect all workTaskIds from the filtered tasks, then retrieve TimeLog entries (children of WorkTask, accessed through WorkTask port) and MaterialUsage entries (children of Project, accessed through Project port) whose logDate/usageDate falls within the reporting period. Only include records with status 'posted' (exclude voided).",
          "6. Build a structured data payload from the gathered WorkTask, TimeLog, and MaterialUsage records: task titles/statuses/due dates, total hours and labor cost from TimeLogs, material names/quantities/costs from MaterialUsage.",
          "7. Invoke the platform LLM proxy (ctx.llm or equivalent platform service) with the structured payload and project context to generate: summary, tasksOverview, timeLogsOverview, materialsOverview, and delayRiskAssessment text fields.",
          "8. Generate system defaults: statusReportId = ctx.idGenerator.uuid(), status = 'draft', generatedAt = ctx.clock.now(), createdAt = ctx.clock.now(), updatedAt = ctx.clock.now().",
          "9. Construct the StatusReport aggregate with all fields: statusReportId, projectId, status='draft', reportPeriodStart, reportPeriodEnd, summary (required, from LLM), tasksOverview, timeLogsOverview, materialsOverview, delayRiskAssessment (optional, from LLM), generatedAt, createdAt, updatedAt.",
          "10. Persist the StatusReport via StatusReport port (create) inside a single transaction (ctx.data transaction wrapper).",
          "11. Return the full StatusReport record with all output fields."
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
              "name": "generatedAt",
              "type": "string",
              "required": true,
              "fieldRef": "StatusReport.generatedAt"
            },
            {
              "name": "createdAt",
              "type": "string",
              "required": true,
              "fieldRef": "StatusReport.createdAt"
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

export default generateStatusReportUsecase;

export const pipeline = [
  {
    "id": "generateStatusReport__applicationUsecase",
    "type": "applicationUsecase",
    "outputPath": "_102045_/l1/buildFlowFsm/layer_2_application/usecases/generateStatusReport.ts",
    "defPath": "_102045_/l1/buildFlowFsm/layer_2_application/usecases/generateStatusReport.defs.ts",
    "dependsFiles": [
      "_102045_/l1/buildFlowFsm/layer_2_application/ports/statusReportRepository.d.ts",
      "_102045_/l1/buildFlowFsm/layer_2_application/ports/projectRepository.d.ts",
      "_102045_/l1/buildFlowFsm/layer_2_application/ports/workTaskRepository.d.ts",
      "_102045_/l1/buildFlowFsm/layer_2_application/ports/timeLogRepository.d.ts",
      "_102045_/l1/buildFlowFsm/layer_2_application/ports/materialUsageRepository.d.ts",
      "_102045_/l1/buildFlowFsm/layer_3_domain/entities/statusReport.d.ts",
      "_102045_/l1/buildFlowFsm/layer_3_domain/entities/project.d.ts",
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
