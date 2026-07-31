/// <mls fileReference="_102045_/l1/buildFlowFsm/layer_1_external/adapters/http/controllers/clientManagementWorkspace.defs.ts" enhancement="_blank"/>

export const clientManagementWorkspaceController = {
  "schemaVersion": "2026-06-26",
  "artifactType": "httpController",
  "artifactId": "clientManagementWorkspace",
  "moduleName": "buildFlowFsm",
  "status": "draft",
  "source": {
    "agentName": "agentCbHttpController",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "pageId": "clientManagementWorkspace",
    "controllerName": "ClientManagementWorkspaceController",
    "ownerKind": "workspace",
    "workspaceId": "clientManagementWorkspace",
    "actors": [
      "projectManager"
    ],
    "allowedScopes": [
      "buildFlowFsm:projectManager"
    ],
    "handlers": [
      {
        "handlerName": "clientManagementWorkspaceListClientsHandler",
        "command": "listClients",
        "bffId": "listClients",
        "route": "buildFlowFsm.clientManagementWorkspace.listClients",
        "kind": "query",
        "usecaseRef": "queryClients",
        "usecaseRefs": [
          "queryClients"
        ],
        "inputTypeName": "QueryClientsInput",
        "inputContract": [
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
            "fieldRef": "",
            "type": "number",
            "required": false,
            "source": "userInput",
            "description": "Optional page number for paginated client results."
          },
          {
            "inputId": "pageSize",
            "fieldRef": "",
            "type": "number",
            "required": false,
            "source": "userInput",
            "description": "Optional page size for paginated client results."
          }
        ],
        "projection": {
          "kind": "paginated",
          "arrayFieldName": "clients",
          "itemFields": [
            {
              "name": "clientId",
              "operationId": "queryClients",
              "path": [
                "clients",
                "$items",
                "clientId"
              ],
              "fromItems": false
            },
            {
              "name": "name",
              "operationId": "queryClients",
              "path": [
                "clients",
                "$items",
                "name"
              ],
              "fromItems": false
            },
            {
              "name": "company",
              "operationId": "queryClients",
              "path": [
                "clients",
                "$items",
                "company"
              ],
              "fromItems": false
            },
            {
              "name": "email",
              "operationId": "queryClients",
              "path": [
                "clients",
                "$items",
                "email"
              ],
              "fromItems": false
            },
            {
              "name": "phone",
              "operationId": "queryClients",
              "path": [
                "clients",
                "$items",
                "phone"
              ],
              "fromItems": false
            },
            {
              "name": "address",
              "operationId": "queryClients",
              "path": [
                "clients",
                "$items",
                "address"
              ],
              "fromItems": false
            },
            {
              "name": "createdAt",
              "operationId": "queryClients",
              "path": [
                "clients",
                "$items",
                "createdAt"
              ],
              "fromItems": false
            },
            {
              "name": "updatedAt",
              "operationId": "queryClients",
              "path": [
                "clients",
                "$items",
                "updatedAt"
              ],
              "fromItems": false
            }
          ],
          "topFields": [
            {
              "name": "total",
              "operationId": "queryClients",
              "path": [
                "total"
              ],
              "fromItems": false
            }
          ]
        },
        "optionalUses": []
      },
      {
        "handlerName": "clientManagementWorkspaceCreateClientCmdHandler",
        "command": "createClientCmd",
        "bffId": "createClientCmd",
        "route": "buildFlowFsm.clientManagementWorkspace.createClientCmd",
        "kind": "command",
        "usecaseRef": "createClient",
        "usecaseRefs": [
          "createClient"
        ],
        "inputTypeName": "CreateClientInput",
        "inputContract": [
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
        "projection": {
          "kind": "object",
          "arrayFieldName": null,
          "itemFields": [],
          "topFields": [
            {
              "name": "clientId",
              "operationId": "createClient",
              "path": [
                "clientId"
              ],
              "fromItems": false
            },
            {
              "name": "name",
              "operationId": "createClient",
              "path": [
                "name"
              ],
              "fromItems": false
            },
            {
              "name": "company",
              "operationId": "createClient",
              "path": [
                "company"
              ],
              "fromItems": false
            },
            {
              "name": "email",
              "operationId": "createClient",
              "path": [
                "email"
              ],
              "fromItems": false
            },
            {
              "name": "phone",
              "operationId": "createClient",
              "path": [
                "phone"
              ],
              "fromItems": false
            },
            {
              "name": "address",
              "operationId": "createClient",
              "path": [
                "address"
              ],
              "fromItems": false
            },
            {
              "name": "createdAt",
              "operationId": "createClient",
              "path": [
                "createdAt"
              ],
              "fromItems": false
            },
            {
              "name": "updatedAt",
              "operationId": "createClient",
              "path": [
                "updatedAt"
              ],
              "fromItems": false
            }
          ]
        },
        "optionalUses": []
      },
      {
        "handlerName": "clientManagementWorkspaceUpdateClientCmdHandler",
        "command": "updateClientCmd",
        "bffId": "updateClientCmd",
        "route": "buildFlowFsm.clientManagementWorkspace.updateClientCmd",
        "kind": "command",
        "usecaseRef": "updateClient",
        "usecaseRefs": [
          "updateClient"
        ],
        "inputTypeName": "UpdateClientInput",
        "inputContract": [
          {
            "inputId": "clientId",
            "fieldRef": "Client.clientId",
            "required": true,
            "source": "routeParam",
            "description": "Identifier of the client record to update"
          },
          {
            "inputId": "name",
            "fieldRef": "Client.name",
            "required": true,
            "source": "userInput",
            "description": "Updated display name of the client"
          },
          {
            "inputId": "company",
            "fieldRef": "Client.company",
            "required": false,
            "source": "userInput",
            "description": "Updated legal or trading name of the client organization"
          },
          {
            "inputId": "email",
            "fieldRef": "Client.email",
            "required": true,
            "source": "userInput",
            "description": "Updated email for status reports, billing summaries, and invoices"
          },
          {
            "inputId": "phone",
            "fieldRef": "Client.phone",
            "required": false,
            "source": "userInput",
            "description": "Updated contact phone number"
          },
          {
            "inputId": "address",
            "fieldRef": "Client.address",
            "required": false,
            "source": "userInput",
            "description": "Updated postal or billing address"
          },
          {
            "inputId": "updatedAt",
            "fieldRef": "Client.updatedAt",
            "required": true,
            "source": "systemDefault",
            "description": "Timestamp set automatically when the client record is saved"
          }
        ],
        "projection": {
          "kind": "object",
          "arrayFieldName": null,
          "itemFields": [],
          "topFields": [
            {
              "name": "clientId",
              "operationId": "updateClient",
              "path": [
                "clientId"
              ],
              "fromItems": false
            },
            {
              "name": "name",
              "operationId": "updateClient",
              "path": [
                "name"
              ],
              "fromItems": false
            },
            {
              "name": "company",
              "operationId": "updateClient",
              "path": [
                "company"
              ],
              "fromItems": false
            },
            {
              "name": "email",
              "operationId": "updateClient",
              "path": [
                "email"
              ],
              "fromItems": false
            },
            {
              "name": "phone",
              "operationId": "updateClient",
              "path": [
                "phone"
              ],
              "fromItems": false
            },
            {
              "name": "address",
              "operationId": "updateClient",
              "path": [
                "address"
              ],
              "fromItems": false
            },
            {
              "name": "updatedAt",
              "operationId": "updateClient",
              "path": [
                "updatedAt"
              ],
              "fromItems": false
            }
          ]
        },
        "optionalUses": []
      },
      {
        "handlerName": "clientManagementWorkspaceDeleteClientCmdHandler",
        "command": "deleteClientCmd",
        "bffId": "deleteClientCmd",
        "route": "buildFlowFsm.clientManagementWorkspace.deleteClientCmd",
        "kind": "command",
        "usecaseRef": "deleteClient",
        "usecaseRefs": [
          "deleteClient"
        ],
        "inputTypeName": "DeleteClientInput",
        "inputContract": [
          {
            "inputId": "clientId",
            "fieldRef": "Client.clientId",
            "required": true,
            "source": "selectedEntity",
            "description": "Identifier of the client record selected for deletion"
          }
        ],
        "projection": {
          "kind": "object",
          "arrayFieldName": null,
          "itemFields": [],
          "topFields": [
            {
              "name": "clientId",
              "operationId": "deleteClient",
              "path": [
                "clientId"
              ],
              "fromItems": false
            },
            {
              "name": "name",
              "operationId": "deleteClient",
              "path": [
                "name"
              ],
              "fromItems": false
            }
          ]
        },
        "optionalUses": []
      }
    ],
    "routes": [
      {
        "key": "buildFlowFsm.clientManagementWorkspace.listClients",
        "handlerName": "clientManagementWorkspaceListClientsHandler"
      },
      {
        "key": "buildFlowFsm.clientManagementWorkspace.createClientCmd",
        "handlerName": "clientManagementWorkspaceCreateClientCmdHandler"
      },
      {
        "key": "buildFlowFsm.clientManagementWorkspace.updateClientCmd",
        "handlerName": "clientManagementWorkspaceUpdateClientCmdHandler"
      },
      {
        "key": "buildFlowFsm.clientManagementWorkspace.deleteClientCmd",
        "handlerName": "clientManagementWorkspaceDeleteClientCmdHandler"
      }
    ]
  }
} as const;

