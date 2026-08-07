/// <mls fileReference="_102045_/l2/buildFlowFsm/web/shared/clientManagementWorkspace.defs.ts" enhancement="_blank"/>

export const definition = {
  "pageId": "clientManagementWorkspace",
  "pageName": "Client Directory",
  "moduleName": "buildFlowFsm",
  "baseClassName": "BuildFlowFsmClientManagementWorkspaceBase",
  "routePattern": "/buildFlowFsm/clientManagementWorkspace/:clientId?",
  "sourceKind": "operation",
  "ownerIds": [
    "operation:queryClients",
    "operation:createClient",
    "operation:updateClient",
    "operation:deleteClient"
  ],
  "operationIds": [
    "queryClients",
    "createClient",
    "updateClient",
    "deleteClient"
  ],
  "origin": {
    "source": "l4-journey",
    "workspaceId": "clientManagementWorkspace",
    "workspaceKind": "entityManagement",
    "actor": "projectManager",
    "entity": "Client",
    "owners": [
      {
        "kind": "operation",
        "id": "queryClients",
        "defPath": "_102045_/l4/buildFlowFsm/operations/queryClients.defs.ts"
      },
      {
        "kind": "operation",
        "id": "createClient",
        "defPath": "_102045_/l4/buildFlowFsm/operations/createClient.defs.ts"
      },
      {
        "kind": "operation",
        "id": "updateClient",
        "defPath": "_102045_/l4/buildFlowFsm/operations/updateClient.defs.ts"
      },
      {
        "kind": "operation",
        "id": "deleteClient",
        "defPath": "_102045_/l4/buildFlowFsm/operations/deleteClient.defs.ts"
      }
    ],
    "microUserFlow": {
      "source": "l4/story.steps",
      "workflowSteps": [],
      "operations": [
        {
          "operationId": "queryClients",
          "commandName": "queryClients",
          "steps": [
            "Open the client list",
            "Optionally filter or sort by name or company",
            "Review client contact details in the results",
            "Select a client to use on the project"
          ]
        },
        {
          "operationId": "createClient",
          "commandName": "createClient",
          "steps": [
            "Open the create-client form while setting up or editing a project",
            "Enter the client display name and primary email",
            "Optionally fill company name, phone, and address",
            "Confirm to save the new client record"
          ]
        },
        {
          "operationId": "updateClient",
          "commandName": "updateClient",
          "steps": [
            "Open the existing client record to edit",
            "Change name, company, email, phone, and/or address as needed",
            "Save the updates to the client master data"
          ]
        },
        {
          "operationId": "deleteClient",
          "commandName": "deleteClient",
          "steps": [
            "Select the client record to remove",
            "Confirm the deletion",
            "System permanently deletes the client record"
          ]
        }
      ]
    }
  },
  "contractRef": {
    "tsPath": "_102045_/l2/buildFlowFsm/web/contracts/clientManagementWorkspace.ts",
    "contracts": [
      {
        "commandName": "listClients",
        "routeConst": "listClientsRoute"
      },
      {
        "commandName": "createClientCmd",
        "routeConst": "createClientCmdRoute"
      },
      {
        "commandName": "updateClientCmd",
        "routeConst": "updateClientCmdRoute"
      },
      {
        "commandName": "deleteClientCmd",
        "routeConst": "deleteClientCmdRoute"
      }
    ]
  },
  "layoutRef": {
    "defPath": "_102045_/l2/buildFlowFsm/web/desktop/page11/clientManagementWorkspace.defs.ts",
    "layoutId": "tabular_classic"
  },
  "states": [
    {
      "stateKey": "ui.clientManagementWorkspace.status",
      "name": "status",
      "kind": "pageStatus",
      "defaultValue": ""
    },
    {
      "stateKey": "ui.clientManagementWorkspace.action.listClients.status",
      "name": "listClientsState",
      "kind": "actionStatus",
      "actionRef": "listClients",
      "valueSet": [
        "idle",
        "loading",
        "success",
        "error"
      ],
      "defaultValue": "idle"
    },
    {
      "stateKey": "ui.clientManagementWorkspace.input.listClients.name",
      "name": "listClientsName",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "listClients",
        "direction": "input",
        "field": "name"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.clientManagementWorkspace.input.listClients.company",
      "name": "listClientsCompany",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "listClients",
        "direction": "input",
        "field": "company"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.clientManagementWorkspace.input.listClients.email",
      "name": "listClientsEmail",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "listClients",
        "direction": "input",
        "field": "email"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.clientManagementWorkspace.input.listClients.page",
      "name": "listClientsPage",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "listClients",
        "direction": "input",
        "field": "page"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.clientManagementWorkspace.input.listClients.pageSize",
      "name": "listClientsPageSize",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "listClients",
        "direction": "input",
        "field": "pageSize"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.clientManagementWorkspace.data.listClients",
      "name": "listClientsData",
      "kind": "queryResult",
      "contractRef": {
        "commandName": "listClients",
        "direction": "output"
      },
      "outputShape": "paginated",
      "collection": false,
      "defaultValue": {
        "items": [],
        "total": 0
      }
    },
    {
      "stateKey": "ui.clientManagementWorkspace.action.createClientCmd.status",
      "name": "createClientCmdState",
      "kind": "actionStatus",
      "actionRef": "createClientCmd",
      "valueSet": [
        "idle",
        "loading",
        "success",
        "error"
      ],
      "defaultValue": "idle"
    },
    {
      "stateKey": "ui.clientManagementWorkspace.input.createClientCmd.name",
      "name": "createClientCmdName",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "createClientCmd",
        "direction": "input",
        "field": "name"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.clientManagementWorkspace.input.createClientCmd.email",
      "name": "createClientCmdEmail",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "createClientCmd",
        "direction": "input",
        "field": "email"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.clientManagementWorkspace.input.createClientCmd.company",
      "name": "createClientCmdCompany",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "createClientCmd",
        "direction": "input",
        "field": "company"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.clientManagementWorkspace.input.createClientCmd.phone",
      "name": "createClientCmdPhone",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "createClientCmd",
        "direction": "input",
        "field": "phone"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.clientManagementWorkspace.input.createClientCmd.address",
      "name": "createClientCmdAddress",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "createClientCmd",
        "direction": "input",
        "field": "address"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.clientManagementWorkspace.output.createClientCmd",
      "name": "createClientCmdOutput",
      "kind": "commandOutput",
      "contractRef": {
        "commandName": "createClientCmd",
        "direction": "output"
      },
      "defaultValue": null
    },
    {
      "stateKey": "ui.clientManagementWorkspace.action.createClientCmd.error",
      "name": "createClientCmdError",
      "kind": "actionError",
      "actionRef": "createClientCmd",
      "defaultValue": ""
    },
    {
      "stateKey": "ui.clientManagementWorkspace.action.updateClientCmd.status",
      "name": "updateClientCmdState",
      "kind": "actionStatus",
      "actionRef": "updateClientCmd",
      "valueSet": [
        "idle",
        "loading",
        "success",
        "error"
      ],
      "defaultValue": "idle"
    },
    {
      "stateKey": "ui.clientManagementWorkspace.input.updateClientCmd.clientId",
      "name": "updateClientCmdClientId",
      "kind": "input",
      "source": "routeParam",
      "presentation": "route",
      "contractRef": {
        "commandName": "updateClientCmd",
        "direction": "input",
        "field": "clientId"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.clientManagementWorkspace.input.updateClientCmd.name",
      "name": "updateClientCmdName",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "updateClientCmd",
        "direction": "input",
        "field": "name"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.clientManagementWorkspace.input.updateClientCmd.company",
      "name": "updateClientCmdCompany",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "updateClientCmd",
        "direction": "input",
        "field": "company"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.clientManagementWorkspace.input.updateClientCmd.email",
      "name": "updateClientCmdEmail",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "updateClientCmd",
        "direction": "input",
        "field": "email"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.clientManagementWorkspace.input.updateClientCmd.phone",
      "name": "updateClientCmdPhone",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "updateClientCmd",
        "direction": "input",
        "field": "phone"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.clientManagementWorkspace.input.updateClientCmd.address",
      "name": "updateClientCmdAddress",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "updateClientCmd",
        "direction": "input",
        "field": "address"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.clientManagementWorkspace.output.updateClientCmd",
      "name": "updateClientCmdOutput",
      "kind": "commandOutput",
      "contractRef": {
        "commandName": "updateClientCmd",
        "direction": "output"
      },
      "defaultValue": null
    },
    {
      "stateKey": "ui.clientManagementWorkspace.action.updateClientCmd.error",
      "name": "updateClientCmdError",
      "kind": "actionError",
      "actionRef": "updateClientCmd",
      "defaultValue": ""
    },
    {
      "stateKey": "ui.clientManagementWorkspace.action.deleteClientCmd.status",
      "name": "deleteClientCmdState",
      "kind": "actionStatus",
      "actionRef": "deleteClientCmd",
      "valueSet": [
        "idle",
        "loading",
        "success",
        "error"
      ],
      "defaultValue": "idle"
    },
    {
      "stateKey": "ui.clientManagementWorkspace.input.deleteClientCmd.clientId",
      "name": "deleteClientCmdClientId",
      "kind": "input",
      "source": "selectedEntity",
      "presentation": "selection",
      "contractRef": {
        "commandName": "deleteClientCmd",
        "direction": "input",
        "field": "clientId"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.clientManagementWorkspace.output.deleteClientCmd",
      "name": "deleteClientCmdOutput",
      "kind": "commandOutput",
      "contractRef": {
        "commandName": "deleteClientCmd",
        "direction": "output"
      },
      "defaultValue": null
    },
    {
      "stateKey": "ui.clientManagementWorkspace.action.deleteClientCmd.error",
      "name": "deleteClientCmdError",
      "kind": "actionError",
      "actionRef": "deleteClientCmd",
      "defaultValue": ""
    }
  ],
  "actions": [
    {
      "actionId": "listClients",
      "kind": "query",
      "commandRef": "listClients",
      "routeKey": "buildFlowFsm.clientManagementWorkspace.listClients",
      "purpose": "Browse clients",
      "methodName": "loadListClients",
      "handlerName": "handleListClientsClick",
      "inputStateKeys": [
        "ui.clientManagementWorkspace.input.listClients.name",
        "ui.clientManagementWorkspace.input.listClients.company",
        "ui.clientManagementWorkspace.input.listClients.email",
        "ui.clientManagementWorkspace.input.listClients.page",
        "ui.clientManagementWorkspace.input.listClients.pageSize"
      ],
      "routeParamInputStateKeys": [],
      "selectedEntityInputStateKeys": [],
      "outputStateKeys": [
        "ui.clientManagementWorkspace.data.listClients"
      ],
      "statusStateKey": "ui.clientManagementWorkspace.action.listClients.status"
    },
    {
      "actionId": "createClientCmd",
      "kind": "command",
      "commandRef": "createClientCmd",
      "routeKey": "buildFlowFsm.clientManagementWorkspace.createClientCmd",
      "purpose": "Create client",
      "methodName": "createClientCmd",
      "handlerName": "handleCreateClientCmdClick",
      "inputStateKeys": [
        "ui.clientManagementWorkspace.input.createClientCmd.name",
        "ui.clientManagementWorkspace.input.createClientCmd.email",
        "ui.clientManagementWorkspace.input.createClientCmd.company",
        "ui.clientManagementWorkspace.input.createClientCmd.phone",
        "ui.clientManagementWorkspace.input.createClientCmd.address"
      ],
      "routeParamInputStateKeys": [],
      "selectedEntityInputStateKeys": [],
      "outputStateKeys": [
        "ui.clientManagementWorkspace.output.createClientCmd"
      ],
      "statusStateKey": "ui.clientManagementWorkspace.action.createClientCmd.status",
      "errorStateKey": "ui.clientManagementWorkspace.action.createClientCmd.error",
      "feedback": {
        "successMessageKey": "action.createClientCmd.success",
        "errorMessageKey": "action.createClientCmd.error",
        "dismissible": true
      },
      "clearInputStateKeys": [
        "ui.clientManagementWorkspace.input.createClientCmd.name",
        "ui.clientManagementWorkspace.input.createClientCmd.email",
        "ui.clientManagementWorkspace.input.createClientCmd.company",
        "ui.clientManagementWorkspace.input.createClientCmd.phone",
        "ui.clientManagementWorkspace.input.createClientCmd.address"
      ],
      "refreshActionIds": [
        "listClients"
      ]
    },
    {
      "actionId": "updateClientCmd",
      "kind": "command",
      "commandRef": "updateClientCmd",
      "routeKey": "buildFlowFsm.clientManagementWorkspace.updateClientCmd",
      "purpose": "Update client",
      "methodName": "updateClientCmd",
      "handlerName": "handleUpdateClientCmdClick",
      "inputStateKeys": [
        "ui.clientManagementWorkspace.input.updateClientCmd.clientId",
        "ui.clientManagementWorkspace.input.updateClientCmd.name",
        "ui.clientManagementWorkspace.input.updateClientCmd.company",
        "ui.clientManagementWorkspace.input.updateClientCmd.email",
        "ui.clientManagementWorkspace.input.updateClientCmd.phone",
        "ui.clientManagementWorkspace.input.updateClientCmd.address"
      ],
      "routeParamInputStateKeys": [
        "ui.clientManagementWorkspace.input.updateClientCmd.clientId"
      ],
      "selectedEntityInputStateKeys": [],
      "outputStateKeys": [
        "ui.clientManagementWorkspace.output.updateClientCmd"
      ],
      "statusStateKey": "ui.clientManagementWorkspace.action.updateClientCmd.status",
      "errorStateKey": "ui.clientManagementWorkspace.action.updateClientCmd.error",
      "feedback": {
        "successMessageKey": "action.updateClientCmd.success",
        "errorMessageKey": "action.updateClientCmd.error",
        "dismissible": true
      },
      "clearInputStateKeys": [
        "ui.clientManagementWorkspace.input.updateClientCmd.name",
        "ui.clientManagementWorkspace.input.updateClientCmd.company",
        "ui.clientManagementWorkspace.input.updateClientCmd.email",
        "ui.clientManagementWorkspace.input.updateClientCmd.phone",
        "ui.clientManagementWorkspace.input.updateClientCmd.address"
      ],
      "refreshActionIds": [
        "listClients"
      ]
    },
    {
      "actionId": "deleteClientCmd",
      "kind": "command",
      "commandRef": "deleteClientCmd",
      "routeKey": "buildFlowFsm.clientManagementWorkspace.deleteClientCmd",
      "purpose": "Delete client",
      "methodName": "deleteClientCmd",
      "handlerName": "handleDeleteClientCmdClick",
      "inputStateKeys": [
        "ui.clientManagementWorkspace.input.deleteClientCmd.clientId"
      ],
      "routeParamInputStateKeys": [],
      "selectedEntityInputStateKeys": [
        "ui.clientManagementWorkspace.input.deleteClientCmd.clientId"
      ],
      "outputStateKeys": [
        "ui.clientManagementWorkspace.output.deleteClientCmd"
      ],
      "statusStateKey": "ui.clientManagementWorkspace.action.deleteClientCmd.status",
      "errorStateKey": "ui.clientManagementWorkspace.action.deleteClientCmd.error",
      "feedback": {
        "successMessageKey": "action.deleteClientCmd.success",
        "errorMessageKey": "action.deleteClientCmd.error",
        "dismissible": true
      },
      "clearInputStateKeys": [
        "ui.clientManagementWorkspace.input.deleteClientCmd.clientId"
      ],
      "refreshActionIds": [
        "listClients"
      ]
    },
    {
      "actionId": "set.listClientsName",
      "kind": "stateSetter",
      "stateKey": "ui.clientManagementWorkspace.input.listClients.name",
      "methodName": "setListClientsName",
      "handlerName": "handleListClientsNameChange"
    },
    {
      "actionId": "set.listClientsCompany",
      "kind": "stateSetter",
      "stateKey": "ui.clientManagementWorkspace.input.listClients.company",
      "methodName": "setListClientsCompany",
      "handlerName": "handleListClientsCompanyChange"
    },
    {
      "actionId": "set.listClientsEmail",
      "kind": "stateSetter",
      "stateKey": "ui.clientManagementWorkspace.input.listClients.email",
      "methodName": "setListClientsEmail",
      "handlerName": "handleListClientsEmailChange"
    },
    {
      "actionId": "set.listClientsPage",
      "kind": "stateSetter",
      "stateKey": "ui.clientManagementWorkspace.input.listClients.page",
      "methodName": "setListClientsPage",
      "handlerName": "handleListClientsPageChange"
    },
    {
      "actionId": "set.listClientsPageSize",
      "kind": "stateSetter",
      "stateKey": "ui.clientManagementWorkspace.input.listClients.pageSize",
      "methodName": "setListClientsPageSize",
      "handlerName": "handleListClientsPageSizeChange"
    },
    {
      "actionId": "set.createClientCmdName",
      "kind": "stateSetter",
      "stateKey": "ui.clientManagementWorkspace.input.createClientCmd.name",
      "methodName": "setCreateClientCmdName",
      "handlerName": "handleCreateClientCmdNameChange"
    },
    {
      "actionId": "set.createClientCmdEmail",
      "kind": "stateSetter",
      "stateKey": "ui.clientManagementWorkspace.input.createClientCmd.email",
      "methodName": "setCreateClientCmdEmail",
      "handlerName": "handleCreateClientCmdEmailChange"
    },
    {
      "actionId": "set.createClientCmdCompany",
      "kind": "stateSetter",
      "stateKey": "ui.clientManagementWorkspace.input.createClientCmd.company",
      "methodName": "setCreateClientCmdCompany",
      "handlerName": "handleCreateClientCmdCompanyChange"
    },
    {
      "actionId": "set.createClientCmdPhone",
      "kind": "stateSetter",
      "stateKey": "ui.clientManagementWorkspace.input.createClientCmd.phone",
      "methodName": "setCreateClientCmdPhone",
      "handlerName": "handleCreateClientCmdPhoneChange"
    },
    {
      "actionId": "set.createClientCmdAddress",
      "kind": "stateSetter",
      "stateKey": "ui.clientManagementWorkspace.input.createClientCmd.address",
      "methodName": "setCreateClientCmdAddress",
      "handlerName": "handleCreateClientCmdAddressChange"
    },
    {
      "actionId": "set.updateClientCmdClientId",
      "kind": "stateSetter",
      "stateKey": "ui.clientManagementWorkspace.input.updateClientCmd.clientId",
      "methodName": "setUpdateClientCmdClientId",
      "handlerName": "handleUpdateClientCmdClientIdChange"
    },
    {
      "actionId": "set.updateClientCmdName",
      "kind": "stateSetter",
      "stateKey": "ui.clientManagementWorkspace.input.updateClientCmd.name",
      "methodName": "setUpdateClientCmdName",
      "handlerName": "handleUpdateClientCmdNameChange"
    },
    {
      "actionId": "set.updateClientCmdCompany",
      "kind": "stateSetter",
      "stateKey": "ui.clientManagementWorkspace.input.updateClientCmd.company",
      "methodName": "setUpdateClientCmdCompany",
      "handlerName": "handleUpdateClientCmdCompanyChange"
    },
    {
      "actionId": "set.updateClientCmdEmail",
      "kind": "stateSetter",
      "stateKey": "ui.clientManagementWorkspace.input.updateClientCmd.email",
      "methodName": "setUpdateClientCmdEmail",
      "handlerName": "handleUpdateClientCmdEmailChange"
    },
    {
      "actionId": "set.updateClientCmdPhone",
      "kind": "stateSetter",
      "stateKey": "ui.clientManagementWorkspace.input.updateClientCmd.phone",
      "methodName": "setUpdateClientCmdPhone",
      "handlerName": "handleUpdateClientCmdPhoneChange"
    },
    {
      "actionId": "set.updateClientCmdAddress",
      "kind": "stateSetter",
      "stateKey": "ui.clientManagementWorkspace.input.updateClientCmd.address",
      "methodName": "setUpdateClientCmdAddress",
      "handlerName": "handleUpdateClientCmdAddressChange"
    },
    {
      "actionId": "set.deleteClientCmdClientId",
      "kind": "stateSetter",
      "stateKey": "ui.clientManagementWorkspace.input.deleteClientCmd.clientId",
      "methodName": "setDeleteClientCmdClientId",
      "handlerName": "handleDeleteClientCmdClientIdChange"
    }
  ],
  "initialLoads": [
    {
      "actionId": "listClients",
      "stateKey": "ui.clientManagementWorkspace.data.listClients"
    }
  ],
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
    "section.clientManagementWorkspace.clientListSection.title": "Client Directory",
    "organism.clientManagementWorkspace.listClients.title": "Browse clients",
    "intent.clientManagementWorkspace.listClients.list.title": "Browse clients",
    "intent.clientManagementWorkspace.listClients.list.empty": "Nenhum registro encontrado",
    "intent.clientManagementWorkspace.listClients.list.column.clients.label": "Clients",
    "intent.clientManagementWorkspace.listClients.list.column.total.label": "Total",
    "intent.clientManagementWorkspace.listClients.list.filter.name.label": "Name",
    "intent.clientManagementWorkspace.listClients.list.filter.company.label": "Company",
    "intent.clientManagementWorkspace.listClients.list.filter.email.label": "Email",
    "intent.clientManagementWorkspace.listClients.list.filter.page.label": "Page",
    "intent.clientManagementWorkspace.listClients.list.filter.pageSize.label": "Page Size",
    "organism.clientManagementWorkspace.createClientCmd.title": "Create client",
    "intent.clientManagementWorkspace.createClientCmd.form.title": "Create client",
    "intent.clientManagementWorkspace.createClientCmd.form.action.createClientCmd": "Create client",
    "intent.clientManagementWorkspace.createClientCmd.form.field.name.label": "Name",
    "intent.clientManagementWorkspace.createClientCmd.form.field.email.label": "Email",
    "intent.clientManagementWorkspace.createClientCmd.form.field.company.label": "Company",
    "intent.clientManagementWorkspace.createClientCmd.form.field.phone.label": "Phone",
    "intent.clientManagementWorkspace.createClientCmd.form.field.address.label": "Address",
    "organism.clientManagementWorkspace.updateClientCmd.title": "Update client",
    "intent.clientManagementWorkspace.updateClientCmd.form.title": "Update client",
    "intent.clientManagementWorkspace.updateClientCmd.form.action.updateClientCmd": "Update client",
    "intent.clientManagementWorkspace.updateClientCmd.form.field.name.label": "Name",
    "intent.clientManagementWorkspace.updateClientCmd.form.field.company.label": "Company",
    "intent.clientManagementWorkspace.updateClientCmd.form.field.email.label": "Email",
    "intent.clientManagementWorkspace.updateClientCmd.form.field.phone.label": "Phone",
    "intent.clientManagementWorkspace.updateClientCmd.form.field.address.label": "Address",
    "organism.clientManagementWorkspace.deleteClientCmd.title": "Delete client",
    "intent.clientManagementWorkspace.deleteClientCmd.form.title": "Delete client",
    "intent.clientManagementWorkspace.deleteClientCmd.form.action.deleteClientCmd": "Delete client",
    "action.createClientCmd.success": "Create client: OK",
    "action.createClientCmd.error": "Create client: falhou",
    "action.updateClientCmd.success": "Update client: OK",
    "action.updateClientCmd.error": "Update client: falhou",
    "action.deleteClientCmd.success": "Delete client: OK",
    "action.deleteClientCmd.error": "Delete client: falhou"
  },
  "automation": {
    "statePrefix": "ui.clientManagementWorkspace",
    "stateKeys": [
      "ui.clientManagementWorkspace.status",
      "ui.clientManagementWorkspace.action.listClients.status",
      "ui.clientManagementWorkspace.input.listClients.name",
      "ui.clientManagementWorkspace.input.listClients.company",
      "ui.clientManagementWorkspace.input.listClients.email",
      "ui.clientManagementWorkspace.input.listClients.page",
      "ui.clientManagementWorkspace.input.listClients.pageSize",
      "ui.clientManagementWorkspace.data.listClients",
      "ui.clientManagementWorkspace.action.createClientCmd.status",
      "ui.clientManagementWorkspace.input.createClientCmd.name",
      "ui.clientManagementWorkspace.input.createClientCmd.email",
      "ui.clientManagementWorkspace.input.createClientCmd.company",
      "ui.clientManagementWorkspace.input.createClientCmd.phone",
      "ui.clientManagementWorkspace.input.createClientCmd.address",
      "ui.clientManagementWorkspace.output.createClientCmd",
      "ui.clientManagementWorkspace.action.createClientCmd.error",
      "ui.clientManagementWorkspace.action.updateClientCmd.status",
      "ui.clientManagementWorkspace.input.updateClientCmd.clientId",
      "ui.clientManagementWorkspace.input.updateClientCmd.name",
      "ui.clientManagementWorkspace.input.updateClientCmd.company",
      "ui.clientManagementWorkspace.input.updateClientCmd.email",
      "ui.clientManagementWorkspace.input.updateClientCmd.phone",
      "ui.clientManagementWorkspace.input.updateClientCmd.address",
      "ui.clientManagementWorkspace.output.updateClientCmd",
      "ui.clientManagementWorkspace.action.updateClientCmd.error",
      "ui.clientManagementWorkspace.action.deleteClientCmd.status",
      "ui.clientManagementWorkspace.input.deleteClientCmd.clientId",
      "ui.clientManagementWorkspace.output.deleteClientCmd",
      "ui.clientManagementWorkspace.action.deleteClientCmd.error"
    ],
    "actionIds": [
      "listClients",
      "createClientCmd",
      "updateClientCmd",
      "deleteClientCmd",
      "set.listClientsName",
      "set.listClientsCompany",
      "set.listClientsEmail",
      "set.listClientsPage",
      "set.listClientsPageSize",
      "set.createClientCmdName",
      "set.createClientCmdEmail",
      "set.createClientCmdCompany",
      "set.createClientCmdPhone",
      "set.createClientCmdAddress",
      "set.updateClientCmdClientId",
      "set.updateClientCmdName",
      "set.updateClientCmdCompany",
      "set.updateClientCmdEmail",
      "set.updateClientCmdPhone",
      "set.updateClientCmdAddress",
      "set.deleteClientCmdClientId"
    ]
  }
};

export const pipeline = [
  {
    "id": "clientManagementWorkspace__l2_shared",
    "type": "l2_shared",
    "outputPath": "_102045_/l2/buildFlowFsm/web/shared/clientManagementWorkspace.ts",
    "defPath": "_102045_/l2/buildFlowFsm/web/shared/clientManagementWorkspace.defs.ts",
    "dependsFiles": [
      "_102045_/l2/buildFlowFsm/web/contracts/clientManagementWorkspace.ts",
      "_102029_.d.ts"
    ],
    "dependsOn": [],
    "skills": [
      "_102020_/l2/agentChangeFrontend/skills/genCfeSharedTs.ts"
    ],
    "rulesApplied": [],
    "agent": "agentCfeMaterializeGen"
  }
] as const;
