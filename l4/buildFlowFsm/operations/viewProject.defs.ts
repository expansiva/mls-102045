/// <mls fileReference="_102045_/l4/buildFlowFsm/operations/viewProject.defs.ts" enhancement="_blank"/>

export const operationViewProject = {
  "operationId": "viewProject",
  "title": "View project detail and timeline",
  "actors": [
    "projectManager"
  ],
  "entity": "Project",
  "kind": "view",
  "reads": [
    "Project",
    "Client",
    "WorkTask"
  ],
  "writes": [],
  "rulesApplied": [
    "operationsRequireActiveProject"
  ],
  "story": {
    "actor": "projectManager",
    "goal": "Open a project to review its core details, client, schedule, and task timeline before planning or reporting.",
    "steps": [
      "Navigate to a specific project from the portfolio or dashboard",
      "Load the project record with client and schedule fields",
      "Review the task list and simple timeline against the project dates",
      "Use the detail as the starting point for status reports or further planning"
    ],
    "outcome": "The project manager sees the full project detail and task timeline for the selected project."
  },
  "accessPattern": {
    "kind": "getById",
    "description": "Load one project by id with client summary and task timeline for the detail screen.",
    "entity": "Project",
    "keyField": "Project.projectId",
    "pagination": "none",
    "selection": "single",
    "output": [
      "Project.projectId",
      "Project.name",
      "Project.clientId",
      "Project.siteAddress",
      "Project.budget",
      "Project.startDate",
      "Project.endDate",
      "Project.status",
      "Project.holdReason",
      "Project.closedAt",
      "Project.cancelledAt",
      "Project.cancellationReason",
      "Project.createdAt",
      "Project.updatedAt",
      "Client.name",
      "Client.company",
      "WorkTask.workTaskId",
      "WorkTask.title",
      "WorkTask.status",
      "WorkTask.dueDate",
      "WorkTask.assignedWorkerId"
    ]
  },
  "outputShape": {
    "kind": "object",
    "fields": [
      {
        "name": "projectId",
        "type": "string",
        "required": true,
        "fieldRef": "Project.projectId"
      },
      {
        "name": "name",
        "type": "string",
        "required": true,
        "fieldRef": "Project.name"
      },
      {
        "name": "clientId",
        "type": "string",
        "required": true,
        "fieldRef": "Project.clientId"
      },
      {
        "name": "clientName",
        "type": "string",
        "required": true,
        "fieldRef": "Client.name"
      },
      {
        "name": "clientCompany",
        "type": "string",
        "required": false,
        "fieldRef": "Client.company"
      },
      {
        "name": "siteAddress",
        "type": "string",
        "required": true,
        "fieldRef": "Project.siteAddress"
      },
      {
        "name": "budget",
        "type": "number",
        "required": true,
        "fieldRef": "Project.budget"
      },
      {
        "name": "startDate",
        "type": "string",
        "required": true,
        "fieldRef": "Project.startDate"
      },
      {
        "name": "endDate",
        "type": "string",
        "required": true,
        "fieldRef": "Project.endDate"
      },
      {
        "name": "status",
        "type": "string",
        "required": true,
        "fieldRef": "Project.status"
      },
      {
        "name": "holdReason",
        "type": "string",
        "required": false,
        "fieldRef": "Project.holdReason"
      },
      {
        "name": "closedAt",
        "type": "string",
        "required": false,
        "fieldRef": "Project.closedAt"
      },
      {
        "name": "cancelledAt",
        "type": "string",
        "required": false,
        "fieldRef": "Project.cancelledAt"
      },
      {
        "name": "cancellationReason",
        "type": "string",
        "required": false,
        "fieldRef": "Project.cancellationReason"
      },
      {
        "name": "createdAt",
        "type": "string",
        "required": true,
        "fieldRef": "Project.createdAt"
      },
      {
        "name": "updatedAt",
        "type": "string",
        "required": true,
        "fieldRef": "Project.updatedAt"
      },
      {
        "name": "tasks",
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
              "required": false,
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
              "required": false,
              "fieldRef": "WorkTask.dueDate"
            },
            {
              "name": "completedAt",
              "type": "string",
              "required": false,
              "fieldRef": "WorkTask.completedAt"
            }
          ]
        }
      }
    ]
  },
  "inputs": [
    {
      "inputId": "projectId",
      "fieldRef": "Project.projectId",
      "required": true,
      "source": "routeParam",
      "description": "Identifier of the project to open on the detail and timeline screen."
    }
  ],
  "contextResolution": [
    {
      "inputId": "projectId",
      "targetRef": "Project.projectId",
      "source": "routeParam",
      "originRef": "routeParam.projectId",
      "description": "Resolve the project from the projectId route parameter on the project detail page."
    }
  ],
  "acceptanceAssertions": [
    "Given a valid projectId, the operation returns that project's core fields including name, client, site address, budget, startDate, endDate, and status.",
    "The response includes the related client name (and company when present) for the project's clientId.",
    "The response includes the project's work tasks with workTaskId, title, status, and dueDate so the manager can review the task timeline.",
    "Tasks in the timeline are scoped to the requested project only (WorkTask.projectId matches the route projectId).",
    "When the project is on hold, holdReason is returned; when closed or cancelled, the corresponding timestamp and reason fields are returned when set."
  ],
  "pageId": "viewProject",
  "commandName": "viewProject",
  "bffName": "buildFlowFsm.viewProject.viewProject",
  "capability": {
    "capabilityId": "viewProject",
    "title": "View project detail and timeline",
    "actor": "projectManager",
    "priority": "now"
  },
  "statusFrontend": "toCreate",
  "statusBackend": "toCreate"
} as const;

export default operationViewProject;
