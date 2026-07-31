/// <mls fileReference="_102045_/l4/buildFlowFsm/operations/generateDelayRiskSuggestions.defs.ts" enhancement="_blank"/>

export const operationGenerateDelayRiskSuggestions = {
  "operationId": "generateDelayRiskSuggestions",
  "title": "Generate delay-risk suggestions",
  "actors": [
    "projectManager"
  ],
  "entity": "DelayRiskSuggestion",
  "kind": "create",
  "reads": [
    "StatusReport",
    "WorkTask",
    "TimeLog",
    "MaterialUsage",
    "Project",
    "DelayRiskSuggestion"
  ],
  "writes": [
    "DelayRiskSuggestion"
  ],
  "rulesApplied": [
    "delayRiskSuggestionsAdvisory"
  ],
  "story": {
    "actor": "projectManager",
    "goal": "Run AI analysis so tasks at risk of delay are flagged as advisory suggestions on a status report",
    "steps": [
      "Open or select the status report for the project period under review",
      "Trigger generation of delay-risk suggestions for that status report",
      "System analyzes related work tasks, time logs and material usage against progress and due dates",
      "System creates advisory DelayRiskSuggestion records linked to the status report and flagged tasks without changing task status"
    ],
    "outcome": "One or more advisory delay-risk suggestions exist on the status report with risk level, reason and optional suggested action, all unacknowledged and without any automatic WorkTask status change"
  },
  "accessPattern": {
    "kind": "commandInput",
    "description": "Command that runs AI delay-risk analysis for the selected status report and persists advisory suggestions",
    "entity": "DelayRiskSuggestion",
    "keyField": "DelayRiskSuggestion.delayRiskSuggestionId",
    "pagination": "none",
    "selection": "none",
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
      "description": "Status report for which AI delay-risk suggestions will be generated"
    }
  ],
  "contextResolution": [
    {
      "inputId": "statusReportId",
      "targetRef": "DelayRiskSuggestion.statusReportId",
      "source": "selectedEntity",
      "originRef": "StatusReport.statusReportId",
      "description": "Resolved from the status report currently selected in the project manager workspace when generation is triggered"
    },
    {
      "targetRef": "DelayRiskSuggestion.delayRiskSuggestionId",
      "source": "systemDefault",
      "originRef": "systemDefault.uuid",
      "description": "Backend assigns a new UUID for each AI-generated delay-risk suggestion"
    },
    {
      "targetRef": "DelayRiskSuggestion.createdAt",
      "source": "systemDefault",
      "originRef": "systemDefault.now",
      "description": "Server timestamp recorded when the suggestion is generated"
    },
    {
      "targetRef": "DelayRiskSuggestion.updatedAt",
      "source": "systemDefault",
      "originRef": "systemDefault.now",
      "description": "Server timestamp initialized to the generation time"
    }
  ],
  "acceptanceAssertions": [
    "After generation, one or more DelayRiskSuggestion records exist with statusReportId equal to the selected status report",
    "Each created suggestion references a WorkTask that belongs to the same project as the status report",
    "Each suggestion has riskLevel set to low, medium or high and a non-empty reason",
    "Each suggestion is created with acknowledged set to false",
    "No WorkTask status is changed as a result of generating delay-risk suggestions",
    "Optional suggestedAction may be present but is not required for a suggestion to be persisted"
  ],
  "pageId": "generateDelayRiskSuggestions",
  "commandName": "generateDelayRiskSuggestions",
  "bffName": "buildFlowFsm.generateDelayRiskSuggestions.generateDelayRiskSuggestions",
  "capability": {
    "capabilityId": "generateDelayRiskSuggestions",
    "title": "Generate delay-risk suggestions",
    "actor": "projectManager",
    "priority": "now"
  },
  "statusFrontend": "toCreate",
  "statusBackend": "toCreate"
} as const;

export default operationGenerateDelayRiskSuggestions;
