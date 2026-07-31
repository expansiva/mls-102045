/// <mls fileReference="_102045_/l2/buildFlowFsm/web/desktop/page21/statusReportWorkspace.defs.ts" enhancement="_blank"/>

export const definition = {
  "pageId": "statusReportWorkspace",
  "pageName": "Status Reports",
  "baseClassName": "BuildFlowFsmStatusReportWorkspaceBase",
  "actor": "projectManager",
  "purpose": "Executar Status Reports.",
  "capabilities": [
    "statusReportLifecycle",
    "updateStatusReport"
  ],
  "flowRefs": {
    "experienceFlows": [
      "statusReportLifecycle"
    ],
    "entityLifecycles": [],
    "taskWorkflows": [
      "statusReportLifecycle"
    ],
    "automations": []
  },
  "pluginRefs": [],
  "mdmRefs": [],
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
  "pageInputs": [],
  "navigationRefs": [],
  "sections": [
    {
      "id": "section.statusReportWorkspace.sec-generate",
      "type": "section",
      "sectionName": "Generate Report",
      "titleKey": "section.statusReportWorkspace.sec-generate.title",
      "mode": "edit",
      "order": 10,
      "organisms": [
        {
          "id": "org-generate-panel",
          "type": "commandForm",
          "organismName": "GenerateReportPanel",
          "titleKey": "organism.statusReportWorkspace.generateReport.title",
          "purpose": "Lets the PM select the reporting period and trigger AI-assisted report generation; projectId is derived from context and never typed manually.",
          "userActions": [
            "generateReport"
          ],
          "requiredEntities": [],
          "readsFields": [],
          "writesFields": [],
          "rulesApplied": [
            "statusReportGenerationSource",
            "pmControlsStatusReportLifecycle"
          ],
          "order": 10,
          "intentionRefs": [
            {
              "id": "intent.statusReportWorkspace.generateReport.form",
              "intent": "commandForm",
              "submitAction": "generateReport",
              "order": 10
            }
          ]
        }
      ]
    },
    {
      "id": "section.statusReportWorkspace.sec-review-share",
      "type": "section",
      "sectionName": "Review & Share Report",
      "titleKey": "section.statusReportWorkspace.sec-review-share.title",
      "mode": "edit",
      "order": 20,
      "organisms": [
        {
          "id": "org-report-status-header",
          "type": "commandForm",
          "organismName": "ReportStatusHeader",
          "titleKey": "organism.statusReportWorkspace.updateReportStatus.title",
          "purpose": "Displays the current report status badge, reporting period, and generatedAt timestamp so the PM always sees the report's lifecycle position before acting.",
          "userActions": [
            "updateReportStatus"
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
              "id": "intent.statusReportWorkspace.updateReportStatus.form",
              "intent": "commandForm",
              "submitAction": "updateReportStatus",
              "order": 10
            }
          ]
        },
        {
          "id": "org-report-content-editor",
          "type": "commandForm",
          "organismName": "ReportContentEditor",
          "titleKey": "organism.statusReportWorkspace.updateReportContent.title",
          "purpose": "Presents all AI-generated content sections (summary, tasks overview, time logs overview, materials overview, delay risk assessment, PM notes) as editable rich-text areas so the PM can refine the report before sharing.",
          "userActions": [
            "updateReportContent"
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
              "id": "intent.statusReportWorkspace.updateReportContent.form",
              "intent": "commandForm",
              "submitAction": "updateReportContent",
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
    "actor": "Project Manager",
    "jobToBeDone": "Generate an AI-assisted status report for a project period, then review, edit, and advance the report through its lifecycle (draft → reviewed → shared with client).",
    "primaryDecision": "Whether the generated report content is accurate and complete enough to share with the client — driving the edit-then-transition flow.",
    "decisiveInfo": [
      "projectId (context-derived, from selected project)",
      "reportPeriodStart / reportPeriodEnd (user-chosen date range)",
      "summary, tasksOverview, timeLogsOverview, materialsOverview, delayRiskAssessment, pmNotes (editable AI-generated content)",
      "current report status (draft / reviewed / shared)"
    ],
    "usageFrequency": "Occasional — triggered per project reporting cycle; the PM works through the full generate → review → share sequence in one focused session.",
    "criticalActions": [
      {
        "action": "generateReport",
        "presentation": "primary-button inside a compact generation panel; projectId is context-derived (hidden), only period dates are user inputs"
      },
      {
        "action": "updateReportContent",
        "presentation": "inline rich-text editor sections within the report detail panel; save is a persistent footer action"
      },
      {
        "action": "updateReportStatus",
        "presentation": "contextual-transition-actions — one button per valid next state (Mark Reviewed, Share with Client) rendered in the report header, never a free status select"
      }
    ],
    "informationHierarchy": [
      "1. Report generation panel — project context + period picker + Generate action",
      "2. Generated report detail — current status badge, period, generatedAt timestamp",
      "3. Editable content sections — summary, tasks overview, time logs overview, materials overview, delay risk assessment, PM notes",
      "4. Lifecycle transition actions — Mark Reviewed / Share with Client buttons based on current status"
    ],
    "successCriteria": "The PM can generate a report, review and refine all AI-produced sections in one place, and advance the report to 'shared' without navigating away or manually typing any system-owned identifier.",
    "antiPatterns": [
      "Exposing statusReportId as a manual text input",
      "Rendering status transition as a free <select> over all enum values",
      "Splitting generate and review into entirely separate pages with no continuity",
      "Showing system-owned fields (generatedAt, createdAt, updatedAt) as editable inputs",
      "Requiring the PM to re-enter projectId after it is already in context"
    ]
  },
  "layout": {
    "id": "page21-goal-first",
    "type": "page",
    "sections": [
      {
        "id": "section.statusReportWorkspace.sec-generate",
        "type": "section",
        "sectionName": "Generate Report",
        "titleKey": "section.statusReportWorkspace.sec-generate.title",
        "mode": "edit",
        "order": 10,
        "organisms": [
          {
            "id": "org-generate-panel",
            "type": "commandForm",
            "organismName": "GenerateReportPanel",
            "titleKey": "organism.statusReportWorkspace.generateReport.title",
            "purpose": "Lets the PM select the reporting period and trigger AI-assisted report generation; projectId is derived from context and never typed manually.",
            "userActions": [
              "generateReport"
            ],
            "requiredEntities": [],
            "readsFields": [],
            "writesFields": [],
            "rulesApplied": [
              "statusReportGenerationSource",
              "pmControlsStatusReportLifecycle"
            ],
            "order": 10,
            "intentions": [
              {
                "id": "intent.statusReportWorkspace.generateReport.form",
                "intent": "commandForm",
                "order": 10,
                "titleKey": "intent.statusReportWorkspace.generateReport.form.title",
                "source": "bff.generateReport",
                "binding": "binding.statusReportWorkspace.generateReport",
                "submitAction": "generateReport",
                "fields": [
                  {
                    "id": "intent.statusReportWorkspace.generateReport.form.field.reportPeriodStart",
                    "field": "reportPeriodStart",
                    "labelKey": "intent.statusReportWorkspace.generateReport.form.field.reportPeriodStart.label",
                    "order": 10,
                    "stateKey": "ui.statusReportWorkspace.input.generateReport.reportPeriodStart"
                  },
                  {
                    "id": "intent.statusReportWorkspace.generateReport.form.field.reportPeriodEnd",
                    "field": "reportPeriodEnd",
                    "labelKey": "intent.statusReportWorkspace.generateReport.form.field.reportPeriodEnd.label",
                    "order": 20,
                    "stateKey": "ui.statusReportWorkspace.input.generateReport.reportPeriodEnd"
                  }
                ],
                "columns": [],
                "filters": [],
                "toolbar": [],
                "rowActions": [],
                "actions": [
                  {
                    "id": "intent.statusReportWorkspace.generateReport.form.action.generateReport",
                    "action": "generateReport",
                    "labelKey": "intent.statusReportWorkspace.generateReport.form.action.generateReport",
                    "order": 10,
                    "actionKey": "generateReport"
                  }
                ]
              }
            ],
            "displayHint": "summary-first"
          }
        ]
      },
      {
        "id": "section.statusReportWorkspace.sec-review-share",
        "type": "section",
        "sectionName": "Review & Share Report",
        "titleKey": "section.statusReportWorkspace.sec-review-share.title",
        "mode": "edit",
        "order": 20,
        "organisms": [
          {
            "id": "org-report-status-header",
            "type": "commandForm",
            "organismName": "ReportStatusHeader",
            "titleKey": "organism.statusReportWorkspace.updateReportStatus.title",
            "purpose": "Displays the current report status badge, reporting period, and generatedAt timestamp so the PM always sees the report's lifecycle position before acting.",
            "userActions": [
              "updateReportStatus"
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
                "id": "intent.statusReportWorkspace.updateReportStatus.form",
                "intent": "commandForm",
                "order": 10,
                "titleKey": "intent.statusReportWorkspace.updateReportStatus.form.title",
                "source": "bff.updateReportStatus",
                "binding": "binding.statusReportWorkspace.updateReportStatus",
                "submitAction": "updateReportStatus",
                "fields": [
                  {
                    "id": "intent.statusReportWorkspace.updateReportStatus.form.field.status",
                    "field": "status",
                    "labelKey": "intent.statusReportWorkspace.updateReportStatus.form.field.status.label",
                    "order": 10,
                    "stateKey": "ui.statusReportWorkspace.input.updateReportStatus.status"
                  }
                ],
                "columns": [],
                "filters": [],
                "toolbar": [],
                "rowActions": [],
                "actions": [
                  {
                    "id": "intent.statusReportWorkspace.updateReportStatus.form.action.updateReportStatus",
                    "action": "updateReportStatus",
                    "labelKey": "intent.statusReportWorkspace.updateReportStatus.form.action.updateReportStatus",
                    "order": 10,
                    "actionKey": "updateReportStatus"
                  }
                ]
              }
            ],
            "displayHint": "summary-first"
          },
          {
            "id": "org-report-content-editor",
            "type": "commandForm",
            "organismName": "ReportContentEditor",
            "titleKey": "organism.statusReportWorkspace.updateReportContent.title",
            "purpose": "Presents all AI-generated content sections (summary, tasks overview, time logs overview, materials overview, delay risk assessment, PM notes) as editable rich-text areas so the PM can refine the report before sharing.",
            "userActions": [
              "updateReportContent"
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
                "id": "intent.statusReportWorkspace.updateReportContent.form",
                "intent": "commandForm",
                "order": 10,
                "titleKey": "intent.statusReportWorkspace.updateReportContent.form.title",
                "source": "bff.updateReportContent",
                "binding": "binding.statusReportWorkspace.updateReportContent",
                "submitAction": "updateReportContent",
                "fields": [
                  {
                    "id": "intent.statusReportWorkspace.updateReportContent.form.field.summary",
                    "field": "summary",
                    "labelKey": "intent.statusReportWorkspace.updateReportContent.form.field.summary.label",
                    "order": 10,
                    "stateKey": "ui.statusReportWorkspace.input.updateReportContent.summary"
                  },
                  {
                    "id": "intent.statusReportWorkspace.updateReportContent.form.field.tasksOverview",
                    "field": "tasksOverview",
                    "labelKey": "intent.statusReportWorkspace.updateReportContent.form.field.tasksOverview.label",
                    "order": 20,
                    "stateKey": "ui.statusReportWorkspace.input.updateReportContent.tasksOverview"
                  },
                  {
                    "id": "intent.statusReportWorkspace.updateReportContent.form.field.timeLogsOverview",
                    "field": "timeLogsOverview",
                    "labelKey": "intent.statusReportWorkspace.updateReportContent.form.field.timeLogsOverview.label",
                    "order": 30,
                    "stateKey": "ui.statusReportWorkspace.input.updateReportContent.timeLogsOverview"
                  },
                  {
                    "id": "intent.statusReportWorkspace.updateReportContent.form.field.materialsOverview",
                    "field": "materialsOverview",
                    "labelKey": "intent.statusReportWorkspace.updateReportContent.form.field.materialsOverview.label",
                    "order": 40,
                    "stateKey": "ui.statusReportWorkspace.input.updateReportContent.materialsOverview"
                  },
                  {
                    "id": "intent.statusReportWorkspace.updateReportContent.form.field.delayRiskAssessment",
                    "field": "delayRiskAssessment",
                    "labelKey": "intent.statusReportWorkspace.updateReportContent.form.field.delayRiskAssessment.label",
                    "order": 50,
                    "stateKey": "ui.statusReportWorkspace.input.updateReportContent.delayRiskAssessment"
                  },
                  {
                    "id": "intent.statusReportWorkspace.updateReportContent.form.field.pmNotes",
                    "field": "pmNotes",
                    "labelKey": "intent.statusReportWorkspace.updateReportContent.form.field.pmNotes.label",
                    "order": 60,
                    "stateKey": "ui.statusReportWorkspace.input.updateReportContent.pmNotes"
                  }
                ],
                "columns": [],
                "filters": [],
                "toolbar": [],
                "rowActions": [],
                "actions": [
                  {
                    "id": "intent.statusReportWorkspace.updateReportContent.form.action.updateReportContent",
                    "action": "updateReportContent",
                    "labelKey": "intent.statusReportWorkspace.updateReportContent.form.action.updateReportContent",
                    "order": 10,
                    "actionKey": "updateReportContent"
                  }
                ]
              }
            ],
            "displayHint": "master-detail"
          }
        ]
      }
    ]
  },
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
      "_102020_/l2/agentChangeFrontend/skills/genCfePage21RenderTs.ts"
    ],
    "visualStyle": {
      "description": "Desktop-first for PM and billing staff with mobile-optimized field entry; dashboard-driven, status-aware, touch-friendly UI with Gantt-ish timeline views."
    },
    "agent": "agentCfeMaterializeGen"
  }
] as const;
