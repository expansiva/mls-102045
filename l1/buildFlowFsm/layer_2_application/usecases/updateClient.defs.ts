/// <mls fileReference="_102045_/l1/buildFlowFsm/layer_2_application/usecases/updateClient.defs.ts" enhancement="_blank"/>

export const updateClientUsecase = {
  "schemaVersion": "2026-06-26",
  "artifactType": "usecase",
  "artifactId": "updateClient",
  "moduleName": "buildFlowFsm",
  "status": "draft",
  "source": {
    "agentName": "agentCbUsecase",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "usecaseId": "updateClient",
    "ports": [],
    "functions": [
      {
        "functionName": "updateClient",
        "inputTypeName": "UpdateClientInput",
        "outputTypeName": "UpdateClientOutput",
        "input": [
          {
            "name": "clientId",
            "type": "string",
            "required": true,
            "ofEntity": "Client",
            "description": "Identifier of the client record to update (route param)"
          },
          {
            "name": "name",
            "type": "string",
            "required": true,
            "ofEntity": "Client",
            "description": "Updated display name of the client"
          },
          {
            "name": "company",
            "type": "string",
            "required": false,
            "ofEntity": "Client",
            "description": "Updated legal or trading name of the client organization"
          },
          {
            "name": "email",
            "type": "string",
            "required": true,
            "ofEntity": "Client",
            "description": "Updated email for status reports, billing summaries, and invoices"
          },
          {
            "name": "phone",
            "type": "string",
            "required": false,
            "ofEntity": "Client",
            "description": "Updated contact phone number"
          },
          {
            "name": "address",
            "type": "string",
            "required": false,
            "ofEntity": "Client",
            "description": "Updated postal or billing address"
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
        "transactional": false,
        "steps": [
          "1. Receive clientId (route param) and updated fields name, company, email, phone, address from user input",
          "2. Resolve updatedAt from ctx.clock.now() — this is a systemDefault, never requested from the client",
          "3. Fetch the existing Client MDM record via ctx.mdm.entity.get({ mdmId: clientId }) to verify it exists and to preserve createdAt",
          "4. If the MDM record is not found, throw a validation error indicating the client does not exist",
          "5. Validate that required fields name and email are non-empty strings",
          "6. Call ctx.mdm.entity.update({ mdmId: clientId, details: { name, company, email, phone, address, updatedAt } }) to persist the updated client master-data record, preserving createdAt from the fetched record",
          "7. Return the full updated client object: clientId, name, company, email, phone, address, createdAt (unchanged), updatedAt (refreshed)"
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

export default updateClientUsecase;

export const pipeline = [
  {
    "id": "updateClient__applicationUsecase",
    "type": "applicationUsecase",
    "outputPath": "_102045_/l1/buildFlowFsm/layer_2_application/usecases/updateClient.ts",
    "defPath": "_102045_/l1/buildFlowFsm/layer_2_application/usecases/updateClient.defs.ts",
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
