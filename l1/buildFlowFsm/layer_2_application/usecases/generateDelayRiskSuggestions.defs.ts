/// <mls fileReference="_102045_/l1/buildFlowFsm/layer_2_application/usecases/generateDelayRiskSuggestions.defs.ts" enhancement="_blank"/>

export const generateDelayRiskSuggestionsUsecase = {
  "schemaVersion": "2026-06-26",
  "artifactType": "usecase",
  "artifactId": "generateDelayRiskSuggestions",
  "moduleName": "buildFlowFsm",
  "status": "draft",
  "source": {
    "agentName": "agentCbUsecase",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "usecaseId": "generateDelayRiskSuggestions",
    "ports": [
      "StatusReport",
      "WorkTask",
      "Project",
      "TimeLog",
      "MaterialUsage"
    ],
    "functions": [
      {
        "functionName": "generateDelayRiskSuggestions",
        "inputTypeName": "GenerateDelayRiskSuggestionsInput",
        "outputTypeName": "GenerateDelayRiskSuggestionsOutput",
        "input": [
          {
            "name": "statusReportId",
            "type": "string",
            "required": true,
            "ofEntity": "DelayRiskSuggestion",
            "fieldRef": "DelayRiskSuggestion.statusReportId",
            "description": "Status report for which AI delay-risk suggestions will be generated"
          }
        ],
        "output": [
          {
            "name": "delayRiskSuggestionId",
            "type": "string",
            "required": true,
            "ofEntity": "DelayRiskSuggestion"
          },
          {
            "name": "statusReportId",
            "type": "string",
            "required": true,
            "ofEntity": "DelayRiskSuggestion"
          },
          {
            "name": "workTaskId",
            "type": "string",
            "required": true,
            "ofEntity": "DelayRiskSuggestion"
          },
          {
            "name": "riskLevel",
            "type": "string",
            "required": true,
            "ofEntity": "DelayRiskSuggestion"
          },
          {
            "name": "reason",
            "type": "string",
            "required": true,
            "ofEntity": "DelayRiskSuggestion"
          },
          {
            "name": "suggestedAction",
            "type": "string",
            "required": false,
            "ofEntity": "DelayRiskSuggestion"
          },
          {
            "name": "acknowledged",
            "type": "boolean",
            "required": true,
            "ofEntity": "DelayRiskSuggestion"
          },
          {
            "name": "createdAt",
            "type": "string",
            "required": true,
            "ofEntity": "DelayRiskSuggestion"
          }
        ],
        "ports": [
          "StatusReport",
          "WorkTask",
          "Project"
        ],
        "rulesApplied": [
          "delayRiskSuggestionsAdvisory"
        ],
        "transactional": true,
        "steps": [
          "1. Load the StatusReport by statusReportId via the StatusReport port (getById). If not found, throw a validation error 'Status report not found'.",
          "2. Extract projectId from the loaded StatusReport.",
          "3. Load the Project by projectId via the Project port (getById) to obtain project context (name, startDate, endDate, status).",
          "4. Load all WorkTasks belonging to the same project via the WorkTask port (list by projectId). Each WorkTask aggregate includes its embedded TimeLog collection.",
          "5. Load MaterialUsage records for the project via the Project port (the Project aggregate embeds MaterialUsage as a child collection).",
          "6. For each WorkTask, perform delay-risk analysis: (a) If task status is 'assigned' and dueDate is within 3 days of current date or past due, flag as high risk; (b) If task status is 'inProgress' and dueDate is within 7 days or past due, flag as medium risk; (c) If accumulated hoursWorked from posted TimeLogs suggest the task is behind schedule (e.g., hours logged exceed estimated budget without completion), flag accordingly; (d) If MaterialUsage shows voided or missing critical materials near the task due date, flag as risk factor; (e) Combine signals to determine final riskLevel (low, medium, or high).",
          "7. Apply rule delayRiskSuggestionsAdvisory: suggestions are advisory only — no WorkTask status or any other entity is modified. Only DelayRiskSuggestion records are created.",
          "8. For each flagged task, build a DelayRiskSuggestion: assign delayRiskSuggestionId via ctx.idGenerator.uuid(), set statusReportId to the input statusReportId, set workTaskId to the task's id, set riskLevel (low|medium|high), write a non-empty reason string summarizing the risk factors, optionally include suggestedAction with a recommended mitigation, set acknowledged = false, set createdAt and updatedAt to ctx.clock.now().",
          "9. Validate each suggestion: riskLevel must be one of 'low', 'medium', 'high'; reason must be non-empty; acknowledged must be false. If any validation fails, throw a validation error with the rule id 'delayRiskSuggestionsAdvisory'.",
          "10. Persist all generated DelayRiskSuggestion records by embedding them into the parent StatusReport aggregate's delayRiskSuggestions collection and saving via the StatusReport port, all inside a single transaction (ctx.data transaction wrapper).",
          "11. Return the list of created suggestions as the output array with all fields: delayRiskSuggestionId, statusReportId, workTaskId, riskLevel, reason, suggestedAction, acknowledged, createdAt."
        ],
        "outputShape": {
          "kind": "list",
          "fields": [
            {
              "name": "delayRiskSuggestionId",
              "type": "string",
              "required": true,
              "fieldRef": "DelayRiskSuggestion.delayRiskSuggestionId"
            },
            {
              "name": "statusReportId",
              "type": "string",
              "required": true,
              "fieldRef": "DelayRiskSuggestion.statusReportId"
            },
            {
              "name": "workTaskId",
              "type": "string",
              "required": true,
              "fieldRef": "DelayRiskSuggestion.workTaskId"
            },
            {
              "name": "riskLevel",
              "type": "string",
              "required": true,
              "fieldRef": "DelayRiskSuggestion.riskLevel"
            },
            {
              "name": "reason",
              "type": "string",
              "required": true,
              "fieldRef": "DelayRiskSuggestion.reason"
            },
            {
              "name": "suggestedAction",
              "type": "string",
              "required": false,
              "fieldRef": "DelayRiskSuggestion.suggestedAction"
            },
            {
              "name": "acknowledged",
              "type": "boolean",
              "required": true,
              "fieldRef": "DelayRiskSuggestion.acknowledged"
            },
            {
              "name": "createdAt",
              "type": "string",
              "required": true,
              "fieldRef": "DelayRiskSuggestion.createdAt"
            }
          ]
        }
      }
    ],
    "mdmRefs": []
  }
} as const;

