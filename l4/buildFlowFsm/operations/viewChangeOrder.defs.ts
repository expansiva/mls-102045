/// <mls fileReference="_102045_/l4/buildFlowFsm/operations/viewChangeOrder.defs.ts" enhancement="_blank"/>

export const operationViewChangeOrder = {
  "operationId": "viewChangeOrder",
  "title": "View change order and cost impact",
  "actors": [
    "projectManager"
  ],
  "entity": "ChangeOrder",
  "kind": "view",
  "reads": [
    "ChangeOrder",
    "Project"
  ],
  "writes": [],
  "rulesApplied": [
    "onlyApprovedChangeOrdersAffectCosting",
    "jobCostDerivation"
  ],
  "story": {
    "actor": "projectManager",
    "goal": "Review a change order and understand its cost impact on the project budget before deciding on approval",
    "steps": [
      "Open the selected change order detail",
      "Review title, description, impact type, cost adjustment, schedule impact, and approval status",
      "Compare the cost adjustment against the project budget to assess financial consequence"
    ],
    "outcome": "The project manager sees the full change order and its cost impact relative to the project budget so they can decide whether to approve"
  },
  "accessPattern": {
    "kind": "getById",
    "description": "Load one change order by id and its parent project budget context for cost-impact review",
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
      "ChangeOrder.rejectionReason",
      "ChangeOrder.approvedAt",
      "ChangeOrder.rejectedAt",
      "ChangeOrder.createdAt",
      "ChangeOrder.updatedAt",
      "Project.name",
      "Project.budget"
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
        "name": "rejectionReason",
        "type": "string",
        "required": false,
        "fieldRef": "ChangeOrder.rejectionReason"
      },
      {
        "name": "approvedAt",
        "type": "string",
        "required": false,
        "fieldRef": "ChangeOrder.approvedAt"
      },
      {
        "name": "rejectedAt",
        "type": "string",
        "required": false,
        "fieldRef": "ChangeOrder.rejectedAt"
      },
      {
        "name": "createdAt",
        "type": "string",
        "required": true,
        "fieldRef": "ChangeOrder.createdAt"
      },
      {
        "name": "updatedAt",
        "type": "string",
        "required": true,
        "fieldRef": "ChangeOrder.updatedAt"
      },
      {
        "name": "projectName",
        "type": "string",
        "required": true,
        "fieldRef": "Project.name"
      },
      {
        "name": "projectBudget",
        "type": "number",
        "required": true,
        "fieldRef": "Project.budget"
      },
      {
        "name": "affectsJobCosting",
        "type": "boolean",
        "required": true
      }
    ]
  },
  "inputs": [
    {
      "inputId": "changeOrderId",
      "fieldRef": "ChangeOrder.changeOrderId",
      "required": true,
      "source": "routeParam",
      "description": "Identifier of the change order to display"
    }
  ],
  "contextResolution": [
    {
      "inputId": "changeOrderId",
      "targetRef": "ChangeOrder.changeOrderId",
      "source": "routeParam",
      "originRef": "routeParam.changeOrderId",
      "description": "Resolved from the changeOrderId path parameter on the change order detail route"
    }
  ],
  "acceptanceAssertions": [
    "After opening the change order, its title, description, impact type, cost adjustment, schedule adjustment days, and status are returned",
    "The parent project name and budget are included so the cost adjustment can be compared against the project budget",
    "affectsJobCosting is true only when the change order status is approved, and false for draft, pendingReview, or rejected",
    "When the change order is rejected, rejectionReason and rejectedAt are included when present",
    "When the change order is approved, approvedAt is included when present"
  ],
  "pageId": "viewChangeOrder",
  "commandName": "viewChangeOrder",
  "bffName": "buildFlowFsm.viewChangeOrder.viewChangeOrder",
  "capability": {
    "capabilityId": "viewChangeOrder",
    "title": "View change order and cost impact",
    "actor": "projectManager",
    "priority": "now"
  },
  "statusFrontend": "toCreate",
  "statusBackend": "toCreate"
} as const;

export default operationViewChangeOrder;
