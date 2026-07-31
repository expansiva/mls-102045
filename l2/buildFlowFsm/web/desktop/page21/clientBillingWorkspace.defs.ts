/// <mls fileReference="_102045_/l2/buildFlowFsm/web/desktop/page21/clientBillingWorkspace.defs.ts" enhancement="_blank"/>

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
      "id": "section.clientBillingWorkspace.billing-summary-section",
      "type": "section",
      "sectionName": "Billing Summary",
      "titleKey": "section.clientBillingWorkspace.billing-summary-section.title",
      "mode": "view",
      "order": 10,
      "organisms": [
        {
          "id": "billing-summary-panel",
          "type": "queryResult",
          "organismName": "BillingSummaryPanel",
          "titleKey": "organism.clientBillingWorkspace.getBillingSummary.title",
          "purpose": "Displays the full billing summary for the project — period, cost breakdown (labor, material, change orders) and overall total — so the client can confirm charges at a glance.",
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
      "id": "section.clientBillingWorkspace.invoice-section",
      "type": "section",
      "sectionName": "Invoice Detail",
      "titleKey": "section.clientBillingWorkspace.invoice-section.title",
      "mode": "view",
      "order": 20,
      "organisms": [
        {
          "id": "invoice-detail-panel",
          "type": "queryResult",
          "organismName": "InvoiceDetailPanel",
          "titleKey": "organism.clientBillingWorkspace.getInvoice.title",
          "purpose": "Shows the invoice shared by billing staff — invoice number, status, total amount and sent date — so the client can cross-reference the billing summary and confirm the document is for information only.",
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
  "templateId": "goal_first",
  "visualStyle": "Desktop-first for PM and billing staff with mobile-optimized field entry; dashboard-driven, status-aware, touch-friendly UI with Gantt-ish timeline views.",
  "pageObjective": {
    "actor": "Client (project owner reviewing charges)",
    "jobToBeDone": "Review the billing summary and invoice shared by billing staff so the client can confirm charges and understand what they owe before handling payment externally.",
    "primaryDecision": "Understand and confirm the total cost breakdown in the billing summary, then cross-reference the corresponding invoice details.",
    "decisiveInfo": [
      "totalCost",
      "laborCost",
      "materialCost",
      "changeOrderCost",
      "periodStart",
      "periodEnd",
      "projectName",
      "status (BillingSummary)",
      "invoiceNumber",
      "totalAmount",
      "status (Invoice)",
      "sentAt"
    ],
    "usageFrequency": "Occasional — client opens this page when billing staff shares a billing summary or invoice for a project milestone.",
    "criticalActions": [
      {
        "action": "Load and display billing summary",
        "presentation": "summary-first — lead with total cost and period, then expand cost breakdown (labor, material, change orders)"
      },
      {
        "action": "Load and display invoice detail",
        "presentation": "master-detail — billing summary is the primary surface; invoice detail panel appears alongside or below, driven by the same project context"
      }
    ],
    "informationHierarchy": [
      "1. Billing summary header: project name, billing period, overall status",
      "2. Cost breakdown: labor, material, change-order, total",
      "3. Invoice detail: invoice number, status, total amount, sent date",
      "4. Read-only context: projectId, clientId, billingSummaryId, invoiceId (never shown as inputs)"
    ],
    "successCriteria": "The client can land on the page, immediately see the billing period and total cost, then confirm the matching invoice number and amount — all without typing any identifier or navigating away.",
    "antiPatterns": [
      "Exposing billingSummaryId or invoiceId as manual text inputs",
      "Exposing clientId as a visible form field",
      "Showing status as an editable select",
      "Splitting billing summary and invoice into completely separate pages requiring navigation",
      "Rendering a CRUD form instead of a read-only summary view",
      "Adding persuasion or urgency framing on this operational read-only screen"
    ]
  },
  "layout": {
    "id": "page21-goal-first",
    "type": "page",
    "sections": [
      {
        "id": "section.clientBillingWorkspace.billing-summary-section",
        "type": "section",
        "sectionName": "Billing Summary",
        "titleKey": "section.clientBillingWorkspace.billing-summary-section.title",
        "mode": "view",
        "order": 10,
        "organisms": [
          {
            "id": "billing-summary-panel",
            "type": "queryResult",
            "organismName": "BillingSummaryPanel",
            "titleKey": "organism.clientBillingWorkspace.getBillingSummary.title",
            "purpose": "Displays the full billing summary for the project — period, cost breakdown (labor, material, change orders) and overall total — so the client can confirm charges at a glance.",
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
            "displayHint": "summary-first"
          }
        ]
      },
      {
        "id": "section.clientBillingWorkspace.invoice-section",
        "type": "section",
        "sectionName": "Invoice Detail",
        "titleKey": "section.clientBillingWorkspace.invoice-section.title",
        "mode": "view",
        "order": 20,
        "organisms": [
          {
            "id": "invoice-detail-panel",
            "type": "queryResult",
            "organismName": "InvoiceDetailPanel",
            "titleKey": "organism.clientBillingWorkspace.getInvoice.title",
            "purpose": "Shows the invoice shared by billing staff — invoice number, status, total amount and sent date — so the client can cross-reference the billing summary and confirm the document is for information only.",
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
            "displayHint": "master-detail"
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
    "id": "clientBillingWorkspace__page21__l2_page",
    "type": "l2_page",
    "outputPath": "_102045_/l2/buildFlowFsm/web/desktop/page21/clientBillingWorkspace.ts",
    "defPath": "_102045_/l2/buildFlowFsm/web/desktop/page21/clientBillingWorkspace.defs.ts",
    "dependsFiles": [
      "_102045_/l2/buildFlowFsm/web/shared/clientBillingWorkspace.ts",
      "_102045_/l2/designSystem.ts"
    ],
    "dependsOn": [
      "clientBillingWorkspace__l2_shared"
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
