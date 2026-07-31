/// <mls fileReference="_102045_/l2/buildFlowFsm/web/desktop/page21/projectDetailWorkspace.defs.ts" enhancement="_blank"/>

export const definition = {
  "pageId": "projectDetailWorkspace",
  "pageName": "Project Detail & Timeline",
  "baseClassName": "BuildFlowFsmProjectDetailWorkspaceBase",
  "actor": "projectManager",
  "purpose": "Executar Project Detail & Timeline.",
  "capabilities": [
    "viewProject",
    "queryWorkTasks",
    "queryChangeOrders",
    "viewChangeOrder",
    "queryTimeLogs",
    "queryMaterialUsages",
    "generateDelayRiskSuggestions",
    "queryDelayRiskSuggestions"
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
    "workspaceId": "projectDetailWorkspace",
    "workspaceKind": "operation",
    "actor": "projectManager",
    "entity": "Project",
    "owners": [
      {
        "kind": "operation",
        "id": "viewProject",
        "defPath": "_102045_/l4/buildFlowFsm/operations/viewProject.defs.ts"
      },
      {
        "kind": "operation",
        "id": "queryWorkTasks",
        "defPath": "_102045_/l4/buildFlowFsm/operations/queryWorkTasks.defs.ts"
      },
      {
        "kind": "operation",
        "id": "queryChangeOrders",
        "defPath": "_102045_/l4/buildFlowFsm/operations/queryChangeOrders.defs.ts"
      },
      {
        "kind": "operation",
        "id": "viewChangeOrder",
        "defPath": "_102045_/l4/buildFlowFsm/operations/viewChangeOrder.defs.ts"
      },
      {
        "kind": "operation",
        "id": "queryTimeLogs",
        "defPath": "_102045_/l4/buildFlowFsm/operations/queryTimeLogs.defs.ts"
      },
      {
        "kind": "operation",
        "id": "queryMaterialUsages",
        "defPath": "_102045_/l4/buildFlowFsm/operations/queryMaterialUsages.defs.ts"
      },
      {
        "kind": "operation",
        "id": "generateDelayRiskSuggestions",
        "defPath": "_102045_/l4/buildFlowFsm/operations/generateDelayRiskSuggestions.defs.ts"
      },
      {
        "kind": "operation",
        "id": "queryDelayRiskSuggestions",
        "defPath": "_102045_/l4/buildFlowFsm/operations/queryDelayRiskSuggestions.defs.ts"
      }
    ],
    "microUserFlow": {
      "source": "l4/story.steps",
      "workflowSteps": [],
      "operations": [
        {
          "operationId": "viewProject",
          "commandName": "viewProject",
          "steps": [
            "Navigate to a specific project from the portfolio or dashboard",
            "Load the project record with client and schedule fields",
            "Review the task list and simple timeline against the project dates",
            "Use the detail as the starting point for status reports or further planning"
          ]
        },
        {
          "operationId": "queryWorkTasks",
          "commandName": "queryWorkTasks",
          "steps": [
            "Open the task list, project timeline, or dashboard task panel",
            "Optionally filter by project, status, or assigned worker",
            "Review each task's title, assignee, status, and due date",
            "Identify overdue and upcoming tasks that need attention"
          ]
        },
        {
          "operationId": "queryChangeOrders",
          "commandName": "queryChangeOrders",
          "steps": [
            "Open the change-order list for the selected project",
            "Optionally filter by status or impact type",
            "Review titles, cost and schedule adjustments, and lifecycle status",
            "Select a change order to inspect or advance its approval"
          ]
        },
        {
          "operationId": "viewChangeOrder",
          "commandName": "viewChangeOrder",
          "steps": [
            "Open the selected change order detail",
            "Review title, description, impact type, cost adjustment, schedule impact, and approval status",
            "Compare the cost adjustment against the project budget to assess financial consequence"
          ]
        },
        {
          "operationId": "queryTimeLogs",
          "commandName": "queryTimeLogs",
          "steps": [
            "Open the time logs browse list",
            "Optionally filter by work task, worker name, log date, or status",
            "Review hours worked and labor cost on each entry"
          ]
        },
        {
          "operationId": "queryMaterialUsages",
          "commandName": "queryMaterialUsages",
          "steps": [
            "Open the material usage list for the selected project",
            "Review material name, quantity, unit, unit cost, cost code, usage date, and status of each entry",
            "Optionally filter by status to separate posted costs from voided corrections"
          ]
        },
        {
          "operationId": "generateDelayRiskSuggestions",
          "commandName": "generateDelayRiskSuggestions",
          "steps": [
            "Open or select the status report for the project period under review",
            "Trigger generation of delay-risk suggestions for that status report",
            "System analyzes related work tasks, time logs and material usage against progress and due dates",
            "System creates advisory DelayRiskSuggestion records linked to the status report and flagged tasks without changing task status"
          ]
        },
        {
          "operationId": "queryDelayRiskSuggestions",
          "commandName": "queryDelayRiskSuggestions",
          "steps": [
            "Open the status report under review",
            "Load the AI-generated delay-risk suggestions linked to that report",
            "Inspect each suggestion’s risk level, reason, related work task and optional recommended action",
            "Note that suggestions are advisory only and do not change task status"
          ]
        }
      ]
    }
  },
  "pageInputs": [],
  "navigationRefs": [],
  "sections": [
    {
      "id": "section.projectDetailWorkspace.sec-project-header",
      "type": "section",
      "sectionName": "Project Header",
      "titleKey": "section.projectDetailWorkspace.sec-project-header.title",
      "mode": "view",
      "order": 10,
      "organisms": [
        {
          "id": "org-project-summary",
          "type": "queryResult",
          "organismName": "ProjectSummaryPanel",
          "titleKey": "organism.projectDetailWorkspace.getProjectDetail.title",
          "purpose": "Display the full project record — client, site address, schedule dates, budget, and current lifecycle status — as the read-only anchor that contextualises all downstream analysis.",
          "userActions": [
            "getProjectDetail"
          ],
          "requiredEntities": [],
          "readsFields": [],
          "writesFields": [],
          "rulesApplied": [
            "operationsRequireActiveProject"
          ],
          "order": 10,
          "intentionRefs": [
            {
              "id": "intent.projectDetailWorkspace.getProjectDetail.list",
              "intent": "queryList",
              "stateKey": "ui.projectDetailWorkspace.data.getProjectDetail",
              "action": "getProjectDetail",
              "order": 10
            }
          ]
        }
      ]
    },
    {
      "id": "section.projectDetailWorkspace.sec-task-timeline",
      "type": "section",
      "sectionName": "Work Task Timeline",
      "titleKey": "section.projectDetailWorkspace.sec-task-timeline.title",
      "mode": "view",
      "order": 20,
      "organisms": [
        {
          "id": "org-work-tasks-list",
          "type": "queryResult",
          "organismName": "WorkTasksFilteredList",
          "titleKey": "organism.projectDetailWorkspace.listWorkTasks.title",
          "purpose": "Browse all work tasks for this project with inline status badges and due-date overdue flags; filter by status or assigned worker to surface tasks needing attention.",
          "userActions": [
            "listWorkTasks"
          ],
          "requiredEntities": [],
          "readsFields": [],
          "writesFields": [],
          "rulesApplied": [
            "overdueTaskHighlighting",
            "taskSortingByDueDate"
          ],
          "order": 10,
          "intentionRefs": [
            {
              "id": "intent.projectDetailWorkspace.listWorkTasks.list",
              "intent": "queryList",
              "stateKey": "ui.projectDetailWorkspace.data.listWorkTasks",
              "action": "listWorkTasks",
              "order": 10
            }
          ]
        }
      ]
    },
    {
      "id": "section.projectDetailWorkspace.sec-change-orders",
      "type": "section",
      "sectionName": "Change Orders",
      "titleKey": "section.projectDetailWorkspace.sec-change-orders.title",
      "mode": "view",
      "order": 30,
      "organisms": [
        {
          "id": "org-change-orders-master-detail",
          "type": "queryResult",
          "organismName": "ChangeOrdersMasterDetail",
          "titleKey": "organism.projectDetailWorkspace.listChangeOrders.title",
          "purpose": "List all change orders for this project with cost and schedule adjustment columns; selecting a row opens the full change-order detail — including cost-vs-budget comparison and approval status — in an inline detail panel.",
          "userActions": [
            "listChangeOrders",
            "getChangeOrderDetail"
          ],
          "requiredEntities": [],
          "readsFields": [],
          "writesFields": [],
          "rulesApplied": [
            "onlyApprovedChangeOrdersAffectCosting",
            "jobCostDerivation"
          ],
          "order": 10,
          "intentionRefs": [
            {
              "id": "intent.projectDetailWorkspace.listChangeOrders.list",
              "intent": "queryList",
              "stateKey": "ui.projectDetailWorkspace.data.listChangeOrders",
              "action": "listChangeOrders",
              "order": 10
            },
            {
              "id": "intent.projectDetailWorkspace.getChangeOrderDetail.list",
              "intent": "queryList",
              "stateKey": "ui.projectDetailWorkspace.data.getChangeOrderDetail",
              "action": "getChangeOrderDetail",
              "order": 10
            }
          ]
        }
      ]
    },
    {
      "id": "section.projectDetailWorkspace.sec-cost-tracking",
      "type": "section",
      "sectionName": "Cost Tracking",
      "titleKey": "section.projectDetailWorkspace.sec-cost-tracking.title",
      "mode": "view",
      "order": 40,
      "organisms": [
        {
          "id": "org-time-logs-list",
          "type": "queryResult",
          "organismName": "TimeLogsFilteredList",
          "titleKey": "organism.projectDetailWorkspace.listTimeLogs.title",
          "purpose": "Browse labor time logs filtered by work task, worker name, log date, or status to understand hours worked and labor cost incurred on this project.",
          "userActions": [
            "listTimeLogs"
          ],
          "requiredEntities": [],
          "readsFields": [],
          "writesFields": [],
          "rulesApplied": [
            "jobCostDerivation",
            "timeLogLinkingRequired"
          ],
          "order": 10,
          "intentionRefs": [
            {
              "id": "intent.projectDetailWorkspace.listTimeLogs.list",
              "intent": "queryList",
              "stateKey": "ui.projectDetailWorkspace.data.listTimeLogs",
              "action": "listTimeLogs",
              "order": 10
            }
          ]
        },
        {
          "id": "org-material-usages-list",
          "type": "queryResult",
          "organismName": "MaterialUsagesFilteredList",
          "titleKey": "organism.projectDetailWorkspace.listMaterialUsages.title",
          "purpose": "Browse material usage entries for this project, filtered by status to separate posted costs from voided corrections, showing material name, quantity, unit cost, and cost code.",
          "userActions": [
            "listMaterialUsages"
          ],
          "requiredEntities": [],
          "readsFields": [],
          "writesFields": [],
          "rulesApplied": [
            "jobCostDerivation",
            "materialUsageIsProjectLevel"
          ],
          "order": 20,
          "intentionRefs": [
            {
              "id": "intent.projectDetailWorkspace.listMaterialUsages.list",
              "intent": "queryList",
              "stateKey": "ui.projectDetailWorkspace.data.listMaterialUsages",
              "action": "listMaterialUsages",
              "order": 10
            }
          ]
        }
      ]
    },
    {
      "id": "section.projectDetailWorkspace.sec-delay-risk-insights",
      "type": "section",
      "sectionName": "Delay-Risk Insights",
      "titleKey": "section.projectDetailWorkspace.sec-delay-risk-insights.title",
      "mode": "edit",
      "order": 50,
      "organisms": [
        {
          "id": "org-delay-risk-trigger",
          "type": "commandForm",
          "organismName": "DelayRiskTriggerAction",
          "titleKey": "organism.projectDetailWorkspace.triggerDelayRiskSuggestions.title",
          "purpose": "Allow the PM to trigger AI delay-risk suggestion generation for the current status report via a primary action button; statusReportId is derived from the selected status report context, never typed.",
          "userActions": [
            "triggerDelayRiskSuggestions"
          ],
          "requiredEntities": [],
          "readsFields": [],
          "writesFields": [],
          "rulesApplied": [
            "delayRiskSuggestionsAdvisory"
          ],
          "order": 10,
          "intentionRefs": [
            {
              "id": "intent.projectDetailWorkspace.triggerDelayRiskSuggestions.form",
              "intent": "commandForm",
              "submitAction": "triggerDelayRiskSuggestions",
              "order": 10
            }
          ]
        },
        {
          "id": "org-delay-risk-suggestions-list",
          "type": "queryResult",
          "organismName": "DelayRiskSuggestionsList",
          "titleKey": "organism.projectDetailWorkspace.listDelayRiskSuggestions.title",
          "purpose": "Display AI-generated delay-risk suggestions for the selected status report, showing risk level, related work task, reason, and suggested action; filterable by acknowledged state.",
          "userActions": [
            "listDelayRiskSuggestions"
          ],
          "requiredEntities": [],
          "readsFields": [],
          "writesFields": [],
          "rulesApplied": [
            "delayRiskSuggestionsAdvisory"
          ],
          "order": 20,
          "intentionRefs": [
            {
              "id": "intent.projectDetailWorkspace.listDelayRiskSuggestions.list",
              "intent": "queryList",
              "stateKey": "ui.projectDetailWorkspace.data.listDelayRiskSuggestions",
              "action": "listDelayRiskSuggestions",
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
    "actor": "Project Manager",
    "jobToBeDone": "Review the full project record, track task and cost progress, inspect change orders, and generate or review AI delay-risk suggestions — all from a single workspace anchored to the project.",
    "primaryDecision": "Is this project on track? — assessed by reading project status + schedule, scanning overdue tasks, reviewing cost exposure from time logs and materials, and acting on delay-risk suggestions.",
    "decisiveInfo": [
      "name, status, budget, startDate, endDate, siteAddress, clientName (getProjectDetail)",
      "workTasks: title, assignee, status, dueDate (listWorkTasks)",
      "changeOrders: title, costAdjustment, scheduleAdjustmentDays, status, impactType (listChangeOrders)",
      "changeOrderDetail: costAdjustment vs projectBudget, approvalStatus (getChangeOrderDetail)",
      "timeLogs: hoursWorked, laborCost, workerName, logDate, status (listTimeLogs)",
      "materialUsages: materialName, quantity, unitCost, status (listMaterialUsages)",
      "delayRiskSuggestions: riskLevel, reason, workTaskTitle, suggestedAction (listDelayRiskSuggestions)"
    ],
    "usageFrequency": "Frequent / daily — PM opens this page at the start of each work session to assess project health and act on risks.",
    "criticalActions": [
      {
        "action": "triggerDelayRiskSuggestions",
        "presentation": "primary-button within the delay-risk panel, contextual to the selected status report"
      },
      {
        "action": "listDelayRiskSuggestions",
        "presentation": "inline list with acknowledged filter toggle, rendered after trigger completes"
      },
      {
        "action": "getChangeOrderDetail",
        "presentation": "master-detail — selecting a change order row opens the detail panel inline"
      }
    ],
    "informationHierarchy": [
      "1. Project header — identity, status, schedule, budget (anchor for all analysis)",
      "2. Work task timeline — filterable list of tasks with status and due-date signals",
      "3. Change orders — filterable list + inline detail panel for cost/schedule impact",
      "4. Cost tracking — time logs (labor) and material usages (materials) side by side",
      "5. Delay-risk insights — AI suggestions triggered per status report, reviewed inline"
    ],
    "successCriteria": "PM can assess project health, spot overdue tasks, understand cost exposure from change orders and actuals, and generate + review delay-risk suggestions without leaving the page.",
    "antiPatterns": [
      "Separate full-page form for triggering delay-risk suggestions",
      "Status fields rendered as free <select> inputs",
      "Manually typed projectId, changeOrderId, or statusReportId fields",
      "One independent section per query with no grouping by analytical theme",
      "Hiding the change order detail behind a navigation away from the list"
    ]
  },
  "layout": {
    "id": "page21-goal-first",
    "type": "page",
    "sections": [
      {
        "id": "section.projectDetailWorkspace.sec-project-header",
        "type": "section",
        "sectionName": "Project Header",
        "titleKey": "section.projectDetailWorkspace.sec-project-header.title",
        "mode": "view",
        "order": 10,
        "organisms": [
          {
            "id": "org-project-summary",
            "type": "queryResult",
            "organismName": "ProjectSummaryPanel",
            "titleKey": "organism.projectDetailWorkspace.getProjectDetail.title",
            "purpose": "Display the full project record — client, site address, schedule dates, budget, and current lifecycle status — as the read-only anchor that contextualises all downstream analysis.",
            "userActions": [
              "getProjectDetail"
            ],
            "requiredEntities": [],
            "readsFields": [],
            "writesFields": [],
            "rulesApplied": [
              "operationsRequireActiveProject"
            ],
            "order": 10,
            "intentions": [
              {
                "id": "intent.projectDetailWorkspace.getProjectDetail.list",
                "intent": "queryList",
                "order": 10,
                "titleKey": "intent.projectDetailWorkspace.getProjectDetail.list.title",
                "source": "bff.getProjectDetail",
                "binding": "binding.projectDetailWorkspace.getProjectDetail",
                "action": "getProjectDetail",
                "emptyKey": "intent.projectDetailWorkspace.getProjectDetail.list.empty",
                "fields": [],
                "columns": [
                  {
                    "id": "intent.projectDetailWorkspace.getProjectDetail.list.column.projectId",
                    "field": "projectId",
                    "labelKey": "intent.projectDetailWorkspace.getProjectDetail.list.column.projectId.label",
                    "order": 10,
                    "stateKey": "ui.projectDetailWorkspace.data.getProjectDetail"
                  },
                  {
                    "id": "intent.projectDetailWorkspace.getProjectDetail.list.column.name",
                    "field": "name",
                    "labelKey": "intent.projectDetailWorkspace.getProjectDetail.list.column.name.label",
                    "order": 20,
                    "stateKey": "ui.projectDetailWorkspace.data.getProjectDetail"
                  },
                  {
                    "id": "intent.projectDetailWorkspace.getProjectDetail.list.column.clientId",
                    "field": "clientId",
                    "labelKey": "intent.projectDetailWorkspace.getProjectDetail.list.column.clientId.label",
                    "order": 30,
                    "stateKey": "ui.projectDetailWorkspace.data.getProjectDetail"
                  },
                  {
                    "id": "intent.projectDetailWorkspace.getProjectDetail.list.column.clientName",
                    "field": "clientName",
                    "labelKey": "intent.projectDetailWorkspace.getProjectDetail.list.column.clientName.label",
                    "order": 40,
                    "stateKey": "ui.projectDetailWorkspace.data.getProjectDetail"
                  },
                  {
                    "id": "intent.projectDetailWorkspace.getProjectDetail.list.column.clientCompany",
                    "field": "clientCompany",
                    "labelKey": "intent.projectDetailWorkspace.getProjectDetail.list.column.clientCompany.label",
                    "order": 50,
                    "stateKey": "ui.projectDetailWorkspace.data.getProjectDetail"
                  },
                  {
                    "id": "intent.projectDetailWorkspace.getProjectDetail.list.column.siteAddress",
                    "field": "siteAddress",
                    "labelKey": "intent.projectDetailWorkspace.getProjectDetail.list.column.siteAddress.label",
                    "order": 60,
                    "stateKey": "ui.projectDetailWorkspace.data.getProjectDetail"
                  },
                  {
                    "id": "intent.projectDetailWorkspace.getProjectDetail.list.column.budget",
                    "field": "budget",
                    "labelKey": "intent.projectDetailWorkspace.getProjectDetail.list.column.budget.label",
                    "order": 70,
                    "stateKey": "ui.projectDetailWorkspace.data.getProjectDetail"
                  },
                  {
                    "id": "intent.projectDetailWorkspace.getProjectDetail.list.column.startDate",
                    "field": "startDate",
                    "labelKey": "intent.projectDetailWorkspace.getProjectDetail.list.column.startDate.label",
                    "order": 80,
                    "stateKey": "ui.projectDetailWorkspace.data.getProjectDetail"
                  },
                  {
                    "id": "intent.projectDetailWorkspace.getProjectDetail.list.column.endDate",
                    "field": "endDate",
                    "labelKey": "intent.projectDetailWorkspace.getProjectDetail.list.column.endDate.label",
                    "order": 90,
                    "stateKey": "ui.projectDetailWorkspace.data.getProjectDetail"
                  },
                  {
                    "id": "intent.projectDetailWorkspace.getProjectDetail.list.column.status",
                    "field": "status",
                    "labelKey": "intent.projectDetailWorkspace.getProjectDetail.list.column.status.label",
                    "order": 100,
                    "stateKey": "ui.projectDetailWorkspace.data.getProjectDetail"
                  },
                  {
                    "id": "intent.projectDetailWorkspace.getProjectDetail.list.column.holdReason",
                    "field": "holdReason",
                    "labelKey": "intent.projectDetailWorkspace.getProjectDetail.list.column.holdReason.label",
                    "order": 110,
                    "stateKey": "ui.projectDetailWorkspace.data.getProjectDetail"
                  },
                  {
                    "id": "intent.projectDetailWorkspace.getProjectDetail.list.column.closedAt",
                    "field": "closedAt",
                    "labelKey": "intent.projectDetailWorkspace.getProjectDetail.list.column.closedAt.label",
                    "order": 120,
                    "stateKey": "ui.projectDetailWorkspace.data.getProjectDetail"
                  },
                  {
                    "id": "intent.projectDetailWorkspace.getProjectDetail.list.column.cancelledAt",
                    "field": "cancelledAt",
                    "labelKey": "intent.projectDetailWorkspace.getProjectDetail.list.column.cancelledAt.label",
                    "order": 130,
                    "stateKey": "ui.projectDetailWorkspace.data.getProjectDetail"
                  },
                  {
                    "id": "intent.projectDetailWorkspace.getProjectDetail.list.column.cancellationReason",
                    "field": "cancellationReason",
                    "labelKey": "intent.projectDetailWorkspace.getProjectDetail.list.column.cancellationReason.label",
                    "order": 140,
                    "stateKey": "ui.projectDetailWorkspace.data.getProjectDetail"
                  },
                  {
                    "id": "intent.projectDetailWorkspace.getProjectDetail.list.column.createdAt",
                    "field": "createdAt",
                    "labelKey": "intent.projectDetailWorkspace.getProjectDetail.list.column.createdAt.label",
                    "order": 150,
                    "stateKey": "ui.projectDetailWorkspace.data.getProjectDetail"
                  },
                  {
                    "id": "intent.projectDetailWorkspace.getProjectDetail.list.column.updatedAt",
                    "field": "updatedAt",
                    "labelKey": "intent.projectDetailWorkspace.getProjectDetail.list.column.updatedAt.label",
                    "order": 160,
                    "stateKey": "ui.projectDetailWorkspace.data.getProjectDetail"
                  }
                ],
                "filters": [],
                "toolbar": [],
                "rowActions": [],
                "actions": [],
                "stateKey": "ui.projectDetailWorkspace.data.getProjectDetail"
              }
            ],
            "displayHint": "summary-first"
          }
        ]
      },
      {
        "id": "section.projectDetailWorkspace.sec-task-timeline",
        "type": "section",
        "sectionName": "Work Task Timeline",
        "titleKey": "section.projectDetailWorkspace.sec-task-timeline.title",
        "mode": "view",
        "order": 20,
        "organisms": [
          {
            "id": "org-work-tasks-list",
            "type": "queryResult",
            "organismName": "WorkTasksFilteredList",
            "titleKey": "organism.projectDetailWorkspace.listWorkTasks.title",
            "purpose": "Browse all work tasks for this project with inline status badges and due-date overdue flags; filter by status or assigned worker to surface tasks needing attention.",
            "userActions": [
              "listWorkTasks"
            ],
            "requiredEntities": [],
            "readsFields": [],
            "writesFields": [],
            "rulesApplied": [
              "overdueTaskHighlighting",
              "taskSortingByDueDate"
            ],
            "order": 10,
            "intentions": [
              {
                "id": "intent.projectDetailWorkspace.listWorkTasks.list",
                "intent": "queryList",
                "order": 10,
                "titleKey": "intent.projectDetailWorkspace.listWorkTasks.list.title",
                "source": "bff.listWorkTasks",
                "binding": "binding.projectDetailWorkspace.listWorkTasks",
                "action": "listWorkTasks",
                "emptyKey": "intent.projectDetailWorkspace.listWorkTasks.list.empty",
                "fields": [],
                "columns": [
                  {
                    "id": "intent.projectDetailWorkspace.listWorkTasks.list.column.workTasks",
                    "field": "workTasks",
                    "labelKey": "intent.projectDetailWorkspace.listWorkTasks.list.column.workTasks.label",
                    "order": 10,
                    "stateKey": "ui.projectDetailWorkspace.data.listWorkTasks"
                  },
                  {
                    "id": "intent.projectDetailWorkspace.listWorkTasks.list.column.total",
                    "field": "total",
                    "labelKey": "intent.projectDetailWorkspace.listWorkTasks.list.column.total.label",
                    "order": 20,
                    "stateKey": "ui.projectDetailWorkspace.data.listWorkTasks"
                  }
                ],
                "filters": [
                  {
                    "id": "intent.projectDetailWorkspace.listWorkTasks.list.filter.projectId",
                    "field": "projectId",
                    "labelKey": "intent.projectDetailWorkspace.listWorkTasks.list.filter.projectId.label",
                    "order": 10,
                    "stateKey": "ui.projectDetailWorkspace.input.listWorkTasks.projectId"
                  },
                  {
                    "id": "intent.projectDetailWorkspace.listWorkTasks.list.filter.status",
                    "field": "status",
                    "labelKey": "intent.projectDetailWorkspace.listWorkTasks.list.filter.status.label",
                    "order": 20,
                    "stateKey": "ui.projectDetailWorkspace.input.listWorkTasks.status"
                  },
                  {
                    "id": "intent.projectDetailWorkspace.listWorkTasks.list.filter.assignedWorkerId",
                    "field": "assignedWorkerId",
                    "labelKey": "intent.projectDetailWorkspace.listWorkTasks.list.filter.assignedWorkerId.label",
                    "order": 30,
                    "stateKey": "ui.projectDetailWorkspace.input.listWorkTasks.assignedWorkerId"
                  },
                  {
                    "id": "intent.projectDetailWorkspace.listWorkTasks.list.filter.page",
                    "field": "page",
                    "labelKey": "intent.projectDetailWorkspace.listWorkTasks.list.filter.page.label",
                    "order": 40,
                    "stateKey": "ui.projectDetailWorkspace.input.listWorkTasks.page"
                  },
                  {
                    "id": "intent.projectDetailWorkspace.listWorkTasks.list.filter.pageSize",
                    "field": "pageSize",
                    "labelKey": "intent.projectDetailWorkspace.listWorkTasks.list.filter.pageSize.label",
                    "order": 50,
                    "stateKey": "ui.projectDetailWorkspace.input.listWorkTasks.pageSize"
                  }
                ],
                "toolbar": [],
                "rowActions": [],
                "actions": [],
                "stateKey": "ui.projectDetailWorkspace.data.listWorkTasks"
              }
            ],
            "displayHint": "master-detail"
          }
        ]
      },
      {
        "id": "section.projectDetailWorkspace.sec-change-orders",
        "type": "section",
        "sectionName": "Change Orders",
        "titleKey": "section.projectDetailWorkspace.sec-change-orders.title",
        "mode": "view",
        "order": 30,
        "organisms": [
          {
            "id": "org-change-orders-master-detail",
            "type": "queryResult",
            "organismName": "ChangeOrdersMasterDetail",
            "titleKey": "organism.projectDetailWorkspace.listChangeOrders.title",
            "purpose": "List all change orders for this project with cost and schedule adjustment columns; selecting a row opens the full change-order detail — including cost-vs-budget comparison and approval status — in an inline detail panel.",
            "userActions": [
              "listChangeOrders",
              "getChangeOrderDetail"
            ],
            "requiredEntities": [],
            "readsFields": [],
            "writesFields": [],
            "rulesApplied": [
              "onlyApprovedChangeOrdersAffectCosting",
              "jobCostDerivation"
            ],
            "order": 10,
            "intentions": [
              {
                "id": "intent.projectDetailWorkspace.listChangeOrders.list",
                "intent": "queryList",
                "order": 10,
                "titleKey": "intent.projectDetailWorkspace.listChangeOrders.list.title",
                "source": "bff.listChangeOrders",
                "binding": "binding.projectDetailWorkspace.listChangeOrders",
                "action": "listChangeOrders",
                "emptyKey": "intent.projectDetailWorkspace.listChangeOrders.list.empty",
                "fields": [],
                "columns": [
                  {
                    "id": "intent.projectDetailWorkspace.listChangeOrders.list.column.changeOrders",
                    "field": "changeOrders",
                    "labelKey": "intent.projectDetailWorkspace.listChangeOrders.list.column.changeOrders.label",
                    "order": 10,
                    "stateKey": "ui.projectDetailWorkspace.data.listChangeOrders"
                  },
                  {
                    "id": "intent.projectDetailWorkspace.listChangeOrders.list.column.total",
                    "field": "total",
                    "labelKey": "intent.projectDetailWorkspace.listChangeOrders.list.column.total.label",
                    "order": 20,
                    "stateKey": "ui.projectDetailWorkspace.data.listChangeOrders"
                  }
                ],
                "filters": [
                  {
                    "id": "intent.projectDetailWorkspace.listChangeOrders.list.filter.status",
                    "field": "status",
                    "labelKey": "intent.projectDetailWorkspace.listChangeOrders.list.filter.status.label",
                    "order": 10,
                    "stateKey": "ui.projectDetailWorkspace.input.listChangeOrders.status"
                  },
                  {
                    "id": "intent.projectDetailWorkspace.listChangeOrders.list.filter.impactType",
                    "field": "impactType",
                    "labelKey": "intent.projectDetailWorkspace.listChangeOrders.list.filter.impactType.label",
                    "order": 20,
                    "stateKey": "ui.projectDetailWorkspace.input.listChangeOrders.impactType"
                  },
                  {
                    "id": "intent.projectDetailWorkspace.listChangeOrders.list.filter.page",
                    "field": "page",
                    "labelKey": "intent.projectDetailWorkspace.listChangeOrders.list.filter.page.label",
                    "order": 30,
                    "stateKey": "ui.projectDetailWorkspace.input.listChangeOrders.page"
                  },
                  {
                    "id": "intent.projectDetailWorkspace.listChangeOrders.list.filter.pageSize",
                    "field": "pageSize",
                    "labelKey": "intent.projectDetailWorkspace.listChangeOrders.list.filter.pageSize.label",
                    "order": 40,
                    "stateKey": "ui.projectDetailWorkspace.input.listChangeOrders.pageSize"
                  }
                ],
                "toolbar": [],
                "rowActions": [],
                "actions": [],
                "stateKey": "ui.projectDetailWorkspace.data.listChangeOrders"
              },
              {
                "id": "intent.projectDetailWorkspace.getChangeOrderDetail.list",
                "intent": "queryList",
                "order": 10,
                "titleKey": "intent.projectDetailWorkspace.getChangeOrderDetail.list.title",
                "source": "bff.getChangeOrderDetail",
                "binding": "binding.projectDetailWorkspace.getChangeOrderDetail",
                "action": "getChangeOrderDetail",
                "emptyKey": "intent.projectDetailWorkspace.getChangeOrderDetail.list.empty",
                "fields": [],
                "columns": [
                  {
                    "id": "intent.projectDetailWorkspace.getChangeOrderDetail.list.column.changeOrderId",
                    "field": "changeOrderId",
                    "labelKey": "intent.projectDetailWorkspace.getChangeOrderDetail.list.column.changeOrderId.label",
                    "order": 10,
                    "stateKey": "ui.projectDetailWorkspace.data.getChangeOrderDetail"
                  },
                  {
                    "id": "intent.projectDetailWorkspace.getChangeOrderDetail.list.column.projectId",
                    "field": "projectId",
                    "labelKey": "intent.projectDetailWorkspace.getChangeOrderDetail.list.column.projectId.label",
                    "order": 20,
                    "stateKey": "ui.projectDetailWorkspace.data.getChangeOrderDetail"
                  },
                  {
                    "id": "intent.projectDetailWorkspace.getChangeOrderDetail.list.column.title",
                    "field": "title",
                    "labelKey": "intent.projectDetailWorkspace.getChangeOrderDetail.list.column.title.label",
                    "order": 30,
                    "stateKey": "ui.projectDetailWorkspace.data.getChangeOrderDetail"
                  },
                  {
                    "id": "intent.projectDetailWorkspace.getChangeOrderDetail.list.column.description",
                    "field": "description",
                    "labelKey": "intent.projectDetailWorkspace.getChangeOrderDetail.list.column.description.label",
                    "order": 40,
                    "stateKey": "ui.projectDetailWorkspace.data.getChangeOrderDetail"
                  },
                  {
                    "id": "intent.projectDetailWorkspace.getChangeOrderDetail.list.column.impactType",
                    "field": "impactType",
                    "labelKey": "intent.projectDetailWorkspace.getChangeOrderDetail.list.column.impactType.label",
                    "order": 50,
                    "stateKey": "ui.projectDetailWorkspace.data.getChangeOrderDetail"
                  },
                  {
                    "id": "intent.projectDetailWorkspace.getChangeOrderDetail.list.column.costAdjustment",
                    "field": "costAdjustment",
                    "labelKey": "intent.projectDetailWorkspace.getChangeOrderDetail.list.column.costAdjustment.label",
                    "order": 60,
                    "stateKey": "ui.projectDetailWorkspace.data.getChangeOrderDetail"
                  },
                  {
                    "id": "intent.projectDetailWorkspace.getChangeOrderDetail.list.column.scheduleAdjustmentDays",
                    "field": "scheduleAdjustmentDays",
                    "labelKey": "intent.projectDetailWorkspace.getChangeOrderDetail.list.column.scheduleAdjustmentDays.label",
                    "order": 70,
                    "stateKey": "ui.projectDetailWorkspace.data.getChangeOrderDetail"
                  },
                  {
                    "id": "intent.projectDetailWorkspace.getChangeOrderDetail.list.column.status",
                    "field": "status",
                    "labelKey": "intent.projectDetailWorkspace.getChangeOrderDetail.list.column.status.label",
                    "order": 80,
                    "stateKey": "ui.projectDetailWorkspace.data.getChangeOrderDetail"
                  },
                  {
                    "id": "intent.projectDetailWorkspace.getChangeOrderDetail.list.column.rejectionReason",
                    "field": "rejectionReason",
                    "labelKey": "intent.projectDetailWorkspace.getChangeOrderDetail.list.column.rejectionReason.label",
                    "order": 90,
                    "stateKey": "ui.projectDetailWorkspace.data.getChangeOrderDetail"
                  },
                  {
                    "id": "intent.projectDetailWorkspace.getChangeOrderDetail.list.column.approvedAt",
                    "field": "approvedAt",
                    "labelKey": "intent.projectDetailWorkspace.getChangeOrderDetail.list.column.approvedAt.label",
                    "order": 100,
                    "stateKey": "ui.projectDetailWorkspace.data.getChangeOrderDetail"
                  },
                  {
                    "id": "intent.projectDetailWorkspace.getChangeOrderDetail.list.column.rejectedAt",
                    "field": "rejectedAt",
                    "labelKey": "intent.projectDetailWorkspace.getChangeOrderDetail.list.column.rejectedAt.label",
                    "order": 110,
                    "stateKey": "ui.projectDetailWorkspace.data.getChangeOrderDetail"
                  },
                  {
                    "id": "intent.projectDetailWorkspace.getChangeOrderDetail.list.column.projectName",
                    "field": "projectName",
                    "labelKey": "intent.projectDetailWorkspace.getChangeOrderDetail.list.column.projectName.label",
                    "order": 120,
                    "stateKey": "ui.projectDetailWorkspace.data.getChangeOrderDetail"
                  },
                  {
                    "id": "intent.projectDetailWorkspace.getChangeOrderDetail.list.column.projectBudget",
                    "field": "projectBudget",
                    "labelKey": "intent.projectDetailWorkspace.getChangeOrderDetail.list.column.projectBudget.label",
                    "order": 130,
                    "stateKey": "ui.projectDetailWorkspace.data.getChangeOrderDetail"
                  },
                  {
                    "id": "intent.projectDetailWorkspace.getChangeOrderDetail.list.column.affectsJobCosting",
                    "field": "affectsJobCosting",
                    "labelKey": "intent.projectDetailWorkspace.getChangeOrderDetail.list.column.affectsJobCosting.label",
                    "order": 140,
                    "stateKey": "ui.projectDetailWorkspace.data.getChangeOrderDetail"
                  }
                ],
                "filters": [],
                "toolbar": [],
                "rowActions": [],
                "actions": [],
                "stateKey": "ui.projectDetailWorkspace.data.getChangeOrderDetail"
              }
            ],
            "displayHint": "master-detail"
          }
        ]
      },
      {
        "id": "section.projectDetailWorkspace.sec-cost-tracking",
        "type": "section",
        "sectionName": "Cost Tracking",
        "titleKey": "section.projectDetailWorkspace.sec-cost-tracking.title",
        "mode": "view",
        "order": 40,
        "organisms": [
          {
            "id": "org-time-logs-list",
            "type": "queryResult",
            "organismName": "TimeLogsFilteredList",
            "titleKey": "organism.projectDetailWorkspace.listTimeLogs.title",
            "purpose": "Browse labor time logs filtered by work task, worker name, log date, or status to understand hours worked and labor cost incurred on this project.",
            "userActions": [
              "listTimeLogs"
            ],
            "requiredEntities": [],
            "readsFields": [],
            "writesFields": [],
            "rulesApplied": [
              "jobCostDerivation",
              "timeLogLinkingRequired"
            ],
            "order": 10,
            "intentions": [
              {
                "id": "intent.projectDetailWorkspace.listTimeLogs.list",
                "intent": "queryList",
                "order": 10,
                "titleKey": "intent.projectDetailWorkspace.listTimeLogs.list.title",
                "source": "bff.listTimeLogs",
                "binding": "binding.projectDetailWorkspace.listTimeLogs",
                "action": "listTimeLogs",
                "emptyKey": "intent.projectDetailWorkspace.listTimeLogs.list.empty",
                "fields": [],
                "columns": [
                  {
                    "id": "intent.projectDetailWorkspace.listTimeLogs.list.column.timeLogs",
                    "field": "timeLogs",
                    "labelKey": "intent.projectDetailWorkspace.listTimeLogs.list.column.timeLogs.label",
                    "order": 10,
                    "stateKey": "ui.projectDetailWorkspace.data.listTimeLogs"
                  },
                  {
                    "id": "intent.projectDetailWorkspace.listTimeLogs.list.column.total",
                    "field": "total",
                    "labelKey": "intent.projectDetailWorkspace.listTimeLogs.list.column.total.label",
                    "order": 20,
                    "stateKey": "ui.projectDetailWorkspace.data.listTimeLogs"
                  }
                ],
                "filters": [
                  {
                    "id": "intent.projectDetailWorkspace.listTimeLogs.list.filter.workTaskId",
                    "field": "workTaskId",
                    "labelKey": "intent.projectDetailWorkspace.listTimeLogs.list.filter.workTaskId.label",
                    "order": 10,
                    "stateKey": "ui.projectDetailWorkspace.input.listTimeLogs.workTaskId"
                  },
                  {
                    "id": "intent.projectDetailWorkspace.listTimeLogs.list.filter.workerName",
                    "field": "workerName",
                    "labelKey": "intent.projectDetailWorkspace.listTimeLogs.list.filter.workerName.label",
                    "order": 20,
                    "stateKey": "ui.projectDetailWorkspace.input.listTimeLogs.workerName"
                  },
                  {
                    "id": "intent.projectDetailWorkspace.listTimeLogs.list.filter.logDate",
                    "field": "logDate",
                    "labelKey": "intent.projectDetailWorkspace.listTimeLogs.list.filter.logDate.label",
                    "order": 30,
                    "stateKey": "ui.projectDetailWorkspace.input.listTimeLogs.logDate"
                  },
                  {
                    "id": "intent.projectDetailWorkspace.listTimeLogs.list.filter.status",
                    "field": "status",
                    "labelKey": "intent.projectDetailWorkspace.listTimeLogs.list.filter.status.label",
                    "order": 40,
                    "stateKey": "ui.projectDetailWorkspace.input.listTimeLogs.status"
                  },
                  {
                    "id": "intent.projectDetailWorkspace.listTimeLogs.list.filter.page",
                    "field": "page",
                    "labelKey": "intent.projectDetailWorkspace.listTimeLogs.list.filter.page.label",
                    "order": 50,
                    "stateKey": "ui.projectDetailWorkspace.input.listTimeLogs.page"
                  },
                  {
                    "id": "intent.projectDetailWorkspace.listTimeLogs.list.filter.pageSize",
                    "field": "pageSize",
                    "labelKey": "intent.projectDetailWorkspace.listTimeLogs.list.filter.pageSize.label",
                    "order": 60,
                    "stateKey": "ui.projectDetailWorkspace.input.listTimeLogs.pageSize"
                  }
                ],
                "toolbar": [],
                "rowActions": [],
                "actions": [],
                "stateKey": "ui.projectDetailWorkspace.data.listTimeLogs"
              }
            ],
            "displayHint": "summary-first"
          },
          {
            "id": "org-material-usages-list",
            "type": "queryResult",
            "organismName": "MaterialUsagesFilteredList",
            "titleKey": "organism.projectDetailWorkspace.listMaterialUsages.title",
            "purpose": "Browse material usage entries for this project, filtered by status to separate posted costs from voided corrections, showing material name, quantity, unit cost, and cost code.",
            "userActions": [
              "listMaterialUsages"
            ],
            "requiredEntities": [],
            "readsFields": [],
            "writesFields": [],
            "rulesApplied": [
              "jobCostDerivation",
              "materialUsageIsProjectLevel"
            ],
            "order": 20,
            "intentions": [
              {
                "id": "intent.projectDetailWorkspace.listMaterialUsages.list",
                "intent": "queryList",
                "order": 10,
                "titleKey": "intent.projectDetailWorkspace.listMaterialUsages.list.title",
                "source": "bff.listMaterialUsages",
                "binding": "binding.projectDetailWorkspace.listMaterialUsages",
                "action": "listMaterialUsages",
                "emptyKey": "intent.projectDetailWorkspace.listMaterialUsages.list.empty",
                "fields": [],
                "columns": [
                  {
                    "id": "intent.projectDetailWorkspace.listMaterialUsages.list.column.materialUsages",
                    "field": "materialUsages",
                    "labelKey": "intent.projectDetailWorkspace.listMaterialUsages.list.column.materialUsages.label",
                    "order": 10,
                    "stateKey": "ui.projectDetailWorkspace.data.listMaterialUsages"
                  },
                  {
                    "id": "intent.projectDetailWorkspace.listMaterialUsages.list.column.total",
                    "field": "total",
                    "labelKey": "intent.projectDetailWorkspace.listMaterialUsages.list.column.total.label",
                    "order": 20,
                    "stateKey": "ui.projectDetailWorkspace.data.listMaterialUsages"
                  }
                ],
                "filters": [
                  {
                    "id": "intent.projectDetailWorkspace.listMaterialUsages.list.filter.status",
                    "field": "status",
                    "labelKey": "intent.projectDetailWorkspace.listMaterialUsages.list.filter.status.label",
                    "order": 10,
                    "stateKey": "ui.projectDetailWorkspace.input.listMaterialUsages.status"
                  },
                  {
                    "id": "intent.projectDetailWorkspace.listMaterialUsages.list.filter.page",
                    "field": "page",
                    "labelKey": "intent.projectDetailWorkspace.listMaterialUsages.list.filter.page.label",
                    "order": 20,
                    "stateKey": "ui.projectDetailWorkspace.input.listMaterialUsages.page"
                  },
                  {
                    "id": "intent.projectDetailWorkspace.listMaterialUsages.list.filter.pageSize",
                    "field": "pageSize",
                    "labelKey": "intent.projectDetailWorkspace.listMaterialUsages.list.filter.pageSize.label",
                    "order": 30,
                    "stateKey": "ui.projectDetailWorkspace.input.listMaterialUsages.pageSize"
                  }
                ],
                "toolbar": [],
                "rowActions": [],
                "actions": [],
                "stateKey": "ui.projectDetailWorkspace.data.listMaterialUsages"
              }
            ],
            "displayHint": "summary-first"
          }
        ]
      },
      {
        "id": "section.projectDetailWorkspace.sec-delay-risk-insights",
        "type": "section",
        "sectionName": "Delay-Risk Insights",
        "titleKey": "section.projectDetailWorkspace.sec-delay-risk-insights.title",
        "mode": "edit",
        "order": 50,
        "organisms": [
          {
            "id": "org-delay-risk-trigger",
            "type": "commandForm",
            "organismName": "DelayRiskTriggerAction",
            "titleKey": "organism.projectDetailWorkspace.triggerDelayRiskSuggestions.title",
            "purpose": "Allow the PM to trigger AI delay-risk suggestion generation for the current status report via a primary action button; statusReportId is derived from the selected status report context, never typed.",
            "userActions": [
              "triggerDelayRiskSuggestions"
            ],
            "requiredEntities": [],
            "readsFields": [],
            "writesFields": [],
            "rulesApplied": [
              "delayRiskSuggestionsAdvisory"
            ],
            "order": 10,
            "intentions": [
              {
                "id": "intent.projectDetailWorkspace.triggerDelayRiskSuggestions.form",
                "intent": "commandForm",
                "order": 10,
                "titleKey": "intent.projectDetailWorkspace.triggerDelayRiskSuggestions.form.title",
                "source": "bff.triggerDelayRiskSuggestions",
                "binding": "binding.projectDetailWorkspace.triggerDelayRiskSuggestions",
                "submitAction": "triggerDelayRiskSuggestions",
                "fields": [],
                "columns": [],
                "filters": [],
                "toolbar": [],
                "rowActions": [],
                "actions": [
                  {
                    "id": "intent.projectDetailWorkspace.triggerDelayRiskSuggestions.form.action.triggerDelayRiskSuggestions",
                    "action": "triggerDelayRiskSuggestions",
                    "labelKey": "intent.projectDetailWorkspace.triggerDelayRiskSuggestions.form.action.triggerDelayRiskSuggestions",
                    "order": 10,
                    "actionKey": "triggerDelayRiskSuggestions"
                  }
                ]
              }
            ],
            "displayHint": "contextual-transition-actions"
          },
          {
            "id": "org-delay-risk-suggestions-list",
            "type": "queryResult",
            "organismName": "DelayRiskSuggestionsList",
            "titleKey": "organism.projectDetailWorkspace.listDelayRiskSuggestions.title",
            "purpose": "Display AI-generated delay-risk suggestions for the selected status report, showing risk level, related work task, reason, and suggested action; filterable by acknowledged state.",
            "userActions": [
              "listDelayRiskSuggestions"
            ],
            "requiredEntities": [],
            "readsFields": [],
            "writesFields": [],
            "rulesApplied": [
              "delayRiskSuggestionsAdvisory"
            ],
            "order": 20,
            "intentions": [
              {
                "id": "intent.projectDetailWorkspace.listDelayRiskSuggestions.list",
                "intent": "queryList",
                "order": 10,
                "titleKey": "intent.projectDetailWorkspace.listDelayRiskSuggestions.list.title",
                "source": "bff.listDelayRiskSuggestions",
                "binding": "binding.projectDetailWorkspace.listDelayRiskSuggestions",
                "action": "listDelayRiskSuggestions",
                "emptyKey": "intent.projectDetailWorkspace.listDelayRiskSuggestions.list.empty",
                "fields": [],
                "columns": [
                  {
                    "id": "intent.projectDetailWorkspace.listDelayRiskSuggestions.list.column.delayRiskSuggestionId",
                    "field": "delayRiskSuggestionId",
                    "labelKey": "intent.projectDetailWorkspace.listDelayRiskSuggestions.list.column.delayRiskSuggestionId.label",
                    "order": 10,
                    "stateKey": "ui.projectDetailWorkspace.data.listDelayRiskSuggestions"
                  },
                  {
                    "id": "intent.projectDetailWorkspace.listDelayRiskSuggestions.list.column.workTaskId",
                    "field": "workTaskId",
                    "labelKey": "intent.projectDetailWorkspace.listDelayRiskSuggestions.list.column.workTaskId.label",
                    "order": 20,
                    "stateKey": "ui.projectDetailWorkspace.data.listDelayRiskSuggestions"
                  },
                  {
                    "id": "intent.projectDetailWorkspace.listDelayRiskSuggestions.list.column.workTaskTitle",
                    "field": "workTaskTitle",
                    "labelKey": "intent.projectDetailWorkspace.listDelayRiskSuggestions.list.column.workTaskTitle.label",
                    "order": 30,
                    "stateKey": "ui.projectDetailWorkspace.data.listDelayRiskSuggestions"
                  },
                  {
                    "id": "intent.projectDetailWorkspace.listDelayRiskSuggestions.list.column.riskLevel",
                    "field": "riskLevel",
                    "labelKey": "intent.projectDetailWorkspace.listDelayRiskSuggestions.list.column.riskLevel.label",
                    "order": 40,
                    "stateKey": "ui.projectDetailWorkspace.data.listDelayRiskSuggestions"
                  },
                  {
                    "id": "intent.projectDetailWorkspace.listDelayRiskSuggestions.list.column.reason",
                    "field": "reason",
                    "labelKey": "intent.projectDetailWorkspace.listDelayRiskSuggestions.list.column.reason.label",
                    "order": 50,
                    "stateKey": "ui.projectDetailWorkspace.data.listDelayRiskSuggestions"
                  },
                  {
                    "id": "intent.projectDetailWorkspace.listDelayRiskSuggestions.list.column.suggestedAction",
                    "field": "suggestedAction",
                    "labelKey": "intent.projectDetailWorkspace.listDelayRiskSuggestions.list.column.suggestedAction.label",
                    "order": 60,
                    "stateKey": "ui.projectDetailWorkspace.data.listDelayRiskSuggestions"
                  },
                  {
                    "id": "intent.projectDetailWorkspace.listDelayRiskSuggestions.list.column.acknowledged",
                    "field": "acknowledged",
                    "labelKey": "intent.projectDetailWorkspace.listDelayRiskSuggestions.list.column.acknowledged.label",
                    "order": 70,
                    "stateKey": "ui.projectDetailWorkspace.data.listDelayRiskSuggestions"
                  },
                  {
                    "id": "intent.projectDetailWorkspace.listDelayRiskSuggestions.list.column.createdAt",
                    "field": "createdAt",
                    "labelKey": "intent.projectDetailWorkspace.listDelayRiskSuggestions.list.column.createdAt.label",
                    "order": 80,
                    "stateKey": "ui.projectDetailWorkspace.data.listDelayRiskSuggestions"
                  }
                ],
                "filters": [
                  {
                    "id": "intent.projectDetailWorkspace.listDelayRiskSuggestions.list.filter.acknowledged",
                    "field": "acknowledged",
                    "labelKey": "intent.projectDetailWorkspace.listDelayRiskSuggestions.list.filter.acknowledged.label",
                    "order": 10,
                    "stateKey": "ui.projectDetailWorkspace.input.listDelayRiskSuggestions.acknowledged"
                  }
                ],
                "toolbar": [],
                "rowActions": [],
                "actions": [],
                "stateKey": "ui.projectDetailWorkspace.data.listDelayRiskSuggestions"
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
      "id": "binding.projectDetailWorkspace.getProjectDetail",
      "source": "bff.getProjectDetail",
      "command": "getProjectDetail",
      "description": "View project detail and timeline",
      "stateKey": "ui.projectDetailWorkspace.data.getProjectDetail",
      "inputStateKeys": [
        "ui.projectDetailWorkspace.input.getProjectDetail.projectId"
      ]
    },
    {
      "id": "binding.projectDetailWorkspace.listWorkTasks",
      "source": "bff.listWorkTasks",
      "command": "listWorkTasks",
      "description": "Browse work tasks",
      "stateKey": "ui.projectDetailWorkspace.data.listWorkTasks",
      "inputStateKeys": [
        "ui.projectDetailWorkspace.input.listWorkTasks.projectId",
        "ui.projectDetailWorkspace.input.listWorkTasks.status",
        "ui.projectDetailWorkspace.input.listWorkTasks.assignedWorkerId",
        "ui.projectDetailWorkspace.input.listWorkTasks.page",
        "ui.projectDetailWorkspace.input.listWorkTasks.pageSize"
      ]
    },
    {
      "id": "binding.projectDetailWorkspace.listChangeOrders",
      "source": "bff.listChangeOrders",
      "command": "listChangeOrders",
      "description": "Browse change orders",
      "stateKey": "ui.projectDetailWorkspace.data.listChangeOrders",
      "inputStateKeys": [
        "ui.projectDetailWorkspace.input.listChangeOrders.projectId",
        "ui.projectDetailWorkspace.input.listChangeOrders.status",
        "ui.projectDetailWorkspace.input.listChangeOrders.impactType",
        "ui.projectDetailWorkspace.input.listChangeOrders.page",
        "ui.projectDetailWorkspace.input.listChangeOrders.pageSize"
      ]
    },
    {
      "id": "binding.projectDetailWorkspace.getChangeOrderDetail",
      "source": "bff.getChangeOrderDetail",
      "command": "getChangeOrderDetail",
      "description": "View change order and cost impact",
      "stateKey": "ui.projectDetailWorkspace.data.getChangeOrderDetail",
      "inputStateKeys": [
        "ui.projectDetailWorkspace.input.getChangeOrderDetail.changeOrderId"
      ]
    },
    {
      "id": "binding.projectDetailWorkspace.listTimeLogs",
      "source": "bff.listTimeLogs",
      "command": "listTimeLogs",
      "description": "Browse time logs",
      "stateKey": "ui.projectDetailWorkspace.data.listTimeLogs",
      "inputStateKeys": [
        "ui.projectDetailWorkspace.input.listTimeLogs.workTaskId",
        "ui.projectDetailWorkspace.input.listTimeLogs.workerName",
        "ui.projectDetailWorkspace.input.listTimeLogs.logDate",
        "ui.projectDetailWorkspace.input.listTimeLogs.status",
        "ui.projectDetailWorkspace.input.listTimeLogs.page",
        "ui.projectDetailWorkspace.input.listTimeLogs.pageSize"
      ]
    },
    {
      "id": "binding.projectDetailWorkspace.listMaterialUsages",
      "source": "bff.listMaterialUsages",
      "command": "listMaterialUsages",
      "description": "Browse material usage",
      "stateKey": "ui.projectDetailWorkspace.data.listMaterialUsages",
      "inputStateKeys": [
        "ui.projectDetailWorkspace.input.listMaterialUsages.projectId",
        "ui.projectDetailWorkspace.input.listMaterialUsages.status",
        "ui.projectDetailWorkspace.input.listMaterialUsages.page",
        "ui.projectDetailWorkspace.input.listMaterialUsages.pageSize"
      ]
    },
    {
      "id": "binding.projectDetailWorkspace.triggerDelayRiskSuggestions",
      "source": "bff.triggerDelayRiskSuggestions",
      "command": "triggerDelayRiskSuggestions",
      "description": "Generate delay-risk suggestions",
      "stateKey": "ui.projectDetailWorkspace.output.triggerDelayRiskSuggestions",
      "inputStateKeys": [
        "ui.projectDetailWorkspace.input.triggerDelayRiskSuggestions.statusReportId"
      ]
    },
    {
      "id": "binding.projectDetailWorkspace.listDelayRiskSuggestions",
      "source": "bff.listDelayRiskSuggestions",
      "command": "listDelayRiskSuggestions",
      "description": "Review delay-risk suggestions",
      "stateKey": "ui.projectDetailWorkspace.data.listDelayRiskSuggestions",
      "inputStateKeys": [
        "ui.projectDetailWorkspace.input.listDelayRiskSuggestions.statusReportId",
        "ui.projectDetailWorkspace.input.listDelayRiskSuggestions.acknowledged"
      ]
    }
  ]
};

export const pipeline = [
  {
    "id": "projectDetailWorkspace__page21__l2_page",
    "type": "l2_page",
    "outputPath": "_102045_/l2/buildFlowFsm/web/desktop/page21/projectDetailWorkspace.ts",
    "defPath": "_102045_/l2/buildFlowFsm/web/desktop/page21/projectDetailWorkspace.defs.ts",
    "dependsFiles": [
      "_102045_/l2/buildFlowFsm/web/shared/projectDetailWorkspace.ts",
      "_102045_/l2/designSystem.ts"
    ],
    "dependsOn": [
      "projectDetailWorkspace__l2_shared"
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
