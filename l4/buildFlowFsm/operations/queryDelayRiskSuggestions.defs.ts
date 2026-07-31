/// <mls fileReference="_102045_/l4/buildFlowFsm/operations/queryDelayRiskSuggestions.defs.ts" enhancement="_blank"/>

export const operationQueryDelayRiskSuggestions = {
  "operationId": "queryDelayRiskSuggestions",
  "title": "Review delay-risk suggestions",
  "actors": [
    "projectManager"
  ],
  "entity": "DelayRiskSuggestion",
  "kind": "query",
  "reads": [
    "DelayRiskSuggestion",
    "WorkTask",
    "StatusReport"
  ],
  "writes": [],
  "rulesApplied": [
    "delayRiskSuggestionsAdvisory"
  ],
  "story": {
    "actor": "projectManager",
    "goal": "Review AI-generated delay-risk suggestions for a status report so corrective action can be taken before deadlines slip",
    "steps": [
      "Open the status report under review",
      "Load the AI-generated delay-risk suggestions linked to that report",
      "Inspect each suggestion’s risk level, reason, related work task and optional recommended action",
      "Note that suggestions are advisory only and do not change task status"
    ],
    "outcome": "The project manager sees a clear list of at-risk tasks with explanations and can decide on human follow-up without any automatic status changes"
  },
  "accessPattern": {
    "kind": "list",
    "description": "List advisory delay-risk suggestions for the selected status report, ordered by severity",
    "entity": "DelayRiskSuggestion",
    "keyField": "DelayRiskSuggestion.delayRiskSuggestionId",
    "filters": [
      "DelayRiskSuggestion.statusReportId",
      "DelayRiskSuggestion.acknowledged"
    ],
    "sort": [
      "DelayRiskSuggestion.riskLevel",
      "DelayRiskSuggestion.createdAt"
    ],
    "pagination": "none",
    "selection": "single",
    "output": [
      "DelayRiskSuggestion.delayRiskSuggestionId",
      "DelayRiskSuggestion.statusReportId",
      "DelayRiskSuggestion.workTaskId",
      "DelayRiskSuggestion.riskLevel",
      "DelayRiskSuggestion.reason",
      "DelayRiskSuggestion.suggestedAction",
      "DelayRiskSuggestion.acknowledged",
      "DelayRiskSuggestion.createdAt"
    ]
  },
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
  },
  "inputs": [
    {
      "inputId": "statusReportId",
      "fieldRef": "DelayRiskSuggestion.statusReportId",
      "required": true,
      "source": "selectedEntity",
      "description": "Status report whose AI delay-risk suggestions are being reviewed"
    },
    {
      "inputId": "acknowledged",
      "fieldRef": "DelayRiskSuggestion.acknowledged",
      "required": false,
      "source": "userInput",
      "description": "Optional filter to show only acknowledged or unacknowledged suggestions"
    }
  ],
  "contextResolution": [
    {
      "inputId": "statusReportId",
      "targetRef": "DelayRiskSuggestion.statusReportId",
      "source": "selectedEntity",
      "originRef": "StatusReport.statusReportId",
      "description": "Resolved from the status report currently selected by the project manager for review"
    }
  ],
  "acceptanceAssertions": [
    "After the query, all DelayRiskSuggestion records linked to the selected status report are returned with riskLevel, reason, workTaskId and acknowledged status",
    "Each returned suggestion includes the related work task title for context without modifying WorkTask.status",
    "Suggestions remain advisory only: no work task status is changed as a result of listing or viewing them",
    "Optional acknowledged filter, when provided, restricts results to suggestions matching that acknowledged flag"
  ],
  "pageId": "queryDelayRiskSuggestions",
  "commandName": "queryDelayRiskSuggestions",
  "bffName": "buildFlowFsm.queryDelayRiskSuggestions.queryDelayRiskSuggestions",
  "capability": {
    "capabilityId": "queryDelayRiskSuggestions",
    "title": "Review delay-risk suggestions",
    "actor": "projectManager",
    "priority": "now"
  },
  "statusFrontend": "toCreate",
  "statusBackend": "toCreate"
} as const;

export default operationQueryDelayRiskSuggestions;
