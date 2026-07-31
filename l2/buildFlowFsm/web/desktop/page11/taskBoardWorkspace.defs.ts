/// <mls fileReference="_102045_/l2/buildFlowFsm/web/desktop/page11/taskBoardWorkspace.defs.ts" enhancement="_blank"/>

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
      "id": "section.taskBoardWorkspace.createTaskSection",
      "type": "section",
      "sectionName": "Create Work Task",
      "titleKey": "section.taskBoardWorkspace.createTaskSection.title",
      "mode": "edit",
      "order": 10,
      "organisms": [
        {
          "id": "createWorkTaskForm",
          "type": "commandForm",
          "organismName": "CreateWorkTaskForm",
          "titleKey": "organism.taskBoardWorkspace.cmdCreateWorkTask.title",
          "purpose": "Lets the project manager select the active project, enter task title and description, assign a field worker, and set a due date before submitting the new work task.",
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
    },
    {
      "id": "section.taskBoardWorkspace.editTaskSection",
      "type": "section",
      "sectionName": "Edit Work Task",
      "titleKey": "section.taskBoardWorkspace.editTaskSection.title",
      "mode": "edit",
      "order": 20,
      "organisms": [
        {
          "id": "editWorkTaskForm",
          "type": "commandForm",
          "organismName": "EditWorkTaskForm",
          "titleKey": "organism.taskBoardWorkspace.cmdUpdateWorkTask.title",
          "purpose": "Lets the project manager open an existing work task by route param, edit its title, description, assigned worker, due date, or status, and confirm the update.",
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
          "order": 10,
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
      "id": "section.taskBoardWorkspace.fieldStatusSection",
      "type": "section",
      "sectionName": "Update Task Status",
      "titleKey": "section.taskBoardWorkspace.fieldStatusSection.title",
      "mode": "edit",
      "order": 30,
      "organisms": [
        {
          "id": "fieldStatusUpdateForm",
          "type": "commandForm",
          "organismName": "FieldStatusUpdateForm",
          "titleKey": "organism.taskBoardWorkspace.cmdUpdateWorkTaskStatus.title",
          "purpose": "Lets the field worker view their assigned task's current status and advance it to in-progress or completed, with the system recording timestamps automatically.",
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
          "order": 10,
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
    }
  ],
  "templateId": "wizard_flow",
  "visualStyle": "Desktop-first for PM and billing staff with mobile-optimized field entry; dashboard-driven, status-aware, touch-friendly UI with Gantt-ish timeline views.",
  "layout": {
    "id": "cfe-20260731060448.1000",
    "type": "page",
    "sections": [
      {
        "id": "section.taskBoardWorkspace.createTaskSection",
        "type": "section",
        "sectionName": "Create Work Task",
        "titleKey": "section.taskBoardWorkspace.createTaskSection.title",
        "mode": "edit",
        "order": 10,
        "organisms": [
          {
            "id": "createWorkTaskForm",
            "type": "commandForm",
            "organismName": "CreateWorkTaskForm",
            "titleKey": "organism.taskBoardWorkspace.cmdCreateWorkTask.title",
            "purpose": "Lets the project manager select the active project, enter task title and description, assign a field worker, and set a due date before submitting the new work task.",
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
            "displayHint": "form"
          }
        ]
      },
      {
        "id": "section.taskBoardWorkspace.editTaskSection",
        "type": "section",
        "sectionName": "Edit Work Task",
        "titleKey": "section.taskBoardWorkspace.editTaskSection.title",
        "mode": "edit",
        "order": 20,
        "organisms": [
          {
            "id": "editWorkTaskForm",
            "type": "commandForm",
            "organismName": "EditWorkTaskForm",
            "titleKey": "organism.taskBoardWorkspace.cmdUpdateWorkTask.title",
            "purpose": "Lets the project manager open an existing work task by route param, edit its title, description, assigned worker, due date, or status, and confirm the update.",
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
            "order": 10,
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
            "displayHint": "form"
          }
        ]
      },
      {
        "id": "section.taskBoardWorkspace.fieldStatusSection",
        "type": "section",
        "sectionName": "Update Task Status",
        "titleKey": "section.taskBoardWorkspace.fieldStatusSection.title",
        "mode": "edit",
        "order": 30,
        "organisms": [
          {
            "id": "fieldStatusUpdateForm",
            "type": "commandForm",
            "organismName": "FieldStatusUpdateForm",
            "titleKey": "organism.taskBoardWorkspace.cmdUpdateWorkTaskStatus.title",
            "purpose": "Lets the field worker view their assigned task's current status and advance it to in-progress or completed, with the system recording timestamps automatically.",
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
            "order": 10,
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
    "id": "taskBoardWorkspace__l2_page",
    "type": "l2_page",
    "outputPath": "_102045_/l2/buildFlowFsm/web/desktop/page11/taskBoardWorkspace.ts",
    "defPath": "_102045_/l2/buildFlowFsm/web/desktop/page11/taskBoardWorkspace.defs.ts",
    "dependsFiles": [
      "_102045_/l2/buildFlowFsm/web/shared/taskBoardWorkspace.ts",
      "_102045_/l2/designSystem.ts"
    ],
    "dependsOn": [
      "taskBoardWorkspace__l2_shared"
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
