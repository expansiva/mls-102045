/// <mls fileReference="_102045_/l2/buildFlowFsm/web/desktop/page11/clientBillingWorkspace.defs.ts" enhancement="_blank"/>

export const definition = {
  "pageId": "clientBillingWorkspace",
  "pageName": "My Billing",
  "baseClassName": "BuildFlowFsmClientBillingWorkspaceBase",
  "actor": "client",
  "purpose": "Executar My Billing.",
  "capabilities": [
    "viewBillingSummary",
    "viewInvoice"
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
    "workspaceId": "clientBillingWorkspace",
    "workspaceKind": "operation",
    "actor": "client",
    "entity": "BillingSummary",
    "owners": [
      {
        "kind": "operation",
        "id": "viewBillingSummary",
        "defPath": "_102045_/l4/buildFlowFsm/operations/viewBillingSummary.defs.ts"
      },
      {
        "kind": "operation",
        "id": "viewInvoice",
        "defPath": "_102045_/l4/buildFlowFsm/operations/viewInvoice.defs.ts"
      }
    ],
    "microUserFlow": {
      "source": "l4/story.steps",
      "workflowSteps": [],
      "operations": [
        {
          "operationId": "viewBillingSummary",
          "commandName": "viewBillingSummary",
          "steps": [
            "Open the billing summary shared by billing staff for the project",
            "Review the billing period and the labor, material, and approved change-order cost totals",
            "Confirm the overall total and note any questions about the charges"
          ]
        },
        {
          "operationId": "viewInvoice",
          "commandName": "viewInvoice",
          "steps": [
            "Open the invoice shared by billing staff using its identifier",
            "Review invoice number, project and client references, status, total amount, and sent date",
            "Confirm the document is for information only with payment handled externally"
          ]
        }
      ]
    }
  },
  "pageInputs": [],
  "navigationRefs": [],
  "sections": [
    {
      "id": "section.clientBillingWorkspace.billingSummarySection",
      "type": "section",
      "sectionName": "Billing Summary",
      "titleKey": "section.clientBillingWorkspace.billingSummarySection.title",
      "mode": "view",
      "order": 10,
      "organisms": [
        {
          "id": "billing-summary-panel",
          "type": "queryResult",
          "organismName": "BillingSummaryPanel",
          "titleKey": "organism.clientBillingWorkspace.getBillingSummary.title",
          "purpose": "Shows the full billing summary for the project — period dates, labor, material and change-order cost breakdown, overall total, and shared status — so the client can review charges at a glance.",
          "userActions": [
            "getBillingSummary"
          ],
          "requiredEntities": [],
          "readsFields": [],
          "writesFields": [],
          "rulesApplied": [
            "onlyApprovedChangeOrdersAffectCosting",
            "billingSummaryClientFacing",
            "clientBillingAccess"
          ],
          "order": 10,
          "intentionRefs": [
            {
              "id": "intent.clientBillingWorkspace.getBillingSummary.list",
              "intent": "queryList",
              "stateKey": "ui.clientBillingWorkspace.data.getBillingSummary",
              "action": "getBillingSummary",
              "order": 10
            }
          ]
        }
      ]
    },
    {
      "id": "section.clientBillingWorkspace.invoiceSection",
      "type": "section",
      "sectionName": "Invoice",
      "titleKey": "section.clientBillingWorkspace.invoiceSection.title",
      "mode": "view",
      "order": 20,
      "organisms": [
        {
          "id": "invoice-detail-panel",
          "type": "queryResult",
          "organismName": "InvoiceDetailPanel",
          "titleKey": "organism.clientBillingWorkspace.getInvoice.title",
          "purpose": "Displays the invoice shared by billing staff — invoice number, project and client references, status, total amount, and sent date — confirming the document is informational with payment handled externally.",
          "userActions": [
            "getInvoice"
          ],
          "requiredEntities": [],
          "readsFields": [],
          "writesFields": [],
          "rulesApplied": [
            "clientBillingAccess",
            "invoiceScopeExternalPayment",
            "invoiceMustReferenceProjectAndClient"
          ],
          "order": 10,
          "intentionRefs": [
            {
              "id": "intent.clientBillingWorkspace.getInvoice.list",
              "intent": "queryList",
              "stateKey": "ui.clientBillingWorkspace.data.getInvoice",
              "action": "getInvoice",
              "order": 10
            }
          ]
        }
      ]
    }
  ],
  "templateId": "status_overview",
  "visualStyle": "Desktop-first for PM and billing staff with mobile-optimized field entry; dashboard-driven, status-aware, touch-friendly UI with Gantt-ish timeline views.",
  "layout": {
    "id": "cfe-20260731060448.1000",
    "type": "page",
    "sections": [
      {
        "id": "section.clientBillingWorkspace.billingSummarySection",
        "type": "section",
        "sectionName": "Billing Summary",
        "titleKey": "section.clientBillingWorkspace.billingSummarySection.title",
        "mode": "view",
        "order": 10,
        "organisms": [
          {
            "id": "billing-summary-panel",
            "type": "queryResult",
            "organismName": "BillingSummaryPanel",
            "titleKey": "organism.clientBillingWorkspace.getBillingSummary.title",
            "purpose": "Shows the full billing summary for the project — period dates, labor, material and change-order cost breakdown, overall total, and shared status — so the client can review charges at a glance.",
            "userActions": [
              "getBillingSummary"
            ],
            "requiredEntities": [],
            "readsFields": [],
            "writesFields": [],
            "rulesApplied": [
              "onlyApprovedChangeOrdersAffectCosting",
              "billingSummaryClientFacing",
              "clientBillingAccess"
            ],
            "order": 10,
            "intentions": [
              {
                "id": "intent.clientBillingWorkspace.getBillingSummary.list",
                "intent": "queryList",
                "order": 10,
                "titleKey": "intent.clientBillingWorkspace.getBillingSummary.list.title",
                "source": "bff.getBillingSummary",
                "binding": "binding.clientBillingWorkspace.getBillingSummary",
                "action": "getBillingSummary",
                "emptyKey": "intent.clientBillingWorkspace.getBillingSummary.list.empty",
                "fields": [],
                "columns": [
                  {
                    "id": "intent.clientBillingWorkspace.getBillingSummary.list.column.billingSummaryId",
                    "field": "billingSummaryId",
                    "labelKey": "intent.clientBillingWorkspace.getBillingSummary.list.column.billingSummaryId.label",
                    "order": 10,
                    "stateKey": "ui.clientBillingWorkspace.data.getBillingSummary"
                  },
                  {
                    "id": "intent.clientBillingWorkspace.getBillingSummary.list.column.projectId",
                    "field": "projectId",
                    "labelKey": "intent.clientBillingWorkspace.getBillingSummary.list.column.projectId.label",
                    "order": 20,
                    "stateKey": "ui.clientBillingWorkspace.data.getBillingSummary"
                  },
                  {
                    "id": "intent.clientBillingWorkspace.getBillingSummary.list.column.projectName",
                    "field": "projectName",
                    "labelKey": "intent.clientBillingWorkspace.getBillingSummary.list.column.projectName.label",
                    "order": 30,
                    "stateKey": "ui.clientBillingWorkspace.data.getBillingSummary"
                  },
                  {
                    "id": "intent.clientBillingWorkspace.getBillingSummary.list.column.status",
                    "field": "status",
                    "labelKey": "intent.clientBillingWorkspace.getBillingSummary.list.column.status.label",
                    "order": 40,
                    "stateKey": "ui.clientBillingWorkspace.data.getBillingSummary"
                  },
                  {
                    "id": "intent.clientBillingWorkspace.getBillingSummary.list.column.periodStart",
                    "field": "periodStart",
                    "labelKey": "intent.clientBillingWorkspace.getBillingSummary.list.column.periodStart.label",
                    "order": 50,
                    "stateKey": "ui.clientBillingWorkspace.data.getBillingSummary"
                  },
                  {
                    "id": "intent.clientBillingWorkspace.getBillingSummary.list.column.periodEnd",
                    "field": "periodEnd",
                    "labelKey": "intent.clientBillingWorkspace.getBillingSummary.list.column.periodEnd.label",
                    "order": 60,
                    "stateKey": "ui.clientBillingWorkspace.data.getBillingSummary"
                  },
                  {
                    "id": "intent.clientBillingWorkspace.getBillingSummary.list.column.laborCost",
                    "field": "laborCost",
                    "labelKey": "intent.clientBillingWorkspace.getBillingSummary.list.column.laborCost.label",
                    "order": 70,
                    "stateKey": "ui.clientBillingWorkspace.data.getBillingSummary"
                  },
                  {
                    "id": "intent.clientBillingWorkspace.getBillingSummary.list.column.materialCost",
                    "field": "materialCost",
                    "labelKey": "intent.clientBillingWorkspace.getBillingSummary.list.column.materialCost.label",
                    "order": 80,
                    "stateKey": "ui.clientBillingWorkspace.data.getBillingSummary"
                  },
                  {
                    "id": "intent.clientBillingWorkspace.getBillingSummary.list.column.changeOrderCost",
                    "field": "changeOrderCost",
                    "labelKey": "intent.clientBillingWorkspace.getBillingSummary.list.column.changeOrderCost.label",
                    "order": 90,
                    "stateKey": "ui.clientBillingWorkspace.data.getBillingSummary"
                  },
                  {
                    "id": "intent.clientBillingWorkspace.getBillingSummary.list.column.totalCost",
                    "field": "totalCost",
                    "labelKey": "intent.clientBillingWorkspace.getBillingSummary.list.column.totalCost.label",
                    "order": 100,
                    "stateKey": "ui.clientBillingWorkspace.data.getBillingSummary"
                  },
                  {
                    "id": "intent.clientBillingWorkspace.getBillingSummary.list.column.sharedAt",
                    "field": "sharedAt",
                    "labelKey": "intent.clientBillingWorkspace.getBillingSummary.list.column.sharedAt.label",
                    "order": 110,
                    "stateKey": "ui.clientBillingWorkspace.data.getBillingSummary"
                  }
                ],
                "filters": [
                  {
                    "id": "intent.clientBillingWorkspace.getBillingSummary.list.filter.clientId",
                    "field": "clientId",
                    "labelKey": "intent.clientBillingWorkspace.getBillingSummary.list.filter.clientId.label",
                    "order": 10,
                    "stateKey": "ui.clientBillingWorkspace.input.getBillingSummary.clientId"
                  }
                ],
                "toolbar": [],
                "rowActions": [],
                "actions": [],
                "stateKey": "ui.clientBillingWorkspace.data.getBillingSummary"
              }
            ],
            "displayHint": "detail"
          }
        ]
      },
      {
        "id": "section.clientBillingWorkspace.invoiceSection",
        "type": "section",
        "sectionName": "Invoice",
        "titleKey": "section.clientBillingWorkspace.invoiceSection.title",
        "mode": "view",
        "order": 20,
        "organisms": [
          {
            "id": "invoice-detail-panel",
            "type": "queryResult",
            "organismName": "InvoiceDetailPanel",
            "titleKey": "organism.clientBillingWorkspace.getInvoice.title",
            "purpose": "Displays the invoice shared by billing staff — invoice number, project and client references, status, total amount, and sent date — confirming the document is informational with payment handled externally.",
            "userActions": [
              "getInvoice"
            ],
            "requiredEntities": [],
            "readsFields": [],
            "writesFields": [],
            "rulesApplied": [
              "clientBillingAccess",
              "invoiceScopeExternalPayment",
              "invoiceMustReferenceProjectAndClient"
            ],
            "order": 10,
            "intentions": [
              {
                "id": "intent.clientBillingWorkspace.getInvoice.list",
                "intent": "queryList",
                "order": 10,
                "titleKey": "intent.clientBillingWorkspace.getInvoice.list.title",
                "source": "bff.getInvoice",
                "binding": "binding.clientBillingWorkspace.getInvoice",
                "action": "getInvoice",
                "emptyKey": "intent.clientBillingWorkspace.getInvoice.list.empty",
                "fields": [],
                "columns": [
                  {
                    "id": "intent.clientBillingWorkspace.getInvoice.list.column.invoiceId",
                    "field": "invoiceId",
                    "labelKey": "intent.clientBillingWorkspace.getInvoice.list.column.invoiceId.label",
                    "order": 10,
                    "stateKey": "ui.clientBillingWorkspace.data.getInvoice"
                  },
                  {
                    "id": "intent.clientBillingWorkspace.getInvoice.list.column.projectId",
                    "field": "projectId",
                    "labelKey": "intent.clientBillingWorkspace.getInvoice.list.column.projectId.label",
                    "order": 20,
                    "stateKey": "ui.clientBillingWorkspace.data.getInvoice"
                  },
                  {
                    "id": "intent.clientBillingWorkspace.getInvoice.list.column.clientId",
                    "field": "clientId",
                    "labelKey": "intent.clientBillingWorkspace.getInvoice.list.column.clientId.label",
                    "order": 30,
                    "stateKey": "ui.clientBillingWorkspace.data.getInvoice"
                  },
                  {
                    "id": "intent.clientBillingWorkspace.getInvoice.list.column.invoiceNumber",
                    "field": "invoiceNumber",
                    "labelKey": "intent.clientBillingWorkspace.getInvoice.list.column.invoiceNumber.label",
                    "order": 40,
                    "stateKey": "ui.clientBillingWorkspace.data.getInvoice"
                  },
                  {
                    "id": "intent.clientBillingWorkspace.getInvoice.list.column.status",
                    "field": "status",
                    "labelKey": "intent.clientBillingWorkspace.getInvoice.list.column.status.label",
                    "order": 50,
                    "stateKey": "ui.clientBillingWorkspace.data.getInvoice"
                  },
                  {
                    "id": "intent.clientBillingWorkspace.getInvoice.list.column.totalAmount",
                    "field": "totalAmount",
                    "labelKey": "intent.clientBillingWorkspace.getInvoice.list.column.totalAmount.label",
                    "order": 60,
                    "stateKey": "ui.clientBillingWorkspace.data.getInvoice"
                  },
                  {
                    "id": "intent.clientBillingWorkspace.getInvoice.list.column.sentAt",
                    "field": "sentAt",
                    "labelKey": "intent.clientBillingWorkspace.getInvoice.list.column.sentAt.label",
                    "order": 70,
                    "stateKey": "ui.clientBillingWorkspace.data.getInvoice"
                  },
                  {
                    "id": "intent.clientBillingWorkspace.getInvoice.list.column.createdAt",
                    "field": "createdAt",
                    "labelKey": "intent.clientBillingWorkspace.getInvoice.list.column.createdAt.label",
                    "order": 80,
                    "stateKey": "ui.clientBillingWorkspace.data.getInvoice"
                  }
                ],
                "filters": [
                  {
                    "id": "intent.clientBillingWorkspace.getInvoice.list.filter.clientId",
                    "field": "clientId",
                    "labelKey": "intent.clientBillingWorkspace.getInvoice.list.filter.clientId.label",
                    "order": 10,
                    "stateKey": "ui.clientBillingWorkspace.input.getInvoice.clientId"
                  }
                ],
                "toolbar": [],
                "rowActions": [],
                "actions": [],
                "stateKey": "ui.clientBillingWorkspace.data.getInvoice"
              }
            ],
            "displayHint": "detail"
          }
        ]
      }
    ]
  },
  "dataBindings": [
    {
      "id": "binding.clientBillingWorkspace.getBillingSummary",
      "source": "bff.getBillingSummary",
      "command": "getBillingSummary",
      "description": "View billing summary",
      "stateKey": "ui.clientBillingWorkspace.data.getBillingSummary",
      "inputStateKeys": [
        "ui.clientBillingWorkspace.input.getBillingSummary.billingSummaryId",
        "ui.clientBillingWorkspace.input.getBillingSummary.clientId"
      ]
    },
    {
      "id": "binding.clientBillingWorkspace.getInvoice",
      "source": "bff.getInvoice",
      "command": "getInvoice",
      "description": "View invoice",
      "stateKey": "ui.clientBillingWorkspace.data.getInvoice",
      "inputStateKeys": [
        "ui.clientBillingWorkspace.input.getInvoice.invoiceId",
        "ui.clientBillingWorkspace.input.getInvoice.clientId"
      ]
    }
  ]
};

export const pipeline = [
  {
    "id": "clientBillingWorkspace__l2_page",
    "type": "l2_page",
    "outputPath": "_102045_/l2/buildFlowFsm/web/desktop/page11/clientBillingWorkspace.ts",
    "defPath": "_102045_/l2/buildFlowFsm/web/desktop/page11/clientBillingWorkspace.defs.ts",
    "dependsFiles": [
      "_102045_/l2/buildFlowFsm/web/shared/clientBillingWorkspace.ts",
      "_102045_/l2/designSystem.ts"
    ],
    "dependsOn": [
      "clientBillingWorkspace__l2_shared"
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
