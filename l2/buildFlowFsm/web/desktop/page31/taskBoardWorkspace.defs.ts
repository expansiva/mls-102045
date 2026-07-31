/// <mls fileReference="_102045_/l2/buildFlowFsm/web/desktop/page31/taskBoardWorkspace.defs.ts" enhancement="_blank"/>

// TESTE (31/jul): defs REDUZIDO + skill de experiência no pipeline.
// A UX desta página vem inteira do skill `workPlanningBoard/page31.md`; este defs carrega só o
// contrato: identidade + amarração. Comparar com page21/taskBoardWorkspace.defs.ts (defs completo + page21.md).

export const definition = {
  "pageId": "taskBoardWorkspace",
  "pageName": "Task Board",
  "baseClassName": "BuildFlowFsmTaskBoardWorkspaceBase",
  "actor": "projectManager",
  "purpose": "Project manager creates and assigns work tasks; field workers update task status from the field.",

  "dataBindings": [
    {
      "id": "binding.taskBoardWorkspace.cmdCreateWorkTask",
      "source": "bff.cmdCreateWorkTask",
      "command": "cmdCreateWorkTask",
      "description": "Create work task",
      "stateKey": "ui.taskBoardWorkspace.output.cmdCreateWorkTask",
      "inputStateKeys": [
        "ui.taskBoardWorkspace.input.cmdCreateWorkTask.projectId",
        "ui.taskBoardWorkspace.input.cmdCreateWorkTask.title",
        "ui.taskBoardWorkspace.input.cmdCreateWorkTask.description",
        "ui.taskBoardWorkspace.input.cmdCreateWorkTask.assignedWorkerId",
        "ui.taskBoardWorkspace.input.cmdCreateWorkTask.dueDate"
      ]
    },
    {
      "id": "binding.taskBoardWorkspace.cmdUpdateWorkTask",
      "source": "bff.cmdUpdateWorkTask",
      "command": "cmdUpdateWorkTask",
      "description": "Update work task assignment and details",
      "stateKey": "ui.taskBoardWorkspace.output.cmdUpdateWorkTask",
      "inputStateKeys": [
        "ui.taskBoardWorkspace.input.cmdUpdateWorkTask.workTaskId",
        "ui.taskBoardWorkspace.input.cmdUpdateWorkTask.title",
        "ui.taskBoardWorkspace.input.cmdUpdateWorkTask.description",
        "ui.taskBoardWorkspace.input.cmdUpdateWorkTask.assignedWorkerId",
        "ui.taskBoardWorkspace.input.cmdUpdateWorkTask.dueDate",
        "ui.taskBoardWorkspace.input.cmdUpdateWorkTask.status",
        "ui.taskBoardWorkspace.input.cmdUpdateWorkTask.cancellationReason"
      ]
    },
    {
      "id": "binding.taskBoardWorkspace.cmdUpdateWorkTaskStatus",
      "source": "bff.cmdUpdateWorkTaskStatus",
      "command": "cmdUpdateWorkTaskStatus",
      "description": "Update work task status",
      "stateKey": "ui.taskBoardWorkspace.output.cmdUpdateWorkTaskStatus",
      "inputStateKeys": [
        "ui.taskBoardWorkspace.input.cmdUpdateWorkTaskStatus.workTaskId",
        "ui.taskBoardWorkspace.input.cmdUpdateWorkTaskStatus.status",
        "ui.taskBoardWorkspace.input.cmdUpdateWorkTaskStatus.cancellationReason",
        "ui.taskBoardWorkspace.input.cmdUpdateWorkTaskStatus.completedAt",
        "ui.taskBoardWorkspace.input.cmdUpdateWorkTaskStatus.actorId"
      ]
    }
  ]
};

export const pipeline = [
  {
    "id": "taskBoardWorkspace__page31__l2_page",
    "type": "l2_page",
    "outputPath": "_102045_/l2/buildFlowFsm/web/desktop/page31/taskBoardWorkspace.ts",
    "defPath": "_102045_/l2/buildFlowFsm/web/desktop/page31/taskBoardWorkspace.defs.ts",
    "dependsFiles": [
      "_102045_/l2/buildFlowFsm/web/shared/taskBoardWorkspace.ts",
      "_102045_/l2/designSystem.ts"
    ],
    "dependsOn": [
      "taskBoardWorkspace__l2_shared"
    ],
    "skills": [
      "_102020_/l2/agentChangeFrontend/skills/genCfePage21RenderTs.ts",
      "_102020_/l4/collabux/templates/workPlanningBoard/page31.md"
    ],
    "visualStyle": {
      "description": "Desktop-first for PM and billing staff with mobile-optimized field entry; dashboard-driven, status-aware, touch-friendly UI with Gantt-ish timeline views."
    },
    "agent": "agentCfeMaterializeGen"
  }
] as const;
