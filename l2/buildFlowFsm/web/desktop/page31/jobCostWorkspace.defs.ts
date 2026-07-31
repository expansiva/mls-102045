/// <mls fileReference="_102045_/l2/buildFlowFsm/web/desktop/page31/jobCostWorkspace.defs.ts" enhancement="_blank"/>

// TESTE (31/jul): defs REDUZIDO + skill de experiência no pipeline.
// A UX desta página vem inteira do skill `readOnlyDetailPortal/page31.md`; este defs carrega só o
// contrato: identidade + amarração. Comparar com page21/jobCostWorkspace.defs.ts (defs completo + page21.md).

export const definition = {
  "pageId": "jobCostWorkspace",
  "pageName": "Job Cost Summary",
  "baseClassName": "BuildFlowFsmJobCostWorkspaceBase",
  "actor": "billingStaff",
  "purpose": "Billing staff reviews accumulated job costs per project before preparing billing documents.",

  "dataBindings": [
    {
      "id": "binding.jobCostWorkspace.viewJobCostSummary",
      "source": "bff.viewJobCostSummary",
      "command": "viewJobCostSummary",
      "description": "View job cost summary",
      "stateKey": "ui.jobCostWorkspace.data.viewJobCostSummary",
      "inputStateKeys": [
        "ui.jobCostWorkspace.input.viewJobCostSummary.projectId"
      ]
    }
  ]
};

export const pipeline = [
  {
    "id": "jobCostWorkspace__page31__l2_page",
    "type": "l2_page",
    "outputPath": "_102045_/l2/buildFlowFsm/web/desktop/page31/jobCostWorkspace.ts",
    "defPath": "_102045_/l2/buildFlowFsm/web/desktop/page31/jobCostWorkspace.defs.ts",
    "dependsFiles": [
      "_102045_/l2/buildFlowFsm/web/shared/jobCostWorkspace.ts",
      "_102045_/l2/designSystem.ts"
    ],
    "dependsOn": [
      "jobCostWorkspace__l2_shared"
    ],
    "skills": [
      "_102020_/l2/agentChangeFrontend/skills/genCfePage21RenderTs.ts",
      "_102020_/l4/collabux/templates/readOnlyDetailPortal/page31.md"
    ],
    "visualStyle": {
      "description": "Desktop-first for PM and billing staff with mobile-optimized field entry; dashboard-driven, status-aware, touch-friendly UI with Gantt-ish timeline views."
    },
    "agent": "agentCfeMaterializeGen"
  }
] as const;
