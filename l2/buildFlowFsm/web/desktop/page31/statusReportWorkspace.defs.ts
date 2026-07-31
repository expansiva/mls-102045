/// <mls fileReference="_102045_/l2/buildFlowFsm/web/desktop/page31/statusReportWorkspace.defs.ts" enhancement="_blank"/>

// TESTE (31/jul): defs REDUZIDO + skill de experiência no pipeline.
// A UX desta página vem inteira do skill `aiAssistedAuthoring/page31.md`; este defs carrega só o
// contrato: identidade + amarração. Comparar com page21/statusReportWorkspace.defs.ts (defs completo + page21.md).

export const definition = {
  "pageId": "statusReportWorkspace",
  "pageName": "Status Reports",
  "baseClassName": "BuildFlowFsmStatusReportWorkspaceBase",
  "actor": "projectManager",
  "purpose": "Project manager generates AI-assisted status reports, reviews delay-risk suggestions, and shares reports with clients.",

  "dataBindings": [
    {
      "id": "binding.statusReportWorkspace.generateReport",
      "source": "bff.generateReport",
      "command": "generateReport",
      "description": "Generate status report",
      "stateKey": "ui.statusReportWorkspace.output.generateReport",
      "inputStateKeys": [
        "ui.statusReportWorkspace.input.generateReport.projectId",
        "ui.statusReportWorkspace.input.generateReport.reportPeriodStart",
        "ui.statusReportWorkspace.input.generateReport.reportPeriodEnd"
      ]
    },
    {
      "id": "binding.statusReportWorkspace.updateReportContent",
      "source": "bff.updateReportContent",
      "command": "updateReportContent",
      "description": "Edit status report content",
      "stateKey": "ui.statusReportWorkspace.output.updateReportContent",
      "inputStateKeys": [
        "ui.statusReportWorkspace.input.updateReportContent.statusReportId",
        "ui.statusReportWorkspace.input.updateReportContent.summary",
        "ui.statusReportWorkspace.input.updateReportContent.tasksOverview",
        "ui.statusReportWorkspace.input.updateReportContent.timeLogsOverview",
        "ui.statusReportWorkspace.input.updateReportContent.materialsOverview",
        "ui.statusReportWorkspace.input.updateReportContent.delayRiskAssessment",
        "ui.statusReportWorkspace.input.updateReportContent.pmNotes"
      ]
    },
    {
      "id": "binding.statusReportWorkspace.updateReportStatus",
      "source": "bff.updateReportStatus",
      "command": "updateReportStatus",
      "description": "Update status report status",
      "stateKey": "ui.statusReportWorkspace.output.updateReportStatus",
      "inputStateKeys": [
        "ui.statusReportWorkspace.input.updateReportStatus.statusReportId",
        "ui.statusReportWorkspace.input.updateReportStatus.status"
      ]
    }
  ]
};

export const pipeline = [
  {
    "id": "statusReportWorkspace__page31__l2_page",
    "type": "l2_page",
    "outputPath": "_102045_/l2/buildFlowFsm/web/desktop/page31/statusReportWorkspace.ts",
    "defPath": "_102045_/l2/buildFlowFsm/web/desktop/page31/statusReportWorkspace.defs.ts",
    "dependsFiles": [
      "_102045_/l2/buildFlowFsm/web/shared/statusReportWorkspace.ts",
      "_102045_/l2/designSystem.ts"
    ],
    "dependsOn": [
      "statusReportWorkspace__l2_shared"
    ],
    "skills": [
      "_102020_/l2/agentChangeFrontend/skills/genCfePage21RenderTs.ts",
      "_102020_/l4/collabux/templates/aiAssistedAuthoring/page31.md"
    ],
    "visualStyle": {
      "description": "Desktop-first for PM and billing staff with mobile-optimized field entry; dashboard-driven, status-aware, touch-friendly UI with Gantt-ish timeline views."
    },
    "agent": "agentCfeMaterializeGen"
  }
] as const;
