/// <mls fileReference="_102045_/l2/buildFlowFsm/web/desktop/page11/fieldLoggingWorkspace.defs.ts" enhancement="_blank"/>

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
          "organismName": "TimeLogForm",
          "titleKey": "organism.fieldLoggingWorkspace.submitTimeLog.title",
          "purpose": "Allows the field worker to select a work task, enter the date and hours worked, and submit a time log entry; workerName is pre-filled from session and shown read-only.",
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
          "id": "org-void-time-log-form",
          "type": "commandForm",
          "organismName": "VoidTimeLogPanel",
          "titleKey": "organism.fieldLoggingWorkspace.submitVoidTimeLog.title",
          "purpose": "Lets the field worker select a posted time log entry and provide a void reason to cancel it, surfacing the destructive action inline after the log form.",
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
      "sectionName": "Material Logging",
      "titleKey": "section.fieldLoggingWorkspace.sec-material-logging.title",
      "mode": "edit",
      "order": 20,
      "organisms": [
        {
          "id": "org-material-usage-form",
          "type": "commandForm",
          "organismName": "MaterialUsageForm",
          "titleKey": "organism.fieldLoggingWorkspace.submitMaterialUsage.title",
          "purpose": "Allows the field worker to enter material name, quantity, unit, unit cost, cost code, and usage date against the active project, then post the material usage record.",
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
          "id": "org-void-material-usage-panel",
          "type": "commandForm",
          "organismName": "VoidMaterialUsagePanel",
          "titleKey": "organism.fieldLoggingWorkspace.submitVoidMaterialUsage.title",
          "purpose": "Lets the field worker select a posted material usage record and provide a void reason to cancel it, keeping the destructive action co-located with the material logging surface.",
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
  "templateId": "single_form",
  "visualStyle": "Desktop-first for PM and billing staff with mobile-optimized field entry; dashboard-driven, status-aware, touch-friendly UI with Gantt-ish timeline views.",
  "layout": {
    "id": "cfe-20260731060448.1000",
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
            "organismName": "TimeLogForm",
            "titleKey": "organism.fieldLoggingWorkspace.submitTimeLog.title",
            "purpose": "Allows the field worker to select a work task, enter the date and hours worked, and submit a time log entry; workerName is pre-filled from session and shown read-only.",
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
            "displayHint": "form"
          },
          {
            "id": "org-void-time-log-form",
            "type": "commandForm",
            "organismName": "VoidTimeLogPanel",
            "titleKey": "organism.fieldLoggingWorkspace.submitVoidTimeLog.title",
            "purpose": "Lets the field worker select a posted time log entry and provide a void reason to cancel it, surfacing the destructive action inline after the log form.",
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
            "displayHint": "contextual-transition-actions"
          }
        ]
      },
      {
        "id": "section.fieldLoggingWorkspace.sec-material-logging",
        "type": "section",
        "sectionName": "Material Logging",
        "titleKey": "section.fieldLoggingWorkspace.sec-material-logging.title",
        "mode": "edit",
        "order": 20,
        "organisms": [
          {
            "id": "org-material-usage-form",
            "type": "commandForm",
            "organismName": "MaterialUsageForm",
            "titleKey": "organism.fieldLoggingWorkspace.submitMaterialUsage.title",
            "purpose": "Allows the field worker to enter material name, quantity, unit, unit cost, cost code, and usage date against the active project, then post the material usage record.",
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
            "displayHint": "form"
          },
          {
            "id": "org-void-material-usage-panel",
            "type": "commandForm",
            "organismName": "VoidMaterialUsagePanel",
            "titleKey": "organism.fieldLoggingWorkspace.submitVoidMaterialUsage.title",
            "purpose": "Lets the field worker select a posted material usage record and provide a void reason to cancel it, keeping the destructive action co-located with the material logging surface.",
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
            "displayHint": "contextual-transition-actions"
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
    "id": "fieldLoggingWorkspace__l2_page",
    "type": "l2_page",
    "outputPath": "_102045_/l2/buildFlowFsm/web/desktop/page11/fieldLoggingWorkspace.ts",
    "defPath": "_102045_/l2/buildFlowFsm/web/desktop/page11/fieldLoggingWorkspace.defs.ts",
    "dependsFiles": [
      "_102045_/l2/buildFlowFsm/web/shared/fieldLoggingWorkspace.ts",
      "_102045_/l2/designSystem.ts"
    ],
    "dependsOn": [
      "fieldLoggingWorkspace__l2_shared"
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
