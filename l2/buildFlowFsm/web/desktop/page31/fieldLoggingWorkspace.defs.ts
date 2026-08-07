/// <mls fileReference="_102045_/l2/buildFlowFsm/web/desktop/page31/fieldLoggingWorkspace.defs.ts" enhancement="_blank"/>

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
    "actor": "Field worker on an active construction or service project",
    "jobToBeDone": "Quickly post time and material usage records against active work tasks and projects so that job costing stays accurate without leaving the field.",
    "primaryDecision": "Submit a time log entry (select task → enter date & hours → confirm) or a material usage entry (enter material details → confirm) — and void either if posted in error.",
    "decisiveInfo": [
      "workTaskId (which task the hours apply to)",
      "logDate and hoursWorked (the time entry itself)",
      "materialName, quantity, unit, unitCost, usageDate (the material entry)",
      "voidReason / voidedReason (correction justification)"
    ],
    "usageFrequency": "Daily / continuous — field workers log time and materials multiple times per shift, often on mobile, hands may be busy.",
    "criticalActions": [
      {
        "action": "submitTimeLog",
        "presentation": "primary-button inside a compact inline form; workerName pre-filled from session, logDate defaults to today"
      },
      {
        "action": "submitVoidTimeLog",
        "presentation": "contextual-transition-actions — a Void button appearing on the selected posted time log row, opening a minimal reason input before confirm"
      },
      {
        "action": "submitMaterialUsage",
        "presentation": "primary-button inside a compact inline form; recordedBy pre-filled from session, usageDate defaults to today"
      },
      {
        "action": "submitVoidMaterialUsage",
        "presentation": "contextual-transition-actions — a Void button appearing on the selected posted material usage row, opening a minimal reason input before confirm"
      }
    ],
    "informationHierarchy": [
      "1. Time logging panel — task selector, date, hours, submit (most frequent action)",
      "2. Posted time log list with inline void action (read-before-write; confirm what was posted)",
      "3. Material logging panel — material details, submit",
      "4. Posted material usage list with inline void action"
    ],
    "successCriteria": "A field worker can post a time entry or material record in under 60 seconds, see it appear in the posted list immediately, and void a mistaken entry with a single tap and a reason — all without navigating away or typing any system-owned identifier.",
    "antiPatterns": [
      "Exposing timeLogId or materialUsageId as typed inputs — these are system-generated and must be derived from selection",
      "Free <select> over all status enum values for voiding — use explicit Void action button on posted rows only",
      "Separate full-page form for void — keep it inline or in a contextual panel",
      "Showing workerName or recordedBy as editable fields — pre-fill from session",
      "Requiring the worker to navigate to a different page to see what was already posted"
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
    "id": "fieldLoggingWorkspace__page31__l2_page",
    "type": "l2_page",
    "outputPath": "_102045_/l2/buildFlowFsm/web/desktop/page31/fieldLoggingWorkspace.ts",
    "defPath": "_102045_/l2/buildFlowFsm/web/desktop/page31/fieldLoggingWorkspace.defs.ts",
    "dependsFiles": [
      "_102045_/l2/buildFlowFsm/web/shared/fieldLoggingWorkspace.ts",
      "_102045_/l2/designSystem.ts"
    ],
    "dependsOn": [
      "fieldLoggingWorkspace__l2_shared"
    ],
    "skills": [
      "_102020_/l2/agentChangeFrontend/skills/genCfePage21RenderTs.ts",
      "_102020_/l4/collabux/templates/fieldDataCapture/page31.md"
    ],
    "visualStyle": {
      "description": "Desktop-first for PM and billing staff with mobile-optimized field entry; dashboard-driven, status-aware, touch-friendly UI with Gantt-ish timeline views."
    },
    "agent": "agentCfeMaterializeGen"
  }
] as const;
