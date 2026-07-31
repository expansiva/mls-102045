/// <mls fileReference="_102045_/l1/buildFlowFsm/layer_1_external/adapters/http/controllers/projectDetailWorkspace.defs.ts" enhancement="_blank"/>

export const projectDetailWorkspaceController = {
  "schemaVersion": "2026-06-26",
  "artifactType": "httpController",
  "artifactId": "projectDetailWorkspace",
  "moduleName": "buildFlowFsm",
  "status": "draft",
  "source": {
    "agentName": "agentCbHttpController",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "pageId": "projectDetailWorkspace",
    "controllerName": "ProjectDetailWorkspaceController",
    "ownerKind": "workspace",
    "workspaceId": "projectDetailWorkspace",
    "actors": [
      "projectManager"
    ],
    "allowedScopes": [
      "buildFlowFsm:projectManager"
    ],
    "handlers": [
      {
        "handlerName": "projectDetailWorkspaceGetProjectDetailHandler",
        "command": "getProjectDetail",
        "bffId": "getProjectDetail",
        "route": "buildFlowFsm.projectDetailWorkspace.getProjectDetail",
        "kind": "query",
        "usecaseRef": "viewProject",
        "usecaseRefs": [
          "viewProject"
        ],
        "inputTypeName": "ViewProjectInput",
        "inputContract": [
          {
            "inputId": "projectId",
            "fieldRef": "Project.projectId",
            "required": true,
            "source": "routeParam",
            "description": "Identifier of the project to open on the detail and timeline screen."
          }
        ],
        "projection": {
          "kind": "object",
          "arrayFieldName": null,
          "itemFields": [],
          "topFields": [
            {
              "name": "projectId",
              "operationId": "viewProject",
              "path": [
                "projectId"
              ],
              "fromItems": false
            },
            {
              "name": "name",
              "operationId": "viewProject",
              "path": [
                "name"
              ],
              "fromItems": false
            },
            {
              "name": "clientId",
              "operationId": "viewProject",
              "path": [
                "clientId"
              ],
              "fromItems": false
            },
            {
              "name": "clientName",
              "operationId": "viewProject",
              "path": [
                "clientName"
              ],
              "fromItems": false
            },
            {
              "name": "clientCompany",
              "operationId": "viewProject",
              "path": [
                "clientCompany"
              ],
              "fromItems": false
            },
            {
              "name": "siteAddress",
              "operationId": "viewProject",
              "path": [
                "siteAddress"
              ],
              "fromItems": false
            },
            {
              "name": "budget",
              "operationId": "viewProject",
              "path": [
                "budget"
              ],
              "fromItems": false
            },
            {
              "name": "startDate",
              "operationId": "viewProject",
              "path": [
                "startDate"
              ],
              "fromItems": false
            },
            {
              "name": "endDate",
              "operationId": "viewProject",
              "path": [
                "endDate"
              ],
              "fromItems": false
            },
            {
              "name": "status",
              "operationId": "viewProject",
              "path": [
                "status"
              ],
              "fromItems": false
            },
            {
              "name": "holdReason",
              "operationId": "viewProject",
              "path": [
                "holdReason"
              ],
              "fromItems": false
            },
            {
              "name": "closedAt",
              "operationId": "viewProject",
              "path": [
                "closedAt"
              ],
              "fromItems": false
            },
            {
              "name": "cancelledAt",
              "operationId": "viewProject",
              "path": [
                "cancelledAt"
              ],
              "fromItems": false
            },
            {
              "name": "cancellationReason",
              "operationId": "viewProject",
              "path": [
                "cancellationReason"
              ],
              "fromItems": false
            },
            {
              "name": "createdAt",
              "operationId": "viewProject",
              "path": [
                "createdAt"
              ],
              "fromItems": false
            },
            {
              "name": "updatedAt",
              "operationId": "viewProject",
              "path": [
                "updatedAt"
              ],
              "fromItems": false
            }
          ]
        },
        "optionalUses": []
      },
      {
        "handlerName": "projectDetailWorkspaceListWorkTasksHandler",
        "command": "listWorkTasks",
        "bffId": "listWorkTasks",
        "route": "buildFlowFsm.projectDetailWorkspace.listWorkTasks",
        "kind": "query",
        "usecaseRef": "queryWorkTasks",
        "usecaseRefs": [
          "queryWorkTasks"
        ],
        "inputTypeName": "QueryWorkTasksInput",
        "inputContract": [
          {
            "inputId": "projectId",
            "fieldRef": "WorkTask.projectId",
            "required": false,
            "source": "userInput",
            "description": "Optional project filter to list only tasks belonging to one project"
          },
          {
            "inputId": "status",
            "fieldRef": "WorkTask.status",
            "required": false,
            "source": "userInput",
            "description": "Optional lifecycle status filter (assigned, inProgress, completed, cancelled)"
          },
          {
            "inputId": "assignedWorkerId",
            "fieldRef": "WorkTask.assignedWorkerId",
            "required": false,
            "source": "userInput",
            "description": "Optional filter by the field worker currently assigned to the task"
          },
          {
            "inputId": "page",
            "fieldRef": "",
            "type": "number",
            "required": false,
            "source": "userInput",
            "description": "Optional page number when paginating the task list"
          },
          {
            "inputId": "pageSize",
            "fieldRef": "",
            "type": "number",
            "required": false,
            "source": "userInput",
            "description": "Optional page size when paginating the task list"
          }
        ],
        "projection": {
          "kind": "paginated",
          "arrayFieldName": "workTasks",
          "itemFields": [
            {
              "name": "workTaskId",
              "operationId": "queryWorkTasks",
              "path": [
                "workTasks",
                "$items",
                "workTaskId"
              ],
              "fromItems": false
            },
            {
              "name": "projectId",
              "operationId": "queryWorkTasks",
              "path": [
                "workTasks",
                "$items",
                "projectId"
              ],
              "fromItems": false
            },
            {
              "name": "title",
              "operationId": "queryWorkTasks",
              "path": [
                "workTasks",
                "$items",
                "title"
              ],
              "fromItems": false
            },
            {
              "name": "assignedWorkerId",
              "operationId": "queryWorkTasks",
              "path": [
                "workTasks",
                "$items",
                "assignedWorkerId"
              ],
              "fromItems": false
            },
            {
              "name": "status",
              "operationId": "queryWorkTasks",
              "path": [
                "workTasks",
                "$items",
                "status"
              ],
              "fromItems": false
            },
            {
              "name": "dueDate",
              "operationId": "queryWorkTasks",
              "path": [
                "workTasks",
                "$items",
                "dueDate"
              ],
              "fromItems": false
            },
            {
              "name": "completedAt",
              "operationId": "queryWorkTasks",
              "path": [
                "workTasks",
                "$items",
                "completedAt"
              ],
              "fromItems": false
            },
            {
              "name": "isOverdue",
              "operationId": "queryWorkTasks",
              "path": [
                "workTasks",
                "$items",
                "isOverdue"
              ],
              "fromItems": false
            }
          ],
          "topFields": [
            {
              "name": "total",
              "operationId": "queryWorkTasks",
              "path": [
                "total"
              ],
              "fromItems": false
            }
          ]
        },
        "optionalUses": []
      },
      {
        "handlerName": "projectDetailWorkspaceListChangeOrdersHandler",
        "command": "listChangeOrders",
        "bffId": "listChangeOrders",
        "route": "buildFlowFsm.projectDetailWorkspace.listChangeOrders",
        "kind": "query",
        "usecaseRef": "queryChangeOrders",
        "usecaseRefs": [
          "queryChangeOrders"
        ],
        "inputTypeName": "QueryChangeOrdersInput",
        "inputContract": [
          {
            "inputId": "projectId",
            "fieldRef": "ChangeOrder.projectId",
            "required": true,
            "source": "selectedEntity",
            "description": "The project whose change orders are listed."
          },
          {
            "inputId": "status",
            "fieldRef": "ChangeOrder.status",
            "required": false,
            "source": "userInput",
            "description": "Optional filter by change-order lifecycle status (draft, pendingReview, approved, rejected)."
          },
          {
            "inputId": "impactType",
            "fieldRef": "ChangeOrder.impactType",
            "required": false,
            "source": "userInput",
            "description": "Optional filter by primary impact category (scope, cost, schedule)."
          },
          {
            "inputId": "page",
            "fieldRef": "",
            "type": "number",
            "required": false,
            "source": "userInput",
            "description": "Optional page number for paginated results."
          },
          {
            "inputId": "pageSize",
            "fieldRef": "",
            "type": "number",
            "required": false,
            "source": "userInput",
            "description": "Optional page size for paginated results."
          }
        ],
        "projection": {
          "kind": "paginated",
          "arrayFieldName": "changeOrders",
          "itemFields": [
            {
              "name": "changeOrderId",
              "operationId": "queryChangeOrders",
              "path": [
                "changeOrders",
                "$items",
                "changeOrderId"
              ],
              "fromItems": false
            },
            {
              "name": "title",
              "operationId": "queryChangeOrders",
              "path": [
                "changeOrders",
                "$items",
                "title"
              ],
              "fromItems": false
            },
            {
              "name": "impactType",
              "operationId": "queryChangeOrders",
              "path": [
                "changeOrders",
                "$items",
                "impactType"
              ],
              "fromItems": false
            },
            {
              "name": "costAdjustment",
              "operationId": "queryChangeOrders",
              "path": [
                "changeOrders",
                "$items",
                "costAdjustment"
              ],
              "fromItems": false
            },
            {
              "name": "scheduleAdjustmentDays",
              "operationId": "queryChangeOrders",
              "path": [
                "changeOrders",
                "$items",
                "scheduleAdjustmentDays"
              ],
              "fromItems": false
            },
            {
              "name": "status",
              "operationId": "queryChangeOrders",
              "path": [
                "changeOrders",
                "$items",
                "status"
              ],
              "fromItems": false
            },
            {
              "name": "approvedAt",
              "operationId": "queryChangeOrders",
              "path": [
                "changeOrders",
                "$items",
                "approvedAt"
              ],
              "fromItems": false
            },
            {
              "name": "rejectedAt",
              "operationId": "queryChangeOrders",
              "path": [
                "changeOrders",
                "$items",
                "rejectedAt"
              ],
              "fromItems": false
            },
            {
              "name": "createdAt",
              "operationId": "queryChangeOrders",
              "path": [
                "changeOrders",
                "$items",
                "createdAt"
              ],
              "fromItems": false
            }
          ],
          "topFields": [
            {
              "name": "total",
              "operationId": "queryChangeOrders",
              "path": [
                "total"
              ],
              "fromItems": false
            }
          ]
        },
        "optionalUses": []
      },
      {
        "handlerName": "projectDetailWorkspaceGetChangeOrderDetailHandler",
        "command": "getChangeOrderDetail",
        "bffId": "getChangeOrderDetail",
        "route": "buildFlowFsm.projectDetailWorkspace.getChangeOrderDetail",
        "kind": "query",
        "usecaseRef": "viewChangeOrder",
        "usecaseRefs": [
          "viewChangeOrder"
        ],
        "inputTypeName": "ViewChangeOrderInput",
        "inputContract": [
          {
            "inputId": "changeOrderId",
            "fieldRef": "ChangeOrder.changeOrderId",
            "required": true,
            "source": "routeParam",
            "description": "Identifier of the change order to display"
          }
        ],
        "projection": {
          "kind": "object",
          "arrayFieldName": null,
          "itemFields": [],
          "topFields": [
            {
              "name": "changeOrderId",
              "operationId": "viewChangeOrder",
              "path": [
                "changeOrderId"
              ],
              "fromItems": false
            },
            {
              "name": "projectId",
              "operationId": "viewChangeOrder",
              "path": [
                "projectId"
              ],
              "fromItems": false
            },
            {
              "name": "title",
              "operationId": "viewChangeOrder",
              "path": [
                "title"
              ],
              "fromItems": false
            },
            {
              "name": "description",
              "operationId": "viewChangeOrder",
              "path": [
                "description"
              ],
              "fromItems": false
            },
            {
              "name": "impactType",
              "operationId": "viewChangeOrder",
              "path": [
                "impactType"
              ],
              "fromItems": false
            },
            {
              "name": "costAdjustment",
              "operationId": "viewChangeOrder",
              "path": [
                "costAdjustment"
              ],
              "fromItems": false
            },
            {
              "name": "scheduleAdjustmentDays",
              "operationId": "viewChangeOrder",
              "path": [
                "scheduleAdjustmentDays"
              ],
              "fromItems": false
            },
            {
              "name": "status",
              "operationId": "viewChangeOrder",
              "path": [
                "status"
              ],
              "fromItems": false
            },
            {
              "name": "rejectionReason",
              "operationId": "viewChangeOrder",
              "path": [
                "rejectionReason"
              ],
              "fromItems": false
            },
            {
              "name": "approvedAt",
              "operationId": "viewChangeOrder",
              "path": [
                "approvedAt"
              ],
              "fromItems": false
            },
            {
              "name": "rejectedAt",
              "operationId": "viewChangeOrder",
              "path": [
                "rejectedAt"
              ],
              "fromItems": false
            },
            {
              "name": "projectName",
              "operationId": "viewChangeOrder",
              "path": [
                "projectName"
              ],
              "fromItems": false
            },
            {
              "name": "projectBudget",
              "operationId": "viewChangeOrder",
              "path": [
                "projectBudget"
              ],
              "fromItems": false
            },
            {
              "name": "affectsJobCosting",
              "operationId": "viewChangeOrder",
              "path": [
                "affectsJobCosting"
              ],
              "fromItems": false
            }
          ]
        },
        "optionalUses": []
      },
      {
        "handlerName": "projectDetailWorkspaceListTimeLogsHandler",
        "command": "listTimeLogs",
        "bffId": "listTimeLogs",
        "route": "buildFlowFsm.projectDetailWorkspace.listTimeLogs",
        "kind": "query",
        "usecaseRef": "queryTimeLogs",
        "usecaseRefs": [
          "queryTimeLogs"
        ],
        "inputTypeName": "QueryTimeLogsInput",
        "inputContract": [
          {
            "inputId": "workTaskId",
            "fieldRef": "TimeLog.workTaskId",
            "required": false,
            "source": "userInput",
            "description": "Optional filter to show time logs for a specific work task"
          },
          {
            "inputId": "workerName",
            "fieldRef": "TimeLog.workerName",
            "required": false,
            "source": "userInput",
            "description": "Optional filter by field worker name"
          },
          {
            "inputId": "logDate",
            "fieldRef": "TimeLog.logDate",
            "required": false,
            "source": "userInput",
            "description": "Optional filter by the calendar date the work was performed"
          },
          {
            "inputId": "status",
            "fieldRef": "TimeLog.status",
            "required": false,
            "source": "userInput",
            "description": "Optional filter by time log status (posted or voided)"
          },
          {
            "inputId": "page",
            "fieldRef": "",
            "type": "number",
            "required": false,
            "source": "userInput",
            "description": "Page number for paginated results"
          },
          {
            "inputId": "pageSize",
            "fieldRef": "",
            "type": "number",
            "required": false,
            "source": "userInput",
            "description": "Number of time log entries per page"
          }
        ],
        "projection": {
          "kind": "paginated",
          "arrayFieldName": "timeLogs",
          "itemFields": [
            {
              "name": "timeLogId",
              "operationId": "queryTimeLogs",
              "path": [
                "timeLogs",
                "$items",
                "timeLogId"
              ],
              "fromItems": false
            },
            {
              "name": "workTaskId",
              "operationId": "queryTimeLogs",
              "path": [
                "timeLogs",
                "$items",
                "workTaskId"
              ],
              "fromItems": false
            },
            {
              "name": "workerName",
              "operationId": "queryTimeLogs",
              "path": [
                "timeLogs",
                "$items",
                "workerName"
              ],
              "fromItems": false
            },
            {
              "name": "logDate",
              "operationId": "queryTimeLogs",
              "path": [
                "timeLogs",
                "$items",
                "logDate"
              ],
              "fromItems": false
            },
            {
              "name": "hoursWorked",
              "operationId": "queryTimeLogs",
              "path": [
                "timeLogs",
                "$items",
                "hoursWorked"
              ],
              "fromItems": false
            },
            {
              "name": "laborCost",
              "operationId": "queryTimeLogs",
              "path": [
                "timeLogs",
                "$items",
                "laborCost"
              ],
              "fromItems": false
            },
            {
              "name": "status",
              "operationId": "queryTimeLogs",
              "path": [
                "timeLogs",
                "$items",
                "status"
              ],
              "fromItems": false
            }
          ],
          "topFields": [
            {
              "name": "total",
              "operationId": "queryTimeLogs",
              "path": [
                "total"
              ],
              "fromItems": false
            }
          ]
        },
        "optionalUses": []
      },
      {
        "handlerName": "projectDetailWorkspaceListMaterialUsagesHandler",
        "command": "listMaterialUsages",
        "bffId": "listMaterialUsages",
        "route": "buildFlowFsm.projectDetailWorkspace.listMaterialUsages",
        "kind": "query",
        "usecaseRef": "queryMaterialUsages",
        "usecaseRefs": [
          "queryMaterialUsages"
        ],
        "inputTypeName": "QueryMaterialUsagesInput",
        "inputContract": [
          {
            "inputId": "projectId",
            "fieldRef": "MaterialUsage.projectId",
            "required": true,
            "source": "selectedEntity",
            "description": "Project whose material usage records are listed for job costing review"
          },
          {
            "inputId": "status",
            "fieldRef": "MaterialUsage.status",
            "required": false,
            "source": "userInput",
            "description": "Optional filter by lifecycle status (posted or voided)"
          },
          {
            "inputId": "page",
            "fieldRef": "",
            "type": "number",
            "required": false,
            "source": "userInput",
            "description": "Optional page number for paginated results"
          },
          {
            "inputId": "pageSize",
            "fieldRef": "",
            "type": "number",
            "required": false,
            "source": "userInput",
            "description": "Optional page size for paginated results"
          }
        ],
        "projection": {
          "kind": "paginated",
          "arrayFieldName": "materialUsages",
          "itemFields": [
            {
              "name": "materialUsageId",
              "operationId": "queryMaterialUsages",
              "path": [
                "materialUsages",
                "$items",
                "materialUsageId"
              ],
              "fromItems": false
            },
            {
              "name": "materialName",
              "operationId": "queryMaterialUsages",
              "path": [
                "materialUsages",
                "$items",
                "materialName"
              ],
              "fromItems": false
            },
            {
              "name": "quantity",
              "operationId": "queryMaterialUsages",
              "path": [
                "materialUsages",
                "$items",
                "quantity"
              ],
              "fromItems": false
            },
            {
              "name": "unit",
              "operationId": "queryMaterialUsages",
              "path": [
                "materialUsages",
                "$items",
                "unit"
              ],
              "fromItems": false
            },
            {
              "name": "unitCost",
              "operationId": "queryMaterialUsages",
              "path": [
                "materialUsages",
                "$items",
                "unitCost"
              ],
              "fromItems": false
            },
            {
              "name": "costCode",
              "operationId": "queryMaterialUsages",
              "path": [
                "materialUsages",
                "$items",
                "costCode"
              ],
              "fromItems": false
            },
            {
              "name": "usageDate",
              "operationId": "queryMaterialUsages",
              "path": [
                "materialUsages",
                "$items",
                "usageDate"
              ],
              "fromItems": false
            },
            {
              "name": "status",
              "operationId": "queryMaterialUsages",
              "path": [
                "materialUsages",
                "$items",
                "status"
              ],
              "fromItems": false
            },
            {
              "name": "recordedBy",
              "operationId": "queryMaterialUsages",
              "path": [
                "materialUsages",
                "$items",
                "recordedBy"
              ],
              "fromItems": false
            }
          ],
          "topFields": [
            {
              "name": "total",
              "operationId": "queryMaterialUsages",
              "path": [
                "total"
              ],
              "fromItems": false
            }
          ]
        },
        "optionalUses": []
      },
      {
        "handlerName": "projectDetailWorkspaceTriggerDelayRiskSuggestionsHandler",
        "command": "triggerDelayRiskSuggestions",
        "bffId": "triggerDelayRiskSuggestions",
        "route": "buildFlowFsm.projectDetailWorkspace.triggerDelayRiskSuggestions",
        "kind": "command",
        "usecaseRef": "generateDelayRiskSuggestions",
        "usecaseRefs": [
          "generateDelayRiskSuggestions"
        ],
        "inputTypeName": "GenerateDelayRiskSuggestionsInput",
        "inputContract": [
          {
            "inputId": "statusReportId",
            "fieldRef": "DelayRiskSuggestion.statusReportId",
            "required": true,
            "source": "selectedEntity",
            "description": "Status report for which AI delay-risk suggestions will be generated"
          }
        ],
        "projection": {
          "kind": "object",
          "arrayFieldName": null,
          "itemFields": [],
          "topFields": []
        },
        "optionalUses": []
      },
      {
        "handlerName": "projectDetailWorkspaceListDelayRiskSuggestionsHandler",
        "command": "listDelayRiskSuggestions",
        "bffId": "listDelayRiskSuggestions",
        "route": "buildFlowFsm.projectDetailWorkspace.listDelayRiskSuggestions",
        "kind": "query",
        "usecaseRef": "queryDelayRiskSuggestions",
        "usecaseRefs": [
          "queryDelayRiskSuggestions"
        ],
        "inputTypeName": "QueryDelayRiskSuggestionsInput",
        "inputContract": [
          {
            "inputId": "statusReportId",
            "fieldRef": "DelayRiskSuggestion.statusReportId",
            "required": true,
            "source": "selectedEntity",
            "description": "Status report whose AI delay-risk suggestions are being reviewed"
          },
          {
            "inputId": "acknowledged",
            "fieldRef": "DelayRiskSuggestion.acknowledged",
            "required": false,
            "source": "userInput",
            "description": "Optional filter to show only acknowledged or unacknowledged suggestions"
          }
        ],
        "projection": {
          "kind": "list",
          "arrayFieldName": null,
          "itemFields": [
            {
              "name": "delayRiskSuggestionId",
              "operationId": "queryDelayRiskSuggestions",
              "path": [
                "delayRiskSuggestionId"
              ],
              "fromItems": true
            },
            {
              "name": "workTaskId",
              "operationId": "queryDelayRiskSuggestions",
              "path": [
                "workTaskId"
              ],
              "fromItems": true
            },
            {
              "name": "workTaskTitle",
              "operationId": "queryDelayRiskSuggestions",
              "path": [
                "workTaskTitle"
              ],
              "fromItems": true
            },
            {
              "name": "riskLevel",
              "operationId": "queryDelayRiskSuggestions",
              "path": [
                "riskLevel"
              ],
              "fromItems": true
            },
            {
              "name": "reason",
              "operationId": "queryDelayRiskSuggestions",
              "path": [
                "reason"
              ],
              "fromItems": true
            },
            {
              "name": "suggestedAction",
              "operationId": "queryDelayRiskSuggestions",
              "path": [
                "suggestedAction"
              ],
              "fromItems": true
            },
            {
              "name": "acknowledged",
              "operationId": "queryDelayRiskSuggestions",
              "path": [
                "acknowledged"
              ],
              "fromItems": true
            },
            {
              "name": "createdAt",
              "operationId": "queryDelayRiskSuggestions",
              "path": [
                "createdAt"
              ],
              "fromItems": true
            }
          ],
          "topFields": []
        },
        "optionalUses": []
      }
    ],
    "routes": [
      {
        "key": "buildFlowFsm.projectDetailWorkspace.getProjectDetail",
        "handlerName": "projectDetailWorkspaceGetProjectDetailHandler"
      },
      {
        "key": "buildFlowFsm.projectDetailWorkspace.listWorkTasks",
        "handlerName": "projectDetailWorkspaceListWorkTasksHandler"
      },
      {
        "key": "buildFlowFsm.projectDetailWorkspace.listChangeOrders",
        "handlerName": "projectDetailWorkspaceListChangeOrdersHandler"
      },
      {
        "key": "buildFlowFsm.projectDetailWorkspace.getChangeOrderDetail",
        "handlerName": "projectDetailWorkspaceGetChangeOrderDetailHandler"
      },
      {
        "key": "buildFlowFsm.projectDetailWorkspace.listTimeLogs",
        "handlerName": "projectDetailWorkspaceListTimeLogsHandler"
      },
      {
        "key": "buildFlowFsm.projectDetailWorkspace.listMaterialUsages",
        "handlerName": "projectDetailWorkspaceListMaterialUsagesHandler"
      },
      {
        "key": "buildFlowFsm.projectDetailWorkspace.triggerDelayRiskSuggestions",
        "handlerName": "projectDetailWorkspaceTriggerDelayRiskSuggestionsHandler"
      },
      {
        "key": "buildFlowFsm.projectDetailWorkspace.listDelayRiskSuggestions",
        "handlerName": "projectDetailWorkspaceListDelayRiskSuggestionsHandler"
      }
    ]
  }
} as const;

