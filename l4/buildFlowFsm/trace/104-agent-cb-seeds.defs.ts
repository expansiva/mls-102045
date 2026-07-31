{
  "savedAt": "2026-07-31T05:40:41.798Z",
  "agentName": "agentCbSeeds",
  "stepId": 104,
  "planning": {
    "planId": "cb-gen-seeds-w3-r2-1785476310971",
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
          "summary": "Wave 3 seeds 3 Projects (active, onHold, closed), 3 WorkTasks (inProgress, completed, assigned), 3 TimeLogs (2 posted, 1 voided), 2 MaterialUsages (posted, voided), 3 ChangeOrders (approved, pendingReview, rejected), 2 StatusReports (shared with delayRiskSuggestions children, draft), 2 BillingSummaries (shared, draft), and 2 Invoices (sent, draft). All FKs use symbolic refs to prior-wave MDM Clients, local rows, or actor identities. No changeOrderId field on Invoice (fixing prior repair findings).",
          "localTables": [
            {
              "tableId": "Project",
              "rows": [
                {
                  "key": "project-acme-renovation",
                  "columns": [
                    {
                      "name": "project_id",
                      "value": {
                        "ref": "local:Project.project-acme-renovation"
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
                      "value": "active"
                    },
                    {
                      "name": "created_at",
                      "value": "2026-07-01T08:00:00.000Z"
                    }
                  ],
                  "details": [
                    {
                      "name": "name",
                      "value": "Acme Office Renovation"
                    },
                    {
                      "name": "siteAddress",
                      "value": "123 Main St, Springfield, IL"
                    },
                    {
                      "name": "budget",
                      "value": 85000
                    },
                    {
                      "name": "startDate",
                      "value": "2026-07-01"
                    },
                    {
                      "name": "endDate",
                      "value": "2026-07-31"
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
                      "value": "2026-07-03T11:00:00.000Z"
                    }
                  ],
                  "children": []
                },
                {
                  "key": "project-northwind-build",
                  "columns": [
                    {
                      "name": "project_id",
                      "value": {
                        "ref": "local:Project.project-northwind-build"
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
                      "value": "onHold"
                    },
                    {
                      "name": "created_at",
                      "value": "2026-07-01T09:00:00.000Z"
                    }
                  ],
                  "details": [
                    {
                      "name": "name",
                      "value": "Northwind Warehouse Build"
                    },
                    {
                      "name": "siteAddress",
                      "value": "456 Industrial Blvd, Portland, OR"
                    },
                    {
                      "name": "budget",
                      "value": 320000
                    },
                    {
                      "name": "startDate",
                      "value": "2026-07-05"
                    },
                    {
                      "name": "endDate",
                      "value": "2026-09-30"
                    },
                    {
                      "name": "holdReason",
                      "value": "Awaiting revised permits from city planning office"
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
                      "value": "2026-07-04T10:00:00.000Z"
                    }
                  ],
                  "children": []
                },
                {
                  "key": "project-riverside-remodel",
                  "columns": [
                    {
                      "name": "project_id",
                      "value": {
                        "ref": "local:Project.project-riverside-remodel"
                      }
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
                      "value": "2026-07-01T07:00:00.000Z"
                    }
                  ],
                  "details": [
                    {
                      "name": "name",
                      "value": "Riverside Kitchen Remodel"
                    },
                    {
                      "name": "siteAddress",
                      "value": "789 River Rd, Austin, TX"
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
                      "value": "2026-07-20"
                    },
                    {
                      "name": "holdReason",
                      "value": null
                    },
                    {
                      "name": "closedAt",
                      "value": "2026-07-03T16:00:00.000Z"
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
                      "value": "2026-07-03T16:00:00.000Z"
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
                  "key": "task-framing",
                  "columns": [
                    {
                      "name": "work_task_id",
                      "value": {
                        "ref": "local:WorkTask.task-framing"
                      }
                    },
                    {
                      "name": "project_id",
                      "value": {
                        "ref": "local:Project.project-acme-renovation"
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
                      "value": "Frame interior walls"
                    },
                    {
                      "name": "description",
                      "value": "Install metal stud framing for all interior partition walls on floor 2"
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
                      "value": "2026-07-03T12:00:00.000Z"
                    }
                  ],
                  "children": []
                },
                {
                  "key": "task-demolition",
                  "columns": [
                    {
                      "name": "work_task_id",
                      "value": {
                        "ref": "local:WorkTask.task-demolition"
                      }
                    },
                    {
                      "name": "project_id",
                      "value": {
                        "ref": "local:Project.project-acme-renovation"
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
                      "value": "2026-07-01T10:00:00.000Z"
                    }
                  ],
                  "details": [
                    {
                      "name": "title",
                      "value": "Demolish old partitions"
                    },
                    {
                      "name": "description",
                      "value": "Remove existing drywall and framing on floor 2"
                    },
                    {
                      "name": "dueDate",
                      "value": "2026-07-03"
                    },
                    {
                      "name": "completedAt",
                      "value": "2026-07-02T18:00:00.000Z"
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
                      "value": "2026-07-02T18:00:00.000Z"
                    }
                  ],
                  "children": []
                },
                {
                  "key": "task-plumbing",
                  "columns": [
                    {
                      "name": "work_task_id",
                      "value": {
                        "ref": "local:WorkTask.task-plumbing"
                      }
                    },
                    {
                      "name": "project_id",
                      "value": {
                        "ref": "local:Project.project-northwind-build"
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
                      "value": "2026-07-03T08:00:00.000Z"
                    }
                  ],
                  "details": [
                    {
                      "name": "title",
                      "value": "Rough-in plumbing"
                    },
                    {
                      "name": "description",
                      "value": "Install rough plumbing for restroom block A"
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
                      "value": "2026-07-03T08:00:00.000Z"
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
                  "key": "timelog-demolition",
                  "columns": [
                    {
                      "name": "time_log_id",
                      "value": {
                        "ref": "local:TimeLog.timelog-demolition"
                      }
                    },
                    {
                      "name": "work_task_id",
                      "value": {
                        "ref": "local:WorkTask.task-demolition"
                      }
                    },
                    {
                      "name": "status",
                      "value": "posted"
                    },
                    {
                      "name": "created_at",
                      "value": "2026-07-02T17:00:00.000Z"
                    }
                  ],
                  "details": [
                    {
                      "name": "workerName",
                      "value": "Field Worker 2"
                    },
                    {
                      "name": "logDate",
                      "value": "2026-07-02"
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
                  "key": "timelog-framing",
                  "columns": [
                    {
                      "name": "time_log_id",
                      "value": {
                        "ref": "local:TimeLog.timelog-framing"
                      }
                    },
                    {
                      "name": "work_task_id",
                      "value": {
                        "ref": "local:WorkTask.task-framing"
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
                },
                {
                  "key": "timelog-plumbing-voided",
                  "columns": [
                    {
                      "name": "time_log_id",
                      "value": {
                        "ref": "local:TimeLog.timelog-plumbing-voided"
                      }
                    },
                    {
                      "name": "work_task_id",
                      "value": {
                        "ref": "local:WorkTask.task-plumbing"
                      }
                    },
                    {
                      "name": "status",
                      "value": "voided"
                    },
                    {
                      "name": "created_at",
                      "value": "2026-07-04T17:00:00.000Z"
                    }
                  ],
                  "details": [
                    {
                      "name": "workerName",
                      "value": "Field Worker 3"
                    },
                    {
                      "name": "logDate",
                      "value": "2026-07-04"
                    },
                    {
                      "name": "hoursWorked",
                      "value": 4
                    },
                    {
                      "name": "laborCost",
                      "value": 160
                    },
                    {
                      "name": "voidedAt",
                      "value": "2026-07-04T18:00:00.000Z"
                    },
                    {
                      "name": "voidReason",
                      "value": "Duplicate entry — hours already logged under separate time log"
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
                  "key": "mat-lumber",
                  "columns": [
                    {
                      "name": "material_usage_id",
                      "value": {
                        "ref": "local:MaterialUsage.mat-lumber"
                      }
                    },
                    {
                      "name": "project_id",
                      "value": {
                        "ref": "local:Project.project-acme-renovation"
                      }
                    },
                    {
                      "name": "status",
                      "value": "posted"
                    },
                    {
                      "name": "unit",
                      "value": "meter"
                    },
                    {
                      "name": "created_at",
                      "value": "2026-07-02T12:00:00.000Z"
                    }
                  ],
                  "details": [
                    {
                      "name": "materialName",
                      "value": "Metal stud track"
                    },
                    {
                      "name": "quantity",
                      "value": 120
                    },
                    {
                      "name": "unitCost",
                      "value": 4.5
                    },
                    {
                      "name": "costCode",
                      "value": "FRM-001"
                    },
                    {
                      "name": "usageDate",
                      "value": "2026-07-02"
                    },
                    {
                      "name": "recordedBy",
                      "value": "Field Worker 1"
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
                  "key": "mat-paint-voided",
                  "columns": [
                    {
                      "name": "material_usage_id",
                      "value": {
                        "ref": "local:MaterialUsage.mat-paint-voided"
                      }
                    },
                    {
                      "name": "project_id",
                      "value": {
                        "ref": "local:Project.project-acme-renovation"
                      }
                    },
                    {
                      "name": "status",
                      "value": "voided"
                    },
                    {
                      "name": "unit",
                      "value": "liter"
                    },
                    {
                      "name": "created_at",
                      "value": "2026-07-03T12:00:00.000Z"
                    }
                  ],
                  "details": [
                    {
                      "name": "materialName",
                      "value": "Interior latex paint"
                    },
                    {
                      "name": "quantity",
                      "value": 20
                    },
                    {
                      "name": "unitCost",
                      "value": 18
                    },
                    {
                      "name": "costCode",
                      "value": "PNT-002"
                    },
                    {
                      "name": "usageDate",
                      "value": "2026-07-03"
                    },
                    {
                      "name": "recordedBy",
                      "value": "Field Worker 2"
                    },
                    {
                      "name": "voidedAt",
                      "value": "2026-07-03T15:00:00.000Z"
                    },
                    {
                      "name": "voidedReason",
                      "value": "Wrong paint color ordered — will be re-logged with correct SKU"
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
                  "key": "co-extra-windows",
                  "columns": [
                    {
                      "name": "change_order_id",
                      "value": {
                        "ref": "local:ChangeOrder.co-extra-windows"
                      }
                    },
                    {
                      "name": "project_id",
                      "value": {
                        "ref": "local:Project.project-acme-renovation"
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
                      "value": "2026-07-02T09:00:00.000Z"
                    }
                  ],
                  "details": [
                    {
                      "name": "title",
                      "value": "Add two additional windows on south wall"
                    },
                    {
                      "name": "description",
                      "value": "Client requested two extra windows on the south-facing wall of the conference room for natural light"
                    },
                    {
                      "name": "costAdjustment",
                      "value": 3500
                    },
                    {
                      "name": "scheduleAdjustmentDays",
                      "value": 2
                    },
                    {
                      "name": "rejectionReason",
                      "value": null
                    },
                    {
                      "name": "approvedAt",
                      "value": "2026-07-02T14:00:00.000Z"
                    },
                    {
                      "name": "rejectedAt",
                      "value": null
                    },
                    {
                      "name": "updatedAt",
                      "value": "2026-07-02T14:00:00.000Z"
                    }
                  ],
                  "children": []
                },
                {
                  "key": "co-foundation-fix",
                  "columns": [
                    {
                      "name": "change_order_id",
                      "value": {
                        "ref": "local:ChangeOrder.co-foundation-fix"
                      }
                    },
                    {
                      "name": "project_id",
                      "value": {
                        "ref": "local:Project.project-northwind-build"
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
                      "value": "2026-07-03T10:00:00.000Z"
                    }
                  ],
                  "details": [
                    {
                      "name": "title",
                      "value": "Reinforce foundation footing section C"
                    },
                    {
                      "name": "description",
                      "value": "Soil report revealed soft spot in section C requiring additional rebar and concrete"
                    },
                    {
                      "name": "costAdjustment",
                      "value": 12000
                    },
                    {
                      "name": "scheduleAdjustmentDays",
                      "value": 5
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
                      "value": "2026-07-03T10:00:00.000Z"
                    }
                  ],
                  "children": []
                },
                {
                  "key": "co-roof-change",
                  "columns": [
                    {
                      "name": "change_order_id",
                      "value": {
                        "ref": "local:ChangeOrder.co-roof-change"
                      }
                    },
                    {
                      "name": "project_id",
                      "value": {
                        "ref": "local:Project.project-riverside-remodel"
                      }
                    },
                    {
                      "name": "impact_type",
                      "value": "schedule"
                    },
                    {
                      "name": "status",
                      "value": "rejected"
                    },
                    {
                      "name": "created_at",
                      "value": "2026-07-02T11:00:00.000Z"
                    }
                  ],
                  "details": [
                    {
                      "name": "title",
                      "value": "Switch to standing-seam metal roof"
                    },
                    {
                      "name": "description",
                      "value": "Client requested upgrade from asphalt shingle to standing-seam metal roofing"
                    },
                    {
                      "name": "costAdjustment",
                      "value": 8000
                    },
                    {
                      "name": "scheduleAdjustmentDays",
                      "value": null
                    },
                    {
                      "name": "rejectionReason",
                      "value": "Project already closed — change cannot be applied after closure"
                    },
                    {
                      "name": "approvedAt",
                      "value": null
                    },
                    {
                      "name": "rejectedAt",
                      "value": "2026-07-02T16:00:00.000Z"
                    },
                    {
                      "name": "updatedAt",
                      "value": "2026-07-02T16:00:00.000Z"
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
                  "key": "report-acme-w1",
                  "columns": [
                    {
                      "name": "status_report_id",
                      "value": {
                        "ref": "local:StatusReport.report-acme-w1"
                      }
                    },
                    {
                      "name": "project_id",
                      "value": {
                        "ref": "local:Project.project-acme-renovation"
                      }
                    },
                    {
                      "name": "status",
                      "value": "shared"
                    },
                    {
                      "name": "created_at",
                      "value": "2026-07-04T10:00:00.000Z"
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
                      "value": "Demolition completed on schedule. Framing underway on floor 2. One approved change order for additional windows."
                    },
                    {
                      "name": "tasksOverview",
                      "value": "2 tasks active: demolition (completed), framing (in progress). On track for due dates."
                    },
                    {
                      "name": "timeLogsOverview",
                      "value": "14 total hours logged across 2 tasks. Labor cost $560."
                    },
                    {
                      "name": "materialsOverview",
                      "value": "120m metal stud track posted ($540). Paint usage voided pending correct SKU."
                    },
                    {
                      "name": "delayRiskAssessment",
                      "value": "Low risk. Framing may slip 1 day if windows delivery is delayed."
                    },
                    {
                      "name": "pmNotes",
                      "value": "Client pleased with progress. Window installation scheduled for week 2."
                    },
                    {
                      "name": "generatedAt",
                      "value": "2026-07-04T09:00:00.000Z"
                    },
                    {
                      "name": "reviewedAt",
                      "value": "2026-07-04T09:30:00.000Z"
                    },
                    {
                      "name": "sharedAt",
                      "value": "2026-07-04T10:00:00.000Z"
                    },
                    {
                      "name": "updatedAt",
                      "value": "2026-07-04T10:00:00.000Z"
                    }
                  ],
                  "children": [
                    {
                      "name": "delayRiskSuggestions",
                      "rows": [
                        {
                          "key": "suggestion-framing-delay",
                          "fields": [
                            {
                              "name": "workTaskId",
                              "value": {
                                "ref": "local:WorkTask.task-framing"
                              }
                            },
                            {
                              "name": "suggestion",
                              "value": "Expedite window delivery to avoid framing delay on south wall"
                            },
                            {
                              "name": "severity",
                              "value": "medium"
                            }
                          ]
                        },
                        {
                          "key": "suggestion-plumbing-start",
                          "fields": [
                            {
                              "name": "workTaskId",
                              "value": {
                                "ref": "local:WorkTask.task-plumbing"
                              }
                            },
                            {
                              "name": "suggestion",
                              "value": "Confirm permit approval before scheduling plumbing rough-in"
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
                },
                {
                  "key": "report-northwind-w1",
                  "columns": [
                    {
                      "name": "status_report_id",
                      "value": {
                        "ref": "local:StatusReport.report-northwind-w1"
                      }
                    },
                    {
                      "name": "project_id",
                      "value": {
                        "ref": "local:Project.project-northwind-build"
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
                      "value": "2026-07-03"
                    },
                    {
                      "name": "reportPeriodEnd",
                      "value": "2026-07-05"
                    },
                    {
                      "name": "summary",
                      "value": "Project on hold pending permits. Plumbing task assigned but not started. Foundation change order under review."
                    },
                    {
                      "name": "tasksOverview",
                      "value": "1 task assigned (plumbing rough-in). No work started due to project hold."
                    },
                    {
                      "name": "timeLogsOverview",
                      "value": "1 time log voided (duplicate). No active labor cost this period."
                    },
                    {
                      "name": "materialsOverview",
                      "value": "No material usage recorded this period."
                    },
                    {
                      "name": "delayRiskAssessment",
                      "value": "High risk. Permit delays and foundation reinforcement may push timeline by 5+ days."
                    },
                    {
                      "name": "pmNotes",
                      "value": "Following up with city planning daily. Change order for foundation fix awaiting client approval."
                    },
                    {
                      "name": "generatedAt",
                      "value": "2026-07-05T09:00:00.000Z"
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
                          "key": "suggestion-permit-followup",
                          "fields": [
                            {
                              "name": "workTaskId",
                              "value": {
                                "ref": "local:WorkTask.task-plumbing"
                              }
                            },
                            {
                              "name": "suggestion",
                              "value": "Escalate permit request with city planning office to unblock plumbing start"
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
                  "key": "billing-acme-w1",
                  "columns": [
                    {
                      "name": "billing_summary_id",
                      "value": {
                        "ref": "local:BillingSummary.billing-acme-w1"
                      }
                    },
                    {
                      "name": "project_id",
                      "value": {
                        "ref": "local:Project.project-acme-renovation"
                      }
                    },
                    {
                      "name": "status",
                      "value": "shared"
                    },
                    {
                      "name": "created_at",
                      "value": "2026-07-05T09:00:00.000Z"
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
                      "value": 540
                    },
                    {
                      "name": "changeOrderCost",
                      "value": 3500
                    },
                    {
                      "name": "totalCost",
                      "value": 4600
                    },
                    {
                      "name": "sharedAt",
                      "value": "2026-07-05T11:00:00.000Z"
                    },
                    {
                      "name": "updatedAt",
                      "value": "2026-07-05T11:00:00.000Z"
                    }
                  ],
                  "children": []
                },
                {
                  "key": "billing-northwind-w1",
                  "columns": [
                    {
                      "name": "billing_summary_id",
                      "value": {
                        "ref": "local:BillingSummary.billing-northwind-w1"
                      }
                    },
                    {
                      "name": "project_id",
                      "value": {
                        "ref": "local:Project.project-northwind-build"
                      }
                    },
                    {
                      "name": "status",
                      "value": "draft"
                    },
                    {
                      "name": "created_at",
                      "value": "2026-07-06T09:00:00.000Z"
                    }
                  ],
                  "details": [
                    {
                      "name": "periodStart",
                      "value": "2026-07-03"
                    },
                    {
                      "name": "periodEnd",
                      "value": "2026-07-06"
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
                      "value": 12000
                    },
                    {
                      "name": "totalCost",
                      "value": 12000
                    },
                    {
                      "name": "sharedAt",
                      "value": null
                    },
                    {
                      "name": "updatedAt",
                      "value": "2026-07-06T09:00:00.000Z"
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
                  "key": "invoice-acme-001",
                  "columns": [
                    {
                      "name": "invoice_id",
                      "value": {
                        "ref": "local:Invoice.invoice-acme-001"
                      }
                    },
                    {
                      "name": "project_id",
                      "value": {
                        "ref": "local:Project.project-acme-renovation"
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
                      "value": "2026-07-05T14:00:00.000Z"
                    }
                  ],
                  "details": [
                    {
                      "name": "invoiceNumber",
                      "value": "INV-2026-0001"
                    },
                    {
                      "name": "totalAmount",
                      "value": 4600
                    },
                    {
                      "name": "sentAt",
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
                  "key": "invoice-riverside-001",
                  "columns": [
                    {
                      "name": "invoice_id",
                      "value": {
                        "ref": "local:Invoice.invoice-riverside-001"
                      }
                    },
                    {
                      "name": "project_id",
                      "value": {
                        "ref": "local:Project.project-riverside-remodel"
                      }
                    },
                    {
                      "name": "client_id",
                      "value": {
                        "ref": "mdm:Client.client-riverside"
                      }
                    },
                    {
                      "name": "status",
                      "value": "draft"
                    },
                    {
                      "name": "created_at",
                      "value": "2026-07-06T14:00:00.000Z"
                    }
                  ],
                  "details": [
                    {
                      "name": "invoiceNumber",
                      "value": "INV-2026-0002"
                    },
                    {
                      "name": "totalAmount",
                      "value": 38000
                    },
                    {
                      "name": "sentAt",
                      "value": null
                    },
                    {
                      "name": "updatedAt",
                      "value": "2026-07-06T14:00:00.000Z"
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
          "Wave 3: Planned 8 local tables (Project, WorkTask, TimeLog, MaterialUsage, ChangeOrder, StatusReport, BillingSummary, Invoice) with no MDM entities",
          "Projects: 3 rows covering active, onHold, closed states with refs to prior-wave MDM Clients",
          "WorkTasks: 3 rows covering inProgress, completed, assigned states with actor refs for assigned workers",
          "TimeLogs: 3 event rows (2 posted, 1 voided) each linked to a WorkTask",
          "MaterialUsage: 2 event rows (1 posted, 1 voided) linked to active project",
          "ChangeOrders: 3 rows covering approved, pendingReview, rejected states across 3 projects",
          "StatusReports: 2 rows (shared, draft) with delayRiskSuggestions child collections referencing WorkTasks",
          "BillingSummaries: 2 rows (shared, draft) with cost breakdowns",
          "Invoices: 2 rows (sent, draft) — removed changeOrderId from details per repair findings since Invoice entity has no such field",
          "All timestamps within 2026-07-01 to 2026-07-08 window, chronologically coherent"
        ]
      }
    },
    "status": "completed",
    "stepId": 7,
    "interaction": null,
    "nextSteps": null
  }
}
