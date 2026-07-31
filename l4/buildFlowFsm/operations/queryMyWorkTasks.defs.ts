/// <mls fileReference="_102045_/l4/buildFlowFsm/operations/queryMyWorkTasks.defs.ts" enhancement="_blank"/>

export const operationQueryMyWorkTasks = {
  "operationId": "queryMyWorkTasks",
  "title": "Browse my assigned tasks",
  "actors": [
    "fieldWorker"
  ],
  "entity": "WorkTask",
  "kind": "query",
  "reads": [
    "WorkTask",
    "Project"
  ],
  "writes": [],
  "rulesApplied": [
    "fieldWorkerTaskVisibility",
    "taskSortingByDueDate",
    "overdueTaskHighlighting",
    "mobileFieldUsability",
    "singleTaskAssignment"
  ],
  "story": {
    "actor": "fieldWorker",
    "goal": "See the work tasks assigned to me so I know what to do and what is due soon",
    "steps": [
      "Open the mobile app to the my-tasks list",
      "System loads only tasks assigned to the signed-in field worker",
      "Tasks are shown sorted by due date with overdue items highlighted",
      "Review each task title, description, due date, status, and project context",
      "Select a task to work on or open its details"
    ],
    "outcome": "The field worker has a clear, urgency-sorted list of only their assigned tasks and can pick one to progress"
  },
  "accessPattern": {
    "kind": "list",
    "description": "Mobile list of work tasks assigned to the signed-in field worker, sorted by due date for urgency",
    "entity": "WorkTask",
    "keyField": "WorkTask.workTaskId",
    "filters": [
      "WorkTask.assignedWorkerId",
      "WorkTask.status",
      "WorkTask.dueDate"
    ],
    "sort": [
      "WorkTask.dueDate"
    ],
    "pagination": "optional",
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
      "WorkTask.createdAt",
      "WorkTask.updatedAt",
      "Project.name"
    ]
  },
  "outputShape": {
    "kind": "paginated",
    "fields": [
      {
        "name": "workTasks",
        "type": "array",
        "required": true,
        "item": {
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
              "name": "completedAt",
              "type": "string",
              "required": false,
              "fieldRef": "WorkTask.completedAt"
            },
            {
              "name": "isOverdue",
              "type": "boolean",
              "required": true
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
        }
      },
      {
        "name": "total",
        "type": "number",
        "required": true
      }
    ]
  },
  "inputs": [
    {
      "inputId": "assignedWorkerId",
      "fieldRef": "WorkTask.assignedWorkerId",
      "required": true,
      "source": "actorSession",
      "description": "Identifier of the signed-in field worker; used to restrict the list to their assignments only"
    },
    {
      "inputId": "status",
      "fieldRef": "WorkTask.status",
      "required": false,
      "source": "userInput",
      "description": "Optional filter to show tasks in a specific lifecycle status (assigned, inProgress, completed, cancelled)"
    },
    {
      "inputId": "page",
      "type": "number",
      "required": false,
      "source": "userInput",
      "description": "Optional page number for paginated results"
    },
    {
      "inputId": "pageSize",
      "type": "number",
      "required": false,
      "source": "userInput",
      "description": "Optional page size for paginated results"
    }
  ],
  "contextResolution": [
    {
      "inputId": "assignedWorkerId",
      "targetRef": "WorkTask.assignedWorkerId",
      "source": "actorSession",
      "originRef": "actorSession.actorId",
      "description": "Resolve the signed-in field worker id from the actor session and force-filter WorkTask.assignedWorkerId so only that worker's tasks are returned"
    }
  ],
  "acceptanceAssertions": [
    "Only work tasks whose assignedWorkerId equals the signed-in field worker are returned; tasks assigned to other workers are never included",
    "Returned tasks are sorted by dueDate ascending so the most urgent work appears first",
    "Each task item includes an isOverdue flag that is true when dueDate is before the current date and status is not completed or cancelled",
    "Each task item exposes workTaskId, title, description, status, dueDate, projectId, and project name so the worker can review scope and urgency",
    "Optional status filter, when provided, restricts results to tasks in that status only",
    "The response is paginated with a workTasks array and a total count of matching assigned tasks",
    "The list is fully usable as a mobile field-worker view without requiring desktop access"
  ],
  "pageId": "queryMyWorkTasks",
  "commandName": "queryMyWorkTasks",
  "bffName": "buildFlowFsm.queryMyWorkTasks.queryMyWorkTasks",
  "capability": {
    "capabilityId": "queryMyWorkTasks",
    "title": "Browse my assigned tasks",
    "actor": "fieldWorker",
    "priority": "now"
  },
  "statusFrontend": "toCreate",
  "statusBackend": "toCreate"
} as const;

export default operationQueryMyWorkTasks;
