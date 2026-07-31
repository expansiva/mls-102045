/// <mls fileReference="_102045_/l2/buildFlowFsm/web/desktop/page11/clientStatusWorkspace.defs.ts" enhancement="_blank"/>

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
      "id": "section.clientStatusWorkspace.sec-status-report-detail",
      "type": "section",
      "sectionName": "statusReportDetail",
      "titleKey": "section.clientStatusWorkspace.sec-status-report-detail.title",
      "mode": "view",
      "order": 10,
      "organisms": [
        {
          "id": "org-status-report-header",
          "type": "queryResult",
          "organismName": "StatusReportHeader",
          "titleKey": "organism.clientStatusWorkspace.viewStatusReport.title",
          "purpose": "Displays the project name, reporting period, report status and generation/share timestamps so the client immediately understands which report they are reading and its currency.",
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
        },
        {
          "id": "org-status-report-summary",
          "type": "queryResult",
          "organismName": "StatusReportSummary",
          "titleKey": "organism.clientStatusWorkspace.viewStatusReport.title",
          "purpose": "Presents the AI-generated executive summary so the client gets a quick narrative overview of overall project health before diving into detailed sections.",
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
              "id": "intent.clientStatusWorkspace.viewStatusReport.list2",
              "intent": "queryList",
              "stateKey": "ui.clientStatusWorkspace.data.viewStatusReport",
              "action": "viewStatusReport",
              "order": 10
            }
          ]
        },
        {
          "id": "org-status-report-overviews",
          "type": "queryResult",
          "organismName": "StatusReportOverviews",
          "titleKey": "organism.clientStatusWorkspace.viewStatusReport.title",
          "purpose": "Shows the tasks, time-logs and materials overviews in a grouped panel so the client can assess progress and resource consumption across all three dimensions at a glance.",
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
              "id": "intent.clientStatusWorkspace.viewStatusReport.list3",
              "intent": "queryList",
              "stateKey": "ui.clientStatusWorkspace.data.viewStatusReport",
              "action": "viewStatusReport",
              "order": 10
            }
          ]
        },
        {
          "id": "org-status-report-risk-and-notes",
          "type": "queryResult",
          "organismName": "StatusReportRiskAndNotes",
          "titleKey": "organism.clientStatusWorkspace.viewStatusReport.title",
          "purpose": "Surfaces the delay-risk assessment and PM notes so the client can understand any flagged risks and the project manager's commentary for the period.",
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
              "id": "intent.clientStatusWorkspace.viewStatusReport.list4",
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
  "templateId": "split_detail",
  "visualStyle": "Desktop-first for PM and billing staff with mobile-optimized field entry; dashboard-driven, status-aware, touch-friendly UI with Gantt-ish timeline views.",
  "layout": {
    "id": "cfe-20260731060448.1000",
    "type": "page",
    "sections": [
      {
        "id": "section.clientStatusWorkspace.sec-status-report-detail",
        "type": "section",
        "sectionName": "statusReportDetail",
        "titleKey": "section.clientStatusWorkspace.sec-status-report-detail.title",
        "mode": "view",
        "order": 10,
        "organisms": [
          {
            "id": "org-status-report-header",
            "type": "queryResult",
            "organismName": "StatusReportHeader",
            "titleKey": "organism.clientStatusWorkspace.viewStatusReport.title",
            "purpose": "Displays the project name, reporting period, report status and generation/share timestamps so the client immediately understands which report they are reading and its currency.",
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
            "displayHint": "detail"
          },
          {
            "id": "org-status-report-summary",
            "type": "queryResult",
            "organismName": "StatusReportSummary",
            "titleKey": "organism.clientStatusWorkspace.viewStatusReport.title",
            "purpose": "Presents the AI-generated executive summary so the client gets a quick narrative overview of overall project health before diving into detailed sections.",
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
            "displayHint": "richText"
          },
          {
            "id": "org-status-report-overviews",
            "type": "queryResult",
            "organismName": "StatusReportOverviews",
            "titleKey": "organism.clientStatusWorkspace.viewStatusReport.title",
            "purpose": "Shows the tasks, time-logs and materials overviews in a grouped panel so the client can assess progress and resource consumption across all three dimensions at a glance.",
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
            "displayHint": "detail"
          },
          {
            "id": "org-status-report-risk-and-notes",
            "type": "queryResult",
            "organismName": "StatusReportRiskAndNotes",
            "titleKey": "organism.clientStatusWorkspace.viewStatusReport.title",
            "purpose": "Surfaces the delay-risk assessment and PM notes so the client can understand any flagged risks and the project manager's commentary for the period.",
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
            "displayHint": "detail"
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
    "id": "clientStatusWorkspace__l2_page",
    "type": "l2_page",
    "outputPath": "_102045_/l2/buildFlowFsm/web/desktop/page11/clientStatusWorkspace.ts",
    "defPath": "_102045_/l2/buildFlowFsm/web/desktop/page11/clientStatusWorkspace.defs.ts",
    "dependsFiles": [
      "_102045_/l2/buildFlowFsm/web/shared/clientStatusWorkspace.ts",
      "_102045_/l2/designSystem.ts"
    ],
    "dependsOn": [
      "clientStatusWorkspace__l2_shared"
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
