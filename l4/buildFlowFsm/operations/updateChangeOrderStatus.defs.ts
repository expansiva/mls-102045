/// <mls fileReference="_102045_/l4/buildFlowFsm/operations/updateChangeOrderStatus.defs.ts" enhancement="_blank"/>

export const operationUpdateChangeOrderStatus = {
  "operationId": "updateChangeOrderStatus",
  "title": "Update change order status",
  "actors": [
    "projectManager"
  ],
  "entity": "ChangeOrder",
  "kind": "update",
  "reads": [
    "ChangeOrder",
    "Project"
  ],
  "writes": [
    "ChangeOrder"
  ],
  "rulesApplied": [
    "operationsRequireActiveProject",
    "onlyApprovedChangeOrdersAffectCosting",
    "jobCostDerivation"
  ],
  "story": {
    "actor": "projectManager",
    "goal": "Approve or reject a change order so only verified adjustments affect job costing and billing",
    "steps": [
      "Open the change order pending review",
      "Review the documented scope, cost, and schedule impact against the project budget",
      "Set the new status to approved or rejected",
      "When rejecting, provide a rejection reason",
      "Confirm the status update"
    ],
    "outcome": "The change order status is updated; if approved it becomes eligible for job costing and billing, if rejected it is excluded with a recorded reason"
  },
  "accessPattern": {
    "kind": "commandInput",
    "description": "Form to advance a change order through its approval lifecycle by setting approved or rejected status",
    "entity": "ChangeOrder",
    "keyField": "ChangeOrder.changeOrderId",
    "pagination": "none",
    "selection": "single",
    "output": [
      "ChangeOrder.changeOrderId",
      "ChangeOrder.projectId",
      "ChangeOrder.title",
      "ChangeOrder.status",
      "ChangeOrder.costAdjustment",
      "ChangeOrder.scheduleAdjustmentDays",
      "ChangeOrder.rejectionReason",
      "ChangeOrder.approvedAt",
      "ChangeOrder.rejectedAt",
      "ChangeOrder.updatedAt"
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
        "name": "status",
        "type": "string",
        "required": true,
        "fieldRef": "ChangeOrder.status"
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
        "name": "updatedAt",
        "type": "string",
        "required": true,
        "fieldRef": "ChangeOrder.updatedAt"
      }
    ]
  },
  "inputs": [
    {
      "inputId": "changeOrderId",
      "fieldRef": "ChangeOrder.changeOrderId",
      "required": true,
      "source": "routeParam",
      "description": "Identifier of the change order whose status is being updated"
    },
    {
      "inputId": "status",
      "fieldRef": "ChangeOrder.status",
      "required": true,
      "source": "userInput",
      "description": "New lifecycle status to apply: approved or rejected (or pendingReview from draft)"
    },
    {
      "inputId": "rejectionReason",
      "fieldRef": "ChangeOrder.rejectionReason",
      "required": false,
      "source": "userInput",
      "description": "Reason recorded when the change order is rejected during review"
    },
    {
      "inputId": "approvedAt",
      "fieldRef": "ChangeOrder.approvedAt",
      "required": false,
      "source": "systemDefault",
      "description": "Timestamp set automatically when the change order is approved"
    },
    {
      "inputId": "rejectedAt",
      "fieldRef": "ChangeOrder.rejectedAt",
      "required": false,
      "source": "systemDefault",
      "description": "Timestamp set automatically when the change order is rejected"
    },
    {
      "inputId": "updatedAt",
      "fieldRef": "ChangeOrder.updatedAt",
      "required": true,
      "source": "systemDefault",
      "description": "Timestamp of this status update"
    }
  ],
  "contextResolution": [
    {
      "inputId": "changeOrderId",
      "targetRef": "ChangeOrder.changeOrderId",
      "source": "routeParam",
      "originRef": "routeParam.changeOrderId",
      "description": "Resolved from the route parameter identifying the change order being updated"
    },
    {
      "inputId": "approvedAt",
      "targetRef": "ChangeOrder.approvedAt",
      "source": "systemDefault",
      "originRef": "systemDefault.now",
      "description": "Set to current server time when the new status is approved"
    },
    {
      "inputId": "rejectedAt",
      "targetRef": "ChangeOrder.rejectedAt",
      "source": "systemDefault",
      "originRef": "systemDefault.now",
      "description": "Set to current server time when the new status is rejected"
    },
    {
      "inputId": "updatedAt",
      "targetRef": "ChangeOrder.updatedAt",
      "source": "systemDefault",
      "originRef": "systemDefault.now",
      "description": "Set to current server time on every status update"
    }
  ],
  "acceptanceAssertions": [
    "After confirmation the change order status is updated to the selected value (approved or rejected)",
    "When status is set to approved, approvedAt is populated and the change order becomes eligible for job costing and billing",
    "When status is set to rejected, rejectionReason is recorded and rejectedAt is populated",
    "Rejected and pending change orders do not affect job costing totals, billing summaries, or invoices",
    "Only approved change orders contribute to budget-vs-actual and job cost derivation",
    "The change order must belong to an active project for the status update to proceed",
    "updatedAt reflects the time of the status change"
  ],
  "pageId": "changeOrderLifecycle",
  "commandName": "updateChangeOrderStatus",
  "bffName": "buildFlowFsm.changeOrderLifecycle.updateChangeOrderStatus",
  "capability": {
    "capabilityId": "changeOrderLifecycle",
    "title": "Change order lifecycle",
    "actor": "projectManager",
    "priority": "now"
  },
  "statusFrontend": "toCreate",
  "statusBackend": "toCreate"
} as const;

export default operationUpdateChangeOrderStatus;
