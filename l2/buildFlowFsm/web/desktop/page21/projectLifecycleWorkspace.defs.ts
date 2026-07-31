/// <mls fileReference="_102045_/l2/buildFlowFsm/web/desktop/page21/projectLifecycleWorkspace.defs.ts" enhancement="_blank"/>

export const definition = {
  "pageId": "projectLifecycleWorkspace",
  "pageName": "Manage Projects",
  "baseClassName": "BuildFlowFsmProjectLifecycleWorkspaceBase",
  "actor": "projectManager",
  "purpose": "Executar Manage Projects.",
  "capabilities": [
    "projectLifecycle",
    "updateProject"
  ],
  "flowRefs": {
    "experienceFlows": [
      "projectLifecycle"
    ],
    "entityLifecycles": [],
    "taskWorkflows": [
      "projectLifecycle"
    ],
    "automations": []
  },
  "pluginRefs": [],
  "mdmRefs": [],
  "origin": {
    "source": "l4-journey",
    "workspaceId": "projectLifecycleWorkspace",
    "workspaceKind": "workflow",
    "workflowId": "projectLifecycle",
    "actor": "projectManager",
    "entity": "Project",
    "owners": [
      {
        "kind": "workflow",
        "id": "projectLifecycle",
        "defPath": "_102045_/l4/buildFlowFsm/workflows/projectLifecycle.defs.ts"
      },
      {
        "kind": "operation",
        "id": "createProject",
        "defPath": "_102045_/l4/buildFlowFsm/operations/createProject.defs.ts"
      },
      {
        "kind": "operation",
        "id": "updateProject",
        "defPath": "_102045_/l4/buildFlowFsm/operations/updateProject.defs.ts"
      },
      {
        "kind": "operation",
        "id": "updateProjectStatus",
        "defPath": "_102045_/l4/buildFlowFsm/operations/updateProjectStatus.defs.ts"
      }
    ],
    "microUserFlow": {
      "source": "l4/story.steps",
      "workflowSteps": [
        "The project manager enters the project name, client, and site address.",
        "The project manager sets the budget and planned start and end dates.",
        "The project manager activates the project so field work and costing can begin.",
        "When needed, the project manager places the project on hold or resumes it.",
        "The project manager closes or cancels the project when work ends or is abandoned."
      ],
      "operations": [
        {
          "operationId": "createProject",
          "commandName": "createProject",
          "steps": [
            "Enter the project name and select or create the client",
            "Fill in the site address where work will be performed",
            "Define the approved budget and planned start and end dates",
            "Confirm creation so the project is saved with active status"
          ]
        },
        {
          "operationId": "updateProject",
          "commandName": "updateProject",
          "steps": [
            "Open the existing project for editing",
            "Revise name, client, site address, budget, and schedule dates as needed",
            "Save the changes to the project record"
          ]
        },
        {
          "operationId": "updateProjectStatus",
          "commandName": "updateProjectStatus",
          "steps": [
            "Open the target project",
            "Select the new lifecycle status",
            "Provide hold or cancellation reason when required by the chosen status",
            "Confirm the status change"
          ]
        }
      ]
    }
  },
  "pageInputs": [],
  "navigationRefs": [],
  "sections": [
    {
      "id": "section.projectLifecycleWorkspace.sec-project-workspace",
      "type": "section",
      "sectionName": "Project Workspace",
      "titleKey": "section.projectLifecycleWorkspace.sec-project-workspace.title",
      "mode": "edit",
      "order": 10,
      "organisms": [
        {
          "id": "org-project-list-panel",
          "type": "content",
          "organismName": "ProjectListPanel",
          "titleKey": "organism.projectLifecycleWorkspace.master-detail10.title",
          "purpose": "Displays all projects as a selectable list showing name, client, status badge, and key dates so the manager can orient before acting. Selecting a row drives the detail and action panels.",
          "userActions": [],
          "requiredEntities": [],
          "readsFields": [],
          "writesFields": [],
          "rulesApplied": [],
          "order": 10,
          "intentionRefs": [
            {
              "id": "intent.projectLifecycleWorkspace.master-detail10.content",
              "intent": "master-detail",
              "order": 10
            }
          ]
        },
        {
          "id": "org-project-status-actions",
          "type": "commandForm",
          "organismName": "ProjectStatusTransitionPanel",
          "titleKey": "organism.projectLifecycleWorkspace.updateProjectStatusCmd.title",
          "purpose": "Shows the current lifecycle status of the selected project and renders one button per valid next transition (e.g. Activate, Place on Hold, Close, Cancel). Collects holdReason or cancellationReason inline when the chosen transition requires it, then submits updateProjectStatusCmd.",
          "userActions": [
            "updateProjectStatusCmd"
          ],
          "requiredEntities": [],
          "readsFields": [],
          "writesFields": [],
          "rulesApplied": [
            "projectActivationRequiresCoreFields",
            "jobCostingRequiresBudgetAndSchedule",
            "operationsRequireActiveProject"
          ],
          "order": 20,
          "intentionRefs": [
            {
              "id": "intent.projectLifecycleWorkspace.updateProjectStatusCmd.form",
              "intent": "commandForm",
              "submitAction": "updateProjectStatusCmd",
              "order": 10
            }
          ]
        },
        {
          "id": "org-project-edit-form",
          "type": "commandForm",
          "organismName": "ProjectEditForm",
          "titleKey": "organism.projectLifecycleWorkspace.updateProjectCmd.title",
          "purpose": "Pre-populated edit form for the selected project allowing the manager to revise name, client, site address, budget, and schedule dates, then save via updateProjectCmd.",
          "userActions": [
            "updateProjectCmd"
          ],
          "requiredEntities": [],
          "readsFields": [],
          "writesFields": [],
          "rulesApplied": [
            "projectActivationRequiresCoreFields",
            "jobCostingRequiresBudgetAndSchedule"
          ],
          "order": 30,
          "intentionRefs": [
            {
              "id": "intent.projectLifecycleWorkspace.updateProjectCmd.form",
              "intent": "commandForm",
              "submitAction": "updateProjectCmd",
              "order": 10
            }
          ]
        }
      ]
    },
    {
      "id": "section.projectLifecycleWorkspace.sec-create-project",
      "type": "section",
      "sectionName": "Create New Project",
      "titleKey": "section.projectLifecycleWorkspace.sec-create-project.title",
      "mode": "edit",
      "order": 20,
      "organisms": [
        {
          "id": "org-create-project-form",
          "type": "commandForm",
          "organismName": "CreateProjectForm",
          "titleKey": "organism.projectLifecycleWorkspace.createProjectCmd.title",
          "purpose": "Form for registering a brand-new project. Collects name, client (via picker), site address, budget, and planned start/end dates, then submits createProjectCmd to persist the record.",
          "userActions": [
            "createProjectCmd"
          ],
          "requiredEntities": [],
          "readsFields": [],
          "writesFields": [],
          "rulesApplied": [
            "projectActivationRequiresCoreFields",
            "jobCostingRequiresBudgetAndSchedule",
            "operationsRequireActiveProject"
          ],
          "order": 10,
          "intentionRefs": [
            {
              "id": "intent.projectLifecycleWorkspace.createProjectCmd.form",
              "intent": "commandForm",
              "submitAction": "createProjectCmd",
              "order": 10
            }
          ]
        }
      ]
    }
  ],
  "templateId": "goal_first",
  "visualStyle": "Desktop-first for PM and billing staff with mobile-optimized field entry; dashboard-driven, status-aware, touch-friendly UI with Gantt-ish timeline views.",
  "pageObjective": {
    "actor": "Project Manager",
    "jobToBeDone": "Create new projects and manage their full lifecycle — from registration through activation, hold, closure, or cancellation — from a single workspace.",
    "primaryDecision": "Which lifecycle action to take on a project right now: create a new one, edit its details, or transition its status.",
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
    "usageFrequency": "Occasional / back-office — used by project managers when onboarding new projects or responding to lifecycle events (activation, hold, closure).",
    "criticalActions": [
      {
        "action": "createProjectCmd",
        "presentation": "primary-button on a dedicated creation form panel"
      },
      {
        "action": "updateProjectCmd",
        "presentation": "inline-row-command / edit panel pre-populated from selected project"
      },
      {
        "action": "updateProjectStatusCmd",
        "presentation": "contextual-transition-actions — one button per valid next status on the selected project, never a free select"
      }
    ],
    "informationHierarchy": [
      "1. Current project status and key identifiers (name, client, status badge) — read before write",
      "2. Allowed lifecycle transitions for the selected project (contextual action buttons)",
      "3. Edit form for project details (name, client, site address, budget, dates)",
      "4. Create new project form (collapsed / secondary until explicitly triggered)"
    ],
    "successCriteria": "A project manager can register a new project, edit its details, and advance or revert its lifecycle status in the fewest possible steps, with the current state always visible before any mutation is confirmed.",
    "antiPatterns": [
      "Free <select> over all status enum values for lifecycle transitions",
      "Manually typed projectId or clientId fields",
      "Separate page or route for each lifecycle operation",
      "Stacking three independent forms with no shared project context",
      "Showing system-owned fields (createdAt, updatedAt, closedAt, cancelledAt) as editable inputs"
    ]
  },
  "layout": {
    "id": "page21-goal-first",
    "type": "page",
    "sections": [
      {
        "id": "section.projectLifecycleWorkspace.sec-project-workspace",
        "type": "section",
        "sectionName": "Project Workspace",
        "titleKey": "section.projectLifecycleWorkspace.sec-project-workspace.title",
        "mode": "edit",
        "order": 10,
        "organisms": [
          {
            "id": "org-project-list-panel",
            "type": "content",
            "organismName": "ProjectListPanel",
            "titleKey": "organism.projectLifecycleWorkspace.master-detail10.title",
            "purpose": "Displays all projects as a selectable list showing name, client, status badge, and key dates so the manager can orient before acting. Selecting a row drives the detail and action panels.",
            "userActions": [],
            "requiredEntities": [],
            "readsFields": [],
            "writesFields": [],
            "rulesApplied": [],
            "order": 10,
            "intentions": [
              {
                "id": "intent.projectLifecycleWorkspace.master-detail10.content",
                "intent": "master-detail",
                "order": 10,
                "titleKey": "intent.projectLifecycleWorkspace.master-detail10.content.title",
                "displayHint": "master-detail",
                "fields": [],
                "columns": [],
                "filters": [],
                "toolbar": [],
                "rowActions": [],
                "actions": []
              }
            ],
            "displayHint": "master-detail"
          },
          {
            "id": "org-project-status-actions",
            "type": "commandForm",
            "organismName": "ProjectStatusTransitionPanel",
            "titleKey": "organism.projectLifecycleWorkspace.updateProjectStatusCmd.title",
            "purpose": "Shows the current lifecycle status of the selected project and renders one button per valid next transition (e.g. Activate, Place on Hold, Close, Cancel). Collects holdReason or cancellationReason inline when the chosen transition requires it, then submits updateProjectStatusCmd.",
            "userActions": [
              "updateProjectStatusCmd"
            ],
            "requiredEntities": [],
            "readsFields": [],
            "writesFields": [],
            "rulesApplied": [
              "projectActivationRequiresCoreFields",
              "jobCostingRequiresBudgetAndSchedule",
              "operationsRequireActiveProject"
            ],
            "order": 20,
            "intentions": [
              {
                "id": "intent.projectLifecycleWorkspace.updateProjectStatusCmd.form",
                "intent": "commandForm",
                "order": 10,
                "titleKey": "intent.projectLifecycleWorkspace.updateProjectStatusCmd.form.title",
                "source": "bff.updateProjectStatusCmd",
                "binding": "binding.projectLifecycleWorkspace.updateProjectStatusCmd",
                "submitAction": "updateProjectStatusCmd",
                "fields": [
                  {
                    "id": "intent.projectLifecycleWorkspace.updateProjectStatusCmd.form.field.status",
                    "field": "status",
                    "labelKey": "intent.projectLifecycleWorkspace.updateProjectStatusCmd.form.field.status.label",
                    "order": 10,
                    "stateKey": "ui.projectLifecycleWorkspace.input.updateProjectStatusCmd.status"
                  },
                  {
                    "id": "intent.projectLifecycleWorkspace.updateProjectStatusCmd.form.field.holdReason",
                    "field": "holdReason",
                    "labelKey": "intent.projectLifecycleWorkspace.updateProjectStatusCmd.form.field.holdReason.label",
                    "order": 20,
                    "stateKey": "ui.projectLifecycleWorkspace.input.updateProjectStatusCmd.holdReason"
                  },
                  {
                    "id": "intent.projectLifecycleWorkspace.updateProjectStatusCmd.form.field.cancellationReason",
                    "field": "cancellationReason",
                    "labelKey": "intent.projectLifecycleWorkspace.updateProjectStatusCmd.form.field.cancellationReason.label",
                    "order": 30,
                    "stateKey": "ui.projectLifecycleWorkspace.input.updateProjectStatusCmd.cancellationReason"
                  }
                ],
                "columns": [],
                "filters": [],
                "toolbar": [],
                "rowActions": [],
                "actions": [
                  {
                    "id": "intent.projectLifecycleWorkspace.updateProjectStatusCmd.form.action.updateProjectStatusCmd",
                    "action": "updateProjectStatusCmd",
                    "labelKey": "intent.projectLifecycleWorkspace.updateProjectStatusCmd.form.action.updateProjectStatusCmd",
                    "order": 10,
                    "actionKey": "updateProjectStatusCmd"
                  }
                ]
              }
            ],
            "displayHint": "contextual-transition-actions"
          },
          {
            "id": "org-project-edit-form",
            "type": "commandForm",
            "organismName": "ProjectEditForm",
            "titleKey": "organism.projectLifecycleWorkspace.updateProjectCmd.title",
            "purpose": "Pre-populated edit form for the selected project allowing the manager to revise name, client, site address, budget, and schedule dates, then save via updateProjectCmd.",
            "userActions": [
              "updateProjectCmd"
            ],
            "requiredEntities": [],
            "readsFields": [],
            "writesFields": [],
            "rulesApplied": [
              "projectActivationRequiresCoreFields",
              "jobCostingRequiresBudgetAndSchedule"
            ],
            "order": 30,
            "intentions": [
              {
                "id": "intent.projectLifecycleWorkspace.updateProjectCmd.form",
                "intent": "commandForm",
                "order": 10,
                "titleKey": "intent.projectLifecycleWorkspace.updateProjectCmd.form.title",
                "source": "bff.updateProjectCmd",
                "binding": "binding.projectLifecycleWorkspace.updateProjectCmd",
                "submitAction": "updateProjectCmd",
                "fields": [
                  {
                    "id": "intent.projectLifecycleWorkspace.updateProjectCmd.form.field.name",
                    "field": "name",
                    "labelKey": "intent.projectLifecycleWorkspace.updateProjectCmd.form.field.name.label",
                    "order": 10,
                    "stateKey": "ui.projectLifecycleWorkspace.input.updateProjectCmd.name"
                  },
                  {
                    "id": "intent.projectLifecycleWorkspace.updateProjectCmd.form.field.clientId",
                    "field": "clientId",
                    "labelKey": "intent.projectLifecycleWorkspace.updateProjectCmd.form.field.clientId.label",
                    "order": 20,
                    "stateKey": "ui.projectLifecycleWorkspace.input.updateProjectCmd.clientId"
                  },
                  {
                    "id": "intent.projectLifecycleWorkspace.updateProjectCmd.form.field.siteAddress",
                    "field": "siteAddress",
                    "labelKey": "intent.projectLifecycleWorkspace.updateProjectCmd.form.field.siteAddress.label",
                    "order": 30,
                    "stateKey": "ui.projectLifecycleWorkspace.input.updateProjectCmd.siteAddress"
                  },
                  {
                    "id": "intent.projectLifecycleWorkspace.updateProjectCmd.form.field.budget",
                    "field": "budget",
                    "labelKey": "intent.projectLifecycleWorkspace.updateProjectCmd.form.field.budget.label",
                    "order": 40,
                    "stateKey": "ui.projectLifecycleWorkspace.input.updateProjectCmd.budget"
                  },
                  {
                    "id": "intent.projectLifecycleWorkspace.updateProjectCmd.form.field.startDate",
                    "field": "startDate",
                    "labelKey": "intent.projectLifecycleWorkspace.updateProjectCmd.form.field.startDate.label",
                    "order": 50,
                    "stateKey": "ui.projectLifecycleWorkspace.input.updateProjectCmd.startDate"
                  },
                  {
                    "id": "intent.projectLifecycleWorkspace.updateProjectCmd.form.field.endDate",
                    "field": "endDate",
                    "labelKey": "intent.projectLifecycleWorkspace.updateProjectCmd.form.field.endDate.label",
                    "order": 60,
                    "stateKey": "ui.projectLifecycleWorkspace.input.updateProjectCmd.endDate"
                  }
                ],
                "columns": [],
                "filters": [],
                "toolbar": [],
                "rowActions": [],
                "actions": [
                  {
                    "id": "intent.projectLifecycleWorkspace.updateProjectCmd.form.action.updateProjectCmd",
                    "action": "updateProjectCmd",
                    "labelKey": "intent.projectLifecycleWorkspace.updateProjectCmd.form.action.updateProjectCmd",
                    "order": 10,
                    "actionKey": "updateProjectCmd"
                  }
                ]
              }
            ],
            "displayHint": "summary-first"
          }
        ]
      },
      {
        "id": "section.projectLifecycleWorkspace.sec-create-project",
        "type": "section",
        "sectionName": "Create New Project",
        "titleKey": "section.projectLifecycleWorkspace.sec-create-project.title",
        "mode": "edit",
        "order": 20,
        "organisms": [
          {
            "id": "org-create-project-form",
            "type": "commandForm",
            "organismName": "CreateProjectForm",
            "titleKey": "organism.projectLifecycleWorkspace.createProjectCmd.title",
            "purpose": "Form for registering a brand-new project. Collects name, client (via picker), site address, budget, and planned start/end dates, then submits createProjectCmd to persist the record.",
            "userActions": [
              "createProjectCmd"
            ],
            "requiredEntities": [],
            "readsFields": [],
            "writesFields": [],
            "rulesApplied": [
              "projectActivationRequiresCoreFields",
              "jobCostingRequiresBudgetAndSchedule",
              "operationsRequireActiveProject"
            ],
            "order": 10,
            "intentions": [
              {
                "id": "intent.projectLifecycleWorkspace.createProjectCmd.form",
                "intent": "commandForm",
                "order": 10,
                "titleKey": "intent.projectLifecycleWorkspace.createProjectCmd.form.title",
                "source": "bff.createProjectCmd",
                "binding": "binding.projectLifecycleWorkspace.createProjectCmd",
                "submitAction": "createProjectCmd",
                "fields": [
                  {
                    "id": "intent.projectLifecycleWorkspace.createProjectCmd.form.field.name",
                    "field": "name",
                    "labelKey": "intent.projectLifecycleWorkspace.createProjectCmd.form.field.name.label",
                    "order": 10,
                    "stateKey": "ui.projectLifecycleWorkspace.input.createProjectCmd.name"
                  },
                  {
                    "id": "intent.projectLifecycleWorkspace.createProjectCmd.form.field.clientId",
                    "field": "clientId",
                    "labelKey": "intent.projectLifecycleWorkspace.createProjectCmd.form.field.clientId.label",
                    "order": 20,
                    "stateKey": "ui.projectLifecycleWorkspace.input.createProjectCmd.clientId"
                  },
                  {
                    "id": "intent.projectLifecycleWorkspace.createProjectCmd.form.field.siteAddress",
                    "field": "siteAddress",
                    "labelKey": "intent.projectLifecycleWorkspace.createProjectCmd.form.field.siteAddress.label",
                    "order": 30,
                    "stateKey": "ui.projectLifecycleWorkspace.input.createProjectCmd.siteAddress"
                  },
                  {
                    "id": "intent.projectLifecycleWorkspace.createProjectCmd.form.field.budget",
                    "field": "budget",
                    "labelKey": "intent.projectLifecycleWorkspace.createProjectCmd.form.field.budget.label",
                    "order": 40,
                    "stateKey": "ui.projectLifecycleWorkspace.input.createProjectCmd.budget"
                  },
                  {
                    "id": "intent.projectLifecycleWorkspace.createProjectCmd.form.field.startDate",
                    "field": "startDate",
                    "labelKey": "intent.projectLifecycleWorkspace.createProjectCmd.form.field.startDate.label",
                    "order": 50,
                    "stateKey": "ui.projectLifecycleWorkspace.input.createProjectCmd.startDate"
                  },
                  {
                    "id": "intent.projectLifecycleWorkspace.createProjectCmd.form.field.endDate",
                    "field": "endDate",
                    "labelKey": "intent.projectLifecycleWorkspace.createProjectCmd.form.field.endDate.label",
                    "order": 60,
                    "stateKey": "ui.projectLifecycleWorkspace.input.createProjectCmd.endDate"
                  }
                ],
                "columns": [],
                "filters": [],
                "toolbar": [],
                "rowActions": [],
                "actions": [
                  {
                    "id": "intent.projectLifecycleWorkspace.createProjectCmd.form.action.createProjectCmd",
                    "action": "createProjectCmd",
                    "labelKey": "intent.projectLifecycleWorkspace.createProjectCmd.form.action.createProjectCmd",
                    "order": 10,
                    "actionKey": "createProjectCmd"
                  }
                ]
              }
            ],
            "displayHint": "summary-first"
          }
        ]
      }
    ]
  },
  "dataBindings": [
    {
      "id": "binding.projectLifecycleWorkspace.createProjectCmd",
      "source": "bff.createProjectCmd",
      "command": "createProjectCmd",
      "description": "Create project",
      "stateKey": "ui.projectLifecycleWorkspace.output.createProjectCmd",
      "inputStateKeys": [
        "ui.projectLifecycleWorkspace.input.createProjectCmd.name",
        "ui.projectLifecycleWorkspace.input.createProjectCmd.clientId",
        "ui.projectLifecycleWorkspace.input.createProjectCmd.siteAddress",
        "ui.projectLifecycleWorkspace.input.createProjectCmd.budget",
        "ui.projectLifecycleWorkspace.input.createProjectCmd.startDate",
        "ui.projectLifecycleWorkspace.input.createProjectCmd.endDate"
      ]
    },
    {
      "id": "binding.projectLifecycleWorkspace.updateProjectCmd",
      "source": "bff.updateProjectCmd",
      "command": "updateProjectCmd",
      "description": "Update project details",
      "stateKey": "ui.projectLifecycleWorkspace.output.updateProjectCmd",
      "inputStateKeys": [
        "ui.projectLifecycleWorkspace.input.updateProjectCmd.projectId",
        "ui.projectLifecycleWorkspace.input.updateProjectCmd.name",
        "ui.projectLifecycleWorkspace.input.updateProjectCmd.clientId",
        "ui.projectLifecycleWorkspace.input.updateProjectCmd.siteAddress",
        "ui.projectLifecycleWorkspace.input.updateProjectCmd.budget",
        "ui.projectLifecycleWorkspace.input.updateProjectCmd.startDate",
        "ui.projectLifecycleWorkspace.input.updateProjectCmd.endDate"
      ]
    },
    {
      "id": "binding.projectLifecycleWorkspace.updateProjectStatusCmd",
      "source": "bff.updateProjectStatusCmd",
      "command": "updateProjectStatusCmd",
      "description": "Update project status",
      "stateKey": "ui.projectLifecycleWorkspace.output.updateProjectStatusCmd",
      "inputStateKeys": [
        "ui.projectLifecycleWorkspace.input.updateProjectStatusCmd.projectId",
        "ui.projectLifecycleWorkspace.input.updateProjectStatusCmd.status",
        "ui.projectLifecycleWorkspace.input.updateProjectStatusCmd.holdReason",
        "ui.projectLifecycleWorkspace.input.updateProjectStatusCmd.cancellationReason"
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
      "_102020_/l2/agentChangeFrontend/skills/genCfePage21RenderTs.ts"
    ],
    "visualStyle": {
      "description": "Desktop-first for PM and billing staff with mobile-optimized field entry; dashboard-driven, status-aware, touch-friendly UI with Gantt-ish timeline views."
    },
    "agent": "agentCfeMaterializeGen"
  }
] as const;
