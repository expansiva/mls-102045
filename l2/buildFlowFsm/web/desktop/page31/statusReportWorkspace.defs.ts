/// <mls fileReference="_102045_/l2/buildFlowFsm/web/desktop/page31/statusReportWorkspace.defs.ts" enhancement="_blank"/>

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
    "primaryDecision": "Generate the report for the right project and period, then decide when the content is ready to share with the client.",
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
      "status (current lifecycle state, shown as allowed next-state buttons)"
    ],
    "usageFrequency": "Occasional — triggered once per reporting cycle per project; back-office workflow pace.",
    "criticalActions": [
      {
        "action": "generateReport",
        "presentation": "primary-button inside a focused generation panel; projectId is context-derived (read-only), period dates are the only true user inputs"
      },
      {
        "action": "updateReportContent",
        "presentation": "inline rich-text editing form surfaced after generation; all section fields editable in place with a single Save action"
      },
      {
        "action": "updateReportStatus",
        "presentation": "contextual-transition-actions — one button per valid next state (Mark Reviewed, Share with Client) rendered alongside the report content, never a free status select"
      }
    ],
    "informationHierarchy": [
      "1. Report generation panel (project context + period selection + Generate trigger)",
      "2. Generated report content editor (summary, overviews, delay-risk assessment, PM notes)",
      "3. Lifecycle transition actions (Mark Reviewed / Share with Client) anchored to the report"
    ],
    "successCriteria": "The PM can generate a report, review and refine all AI-produced sections, and advance the report to 'shared' in a single focused workspace without navigating away or manually typing any system-owned identifier.",
    "antiPatterns": [
      "Exposing statusReportId as a typed input — it is always route-param or context-derived",
      "Rendering status transition as a free <select> over all enum values",
      "Splitting generate and review into separate pages when they are one workflow",
      "Showing system-owned timestamps (generatedAt, createdAt, updatedAt) as editable fields",
      "Requiring the PM to re-enter projectId after it is already selected from context"
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
