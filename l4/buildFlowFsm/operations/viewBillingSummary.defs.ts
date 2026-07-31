/// <mls fileReference="_102045_/l4/buildFlowFsm/operations/viewBillingSummary.defs.ts" enhancement="_blank"/>

export const operationViewBillingSummary = {
  "operationId": "viewBillingSummary",
  "title": "View billing summary",
  "actors": [
    "client"
  ],
  "entity": "BillingSummary",
  "kind": "view",
  "reads": [
    "BillingSummary",
    "Project"
  ],
  "writes": [],
  "rulesApplied": [
    "onlyApprovedChangeOrdersAffectCosting",
    "billingSummaryClientFacing",
    "clientBillingAccess"
  ],
  "story": {
    "actor": "client",
    "goal": "Review the shared billing summary cost breakdown before a formal invoice is issued",
    "steps": [
      "Open the billing summary shared by billing staff for the project",
      "Review the billing period and the labor, material, and approved change-order cost totals",
      "Confirm the overall total and note any questions about the charges"
    ],
    "outcome": "The client understands the client-facing cost narrative for the period and can raise questions before invoicing"
  },
  "accessPattern": {
    "kind": "getById",
    "description": "Load one shared billing summary by id for the authenticated client, including project name and client-facing cost totals only",
    "entity": "BillingSummary",
    "keyField": "BillingSummary.billingSummaryId",
    "filters": [
      "BillingSummary.status"
    ],
    "pagination": "none",
    "selection": "none",
    "output": [
      "BillingSummary.billingSummaryId",
      "BillingSummary.projectId",
      "Project.name",
      "BillingSummary.status",
      "BillingSummary.periodStart",
      "BillingSummary.periodEnd",
      "BillingSummary.laborCost",
      "BillingSummary.materialCost",
      "BillingSummary.changeOrderCost",
      "BillingSummary.totalCost",
      "BillingSummary.sharedAt"
    ]
  },
  "outputShape": {
    "kind": "object",
    "fields": [
      {
        "name": "billingSummaryId",
        "type": "string",
        "required": true,
        "fieldRef": "BillingSummary.billingSummaryId"
      },
      {
        "name": "projectId",
        "type": "string",
        "required": true,
        "fieldRef": "BillingSummary.projectId"
      },
      {
        "name": "projectName",
        "type": "string",
        "required": true,
        "fieldRef": "Project.name"
      },
      {
        "name": "status",
        "type": "string",
        "required": true,
        "fieldRef": "BillingSummary.status"
      },
      {
        "name": "periodStart",
        "type": "string",
        "required": true,
        "fieldRef": "BillingSummary.periodStart"
      },
      {
        "name": "periodEnd",
        "type": "string",
        "required": true,
        "fieldRef": "BillingSummary.periodEnd"
      },
      {
        "name": "laborCost",
        "type": "number",
        "required": true,
        "fieldRef": "BillingSummary.laborCost"
      },
      {
        "name": "materialCost",
        "type": "number",
        "required": true,
        "fieldRef": "BillingSummary.materialCost"
      },
      {
        "name": "changeOrderCost",
        "type": "number",
        "required": true,
        "fieldRef": "BillingSummary.changeOrderCost"
      },
      {
        "name": "totalCost",
        "type": "number",
        "required": true,
        "fieldRef": "BillingSummary.totalCost"
      },
      {
        "name": "sharedAt",
        "type": "string",
        "required": false,
        "fieldRef": "BillingSummary.sharedAt"
      }
    ]
  },
  "inputs": [
    {
      "inputId": "billingSummaryId",
      "fieldRef": "BillingSummary.billingSummaryId",
      "required": true,
      "source": "routeParam",
      "description": "Identifier of the billing summary the client opens to review"
    },
    {
      "inputId": "clientId",
      "fieldRef": "Client.clientId",
      "required": true,
      "source": "actorSession",
      "description": "Authenticated client identity used to authorize access to summaries for their projects"
    }
  ],
  "contextResolution": [
    {
      "inputId": "clientId",
      "targetRef": "Client.clientId",
      "source": "actorSession",
      "originRef": "actorSession.actorId",
      "description": "Resolve the authenticated client id from the actor session so only summaries for that client's projects are returned"
    }
  ],
  "acceptanceAssertions": [
    "After the client opens a shared billing summary, the response includes periodStart, periodEnd, laborCost, materialCost, changeOrderCost, and totalCost",
    "Only billing summaries with status shared are returned to the client; draft summaries are not visible",
    "The billing summary is returned only when the related project belongs to the authenticated client",
    "changeOrderCost reflects only approved change orders and excludes pending or rejected ones",
    "The response is client-facing and does not expose internal material cost-code detail",
    "The operation is read-only: the client cannot create or modify the billing summary"
  ],
  "pageId": "viewBillingSummary",
  "commandName": "viewBillingSummary",
  "bffName": "buildFlowFsm.viewBillingSummary.viewBillingSummary",
  "capability": {
    "capabilityId": "viewBillingSummary",
    "title": "View billing summary",
    "actor": "client",
    "priority": "now"
  },
  "statusFrontend": "toCreate",
  "statusBackend": "toCreate"
} as const;

export default operationViewBillingSummary;
