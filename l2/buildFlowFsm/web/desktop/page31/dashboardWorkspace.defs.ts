/// <mls fileReference="_102045_/l2/buildFlowFsm/web/desktop/page31/dashboardWorkspace.defs.ts" enhancement="_blank"/>

// TESTE (31/jul): defs REDUZIDO + skill de experiência no pipeline.
// A UX desta página vem inteira do skill `analyticalList/page31.md`; este defs carrega só o
// contrato: identidade + amarração. Comparar com page21/dashboardWorkspace.defs.ts (defs completo + page21.md).

export const definition = {
  "pageId": "dashboardWorkspace",
  "pageName": "Operational Dashboard",
  "baseClassName": "BuildFlowFsmDashboardWorkspaceBase",
  "actor": "projectManager",
  "purpose": "Project manager gets a quick overview of all active projects, budget drift, and task urgency.",

  "dataBindings": [
    {
      "id": "binding.dashboardWorkspace.getDashboardSummary",
      "source": "bff.getDashboardSummary",
      "command": "getDashboardSummary",
      "description": "View operational dashboard",
      "stateKey": "ui.dashboardWorkspace.data.getDashboardSummary",
      "inputStateKeys": [
        "ui.dashboardWorkspace.input.getDashboardSummary.status",
        "ui.dashboardWorkspace.input.getDashboardSummary.page",
        "ui.dashboardWorkspace.input.getDashboardSummary.pageSize"
      ]
    },
    {
      "id": "binding.dashboardWorkspace.getProjectList",
      "source": "bff.getProjectList",
      "command": "getProjectList",
      "description": "Browse projects",
      "stateKey": "ui.dashboardWorkspace.data.getProjectList",
      "inputStateKeys": [
        "ui.dashboardWorkspace.input.getProjectList.status",
        "ui.dashboardWorkspace.input.getProjectList.page",
        "ui.dashboardWorkspace.input.getProjectList.pageSize"
      ]
    }
  ]
};

export const pipeline = [
  {
    "id": "dashboardWorkspace__page31__l2_page",
    "type": "l2_page",
    "outputPath": "_102045_/l2/buildFlowFsm/web/desktop/page31/dashboardWorkspace.ts",
    "defPath": "_102045_/l2/buildFlowFsm/web/desktop/page31/dashboardWorkspace.defs.ts",
    "dependsFiles": [
      "_102045_/l2/buildFlowFsm/web/shared/dashboardWorkspace.ts",
      "_102045_/l2/designSystem.ts"
    ],
    "dependsOn": [
      "dashboardWorkspace__l2_shared"
    ],
    "skills": [
      "_102020_/l2/agentChangeFrontend/skills/genCfePage21RenderTs.ts",
      "_102020_/l4/collabux/templates/analyticalList/page31.md"
    ],
    "visualStyle": {
      "description": "Desktop-first for PM and billing staff with mobile-optimized field entry; dashboard-driven, status-aware, touch-friendly UI with Gantt-ish timeline views."
    },
    "agent": "agentCfeMaterializeGen"
  }
] as const;
