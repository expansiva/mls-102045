/// <mls fileReference="_102045_/l1/buildFlowFsm/layer_2_application/usecases/queryDelayRiskSuggestions.defs.ts" enhancement="_blank"/>

export const queryDelayRiskSuggestionsUsecase = {
  "schemaVersion": "2026-06-26",
  "artifactType": "usecase",
  "artifactId": "queryDelayRiskSuggestions",
  "moduleName": "buildFlowFsm",
  "status": "draft",
  "source": {
    "agentName": "agentCbUsecase",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "usecaseId": "queryDelayRiskSuggestions",
    "ports": [
      "StatusReport",
      "WorkTask",
      "TimeLog"
    ],
    "functions": [
      {
        "functionName": "queryDelayRiskSuggestions",
        "inputTypeName": "QueryDelayRiskSuggestionsInput",
        "outputTypeName": "QueryDelayRiskSuggestionsOutput",
        "input": [
          {
            "name": "statusReportId",
            "type": "string",
            "required": true,
            "ofEntity": "DelayRiskSuggestion",
            "fieldRef": "DelayRiskSuggestion.statusReportId",
            "description": "Status report whose AI delay-risk suggestions are being reviewed"
          },
          {
            "name": "acknowledged",
            "type": "boolean",
            "required": false,
            "ofEntity": "DelayRiskSuggestion",
            "fieldRef": "DelayRiskSuggestion.acknowledged",
            "description": "Optional filter to show only acknowledged or unacknowledged suggestions"
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
            "name": "workTaskTitle",
            "type": "string",
            "required": true
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
          "WorkTask"
        ],
        "rulesApplied": [
          "delayRiskSuggestionsAdvisory"
        ],
        "transactional": false,
        "steps": [
          "1. Load the StatusReport aggregate by statusReportId via the StatusReport port (getById). If not found, return an empty suggestions array.",
          "2. Extract the embedded delayRiskSuggestions collection from the loaded StatusReport.",
          "3. If the acknowledged input is provided (true or false), filter the collection to only suggestions whose acknowledged flag matches.",
          "4. Sort the filtered suggestions by riskLevel severity descending (high > medium > low) using a local severity map, then by createdAt ascending as a secondary sort key.",
          "5. Collect all unique workTaskId values from the filtered suggestions.",
          "6. If there are workTaskIds, bulk-load the corresponding WorkTask aggregates via the WorkTask port (getMany by ids). Build a lookup map of workTaskId -> title.",
          "7. Map each suggestion to the output shape: include delayRiskSuggestionId, statusReportId, workTaskId, riskLevel, reason, suggestedAction, acknowledged, createdAt from the suggestion entity, and join workTaskTitle from the WorkTask lookup map (fallback to empty string if the work task is not found).",
          "8. Apply rule delayRiskSuggestionsAdvisory: this is a read-only query — no WorkTask.status or any other entity is mutated. Suggestions are advisory only.",
          "9. Return the suggestions array."
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
              "name": "workTaskTitle",
              "type": "string",
              "required": true
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

export default queryDelayRiskSuggestionsUsecase;

export const pipeline = [
  {
    "id": "queryDelayRiskSuggestions__applicationUsecase",
    "type": "applicationUsecase",
    "outputPath": "_102045_/l1/buildFlowFsm/layer_2_application/usecases/queryDelayRiskSuggestions.ts",
    "defPath": "_102045_/l1/buildFlowFsm/layer_2_application/usecases/queryDelayRiskSuggestions.defs.ts",
    "dependsFiles": [
      "_102045_/l1/buildFlowFsm/layer_2_application/ports/statusReportRepository.d.ts",
      "_102045_/l1/buildFlowFsm/layer_2_application/ports/workTaskRepository.d.ts",
      "_102045_/l1/buildFlowFsm/layer_2_application/ports/timeLogRepository.d.ts",
      "_102045_/l1/buildFlowFsm/layer_3_domain/entities/statusReport.d.ts",
      "_102045_/l1/buildFlowFsm/layer_3_domain/entities/workTask.d.ts",
      "_102045_/l1/buildFlowFsm/layer_3_domain/entities/timeLog.d.ts"
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
