/// <mls fileReference="_102045_/l2/buildFlowFsm/web/desktop/page21/billingSummaryWorkspace.defs.ts" enhancement="_blank"/>

export const definition = {
  "pageId": "billingSummaryWorkspace",
  "pageName": "Billing Summaries",
  "baseClassName": "BuildFlowFsmBillingSummaryWorkspaceBase",
  "actor": "billingStaff",
  "purpose": "Executar Billing Summaries.",
  "capabilities": [
    "billingSummaryLifecycle",
    "queryBillingSummaries"
  ],
  "flowRefs": {
    "experienceFlows": [
      "billingSummaryLifecycle"
    ],
    "entityLifecycles": [],
    "taskWorkflows": [
      "billingSummaryLifecycle"
    ],
    "automations": []
  },
  "pluginRefs": [],
  "mdmRefs": [],
  "origin": {
    "source": "l4-journey",
    "workspaceId": "billingSummaryWorkspace",
    "workspaceKind": "workflow",
    "workflowId": "billingSummaryLifecycle",
    "actor": "billingStaff",
    "entity": "BillingSummary",
    "owners": [
      {
        "kind": "workflow",
        "id": "billingSummaryLifecycle",
        "defPath": "_102045_/l4/buildFlowFsm/workflows/billingSummaryLifecycle.defs.ts"
      },
      {
        "kind": "operation",
        "id": "queryBillingSummaries",
        "defPath": "_102045_/l4/buildFlowFsm/operations/queryBillingSummaries.defs.ts"
      },
      {
        "kind": "operation",
        "id": "createBillingSummary",
        "defPath": "_102045_/l4/buildFlowFsm/operations/createBillingSummary.defs.ts"
      },
      {
        "kind": "operation",
        "id": "shareBillingSummary",
        "defPath": "_102045_/l4/buildFlowFsm/operations/shareBillingSummary.defs.ts"
      }
    ],
    "microUserFlow": {
      "source": "l4/story.steps",
      "workflowSteps": [
        "Billing staff reviews labor, material, and approved change order costs for the project.",
        "Billing staff assembles a client-facing billing summary that breaks down labor, materials, and change orders.",
        "Billing staff shares the billing summary with the client for review before an invoice is generated."
      ],
      "operations": [
        {
          "operationId": "queryBillingSummaries",
          "commandName": "queryBillingSummaries",
          "steps": [
            "Open the billing summaries list",
            "Optionally filter by project and status",
            "Review period dates and labor, material, change-order, and total costs for each summary",
            "Select a summary to continue compiling or sharing"
          ]
        },
        {
          "operationId": "createBillingSummary",
          "commandName": "createBillingSummary",
          "steps": [
            "Open the project billing context",
            "Choose the billing period start and end dates",
            "Review accumulated labor, material, and approved change order costs for that period",
            "Confirm creation of the billing summary in draft status"
          ]
        },
        {
          "operationId": "shareBillingSummary",
          "commandName": "shareBillingSummary",
          "steps": [
            "Select a draft billing summary for the project",
            "Confirm the labor, material, and change-order breakdown is ready for the client",
            "Share the billing summary, marking it as shared and recording the share timestamp"
          ]
        }
      ]
    }
  },
  "pageInputs": [],
  "navigationRefs": [],
  "sections": [
    {
      "id": "section.billingSummaryWorkspace.sec-billing-workspace",
      "type": "section",
      "sectionName": "Billing Summaries Workspace",
      "titleKey": "section.billingSummaryWorkspace.sec-billing-workspace.title",
      "mode": "edit",
      "order": 10,
      "organisms": [
        {
          "id": "org-billing-summary-list",
          "type": "queryResult",
          "organismName": "BillingSummaryList",
          "titleKey": "organism.billingSummaryWorkspace.listBillingSummaries.title",
          "purpose": "Primary paginated table of all billing summaries showing period, project, cost breakdown and status; drives the selected-summary context for downstream actions.",
          "userActions": [
            "listBillingSummaries"
          ],
          "requiredEntities": [],
          "readsFields": [],
          "writesFields": [],
          "rulesApplied": [
            "onlyApprovedChangeOrdersAffectCosting",
            "billingSummaryClientFacing"
          ],
          "order": 10,
          "intentionRefs": [
            {
              "id": "intent.billingSummaryWorkspace.listBillingSummaries.list",
              "intent": "queryList",
              "stateKey": "ui.billingSummaryWorkspace.data.listBillingSummaries",
              "action": "listBillingSummaries",
              "order": 10
            }
          ]
        },
        {
          "id": "org-billing-summary-detail",
          "type": "commandForm",
          "organismName": "BillingSummaryDetailPanel",
          "titleKey": "organism.billingSummaryWorkspace.shareBillingSummaryCmd.title",
          "purpose": "Shows the full cost breakdown (labor, material, change-order, total) and lifecycle status of the selected billing summary; provides the 'Share with Client' transition button when the summary is in draft status.",
          "userActions": [
            "shareBillingSummaryCmd"
          ],
          "requiredEntities": [],
          "readsFields": [],
          "writesFields": [],
          "rulesApplied": [
            "billingSummaryClientFacing",
            "clientBillingAccess"
          ],
          "order": 20,
          "intentionRefs": [
            {
              "id": "intent.billingSummaryWorkspace.shareBillingSummaryCmd.form",
              "intent": "commandForm",
              "submitAction": "shareBillingSummaryCmd",
              "order": 10
            }
          ]
        },
        {
          "id": "org-create-billing-summary",
          "type": "commandForm",
          "organismName": "CreateBillingSummaryForm",
          "titleKey": "organism.billingSummaryWorkspace.createBillingSummaryCmd.title",
          "purpose": "Inline form to create a new billing summary for the current project by selecting only the billing period start and end dates; projectId is derived from the route and never shown as an input.",
          "userActions": [
            "createBillingSummaryCmd"
          ],
          "requiredEntities": [],
          "readsFields": [],
          "writesFields": [],
          "rulesApplied": [
            "onlyApprovedChangeOrdersAffectCosting",
            "billingSummaryClientFacing"
          ],
          "order": 30,
          "intentionRefs": [
            {
              "id": "intent.billingSummaryWorkspace.createBillingSummaryCmd.form",
              "intent": "commandForm",
              "submitAction": "createBillingSummaryCmd",
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
    "jobToBeDone": "Compile and share client-facing billing summaries by reviewing accumulated job costs, creating draft summaries for a billing period, and sharing them with the client before invoice generation.",
    "primaryDecision": "Select a billing summary to review its cost breakdown, then either create a new one or share a draft with the client.",
    "decisiveInfo": [
      "periodStart",
      "periodEnd",
      "laborCost",
      "materialCost",
      "changeOrderCost",
      "totalCost",
      "status",
      "sharedAt"
    ],
    "usageFrequency": "Occasional / back-office — billing staff uses this at billing cycle milestones, not continuously.",
    "criticalActions": [
      {
        "action": "createBillingSummaryCmd",
        "presentation": "primary-button opening an inline period-picker form above the list; projectId is route-derived and never typed"
      },
      {
        "action": "shareBillingSummaryCmd",
        "presentation": "contextual-transition-actions — a single 'Share with Client' button rendered on the selected draft row/detail panel; billingSummaryId is selection-derived, never typed"
      }
    ],
    "informationHierarchy": [
      "1. Filterable list of billing summaries (project, status, period, cost totals)",
      "2. Selected summary detail — cost breakdown (labor, materials, change orders, total) and lifecycle status",
      "3. Create action — period date inputs for a new summary under the current project",
      "4. Share action — contextual transition button available only when selected summary is in draft status"
    ],
    "successCriteria": "Billing staff can scan all summaries, create a new one by picking only the period dates, and share a draft with one click — without typing any id or manually setting status.",
    "antiPatterns": [
      "Manually typed billingSummaryId or projectId input fields",
      "Free <select> over all status enum values for the share transition",
      "Separate full-page form for create — period dates only, inline or modal",
      "Showing system-owned fields (createdAt, updatedAt, sharedAt) as editable inputs",
      "Stacking a share form section below the list instead of contextual inline action"
    ]
  },
  "layout": {
    "id": "page21",
    "type": "page",
    "sections": [
      {
        "id": "section.billingSummaryWorkspace.sec-billing-workspace",
        "type": "section",
        "sectionName": "Billing Summaries Workspace",
        "titleKey": "section.billingSummaryWorkspace.sec-billing-workspace.title",
        "mode": "edit",
        "order": 10,
        "organisms": [
          {
            "id": "org-billing-summary-list",
            "type": "queryResult",
            "organismName": "BillingSummaryList",
            "titleKey": "organism.billingSummaryWorkspace.listBillingSummaries.title",
            "purpose": "Primary paginated table of all billing summaries showing period, project, cost breakdown and status; drives the selected-summary context for downstream actions.",
            "userActions": [
              "listBillingSummaries"
            ],
            "requiredEntities": [],
            "readsFields": [],
            "writesFields": [],
            "rulesApplied": [
              "onlyApprovedChangeOrdersAffectCosting",
              "billingSummaryClientFacing"
            ],
            "order": 10,
            "intentions": [
              {
                "id": "intent.billingSummaryWorkspace.listBillingSummaries.list",
                "intent": "queryList",
                "order": 10,
                "titleKey": "intent.billingSummaryWorkspace.listBillingSummaries.list.title",
                "source": "bff.listBillingSummaries",
                "binding": "binding.billingSummaryWorkspace.listBillingSummaries",
                "action": "listBillingSummaries",
                "emptyKey": "intent.billingSummaryWorkspace.listBillingSummaries.list.empty",
                "fields": [],
                "columns": [
                  {
                    "id": "intent.billingSummaryWorkspace.listBillingSummaries.list.column.billingSummaries",
                    "field": "billingSummaries",
                    "labelKey": "intent.billingSummaryWorkspace.listBillingSummaries.list.column.billingSummaries.label",
                    "order": 10,
                    "stateKey": "ui.billingSummaryWorkspace.data.listBillingSummaries"
                  },
                  {
                    "id": "intent.billingSummaryWorkspace.listBillingSummaries.list.column.total",
                    "field": "total",
                    "labelKey": "intent.billingSummaryWorkspace.listBillingSummaries.list.column.total.label",
                    "order": 20,
                    "stateKey": "ui.billingSummaryWorkspace.data.listBillingSummaries"
                  }
                ],
                "filters": [
                  {
                    "id": "intent.billingSummaryWorkspace.listBillingSummaries.list.filter.projectId",
                    "field": "projectId",
                    "labelKey": "intent.billingSummaryWorkspace.listBillingSummaries.list.filter.projectId.label",
                    "order": 10,
                    "stateKey": "ui.billingSummaryWorkspace.input.listBillingSummaries.projectId"
                  },
                  {
                    "id": "intent.billingSummaryWorkspace.listBillingSummaries.list.filter.status",
                    "field": "status",
                    "labelKey": "intent.billingSummaryWorkspace.listBillingSummaries.list.filter.status.label",
                    "order": 20,
                    "stateKey": "ui.billingSummaryWorkspace.input.listBillingSummaries.status"
                  },
                  {
                    "id": "intent.billingSummaryWorkspace.listBillingSummaries.list.filter.page",
                    "field": "page",
                    "labelKey": "intent.billingSummaryWorkspace.listBillingSummaries.list.filter.page.label",
                    "order": 30,
                    "stateKey": "ui.billingSummaryWorkspace.input.listBillingSummaries.page"
                  },
                  {
                    "id": "intent.billingSummaryWorkspace.listBillingSummaries.list.filter.pageSize",
                    "field": "pageSize",
                    "labelKey": "intent.billingSummaryWorkspace.listBillingSummaries.list.filter.pageSize.label",
                    "order": 40,
                    "stateKey": "ui.billingSummaryWorkspace.input.listBillingSummaries.pageSize"
                  }
                ],
                "toolbar": [],
                "rowActions": [],
                "actions": [],
                "stateKey": "ui.billingSummaryWorkspace.data.listBillingSummaries"
              }
            ],
            "displayHint": "master-detail"
          },
          {
            "id": "org-billing-summary-detail",
            "type": "commandForm",
            "organismName": "BillingSummaryDetailPanel",
            "titleKey": "organism.billingSummaryWorkspace.shareBillingSummaryCmd.title",
            "purpose": "Shows the full cost breakdown (labor, material, change-order, total) and lifecycle status of the selected billing summary; provides the 'Share with Client' transition button when the summary is in draft status.",
            "userActions": [
              "shareBillingSummaryCmd"
            ],
            "requiredEntities": [],
            "readsFields": [],
            "writesFields": [],
            "rulesApplied": [
              "billingSummaryClientFacing",
              "clientBillingAccess"
            ],
            "order": 20,
            "intentions": [
              {
                "id": "intent.billingSummaryWorkspace.shareBillingSummaryCmd.form",
                "intent": "commandForm",
                "order": 10,
                "titleKey": "intent.billingSummaryWorkspace.shareBillingSummaryCmd.form.title",
                "source": "bff.shareBillingSummaryCmd",
                "binding": "binding.billingSummaryWorkspace.shareBillingSummaryCmd",
                "submitAction": "shareBillingSummaryCmd",
                "fields": [
                  {
                    "id": "intent.billingSummaryWorkspace.shareBillingSummaryCmd.form.field.status",
                    "field": "status",
                    "labelKey": "intent.billingSummaryWorkspace.shareBillingSummaryCmd.form.field.status.label",
                    "order": 10,
                    "stateKey": "ui.billingSummaryWorkspace.input.shareBillingSummaryCmd.status"
                  }
                ],
                "columns": [],
                "filters": [],
                "toolbar": [],
                "rowActions": [],
                "actions": [
                  {
                    "id": "intent.billingSummaryWorkspace.shareBillingSummaryCmd.form.action.shareBillingSummaryCmd",
                    "action": "shareBillingSummaryCmd",
                    "labelKey": "intent.billingSummaryWorkspace.shareBillingSummaryCmd.form.action.shareBillingSummaryCmd",
                    "order": 10,
                    "actionKey": "shareBillingSummaryCmd"
                  }
                ]
              }
            ],
            "displayHint": "contextual-transition-actions"
          },
          {
            "id": "org-create-billing-summary",
            "type": "commandForm",
            "organismName": "CreateBillingSummaryForm",
            "titleKey": "organism.billingSummaryWorkspace.createBillingSummaryCmd.title",
            "purpose": "Inline form to create a new billing summary for the current project by selecting only the billing period start and end dates; projectId is derived from the route and never shown as an input.",
            "userActions": [
              "createBillingSummaryCmd"
            ],
            "requiredEntities": [],
            "readsFields": [],
            "writesFields": [],
            "rulesApplied": [
              "onlyApprovedChangeOrdersAffectCosting",
              "billingSummaryClientFacing"
            ],
            "order": 30,
            "intentions": [
              {
                "id": "intent.billingSummaryWorkspace.createBillingSummaryCmd.form",
                "intent": "commandForm",
                "order": 10,
                "titleKey": "intent.billingSummaryWorkspace.createBillingSummaryCmd.form.title",
                "source": "bff.createBillingSummaryCmd",
                "binding": "binding.billingSummaryWorkspace.createBillingSummaryCmd",
                "submitAction": "createBillingSummaryCmd",
                "fields": [
                  {
                    "id": "intent.billingSummaryWorkspace.createBillingSummaryCmd.form.field.periodStart",
                    "field": "periodStart",
                    "labelKey": "intent.billingSummaryWorkspace.createBillingSummaryCmd.form.field.periodStart.label",
                    "order": 10,
                    "stateKey": "ui.billingSummaryWorkspace.input.createBillingSummaryCmd.periodStart"
                  },
                  {
                    "id": "intent.billingSummaryWorkspace.createBillingSummaryCmd.form.field.periodEnd",
                    "field": "periodEnd",
                    "labelKey": "intent.billingSummaryWorkspace.createBillingSummaryCmd.form.field.periodEnd.label",
                    "order": 20,
                    "stateKey": "ui.billingSummaryWorkspace.input.createBillingSummaryCmd.periodEnd"
                  }
                ],
                "columns": [],
                "filters": [],
                "toolbar": [],
                "rowActions": [],
                "actions": [
                  {
                    "id": "intent.billingSummaryWorkspace.createBillingSummaryCmd.form.action.createBillingSummaryCmd",
                    "action": "createBillingSummaryCmd",
                    "labelKey": "intent.billingSummaryWorkspace.createBillingSummaryCmd.form.action.createBillingSummaryCmd",
                    "order": 10,
                    "actionKey": "createBillingSummaryCmd"
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
      "id": "binding.billingSummaryWorkspace.listBillingSummaries",
      "source": "bff.listBillingSummaries",
      "command": "listBillingSummaries",
      "description": "Browse billing summaries",
      "stateKey": "ui.billingSummaryWorkspace.data.listBillingSummaries",
      "inputStateKeys": [
        "ui.billingSummaryWorkspace.input.listBillingSummaries.projectId",
        "ui.billingSummaryWorkspace.input.listBillingSummaries.status",
        "ui.billingSummaryWorkspace.input.listBillingSummaries.page",
        "ui.billingSummaryWorkspace.input.listBillingSummaries.pageSize"
      ]
    },
    {
      "id": "binding.billingSummaryWorkspace.createBillingSummaryCmd",
      "source": "bff.createBillingSummaryCmd",
      "command": "createBillingSummaryCmd",
      "description": "Create billing summary",
      "stateKey": "ui.billingSummaryWorkspace.output.createBillingSummaryCmd",
      "inputStateKeys": [
        "ui.billingSummaryWorkspace.input.createBillingSummaryCmd.projectId",
        "ui.billingSummaryWorkspace.input.createBillingSummaryCmd.periodStart",
        "ui.billingSummaryWorkspace.input.createBillingSummaryCmd.periodEnd"
      ]
    },
    {
      "id": "binding.billingSummaryWorkspace.shareBillingSummaryCmd",
      "source": "bff.shareBillingSummaryCmd",
      "command": "shareBillingSummaryCmd",
      "description": "Share billing summary with client",
      "stateKey": "ui.billingSummaryWorkspace.output.shareBillingSummaryCmd",
      "inputStateKeys": [
        "ui.billingSummaryWorkspace.input.shareBillingSummaryCmd.billingSummaryId",
        "ui.billingSummaryWorkspace.input.shareBillingSummaryCmd.status"
      ]
    }
  ]
};

export const pipeline = [
  {
    "id": "billingSummaryWorkspace__page21__l2_page",
    "type": "l2_page",
    "outputPath": "_102045_/l2/buildFlowFsm/web/desktop/page21/billingSummaryWorkspace.ts",
    "defPath": "_102045_/l2/buildFlowFsm/web/desktop/page21/billingSummaryWorkspace.defs.ts",
    "dependsFiles": [
      "_102045_/l2/buildFlowFsm/web/shared/billingSummaryWorkspace.ts",
      "_102045_/l2/designSystem.ts"
    ],
    "dependsOn": [
      "billingSummaryWorkspace__l2_shared"
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
