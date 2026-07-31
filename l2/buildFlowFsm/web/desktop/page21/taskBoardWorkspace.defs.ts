/// <mls fileReference="_102045_/l2/buildFlowFsm/web/desktop/page21/taskBoardWorkspace.defs.ts" enhancement="_blank"/>

export const definition = {
  "pageId": "taskBoardWorkspace",
  "pageName": "Task Board",
  "baseClassName": "BuildFlowFsmTaskBoardWorkspaceBase",
  "actor": "projectManager",
  "purpose": "Executar Task Board.",
  "capabilities": [
    "workTaskLifecycle",
    "updateWorkTask"
  ],
  "flowRefs": {
    "experienceFlows": [
      "workTaskLifecycle"
    ],
    "entityLifecycles": [],
    "taskWorkflows": [
      "workTaskLifecycle"
    ],
    "automations": []
  },
  "pluginRefs": [],
  "mdmRefs": [],
  "origin": {
    "source": "l4-journey",
    "workspaceId": "taskBoardWorkspace",
    "workspaceKind": "workflow",
    "workflowId": "workTaskLifecycle",
    "actor": "projectManager",
    "entity": "WorkTask",
    "owners": [
      {
        "kind": "workflow",
        "id": "workTaskLifecycle",
        "defPath": "_102045_/l4/buildFlowFsm/workflows/workTaskLifecycle.defs.ts"
      },
      {
        "kind": "operation",
        "id": "createWorkTask",
        "defPath": "_102045_/l4/buildFlowFsm/operations/createWorkTask.defs.ts"
      },
      {
        "kind": "operation",
        "id": "updateWorkTask",
        "defPath": "_102045_/l4/buildFlowFsm/operations/updateWorkTask.defs.ts"
      },
      {
        "kind": "operation",
        "id": "updateWorkTaskStatus",
        "defPath": "_102045_/l4/buildFlowFsm/operations/updateWorkTaskStatus.defs.ts"
      }
    ],
    "microUserFlow": {
      "source": "l4/story.steps",
      "workflowSteps": [
        "The project manager creates a work task tied to an active project with a clear description.",
        "The project manager assigns the task to one field worker and sets a due date within the project schedule.",
        "The field worker starts the task and updates its status from assigned to in progress.",
        "The field worker finishes the work and marks the task completed so project tracking stays current."
      ],
      "operations": [
        {
          "operationId": "createWorkTask",
          "commandName": "createWorkTask",
          "steps": [
            "Select or confirm the active project the task belongs to",
            "Enter the task title and optional description",
            "Assign exactly one field worker",
            "Set a due date within the project start and end dates",
            "Confirm creation so the task is stored with status assigned"
          ]
        },
        {
          "operationId": "updateWorkTask",
          "commandName": "updateWorkTask",
          "steps": [
            "Open the work task to edit",
            "Change title, description, assigned field worker, due date, and/or status as needed",
            "Confirm the update"
          ]
        },
        {
          "operationId": "updateWorkTaskStatus",
          "commandName": "updateWorkTaskStatus",
          "steps": [
            "Open the assigned work task being worked on",
            "Select the new lifecycle status (in progress or completed)",
            "Confirm the status change",
            "System records timestamps and persists the updated task"
          ]
        }
      ]
    }
  },
  "pageInputs": [],
  "navigationRefs": [],
  "sections": [
    {
      "id": "section.taskBoardWorkspace.sec-task-board",
      "type": "section",
      "sectionName": "Task Board",
      "titleKey": "section.taskBoardWorkspace.sec-task-board.title",
      "mode": "edit",
      "order": 10,
      "organisms": [
        {
          "id": "org-task-card-board",
          "type": "content",
          "organismName": "TaskCardBoard",
          "titleKey": "organism.taskBoardWorkspace.card-board10.title",
          "purpose": "Displays all work tasks grouped into swimlane columns by lifecycle status (assigned, inProgress, completed, cancelled) so both actors can instantly see the state of every task and select one to act on.",
          "userActions": [],
          "requiredEntities": [],
          "readsFields": [],
          "writesFields": [],
          "rulesApplied": [],
          "order": 10,
          "intentionRefs": [
            {
              "id": "intent.taskBoardWorkspace.card-board10.content",
              "intent": "card-board",
              "order": 10
            }
          ]
        },
        {
          "id": "org-task-status-transitions",
          "type": "commandForm",
          "organismName": "TaskStatusTransitionActions",
          "titleKey": "organism.taskBoardWorkspace.cmdUpdateWorkTaskStatus.title",
          "purpose": "Renders the valid next lifecycle states as explicit action buttons (e.g. 'Start Task', 'Complete Task', 'Cancel Task') on the selected task card so field workers advance status without a free select or manual id entry.",
          "userActions": [
            "cmdUpdateWorkTaskStatus"
          ],
          "requiredEntities": [],
          "readsFields": [],
          "writesFields": [],
          "rulesApplied": [
            "taskStatusUpdateAuthorization",
            "operationsRequireActiveProject",
            "fieldWorkerTaskVisibility"
          ],
          "order": 20,
          "intentionRefs": [
            {
              "id": "intent.taskBoardWorkspace.cmdUpdateWorkTaskStatus.form",
              "intent": "commandForm",
              "submitAction": "cmdUpdateWorkTaskStatus",
              "order": 10
            }
          ]
        }
      ]
    },
    {
      "id": "section.taskBoardWorkspace.sec-task-detail",
      "type": "section",
      "sectionName": "Task Detail & Edit",
      "titleKey": "section.taskBoardWorkspace.sec-task-detail.title",
      "mode": "edit",
      "order": 20,
      "organisms": [
        {
          "id": "org-task-detail-panel",
          "type": "content",
          "organismName": "TaskDetailPanel",
          "titleKey": "organism.taskBoardWorkspace.summary-first10.title",
          "purpose": "Shows the full details of the selected work task (title, description, assignee, due date, current status) as a read-before-write summary so the project manager confirms context before editing.",
          "userActions": [],
          "requiredEntities": [],
          "readsFields": [],
          "writesFields": [],
          "rulesApplied": [],
          "order": 10,
          "intentionRefs": [
            {
              "id": "intent.taskBoardWorkspace.summary-first10.content",
              "intent": "summary-first",
              "order": 10
            }
          ]
        },
        {
          "id": "org-task-edit-form",
          "type": "commandForm",
          "organismName": "TaskEditForm",
          "titleKey": "organism.taskBoardWorkspace.cmdUpdateWorkTask.title",
          "purpose": "Allows the project manager to update task title, description, assigned field worker and due date for the selected task and submit the change.",
          "userActions": [
            "cmdUpdateWorkTask"
          ],
          "requiredEntities": [],
          "readsFields": [],
          "writesFields": [],
          "rulesApplied": [
            "operationsRequireActiveProject",
            "singleTaskAssignment",
            "taskDueDateWithinSchedule",
            "taskStatusUpdateAuthorization"
          ],
          "order": 20,
          "intentionRefs": [
            {
              "id": "intent.taskBoardWorkspace.cmdUpdateWorkTask.form",
              "intent": "commandForm",
              "submitAction": "cmdUpdateWorkTask",
              "order": 10
            }
          ]
        }
      ]
    },
    {
      "id": "section.taskBoardWorkspace.sec-create-task",
      "type": "section",
      "sectionName": "Create New Task",
      "titleKey": "section.taskBoardWorkspace.sec-create-task.title",
      "mode": "edit",
      "order": 30,
      "organisms": [
        {
          "id": "org-create-task-form",
          "type": "commandForm",
          "organismName": "CreateTaskForm",
          "titleKey": "organism.taskBoardWorkspace.cmdCreateWorkTask.title",
          "purpose": "Provides the project manager with a focused inline form to create a new work task: enter title, optional description, assign a field worker via lookup, and set a due date — then submit to store the task with status 'assigned'.",
          "userActions": [
            "cmdCreateWorkTask"
          ],
          "requiredEntities": [],
          "readsFields": [],
          "writesFields": [],
          "rulesApplied": [
            "operationsRequireActiveProject",
            "singleTaskAssignment",
            "taskDueDateWithinSchedule"
          ],
          "order": 10,
          "intentionRefs": [
            {
              "id": "intent.taskBoardWorkspace.cmdCreateWorkTask.form",
              "intent": "commandForm",
              "submitAction": "cmdCreateWorkTask",
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
    "actor": "Project manager (creates/assigns tasks) and field worker (updates task status from the field)",
    "jobToBeDone": "Create work tasks tied to active projects, assign them to field workers with due dates, and allow field workers to advance task lifecycle status so project tracking stays current.",
    "primaryDecision": "Which task to act on next — create a new one or advance the status of an existing assigned task.",
    "decisiveInfo": [
      "title",
      "assignedWorkerId",
      "dueDate",
      "status (current lifecycle state)",
      "projectId (context-derived)"
    ],
    "usageFrequency": "Frequent / operational — project managers use it daily to create and assign tasks; field workers use it throughout the workday to advance task status.",
    "criticalActions": [
      {
        "action": "cmdCreateWorkTask",
        "presentation": "primary-button on an inline creation form pre-seeded with the active project context"
      },
      {
        "action": "cmdUpdateWorkTaskStatus",
        "presentation": "contextual-transition-actions — one button per valid next lifecycle state rendered on the selected task card, never a free select"
      },
      {
        "action": "cmdUpdateWorkTask",
        "presentation": "inline-row-command opening a detail panel for editing title, description, assignee and due date"
      }
    ],
    "informationHierarchy": [
      "1. Task board grouped by lifecycle status (card-board) — gives both actors an at-a-glance view of all tasks and their states",
      "2. Selected task detail panel — shows current title, description, assignee, due date, status; surfaces edit and status-transition actions",
      "3. Create task form — inline panel for the project manager to add a new task to the active project"
    ],
    "successCriteria": "A project manager can create and assign a task in under 60 seconds; a field worker can advance a task status in two taps with no manual id entry; the board always reflects the current lifecycle state without a page reload.",
    "antiPatterns": [
      "Manually typed workTaskId or projectId inputs",
      "Free <select> over all status enum values for lifecycle transitions",
      "Three separate stacked forms as the primary experience",
      "Separate page navigation to edit a task",
      "Showing system-owned timestamps (createdAt, updatedAt, completedAt, cancelledAt) as editable inputs"
    ]
  },
  "layout": {
    "id": "page21-goal-first",
    "type": "page",
    "sections": [
      {
        "id": "section.taskBoardWorkspace.sec-task-board",
        "type": "section",
        "sectionName": "Task Board",
        "titleKey": "section.taskBoardWorkspace.sec-task-board.title",
        "mode": "edit",
        "order": 10,
        "organisms": [
          {
            "id": "org-task-card-board",
            "type": "content",
            "organismName": "TaskCardBoard",
            "titleKey": "organism.taskBoardWorkspace.card-board10.title",
            "purpose": "Displays all work tasks grouped into swimlane columns by lifecycle status (assigned, inProgress, completed, cancelled) so both actors can instantly see the state of every task and select one to act on.",
            "userActions": [],
            "requiredEntities": [],
            "readsFields": [],
            "writesFields": [],
            "rulesApplied": [],
            "order": 10,
            "intentions": [
              {
                "id": "intent.taskBoardWorkspace.card-board10.content",
                "intent": "card-board",
                "order": 10,
                "titleKey": "intent.taskBoardWorkspace.card-board10.content.title",
                "displayHint": "card-board",
                "fields": [],
                "columns": [],
                "filters": [],
                "toolbar": [],
                "rowActions": [],
                "actions": []
              }
            ],
            "displayHint": "card-board"
          },
          {
            "id": "org-task-status-transitions",
            "type": "commandForm",
            "organismName": "TaskStatusTransitionActions",
            "titleKey": "organism.taskBoardWorkspace.cmdUpdateWorkTaskStatus.title",
            "purpose": "Renders the valid next lifecycle states as explicit action buttons (e.g. 'Start Task', 'Complete Task', 'Cancel Task') on the selected task card so field workers advance status without a free select or manual id entry.",
            "userActions": [
              "cmdUpdateWorkTaskStatus"
            ],
            "requiredEntities": [],
            "readsFields": [],
            "writesFields": [],
            "rulesApplied": [
              "taskStatusUpdateAuthorization",
              "operationsRequireActiveProject",
              "fieldWorkerTaskVisibility"
            ],
            "order": 20,
            "intentions": [
              {
                "id": "intent.taskBoardWorkspace.cmdUpdateWorkTaskStatus.form",
                "intent": "commandForm",
                "order": 10,
                "titleKey": "intent.taskBoardWorkspace.cmdUpdateWorkTaskStatus.form.title",
                "source": "bff.cmdUpdateWorkTaskStatus",
                "binding": "binding.taskBoardWorkspace.cmdUpdateWorkTaskStatus",
                "submitAction": "cmdUpdateWorkTaskStatus",
                "fields": [
                  {
                    "id": "intent.taskBoardWorkspace.cmdUpdateWorkTaskStatus.form.field.status",
                    "field": "status",
                    "labelKey": "intent.taskBoardWorkspace.cmdUpdateWorkTaskStatus.form.field.status.label",
                    "order": 10,
                    "stateKey": "ui.taskBoardWorkspace.input.cmdUpdateWorkTaskStatus.status"
                  },
                  {
                    "id": "intent.taskBoardWorkspace.cmdUpdateWorkTaskStatus.form.field.cancellationReason",
                    "field": "cancellationReason",
                    "labelKey": "intent.taskBoardWorkspace.cmdUpdateWorkTaskStatus.form.field.cancellationReason.label",
                    "order": 20,
                    "stateKey": "ui.taskBoardWorkspace.input.cmdUpdateWorkTaskStatus.cancellationReason"
                  },
                  {
                    "id": "intent.taskBoardWorkspace.cmdUpdateWorkTaskStatus.form.field.completedAt",
                    "field": "completedAt",
                    "labelKey": "intent.taskBoardWorkspace.cmdUpdateWorkTaskStatus.form.field.completedAt.label",
                    "order": 30,
                    "stateKey": "ui.taskBoardWorkspace.input.cmdUpdateWorkTaskStatus.completedAt"
                  },
                  {
                    "id": "intent.taskBoardWorkspace.cmdUpdateWorkTaskStatus.form.field.actorId",
                    "field": "actorId",
                    "labelKey": "intent.taskBoardWorkspace.cmdUpdateWorkTaskStatus.form.field.actorId.label",
                    "order": 40,
                    "stateKey": "ui.taskBoardWorkspace.input.cmdUpdateWorkTaskStatus.actorId"
                  }
                ],
                "columns": [],
                "filters": [],
                "toolbar": [],
                "rowActions": [],
                "actions": [
                  {
                    "id": "intent.taskBoardWorkspace.cmdUpdateWorkTaskStatus.form.action.cmdUpdateWorkTaskStatus",
                    "action": "cmdUpdateWorkTaskStatus",
                    "labelKey": "intent.taskBoardWorkspace.cmdUpdateWorkTaskStatus.form.action.cmdUpdateWorkTaskStatus",
                    "order": 10,
                    "actionKey": "cmdUpdateWorkTaskStatus"
                  }
                ]
              }
            ],
            "displayHint": "contextual-transition-actions"
          }
        ]
      },
      {
        "id": "section.taskBoardWorkspace.sec-task-detail",
        "type": "section",
        "sectionName": "Task Detail & Edit",
        "titleKey": "section.taskBoardWorkspace.sec-task-detail.title",
        "mode": "edit",
        "order": 20,
        "organisms": [
          {
            "id": "org-task-detail-panel",
            "type": "content",
            "organismName": "TaskDetailPanel",
            "titleKey": "organism.taskBoardWorkspace.summary-first10.title",
            "purpose": "Shows the full details of the selected work task (title, description, assignee, due date, current status) as a read-before-write summary so the project manager confirms context before editing.",
            "userActions": [],
            "requiredEntities": [],
            "readsFields": [],
            "writesFields": [],
            "rulesApplied": [],
            "order": 10,
            "intentions": [
              {
                "id": "intent.taskBoardWorkspace.summary-first10.content",
                "intent": "summary-first",
                "order": 10,
                "titleKey": "intent.taskBoardWorkspace.summary-first10.content.title",
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
            "id": "org-task-edit-form",
            "type": "commandForm",
            "organismName": "TaskEditForm",
            "titleKey": "organism.taskBoardWorkspace.cmdUpdateWorkTask.title",
            "purpose": "Allows the project manager to update task title, description, assigned field worker and due date for the selected task and submit the change.",
            "userActions": [
              "cmdUpdateWorkTask"
            ],
            "requiredEntities": [],
            "readsFields": [],
            "writesFields": [],
            "rulesApplied": [
              "operationsRequireActiveProject",
              "singleTaskAssignment",
              "taskDueDateWithinSchedule",
              "taskStatusUpdateAuthorization"
            ],
            "order": 20,
            "intentions": [
              {
                "id": "intent.taskBoardWorkspace.cmdUpdateWorkTask.form",
                "intent": "commandForm",
                "order": 10,
                "titleKey": "intent.taskBoardWorkspace.cmdUpdateWorkTask.form.title",
                "source": "bff.cmdUpdateWorkTask",
                "binding": "binding.taskBoardWorkspace.cmdUpdateWorkTask",
                "submitAction": "cmdUpdateWorkTask",
                "fields": [
                  {
                    "id": "intent.taskBoardWorkspace.cmdUpdateWorkTask.form.field.title",
                    "field": "title",
                    "labelKey": "intent.taskBoardWorkspace.cmdUpdateWorkTask.form.field.title.label",
                    "order": 10,
                    "stateKey": "ui.taskBoardWorkspace.input.cmdUpdateWorkTask.title"
                  },
                  {
                    "id": "intent.taskBoardWorkspace.cmdUpdateWorkTask.form.field.description",
                    "field": "description",
                    "labelKey": "intent.taskBoardWorkspace.cmdUpdateWorkTask.form.field.description.label",
                    "order": 20,
                    "stateKey": "ui.taskBoardWorkspace.input.cmdUpdateWorkTask.description"
                  },
                  {
                    "id": "intent.taskBoardWorkspace.cmdUpdateWorkTask.form.field.assignedWorkerId",
                    "field": "assignedWorkerId",
                    "labelKey": "intent.taskBoardWorkspace.cmdUpdateWorkTask.form.field.assignedWorkerId.label",
                    "order": 30,
                    "stateKey": "ui.taskBoardWorkspace.input.cmdUpdateWorkTask.assignedWorkerId"
                  },
                  {
                    "id": "intent.taskBoardWorkspace.cmdUpdateWorkTask.form.field.dueDate",
                    "field": "dueDate",
                    "labelKey": "intent.taskBoardWorkspace.cmdUpdateWorkTask.form.field.dueDate.label",
                    "order": 40,
                    "stateKey": "ui.taskBoardWorkspace.input.cmdUpdateWorkTask.dueDate"
                  },
                  {
                    "id": "intent.taskBoardWorkspace.cmdUpdateWorkTask.form.field.status",
                    "field": "status",
                    "labelKey": "intent.taskBoardWorkspace.cmdUpdateWorkTask.form.field.status.label",
                    "order": 50,
                    "stateKey": "ui.taskBoardWorkspace.input.cmdUpdateWorkTask.status"
                  },
                  {
                    "id": "intent.taskBoardWorkspace.cmdUpdateWorkTask.form.field.cancellationReason",
                    "field": "cancellationReason",
                    "labelKey": "intent.taskBoardWorkspace.cmdUpdateWorkTask.form.field.cancellationReason.label",
                    "order": 60,
                    "stateKey": "ui.taskBoardWorkspace.input.cmdUpdateWorkTask.cancellationReason"
                  }
                ],
                "columns": [],
                "filters": [],
                "toolbar": [],
                "rowActions": [],
                "actions": [
                  {
                    "id": "intent.taskBoardWorkspace.cmdUpdateWorkTask.form.action.cmdUpdateWorkTask",
                    "action": "cmdUpdateWorkTask",
                    "labelKey": "intent.taskBoardWorkspace.cmdUpdateWorkTask.form.action.cmdUpdateWorkTask",
                    "order": 10,
                    "actionKey": "cmdUpdateWorkTask"
                  }
                ]
              }
            ],
            "displayHint": "inline-row-command"
          }
        ]
      },
      {
        "id": "section.taskBoardWorkspace.sec-create-task",
        "type": "section",
        "sectionName": "Create New Task",
        "titleKey": "section.taskBoardWorkspace.sec-create-task.title",
        "mode": "edit",
        "order": 30,
        "organisms": [
          {
            "id": "org-create-task-form",
            "type": "commandForm",
            "organismName": "CreateTaskForm",
            "titleKey": "organism.taskBoardWorkspace.cmdCreateWorkTask.title",
            "purpose": "Provides the project manager with a focused inline form to create a new work task: enter title, optional description, assign a field worker via lookup, and set a due date — then submit to store the task with status 'assigned'.",
            "userActions": [
              "cmdCreateWorkTask"
            ],
            "requiredEntities": [],
            "readsFields": [],
            "writesFields": [],
            "rulesApplied": [
              "operationsRequireActiveProject",
              "singleTaskAssignment",
              "taskDueDateWithinSchedule"
            ],
            "order": 10,
            "intentions": [
              {
                "id": "intent.taskBoardWorkspace.cmdCreateWorkTask.form",
                "intent": "commandForm",
                "order": 10,
                "titleKey": "intent.taskBoardWorkspace.cmdCreateWorkTask.form.title",
                "source": "bff.cmdCreateWorkTask",
                "binding": "binding.taskBoardWorkspace.cmdCreateWorkTask",
                "submitAction": "cmdCreateWorkTask",
                "fields": [
                  {
                    "id": "intent.taskBoardWorkspace.cmdCreateWorkTask.form.field.title",
                    "field": "title",
                    "labelKey": "intent.taskBoardWorkspace.cmdCreateWorkTask.form.field.title.label",
                    "order": 10,
                    "stateKey": "ui.taskBoardWorkspace.input.cmdCreateWorkTask.title"
                  },
                  {
                    "id": "intent.taskBoardWorkspace.cmdCreateWorkTask.form.field.description",
                    "field": "description",
                    "labelKey": "intent.taskBoardWorkspace.cmdCreateWorkTask.form.field.description.label",
                    "order": 20,
                    "stateKey": "ui.taskBoardWorkspace.input.cmdCreateWorkTask.description"
                  },
                  {
                    "id": "intent.taskBoardWorkspace.cmdCreateWorkTask.form.field.assignedWorkerId",
                    "field": "assignedWorkerId",
                    "labelKey": "intent.taskBoardWorkspace.cmdCreateWorkTask.form.field.assignedWorkerId.label",
                    "order": 30,
                    "stateKey": "ui.taskBoardWorkspace.input.cmdCreateWorkTask.assignedWorkerId"
                  },
                  {
                    "id": "intent.taskBoardWorkspace.cmdCreateWorkTask.form.field.dueDate",
                    "field": "dueDate",
                    "labelKey": "intent.taskBoardWorkspace.cmdCreateWorkTask.form.field.dueDate.label",
                    "order": 40,
                    "stateKey": "ui.taskBoardWorkspace.input.cmdCreateWorkTask.dueDate"
                  }
                ],
                "columns": [],
                "filters": [],
                "toolbar": [],
                "rowActions": [],
                "actions": [
                  {
                    "id": "intent.taskBoardWorkspace.cmdCreateWorkTask.form.action.cmdCreateWorkTask",
                    "action": "cmdCreateWorkTask",
                    "labelKey": "intent.taskBoardWorkspace.cmdCreateWorkTask.form.action.cmdCreateWorkTask",
                    "order": 10,
                    "actionKey": "cmdCreateWorkTask"
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
      "id": "binding.taskBoardWorkspace.cmdCreateWorkTask",
      "source": "bff.cmdCreateWorkTask",
      "command": "cmdCreateWorkTask",
      "description": "Create work task",
      "stateKey": "ui.taskBoardWorkspace.output.cmdCreateWorkTask",
      "inputStateKeys": [
        "ui.taskBoardWorkspace.input.cmdCreateWorkTask.projectId",
        "ui.taskBoardWorkspace.input.cmdCreateWorkTask.title",
        "ui.taskBoardWorkspace.input.cmdCreateWorkTask.description",
        "ui.taskBoardWorkspace.input.cmdCreateWorkTask.assignedWorkerId",
        "ui.taskBoardWorkspace.input.cmdCreateWorkTask.dueDate"
      ]
    },
    {
      "id": "binding.taskBoardWorkspace.cmdUpdateWorkTask",
      "source": "bff.cmdUpdateWorkTask",
      "command": "cmdUpdateWorkTask",
      "description": "Update work task assignment and details",
      "stateKey": "ui.taskBoardWorkspace.output.cmdUpdateWorkTask",
      "inputStateKeys": [
        "ui.taskBoardWorkspace.input.cmdUpdateWorkTask.workTaskId",
        "ui.taskBoardWorkspace.input.cmdUpdateWorkTask.title",
        "ui.taskBoardWorkspace.input.cmdUpdateWorkTask.description",
        "ui.taskBoardWorkspace.input.cmdUpdateWorkTask.assignedWorkerId",
        "ui.taskBoardWorkspace.input.cmdUpdateWorkTask.dueDate",
        "ui.taskBoardWorkspace.input.cmdUpdateWorkTask.status",
        "ui.taskBoardWorkspace.input.cmdUpdateWorkTask.cancellationReason"
      ]
    },
    {
      "id": "binding.taskBoardWorkspace.cmdUpdateWorkTaskStatus",
      "source": "bff.cmdUpdateWorkTaskStatus",
      "command": "cmdUpdateWorkTaskStatus",
      "description": "Update work task status",
      "stateKey": "ui.taskBoardWorkspace.output.cmdUpdateWorkTaskStatus",
      "inputStateKeys": [
        "ui.taskBoardWorkspace.input.cmdUpdateWorkTaskStatus.workTaskId",
        "ui.taskBoardWorkspace.input.cmdUpdateWorkTaskStatus.status",
        "ui.taskBoardWorkspace.input.cmdUpdateWorkTaskStatus.cancellationReason",
        "ui.taskBoardWorkspace.input.cmdUpdateWorkTaskStatus.completedAt",
        "ui.taskBoardWorkspace.input.cmdUpdateWorkTaskStatus.actorId"
      ]
    }
  ]
};

export const pipeline = [
  {
    "id": "taskBoardWorkspace__page21__l2_page",
    "type": "l2_page",
    "outputPath": "_102045_/l2/buildFlowFsm/web/desktop/page21/taskBoardWorkspace.ts",
    "defPath": "_102045_/l2/buildFlowFsm/web/desktop/page21/taskBoardWorkspace.defs.ts",
    "dependsFiles": [
      "_102045_/l2/buildFlowFsm/web/shared/taskBoardWorkspace.ts",
      "_102045_/l2/designSystem.ts"
    ],
    "dependsOn": [
      "taskBoardWorkspace__l2_shared"
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
