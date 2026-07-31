/// <mls fileReference="_102045_/l2/buildFlowFsm/web/desktop/page21/clientStatusWorkspace.defs.ts" enhancement="_blank"/>

export const definition = {
  "pageId": "clientStatusWorkspace",
  "pageName": "Project Status",
  "baseClassName": "BuildFlowFsmClientStatusWorkspaceBase",
  "actor": "client",
  "purpose": "Executar Project Status.",
  "capabilities": [
    "viewStatusReport"
  ],
  "flowRefs": {
    "experienceFlows": [],
    "entityLifecycles": [],
    "taskWorkflows": [],
    "automations": []
  },
  "pluginRefs": [],
  "mdmRefs": [],
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
  "pageInputs": [],
  "navigationRefs": [],
  "sections": [
    {
      "id": "section.clientStatusWorkspace.sec-report-header",
      "type": "section",
      "sectionName": "Report Identity",
      "titleKey": "section.clientStatusWorkspace.sec-report-header.title",
      "mode": "view",
      "order": 10,
      "organisms": [
        {
          "id": "org-report-header",
          "type": "queryResult",
          "organismName": "StatusReportHeader",
          "titleKey": "organism.clientStatusWorkspace.viewStatusReport.title",
          "purpose": "Displays the project name, report period, report status, and share/generation timestamps so the client immediately knows which project and period this report covers.",
          "userActions": [
            "viewStatusReport"
          ],
          "requiredEntities": [],
          "readsFields": [],
          "writesFields": [],
          "rulesApplied": [
            "pmControlsStatusReportLifecycle"
          ],
          "order": 10,
          "intentionRefs": [
            {
              "id": "intent.clientStatusWorkspace.viewStatusReport.list",
              "intent": "queryList",
              "stateKey": "ui.clientStatusWorkspace.data.viewStatusReport",
              "action": "viewStatusReport",
              "order": 10
            }
          ]
        }
      ]
    },
    {
      "id": "section.clientStatusWorkspace.sec-report-body",
      "type": "section",
      "sectionName": "Status Report Detail",
      "titleKey": "section.clientStatusWorkspace.sec-report-body.title",
      "mode": "view",
      "order": 20,
      "organisms": [
        {
          "id": "org-report-summary",
          "type": "queryResult",
          "organismName": "StatusReportSummary",
          "titleKey": "organism.clientStatusWorkspace.viewStatusReport.title",
          "purpose": "Presents the AI-generated executive summary prominently so the client gets the high-level project health at a glance before diving into details.",
          "userActions": [
            "viewStatusReport"
          ],
          "requiredEntities": [],
          "readsFields": [],
          "writesFields": [],
          "rulesApplied": [
            "pmControlsStatusReportLifecycle"
          ],
          "order": 10,
          "intentionRefs": [
            {
              "id": "intent.clientStatusWorkspace.viewStatusReport.list2",
              "intent": "queryList",
              "stateKey": "ui.clientStatusWorkspace.data.viewStatusReport",
              "action": "viewStatusReport",
              "order": 10
            }
          ]
        },
        {
          "id": "org-report-overviews",
          "type": "queryResult",
          "organismName": "StatusReportOverviews",
          "titleKey": "organism.clientStatusWorkspace.viewStatusReport.title",
          "purpose": "Shows the structured overviews for tasks, time logs, and materials in a scannable grouped layout so the client can assess progress across all three dimensions.",
          "userActions": [
            "viewStatusReport"
          ],
          "requiredEntities": [],
          "readsFields": [],
          "writesFields": [],
          "rulesApplied": [
            "pmControlsStatusReportLifecycle"
          ],
          "order": 20,
          "intentionRefs": [
            {
              "id": "intent.clientStatusWorkspace.viewStatusReport.list3",
              "intent": "queryList",
              "stateKey": "ui.clientStatusWorkspace.data.viewStatusReport",
              "action": "viewStatusReport",
              "order": 10
            }
          ]
        },
        {
          "id": "org-delay-risk",
          "type": "queryResult",
          "organismName": "DelayRiskAssessment",
          "titleKey": "organism.clientStatusWorkspace.viewStatusReport.title",
          "purpose": "Highlights the delay risk assessment prominently so the client can quickly identify any schedule or delivery concerns flagged by the PM.",
          "userActions": [
            "viewStatusReport"
          ],
          "requiredEntities": [],
          "readsFields": [],
          "writesFields": [],
          "rulesApplied": [
            "pmControlsStatusReportLifecycle"
          ],
          "order": 30,
          "intentionRefs": [
            {
              "id": "intent.clientStatusWorkspace.viewStatusReport.list4",
              "intent": "queryList",
              "stateKey": "ui.clientStatusWorkspace.data.viewStatusReport",
              "action": "viewStatusReport",
              "order": 10
            }
          ]
        },
        {
          "id": "org-pm-notes",
          "type": "queryResult",
          "organismName": "PmNotes",
          "titleKey": "organism.clientStatusWorkspace.viewStatusReport.title",
          "purpose": "Displays the project manager's notes so the client can read qualitative context and any direct communication from the PM for this reporting period.",
          "userActions": [
            "viewStatusReport"
          ],
          "requiredEntities": [],
          "readsFields": [],
          "writesFields": [],
          "rulesApplied": [
            "pmControlsStatusReportLifecycle"
          ],
          "order": 40,
          "intentionRefs": [
            {
              "id": "intent.clientStatusWorkspace.viewStatusReport.list5",
              "intent": "queryList",
              "stateKey": "ui.clientStatusWorkspace.data.viewStatusReport",
              "action": "viewStatusReport",
              "order": 10
            }
          ]
        }
      ]
    }
  ],
  "templateId": "goal_first",
  "visualStyle": "Desktop-first for PM and billing staff with mobile-optimized field entry; dashboard-driven, status-aware, touch-friendly UI with Gantt-ish timeline views.",
  "pageObjective": {
    "actor": "Client (project owner/stakeholder)",
    "jobToBeDone": "Review the shared project status report to stay informed on progress, budget, risks, and PM notes for the current reporting period.",
    "primaryDecision": "Absorb and understand the full status report — there is no mutation; the client reads and comprehends.",
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
    "usageFrequency": "Occasional — client opens this page when notified that a new status report has been shared; read-only, single-session review.",
    "criticalActions": [
      {
        "action": "viewStatusReport",
        "presentation": "summary-first — auto-load on page entry using route param; display as a structured read-only detail panel with clearly labelled sections"
      }
    ],
    "informationHierarchy": [
      "1. Project identity and report period (projectName, reportPeriodStart, reportPeriodEnd, status)",
      "2. Executive summary (summary)",
      "3. Tasks overview (tasksOverview)",
      "4. Time logs overview (timeLogsOverview)",
      "5. Materials overview (materialsOverview)",
      "6. Delay risk assessment (delayRiskAssessment)",
      "7. PM notes (pmNotes)",
      "8. Report metadata (generatedAt, sharedAt)"
    ],
    "successCriteria": "The client can open the page and immediately read a clear, structured status report without any manual input, confusion about the reporting period, or need to navigate elsewhere.",
    "antiPatterns": [
      "Exposing statusReportId or clientId as manual text inputs — both are context-derived (route param and session)",
      "Rendering a form or edit controls — this is a read-only view",
      "Splitting each section (tasks, time, materials) into separate page sections — they belong together in one cohesive report",
      "Showing a list/table of reports — the client arrives at a specific shared report via route",
      "Status <select> or transition buttons — the client has no lifecycle authority over the report"
    ]
  },
  "layout": {
    "id": "clientStatusWorkspace-page21-goal-first",
    "type": "page",
    "sections": [
      {
        "id": "section.clientStatusWorkspace.sec-report-header",
        "type": "section",
        "sectionName": "Report Identity",
        "titleKey": "section.clientStatusWorkspace.sec-report-header.title",
        "mode": "view",
        "order": 10,
        "organisms": [
          {
            "id": "org-report-header",
            "type": "queryResult",
            "organismName": "StatusReportHeader",
            "titleKey": "organism.clientStatusWorkspace.viewStatusReport.title",
            "purpose": "Displays the project name, report period, report status, and share/generation timestamps so the client immediately knows which project and period this report covers.",
            "userActions": [
              "viewStatusReport"
            ],
            "requiredEntities": [],
            "readsFields": [],
            "writesFields": [],
            "rulesApplied": [
              "pmControlsStatusReportLifecycle"
            ],
            "order": 10,
            "intentions": [
              {
                "id": "intent.clientStatusWorkspace.viewStatusReport.list",
                "intent": "queryList",
                "order": 10,
                "titleKey": "intent.clientStatusWorkspace.viewStatusReport.list.title",
                "source": "bff.viewStatusReport",
                "binding": "binding.clientStatusWorkspace.viewStatusReport",
                "action": "viewStatusReport",
                "emptyKey": "intent.clientStatusWorkspace.viewStatusReport.list.empty",
                "fields": [],
                "columns": [
                  {
                    "id": "intent.clientStatusWorkspace.viewStatusReport.list.column.statusReportId",
                    "field": "statusReportId",
                    "labelKey": "intent.clientStatusWorkspace.viewStatusReport.list.column.statusReportId.label",
                    "order": 10,
                    "stateKey": "ui.clientStatusWorkspace.data.viewStatusReport"
                  },
                  {
                    "id": "intent.clientStatusWorkspace.viewStatusReport.list.column.projectId",
                    "field": "projectId",
                    "labelKey": "intent.clientStatusWorkspace.viewStatusReport.list.column.projectId.label",
                    "order": 20,
                    "stateKey": "ui.clientStatusWorkspace.data.viewStatusReport"
                  },
                  {
                    "id": "intent.clientStatusWorkspace.viewStatusReport.list.column.projectName",
                    "field": "projectName",
                    "labelKey": "intent.clientStatusWorkspace.viewStatusReport.list.column.projectName.label",
                    "order": 30,
                    "stateKey": "ui.clientStatusWorkspace.data.viewStatusReport"
                  },
                  {
                    "id": "intent.clientStatusWorkspace.viewStatusReport.list.column.status",
                    "field": "status",
                    "labelKey": "intent.clientStatusWorkspace.viewStatusReport.list.column.status.label",
                    "order": 40,
                    "stateKey": "ui.clientStatusWorkspace.data.viewStatusReport"
                  },
                  {
                    "id": "intent.clientStatusWorkspace.viewStatusReport.list.column.reportPeriodStart",
                    "field": "reportPeriodStart",
                    "labelKey": "intent.clientStatusWorkspace.viewStatusReport.list.column.reportPeriodStart.label",
                    "order": 50,
                    "stateKey": "ui.clientStatusWorkspace.data.viewStatusReport"
                  },
                  {
                    "id": "intent.clientStatusWorkspace.viewStatusReport.list.column.reportPeriodEnd",
                    "field": "reportPeriodEnd",
                    "labelKey": "intent.clientStatusWorkspace.viewStatusReport.list.column.reportPeriodEnd.label",
                    "order": 60,
                    "stateKey": "ui.clientStatusWorkspace.data.viewStatusReport"
                  },
                  {
                    "id": "intent.clientStatusWorkspace.viewStatusReport.list.column.summary",
                    "field": "summary",
                    "labelKey": "intent.clientStatusWorkspace.viewStatusReport.list.column.summary.label",
                    "order": 70,
                    "stateKey": "ui.clientStatusWorkspace.data.viewStatusReport"
                  },
                  {
                    "id": "intent.clientStatusWorkspace.viewStatusReport.list.column.tasksOverview",
                    "field": "tasksOverview",
                    "labelKey": "intent.clientStatusWorkspace.viewStatusReport.list.column.tasksOverview.label",
                    "order": 80,
                    "stateKey": "ui.clientStatusWorkspace.data.viewStatusReport"
                  },
                  {
                    "id": "intent.clientStatusWorkspace.viewStatusReport.list.column.timeLogsOverview",
                    "field": "timeLogsOverview",
                    "labelKey": "intent.clientStatusWorkspace.viewStatusReport.list.column.timeLogsOverview.label",
                    "order": 90,
                    "stateKey": "ui.clientStatusWorkspace.data.viewStatusReport"
                  },
                  {
                    "id": "intent.clientStatusWorkspace.viewStatusReport.list.column.materialsOverview",
                    "field": "materialsOverview",
                    "labelKey": "intent.clientStatusWorkspace.viewStatusReport.list.column.materialsOverview.label",
                    "order": 100,
                    "stateKey": "ui.clientStatusWorkspace.data.viewStatusReport"
                  },
                  {
                    "id": "intent.clientStatusWorkspace.viewStatusReport.list.column.delayRiskAssessment",
                    "field": "delayRiskAssessment",
                    "labelKey": "intent.clientStatusWorkspace.viewStatusReport.list.column.delayRiskAssessment.label",
                    "order": 110,
                    "stateKey": "ui.clientStatusWorkspace.data.viewStatusReport"
                  },
                  {
                    "id": "intent.clientStatusWorkspace.viewStatusReport.list.column.pmNotes",
                    "field": "pmNotes",
                    "labelKey": "intent.clientStatusWorkspace.viewStatusReport.list.column.pmNotes.label",
                    "order": 120,
                    "stateKey": "ui.clientStatusWorkspace.data.viewStatusReport"
                  },
                  {
                    "id": "intent.clientStatusWorkspace.viewStatusReport.list.column.generatedAt",
                    "field": "generatedAt",
                    "labelKey": "intent.clientStatusWorkspace.viewStatusReport.list.column.generatedAt.label",
                    "order": 130,
                    "stateKey": "ui.clientStatusWorkspace.data.viewStatusReport"
                  },
                  {
                    "id": "intent.clientStatusWorkspace.viewStatusReport.list.column.sharedAt",
                    "field": "sharedAt",
                    "labelKey": "intent.clientStatusWorkspace.viewStatusReport.list.column.sharedAt.label",
                    "order": 140,
                    "stateKey": "ui.clientStatusWorkspace.data.viewStatusReport"
                  }
                ],
                "filters": [
                  {
                    "id": "intent.clientStatusWorkspace.viewStatusReport.list.filter.clientId",
                    "field": "clientId",
                    "labelKey": "intent.clientStatusWorkspace.viewStatusReport.list.filter.clientId.label",
                    "order": 10,
                    "stateKey": "ui.clientStatusWorkspace.input.viewStatusReport.clientId"
                  }
                ],
                "toolbar": [],
                "rowActions": [],
                "actions": [],
                "stateKey": "ui.clientStatusWorkspace.data.viewStatusReport"
              }
            ],
            "displayHint": "summary-first"
          }
        ]
      },
      {
        "id": "section.clientStatusWorkspace.sec-report-body",
        "type": "section",
        "sectionName": "Status Report Detail",
        "titleKey": "section.clientStatusWorkspace.sec-report-body.title",
        "mode": "view",
        "order": 20,
        "organisms": [
          {
            "id": "org-report-summary",
            "type": "queryResult",
            "organismName": "StatusReportSummary",
            "titleKey": "organism.clientStatusWorkspace.viewStatusReport.title",
            "purpose": "Presents the AI-generated executive summary prominently so the client gets the high-level project health at a glance before diving into details.",
            "userActions": [
              "viewStatusReport"
            ],
            "requiredEntities": [],
            "readsFields": [],
            "writesFields": [],
            "rulesApplied": [
              "pmControlsStatusReportLifecycle"
            ],
            "order": 10,
            "intentions": [
              {
                "id": "intent.clientStatusWorkspace.viewStatusReport.list2",
                "intent": "queryList",
                "order": 10,
                "titleKey": "intent.clientStatusWorkspace.viewStatusReport.list.title",
                "source": "bff.viewStatusReport",
                "binding": "binding.clientStatusWorkspace.viewStatusReport",
                "action": "viewStatusReport",
                "emptyKey": "intent.clientStatusWorkspace.viewStatusReport.list.empty",
                "fields": [],
                "columns": [
                  {
                    "id": "intent.clientStatusWorkspace.viewStatusReport.list.column.statusReportId",
                    "field": "statusReportId",
                    "labelKey": "intent.clientStatusWorkspace.viewStatusReport.list.column.statusReportId.label",
                    "order": 10,
                    "stateKey": "ui.clientStatusWorkspace.data.viewStatusReport"
                  },
                  {
                    "id": "intent.clientStatusWorkspace.viewStatusReport.list.column.projectId",
                    "field": "projectId",
                    "labelKey": "intent.clientStatusWorkspace.viewStatusReport.list.column.projectId.label",
                    "order": 20,
                    "stateKey": "ui.clientStatusWorkspace.data.viewStatusReport"
                  },
                  {
                    "id": "intent.clientStatusWorkspace.viewStatusReport.list.column.projectName",
                    "field": "projectName",
                    "labelKey": "intent.clientStatusWorkspace.viewStatusReport.list.column.projectName.label",
                    "order": 30,
                    "stateKey": "ui.clientStatusWorkspace.data.viewStatusReport"
                  },
                  {
                    "id": "intent.clientStatusWorkspace.viewStatusReport.list.column.status",
                    "field": "status",
                    "labelKey": "intent.clientStatusWorkspace.viewStatusReport.list.column.status.label",
                    "order": 40,
                    "stateKey": "ui.clientStatusWorkspace.data.viewStatusReport"
                  },
                  {
                    "id": "intent.clientStatusWorkspace.viewStatusReport.list.column.reportPeriodStart",
                    "field": "reportPeriodStart",
                    "labelKey": "intent.clientStatusWorkspace.viewStatusReport.list.column.reportPeriodStart.label",
                    "order": 50,
                    "stateKey": "ui.clientStatusWorkspace.data.viewStatusReport"
                  },
                  {
                    "id": "intent.clientStatusWorkspace.viewStatusReport.list.column.reportPeriodEnd",
                    "field": "reportPeriodEnd",
                    "labelKey": "intent.clientStatusWorkspace.viewStatusReport.list.column.reportPeriodEnd.label",
                    "order": 60,
                    "stateKey": "ui.clientStatusWorkspace.data.viewStatusReport"
                  },
                  {
                    "id": "intent.clientStatusWorkspace.viewStatusReport.list.column.summary",
                    "field": "summary",
                    "labelKey": "intent.clientStatusWorkspace.viewStatusReport.list.column.summary.label",
                    "order": 70,
                    "stateKey": "ui.clientStatusWorkspace.data.viewStatusReport"
                  },
                  {
                    "id": "intent.clientStatusWorkspace.viewStatusReport.list.column.tasksOverview",
                    "field": "tasksOverview",
                    "labelKey": "intent.clientStatusWorkspace.viewStatusReport.list.column.tasksOverview.label",
                    "order": 80,
                    "stateKey": "ui.clientStatusWorkspace.data.viewStatusReport"
                  },
                  {
                    "id": "intent.clientStatusWorkspace.viewStatusReport.list.column.timeLogsOverview",
                    "field": "timeLogsOverview",
                    "labelKey": "intent.clientStatusWorkspace.viewStatusReport.list.column.timeLogsOverview.label",
                    "order": 90,
                    "stateKey": "ui.clientStatusWorkspace.data.viewStatusReport"
                  },
                  {
                    "id": "intent.clientStatusWorkspace.viewStatusReport.list.column.materialsOverview",
                    "field": "materialsOverview",
                    "labelKey": "intent.clientStatusWorkspace.viewStatusReport.list.column.materialsOverview.label",
                    "order": 100,
                    "stateKey": "ui.clientStatusWorkspace.data.viewStatusReport"
                  },
                  {
                    "id": "intent.clientStatusWorkspace.viewStatusReport.list.column.delayRiskAssessment",
                    "field": "delayRiskAssessment",
                    "labelKey": "intent.clientStatusWorkspace.viewStatusReport.list.column.delayRiskAssessment.label",
                    "order": 110,
                    "stateKey": "ui.clientStatusWorkspace.data.viewStatusReport"
                  },
                  {
                    "id": "intent.clientStatusWorkspace.viewStatusReport.list.column.pmNotes",
                    "field": "pmNotes",
                    "labelKey": "intent.clientStatusWorkspace.viewStatusReport.list.column.pmNotes.label",
                    "order": 120,
                    "stateKey": "ui.clientStatusWorkspace.data.viewStatusReport"
                  },
                  {
                    "id": "intent.clientStatusWorkspace.viewStatusReport.list.column.generatedAt",
                    "field": "generatedAt",
                    "labelKey": "intent.clientStatusWorkspace.viewStatusReport.list.column.generatedAt.label",
                    "order": 130,
                    "stateKey": "ui.clientStatusWorkspace.data.viewStatusReport"
                  },
                  {
                    "id": "intent.clientStatusWorkspace.viewStatusReport.list.column.sharedAt",
                    "field": "sharedAt",
                    "labelKey": "intent.clientStatusWorkspace.viewStatusReport.list.column.sharedAt.label",
                    "order": 140,
                    "stateKey": "ui.clientStatusWorkspace.data.viewStatusReport"
                  }
                ],
                "filters": [
                  {
                    "id": "intent.clientStatusWorkspace.viewStatusReport.list.filter.clientId",
                    "field": "clientId",
                    "labelKey": "intent.clientStatusWorkspace.viewStatusReport.list.filter.clientId.label",
                    "order": 10,
                    "stateKey": "ui.clientStatusWorkspace.input.viewStatusReport.clientId"
                  }
                ],
                "toolbar": [],
                "rowActions": [],
                "actions": [],
                "stateKey": "ui.clientStatusWorkspace.data.viewStatusReport"
              }
            ],
            "displayHint": "summary-first"
          },
          {
            "id": "org-report-overviews",
            "type": "queryResult",
            "organismName": "StatusReportOverviews",
            "titleKey": "organism.clientStatusWorkspace.viewStatusReport.title",
            "purpose": "Shows the structured overviews for tasks, time logs, and materials in a scannable grouped layout so the client can assess progress across all three dimensions.",
            "userActions": [
              "viewStatusReport"
            ],
            "requiredEntities": [],
            "readsFields": [],
            "writesFields": [],
            "rulesApplied": [
              "pmControlsStatusReportLifecycle"
            ],
            "order": 20,
            "intentions": [
              {
                "id": "intent.clientStatusWorkspace.viewStatusReport.list3",
                "intent": "queryList",
                "order": 10,
                "titleKey": "intent.clientStatusWorkspace.viewStatusReport.list.title",
                "source": "bff.viewStatusReport",
                "binding": "binding.clientStatusWorkspace.viewStatusReport",
                "action": "viewStatusReport",
                "emptyKey": "intent.clientStatusWorkspace.viewStatusReport.list.empty",
                "fields": [],
                "columns": [
                  {
                    "id": "intent.clientStatusWorkspace.viewStatusReport.list.column.statusReportId",
                    "field": "statusReportId",
                    "labelKey": "intent.clientStatusWorkspace.viewStatusReport.list.column.statusReportId.label",
                    "order": 10,
                    "stateKey": "ui.clientStatusWorkspace.data.viewStatusReport"
                  },
                  {
                    "id": "intent.clientStatusWorkspace.viewStatusReport.list.column.projectId",
                    "field": "projectId",
                    "labelKey": "intent.clientStatusWorkspace.viewStatusReport.list.column.projectId.label",
                    "order": 20,
                    "stateKey": "ui.clientStatusWorkspace.data.viewStatusReport"
                  },
                  {
                    "id": "intent.clientStatusWorkspace.viewStatusReport.list.column.projectName",
                    "field": "projectName",
                    "labelKey": "intent.clientStatusWorkspace.viewStatusReport.list.column.projectName.label",
                    "order": 30,
                    "stateKey": "ui.clientStatusWorkspace.data.viewStatusReport"
                  },
                  {
                    "id": "intent.clientStatusWorkspace.viewStatusReport.list.column.status",
                    "field": "status",
                    "labelKey": "intent.clientStatusWorkspace.viewStatusReport.list.column.status.label",
                    "order": 40,
                    "stateKey": "ui.clientStatusWorkspace.data.viewStatusReport"
                  },
                  {
                    "id": "intent.clientStatusWorkspace.viewStatusReport.list.column.reportPeriodStart",
                    "field": "reportPeriodStart",
                    "labelKey": "intent.clientStatusWorkspace.viewStatusReport.list.column.reportPeriodStart.label",
                    "order": 50,
                    "stateKey": "ui.clientStatusWorkspace.data.viewStatusReport"
                  },
                  {
                    "id": "intent.clientStatusWorkspace.viewStatusReport.list.column.reportPeriodEnd",
                    "field": "reportPeriodEnd",
                    "labelKey": "intent.clientStatusWorkspace.viewStatusReport.list.column.reportPeriodEnd.label",
                    "order": 60,
                    "stateKey": "ui.clientStatusWorkspace.data.viewStatusReport"
                  },
                  {
                    "id": "intent.clientStatusWorkspace.viewStatusReport.list.column.summary",
                    "field": "summary",
                    "labelKey": "intent.clientStatusWorkspace.viewStatusReport.list.column.summary.label",
                    "order": 70,
                    "stateKey": "ui.clientStatusWorkspace.data.viewStatusReport"
                  },
                  {
                    "id": "intent.clientStatusWorkspace.viewStatusReport.list.column.tasksOverview",
                    "field": "tasksOverview",
                    "labelKey": "intent.clientStatusWorkspace.viewStatusReport.list.column.tasksOverview.label",
                    "order": 80,
                    "stateKey": "ui.clientStatusWorkspace.data.viewStatusReport"
                  },
                  {
                    "id": "intent.clientStatusWorkspace.viewStatusReport.list.column.timeLogsOverview",
                    "field": "timeLogsOverview",
                    "labelKey": "intent.clientStatusWorkspace.viewStatusReport.list.column.timeLogsOverview.label",
                    "order": 90,
                    "stateKey": "ui.clientStatusWorkspace.data.viewStatusReport"
                  },
                  {
                    "id": "intent.clientStatusWorkspace.viewStatusReport.list.column.materialsOverview",
                    "field": "materialsOverview",
                    "labelKey": "intent.clientStatusWorkspace.viewStatusReport.list.column.materialsOverview.label",
                    "order": 100,
                    "stateKey": "ui.clientStatusWorkspace.data.viewStatusReport"
                  },
                  {
                    "id": "intent.clientStatusWorkspace.viewStatusReport.list.column.delayRiskAssessment",
                    "field": "delayRiskAssessment",
                    "labelKey": "intent.clientStatusWorkspace.viewStatusReport.list.column.delayRiskAssessment.label",
                    "order": 110,
                    "stateKey": "ui.clientStatusWorkspace.data.viewStatusReport"
                  },
                  {
                    "id": "intent.clientStatusWorkspace.viewStatusReport.list.column.pmNotes",
                    "field": "pmNotes",
                    "labelKey": "intent.clientStatusWorkspace.viewStatusReport.list.column.pmNotes.label",
                    "order": 120,
                    "stateKey": "ui.clientStatusWorkspace.data.viewStatusReport"
                  },
                  {
                    "id": "intent.clientStatusWorkspace.viewStatusReport.list.column.generatedAt",
                    "field": "generatedAt",
                    "labelKey": "intent.clientStatusWorkspace.viewStatusReport.list.column.generatedAt.label",
                    "order": 130,
                    "stateKey": "ui.clientStatusWorkspace.data.viewStatusReport"
                  },
                  {
                    "id": "intent.clientStatusWorkspace.viewStatusReport.list.column.sharedAt",
                    "field": "sharedAt",
                    "labelKey": "intent.clientStatusWorkspace.viewStatusReport.list.column.sharedAt.label",
                    "order": 140,
                    "stateKey": "ui.clientStatusWorkspace.data.viewStatusReport"
                  }
                ],
                "filters": [
                  {
                    "id": "intent.clientStatusWorkspace.viewStatusReport.list.filter.clientId",
                    "field": "clientId",
                    "labelKey": "intent.clientStatusWorkspace.viewStatusReport.list.filter.clientId.label",
                    "order": 10,
                    "stateKey": "ui.clientStatusWorkspace.input.viewStatusReport.clientId"
                  }
                ],
                "toolbar": [],
                "rowActions": [],
                "actions": [],
                "stateKey": "ui.clientStatusWorkspace.data.viewStatusReport"
              }
            ],
            "displayHint": "summary-first"
          },
          {
            "id": "org-delay-risk",
            "type": "queryResult",
            "organismName": "DelayRiskAssessment",
            "titleKey": "organism.clientStatusWorkspace.viewStatusReport.title",
            "purpose": "Highlights the delay risk assessment prominently so the client can quickly identify any schedule or delivery concerns flagged by the PM.",
            "userActions": [
              "viewStatusReport"
            ],
            "requiredEntities": [],
            "readsFields": [],
            "writesFields": [],
            "rulesApplied": [
              "pmControlsStatusReportLifecycle"
            ],
            "order": 30,
            "intentions": [
              {
                "id": "intent.clientStatusWorkspace.viewStatusReport.list4",
                "intent": "queryList",
                "order": 10,
                "titleKey": "intent.clientStatusWorkspace.viewStatusReport.list.title",
                "source": "bff.viewStatusReport",
                "binding": "binding.clientStatusWorkspace.viewStatusReport",
                "action": "viewStatusReport",
                "emptyKey": "intent.clientStatusWorkspace.viewStatusReport.list.empty",
                "fields": [],
                "columns": [
                  {
                    "id": "intent.clientStatusWorkspace.viewStatusReport.list.column.statusReportId",
                    "field": "statusReportId",
                    "labelKey": "intent.clientStatusWorkspace.viewStatusReport.list.column.statusReportId.label",
                    "order": 10,
                    "stateKey": "ui.clientStatusWorkspace.data.viewStatusReport"
                  },
                  {
                    "id": "intent.clientStatusWorkspace.viewStatusReport.list.column.projectId",
                    "field": "projectId",
                    "labelKey": "intent.clientStatusWorkspace.viewStatusReport.list.column.projectId.label",
                    "order": 20,
                    "stateKey": "ui.clientStatusWorkspace.data.viewStatusReport"
                  },
                  {
                    "id": "intent.clientStatusWorkspace.viewStatusReport.list.column.projectName",
                    "field": "projectName",
                    "labelKey": "intent.clientStatusWorkspace.viewStatusReport.list.column.projectName.label",
                    "order": 30,
                    "stateKey": "ui.clientStatusWorkspace.data.viewStatusReport"
                  },
                  {
                    "id": "intent.clientStatusWorkspace.viewStatusReport.list.column.status",
                    "field": "status",
                    "labelKey": "intent.clientStatusWorkspace.viewStatusReport.list.column.status.label",
                    "order": 40,
                    "stateKey": "ui.clientStatusWorkspace.data.viewStatusReport"
                  },
                  {
                    "id": "intent.clientStatusWorkspace.viewStatusReport.list.column.reportPeriodStart",
                    "field": "reportPeriodStart",
                    "labelKey": "intent.clientStatusWorkspace.viewStatusReport.list.column.reportPeriodStart.label",
                    "order": 50,
                    "stateKey": "ui.clientStatusWorkspace.data.viewStatusReport"
                  },
                  {
                    "id": "intent.clientStatusWorkspace.viewStatusReport.list.column.reportPeriodEnd",
                    "field": "reportPeriodEnd",
                    "labelKey": "intent.clientStatusWorkspace.viewStatusReport.list.column.reportPeriodEnd.label",
                    "order": 60,
                    "stateKey": "ui.clientStatusWorkspace.data.viewStatusReport"
                  },
                  {
                    "id": "intent.clientStatusWorkspace.viewStatusReport.list.column.summary",
                    "field": "summary",
                    "labelKey": "intent.clientStatusWorkspace.viewStatusReport.list.column.summary.label",
                    "order": 70,
                    "stateKey": "ui.clientStatusWorkspace.data.viewStatusReport"
                  },
                  {
                    "id": "intent.clientStatusWorkspace.viewStatusReport.list.column.tasksOverview",
                    "field": "tasksOverview",
                    "labelKey": "intent.clientStatusWorkspace.viewStatusReport.list.column.tasksOverview.label",
                    "order": 80,
                    "stateKey": "ui.clientStatusWorkspace.data.viewStatusReport"
                  },
                  {
                    "id": "intent.clientStatusWorkspace.viewStatusReport.list.column.timeLogsOverview",
                    "field": "timeLogsOverview",
                    "labelKey": "intent.clientStatusWorkspace.viewStatusReport.list.column.timeLogsOverview.label",
                    "order": 90,
                    "stateKey": "ui.clientStatusWorkspace.data.viewStatusReport"
                  },
                  {
                    "id": "intent.clientStatusWorkspace.viewStatusReport.list.column.materialsOverview",
                    "field": "materialsOverview",
                    "labelKey": "intent.clientStatusWorkspace.viewStatusReport.list.column.materialsOverview.label",
                    "order": 100,
                    "stateKey": "ui.clientStatusWorkspace.data.viewStatusReport"
                  },
                  {
                    "id": "intent.clientStatusWorkspace.viewStatusReport.list.column.delayRiskAssessment",
                    "field": "delayRiskAssessment",
                    "labelKey": "intent.clientStatusWorkspace.viewStatusReport.list.column.delayRiskAssessment.label",
                    "order": 110,
                    "stateKey": "ui.clientStatusWorkspace.data.viewStatusReport"
                  },
                  {
                    "id": "intent.clientStatusWorkspace.viewStatusReport.list.column.pmNotes",
                    "field": "pmNotes",
                    "labelKey": "intent.clientStatusWorkspace.viewStatusReport.list.column.pmNotes.label",
                    "order": 120,
                    "stateKey": "ui.clientStatusWorkspace.data.viewStatusReport"
                  },
                  {
                    "id": "intent.clientStatusWorkspace.viewStatusReport.list.column.generatedAt",
                    "field": "generatedAt",
                    "labelKey": "intent.clientStatusWorkspace.viewStatusReport.list.column.generatedAt.label",
                    "order": 130,
                    "stateKey": "ui.clientStatusWorkspace.data.viewStatusReport"
                  },
                  {
                    "id": "intent.clientStatusWorkspace.viewStatusReport.list.column.sharedAt",
                    "field": "sharedAt",
                    "labelKey": "intent.clientStatusWorkspace.viewStatusReport.list.column.sharedAt.label",
                    "order": 140,
                    "stateKey": "ui.clientStatusWorkspace.data.viewStatusReport"
                  }
                ],
                "filters": [
                  {
                    "id": "intent.clientStatusWorkspace.viewStatusReport.list.filter.clientId",
                    "field": "clientId",
                    "labelKey": "intent.clientStatusWorkspace.viewStatusReport.list.filter.clientId.label",
                    "order": 10,
                    "stateKey": "ui.clientStatusWorkspace.input.viewStatusReport.clientId"
                  }
                ],
                "toolbar": [],
                "rowActions": [],
                "actions": [],
                "stateKey": "ui.clientStatusWorkspace.data.viewStatusReport"
              }
            ],
            "displayHint": "summary-first"
          },
          {
            "id": "org-pm-notes",
            "type": "queryResult",
            "organismName": "PmNotes",
            "titleKey": "organism.clientStatusWorkspace.viewStatusReport.title",
            "purpose": "Displays the project manager's notes so the client can read qualitative context and any direct communication from the PM for this reporting period.",
            "userActions": [
              "viewStatusReport"
            ],
            "requiredEntities": [],
            "readsFields": [],
            "writesFields": [],
            "rulesApplied": [
              "pmControlsStatusReportLifecycle"
            ],
            "order": 40,
            "intentions": [
              {
                "id": "intent.clientStatusWorkspace.viewStatusReport.list5",
                "intent": "queryList",
                "order": 10,
                "titleKey": "intent.clientStatusWorkspace.viewStatusReport.list.title",
                "source": "bff.viewStatusReport",
                "binding": "binding.clientStatusWorkspace.viewStatusReport",
                "action": "viewStatusReport",
                "emptyKey": "intent.clientStatusWorkspace.viewStatusReport.list.empty",
                "fields": [],
                "columns": [
                  {
                    "id": "intent.clientStatusWorkspace.viewStatusReport.list.column.statusReportId",
                    "field": "statusReportId",
                    "labelKey": "intent.clientStatusWorkspace.viewStatusReport.list.column.statusReportId.label",
                    "order": 10,
                    "stateKey": "ui.clientStatusWorkspace.data.viewStatusReport"
                  },
                  {
                    "id": "intent.clientStatusWorkspace.viewStatusReport.list.column.projectId",
                    "field": "projectId",
                    "labelKey": "intent.clientStatusWorkspace.viewStatusReport.list.column.projectId.label",
                    "order": 20,
                    "stateKey": "ui.clientStatusWorkspace.data.viewStatusReport"
                  },
                  {
                    "id": "intent.clientStatusWorkspace.viewStatusReport.list.column.projectName",
                    "field": "projectName",
                    "labelKey": "intent.clientStatusWorkspace.viewStatusReport.list.column.projectName.label",
                    "order": 30,
                    "stateKey": "ui.clientStatusWorkspace.data.viewStatusReport"
                  },
                  {
                    "id": "intent.clientStatusWorkspace.viewStatusReport.list.column.status",
                    "field": "status",
                    "labelKey": "intent.clientStatusWorkspace.viewStatusReport.list.column.status.label",
                    "order": 40,
                    "stateKey": "ui.clientStatusWorkspace.data.viewStatusReport"
                  },
                  {
                    "id": "intent.clientStatusWorkspace.viewStatusReport.list.column.reportPeriodStart",
                    "field": "reportPeriodStart",
                    "labelKey": "intent.clientStatusWorkspace.viewStatusReport.list.column.reportPeriodStart.label",
                    "order": 50,
                    "stateKey": "ui.clientStatusWorkspace.data.viewStatusReport"
                  },
                  {
                    "id": "intent.clientStatusWorkspace.viewStatusReport.list.column.reportPeriodEnd",
                    "field": "reportPeriodEnd",
                    "labelKey": "intent.clientStatusWorkspace.viewStatusReport.list.column.reportPeriodEnd.label",
                    "order": 60,
                    "stateKey": "ui.clientStatusWorkspace.data.viewStatusReport"
                  },
                  {
                    "id": "intent.clientStatusWorkspace.viewStatusReport.list.column.summary",
                    "field": "summary",
                    "labelKey": "intent.clientStatusWorkspace.viewStatusReport.list.column.summary.label",
                    "order": 70,
                    "stateKey": "ui.clientStatusWorkspace.data.viewStatusReport"
                  },
                  {
                    "id": "intent.clientStatusWorkspace.viewStatusReport.list.column.tasksOverview",
                    "field": "tasksOverview",
                    "labelKey": "intent.clientStatusWorkspace.viewStatusReport.list.column.tasksOverview.label",
                    "order": 80,
                    "stateKey": "ui.clientStatusWorkspace.data.viewStatusReport"
                  },
                  {
                    "id": "intent.clientStatusWorkspace.viewStatusReport.list.column.timeLogsOverview",
                    "field": "timeLogsOverview",
                    "labelKey": "intent.clientStatusWorkspace.viewStatusReport.list.column.timeLogsOverview.label",
                    "order": 90,
                    "stateKey": "ui.clientStatusWorkspace.data.viewStatusReport"
                  },
                  {
                    "id": "intent.clientStatusWorkspace.viewStatusReport.list.column.materialsOverview",
                    "field": "materialsOverview",
                    "labelKey": "intent.clientStatusWorkspace.viewStatusReport.list.column.materialsOverview.label",
                    "order": 100,
                    "stateKey": "ui.clientStatusWorkspace.data.viewStatusReport"
                  },
                  {
                    "id": "intent.clientStatusWorkspace.viewStatusReport.list.column.delayRiskAssessment",
                    "field": "delayRiskAssessment",
                    "labelKey": "intent.clientStatusWorkspace.viewStatusReport.list.column.delayRiskAssessment.label",
                    "order": 110,
                    "stateKey": "ui.clientStatusWorkspace.data.viewStatusReport"
                  },
                  {
                    "id": "intent.clientStatusWorkspace.viewStatusReport.list.column.pmNotes",
                    "field": "pmNotes",
                    "labelKey": "intent.clientStatusWorkspace.viewStatusReport.list.column.pmNotes.label",
                    "order": 120,
                    "stateKey": "ui.clientStatusWorkspace.data.viewStatusReport"
                  },
                  {
                    "id": "intent.clientStatusWorkspace.viewStatusReport.list.column.generatedAt",
                    "field": "generatedAt",
                    "labelKey": "intent.clientStatusWorkspace.viewStatusReport.list.column.generatedAt.label",
                    "order": 130,
                    "stateKey": "ui.clientStatusWorkspace.data.viewStatusReport"
                  },
                  {
                    "id": "intent.clientStatusWorkspace.viewStatusReport.list.column.sharedAt",
                    "field": "sharedAt",
                    "labelKey": "intent.clientStatusWorkspace.viewStatusReport.list.column.sharedAt.label",
                    "order": 140,
                    "stateKey": "ui.clientStatusWorkspace.data.viewStatusReport"
                  }
                ],
                "filters": [
                  {
                    "id": "intent.clientStatusWorkspace.viewStatusReport.list.filter.clientId",
                    "field": "clientId",
                    "labelKey": "intent.clientStatusWorkspace.viewStatusReport.list.filter.clientId.label",
                    "order": 10,
                    "stateKey": "ui.clientStatusWorkspace.input.viewStatusReport.clientId"
                  }
                ],
                "toolbar": [],
                "rowActions": [],
                "actions": [],
                "stateKey": "ui.clientStatusWorkspace.data.viewStatusReport"
              }
            ],
            "displayHint": "summary-first"
          }
        ]
      }
    ]
  },
  "dataBindings": [
    {
      "id": "binding.clientStatusWorkspace.viewStatusReport",
      "source": "bff.viewStatusReport",
      "command": "viewStatusReport",
      "description": "View status report",
      "stateKey": "ui.clientStatusWorkspace.data.viewStatusReport",
      "inputStateKeys": [
        "ui.clientStatusWorkspace.input.viewStatusReport.statusReportId",
        "ui.clientStatusWorkspace.input.viewStatusReport.clientId"
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
      "_102020_/l2/agentChangeFrontend/skills/genCfePage21RenderTs.ts"
    ],
    "visualStyle": {
      "description": "Desktop-first for PM and billing staff with mobile-optimized field entry; dashboard-driven, status-aware, touch-friendly UI with Gantt-ish timeline views."
    },
    "agent": "agentCfeMaterializeGen"
  }
] as const;
