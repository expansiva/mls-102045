/// <mls fileReference="_102045_/l4/buildFlowFsm/operations/queryTimeLogs.defs.ts" enhancement="_blank"/>

export const operationQueryTimeLogs = {
  "operationId": "queryTimeLogs",
  "title": "Browse time logs",
  "actors": [
    "projectManager"
  ],
  "entity": "TimeLog",
  "kind": "query",
  "reads": [
    "TimeLog"
  ],
  "writes": [],
  "rulesApplied": [
    "jobCostDerivation",
    "timeLogLinkingRequired"
  ],
  "story": {
    "actor": "projectManager",
    "goal": "Browse recorded time logs to review labor hours and costs for job costing",
    "steps": [
      "Open the time logs browse list",
      "Optionally filter by work task, worker name, log date, or status",
      "Review hours worked and labor cost on each entry"
    ],
    "outcome": "The project manager sees time log entries with labor costs that feed job costing and budget-versus-actual tracking"
  },
  "accessPattern": {
    "kind": "list",
    "description": "Paginated list of time log entries for labor cost and job costing review",
    "entity": "TimeLog",
    "keyField": "TimeLog.timeLogId",
    "filters": [
      "TimeLog.workTaskId",
      "TimeLog.workerName",
      "TimeLog.logDate",
      "TimeLog.status"
    ],
    "sort": [
      "TimeLog.logDate",
      "TimeLog.createdAt"
    ],
    "pagination": "optional",
    "selection": "none",
    "output": [
      "TimeLog.timeLogId",
      "TimeLog.workTaskId",
      "TimeLog.workerName",
      "TimeLog.logDate",
      "TimeLog.hoursWorked",
      "TimeLog.laborCost",
      "TimeLog.status",
      "TimeLog.voidedAt",
      "TimeLog.voidReason",
      "TimeLog.createdAt"
    ]
  },
  "outputShape": {
    "kind": "paginated",
    "fields": [
      {
        "name": "timeLogs",
        "type": "array",
        "required": true,
        "item": {
          "fields": [
            {
              "name": "timeLogId",
              "type": "string",
              "required": true,
              "fieldRef": "TimeLog.timeLogId"
            },
            {
              "name": "workTaskId",
              "type": "string",
              "required": true,
              "fieldRef": "TimeLog.workTaskId"
            },
            {
              "name": "workerName",
              "type": "string",
              "required": true,
              "fieldRef": "TimeLog.workerName"
            },
            {
              "name": "logDate",
              "type": "string",
              "required": true,
              "fieldRef": "TimeLog.logDate"
            },
            {
              "name": "hoursWorked",
              "type": "number",
              "required": true,
              "fieldRef": "TimeLog.hoursWorked"
            },
            {
              "name": "laborCost",
              "type": "number",
              "required": true,
              "fieldRef": "TimeLog.laborCost"
            },
            {
              "name": "status",
              "type": "string",
              "required": true,
              "fieldRef": "TimeLog.status"
            },
            {
              "name": "voidedAt",
              "type": "string",
              "required": false,
              "fieldRef": "TimeLog.voidedAt"
            },
            {
              "name": "voidReason",
              "type": "string",
              "required": false,
              "fieldRef": "TimeLog.voidReason"
            },
            {
              "name": "createdAt",
              "type": "string",
              "required": true,
              "fieldRef": "TimeLog.createdAt"
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
      "inputId": "workTaskId",
      "fieldRef": "TimeLog.workTaskId",
      "required": false,
      "source": "userInput",
      "description": "Optional filter to show time logs for a specific work task"
    },
    {
      "inputId": "workerName",
      "fieldRef": "TimeLog.workerName",
      "required": false,
      "source": "userInput",
      "description": "Optional filter by field worker name"
    },
    {
      "inputId": "logDate",
      "fieldRef": "TimeLog.logDate",
      "required": false,
      "source": "userInput",
      "description": "Optional filter by the calendar date the work was performed"
    },
    {
      "inputId": "status",
      "fieldRef": "TimeLog.status",
      "required": false,
      "source": "userInput",
      "description": "Optional filter by time log status (posted or voided)"
    },
    {
      "inputId": "page",
      "type": "number",
      "required": false,
      "source": "userInput",
      "description": "Page number for paginated results"
    },
    {
      "inputId": "pageSize",
      "type": "number",
      "required": false,
      "source": "userInput",
      "description": "Number of time log entries per page"
    }
  ],
  "contextResolution": [],
  "acceptanceAssertions": [
    "The operation returns a paginated list of time log entries including workTaskId, workerName, logDate, hoursWorked, laborCost, and status",
    "Each returned time log is linked to a work task and a worker name, satisfying time-log linking requirements",
    "Labor cost values on returned time logs are available for job cost derivation and budget-versus-actual review",
    "Time logs can be filtered by work task, worker name, log date, and status, including both posted and voided entries"
  ],
  "pageId": "queryTimeLogs",
  "commandName": "queryTimeLogs",
  "bffName": "buildFlowFsm.queryTimeLogs.queryTimeLogs",
  "capability": {
    "capabilityId": "queryTimeLogs",
    "title": "Browse time logs",
    "actor": "projectManager",
    "priority": "now"
  },
  "statusFrontend": "toCreate",
  "statusBackend": "toCreate"
} as const;

export default operationQueryTimeLogs;
