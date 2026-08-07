/// <mls fileReference="_102045_/l2/buildFlowFsm/web/desktop/page21/changeOrderWorkspace.defs.ts" enhancement="_blank"/>

export const definition = {
  "pageId": "changeOrderWorkspace",
  "pageName": "Change Orders",
  "baseClassName": "BuildFlowFsmChangeOrderWorkspaceBase",
  "actor": "projectManager",
  "purpose": "Project manager documents, edits, and approves change orders, applying cost impact to the job.",
  "presentation": {
    "categoryRef": "entityRecordManagement"
  },
  "pageObjective": {
    "actor": "Project Manager",
    "jobToBeDone": "Document, refine, and approve or reject change orders so that cost and schedule impacts are accurately recorded against the active project.",
    "primaryDecision": "Approve or reject a change order after reviewing its cost and schedule impact — the status transition is the highest-stakes action on the page.",
    "decisiveInfo": [
      "title",
      "description",
      "impactType",
      "costAdjustment",
      "scheduleAdjustmentDays",
      "status",
      "rejectionReason"
    ],
    "usageFrequency": "Occasional / back-office — triggered when a scope change arises on an active project; not a high-frequency POS-style screen.",
    "criticalActions": [
      {
        "action": "cmdUpdateChangeOrderStatus",
        "presentation": "contextual-transition-actions — render allowed next states (approve / reject) as explicit buttons on the selected change order; never a free <select>; rejection reason appears inline only when 'reject' is chosen"
      },
      {
        "action": "cmdCreateChangeOrder",
        "presentation": "primary-button — a focused creation form scoped to the active project context; projectId is context-derived and hidden"
      },
      {
        "action": "cmdUpdateChangeOrder",
        "presentation": "inline-row-command — edit form pre-populated from the selected change order; changeOrderId is route-derived and hidden"
      }
    ],
    "informationHierarchy": [
      "1. Current change order status and cost/schedule impact summary (read-before-write anchor)",
      "2. Status transition actions (approve / reject) with inline rejection reason when applicable",
      "3. Edit form for refining an existing change order's details",
      "4. Creation form for logging a new change order against the project"
    ],
    "successCriteria": "The project manager can review a change order's full impact, approve or reject it in two clicks, correct details without leaving the page, and create new change orders — all without typing any system-owned id.",
    "antiPatterns": [
      "Free <select> over all status enum values for status transitions",
      "Manually typed changeOrderId or projectId inputs",
      "Separate page or modal for the status transition form",
      "Stacking three independent CRUD forms with no visual hierarchy",
      "Showing system-owned fields (createdAt, updatedAt, approvedAt, rejectedAt) as editable inputs"
    ]
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
    "id": "changeOrderWorkspace__page21__l2_page",
    "type": "l2_page",
    "outputPath": "_102045_/l2/buildFlowFsm/web/desktop/page21/changeOrderWorkspace.ts",
    "defPath": "_102045_/l2/buildFlowFsm/web/desktop/page21/changeOrderWorkspace.defs.ts",
    "dependsFiles": [
      "_102045_/l2/buildFlowFsm/web/shared/changeOrderWorkspace.ts",
      "_102045_/l2/designSystem.ts"
    ],
    "dependsOn": [
      "changeOrderWorkspace__l2_shared"
    ],
    "skills": [
      "_102020_/l2/agentChangeFrontend/skills/genCfePage21RenderTs.ts",
      "_102020_/l4/collabux/templates/entityRecordManagement/page21.md"
    ],
    "visualStyle": {
      "description": "Desktop-first for PM and billing staff with mobile-optimized field entry; dashboard-driven, status-aware, touch-friendly UI with Gantt-ish timeline views."
    },
    "agent": "agentCfeMaterializeGen"
  }
] as const;
