/// <mls fileReference="_102045_/l2/buildFlowFsm/web/desktop/page21/changeOrderWorkspace.defs.ts" enhancement="_blank"/>

export const definition = {
  "pageId": "changeOrderWorkspace",
  "pageName": "Change Orders",
  "baseClassName": "BuildFlowFsmChangeOrderWorkspaceBase",
  "actor": "projectManager",
  "purpose": "Executar Change Orders.",
  "capabilities": [
    "changeOrderLifecycle",
    "updateChangeOrder"
  ],
  "flowRefs": {
    "experienceFlows": [
      "changeOrderLifecycle"
    ],
    "entityLifecycles": [],
    "taskWorkflows": [
      "changeOrderLifecycle"
    ],
    "automations": []
  },
  "pluginRefs": [],
  "mdmRefs": [],
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
  "pageInputs": [],
  "navigationRefs": [],
  "sections": [
    {
      "id": "section.changeOrderWorkspace.sec-change-order-master",
      "type": "section",
      "sectionName": "Change Order List & Review",
      "titleKey": "section.changeOrderWorkspace.sec-change-order-master.title",
      "mode": "view",
      "order": 10,
      "organisms": [
        {
          "id": "org-change-order-list",
          "type": "content",
          "organismName": "ChangeOrderList",
          "titleKey": "organism.changeOrderWorkspace.master-detail10.title",
          "purpose": "Displays all change orders for the active project with their current status, cost adjustment, and schedule impact so the PM can quickly identify which orders need review or correction.",
          "userActions": [],
          "requiredEntities": [],
          "readsFields": [],
          "writesFields": [],
          "rulesApplied": [],
          "order": 10,
          "intentionRefs": [
            {
              "id": "intent.changeOrderWorkspace.master-detail10.content",
              "intent": "master-detail",
              "order": 10
            }
          ]
        },
        {
          "id": "org-change-order-detail-panel",
          "type": "content",
          "organismName": "ChangeOrderDetailPanel",
          "titleKey": "organism.changeOrderWorkspace.summary-first20.title",
          "purpose": "Shows the full detail of the selected change order — title, description, impactType, costAdjustment, scheduleAdjustmentDays, and current status — so the PM can review scope and impact before deciding.",
          "userActions": [],
          "requiredEntities": [],
          "readsFields": [],
          "writesFields": [],
          "rulesApplied": [],
          "order": 20,
          "intentionRefs": [
            {
              "id": "intent.changeOrderWorkspace.summary-first20.content",
              "intent": "summary-first",
              "order": 10
            }
          ]
        }
      ]
    },
    {
      "id": "section.changeOrderWorkspace.sec-status-transition",
      "type": "section",
      "sectionName": "Approve or Reject",
      "titleKey": "section.changeOrderWorkspace.sec-status-transition.title",
      "mode": "edit",
      "order": 20,
      "organisms": [
        {
          "id": "org-status-transition-actions",
          "type": "commandForm",
          "organismName": "ChangeOrderStatusTransition",
          "titleKey": "organism.changeOrderWorkspace.cmdUpdateChangeOrderStatus.title",
          "purpose": "Presents the allowed next-state actions (Approve, Reject) as explicit buttons for the selected change order; Reject reveals an inline rejectionReason field. Confirms the status update via cmdUpdateChangeOrderStatus.",
          "userActions": [
            "cmdUpdateChangeOrderStatus"
          ],
          "requiredEntities": [],
          "readsFields": [],
          "writesFields": [],
          "rulesApplied": [
            "operationsRequireActiveProject",
            "onlyApprovedChangeOrdersAffectCosting",
            "jobCostDerivation"
          ],
          "order": 10,
          "intentionRefs": [
            {
              "id": "intent.changeOrderWorkspace.cmdUpdateChangeOrderStatus.form",
              "intent": "commandForm",
              "submitAction": "cmdUpdateChangeOrderStatus",
              "order": 10
            }
          ]
        }
      ]
    },
    {
      "id": "section.changeOrderWorkspace.sec-edit-change-order",
      "type": "section",
      "sectionName": "Edit Change Order",
      "titleKey": "section.changeOrderWorkspace.sec-edit-change-order.title",
      "mode": "edit",
      "order": 30,
      "organisms": [
        {
          "id": "org-edit-change-order-form",
          "type": "commandForm",
          "organismName": "EditChangeOrderForm",
          "titleKey": "organism.changeOrderWorkspace.cmdUpdateChangeOrder.title",
          "purpose": "Allows the PM to correct or refine the title, description, impactType, costAdjustment, and scheduleAdjustmentDays of a selected editable change order and save the update.",
          "userActions": [
            "cmdUpdateChangeOrder"
          ],
          "requiredEntities": [],
          "readsFields": [],
          "writesFields": [],
          "rulesApplied": [
            "operationsRequireActiveProject",
            "changeOrderDescriptionRequired"
          ],
          "order": 10,
          "intentionRefs": [
            {
              "id": "intent.changeOrderWorkspace.cmdUpdateChangeOrder.form",
              "intent": "commandForm",
              "submitAction": "cmdUpdateChangeOrder",
              "order": 10
            }
          ]
        }
      ]
    },
    {
      "id": "section.changeOrderWorkspace.sec-create-change-order",
      "type": "section",
      "sectionName": "New Change Order",
      "titleKey": "section.changeOrderWorkspace.sec-create-change-order.title",
      "mode": "edit",
      "order": 40,
      "organisms": [
        {
          "id": "org-create-change-order-form",
          "type": "commandForm",
          "organismName": "CreateChangeOrderForm",
          "titleKey": "organism.changeOrderWorkspace.cmdCreateChangeOrder.title",
          "purpose": "Lets the PM document a new change order by entering title, description, impactType, costAdjustment, and optional scheduleAdjustmentDays; projectId is derived from the active project context and never typed.",
          "userActions": [
            "cmdCreateChangeOrder"
          ],
          "requiredEntities": [],
          "readsFields": [],
          "writesFields": [],
          "rulesApplied": [
            "operationsRequireActiveProject",
            "changeOrderDescriptionRequired"
          ],
          "order": 10,
          "intentionRefs": [
            {
              "id": "intent.changeOrderWorkspace.cmdCreateChangeOrder.form",
              "intent": "commandForm",
              "submitAction": "cmdCreateChangeOrder",
              "order": 10
            }
          ]
        }
      ]
    }
  ],
  "templateId": "goal_first",
  "visualStyle": "Desktop-first for PM and billing staff with mobile-optimized field entry; dashboard-driven, status-aware, touch-friendly UI with Gantt-ish timeline views.",
  "pageObjective": {
    "actor": "Project Manager",
    "jobToBeDone": "Create, edit, and approve or reject change orders so that cost and schedule impacts are accurately recorded against the active project.",
    "primaryDecision": "Approve or reject a change order after reviewing its cost and schedule impact against the project budget.",
    "decisiveInfo": [
      "title",
      "description",
      "impactType",
      "costAdjustment",
      "scheduleAdjustmentDays",
      "status",
      "rejectionReason"
    ],
    "usageFrequency": "Occasional — triggered when a project scope change arises; back-office workflow used by project managers.",
    "criticalActions": [
      {
        "action": "cmdUpdateChangeOrderStatus",
        "presentation": "contextual-transition-actions — render Approve and Reject as explicit buttons on the selected change order; Reject reveals a rejectionReason input inline; never a free status <select>."
      },
      {
        "action": "cmdCreateChangeOrder",
        "presentation": "primary-button opening an inline form panel; projectId is context-derived (hidden), not typed."
      },
      {
        "action": "cmdUpdateChangeOrder",
        "presentation": "inline-row-command or edit panel pre-populated from the selected change order; changeOrderId is route-derived, never typed."
      }
    ],
    "informationHierarchy": [
      "1. Change order list with current status — lets the PM scan what needs attention",
      "2. Selected change order detail — title, description, impactType, costAdjustment, scheduleAdjustmentDays, status",
      "3. Status transition actions (Approve / Reject) with optional rejection reason — the primary decision",
      "4. Edit panel for correcting details of a draft/editable change order",
      "5. Create new change order form — least frequent, lowest in hierarchy"
    ],
    "successCriteria": "The PM can review a change order's full impact, approve or reject it in two clicks, and create or correct a change order without leaving the workspace or manually typing any system-owned id.",
    "antiPatterns": [
      "Free <select> over all status enum values for status transitions",
      "Manually typed changeOrderId or projectId inputs",
      "Separate page or modal for status update",
      "Stacking three independent full-page forms without a master list",
      "Showing system-owned fields (createdAt, updatedAt, approvedAt, rejectedAt) as editable inputs"
    ]
  },
  "layout": {
    "id": "page21-goal-first",
    "type": "page",
    "sections": [
      {
        "id": "section.changeOrderWorkspace.sec-change-order-master",
        "type": "section",
        "sectionName": "Change Order List & Review",
        "titleKey": "section.changeOrderWorkspace.sec-change-order-master.title",
        "mode": "view",
        "order": 10,
        "organisms": [
          {
            "id": "org-change-order-list",
            "type": "content",
            "organismName": "ChangeOrderList",
            "titleKey": "organism.changeOrderWorkspace.master-detail10.title",
            "purpose": "Displays all change orders for the active project with their current status, cost adjustment, and schedule impact so the PM can quickly identify which orders need review or correction.",
            "userActions": [],
            "requiredEntities": [],
            "readsFields": [],
            "writesFields": [],
            "rulesApplied": [],
            "order": 10,
            "intentions": [
              {
                "id": "intent.changeOrderWorkspace.master-detail10.content",
                "intent": "master-detail",
                "order": 10,
                "titleKey": "intent.changeOrderWorkspace.master-detail10.content.title",
                "displayHint": "master-detail",
                "fields": [],
                "columns": [],
                "filters": [],
                "toolbar": [],
                "rowActions": [],
                "actions": []
              }
            ],
            "displayHint": "master-detail"
          },
          {
            "id": "org-change-order-detail-panel",
            "type": "content",
            "organismName": "ChangeOrderDetailPanel",
            "titleKey": "organism.changeOrderWorkspace.summary-first20.title",
            "purpose": "Shows the full detail of the selected change order — title, description, impactType, costAdjustment, scheduleAdjustmentDays, and current status — so the PM can review scope and impact before deciding.",
            "userActions": [],
            "requiredEntities": [],
            "readsFields": [],
            "writesFields": [],
            "rulesApplied": [],
            "order": 20,
            "intentions": [
              {
                "id": "intent.changeOrderWorkspace.summary-first20.content",
                "intent": "summary-first",
                "order": 10,
                "titleKey": "intent.changeOrderWorkspace.summary-first20.content.title",
                "displayHint": "summary-first",
                "fields": [],
                "columns": [],
                "filters": [],
                "toolbar": [],
                "rowActions": [],
                "actions": []
              }
            ],
            "displayHint": "summary-first"
          }
        ]
      },
      {
        "id": "section.changeOrderWorkspace.sec-status-transition",
        "type": "section",
        "sectionName": "Approve or Reject",
        "titleKey": "section.changeOrderWorkspace.sec-status-transition.title",
        "mode": "edit",
        "order": 20,
        "organisms": [
          {
            "id": "org-status-transition-actions",
            "type": "commandForm",
            "organismName": "ChangeOrderStatusTransition",
            "titleKey": "organism.changeOrderWorkspace.cmdUpdateChangeOrderStatus.title",
            "purpose": "Presents the allowed next-state actions (Approve, Reject) as explicit buttons for the selected change order; Reject reveals an inline rejectionReason field. Confirms the status update via cmdUpdateChangeOrderStatus.",
            "userActions": [
              "cmdUpdateChangeOrderStatus"
            ],
            "requiredEntities": [],
            "readsFields": [],
            "writesFields": [],
            "rulesApplied": [
              "operationsRequireActiveProject",
              "onlyApprovedChangeOrdersAffectCosting",
              "jobCostDerivation"
            ],
            "order": 10,
            "intentions": [
              {
                "id": "intent.changeOrderWorkspace.cmdUpdateChangeOrderStatus.form",
                "intent": "commandForm",
                "order": 10,
                "titleKey": "intent.changeOrderWorkspace.cmdUpdateChangeOrderStatus.form.title",
                "source": "bff.cmdUpdateChangeOrderStatus",
                "binding": "binding.changeOrderWorkspace.cmdUpdateChangeOrderStatus",
                "submitAction": "cmdUpdateChangeOrderStatus",
                "fields": [
                  {
                    "id": "intent.changeOrderWorkspace.cmdUpdateChangeOrderStatus.form.field.status",
                    "field": "status",
                    "labelKey": "intent.changeOrderWorkspace.cmdUpdateChangeOrderStatus.form.field.status.label",
                    "order": 10,
                    "stateKey": "ui.changeOrderWorkspace.input.cmdUpdateChangeOrderStatus.status"
                  },
                  {
                    "id": "intent.changeOrderWorkspace.cmdUpdateChangeOrderStatus.form.field.rejectionReason",
                    "field": "rejectionReason",
                    "labelKey": "intent.changeOrderWorkspace.cmdUpdateChangeOrderStatus.form.field.rejectionReason.label",
                    "order": 20,
                    "stateKey": "ui.changeOrderWorkspace.input.cmdUpdateChangeOrderStatus.rejectionReason"
                  }
                ],
                "columns": [],
                "filters": [],
                "toolbar": [],
                "rowActions": [],
                "actions": [
                  {
                    "id": "intent.changeOrderWorkspace.cmdUpdateChangeOrderStatus.form.action.cmdUpdateChangeOrderStatus",
                    "action": "cmdUpdateChangeOrderStatus",
                    "labelKey": "intent.changeOrderWorkspace.cmdUpdateChangeOrderStatus.form.action.cmdUpdateChangeOrderStatus",
                    "order": 10,
                    "actionKey": "cmdUpdateChangeOrderStatus"
                  }
                ]
              }
            ],
            "displayHint": "contextual-transition-actions"
          }
        ]
      },
      {
        "id": "section.changeOrderWorkspace.sec-edit-change-order",
        "type": "section",
        "sectionName": "Edit Change Order",
        "titleKey": "section.changeOrderWorkspace.sec-edit-change-order.title",
        "mode": "edit",
        "order": 30,
        "organisms": [
          {
            "id": "org-edit-change-order-form",
            "type": "commandForm",
            "organismName": "EditChangeOrderForm",
            "titleKey": "organism.changeOrderWorkspace.cmdUpdateChangeOrder.title",
            "purpose": "Allows the PM to correct or refine the title, description, impactType, costAdjustment, and scheduleAdjustmentDays of a selected editable change order and save the update.",
            "userActions": [
              "cmdUpdateChangeOrder"
            ],
            "requiredEntities": [],
            "readsFields": [],
            "writesFields": [],
            "rulesApplied": [
              "operationsRequireActiveProject",
              "changeOrderDescriptionRequired"
            ],
            "order": 10,
            "intentions": [
              {
                "id": "intent.changeOrderWorkspace.cmdUpdateChangeOrder.form",
                "intent": "commandForm",
                "order": 10,
                "titleKey": "intent.changeOrderWorkspace.cmdUpdateChangeOrder.form.title",
                "source": "bff.cmdUpdateChangeOrder",
                "binding": "binding.changeOrderWorkspace.cmdUpdateChangeOrder",
                "submitAction": "cmdUpdateChangeOrder",
                "fields": [
                  {
                    "id": "intent.changeOrderWorkspace.cmdUpdateChangeOrder.form.field.title",
                    "field": "title",
                    "labelKey": "intent.changeOrderWorkspace.cmdUpdateChangeOrder.form.field.title.label",
                    "order": 10,
                    "stateKey": "ui.changeOrderWorkspace.input.cmdUpdateChangeOrder.title"
                  },
                  {
                    "id": "intent.changeOrderWorkspace.cmdUpdateChangeOrder.form.field.description",
                    "field": "description",
                    "labelKey": "intent.changeOrderWorkspace.cmdUpdateChangeOrder.form.field.description.label",
                    "order": 20,
                    "stateKey": "ui.changeOrderWorkspace.input.cmdUpdateChangeOrder.description"
                  },
                  {
                    "id": "intent.changeOrderWorkspace.cmdUpdateChangeOrder.form.field.impactType",
                    "field": "impactType",
                    "labelKey": "intent.changeOrderWorkspace.cmdUpdateChangeOrder.form.field.impactType.label",
                    "order": 30,
                    "stateKey": "ui.changeOrderWorkspace.input.cmdUpdateChangeOrder.impactType"
                  },
                  {
                    "id": "intent.changeOrderWorkspace.cmdUpdateChangeOrder.form.field.costAdjustment",
                    "field": "costAdjustment",
                    "labelKey": "intent.changeOrderWorkspace.cmdUpdateChangeOrder.form.field.costAdjustment.label",
                    "order": 40,
                    "stateKey": "ui.changeOrderWorkspace.input.cmdUpdateChangeOrder.costAdjustment"
                  },
                  {
                    "id": "intent.changeOrderWorkspace.cmdUpdateChangeOrder.form.field.scheduleAdjustmentDays",
                    "field": "scheduleAdjustmentDays",
                    "labelKey": "intent.changeOrderWorkspace.cmdUpdateChangeOrder.form.field.scheduleAdjustmentDays.label",
                    "order": 50,
                    "stateKey": "ui.changeOrderWorkspace.input.cmdUpdateChangeOrder.scheduleAdjustmentDays"
                  }
                ],
                "columns": [],
                "filters": [],
                "toolbar": [],
                "rowActions": [],
                "actions": [
                  {
                    "id": "intent.changeOrderWorkspace.cmdUpdateChangeOrder.form.action.cmdUpdateChangeOrder",
                    "action": "cmdUpdateChangeOrder",
                    "labelKey": "intent.changeOrderWorkspace.cmdUpdateChangeOrder.form.action.cmdUpdateChangeOrder",
                    "order": 10,
                    "actionKey": "cmdUpdateChangeOrder"
                  }
                ]
              }
            ],
            "displayHint": "inline-row-command"
          }
        ]
      },
      {
        "id": "section.changeOrderWorkspace.sec-create-change-order",
        "type": "section",
        "sectionName": "New Change Order",
        "titleKey": "section.changeOrderWorkspace.sec-create-change-order.title",
        "mode": "edit",
        "order": 40,
        "organisms": [
          {
            "id": "org-create-change-order-form",
            "type": "commandForm",
            "organismName": "CreateChangeOrderForm",
            "titleKey": "organism.changeOrderWorkspace.cmdCreateChangeOrder.title",
            "purpose": "Lets the PM document a new change order by entering title, description, impactType, costAdjustment, and optional scheduleAdjustmentDays; projectId is derived from the active project context and never typed.",
            "userActions": [
              "cmdCreateChangeOrder"
            ],
            "requiredEntities": [],
            "readsFields": [],
            "writesFields": [],
            "rulesApplied": [
              "operationsRequireActiveProject",
              "changeOrderDescriptionRequired"
            ],
            "order": 10,
            "intentions": [
              {
                "id": "intent.changeOrderWorkspace.cmdCreateChangeOrder.form",
                "intent": "commandForm",
                "order": 10,
                "titleKey": "intent.changeOrderWorkspace.cmdCreateChangeOrder.form.title",
                "source": "bff.cmdCreateChangeOrder",
                "binding": "binding.changeOrderWorkspace.cmdCreateChangeOrder",
                "submitAction": "cmdCreateChangeOrder",
                "fields": [
                  {
                    "id": "intent.changeOrderWorkspace.cmdCreateChangeOrder.form.field.title",
                    "field": "title",
                    "labelKey": "intent.changeOrderWorkspace.cmdCreateChangeOrder.form.field.title.label",
                    "order": 10,
                    "stateKey": "ui.changeOrderWorkspace.input.cmdCreateChangeOrder.title"
                  },
                  {
                    "id": "intent.changeOrderWorkspace.cmdCreateChangeOrder.form.field.description",
                    "field": "description",
                    "labelKey": "intent.changeOrderWorkspace.cmdCreateChangeOrder.form.field.description.label",
                    "order": 20,
                    "stateKey": "ui.changeOrderWorkspace.input.cmdCreateChangeOrder.description"
                  },
                  {
                    "id": "intent.changeOrderWorkspace.cmdCreateChangeOrder.form.field.impactType",
                    "field": "impactType",
                    "labelKey": "intent.changeOrderWorkspace.cmdCreateChangeOrder.form.field.impactType.label",
                    "order": 30,
                    "stateKey": "ui.changeOrderWorkspace.input.cmdCreateChangeOrder.impactType"
                  },
                  {
                    "id": "intent.changeOrderWorkspace.cmdCreateChangeOrder.form.field.costAdjustment",
                    "field": "costAdjustment",
                    "labelKey": "intent.changeOrderWorkspace.cmdCreateChangeOrder.form.field.costAdjustment.label",
                    "order": 40,
                    "stateKey": "ui.changeOrderWorkspace.input.cmdCreateChangeOrder.costAdjustment"
                  },
                  {
                    "id": "intent.changeOrderWorkspace.cmdCreateChangeOrder.form.field.scheduleAdjustmentDays",
                    "field": "scheduleAdjustmentDays",
                    "labelKey": "intent.changeOrderWorkspace.cmdCreateChangeOrder.form.field.scheduleAdjustmentDays.label",
                    "order": 50,
                    "stateKey": "ui.changeOrderWorkspace.input.cmdCreateChangeOrder.scheduleAdjustmentDays"
                  }
                ],
                "columns": [],
                "filters": [],
                "toolbar": [],
                "rowActions": [],
                "actions": [
                  {
                    "id": "intent.changeOrderWorkspace.cmdCreateChangeOrder.form.action.cmdCreateChangeOrder",
                    "action": "cmdCreateChangeOrder",
                    "labelKey": "intent.changeOrderWorkspace.cmdCreateChangeOrder.form.action.cmdCreateChangeOrder",
                    "order": 10,
                    "actionKey": "cmdCreateChangeOrder"
                  }
                ]
              }
            ],
            "displayHint": "summary-first"
          }
        ]
      }
    ]
  },
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
      "_102020_/l2/agentChangeFrontend/skills/genCfePage21RenderTs.ts"
    ],
    "visualStyle": {
      "description": "Desktop-first for PM and billing staff with mobile-optimized field entry; dashboard-driven, status-aware, touch-friendly UI with Gantt-ish timeline views."
    },
    "agent": "agentCfeMaterializeGen"
  }
] as const;
