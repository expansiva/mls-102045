/// <mls fileReference="_102045_/l1/buildFlowFsm/layer_3_domain/entities/timeLog.defs.ts" enhancement="_blank"/>

export const timeLogDomainEntity = {
  "schemaVersion": "2026-06-26",
  "artifactType": "domainEntity",
  "artifactId": "TimeLog",
  "moduleName": "buildFlowFsm",
  "status": "draft",
  "source": {
    "agentName": "agentCbDomainEntity",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "entityId": "TimeLog",
    "title": "Time Log",
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
    "valueObjects": [],
    "statusEnum": [
      "posted",
      "voided"
    ],
    "invariants": []
  }
} as const;

export default timeLogDomainEntity;

export const pipeline = [
  {
    "id": "timeLog__domainEntity",
    "type": "domainEntity",
    "outputPath": "_102045_/l1/buildFlowFsm/layer_3_domain/entities/timeLog.ts",
    "defPath": "_102045_/l1/buildFlowFsm/layer_3_domain/entities/timeLog.defs.ts",
    "dependsFiles": [],
    "dependsOn": [],
    "skills": [
      "_102021_/l2/agentChangeBackend/skills/architecture.md",
      "_102021_/l2/agentChangeBackend/skills/domainEntity.md",
      "_102034_.d.ts"
    ],
    "agent": "agentCbMaterialize"
  }
] as const;
