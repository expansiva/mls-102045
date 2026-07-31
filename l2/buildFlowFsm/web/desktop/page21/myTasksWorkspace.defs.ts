/// <mls fileReference="_102045_/l2/buildFlowFsm/web/desktop/page21/myTasksWorkspace.defs.ts" enhancement="_blank"/>

export const definition = {
  "pageId": "myTasksWorkspace",
  "pageName": "My Tasks",
  "baseClassName": "BuildFlowFsmMyTasksWorkspaceBase",
  "actor": "fieldWorker",
  "purpose": "Executar My Tasks.",
  "capabilities": [
    "queryMyWorkTasks",
    "viewWorkTask"
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
    "workspaceId": "myTasksWorkspace",
    "workspaceKind": "operation",
    "actor": "fieldWorker",
    "entity": "WorkTask",
    "owners": [
      {
        "kind": "operation",
        "id": "queryMyWorkTasks",
        "defPath": "_102045_/l4/buildFlowFsm/operations/queryMyWorkTasks.defs.ts"
      },
      {
        "kind": "operation",
        "id": "viewWorkTask",
        "defPath": "_102045_/l4/buildFlowFsm/operations/viewWorkTask.defs.ts"
      }
    ],
    "microUserFlow": {
      "source": "l4/story.steps",
      "workflowSteps": [],
      "operations": [
        {
          "operationId": "queryMyWorkTasks",
          "commandName": "queryMyWorkTasks",
          "steps": [
            "Open the mobile app to the my-tasks list",
            "System loads only tasks assigned to the signed-in field worker",
            "Tasks are shown sorted by due date with overdue items highlighted",
            "Review each task title, description, due date, status, and project context",
            "Select a task to work on or open its details"
          ]
        },
        {
          "operationId": "viewWorkTask",
          "commandName": "viewWorkTask",
          "steps": [
            "Open a specific work task from the assigned-tasks list on mobile",
            "Load the task details including description, due date, status, and project context",
            "Confirm the task is assigned to the current field worker before showing it"
          ]
        }
      ]
    }
  },
  "pageInputs": [],
  "navigationRefs": [],
  "sections": [
    {
      "id": "section.myTasksWorkspace.taskListSection",
      "type": "section",
      "sectionName": "My Tasks",
      "titleKey": "section.myTasksWorkspace.taskListSection.title",
      "mode": "view",
      "order": 10,
      "organisms": [
        {
          "id": "taskListSurface",
          "type": "queryResult",
          "organismName": "MyTaskList",
          "titleKey": "organism.myTasksWorkspace.listMyWorkTasks.title",
          "purpose": "Primary scrollable card list of all tasks assigned to the signed-in field worker, sorted by due date with overdue items visually highlighted; selecting a card triggers the detail panel.",
          "userActions": [
            "listMyWorkTasks"
          ],
          "requiredEntities": [],
          "readsFields": [],
          "writesFields": [],
          "rulesApplied": [
            "fieldWorkerTaskVisibility",
            "taskSortingByDueDate",
            "overdueTaskHighlighting",
            "mobileFieldUsability",
            "singleTaskAssignment"
          ],
          "order": 10,
          "intentionRefs": [
            {
              "id": "intent.myTasksWorkspace.listMyWorkTasks.list",
              "intent": "queryList",
              "stateKey": "ui.myTasksWorkspace.data.listMyWorkTasks",
              "action": "listMyWorkTasks",
              "order": 10
            }
          ]
        },
        {
          "id": "taskStatusFilter",
          "type": "content",
          "organismName": "TaskStatusFilterBar",
          "titleKey": "organism.myTasksWorkspace.inline-row-command20.title",
          "purpose": "Compact chip/tab filter bar folded into the task list header that lets the worker narrow the list to a specific task status (all / assigned / inProgress / completed / cancelled) with a single tap.",
          "userActions": [],
          "requiredEntities": [],
          "readsFields": [],
          "writesFields": [],
          "rulesApplied": [],
          "order": 20,
          "intentionRefs": [
            {
              "id": "intent.myTasksWorkspace.inline-row-command20.content",
              "intent": "inline-row-command",
              "order": 10
            }
          ]
        },
        {
          "id": "taskDetailPanel",
          "type": "queryResult",
          "organismName": "WorkTaskDetailPanel",
          "titleKey": "organism.myTasksWorkspace.getWorkTaskDetail.title",
          "purpose": "Detail panel (bottom sheet on mobile, side panel on tablet) that loads and displays the full work task record — description, due date, project context, status, and conditional fields (completedAt, cancellationReason) — when the worker selects a task card.",
          "userActions": [
            "getWorkTaskDetail"
          ],
          "requiredEntities": [],
          "readsFields": [],
          "writesFields": [],
          "rulesApplied": [
            "fieldWorkerTaskVisibility",
            "mobileFieldUsability",
            "overdueTaskHighlighting"
          ],
          "order": 30,
          "intentionRefs": [
            {
              "id": "intent.myTasksWorkspace.getWorkTaskDetail.list",
              "intent": "queryList",
              "stateKey": "ui.myTasksWorkspace.data.getWorkTaskDetail",
              "action": "getWorkTaskDetail",
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
    "actor": "Field worker (signed-in mobile user)",
    "jobToBeDone": "Quickly scan all tasks assigned to me today, spot overdue items at a glance, and open any task to review its full details before starting work.",
    "primaryDecision": "Which task should I work on next — select a task from the list to view its details.",
    "decisiveInfo": [
      "title",
      "status",
      "dueDate",
      "isOverdue",
      "projectName",
      "description"
    ],
    "usageFrequency": "Daily / continuous — field worker opens this screen at the start of each shift and returns throughout the day to check task status.",
    "criticalActions": [
      {
        "action": "Browse assigned tasks filtered by status",
        "presentation": "master-detail — scrollable card list on primary surface with status filter chip bar folded into the list header"
      },
      {
        "action": "Select a task to view full details",
        "presentation": "master-detail — tapping a card loads the detail panel (or bottom sheet on mobile) without leaving the list"
      }
    ],
    "informationHierarchy": [
      "1. Task list — title, status badge, due date, overdue highlight, project name",
      "2. Status filter control — chip/tab bar to narrow by assigned / inProgress / completed / cancelled",
      "3. Task detail panel — full description, due date, project context, status, completedAt / cancelledAt / cancellationReason when relevant"
    ],
    "successCriteria": "A field worker can open the app, immediately see their tasks sorted by urgency (overdue first), filter to in-progress items in one tap, and read full task details without navigating away from the list.",
    "antiPatterns": [
      "Separate full-page form for task detail",
      "Manual input of assignedWorkerId or workTaskId — both are context-derived",
      "Free <select> over all status enum values instead of filter chips",
      "Desktop-style wide table — this is a mobile-first screen",
      "Showing system timestamps (createdAt, updatedAt) as primary information"
    ]
  },
  "layout": {
    "id": "page21-goal-first",
    "type": "page",
    "sections": [
      {
        "id": "section.myTasksWorkspace.taskListSection",
        "type": "section",
        "sectionName": "My Tasks",
        "titleKey": "section.myTasksWorkspace.taskListSection.title",
        "mode": "view",
        "order": 10,
        "organisms": [
          {
            "id": "taskListSurface",
            "type": "queryResult",
            "organismName": "MyTaskList",
            "titleKey": "organism.myTasksWorkspace.listMyWorkTasks.title",
            "purpose": "Primary scrollable card list of all tasks assigned to the signed-in field worker, sorted by due date with overdue items visually highlighted; selecting a card triggers the detail panel.",
            "userActions": [
              "listMyWorkTasks"
            ],
            "requiredEntities": [],
            "readsFields": [],
            "writesFields": [],
            "rulesApplied": [
              "fieldWorkerTaskVisibility",
              "taskSortingByDueDate",
              "overdueTaskHighlighting",
              "mobileFieldUsability",
              "singleTaskAssignment"
            ],
            "order": 10,
            "intentions": [
              {
                "id": "intent.myTasksWorkspace.listMyWorkTasks.list",
                "intent": "queryList",
                "order": 10,
                "titleKey": "intent.myTasksWorkspace.listMyWorkTasks.list.title",
                "source": "bff.listMyWorkTasks",
                "binding": "binding.myTasksWorkspace.listMyWorkTasks",
                "action": "listMyWorkTasks",
                "emptyKey": "intent.myTasksWorkspace.listMyWorkTasks.list.empty",
                "fields": [],
                "columns": [
                  {
                    "id": "intent.myTasksWorkspace.listMyWorkTasks.list.column.workTasks",
                    "field": "workTasks",
                    "labelKey": "intent.myTasksWorkspace.listMyWorkTasks.list.column.workTasks.label",
                    "order": 10,
                    "stateKey": "ui.myTasksWorkspace.data.listMyWorkTasks"
                  },
                  {
                    "id": "intent.myTasksWorkspace.listMyWorkTasks.list.column.total",
                    "field": "total",
                    "labelKey": "intent.myTasksWorkspace.listMyWorkTasks.list.column.total.label",
                    "order": 20,
                    "stateKey": "ui.myTasksWorkspace.data.listMyWorkTasks"
                  }
                ],
                "filters": [
                  {
                    "id": "intent.myTasksWorkspace.listMyWorkTasks.list.filter.assignedWorkerId",
                    "field": "assignedWorkerId",
                    "labelKey": "intent.myTasksWorkspace.listMyWorkTasks.list.filter.assignedWorkerId.label",
                    "order": 10,
                    "stateKey": "ui.myTasksWorkspace.input.listMyWorkTasks.assignedWorkerId"
                  },
                  {
                    "id": "intent.myTasksWorkspace.listMyWorkTasks.list.filter.status",
                    "field": "status",
                    "labelKey": "intent.myTasksWorkspace.listMyWorkTasks.list.filter.status.label",
                    "order": 20,
                    "stateKey": "ui.myTasksWorkspace.input.listMyWorkTasks.status"
                  },
                  {
                    "id": "intent.myTasksWorkspace.listMyWorkTasks.list.filter.page",
                    "field": "page",
                    "labelKey": "intent.myTasksWorkspace.listMyWorkTasks.list.filter.page.label",
                    "order": 30,
                    "stateKey": "ui.myTasksWorkspace.input.listMyWorkTasks.page"
                  },
                  {
                    "id": "intent.myTasksWorkspace.listMyWorkTasks.list.filter.pageSize",
                    "field": "pageSize",
                    "labelKey": "intent.myTasksWorkspace.listMyWorkTasks.list.filter.pageSize.label",
                    "order": 40,
                    "stateKey": "ui.myTasksWorkspace.input.listMyWorkTasks.pageSize"
                  }
                ],
                "toolbar": [],
                "rowActions": [],
                "actions": [],
                "stateKey": "ui.myTasksWorkspace.data.listMyWorkTasks"
              }
            ],
            "displayHint": "master-detail"
          },
          {
            "id": "taskStatusFilter",
            "type": "content",
            "organismName": "TaskStatusFilterBar",
            "titleKey": "organism.myTasksWorkspace.inline-row-command20.title",
            "purpose": "Compact chip/tab filter bar folded into the task list header that lets the worker narrow the list to a specific task status (all / assigned / inProgress / completed / cancelled) with a single tap.",
            "userActions": [],
            "requiredEntities": [],
            "readsFields": [],
            "writesFields": [],
            "rulesApplied": [],
            "order": 20,
            "intentions": [
              {
                "id": "intent.myTasksWorkspace.inline-row-command20.content",
                "intent": "inline-row-command",
                "order": 10,
                "titleKey": "intent.myTasksWorkspace.inline-row-command20.content.title",
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
            "id": "taskDetailPanel",
            "type": "queryResult",
            "organismName": "WorkTaskDetailPanel",
            "titleKey": "organism.myTasksWorkspace.getWorkTaskDetail.title",
            "purpose": "Detail panel (bottom sheet on mobile, side panel on tablet) that loads and displays the full work task record — description, due date, project context, status, and conditional fields (completedAt, cancellationReason) — when the worker selects a task card.",
            "userActions": [
              "getWorkTaskDetail"
            ],
            "requiredEntities": [],
            "readsFields": [],
            "writesFields": [],
            "rulesApplied": [
              "fieldWorkerTaskVisibility",
              "mobileFieldUsability",
              "overdueTaskHighlighting"
            ],
            "order": 30,
            "intentions": [
              {
                "id": "intent.myTasksWorkspace.getWorkTaskDetail.list",
                "intent": "queryList",
                "order": 10,
                "titleKey": "intent.myTasksWorkspace.getWorkTaskDetail.list.title",
                "source": "bff.getWorkTaskDetail",
                "binding": "binding.myTasksWorkspace.getWorkTaskDetail",
                "action": "getWorkTaskDetail",
                "emptyKey": "intent.myTasksWorkspace.getWorkTaskDetail.list.empty",
                "fields": [],
                "columns": [
                  {
                    "id": "intent.myTasksWorkspace.getWorkTaskDetail.list.column.workTaskId",
                    "field": "workTaskId",
                    "labelKey": "intent.myTasksWorkspace.getWorkTaskDetail.list.column.workTaskId.label",
                    "order": 10,
                    "stateKey": "ui.myTasksWorkspace.data.getWorkTaskDetail"
                  },
                  {
                    "id": "intent.myTasksWorkspace.getWorkTaskDetail.list.column.projectId",
                    "field": "projectId",
                    "labelKey": "intent.myTasksWorkspace.getWorkTaskDetail.list.column.projectId.label",
                    "order": 20,
                    "stateKey": "ui.myTasksWorkspace.data.getWorkTaskDetail"
                  },
                  {
                    "id": "intent.myTasksWorkspace.getWorkTaskDetail.list.column.projectName",
                    "field": "projectName",
                    "labelKey": "intent.myTasksWorkspace.getWorkTaskDetail.list.column.projectName.label",
                    "order": 30,
                    "stateKey": "ui.myTasksWorkspace.data.getWorkTaskDetail"
                  },
                  {
                    "id": "intent.myTasksWorkspace.getWorkTaskDetail.list.column.title",
                    "field": "title",
                    "labelKey": "intent.myTasksWorkspace.getWorkTaskDetail.list.column.title.label",
                    "order": 40,
                    "stateKey": "ui.myTasksWorkspace.data.getWorkTaskDetail"
                  },
                  {
                    "id": "intent.myTasksWorkspace.getWorkTaskDetail.list.column.description",
                    "field": "description",
                    "labelKey": "intent.myTasksWorkspace.getWorkTaskDetail.list.column.description.label",
                    "order": 50,
                    "stateKey": "ui.myTasksWorkspace.data.getWorkTaskDetail"
                  },
                  {
                    "id": "intent.myTasksWorkspace.getWorkTaskDetail.list.column.assignedWorkerId",
                    "field": "assignedWorkerId",
                    "labelKey": "intent.myTasksWorkspace.getWorkTaskDetail.list.column.assignedWorkerId.label",
                    "order": 60,
                    "stateKey": "ui.myTasksWorkspace.data.getWorkTaskDetail"
                  },
                  {
                    "id": "intent.myTasksWorkspace.getWorkTaskDetail.list.column.status",
                    "field": "status",
                    "labelKey": "intent.myTasksWorkspace.getWorkTaskDetail.list.column.status.label",
                    "order": 70,
                    "stateKey": "ui.myTasksWorkspace.data.getWorkTaskDetail"
                  },
                  {
                    "id": "intent.myTasksWorkspace.getWorkTaskDetail.list.column.dueDate",
                    "field": "dueDate",
                    "labelKey": "intent.myTasksWorkspace.getWorkTaskDetail.list.column.dueDate.label",
                    "order": 80,
                    "stateKey": "ui.myTasksWorkspace.data.getWorkTaskDetail"
                  },
                  {
                    "id": "intent.myTasksWorkspace.getWorkTaskDetail.list.column.isOverdue",
                    "field": "isOverdue",
                    "labelKey": "intent.myTasksWorkspace.getWorkTaskDetail.list.column.isOverdue.label",
                    "order": 90,
                    "stateKey": "ui.myTasksWorkspace.data.getWorkTaskDetail"
                  },
                  {
                    "id": "intent.myTasksWorkspace.getWorkTaskDetail.list.column.completedAt",
                    "field": "completedAt",
                    "labelKey": "intent.myTasksWorkspace.getWorkTaskDetail.list.column.completedAt.label",
                    "order": 100,
                    "stateKey": "ui.myTasksWorkspace.data.getWorkTaskDetail"
                  },
                  {
                    "id": "intent.myTasksWorkspace.getWorkTaskDetail.list.column.cancelledAt",
                    "field": "cancelledAt",
                    "labelKey": "intent.myTasksWorkspace.getWorkTaskDetail.list.column.cancelledAt.label",
                    "order": 110,
                    "stateKey": "ui.myTasksWorkspace.data.getWorkTaskDetail"
                  },
                  {
                    "id": "intent.myTasksWorkspace.getWorkTaskDetail.list.column.cancellationReason",
                    "field": "cancellationReason",
                    "labelKey": "intent.myTasksWorkspace.getWorkTaskDetail.list.column.cancellationReason.label",
                    "order": 120,
                    "stateKey": "ui.myTasksWorkspace.data.getWorkTaskDetail"
                  },
                  {
                    "id": "intent.myTasksWorkspace.getWorkTaskDetail.list.column.createdAt",
                    "field": "createdAt",
                    "labelKey": "intent.myTasksWorkspace.getWorkTaskDetail.list.column.createdAt.label",
                    "order": 130,
                    "stateKey": "ui.myTasksWorkspace.data.getWorkTaskDetail"
                  },
                  {
                    "id": "intent.myTasksWorkspace.getWorkTaskDetail.list.column.updatedAt",
                    "field": "updatedAt",
                    "labelKey": "intent.myTasksWorkspace.getWorkTaskDetail.list.column.updatedAt.label",
                    "order": 140,
                    "stateKey": "ui.myTasksWorkspace.data.getWorkTaskDetail"
                  }
                ],
                "filters": [
                  {
                    "id": "intent.myTasksWorkspace.getWorkTaskDetail.list.filter.actorId",
                    "field": "actorId",
                    "labelKey": "intent.myTasksWorkspace.getWorkTaskDetail.list.filter.actorId.label",
                    "order": 10,
                    "stateKey": "ui.myTasksWorkspace.input.getWorkTaskDetail.actorId"
                  }
                ],
                "toolbar": [],
                "rowActions": [],
                "actions": [],
                "stateKey": "ui.myTasksWorkspace.data.getWorkTaskDetail"
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
      "id": "binding.myTasksWorkspace.listMyWorkTasks",
      "source": "bff.listMyWorkTasks",
      "command": "listMyWorkTasks",
      "description": "Browse my assigned tasks",
      "stateKey": "ui.myTasksWorkspace.data.listMyWorkTasks",
      "inputStateKeys": [
        "ui.myTasksWorkspace.input.listMyWorkTasks.assignedWorkerId",
        "ui.myTasksWorkspace.input.listMyWorkTasks.status",
        "ui.myTasksWorkspace.input.listMyWorkTasks.page",
        "ui.myTasksWorkspace.input.listMyWorkTasks.pageSize"
      ]
    },
    {
      "id": "binding.myTasksWorkspace.getWorkTaskDetail",
      "source": "bff.getWorkTaskDetail",
      "command": "getWorkTaskDetail",
      "description": "View work task details",
      "stateKey": "ui.myTasksWorkspace.data.getWorkTaskDetail",
      "inputStateKeys": [
        "ui.myTasksWorkspace.input.getWorkTaskDetail.workTaskId",
        "ui.myTasksWorkspace.input.getWorkTaskDetail.actorId"
      ]
    }
  ]
};

export const pipeline = [
  {
    "id": "myTasksWorkspace__page21__l2_page",
    "type": "l2_page",
    "outputPath": "_102045_/l2/buildFlowFsm/web/desktop/page21/myTasksWorkspace.ts",
    "defPath": "_102045_/l2/buildFlowFsm/web/desktop/page21/myTasksWorkspace.defs.ts",
    "dependsFiles": [
      "_102045_/l2/buildFlowFsm/web/shared/myTasksWorkspace.ts",
      "_102045_/l2/designSystem.ts"
    ],
    "dependsOn": [
      "myTasksWorkspace__l2_shared"
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
