/// <mls fileReference="_102045_/l2/buildFlowFsm/web/shared/clientStatusWorkspace.defs.ts" enhancement="_blank"/>

export const definition = {
  "pageId": "clientStatusWorkspace",
  "pageName": "Project Status",
  "moduleName": "buildFlowFsm",
  "baseClassName": "BuildFlowFsmClientStatusWorkspaceBase",
  "routePattern": "/buildFlowFsm/clientStatusWorkspace/:statusReportId?",
  "sourceKind": "operation",
  "ownerIds": [
    "operation:viewStatusReport"
  ],
  "operationIds": [
    "viewStatusReport"
  ],
  "origin": {
    "source": "l4-journey",
    "workspaceId": "clientStatusWorkspace",
    "workspaceKind": "operation",
    "actor": "client",
    "entity": "StatusReport",
    "owners": [
      {
        "kind": "operation",
        "id": "viewStatusReport",
        "defPath": "_102045_/l4/buildFlowFsm/operations/viewStatusReport.defs.ts"
      }
    ],
    "microUserFlow": {
      "source": "l4/story.steps",
      "workflowSteps": [],
      "operations": [
        {
          "operationId": "viewStatusReport",
          "commandName": "viewStatusReport",
          "steps": [
            "Open the shared status report from the project status area",
            "Read the AI-generated summary covering tasks, time, materials, and delay risks",
            "Review any PM notes and the reporting period covered"
          ]
        }
      ]
    }
  },
  "contractRef": {
    "tsPath": "_102045_/l2/buildFlowFsm/web/contracts/clientStatusWorkspace.ts",
    "contracts": [
      {
        "commandName": "viewStatusReport",
        "routeConst": "viewStatusReportRoute"
      }
    ]
  },
  "layoutRef": {
    "defPath": "_102045_/l2/buildFlowFsm/web/desktop/page11/clientStatusWorkspace.defs.ts",
    "layoutId": "cfe-20260731060448.1000"
  },
  "states": [
    {
      "stateKey": "ui.clientStatusWorkspace.status",
      "name": "status",
      "kind": "pageStatus",
      "defaultValue": ""
    },
    {
      "stateKey": "ui.clientStatusWorkspace.action.viewStatusReport.status",
      "name": "viewStatusReportState",
      "kind": "actionStatus",
      "actionRef": "viewStatusReport",
      "valueSet": [
        "idle",
        "loading",
        "success",
        "error"
      ],
      "defaultValue": "idle"
    },
    {
      "stateKey": "ui.clientStatusWorkspace.input.viewStatusReport.statusReportId",
      "name": "viewStatusReportStatusReportId",
      "kind": "input",
      "source": "routeParam",
      "presentation": "route",
      "contractRef": {
        "commandName": "viewStatusReport",
        "direction": "input",
        "field": "statusReportId"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.clientStatusWorkspace.input.viewStatusReport.clientId",
      "name": "viewStatusReportClientId",
      "kind": "input",
      "source": "actorSession",
      "presentation": "form",
      "contractRef": {
        "commandName": "viewStatusReport",
        "direction": "input",
        "field": "clientId"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.clientStatusWorkspace.data.viewStatusReport",
      "name": "viewStatusReportData",
      "kind": "queryResult",
      "contractRef": {
        "commandName": "viewStatusReport",
        "direction": "output"
      },
      "outputShape": "object",
      "collection": false,
      "defaultValue": null
    }
  ],
  "actions": [
    {
      "actionId": "viewStatusReport",
      "kind": "query",
      "commandRef": "viewStatusReport",
      "routeKey": "buildFlowFsm.clientStatusWorkspace.viewStatusReport",
      "purpose": "View status report",
      "methodName": "loadViewStatusReport",
      "handlerName": "handleViewStatusReportClick",
      "inputStateKeys": [
        "ui.clientStatusWorkspace.input.viewStatusReport.statusReportId",
        "ui.clientStatusWorkspace.input.viewStatusReport.clientId"
      ],
      "routeParamInputStateKeys": [
        "ui.clientStatusWorkspace.input.viewStatusReport.statusReportId"
      ],
      "selectedEntityInputStateKeys": [],
      "outputStateKeys": [
        "ui.clientStatusWorkspace.data.viewStatusReport"
      ],
      "statusStateKey": "ui.clientStatusWorkspace.action.viewStatusReport.status"
    },
    {
      "actionId": "set.viewStatusReportStatusReportId",
      "kind": "stateSetter",
      "stateKey": "ui.clientStatusWorkspace.input.viewStatusReport.statusReportId",
      "methodName": "setViewStatusReportStatusReportId",
      "handlerName": "handleViewStatusReportStatusReportIdChange"
    },
    {
      "actionId": "set.viewStatusReportClientId",
      "kind": "stateSetter",
      "stateKey": "ui.clientStatusWorkspace.input.viewStatusReport.clientId",
      "methodName": "setViewStatusReportClientId",
      "handlerName": "handleViewStatusReportClientIdChange"
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
    "section.clientStatusWorkspace.sec-status-report-detail.title": "statusReportDetail",
    "organism.clientStatusWorkspace.viewStatusReport.title": "View status report",
    "intent.clientStatusWorkspace.viewStatusReport.list.title": "View status report",
    "intent.clientStatusWorkspace.viewStatusReport.list.empty": "Nenhum registro encontrado",
    "intent.clientStatusWorkspace.viewStatusReport.list.column.statusReportId.label": "Status Report Id",
    "intent.clientStatusWorkspace.viewStatusReport.list.column.projectId.label": "Project Id",
    "intent.clientStatusWorkspace.viewStatusReport.list.column.projectName.label": "Project Name",
    "intent.clientStatusWorkspace.viewStatusReport.list.column.status.label": "Status",
    "intent.clientStatusWorkspace.viewStatusReport.list.column.reportPeriodStart.label": "Report Period Start",
    "intent.clientStatusWorkspace.viewStatusReport.list.column.reportPeriodEnd.label": "Report Period End",
    "intent.clientStatusWorkspace.viewStatusReport.list.column.summary.label": "Summary",
    "intent.clientStatusWorkspace.viewStatusReport.list.column.tasksOverview.label": "Tasks Overview",
    "intent.clientStatusWorkspace.viewStatusReport.list.column.timeLogsOverview.label": "Time Logs Overview",
    "intent.clientStatusWorkspace.viewStatusReport.list.column.materialsOverview.label": "Materials Overview",
    "intent.clientStatusWorkspace.viewStatusReport.list.column.delayRiskAssessment.label": "Delay Risk Assessment",
    "intent.clientStatusWorkspace.viewStatusReport.list.column.pmNotes.label": "Pm Notes",
    "intent.clientStatusWorkspace.viewStatusReport.list.column.generatedAt.label": "Generated At",
    "intent.clientStatusWorkspace.viewStatusReport.list.column.sharedAt.label": "Shared At",
    "intent.clientStatusWorkspace.viewStatusReport.list.filter.clientId.label": "Client Id",
    "section.clientStatusWorkspace.sec-report-header.title": "Report Identity",
    "section.clientStatusWorkspace.sec-report-body.title": "Status Report Detail"
  },
  "automation": {
    "statePrefix": "ui.clientStatusWorkspace",
    "stateKeys": [
      "ui.clientStatusWorkspace.status",
      "ui.clientStatusWorkspace.action.viewStatusReport.status",
      "ui.clientStatusWorkspace.input.viewStatusReport.statusReportId",
      "ui.clientStatusWorkspace.input.viewStatusReport.clientId",
      "ui.clientStatusWorkspace.data.viewStatusReport"
    ],
    "actionIds": [
      "viewStatusReport",
      "set.viewStatusReportStatusReportId",
      "set.viewStatusReportClientId"
    ]
  }
};

export const pipeline = [
  {
    "id": "clientStatusWorkspace__l2_shared",
    "type": "l2_shared",
    "outputPath": "_102045_/l2/buildFlowFsm/web/shared/clientStatusWorkspace.ts",
    "defPath": "_102045_/l2/buildFlowFsm/web/shared/clientStatusWorkspace.defs.ts",
    "dependsFiles": [
      "_102045_/l2/buildFlowFsm/web/contracts/clientStatusWorkspace.ts",
      "_102029_.d.ts"
    ],
    "dependsOn": [],
    "skills": [
      "_102020_/l2/agentChangeFrontend/skills/genCfeSharedTs.ts"
    ],
    "rulesApplied": [
      "pmControlsStatusReportLifecycle"
    ],
    "agent": "agentCfeMaterializeGen"
  }
] as const;
