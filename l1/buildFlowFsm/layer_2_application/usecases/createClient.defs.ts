/// <mls fileReference="_102045_/l1/buildFlowFsm/layer_2_application/usecases/createClient.defs.ts" enhancement="_blank"/>

export const createClientUsecase = {
  "schemaVersion": "2026-06-26",
  "artifactType": "usecase",
  "artifactId": "createClient",
  "moduleName": "buildFlowFsm",
  "status": "draft",
  "source": {
    "agentName": "agentCbUsecase",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "usecaseId": "createClient",
    "ports": [],
    "functions": [
      {
        "functionName": "createClient",
        "inputTypeName": "CreateClientInput",
        "outputTypeName": "CreateClientOutput",
        "input": [
          {
            "name": "name",
            "type": "string",
            "required": true,
            "ofEntity": "Client",
            "fieldRef": "Client.name",
            "description": "Display name of the client used in project and billing communications."
          },
          {
            "name": "company",
            "type": "string",
            "required": false,
            "ofEntity": "Client",
            "fieldRef": "Client.company",
            "description": "Legal or trading name of the client organization, if applicable."
          },
          {
            "name": "email",
            "type": "string",
            "required": true,
            "ofEntity": "Client",
            "fieldRef": "Client.email",
            "description": "Email address where status reports, billing summaries, and invoices are delivered."
          },
          {
            "name": "phone",
            "type": "string",
            "required": false,
            "ofEntity": "Client",
            "fieldRef": "Client.phone",
            "description": "Contact phone number for the client."
          },
          {
            "name": "address",
            "type": "string",
            "required": false,
            "ofEntity": "Client",
            "fieldRef": "Client.address",
            "description": "Postal or billing address for the client."
          }
        ],
        "output": [
          {
            "name": "clientId",
            "type": "string",
            "required": true,
            "ofEntity": "Client"
          },
          {
            "name": "name",
            "type": "string",
            "required": true,
            "ofEntity": "Client"
          },
          {
            "name": "company",
            "type": "string",
            "required": false,
            "ofEntity": "Client"
          },
          {
            "name": "email",
            "type": "string",
            "required": true,
            "ofEntity": "Client"
          },
          {
            "name": "phone",
            "type": "string",
            "required": false,
            "ofEntity": "Client"
          },
          {
            "name": "address",
            "type": "string",
            "required": false,
            "ofEntity": "Client"
          },
          {
            "name": "createdAt",
            "type": "string",
            "required": true,
            "ofEntity": "Client"
          },
          {
            "name": "updatedAt",
            "type": "string",
            "required": true,
            "ofEntity": "Client"
          }
        ],
        "ports": [],
        "rulesApplied": [],
        "transactional": true,
        "steps": [
          "1. Validate that required fields name and email are present and non-empty; throw a validation error with field-level details if any are missing.",
          "2. Generate a new UUID for clientId using ctx.idGenerator.generate().",
          "3. Obtain the current server timestamp from ctx.clock.now() and assign it to both createdAt and updatedAt.",
          "4. Inside a single ctx.data transaction, call ctx.mdm.entity.create({ mdmType: 'Client', details: { clientId, name, company, email, phone, address, createdAt, updatedAt } }) to persist the new client master-data record.",
          "5. Read back the created MDM entity via ctx.mdm.entity.get({ mdmId: createdRecord.id }) to confirm persistence and obtain the canonical field values.",
          "6. Map the returned MDM record fields (clientId, name, company, email, phone, address, createdAt, updatedAt) into the CreateClientOutput shape and return it."
        ],
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
        }
      }
    ],
    "mdmRefs": [
      "Client"
    ]
  }
} as const;

export default createClientUsecase;

export const pipeline = [
  {
    "id": "createClient__applicationUsecase",
    "type": "applicationUsecase",
    "outputPath": "_102045_/l1/buildFlowFsm/layer_2_application/usecases/createClient.ts",
    "defPath": "_102045_/l1/buildFlowFsm/layer_2_application/usecases/createClient.defs.ts",
    "dependsFiles": [],
    "dependsOn": [],
    "skills": [
      "_102021_/l2/agentChangeBackend/skills/architecture.md",
      "_102021_/l2/agentChangeBackend/skills/applicationUsecase.md",
      "_102034_.d.ts"
    ],
    "agent": "agentCbMaterialize"
  }
] as const;
