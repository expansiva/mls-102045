/// <mls fileReference="_102045_/l4/buildFlowFsm/operations/createClient.defs.ts" enhancement="_blank"/>

export const operationCreateClient = {
  "operationId": "createClient",
  "title": "Create client",
  "actors": [
    "projectManager"
  ],
  "entity": "Client",
  "kind": "create",
  "reads": [],
  "writes": [
    "Client"
  ],
  "rulesApplied": [],
  "story": {
    "actor": "projectManager",
    "goal": "Register a new external client so projects can be linked to the correct customer for communications and billing.",
    "steps": [
      "Open the create-client form while setting up or editing a project",
      "Enter the client display name and primary email",
      "Optionally fill company name, phone, and address",
      "Confirm to save the new client record"
    ],
    "outcome": "A new Client exists with a generated identifier and timestamps, ready to be selected on projects and to receive status reports and invoices."
  },
  "accessPattern": {
    "kind": "commandInput",
    "description": "Form input to create a new client master-data record with contact and identity fields.",
    "entity": "Client",
    "keyField": "Client.clientId",
    "pagination": "none",
    "selection": "none",
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
    "kind": "object",
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
  },
  "inputs": [
    {
      "inputId": "name",
      "fieldRef": "Client.name",
      "required": true,
      "source": "userInput",
      "description": "Display name of the client used in project and billing communications."
    },
    {
      "inputId": "company",
      "fieldRef": "Client.company",
      "required": false,
      "source": "userInput",
      "description": "Legal or trading name of the client organization, if applicable."
    },
    {
      "inputId": "email",
      "fieldRef": "Client.email",
      "required": true,
      "source": "userInput",
      "description": "Email address where status reports, billing summaries, and invoices are delivered."
    },
    {
      "inputId": "phone",
      "fieldRef": "Client.phone",
      "required": false,
      "source": "userInput",
      "description": "Contact phone number for the client."
    },
    {
      "inputId": "address",
      "fieldRef": "Client.address",
      "required": false,
      "source": "userInput",
      "description": "Postal or billing address for the client."
    },
    {
      "inputId": "clientId",
      "fieldRef": "Client.clientId",
      "required": true,
      "source": "systemDefault",
      "description": "System-generated primary identifier for the new client record."
    },
    {
      "inputId": "createdAt",
      "fieldRef": "Client.createdAt",
      "required": true,
      "source": "systemDefault",
      "description": "Timestamp set automatically when the client record is created."
    },
    {
      "inputId": "updatedAt",
      "fieldRef": "Client.updatedAt",
      "required": true,
      "source": "systemDefault",
      "description": "Timestamp set automatically on create to match creation time."
    }
  ],
  "contextResolution": [
    {
      "inputId": "clientId",
      "targetRef": "Client.clientId",
      "source": "systemDefault",
      "originRef": "systemDefault.uuid",
      "description": "Generate a new UUID for the client primary key on the server before persist."
    },
    {
      "inputId": "createdAt",
      "targetRef": "Client.createdAt",
      "source": "systemDefault",
      "originRef": "systemDefault.now",
      "description": "Set createdAt to the current server timestamp at insert time."
    },
    {
      "inputId": "updatedAt",
      "targetRef": "Client.updatedAt",
      "source": "systemDefault",
      "originRef": "systemDefault.now",
      "description": "Set updatedAt to the current server timestamp at insert time."
    }
  ],
  "acceptanceAssertions": [
    "After confirmation a Client record exists with the submitted name and email.",
    "The new Client has a system-generated clientId and createdAt/updatedAt timestamps.",
    "Optional company, phone, and address are stored when provided and omitted when not.",
    "The created client can be selected when entering project basics so the project is linked to that client."
  ],
  "pageId": "createClient",
  "commandName": "createClient",
  "bffName": "buildFlowFsm.createClient.createClient",
  "capability": {
    "capabilityId": "createClient",
    "title": "Create client",
    "actor": "projectManager",
    "priority": "now"
  },
  "statusFrontend": "toCreate",
  "statusBackend": "toCreate"
} as const;

export default operationCreateClient;
