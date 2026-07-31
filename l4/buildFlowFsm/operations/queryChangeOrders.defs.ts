/// <mls fileReference="_102045_/l4/buildFlowFsm/operations/queryChangeOrders.defs.ts" enhancement="_blank"/>

export const operationQueryChangeOrders = {
  "operationId": "queryChangeOrders",
  "title": "Browse change orders",
  "actors": [
    "projectManager"
  ],
  "entity": "ChangeOrder",
  "kind": "query",
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
    "goal": "Browse change orders on a project to review their status, cost impact, and approval state before acting on them.",
    "steps": [
      "Open the change-order list for the selected project",
      "Optionally filter by status or impact type",
      "Review titles, cost and schedule adjustments, and lifecycle status",
      "Select a change order to inspect or advance its approval"
    ],
    "outcome": "The project manager sees the change orders for the project with enough detail to review cost impact and decide which ones to approve or reject."
  },
  "accessPattern": {
    "kind": "list",
    "description": "List change orders for a project so the project manager can browse status and cost/schedule impact.",
    "entity": "ChangeOrder",
    "keyField": "ChangeOrder.changeOrderId",
    "filters": [
      "ChangeOrder.projectId",
      "ChangeOrder.status",
      "ChangeOrder.impactType"
    ],
    "sort": [
      "ChangeOrder.createdAt"
    ],
    "pagination": "optional",
    "selection": "single",
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
      "ChangeOrder.updatedAt"
    ]
  },
  "outputShape": {
    "kind": "paginated",
    "fields": [
      {
        "name": "changeOrders",
        "type": "array",
        "required": true,
        "item": {
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
            }
          ]
        }
      },
      {
        "name": "total",
        "type": "number",
        "required": true
      }
    ]
  },
  "inputs": [
    {
      "inputId": "projectId",
      "fieldRef": "ChangeOrder.projectId",
      "required": true,
      "source": "selectedEntity",
      "description": "The project whose change orders are listed."
    },
    {
      "inputId": "status",
      "fieldRef": "ChangeOrder.status",
      "required": false,
      "source": "userInput",
      "description": "Optional filter by change-order lifecycle status (draft, pendingReview, approved, rejected)."
    },
    {
      "inputId": "impactType",
      "fieldRef": "ChangeOrder.impactType",
      "required": false,
      "source": "userInput",
      "description": "Optional filter by primary impact category (scope, cost, schedule)."
    },
    {
      "inputId": "page",
      "type": "number",
      "required": false,
      "source": "userInput",
      "description": "Optional page number for paginated results."
    },
    {
      "inputId": "pageSize",
      "type": "number",
      "required": false,
      "source": "userInput",
      "description": "Optional page size for paginated results."
    }
  ],
  "contextResolution": [
    {
      "inputId": "projectId",
      "targetRef": "ChangeOrder.projectId",
      "source": "selectedEntity",
      "originRef": "Project.projectId",
      "description": "Resolve the project scope from the currently selected project in the workspace so the list is scoped to that project."
    }
  ],
  "acceptanceAssertions": [
    "The response contains only change orders whose projectId matches the selected project.",
    "Each listed change order includes title, description, impactType, costAdjustment, scheduleAdjustmentDays, and status.",
    "Change orders in any lifecycle status (draft, pendingReview, approved, rejected) can appear in the list so the project manager can review cost impact before approval.",
    "When a status filter is provided, only change orders with that status are returned.",
    "When an impactType filter is provided, only change orders with that impact type are returned.",
    "The response includes a total count of matching change orders for pagination.",
    "Approved change orders are distinguishable by status so downstream job costing and billing can rely on only approved items."
  ],
  "pageId": "queryChangeOrders",
  "commandName": "queryChangeOrders",
  "bffName": "buildFlowFsm.queryChangeOrders.queryChangeOrders",
  "capability": {
    "capabilityId": "queryChangeOrders",
    "title": "Browse change orders",
    "actor": "projectManager",
    "priority": "now"
  },
  "statusFrontend": "toCreate",
  "statusBackend": "toCreate"
} as const;

export default operationQueryChangeOrders;
