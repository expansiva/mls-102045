/// <mls fileReference="_102045_/l2/buildFlowFsm/web/desktop/page31/projectLifecycleWorkspace.defs.ts" enhancement="_blank"/>

// TESTE (31/jul): defs REDUZIDO + skill de experiência no pipeline.
// A UX desta página vem inteira do skill `entityRecordManagement/page31.md`; este defs carrega só o
// contrato: identidade + amarração. Comparar com page21/projectLifecycleWorkspace.defs.ts (defs completo + page21.md).

export const definition = {
  "pageId": "projectLifecycleWorkspace",
  "pageName": "Manage Projects",
  "baseClassName": "BuildFlowFsmProjectLifecycleWorkspaceBase",
  "actor": "projectManager",
  "purpose": "Project manager creates and maintains projects through their full lifecycle.",

  "dataBindings": [
    {
      "id": "binding.projectLifecycleWorkspace.createProjectCmd",
      "source": "bff.createProjectCmd",
      "command": "createProjectCmd",
      "description": "Create project",
      "stateKey": "ui.projectLifecycleWorkspace.output.createProjectCmd",
      "inputStateKeys": [
        "ui.projectLifecycleWorkspace.input.createProjectCmd.name",
        "ui.projectLifecycleWorkspace.input.createProjectCmd.clientId",
        "ui.projectLifecycleWorkspace.input.createProjectCmd.siteAddress",
        "ui.projectLifecycleWorkspace.input.createProjectCmd.budget",
        "ui.projectLifecycleWorkspace.input.createProjectCmd.startDate",
        "ui.projectLifecycleWorkspace.input.createProjectCmd.endDate"
      ]
    },
    {
      "id": "binding.projectLifecycleWorkspace.updateProjectCmd",
      "source": "bff.updateProjectCmd",
      "command": "updateProjectCmd",
      "description": "Update project details",
      "stateKey": "ui.projectLifecycleWorkspace.output.updateProjectCmd",
      "inputStateKeys": [
        "ui.projectLifecycleWorkspace.input.updateProjectCmd.projectId",
        "ui.projectLifecycleWorkspace.input.updateProjectCmd.name",
        "ui.projectLifecycleWorkspace.input.updateProjectCmd.clientId",
        "ui.projectLifecycleWorkspace.input.updateProjectCmd.siteAddress",
        "ui.projectLifecycleWorkspace.input.updateProjectCmd.budget",
        "ui.projectLifecycleWorkspace.input.updateProjectCmd.startDate",
        "ui.projectLifecycleWorkspace.input.updateProjectCmd.endDate"
      ]
    },
    {
      "id": "binding.projectLifecycleWorkspace.updateProjectStatusCmd",
      "source": "bff.updateProjectStatusCmd",
      "command": "updateProjectStatusCmd",
      "description": "Update project status",
      "stateKey": "ui.projectLifecycleWorkspace.output.updateProjectStatusCmd",
      "inputStateKeys": [
        "ui.projectLifecycleWorkspace.input.updateProjectStatusCmd.projectId",
        "ui.projectLifecycleWorkspace.input.updateProjectStatusCmd.status",
        "ui.projectLifecycleWorkspace.input.updateProjectStatusCmd.holdReason",
        "ui.projectLifecycleWorkspace.input.updateProjectStatusCmd.cancellationReason"
      ]
    }
  ]
};

export const pipeline = [
  {
    "id": "projectLifecycleWorkspace__page31__l2_page",
    "type": "l2_page",
    "outputPath": "_102045_/l2/buildFlowFsm/web/desktop/page31/projectLifecycleWorkspace.ts",
    "defPath": "_102045_/l2/buildFlowFsm/web/desktop/page31/projectLifecycleWorkspace.defs.ts",
    "dependsFiles": [
      "_102045_/l2/buildFlowFsm/web/shared/projectLifecycleWorkspace.ts",
      "_102045_/l2/designSystem.ts"
    ],
    "dependsOn": [
      "projectLifecycleWorkspace__l2_shared"
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
