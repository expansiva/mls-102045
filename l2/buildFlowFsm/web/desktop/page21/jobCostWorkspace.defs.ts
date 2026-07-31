/// <mls fileReference="_102045_/l2/buildFlowFsm/web/desktop/page21/jobCostWorkspace.defs.ts" enhancement="_blank"/>

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
      "id": "section.jobCostWorkspace.sec-project-header",
      "type": "section",
      "sectionName": "Project Identity",
      "titleKey": "section.jobCostWorkspace.sec-project-header.title",
      "mode": "view",
      "order": 10,
      "organisms": [
        {
          "id": "org-project-identity-header",
          "type": "queryResult",
          "organismName": "ProjectIdentityHeader",
          "titleKey": "organism.jobCostWorkspace.viewJobCostSummary.title",
          "purpose": "Displays the project name, client name, lifecycle status, and date range so billing staff immediately knows which project they are reviewing and its current state.",
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
        }
      ]
    },
    {
      "id": "section.jobCostWorkspace.sec-cost-summary",
      "type": "section",
      "sectionName": "Cost Summary",
      "titleKey": "section.jobCostWorkspace.sec-cost-summary.title",
      "mode": "view",
      "order": 20,
      "organisms": [
        {
          "id": "org-budget-variance-hero",
          "type": "queryResult",
          "organismName": "BudgetVarianceHero",
          "titleKey": "organism.jobCostWorkspace.viewJobCostSummary.title",
          "purpose": "Leads with the budget amount, total actual cost, and budget variance as prominent metric cards — the decisive numbers billing staff need to determine billing readiness at a glance.",
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
              "id": "intent.jobCostWorkspace.viewJobCostSummary.list2",
              "intent": "queryList",
              "stateKey": "ui.jobCostWorkspace.data.viewJobCostSummary",
              "action": "viewJobCostSummary",
              "order": 10
            }
          ]
        },
        {
          "id": "org-cost-breakdown-panel",
          "type": "queryResult",
          "organismName": "CostBreakdownPanel",
          "titleKey": "organism.jobCostWorkspace.viewJobCostSummary.title",
          "purpose": "Shows the three cost components — laborCost, materialCost, and changeOrderCost — as a structured breakdown so billing staff can identify which category is driving the total.",
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
              "id": "intent.jobCostWorkspace.viewJobCostSummary.list3",
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
  "templateId": "goal_first",
  "visualStyle": "Desktop-first for PM and billing staff with mobile-optimized field entry; dashboard-driven, status-aware, touch-friendly UI with Gantt-ish timeline views.",
  "pageObjective": {
    "actor": "Billing staff",
    "jobToBeDone": "Review the complete accumulated job cost breakdown for a specific project — labor, materials, and change orders — against the approved budget before preparing billing documents.",
    "primaryDecision": "Is the project's total actual cost within budget, and are the cost components (labor, material, change orders) accurate enough to proceed with billing?",
    "decisiveInfo": [
      "name",
      "clientName",
      "status",
      "budget",
      "laborCost",
      "materialCost",
      "changeOrderCost",
      "totalCost",
      "budgetVariance",
      "startDate",
      "endDate"
    ],
    "usageFrequency": "Occasional / back-office — triggered per billing cycle for a specific project, navigated to via route param (projectId).",
    "criticalActions": [
      {
        "action": "viewJobCostSummary",
        "presentation": "summary-first — auto-loads on page entry via route param; cost figures displayed as prominent metric cards with budget variance highlighted; no manual trigger needed"
      }
    ],
    "informationHierarchy": [
      "1. Project identity header: name, client, status, date range",
      "2. Budget vs. total cost variance — the decisive number (prominent, visually flagged if over budget)",
      "3. Cost breakdown: labor cost, material cost, change order cost",
      "4. Supporting context: budget amount, project lifecycle status"
    ],
    "successCriteria": "Billing staff can immediately see whether the project is over or under budget and understand which cost category is driving the variance, without navigating away or performing any manual input.",
    "antiPatterns": [
      "Exposing projectId as a typed input — it is a route param, always context-derived",
      "Rendering cost fields as editable inputs — all costs are computed outputs",
      "Showing status as a <select> — it is a read-only lifecycle output",
      "Splitting the summary into multiple separate form sections",
      "Hiding the budget variance — it is the most decisive number and must lead"
    ]
  },
  "layout": {
    "id": "jobCostWorkspace-page21-goal-first",
    "type": "page",
    "sections": [
      {
        "id": "section.jobCostWorkspace.sec-project-header",
        "type": "section",
        "sectionName": "Project Identity",
        "titleKey": "section.jobCostWorkspace.sec-project-header.title",
        "mode": "view",
        "order": 10,
        "organisms": [
          {
            "id": "org-project-identity-header",
            "type": "queryResult",
            "organismName": "ProjectIdentityHeader",
            "titleKey": "organism.jobCostWorkspace.viewJobCostSummary.title",
            "purpose": "Displays the project name, client name, lifecycle status, and date range so billing staff immediately knows which project they are reviewing and its current state.",
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
            "displayHint": "summary-first"
          }
        ]
      },
      {
        "id": "section.jobCostWorkspace.sec-cost-summary",
        "type": "section",
        "sectionName": "Cost Summary",
        "titleKey": "section.jobCostWorkspace.sec-cost-summary.title",
        "mode": "view",
        "order": 20,
        "organisms": [
          {
            "id": "org-budget-variance-hero",
            "type": "queryResult",
            "organismName": "BudgetVarianceHero",
            "titleKey": "organism.jobCostWorkspace.viewJobCostSummary.title",
            "purpose": "Leads with the budget amount, total actual cost, and budget variance as prominent metric cards — the decisive numbers billing staff need to determine billing readiness at a glance.",
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
          },
          {
            "id": "org-cost-breakdown-panel",
            "type": "queryResult",
            "organismName": "CostBreakdownPanel",
            "titleKey": "organism.jobCostWorkspace.viewJobCostSummary.title",
            "purpose": "Shows the three cost components — laborCost, materialCost, and changeOrderCost — as a structured breakdown so billing staff can identify which category is driving the total.",
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
                "id": "intent.jobCostWorkspace.viewJobCostSummary.list3",
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
    "id": "jobCostWorkspace__page21__l2_page",
    "type": "l2_page",
    "outputPath": "_102045_/l2/buildFlowFsm/web/desktop/page21/jobCostWorkspace.ts",
    "defPath": "_102045_/l2/buildFlowFsm/web/desktop/page21/jobCostWorkspace.defs.ts",
    "dependsFiles": [
      "_102045_/l2/buildFlowFsm/web/shared/jobCostWorkspace.ts",
      "_102045_/l2/designSystem.ts"
    ],
    "dependsOn": [
      "jobCostWorkspace__l2_shared"
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
