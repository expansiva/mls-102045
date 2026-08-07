/// <mls fileReference="_102045_/l2/buildFlowFsm/web/desktop/page11/projectLifecycleWorkspace.defs.ts" enhancement="_blank"/>

export const definition = {
  "pageId": "projectLifecycleWorkspace",
  "pageName": "Manage Projects",
  "baseClassName": "BuildFlowFsmProjectLifecycleWorkspaceBase",
  "actor": "projectManager",
  "purpose": "Project manager creates and maintains projects through their full lifecycle.",
  "presentation": {
    "categoryRef": "entityRecordManagement"
  },
  "dataBindings": [
    {
      "id": "binding.projectLifecycleWorkspace.createProjectCmd",
      "source": "bff.createProjectCmd",
      "command": "createProjectCmd",
      "description": "Create project",
      "kind": "command",
      "stateKey": "ui.projectLifecycleWorkspace.output.createProjectCmd",
      "inputStateKeys": [
        "ui.projectLifecycleWorkspace.input.createProjectCmd.name",
        "ui.projectLifecycleWorkspace.input.createProjectCmd.clientId",
        "ui.projectLifecycleWorkspace.input.createProjectCmd.siteAddress",
        "ui.projectLifecycleWorkspace.input.createProjectCmd.budget",
        "ui.projectLifecycleWorkspace.input.createProjectCmd.startDate",
        "ui.projectLifecycleWorkspace.input.createProjectCmd.endDate"
      ],
      "inputs": [
        {
          "name": "name",
          "stateKey": "ui.projectLifecycleWorkspace.input.createProjectCmd.name",
          "source": "userInput",
          "required": true,
          "presentation": "form"
        },
        {
          "name": "clientId",
          "stateKey": "ui.projectLifecycleWorkspace.input.createProjectCmd.clientId",
          "source": "userInput",
          "required": true,
          "presentation": "form"
        },
        {
          "name": "siteAddress",
          "stateKey": "ui.projectLifecycleWorkspace.input.createProjectCmd.siteAddress",
          "source": "userInput",
          "required": true,
          "presentation": "form"
        },
        {
          "name": "budget",
          "stateKey": "ui.projectLifecycleWorkspace.input.createProjectCmd.budget",
          "source": "userInput",
          "required": true,
          "presentation": "form"
        },
        {
          "name": "startDate",
          "stateKey": "ui.projectLifecycleWorkspace.input.createProjectCmd.startDate",
          "source": "userInput",
          "required": true,
          "presentation": "form"
        },
        {
          "name": "endDate",
          "stateKey": "ui.projectLifecycleWorkspace.input.createProjectCmd.endDate",
          "source": "userInput",
          "required": true,
          "presentation": "form"
        }
      ]
    },
    {
      "id": "binding.projectLifecycleWorkspace.updateProjectCmd",
      "source": "bff.updateProjectCmd",
      "command": "updateProjectCmd",
      "description": "Update project details",
      "kind": "command",
      "stateKey": "ui.projectLifecycleWorkspace.output.updateProjectCmd",
      "inputStateKeys": [
        "ui.projectLifecycleWorkspace.input.updateProjectCmd.projectId",
        "ui.projectLifecycleWorkspace.input.updateProjectCmd.name",
        "ui.projectLifecycleWorkspace.input.updateProjectCmd.clientId",
        "ui.projectLifecycleWorkspace.input.updateProjectCmd.siteAddress",
        "ui.projectLifecycleWorkspace.input.updateProjectCmd.budget",
        "ui.projectLifecycleWorkspace.input.updateProjectCmd.startDate",
        "ui.projectLifecycleWorkspace.input.updateProjectCmd.endDate"
      ],
      "inputs": [
        {
          "name": "projectId",
          "stateKey": "ui.projectLifecycleWorkspace.input.updateProjectCmd.projectId",
          "source": "routeParam",
          "required": true,
          "presentation": "route"
        },
        {
          "name": "name",
          "stateKey": "ui.projectLifecycleWorkspace.input.updateProjectCmd.name",
          "source": "userInput",
          "required": true,
          "presentation": "form"
        },
        {
          "name": "clientId",
          "stateKey": "ui.projectLifecycleWorkspace.input.updateProjectCmd.clientId",
          "source": "userInput",
          "required": true,
          "presentation": "form"
        },
        {
          "name": "siteAddress",
          "stateKey": "ui.projectLifecycleWorkspace.input.updateProjectCmd.siteAddress",
          "source": "userInput",
          "required": true,
          "presentation": "form"
        },
        {
          "name": "budget",
          "stateKey": "ui.projectLifecycleWorkspace.input.updateProjectCmd.budget",
          "source": "userInput",
          "required": true,
          "presentation": "form"
        },
        {
          "name": "startDate",
          "stateKey": "ui.projectLifecycleWorkspace.input.updateProjectCmd.startDate",
          "source": "userInput",
          "required": true,
          "presentation": "form"
        },
        {
          "name": "endDate",
          "stateKey": "ui.projectLifecycleWorkspace.input.updateProjectCmd.endDate",
          "source": "userInput",
          "required": true,
          "presentation": "form"
        }
      ]
    },
    {
      "id": "binding.projectLifecycleWorkspace.updateProjectStatusCmd",
      "source": "bff.updateProjectStatusCmd",
      "command": "updateProjectStatusCmd",
      "description": "Update project status",
      "kind": "command",
      "stateKey": "ui.projectLifecycleWorkspace.output.updateProjectStatusCmd",
      "inputStateKeys": [
        "ui.projectLifecycleWorkspace.input.updateProjectStatusCmd.projectId",
        "ui.projectLifecycleWorkspace.input.updateProjectStatusCmd.status",
        "ui.projectLifecycleWorkspace.input.updateProjectStatusCmd.holdReason",
        "ui.projectLifecycleWorkspace.input.updateProjectStatusCmd.cancellationReason"
      ],
      "inputs": [
        {
          "name": "projectId",
          "stateKey": "ui.projectLifecycleWorkspace.input.updateProjectStatusCmd.projectId",
          "source": "routeParam",
          "required": true,
          "presentation": "route"
        },
        {
          "name": "status",
          "stateKey": "ui.projectLifecycleWorkspace.input.updateProjectStatusCmd.status",
          "source": "userInput",
          "required": true,
          "presentation": "form"
        },
        {
          "name": "holdReason",
          "stateKey": "ui.projectLifecycleWorkspace.input.updateProjectStatusCmd.holdReason",
          "source": "userInput",
          "required": false,
          "presentation": "form"
        },
        {
          "name": "cancellationReason",
          "stateKey": "ui.projectLifecycleWorkspace.input.updateProjectStatusCmd.cancellationReason",
          "source": "userInput",
          "required": false,
          "presentation": "form"
        }
      ]
    }
  ]
};

export const pipeline = [
  {
    "id": "projectLifecycleWorkspace__l2_page",
    "type": "l2_page",
    "outputPath": "_102045_/l2/buildFlowFsm/web/desktop/page11/projectLifecycleWorkspace.ts",
    "defPath": "_102045_/l2/buildFlowFsm/web/desktop/page11/projectLifecycleWorkspace.defs.ts",
    "dependsFiles": [
      "_102045_/l2/buildFlowFsm/web/shared/projectLifecycleWorkspace.ts",
      "_102045_/l2/designSystem.ts"
    ],
    "dependsOn": [
      "projectLifecycleWorkspace__l2_shared"
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
