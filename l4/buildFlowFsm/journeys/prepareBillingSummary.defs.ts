/// <mls fileReference="_102045_/l4/buildFlowFsm/journeys/prepareBillingSummary.defs.ts" enhancement="_blank"/>

export const prepareBillingSummaryJourney = {
  "journeyId": "prepareBillingSummary",
  "actorId": "billingStaff",
  "title": "Prepare a client billing summary",
  "goal": "Compile accumulated job costs into a clear client-facing billing summary so the client understands what they are being charged for.",
  "steps": [
    "Review accumulated job costs",
    "Compile billing summary",
    "Share billing summary with client"
  ],
  "outcome": "A clear billing summary with labor, material, and change order breakdowns is prepared and shared with the client.",
  "operationIds": [
    "createProject",
    "updateProject",
    "viewDashboard",
    "viewJobCostSummary",
    "updateChangeOrderStatus",
    "queryChangeOrders",
    "viewChangeOrder",
    "createTimeLog",
    "queryTimeLogs",
    "createMaterialUsage",
    "queryMaterialUsages",
    "createBillingSummary",
    "createInvoice",
    "shareBillingSummary",
    "queryBillingSummaries",
    "viewBillingSummary",
    "sendInvoice",
    "viewInvoice"
  ],
  "workspaceId": "dashboardWorkspace"
} as const;

export default prepareBillingSummaryJourney;
