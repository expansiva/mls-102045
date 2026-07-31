/// <mls fileReference="_102045_/l4/buildFlowFsm/journeys/viewAssignedTasks.defs.ts" enhancement="_blank"/>

export const viewAssignedTasksJourney = {
  "journeyId": "viewAssignedTasks",
  "actorId": "fieldWorker",
  "title": "View assigned tasks for the day",
  "goal": "See which tasks are assigned and due so the field worker knows what to work on today.",
  "steps": [
    "Check today's tasks",
    "Review task details"
  ],
  "outcome": "The field worker has a clear list of assigned tasks with descriptions and due dates, ready to begin work.",
  "operationIds": [
    "createWorkTask",
    "updateWorkTask",
    "updateWorkTaskStatus",
    "queryWorkTasks",
    "queryMyWorkTasks",
    "viewWorkTask"
  ],
  "workspaceId": "projectDetailWorkspace"
} as const;

export default viewAssignedTasksJourney;
