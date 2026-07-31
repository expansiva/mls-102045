/// <mls fileReference="_102045_/l4/buildFlowFsm/journeys/reviewBillingSummary.defs.ts" enhancement="_blank"/>

export const reviewBillingSummaryJourney = {
  "journeyId": "reviewBillingSummary",
  "actorId": "client",
  "title": "Review a billing summary and invoice",
  "goal": "Review charges for labor, materials, and change orders so the client understands and can approve payment.",
  "steps": [
    "Receive billing summary",
    "Review charges"
  ],
  "outcome": "The client has reviewed the billing summary and invoice, understands the charges, and is ready to process payment externally.",
  "operationIds": [
    "shareBillingSummary",
    "viewBillingSummary",
    "sendInvoice",
    "viewInvoice",
    "createBillingSummary",
    "queryBillingSummaries"
  ],
  "workspaceId": "billingSummaryWorkspace"
} as const;

export default reviewBillingSummaryJourney;
