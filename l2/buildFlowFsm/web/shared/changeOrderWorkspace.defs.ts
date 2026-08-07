/// <mls fileReference="_102045_/l2/buildFlowFsm/web/shared/changeOrderWorkspace.defs.ts" enhancement="_blank"/>

export const definition = {
  "pageId": "changeOrderWorkspace",
  "pageName": "Change Orders",
  "moduleName": "buildFlowFsm",
  "baseClassName": "BuildFlowFsmChangeOrderWorkspaceBase",
  "routePattern": "/buildFlowFsm/changeOrderWorkspace/:changeOrderId?",
  "sourceKind": "workflow",
  "ownerIds": [
    "workflow:changeOrderLifecycle",
    "operation:createChangeOrder",
    "operation:updateChangeOrder",
    "operation:updateChangeOrderStatus"
  ],
  "operationIds": [
    "createChangeOrder",
    "updateChangeOrder",
    "updateChangeOrderStatus"
  ],
  "origin": {
    "source": "l4-journey",
    "workspaceId": "changeOrderWorkspace",
    "workspaceKind": "workflow",
    "workflowId": "changeOrderLifecycle",
    "actor": "projectManager",
    "entity": "ChangeOrder",
    "owners": [
      {
        "kind": "workflow",
        "id": "changeOrderLifecycle",
        "defPath": "_102045_/l4/buildFlowFsm/workflows/changeOrderLifecycle.defs.ts"
      },
      {
        "kind": "operation",
        "id": "createChangeOrder",
        "defPath": "_102045_/l4/buildFlowFsm/operations/createChangeOrder.defs.ts"
      },
      {
        "kind": "operation",
        "id": "updateChangeOrder",
        "defPath": "_102045_/l4/buildFlowFsm/operations/updateChangeOrder.defs.ts"
      },
      {
        "kind": "operation",
        "id": "updateChangeOrderStatus",
        "defPath": "_102045_/l4/buildFlowFsm/operations/updateChangeOrderStatus.defs.ts"
      }
    ],
    "microUserFlow": {
      "source": "l4/story.steps",
      "workflowSteps": [
        "The project manager creates a change order describing the scope, cost, or schedule adjustment on an active project.",
        "The project manager reviews how the change order affects the project budget before deciding.",
        "The project manager moves the change order to pending review and then approves it so the adjusted cost flows into job costing.",
        "If the change is not warranted, the project manager rejects it with a recorded reason."
      ],
      "operations": [
        {
          "operationId": "createChangeOrder",
          "commandName": "createChangeOrder",
          "steps": [
            "Open the active project context",
            "Enter the change order title, description, impact type, cost adjustment, and optional schedule adjustment",
            "Confirm creation so the change is recorded in draft status"
          ]
        },
        {
          "operationId": "updateChangeOrder",
          "commandName": "updateChangeOrder",
          "steps": [
            "Open the change order that needs correction",
            "Edit the title, description, impact type, cost adjustment, and optional schedule adjustment days",
            "Save the updated change order while it remains editable"
          ]
        },
        {
          "operationId": "updateChangeOrderStatus",
          "commandName": "updateChangeOrderStatus",
          "steps": [
            "Open the change order pending review",
            "Review the documented scope, cost, and schedule impact against the project budget",
            "Set the new status to approved or rejected",
            "When rejecting, provide a rejection reason",
            "Confirm the status update"
          ]
        }
      ]
    }
  },
  "contractRef": {
    "tsPath": "_102045_/l2/buildFlowFsm/web/contracts/changeOrderWorkspace.ts",
    "contracts": [
      {
        "commandName": "cmdCreateChangeOrder",
        "routeConst": "cmdCreateChangeOrderRoute"
      },
      {
        "commandName": "cmdUpdateChangeOrder",
        "routeConst": "cmdUpdateChangeOrderRoute"
      },
      {
        "commandName": "cmdUpdateChangeOrderStatus",
        "routeConst": "cmdUpdateChangeOrderStatusRoute"
      }
    ]
  },
  "layoutRef": {
    "defPath": "_102045_/l2/buildFlowFsm/web/desktop/page11/changeOrderWorkspace.defs.ts",
    "layoutId": "cfe-20260731185234.1000"
  },
  "states": [
    {
      "stateKey": "ui.changeOrderWorkspace.status",
      "name": "status",
      "kind": "pageStatus",
      "defaultValue": ""
    },
    {
      "stateKey": "ui.changeOrderWorkspace.action.cmdCreateChangeOrder.status",
      "name": "cmdCreateChangeOrderState",
      "kind": "actionStatus",
      "actionRef": "cmdCreateChangeOrder",
      "valueSet": [
        "idle",
        "loading",
        "success",
        "error"
      ],
      "defaultValue": "idle"
    },
    {
      "stateKey": "ui.changeOrderWorkspace.input.cmdCreateChangeOrder.projectId",
      "name": "cmdCreateChangeOrderProjectId",
      "kind": "input",
      "source": "selectedEntity",
      "presentation": "selection",
      "contractRef": {
        "commandName": "cmdCreateChangeOrder",
        "direction": "input",
        "field": "projectId"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.changeOrderWorkspace.input.cmdCreateChangeOrder.title",
      "name": "cmdCreateChangeOrderTitle",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "cmdCreateChangeOrder",
        "direction": "input",
        "field": "title"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.changeOrderWorkspace.input.cmdCreateChangeOrder.description",
      "name": "cmdCreateChangeOrderDescription",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "cmdCreateChangeOrder",
        "direction": "input",
        "field": "description"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.changeOrderWorkspace.input.cmdCreateChangeOrder.impactType",
      "name": "cmdCreateChangeOrderImpactType",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "cmdCreateChangeOrder",
        "direction": "input",
        "field": "impactType"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.changeOrderWorkspace.input.cmdCreateChangeOrder.costAdjustment",
      "name": "cmdCreateChangeOrderCostAdjustment",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "cmdCreateChangeOrder",
        "direction": "input",
        "field": "costAdjustment"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.changeOrderWorkspace.input.cmdCreateChangeOrder.scheduleAdjustmentDays",
      "name": "cmdCreateChangeOrderScheduleAdjustmentDays",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "cmdCreateChangeOrder",
        "direction": "input",
        "field": "scheduleAdjustmentDays"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.changeOrderWorkspace.output.cmdCreateChangeOrder",
      "name": "cmdCreateChangeOrderOutput",
      "kind": "commandOutput",
      "contractRef": {
        "commandName": "cmdCreateChangeOrder",
        "direction": "output"
      },
      "defaultValue": null
    },
    {
      "stateKey": "ui.changeOrderWorkspace.action.cmdCreateChangeOrder.error",
      "name": "cmdCreateChangeOrderError",
      "kind": "actionError",
      "actionRef": "cmdCreateChangeOrder",
      "defaultValue": ""
    },
    {
      "stateKey": "ui.changeOrderWorkspace.action.cmdUpdateChangeOrder.status",
      "name": "cmdUpdateChangeOrderState",
      "kind": "actionStatus",
      "actionRef": "cmdUpdateChangeOrder",
      "valueSet": [
        "idle",
        "loading",
        "success",
        "error"
      ],
      "defaultValue": "idle"
    },
    {
      "stateKey": "ui.changeOrderWorkspace.input.cmdUpdateChangeOrder.changeOrderId",
      "name": "cmdUpdateChangeOrderChangeOrderId",
      "kind": "input",
      "source": "routeParam",
      "presentation": "route",
      "contractRef": {
        "commandName": "cmdUpdateChangeOrder",
        "direction": "input",
        "field": "changeOrderId"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.changeOrderWorkspace.input.cmdUpdateChangeOrder.title",
      "name": "cmdUpdateChangeOrderTitle",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "cmdUpdateChangeOrder",
        "direction": "input",
        "field": "title"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.changeOrderWorkspace.input.cmdUpdateChangeOrder.description",
      "name": "cmdUpdateChangeOrderDescription",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "cmdUpdateChangeOrder",
        "direction": "input",
        "field": "description"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.changeOrderWorkspace.input.cmdUpdateChangeOrder.impactType",
      "name": "cmdUpdateChangeOrderImpactType",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "cmdUpdateChangeOrder",
        "direction": "input",
        "field": "impactType"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.changeOrderWorkspace.input.cmdUpdateChangeOrder.costAdjustment",
      "name": "cmdUpdateChangeOrderCostAdjustment",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "cmdUpdateChangeOrder",
        "direction": "input",
        "field": "costAdjustment"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.changeOrderWorkspace.input.cmdUpdateChangeOrder.scheduleAdjustmentDays",
      "name": "cmdUpdateChangeOrderScheduleAdjustmentDays",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "cmdUpdateChangeOrder",
        "direction": "input",
        "field": "scheduleAdjustmentDays"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.changeOrderWorkspace.output.cmdUpdateChangeOrder",
      "name": "cmdUpdateChangeOrderOutput",
      "kind": "commandOutput",
      "contractRef": {
        "commandName": "cmdUpdateChangeOrder",
        "direction": "output"
      },
      "defaultValue": null
    },
    {
      "stateKey": "ui.changeOrderWorkspace.action.cmdUpdateChangeOrder.error",
      "name": "cmdUpdateChangeOrderError",
      "kind": "actionError",
      "actionRef": "cmdUpdateChangeOrder",
      "defaultValue": ""
    },
    {
      "stateKey": "ui.changeOrderWorkspace.action.cmdUpdateChangeOrderStatus.status",
      "name": "cmdUpdateChangeOrderStatusState",
      "kind": "actionStatus",
      "actionRef": "cmdUpdateChangeOrderStatus",
      "valueSet": [
        "idle",
        "loading",
        "success",
        "error"
      ],
      "defaultValue": "idle"
    },
    {
      "stateKey": "ui.changeOrderWorkspace.input.cmdUpdateChangeOrderStatus.changeOrderId",
      "name": "cmdUpdateChangeOrderStatusChangeOrderId",
      "kind": "input",
      "source": "routeParam",
      "presentation": "route",
      "contractRef": {
        "commandName": "cmdUpdateChangeOrderStatus",
        "direction": "input",
        "field": "changeOrderId"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.changeOrderWorkspace.input.cmdUpdateChangeOrderStatus.status",
      "name": "cmdUpdateChangeOrderStatusStatus",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "cmdUpdateChangeOrderStatus",
        "direction": "input",
        "field": "status"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.changeOrderWorkspace.input.cmdUpdateChangeOrderStatus.rejectionReason",
      "name": "cmdUpdateChangeOrderStatusRejectionReason",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "cmdUpdateChangeOrderStatus",
        "direction": "input",
        "field": "rejectionReason"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.changeOrderWorkspace.output.cmdUpdateChangeOrderStatus",
      "name": "cmdUpdateChangeOrderStatusOutput",
      "kind": "commandOutput",
      "contractRef": {
        "commandName": "cmdUpdateChangeOrderStatus",
        "direction": "output"
      },
      "defaultValue": null
    },
    {
      "stateKey": "ui.changeOrderWorkspace.action.cmdUpdateChangeOrderStatus.error",
      "name": "cmdUpdateChangeOrderStatusError",
      "kind": "actionError",
      "actionRef": "cmdUpdateChangeOrderStatus",
      "defaultValue": ""
    }
  ],
  "actions": [
    {
      "actionId": "cmdCreateChangeOrder",
      "kind": "command",
      "commandRef": "cmdCreateChangeOrder",
      "routeKey": "buildFlowFsm.changeOrderWorkspace.cmdCreateChangeOrder",
      "purpose": "Create change order",
      "methodName": "cmdCreateChangeOrder",
      "handlerName": "handleCmdCreateChangeOrderClick",
      "inputStateKeys": [
        "ui.changeOrderWorkspace.input.cmdCreateChangeOrder.projectId",
        "ui.changeOrderWorkspace.input.cmdCreateChangeOrder.title",
        "ui.changeOrderWorkspace.input.cmdCreateChangeOrder.description",
        "ui.changeOrderWorkspace.input.cmdCreateChangeOrder.impactType",
        "ui.changeOrderWorkspace.input.cmdCreateChangeOrder.costAdjustment",
        "ui.changeOrderWorkspace.input.cmdCreateChangeOrder.scheduleAdjustmentDays"
      ],
      "routeParamInputStateKeys": [],
      "selectedEntityInputStateKeys": [
        "ui.changeOrderWorkspace.input.cmdCreateChangeOrder.projectId"
      ],
      "outputStateKeys": [
        "ui.changeOrderWorkspace.output.cmdCreateChangeOrder"
      ],
      "statusStateKey": "ui.changeOrderWorkspace.action.cmdCreateChangeOrder.status",
      "errorStateKey": "ui.changeOrderWorkspace.action.cmdCreateChangeOrder.error",
      "feedback": {
        "successMessageKey": "action.cmdCreateChangeOrder.success",
        "errorMessageKey": "action.cmdCreateChangeOrder.error",
        "dismissible": true
      },
      "clearInputStateKeys": [
        "ui.changeOrderWorkspace.input.cmdCreateChangeOrder.projectId",
        "ui.changeOrderWorkspace.input.cmdCreateChangeOrder.title",
        "ui.changeOrderWorkspace.input.cmdCreateChangeOrder.description",
        "ui.changeOrderWorkspace.input.cmdCreateChangeOrder.impactType",
        "ui.changeOrderWorkspace.input.cmdCreateChangeOrder.costAdjustment",
        "ui.changeOrderWorkspace.input.cmdCreateChangeOrder.scheduleAdjustmentDays"
      ]
    },
    {
      "actionId": "cmdUpdateChangeOrder",
      "kind": "command",
      "commandRef": "cmdUpdateChangeOrder",
      "routeKey": "buildFlowFsm.changeOrderWorkspace.cmdUpdateChangeOrder",
      "purpose": "Update change order details",
      "methodName": "cmdUpdateChangeOrder",
      "handlerName": "handleCmdUpdateChangeOrderClick",
      "inputStateKeys": [
        "ui.changeOrderWorkspace.input.cmdUpdateChangeOrder.changeOrderId",
        "ui.changeOrderWorkspace.input.cmdUpdateChangeOrder.title",
        "ui.changeOrderWorkspace.input.cmdUpdateChangeOrder.description",
        "ui.changeOrderWorkspace.input.cmdUpdateChangeOrder.impactType",
        "ui.changeOrderWorkspace.input.cmdUpdateChangeOrder.costAdjustment",
        "ui.changeOrderWorkspace.input.cmdUpdateChangeOrder.scheduleAdjustmentDays"
      ],
      "routeParamInputStateKeys": [
        "ui.changeOrderWorkspace.input.cmdUpdateChangeOrder.changeOrderId"
      ],
      "selectedEntityInputStateKeys": [],
      "outputStateKeys": [
        "ui.changeOrderWorkspace.output.cmdUpdateChangeOrder"
      ],
      "statusStateKey": "ui.changeOrderWorkspace.action.cmdUpdateChangeOrder.status",
      "errorStateKey": "ui.changeOrderWorkspace.action.cmdUpdateChangeOrder.error",
      "feedback": {
        "successMessageKey": "action.cmdUpdateChangeOrder.success",
        "errorMessageKey": "action.cmdUpdateChangeOrder.error",
        "dismissible": true
      },
      "clearInputStateKeys": [
        "ui.changeOrderWorkspace.input.cmdUpdateChangeOrder.title",
        "ui.changeOrderWorkspace.input.cmdUpdateChangeOrder.description",
        "ui.changeOrderWorkspace.input.cmdUpdateChangeOrder.impactType",
        "ui.changeOrderWorkspace.input.cmdUpdateChangeOrder.costAdjustment",
        "ui.changeOrderWorkspace.input.cmdUpdateChangeOrder.scheduleAdjustmentDays"
      ]
    },
    {
      "actionId": "cmdUpdateChangeOrderStatus",
      "kind": "command",
      "commandRef": "cmdUpdateChangeOrderStatus",
      "routeKey": "buildFlowFsm.changeOrderWorkspace.cmdUpdateChangeOrderStatus",
      "purpose": "Update change order status",
      "methodName": "cmdUpdateChangeOrderStatus",
      "handlerName": "handleCmdUpdateChangeOrderStatusClick",
      "inputStateKeys": [
        "ui.changeOrderWorkspace.input.cmdUpdateChangeOrderStatus.changeOrderId",
        "ui.changeOrderWorkspace.input.cmdUpdateChangeOrderStatus.status",
        "ui.changeOrderWorkspace.input.cmdUpdateChangeOrderStatus.rejectionReason"
      ],
      "routeParamInputStateKeys": [
        "ui.changeOrderWorkspace.input.cmdUpdateChangeOrderStatus.changeOrderId"
      ],
      "selectedEntityInputStateKeys": [],
      "outputStateKeys": [
        "ui.changeOrderWorkspace.output.cmdUpdateChangeOrderStatus"
      ],
      "statusStateKey": "ui.changeOrderWorkspace.action.cmdUpdateChangeOrderStatus.status",
      "errorStateKey": "ui.changeOrderWorkspace.action.cmdUpdateChangeOrderStatus.error",
      "feedback": {
        "successMessageKey": "action.cmdUpdateChangeOrderStatus.success",
        "errorMessageKey": "action.cmdUpdateChangeOrderStatus.error",
        "dismissible": true
      },
      "clearInputStateKeys": [
        "ui.changeOrderWorkspace.input.cmdUpdateChangeOrderStatus.status",
        "ui.changeOrderWorkspace.input.cmdUpdateChangeOrderStatus.rejectionReason"
      ]
    },
    {
      "actionId": "set.cmdCreateChangeOrderProjectId",
      "kind": "stateSetter",
      "stateKey": "ui.changeOrderWorkspace.input.cmdCreateChangeOrder.projectId",
      "methodName": "setCmdCreateChangeOrderProjectId",
      "handlerName": "handleCmdCreateChangeOrderProjectIdChange"
    },
    {
      "actionId": "set.cmdCreateChangeOrderTitle",
      "kind": "stateSetter",
      "stateKey": "ui.changeOrderWorkspace.input.cmdCreateChangeOrder.title",
      "methodName": "setCmdCreateChangeOrderTitle",
      "handlerName": "handleCmdCreateChangeOrderTitleChange"
    },
    {
      "actionId": "set.cmdCreateChangeOrderDescription",
      "kind": "stateSetter",
      "stateKey": "ui.changeOrderWorkspace.input.cmdCreateChangeOrder.description",
      "methodName": "setCmdCreateChangeOrderDescription",
      "handlerName": "handleCmdCreateChangeOrderDescriptionChange"
    },
    {
      "actionId": "set.cmdCreateChangeOrderImpactType",
      "kind": "stateSetter",
      "stateKey": "ui.changeOrderWorkspace.input.cmdCreateChangeOrder.impactType",
      "methodName": "setCmdCreateChangeOrderImpactType",
      "handlerName": "handleCmdCreateChangeOrderImpactTypeChange"
    },
    {
      "actionId": "set.cmdCreateChangeOrderCostAdjustment",
      "kind": "stateSetter",
      "stateKey": "ui.changeOrderWorkspace.input.cmdCreateChangeOrder.costAdjustment",
      "methodName": "setCmdCreateChangeOrderCostAdjustment",
      "handlerName": "handleCmdCreateChangeOrderCostAdjustmentChange"
    },
    {
      "actionId": "set.cmdCreateChangeOrderScheduleAdjustmentDays",
      "kind": "stateSetter",
      "stateKey": "ui.changeOrderWorkspace.input.cmdCreateChangeOrder.scheduleAdjustmentDays",
      "methodName": "setCmdCreateChangeOrderScheduleAdjustmentDays",
      "handlerName": "handleCmdCreateChangeOrderScheduleAdjustmentDaysChange"
    },
    {
      "actionId": "set.cmdUpdateChangeOrderChangeOrderId",
      "kind": "stateSetter",
      "stateKey": "ui.changeOrderWorkspace.input.cmdUpdateChangeOrder.changeOrderId",
      "methodName": "setCmdUpdateChangeOrderChangeOrderId",
      "handlerName": "handleCmdUpdateChangeOrderChangeOrderIdChange"
    },
    {
      "actionId": "set.cmdUpdateChangeOrderTitle",
      "kind": "stateSetter",
      "stateKey": "ui.changeOrderWorkspace.input.cmdUpdateChangeOrder.title",
      "methodName": "setCmdUpdateChangeOrderTitle",
      "handlerName": "handleCmdUpdateChangeOrderTitleChange"
    },
    {
      "actionId": "set.cmdUpdateChangeOrderDescription",
      "kind": "stateSetter",
      "stateKey": "ui.changeOrderWorkspace.input.cmdUpdateChangeOrder.description",
      "methodName": "setCmdUpdateChangeOrderDescription",
      "handlerName": "handleCmdUpdateChangeOrderDescriptionChange"
    },
    {
      "actionId": "set.cmdUpdateChangeOrderImpactType",
      "kind": "stateSetter",
      "stateKey": "ui.changeOrderWorkspace.input.cmdUpdateChangeOrder.impactType",
      "methodName": "setCmdUpdateChangeOrderImpactType",
      "handlerName": "handleCmdUpdateChangeOrderImpactTypeChange"
    },
    {
      "actionId": "set.cmdUpdateChangeOrderCostAdjustment",
      "kind": "stateSetter",
      "stateKey": "ui.changeOrderWorkspace.input.cmdUpdateChangeOrder.costAdjustment",
      "methodName": "setCmdUpdateChangeOrderCostAdjustment",
      "handlerName": "handleCmdUpdateChangeOrderCostAdjustmentChange"
    },
    {
      "actionId": "set.cmdUpdateChangeOrderScheduleAdjustmentDays",
      "kind": "stateSetter",
      "stateKey": "ui.changeOrderWorkspace.input.cmdUpdateChangeOrder.scheduleAdjustmentDays",
      "methodName": "setCmdUpdateChangeOrderScheduleAdjustmentDays",
      "handlerName": "handleCmdUpdateChangeOrderScheduleAdjustmentDaysChange"
    },
    {
      "actionId": "set.cmdUpdateChangeOrderStatusChangeOrderId",
      "kind": "stateSetter",
      "stateKey": "ui.changeOrderWorkspace.input.cmdUpdateChangeOrderStatus.changeOrderId",
      "methodName": "setCmdUpdateChangeOrderStatusChangeOrderId",
      "handlerName": "handleCmdUpdateChangeOrderStatusChangeOrderIdChange"
    },
    {
      "actionId": "set.cmdUpdateChangeOrderStatusStatus",
      "kind": "stateSetter",
      "stateKey": "ui.changeOrderWorkspace.input.cmdUpdateChangeOrderStatus.status",
      "methodName": "setCmdUpdateChangeOrderStatusStatus",
      "handlerName": "handleCmdUpdateChangeOrderStatusStatusChange"
    },
    {
      "actionId": "set.cmdUpdateChangeOrderStatusRejectionReason",
      "kind": "stateSetter",
      "stateKey": "ui.changeOrderWorkspace.input.cmdUpdateChangeOrderStatus.rejectionReason",
      "methodName": "setCmdUpdateChangeOrderStatusRejectionReason",
      "handlerName": "handleCmdUpdateChangeOrderStatusRejectionReasonChange"
    }
  ],
  "initialLoads": [],
  "businessContextRefs": [],
  "navigationRefs": [],
  "i18nMeta": {
    "defaultLocale": "en",
    "activeLocales": [
      "en",
      "pt",
      "es"
    ],
    "runtimeLocales": [
      "en",
      "pt-br",
      "es"
    ]
  },
  "i18n": {
    "section.changeOrderWorkspace.sec-create-change-order.title": "Create Change Order",
    "organism.changeOrderWorkspace.cmdCreateChangeOrder.title": "Create change order",
    "intent.changeOrderWorkspace.cmdCreateChangeOrder.form.title": "Create change order",
    "intent.changeOrderWorkspace.cmdCreateChangeOrder.form.action.cmdCreateChangeOrder": "Create change order",
    "intent.changeOrderWorkspace.cmdCreateChangeOrder.form.field.title.label": "Title",
    "intent.changeOrderWorkspace.cmdCreateChangeOrder.form.field.description.label": "Description",
    "intent.changeOrderWorkspace.cmdCreateChangeOrder.form.field.impactType.label": "Impact Type",
    "intent.changeOrderWorkspace.cmdCreateChangeOrder.form.field.costAdjustment.label": "Cost Adjustment",
    "intent.changeOrderWorkspace.cmdCreateChangeOrder.form.field.scheduleAdjustmentDays.label": "Schedule Adjustment Days",
    "section.changeOrderWorkspace.sec-edit-change-order.title": "Edit Change Order Details",
    "organism.changeOrderWorkspace.cmdUpdateChangeOrder.title": "Update change order details",
    "intent.changeOrderWorkspace.cmdUpdateChangeOrder.form.title": "Update change order details",
    "intent.changeOrderWorkspace.cmdUpdateChangeOrder.form.action.cmdUpdateChangeOrder": "Update change order details",
    "intent.changeOrderWorkspace.cmdUpdateChangeOrder.form.field.title.label": "Title",
    "intent.changeOrderWorkspace.cmdUpdateChangeOrder.form.field.description.label": "Description",
    "intent.changeOrderWorkspace.cmdUpdateChangeOrder.form.field.impactType.label": "Impact Type",
    "intent.changeOrderWorkspace.cmdUpdateChangeOrder.form.field.costAdjustment.label": "Cost Adjustment",
    "intent.changeOrderWorkspace.cmdUpdateChangeOrder.form.field.scheduleAdjustmentDays.label": "Schedule Adjustment Days",
    "section.changeOrderWorkspace.sec-review-change-order.title": "Review & Approve Change Order",
    "organism.changeOrderWorkspace.detail10.title": "Detail",
    "intent.changeOrderWorkspace.detail10.content.title": "Detail",
    "organism.changeOrderWorkspace.cmdUpdateChangeOrderStatus.title": "Update change order status",
    "intent.changeOrderWorkspace.cmdUpdateChangeOrderStatus.form.title": "Update change order status",
    "intent.changeOrderWorkspace.cmdUpdateChangeOrderStatus.form.action.cmdUpdateChangeOrderStatus": "Update change order status",
    "intent.changeOrderWorkspace.cmdUpdateChangeOrderStatus.form.field.status.label": "Status",
    "intent.changeOrderWorkspace.cmdUpdateChangeOrderStatus.form.field.rejectionReason.label": "Rejection Reason",
    "action.cmdCreateChangeOrder.success": "Create change order: OK",
    "action.cmdCreateChangeOrder.error": "Create change order: falhou",
    "action.cmdUpdateChangeOrder.success": "Update change order details: OK",
    "action.cmdUpdateChangeOrder.error": "Update change order details: falhou",
    "action.cmdUpdateChangeOrderStatus.success": "Update change order status: OK",
    "action.cmdUpdateChangeOrderStatus.error": "Update change order status: falhou",
    "section.changeOrderWorkspace.sec-review-approve.title": "Review & Approve Change Order",
    "organism.changeOrderWorkspace.summary-first10.title": "Summary first",
    "intent.changeOrderWorkspace.summary-first10.content.title": "Summary first",
    "section.changeOrderWorkspace.sec-change-order-master-detail.title": "Change Order Master-Detail",
    "organism.changeOrderWorkspace.master-detail10.title": "Master detail",
    "intent.changeOrderWorkspace.master-detail10.content.title": "Master detail"
  },
  "automation": {
    "statePrefix": "ui.changeOrderWorkspace",
    "stateKeys": [
      "ui.changeOrderWorkspace.status",
      "ui.changeOrderWorkspace.action.cmdCreateChangeOrder.status",
      "ui.changeOrderWorkspace.input.cmdCreateChangeOrder.projectId",
      "ui.changeOrderWorkspace.input.cmdCreateChangeOrder.title",
      "ui.changeOrderWorkspace.input.cmdCreateChangeOrder.description",
      "ui.changeOrderWorkspace.input.cmdCreateChangeOrder.impactType",
      "ui.changeOrderWorkspace.input.cmdCreateChangeOrder.costAdjustment",
      "ui.changeOrderWorkspace.input.cmdCreateChangeOrder.scheduleAdjustmentDays",
      "ui.changeOrderWorkspace.output.cmdCreateChangeOrder",
      "ui.changeOrderWorkspace.action.cmdCreateChangeOrder.error",
      "ui.changeOrderWorkspace.action.cmdUpdateChangeOrder.status",
      "ui.changeOrderWorkspace.input.cmdUpdateChangeOrder.changeOrderId",
      "ui.changeOrderWorkspace.input.cmdUpdateChangeOrder.title",
      "ui.changeOrderWorkspace.input.cmdUpdateChangeOrder.description",
      "ui.changeOrderWorkspace.input.cmdUpdateChangeOrder.impactType",
      "ui.changeOrderWorkspace.input.cmdUpdateChangeOrder.costAdjustment",
      "ui.changeOrderWorkspace.input.cmdUpdateChangeOrder.scheduleAdjustmentDays",
      "ui.changeOrderWorkspace.output.cmdUpdateChangeOrder",
      "ui.changeOrderWorkspace.action.cmdUpdateChangeOrder.error",
      "ui.changeOrderWorkspace.action.cmdUpdateChangeOrderStatus.status",
      "ui.changeOrderWorkspace.input.cmdUpdateChangeOrderStatus.changeOrderId",
      "ui.changeOrderWorkspace.input.cmdUpdateChangeOrderStatus.status",
      "ui.changeOrderWorkspace.input.cmdUpdateChangeOrderStatus.rejectionReason",
      "ui.changeOrderWorkspace.output.cmdUpdateChangeOrderStatus",
      "ui.changeOrderWorkspace.action.cmdUpdateChangeOrderStatus.error"
    ],
    "actionIds": [
      "cmdCreateChangeOrder",
      "cmdUpdateChangeOrder",
      "cmdUpdateChangeOrderStatus",
      "set.cmdCreateChangeOrderProjectId",
      "set.cmdCreateChangeOrderTitle",
      "set.cmdCreateChangeOrderDescription",
      "set.cmdCreateChangeOrderImpactType",
      "set.cmdCreateChangeOrderCostAdjustment",
      "set.cmdCreateChangeOrderScheduleAdjustmentDays",
      "set.cmdUpdateChangeOrderChangeOrderId",
      "set.cmdUpdateChangeOrderTitle",
      "set.cmdUpdateChangeOrderDescription",
      "set.cmdUpdateChangeOrderImpactType",
      "set.cmdUpdateChangeOrderCostAdjustment",
      "set.cmdUpdateChangeOrderScheduleAdjustmentDays",
      "set.cmdUpdateChangeOrderStatusChangeOrderId",
      "set.cmdUpdateChangeOrderStatusStatus",
      "set.cmdUpdateChangeOrderStatusRejectionReason"
    ]
  }
};

export const pipeline = [
  {
    "id": "changeOrderWorkspace__l2_shared",
    "type": "l2_shared",
    "outputPath": "_102045_/l2/buildFlowFsm/web/shared/changeOrderWorkspace.ts",
    "defPath": "_102045_/l2/buildFlowFsm/web/shared/changeOrderWorkspace.defs.ts",
    "dependsFiles": [
      "_102045_/l2/buildFlowFsm/web/contracts/changeOrderWorkspace.ts",
      "_102029_.d.ts"
    ],
    "dependsOn": [],
    "skills": [
      "_102020_/l2/agentChangeFrontend/skills/genCfeSharedTs.ts"
    ],
    "rulesApplied": [
      "operationsRequireActiveProject",
      "changeOrderDescriptionRequired",
      "onlyApprovedChangeOrdersAffectCosting",
      "jobCostDerivation"
    ],
    "agent": "agentCfeMaterializeGen"
  }
] as const;
