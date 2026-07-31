/// <mls fileReference="_102045_/l4/buildFlowFsm/ontology/BillingSummary.defs.ts" enhancement="_blank"/>

export const buildFlowFsmEntityBillingSummary = {
  "entityId": "BillingSummary",
  "title": "Billing Summary",
  "description": "A client-facing breakdown of labor, material, and approved change order costs compiled by billing staff and shared with the client before invoicing.",
  "kind": "core",
  "ownership": "moduleOwned",
  "fields": [
    {
      "fieldId": "billingSummaryId",
      "type": "uuid",
      "required": true,
      "description": "Primary identifier for the billing summary record."
    },
    {
      "fieldId": "projectId",
      "type": "uuid",
      "required": true,
      "description": "Reference to the project this billing summary belongs to."
    },
    {
      "fieldId": "status",
      "type": "string",
      "required": true,
      "description": "Lifecycle state of the billing summary, either in draft or shared with the client.",
      "enum": [
        "draft",
        "shared"
      ]
    },
    {
      "fieldId": "periodStart",
      "type": "date",
      "required": true,
      "description": "Start date of the billing period covered by this summary."
    },
    {
      "fieldId": "periodEnd",
      "type": "date",
      "required": true,
      "description": "End date of the billing period covered by this summary."
    },
    {
      "fieldId": "laborCost",
      "type": "money",
      "required": true,
      "description": "Total labor cost derived from time logs within the billing period."
    },
    {
      "fieldId": "materialCost",
      "type": "money",
      "required": true,
      "description": "Total material cost derived from material usage within the billing period."
    },
    {
      "fieldId": "changeOrderCost",
      "type": "money",
      "required": true,
      "description": "Total cost from approved change orders included in this billing period."
    },
    {
      "fieldId": "totalCost",
      "type": "money",
      "required": true,
      "description": "Sum of labor, material, and approved change order costs for the billing period."
    },
    {
      "fieldId": "sharedAt",
      "type": "datetime",
      "required": false,
      "description": "Timestamp when the billing summary was shared with the client."
    },
    {
      "fieldId": "createdAt",
      "type": "datetime",
      "required": true,
      "description": "Timestamp when the billing summary record was created."
    },
    {
      "fieldId": "updatedAt",
      "type": "datetime",
      "required": true,
      "description": "Timestamp of the last update to the billing summary record."
    }
  ],
  "statusEnum": [
    "draft",
    "shared"
  ],
  "lifecycleStates": [
    "draft",
    "shared"
  ]
} as const;

export default buildFlowFsmEntityBillingSummary;
