/// <mls fileReference="_102045_/l2/buildFlowFsm/web/desktop/page11/invoiceWorkspace.defs.ts" enhancement="_blank"/>

export const definition = {
  "pageId": "invoiceWorkspace",
  "pageName": "Invoices",
  "baseClassName": "BuildFlowFsmInvoiceWorkspaceBase",
  "actor": "billingStaff",
  "purpose": "Executar Invoices.",
  "capabilities": [
    "invoiceLifecycle",
    "queryInvoices"
  ],
  "flowRefs": {
    "experienceFlows": [
      "invoiceLifecycle"
    ],
    "entityLifecycles": [],
    "taskWorkflows": [
      "invoiceLifecycle"
    ],
    "automations": []
  },
  "pluginRefs": [],
  "mdmRefs": [],
  "origin": {
    "source": "l4-journey",
    "workspaceId": "invoiceWorkspace",
    "workspaceKind": "workflow",
    "workflowId": "invoiceLifecycle",
    "actor": "billingStaff",
    "entity": "Invoice",
    "owners": [
      {
        "kind": "workflow",
        "id": "invoiceLifecycle",
        "defPath": "_102045_/l4/buildFlowFsm/workflows/invoiceLifecycle.defs.ts"
      },
      {
        "kind": "operation",
        "id": "queryInvoices",
        "defPath": "_102045_/l4/buildFlowFsm/operations/queryInvoices.defs.ts"
      },
      {
        "kind": "operation",
        "id": "createInvoice",
        "defPath": "_102045_/l4/buildFlowFsm/operations/createInvoice.defs.ts"
      },
      {
        "kind": "operation",
        "id": "sendInvoice",
        "defPath": "_102045_/l4/buildFlowFsm/operations/sendInvoice.defs.ts"
      }
    ],
    "microUserFlow": {
      "source": "l4/story.steps",
      "workflowSteps": [
        "Billing staff selects the approved job costs and change orders to include on the invoice.",
        "Billing staff generates a draft invoice from the selected costs for the project and client.",
        "Billing staff reviews the invoice for accuracy and sends it to the client."
      ],
      "operations": [
        {
          "operationId": "queryInvoices",
          "commandName": "queryInvoices",
          "steps": [
            "Open the invoices list",
            "Optionally filter by status, project, or client",
            "Scan invoice number, client, project, status, total amount, and dates",
            "Select an invoice to review or send"
          ]
        },
        {
          "operationId": "createInvoice",
          "commandName": "createInvoice",
          "steps": [
            "Select the project to bill",
            "Review approved labor, material, and change-order costs that will form the total",
            "Enter a human-readable invoice number",
            "Confirm creation of the invoice as a draft billing document"
          ]
        },
        {
          "operationId": "sendInvoice",
          "commandName": "sendInvoice",
          "steps": [
            "Select the draft invoice to send",
            "Review invoice number, client, project, and total amount for accuracy",
            "Confirm sending the invoice to the client",
            "System marks the invoice as sent and records the send timestamp"
          ]
        }
      ]
    }
  },
  "pageInputs": [],
  "navigationRefs": [],
  "sections": [
    {
      "id": "section.invoiceWorkspace.invoiceListSection",
      "type": "section",
      "sectionName": "Invoice Pipeline",
      "titleKey": "section.invoiceWorkspace.invoiceListSection.title",
      "mode": "edit",
      "order": 10,
      "organisms": [
        {
          "id": "invoiceFilterBar",
          "type": "content",
          "organismName": "InvoiceFilterBar",
          "titleKey": "organism.invoiceWorkspace.inline-row-command10.title",
          "purpose": "Lets billing staff narrow the invoice board by status, project, or client so they can focus on the relevant pipeline lane without scrolling through unrelated records.",
          "userActions": [],
          "requiredEntities": [],
          "readsFields": [],
          "writesFields": [],
          "rulesApplied": [],
          "order": 10,
          "intentionRefs": [
            {
              "id": "intent.invoiceWorkspace.inline-row-command10.content",
              "intent": "inline-row-command",
              "order": 10
            }
          ]
        },
        {
          "id": "invoiceKanbanBoard",
          "type": "queryResult",
          "organismName": "InvoiceKanbanBoard",
          "titleKey": "organism.invoiceWorkspace.listInvoices.title",
          "purpose": "Displays invoices grouped into lifecycle lanes (draft, sent) so billing staff can instantly spot bottlenecks, scan invoice number, client, project, total amount and dates per card, and select a card to act on.",
          "userActions": [
            "listInvoices"
          ],
          "requiredEntities": [],
          "readsFields": [],
          "writesFields": [],
          "rulesApplied": [
            "invoiceScopeExternalPayment",
            "invoiceMustReferenceProjectAndClient",
            "clientBillingAccess"
          ],
          "order": 20,
          "intentionRefs": [
            {
              "id": "intent.invoiceWorkspace.listInvoices.list",
              "intent": "queryList",
              "stateKey": "ui.invoiceWorkspace.data.listInvoices",
              "action": "listInvoices",
              "order": 10
            }
          ]
        },
        {
          "id": "sendInvoiceAction",
          "type": "commandForm",
          "organismName": "SendInvoiceAction",
          "titleKey": "organism.invoiceWorkspace.sendInvoiceCmd.title",
          "purpose": "Surfaces the Send Invoice command contextually on the selected draft invoice card, showing invoice number, client, project and total for review before the billing staff confirms dispatch to the client.",
          "userActions": [
            "sendInvoiceCmd"
          ],
          "requiredEntities": [],
          "readsFields": [],
          "writesFields": [],
          "rulesApplied": [
            "invoiceScopeExternalPayment",
            "invoiceMustReferenceProjectAndClient",
            "clientBillingAccess"
          ],
          "order": 30,
          "intentionRefs": [
            {
              "id": "intent.invoiceWorkspace.sendInvoiceCmd.form",
              "intent": "commandForm",
              "submitAction": "sendInvoiceCmd",
              "order": 10
            }
          ]
        }
      ]
    },
    {
      "id": "section.invoiceWorkspace.createInvoiceSection",
      "type": "section",
      "sectionName": "Create Invoice",
      "titleKey": "section.invoiceWorkspace.createInvoiceSection.title",
      "mode": "edit",
      "order": 20,
      "organisms": [
        {
          "id": "createInvoiceForm",
          "type": "commandForm",
          "organismName": "CreateInvoiceForm",
          "titleKey": "organism.invoiceWorkspace.createInvoiceCmd.title",
          "purpose": "Allows billing staff to draft a new invoice by selecting a project and client (context-derived from selection) and entering a human-readable invoice number, then confirming creation of the draft billing document.",
          "userActions": [
            "createInvoiceCmd"
          ],
          "requiredEntities": [],
          "readsFields": [],
          "writesFields": [],
          "rulesApplied": [
            "onlyApprovedChangeOrdersAffectCosting",
            "invoiceScopeExternalPayment",
            "invoiceMustReferenceProjectAndClient"
          ],
          "order": 10,
          "intentionRefs": [
            {
              "id": "intent.invoiceWorkspace.createInvoiceCmd.form",
              "intent": "commandForm",
              "submitAction": "createInvoiceCmd",
              "order": 10
            }
          ]
        }
      ]
    }
  ],
  "templateId": "kanban_pipeline",
  "visualStyle": "Desktop-first for PM and billing staff with mobile-optimized field entry; dashboard-driven, status-aware, touch-friendly UI with Gantt-ish timeline views.",
  "layout": {
    "id": "kanban_pipeline",
    "type": "page",
    "sections": [
      {
        "id": "section.invoiceWorkspace.invoiceListSection",
        "type": "section",
        "sectionName": "Invoice Pipeline",
        "titleKey": "section.invoiceWorkspace.invoiceListSection.title",
        "mode": "edit",
        "order": 10,
        "organisms": [
          {
            "id": "invoiceFilterBar",
            "type": "content",
            "organismName": "InvoiceFilterBar",
            "titleKey": "organism.invoiceWorkspace.inline-row-command10.title",
            "purpose": "Lets billing staff narrow the invoice board by status, project, or client so they can focus on the relevant pipeline lane without scrolling through unrelated records.",
            "userActions": [],
            "requiredEntities": [],
            "readsFields": [],
            "writesFields": [],
            "rulesApplied": [],
            "order": 10,
            "intentions": [
              {
                "id": "intent.invoiceWorkspace.inline-row-command10.content",
                "intent": "inline-row-command",
                "order": 10,
                "titleKey": "intent.invoiceWorkspace.inline-row-command10.content.title",
                "displayHint": "inline-row-command",
                "fields": [],
                "columns": [],
                "filters": [],
                "toolbar": [],
                "rowActions": [],
                "actions": []
              }
            ],
            "displayHint": "inline-row-command"
          },
          {
            "id": "invoiceKanbanBoard",
            "type": "queryResult",
            "organismName": "InvoiceKanbanBoard",
            "titleKey": "organism.invoiceWorkspace.listInvoices.title",
            "purpose": "Displays invoices grouped into lifecycle lanes (draft, sent) so billing staff can instantly spot bottlenecks, scan invoice number, client, project, total amount and dates per card, and select a card to act on.",
            "userActions": [
              "listInvoices"
            ],
            "requiredEntities": [],
            "readsFields": [],
            "writesFields": [],
            "rulesApplied": [
              "invoiceScopeExternalPayment",
              "invoiceMustReferenceProjectAndClient",
              "clientBillingAccess"
            ],
            "order": 20,
            "intentions": [
              {
                "id": "intent.invoiceWorkspace.listInvoices.list",
                "intent": "queryList",
                "order": 10,
                "titleKey": "intent.invoiceWorkspace.listInvoices.list.title",
                "source": "bff.listInvoices",
                "binding": "binding.invoiceWorkspace.listInvoices",
                "action": "listInvoices",
                "emptyKey": "intent.invoiceWorkspace.listInvoices.list.empty",
                "fields": [],
                "columns": [
                  {
                    "id": "intent.invoiceWorkspace.listInvoices.list.column.invoices",
                    "field": "invoices",
                    "labelKey": "intent.invoiceWorkspace.listInvoices.list.column.invoices.label",
                    "order": 10,
                    "stateKey": "ui.invoiceWorkspace.data.listInvoices"
                  },
                  {
                    "id": "intent.invoiceWorkspace.listInvoices.list.column.total",
                    "field": "total",
                    "labelKey": "intent.invoiceWorkspace.listInvoices.list.column.total.label",
                    "order": 20,
                    "stateKey": "ui.invoiceWorkspace.data.listInvoices"
                  }
                ],
                "filters": [
                  {
                    "id": "intent.invoiceWorkspace.listInvoices.list.filter.status",
                    "field": "status",
                    "labelKey": "intent.invoiceWorkspace.listInvoices.list.filter.status.label",
                    "order": 10,
                    "stateKey": "ui.invoiceWorkspace.input.listInvoices.status"
                  },
                  {
                    "id": "intent.invoiceWorkspace.listInvoices.list.filter.projectId",
                    "field": "projectId",
                    "labelKey": "intent.invoiceWorkspace.listInvoices.list.filter.projectId.label",
                    "order": 20,
                    "stateKey": "ui.invoiceWorkspace.input.listInvoices.projectId"
                  },
                  {
                    "id": "intent.invoiceWorkspace.listInvoices.list.filter.clientId",
                    "field": "clientId",
                    "labelKey": "intent.invoiceWorkspace.listInvoices.list.filter.clientId.label",
                    "order": 30,
                    "stateKey": "ui.invoiceWorkspace.input.listInvoices.clientId"
                  },
                  {
                    "id": "intent.invoiceWorkspace.listInvoices.list.filter.page",
                    "field": "page",
                    "labelKey": "intent.invoiceWorkspace.listInvoices.list.filter.page.label",
                    "order": 40,
                    "stateKey": "ui.invoiceWorkspace.input.listInvoices.page"
                  },
                  {
                    "id": "intent.invoiceWorkspace.listInvoices.list.filter.pageSize",
                    "field": "pageSize",
                    "labelKey": "intent.invoiceWorkspace.listInvoices.list.filter.pageSize.label",
                    "order": 50,
                    "stateKey": "ui.invoiceWorkspace.input.listInvoices.pageSize"
                  }
                ],
                "toolbar": [],
                "rowActions": [],
                "actions": [],
                "stateKey": "ui.invoiceWorkspace.data.listInvoices"
              }
            ],
            "displayHint": "card-board"
          },
          {
            "id": "sendInvoiceAction",
            "type": "commandForm",
            "organismName": "SendInvoiceAction",
            "titleKey": "organism.invoiceWorkspace.sendInvoiceCmd.title",
            "purpose": "Surfaces the Send Invoice command contextually on the selected draft invoice card, showing invoice number, client, project and total for review before the billing staff confirms dispatch to the client.",
            "userActions": [
              "sendInvoiceCmd"
            ],
            "requiredEntities": [],
            "readsFields": [],
            "writesFields": [],
            "rulesApplied": [
              "invoiceScopeExternalPayment",
              "invoiceMustReferenceProjectAndClient",
              "clientBillingAccess"
            ],
            "order": 30,
            "intentions": [
              {
                "id": "intent.invoiceWorkspace.sendInvoiceCmd.form",
                "intent": "commandForm",
                "order": 10,
                "titleKey": "intent.invoiceWorkspace.sendInvoiceCmd.form.title",
                "source": "bff.sendInvoiceCmd",
                "binding": "binding.invoiceWorkspace.sendInvoiceCmd",
                "submitAction": "sendInvoiceCmd",
                "fields": [],
                "columns": [],
                "filters": [],
                "toolbar": [],
                "rowActions": [],
                "actions": [
                  {
                    "id": "intent.invoiceWorkspace.sendInvoiceCmd.form.action.sendInvoiceCmd",
                    "action": "sendInvoiceCmd",
                    "labelKey": "intent.invoiceWorkspace.sendInvoiceCmd.form.action.sendInvoiceCmd",
                    "order": 10,
                    "actionKey": "sendInvoiceCmd"
                  }
                ]
              }
            ],
            "displayHint": "contextual-transition-actions"
          }
        ]
      },
      {
        "id": "section.invoiceWorkspace.createInvoiceSection",
        "type": "section",
        "sectionName": "Create Invoice",
        "titleKey": "section.invoiceWorkspace.createInvoiceSection.title",
        "mode": "edit",
        "order": 20,
        "organisms": [
          {
            "id": "createInvoiceForm",
            "type": "commandForm",
            "organismName": "CreateInvoiceForm",
            "titleKey": "organism.invoiceWorkspace.createInvoiceCmd.title",
            "purpose": "Allows billing staff to draft a new invoice by selecting a project and client (context-derived from selection) and entering a human-readable invoice number, then confirming creation of the draft billing document.",
            "userActions": [
              "createInvoiceCmd"
            ],
            "requiredEntities": [],
            "readsFields": [],
            "writesFields": [],
            "rulesApplied": [
              "onlyApprovedChangeOrdersAffectCosting",
              "invoiceScopeExternalPayment",
              "invoiceMustReferenceProjectAndClient"
            ],
            "order": 10,
            "intentions": [
              {
                "id": "intent.invoiceWorkspace.createInvoiceCmd.form",
                "intent": "commandForm",
                "order": 10,
                "titleKey": "intent.invoiceWorkspace.createInvoiceCmd.form.title",
                "source": "bff.createInvoiceCmd",
                "binding": "binding.invoiceWorkspace.createInvoiceCmd",
                "submitAction": "createInvoiceCmd",
                "fields": [
                  {
                    "id": "intent.invoiceWorkspace.createInvoiceCmd.form.field.invoiceNumber",
                    "field": "invoiceNumber",
                    "labelKey": "intent.invoiceWorkspace.createInvoiceCmd.form.field.invoiceNumber.label",
                    "order": 10,
                    "stateKey": "ui.invoiceWorkspace.input.createInvoiceCmd.invoiceNumber"
                  }
                ],
                "columns": [],
                "filters": [],
                "toolbar": [],
                "rowActions": [],
                "actions": [
                  {
                    "id": "intent.invoiceWorkspace.createInvoiceCmd.form.action.createInvoiceCmd",
                    "action": "createInvoiceCmd",
                    "labelKey": "intent.invoiceWorkspace.createInvoiceCmd.form.action.createInvoiceCmd",
                    "order": 10,
                    "actionKey": "createInvoiceCmd"
                  }
                ]
              }
            ],
            "displayHint": "form"
          }
        ]
      }
    ]
  },
  "dataBindings": [
    {
      "id": "binding.invoiceWorkspace.listInvoices",
      "source": "bff.listInvoices",
      "command": "listInvoices",
      "description": "Browse invoices",
      "stateKey": "ui.invoiceWorkspace.data.listInvoices",
      "inputStateKeys": [
        "ui.invoiceWorkspace.input.listInvoices.status",
        "ui.invoiceWorkspace.input.listInvoices.projectId",
        "ui.invoiceWorkspace.input.listInvoices.clientId",
        "ui.invoiceWorkspace.input.listInvoices.page",
        "ui.invoiceWorkspace.input.listInvoices.pageSize"
      ]
    },
    {
      "id": "binding.invoiceWorkspace.createInvoiceCmd",
      "source": "bff.createInvoiceCmd",
      "command": "createInvoiceCmd",
      "description": "Create invoice",
      "stateKey": "ui.invoiceWorkspace.output.createInvoiceCmd",
      "inputStateKeys": [
        "ui.invoiceWorkspace.input.createInvoiceCmd.projectId",
        "ui.invoiceWorkspace.input.createInvoiceCmd.invoiceNumber",
        "ui.invoiceWorkspace.input.createInvoiceCmd.clientId"
      ]
    },
    {
      "id": "binding.invoiceWorkspace.sendInvoiceCmd",
      "source": "bff.sendInvoiceCmd",
      "command": "sendInvoiceCmd",
      "description": "Send invoice to client",
      "stateKey": "ui.invoiceWorkspace.output.sendInvoiceCmd",
      "inputStateKeys": [
        "ui.invoiceWorkspace.input.sendInvoiceCmd.invoiceId"
      ]
    }
  ]
};

export const pipeline = [
  {
    "id": "invoiceWorkspace__l2_page",
    "type": "l2_page",
    "outputPath": "_102045_/l2/buildFlowFsm/web/desktop/page11/invoiceWorkspace.ts",
    "defPath": "_102045_/l2/buildFlowFsm/web/desktop/page11/invoiceWorkspace.defs.ts",
    "dependsFiles": [
      "_102045_/l2/buildFlowFsm/web/shared/invoiceWorkspace.ts",
      "_102045_/l2/designSystem.ts"
    ],
    "dependsOn": [
      "invoiceWorkspace__l2_shared"
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
