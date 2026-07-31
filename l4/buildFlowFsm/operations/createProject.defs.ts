/// <mls fileReference="_102045_/l4/buildFlowFsm/operations/createProject.defs.ts" enhancement="_blank"/>

export const operationCreateProject = {
  "operationId": "createProject",
  "title": "Create project",
  "actors": [
    "projectManager"
  ],
  "entity": "Project",
  "kind": "create",
  "reads": [
    "Client"
  ],
  "writes": [
    "Project"
  ],
  "rulesApplied": [
    "projectActivationRequiresCoreFields",
    "jobCostingRequiresBudgetAndSchedule",
    "operationsRequireActiveProject"
  ],
  "story": {
    "actor": "projectManager",
    "goal": "Register a new construction or field service project with client, site, budget, and schedule, and activate it for field work",
    "steps": [
      "Enter the project name and select or create the client",
      "Fill in the site address where work will be performed",
      "Define the approved budget and planned start and end dates",
      "Confirm creation so the project is saved with active status"
    ],
    "outcome": "A new Project exists with status active, core identity fields populated, and budget/schedule baselines ready for tasks, costs, and billing"
  },
  "accessPattern": {
    "kind": "commandInput",
    "description": "Form to capture project identity, client, site, budget, and schedule and create an active project",
    "entity": "Project",
    "keyField": "Project.projectId",
    "pagination": "none",
    "selection": "none",
    "output": [
      "Project.projectId",
      "Project.name",
      "Project.clientId",
      "Project.siteAddress",
      "Project.budget",
      "Project.startDate",
      "Project.endDate",
      "Project.status",
      "Project.createdAt"
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
      }
    ]
  },
  "inputs": [
    {
      "inputId": "name",
      "fieldRef": "Project.name",
      "required": true,
      "source": "userInput",
      "description": "Human-readable project name entered by the project manager"
    },
    {
      "inputId": "clientId",
      "fieldRef": "Project.clientId",
      "required": true,
      "source": "userInput",
      "description": "Identifier of the client who owns this project, selected or created during entry"
    },
    {
      "inputId": "siteAddress",
      "fieldRef": "Project.siteAddress",
      "required": true,
      "source": "userInput",
      "description": "Physical address of the construction or service site"
    },
    {
      "inputId": "budget",
      "fieldRef": "Project.budget",
      "required": true,
      "source": "userInput",
      "description": "Approved total budget used as the job costing baseline"
    },
    {
      "inputId": "startDate",
      "fieldRef": "Project.startDate",
      "required": true,
      "source": "userInput",
      "description": "Planned start date of the project schedule"
    },
    {
      "inputId": "endDate",
      "fieldRef": "Project.endDate",
      "required": true,
      "source": "userInput",
      "description": "Planned completion date of the project schedule"
    },
    {
      "inputId": "projectId",
      "fieldRef": "Project.projectId",
      "required": true,
      "source": "systemDefault",
      "description": "System-generated unique identifier for the new project"
    },
    {
      "inputId": "status",
      "fieldRef": "Project.status",
      "required": true,
      "source": "systemDefault",
      "description": "Initial lifecycle status set to active so field work can begin"
    },
    {
      "inputId": "createdAt",
      "fieldRef": "Project.createdAt",
      "required": true,
      "source": "systemDefault",
      "description": "Timestamp when the project record is created"
    },
    {
      "inputId": "updatedAt",
      "fieldRef": "Project.updatedAt",
      "required": true,
      "source": "systemDefault",
      "description": "Timestamp of the initial project record write"
    }
  ],
  "contextResolution": [
    {
      "inputId": "projectId",
      "targetRef": "Project.projectId",
      "source": "systemDefault",
      "originRef": "systemDefault.uuid",
      "description": "Generate a new UUID for the project identity on create"
    },
    {
      "inputId": "status",
      "targetRef": "Project.status",
      "source": "systemDefault",
      "originRef": "systemDefault.locale",
      "description": "Set status to active on create so tasks, time logs, and materials can be recorded immediately"
    },
    {
      "inputId": "createdAt",
      "targetRef": "Project.createdAt",
      "source": "systemDefault",
      "originRef": "systemDefault.now",
      "description": "Stamp createdAt with the current server time at insert"
    },
    {
      "inputId": "updatedAt",
      "targetRef": "Project.updatedAt",
      "source": "systemDefault",
      "originRef": "systemDefault.now",
      "description": "Stamp updatedAt with the current server time at insert"
    }
  ],
  "acceptanceAssertions": [
    "After confirmation a Project record exists with the submitted name, clientId, siteAddress, budget, startDate, and endDate",
    "The created project has status active so tasks, time logs, materials, and change orders can be recorded against it",
    "Project activation is rejected when name, clientId, or siteAddress is missing",
    "Budget and schedule dates are present on the created project so job costing tracking can begin",
    "projectId, createdAt, and updatedAt are assigned by the system and returned in the response"
  ],
  "pageId": "projectLifecycle",
  "commandName": "createProject",
  "bffName": "buildFlowFsm.projectLifecycle.createProject",
  "capability": {
    "capabilityId": "projectLifecycle",
    "title": "Project lifecycle",
    "actor": "projectManager",
    "priority": "now"
  },
  "statusFrontend": "toCreate",
  "statusBackend": "toCreate"
} as const;

export default operationCreateProject;
