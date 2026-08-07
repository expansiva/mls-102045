/// <mls fileReference="_102045_/l2/buildFlowFsm/web/desktop/page21/statusReportWorkspace.defs.ts" enhancement="_blank"/>

export const definition = {
  "pageId": "statusReportWorkspace",
  "pageName": "Status Reports",
  "baseClassName": "BuildFlowFsmStatusReportWorkspaceBase",
  "actor": "projectManager",
  "purpose": "Project manager generates AI-assisted status reports, reviews delay-risk suggestions, and shares reports with clients.",
  "presentation": {
    "categoryRef": "aiAssistedAuthoring"
  },
  "pageObjective": {
    "actor": "Project Manager",
    "jobToBeDone": "Generate an AI-assisted status report for a project period, then review, edit, and advance the report through its lifecycle (draft → reviewed → shared with client).",
    "primaryDecision": "Generate the report for the right project and period, then decide when the content is ready to advance to 'reviewed' or 'shared'.",
    "decisiveInfo": [
      "projectId (selected entity, not typed)",
      "reportPeriodStart",
      "reportPeriodEnd",
      "summary",
      "tasksOverview",
      "timeLogsOverview",
      "materialsOverview",
      "delayRiskAssessment",
      "pmNotes",
      "status (current lifecycle state, read-only anchor before transition)"
    ],
    "usageFrequency": "Occasional — triggered per project reporting cycle; back-office workflow, not high-frequency POS-style input.",
    "criticalActions": [
      {
        "action": "generateReport",
        "presentation": "primary-button inside a compact generation panel; projectId is a picker (never typed), period dates are date inputs with smart defaults"
      },
      {
        "action": "updateReportContent",
        "presentation": "inline rich-text edit form inside the report detail panel, pre-populated from generated output; save is a secondary action"
      },
      {
        "action": "updateReportStatus",
        "presentation": "contextual-transition-actions — one button per valid next state (e.g. 'Mark Reviewed', 'Share with Client') shown in the report header; never a free <select>"
      }
    ],
    "informationHierarchy": [
      "1. Report generation panel (project picker + period) — the starting point",
      "2. Generated report content (summary, overviews, delay-risk assessment) — the output to review",
      "3. Editable content form (summary, tasksOverview, timeLogsOverview, materialsOverview, delayRiskAssessment, pmNotes) — PM refinement",
      "4. Lifecycle transition actions (Mark Reviewed / Share with Client) — the final decision"
    ],
    "successCriteria": "PM can generate a report in under 3 clicks, review and edit AI content without leaving the page, and advance the report status via explicit action buttons — all in one coherent workspace.",
    "antiPatterns": [
      "Manually typed statusReportId or projectId inputs",
      "Free <select> over all status enum values for lifecycle transitions",
      "Separate page or modal for each command",
      "Showing system-owned fields (generatedAt, createdAt, updatedAt, reviewedAt, sharedAt) as editable inputs",
      "Splitting the review+edit+transition flow into disconnected sections with no visual continuity"
    ]
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
    "id": "statusReportWorkspace__page21__l2_page",
    "type": "l2_page",
    "outputPath": "_102045_/l2/buildFlowFsm/web/desktop/page21/statusReportWorkspace.ts",
    "defPath": "_102045_/l2/buildFlowFsm/web/desktop/page21/statusReportWorkspace.defs.ts",
    "dependsFiles": [
      "_102045_/l2/buildFlowFsm/web/shared/statusReportWorkspace.ts",
      "_102045_/l2/designSystem.ts"
    ],
    "dependsOn": [
      "statusReportWorkspace__l2_shared"
    ],
    "skills": [
      "_102020_/l2/agentChangeFrontend/skills/genCfePage21RenderTs.ts",
      "_102020_/l4/collabux/templates/aiAssistedAuthoring/page21.md"
    ],
    "visualStyle": {
      "description": "Desktop-first for PM and billing staff with mobile-optimized field entry; dashboard-driven, status-aware, touch-friendly UI with Gantt-ish timeline views."
    },
    "agent": "agentCfeMaterializeGen"
  }
] as const;
