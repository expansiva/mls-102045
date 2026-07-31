/// <mls fileReference="_102045_/l4/buildFlowFsm/journeys/viewProjectStatus.defs.ts" enhancement="_blank"/>

export const viewProjectStatusJourney = {
  "journeyId": "viewProjectStatus",
  "actorId": "client",
  "title": "Receive and review a project status report",
  "goal": "Stay informed about project progress, budget status, and task completion without needing access to internal operations.",
  "steps": [
    "Receive status report",
    "Review progress summary"
  ],
  "outcome": "The client has a clear, professional view of project progress and budget status without needing internal system access.",
  "operationIds": [
    "updateStatusReportStatus",
    "viewStatusReport"
  ],
  "workspaceId": "statusReportWorkspace"
} as const;

export default viewProjectStatusJourney;
