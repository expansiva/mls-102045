/// <mls fileReference="_102045_/l2/buildFlowFsm/web/desktop/page21/fieldLoggingWorkspace.defs.ts" enhancement="_blank"/>

export const definition = {
  "pageId": "fieldLoggingWorkspace",
  "pageName": "Log Time & Materials",
  "baseClassName": "BuildFlowFsmFieldLoggingWorkspaceBase",
  "actor": "fieldWorker",
  "purpose": "Executar Log Time & Materials.",
  "capabilities": [
    "createTimeLog",
    "voidTimeLog",
    "createMaterialUsage",
    "voidMaterialUsage"
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
    "workspaceId": "fieldLoggingWorkspace",
    "workspaceKind": "operation",
    "actor": "fieldWorker",
    "entity": "TimeLog",
    "owners": [
      {
        "kind": "operation",
        "id": "createTimeLog",
        "defPath": "_102045_/l4/buildFlowFsm/operations/createTimeLog.defs.ts"
      },
      {
        "kind": "operation",
        "id": "voidTimeLog",
        "defPath": "_102045_/l4/buildFlowFsm/operations/voidTimeLog.defs.ts"
      },
      {
        "kind": "operation",
        "id": "createMaterialUsage",
        "defPath": "_102045_/l4/buildFlowFsm/operations/createMaterialUsage.defs.ts"
      },
      {
        "kind": "operation",
        "id": "voidMaterialUsage",
        "defPath": "_102045_/l4/buildFlowFsm/operations/voidMaterialUsage.defs.ts"
      }
    ],
    "microUserFlow": {
      "source": "l4/story.steps",
      "workflowSteps": [],
      "operations": [
        {
          "operationId": "createTimeLog",
          "commandName": "createTimeLog",
          "steps": [
            "Select the work task the hours apply to",
            "Enter the date the work was performed and the number of hours worked",
            "Confirm to post the time log entry"
          ]
        },
        {
          "operationId": "voidTimeLog",
          "commandName": "voidTimeLog",
          "steps": [
            "Select the posted time log entry to void",
            "Provide a reason for voiding the entry",
            "Confirm the void action",
            "System marks the time log as voided with timestamp and reason"
          ]
        },
        {
          "operationId": "createMaterialUsage",
          "commandName": "createMaterialUsage",
          "steps": [
            "Open the active project context",
            "Enter material name, quantity, unit, unit cost, usage date, and optional cost code",
            "Confirm to post the material usage record against the project"
          ]
        },
        {
          "operationId": "voidMaterialUsage",
          "commandName": "voidMaterialUsage",
          "steps": [
            "Select the posted material usage entry to void",
            "Provide a reason for voiding the entry",
            "Confirm the void action",
            "System marks the record as voided with timestamp and reason"
          ]
        }
      ]
    }
  },
  "pageInputs": [],
  "navigationRefs": [],
  "sections": [
    {
      "id": "section.fieldLoggingWorkspace.sec-time-logging",
      "type": "section",
      "sectionName": "Time Logging",
      "titleKey": "section.fieldLoggingWorkspace.sec-time-logging.title",
      "mode": "edit",
      "order": 10,
      "organisms": [
        {
          "id": "org-time-log-form",
          "type": "commandForm",
          "organismName": "TimeLogEntryForm",
          "titleKey": "organism.fieldLoggingWorkspace.submitTimeLog.title",
          "purpose": "Compact inline form for the field worker to select a work task, enter the date and hours worked, and submit a time log entry; workerName is pre-filled from the actor session and logDate defaults to today.",
          "userActions": [
            "submitTimeLog"
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
              "id": "intent.fieldLoggingWorkspace.submitTimeLog.form",
              "intent": "commandForm",
              "submitAction": "submitTimeLog",
              "order": 10
            }
          ]
        },
        {
          "id": "org-posted-time-logs",
          "type": "commandForm",
          "organismName": "PostedTimeLogList",
          "titleKey": "organism.fieldLoggingWorkspace.submitVoidTimeLog.title",
          "purpose": "Shows the time log entries posted in the current session so the worker can review what has been logged and void any erroneous entry inline without navigating away.",
          "userActions": [
            "submitVoidTimeLog"
          ],
          "requiredEntities": [],
          "readsFields": [],
          "writesFields": [],
          "rulesApplied": [
            "jobCostDerivation"
          ],
          "order": 20,
          "intentionRefs": [
            {
              "id": "intent.fieldLoggingWorkspace.submitVoidTimeLog.form",
              "intent": "commandForm",
              "submitAction": "submitVoidTimeLog",
              "order": 10
            }
          ]
        }
      ]
    },
    {
      "id": "section.fieldLoggingWorkspace.sec-material-logging",
      "type": "section",
      "sectionName": "Material Usage Logging",
      "titleKey": "section.fieldLoggingWorkspace.sec-material-logging.title",
      "mode": "edit",
      "order": 20,
      "organisms": [
        {
          "id": "org-material-usage-form",
          "type": "commandForm",
          "organismName": "MaterialUsageEntryForm",
          "titleKey": "organism.fieldLoggingWorkspace.submitMaterialUsage.title",
          "purpose": "Compact inline form for the field worker to enter material name, quantity, unit, unit cost, cost code, and usage date, then submit a material usage record against the active project; recordedBy is pre-filled from session and usageDate defaults to today.",
          "userActions": [
            "submitMaterialUsage"
          ],
          "requiredEntities": [],
          "readsFields": [],
          "writesFields": [],
          "rulesApplied": [
            "jobCostDerivation",
            "materialUsageIsProjectLevel"
          ],
          "order": 10,
          "intentionRefs": [
            {
              "id": "intent.fieldLoggingWorkspace.submitMaterialUsage.form",
              "intent": "commandForm",
              "submitAction": "submitMaterialUsage",
              "order": 10
            }
          ]
        },
        {
          "id": "org-posted-material-usages",
          "type": "commandForm",
          "organismName": "PostedMaterialUsageList",
          "titleKey": "organism.fieldLoggingWorkspace.submitVoidMaterialUsage.title",
          "purpose": "Shows material usage records posted in the current session so the worker can review entries and void any erroneous record inline with a reason.",
          "userActions": [
            "submitVoidMaterialUsage"
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
              "id": "intent.fieldLoggingWorkspace.submitVoidMaterialUsage.form",
              "intent": "commandForm",
              "submitAction": "submitVoidMaterialUsage",
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
    "actor": "Field worker on an active job site",
    "jobToBeDone": "Quickly post time and material usage records against active work tasks and projects so job costing stays accurate without leaving the field.",
    "primaryDecision": "Submit a time log entry (select task → enter date + hours → confirm) or a material usage entry (enter material details → confirm) — and void either if posted in error.",
    "decisiveInfo": [
      "workTaskId (task selection — context-derived, never typed)",
      "logDate (date of work)",
      "hoursWorked (hours to post)",
      "materialName, quantity, unit, unitCost, usageDate (material details)",
      "costCode (optional cost allocation)",
      "voidReason / voidedReason (required only on void)"
    ],
    "usageFrequency": "Daily / continuous — field workers log at end of shift or after each task; speed and low friction are critical; screen may be used on a mobile device.",
    "criticalActions": [
      {
        "action": "submitTimeLog",
        "presentation": "primary-button inside a compact inline form; workerName pre-filled from session, logDate defaults to today"
      },
      {
        "action": "submitVoidTimeLog",
        "presentation": "contextual-transition-actions — a Void button appearing on the selected posted time log row, opening a minimal reason input inline"
      },
      {
        "action": "submitMaterialUsage",
        "presentation": "primary-button inside a compact inline form; recordedBy pre-filled from session, usageDate defaults to today"
      },
      {
        "action": "submitVoidMaterialUsage",
        "presentation": "contextual-transition-actions — a Void button appearing on the selected posted material usage row, opening a minimal reason input inline"
      }
    ],
    "informationHierarchy": [
      "1. Time logging panel — task selector + date + hours form with submit action (most frequent daily action)",
      "2. Posted time logs list — shows today's entries; void action contextual on each posted row",
      "3. Material usage logging panel — material details form with submit action",
      "4. Posted material usage list — shows today's entries; void action contextual on each posted row"
    ],
    "successCriteria": "A field worker can post a time log or material usage record in under 60 seconds, with session-derived defaults pre-filled, and can void an erroneous entry inline without navigating away.",
    "antiPatterns": [
      "Manually typed workTaskId or projectId — must be a picker/selector",
      "Free <select> over all status enum values for voiding — use explicit Void button per row",
      "Separate full-page form for void — keep inline with reason input",
      "Exposing workerName or recordedBy as editable inputs — pre-fill from session",
      "Separate navigation step to reach the void action — must be contextual on the record row",
      "Showing all historical records — scope to today's session by default to reduce noise"
    ]
  },
  "layout": {
    "id": "page21-goal-first",
    "type": "page",
    "sections": [
      {
        "id": "section.fieldLoggingWorkspace.sec-time-logging",
        "type": "section",
        "sectionName": "Time Logging",
        "titleKey": "section.fieldLoggingWorkspace.sec-time-logging.title",
        "mode": "edit",
        "order": 10,
        "organisms": [
          {
            "id": "org-time-log-form",
            "type": "commandForm",
            "organismName": "TimeLogEntryForm",
            "titleKey": "organism.fieldLoggingWorkspace.submitTimeLog.title",
            "purpose": "Compact inline form for the field worker to select a work task, enter the date and hours worked, and submit a time log entry; workerName is pre-filled from the actor session and logDate defaults to today.",
            "userActions": [
              "submitTimeLog"
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
                "id": "intent.fieldLoggingWorkspace.submitTimeLog.form",
                "intent": "commandForm",
                "order": 10,
                "titleKey": "intent.fieldLoggingWorkspace.submitTimeLog.form.title",
                "source": "bff.submitTimeLog",
                "binding": "binding.fieldLoggingWorkspace.submitTimeLog",
                "submitAction": "submitTimeLog",
                "fields": [
                  {
                    "id": "intent.fieldLoggingWorkspace.submitTimeLog.form.field.workTaskId",
                    "field": "workTaskId",
                    "labelKey": "intent.fieldLoggingWorkspace.submitTimeLog.form.field.workTaskId.label",
                    "order": 10,
                    "stateKey": "ui.fieldLoggingWorkspace.input.submitTimeLog.workTaskId"
                  },
                  {
                    "id": "intent.fieldLoggingWorkspace.submitTimeLog.form.field.logDate",
                    "field": "logDate",
                    "labelKey": "intent.fieldLoggingWorkspace.submitTimeLog.form.field.logDate.label",
                    "order": 20,
                    "stateKey": "ui.fieldLoggingWorkspace.input.submitTimeLog.logDate"
                  },
                  {
                    "id": "intent.fieldLoggingWorkspace.submitTimeLog.form.field.hoursWorked",
                    "field": "hoursWorked",
                    "labelKey": "intent.fieldLoggingWorkspace.submitTimeLog.form.field.hoursWorked.label",
                    "order": 30,
                    "stateKey": "ui.fieldLoggingWorkspace.input.submitTimeLog.hoursWorked"
                  },
                  {
                    "id": "intent.fieldLoggingWorkspace.submitTimeLog.form.field.workerName",
                    "field": "workerName",
                    "labelKey": "intent.fieldLoggingWorkspace.submitTimeLog.form.field.workerName.label",
                    "order": 40,
                    "stateKey": "ui.fieldLoggingWorkspace.input.submitTimeLog.workerName"
                  }
                ],
                "columns": [],
                "filters": [],
                "toolbar": [],
                "rowActions": [],
                "actions": [
                  {
                    "id": "intent.fieldLoggingWorkspace.submitTimeLog.form.action.submitTimeLog",
                    "action": "submitTimeLog",
                    "labelKey": "intent.fieldLoggingWorkspace.submitTimeLog.form.action.submitTimeLog",
                    "order": 10,
                    "actionKey": "submitTimeLog"
                  }
                ]
              }
            ],
            "displayHint": "summary-first"
          },
          {
            "id": "org-posted-time-logs",
            "type": "commandForm",
            "organismName": "PostedTimeLogList",
            "titleKey": "organism.fieldLoggingWorkspace.submitVoidTimeLog.title",
            "purpose": "Shows the time log entries posted in the current session so the worker can review what has been logged and void any erroneous entry inline without navigating away.",
            "userActions": [
              "submitVoidTimeLog"
            ],
            "requiredEntities": [],
            "readsFields": [],
            "writesFields": [],
            "rulesApplied": [
              "jobCostDerivation"
            ],
            "order": 20,
            "intentions": [
              {
                "id": "intent.fieldLoggingWorkspace.submitVoidTimeLog.form",
                "intent": "commandForm",
                "order": 10,
                "titleKey": "intent.fieldLoggingWorkspace.submitVoidTimeLog.form.title",
                "source": "bff.submitVoidTimeLog",
                "binding": "binding.fieldLoggingWorkspace.submitVoidTimeLog",
                "submitAction": "submitVoidTimeLog",
                "fields": [
                  {
                    "id": "intent.fieldLoggingWorkspace.submitVoidTimeLog.form.field.voidReason",
                    "field": "voidReason",
                    "labelKey": "intent.fieldLoggingWorkspace.submitVoidTimeLog.form.field.voidReason.label",
                    "order": 10,
                    "stateKey": "ui.fieldLoggingWorkspace.input.submitVoidTimeLog.voidReason"
                  }
                ],
                "columns": [],
                "filters": [],
                "toolbar": [],
                "rowActions": [],
                "actions": [
                  {
                    "id": "intent.fieldLoggingWorkspace.submitVoidTimeLog.form.action.submitVoidTimeLog",
                    "action": "submitVoidTimeLog",
                    "labelKey": "intent.fieldLoggingWorkspace.submitVoidTimeLog.form.action.submitVoidTimeLog",
                    "order": 10,
                    "actionKey": "submitVoidTimeLog"
                  }
                ]
              }
            ],
            "displayHint": "master-detail"
          }
        ]
      },
      {
        "id": "section.fieldLoggingWorkspace.sec-material-logging",
        "type": "section",
        "sectionName": "Material Usage Logging",
        "titleKey": "section.fieldLoggingWorkspace.sec-material-logging.title",
        "mode": "edit",
        "order": 20,
        "organisms": [
          {
            "id": "org-material-usage-form",
            "type": "commandForm",
            "organismName": "MaterialUsageEntryForm",
            "titleKey": "organism.fieldLoggingWorkspace.submitMaterialUsage.title",
            "purpose": "Compact inline form for the field worker to enter material name, quantity, unit, unit cost, cost code, and usage date, then submit a material usage record against the active project; recordedBy is pre-filled from session and usageDate defaults to today.",
            "userActions": [
              "submitMaterialUsage"
            ],
            "requiredEntities": [],
            "readsFields": [],
            "writesFields": [],
            "rulesApplied": [
              "jobCostDerivation",
              "materialUsageIsProjectLevel"
            ],
            "order": 10,
            "intentions": [
              {
                "id": "intent.fieldLoggingWorkspace.submitMaterialUsage.form",
                "intent": "commandForm",
                "order": 10,
                "titleKey": "intent.fieldLoggingWorkspace.submitMaterialUsage.form.title",
                "source": "bff.submitMaterialUsage",
                "binding": "binding.fieldLoggingWorkspace.submitMaterialUsage",
                "submitAction": "submitMaterialUsage",
                "fields": [
                  {
                    "id": "intent.fieldLoggingWorkspace.submitMaterialUsage.form.field.materialName",
                    "field": "materialName",
                    "labelKey": "intent.fieldLoggingWorkspace.submitMaterialUsage.form.field.materialName.label",
                    "order": 10,
                    "stateKey": "ui.fieldLoggingWorkspace.input.submitMaterialUsage.materialName"
                  },
                  {
                    "id": "intent.fieldLoggingWorkspace.submitMaterialUsage.form.field.quantity",
                    "field": "quantity",
                    "labelKey": "intent.fieldLoggingWorkspace.submitMaterialUsage.form.field.quantity.label",
                    "order": 20,
                    "stateKey": "ui.fieldLoggingWorkspace.input.submitMaterialUsage.quantity"
                  },
                  {
                    "id": "intent.fieldLoggingWorkspace.submitMaterialUsage.form.field.unit",
                    "field": "unit",
                    "labelKey": "intent.fieldLoggingWorkspace.submitMaterialUsage.form.field.unit.label",
                    "order": 30,
                    "stateKey": "ui.fieldLoggingWorkspace.input.submitMaterialUsage.unit"
                  },
                  {
                    "id": "intent.fieldLoggingWorkspace.submitMaterialUsage.form.field.unitCost",
                    "field": "unitCost",
                    "labelKey": "intent.fieldLoggingWorkspace.submitMaterialUsage.form.field.unitCost.label",
                    "order": 40,
                    "stateKey": "ui.fieldLoggingWorkspace.input.submitMaterialUsage.unitCost"
                  },
                  {
                    "id": "intent.fieldLoggingWorkspace.submitMaterialUsage.form.field.costCode",
                    "field": "costCode",
                    "labelKey": "intent.fieldLoggingWorkspace.submitMaterialUsage.form.field.costCode.label",
                    "order": 50,
                    "stateKey": "ui.fieldLoggingWorkspace.input.submitMaterialUsage.costCode"
                  },
                  {
                    "id": "intent.fieldLoggingWorkspace.submitMaterialUsage.form.field.usageDate",
                    "field": "usageDate",
                    "labelKey": "intent.fieldLoggingWorkspace.submitMaterialUsage.form.field.usageDate.label",
                    "order": 60,
                    "stateKey": "ui.fieldLoggingWorkspace.input.submitMaterialUsage.usageDate"
                  },
                  {
                    "id": "intent.fieldLoggingWorkspace.submitMaterialUsage.form.field.recordedBy",
                    "field": "recordedBy",
                    "labelKey": "intent.fieldLoggingWorkspace.submitMaterialUsage.form.field.recordedBy.label",
                    "order": 70,
                    "stateKey": "ui.fieldLoggingWorkspace.input.submitMaterialUsage.recordedBy"
                  }
                ],
                "columns": [],
                "filters": [],
                "toolbar": [],
                "rowActions": [],
                "actions": [
                  {
                    "id": "intent.fieldLoggingWorkspace.submitMaterialUsage.form.action.submitMaterialUsage",
                    "action": "submitMaterialUsage",
                    "labelKey": "intent.fieldLoggingWorkspace.submitMaterialUsage.form.action.submitMaterialUsage",
                    "order": 10,
                    "actionKey": "submitMaterialUsage"
                  }
                ]
              }
            ],
            "displayHint": "summary-first"
          },
          {
            "id": "org-posted-material-usages",
            "type": "commandForm",
            "organismName": "PostedMaterialUsageList",
            "titleKey": "organism.fieldLoggingWorkspace.submitVoidMaterialUsage.title",
            "purpose": "Shows material usage records posted in the current session so the worker can review entries and void any erroneous record inline with a reason.",
            "userActions": [
              "submitVoidMaterialUsage"
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
                "id": "intent.fieldLoggingWorkspace.submitVoidMaterialUsage.form",
                "intent": "commandForm",
                "order": 10,
                "titleKey": "intent.fieldLoggingWorkspace.submitVoidMaterialUsage.form.title",
                "source": "bff.submitVoidMaterialUsage",
                "binding": "binding.fieldLoggingWorkspace.submitVoidMaterialUsage",
                "submitAction": "submitVoidMaterialUsage",
                "fields": [
                  {
                    "id": "intent.fieldLoggingWorkspace.submitVoidMaterialUsage.form.field.voidedReason",
                    "field": "voidedReason",
                    "labelKey": "intent.fieldLoggingWorkspace.submitVoidMaterialUsage.form.field.voidedReason.label",
                    "order": 10,
                    "stateKey": "ui.fieldLoggingWorkspace.input.submitVoidMaterialUsage.voidedReason"
                  }
                ],
                "columns": [],
                "filters": [],
                "toolbar": [],
                "rowActions": [],
                "actions": [
                  {
                    "id": "intent.fieldLoggingWorkspace.submitVoidMaterialUsage.form.action.submitVoidMaterialUsage",
                    "action": "submitVoidMaterialUsage",
                    "labelKey": "intent.fieldLoggingWorkspace.submitVoidMaterialUsage.form.action.submitVoidMaterialUsage",
                    "order": 10,
                    "actionKey": "submitVoidMaterialUsage"
                  }
                ]
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
      "id": "binding.fieldLoggingWorkspace.submitTimeLog",
      "source": "bff.submitTimeLog",
      "command": "submitTimeLog",
      "description": "Log hours worked",
      "stateKey": "ui.fieldLoggingWorkspace.output.submitTimeLog",
      "inputStateKeys": [
        "ui.fieldLoggingWorkspace.input.submitTimeLog.workTaskId",
        "ui.fieldLoggingWorkspace.input.submitTimeLog.logDate",
        "ui.fieldLoggingWorkspace.input.submitTimeLog.hoursWorked",
        "ui.fieldLoggingWorkspace.input.submitTimeLog.workerName"
      ]
    },
    {
      "id": "binding.fieldLoggingWorkspace.submitVoidTimeLog",
      "source": "bff.submitVoidTimeLog",
      "command": "submitVoidTimeLog",
      "description": "Void time log",
      "stateKey": "ui.fieldLoggingWorkspace.output.submitVoidTimeLog",
      "inputStateKeys": [
        "ui.fieldLoggingWorkspace.input.submitVoidTimeLog.timeLogId",
        "ui.fieldLoggingWorkspace.input.submitVoidTimeLog.voidReason"
      ]
    },
    {
      "id": "binding.fieldLoggingWorkspace.submitMaterialUsage",
      "source": "bff.submitMaterialUsage",
      "command": "submitMaterialUsage",
      "description": "Log materials used",
      "stateKey": "ui.fieldLoggingWorkspace.output.submitMaterialUsage",
      "inputStateKeys": [
        "ui.fieldLoggingWorkspace.input.submitMaterialUsage.projectId",
        "ui.fieldLoggingWorkspace.input.submitMaterialUsage.materialName",
        "ui.fieldLoggingWorkspace.input.submitMaterialUsage.quantity",
        "ui.fieldLoggingWorkspace.input.submitMaterialUsage.unit",
        "ui.fieldLoggingWorkspace.input.submitMaterialUsage.unitCost",
        "ui.fieldLoggingWorkspace.input.submitMaterialUsage.costCode",
        "ui.fieldLoggingWorkspace.input.submitMaterialUsage.usageDate",
        "ui.fieldLoggingWorkspace.input.submitMaterialUsage.recordedBy"
      ]
    },
    {
      "id": "binding.fieldLoggingWorkspace.submitVoidMaterialUsage",
      "source": "bff.submitVoidMaterialUsage",
      "command": "submitVoidMaterialUsage",
      "description": "Void material usage",
      "stateKey": "ui.fieldLoggingWorkspace.output.submitVoidMaterialUsage",
      "inputStateKeys": [
        "ui.fieldLoggingWorkspace.input.submitVoidMaterialUsage.materialUsageId",
        "ui.fieldLoggingWorkspace.input.submitVoidMaterialUsage.voidedReason"
      ]
    }
  ]
};

export const pipeline = [
  {
    "id": "fieldLoggingWorkspace__page21__l2_page",
    "type": "l2_page",
    "outputPath": "_102045_/l2/buildFlowFsm/web/desktop/page21/fieldLoggingWorkspace.ts",
    "defPath": "_102045_/l2/buildFlowFsm/web/desktop/page21/fieldLoggingWorkspace.defs.ts",
    "dependsFiles": [
      "_102045_/l2/buildFlowFsm/web/shared/fieldLoggingWorkspace.ts",
      "_102045_/l2/designSystem.ts"
    ],
    "dependsOn": [
      "fieldLoggingWorkspace__l2_shared"
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
