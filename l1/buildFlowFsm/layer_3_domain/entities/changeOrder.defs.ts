/// <mls fileReference="_102045_/l1/buildFlowFsm/layer_3_domain/entities/changeOrder.defs.ts" enhancement="_blank"/>

export const changeOrderDomainEntity = {
  "schemaVersion": "2026-06-26",
  "artifactType": "domainEntity",
  "artifactId": "ChangeOrder",
  "moduleName": "buildFlowFsm",
  "status": "draft",
  "source": {
    "agentName": "agentCbDomainEntity",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "entityId": "ChangeOrder",
    "title": "Change Order",
    "fields": [
      {
        "fieldId": "changeOrderId",
        "type": "uuid",
        "required": true,
        "description": "Unique identifier for the change order."
      },
      {
        "fieldId": "projectId",
        "type": "uuid",
        "required": true,
        "description": "Reference to the active project this change order applies to."
      },
      {
        "fieldId": "title",
        "type": "string",
        "required": true,
        "description": "Short summary title of the change order."
      },
      {
        "fieldId": "description",
        "type": "text",
        "required": true,
        "description": "Detailed description of the scope, cost, or schedule impact being requested."
      },
      {
        "fieldId": "impactType",
        "type": "string",
        "required": true,
        "description": "Primary category of the impact this change order introduces.",
        "enum": [
          "scope",
          "cost",
          "schedule"
        ]
      },
      {
        "fieldId": "costAdjustment",
        "type": "money",
        "required": true,
        "description": "Monetary amount of the cost adjustment; positive for additions, negative for deductions."
      },
      {
        "fieldId": "scheduleAdjustmentDays",
        "type": "number",
        "required": false,
        "description": "Number of days added to or removed from the project schedule; positive for extensions, negative for reductions."
      },
      {
        "fieldId": "status",
        "type": "string",
        "required": true,
        "description": "Approval lifecycle state of the change order; only approved change orders affect job costing and billing.",
        "enum": [
          "draft",
          "pendingReview",
          "approved",
          "rejected"
        ]
      },
      {
        "fieldId": "rejectionReason",
        "type": "text",
        "required": false,
        "description": "Reason recorded when a change order is rejected during review."
      },
      {
        "fieldId": "approvedAt",
        "type": "datetime",
        "required": false,
        "description": "Timestamp when the change order was approved and became eligible for job costing and billing."
      },
      {
        "fieldId": "rejectedAt",
        "type": "datetime",
        "required": false,
        "description": "Timestamp when the change order was rejected during review."
      },
      {
        "fieldId": "createdAt",
        "type": "datetime",
        "required": true,
        "description": "Timestamp when the change order was created."
      },
      {
        "fieldId": "updatedAt",
        "type": "datetime",
        "required": true,
        "description": "Timestamp of the last modification to the change order."
      }
    ],
    "valueObjects": [],
    "statusEnum": [
      "draft",
      "pendingReview",
      "approved",
      "rejected"
    ],
    "invariants": [
      "Status transitions: draft → pendingReview → approved | rejected. No other transitions are valid; once approved or rejected the status is terminal.",
      "rejectionReason is required when status is 'rejected' and must be empty otherwise.",
      "approvedAt is required when status is 'approved' and must be null otherwise.",
      "rejectedAt is required when status is 'rejected' and must be null otherwise.",
      "approvedAt and rejectedAt are mutually exclusive — a change order cannot be both approved and rejected.",
      "approvedAt, when present, must be greater than or equal to createdAt.",
      "rejectedAt, when present, must be greater than or equal to createdAt.",
      "updatedAt must be greater than or equal to createdAt.",
      "When impactType is 'schedule', scheduleAdjustmentDays is required and must be non-zero.",
      "When impactType is 'cost', costAdjustment must be non-zero.",
      "When impactType is 'scope', costAdjustment may be zero and scheduleAdjustmentDays may be null.",
      "Only change orders with status 'approved' are eligible to affect job costing and billing.",
      "costAdjustment may be positive (addition) or negative (deduction) but must not be null regardless of impactType.",
      "A change order cannot transition from 'draft' directly to 'approved' or 'rejected'; it must pass through 'pendingReview' first."
    ]
  }
} as const;

export default changeOrderDomainEntity;

export const pipeline = [
  {
    "id": "changeOrder__domainEntity",
    "type": "domainEntity",
    "outputPath": "_102045_/l1/buildFlowFsm/layer_3_domain/entities/changeOrder.ts",
    "defPath": "_102045_/l1/buildFlowFsm/layer_3_domain/entities/changeOrder.defs.ts",
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
