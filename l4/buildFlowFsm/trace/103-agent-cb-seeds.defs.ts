{
  "savedAt": "2026-07-31T05:38:30.968Z",
  "agentName": "agentCbSeeds",
  "stepId": 103,
  "planning": {
    "planId": "cb-gen-seeds-w3-r1-1785476153734",
    "dependsOn": [],
    "executionMode": "sequential",
    "executionHost": "client"
  },
  "status": "waiting_after_prompt",
  "payload": {
    "type": "flexible",
    "result": {
      "toolName": "submitSeedScenario",
      "arguments": {
        "status": "ok",
        "result": {
          "summary": "Wave 3 seeds 3 Projects (active, onHold, closed), 3 WorkTasks (inProgress, completed, assigned), 2 TimeLogs (posted), 2 MaterialUsages (posted, voided), 3 ChangeOrders (approved, pendingReview, rejected), 2 StatusReports (shared with 2 delay-risk suggestions, draft with 1 suggestion), 2 BillingSummaries (shared, draft), and 2 Invoices (sent, draft). All FKs reference seeded rows or prior-wave MDM clients / actor identities. All timestamps within 2026-07-01 to 2026-07-08.",
          "localTables": [
            {
              "tableId": "Project",
              "rows": [
                {
                  "key": "project-1",
                  "columns": [
                    {
                      "name": "project_id",
                      "value": "project-1"
                    },
                    {
                      "name": "client_id",
                      "value": {
                        "ref": "mdm:Client.client-acme"
                      }
                    },
                    {
                      "name": "status",
                      "value": "active"
                    },
                    {
                      "name": "created_at",
                      "value": "2026-07-01T06:00:00.000Z"
                    }
                  ],
                  "details": [
                    {
                      "name": "name",
                      "value": "Riverside Office Renovation"
                    },
                    {
                      "name": "siteAddress",
                      "value": "120 Riverside Dr, Portland, OR 97201"
                    },
                    {
                      "name": "budget",
                      "value": 150000
                    },
                    {
                      "name": "startDate",
                      "value": "2026-07-01"
                    },
                    {
                      "name": "endDate",
                      "value": "2026-07-07"
                    },
                    {
                      "name": "holdReason",
                      "value": null
                    },
                    {
                      "name": "closedAt",
                      "value": null
                    },
                    {
                      "name": "cancelledAt",
                      "value": null
                    },
                    {
                      "name": "cancellationReason",
                      "value": null
                    },
                    {
                      "name": "updatedAt",
                      "value": "2026-07-05T10:00:00.000Z"
                    }
                  ],
                  "children": []
                },
                {
                  "key": "project-2",
                  "columns": [
                    {
                      "name": "project_id",
                      "value": "project-2"
                    },
                    {
                      "name": "client_id",
                      "value": {
                        "ref": "mdm:Client.client-northwind"
                      }
                    },
                    {
                      "name": "status",
                      "value": "onHold"
                    },
                    {
                      "name": "created_at",
                      "value": "2026-07-02T08:00:00.000Z"
                    }
                  ],
                  "details": [
                    {
                      "name": "name",
                      "value": "Northwind Warehouse Expansion"
                    },
                    {
                      "name": "siteAddress",
                      "value": "450 Industrial Pkwy, Seattle, WA 98108"
                    },
                    {
                      "name": "budget",
                      "value": 85000
                    },
                    {
                      "name": "startDate",
                      "value": "2026-07-03"
                    },
                    {
                      "name": "endDate",
                      "value": "2026-07-07"
                    },
                    {
                      "name": "holdReason",
                      "value": "Awaiting building permit from city planning office"
                    },
                    {
                      "name": "closedAt",
                      "value": null
                    },
                    {
                      "name": "cancelledAt",
                      "value": null
                    },
                    {
                      "name": "cancellationReason",
                      "value": null
                    },
                    {
                      "name": "updatedAt",
                      "value": "2026-07-04T14:00:00.000Z"
                    }
                  ],
                  "children": []
                },
                {
                  "key": "project-3",
                  "columns": [
                    {
                      "name": "project_id",
                      "value": "project-3"
                    },
                    {
                      "name": "client_id",
                      "value": {
                        "ref": "mdm:Client.client-riverside"
                      }
                    },
                    {
                      "name": "status",
                      "value": "closed"
                    },
                    {
                      "name": "created_at",
                      "value": "2026-07-01T05:00:00.000Z"
                    }
                  ],
                  "details": [
                    {
                      "name": "name",
                      "value": "Summit Retail Fit-Out"
                    },
                    {
                      "name": "siteAddress",
                      "value": "78 Summit Blvd, Denver, CO 80202"
                    },
                    {
                      "name": "budget",
                      "value": 42000
                    },
                    {
                      "name": "startDate",
                      "value": "2026-07-01"
                    },
                    {
                      "name": "endDate",
                      "value": "2026-07-06"
                    },
                    {
                      "name": "holdReason",
                      "value": null
                    },
                    {
                      "name": "closedAt",
                      "value": "2026-07-06T16:00:00.000Z"
                    },
                    {
                      "name": "cancelledAt",
                      "value": null
                    },
                    {
                      "name": "cancellationReason",
                      "value": null
                    },
                    {
                      "name": "updatedAt",
                      "value": "2026-07-06T16:00:00.000Z"
                    }
                  ],
                  "children": []
                }
              ]
            },
            {
              "tableId": "WorkTask",
              "rows": [
                {
                  "key": "task-1",
                  "columns": [
                    {
                      "name": "work_task_id",
                      "value": "task-1"
                    },
                    {
                      "name": "project_id",
                      "value": {
                        "ref": "local:Project.project-1"
                      }
                    },
                    {
                      "name": "assigned_worker_id",
                      "value": {
                        "ref": "actor:fieldWorker.u1"
                      }
                    },
                    {
                      "name": "status",
                      "value": "inProgress"
                    },
                    {
                      "name": "created_at",
                      "value": "2026-07-02T08:00:00.000Z"
                    }
                  ],
                  "details": [
                    {
                      "name": "title",
                      "value": "Demolish interior walls"
                    },
                    {
                      "name": "description",
                      "value": "Remove non-load-bearing walls on second floor to open up office layout"
                    },
                    {
                      "name": "dueDate",
                      "value": "2026-07-06"
                    },
                    {
                      "name": "completedAt",
                      "value": null
                    },
                    {
                      "name": "cancelledAt",
                      "value": null
                    },
                    {
                      "name": "cancellationReason",
                      "value": null
                    },
                    {
                      "name": "updatedAt",
                      "value": "2026-07-03T10:00:00.000Z"
                    }
                  ],
                  "children": []
                },
                {
                  "key": "task-2",
                  "columns": [
                    {
                      "name": "work_task_id",
                      "value": "task-2"
                    },
                    {
                      "name": "project_id",
                      "value": {
                        "ref": "local:Project.project-1"
                      }
                    },
                    {
                      "name": "assigned_worker_id",
                      "value": {
                        "ref": "actor:fieldWorker.u2"
                      }
                    },
                    {
                      "name": "status",
                      "value": "completed"
                    },
                    {
                      "name": "created_at",
                      "value": "2026-07-02T08:30:00.000Z"
                    }
                  ],
                  "details": [
                    {
                      "name": "title",
                      "value": "Install temporary power"
                    },
                    {
                      "name": "description",
                      "value": "Set up temporary electrical panels for construction phase"
                    },
                    {
                      "name": "dueDate",
                      "value": "2026-07-04"
                    },
                    {
                      "name": "completedAt",
                      "value": "2026-07-04T15:00:00.000Z"
                    },
                    {
                      "name": "cancelledAt",
                      "value": null
                    },
                    {
                      "name": "cancellationReason",
                      "value": null
                    },
                    {
                      "name": "updatedAt",
                      "value": "2026-07-04T15:00:00.000Z"
                    }
                  ],
                  "children": []
                },
                {
                  "key": "task-3",
                  "columns": [
                    {
                      "name": "work_task_id",
                      "value": "task-3"
                    },
                    {
                      "name": "project_id",
                      "value": {
                        "ref": "local:Project.project-2"
                      }
                    },
                    {
                      "name": "assigned_worker_id",
                      "value": {
                        "ref": "actor:fieldWorker.u3"
                      }
                    },
                    {
                      "name": "status",
                      "value": "assigned"
                    },
                    {
                      "name": "created_at",
                      "value": "2026-07-03T09:00:00.000Z"
                    }
                  ],
                  "details": [
                    {
                      "name": "title",
                      "value": "Pour concrete foundation"
                    },
                    {
                      "name": "description",
                      "value": "Pour and finish concrete slab for warehouse extension"
                    },
                    {
                      "name": "dueDate",
                      "value": "2026-07-07"
                    },
                    {
                      "name": "completedAt",
                      "value": null
                    },
                    {
                      "name": "cancelledAt",
                      "value": null
                    },
                    {
                      "name": "cancellationReason",
                      "value": null
                    },
                    {
                      "name": "updatedAt",
                      "value": "2026-07-03T09:00:00.000Z"
                    }
                  ],
                  "children": []
                }
              ]
            },
            {
              "tableId": "TimeLog",
              "rows": [
                {
                  "key": "timelog-1",
                  "columns": [
                    {
                      "name": "time_log_id",
                      "value": "timelog-1"
                    },
                    {
                      "name": "work_task_id",
                      "value": {
                        "ref": "local:WorkTask.task-2"
                      }
                    },
                    {
                      "name": "status",
                      "value": "posted"
                    },
                    {
                      "name": "created_at",
                      "value": "2026-07-04T15:00:00.000Z"
                    }
                  ],
                  "details": [
                    {
                      "name": "workerName",
                      "value": "Field Worker 2"
                    },
                    {
                      "name": "logDate",
                      "value": "2026-07-04"
                    },
                    {
                      "name": "hoursWorked",
                      "value": 8
                    },
                    {
                      "name": "laborCost",
                      "value": 320
                    },
                    {
                      "name": "voidedAt",
                      "value": null
                    },
                    {
                      "name": "voidReason",
                      "value": null
                    }
                  ],
                  "children": []
                },
                {
                  "key": "timelog-2",
                  "columns": [
                    {
                      "name": "time_log_id",
                      "value": "timelog-2"
                    },
                    {
                      "name": "work_task_id",
                      "value": {
                        "ref": "local:WorkTask.task-1"
                      }
                    },
                    {
                      "name": "status",
                      "value": "posted"
                    },
                    {
                      "name": "created_at",
                      "value": "2026-07-03T17:00:00.000Z"
                    }
                  ],
                  "details": [
                    {
                      "name": "workerName",
                      "value": "Field Worker 1"
                    },
                    {
                      "name": "logDate",
                      "value": "2026-07-03"
                    },
                    {
                      "name": "hoursWorked",
                      "value": 6
                    },
                    {
                      "name": "laborCost",
                      "value": 240
                    },
                    {
                      "name": "voidedAt",
                      "value": null
                    },
                    {
                      "name": "voidReason",
                      "value": null
                    }
                  ],
                  "children": []
                }
              ]
            },
            {
              "tableId": "MaterialUsage",
              "rows": [
                {
                  "key": "material-1",
                  "columns": [
                    {
                      "name": "material_usage_id",
                      "value": "material-1"
                    },
                    {
                      "name": "project_id",
                      "value": {
                        "ref": "local:Project.project-1"
                      }
                    },
                    {
                      "name": "status",
                      "value": "posted"
                    },
                    {
                      "name": "unit",
                      "value": "bag"
                    },
                    {
                      "name": "created_at",
                      "value": "2026-07-03T12:00:00.000Z"
                    }
                  ],
                  "details": [
                    {
                      "name": "materialName",
                      "value": "Portland Cement"
                    },
                    {
                      "name": "quantity",
                      "value": 50
                    },
                    {
                      "name": "unitCost",
                      "value": 12.5
                    },
                    {
                      "name": "costCode",
                      "value": "MAT-001"
                    },
                    {
                      "name": "usageDate",
                      "value": "2026-07-03"
                    },
                    {
                      "name": "recordedBy",
                      "value": {
                        "ref": "actor:fieldWorker.u1"
                      }
                    },
                    {
                      "name": "voidedAt",
                      "value": null
                    },
                    {
                      "name": "voidedReason",
                      "value": null
                    }
                  ],
                  "children": []
                },
                {
                  "key": "material-2",
                  "columns": [
                    {
                      "name": "material_usage_id",
                      "value": "material-2"
                    },
                    {
                      "name": "project_id",
                      "value": {
                        "ref": "local:Project.project-1"
                      }
                    },
                    {
                      "name": "status",
                      "value": "voided"
                    },
                    {
                      "name": "unit",
                      "value": "meter"
                    },
                    {
                      "name": "created_at",
                      "value": "2026-07-03T13:00:00.000Z"
                    }
                  ],
                  "details": [
                    {
                      "name": "materialName",
                      "value": "Steel Rebar"
                    },
                    {
                      "name": "quantity",
                      "value": 30
                    },
                    {
                      "name": "unitCost",
                      "value": 8.75
                    },
                    {
                      "name": "costCode",
                      "value": "MAT-002"
                    },
                    {
                      "name": "usageDate",
                      "value": "2026-07-03"
                    },
                    {
                      "name": "recordedBy",
                      "value": {
                        "ref": "actor:fieldWorker.u2"
                      }
                    },
                    {
                      "name": "voidedAt",
                      "value": "2026-07-03T14:00:00.000Z"
                    },
                    {
                      "name": "voidedReason",
                      "value": "Rebar delivered was wrong grade; returned to supplier"
                    }
                  ],
                  "children": []
                }
              ]
            },
            {
              "tableId": "ChangeOrder",
              "rows": [
                {
                  "key": "change-1",
                  "columns": [
                    {
                      "name": "change_order_id",
                      "value": "change-1"
                    },
                    {
                      "name": "project_id",
                      "value": {
                        "ref": "local:Project.project-1"
                      }
                    },
                    {
                      "name": "impact_type",
                      "value": "scope"
                    },
                    {
                      "name": "status",
                      "value": "approved"
                    },
                    {
                      "name": "created_at",
                      "value": "2026-07-02T10:00:00.000Z"
                    }
                  ],
                  "details": [
                    {
                      "name": "title",
                      "value": "Additional waterproofing for basement"
                    },
                    {
                      "name": "description",
                      "value": "Client requested extra waterproofing membrane application on basement exterior walls"
                    },
                    {
                      "name": "costAdjustment",
                      "value": 8500
                    },
                    {
                      "name": "scheduleAdjustmentDays",
                      "value": 3
                    },
                    {
                      "name": "rejectionReason",
                      "value": null
                    },
                    {
                      "name": "approvedAt",
                      "value": "2026-07-03T11:00:00.000Z"
                    },
                    {
                      "name": "rejectedAt",
                      "value": null
                    },
                    {
                      "name": "updatedAt",
                      "value": "2026-07-03T11:00:00.000Z"
                    }
                  ],
                  "children": []
                },
                {
                  "key": "change-2",
                  "columns": [
                    {
                      "name": "change_order_id",
                      "value": "change-2"
                    },
                    {
                      "name": "project_id",
                      "value": {
                        "ref": "local:Project.project-1"
                      }
                    },
                    {
                      "name": "impact_type",
                      "value": "cost"
                    },
                    {
                      "name": "status",
                      "value": "pendingReview"
                    },
                    {
                      "name": "created_at",
                      "value": "2026-07-04T09:00:00.000Z"
                    }
                  ],
                  "details": [
                    {
                      "name": "title",
                      "value": "Upgrade HVAC system"
                    },
                    {
                      "name": "description",
                      "value": "Replace standard HVAC with high-efficiency variable refrigerant flow system"
                    },
                    {
                      "name": "costAdjustment",
                      "value": 12000
                    },
                    {
                      "name": "scheduleAdjustmentDays",
                      "value": null
                    },
                    {
                      "name": "rejectionReason",
                      "value": null
                    },
                    {
                      "name": "approvedAt",
                      "value": null
                    },
                    {
                      "name": "rejectedAt",
                      "value": null
                    },
                    {
                      "name": "updatedAt",
                      "value": "2026-07-04T09:00:00.000Z"
                    }
                  ],
                  "children": []
                },
                {
                  "key": "change-3",
                  "columns": [
                    {
                      "name": "change_order_id",
                      "value": "change-3"
                    },
                    {
                      "name": "project_id",
                      "value": {
                        "ref": "local:Project.project-2"
                      }
                    },
                    {
                      "name": "impact_type",
                      "value": "scope"
                    },
                    {
                      "name": "status",
                      "value": "rejected"
                    },
                    {
                      "name": "created_at",
                      "value": "2026-07-03T10:00:00.000Z"
                    }
                  ],
                  "details": [
                    {
                      "name": "title",
                      "value": "Extend patio area"
                    },
                    {
                      "name": "description",
                      "value": "Client requested extending the outdoor patio by 200 sq ft"
                    },
                    {
                      "name": "costAdjustment",
                      "value": 5000
                    },
                    {
                      "name": "scheduleAdjustmentDays",
                      "value": 2
                    },
                    {
                      "name": "rejectionReason",
                      "value": "Budget constraints; cannot accommodate within current project budget"
                    },
                    {
                      "name": "approvedAt",
                      "value": null
                    },
                    {
                      "name": "rejectedAt",
                      "value": "2026-07-04T12:00:00.000Z"
                    },
                    {
                      "name": "updatedAt",
                      "value": "2026-07-04T12:00:00.000Z"
                    }
                  ],
                  "children": []
                }
              ]
            },
            {
              "tableId": "StatusReport",
              "rows": [
                {
                  "key": "report-1",
                  "columns": [
                    {
                      "name": "status_report_id",
                      "value": "report-1"
                    },
                    {
                      "name": "project_id",
                      "value": {
                        "ref": "local:Project.project-1"
                      }
                    },
                    {
                      "name": "status",
                      "value": "shared"
                    },
                    {
                      "name": "created_at",
                      "value": "2026-07-04T16:00:00.000Z"
                    }
                  ],
                  "details": [
                    {
                      "name": "reportPeriodStart",
                      "value": "2026-07-01"
                    },
                    {
                      "name": "reportPeriodEnd",
                      "value": "2026-07-04"
                    },
                    {
                      "name": "summary",
                      "value": "Project progressing on schedule with one task completed and one in progress. Approved change order for basement waterproofing."
                    },
                    {
                      "name": "tasksOverview",
                      "value": "2 tasks: 1 completed (temporary power), 1 in progress (interior demolition)"
                    },
                    {
                      "name": "timeLogsOverview",
                      "value": "14 hours logged this period across 2 workers"
                    },
                    {
                      "name": "materialsOverview",
                      "value": "50 bags Portland cement delivered and used; steel rebar order voided due to wrong grade"
                    },
                    {
                      "name": "delayRiskAssessment",
                      "value": "Low risk; minor schedule buffer recommended for demolition completion"
                    },
                    {
                      "name": "pmNotes",
                      "value": "Client satisfied with progress; waterproofing change order approved"
                    },
                    {
                      "name": "generatedAt",
                      "value": "2026-07-04T16:00:00.000Z"
                    },
                    {
                      "name": "reviewedAt",
                      "value": "2026-07-05T09:00:00.000Z"
                    },
                    {
                      "name": "sharedAt",
                      "value": "2026-07-05T14:00:00.000Z"
                    },
                    {
                      "name": "updatedAt",
                      "value": "2026-07-05T14:00:00.000Z"
                    }
                  ],
                  "children": [
                    {
                      "name": "delayRiskSuggestions",
                      "rows": [
                        {
                          "key": "drs-1",
                          "fields": [
                            {
                              "name": "workTaskId",
                              "value": {
                                "ref": "local:WorkTask.task-1"
                              }
                            },
                            {
                              "name": "suggestion",
                              "value": "Demolition task running behind; recommend adding a second crew member to maintain schedule"
                            },
                            {
                              "name": "severity",
                              "value": "high"
                            }
                          ]
                        },
                        {
                          "key": "drs-2",
                          "fields": [
                            {
                              "name": "workTaskId",
                              "value": {
                                "ref": "local:WorkTask.task-2"
                              }
                            },
                            {
                              "name": "suggestion",
                              "value": "Material delivery for next phase should be confirmed 48 hours in advance"
                            },
                            {
                              "name": "severity",
                              "value": "medium"
                            }
                          ]
                        }
                      ]
                    }
                  ]
                },
                {
                  "key": "report-2",
                  "columns": [
                    {
                      "name": "status_report_id",
                      "value": "report-2"
                    },
                    {
                      "name": "project_id",
                      "value": {
                        "ref": "local:Project.project-2"
                      }
                    },
                    {
                      "name": "status",
                      "value": "draft"
                    },
                    {
                      "name": "created_at",
                      "value": "2026-07-05T10:00:00.000Z"
                    }
                  ],
                  "details": [
                    {
                      "name": "reportPeriodStart",
                      "value": "2026-07-02"
                    },
                    {
                      "name": "reportPeriodEnd",
                      "value": "2026-07-05"
                    },
                    {
                      "name": "summary",
                      "value": "Project on hold pending permit approval. One task assigned but not started."
                    },
                    {
                      "name": "tasksOverview",
                      "value": "1 task assigned (concrete foundation), not started due to project hold"
                    },
                    {
                      "name": "timeLogsOverview",
                      "value": "No hours logged this period"
                    },
                    {
                      "name": "materialsOverview",
                      "value": "No materials used this period"
                    },
                    {
                      "name": "delayRiskAssessment",
                      "value": "High risk; permit delay may push overall timeline by 1 week"
                    },
                    {
                      "name": "pmNotes",
                      "value": "Following up with city planning office daily; expect permit by end of week"
                    },
                    {
                      "name": "generatedAt",
                      "value": "2026-07-05T10:00:00.000Z"
                    },
                    {
                      "name": "reviewedAt",
                      "value": null
                    },
                    {
                      "name": "sharedAt",
                      "value": null
                    },
                    {
                      "name": "updatedAt",
                      "value": "2026-07-05T10:00:00.000Z"
                    }
                  ],
                  "children": [
                    {
                      "name": "delayRiskSuggestions",
                      "rows": [
                        {
                          "key": "drs-1",
                          "fields": [
                            {
                              "name": "workTaskId",
                              "value": {
                                "ref": "local:WorkTask.task-3"
                              }
                            },
                            {
                              "name": "suggestion",
                              "value": "Permit approval pending; concrete pour task start may slip by 3-5 days"
                            },
                            {
                              "name": "severity",
                              "value": "high"
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "tableId": "BillingSummary",
              "rows": [
                {
                  "key": "billing-1",
                  "columns": [
                    {
                      "name": "billing_summary_id",
                      "value": "billing-1"
                    },
                    {
                      "name": "project_id",
                      "value": {
                        "ref": "local:Project.project-1"
                      }
                    },
                    {
                      "name": "status",
                      "value": "shared"
                    },
                    {
                      "name": "created_at",
                      "value": "2026-07-05T08:00:00.000Z"
                    }
                  ],
                  "details": [
                    {
                      "name": "periodStart",
                      "value": "2026-07-01"
                    },
                    {
                      "name": "periodEnd",
                      "value": "2026-07-05"
                    },
                    {
                      "name": "laborCost",
                      "value": 560
                    },
                    {
                      "name": "materialCost",
                      "value": 625
                    },
                    {
                      "name": "changeOrderCost",
                      "value": 8500
                    },
                    {
                      "name": "totalCost",
                      "value": 9685
                    },
                    {
                      "name": "sharedAt",
                      "value": "2026-07-05T15:00:00.000Z"
                    },
                    {
                      "name": "updatedAt",
                      "value": "2026-07-05T15:00:00.000Z"
                    }
                  ],
                  "children": []
                },
                {
                  "key": "billing-2",
                  "columns": [
                    {
                      "name": "billing_summary_id",
                      "value": "billing-2"
                    },
                    {
                      "name": "project_id",
                      "value": {
                        "ref": "local:Project.project-2"
                      }
                    },
                    {
                      "name": "status",
                      "value": "draft"
                    },
                    {
                      "name": "created_at",
                      "value": "2026-07-05T11:00:00.000Z"
                    }
                  ],
                  "details": [
                    {
                      "name": "periodStart",
                      "value": "2026-07-02"
                    },
                    {
                      "name": "periodEnd",
                      "value": "2026-07-05"
                    },
                    {
                      "name": "laborCost",
                      "value": 0
                    },
                    {
                      "name": "materialCost",
                      "value": 0
                    },
                    {
                      "name": "changeOrderCost",
                      "value": 0
                    },
                    {
                      "name": "totalCost",
                      "value": 0
                    },
                    {
                      "name": "sharedAt",
                      "value": null
                    },
                    {
                      "name": "updatedAt",
                      "value": "2026-07-05T11:00:00.000Z"
                    }
                  ],
                  "children": []
                }
              ]
            },
            {
              "tableId": "Invoice",
              "rows": [
                {
                  "key": "invoice-1",
                  "columns": [
                    {
                      "name": "invoice_id",
                      "value": "invoice-1"
                    },
                    {
                      "name": "project_id",
                      "value": {
                        "ref": "local:Project.project-1"
                      }
                    },
                    {
                      "name": "client_id",
                      "value": {
                        "ref": "mdm:Client.client-acme"
                      }
                    },
                    {
                      "name": "status",
                      "value": "sent"
                    },
                    {
                      "name": "created_at",
                      "value": "2026-07-05T09:00:00.000Z"
                    }
                  ],
                  "details": [
                    {
                      "name": "invoiceNumber",
                      "value": "INV-2026-001"
                    },
                    {
                      "name": "totalAmount",
                      "value": 9685
                    },
                    {
                      "name": "sentAt",
                      "value": "2026-07-06T10:00:00.000Z"
                    },
                    {
                      "name": "updatedAt",
                      "value": "2026-07-06T10:00:00.000Z"
                    },
                    {
                      "name": "changeOrderId",
                      "value": {
                        "ref": "local:ChangeOrder.change-1"
                      }
                    }
                  ],
                  "children": []
                },
                {
                  "key": "invoice-2",
                  "columns": [
                    {
                      "name": "invoice_id",
                      "value": "invoice-2"
                    },
                    {
                      "name": "project_id",
                      "value": {
                        "ref": "local:Project.project-2"
                      }
                    },
                    {
                      "name": "client_id",
                      "value": {
                        "ref": "mdm:Client.client-northwind"
                      }
                    },
                    {
                      "name": "status",
                      "value": "draft"
                    },
                    {
                      "name": "created_at",
                      "value": "2026-07-05T12:00:00.000Z"
                    }
                  ],
                  "details": [
                    {
                      "name": "invoiceNumber",
                      "value": "INV-2026-002"
                    },
                    {
                      "name": "totalAmount",
                      "value": 0
                    },
                    {
                      "name": "sentAt",
                      "value": null
                    },
                    {
                      "name": "updatedAt",
                      "value": "2026-07-05T12:00:00.000Z"
                    },
                    {
                      "name": "changeOrderId",
                      "value": null
                    }
                  ],
                  "children": []
                }
              ]
            }
          ],
          "mdmEntities": []
        },
        "questions": [],
        "trace": [
          "Wave 3: Planned 3 Projects (active/onHold/closed), 3 WorkTasks (inProgress/completed/assigned), 2 TimeLogs (posted), 2 MaterialUsages (posted/voided), 3 ChangeOrders (approved/pendingReview/rejected), 2 StatusReports (shared/draft) with delayRiskSuggestions children, 2 BillingSummaries (shared/draft), 2 Invoices (sent/draft)",
          "All FKs use symbolic refs to local rows, prior-wave MDM clients, or actor identities",
          "Invoice→ChangeOrder manyToMany modeled as detail ref on Invoice (change-1 on invoice-1, null on invoice-2)",
          "StatusReport delayRiskSuggestions children reference WorkTask rows via workTaskId ref",
          "All timestamps strictly within 2026-07-01T00:00:00Z to 2026-07-08T00:00:00Z, chronologically coherent"
        ]
      }
    },
    "status": "completed",
    "stepId": 7,
    "interaction": null,
    "nextSteps": null
  }
}
