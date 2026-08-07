/// <mls fileReference="_102045_/l2/buildFlowFsm/web/desktop/page31/clientManagementWorkspace.defs.ts" enhancement="_blank"/>

export const definition = {
  "pageId": "clientManagementWorkspace",
  "pageName": "Client Directory",
  "baseClassName": "BuildFlowFsmClientManagementWorkspaceBase",
  "actor": "projectManager",
  "purpose": "Project manager maintains the client directory used across projects.",
  "presentation": {
    "categoryRef": "customerManagement"
  },
  "pageObjective": {
    "actor": "Project manager",
    "jobToBeDone": "Quickly find, add, edit, and remove clients in the directory so the right client can be linked to any project without leaving the workspace.",
    "primaryDecision": "Which client to act on — browse/filter the list, then create, update, or delete the selected record.",
    "decisiveInfo": [
      "name",
      "company",
      "email",
      "phone",
      "address"
    ],
    "usageFrequency": "Occasional back-office task — opened when setting up or maintaining projects; not a high-frequency operational screen.",
    "criticalActions": [
      {
        "action": "createClientCmd",
        "presentation": "primary-button opening an inline panel or modal form"
      },
      {
        "action": "updateClientCmd",
        "presentation": "inline-row-command / detail panel pre-populated from selected row"
      },
      {
        "action": "deleteClientCmd",
        "presentation": "inline-row-command with confirmation dialog — destructive"
      },
      {
        "action": "listClients",
        "presentation": "auto-loading filterable table as the dominant surface"
      }
    ],
    "informationHierarchy": [
      "Client list (name, company, email, phone) — dominant surface",
      "Filter bar (name, company, email) — folded into the list surface header",
      "Row actions: Edit and Delete — contextual to selected/hovered row",
      "Create Client — toolbar primary action above the list",
      "Detail / edit panel — slides in on row selection (master-detail)"
    ],
    "successCriteria": "A project manager can find any client in under 5 seconds via filter, create a new client in one form submission, edit contact details without navigating away, and delete with a single confirmation — all without manually typing any client ID.",
    "antiPatterns": [
      "Exposing clientId as a manual text input",
      "Separate full-width form sections for update and delete below the list",
      "Free <select> over all status enum values for transitions",
      "Stacking create, update, and delete as three independent page sections",
      "Showing audit timestamps (createdAt, updatedAt) as editable fields"
    ]
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
    "id": "clientManagementWorkspace__page31__l2_page",
    "type": "l2_page",
    "outputPath": "_102045_/l2/buildFlowFsm/web/desktop/page31/clientManagementWorkspace.ts",
    "defPath": "_102045_/l2/buildFlowFsm/web/desktop/page31/clientManagementWorkspace.defs.ts",
    "dependsFiles": [
      "_102045_/l2/buildFlowFsm/web/shared/clientManagementWorkspace.ts",
      "_102045_/l2/designSystem.ts"
    ],
    "dependsOn": [
      "clientManagementWorkspace__l2_shared"
    ],
    "skills": [
      "_102020_/l2/agentChangeFrontend/skills/genCfePage21RenderTs.ts",
      "_102020_/l4/collabux/templates/customerManagement/page31.md"
    ],
    "visualStyle": {
      "description": "Desktop-first for PM and billing staff with mobile-optimized field entry; dashboard-driven, status-aware, touch-friendly UI with Gantt-ish timeline views."
    },
    "agent": "agentCfeMaterializeGen"
  }
] as const;