export default projectDetailWorkspaceController;

export const pipeline = [
  {
    "id": "projectDetailWorkspace__httpController",
    "type": "httpController",
    "outputPath": "_102045_/l1/buildFlowFsm/layer_1_external/adapters/http/controllers/projectDetailWorkspace.ts",
    "defPath": "_102045_/l1/buildFlowFsm/layer_1_external/adapters/http/controllers/projectDetailWorkspace.defs.ts",
    "dependsFiles": [
      "_102045_/l1/buildFlowFsm/layer_2_application/usecases/viewProject.d.ts",
      "_102045_/l4/buildFlowFsm/contracts/projectDetailWorkspace.getProjectDetail.defs.ts",
      "_102045_/l1/buildFlowFsm/layer_2_application/usecases/queryWorkTasks.d.ts",
      "_102045_/l4/buildFlowFsm/contracts/projectDetailWorkspace.listWorkTasks.defs.ts",
      "_102045_/l1/buildFlowFsm/layer_2_application/usecases/queryChangeOrders.d.ts",
      "_102045_/l4/buildFlowFsm/contracts/projectDetailWorkspace.listChangeOrders.defs.ts",
      "_102045_/l1/buildFlowFsm/layer_2_application/usecases/viewChangeOrder.d.ts",
      "_102045_/l4/buildFlowFsm/contracts/projectDetailWorkspace.getChangeOrderDetail.defs.ts",
      "_102045_/l1/buildFlowFsm/layer_2_application/usecases/queryTimeLogs.d.ts",
      "_102045_/l4/buildFlowFsm/contracts/projectDetailWorkspace.listTimeLogs.defs.ts",
      "_102045_/l1/buildFlowFsm/layer_2_application/usecases/queryMaterialUsages.d.ts",
      "_102045_/l4/buildFlowFsm/contracts/projectDetailWorkspace.listMaterialUsages.defs.ts",
      "_102045_/l1/buildFlowFsm/layer_2_application/usecases/generateDelayRiskSuggestions.d.ts",
      "_102045_/l4/buildFlowFsm/contracts/projectDetailWorkspace.triggerDelayRiskSuggestions.defs.ts",
      "_102045_/l1/buildFlowFsm/layer_2_application/usecases/queryDelayRiskSuggestions.d.ts",
      "_102045_/l4/buildFlowFsm/contracts/projectDetailWorkspace.listDelayRiskSuggestions.defs.ts"
    ],
    "dependsOn": [],
    "skills": [
      "_102021_/l2/agentChangeBackend/skills/architecture.md",
      "_102021_/l2/agentChangeBackend/skills/httpController.md",
      "_102034_.d.ts"
    ],
    "agent": "agentCbMaterialize"
  }
] as const;
