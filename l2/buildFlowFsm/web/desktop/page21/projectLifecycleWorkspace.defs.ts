/// <mls fileReference="_102045_/l2/buildFlowFsm/web/desktop/page21/projectLifecycleWorkspace.defs.ts" enhancement="_blank"/>

export const definition = {
  "pageId": "projectLifecycleWorkspace",
  "pageName": "Manage Projects",
  "baseClassName": "BuildFlowFsmProjectLifecycleWorkspaceBase",
  "actor": "projectManager",
  "purpose": "Project manager creates and maintains projects through their full lifecycle.",
  "presentation": {
    "categoryRef": "entityRecordManagement"
  },
  "pageObjective": {
    "actor": "Project Manager",
    "jobToBeDone": "Create new projects and manage their full lifecycle — from registration through activation, hold, closure, or cancellation — from a single workspace.",
    "primaryDecision": "Which project to act on and what lifecycle action to take next (create, edit details, or transition status).",
    "decisiveInfo": [
      "name",
      "clientId",
      "siteAddress",
      "budget",
      "startDate",
      "endDate",
      "status",
      "holdReason",
      "cancellationReason"
    ],
    "usageFrequency": "Occasional / back-office — used when onboarding a new project or responding to a lifecycle event (activation, hold, closure).",
    "criticalActions": [
      {
        "action": "createProjectCmd",
        "presentation": "primary-button opening an inline creation form with all required project fields"
      },
      {
        "action": "updateProjectCmd",
        "presentation": "inline-row-command / detail panel pre-populated from the selected project"
      },
      {
        "action": "updateProjectStatusCmd",
        "presentation": "contextual-transition-actions — one button per valid next status rendered on the selected project card/row, never a free select"
      }
    ],
    "informationHierarchy": [
      "1. Project list / board showing current status of all projects (scan & select)",
      "2. Selected project detail — name, client, site, budget, dates, current status",
      "3. Allowed lifecycle transitions as explicit action buttons (activate, hold, close, cancel)",
      "4. Edit form for revising project details (name, client, site, budget, schedule)",
      "5. Create form for registering a brand-new project"
    ],
    "successCriteria": "The project manager can register a project, see all projects at a glance, select one to review its current state, transition its status with a single contextual button, and edit its details — all without leaving the workspace or typing any system-owned identifier.",
    "antiPatterns": [
      "Free <select> over all status enum values for lifecycle transitions",
      "Manually typed projectId or clientId fields",
      "Separate page or route for each operation",
      "Stacking three independent forms with no project list to anchor context",
      "Showing system-owned fields (createdAt, updatedAt, closedAt, cancelledAt) as editable inputs"
    ]
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
    "id": "projectLifecycleWorkspace__page21__l2_page",
    "type": "l2_page",
    "outputPath": "_102045_/l2/buildFlowFsm/web/desktop/page21/projectLifecycleWorkspace.ts",
    "defPath": "_102045_/l2/buildFlowFsm/web/desktop/page21/projectLifecycleWorkspace.defs.ts",
    "dependsFiles": [
      "_102045_/l2/buildFlowFsm/web/shared/projectLifecycleWorkspace.ts",
      "_102045_/l2/designSystem.ts"
    ],
    "dependsOn": [
      "projectLifecycleWorkspace__l2_shared"
    ],
    "skills": [
      "_102020_/l2/agentChangeFrontend/skills/genCfePage21RenderTs.ts",
      "_102020_/l4/collabux/templates/entityRecordManagement/page21.md"
    ],
    "visualStyle": {
      "description": "Desktop-first for PM and billing staff with mobile-optimized field entry; dashboard-driven, status-aware, touch-friendly UI with Gantt-ish timeline views."
    },
    "agent": "agentCfeMaterializeGen"
  }
] as const;
