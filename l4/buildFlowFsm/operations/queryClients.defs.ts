/// <mls fileReference="_102045_/l4/buildFlowFsm/operations/queryClients.defs.ts" enhancement="_blank"/>

export const operationQueryClients = {
  "operationId": "queryClients",
  "title": "Browse clients",
  "actors": [
    "projectManager"
  ],
  "entity": "Client",
  "kind": "query",
  "reads": [
    "Client"
  ],
  "writes": [],
  "rulesApplied": [],
  "story": {
    "actor": "projectManager",
    "goal": "Browse existing client records to find and select the right client when setting up or managing a project.",
    "steps": [
      "Open the client list",
      "Optionally filter or sort by name or company",
      "Review client contact details in the results",
      "Select a client to use on the project"
    ],
    "outcome": "The project manager sees a clear list of clients with name, company, and contact details and can pick one for the project."
  },
  "accessPattern": {
    "kind": "list",
    "description": "Paginated browse list of client master records for selection during project setup.",
    "entity": "Client",
    "keyField": "Client.clientId",
    "filters": [
      "Client.name",
      "Client.company",
      "Client.email"
    ],
    "sort": [
      "Client.name"
    ],
    "pagination": "optional",
    "selection": "single",
    "output": [
      "Client.clientId",
      "Client.name",
      "Client.company",
      "Client.email",
      "Client.phone",
      "Client.address",
      "Client.createdAt",
      "Client.updatedAt"
    ]
  },
  "outputShape": {
    "kind": "paginated",
    "fields": [
      {
        "name": "clients",
        "type": "array",
        "required": true,
        "item": {
          "fields": [
            {
              "name": "clientId",
              "type": "string",
              "required": true,
              "fieldRef": "Client.clientId"
            },
            {
              "name": "name",
              "type": "string",
              "required": true,
              "fieldRef": "Client.name"
            },
            {
              "name": "company",
              "type": "string",
              "required": false,
              "fieldRef": "Client.company"
            },
            {
              "name": "email",
              "type": "string",
              "required": true,
              "fieldRef": "Client.email"
            },
            {
              "name": "phone",
              "type": "string",
              "required": false,
              "fieldRef": "Client.phone"
            },
            {
              "name": "address",
              "type": "string",
              "required": false,
              "fieldRef": "Client.address"
            },
            {
              "name": "createdAt",
              "type": "string",
              "required": true,
              "fieldRef": "Client.createdAt"
            },
            {
              "name": "updatedAt",
              "type": "string",
              "required": true,
              "fieldRef": "Client.updatedAt"
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
      "inputId": "name",
      "fieldRef": "Client.name",
      "required": false,
      "source": "userInput",
      "description": "Optional filter on client display name."
    },
    {
      "inputId": "company",
      "fieldRef": "Client.company",
      "required": false,
      "source": "userInput",
      "description": "Optional filter on client company or trading name."
    },
    {
      "inputId": "email",
      "fieldRef": "Client.email",
      "required": false,
      "source": "userInput",
      "description": "Optional filter on client email address."
    },
    {
      "inputId": "page",
      "type": "number",
      "required": false,
      "source": "userInput",
      "description": "Optional page number for paginated client results."
    },
    {
      "inputId": "pageSize",
      "type": "number",
      "required": false,
      "source": "userInput",
      "description": "Optional page size for paginated client results."
    }
  ],
  "contextResolution": [],
  "acceptanceAssertions": [
    "The operation returns a paginated list of Client records including clientId, name, company, email, phone, and address.",
    "When name, company, or email filters are provided, only matching clients are included in the results.",
    "The project manager can select a single client from the list to associate with a new or existing project.",
    "Results are ordered by client name by default.",
    "Total count of matching clients is returned alongside the page of items."
  ],
  "pageId": "queryClients",
  "commandName": "queryClients",
  "bffName": "buildFlowFsm.queryClients.queryClients",
  "capability": {
    "capabilityId": "queryClients",
    "title": "Browse clients",
    "actor": "projectManager",
    "priority": "now"
  },
  "statusFrontend": "toCreate",
  "statusBackend": "toCreate"
} as const;

export default operationQueryClients;
