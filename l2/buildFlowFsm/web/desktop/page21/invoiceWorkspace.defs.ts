/// <mls fileReference="_102045_/l2/buildFlowFsm/web/desktop/page21/invoiceWorkspace.defs.ts" enhancement="_blank"/>

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
      "id": "section.invoiceWorkspace.sec-invoice-list",
      "type": "section",
      "sectionName": "Invoice List",
      "titleKey": "section.invoiceWorkspace.sec-invoice-list.title",
      "mode": "edit",
      "order": 10,
      "organisms": [
        {
          "id": "org-invoice-filter-bar",
          "type": "content",
          "organismName": "InvoiceFilterBar",
          "titleKey": "organism.invoiceWorkspace.summary-first10.title",
          "purpose": "Lets billing staff narrow the invoice list by status, project, and client before scanning or acting — folded into the list surface header so filters and results stay visually coupled.",
          "userActions": [],
          "requiredEntities": [],
          "readsFields": [],
          "writesFields": [],
          "rulesApplied": [],
          "order": 10,
          "intentionRefs": [
            {
              "id": "intent.invoiceWorkspace.summary-first10.content",
              "intent": "summary-first",
              "order": 10
            }
          ]
        },
        {
          "id": "org-invoice-table",
          "type": "queryResult",
          "organismName": "InvoiceTable",
          "titleKey": "organism.invoiceWorkspace.listInvoices.title",
          "purpose": "Primary scan surface showing all invoices with invoice number, client, project, status badge, total amount, and key dates; supports pagination and row selection for contextual actions.",
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
          "id": "org-send-invoice-action",
          "type": "commandForm",
          "organismName": "SendInvoiceAction",
          "titleKey": "organism.invoiceWorkspace.sendInvoiceCmd.title",
          "purpose": "Renders a 'Send to Client' button inline on each draft invoice row, allowing billing staff to dispatch the selected invoice in one click without navigating away or typing any id.",
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
      "id": "section.invoiceWorkspace.sec-create-invoice",
      "type": "section",
      "sectionName": "Create Invoice",
      "titleKey": "section.invoiceWorkspace.sec-create-invoice.title",
      "mode": "edit",
      "order": 20,
      "organisms": [
        {
          "id": "org-create-invoice-form",
          "type": "commandForm",
          "organismName": "CreateInvoiceForm",
          "titleKey": "organism.invoiceWorkspace.createInvoiceCmd.title",
          "purpose": "Compact panel triggered by a toolbar 'New Invoice' button; billing staff selects a project (which derives the client), enters a human-readable invoice number, and confirms to generate a draft invoice.",
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
  "templateId": "goal_first",
  "visualStyle": "Desktop-first for PM and billing staff with mobile-optimized field entry; dashboard-driven, status-aware, touch-friendly UI with Gantt-ish timeline views.",
  "pageObjective": {
    "actor": "Billing staff",
    "jobToBeDone": "Generate draft invoices from approved project costs and send them to clients, with full visibility into invoice status across all projects.",
    "primaryDecision": "Which invoice to send to the client (or whether to create a new one from a project's approved costs).",
    "decisiveInfo": [
      "invoiceNumber",
      "status (draft vs sent)",
      "clientId / client name",
      "projectId / project name",
      "totalAmount",
      "sentAt / createdAt"
    ],
    "usageFrequency": "Occasional / back-office — billing staff opens this workspace at billing cycle milestones to generate and dispatch invoices.",
    "criticalActions": [
      {
        "action": "sendInvoiceCmd",
        "presentation": "contextual-transition-actions — a 'Send to Client' button rendered inline on each draft invoice row; never a free status select or a manually typed invoiceId."
      },
      {
        "action": "createInvoiceCmd",
        "presentation": "primary-button opening a compact form panel (project picker, client picker derived from project, invoice number input); projectId and clientId are selections, never typed ids."
      },
      {
        "action": "listInvoices",
        "presentation": "master-detail paginated table with filter bar folded into the surface header."
      }
    ],
    "informationHierarchy": [
      "1. Invoice list with status badges, client, project, total amount, and dates — the primary scan surface.",
      "2. Filter controls (status, project, client) folded into the list header — narrow before acting.",
      "3. Contextual 'Send' action on each draft row — the most frequent next step.",
      "4. Create Invoice panel — secondary, triggered from a toolbar button above the list."
    ],
    "successCriteria": "Billing staff can scan all invoices, filter to drafts, send a draft to a client in two clicks, and create a new invoice without leaving the workspace or typing any identifier manually.",
    "antiPatterns": [
      "Separate full-page form for sending an invoice — it is a one-decision transition.",
      "Free <select> over all status enum values for the send transition.",
      "Manually typed invoiceId, projectId, or clientId in any input.",
      "Stacking the create form below the list as a permanently visible section.",
      "Showing system-owned fields (createdAt, updatedAt, sentAt) as editable inputs."
    ]
  },
  "layout": {
    "id": "page21-goal-first",
    "type": "page",
    "sections": [
      {
        "id": "section.invoiceWorkspace.sec-invoice-list",
        "type": "section",
        "sectionName": "Invoice List",
        "titleKey": "section.invoiceWorkspace.sec-invoice-list.title",
        "mode": "edit",
        "order": 10,
        "organisms": [
          {
            "id": "org-invoice-filter-bar",
            "type": "content",
            "organismName": "InvoiceFilterBar",
            "titleKey": "organism.invoiceWorkspace.summary-first10.title",
            "purpose": "Lets billing staff narrow the invoice list by status, project, and client before scanning or acting — folded into the list surface header so filters and results stay visually coupled.",
            "userActions": [],
            "requiredEntities": [],
            "readsFields": [],
            "writesFields": [],
            "rulesApplied": [],
            "order": 10,
            "intentions": [
              {
                "id": "intent.invoiceWorkspace.summary-first10.content",
                "intent": "summary-first",
                "order": 10,
                "titleKey": "intent.invoiceWorkspace.summary-first10.content.title",
                "displayHint": "summary-first",
                "fields": [],
                "columns": [],
                "filters": [],
                "toolbar": [],
                "rowActions": [],
                "actions": []
              }
            ],
            "displayHint": "summary-first"
          },
          {
            "id": "org-invoice-table",
            "type": "queryResult",
            "organismName": "InvoiceTable",
            "titleKey": "organism.invoiceWorkspace.listInvoices.title",
            "purpose": "Primary scan surface showing all invoices with invoice number, client, project, status badge, total amount, and key dates; supports pagination and row selection for contextual actions.",
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
            "displayHint": "master-detail"
          },
          {
            "id": "org-send-invoice-action",
            "type": "commandForm",
            "organismName": "SendInvoiceAction",
            "titleKey": "organism.invoiceWorkspace.sendInvoiceCmd.title",
            "purpose": "Renders a 'Send to Client' button inline on each draft invoice row, allowing billing staff to dispatch the selected invoice in one click without navigating away or typing any id.",
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
        "id": "section.invoiceWorkspace.sec-create-invoice",
        "type": "section",
        "sectionName": "Create Invoice",
        "titleKey": "section.invoiceWorkspace.sec-create-invoice.title",
        "mode": "edit",
        "order": 20,
        "organisms": [
          {
            "id": "org-create-invoice-form",
            "type": "commandForm",
            "organismName": "CreateInvoiceForm",
            "titleKey": "organism.invoiceWorkspace.createInvoiceCmd.title",
            "purpose": "Compact panel triggered by a toolbar 'New Invoice' button; billing staff selects a project (which derives the client), enters a human-readable invoice number, and confirms to generate a draft invoice.",
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
            "displayHint": "summary-first"
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
    "id": "invoiceWorkspace__page21__l2_page",
    "type": "l2_page",
    "outputPath": "_102045_/l2/buildFlowFsm/web/desktop/page21/invoiceWorkspace.ts",
    "defPath": "_102045_/l2/buildFlowFsm/web/desktop/page21/invoiceWorkspace.defs.ts",
    "dependsFiles": [
      "_102045_/l2/buildFlowFsm/web/shared/invoiceWorkspace.ts",
      "_102045_/l2/designSystem.ts"
    ],
    "dependsOn": [
      "invoiceWorkspace__l2_shared"
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
