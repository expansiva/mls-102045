/// <mls fileReference="_102045_/l4/buildFlowFsm/operations/createChangeOrder.defs.ts" enhancement="_blank"/>

export const operationCreateChangeOrder = {
  "operationId": "createChangeOrder",
  "title": "Create change order",
  "actors": [
    "projectManager"
  ],
  "entity": "ChangeOrder",
  "kind": "create",
  "reads": [
    "Project",
    "ChangeOrder"
  ],
  "writes": [
    "ChangeOrder"
  ],
  "rulesApplied": [
    "operationsRequireActiveProject",
    "changeOrderDescriptionRequired"
  ],
  "story": {
    "actor": "projectManager",
    "goal": "Formally capture a scope, cost, or schedule adjustment on an active project as a change order",
    "steps": [
      "Open the active project context",
      "Enter the change order title, description, impact type, cost adjustment, and optional schedule adjustment",
      "Confirm creation so the change is recorded in draft status"
    ],
    "outcome": "A new change order exists on the active project in draft status with the described impact, ready for later review and approval"
  },
  "accessPattern": {
    "kind": "commandInput",
    "description": "Form input to create a change order on an active project",
    "entity": "ChangeOrder",
    "keyField": "ChangeOrder.changeOrderId",
    "pagination": "none",
    "selection": "none",
    "output": [
      "ChangeOrder.changeOrderId",
      "ChangeOrder.projectId",
      "ChangeOrder.title",
      "ChangeOrder.description",
      "ChangeOrder.impactType",
      "ChangeOrder.costAdjustment",
      "ChangeOrder.scheduleAdjustmentDays",
      "ChangeOrder.status",
      "ChangeOrder.createdAt"
    ]
  },
  "outputShape": {
    "kind": "object",
    "fields": [
      {
        "name": "changeOrderId",
        "type": "string",
        "required": true,
        "fieldRef": "ChangeOrder.changeOrderId"
      },
      {
        "name": "projectId",
        "type": "string",
        "required": true,
        "fieldRef": "ChangeOrder.projectId"
      },
      {
        "name": "title",
        "type": "string",
        "required": true,
        "fieldRef": "ChangeOrder.title"
      },
      {
        "name": "description",
        "type": "string",
        "required": true,
        "fieldRef": "ChangeOrder.description"
      },
      {
        "name": "impactType",
        "type": "string",
        "required": true,
        "fieldRef": "ChangeOrder.impactType"
      },
      {
        "name": "costAdjustment",
        "type": "number",
        "required": true,
        "fieldRef": "ChangeOrder.costAdjustment"
      },
      {
        "name": "scheduleAdjustmentDays",
        "type": "number",
        "required": false,
        "fieldRef": "ChangeOrder.scheduleAdjustmentDays"
      },
      {
        "name": "status",
        "type": "string",
        "required": true,
        "fieldRef": "ChangeOrder.status"
      },
      {
        "name": "createdAt",
        "type": "string",
        "required": true,
        "fieldRef": "ChangeOrder.createdAt"
      }
    ]
  },
  "inputs": [
    {
      "inputId": "projectId",
      "fieldRef": "ChangeOrder.projectId",
      "required": true,
      "source": "selectedEntity",
      "description": "Identifier of the active project the change order applies to"
    },
    {
      "inputId": "title",
      "fieldRef": "ChangeOrder.title",
      "required": true,
      "source": "userInput",
      "description": "Short summary title of the change order"
    },
    {
      "inputId": "description",
      "fieldRef": "ChangeOrder.description",
      "required": true,
      "source": "userInput",
      "description": "Detailed description of the scope, cost, or schedule impact being requested"
    },
    {
      "inputId": "impactType",
      "fieldRef": "ChangeOrder.impactType",
      "required": true,
      "source": "userInput",
      "description": "Primary category of impact: scope, cost, or schedule"
    },
    {
      "inputId": "costAdjustment",
      "fieldRef": "ChangeOrder.costAdjustment",
      "required": true,
      "source": "userInput",
      "description": "Monetary amount of the cost adjustment; positive for additions, negative for deductions"
    },
    {
      "inputId": "scheduleAdjustmentDays",
      "fieldRef": "ChangeOrder.scheduleAdjustmentDays",
      "required": false,
      "source": "userInput",
      "description": "Optional number of days added to or removed from the project schedule"
    },
    {
      "inputId": "changeOrderId",
      "fieldRef": "ChangeOrder.changeOrderId",
      "required": true,
      "source": "systemDefault",
      "description": "System-generated unique identifier for the new change order"
    },
    {
      "inputId": "status",
      "fieldRef": "ChangeOrder.status",
      "required": true,
      "source": "systemDefault",
      "description": "Initial lifecycle status set to draft on creation"
    },
    {
      "inputId": "createdAt",
      "fieldRef": "ChangeOrder.createdAt",
      "required": true,
      "source": "systemDefault",
      "description": "Timestamp when the change order is created"
    },
    {
      "inputId": "updatedAt",
      "fieldRef": "ChangeOrder.updatedAt",
      "required": true,
      "source": "systemDefault",
      "description": "Timestamp of the initial creation modification"
    }
  ],
  "contextResolution": [
    {
      "inputId": "projectId",
      "targetRef": "ChangeOrder.projectId",
      "source": "selectedEntity",
      "originRef": "Project.projectId",
      "description": "Resolve projectId from the project currently selected in the workspace; the project must exist and be in active status"
    },
    {
      "inputId": "changeOrderId",
      "targetRef": "ChangeOrder.changeOrderId",
      "source": "systemDefault",
      "originRef": "systemDefault.uuid",
      "description": "Generate a new UUID for the change order identity"
    },
    {
      "inputId": "status",
      "targetRef": "ChangeOrder.status",
      "source": "systemDefault",
      "originRef": "systemDefault.locale",
      "description": "Set initial status to draft so the change order does not yet affect job costing or billing"
    },
    {
      "inputId": "createdAt",
      "targetRef": "ChangeOrder.createdAt",
      "source": "systemDefault",
      "originRef": "systemDefault.now",
      "description": "Stamp creation time with the current server time"
    },
    {
      "inputId": "updatedAt",
      "targetRef": "ChangeOrder.updatedAt",
      "source": "systemDefault",
      "originRef": "systemDefault.now",
      "description": "Stamp last modification time with the current server time on create"
    }
  ],
  "acceptanceAssertions": [
    "After confirmation a ChangeOrder exists with the provided title, description, impactType, costAdjustment, and optional scheduleAdjustmentDays",
    "The new change order is linked to the selected project via projectId",
    "The new change order status is draft so it does not yet affect job costing or billing",
    "Creation is rejected when the target project is not in active status",
    "Creation is rejected when description is missing or empty",
    "changeOrderId, createdAt, and updatedAt are assigned by the system on create"
  ],
  "pageId": "changeOrderLifecycle",
  "commandName": "createChangeOrder",
  "bffName": "buildFlowFsm.changeOrderLifecycle.createChangeOrder",
  "capability": {
    "capabilityId": "changeOrderLifecycle",
    "title": "Change order lifecycle",
    "actor": "projectManager",
    "priority": "now"
  },
  "statusFrontend": "toCreate",
  "statusBackend": "toCreate"
} as const;

export default operationCreateChangeOrder;
