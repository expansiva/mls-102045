/// <mls fileReference="_102045_/l1/buildFlowFsm/layer_1_external/adapters/http/controllers/dashboardWorkspace.defs.ts" enhancement="_blank"/>

export const dashboardWorkspaceController = {
  "schemaVersion": "2026-06-26",
  "artifactType": "httpController",
  "artifactId": "dashboardWorkspace",
  "moduleName": "buildFlowFsm",
  "status": "draft",
  "source": {
    "agentName": "agentCbHttpController",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "pageId": "dashboardWorkspace",
    "controllerName": "DashboardWorkspaceController",
    "ownerKind": "workspace",
    "workspaceId": "dashboardWorkspace",
    "actors": [
      "projectManager"
    ],
    "allowedScopes": [
      "buildFlowFsm:projectManager"
    ],
    "handlers": [
      {
        "handlerName": "dashboardWorkspaceGetDashboardSummaryHandler",
        "command": "getDashboardSummary",
        "bffId": "getDashboardSummary",
        "route": "buildFlowFsm.dashboardWorkspace.getDashboardSummary",
        "kind": "query",
        "usecaseRef": "viewDashboard",
        "usecaseRefs": [
          "viewDashboard"
        ],
        "inputTypeName": "ViewDashboardInput",
        "inputContract": [
          {
            "inputId": "status",
            "fieldRef": "Project.status",
            "required": false,
            "source": "userInput",
            "description": "Optional project status filter; when omitted the dashboard defaults to active projects only"
          },
          {
            "inputId": "page",
            "fieldRef": "",
            "type": "number",
            "required": false,
            "source": "userInput",
            "description": "Optional page number for paginated dashboard results"
          },
          {
            "inputId": "pageSize",
            "fieldRef": "",
            "type": "number",
            "required": false,
            "source": "userInput",
            "description": "Optional page size for paginated dashboard results"
          }
        ],
        "projection": {
          "kind": "paginated",
          "arrayFieldName": "projects",
          "itemFields": [
            {
              "name": "projectId",
              "operationId": "viewDashboard",
              "path": [
                "projects",
                "$items",
                "projectId"
              ],
              "fromItems": false
            },
            {
              "name": "name",
              "operationId": "viewDashboard",
              "path": [
                "projects",
                "$items",
                "name"
              ],
              "fromItems": false
            },
            {
              "name": "clientName",
              "operationId": "viewDashboard",
              "path": [
                "projects",
                "$items",
                "clientName"
              ],
              "fromItems": false
            },
            {
              "name": "budget",
              "operationId": "viewDashboard",
              "path": [
                "projects",
                "$items",
                "budget"
              ],
              "fromItems": false
            },
            {
              "name": "actualCost",
              "operationId": "viewDashboard",
              "path": [
                "projects",
                "$items",
                "actualCost"
              ],
              "fromItems": false
            },
            {
              "name": "budgetVariance",
              "operationId": "viewDashboard",
              "path": [
                "projects",
                "$items",
                "budgetVariance"
              ],
              "fromItems": false
            },
            {
              "name": "startDate",
              "operationId": "viewDashboard",
              "path": [
                "projects",
                "$items",
                "startDate"
              ],
              "fromItems": false
            },
            {
              "name": "endDate",
              "operationId": "viewDashboard",
              "path": [
                "projects",
                "$items",
                "endDate"
              ],
              "fromItems": false
            },
            {
              "name": "status",
              "operationId": "viewDashboard",
              "path": [
                "projects",
                "$items",
                "status"
              ],
              "fromItems": false
            },
            {
              "name": "upcomingTaskCount",
              "operationId": "viewDashboard",
              "path": [
                "projects",
                "$items",
                "upcomingTaskCount"
              ],
              "fromItems": false
            },
            {
              "name": "overdueTaskCount",
              "operationId": "viewDashboard",
              "path": [
                "projects",
                "$items",
                "overdueTaskCount"
              ],
              "fromItems": false
            }
          ],
          "topFields": [
            {
              "name": "total",
              "operationId": "viewDashboard",
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
        "handlerName": "dashboardWorkspaceGetProjectListHandler",
        "command": "getProjectList",
        "bffId": "getProjectList",
        "route": "buildFlowFsm.dashboardWorkspace.getProjectList",
        "kind": "query",
        "usecaseRef": "queryProjects",
        "usecaseRefs": [
          "queryProjects"
        ],
        "inputTypeName": "QueryProjectsInput",
        "inputContract": [
          {
            "inputId": "status",
            "fieldRef": "Project.status",
            "required": false,
            "source": "userInput",
            "description": "Optional lifecycle status filter; when omitted the list defaults to active projects only per dashboard rules"
          },
          {
            "inputId": "page",
            "fieldRef": "",
            "type": "number",
            "required": false,
            "source": "userInput",
            "description": "Optional 1-based page number for paginated project results"
          },
          {
            "inputId": "pageSize",
            "fieldRef": "",
            "type": "number",
            "required": false,
            "source": "userInput",
            "description": "Optional page size for paginated project results"
          }
        ],
        "projection": {
          "kind": "paginated",
          "arrayFieldName": "projects",
          "itemFields": [
            {
              "name": "projectId",
              "operationId": "queryProjects",
              "path": [
                "projects",
                "$items",
                "projectId"
              ],
              "fromItems": false
            },
            {
              "name": "name",
              "operationId": "queryProjects",
              "path": [
                "projects",
                "$items",
                "name"
              ],
              "fromItems": false
            },
            {
              "name": "clientName",
              "operationId": "queryProjects",
              "path": [
                "projects",
                "$items",
                "clientName"
              ],
              "fromItems": false
            },
            {
              "name": "siteAddress",
              "operationId": "queryProjects",
              "path": [
                "projects",
                "$items",
                "siteAddress"
              ],
              "fromItems": false
            },
            {
              "name": "budget",
              "operationId": "queryProjects",
              "path": [
                "projects",
                "$items",
                "budget"
              ],
              "fromItems": false
            },
            {
              "name": "startDate",
              "operationId": "queryProjects",
              "path": [
                "projects",
                "$items",
                "startDate"
              ],
              "fromItems": false
            },
            {
              "name": "endDate",
              "operationId": "queryProjects",
              "path": [
                "projects",
                "$items",
                "endDate"
              ],
              "fromItems": false
            },
            {
              "name": "status",
              "operationId": "queryProjects",
              "path": [
                "projects",
                "$items",
                "status"
              ],
              "fromItems": false
            }
          ],
          "topFields": [
            {
              "name": "total",
              "operationId": "queryProjects",
              "path": [
                "total"
              ],
              "fromItems": false
            }
          ]
        },
        "optionalUses": []
      }
    ],
    "routes": [
      {
        "key": "buildFlowFsm.dashboardWorkspace.getDashboardSummary",
        "handlerName": "dashboardWorkspaceGetDashboardSummaryHandler"
      },
      {
        "key": "buildFlowFsm.dashboardWorkspace.getProjectList",
        "handlerName": "dashboardWorkspaceGetProjectListHandler"
      }
    ]
  }
} as const;

export default dashboardWorkspaceController;

export const pipeline = [
  {
    "id": "dashboardWorkspace__httpController",
    "type": "httpController",
    "outputPath": "_102045_/l1/buildFlowFsm/layer_1_external/adapters/http/controllers/dashboardWorkspace.ts",
    "defPath": "_102045_/l1/buildFlowFsm/layer_1_external/adapters/http/controllers/dashboardWorkspace.defs.ts",
    "dependsFiles": [
      "_102045_/l1/buildFlowFsm/layer_2_application/usecases/viewDashboard.d.ts",
      "_102045_/l4/buildFlowFsm/contracts/dashboardWorkspace.getDashboardSummary.defs.ts",
      "_102045_/l1/buildFlowFsm/layer_2_application/usecases/queryProjects.d.ts",
      "_102045_/l4/buildFlowFsm/contracts/dashboardWorkspace.getProjectList.defs.ts"
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
