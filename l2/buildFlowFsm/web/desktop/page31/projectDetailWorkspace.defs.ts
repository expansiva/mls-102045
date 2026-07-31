/// <mls fileReference="_102045_/l2/buildFlowFsm/web/desktop/page31/projectDetailWorkspace.defs.ts" enhancement="_blank"/>

// TESTE (31/jul): defs REDUZIDO + skill de experiência no pipeline.
// A UX desta página vem inteira do skill `entityRecordManagement/page31.md`; este defs carrega só o
// contrato: identidade + amarração. Comparar com page21/projectDetailWorkspace.defs.ts (defs completo + page21.md).

export const definition = {
  "pageId": "projectDetailWorkspace",
  "pageName": "Project Detail & Timeline",
  "baseClassName": "BuildFlowFsmProjectDetailWorkspaceBase",
  "actor": "projectManager",
  "purpose": "Project manager reviews the full project detail, timeline, tasks, change orders, costs, and delay-risk insights.",

  "dataBindings": [
    {
      "id": "binding.projectDetailWorkspace.getProjectDetail",
      "source": "bff.getProjectDetail",
      "command": "getProjectDetail",
      "description": "View project detail and timeline",
      "stateKey": "ui.projectDetailWorkspace.data.getProjectDetail",
      "inputStateKeys": [
        "ui.projectDetailWorkspace.input.getProjectDetail.projectId"
      ]
    },
    {
      "id": "binding.projectDetailWorkspace.listWorkTasks",
      "source": "bff.listWorkTasks",
      "command": "listWorkTasks",
      "description": "Browse work tasks",
      "stateKey": "ui.projectDetailWorkspace.data.listWorkTasks",
      "inputStateKeys": [
        "ui.projectDetailWorkspace.input.listWorkTasks.projectId",
        "ui.projectDetailWorkspace.input.listWorkTasks.status",
        "ui.projectDetailWorkspace.input.listWorkTasks.assignedWorkerId",
        "ui.projectDetailWorkspace.input.listWorkTasks.page",
        "ui.projectDetailWorkspace.input.listWorkTasks.pageSize"
      ]
    },
    {
      "id": "binding.projectDetailWorkspace.listChangeOrders",
      "source": "bff.listChangeOrders",
      "command": "listChangeOrders",
      "description": "Browse change orders",
      "stateKey": "ui.projectDetailWorkspace.data.listChangeOrders",
      "inputStateKeys": [
        "ui.projectDetailWorkspace.input.listChangeOrders.projectId",
        "ui.projectDetailWorkspace.input.listChangeOrders.status",
        "ui.projectDetailWorkspace.input.listChangeOrders.impactType",
        "ui.projectDetailWorkspace.input.listChangeOrders.page",
        "ui.projectDetailWorkspace.input.listChangeOrders.pageSize"
      ]
    },
    {
      "id": "binding.projectDetailWorkspace.getChangeOrderDetail",
      "source": "bff.getChangeOrderDetail",
      "command": "getChangeOrderDetail",
      "description": "View change order and cost impact",
      "stateKey": "ui.projectDetailWorkspace.data.getChangeOrderDetail",
      "inputStateKeys": [
        "ui.projectDetailWorkspace.input.getChangeOrderDetail.changeOrderId"
      ]
    },
    {
      "id": "binding.projectDetailWorkspace.listTimeLogs",
      "source": "bff.listTimeLogs",
      "command": "listTimeLogs",
      "description": "Browse time logs",
      "stateKey": "ui.projectDetailWorkspace.data.listTimeLogs",
      "inputStateKeys": [
        "ui.projectDetailWorkspace.input.listTimeLogs.workTaskId",
        "ui.projectDetailWorkspace.input.listTimeLogs.workerName",
        "ui.projectDetailWorkspace.input.listTimeLogs.logDate",
        "ui.projectDetailWorkspace.input.listTimeLogs.status",
        "ui.projectDetailWorkspace.input.listTimeLogs.page",
        "ui.projectDetailWorkspace.input.listTimeLogs.pageSize"
      ]
    },
    {
      "id": "binding.projectDetailWorkspace.listMaterialUsages",
      "source": "bff.listMaterialUsages",
      "command": "listMaterialUsages",
      "description": "Browse material usage",
      "stateKey": "ui.projectDetailWorkspace.data.listMaterialUsages",
      "inputStateKeys": [
        "ui.projectDetailWorkspace.input.listMaterialUsages.projectId",
        "ui.projectDetailWorkspace.input.listMaterialUsages.status",
        "ui.projectDetailWorkspace.input.listMaterialUsages.page",
        "ui.projectDetailWorkspace.input.listMaterialUsages.pageSize"
      ]
    },
    {
      "id": "binding.projectDetailWorkspace.triggerDelayRiskSuggestions",
      "source": "bff.triggerDelayRiskSuggestions",
      "command": "triggerDelayRiskSuggestions",
      "description": "Generate delay-risk suggestions",
      "stateKey": "ui.projectDetailWorkspace.output.triggerDelayRiskSuggestions",
      "inputStateKeys": [
        "ui.projectDetailWorkspace.input.triggerDelayRiskSuggestions.statusReportId"
      ]
    },
    {
      "id": "binding.projectDetailWorkspace.listDelayRiskSuggestions",
      "source": "bff.listDelayRiskSuggestions",
      "command": "listDelayRiskSuggestions",
      "description": "Review delay-risk suggestions",
      "stateKey": "ui.projectDetailWorkspace.data.listDelayRiskSuggestions",
      "inputStateKeys": [
        "ui.projectDetailWorkspace.input.listDelayRiskSuggestions.statusReportId",
        "ui.projectDetailWorkspace.input.listDelayRiskSuggestions.acknowledged"
      ]
    }
  ]
};

export const pipeline = [
  {
    "id": "projectDetailWorkspace__page31__l2_page",
    "type": "l2_page",
    "outputPath": "_102045_/l2/buildFlowFsm/web/desktop/page31/projectDetailWorkspace.ts",
    "defPath": "_102045_/l2/buildFlowFsm/web/desktop/page31/projectDetailWorkspace.defs.ts",
    "dependsFiles": [
      "_102045_/l2/buildFlowFsm/web/shared/projectDetailWorkspace.ts",
      "_102045_/l2/designSystem.ts"
    ],
    "dependsOn": [
      "projectDetailWorkspace__l2_shared"
    ],
    "skills": [
      "_102020_/l2/agentChangeFrontend/skills/genCfePage21RenderTs.ts",
      "_102020_/l4/collabux/templates/entityRecordManagement/page31.md"
    ],
    "visualStyle": {
      "description": "Desktop-first for PM and billing staff with mobile-optimized field entry; dashboard-driven, status-aware, touch-friendly UI with Gantt-ish timeline views."
    },
    "agent": "agentCfeMaterializeGen"
  }
] as const;
