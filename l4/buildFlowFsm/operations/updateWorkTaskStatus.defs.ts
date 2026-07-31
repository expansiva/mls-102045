/// <mls fileReference="_102045_/l4/buildFlowFsm/operations/updateWorkTaskStatus.defs.ts" enhancement="_blank"/>

export const operationUpdateWorkTaskStatus = {
  "operationId": "updateWorkTaskStatus",
  "title": "Update work task status",
  "actors": [
    "fieldWorker",
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
    "taskStatusUpdateAuthorization",
    "operationsRequireActiveProject",
    "fieldWorkerTaskVisibility"
  ],
  "story": {
    "actor": "Field worker",
    "goal": "Update the status of an assigned work task to reflect current progress or completion so the project manager and dashboard show field reality.",
    "steps": [
      "Open the assigned work task being worked on",
      "Select the new lifecycle status (in progress or completed)",
      "Confirm the status change",
      "System records timestamps and persists the updated task"
    ],
    "outcome": "The work task status is updated, completion timestamp is set when completed, and project views reflect the current field state."
  },
  "accessPattern": {
    "kind": "commandInput",
    "description": "Form to change the lifecycle status of a selected work task by the assigned field worker or project manager.",
    "entity": "WorkTask",
    "keyField": "WorkTask.workTaskId",
    "pagination": "none",
    "selection": "single",
    "output": [
      "WorkTask.workTaskId",
      "WorkTask.projectId",
      "WorkTask.title",
      "WorkTask.status",
      "WorkTask.dueDate",
      "WorkTask.completedAt",
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
        "name": "assignedWorkerId",
        "type": "string",
        "required": true,
        "fieldRef": "WorkTask.assignedWorkerId"
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
      "source": "selectedEntity",
      "description": "Identifier of the work task whose status is being updated."
    },
    {
      "inputId": "status",
      "fieldRef": "WorkTask.status",
      "required": true,
      "source": "userInput",
      "description": "New lifecycle status for the work task (assigned, inProgress, completed, or cancelled)."
    },
    {
      "inputId": "cancellationReason",
      "fieldRef": "WorkTask.cancellationReason",
      "required": false,
      "source": "userInput",
      "description": "Optional reason recorded when the task is cancelled."
    },
    {
      "inputId": "updatedAt",
      "fieldRef": "WorkTask.updatedAt",
      "required": true,
      "source": "systemDefault",
      "description": "Timestamp of this status update, set automatically by the system."
    },
    {
      "inputId": "completedAt",
      "fieldRef": "WorkTask.completedAt",
      "required": false,
      "source": "systemDefault",
      "description": "Timestamp set automatically when status is changed to completed."
    },
    {
      "inputId": "cancelledAt",
      "fieldRef": "WorkTask.cancelledAt",
      "required": false,
      "source": "systemDefault",
      "description": "Timestamp set automatically when status is changed to cancelled."
    },
    {
      "inputId": "actorId",
      "type": "string",
      "required": true,
      "source": "actorSession",
      "description": "Authenticated actor performing the status update; must be the assigned worker or a project manager."
    }
  ],
  "contextResolution": [
    {
      "inputId": "workTaskId",
      "targetRef": "WorkTask.workTaskId",
      "source": "selectedEntity",
      "originRef": "WorkTask.workTaskId",
      "description": "Resolved from the work task the user selected in the current screen or list."
    },
    {
      "inputId": "updatedAt",
      "targetRef": "WorkTask.updatedAt",
      "source": "systemDefault",
      "originRef": "systemDefault.now",
      "description": "Server sets updatedAt to the current timestamp at persistence time."
    },
    {
      "inputId": "completedAt",
      "targetRef": "WorkTask.completedAt",
      "source": "systemDefault",
      "originRef": "systemDefault.now",
      "description": "When the new status is completed, server sets completedAt to the current timestamp."
    },
    {
      "inputId": "cancelledAt",
      "targetRef": "WorkTask.cancelledAt",
      "source": "systemDefault",
      "originRef": "systemDefault.now",
      "description": "When the new status is cancelled, server sets cancelledAt to the current timestamp."
    },
    {
      "inputId": "actorId",
      "targetRef": "WorkTask.assignedWorkerId",
      "source": "actorSession",
      "originRef": "actorSession.actorId",
      "description": "Authenticated actor id used to authorize that a field worker may only update tasks assigned to them."
    }
  ],
  "acceptanceAssertions": [
    "After confirmation the work task exists with the newly selected status value.",
    "Only the field worker assigned to the task or a project manager can successfully update the task status; other actors are rejected.",
    "A field worker can only update status on work tasks where assignedWorkerId matches their actor id.",
    "When status is set to completed, completedAt is populated with the update timestamp.",
    "When status is set to cancelled, cancelledAt is populated and an optional cancellationReason may be stored.",
    "Status updates are rejected when the parent project is not in active status.",
    "updatedAt is refreshed to the time of the status change on every successful update."
  ],
  "pageId": "workTaskLifecycle",
  "commandName": "updateWorkTaskStatus",
  "bffName": "buildFlowFsm.workTaskLifecycle.updateWorkTaskStatus",
  "capability": {
    "capabilityId": "workTaskLifecycle",
    "title": "Work task lifecycle",
    "actor": "fieldWorker",
    "priority": "now"
  },
  "statusFrontend": "toCreate",
  "statusBackend": "toCreate"
} as const;

export default operationUpdateWorkTaskStatus;
