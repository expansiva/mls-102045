/// <mls fileReference="_102045_/l4/buildFlowFsm/workflows/billingSummaryLifecycle.defs.ts" enhancement="_blank"/>

export const workflowBillingSummaryLifecycle = {
  "workflowId": "billingSummaryLifecycle",
  "title": "Billing summary lifecycle",
  "executionMode": "sequential",
  "trigger": "Billing staff compiles accumulated job costs into a new client-facing billing summary.",
  "actors": [
    "billingStaff"
  ],
  "states": [
    "draft",
    "shared"
  ],
  "transitions": [
    {
      "from": "draft",
      "to": "shared",
      "on": "shareBillingSummary",
      "by": "billingStaff"
    }
  ],
  "operationIds": [
    "createBillingSummary",
    "shareBillingSummary"
  ],
  "entities": [
    "BillingSummary",
    "Project",
    "ChangeOrder",
    "Client"
  ],
  "rulesApplied": [
    "onlyApprovedChangeOrdersAffectCosting",
    "billingSummaryClientFacing",
    "clientBillingAccess"
  ],
  "story": {
    "actor": "billingStaff",
    "goal": "Compile accumulated job costs into a clear client-facing billing summary so the client understands what they are being charged for.",
    "steps": [
      "Billing staff reviews labor, material, and approved change order costs for the project.",
      "Billing staff assembles a client-facing billing summary that breaks down labor, materials, and change orders.",
      "Billing staff shares the billing summary with the client for review before an invoice is generated."
    ],
    "outcome": "A clear billing summary with labor, material, and change order breakdowns is prepared and shared with the client."
  },
  "pageId": "billingSummaryLifecycle",
  "capabilities": [
    {
      "capabilityId": "billingSummaryLifecycle",
      "title": "Billing summary lifecycle",
      "actor": "billingStaff",
      "priority": "now"
    }
  ],
  "statusFrontend": "toCreate",
  "statusBackend": "toCreate"
} as const;

export default workflowBillingSummaryLifecycle;