export default generateDelayRiskSuggestionsUsecase;

export const pipeline = [
  {
    "id": "generateDelayRiskSuggestions__applicationUsecase",
    "type": "applicationUsecase",
    "outputPath": "_102045_/l1/buildFlowFsm/layer_2_application/usecases/generateDelayRiskSuggestions.ts",
    "defPath": "_102045_/l1/buildFlowFsm/layer_2_application/usecases/generateDelayRiskSuggestions.defs.ts",
    "dependsFiles": [
      "_102045_/l1/buildFlowFsm/layer_2_application/ports/statusReportRepository.d.ts",
      "_102045_/l1/buildFlowFsm/layer_2_application/ports/workTaskRepository.d.ts",
      "_102045_/l1/buildFlowFsm/layer_2_application/ports/projectRepository.d.ts",
      "_102045_/l1/buildFlowFsm/layer_2_application/ports/timeLogRepository.d.ts",
      "_102045_/l1/buildFlowFsm/layer_2_application/ports/materialUsageRepository.d.ts",
      "_102045_/l1/buildFlowFsm/layer_3_domain/entities/statusReport.d.ts",
      "_102045_/l1/buildFlowFsm/layer_3_domain/entities/workTask.d.ts",
      "_102045_/l1/buildFlowFsm/layer_3_domain/entities/project.d.ts",
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
