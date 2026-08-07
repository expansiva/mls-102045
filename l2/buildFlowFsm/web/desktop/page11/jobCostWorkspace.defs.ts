/// <mls fileReference="_102045_/l2/buildFlowFsm/web/desktop/page11/jobCostWorkspace.defs.ts" enhancement="_blank"/>

export const definition = {
  "pageId": "jobCostWorkspace",
  "pageName": "Job Cost Summary",
  "baseClassName": "BuildFlowFsmJobCostWorkspaceBase",
  "actor": "billingStaff",
  "purpose": "Billing staff reviews accumulated job costs per project before preparing billing documents.",
  "presentation": {
    "categoryRef": "readOnlyDetailPortal"
  },
  "dataBindings": [
    {
      "id": "binding.jobCostWorkspace.viewJobCostSummary",
      "source": "bff.viewJobCostSummary",
      "command": "viewJobCostSummary",
      "description": "View job cost summary",
      "kind": "query",
      "stateKey": "ui.jobCostWorkspace.data.viewJobCostSummary",
      "inputStateKeys": [
        "ui.jobCostWorkspace.input.viewJobCostSummary.projectId"
      ],
      "inputs": [
        {
          "name": "projectId",
          "stateKey": "ui.jobCostWorkspace.input.viewJobCostSummary.projectId",
          "source": "routeParam",
          "required": true,
          "presentation": "route"
        }
      ]
    }
  ]
};

export const pipeline = [
  {
    "id": "jobCostWorkspace__l2_page",
    "type": "l2_page",
    "outputPath": "_102045_/l2/buildFlowFsm/web/desktop/page11/jobCostWorkspace.ts",
    "defPath": "_102045_/l2/buildFlowFsm/web/desktop/page11/jobCostWorkspace.defs.ts",
    "dependsFiles": [
      "_102045_/l2/buildFlowFsm/web/shared/jobCostWorkspace.ts",
      "_102045_/l2/designSystem.ts"
    ],
    "dependsOn": [
      "jobCostWorkspace__l2_shared"
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
