/// <mls fileReference="_102045_/l4/buildFlowFsm/operations/viewWorkTask.defs.ts" enhancement="_blank"/>

export const operationViewWorkTask = {
  "operationId": "viewWorkTask",
  "title": "View work task details",
  "actors": [
    "fieldWorker"
  ],
  "entity": "WorkTask",
  "kind": "view",
  "reads": [
    "WorkTask",
    "Project"
  ],
  "writes": [],
  "rulesApplied": [
    "fieldWorkerTaskVisibility",
    "mobileFieldUsability",
    "overdueTaskHighlighting"
  ],
  "story": {
    "actor": "fieldWorker",
    "goal": "Read the full details of an assigned work task to understand scope, due date, and current status before starting or logging progress.",
    "steps": [
      "Open a specific work task from the assigned-tasks list on mobile",
      "Load the task details including description, due date, status, and project context",
      "Confirm the task is assigned to the current field worker before showing it"
    ],
    "outcome": "The field worker sees the complete task details needed to understand scope and urgency, restricted to tasks assigned to them."
  },
  "accessPattern": {
    "kind": "getById",
    "description": "Load a single work task by id for the field worker detail screen, including parent project name for context.",
    "entity": "WorkTask",
    "keyField": "WorkTask.workTaskId",
    "pagination": "none",
    "selection": "none",
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
      "WorkTask.createdAt",
      "WorkTask.updatedAt",
      "Project.name"
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
        "name": "projectName",
        "type": "string",
        "required": true,
        "fieldRef": "Project.name"
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
        "name": "isOverdue",
        "type": "boolean",
        "required": true
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
        "name": "createdAt",
        "type": "string",
        "required": true,
        "fieldRef": "WorkTask.createdAt"
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
      "description": "Identifier of the work task to open on the detail screen."
    },
    {
      "inputId": "actorId",
      "fieldRef": "WorkTask.assignedWorkerId",
      "required": true,
      "source": "actorSession",
      "description": "Authenticated field worker id used to enforce assigned-only visibility."
    }
  ],
  "contextResolution": [
    {
      "inputId": "workTaskId",
      "targetRef": "WorkTask.workTaskId",
      "source": "routeParam",
      "originRef": "routeParam.workTaskId",
      "description": "Resolve the work task primary key from the route parameter workTaskId."
    },
    {
      "inputId": "actorId",
      "targetRef": "WorkTask.assignedWorkerId",
      "source": "actorSession",
      "originRef": "actorSession.actorId",
      "description": "Resolve the current field worker from the authenticated session and require the task assignedWorkerId to match before returning details."
    }
  ],
  "acceptanceAssertions": [
    "After opening a task from the assigned list, the response contains that task's title, description, due date, status, and project name.",
    "Only a work task whose assignedWorkerId equals the authenticated field worker is returned; tasks assigned to other workers are not visible.",
    "When the task due date is before the current date and status is not completed or cancelled, isOverdue is true so the mobile UI can highlight urgency.",
    "The detail payload is complete enough for the field worker to understand scope and urgency without desktop access.",
    "If the workTaskId does not exist or is not assigned to the current worker, the operation fails without leaking other workers' task data."
  ],
  "pageId": "viewWorkTask",
  "commandName": "viewWorkTask",
  "bffName": "buildFlowFsm.viewWorkTask.viewWorkTask",
  "capability": {
    "capabilityId": "viewWorkTask",
    "title": "View work task details",
    "actor": "fieldWorker",
    "priority": "now"
  },
  "statusFrontend": "toCreate",
  "statusBackend": "toCreate"
} as const;

export default operationViewWorkTask;
