/// <mls fileReference="_102045_/l1/buildFlowFsm/layer_2_application/usecases/deleteClient.defs.ts" enhancement="_blank"/>

export const deleteClientUsecase = {
  "schemaVersion": "2026-06-26",
  "artifactType": "usecase",
  "artifactId": "deleteClient",
  "moduleName": "buildFlowFsm",
  "status": "draft",
  "source": {
    "agentName": "agentCbUsecase",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "usecaseId": "deleteClient",
    "ports": [],
    "functions": [
      {
        "functionName": "deleteClient",
        "inputTypeName": "DeleteClientInput",
        "outputTypeName": "DeleteClientOutput",
        "input": [
          {
            "name": "clientId",
            "type": "string",
            "required": true,
            "ofEntity": "Client",
            "description": "Identifier of the client record selected for deletion"
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
          }
        ],
        "ports": [],
        "rulesApplied": [],
        "transactional": false,
        "steps": [
          "1. Receive clientId from the selected entity context (selectedEntity source).",
          "2. Call ctx.mdm.entity.get({ mdmId: clientId }) to load the Client MDM record; if not found, throw a validation error indicating the client does not exist.",
          "3. Capture the client's name from the loaded record for the response.",
          "4. Call ctx.mdm.entity.delete({ mdmId: clientId }) to permanently remove the client record from the MDM store.",
          "5. Return { clientId, name } confirming which client was deleted."
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

export default deleteClientUsecase;

export const pipeline = [
  {
    "id": "deleteClient__applicationUsecase",
    "type": "applicationUsecase",
    "outputPath": "_102045_/l1/buildFlowFsm/layer_2_application/usecases/deleteClient.ts",
    "defPath": "_102045_/l1/buildFlowFsm/layer_2_application/usecases/deleteClient.defs.ts",
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
