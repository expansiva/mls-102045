/// <mls fileReference="_102045_/l2/buildFlowFsm/web/desktop/page11/projectDetailWorkspace.defs.ts" enhancement="_blank"/>

export const definition = {
  "pageId": "projectDetailWorkspace",
  "pageName": "Project Detail & Timeline",
  "baseClassName": "BuildFlowFsmProjectDetailWorkspaceBase",
  "actor": "projectManager",
  "purpose": "Project manager reviews the full project detail, timeline, tasks, change orders, costs, and delay-risk insights.",
  "presentation": {
    "categoryRef": "entityRecordManagement"
  },
  "dataBindings": [
    {
      "id": "binding.projectDetailWorkspace.getProjectDetail",
      "source": "bff.getProjectDetail",
      "command": "getProjectDetail",
      "description": "View project detail and timeline",
      "kind": "query",
      "stateKey": "ui.projectDetailWorkspace.data.getProjectDetail",
      "inputStateKeys": [
        "ui.projectDetailWorkspace.input.getProjectDetail.projectId"
      ],
      "inputs": [
        {
          "name": "projectId",
          "stateKey": "ui.projectDetailWorkspace.input.getProjectDetail.projectId",
          "source": "routeParam",
          "required": true,
          "presentation": "route"
        }
      ]
    },
    {
      "id": "binding.projectDetailWorkspace.listWorkTasks",
      "source": "bff.listWorkTasks",
      "command": "listWorkTasks",
      "description": "Browse work tasks",
      "kind": "query",
      "stateKey": "ui.projectDetailWorkspace.data.listWorkTasks",
      "inputStateKeys": [
        "ui.projectDetailWorkspace.input.listWorkTasks.projectId",
        "ui.projectDetailWorkspace.input.listWorkTasks.status",
        "ui.projectDetailWorkspace.input.listWorkTasks.assignedWorkerId",
        "ui.projectDetailWorkspace.input.listWorkTasks.page",
        "ui.projectDetailWorkspace.input.listWorkTasks.pageSize"
      ],
      "inputs": [
        {
          "name": "projectId",
          "stateKey": "ui.projectDetailWorkspace.input.listWorkTasks.projectId",
          "source": "userInput",
          "required": true,
          "presentation": "form"
        },
        {
          "name": "status",
          "stateKey": "ui.projectDetailWorkspace.input.listWorkTasks.status",
          "source": "userInput",
          "required": false,
          "presentation": "form"
        },
        {
          "name": "assignedWorkerId",
          "stateKey": "ui.projectDetailWorkspace.input.listWorkTasks.assignedWorkerId",
          "source": "userInput",
          "required": false,
          "presentation": "form"
        },
        {
          "name": "page",
          "stateKey": "ui.projectDetailWorkspace.input.listWorkTasks.page",
          "source": "userInput",
          "required": false,
          "presentation": "form"
        },
        {
          "name": "pageSize",
          "stateKey": "ui.projectDetailWorkspace.input.listWorkTasks.pageSize",
          "source": "userInput",
          "required": false,
          "presentation": "form"
        }
      ]
    },
    {
      "id": "binding.projectDetailWorkspace.listChangeOrders",
      "source": "bff.listChangeOrders",
      "command": "listChangeOrders",
      "description": "Browse change orders",
      "kind": "query",
      "stateKey": "ui.projectDetailWorkspace.data.listChangeOrders",
      "inputStateKeys": [
        "ui.projectDetailWorkspace.input.listChangeOrders.projectId",
        "ui.projectDetailWorkspace.input.listChangeOrders.status",
        "ui.projectDetailWorkspace.input.listChangeOrders.impactType",
        "ui.projectDetailWorkspace.input.listChangeOrders.page",
        "ui.projectDetailWorkspace.input.listChangeOrders.pageSize"
      ],
      "inputs": [
        {
          "name": "projectId",
          "stateKey": "ui.projectDetailWorkspace.input.listChangeOrders.projectId",
          "source": "selectedEntity",
          "required": true,
          "presentation": "selection"
        },
        {
          "name": "status",
          "stateKey": "ui.projectDetailWorkspace.input.listChangeOrders.status",
          "source": "userInput",
          "required": false,
          "presentation": "form"
        },
        {
          "name": "impactType",
          "stateKey": "ui.projectDetailWorkspace.input.listChangeOrders.impactType",
          "source": "userInput",
          "required": false,
          "presentation": "form"
        },
        {
          "name": "page",
          "stateKey": "ui.projectDetailWorkspace.input.listChangeOrders.page",
          "source": "userInput",
          "required": false,
          "presentation": "form"
        },
        {
          "name": "pageSize",
          "stateKey": "ui.projectDetailWorkspace.input.listChangeOrders.pageSize",
          "source": "userInput",
          "required": false,
          "presentation": "form"
        }
      ]
    },
    {
      "id": "binding.projectDetailWorkspace.getChangeOrderDetail",
      "source": "bff.getChangeOrderDetail",
      "command": "getChangeOrderDetail",
      "description": "View change order and cost impact",
      "kind": "query",
      "stateKey": "ui.projectDetailWorkspace.data.getChangeOrderDetail",
      "inputStateKeys": [
        "ui.projectDetailWorkspace.input.getChangeOrderDetail.changeOrderId"
      ],
      "inputs": [
        {
          "name": "changeOrderId",
          "stateKey": "ui.projectDetailWorkspace.input.getChangeOrderDetail.changeOrderId",
          "source": "routeParam",
          "required": true,
          "presentation": "route"
        }
      ]
    },
    {
      "id": "binding.projectDetailWorkspace.listTimeLogs",
      "source": "bff.listTimeLogs",
      "command": "listTimeLogs",
      "description": "Browse time logs",
      "kind": "query",
      "stateKey": "ui.projectDetailWorkspace.data.listTimeLogs",
      "inputStateKeys": [
        "ui.projectDetailWorkspace.input.listTimeLogs.workTaskId",
        "ui.projectDetailWorkspace.input.listTimeLogs.workerName",
        "ui.projectDetailWorkspace.input.listTimeLogs.logDate",
        "ui.projectDetailWorkspace.input.listTimeLogs.status",
        "ui.projectDetailWorkspace.input.listTimeLogs.page",
        "ui.projectDetailWorkspace.input.listTimeLogs.pageSize"
      ],
      "inputs": [
        {
          "name": "workTaskId",
          "stateKey": "ui.projectDetailWorkspace.input.listTimeLogs.workTaskId",
          "source": "userInput",
          "required": false,
          "presentation": "form"
        },
        {
          "name": "workerName",
          "stateKey": "ui.projectDetailWorkspace.input.listTimeLogs.workerName",
          "source": "userInput",
          "required": false,
          "presentation": "form"
        },
        {
          "name": "logDate",
          "stateKey": "ui.projectDetailWorkspace.input.listTimeLogs.logDate",
          "source": "userInput",
          "required": false,
          "presentation": "form"
        },
        {
          "name": "status",
          "stateKey": "ui.projectDetailWorkspace.input.listTimeLogs.status",
          "source": "userInput",
          "required": false,
          "presentation": "form"
        },
        {
          "name": "page",
          "stateKey": "ui.projectDetailWorkspace.input.listTimeLogs.page",
          "source": "userInput",
          "required": false,
          "presentation": "form"
        },
        {
          "name": "pageSize",
          "stateKey": "ui.projectDetailWorkspace.input.listTimeLogs.pageSize",
          "source": "userInput",
          "required": false,
          "presentation": "form"
        }
      ]
    },
    {
      "id": "binding.projectDetailWorkspace.listMaterialUsages",
      "source": "bff.listMaterialUsages",
      "command": "listMaterialUsages",
      "description": "Browse material usage",
      "kind": "query",
      "stateKey": "ui.projectDetailWorkspace.data.listMaterialUsages",
      "inputStateKeys": [
        "ui.projectDetailWorkspace.input.listMaterialUsages.projectId",
        "ui.projectDetailWorkspace.input.listMaterialUsages.status",
        "ui.projectDetailWorkspace.input.listMaterialUsages.page",
        "ui.projectDetailWorkspace.input.listMaterialUsages.pageSize"
      ],
      "inputs": [
        {
          "name": "projectId",
          "stateKey": "ui.projectDetailWorkspace.input.listMaterialUsages.projectId",
          "source": "selectedEntity",
          "required": true,
          "presentation": "selection"
        },
        {
          "name": "status",
          "stateKey": "ui.projectDetailWorkspace.input.listMaterialUsages.status",
          "source": "userInput",
          "required": false,
          "presentation": "form"
        },
        {
          "name": "page",
          "stateKey": "ui.projectDetailWorkspace.input.listMaterialUsages.page",
          "source": "userInput",
          "required": false,
          "presentation": "form"
        },
        {
          "name": "pageSize",
          "stateKey": "ui.projectDetailWorkspace.input.listMaterialUsages.pageSize",
          "source": "userInput",
          "required": false,
          "presentation": "form"
        }
      ]
    },
    {
      "id": "binding.projectDetailWorkspace.triggerDelayRiskSuggestions",
      "source": "bff.triggerDelayRiskSuggestions",
      "command": "triggerDelayRiskSuggestions",
      "description": "Generate delay-risk suggestions",
      "kind": "command",
      "stateKey": "ui.projectDetailWorkspace.output.triggerDelayRiskSuggestions",
      "inputStateKeys": [
        "ui.projectDetailWorkspace.input.triggerDelayRiskSuggestions.statusReportId"
      ],
      "inputs": [
        {
          "name": "statusReportId",
          "stateKey": "ui.projectDetailWorkspace.input.triggerDelayRiskSuggestions.statusReportId",
          "source": "selectedEntity",
          "required": true,
          "presentation": "selection"
        }
      ]
    },
    {
      "id": "binding.projectDetailWorkspace.listDelayRiskSuggestions",
      "source": "bff.listDelayRiskSuggestions",
      "command": "listDelayRiskSuggestions",
      "description": "Review delay-risk suggestions",
      "kind": "query",
      "stateKey": "ui.projectDetailWorkspace.data.listDelayRiskSuggestions",
      "inputStateKeys": [
        "ui.projectDetailWorkspace.input.listDelayRiskSuggestions.statusReportId",
        "ui.projectDetailWorkspace.input.listDelayRiskSuggestions.acknowledged"
      ],
      "inputs": [
        {
          "name": "statusReportId",
          "stateKey": "ui.projectDetailWorkspace.input.listDelayRiskSuggestions.statusReportId",
          "source": "selectedEntity",
          "required": true,
          "presentation": "selection"
        },
        {
          "name": "acknowledged",
          "stateKey": "ui.projectDetailWorkspace.input.listDelayRiskSuggestions.acknowledged",
          "source": "userInput",
          "required": false,
          "presentation": "form"
        }
      ]
    }
  ]
};

export const pipeline = [
  {
    "id": "projectDetailWorkspace__l2_page",
    "type": "l2_page",
    "outputPath": "_102045_/l2/buildFlowFsm/web/desktop/page11/projectDetailWorkspace.ts",
    "defPath": "_102045_/l2/buildFlowFsm/web/desktop/page11/projectDetailWorkspace.defs.ts",
    "dependsFiles": [
      "_102045_/l2/buildFlowFsm/web/shared/projectDetailWorkspace.ts",
      "_102045_/l2/designSystem.ts"
    ],
    "dependsOn": [
      "projectDetailWorkspace__l2_shared"
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
