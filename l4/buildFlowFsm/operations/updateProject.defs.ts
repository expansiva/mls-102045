/// <mls fileReference="_102045_/l4/buildFlowFsm/operations/updateProject.defs.ts" enhancement="_blank"/>

export const operationUpdateProject = {
  "operationId": "updateProject",
  "title": "Update project details",
  "actors": [
    "projectManager"
  ],
  "entity": "Project",
  "kind": "update",
  "reads": [
    "Project",
    "Client"
  ],
  "writes": [
    "Project"
  ],
  "rulesApplied": [
    "projectActivationRequiresCoreFields",
    "jobCostingRequiresBudgetAndSchedule"
  ],
  "story": {
    "actor": "projectManager",
    "goal": "Update the core details of an existing project so name, client, site, budget, and schedule stay accurate for costing and field work.",
    "steps": [
      "Open the existing project for editing",
      "Revise name, client, site address, budget, and schedule dates as needed",
      "Save the changes to the project record"
    ],
    "outcome": "The project record reflects the updated details with a refreshed modification timestamp and remains usable under its current lifecycle status."
  },
  "accessPattern": {
    "kind": "commandInput",
    "description": "Edit form for project core fields keyed by project id",
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
      "Project.updatedAt"
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
        "name": "updatedAt",
        "type": "string",
        "required": true,
        "fieldRef": "Project.updatedAt"
      }
    ]
  },
  "inputs": [
    {
      "inputId": "projectId",
      "fieldRef": "Project.projectId",
      "required": true,
      "source": "routeParam",
      "description": "Identifier of the project being updated"
    },
    {
      "inputId": "name",
      "fieldRef": "Project.name",
      "required": true,
      "source": "userInput",
      "description": "Updated human-readable project name"
    },
    {
      "inputId": "clientId",
      "fieldRef": "Project.clientId",
      "required": true,
      "source": "userInput",
      "description": "Updated client who owns this project"
    },
    {
      "inputId": "siteAddress",
      "fieldRef": "Project.siteAddress",
      "required": true,
      "source": "userInput",
      "description": "Updated physical address of the work site"
    },
    {
      "inputId": "budget",
      "fieldRef": "Project.budget",
      "required": true,
      "source": "userInput",
      "description": "Updated approved total budget baseline"
    },
    {
      "inputId": "startDate",
      "fieldRef": "Project.startDate",
      "required": true,
      "source": "userInput",
      "description": "Updated planned project start date"
    },
    {
      "inputId": "endDate",
      "fieldRef": "Project.endDate",
      "required": true,
      "source": "userInput",
      "description": "Updated planned project completion date"
    },
    {
      "inputId": "updatedAt",
      "fieldRef": "Project.updatedAt",
      "required": true,
      "source": "systemDefault",
      "description": "Server-assigned timestamp of this modification"
    }
  ],
  "contextResolution": [
    {
      "inputId": "projectId",
      "targetRef": "Project.projectId",
      "source": "routeParam",
      "originRef": "routeParam.projectId",
      "description": "Resolved from the projectId path parameter on the edit route"
    },
    {
      "inputId": "updatedAt",
      "targetRef": "Project.updatedAt",
      "source": "systemDefault",
      "originRef": "systemDefault.now",
      "description": "Server sets the current timestamp when the project update is persisted"
    }
  ],
  "acceptanceAssertions": [
    "After confirmation the project exists with the submitted name, clientId, siteAddress, budget, startDate, and endDate",
    "The project updatedAt timestamp is set to the time of the update",
    "Name, client, and site address remain present on the project after the update so activation rules stay satisfied",
    "Budget and schedule dates remain present on the project after the update so job costing tracking can continue"
  ],
  "pageId": "updateProject",
  "commandName": "updateProject",
  "bffName": "buildFlowFsm.updateProject.updateProject",
  "capability": {
    "capabilityId": "updateProject",
    "title": "Update project details",
    "actor": "projectManager",
    "priority": "now"
  },
  "statusFrontend": "toCreate",
  "statusBackend": "toCreate"
} as const;

export default operationUpdateProject;
