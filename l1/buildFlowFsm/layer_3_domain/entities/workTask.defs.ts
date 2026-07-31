/// <mls fileReference="_102045_/l1/buildFlowFsm/layer_3_domain/entities/workTask.defs.ts" enhancement="_blank"/>

export const workTaskDomainEntity = {
  "schemaVersion": "2026-06-26",
  "artifactType": "domainEntity",
  "artifactId": "WorkTask",
  "moduleName": "buildFlowFsm",
  "status": "draft",
  "source": {
    "agentName": "agentCbDomainEntity",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "entityId": "WorkTask",
    "title": "Work Task",
    "fields": [
      {
        "fieldId": "workTaskId",
        "type": "uuid",
        "required": true,
        "description": "Primary identifier for the work task."
      },
      {
        "fieldId": "projectId",
        "type": "uuid",
        "required": true,
        "description": "Reference to the project this task belongs to."
      },
      {
        "fieldId": "title",
        "type": "string",
        "required": true,
        "description": "Short name describing the work task."
      },
      {
        "fieldId": "description",
        "type": "text",
        "required": false,
        "description": "Detailed scope or instructions for completing the task."
      },
      {
        "fieldId": "assignedWorkerId",
        "type": "string",
        "required": true,
        "description": "Identifier of the field worker assigned to this task; only one worker at a time."
      },
      {
        "fieldId": "status",
        "type": "string",
        "required": true,
        "description": "Current lifecycle state of the task, updated only by the assigned worker or project manager.",
        "enum": [
          "assigned",
          "inProgress",
          "completed",
          "cancelled"
        ]
      },
      {
        "fieldId": "dueDate",
        "type": "date",
        "required": true,
        "description": "Date by which the task should be completed, used to surface overdue and urgent work."
      },
      {
        "fieldId": "completedAt",
        "type": "datetime",
        "required": false,
        "description": "Timestamp when the task was marked completed."
      },
      {
        "fieldId": "cancelledAt",
        "type": "datetime",
        "required": false,
        "description": "Timestamp when the task was cancelled."
      },
      {
        "fieldId": "cancellationReason",
        "type": "text",
        "required": false,
        "description": "Reason recorded when a task is cancelled."
      },
      {
        "fieldId": "createdAt",
        "type": "datetime",
        "required": true,
        "description": "Timestamp when the work task was created."
      },
      {
        "fieldId": "updatedAt",
        "type": "datetime",
        "required": true,
        "description": "Timestamp of the last update to the work task."
      }
    ],
    "valueObjects": [],
    "statusEnum": [
      "assigned",
      "inProgress",
      "completed",
      "cancelled"
    ],
    "invariants": [
      "Initial status must be 'assigned' when the task is created.",
      "Status transitions: assigned → inProgress → completed; assigned or inProgress → cancelled. No transitions from completed or cancelled to any other state.",
      "completedAt is required when status = 'completed'; must be null otherwise.",
      "cancelledAt and cancellationReason are both required when status = 'cancelled'; must be null/empty otherwise.",
      "completedAt and cancelledAt are mutually exclusive — a task cannot be both completed and cancelled.",
      "Only one worker may be assigned to a task at any given time (assignedWorkerId is single-valued).",
      "createdAt <= updatedAt always.",
      "completedAt >= createdAt when completedAt is present.",
      "cancelledAt >= createdAt when cancelledAt is present.",
      "dueDate >= createdAt — a task cannot be due before it was created.",
      "Status may only be updated by the assigned worker or the project manager."
    ]
  }
} as const;

export default workTaskDomainEntity;

export const pipeline = [
  {
    "id": "workTask__domainEntity",
    "type": "domainEntity",
    "outputPath": "_102045_/l1/buildFlowFsm/layer_3_domain/entities/workTask.ts",
    "defPath": "_102045_/l1/buildFlowFsm/layer_3_domain/entities/workTask.defs.ts",
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
