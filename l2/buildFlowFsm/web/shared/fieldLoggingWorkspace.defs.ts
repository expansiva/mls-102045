/// <mls fileReference="_102045_/l2/buildFlowFsm/web/shared/fieldLoggingWorkspace.defs.ts" enhancement="_blank"/>

export const definition = {
  "pageId": "fieldLoggingWorkspace",
  "pageName": "Log Time & Materials",
  "moduleName": "buildFlowFsm",
  "baseClassName": "BuildFlowFsmFieldLoggingWorkspaceBase",
  "routePattern": "/buildFlowFsm/fieldLoggingWorkspace",
  "sourceKind": "operation",
  "ownerIds": [
    "operation:createTimeLog",
    "operation:voidTimeLog",
    "operation:createMaterialUsage",
    "operation:voidMaterialUsage"
  ],
  "operationIds": [
    "createTimeLog",
    "voidTimeLog",
    "createMaterialUsage",
    "voidMaterialUsage"
  ],
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
  "contractRef": {
    "tsPath": "_102045_/l2/buildFlowFsm/web/contracts/fieldLoggingWorkspace.ts",
    "contracts": [
      {
        "commandName": "submitTimeLog",
        "routeConst": "submitTimeLogRoute"
      },
      {
        "commandName": "submitVoidTimeLog",
        "routeConst": "submitVoidTimeLogRoute"
      },
      {
        "commandName": "submitMaterialUsage",
        "routeConst": "submitMaterialUsageRoute"
      },
      {
        "commandName": "submitVoidMaterialUsage",
        "routeConst": "submitVoidMaterialUsageRoute"
      }
    ]
  },
  "layoutRef": {
    "defPath": "_102045_/l2/buildFlowFsm/web/desktop/page11/fieldLoggingWorkspace.defs.ts",
    "layoutId": "cfe-20260731060448.1000"
  },
  "states": [
    {
      "stateKey": "ui.fieldLoggingWorkspace.status",
      "name": "status",
      "kind": "pageStatus",
      "defaultValue": ""
    },
    {
      "stateKey": "ui.fieldLoggingWorkspace.action.submitTimeLog.status",
      "name": "submitTimeLogState",
      "kind": "actionStatus",
      "actionRef": "submitTimeLog",
      "valueSet": [
        "idle",
        "loading",
        "success",
        "error"
      ],
      "defaultValue": "idle"
    },
    {
      "stateKey": "ui.fieldLoggingWorkspace.input.submitTimeLog.workTaskId",
      "name": "submitTimeLogWorkTaskId",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "submitTimeLog",
        "direction": "input",
        "field": "workTaskId"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.fieldLoggingWorkspace.input.submitTimeLog.logDate",
      "name": "submitTimeLogLogDate",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "submitTimeLog",
        "direction": "input",
        "field": "logDate"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.fieldLoggingWorkspace.input.submitTimeLog.hoursWorked",
      "name": "submitTimeLogHoursWorked",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "submitTimeLog",
        "direction": "input",
        "field": "hoursWorked"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.fieldLoggingWorkspace.input.submitTimeLog.workerName",
      "name": "submitTimeLogWorkerName",
      "kind": "input",
      "source": "actorSession",
      "presentation": "form",
      "contractRef": {
        "commandName": "submitTimeLog",
        "direction": "input",
        "field": "workerName"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.fieldLoggingWorkspace.output.submitTimeLog",
      "name": "submitTimeLogOutput",
      "kind": "commandOutput",
      "contractRef": {
        "commandName": "submitTimeLog",
        "direction": "output"
      },
      "defaultValue": null
    },
    {
      "stateKey": "ui.fieldLoggingWorkspace.action.submitTimeLog.error",
      "name": "submitTimeLogError",
      "kind": "actionError",
      "actionRef": "submitTimeLog",
      "defaultValue": ""
    },
    {
      "stateKey": "ui.fieldLoggingWorkspace.action.submitVoidTimeLog.status",
      "name": "submitVoidTimeLogState",
      "kind": "actionStatus",
      "actionRef": "submitVoidTimeLog",
      "valueSet": [
        "idle",
        "loading",
        "success",
        "error"
      ],
      "defaultValue": "idle"
    },
    {
      "stateKey": "ui.fieldLoggingWorkspace.input.submitVoidTimeLog.timeLogId",
      "name": "submitVoidTimeLogTimeLogId",
      "kind": "input",
      "source": "selectedEntity",
      "presentation": "selection",
      "contractRef": {
        "commandName": "submitVoidTimeLog",
        "direction": "input",
        "field": "timeLogId"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.fieldLoggingWorkspace.input.submitVoidTimeLog.voidReason",
      "name": "submitVoidTimeLogVoidReason",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "submitVoidTimeLog",
        "direction": "input",
        "field": "voidReason"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.fieldLoggingWorkspace.output.submitVoidTimeLog",
      "name": "submitVoidTimeLogOutput",
      "kind": "commandOutput",
      "contractRef": {
        "commandName": "submitVoidTimeLog",
        "direction": "output"
      },
      "defaultValue": null
    },
    {
      "stateKey": "ui.fieldLoggingWorkspace.action.submitVoidTimeLog.error",
      "name": "submitVoidTimeLogError",
      "kind": "actionError",
      "actionRef": "submitVoidTimeLog",
      "defaultValue": ""
    },
    {
      "stateKey": "ui.fieldLoggingWorkspace.action.submitMaterialUsage.status",
      "name": "submitMaterialUsageState",
      "kind": "actionStatus",
      "actionRef": "submitMaterialUsage",
      "valueSet": [
        "idle",
        "loading",
        "success",
        "error"
      ],
      "defaultValue": "idle"
    },
    {
      "stateKey": "ui.fieldLoggingWorkspace.input.submitMaterialUsage.projectId",
      "name": "submitMaterialUsageProjectId",
      "kind": "input",
      "source": "selectedEntity",
      "presentation": "selection",
      "contractRef": {
        "commandName": "submitMaterialUsage",
        "direction": "input",
        "field": "projectId"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.fieldLoggingWorkspace.input.submitMaterialUsage.materialName",
      "name": "submitMaterialUsageMaterialName",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "submitMaterialUsage",
        "direction": "input",
        "field": "materialName"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.fieldLoggingWorkspace.input.submitMaterialUsage.quantity",
      "name": "submitMaterialUsageQuantity",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "submitMaterialUsage",
        "direction": "input",
        "field": "quantity"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.fieldLoggingWorkspace.input.submitMaterialUsage.unit",
      "name": "submitMaterialUsageUnit",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "submitMaterialUsage",
        "direction": "input",
        "field": "unit"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.fieldLoggingWorkspace.input.submitMaterialUsage.unitCost",
      "name": "submitMaterialUsageUnitCost",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "submitMaterialUsage",
        "direction": "input",
        "field": "unitCost"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.fieldLoggingWorkspace.input.submitMaterialUsage.costCode",
      "name": "submitMaterialUsageCostCode",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "submitMaterialUsage",
        "direction": "input",
        "field": "costCode"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.fieldLoggingWorkspace.input.submitMaterialUsage.usageDate",
      "name": "submitMaterialUsageUsageDate",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "submitMaterialUsage",
        "direction": "input",
        "field": "usageDate"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.fieldLoggingWorkspace.input.submitMaterialUsage.recordedBy",
      "name": "submitMaterialUsageRecordedBy",
      "kind": "input",
      "source": "actorSession",
      "presentation": "form",
      "contractRef": {
        "commandName": "submitMaterialUsage",
        "direction": "input",
        "field": "recordedBy"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.fieldLoggingWorkspace.output.submitMaterialUsage",
      "name": "submitMaterialUsageOutput",
      "kind": "commandOutput",
      "contractRef": {
        "commandName": "submitMaterialUsage",
        "direction": "output"
      },
      "defaultValue": null
    },
    {
      "stateKey": "ui.fieldLoggingWorkspace.action.submitMaterialUsage.error",
      "name": "submitMaterialUsageError",
      "kind": "actionError",
      "actionRef": "submitMaterialUsage",
      "defaultValue": ""
    },
    {
      "stateKey": "ui.fieldLoggingWorkspace.action.submitVoidMaterialUsage.status",
      "name": "submitVoidMaterialUsageState",
      "kind": "actionStatus",
      "actionRef": "submitVoidMaterialUsage",
      "valueSet": [
        "idle",
        "loading",
        "success",
        "error"
      ],
      "defaultValue": "idle"
    },
    {
      "stateKey": "ui.fieldLoggingWorkspace.input.submitVoidMaterialUsage.materialUsageId",
      "name": "submitVoidMaterialUsageMaterialUsageId",
      "kind": "input",
      "source": "selectedEntity",
      "presentation": "selection",
      "contractRef": {
        "commandName": "submitVoidMaterialUsage",
        "direction": "input",
        "field": "materialUsageId"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.fieldLoggingWorkspace.input.submitVoidMaterialUsage.voidedReason",
      "name": "submitVoidMaterialUsageVoidedReason",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "submitVoidMaterialUsage",
        "direction": "input",
        "field": "voidedReason"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.fieldLoggingWorkspace.output.submitVoidMaterialUsage",
      "name": "submitVoidMaterialUsageOutput",
      "kind": "commandOutput",
      "contractRef": {
        "commandName": "submitVoidMaterialUsage",
        "direction": "output"
      },
      "defaultValue": null
    },
    {
      "stateKey": "ui.fieldLoggingWorkspace.action.submitVoidMaterialUsage.error",
      "name": "submitVoidMaterialUsageError",
      "kind": "actionError",
      "actionRef": "submitVoidMaterialUsage",
      "defaultValue": ""
    }
  ],
  "actions": [
    {
      "actionId": "submitTimeLog",
      "kind": "command",
      "commandRef": "submitTimeLog",
      "routeKey": "buildFlowFsm.fieldLoggingWorkspace.submitTimeLog",
      "purpose": "Log hours worked",
      "methodName": "submitTimeLog",
      "handlerName": "handleSubmitTimeLogClick",
      "inputStateKeys": [
        "ui.fieldLoggingWorkspace.input.submitTimeLog.workTaskId",
        "ui.fieldLoggingWorkspace.input.submitTimeLog.logDate",
        "ui.fieldLoggingWorkspace.input.submitTimeLog.hoursWorked",
        "ui.fieldLoggingWorkspace.input.submitTimeLog.workerName"
      ],
      "routeParamInputStateKeys": [],
      "selectedEntityInputStateKeys": [],
      "outputStateKeys": [
        "ui.fieldLoggingWorkspace.output.submitTimeLog"
      ],
      "statusStateKey": "ui.fieldLoggingWorkspace.action.submitTimeLog.status",
      "errorStateKey": "ui.fieldLoggingWorkspace.action.submitTimeLog.error",
      "feedback": {
        "successMessageKey": "action.submitTimeLog.success",
        "errorMessageKey": "action.submitTimeLog.error",
        "dismissible": true
      },
      "clearInputStateKeys": [
        "ui.fieldLoggingWorkspace.input.submitTimeLog.workTaskId",
        "ui.fieldLoggingWorkspace.input.submitTimeLog.logDate",
        "ui.fieldLoggingWorkspace.input.submitTimeLog.hoursWorked",
        "ui.fieldLoggingWorkspace.input.submitTimeLog.workerName"
      ]
    },
    {
      "actionId": "submitVoidTimeLog",
      "kind": "command",
      "commandRef": "submitVoidTimeLog",
      "routeKey": "buildFlowFsm.fieldLoggingWorkspace.submitVoidTimeLog",
      "purpose": "Void time log",
      "methodName": "submitVoidTimeLog",
      "handlerName": "handleSubmitVoidTimeLogClick",
      "inputStateKeys": [
        "ui.fieldLoggingWorkspace.input.submitVoidTimeLog.timeLogId",
        "ui.fieldLoggingWorkspace.input.submitVoidTimeLog.voidReason"
      ],
      "routeParamInputStateKeys": [],
      "selectedEntityInputStateKeys": [
        "ui.fieldLoggingWorkspace.input.submitVoidTimeLog.timeLogId"
      ],
      "outputStateKeys": [
        "ui.fieldLoggingWorkspace.output.submitVoidTimeLog"
      ],
      "statusStateKey": "ui.fieldLoggingWorkspace.action.submitVoidTimeLog.status",
      "errorStateKey": "ui.fieldLoggingWorkspace.action.submitVoidTimeLog.error",
      "feedback": {
        "successMessageKey": "action.submitVoidTimeLog.success",
        "errorMessageKey": "action.submitVoidTimeLog.error",
        "dismissible": true
      },
      "clearInputStateKeys": [
        "ui.fieldLoggingWorkspace.input.submitVoidTimeLog.timeLogId",
        "ui.fieldLoggingWorkspace.input.submitVoidTimeLog.voidReason"
      ]
    },
    {
      "actionId": "submitMaterialUsage",
      "kind": "command",
      "commandRef": "submitMaterialUsage",
      "routeKey": "buildFlowFsm.fieldLoggingWorkspace.submitMaterialUsage",
      "purpose": "Log materials used",
      "methodName": "submitMaterialUsage",
      "handlerName": "handleSubmitMaterialUsageClick",
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
      "routeParamInputStateKeys": [],
      "selectedEntityInputStateKeys": [
        "ui.fieldLoggingWorkspace.input.submitMaterialUsage.projectId"
      ],
      "outputStateKeys": [
        "ui.fieldLoggingWorkspace.output.submitMaterialUsage"
      ],
      "statusStateKey": "ui.fieldLoggingWorkspace.action.submitMaterialUsage.status",
      "errorStateKey": "ui.fieldLoggingWorkspace.action.submitMaterialUsage.error",
      "feedback": {
        "successMessageKey": "action.submitMaterialUsage.success",
        "errorMessageKey": "action.submitMaterialUsage.error",
        "dismissible": true
      },
      "clearInputStateKeys": [
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
      "actionId": "submitVoidMaterialUsage",
      "kind": "command",
      "commandRef": "submitVoidMaterialUsage",
      "routeKey": "buildFlowFsm.fieldLoggingWorkspace.submitVoidMaterialUsage",
      "purpose": "Void material usage",
      "methodName": "submitVoidMaterialUsage",
      "handlerName": "handleSubmitVoidMaterialUsageClick",
      "inputStateKeys": [
        "ui.fieldLoggingWorkspace.input.submitVoidMaterialUsage.materialUsageId",
        "ui.fieldLoggingWorkspace.input.submitVoidMaterialUsage.voidedReason"
      ],
      "routeParamInputStateKeys": [],
      "selectedEntityInputStateKeys": [
        "ui.fieldLoggingWorkspace.input.submitVoidMaterialUsage.materialUsageId"
      ],
      "outputStateKeys": [
        "ui.fieldLoggingWorkspace.output.submitVoidMaterialUsage"
      ],
      "statusStateKey": "ui.fieldLoggingWorkspace.action.submitVoidMaterialUsage.status",
      "errorStateKey": "ui.fieldLoggingWorkspace.action.submitVoidMaterialUsage.error",
      "feedback": {
        "successMessageKey": "action.submitVoidMaterialUsage.success",
        "errorMessageKey": "action.submitVoidMaterialUsage.error",
        "dismissible": true
      },
      "clearInputStateKeys": [
        "ui.fieldLoggingWorkspace.input.submitVoidMaterialUsage.materialUsageId",
        "ui.fieldLoggingWorkspace.input.submitVoidMaterialUsage.voidedReason"
      ]
    },
    {
      "actionId": "set.submitTimeLogWorkTaskId",
      "kind": "stateSetter",
      "stateKey": "ui.fieldLoggingWorkspace.input.submitTimeLog.workTaskId",
      "methodName": "setSubmitTimeLogWorkTaskId",
      "handlerName": "handleSubmitTimeLogWorkTaskIdChange"
    },
    {
      "actionId": "set.submitTimeLogLogDate",
      "kind": "stateSetter",
      "stateKey": "ui.fieldLoggingWorkspace.input.submitTimeLog.logDate",
      "methodName": "setSubmitTimeLogLogDate",
      "handlerName": "handleSubmitTimeLogLogDateChange"
    },
    {
      "actionId": "set.submitTimeLogHoursWorked",
      "kind": "stateSetter",
      "stateKey": "ui.fieldLoggingWorkspace.input.submitTimeLog.hoursWorked",
      "methodName": "setSubmitTimeLogHoursWorked",
      "handlerName": "handleSubmitTimeLogHoursWorkedChange"
    },
    {
      "actionId": "set.submitTimeLogWorkerName",
      "kind": "stateSetter",
      "stateKey": "ui.fieldLoggingWorkspace.input.submitTimeLog.workerName",
      "methodName": "setSubmitTimeLogWorkerName",
      "handlerName": "handleSubmitTimeLogWorkerNameChange"
    },
    {
      "actionId": "set.submitVoidTimeLogTimeLogId",
      "kind": "stateSetter",
      "stateKey": "ui.fieldLoggingWorkspace.input.submitVoidTimeLog.timeLogId",
      "methodName": "setSubmitVoidTimeLogTimeLogId",
      "handlerName": "handleSubmitVoidTimeLogTimeLogIdChange"
    },
    {
      "actionId": "set.submitVoidTimeLogVoidReason",
      "kind": "stateSetter",
      "stateKey": "ui.fieldLoggingWorkspace.input.submitVoidTimeLog.voidReason",
      "methodName": "setSubmitVoidTimeLogVoidReason",
      "handlerName": "handleSubmitVoidTimeLogVoidReasonChange"
    },
    {
      "actionId": "set.submitMaterialUsageProjectId",
      "kind": "stateSetter",
      "stateKey": "ui.fieldLoggingWorkspace.input.submitMaterialUsage.projectId",
      "methodName": "setSubmitMaterialUsageProjectId",
      "handlerName": "handleSubmitMaterialUsageProjectIdChange"
    },
    {
      "actionId": "set.submitMaterialUsageMaterialName",
      "kind": "stateSetter",
      "stateKey": "ui.fieldLoggingWorkspace.input.submitMaterialUsage.materialName",
      "methodName": "setSubmitMaterialUsageMaterialName",
      "handlerName": "handleSubmitMaterialUsageMaterialNameChange"
    },
    {
      "actionId": "set.submitMaterialUsageQuantity",
      "kind": "stateSetter",
      "stateKey": "ui.fieldLoggingWorkspace.input.submitMaterialUsage.quantity",
      "methodName": "setSubmitMaterialUsageQuantity",
      "handlerName": "handleSubmitMaterialUsageQuantityChange"
    },
    {
      "actionId": "set.submitMaterialUsageUnit",
      "kind": "stateSetter",
      "stateKey": "ui.fieldLoggingWorkspace.input.submitMaterialUsage.unit",
      "methodName": "setSubmitMaterialUsageUnit",
      "handlerName": "handleSubmitMaterialUsageUnitChange"
    },
    {
      "actionId": "set.submitMaterialUsageUnitCost",
      "kind": "stateSetter",
      "stateKey": "ui.fieldLoggingWorkspace.input.submitMaterialUsage.unitCost",
      "methodName": "setSubmitMaterialUsageUnitCost",
      "handlerName": "handleSubmitMaterialUsageUnitCostChange"
    },
    {
      "actionId": "set.submitMaterialUsageCostCode",
      "kind": "stateSetter",
      "stateKey": "ui.fieldLoggingWorkspace.input.submitMaterialUsage.costCode",
      "methodName": "setSubmitMaterialUsageCostCode",
      "handlerName": "handleSubmitMaterialUsageCostCodeChange"
    },
    {
      "actionId": "set.submitMaterialUsageUsageDate",
      "kind": "stateSetter",
      "stateKey": "ui.fieldLoggingWorkspace.input.submitMaterialUsage.usageDate",
      "methodName": "setSubmitMaterialUsageUsageDate",
      "handlerName": "handleSubmitMaterialUsageUsageDateChange"
    },
    {
      "actionId": "set.submitMaterialUsageRecordedBy",
      "kind": "stateSetter",
      "stateKey": "ui.fieldLoggingWorkspace.input.submitMaterialUsage.recordedBy",
      "methodName": "setSubmitMaterialUsageRecordedBy",
      "handlerName": "handleSubmitMaterialUsageRecordedByChange"
    },
    {
      "actionId": "set.submitVoidMaterialUsageMaterialUsageId",
      "kind": "stateSetter",
      "stateKey": "ui.fieldLoggingWorkspace.input.submitVoidMaterialUsage.materialUsageId",
      "methodName": "setSubmitVoidMaterialUsageMaterialUsageId",
      "handlerName": "handleSubmitVoidMaterialUsageMaterialUsageIdChange"
    },
    {
      "actionId": "set.submitVoidMaterialUsageVoidedReason",
      "kind": "stateSetter",
      "stateKey": "ui.fieldLoggingWorkspace.input.submitVoidMaterialUsage.voidedReason",
      "methodName": "setSubmitVoidMaterialUsageVoidedReason",
      "handlerName": "handleSubmitVoidMaterialUsageVoidedReasonChange"
    }
  ],
  "initialLoads": [],
  "businessContextRefs": [],
  "navigationRefs": [],
  "i18nMeta": {
    "defaultLocale": "en",
    "activeLocales": [
      "en",
      "pt",
      "es"
    ],
    "runtimeLocales": [
      "en",
      "pt-br",
      "es"
    ]
  },
  "i18n": {
    "section.fieldLoggingWorkspace.sec-time-logging.title": "Time Logging",
    "organism.fieldLoggingWorkspace.submitTimeLog.title": "Log hours worked",
    "intent.fieldLoggingWorkspace.submitTimeLog.form.title": "Log hours worked",
    "intent.fieldLoggingWorkspace.submitTimeLog.form.action.submitTimeLog": "Log hours worked",
    "intent.fieldLoggingWorkspace.submitTimeLog.form.field.workTaskId.label": "Work Task Id",
    "intent.fieldLoggingWorkspace.submitTimeLog.form.field.logDate.label": "Log Date",
    "intent.fieldLoggingWorkspace.submitTimeLog.form.field.hoursWorked.label": "Hours Worked",
    "intent.fieldLoggingWorkspace.submitTimeLog.form.field.workerName.label": "Worker Name",
    "organism.fieldLoggingWorkspace.submitVoidTimeLog.title": "Void time log",
    "intent.fieldLoggingWorkspace.submitVoidTimeLog.form.title": "Void time log",
    "intent.fieldLoggingWorkspace.submitVoidTimeLog.form.action.submitVoidTimeLog": "Void time log",
    "intent.fieldLoggingWorkspace.submitVoidTimeLog.form.field.voidReason.label": "Void Reason",
    "section.fieldLoggingWorkspace.sec-material-logging.title": "Material Usage Logging",
    "organism.fieldLoggingWorkspace.submitMaterialUsage.title": "Log materials used",
    "intent.fieldLoggingWorkspace.submitMaterialUsage.form.title": "Log materials used",
    "intent.fieldLoggingWorkspace.submitMaterialUsage.form.action.submitMaterialUsage": "Log materials used",
    "intent.fieldLoggingWorkspace.submitMaterialUsage.form.field.materialName.label": "Material Name",
    "intent.fieldLoggingWorkspace.submitMaterialUsage.form.field.quantity.label": "Quantity",
    "intent.fieldLoggingWorkspace.submitMaterialUsage.form.field.unit.label": "Unit",
    "intent.fieldLoggingWorkspace.submitMaterialUsage.form.field.unitCost.label": "Unit Cost",
    "intent.fieldLoggingWorkspace.submitMaterialUsage.form.field.costCode.label": "Cost Code",
    "intent.fieldLoggingWorkspace.submitMaterialUsage.form.field.usageDate.label": "Usage Date",
    "intent.fieldLoggingWorkspace.submitMaterialUsage.form.field.recordedBy.label": "Recorded By",
    "organism.fieldLoggingWorkspace.submitVoidMaterialUsage.title": "Void material usage",
    "intent.fieldLoggingWorkspace.submitVoidMaterialUsage.form.title": "Void material usage",
    "intent.fieldLoggingWorkspace.submitVoidMaterialUsage.form.action.submitVoidMaterialUsage": "Void material usage",
    "intent.fieldLoggingWorkspace.submitVoidMaterialUsage.form.field.voidedReason.label": "Voided Reason"
  },
  "automation": {
    "statePrefix": "ui.fieldLoggingWorkspace",
    "stateKeys": [
      "ui.fieldLoggingWorkspace.status",
      "ui.fieldLoggingWorkspace.action.submitTimeLog.status",
      "ui.fieldLoggingWorkspace.input.submitTimeLog.workTaskId",
      "ui.fieldLoggingWorkspace.input.submitTimeLog.logDate",
      "ui.fieldLoggingWorkspace.input.submitTimeLog.hoursWorked",
      "ui.fieldLoggingWorkspace.input.submitTimeLog.workerName",
      "ui.fieldLoggingWorkspace.output.submitTimeLog",
      "ui.fieldLoggingWorkspace.action.submitTimeLog.error",
      "ui.fieldLoggingWorkspace.action.submitVoidTimeLog.status",
      "ui.fieldLoggingWorkspace.input.submitVoidTimeLog.timeLogId",
      "ui.fieldLoggingWorkspace.input.submitVoidTimeLog.voidReason",
      "ui.fieldLoggingWorkspace.output.submitVoidTimeLog",
      "ui.fieldLoggingWorkspace.action.submitVoidTimeLog.error",
      "ui.fieldLoggingWorkspace.action.submitMaterialUsage.status",
      "ui.fieldLoggingWorkspace.input.submitMaterialUsage.projectId",
      "ui.fieldLoggingWorkspace.input.submitMaterialUsage.materialName",
      "ui.fieldLoggingWorkspace.input.submitMaterialUsage.quantity",
      "ui.fieldLoggingWorkspace.input.submitMaterialUsage.unit",
      "ui.fieldLoggingWorkspace.input.submitMaterialUsage.unitCost",
      "ui.fieldLoggingWorkspace.input.submitMaterialUsage.costCode",
      "ui.fieldLoggingWorkspace.input.submitMaterialUsage.usageDate",
      "ui.fieldLoggingWorkspace.input.submitMaterialUsage.recordedBy",
      "ui.fieldLoggingWorkspace.output.submitMaterialUsage",
      "ui.fieldLoggingWorkspace.action.submitMaterialUsage.error",
      "ui.fieldLoggingWorkspace.action.submitVoidMaterialUsage.status",
      "ui.fieldLoggingWorkspace.input.submitVoidMaterialUsage.materialUsageId",
      "ui.fieldLoggingWorkspace.input.submitVoidMaterialUsage.voidedReason",
      "ui.fieldLoggingWorkspace.output.submitVoidMaterialUsage",
      "ui.fieldLoggingWorkspace.action.submitVoidMaterialUsage.error"
    ],
    "actionIds": [
      "submitTimeLog",
      "submitVoidTimeLog",
      "submitMaterialUsage",
      "submitVoidMaterialUsage",
      "set.submitTimeLogWorkTaskId",
      "set.submitTimeLogLogDate",
      "set.submitTimeLogHoursWorked",
      "set.submitTimeLogWorkerName",
      "set.submitVoidTimeLogTimeLogId",
      "set.submitVoidTimeLogVoidReason",
      "set.submitMaterialUsageProjectId",
      "set.submitMaterialUsageMaterialName",
      "set.submitMaterialUsageQuantity",
      "set.submitMaterialUsageUnit",
      "set.submitMaterialUsageUnitCost",
      "set.submitMaterialUsageCostCode",
      "set.submitMaterialUsageUsageDate",
      "set.submitMaterialUsageRecordedBy",
      "set.submitVoidMaterialUsageMaterialUsageId",
      "set.submitVoidMaterialUsageVoidedReason"
    ]
  }
};

export const pipeline = [
  {
    "id": "fieldLoggingWorkspace__l2_shared",
    "type": "l2_shared",
    "outputPath": "_102045_/l2/buildFlowFsm/web/shared/fieldLoggingWorkspace.ts",
    "defPath": "_102045_/l2/buildFlowFsm/web/shared/fieldLoggingWorkspace.defs.ts",
    "dependsFiles": [
      "_102045_/l2/buildFlowFsm/web/contracts/fieldLoggingWorkspace.ts",
      "_102029_.d.ts"
    ],
    "dependsOn": [],
    "skills": [
      "_102020_/l2/agentChangeFrontend/skills/genCfeSharedTs.ts"
    ],
    "rulesApplied": [
      "jobCostDerivation",
      "timeLogLinkingRequired",
      "materialUsageIsProjectLevel"
    ],
    "agent": "agentCfeMaterializeGen"
  }
] as const;
