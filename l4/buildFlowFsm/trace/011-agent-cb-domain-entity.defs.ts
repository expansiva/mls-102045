{
  "savedAt": "2026-07-31T05:04:59.860Z",
  "agentName": "agentCbDomainEntity",
  "stepId": 11,
  "planning": null,
  "status": "waiting_after_prompt",
  "payload": {
    "type": "flexible",
    "result": {
      "toolName": "submitDomainEntities",
      "arguments": {
        "status": "ok",
        "result": {
          "items": [
            {
              "entityId": "ChangeOrder",
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
          ]
        },
        "questions": [],
        "trace": [
          "Derived status lifecycle from status enum and field descriptions: draft → pendingReview → approved/rejected",
          "Derived required-when rules: rejectionReason required on rejection, approvedAt required on approval, rejectedAt required on rejection",
          "Derived mutual exclusivity of approvedAt and rejectedAt from terminal status states",
          "Derived temporal ordering: approvedAt/rejectedAt/updatedAt must be >= createdAt",
          "Derived impactType-specific constraints: schedule requires non-zero scheduleAdjustmentDays, cost requires non-zero costAdjustment",
          "Derived billing eligibility rule from status description: only approved affects job costing and billing"
        ]
      }
    },
    "status": "completed",
    "stepId": 17,
    "interaction": null,
    "nextSteps": null
  }
}
