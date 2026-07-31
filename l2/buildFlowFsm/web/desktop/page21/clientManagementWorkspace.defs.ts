/// <mls fileReference="_102045_/l2/buildFlowFsm/web/desktop/page21/clientManagementWorkspace.defs.ts" enhancement="_blank"/>

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
      "id": "section.clientManagementWorkspace.clientDirectorySection",
      "type": "section",
      "sectionName": "Client Directory",
      "titleKey": "section.clientManagementWorkspace.clientDirectorySection.title",
      "mode": "edit",
      "order": 10,
      "organisms": [
        {
          "id": "clientTableWithFilters",
          "type": "queryResult",
          "organismName": "ClientTableWithFilters",
          "titleKey": "organism.clientManagementWorkspace.listClients.title",
          "purpose": "Primary browsable table of all clients with an integrated filter bar (name, company, email) and pagination; the dominant surface the manager scans to find or select a client.",
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
          "id": "clientDetailEditPanel",
          "type": "commandForm",
          "organismName": "ClientDetailEditPanel",
          "titleKey": "organism.clientManagementWorkspace.updateClientCmd.title",
          "purpose": "Master-detail side panel that shows the selected client's full record and allows the manager to edit name, company, email, phone, and address in context without leaving the directory.",
          "userActions": [
            "updateClientCmd"
          ],
          "requiredEntities": [],
          "readsFields": [],
          "writesFields": [],
          "rulesApplied": [],
          "order": 20,
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
          "id": "createClientAction",
          "type": "commandForm",
          "organismName": "CreateClientAction",
          "titleKey": "organism.clientManagementWorkspace.createClientCmd.title",
          "purpose": "Toolbar-level primary action that opens a create-client form (slide-over or inline panel) so the manager can register a new client without navigating away.",
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
          "id": "deleteClientRowAction",
          "type": "commandForm",
          "organismName": "DeleteClientRowAction",
          "titleKey": "organism.clientManagementWorkspace.deleteClientCmd.title",
          "purpose": "Inline row-level destructive command that lets the manager permanently remove a selected client after a confirmation prompt.",
          "userActions": [
            "deleteClientCmd"
          ],
          "requiredEntities": [],
          "readsFields": [],
          "writesFields": [],
          "rulesApplied": [],
          "order": 40,
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
  "templateId": "goal_first",
  "visualStyle": "Desktop-first for PM and billing staff with mobile-optimized field entry; dashboard-driven, status-aware, touch-friendly UI with Gantt-ish timeline views.",
  "pageObjective": {
    "actor": "Project manager",
    "jobToBeDone": "Maintain the client directory by browsing, searching, creating, updating, and removing client records used across projects.",
    "primaryDecision": "Find the right client or add a new one — then act on it (edit or delete) without leaving the directory.",
    "decisiveInfo": [
      "name",
      "company",
      "email",
      "phone",
      "address"
    ],
    "usageFrequency": "Occasional / back-office — opened when setting up or auditing projects, not a continuous operational screen.",
    "criticalActions": [
      {
        "action": "listClients",
        "presentation": "primary-surface with inline filter bar (name, company, email)"
      },
      {
        "action": "createClientCmd",
        "presentation": "primary-button in toolbar opening a slide-over / inline panel"
      },
      {
        "action": "updateClientCmd",
        "presentation": "master-detail — selecting a row populates the detail panel for editing"
      },
      {
        "action": "deleteClientCmd",
        "presentation": "inline-row-command with confirmation guard on the selected row"
      }
    ],
    "informationHierarchy": [
      "1. Searchable client table (name, company, email, phone) — the dominant surface",
      "2. Filter controls folded into the table toolbar (name, company, email)",
      "3. Detail / edit panel for the selected client (all editable fields + save)",
      "4. Create-client action reachable from the toolbar",
      "5. Delete confirmation triggered from the row action"
    ],
    "successCriteria": "A project manager can locate any client in under 5 seconds, create a new one in one step, and edit or delete a selected client without navigating away from the directory.",
    "antiPatterns": [
      "Separate full-width form sections for create and update below the table",
      "clientId exposed as a manually typed input",
      "Status <select> for lifecycle transitions",
      "One section per operation (mechanically mirroring every journey step)"
    ]
  },
  "layout": {
    "id": "page21-goal-first",
    "type": "page",
    "sections": [
      {
        "id": "section.clientManagementWorkspace.clientDirectorySection",
        "type": "section",
        "sectionName": "Client Directory",
        "titleKey": "section.clientManagementWorkspace.clientDirectorySection.title",
        "mode": "edit",
        "order": 10,
        "organisms": [
          {
            "id": "clientTableWithFilters",
            "type": "queryResult",
            "organismName": "ClientTableWithFilters",
            "titleKey": "organism.clientManagementWorkspace.listClients.title",
            "purpose": "Primary browsable table of all clients with an integrated filter bar (name, company, email) and pagination; the dominant surface the manager scans to find or select a client.",
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
            "displayHint": "summary-first"
          },
          {
            "id": "clientDetailEditPanel",
            "type": "commandForm",
            "organismName": "ClientDetailEditPanel",
            "titleKey": "organism.clientManagementWorkspace.updateClientCmd.title",
            "purpose": "Master-detail side panel that shows the selected client's full record and allows the manager to edit name, company, email, phone, and address in context without leaving the directory.",
            "userActions": [
              "updateClientCmd"
            ],
            "requiredEntities": [],
            "readsFields": [],
            "writesFields": [],
            "rulesApplied": [],
            "order": 20,
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
            "displayHint": "master-detail"
          },
          {
            "id": "createClientAction",
            "type": "commandForm",
            "organismName": "CreateClientAction",
            "titleKey": "organism.clientManagementWorkspace.createClientCmd.title",
            "purpose": "Toolbar-level primary action that opens a create-client form (slide-over or inline panel) so the manager can register a new client without navigating away.",
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
            "id": "deleteClientRowAction",
            "type": "commandForm",
            "organismName": "DeleteClientRowAction",
            "titleKey": "organism.clientManagementWorkspace.deleteClientCmd.title",
            "purpose": "Inline row-level destructive command that lets the manager permanently remove a selected client after a confirmation prompt.",
            "userActions": [
              "deleteClientCmd"
            ],
            "requiredEntities": [],
            "readsFields": [],
            "writesFields": [],
            "rulesApplied": [],
            "order": 40,
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
            "displayHint": "inline-row-command"
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
    "id": "clientManagementWorkspace__page21__l2_page",
    "type": "l2_page",
    "outputPath": "_102045_/l2/buildFlowFsm/web/desktop/page21/clientManagementWorkspace.ts",
    "defPath": "_102045_/l2/buildFlowFsm/web/desktop/page21/clientManagementWorkspace.defs.ts",
    "dependsFiles": [
      "_102045_/l2/buildFlowFsm/web/shared/clientManagementWorkspace.ts",
      "_102045_/l2/designSystem.ts"
    ],
    "dependsOn": [
      "clientManagementWorkspace__l2_shared"
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
