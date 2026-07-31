/// <mls fileReference="_102045_/l4/buildFlowFsm/operations/voidTimeLog.defs.ts" enhancement="_blank"/>

export const operationVoidTimeLog = {
  "operationId": "voidTimeLog",
  "title": "Void time log",
  "actors": [
    "fieldWorker"
  ],
  "entity": "TimeLog",
  "kind": "update",
  "reads": [
    "TimeLog"
  ],
  "writes": [
    "TimeLog"
  ],
  "rulesApplied": [
    "jobCostDerivation"
  ],
  "story": {
    "actor": "fieldWorker",
    "goal": "Void an incorrect or invalid time log entry so it no longer counts toward labor cost and job costing",
    "steps": [
      "Select the posted time log entry to void",
      "Provide a reason for voiding the entry",
      "Confirm the void action",
      "System marks the time log as voided with timestamp and reason"
    ],
    "outcome": "The time log is voided, excluded from job cost totals, and retains an audit trail with void reason and timestamp"
  },
  "accessPattern": {
    "kind": "commandInput",
    "description": "Form to void a selected posted time log by providing a void reason",
    "entity": "TimeLog",
    "keyField": "TimeLog.timeLogId",
    "pagination": "none",
    "selection": "single",
    "output": [
      "TimeLog.timeLogId",
      "TimeLog.workTaskId",
      "TimeLog.workerName",
      "TimeLog.logDate",
      "TimeLog.hoursWorked",
      "TimeLog.laborCost",
      "TimeLog.status",
      "TimeLog.voidedAt",
      "TimeLog.voidReason"
    ]
  },
  "outputShape": {
    "kind": "object",
    "fields": [
      {
        "name": "timeLogId",
        "type": "string",
        "required": true,
        "fieldRef": "TimeLog.timeLogId"
      },
      {
        "name": "workTaskId",
        "type": "string",
        "required": true,
        "fieldRef": "TimeLog.workTaskId"
      },
      {
        "name": "workerName",
        "type": "string",
        "required": true,
        "fieldRef": "TimeLog.workerName"
      },
      {
        "name": "logDate",
        "type": "string",
        "required": true,
        "fieldRef": "TimeLog.logDate"
      },
      {
        "name": "hoursWorked",
        "type": "number",
        "required": true,
        "fieldRef": "TimeLog.hoursWorked"
      },
      {
        "name": "laborCost",
        "type": "number",
        "required": true,
        "fieldRef": "TimeLog.laborCost"
      },
      {
        "name": "status",
        "type": "string",
        "required": true,
        "fieldRef": "TimeLog.status"
      },
      {
        "name": "voidedAt",
        "type": "string",
        "required": true,
        "fieldRef": "TimeLog.voidedAt"
      },
      {
        "name": "voidReason",
        "type": "string",
        "required": true,
        "fieldRef": "TimeLog.voidReason"
      }
    ]
  },
  "inputs": [
    {
      "inputId": "timeLogId",
      "fieldRef": "TimeLog.timeLogId",
      "required": true,
      "source": "selectedEntity",
      "description": "Identifier of the posted time log entry to void"
    },
    {
      "inputId": "voidReason",
      "fieldRef": "TimeLog.voidReason",
      "required": true,
      "source": "userInput",
      "description": "Reason provided by the field worker for voiding this time log"
    },
    {
      "inputId": "status",
      "fieldRef": "TimeLog.status",
      "required": true,
      "source": "systemDefault",
      "description": "New lifecycle status set to voided when the entry is voided"
    },
    {
      "inputId": "voidedAt",
      "fieldRef": "TimeLog.voidedAt",
      "required": true,
      "source": "systemDefault",
      "description": "Timestamp when the time log was voided"
    }
  ],
  "contextResolution": [
    {
      "inputId": "timeLogId",
      "targetRef": "TimeLog.timeLogId",
      "source": "selectedEntity",
      "originRef": "TimeLog.timeLogId",
      "description": "Resolved from the time log entry the field worker selected in the list or detail view"
    },
    {
      "inputId": "status",
      "targetRef": "TimeLog.status",
      "source": "systemDefault",
      "originRef": "systemDefault.locale",
      "description": "Backend sets status to the fixed value voided on successful void confirmation"
    },
    {
      "inputId": "voidedAt",
      "targetRef": "TimeLog.voidedAt",
      "source": "systemDefault",
      "originRef": "systemDefault.now",
      "description": "Backend stamps the current server timestamp when the void is applied"
    }
  ],
  "acceptanceAssertions": [
    "After confirmation the time log status is voided",
    "After confirmation voidedAt is set to the void timestamp",
    "After confirmation voidReason matches the reason provided by the field worker",
    "Only a time log that was previously posted can be voided",
    "Voided time logs are excluded from labor cost and job cost derivation totals",
    "The original hoursWorked and laborCost values remain on the record for audit"
  ],
  "pageId": "voidTimeLog",
  "commandName": "voidTimeLog",
  "bffName": "buildFlowFsm.voidTimeLog.voidTimeLog",
  "capability": {
    "capabilityId": "voidTimeLog",
    "title": "Void time log",
    "actor": "fieldWorker",
    "priority": "now"
  },
  "statusFrontend": "toCreate",
  "statusBackend": "toCreate"
} as const;

export default operationVoidTimeLog;
