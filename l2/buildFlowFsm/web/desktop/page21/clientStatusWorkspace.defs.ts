/// <mls fileReference="_102045_/l2/buildFlowFsm/web/desktop/page21/clientStatusWorkspace.defs.ts" enhancement="_blank"/>

export const definition = {
  "pageId": "clientStatusWorkspace",
  "pageName": "Project Status",
  "baseClassName": "BuildFlowFsmClientStatusWorkspaceBase",
  "actor": "client",
  "purpose": "Client reviews the shared project status report to stay informed on progress and budget.",
  "presentation": {
    "categoryRef": "readOnlyDetailPortal"
  },
  "pageObjective": {
    "actor": "Client (project owner/stakeholder)",
    "jobToBeDone": "Review the shared project status report to stay informed on progress, budget, risks, and PM notes for the current reporting period.",
    "primaryDecision": "Absorb and understand the current project status — there is no mutation; the client reads and comprehends the report.",
    "decisiveInfo": [
      "projectName",
      "status",
      "reportPeriodStart",
      "reportPeriodEnd",
      "summary",
      "tasksOverview",
      "timeLogsOverview",
      "materialsOverview",
      "delayRiskAssessment",
      "pmNotes",
      "generatedAt",
      "sharedAt"
    ],
    "usageFrequency": "Occasional — client opens this page when notified that a new status report has been shared; read-only, single-session consumption.",
    "criticalActions": [
      {
        "action": "viewStatusReport",
        "presentation": "summary-first — auto-load on page open using route param; display as a structured read-only detail panel with clearly labelled sections"
      }
    ],
    "informationHierarchy": [
      "1. Report header: projectName, status, reportPeriodStart → reportPeriodEnd, generatedAt, sharedAt",
      "2. Executive summary: summary field prominently displayed",
      "3. Tasks overview: tasksOverview",
      "4. Time logs overview: timeLogsOverview",
      "5. Materials overview: materialsOverview",
      "6. Delay risk assessment: delayRiskAssessment (highlighted if risk present)",
      "7. PM notes: pmNotes"
    ],
    "successCriteria": "The client can open the page and immediately read the full status report — header, summary, all overviews, risk assessment and PM notes — without any manual input or navigation friction.",
    "antiPatterns": [
      "Exposing statusReportId or clientId as manual text inputs — both are context-derived (route param and actor session)",
      "Rendering a form or edit controls — this is a read-only view",
      "Splitting each overview section into its own page or requiring navigation to read them",
      "Showing a status <select> or transition buttons — the client has no lifecycle authority over the report",
      "Paginating or hiding the summary behind a tab that requires extra clicks"
    ]
  },
  "dataBindings": [
    {
      "id": "binding.clientStatusWorkspace.viewStatusReport",
      "source": "bff.viewStatusReport",
      "command": "viewStatusReport",
      "description": "View status report",
      "kind": "query",
      "stateKey": "ui.clientStatusWorkspace.data.viewStatusReport",
      "inputStateKeys": [
        "ui.clientStatusWorkspace.input.viewStatusReport.statusReportId",
        "ui.clientStatusWorkspace.input.viewStatusReport.clientId"
      ],
      "inputs": [
        {
          "name": "statusReportId",
          "stateKey": "ui.clientStatusWorkspace.input.viewStatusReport.statusReportId",
          "source": "routeParam",
          "required": true,
          "presentation": "route"
        },
        {
          "name": "clientId",
          "stateKey": "ui.clientStatusWorkspace.input.viewStatusReport.clientId",
          "source": "actorSession",
          "required": true,
          "presentation": "form"
        }
      ]
    }
  ]
};

export const pipeline = [
  {
    "id": "clientStatusWorkspace__page21__l2_page",
    "type": "l2_page",
    "outputPath": "_102045_/l2/buildFlowFsm/web/desktop/page21/clientStatusWorkspace.ts",
    "defPath": "_102045_/l2/buildFlowFsm/web/desktop/page21/clientStatusWorkspace.defs.ts",
    "dependsFiles": [
      "_102045_/l2/buildFlowFsm/web/shared/clientStatusWorkspace.ts",
      "_102045_/l2/designSystem.ts"
    ],
    "dependsOn": [
      "clientStatusWorkspace__l2_shared"
    ],
    "skills": [
      "_102020_/l2/agentChangeFrontend/skills/genCfePage21RenderTs.ts",
      "_102020_/l4/collabux/templates/readOnlyDetailPortal/page21.md"
    ],
    "visualStyle": {
      "description": "Desktop-first for PM and billing staff with mobile-optimized field entry; dashboard-driven, status-aware, touch-friendly UI with Gantt-ish timeline views."
    },
    "agent": "agentCfeMaterializeGen"
  }
] as const;
