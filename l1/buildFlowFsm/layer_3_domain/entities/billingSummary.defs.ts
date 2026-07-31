/// <mls fileReference="_102045_/l1/buildFlowFsm/layer_3_domain/entities/billingSummary.defs.ts" enhancement="_blank"/>

export const billingSummaryDomainEntity = {
  "schemaVersion": "2026-06-26",
  "artifactType": "domainEntity",
  "artifactId": "BillingSummary",
  "moduleName": "buildFlowFsm",
  "status": "draft",
  "source": {
    "agentName": "agentCbDomainEntity",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "entityId": "BillingSummary",
    "title": "Billing Summary",
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
    "valueObjects": [],
    "statusEnum": [
      "draft",
      "shared"
    ],
    "invariants": [
      "totalCost must equal laborCost + materialCost + changeOrderCost at all times.",
      "periodEnd must be on or after periodStart.",
      "status may only transition from 'draft' to 'shared'; once 'shared' it cannot revert to 'draft'.",
      "sharedAt is required when status is 'shared' and must be null when status is 'draft'.",
      "sharedAt, when present, must be greater than or equal to createdAt.",
      "createdAt must be less than or equal to updatedAt.",
      "All monetary fields (laborCost, materialCost, changeOrderCost, totalCost) must be non-negative.",
      "A billing summary is uniquely identified by billingSummaryId and belongs to exactly one projectId."
    ]
  }
} as const;

export default billingSummaryDomainEntity;

export const pipeline = [
  {
    "id": "billingSummary__domainEntity",
    "type": "domainEntity",
    "outputPath": "_102045_/l1/buildFlowFsm/layer_3_domain/entities/billingSummary.ts",
    "defPath": "_102045_/l1/buildFlowFsm/layer_3_domain/entities/billingSummary.defs.ts",
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
