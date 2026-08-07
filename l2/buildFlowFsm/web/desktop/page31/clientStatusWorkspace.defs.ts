/// <mls fileReference="_102045_/l2/buildFlowFsm/web/desktop/page31/clientStatusWorkspace.defs.ts" enhancement="_blank"/>

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
    "primaryDecision": "Absorb and understand the full status report — there is no mutation; the page is read-only consumption.",
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
        "presentation": "summary-first — auto-load on page entry using route param; no manual trigger needed"
      }
    ],
    "informationHierarchy": [
      "1. Project identity + report period + status badge (anchor context)",
      "2. Executive summary (AI-generated narrative)",
      "3. Tasks overview",
      "4. Time logs overview",
      "5. Materials overview",
      "6. Delay risk assessment",
      "7. PM notes",
      "8. Report metadata (generatedAt, sharedAt)"
    ],
    "successCriteria": "Client can read the full status report in a single scroll, understand project health at a glance from the summary header, and find PM notes and risk flags without hunting through the page.",
    "antiPatterns": [
      "Exposing statusReportId or clientId as editable inputs — both are context-derived",
      "Rendering a form or edit controls — this is a read-only view",
      "Splitting each section (tasks, time, materials) into separate page sections — creates unnecessary scroll fragmentation",
      "Using a status <select> — status is system-owned and read-only",
      "Requiring the client to manually navigate to sub-pages to read report sections"
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
    "id": "clientStatusWorkspace__page31__l2_page",
    "type": "l2_page",
    "outputPath": "_102045_/l2/buildFlowFsm/web/desktop/page31/clientStatusWorkspace.ts",
    "defPath": "_102045_/l2/buildFlowFsm/web/desktop/page31/clientStatusWorkspace.defs.ts",
    "dependsFiles": [
      "_102045_/l2/buildFlowFsm/web/shared/clientStatusWorkspace.ts",
      "_102045_/l2/designSystem.ts"
    ],
    "dependsOn": [
      "clientStatusWorkspace__l2_shared"
    ],
    "skills": [
      "_102020_/l2/agentChangeFrontend/skills/genCfePage21RenderTs.ts",
      "_102020_/l4/collabux/templates/readOnlyDetailPortal/page31.md"
    ],
    "visualStyle": {
      "description": "Desktop-first for PM and billing staff with mobile-optimized field entry; dashboard-driven, status-aware, touch-friendly UI with Gantt-ish timeline views."
    },
    "agent": "agentCfeMaterializeGen"
  }
] as const;
