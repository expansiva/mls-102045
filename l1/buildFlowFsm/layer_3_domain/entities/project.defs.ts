/// <mls fileReference="_102045_/l1/buildFlowFsm/layer_3_domain/entities/project.defs.ts" enhancement="_blank"/>

export const projectDomainEntity = {
  "schemaVersion": "2026-06-26",
  "artifactType": "domainEntity",
  "artifactId": "Project",
  "moduleName": "buildFlowFsm",
  "status": "draft",
  "source": {
    "agentName": "agentCbDomainEntity",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "entityId": "Project",
    "title": "Project",
    "fields": [
      {
        "fieldId": "projectId",
        "type": "uuid",
        "required": true,
        "description": "Unique identifier for the project."
      },
      {
        "fieldId": "name",
        "type": "string",
        "required": true,
        "description": "Human-readable project name used across dashboards and reports."
      },
      {
        "fieldId": "clientId",
        "type": "uuid",
        "required": true,
        "description": "Reference to the client who owns this project."
      },
      {
        "fieldId": "siteAddress",
        "type": "text",
        "required": true,
        "description": "Physical address of the construction or service site where work is performed."
      },
      {
        "fieldId": "budget",
        "type": "money",
        "required": true,
        "description": "Approved total budget for the project used as the baseline for job costing comparison."
      },
      {
        "fieldId": "startDate",
        "type": "date",
        "required": true,
        "description": "Planned start date of the project schedule."
      },
      {
        "fieldId": "endDate",
        "type": "date",
        "required": true,
        "description": "Planned completion date of the project schedule."
      },
      {
        "fieldId": "status",
        "type": "string",
        "required": true,
        "description": "Lifecycle status that controls whether field entries and change orders can be recorded against the project.",
        "enum": [
          "registered",
          "active",
          "onHold",
          "closed",
          "cancelled"
        ]
      },
      {
        "fieldId": "holdReason",
        "type": "text",
        "required": false,
        "description": "Reason recorded when the project is placed on hold."
      },
      {
        "fieldId": "closedAt",
        "type": "datetime",
        "required": false,
        "description": "Timestamp when the project was marked as closed."
      },
      {
        "fieldId": "cancelledAt",
        "type": "datetime",
        "required": false,
        "description": "Timestamp when the project was cancelled."
      },
      {
        "fieldId": "cancellationReason",
        "type": "text",
        "required": false,
        "description": "Reason recorded when the project is cancelled."
      },
      {
        "fieldId": "createdAt",
        "type": "datetime",
        "required": true,
        "description": "Timestamp when the project record was created."
      },
      {
        "fieldId": "updatedAt",
        "type": "datetime",
        "required": true,
        "description": "Timestamp of the last modification to the project record."
      }
    ],
    "valueObjects": [],
    "statusEnum": [
      "registered",
      "active",
      "onHold",
      "closed",
      "cancelled"
    ],
    "invariants": [
      "startDate must be on or before endDate.",
      "status transitions: registered→active, active→onHold, onHold→active, active→closed, onHold→closed, registered→cancelled, active→cancelled, onHold→cancelled. closed and cancelled are terminal states — no outgoing transitions.",
      "holdReason is required when status is 'onHold' and must be empty otherwise.",
      "closedAt is required when status is 'closed' and must be empty otherwise.",
      "cancelledAt and cancellationReason are required when status is 'cancelled' and must be empty otherwise.",
      "A project cannot be both closed and cancelled; closedAt and cancelledAt are mutually exclusive.",
      "budget must be greater than or equal to zero.",
      "Field entries and change orders may only be recorded against the project when status is 'active'.",
      "updatedAt must be greater than or equal to createdAt.",
      "closedAt, when present, must be greater than or equal to createdAt.",
      "cancelledAt, when present, must be greater than or equal to createdAt."
    ]
  }
} as const;

export default projectDomainEntity;

export const pipeline = [
  {
    "id": "project__domainEntity",
    "type": "domainEntity",
    "outputPath": "_102045_/l1/buildFlowFsm/layer_3_domain/entities/project.ts",
    "defPath": "_102045_/l1/buildFlowFsm/layer_3_domain/entities/project.defs.ts",
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
