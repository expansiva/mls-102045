/// <mls fileReference="_102045_/l2/buildFlowFsm/web/shared/statusReportWorkspace.defs.ts" enhancement="_blank"/>

export const definition = {
  "pageId": "statusReportWorkspace",
  "pageName": "Status Reports",
  "moduleName": "buildFlowFsm",
  "baseClassName": "BuildFlowFsmStatusReportWorkspaceBase",
  "routePattern": "/buildFlowFsm/statusReportWorkspace/:statusReportId?",
  "sourceKind": "workflow",
  "ownerIds": [
    "workflow:statusReportLifecycle",
    "operation:generateStatusReport",
    "operation:updateStatusReport",
    "operation:updateStatusReportStatus"
  ],
  "operationIds": [
    "generateStatusReport",
    "updateStatusReport",
    "updateStatusReportStatus"
  ],
  "origin": {
    "source": "l4-journey",
    "workspaceId": "statusReportWorkspace",
    "workspaceKind": "workflow",
    "workflowId": "statusReportLifecycle",
    "actor": "projectManager",
    "entity": "StatusReport",
    "owners": [
      {
        "kind": "workflow",
        "id": "statusReportLifecycle",
        "defPath": "_102045_/l4/buildFlowFsm/workflows/statusReportLifecycle.defs.ts"
      },
      {
        "kind": "operation",
        "id": "generateStatusReport",
        "defPath": "_102045_/l4/buildFlowFsm/operations/generateStatusReport.defs.ts"
      },
      {
        "kind": "operation",
        "id": "updateStatusReport",
        "defPath": "_102045_/l4/buildFlowFsm/operations/updateStatusReport.defs.ts"
      },
      {
        "kind": "operation",
        "id": "updateStatusReportStatus",
        "defPath": "_102045_/l4/buildFlowFsm/operations/updateStatusReportStatus.defs.ts"
      }
    ],
    "microUserFlow": {
      "source": "l4/story.steps",
      "workflowSteps": [
        "The project manager opens the project detail and triggers AI generation of a status report from live tasks, time logs, and materials.",
        "The system creates the report in draft and surfaces delay-risk suggestions for review.",
        "The project manager reviews and edits the draft, then marks the report as reviewed.",
        "The project manager shares the reviewed report with the client.",
        "The client receives and reads the progress summary without internal editing access."
      ],
      "operations": [
        {
          "operationId": "generateStatusReport",
          "commandName": "generateStatusReport",
          "steps": [
            "Project manager opens a project and chooses to generate a status report",
            "Project manager provides the reporting period start and end dates",
            "System gathers live work tasks, time logs, and material usage for the project and period",
            "System calls the platform LLM proxy to produce summary, overviews, and delay-risk assessment",
            "System persists the new status report in draft state for PM review"
          ]
        },
        {
          "operationId": "updateStatusReport",
          "commandName": "updateStatusReport",
          "steps": [
            "Open an existing draft status report",
            "Review and edit the summary and overview sections as needed",
            "Add or update project manager notes",
            "Save the content changes"
          ]
        },
        {
          "operationId": "updateStatusReportStatus",
          "commandName": "updateStatusReportStatus",
          "steps": [
            "Open the status report to update",
            "Choose the next lifecycle status (reviewed or shared)",
            "Confirm the status change so timestamps and visibility update"
          ]
        }
      ]
    }
  },
  "contractRef": {
    "tsPath": "_102045_/l2/buildFlowFsm/web/contracts/statusReportWorkspace.ts",
    "contracts": [
      {
        "commandName": "generateReport",
        "routeConst": "generateReportRoute"
      },
      {
        "commandName": "updateReportContent",
        "routeConst": "updateReportContentRoute"
      },
      {
        "commandName": "updateReportStatus",
        "routeConst": "updateReportStatusRoute"
      }
    ]
  },
  "layoutRef": {
    "defPath": "_102045_/l2/buildFlowFsm/web/desktop/page11/statusReportWorkspace.defs.ts",
    "layoutId": "wizard_flow"
  },
  "states": [
    {
      "stateKey": "ui.statusReportWorkspace.status",
      "name": "status",
      "kind": "pageStatus",
      "defaultValue": ""
    },
    {
      "stateKey": "ui.statusReportWorkspace.action.generateReport.status",
      "name": "generateReportState",
      "kind": "actionStatus",
      "actionRef": "generateReport",
      "valueSet": [
        "idle",
        "loading",
        "success",
        "error"
      ],
      "defaultValue": "idle"
    },
    {
      "stateKey": "ui.statusReportWorkspace.input.generateReport.projectId",
      "name": "generateReportProjectId",
      "kind": "input",
      "source": "selectedEntity",
      "presentation": "selection",
      "contractRef": {
        "commandName": "generateReport",
        "direction": "input",
        "field": "projectId"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.statusReportWorkspace.input.generateReport.reportPeriodStart",
      "name": "generateReportReportPeriodStart",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "generateReport",
        "direction": "input",
        "field": "reportPeriodStart"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.statusReportWorkspace.input.generateReport.reportPeriodEnd",
      "name": "generateReportReportPeriodEnd",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "generateReport",
        "direction": "input",
        "field": "reportPeriodEnd"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.statusReportWorkspace.output.generateReport",
      "name": "generateReportOutput",
      "kind": "commandOutput",
      "contractRef": {
        "commandName": "generateReport",
        "direction": "output"
      },
      "defaultValue": null
    },
    {
      "stateKey": "ui.statusReportWorkspace.action.generateReport.error",
      "name": "generateReportError",
      "kind": "actionError",
      "actionRef": "generateReport",
      "defaultValue": ""
    },
    {
      "stateKey": "ui.statusReportWorkspace.action.updateReportContent.status",
      "name": "updateReportContentState",
      "kind": "actionStatus",
      "actionRef": "updateReportContent",
      "valueSet": [
        "idle",
        "loading",
        "success",
        "error"
      ],
      "defaultValue": "idle"
    },
    {
      "stateKey": "ui.statusReportWorkspace.input.updateReportContent.statusReportId",
      "name": "updateReportContentStatusReportId",
      "kind": "input",
      "source": "routeParam",
      "presentation": "route",
      "contractRef": {
        "commandName": "updateReportContent",
        "direction": "input",
        "field": "statusReportId"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.statusReportWorkspace.input.updateReportContent.summary",
      "name": "updateReportContentSummary",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "updateReportContent",
        "direction": "input",
        "field": "summary"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.statusReportWorkspace.input.updateReportContent.tasksOverview",
      "name": "updateReportContentTasksOverview",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "updateReportContent",
        "direction": "input",
        "field": "tasksOverview"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.statusReportWorkspace.input.updateReportContent.timeLogsOverview",
      "name": "updateReportContentTimeLogsOverview",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "updateReportContent",
        "direction": "input",
        "field": "timeLogsOverview"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.statusReportWorkspace.input.updateReportContent.materialsOverview",
      "name": "updateReportContentMaterialsOverview",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "updateReportContent",
        "direction": "input",
        "field": "materialsOverview"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.statusReportWorkspace.input.updateReportContent.delayRiskAssessment",
      "name": "updateReportContentDelayRiskAssessment",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "updateReportContent",
        "direction": "input",
        "field": "delayRiskAssessment"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.statusReportWorkspace.input.updateReportContent.pmNotes",
      "name": "updateReportContentPmNotes",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "updateReportContent",
        "direction": "input",
        "field": "pmNotes"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.statusReportWorkspace.output.updateReportContent",
      "name": "updateReportContentOutput",
      "kind": "commandOutput",
      "contractRef": {
        "commandName": "updateReportContent",
        "direction": "output"
      },
      "defaultValue": null
    },
    {
      "stateKey": "ui.statusReportWorkspace.action.updateReportContent.error",
      "name": "updateReportContentError",
      "kind": "actionError",
      "actionRef": "updateReportContent",
      "defaultValue": ""
    },
    {
      "stateKey": "ui.statusReportWorkspace.action.updateReportStatus.status",
      "name": "updateReportStatusState",
      "kind": "actionStatus",
      "actionRef": "updateReportStatus",
      "valueSet": [
        "idle",
        "loading",
        "success",
        "error"
      ],
      "defaultValue": "idle"
    },
    {
      "stateKey": "ui.statusReportWorkspace.input.updateReportStatus.statusReportId",
      "name": "updateReportStatusStatusReportId",
      "kind": "input",
      "source": "routeParam",
      "presentation": "route",
      "contractRef": {
        "commandName": "updateReportStatus",
        "direction": "input",
        "field": "statusReportId"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.statusReportWorkspace.input.updateReportStatus.status",
      "name": "updateReportStatusStatus",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "updateReportStatus",
        "direction": "input",
        "field": "status"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.statusReportWorkspace.output.updateReportStatus",
      "name": "updateReportStatusOutput",
      "kind": "commandOutput",
      "contractRef": {
        "commandName": "updateReportStatus",
        "direction": "output"
      },
      "defaultValue": null
    },
    {
      "stateKey": "ui.statusReportWorkspace.action.updateReportStatus.error",
      "name": "updateReportStatusError",
      "kind": "actionError",
      "actionRef": "updateReportStatus",
      "defaultValue": ""
    }
  ],
  "actions": [
    {
      "actionId": "generateReport",
      "kind": "command",
      "commandRef": "generateReport",
      "routeKey": "buildFlowFsm.statusReportWorkspace.generateReport",
      "purpose": "Generate status report",
      "methodName": "generateReport",
      "handlerName": "handleGenerateReportClick",
      "inputStateKeys": [
        "ui.statusReportWorkspace.input.generateReport.projectId",
        "ui.statusReportWorkspace.input.generateReport.reportPeriodStart",
        "ui.statusReportWorkspace.input.generateReport.reportPeriodEnd"
      ],
      "routeParamInputStateKeys": [],
      "selectedEntityInputStateKeys": [
        "ui.statusReportWorkspace.input.generateReport.projectId"
      ],
      "outputStateKeys": [
        "ui.statusReportWorkspace.output.generateReport"
      ],
      "statusStateKey": "ui.statusReportWorkspace.action.generateReport.status",
      "errorStateKey": "ui.statusReportWorkspace.action.generateReport.error",
      "feedback": {
        "successMessageKey": "action.generateReport.success",
        "errorMessageKey": "action.generateReport.error",
        "dismissible": true
      },
      "clearInputStateKeys": [
        "ui.statusReportWorkspace.input.generateReport.projectId",
        "ui.statusReportWorkspace.input.generateReport.reportPeriodStart",
        "ui.statusReportWorkspace.input.generateReport.reportPeriodEnd"
      ]
    },
    {
      "actionId": "updateReportContent",
      "kind": "command",
      "commandRef": "updateReportContent",
      "routeKey": "buildFlowFsm.statusReportWorkspace.updateReportContent",
      "purpose": "Edit status report content",
      "methodName": "updateReportContent",
      "handlerName": "handleUpdateReportContentClick",
      "inputStateKeys": [
        "ui.statusReportWorkspace.input.updateReportContent.statusReportId",
        "ui.statusReportWorkspace.input.updateReportContent.summary",
        "ui.statusReportWorkspace.input.updateReportContent.tasksOverview",
        "ui.statusReportWorkspace.input.updateReportContent.timeLogsOverview",
        "ui.statusReportWorkspace.input.updateReportContent.materialsOverview",
        "ui.statusReportWorkspace.input.updateReportContent.delayRiskAssessment",
        "ui.statusReportWorkspace.input.updateReportContent.pmNotes"
      ],
      "routeParamInputStateKeys": [
        "ui.statusReportWorkspace.input.updateReportContent.statusReportId"
      ],
      "selectedEntityInputStateKeys": [],
      "outputStateKeys": [
        "ui.statusReportWorkspace.output.updateReportContent"
      ],
      "statusStateKey": "ui.statusReportWorkspace.action.updateReportContent.status",
      "errorStateKey": "ui.statusReportWorkspace.action.updateReportContent.error",
      "feedback": {
        "successMessageKey": "action.updateReportContent.success",
        "errorMessageKey": "action.updateReportContent.error",
        "dismissible": true
      },
      "clearInputStateKeys": [
        "ui.statusReportWorkspace.input.updateReportContent.summary",
        "ui.statusReportWorkspace.input.updateReportContent.tasksOverview",
        "ui.statusReportWorkspace.input.updateReportContent.timeLogsOverview",
        "ui.statusReportWorkspace.input.updateReportContent.materialsOverview",
        "ui.statusReportWorkspace.input.updateReportContent.delayRiskAssessment",
        "ui.statusReportWorkspace.input.updateReportContent.pmNotes"
      ]
    },
    {
      "actionId": "updateReportStatus",
      "kind": "command",
      "commandRef": "updateReportStatus",
      "routeKey": "buildFlowFsm.statusReportWorkspace.updateReportStatus",
      "purpose": "Update status report status",
      "methodName": "updateReportStatus",
      "handlerName": "handleUpdateReportStatusClick",
      "inputStateKeys": [
        "ui.statusReportWorkspace.input.updateReportStatus.statusReportId",
        "ui.statusReportWorkspace.input.updateReportStatus.status"
      ],
      "routeParamInputStateKeys": [
        "ui.statusReportWorkspace.input.updateReportStatus.statusReportId"
      ],
      "selectedEntityInputStateKeys": [],
      "outputStateKeys": [
        "ui.statusReportWorkspace.output.updateReportStatus"
      ],
      "statusStateKey": "ui.statusReportWorkspace.action.updateReportStatus.status",
      "errorStateKey": "ui.statusReportWorkspace.action.updateReportStatus.error",
      "feedback": {
        "successMessageKey": "action.updateReportStatus.success",
        "errorMessageKey": "action.updateReportStatus.error",
        "dismissible": true
      },
      "clearInputStateKeys": [
        "ui.statusReportWorkspace.input.updateReportStatus.status"
      ]
    },
    {
      "actionId": "set.generateReportProjectId",
      "kind": "stateSetter",
      "stateKey": "ui.statusReportWorkspace.input.generateReport.projectId",
      "methodName": "setGenerateReportProjectId",
      "handlerName": "handleGenerateReportProjectIdChange"
    },
    {
      "actionId": "set.generateReportReportPeriodStart",
      "kind": "stateSetter",
      "stateKey": "ui.statusReportWorkspace.input.generateReport.reportPeriodStart",
      "methodName": "setGenerateReportReportPeriodStart",
      "handlerName": "handleGenerateReportReportPeriodStartChange"
    },
    {
      "actionId": "set.generateReportReportPeriodEnd",
      "kind": "stateSetter",
      "stateKey": "ui.statusReportWorkspace.input.generateReport.reportPeriodEnd",
      "methodName": "setGenerateReportReportPeriodEnd",
      "handlerName": "handleGenerateReportReportPeriodEndChange"
    },
    {
      "actionId": "set.updateReportContentStatusReportId",
      "kind": "stateSetter",
      "stateKey": "ui.statusReportWorkspace.input.updateReportContent.statusReportId",
      "methodName": "setUpdateReportContentStatusReportId",
      "handlerName": "handleUpdateReportContentStatusReportIdChange"
    },
    {
      "actionId": "set.updateReportContentSummary",
      "kind": "stateSetter",
      "stateKey": "ui.statusReportWorkspace.input.updateReportContent.summary",
      "methodName": "setUpdateReportContentSummary",
      "handlerName": "handleUpdateReportContentSummaryChange"
    },
    {
      "actionId": "set.updateReportContentTasksOverview",
      "kind": "stateSetter",
      "stateKey": "ui.statusReportWorkspace.input.updateReportContent.tasksOverview",
      "methodName": "setUpdateReportContentTasksOverview",
      "handlerName": "handleUpdateReportContentTasksOverviewChange"
    },
    {
      "actionId": "set.updateReportContentTimeLogsOverview",
      "kind": "stateSetter",
      "stateKey": "ui.statusReportWorkspace.input.updateReportContent.timeLogsOverview",
      "methodName": "setUpdateReportContentTimeLogsOverview",
      "handlerName": "handleUpdateReportContentTimeLogsOverviewChange"
    },
    {
      "actionId": "set.updateReportContentMaterialsOverview",
      "kind": "stateSetter",
      "stateKey": "ui.statusReportWorkspace.input.updateReportContent.materialsOverview",
      "methodName": "setUpdateReportContentMaterialsOverview",
      "handlerName": "handleUpdateReportContentMaterialsOverviewChange"
    },
    {
      "actionId": "set.updateReportContentDelayRiskAssessment",
      "kind": "stateSetter",
      "stateKey": "ui.statusReportWorkspace.input.updateReportContent.delayRiskAssessment",
      "methodName": "setUpdateReportContentDelayRiskAssessment",
      "handlerName": "handleUpdateReportContentDelayRiskAssessmentChange"
    },
    {
      "actionId": "set.updateReportContentPmNotes",
      "kind": "stateSetter",
      "stateKey": "ui.statusReportWorkspace.input.updateReportContent.pmNotes",
      "methodName": "setUpdateReportContentPmNotes",
      "handlerName": "handleUpdateReportContentPmNotesChange"
    },
    {
      "actionId": "set.updateReportStatusStatusReportId",
      "kind": "stateSetter",
      "stateKey": "ui.statusReportWorkspace.input.updateReportStatus.statusReportId",
      "methodName": "setUpdateReportStatusStatusReportId",
      "handlerName": "handleUpdateReportStatusStatusReportIdChange"
    },
    {
      "actionId": "set.updateReportStatusStatus",
      "kind": "stateSetter",
      "stateKey": "ui.statusReportWorkspace.input.updateReportStatus.status",
      "methodName": "setUpdateReportStatusStatus",
      "handlerName": "handleUpdateReportStatusStatusChange"
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
    "section.statusReportWorkspace.generateSection.title": "Generate Status Report",
    "organism.statusReportWorkspace.generateReport.title": "Generate status report",
    "intent.statusReportWorkspace.generateReport.form.title": "Generate status report",
    "intent.statusReportWorkspace.generateReport.form.action.generateReport": "Generate status report",
    "intent.statusReportWorkspace.generateReport.form.field.reportPeriodStart.label": "Report Period Start",
    "intent.statusReportWorkspace.generateReport.form.field.reportPeriodEnd.label": "Report Period End",
    "section.statusReportWorkspace.reviewAndShareSection.title": "Review, Edit & Share Report",
    "organism.statusReportWorkspace.updateReportContent.title": "Edit status report content",
    "intent.statusReportWorkspace.updateReportContent.form.title": "Edit status report content",
    "intent.statusReportWorkspace.updateReportContent.form.action.updateReportContent": "Edit status report content",
    "intent.statusReportWorkspace.updateReportContent.form.field.summary.label": "Summary",
    "intent.statusReportWorkspace.updateReportContent.form.field.tasksOverview.label": "Tasks Overview",
    "intent.statusReportWorkspace.updateReportContent.form.field.timeLogsOverview.label": "Time Logs Overview",
    "intent.statusReportWorkspace.updateReportContent.form.field.materialsOverview.label": "Materials Overview",
    "intent.statusReportWorkspace.updateReportContent.form.field.delayRiskAssessment.label": "Delay Risk Assessment",
    "intent.statusReportWorkspace.updateReportContent.form.field.pmNotes.label": "Pm Notes",
    "organism.statusReportWorkspace.updateReportStatus.title": "Update status report status",
    "intent.statusReportWorkspace.updateReportStatus.form.title": "Update status report status",
    "intent.statusReportWorkspace.updateReportStatus.form.action.updateReportStatus": "Update status report status",
    "intent.statusReportWorkspace.updateReportStatus.form.field.status.label": "Status",
    "section.statusReportWorkspace.sec-generate.title": "Generate Report",
    "section.statusReportWorkspace.sec-review-share.title": "Review & Share Report"
  },
  "automation": {
    "statePrefix": "ui.statusReportWorkspace",
    "stateKeys": [
      "ui.statusReportWorkspace.status",
      "ui.statusReportWorkspace.action.generateReport.status",
      "ui.statusReportWorkspace.input.generateReport.projectId",
      "ui.statusReportWorkspace.input.generateReport.reportPeriodStart",
      "ui.statusReportWorkspace.input.generateReport.reportPeriodEnd",
      "ui.statusReportWorkspace.output.generateReport",
      "ui.statusReportWorkspace.action.generateReport.error",
      "ui.statusReportWorkspace.action.updateReportContent.status",
      "ui.statusReportWorkspace.input.updateReportContent.statusReportId",
      "ui.statusReportWorkspace.input.updateReportContent.summary",
      "ui.statusReportWorkspace.input.updateReportContent.tasksOverview",
      "ui.statusReportWorkspace.input.updateReportContent.timeLogsOverview",
      "ui.statusReportWorkspace.input.updateReportContent.materialsOverview",
      "ui.statusReportWorkspace.input.updateReportContent.delayRiskAssessment",
      "ui.statusReportWorkspace.input.updateReportContent.pmNotes",
      "ui.statusReportWorkspace.output.updateReportContent",
      "ui.statusReportWorkspace.action.updateReportContent.error",
      "ui.statusReportWorkspace.action.updateReportStatus.status",
      "ui.statusReportWorkspace.input.updateReportStatus.statusReportId",
      "ui.statusReportWorkspace.input.updateReportStatus.status",
      "ui.statusReportWorkspace.output.updateReportStatus",
      "ui.statusReportWorkspace.action.updateReportStatus.error"
    ],
    "actionIds": [
      "generateReport",
      "updateReportContent",
      "updateReportStatus",
      "set.generateReportProjectId",
      "set.generateReportReportPeriodStart",
      "set.generateReportReportPeriodEnd",
      "set.updateReportContentStatusReportId",
      "set.updateReportContentSummary",
      "set.updateReportContentTasksOverview",
      "set.updateReportContentTimeLogsOverview",
      "set.updateReportContentMaterialsOverview",
      "set.updateReportContentDelayRiskAssessment",
      "set.updateReportContentPmNotes",
      "set.updateReportStatusStatusReportId",
      "set.updateReportStatusStatus"
    ]
  }
};

export const pipeline = [
  {
    "id": "statusReportWorkspace__l2_shared",
    "type": "l2_shared",
    "outputPath": "_102045_/l2/buildFlowFsm/web/shared/statusReportWorkspace.ts",
    "defPath": "_102045_/l2/buildFlowFsm/web/shared/statusReportWorkspace.defs.ts",
    "dependsFiles": [
      "_102045_/l2/buildFlowFsm/web/contracts/statusReportWorkspace.ts",
      "_102029_.d.ts"
    ],
    "dependsOn": [],
    "skills": [
      "_102020_/l2/agentChangeFrontend/skills/genCfeSharedTs.ts"
    ],
    "rulesApplied": [
      "statusReportGenerationSource",
      "pmControlsStatusReportLifecycle"
    ],
    "agent": "agentCfeMaterializeGen"
  }
] as const;
