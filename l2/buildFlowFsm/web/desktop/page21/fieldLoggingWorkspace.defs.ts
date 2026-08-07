/// <mls fileReference="_102045_/l2/buildFlowFsm/web/desktop/page21/fieldLoggingWorkspace.defs.ts" enhancement="_blank"/>

export const definition = {
  "pageId": "fieldLoggingWorkspace",
  "pageName": "Log Time & Materials",
  "baseClassName": "BuildFlowFsmFieldLoggingWorkspaceBase",
  "actor": "fieldWorker",
  "purpose": "Field worker logs hours worked and materials used against active tasks, keeping job costing accurate.",
  "presentation": {
    "categoryRef": "fieldDataCapture"
  },
  "pageObjective": {
    "actor": "Field worker on an active job site",
    "jobToBeDone": "Quickly post time and material entries against the correct work task or project so that job costing stays accurate without leaving the field.",
    "primaryDecision": "Which work task do the hours apply to, and how many hours were worked today?",
    "decisiveInfo": [
      "workTaskId (selected, not typed)",
      "logDate (defaults to today)",
      "hoursWorked",
      "materialName, quantity, unit, unitCost, usageDate",
      "projectId (derived from active context, not typed)"
    ],
    "usageFrequency": "Daily / repeated — field workers log time and materials at the end of each shift or task completion; speed and low friction are critical.",
    "criticalActions": [
      {
        "action": "submitTimeLog",
        "presentation": "primary-button inside a compact inline form; logDate defaults to today, workerName pre-filled from session"
      },
      {
        "action": "submitVoidTimeLog",
        "presentation": "contextual-transition-actions — a Void button appears inline on the posted time log confirmation/row, never a free select"
      },
      {
        "action": "submitMaterialUsage",
        "presentation": "primary-button inside a compact inline form; usageDate defaults to today, recordedBy pre-filled from session"
      },
      {
        "action": "submitVoidMaterialUsage",
        "presentation": "contextual-transition-actions — a Void button appears inline on the posted material usage confirmation/row"
      }
    ],
    "informationHierarchy": [
      "1. Time logging panel — work task picker, date (today default), hours, submit",
      "2. Void time log action — contextual on a posted time log entry",
      "3. Material usage panel — material details form, project context read-only, submit",
      "4. Void material usage action — contextual on a posted material usage entry"
    ],
    "successCriteria": "A field worker can post a time log and a material usage record in under 60 seconds each, with no manual id typing, and can void a mistaken entry inline without navigating away.",
    "antiPatterns": [
      "Manually typed workTaskId or projectId input fields",
      "Free <select> over all status enum values for voiding",
      "Separate full-page form for void operations",
      "Exposing workerName or recordedBy as editable inputs (session-derived)",
      "Requiring the worker to navigate to a separate screen to see the entry they just posted before voiding it"
    ]
  },
  "dataBindings": [
    {
      "id": "binding.fieldLoggingWorkspace.submitTimeLog",
      "source": "bff.submitTimeLog",
      "command": "submitTimeLog",
      "description": "Log hours worked",
      "kind": "command",
      "stateKey": "ui.fieldLoggingWorkspace.output.submitTimeLog",
      "inputStateKeys": [
        "ui.fieldLoggingWorkspace.input.submitTimeLog.workTaskId",
        "ui.fieldLoggingWorkspace.input.submitTimeLog.logDate",
        "ui.fieldLoggingWorkspace.input.submitTimeLog.hoursWorked",
        "ui.fieldLoggingWorkspace.input.submitTimeLog.workerName"
      ],
      "inputs": [
        {
          "name": "workTaskId",
          "stateKey": "ui.fieldLoggingWorkspace.input.submitTimeLog.workTaskId",
          "source": "userInput",
          "required": true,
          "presentation": "form"
        },
        {
          "name": "logDate",
          "stateKey": "ui.fieldLoggingWorkspace.input.submitTimeLog.logDate",
          "source": "userInput",
          "required": true,
          "presentation": "form"
        },
        {
          "name": "hoursWorked",
          "stateKey": "ui.fieldLoggingWorkspace.input.submitTimeLog.hoursWorked",
          "source": "userInput",
          "required": true,
          "presentation": "form"
        },
        {
          "name": "workerName",
          "stateKey": "ui.fieldLoggingWorkspace.input.submitTimeLog.workerName",
          "source": "actorSession",
          "required": true,
          "presentation": "form"
        }
      ]
    },
    {
      "id": "binding.fieldLoggingWorkspace.submitVoidTimeLog",
      "source": "bff.submitVoidTimeLog",
      "command": "submitVoidTimeLog",
      "description": "Void time log",
      "kind": "command",
      "stateKey": "ui.fieldLoggingWorkspace.output.submitVoidTimeLog",
      "inputStateKeys": [
        "ui.fieldLoggingWorkspace.input.submitVoidTimeLog.timeLogId",
        "ui.fieldLoggingWorkspace.input.submitVoidTimeLog.voidReason"
      ],
      "inputs": [
        {
          "name": "timeLogId",
          "stateKey": "ui.fieldLoggingWorkspace.input.submitVoidTimeLog.timeLogId",
          "source": "selectedEntity",
          "required": true,
          "presentation": "selection"
        },
        {
          "name": "voidReason",
          "stateKey": "ui.fieldLoggingWorkspace.input.submitVoidTimeLog.voidReason",
          "source": "userInput",
          "required": true,
          "presentation": "form"
        }
      ]
    },
    {
      "id": "binding.fieldLoggingWorkspace.submitMaterialUsage",
      "source": "bff.submitMaterialUsage",
      "command": "submitMaterialUsage",
      "description": "Log materials used",
      "kind": "command",
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
      ],
      "inputs": [
        {
          "name": "projectId",
          "stateKey": "ui.fieldLoggingWorkspace.input.submitMaterialUsage.projectId",
          "source": "selectedEntity",
          "required": true,
          "presentation": "selection"
        },
        {
          "name": "materialName",
          "stateKey": "ui.fieldLoggingWorkspace.input.submitMaterialUsage.materialName",
          "source": "userInput",
          "required": true,
          "presentation": "form"
        },
        {
          "name": "quantity",
          "stateKey": "ui.fieldLoggingWorkspace.input.submitMaterialUsage.quantity",
          "source": "userInput",
          "required": true,
          "presentation": "form"
        },
        {
          "name": "unit",
          "stateKey": "ui.fieldLoggingWorkspace.input.submitMaterialUsage.unit",
          "source": "userInput",
          "required": true,
          "presentation": "form"
        },
        {
          "name": "unitCost",
          "stateKey": "ui.fieldLoggingWorkspace.input.submitMaterialUsage.unitCost",
          "source": "userInput",
          "required": true,
          "presentation": "form"
        },
        {
          "name": "costCode",
          "stateKey": "ui.fieldLoggingWorkspace.input.submitMaterialUsage.costCode",
          "source": "userInput",
          "required": false,
          "presentation": "form"
        },
        {
          "name": "usageDate",
          "stateKey": "ui.fieldLoggingWorkspace.input.submitMaterialUsage.usageDate",
          "source": "userInput",
          "required": true,
          "presentation": "form"
        },
        {
          "name": "recordedBy",
          "stateKey": "ui.fieldLoggingWorkspace.input.submitMaterialUsage.recordedBy",
          "source": "actorSession",
          "required": true,
          "presentation": "form"
        }
      ]
    },
    {
      "id": "binding.fieldLoggingWorkspace.submitVoidMaterialUsage",
      "source": "bff.submitVoidMaterialUsage",
      "command": "submitVoidMaterialUsage",
      "description": "Void material usage",
      "kind": "command",
      "stateKey": "ui.fieldLoggingWorkspace.output.submitVoidMaterialUsage",
      "inputStateKeys": [
        "ui.fieldLoggingWorkspace.input.submitVoidMaterialUsage.materialUsageId",
        "ui.fieldLoggingWorkspace.input.submitVoidMaterialUsage.voidedReason"
      ],
      "inputs": [
        {
          "name": "materialUsageId",
          "stateKey": "ui.fieldLoggingWorkspace.input.submitVoidMaterialUsage.materialUsageId",
          "source": "selectedEntity",
          "required": true,
          "presentation": "selection"
        },
        {
          "name": "voidedReason",
          "stateKey": "ui.fieldLoggingWorkspace.input.submitVoidMaterialUsage.voidedReason",
          "source": "userInput",
          "required": true,
          "presentation": "form"
        }
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
      "_102020_/l2/agentChangeFrontend/skills/genCfePage21RenderTs.ts",
      "_102020_/l4/collabux/templates/fieldDataCapture/page21.md"
    ],
    "visualStyle": {
      "description": "Desktop-first for PM and billing staff with mobile-optimized field entry; dashboard-driven, status-aware, touch-friendly UI with Gantt-ish timeline views."
    },
    "agent": "agentCfeMaterializeGen"
  }
] as const;
