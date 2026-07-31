/// <mls fileReference="_102045_/l2/buildFlowFsm/web/desktop/page11/clientManagementWorkspace.defs.ts" enhancement="_blank"/>

export const definition = {
  "pageId": "clientManagementWorkspace",
  "pageName": "Client Directory",
  "baseClassName": "BuildFlowFsmClientManagementWorkspaceBase",
  "actor": "projectManager",
  "purpose": "Executar Client Directory.",
  "capabilities": [
    "queryClients",
    "createClient",
    "updateClient",
    "deleteClient"
  ],
  "flowRefs": {
    "experienceFlows": [],
    "entityLifecycles": [],
    "taskWorkflows": [],
    "automations": []
  },
  "pluginRefs": [],
  "mdmRefs": [],
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
  "pageInputs": [],
  "navigationRefs": [],
  "sections": [
    {
      "id": "section.clientManagementWorkspace.clientListSection",
      "type": "section",
      "sectionName": "Client Directory",
      "titleKey": "section.clientManagementWorkspace.clientListSection.title",
      "mode": "edit",
      "order": 10,
      "organisms": [
        {
          "id": "clientSearchFilterBar",
          "type": "queryResult",
          "organismName": "ClientSearchFilterBar",
          "titleKey": "organism.clientManagementWorkspace.listClients.title",
          "purpose": "Lets the user narrow the client list by name, company, or email before scanning results — filter inputs fold directly into the table surface.",
          "userActions": [
            "listClients"
          ],
          "requiredEntities": [],
          "readsFields": [],
          "writesFields": [],
          "rulesApplied": [],
          "order": 10,
          "intentionRefs": [
            {
              "id": "intent.clientManagementWorkspace.listClients.list",
              "intent": "queryList",
              "stateKey": "ui.clientManagementWorkspace.data.listClients",
              "action": "listClients",
              "order": 10
            }
          ]
        },
        {
          "id": "clientTable",
          "type": "queryResult",
          "organismName": "ClientTable",
          "titleKey": "organism.clientManagementWorkspace.listClients.title",
          "purpose": "Primary surface displaying all clients in a paginated table so the user can scan contact details and select a record for editing or deletion.",
          "userActions": [
            "listClients"
          ],
          "requiredEntities": [],
          "readsFields": [],
          "writesFields": [],
          "rulesApplied": [],
          "order": 20,
          "intentionRefs": [
            {
              "id": "intent.clientManagementWorkspace.listClients.list2",
              "intent": "queryList",
              "stateKey": "ui.clientManagementWorkspace.data.listClients",
              "action": "listClients",
              "order": 10
            }
          ]
        },
        {
          "id": "createClientToolbarAction",
          "type": "commandForm",
          "organismName": "CreateClientForm",
          "titleKey": "organism.clientManagementWorkspace.createClientCmd.title",
          "purpose": "Provides the Add Client entry point from the toolbar and collects name, email, company, phone, and address to create a new client record.",
          "userActions": [
            "createClientCmd"
          ],
          "requiredEntities": [],
          "readsFields": [],
          "writesFields": [],
          "rulesApplied": [],
          "order": 30,
          "intentionRefs": [
            {
              "id": "intent.clientManagementWorkspace.createClientCmd.form",
              "intent": "commandForm",
              "submitAction": "createClientCmd",
              "order": 10
            }
          ]
        },
        {
          "id": "updateClientPanel",
          "type": "commandForm",
          "organismName": "UpdateClientForm",
          "titleKey": "organism.clientManagementWorkspace.updateClientCmd.title",
          "purpose": "Allows the user to edit an existing client's name, company, email, phone, and address after selecting a row — clientId is context-derived, never typed.",
          "userActions": [
            "updateClientCmd"
          ],
          "requiredEntities": [],
          "readsFields": [],
          "writesFields": [],
          "rulesApplied": [],
          "order": 40,
          "intentionRefs": [
            {
              "id": "intent.clientManagementWorkspace.updateClientCmd.form",
              "intent": "commandForm",
              "submitAction": "updateClientCmd",
              "order": 10
            }
          ]
        },
        {
          "id": "deleteClientConfirmation",
          "type": "commandForm",
          "organismName": "DeleteClientConfirmation",
          "titleKey": "organism.clientManagementWorkspace.deleteClientCmd.title",
          "purpose": "Presents a confirmation dialog before permanently deleting the selected client, preventing accidental data loss.",
          "userActions": [
            "deleteClientCmd"
          ],
          "requiredEntities": [],
          "readsFields": [],
          "writesFields": [],
          "rulesApplied": [],
          "order": 50,
          "intentionRefs": [
            {
              "id": "intent.clientManagementWorkspace.deleteClientCmd.form",
              "intent": "commandForm",
              "submitAction": "deleteClientCmd",
              "order": 10
            }
          ]
        }
      ]
    }
  ],
  "templateId": "tabular_classic",
  "visualStyle": "Desktop-first for PM and billing staff with mobile-optimized field entry; dashboard-driven, status-aware, touch-friendly UI with Gantt-ish timeline views.",
  "layout": {
    "id": "cfe-20260731060448.1000",
    "type": "page",
    "sections": [
      {
        "id": "section.clientManagementWorkspace.clientListSection",
        "type": "section",
        "sectionName": "Client Directory",
        "titleKey": "section.clientManagementWorkspace.clientListSection.title",
        "mode": "edit",
        "order": 10,
        "organisms": [
          {
            "id": "clientSearchFilterBar",
            "type": "queryResult",
            "organismName": "ClientSearchFilterBar",
            "titleKey": "organism.clientManagementWorkspace.listClients.title",
            "purpose": "Lets the user narrow the client list by name, company, or email before scanning results — filter inputs fold directly into the table surface.",
            "userActions": [
              "listClients"
            ],
            "requiredEntities": [],
            "readsFields": [],
            "writesFields": [],
            "rulesApplied": [],
            "order": 10,
            "intentions": [
              {
                "id": "intent.clientManagementWorkspace.listClients.list",
                "intent": "queryList",
                "order": 10,
                "titleKey": "intent.clientManagementWorkspace.listClients.list.title",
                "source": "bff.listClients",
                "binding": "binding.clientManagementWorkspace.listClients",
                "action": "listClients",
                "emptyKey": "intent.clientManagementWorkspace.listClients.list.empty",
                "fields": [],
                "columns": [
                  {
                    "id": "intent.clientManagementWorkspace.listClients.list.column.clients",
                    "field": "clients",
                    "labelKey": "intent.clientManagementWorkspace.listClients.list.column.clients.label",
                    "order": 10,
                    "stateKey": "ui.clientManagementWorkspace.data.listClients"
                  },
                  {
                    "id": "intent.clientManagementWorkspace.listClients.list.column.total",
                    "field": "total",
                    "labelKey": "intent.clientManagementWorkspace.listClients.list.column.total.label",
                    "order": 20,
                    "stateKey": "ui.clientManagementWorkspace.data.listClients"
                  }
                ],
                "filters": [
                  {
                    "id": "intent.clientManagementWorkspace.listClients.list.filter.name",
                    "field": "name",
                    "labelKey": "intent.clientManagementWorkspace.listClients.list.filter.name.label",
                    "order": 10,
                    "stateKey": "ui.clientManagementWorkspace.input.listClients.name"
                  },
                  {
                    "id": "intent.clientManagementWorkspace.listClients.list.filter.company",
                    "field": "company",
                    "labelKey": "intent.clientManagementWorkspace.listClients.list.filter.company.label",
                    "order": 20,
                    "stateKey": "ui.clientManagementWorkspace.input.listClients.company"
                  },
                  {
                    "id": "intent.clientManagementWorkspace.listClients.list.filter.email",
                    "field": "email",
                    "labelKey": "intent.clientManagementWorkspace.listClients.list.filter.email.label",
                    "order": 30,
                    "stateKey": "ui.clientManagementWorkspace.input.listClients.email"
                  },
                  {
                    "id": "intent.clientManagementWorkspace.listClients.list.filter.page",
                    "field": "page",
                    "labelKey": "intent.clientManagementWorkspace.listClients.list.filter.page.label",
                    "order": 40,
                    "stateKey": "ui.clientManagementWorkspace.input.listClients.page"
                  },
                  {
                    "id": "intent.clientManagementWorkspace.listClients.list.filter.pageSize",
                    "field": "pageSize",
                    "labelKey": "intent.clientManagementWorkspace.listClients.list.filter.pageSize.label",
                    "order": 50,
                    "stateKey": "ui.clientManagementWorkspace.input.listClients.pageSize"
                  }
                ],
                "toolbar": [],
                "rowActions": [],
                "actions": [],
                "stateKey": "ui.clientManagementWorkspace.data.listClients"
              }
            ],
            "displayHint": "inline-row-command"
          },
          {
            "id": "clientTable",
            "type": "queryResult",
            "organismName": "ClientTable",
            "titleKey": "organism.clientManagementWorkspace.listClients.title",
            "purpose": "Primary surface displaying all clients in a paginated table so the user can scan contact details and select a record for editing or deletion.",
            "userActions": [
              "listClients"
            ],
            "requiredEntities": [],
            "readsFields": [],
            "writesFields": [],
            "rulesApplied": [],
            "order": 20,
            "intentions": [
              {
                "id": "intent.clientManagementWorkspace.listClients.list2",
                "intent": "queryList",
                "order": 10,
                "titleKey": "intent.clientManagementWorkspace.listClients.list.title",
                "source": "bff.listClients",
                "binding": "binding.clientManagementWorkspace.listClients",
                "action": "listClients",
                "emptyKey": "intent.clientManagementWorkspace.listClients.list.empty",
                "fields": [],
                "columns": [
                  {
                    "id": "intent.clientManagementWorkspace.listClients.list.column.clients",
                    "field": "clients",
                    "labelKey": "intent.clientManagementWorkspace.listClients.list.column.clients.label",
                    "order": 10,
                    "stateKey": "ui.clientManagementWorkspace.data.listClients"
                  },
                  {
                    "id": "intent.clientManagementWorkspace.listClients.list.column.total",
                    "field": "total",
                    "labelKey": "intent.clientManagementWorkspace.listClients.list.column.total.label",
                    "order": 20,
                    "stateKey": "ui.clientManagementWorkspace.data.listClients"
                  }
                ],
                "filters": [
                  {
                    "id": "intent.clientManagementWorkspace.listClients.list.filter.name",
                    "field": "name",
                    "labelKey": "intent.clientManagementWorkspace.listClients.list.filter.name.label",
                    "order": 10,
                    "stateKey": "ui.clientManagementWorkspace.input.listClients.name"
                  },
                  {
                    "id": "intent.clientManagementWorkspace.listClients.list.filter.company",
                    "field": "company",
                    "labelKey": "intent.clientManagementWorkspace.listClients.list.filter.company.label",
                    "order": 20,
                    "stateKey": "ui.clientManagementWorkspace.input.listClients.company"
                  },
                  {
                    "id": "intent.clientManagementWorkspace.listClients.list.filter.email",
                    "field": "email",
                    "labelKey": "intent.clientManagementWorkspace.listClients.list.filter.email.label",
                    "order": 30,
                    "stateKey": "ui.clientManagementWorkspace.input.listClients.email"
                  },
                  {
                    "id": "intent.clientManagementWorkspace.listClients.list.filter.page",
                    "field": "page",
                    "labelKey": "intent.clientManagementWorkspace.listClients.list.filter.page.label",
                    "order": 40,
                    "stateKey": "ui.clientManagementWorkspace.input.listClients.page"
                  },
                  {
                    "id": "intent.clientManagementWorkspace.listClients.list.filter.pageSize",
                    "field": "pageSize",
                    "labelKey": "intent.clientManagementWorkspace.listClients.list.filter.pageSize.label",
                    "order": 50,
                    "stateKey": "ui.clientManagementWorkspace.input.listClients.pageSize"
                  }
                ],
                "toolbar": [],
                "rowActions": [],
                "actions": [],
                "stateKey": "ui.clientManagementWorkspace.data.listClients"
              }
            ],
            "displayHint": "master-detail"
          },
          {
            "id": "createClientToolbarAction",
            "type": "commandForm",
            "organismName": "CreateClientForm",
            "titleKey": "organism.clientManagementWorkspace.createClientCmd.title",
            "purpose": "Provides the Add Client entry point from the toolbar and collects name, email, company, phone, and address to create a new client record.",
            "userActions": [
              "createClientCmd"
            ],
            "requiredEntities": [],
            "readsFields": [],
            "writesFields": [],
            "rulesApplied": [],
            "order": 30,
            "intentions": [
              {
                "id": "intent.clientManagementWorkspace.createClientCmd.form",
                "intent": "commandForm",
                "order": 10,
                "titleKey": "intent.clientManagementWorkspace.createClientCmd.form.title",
                "source": "bff.createClientCmd",
                "binding": "binding.clientManagementWorkspace.createClientCmd",
                "submitAction": "createClientCmd",
                "fields": [
                  {
                    "id": "intent.clientManagementWorkspace.createClientCmd.form.field.name",
                    "field": "name",
                    "labelKey": "intent.clientManagementWorkspace.createClientCmd.form.field.name.label",
                    "order": 10,
                    "stateKey": "ui.clientManagementWorkspace.input.createClientCmd.name"
                  },
                  {
                    "id": "intent.clientManagementWorkspace.createClientCmd.form.field.email",
                    "field": "email",
                    "labelKey": "intent.clientManagementWorkspace.createClientCmd.form.field.email.label",
                    "order": 20,
                    "stateKey": "ui.clientManagementWorkspace.input.createClientCmd.email"
                  },
                  {
                    "id": "intent.clientManagementWorkspace.createClientCmd.form.field.company",
                    "field": "company",
                    "labelKey": "intent.clientManagementWorkspace.createClientCmd.form.field.company.label",
                    "order": 30,
                    "stateKey": "ui.clientManagementWorkspace.input.createClientCmd.company"
                  },
                  {
                    "id": "intent.clientManagementWorkspace.createClientCmd.form.field.phone",
                    "field": "phone",
                    "labelKey": "intent.clientManagementWorkspace.createClientCmd.form.field.phone.label",
                    "order": 40,
                    "stateKey": "ui.clientManagementWorkspace.input.createClientCmd.phone"
                  },
                  {
                    "id": "intent.clientManagementWorkspace.createClientCmd.form.field.address",
                    "field": "address",
                    "labelKey": "intent.clientManagementWorkspace.createClientCmd.form.field.address.label",
                    "order": 50,
                    "stateKey": "ui.clientManagementWorkspace.input.createClientCmd.address"
                  }
                ],
                "columns": [],
                "filters": [],
                "toolbar": [],
                "rowActions": [],
                "actions": [
                  {
                    "id": "intent.clientManagementWorkspace.createClientCmd.form.action.createClientCmd",
                    "action": "createClientCmd",
                    "labelKey": "intent.clientManagementWorkspace.createClientCmd.form.action.createClientCmd",
                    "order": 10,
                    "actionKey": "createClientCmd"
                  }
                ]
              }
            ],
            "displayHint": "contextual-transition-actions"
          },
          {
            "id": "updateClientPanel",
            "type": "commandForm",
            "organismName": "UpdateClientForm",
            "titleKey": "organism.clientManagementWorkspace.updateClientCmd.title",
            "purpose": "Allows the user to edit an existing client's name, company, email, phone, and address after selecting a row — clientId is context-derived, never typed.",
            "userActions": [
              "updateClientCmd"
            ],
            "requiredEntities": [],
            "readsFields": [],
            "writesFields": [],
            "rulesApplied": [],
            "order": 40,
            "intentions": [
              {
                "id": "intent.clientManagementWorkspace.updateClientCmd.form",
                "intent": "commandForm",
                "order": 10,
                "titleKey": "intent.clientManagementWorkspace.updateClientCmd.form.title",
                "source": "bff.updateClientCmd",
                "binding": "binding.clientManagementWorkspace.updateClientCmd",
                "submitAction": "updateClientCmd",
                "fields": [
                  {
                    "id": "intent.clientManagementWorkspace.updateClientCmd.form.field.name",
                    "field": "name",
                    "labelKey": "intent.clientManagementWorkspace.updateClientCmd.form.field.name.label",
                    "order": 10,
                    "stateKey": "ui.clientManagementWorkspace.input.updateClientCmd.name"
                  },
                  {
                    "id": "intent.clientManagementWorkspace.updateClientCmd.form.field.company",
                    "field": "company",
                    "labelKey": "intent.clientManagementWorkspace.updateClientCmd.form.field.company.label",
                    "order": 20,
                    "stateKey": "ui.clientManagementWorkspace.input.updateClientCmd.company"
                  },
                  {
                    "id": "intent.clientManagementWorkspace.updateClientCmd.form.field.email",
                    "field": "email",
                    "labelKey": "intent.clientManagementWorkspace.updateClientCmd.form.field.email.label",
                    "order": 30,
                    "stateKey": "ui.clientManagementWorkspace.input.updateClientCmd.email"
                  },
                  {
                    "id": "intent.clientManagementWorkspace.updateClientCmd.form.field.phone",
                    "field": "phone",
                    "labelKey": "intent.clientManagementWorkspace.updateClientCmd.form.field.phone.label",
                    "order": 40,
                    "stateKey": "ui.clientManagementWorkspace.input.updateClientCmd.phone"
                  },
                  {
                    "id": "intent.clientManagementWorkspace.updateClientCmd.form.field.address",
                    "field": "address",
                    "labelKey": "intent.clientManagementWorkspace.updateClientCmd.form.field.address.label",
                    "order": 50,
                    "stateKey": "ui.clientManagementWorkspace.input.updateClientCmd.address"
                  }
                ],
                "columns": [],
                "filters": [],
                "toolbar": [],
                "rowActions": [],
                "actions": [
                  {
                    "id": "intent.clientManagementWorkspace.updateClientCmd.form.action.updateClientCmd",
                    "action": "updateClientCmd",
                    "labelKey": "intent.clientManagementWorkspace.updateClientCmd.form.action.updateClientCmd",
                    "order": 10,
                    "actionKey": "updateClientCmd"
                  }
                ]
              }
            ],
            "displayHint": "contextual-transition-actions"
          },
          {
            "id": "deleteClientConfirmation",
            "type": "commandForm",
            "organismName": "DeleteClientConfirmation",
            "titleKey": "organism.clientManagementWorkspace.deleteClientCmd.title",
            "purpose": "Presents a confirmation dialog before permanently deleting the selected client, preventing accidental data loss.",
            "userActions": [
              "deleteClientCmd"
            ],
            "requiredEntities": [],
            "readsFields": [],
            "writesFields": [],
            "rulesApplied": [],
            "order": 50,
            "intentions": [
              {
                "id": "intent.clientManagementWorkspace.deleteClientCmd.form",
                "intent": "commandForm",
                "order": 10,
                "titleKey": "intent.clientManagementWorkspace.deleteClientCmd.form.title",
                "source": "bff.deleteClientCmd",
                "binding": "binding.clientManagementWorkspace.deleteClientCmd",
                "submitAction": "deleteClientCmd",
                "fields": [],
                "columns": [],
                "filters": [],
                "toolbar": [],
                "rowActions": [],
                "actions": [
                  {
                    "id": "intent.clientManagementWorkspace.deleteClientCmd.form.action.deleteClientCmd",
                    "action": "deleteClientCmd",
                    "labelKey": "intent.clientManagementWorkspace.deleteClientCmd.form.action.deleteClientCmd",
                    "order": 10,
                    "actionKey": "deleteClientCmd"
                  }
                ]
              }
            ],
            "displayHint": "contextual-transition-actions"
          }
        ]
      }
    ]
  },
  "dataBindings": [
    {
      "id": "binding.clientManagementWorkspace.listClients",
      "source": "bff.listClients",
      "command": "listClients",
      "description": "Browse clients",
      "stateKey": "ui.clientManagementWorkspace.data.listClients",
      "inputStateKeys": [
        "ui.clientManagementWorkspace.input.listClients.name",
        "ui.clientManagementWorkspace.input.listClients.company",
        "ui.clientManagementWorkspace.input.listClients.email",
        "ui.clientManagementWorkspace.input.listClients.page",
        "ui.clientManagementWorkspace.input.listClients.pageSize"
      ]
    },
    {
      "id": "binding.clientManagementWorkspace.createClientCmd",
      "source": "bff.createClientCmd",
      "command": "createClientCmd",
      "description": "Create client",
      "stateKey": "ui.clientManagementWorkspace.output.createClientCmd",
      "inputStateKeys": [
        "ui.clientManagementWorkspace.input.createClientCmd.name",
        "ui.clientManagementWorkspace.input.createClientCmd.email",
        "ui.clientManagementWorkspace.input.createClientCmd.company",
        "ui.clientManagementWorkspace.input.createClientCmd.phone",
        "ui.clientManagementWorkspace.input.createClientCmd.address"
      ]
    },
    {
      "id": "binding.clientManagementWorkspace.updateClientCmd",
      "source": "bff.updateClientCmd",
      "command": "updateClientCmd",
      "description": "Update client",
      "stateKey": "ui.clientManagementWorkspace.output.updateClientCmd",
      "inputStateKeys": [
        "ui.clientManagementWorkspace.input.updateClientCmd.clientId",
        "ui.clientManagementWorkspace.input.updateClientCmd.name",
        "ui.clientManagementWorkspace.input.updateClientCmd.company",
        "ui.clientManagementWorkspace.input.updateClientCmd.email",
        "ui.clientManagementWorkspace.input.updateClientCmd.phone",
        "ui.clientManagementWorkspace.input.updateClientCmd.address"
      ]
    },
    {
      "id": "binding.clientManagementWorkspace.deleteClientCmd",
      "source": "bff.deleteClientCmd",
      "command": "deleteClientCmd",
      "description": "Delete client",
      "stateKey": "ui.clientManagementWorkspace.output.deleteClientCmd",
      "inputStateKeys": [
        "ui.clientManagementWorkspace.input.deleteClientCmd.clientId"
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
