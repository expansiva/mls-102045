/// <mls fileReference="_102045_/l2/buildFlowFsm/web/desktop/page11/clientStatusWorkspace.defs.ts" enhancement="_blank"/>

export const definition = {
  "pageId": "clientStatusWorkspace",
  "pageName": "Project Status",
  "baseClassName": "BuildFlowFsmClientStatusWorkspaceBase",
  "actor": "client",
  "purpose": "Client reviews the shared project status report to stay informed on progress and budget.",
  "presentation": {
    "categoryRef": "readOnlyDetailPortal"
  },
  "dataBindings": [
    {
      "id": "binding.clientStatusWorkspace.viewStatusReport",
      "source": "bff.viewStatusReport",
      "command": "viewStatusReport",
      "description": "View status report",
      "kind": "query",
      "stateKey": "ui.clientStatusWorkspace.data.viewStatusReport",
      "inputStateKeys": [
        "ui.clientStatusWorkspace.input.viewStatusReport.statusReportId",
        "ui.clientStatusWorkspace.input.viewStatusReport.clientId"
      ],
      "inputs": [
        {
          "name": "statusReportId",
          "stateKey": "ui.clientStatusWorkspace.input.viewStatusReport.statusReportId",
          "source": "routeParam",
          "required": true,
          "presentation": "route"
        },
        {
          "name": "clientId",
          "stateKey": "ui.clientStatusWorkspace.input.viewStatusReport.clientId",
          "source": "actorSession",
          "required": true,
          "presentation": "form"
        }
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
