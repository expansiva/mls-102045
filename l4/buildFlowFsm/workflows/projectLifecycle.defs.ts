/// <mls fileReference="_102045_/l4/buildFlowFsm/workflows/projectLifecycle.defs.ts" enhancement="_blank"/>

export const workflowProjectLifecycle = {
  "workflowId": "projectLifecycle",
  "title": "Project lifecycle",
  "executionMode": "sequential",
  "trigger": "Project manager creates a new construction or field service project with client, site, budget, and schedule.",
  "actors": [
    "projectManager"
  ],
  "states": [
    "registered",
    "active",
    "onHold",
    "closed",
    "cancelled"
  ],
  "transitions": [
    {
      "from": "registered",
      "to": "active",
      "on": "updateProjectStatus",
      "by": "projectManager",
      "guard": "Name, client, and site address are present"
    },
    {
      "from": "active",
      "to": "onHold",
      "on": "updateProjectStatus",
      "by": "projectManager",
      "guard": "Hold reason is recorded"
    },
    {
      "from": "onHold",
      "to": "active",
      "on": "updateProjectStatus",
      "by": "projectManager"
    },
    {
      "from": "active",
      "to": "closed",
      "on": "updateProjectStatus",
      "by": "projectManager"
    },
    {
      "from": "active",
      "to": "cancelled",
      "on": "updateProjectStatus",
      "by": "projectManager",
      "guard": "Cancellation reason is recorded"
    },
    {
      "from": "onHold",
      "to": "cancelled",
      "on": "updateProjectStatus",
      "by": "projectManager",
      "guard": "Cancellation reason is recorded"
    },
    {
      "from": "registered",
      "to": "cancelled",
      "on": "updateProjectStatus",
      "by": "projectManager",
      "guard": "Cancellation reason is recorded"
    }
  ],
  "operationIds": [
    "createProject",
    "updateProjectStatus"
  ],
  "entities": [
    "Project",
    "Client"
  ],
  "rulesApplied": [
    "projectActivationRequiresCoreFields",
    "jobCostingRequiresBudgetAndSchedule",
    "operationsRequireActiveProject"
  ],
  "story": {
    "actor": "projectManager",
    "goal": "Set up and manage a construction project through its full lifecycle from registration to closure.",
    "steps": [
      "The project manager enters the project name, client, and site address.",
      "The project manager sets the budget and planned start and end dates.",
      "The project manager activates the project so field work and costing can begin.",
      "When needed, the project manager places the project on hold or resumes it.",
      "The project manager closes or cancels the project when work ends or is abandoned."
    ],
    "outcome": "The project moves cleanly through registered, active, optional hold, and closed or cancelled status with job costing and field work gated by status."
  },
  "pageId": "projectLifecycle",
  "capabilities": [
    {
      "capabilityId": "projectLifecycle",
      "title": "Project lifecycle",
      "actor": "projectManager",
      "priority": "now"
    }
  ],
  "statusFrontend": "toCreate",
  "statusBackend": "toCreate"
} as const;

export default workflowProjectLifecycle;
