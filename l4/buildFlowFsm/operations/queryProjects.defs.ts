/// <mls fileReference="_102045_/l4/buildFlowFsm/operations/queryProjects.defs.ts" enhancement="_blank"/>

export const operationQueryProjects = {
  "operationId": "queryProjects",
  "title": "Browse projects",
  "actors": [
    "projectManager"
  ],
  "entity": "Project",
  "kind": "query",
  "reads": [
    "Project",
    "Client"
  ],
  "writes": [],
  "rulesApplied": [
    "dashboardShowsActiveProjects"
  ],
  "story": {
    "actor": "projectManager",
    "goal": "See all active projects at a glance so attention can be directed where it is needed",
    "steps": [
      "Open the projects dashboard or project list",
      "Load projects with the default active-status filter applied",
      "Review each project's name, client, site, budget, schedule, and status",
      "Optionally change filters or page through results and select a project for deeper review"
    ],
    "outcome": "The project manager has a clear list of active projects with the key fields needed to spot issues and drill into a project"
  },
  "accessPattern": {
    "kind": "list",
    "description": "Paginated list of projects for the operational dashboard and project browser, defaulting to active projects",
    "entity": "Project",
    "keyField": "Project.projectId",
    "filters": [
      "Project.status"
    ],
    "sort": [
      "Project.name"
    ],
    "pagination": "optional",
    "selection": "single",
    "output": [
      "Project.projectId",
      "Project.name",
      "Project.clientId",
      "Client.name",
      "Project.siteAddress",
      "Project.budget",
      "Project.startDate",
      "Project.endDate",
      "Project.status"
    ]
  },
  "outputShape": {
    "kind": "paginated",
    "fields": [
      {
        "name": "projects",
        "type": "array",
        "required": true,
        "item": {
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
      "inputId": "status",
      "fieldRef": "Project.status",
      "required": false,
      "source": "userInput",
      "description": "Optional lifecycle status filter; when omitted the list defaults to active projects only per dashboard rules"
    },
    {
      "inputId": "page",
      "type": "number",
      "required": false,
      "source": "userInput",
      "description": "Optional 1-based page number for paginated project results"
    },
    {
      "inputId": "pageSize",
      "type": "number",
      "required": false,
      "source": "userInput",
      "description": "Optional page size for paginated project results"
    }
  ],
  "contextResolution": [],
  "acceptanceAssertions": [
    "When no status filter is provided, only projects with status active are returned",
    "Each item includes projectId, name, clientId, clientName, siteAddress, budget, startDate, endDate, and status",
    "The response is paginated with a projects array and a total count of matching projects",
    "Optional page and pageSize inputs control which slice of matching projects is returned",
    "Client name is resolved from the related Client record for each project"
  ],
  "pageId": "queryProjects",
  "commandName": "queryProjects",
  "bffName": "buildFlowFsm.queryProjects.queryProjects",
  "capability": {
    "capabilityId": "queryProjects",
    "title": "Browse projects",
    "actor": "projectManager",
    "priority": "now"
  },
  "statusFrontend": "toCreate",
  "statusBackend": "toCreate"
} as const;

export default operationQueryProjects;
