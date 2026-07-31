/// <mls fileReference="_102045_/l2/buildFlowFsm/web/desktop/page11/jobCostWorkspace.defs.ts" enhancement="_blank"/>

export const definition = {
  "pageId": "jobCostWorkspace",
  "pageName": "Job Cost Summary",
  "baseClassName": "BuildFlowFsmJobCostWorkspaceBase",
  "actor": "billingStaff",
  "purpose": "Executar Job Cost Summary.",
  "capabilities": [
    "viewJobCostSummary"
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
    "workspaceId": "jobCostWorkspace",
    "workspaceKind": "operation",
    "actor": "billingStaff",
    "entity": "Project",
    "owners": [
      {
        "kind": "operation",
        "id": "viewJobCostSummary",
        "defPath": "_102045_/l4/buildFlowFsm/operations/viewJobCostSummary.defs.ts"
      }
    ],
    "microUserFlow": {
      "source": "l4/story.steps",
      "workflowSteps": [],
      "operations": [
        {
          "operationId": "viewJobCostSummary",
          "commandName": "viewJobCostSummary",
          "steps": [
            "Open the job cost summary for a selected project",
            "See project identity, budget, and lifecycle status",
            "Review aggregated labor cost from non-voided time logs",
            "Review aggregated material cost from non-voided material usage",
            "Review aggregated cost from approved change orders",
            "Compare total actual cost to the project budget"
          ]
        }
      ]
    }
  },
  "pageInputs": [],
  "navigationRefs": [],
  "sections": [
    {
      "id": "section.jobCostWorkspace.sec-costSummary",
      "type": "section",
      "sectionName": "Cost Summary",
      "titleKey": "section.jobCostWorkspace.sec-costSummary.title",
      "mode": "view",
      "order": 10,
      "organisms": [
        {
          "id": "org-projectIdentityPanel",
          "type": "queryResult",
          "organismName": "ProjectIdentityPanel",
          "titleKey": "organism.jobCostWorkspace.viewJobCostSummary.title",
          "purpose": "Shows the project's identity (name, client, status, start/end dates) so billing staff can confirm they are reviewing the correct project before examining costs.",
          "userActions": [
            "viewJobCostSummary"
          ],
          "requiredEntities": [],
          "readsFields": [],
          "writesFields": [],
          "rulesApplied": [
            "jobCostingRequiresBudgetAndSchedule"
          ],
          "order": 10,
          "intentionRefs": [
            {
              "id": "intent.jobCostWorkspace.viewJobCostSummary.list",
              "intent": "queryList",
              "stateKey": "ui.jobCostWorkspace.data.viewJobCostSummary",
              "action": "viewJobCostSummary",
              "order": 10
            }
          ]
        },
        {
          "id": "org-budgetVsCostSummary",
          "type": "queryResult",
          "organismName": "BudgetVsCostSummary",
          "titleKey": "organism.jobCostWorkspace.viewJobCostSummary.title",
          "purpose": "Presents the aggregated cost breakdown — labor, material, change-order, total — alongside the original budget and budget variance so billing staff can immediately assess financial health before preparing billing documents.",
          "userActions": [
            "viewJobCostSummary"
          ],
          "requiredEntities": [],
          "readsFields": [],
          "writesFields": [],
          "rulesApplied": [
            "jobCostingRequiresBudgetAndSchedule"
          ],
          "order": 20,
          "intentionRefs": [
            {
              "id": "intent.jobCostWorkspace.viewJobCostSummary.list2",
              "intent": "queryList",
              "stateKey": "ui.jobCostWorkspace.data.viewJobCostSummary",
              "action": "viewJobCostSummary",
              "order": 10
            }
          ]
        }
      ]
    }
  ],
  "templateId": "split_detail",
  "visualStyle": "Desktop-first for PM and billing staff with mobile-optimized field entry; dashboard-driven, status-aware, touch-friendly UI with Gantt-ish timeline views.",
  "layout": {
    "id": "cfe-20260731060448.1000",
    "type": "page",
    "sections": [
      {
        "id": "section.jobCostWorkspace.sec-costSummary",
        "type": "section",
        "sectionName": "Cost Summary",
        "titleKey": "section.jobCostWorkspace.sec-costSummary.title",
        "mode": "view",
        "order": 10,
        "organisms": [
          {
            "id": "org-projectIdentityPanel",
            "type": "queryResult",
            "organismName": "ProjectIdentityPanel",
            "titleKey": "organism.jobCostWorkspace.viewJobCostSummary.title",
            "purpose": "Shows the project's identity (name, client, status, start/end dates) so billing staff can confirm they are reviewing the correct project before examining costs.",
            "userActions": [
              "viewJobCostSummary"
            ],
            "requiredEntities": [],
            "readsFields": [],
            "writesFields": [],
            "rulesApplied": [
              "jobCostingRequiresBudgetAndSchedule"
            ],
            "order": 10,
            "intentions": [
              {
                "id": "intent.jobCostWorkspace.viewJobCostSummary.list",
                "intent": "queryList",
                "order": 10,
                "titleKey": "intent.jobCostWorkspace.viewJobCostSummary.list.title",
                "source": "bff.viewJobCostSummary",
                "binding": "binding.jobCostWorkspace.viewJobCostSummary",
                "action": "viewJobCostSummary",
                "emptyKey": "intent.jobCostWorkspace.viewJobCostSummary.list.empty",
                "fields": [],
                "columns": [
                  {
                    "id": "intent.jobCostWorkspace.viewJobCostSummary.list.column.projectId",
                    "field": "projectId",
                    "labelKey": "intent.jobCostWorkspace.viewJobCostSummary.list.column.projectId.label",
                    "order": 10,
                    "stateKey": "ui.jobCostWorkspace.data.viewJobCostSummary"
                  },
                  {
                    "id": "intent.jobCostWorkspace.viewJobCostSummary.list.column.name",
                    "field": "name",
                    "labelKey": "intent.jobCostWorkspace.viewJobCostSummary.list.column.name.label",
                    "order": 20,
                    "stateKey": "ui.jobCostWorkspace.data.viewJobCostSummary"
                  },
                  {
                    "id": "intent.jobCostWorkspace.viewJobCostSummary.list.column.clientId",
                    "field": "clientId",
                    "labelKey": "intent.jobCostWorkspace.viewJobCostSummary.list.column.clientId.label",
                    "order": 30,
                    "stateKey": "ui.jobCostWorkspace.data.viewJobCostSummary"
                  },
                  {
                    "id": "intent.jobCostWorkspace.viewJobCostSummary.list.column.clientName",
                    "field": "clientName",
                    "labelKey": "intent.jobCostWorkspace.viewJobCostSummary.list.column.clientName.label",
                    "order": 40,
                    "stateKey": "ui.jobCostWorkspace.data.viewJobCostSummary"
                  },
                  {
                    "id": "intent.jobCostWorkspace.viewJobCostSummary.list.column.budget",
                    "field": "budget",
                    "labelKey": "intent.jobCostWorkspace.viewJobCostSummary.list.column.budget.label",
                    "order": 50,
                    "stateKey": "ui.jobCostWorkspace.data.viewJobCostSummary"
                  },
                  {
                    "id": "intent.jobCostWorkspace.viewJobCostSummary.list.column.status",
                    "field": "status",
                    "labelKey": "intent.jobCostWorkspace.viewJobCostSummary.list.column.status.label",
                    "order": 60,
                    "stateKey": "ui.jobCostWorkspace.data.viewJobCostSummary"
                  },
                  {
                    "id": "intent.jobCostWorkspace.viewJobCostSummary.list.column.startDate",
                    "field": "startDate",
                    "labelKey": "intent.jobCostWorkspace.viewJobCostSummary.list.column.startDate.label",
                    "order": 70,
                    "stateKey": "ui.jobCostWorkspace.data.viewJobCostSummary"
                  },
                  {
                    "id": "intent.jobCostWorkspace.viewJobCostSummary.list.column.endDate",
                    "field": "endDate",
                    "labelKey": "intent.jobCostWorkspace.viewJobCostSummary.list.column.endDate.label",
                    "order": 80,
                    "stateKey": "ui.jobCostWorkspace.data.viewJobCostSummary"
                  },
                  {
                    "id": "intent.jobCostWorkspace.viewJobCostSummary.list.column.laborCost",
                    "field": "laborCost",
                    "labelKey": "intent.jobCostWorkspace.viewJobCostSummary.list.column.laborCost.label",
                    "order": 90,
                    "stateKey": "ui.jobCostWorkspace.data.viewJobCostSummary"
                  },
                  {
                    "id": "intent.jobCostWorkspace.viewJobCostSummary.list.column.materialCost",
                    "field": "materialCost",
                    "labelKey": "intent.jobCostWorkspace.viewJobCostSummary.list.column.materialCost.label",
                    "order": 100,
                    "stateKey": "ui.jobCostWorkspace.data.viewJobCostSummary"
                  },
                  {
                    "id": "intent.jobCostWorkspace.viewJobCostSummary.list.column.changeOrderCost",
                    "field": "changeOrderCost",
                    "labelKey": "intent.jobCostWorkspace.viewJobCostSummary.list.column.changeOrderCost.label",
                    "order": 110,
                    "stateKey": "ui.jobCostWorkspace.data.viewJobCostSummary"
                  },
                  {
                    "id": "intent.jobCostWorkspace.viewJobCostSummary.list.column.totalCost",
                    "field": "totalCost",
                    "labelKey": "intent.jobCostWorkspace.viewJobCostSummary.list.column.totalCost.label",
                    "order": 120,
                    "stateKey": "ui.jobCostWorkspace.data.viewJobCostSummary"
                  },
                  {
                    "id": "intent.jobCostWorkspace.viewJobCostSummary.list.column.budgetVariance",
                    "field": "budgetVariance",
                    "labelKey": "intent.jobCostWorkspace.viewJobCostSummary.list.column.budgetVariance.label",
                    "order": 130,
                    "stateKey": "ui.jobCostWorkspace.data.viewJobCostSummary"
                  }
                ],
                "filters": [],
                "toolbar": [],
                "rowActions": [],
                "actions": [],
                "stateKey": "ui.jobCostWorkspace.data.viewJobCostSummary"
              }
            ],
            "displayHint": "detail"
          },
          {
            "id": "org-budgetVsCostSummary",
            "type": "queryResult",
            "organismName": "BudgetVsCostSummary",
            "titleKey": "organism.jobCostWorkspace.viewJobCostSummary.title",
            "purpose": "Presents the aggregated cost breakdown — labor, material, change-order, total — alongside the original budget and budget variance so billing staff can immediately assess financial health before preparing billing documents.",
            "userActions": [
              "viewJobCostSummary"
            ],
            "requiredEntities": [],
            "readsFields": [],
            "writesFields": [],
            "rulesApplied": [
              "jobCostingRequiresBudgetAndSchedule"
            ],
            "order": 20,
            "intentions": [
              {
                "id": "intent.jobCostWorkspace.viewJobCostSummary.list2",
                "intent": "queryList",
                "order": 10,
                "titleKey": "intent.jobCostWorkspace.viewJobCostSummary.list.title",
                "source": "bff.viewJobCostSummary",
                "binding": "binding.jobCostWorkspace.viewJobCostSummary",
                "action": "viewJobCostSummary",
                "emptyKey": "intent.jobCostWorkspace.viewJobCostSummary.list.empty",
                "fields": [],
                "columns": [
                  {
                    "id": "intent.jobCostWorkspace.viewJobCostSummary.list.column.projectId",
                    "field": "projectId",
                    "labelKey": "intent.jobCostWorkspace.viewJobCostSummary.list.column.projectId.label",
                    "order": 10,
                    "stateKey": "ui.jobCostWorkspace.data.viewJobCostSummary"
                  },
                  {
                    "id": "intent.jobCostWorkspace.viewJobCostSummary.list.column.name",
                    "field": "name",
                    "labelKey": "intent.jobCostWorkspace.viewJobCostSummary.list.column.name.label",
                    "order": 20,
                    "stateKey": "ui.jobCostWorkspace.data.viewJobCostSummary"
                  },
                  {
                    "id": "intent.jobCostWorkspace.viewJobCostSummary.list.column.clientId",
                    "field": "clientId",
                    "labelKey": "intent.jobCostWorkspace.viewJobCostSummary.list.column.clientId.label",
                    "order": 30,
                    "stateKey": "ui.jobCostWorkspace.data.viewJobCostSummary"
                  },
                  {
                    "id": "intent.jobCostWorkspace.viewJobCostSummary.list.column.clientName",
                    "field": "clientName",
                    "labelKey": "intent.jobCostWorkspace.viewJobCostSummary.list.column.clientName.label",
                    "order": 40,
                    "stateKey": "ui.jobCostWorkspace.data.viewJobCostSummary"
                  },
                  {
                    "id": "intent.jobCostWorkspace.viewJobCostSummary.list.column.budget",
                    "field": "budget",
                    "labelKey": "intent.jobCostWorkspace.viewJobCostSummary.list.column.budget.label",
                    "order": 50,
                    "stateKey": "ui.jobCostWorkspace.data.viewJobCostSummary"
                  },
                  {
                    "id": "intent.jobCostWorkspace.viewJobCostSummary.list.column.status",
                    "field": "status",
                    "labelKey": "intent.jobCostWorkspace.viewJobCostSummary.list.column.status.label",
                    "order": 60,
                    "stateKey": "ui.jobCostWorkspace.data.viewJobCostSummary"
                  },
                  {
                    "id": "intent.jobCostWorkspace.viewJobCostSummary.list.column.startDate",
                    "field": "startDate",
                    "labelKey": "intent.jobCostWorkspace.viewJobCostSummary.list.column.startDate.label",
                    "order": 70,
                    "stateKey": "ui.jobCostWorkspace.data.viewJobCostSummary"
                  },
                  {
                    "id": "intent.jobCostWorkspace.viewJobCostSummary.list.column.endDate",
                    "field": "endDate",
                    "labelKey": "intent.jobCostWorkspace.viewJobCostSummary.list.column.endDate.label",
                    "order": 80,
                    "stateKey": "ui.jobCostWorkspace.data.viewJobCostSummary"
                  },
                  {
                    "id": "intent.jobCostWorkspace.viewJobCostSummary.list.column.laborCost",
                    "field": "laborCost",
                    "labelKey": "intent.jobCostWorkspace.viewJobCostSummary.list.column.laborCost.label",
                    "order": 90,
                    "stateKey": "ui.jobCostWorkspace.data.viewJobCostSummary"
                  },
                  {
                    "id": "intent.jobCostWorkspace.viewJobCostSummary.list.column.materialCost",
                    "field": "materialCost",
                    "labelKey": "intent.jobCostWorkspace.viewJobCostSummary.list.column.materialCost.label",
                    "order": 100,
                    "stateKey": "ui.jobCostWorkspace.data.viewJobCostSummary"
                  },
                  {
                    "id": "intent.jobCostWorkspace.viewJobCostSummary.list.column.changeOrderCost",
                    "field": "changeOrderCost",
                    "labelKey": "intent.jobCostWorkspace.viewJobCostSummary.list.column.changeOrderCost.label",
                    "order": 110,
                    "stateKey": "ui.jobCostWorkspace.data.viewJobCostSummary"
                  },
                  {
                    "id": "intent.jobCostWorkspace.viewJobCostSummary.list.column.totalCost",
                    "field": "totalCost",
                    "labelKey": "intent.jobCostWorkspace.viewJobCostSummary.list.column.totalCost.label",
                    "order": 120,
                    "stateKey": "ui.jobCostWorkspace.data.viewJobCostSummary"
                  },
                  {
                    "id": "intent.jobCostWorkspace.viewJobCostSummary.list.column.budgetVariance",
                    "field": "budgetVariance",
                    "labelKey": "intent.jobCostWorkspace.viewJobCostSummary.list.column.budgetVariance.label",
                    "order": 130,
                    "stateKey": "ui.jobCostWorkspace.data.viewJobCostSummary"
                  }
                ],
                "filters": [],
                "toolbar": [],
                "rowActions": [],
                "actions": [],
                "stateKey": "ui.jobCostWorkspace.data.viewJobCostSummary"
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
      "id": "binding.jobCostWorkspace.viewJobCostSummary",
      "source": "bff.viewJobCostSummary",
      "command": "viewJobCostSummary",
      "description": "View job cost summary",
      "stateKey": "ui.jobCostWorkspace.data.viewJobCostSummary",
      "inputStateKeys": [
        "ui.jobCostWorkspace.input.viewJobCostSummary.projectId"
      ]
    }
  ]
};

export const pipeline = [
  {
    "id": "jobCostWorkspace__l2_page",
    "type": "l2_page",
    "outputPath": "_102045_/l2/buildFlowFsm/web/desktop/page11/jobCostWorkspace.ts",
    "defPath": "_102045_/l2/buildFlowFsm/web/desktop/page11/jobCostWorkspace.defs.ts",
    "dependsFiles": [
      "_102045_/l2/buildFlowFsm/web/shared/jobCostWorkspace.ts",
      "_102045_/l2/designSystem.ts"
    ],
    "dependsOn": [
      "jobCostWorkspace__l2_shared"
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