export default clientManagementWorkspaceController;

export const pipeline = [
  {
    "id": "clientManagementWorkspace__httpController",
    "type": "httpController",
    "outputPath": "_102045_/l1/buildFlowFsm/layer_1_external/adapters/http/controllers/clientManagementWorkspace.ts",
    "defPath": "_102045_/l1/buildFlowFsm/layer_1_external/adapters/http/controllers/clientManagementWorkspace.defs.ts",
    "dependsFiles": [
      "_102045_/l1/buildFlowFsm/layer_2_application/usecases/queryClients.d.ts",
      "_102045_/l4/buildFlowFsm/contracts/clientManagementWorkspace.listClients.defs.ts",
      "_102045_/l1/buildFlowFsm/layer_2_application/usecases/createClient.d.ts",
      "_102045_/l4/buildFlowFsm/contracts/clientManagementWorkspace.createClientCmd.defs.ts",
      "_102045_/l1/buildFlowFsm/layer_2_application/usecases/updateClient.d.ts",
      "_102045_/l4/buildFlowFsm/contracts/clientManagementWorkspace.updateClientCmd.defs.ts",
      "_102045_/l1/buildFlowFsm/layer_2_application/usecases/deleteClient.d.ts",
      "_102045_/l4/buildFlowFsm/contracts/clientManagementWorkspace.deleteClientCmd.defs.ts"
    ],
    "dependsOn": [],
    "skills": [
      "_102021_/l2/agentChangeBackend/skills/architecture.md",
      "_102021_/l2/agentChangeBackend/skills/httpController.md",
      "_102034_.d.ts"
    ],
    "agent": "agentCbMaterialize"
  }
] as const;
