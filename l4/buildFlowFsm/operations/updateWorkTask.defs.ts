/// <mls fileReference="_102045_/l4/buildFlowFsm/operations/updateWorkTask.defs.ts" enhancement="_blank"/>

export const operationUpdateWorkTask = {
  "operationId": "updateWorkTask",
  "title": "Update work task assignment and details",
  "actors": [
    "projectManager"
  ],
  "entity": "WorkTask",
  "kind": "update",
  "reads": [
    "WorkTask",
    "Project"
  ],
  "writes": [
    "WorkTask"
  ],
  "rulesApplied": [
    "operationsRequireActiveProject",
    "singleTaskAssignment",
    "taskDueDateWithinSchedule",
    "taskStatusUpdateAuthorization"
  ],
  "story": {
    "actor": "project manager",
    "goal": "Update an existing work task's assignment, due date, and details so field responsibilities stay accurate",
    "steps": [
      "Open the work task to edit",
      "Change title, description, assigned field worker, due date, and/or status as needed",
      "Confirm the update"
    ],
    "outcome": "The work task is saved with the new assignment and details, still tied to its active project and a single worker"
  },
  "accessPattern": {
    "kind": "commandInput",
    "description": "Form to edit an existing work task's assignment and details by workTaskId",
    "entity": "WorkTask",
    "keyField": "WorkTask.workTaskId",
    "pagination": "none",
    "selection": "single",
    "output": [
      "WorkTask.workTaskId",
      "WorkTask.projectId",
      "WorkTask.title",
      "WorkTask.description",
      "WorkTask.assignedWorkerId",
      "WorkTask.status",
      "WorkTask.dueDate",
      "WorkTask.completedAt",
      "WorkTask.cancelledAt",
      "WorkTask.cancellationReason",
      "WorkTask.updatedAt"
    ]
  },
  "outputShape": {
    "kind": "object",
    "fields": [
      {
        "name": "workTaskId",
        "type": "string",
        "required": true,
        "fieldRef": "WorkTask.workTaskId"
      },
      {
        "name": "projectId",
        "type": "string",
        "required": true,
        "fieldRef": "WorkTask.projectId"
      },
      {
        "name": "title",
        "type": "string",
        "required": true,
        "fieldRef": "WorkTask.title"
      },
      {
        "name": "description",
        "type": "string",
        "required": false,
        "fieldRef": "WorkTask.description"
      },
      {
        "name": "assignedWorkerId",
        "type": "string",
        "required": true,
        "fieldRef": "WorkTask.assignedWorkerId"
      },
      {
        "name": "status",
        "type": "string",
        "required": true,
        "fieldRef": "WorkTask.status"
      },
      {
        "name": "dueDate",
        "type": "string",
        "required": true,
        "fieldRef": "WorkTask.dueDate"
      },
      {
        "name": "completedAt",
        "type": "string",
        "required": false,
        "fieldRef": "WorkTask.completedAt"
      },
      {
        "name": "cancelledAt",
        "type": "string",
        "required": false,
        "fieldRef": "WorkTask.cancelledAt"
      },
      {
        "name": "cancellationReason",
        "type": "string",
        "required": false,
        "fieldRef": "WorkTask.cancellationReason"
      },
      {
        "name": "updatedAt",
        "type": "string",
        "required": true,
        "fieldRef": "WorkTask.updatedAt"
      }
    ]
  },
  "inputs": [
    {
      "inputId": "workTaskId",
      "fieldRef": "WorkTask.workTaskId",
      "required": true,
      "source": "routeParam",
      "description": "Identifier of the work task being updated"
    },
    {
      "inputId": "title",
      "fieldRef": "WorkTask.title",
      "required": false,
      "source": "userInput",
      "description": "Updated short name for the work task"
    },
    {
      "inputId": "description",
      "fieldRef": "WorkTask.description",
      "required": false,
      "source": "userInput",
      "description": "Updated detailed scope or instructions for the task"
    },
    {
      "inputId": "assignedWorkerId",
      "fieldRef": "WorkTask.assignedWorkerId",
      "required": false,
      "source": "userInput",
      "description": "Updated field worker assigned to this task (single worker only)"
    },
    {
      "inputId": "dueDate",
      "fieldRef": "WorkTask.dueDate",
      "required": false,
      "source": "userInput",
      "description": "Updated due date for completing the task"
    },
    {
      "inputId": "status",
      "fieldRef": "WorkTask.status",
      "required": false,
      "source": "userInput",
      "description": "Updated lifecycle status of the task"
    },
    {
      "inputId": "cancellationReason",
      "fieldRef": "WorkTask.cancellationReason",
      "required": false,
      "source": "userInput",
      "description": "Reason when cancelling the task"
    },
    {
      "inputId": "updatedAt",
      "fieldRef": "WorkTask.updatedAt",
      "required": true,
      "source": "systemDefault",
      "description": "Timestamp of this update, set by the system"
    }
  ],
  "contextResolution": [
    {
      "inputId": "workTaskId",
      "targetRef": "WorkTask.workTaskId",
      "source": "routeParam",
      "originRef": "routeParam.workTaskId",
      "description": "Resolved from the route parameter identifying the work task being edited"
    },
    {
      "inputId": "updatedAt",
      "targetRef": "WorkTask.updatedAt",
      "source": "systemDefault",
      "originRef": "systemDefault.now",
      "description": "Server sets the update timestamp to the current time"
    }
  ],
  "acceptanceAssertions": [
    "After confirmation the work task retains its workTaskId and projectId and reflects any provided title, description, assignedWorkerId, dueDate, and status",
    "The work task remains assigned to exactly one field worker after the update",
    "The due date, when changed, falls within the parent project's startDate and endDate schedule window",
    "The parent project must be in active status or the update is rejected",
    "Only the project manager (or the currently assigned field worker for status) may apply the update; unauthorized actors are rejected",
    "When status is set to completed, completedAt is recorded; when set to cancelled, cancelledAt and cancellationReason are recorded",
    "updatedAt is set to the time of the successful update"
  ],
  "pageId": "updateWorkTask",
  "commandName": "updateWorkTask",
  "bffName": "buildFlowFsm.updateWorkTask.updateWorkTask",
  "capability": {
    "capabilityId": "updateWorkTask",
    "title": "Update work task assignment and details",
    "actor": "projectManager",
    "priority": "now"
  },
  "statusFrontend": "toCreate",
  "statusBackend": "toCreate"
} as const;

export default operationUpdateWorkTask;
