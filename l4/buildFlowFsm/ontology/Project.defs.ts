/// <mls fileReference="_102045_/l4/buildFlowFsm/ontology/Project.defs.ts" enhancement="_blank"/>

export const buildFlowFsmEntityProject = {
  "entityId": "Project",
  "title": "Project",
  "description": "A construction or field service project with client, site address, budget, schedule, and lifecycle status that anchors all tasks, costs, and billing.",
  "kind": "core",
  "ownership": "moduleOwned",
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
  "statusEnum": [
    "registered",
    "active",
    "onHold",
    "closed",
    "cancelled"
  ],
  "lifecycleStates": [
    "registered",
    "active",
    "onHold",
    "closed",
    "cancelled"
  ]
} as const;

export default buildFlowFsmEntityProject;
