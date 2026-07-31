/// <mls fileReference="_102045_/l2/buildFlowFsm/web/shared/projectLifecycleWorkspace.defs.ts" enhancement="_blank"/>

export const definition = {
  "pageId": "projectLifecycleWorkspace",
  "pageName": "Manage Projects",
  "moduleName": "buildFlowFsm",
  "baseClassName": "BuildFlowFsmProjectLifecycleWorkspaceBase",
  "routePattern": "/buildFlowFsm/projectLifecycleWorkspace/:projectId?",
  "sourceKind": "workflow",
  "ownerIds": [
    "workflow:projectLifecycle",
    "operation:createProject",
    "operation:updateProject",
    "operation:updateProjectStatus"
  ],
  "operationIds": [
    "createProject",
    "updateProject",
    "updateProjectStatus"
  ],
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
  "contractRef": {
    "tsPath": "_102045_/l2/buildFlowFsm/web/contracts/projectLifecycleWorkspace.ts",
    "contracts": [
      {
        "commandName": "createProjectCmd",
        "routeConst": "createProjectCmdRoute"
      },
      {
        "commandName": "updateProjectCmd",
        "routeConst": "updateProjectCmdRoute"
      },
      {
        "commandName": "updateProjectStatusCmd",
        "routeConst": "updateProjectStatusCmdRoute"
      }
    ]
  },
  "layoutRef": {
    "defPath": "_102045_/l2/buildFlowFsm/web/desktop/page11/projectLifecycleWorkspace.defs.ts",
    "layoutId": "cfe-20260731060448.1000"
  },
  "states": [
    {
      "stateKey": "ui.projectLifecycleWorkspace.status",
      "name": "status",
      "kind": "pageStatus",
      "defaultValue": ""
    },
    {
      "stateKey": "ui.projectLifecycleWorkspace.action.createProjectCmd.status",
      "name": "createProjectCmdState",
      "kind": "actionStatus",
      "actionRef": "createProjectCmd",
      "valueSet": [
        "idle",
        "loading",
        "success",
        "error"
      ],
      "defaultValue": "idle"
    },
    {
      "stateKey": "ui.projectLifecycleWorkspace.input.createProjectCmd.name",
      "name": "createProjectCmdName",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "createProjectCmd",
        "direction": "input",
        "field": "name"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.projectLifecycleWorkspace.input.createProjectCmd.clientId",
      "name": "createProjectCmdClientId",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "createProjectCmd",
        "direction": "input",
        "field": "clientId"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.projectLifecycleWorkspace.input.createProjectCmd.siteAddress",
      "name": "createProjectCmdSiteAddress",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "createProjectCmd",
        "direction": "input",
        "field": "siteAddress"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.projectLifecycleWorkspace.input.createProjectCmd.budget",
      "name": "createProjectCmdBudget",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "createProjectCmd",
        "direction": "input",
        "field": "budget"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.projectLifecycleWorkspace.input.createProjectCmd.startDate",
      "name": "createProjectCmdStartDate",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "createProjectCmd",
        "direction": "input",
        "field": "startDate"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.projectLifecycleWorkspace.input.createProjectCmd.endDate",
      "name": "createProjectCmdEndDate",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "createProjectCmd",
        "direction": "input",
        "field": "endDate"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.projectLifecycleWorkspace.output.createProjectCmd",
      "name": "createProjectCmdOutput",
      "kind": "commandOutput",
      "contractRef": {
        "commandName": "createProjectCmd",
        "direction": "output"
      },
      "defaultValue": null
    },
    {
      "stateKey": "ui.projectLifecycleWorkspace.action.createProjectCmd.error",
      "name": "createProjectCmdError",
      "kind": "actionError",
      "actionRef": "createProjectCmd",
      "defaultValue": ""
    },
    {
      "stateKey": "ui.projectLifecycleWorkspace.action.updateProjectCmd.status",
      "name": "updateProjectCmdState",
      "kind": "actionStatus",
      "actionRef": "updateProjectCmd",
      "valueSet": [
        "idle",
        "loading",
        "success",
        "error"
      ],
      "defaultValue": "idle"
    },
    {
      "stateKey": "ui.projectLifecycleWorkspace.input.updateProjectCmd.projectId",
      "name": "updateProjectCmdProjectId",
      "kind": "input",
      "source": "routeParam",
      "presentation": "route",
      "contractRef": {
        "commandName": "updateProjectCmd",
        "direction": "input",
        "field": "projectId"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.projectLifecycleWorkspace.input.updateProjectCmd.name",
      "name": "updateProjectCmdName",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "updateProjectCmd",
        "direction": "input",
        "field": "name"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.projectLifecycleWorkspace.input.updateProjectCmd.clientId",
      "name": "updateProjectCmdClientId",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "updateProjectCmd",
        "direction": "input",
        "field": "clientId"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.projectLifecycleWorkspace.input.updateProjectCmd.siteAddress",
      "name": "updateProjectCmdSiteAddress",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "updateProjectCmd",
        "direction": "input",
        "field": "siteAddress"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.projectLifecycleWorkspace.input.updateProjectCmd.budget",
      "name": "updateProjectCmdBudget",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "updateProjectCmd",
        "direction": "input",
        "field": "budget"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.projectLifecycleWorkspace.input.updateProjectCmd.startDate",
      "name": "updateProjectCmdStartDate",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "updateProjectCmd",
        "direction": "input",
        "field": "startDate"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.projectLifecycleWorkspace.input.updateProjectCmd.endDate",
      "name": "updateProjectCmdEndDate",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "updateProjectCmd",
        "direction": "input",
        "field": "endDate"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.projectLifecycleWorkspace.output.updateProjectCmd",
      "name": "updateProjectCmdOutput",
      "kind": "commandOutput",
      "contractRef": {
        "commandName": "updateProjectCmd",
        "direction": "output"
      },
      "defaultValue": null
    },
    {
      "stateKey": "ui.projectLifecycleWorkspace.action.updateProjectCmd.error",
      "name": "updateProjectCmdError",
      "kind": "actionError",
      "actionRef": "updateProjectCmd",
      "defaultValue": ""
    },
    {
      "stateKey": "ui.projectLifecycleWorkspace.action.updateProjectStatusCmd.status",
      "name": "updateProjectStatusCmdState",
      "kind": "actionStatus",
      "actionRef": "updateProjectStatusCmd",
      "valueSet": [
        "idle",
        "loading",
        "success",
        "error"
      ],
      "defaultValue": "idle"
    },
    {
      "stateKey": "ui.projectLifecycleWorkspace.input.updateProjectStatusCmd.projectId",
      "name": "updateProjectStatusCmdProjectId",
      "kind": "input",
      "source": "routeParam",
      "presentation": "route",
      "contractRef": {
        "commandName": "updateProjectStatusCmd",
        "direction": "input",
        "field": "projectId"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.projectLifecycleWorkspace.input.updateProjectStatusCmd.status",
      "name": "updateProjectStatusCmdStatus",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "updateProjectStatusCmd",
        "direction": "input",
        "field": "status"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.projectLifecycleWorkspace.input.updateProjectStatusCmd.holdReason",
      "name": "updateProjectStatusCmdHoldReason",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "updateProjectStatusCmd",
        "direction": "input",
        "field": "holdReason"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.projectLifecycleWorkspace.input.updateProjectStatusCmd.cancellationReason",
      "name": "updateProjectStatusCmdCancellationReason",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "updateProjectStatusCmd",
        "direction": "input",
        "field": "cancellationReason"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.projectLifecycleWorkspace.output.updateProjectStatusCmd",
      "name": "updateProjectStatusCmdOutput",
      "kind": "commandOutput",
      "contractRef": {
        "commandName": "updateProjectStatusCmd",
        "direction": "output"
      },
      "defaultValue": null
    },
    {
      "stateKey": "ui.projectLifecycleWorkspace.action.updateProjectStatusCmd.error",
      "name": "updateProjectStatusCmdError",
      "kind": "actionError",
      "actionRef": "updateProjectStatusCmd",
      "defaultValue": ""
    }
  ],
  "actions": [
    {
      "actionId": "createProjectCmd",
      "kind": "command",
      "commandRef": "createProjectCmd",
      "routeKey": "buildFlowFsm.projectLifecycleWorkspace.createProjectCmd",
      "purpose": "Create project",
      "methodName": "createProjectCmd",
      "handlerName": "handleCreateProjectCmdClick",
      "inputStateKeys": [
        "ui.projectLifecycleWorkspace.input.createProjectCmd.name",
        "ui.projectLifecycleWorkspace.input.createProjectCmd.clientId",
        "ui.projectLifecycleWorkspace.input.createProjectCmd.siteAddress",
        "ui.projectLifecycleWorkspace.input.createProjectCmd.budget",
        "ui.projectLifecycleWorkspace.input.createProjectCmd.startDate",
        "ui.projectLifecycleWorkspace.input.createProjectCmd.endDate"
      ],
      "routeParamInputStateKeys": [],
      "selectedEntityInputStateKeys": [],
      "outputStateKeys": [
        "ui.projectLifecycleWorkspace.output.createProjectCmd"
      ],
      "statusStateKey": "ui.projectLifecycleWorkspace.action.createProjectCmd.status",
      "errorStateKey": "ui.projectLifecycleWorkspace.action.createProjectCmd.error",
      "feedback": {
        "successMessageKey": "action.createProjectCmd.success",
        "errorMessageKey": "action.createProjectCmd.error",
        "dismissible": true
      },
      "clearInputStateKeys": [
        "ui.projectLifecycleWorkspace.input.createProjectCmd.name",
        "ui.projectLifecycleWorkspace.input.createProjectCmd.clientId",
        "ui.projectLifecycleWorkspace.input.createProjectCmd.siteAddress",
        "ui.projectLifecycleWorkspace.input.createProjectCmd.budget",
        "ui.projectLifecycleWorkspace.input.createProjectCmd.startDate",
        "ui.projectLifecycleWorkspace.input.createProjectCmd.endDate"
      ]
    },
    {
      "actionId": "updateProjectCmd",
      "kind": "command",
      "commandRef": "updateProjectCmd",
      "routeKey": "buildFlowFsm.projectLifecycleWorkspace.updateProjectCmd",
      "purpose": "Update project details",
      "methodName": "updateProjectCmd",
      "handlerName": "handleUpdateProjectCmdClick",
      "inputStateKeys": [
        "ui.projectLifecycleWorkspace.input.updateProjectCmd.projectId",
        "ui.projectLifecycleWorkspace.input.updateProjectCmd.name",
        "ui.projectLifecycleWorkspace.input.updateProjectCmd.clientId",
        "ui.projectLifecycleWorkspace.input.updateProjectCmd.siteAddress",
        "ui.projectLifecycleWorkspace.input.updateProjectCmd.budget",
        "ui.projectLifecycleWorkspace.input.updateProjectCmd.startDate",
        "ui.projectLifecycleWorkspace.input.updateProjectCmd.endDate"
      ],
      "routeParamInputStateKeys": [
        "ui.projectLifecycleWorkspace.input.updateProjectCmd.projectId"
      ],
      "selectedEntityInputStateKeys": [],
      "outputStateKeys": [
        "ui.projectLifecycleWorkspace.output.updateProjectCmd"
      ],
      "statusStateKey": "ui.projectLifecycleWorkspace.action.updateProjectCmd.status",
      "errorStateKey": "ui.projectLifecycleWorkspace.action.updateProjectCmd.error",
      "feedback": {
        "successMessageKey": "action.updateProjectCmd.success",
        "errorMessageKey": "action.updateProjectCmd.error",
        "dismissible": true
      },
      "clearInputStateKeys": [
        "ui.projectLifecycleWorkspace.input.updateProjectCmd.name",
        "ui.projectLifecycleWorkspace.input.updateProjectCmd.clientId",
        "ui.projectLifecycleWorkspace.input.updateProjectCmd.siteAddress",
        "ui.projectLifecycleWorkspace.input.updateProjectCmd.budget",
        "ui.projectLifecycleWorkspace.input.updateProjectCmd.startDate",
        "ui.projectLifecycleWorkspace.input.updateProjectCmd.endDate"
      ]
    },
    {
      "actionId": "updateProjectStatusCmd",
      "kind": "command",
      "commandRef": "updateProjectStatusCmd",
      "routeKey": "buildFlowFsm.projectLifecycleWorkspace.updateProjectStatusCmd",
      "purpose": "Update project status",
      "methodName": "updateProjectStatusCmd",
      "handlerName": "handleUpdateProjectStatusCmdClick",
      "inputStateKeys": [
        "ui.projectLifecycleWorkspace.input.updateProjectStatusCmd.projectId",
        "ui.projectLifecycleWorkspace.input.updateProjectStatusCmd.status",
        "ui.projectLifecycleWorkspace.input.updateProjectStatusCmd.holdReason",
        "ui.projectLifecycleWorkspace.input.updateProjectStatusCmd.cancellationReason"
      ],
      "routeParamInputStateKeys": [
        "ui.projectLifecycleWorkspace.input.updateProjectStatusCmd.projectId"
      ],
      "selectedEntityInputStateKeys": [],
      "outputStateKeys": [
        "ui.projectLifecycleWorkspace.output.updateProjectStatusCmd"
      ],
      "statusStateKey": "ui.projectLifecycleWorkspace.action.updateProjectStatusCmd.status",
      "errorStateKey": "ui.projectLifecycleWorkspace.action.updateProjectStatusCmd.error",
      "feedback": {
        "successMessageKey": "action.updateProjectStatusCmd.success",
        "errorMessageKey": "action.updateProjectStatusCmd.error",
        "dismissible": true
      },
      "clearInputStateKeys": [
        "ui.projectLifecycleWorkspace.input.updateProjectStatusCmd.status",
        "ui.projectLifecycleWorkspace.input.updateProjectStatusCmd.holdReason",
        "ui.projectLifecycleWorkspace.input.updateProjectStatusCmd.cancellationReason"
      ]
    },
    {
      "actionId": "set.createProjectCmdName",
      "kind": "stateSetter",
      "stateKey": "ui.projectLifecycleWorkspace.input.createProjectCmd.name",
      "methodName": "setCreateProjectCmdName",
      "handlerName": "handleCreateProjectCmdNameChange"
    },
    {
      "actionId": "set.createProjectCmdClientId",
      "kind": "stateSetter",
      "stateKey": "ui.projectLifecycleWorkspace.input.createProjectCmd.clientId",
      "methodName": "setCreateProjectCmdClientId",
      "handlerName": "handleCreateProjectCmdClientIdChange"
    },
    {
      "actionId": "set.createProjectCmdSiteAddress",
      "kind": "stateSetter",
      "stateKey": "ui.projectLifecycleWorkspace.input.createProjectCmd.siteAddress",
      "methodName": "setCreateProjectCmdSiteAddress",
      "handlerName": "handleCreateProjectCmdSiteAddressChange"
    },
    {
      "actionId": "set.createProjectCmdBudget",
      "kind": "stateSetter",
      "stateKey": "ui.projectLifecycleWorkspace.input.createProjectCmd.budget",
      "methodName": "setCreateProjectCmdBudget",
      "handlerName": "handleCreateProjectCmdBudgetChange"
    },
    {
      "actionId": "set.createProjectCmdStartDate",
      "kind": "stateSetter",
      "stateKey": "ui.projectLifecycleWorkspace.input.createProjectCmd.startDate",
      "methodName": "setCreateProjectCmdStartDate",
      "handlerName": "handleCreateProjectCmdStartDateChange"
    },
    {
      "actionId": "set.createProjectCmdEndDate",
      "kind": "stateSetter",
      "stateKey": "ui.projectLifecycleWorkspace.input.createProjectCmd.endDate",
      "methodName": "setCreateProjectCmdEndDate",
      "handlerName": "handleCreateProjectCmdEndDateChange"
    },
    {
      "actionId": "set.updateProjectCmdProjectId",
      "kind": "stateSetter",
      "stateKey": "ui.projectLifecycleWorkspace.input.updateProjectCmd.projectId",
      "methodName": "setUpdateProjectCmdProjectId",
      "handlerName": "handleUpdateProjectCmdProjectIdChange"
    },
    {
      "actionId": "set.updateProjectCmdName",
      "kind": "stateSetter",
      "stateKey": "ui.projectLifecycleWorkspace.input.updateProjectCmd.name",
      "methodName": "setUpdateProjectCmdName",
      "handlerName": "handleUpdateProjectCmdNameChange"
    },
    {
      "actionId": "set.updateProjectCmdClientId",
      "kind": "stateSetter",
      "stateKey": "ui.projectLifecycleWorkspace.input.updateProjectCmd.clientId",
      "methodName": "setUpdateProjectCmdClientId",
      "handlerName": "handleUpdateProjectCmdClientIdChange"
    },
    {
      "actionId": "set.updateProjectCmdSiteAddress",
      "kind": "stateSetter",
      "stateKey": "ui.projectLifecycleWorkspace.input.updateProjectCmd.siteAddress",
      "methodName": "setUpdateProjectCmdSiteAddress",
      "handlerName": "handleUpdateProjectCmdSiteAddressChange"
    },
    {
      "actionId": "set.updateProjectCmdBudget",
      "kind": "stateSetter",
      "stateKey": "ui.projectLifecycleWorkspace.input.updateProjectCmd.budget",
      "methodName": "setUpdateProjectCmdBudget",
      "handlerName": "handleUpdateProjectCmdBudgetChange"
    },
    {
      "actionId": "set.updateProjectCmdStartDate",
      "kind": "stateSetter",
      "stateKey": "ui.projectLifecycleWorkspace.input.updateProjectCmd.startDate",
      "methodName": "setUpdateProjectCmdStartDate",
      "handlerName": "handleUpdateProjectCmdStartDateChange"
    },
    {
      "actionId": "set.updateProjectCmdEndDate",
      "kind": "stateSetter",
      "stateKey": "ui.projectLifecycleWorkspace.input.updateProjectCmd.endDate",
      "methodName": "setUpdateProjectCmdEndDate",
      "handlerName": "handleUpdateProjectCmdEndDateChange"
    },
    {
      "actionId": "set.updateProjectStatusCmdProjectId",
      "kind": "stateSetter",
      "stateKey": "ui.projectLifecycleWorkspace.input.updateProjectStatusCmd.projectId",
      "methodName": "setUpdateProjectStatusCmdProjectId",
      "handlerName": "handleUpdateProjectStatusCmdProjectIdChange"
    },
    {
      "actionId": "set.updateProjectStatusCmdStatus",
      "kind": "stateSetter",
      "stateKey": "ui.projectLifecycleWorkspace.input.updateProjectStatusCmd.status",
      "methodName": "setUpdateProjectStatusCmdStatus",
      "handlerName": "handleUpdateProjectStatusCmdStatusChange"
    },
    {
      "actionId": "set.updateProjectStatusCmdHoldReason",
      "kind": "stateSetter",
      "stateKey": "ui.projectLifecycleWorkspace.input.updateProjectStatusCmd.holdReason",
      "methodName": "setUpdateProjectStatusCmdHoldReason",
      "handlerName": "handleUpdateProjectStatusCmdHoldReasonChange"
    },
    {
      "actionId": "set.updateProjectStatusCmdCancellationReason",
      "kind": "stateSetter",
      "stateKey": "ui.projectLifecycleWorkspace.input.updateProjectStatusCmd.cancellationReason",
      "methodName": "setUpdateProjectStatusCmdCancellationReason",
      "handlerName": "handleUpdateProjectStatusCmdCancellationReasonChange"
    }
  ],
  "initialLoads": [],
  "businessContextRefs": [],
  "navigationRefs": [],
  "i18nMeta": {
    "defaultLocale": "en",
    "activeLocales": [
      "en",
      "pt",
      "es"
    ],
    "runtimeLocales": [
      "en",
      "pt-br",
      "es"
    ]
  },
  "i18n": {
    "section.projectLifecycleWorkspace.createProjectSection.title": "Create Project",
    "organism.projectLifecycleWorkspace.createProjectCmd.title": "Create project",
    "intent.projectLifecycleWorkspace.createProjectCmd.form.title": "Create project",
    "intent.projectLifecycleWorkspace.createProjectCmd.form.action.createProjectCmd": "Create project",
    "intent.projectLifecycleWorkspace.createProjectCmd.form.field.name.label": "Name",
    "intent.projectLifecycleWorkspace.createProjectCmd.form.field.clientId.label": "Client Id",
    "intent.projectLifecycleWorkspace.createProjectCmd.form.field.siteAddress.label": "Site Address",
    "intent.projectLifecycleWorkspace.createProjectCmd.form.field.budget.label": "Budget",
    "intent.projectLifecycleWorkspace.createProjectCmd.form.field.startDate.label": "Start Date",
    "intent.projectLifecycleWorkspace.createProjectCmd.form.field.endDate.label": "End Date",
    "section.projectLifecycleWorkspace.editProjectSection.title": "Edit Project Details",
    "organism.projectLifecycleWorkspace.updateProjectCmd.title": "Update project details",
    "intent.projectLifecycleWorkspace.updateProjectCmd.form.title": "Update project details",
    "intent.projectLifecycleWorkspace.updateProjectCmd.form.action.updateProjectCmd": "Update project details",
    "intent.projectLifecycleWorkspace.updateProjectCmd.form.field.name.label": "Name",
    "intent.projectLifecycleWorkspace.updateProjectCmd.form.field.clientId.label": "Client Id",
    "intent.projectLifecycleWorkspace.updateProjectCmd.form.field.siteAddress.label": "Site Address",
    "intent.projectLifecycleWorkspace.updateProjectCmd.form.field.budget.label": "Budget",
    "intent.projectLifecycleWorkspace.updateProjectCmd.form.field.startDate.label": "Start Date",
    "intent.projectLifecycleWorkspace.updateProjectCmd.form.field.endDate.label": "End Date",
    "section.projectLifecycleWorkspace.projectStatusSection.title": "Update Project Status",
    "organism.projectLifecycleWorkspace.updateProjectStatusCmd.title": "Update project status",
    "intent.projectLifecycleWorkspace.updateProjectStatusCmd.form.title": "Update project status",
    "intent.projectLifecycleWorkspace.updateProjectStatusCmd.form.action.updateProjectStatusCmd": "Update project status",
    "intent.projectLifecycleWorkspace.updateProjectStatusCmd.form.field.status.label": "Status",
    "intent.projectLifecycleWorkspace.updateProjectStatusCmd.form.field.holdReason.label": "Hold Reason",
    "intent.projectLifecycleWorkspace.updateProjectStatusCmd.form.field.cancellationReason.label": "Cancellation Reason",
    "section.projectLifecycleWorkspace.sec-project-workspace.title": "Project Workspace",
    "organism.projectLifecycleWorkspace.master-detail10.title": "Master detail",
    "intent.projectLifecycleWorkspace.master-detail10.content.title": "Master detail",
    "section.projectLifecycleWorkspace.sec-create-project.title": "Create New Project"
  },
  "automation": {
    "statePrefix": "ui.projectLifecycleWorkspace",
    "stateKeys": [
      "ui.projectLifecycleWorkspace.status",
      "ui.projectLifecycleWorkspace.action.createProjectCmd.status",
      "ui.projectLifecycleWorkspace.input.createProjectCmd.name",
      "ui.projectLifecycleWorkspace.input.createProjectCmd.clientId",
      "ui.projectLifecycleWorkspace.input.createProjectCmd.siteAddress",
      "ui.projectLifecycleWorkspace.input.createProjectCmd.budget",
      "ui.projectLifecycleWorkspace.input.createProjectCmd.startDate",
      "ui.projectLifecycleWorkspace.input.createProjectCmd.endDate",
      "ui.projectLifecycleWorkspace.output.createProjectCmd",
      "ui.projectLifecycleWorkspace.action.createProjectCmd.error",
      "ui.projectLifecycleWorkspace.action.updateProjectCmd.status",
      "ui.projectLifecycleWorkspace.input.updateProjectCmd.projectId",
      "ui.projectLifecycleWorkspace.input.updateProjectCmd.name",
      "ui.projectLifecycleWorkspace.input.updateProjectCmd.clientId",
      "ui.projectLifecycleWorkspace.input.updateProjectCmd.siteAddress",
      "ui.projectLifecycleWorkspace.input.updateProjectCmd.budget",
      "ui.projectLifecycleWorkspace.input.updateProjectCmd.startDate",
      "ui.projectLifecycleWorkspace.input.updateProjectCmd.endDate",
      "ui.projectLifecycleWorkspace.output.updateProjectCmd",
      "ui.projectLifecycleWorkspace.action.updateProjectCmd.error",
      "ui.projectLifecycleWorkspace.action.updateProjectStatusCmd.status",
      "ui.projectLifecycleWorkspace.input.updateProjectStatusCmd.projectId",
      "ui.projectLifecycleWorkspace.input.updateProjectStatusCmd.status",
      "ui.projectLifecycleWorkspace.input.updateProjectStatusCmd.holdReason",
      "ui.projectLifecycleWorkspace.input.updateProjectStatusCmd.cancellationReason",
      "ui.projectLifecycleWorkspace.output.updateProjectStatusCmd",
      "ui.projectLifecycleWorkspace.action.updateProjectStatusCmd.error"
    ],
    "actionIds": [
      "createProjectCmd",
      "updateProjectCmd",
      "updateProjectStatusCmd",
      "set.createProjectCmdName",
      "set.createProjectCmdClientId",
      "set.createProjectCmdSiteAddress",
      "set.createProjectCmdBudget",
      "set.createProjectCmdStartDate",
      "set.createProjectCmdEndDate",
      "set.updateProjectCmdProjectId",
      "set.updateProjectCmdName",
      "set.updateProjectCmdClientId",
      "set.updateProjectCmdSiteAddress",
      "set.updateProjectCmdBudget",
      "set.updateProjectCmdStartDate",
      "set.updateProjectCmdEndDate",
      "set.updateProjectStatusCmdProjectId",
      "set.updateProjectStatusCmdStatus",
      "set.updateProjectStatusCmdHoldReason",
      "set.updateProjectStatusCmdCancellationReason"
    ]
  }
};

export const pipeline = [
  {
    "id": "projectLifecycleWorkspace__l2_shared",
    "type": "l2_shared",
    "outputPath": "_102045_/l2/buildFlowFsm/web/shared/projectLifecycleWorkspace.ts",
    "defPath": "_102045_/l2/buildFlowFsm/web/shared/projectLifecycleWorkspace.defs.ts",
    "dependsFiles": [
      "_102045_/l2/buildFlowFsm/web/contracts/projectLifecycleWorkspace.ts",
      "_102029_.d.ts"
    ],
    "dependsOn": [],
    "skills": [
      "_102020_/l2/agentChangeFrontend/skills/genCfeSharedTs.ts"
    ],
    "rulesApplied": [
      "projectActivationRequiresCoreFields",
      "jobCostingRequiresBudgetAndSchedule",
      "operationsRequireActiveProject"
    ],
    "agent": "agentCfeMaterializeGen"
  }
] as const;
