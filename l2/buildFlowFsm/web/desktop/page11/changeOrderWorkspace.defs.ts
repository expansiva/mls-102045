/// <mls fileReference="_102045_/l2/buildFlowFsm/web/desktop/page11/changeOrderWorkspace.defs.ts" enhancement="_blank"/>

export const definition = {
  "pageId": "changeOrderWorkspace",
  "pageName": "Change Orders",
  "baseClassName": "BuildFlowFsmChangeOrderWorkspaceBase",
  "actor": "projectManager",
  "purpose": "Project manager documents, edits, and approves change orders, applying cost impact to the job.",
  "presentation": {
    "categoryRef": "entityRecordManagement"
  },
  "dataBindings": [
    {
      "id": "binding.changeOrderWorkspace.cmdCreateChangeOrder",
      "source": "bff.cmdCreateChangeOrder",
      "command": "cmdCreateChangeOrder",
      "description": "Create change order",
      "kind": "command",
      "stateKey": "ui.changeOrderWorkspace.output.cmdCreateChangeOrder",
      "inputStateKeys": [
        "ui.changeOrderWorkspace.input.cmdCreateChangeOrder.projectId",
        "ui.changeOrderWorkspace.input.cmdCreateChangeOrder.title",
        "ui.changeOrderWorkspace.input.cmdCreateChangeOrder.description",
        "ui.changeOrderWorkspace.input.cmdCreateChangeOrder.impactType",
        "ui.changeOrderWorkspace.input.cmdCreateChangeOrder.costAdjustment",
        "ui.changeOrderWorkspace.input.cmdCreateChangeOrder.scheduleAdjustmentDays"
      ],
      "inputs": [
        {
          "name": "projectId",
          "stateKey": "ui.changeOrderWorkspace.input.cmdCreateChangeOrder.projectId",
          "source": "selectedEntity",
          "required": true,
          "presentation": "selection"
        },
        {
          "name": "title",
          "stateKey": "ui.changeOrderWorkspace.input.cmdCreateChangeOrder.title",
          "source": "userInput",
          "required": true,
          "presentation": "form"
        },
        {
          "name": "description",
          "stateKey": "ui.changeOrderWorkspace.input.cmdCreateChangeOrder.description",
          "source": "userInput",
          "required": true,
          "presentation": "form"
        },
        {
          "name": "impactType",
          "stateKey": "ui.changeOrderWorkspace.input.cmdCreateChangeOrder.impactType",
          "source": "userInput",
          "required": true,
          "presentation": "form"
        },
        {
          "name": "costAdjustment",
          "stateKey": "ui.changeOrderWorkspace.input.cmdCreateChangeOrder.costAdjustment",
          "source": "userInput",
          "required": true,
          "presentation": "form"
        },
        {
          "name": "scheduleAdjustmentDays",
          "stateKey": "ui.changeOrderWorkspace.input.cmdCreateChangeOrder.scheduleAdjustmentDays",
          "source": "userInput",
          "required": false,
          "presentation": "form"
        }
      ]
    },
    {
      "id": "binding.changeOrderWorkspace.cmdUpdateChangeOrder",
      "source": "bff.cmdUpdateChangeOrder",
      "command": "cmdUpdateChangeOrder",
      "description": "Update change order details",
      "kind": "command",
      "stateKey": "ui.changeOrderWorkspace.output.cmdUpdateChangeOrder",
      "inputStateKeys": [
        "ui.changeOrderWorkspace.input.cmdUpdateChangeOrder.changeOrderId",
        "ui.changeOrderWorkspace.input.cmdUpdateChangeOrder.title",
        "ui.changeOrderWorkspace.input.cmdUpdateChangeOrder.description",
        "ui.changeOrderWorkspace.input.cmdUpdateChangeOrder.impactType",
        "ui.changeOrderWorkspace.input.cmdUpdateChangeOrder.costAdjustment",
        "ui.changeOrderWorkspace.input.cmdUpdateChangeOrder.scheduleAdjustmentDays"
      ],
      "inputs": [
        {
          "name": "changeOrderId",
          "stateKey": "ui.changeOrderWorkspace.input.cmdUpdateChangeOrder.changeOrderId",
          "source": "routeParam",
          "required": true,
          "presentation": "route"
        },
        {
          "name": "title",
          "stateKey": "ui.changeOrderWorkspace.input.cmdUpdateChangeOrder.title",
          "source": "userInput",
          "required": true,
          "presentation": "form"
        },
        {
          "name": "description",
          "stateKey": "ui.changeOrderWorkspace.input.cmdUpdateChangeOrder.description",
          "source": "userInput",
          "required": true,
          "presentation": "form"
        },
        {
          "name": "impactType",
          "stateKey": "ui.changeOrderWorkspace.input.cmdUpdateChangeOrder.impactType",
          "source": "userInput",
          "required": true,
          "presentation": "form"
        },
        {
          "name": "costAdjustment",
          "stateKey": "ui.changeOrderWorkspace.input.cmdUpdateChangeOrder.costAdjustment",
          "source": "userInput",
          "required": true,
          "presentation": "form"
        },
        {
          "name": "scheduleAdjustmentDays",
          "stateKey": "ui.changeOrderWorkspace.input.cmdUpdateChangeOrder.scheduleAdjustmentDays",
          "source": "userInput",
          "required": false,
          "presentation": "form"
        }
      ]
    },
    {
      "id": "binding.changeOrderWorkspace.cmdUpdateChangeOrderStatus",
      "source": "bff.cmdUpdateChangeOrderStatus",
      "command": "cmdUpdateChangeOrderStatus",
      "description": "Update change order status",
      "kind": "command",
      "stateKey": "ui.changeOrderWorkspace.output.cmdUpdateChangeOrderStatus",
      "inputStateKeys": [
        "ui.changeOrderWorkspace.input.cmdUpdateChangeOrderStatus.changeOrderId",
        "ui.changeOrderWorkspace.input.cmdUpdateChangeOrderStatus.status",
        "ui.changeOrderWorkspace.input.cmdUpdateChangeOrderStatus.rejectionReason"
      ],
      "inputs": [
        {
          "name": "changeOrderId",
          "stateKey": "ui.changeOrderWorkspace.input.cmdUpdateChangeOrderStatus.changeOrderId",
          "source": "routeParam",
          "required": true,
          "presentation": "route"
        },
        {
          "name": "status",
          "stateKey": "ui.changeOrderWorkspace.input.cmdUpdateChangeOrderStatus.status",
          "source": "userInput",
          "required": true,
          "presentation": "form"
        },
        {
          "name": "rejectionReason",
          "stateKey": "ui.changeOrderWorkspace.input.cmdUpdateChangeOrderStatus.rejectionReason",
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
    "id": "changeOrderWorkspace__l2_page",
    "type": "l2_page",
    "outputPath": "_102045_/l2/buildFlowFsm/web/desktop/page11/changeOrderWorkspace.ts",
    "defPath": "_102045_/l2/buildFlowFsm/web/desktop/page11/changeOrderWorkspace.defs.ts",
    "dependsFiles": [
      "_102045_/l2/buildFlowFsm/web/shared/changeOrderWorkspace.ts",
      "_102045_/l2/designSystem.ts"
    ],
    "dependsOn": [
      "changeOrderWorkspace__l2_shared"
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
