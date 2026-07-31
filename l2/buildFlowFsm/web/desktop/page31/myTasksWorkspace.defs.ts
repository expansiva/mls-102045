/// <mls fileReference="_102045_/l2/buildFlowFsm/web/desktop/page31/myTasksWorkspace.defs.ts" enhancement="_blank"/>

// TESTE (31/jul): defs REDUZIDO + skill de experiência no pipeline.
// A UX desta página vem inteira do skill `operationsQueue/page31.md`; este defs carrega só o
// contrato: identidade + amarração. Comparar com page21/myTasksWorkspace.defs.ts (defs completo + page21.md).

export const definition = {
  "pageId": "myTasksWorkspace",
  "pageName": "My Tasks",
  "baseClassName": "BuildFlowFsmMyTasksWorkspaceBase",
  "actor": "fieldWorker",
  "purpose": "Field worker browses and reviews their assigned tasks for the day.",

  "dataBindings": [
    {
      "id": "binding.myTasksWorkspace.listMyWorkTasks",
      "source": "bff.listMyWorkTasks",
      "command": "listMyWorkTasks",
      "description": "Browse my assigned tasks",
      "stateKey": "ui.myTasksWorkspace.data.listMyWorkTasks",
      "inputStateKeys": [
        "ui.myTasksWorkspace.input.listMyWorkTasks.assignedWorkerId",
        "ui.myTasksWorkspace.input.listMyWorkTasks.status",
        "ui.myTasksWorkspace.input.listMyWorkTasks.page",
        "ui.myTasksWorkspace.input.listMyWorkTasks.pageSize"
      ]
    },
    {
      "id": "binding.myTasksWorkspace.getWorkTaskDetail",
      "source": "bff.getWorkTaskDetail",
      "command": "getWorkTaskDetail",
      "description": "View work task details",
      "stateKey": "ui.myTasksWorkspace.data.getWorkTaskDetail",
      "inputStateKeys": [
        "ui.myTasksWorkspace.input.getWorkTaskDetail.workTaskId",
        "ui.myTasksWorkspace.input.getWorkTaskDetail.actorId"
      ]
    }
  ]
};

export const pipeline = [
  {
    "id": "myTasksWorkspace__page31__l2_page",
    "type": "l2_page",
    "outputPath": "_102045_/l2/buildFlowFsm/web/desktop/page31/myTasksWorkspace.ts",
    "defPath": "_102045_/l2/buildFlowFsm/web/desktop/page31/myTasksWorkspace.defs.ts",
    "dependsFiles": [
      "_102045_/l2/buildFlowFsm/web/shared/myTasksWorkspace.ts",
      "_102045_/l2/designSystem.ts"
    ],
    "dependsOn": [
      "myTasksWorkspace__l2_shared"
    ],
    "skills": [
      "_102020_/l2/agentChangeFrontend/skills/genCfePage21RenderTs.ts",
      "_102020_/l4/collabux/templates/operationsQueue/page31.md"
    ],
    "visualStyle": {
      "description": "Desktop-first for PM and billing staff with mobile-optimized field entry; dashboard-driven, status-aware, touch-friendly UI with Gantt-ish timeline views."
    },
    "agent": "agentCfeMaterializeGen"
  }
] as const;
