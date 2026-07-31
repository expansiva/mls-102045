/// <mls fileReference="_102045_/l4/buildFlowFsm/ontology/TimeLog.defs.ts" enhancement="_blank"/>

export const buildFlowFsmEntityTimeLog = {
  "entityId": "TimeLog",
  "title": "Time Log",
  "description": "An append-only record of hours worked by a field worker against a specific task, used for labor cost tracking and job costing.",
  "kind": "event",
  "ownership": "moduleOwned",
  "fields": [
    {
      "fieldId": "timeLogId",
      "type": "uuid",
      "required": true,
      "description": "Primary identifier for the time log entry."
    },
    {
      "fieldId": "workTaskId",
      "type": "uuid",
      "required": true,
      "description": "Reference to the work task this time log was recorded against."
    },
    {
      "fieldId": "workerName",
      "type": "string",
      "required": true,
      "description": "Name of the field worker who performed the logged hours."
    },
    {
      "fieldId": "logDate",
      "type": "date",
      "required": true,
      "description": "The calendar date on which the work was performed."
    },
    {
      "fieldId": "hoursWorked",
      "type": "number",
      "required": true,
      "description": "Number of hours worked on the task for this log entry."
    },
    {
      "fieldId": "laborCost",
      "type": "money",
      "required": true,
      "description": "Calculated labor cost for the logged hours, used in job costing."
    },
    {
      "fieldId": "status",
      "type": "string",
      "required": true,
      "description": "Lifecycle status of the time log entry.",
      "enum": [
        "posted",
        "voided"
      ]
    },
    {
      "fieldId": "voidedAt",
      "type": "datetime",
      "required": false,
      "description": "Timestamp when the time log was voided, if applicable."
    },
    {
      "fieldId": "voidReason",
      "type": "text",
      "required": false,
      "description": "Reason provided when voiding a time log entry."
    },
    {
      "fieldId": "createdAt",
      "type": "datetime",
      "required": true,
      "description": "Timestamp when the time log entry was created."
    }
  ],
  "statusEnum": [
    "posted",
    "voided"
  ],
  "eventPolicy": {
    "purpose": "audit",
    "retentionDays": 2555
  }
} as const;

export default buildFlowFsmEntityTimeLog;
