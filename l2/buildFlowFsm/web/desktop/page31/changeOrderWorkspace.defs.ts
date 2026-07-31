/// <mls fileReference="_102045_/l2/buildFlowFsm/web/desktop/page31/changeOrderWorkspace.defs.ts" enhancement="_blank"/>

// TESTE (31/jul): defs REDUZIDO + skill de experiência no pipeline.
// A UX desta página vem inteira do skill `entityRecordManagement/page31.md`; este defs carrega só o
// contrato: identidade + amarração. Comparar com page21/changeOrderWorkspace.defs.ts (defs completo + page21.md).

export const definition = {
  "pageId": "changeOrderWorkspace",
  "pageName": "Change Orders",
  "baseClassName": "BuildFlowFsmChangeOrderWorkspaceBase",
  "actor": "projectManager",
  "purpose": "Project manager documents, edits, and approves change orders, applying cost impact to the job.",

  "dataBindings": [
    {
      "id": "binding.changeOrderWorkspace.cmdCreateChangeOrder",
      "source": "bff.cmdCreateChangeOrder",
      "command": "cmdCreateChangeOrder",
      "description": "Create change order",
      "stateKey": "ui.changeOrderWorkspace.output.cmdCreateChangeOrder",
      "inputStateKeys": [
        "ui.changeOrderWorkspace.input.cmdCreateChangeOrder.projectId",
        "ui.changeOrderWorkspace.input.cmdCreateChangeOrder.title",
        "ui.changeOrderWorkspace.input.cmdCreateChangeOrder.description",
        "ui.changeOrderWorkspace.input.cmdCreateChangeOrder.impactType",
        "ui.changeOrderWorkspace.input.cmdCreateChangeOrder.costAdjustment",
        "ui.changeOrderWorkspace.input.cmdCreateChangeOrder.scheduleAdjustmentDays"
      ]
    },
    {
      "id": "binding.changeOrderWorkspace.cmdUpdateChangeOrder",
      "source": "bff.cmdUpdateChangeOrder",
      "command": "cmdUpdateChangeOrder",
      "description": "Update change order details",
      "stateKey": "ui.changeOrderWorkspace.output.cmdUpdateChangeOrder",
      "inputStateKeys": [
        "ui.changeOrderWorkspace.input.cmdUpdateChangeOrder.changeOrderId",
        "ui.changeOrderWorkspace.input.cmdUpdateChangeOrder.title",
        "ui.changeOrderWorkspace.input.cmdUpdateChangeOrder.description",
        "ui.changeOrderWorkspace.input.cmdUpdateChangeOrder.impactType",
        "ui.changeOrderWorkspace.input.cmdUpdateChangeOrder.costAdjustment",
        "ui.changeOrderWorkspace.input.cmdUpdateChangeOrder.scheduleAdjustmentDays"
      ]
    },
    {
      "id": "binding.changeOrderWorkspace.cmdUpdateChangeOrderStatus",
      "source": "bff.cmdUpdateChangeOrderStatus",
      "command": "cmdUpdateChangeOrderStatus",
      "description": "Update change order status",
      "stateKey": "ui.changeOrderWorkspace.output.cmdUpdateChangeOrderStatus",
      "inputStateKeys": [
        "ui.changeOrderWorkspace.input.cmdUpdateChangeOrderStatus.changeOrderId",
        "ui.changeOrderWorkspace.input.cmdUpdateChangeOrderStatus.status",
        "ui.changeOrderWorkspace.input.cmdUpdateChangeOrderStatus.rejectionReason"
      ]
    }
  ]
};

export const pipeline = [
  {
    "id": "changeOrderWorkspace__page31__l2_page",
    "type": "l2_page",
    "outputPath": "_102045_/l2/buildFlowFsm/web/desktop/page31/changeOrderWorkspace.ts",
    "defPath": "_102045_/l2/buildFlowFsm/web/desktop/page31/changeOrderWorkspace.defs.ts",
    "dependsFiles": [
      "_102045_/l2/buildFlowFsm/web/shared/changeOrderWorkspace.ts",
      "_102045_/l2/designSystem.ts"
    ],
    "dependsOn": [
      "changeOrderWorkspace__l2_shared"
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
