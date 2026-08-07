/// <mls fileReference="_102045_/l2/buildFlowFsm/web/desktop/page11/statusReportWorkspace.defs.ts" enhancement="_blank"/>

export const definition = {
  "pageId": "statusReportWorkspace",
  "pageName": "Status Reports",
  "baseClassName": "BuildFlowFsmStatusReportWorkspaceBase",
  "actor": "projectManager",
  "purpose": "Project manager generates AI-assisted status reports, reviews delay-risk suggestions, and shares reports with clients.",
  "presentation": {
    "categoryRef": "aiAssistedAuthoring"
  },
  "dataBindings": [
    {
      "id": "binding.statusReportWorkspace.generateReport",
      "source": "bff.generateReport",
      "command": "generateReport",
      "description": "Generate status report",
      "kind": "command",
      "stateKey": "ui.statusReportWorkspace.output.generateReport",
      "inputStateKeys": [
        "ui.statusReportWorkspace.input.generateReport.projectId",
        "ui.statusReportWorkspace.input.generateReport.reportPeriodStart",
        "ui.statusReportWorkspace.input.generateReport.reportPeriodEnd"
      ],
      "inputs": [
        {
          "name": "projectId",
          "stateKey": "ui.statusReportWorkspace.input.generateReport.projectId",
          "source": "selectedEntity",
          "required": true,
          "presentation": "selection"
        },
        {
          "name": "reportPeriodStart",
          "stateKey": "ui.statusReportWorkspace.input.generateReport.reportPeriodStart",
          "source": "userInput",
          "required": true,
          "presentation": "form"
        },
        {
          "name": "reportPeriodEnd",
          "stateKey": "ui.statusReportWorkspace.input.generateReport.reportPeriodEnd",
          "source": "userInput",
          "required": true,
          "presentation": "form"
        }
      ]
    },
    {
      "id": "binding.statusReportWorkspace.updateReportContent",
      "source": "bff.updateReportContent",
      "command": "updateReportContent",
      "description": "Edit status report content",
      "kind": "command",
      "stateKey": "ui.statusReportWorkspace.output.updateReportContent",
      "inputStateKeys": [
        "ui.statusReportWorkspace.input.updateReportContent.statusReportId",
        "ui.statusReportWorkspace.input.updateReportContent.summary",
        "ui.statusReportWorkspace.input.updateReportContent.tasksOverview",
        "ui.statusReportWorkspace.input.updateReportContent.timeLogsOverview",
        "ui.statusReportWorkspace.input.updateReportContent.materialsOverview",
        "ui.statusReportWorkspace.input.updateReportContent.delayRiskAssessment",
        "ui.statusReportWorkspace.input.updateReportContent.pmNotes"
      ],
      "inputs": [
        {
          "name": "statusReportId",
          "stateKey": "ui.statusReportWorkspace.input.updateReportContent.statusReportId",
          "source": "routeParam",
          "required": true,
          "presentation": "route"
        },
        {
          "name": "summary",
          "stateKey": "ui.statusReportWorkspace.input.updateReportContent.summary",
          "source": "userInput",
          "required": true,
          "presentation": "form"
        },
        {
          "name": "tasksOverview",
          "stateKey": "ui.statusReportWorkspace.input.updateReportContent.tasksOverview",
          "source": "userInput",
          "required": false,
          "presentation": "form"
        },
        {
          "name": "timeLogsOverview",
          "stateKey": "ui.statusReportWorkspace.input.updateReportContent.timeLogsOverview",
          "source": "userInput",
          "required": false,
          "presentation": "form"
        },
        {
          "name": "materialsOverview",
          "stateKey": "ui.statusReportWorkspace.input.updateReportContent.materialsOverview",
          "source": "userInput",
          "required": false,
          "presentation": "form"
        },
        {
          "name": "delayRiskAssessment",
          "stateKey": "ui.statusReportWorkspace.input.updateReportContent.delayRiskAssessment",
          "source": "userInput",
          "required": false,
          "presentation": "form"
        },
        {
          "name": "pmNotes",
          "stateKey": "ui.statusReportWorkspace.input.updateReportContent.pmNotes",
          "source": "userInput",
          "required": false,
          "presentation": "form"
        }
      ]
    },
    {
      "id": "binding.statusReportWorkspace.updateReportStatus",
      "source": "bff.updateReportStatus",
      "command": "updateReportStatus",
      "description": "Update status report status",
      "kind": "command",
      "stateKey": "ui.statusReportWorkspace.output.updateReportStatus",
      "inputStateKeys": [
        "ui.statusReportWorkspace.input.updateReportStatus.statusReportId",
        "ui.statusReportWorkspace.input.updateReportStatus.status"
      ],
      "inputs": [
        {
          "name": "statusReportId",
          "stateKey": "ui.statusReportWorkspace.input.updateReportStatus.statusReportId",
          "source": "routeParam",
          "required": true,
          "presentation": "route"
        },
        {
          "name": "status",
          "stateKey": "ui.statusReportWorkspace.input.updateReportStatus.status",
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
    "id": "statusReportWorkspace__l2_page",
    "type": "l2_page",
    "outputPath": "_102045_/l2/buildFlowFsm/web/desktop/page11/statusReportWorkspace.ts",
    "defPath": "_102045_/l2/buildFlowFsm/web/desktop/page11/statusReportWorkspace.defs.ts",
    "dependsFiles": [
      "_102045_/l2/buildFlowFsm/web/shared/statusReportWorkspace.ts",
      "_102045_/l2/designSystem.ts"
    ],
    "dependsOn": [
      "statusReportWorkspace__l2_shared"
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
