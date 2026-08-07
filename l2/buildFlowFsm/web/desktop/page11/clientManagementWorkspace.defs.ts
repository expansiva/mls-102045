/// <mls fileReference="_102045_/l2/buildFlowFsm/web/desktop/page11/clientManagementWorkspace.defs.ts" enhancement="_blank"/>

export const definition = {
  "pageId": "clientManagementWorkspace",
  "pageName": "Client Directory",
  "baseClassName": "BuildFlowFsmClientManagementWorkspaceBase",
  "actor": "projectManager",
  "purpose": "Project manager maintains the client directory used across projects.",
  "presentation": {
    "categoryRef": "customerManagement"
  },
  "dataBindings": [
    {
      "id": "binding.clientManagementWorkspace.listClients",
      "source": "bff.listClients",
      "command": "listClients",
      "description": "Browse clients",
      "kind": "query",
      "stateKey": "ui.clientManagementWorkspace.data.listClients",
      "inputStateKeys": [
        "ui.clientManagementWorkspace.input.listClients.name",
        "ui.clientManagementWorkspace.input.listClients.company",
        "ui.clientManagementWorkspace.input.listClients.email",
        "ui.clientManagementWorkspace.input.listClients.page",
        "ui.clientManagementWorkspace.input.listClients.pageSize"
      ],
      "inputs": [
        {
          "name": "name",
          "stateKey": "ui.clientManagementWorkspace.input.listClients.name",
          "source": "userInput",
          "required": false,
          "presentation": "form"
        },
        {
          "name": "company",
          "stateKey": "ui.clientManagementWorkspace.input.listClients.company",
          "source": "userInput",
          "required": false,
          "presentation": "form"
        },
        {
          "name": "email",
          "stateKey": "ui.clientManagementWorkspace.input.listClients.email",
          "source": "userInput",
          "required": false,
          "presentation": "form"
        },
        {
          "name": "page",
          "stateKey": "ui.clientManagementWorkspace.input.listClients.page",
          "source": "userInput",
          "required": false,
          "presentation": "form"
        },
        {
          "name": "pageSize",
          "stateKey": "ui.clientManagementWorkspace.input.listClients.pageSize",
          "source": "userInput",
          "required": false,
          "presentation": "form"
        }
      ]
    },
    {
      "id": "binding.clientManagementWorkspace.createClientCmd",
      "source": "bff.createClientCmd",
      "command": "createClientCmd",
      "description": "Create client",
      "kind": "command",
      "stateKey": "ui.clientManagementWorkspace.output.createClientCmd",
      "inputStateKeys": [
        "ui.clientManagementWorkspace.input.createClientCmd.name",
        "ui.clientManagementWorkspace.input.createClientCmd.email",
        "ui.clientManagementWorkspace.input.createClientCmd.company",
        "ui.clientManagementWorkspace.input.createClientCmd.phone",
        "ui.clientManagementWorkspace.input.createClientCmd.address"
      ],
      "inputs": [
        {
          "name": "name",
          "stateKey": "ui.clientManagementWorkspace.input.createClientCmd.name",
          "source": "userInput",
          "required": true,
          "presentation": "form"
        },
        {
          "name": "email",
          "stateKey": "ui.clientManagementWorkspace.input.createClientCmd.email",
          "source": "userInput",
          "required": true,
          "presentation": "form"
        },
        {
          "name": "company",
          "stateKey": "ui.clientManagementWorkspace.input.createClientCmd.company",
          "source": "userInput",
          "required": false,
          "presentation": "form"
        },
        {
          "name": "phone",
          "stateKey": "ui.clientManagementWorkspace.input.createClientCmd.phone",
          "source": "userInput",
          "required": false,
          "presentation": "form"
        },
        {
          "name": "address",
          "stateKey": "ui.clientManagementWorkspace.input.createClientCmd.address",
          "source": "userInput",
          "required": false,
          "presentation": "form"
        }
      ]
    },
    {
      "id": "binding.clientManagementWorkspace.updateClientCmd",
      "source": "bff.updateClientCmd",
      "command": "updateClientCmd",
      "description": "Update client",
      "kind": "command",
      "stateKey": "ui.clientManagementWorkspace.output.updateClientCmd",
      "inputStateKeys": [
        "ui.clientManagementWorkspace.input.updateClientCmd.clientId",
        "ui.clientManagementWorkspace.input.updateClientCmd.name",
        "ui.clientManagementWorkspace.input.updateClientCmd.company",
        "ui.clientManagementWorkspace.input.updateClientCmd.email",
        "ui.clientManagementWorkspace.input.updateClientCmd.phone",
        "ui.clientManagementWorkspace.input.updateClientCmd.address"
      ],
      "inputs": [
        {
          "name": "clientId",
          "stateKey": "ui.clientManagementWorkspace.input.updateClientCmd.clientId",
          "source": "routeParam",
          "required": true,
          "presentation": "route"
        },
        {
          "name": "name",
          "stateKey": "ui.clientManagementWorkspace.input.updateClientCmd.name",
          "source": "userInput",
          "required": true,
          "presentation": "form"
        },
        {
          "name": "company",
          "stateKey": "ui.clientManagementWorkspace.input.updateClientCmd.company",
          "source": "userInput",
          "required": false,
          "presentation": "form"
        },
        {
          "name": "email",
          "stateKey": "ui.clientManagementWorkspace.input.updateClientCmd.email",
          "source": "userInput",
          "required": true,
          "presentation": "form"
        },
        {
          "name": "phone",
          "stateKey": "ui.clientManagementWorkspace.input.updateClientCmd.phone",
          "source": "userInput",
          "required": false,
          "presentation": "form"
        },
        {
          "name": "address",
          "stateKey": "ui.clientManagementWorkspace.input.updateClientCmd.address",
          "source": "userInput",
          "required": false,
          "presentation": "form"
        }
      ]
    },
    {
      "id": "binding.clientManagementWorkspace.deleteClientCmd",
      "source": "bff.deleteClientCmd",
      "command": "deleteClientCmd",
      "description": "Delete client",
      "kind": "command",
      "stateKey": "ui.clientManagementWorkspace.output.deleteClientCmd",
      "inputStateKeys": [
        "ui.clientManagementWorkspace.input.deleteClientCmd.clientId"
      ],
      "inputs": [
        {
          "name": "clientId",
          "stateKey": "ui.clientManagementWorkspace.input.deleteClientCmd.clientId",
          "source": "selectedEntity",
          "required": true,
          "presentation": "selection"
        }
      ]
    }
  ]
};

export const pipeline = [
  {
    "id": "clientManagementWorkspace__l2_page",
    "type": "l2_page",
    "outputPath": "_102045_/l2/buildFlowFsm/web/desktop/page11/clientManagementWorkspace.ts",
    "defPath": "_102045_/l2/buildFlowFsm/web/desktop/page11/clientManagementWorkspace.defs.ts",
    "dependsFiles": [
      "_102045_/l2/buildFlowFsm/web/shared/clientManagementWorkspace.ts",
      "_102045_/l2/designSystem.ts"
    ],
    "dependsOn": [
      "clientManagementWorkspace__l2_shared"
    ],
    "skills": [
      "_102020_/l2/agentChangeFrontend/skills/genCfePage11RenderTs.ts"
    ],
    "visualStyle": {
      "description": "Desktop-first for PM and billing staff with mobile-optimized field entry; dashboard-driven, status-aware, touch-friendly UI with Gantt-ish timeline views."
    },
    "agent": "agentCfeMaterializeGen"
  }
] as const;
