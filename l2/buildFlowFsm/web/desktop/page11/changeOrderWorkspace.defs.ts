/// <mls fileReference="_102045_/l2/buildFlowFsm/web/desktop/page11/changeOrderWorkspace.defs.ts" enhancement="_blank"/>

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
      "id": "section.changeOrderWorkspace.createChangeOrderSection",
      "type": "section",
      "sectionName": "Create Change Order",
      "titleKey": "section.changeOrderWorkspace.createChangeOrderSection.title",
      "mode": "edit",
      "order": 10,
      "organisms": [
        {
          "id": "createChangeOrderForm",
          "type": "commandForm",
          "organismName": "CreateChangeOrderForm",
          "titleKey": "organism.changeOrderWorkspace.cmdCreateChangeOrder.title",
          "purpose": "Collects the change order title, description, impact type, cost adjustment, and optional schedule adjustment days for a selected project, then submits the creation command to record the change order in draft status.",
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
    },
    {
      "id": "section.changeOrderWorkspace.editChangeOrderSection",
      "type": "section",
      "sectionName": "Edit Change Order",
      "titleKey": "section.changeOrderWorkspace.editChangeOrderSection.title",
      "mode": "edit",
      "order": 20,
      "organisms": [
        {
          "id": "editChangeOrderForm",
          "type": "commandForm",
          "organismName": "EditChangeOrderForm",
          "titleKey": "organism.changeOrderWorkspace.cmdUpdateChangeOrder.title",
          "purpose": "Allows the project manager to correct or refine the title, description, impact type, cost adjustment, and schedule adjustment days of an existing editable change order, then saves the update.",
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
      "id": "section.changeOrderWorkspace.reviewChangeOrderSection",
      "type": "section",
      "sectionName": "Review & Approve Change Order",
      "titleKey": "section.changeOrderWorkspace.reviewChangeOrderSection.title",
      "mode": "edit",
      "order": 30,
      "organisms": [
        {
          "id": "changeOrderStatusPanel",
          "type": "content",
          "organismName": "ChangeOrderStatusPanel",
          "titleKey": "organism.changeOrderWorkspace.detail10.title",
          "purpose": "Presents the change order's documented scope, cost impact, and schedule impact as read-only context so the project manager can make an informed approve-or-reject decision before acting.",
          "userActions": [],
          "requiredEntities": [],
          "readsFields": [],
          "writesFields": [],
          "rulesApplied": [],
          "order": 10,
          "intentionRefs": [
            {
              "id": "intent.changeOrderWorkspace.detail10.content",
              "intent": "detail",
              "order": 10
            }
          ]
        },
        {
          "id": "changeOrderStatusTransitionForm",
          "type": "commandForm",
          "organismName": "ChangeOrderStatusTransitionForm",
          "titleKey": "organism.changeOrderWorkspace.cmdUpdateChangeOrderStatus.title",
          "purpose": "Renders the allowed next-status transitions (approve / reject) as explicit action buttons; when rejecting, surfaces the rejection reason input, then confirms the status update command.",
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
          "order": 20,
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
    }
  ],
  "templateId": "wizard_flow",
  "visualStyle": "Desktop-first for PM and billing staff with mobile-optimized field entry; dashboard-driven, status-aware, touch-friendly UI with Gantt-ish timeline views.",
  "layout": {
    "id": "wizard_flow",
    "type": "page",
    "sections": [
      {
        "id": "section.changeOrderWorkspace.createChangeOrderSection",
        "type": "section",
        "sectionName": "Create Change Order",
        "titleKey": "section.changeOrderWorkspace.createChangeOrderSection.title",
        "mode": "edit",
        "order": 10,
        "organisms": [
          {
            "id": "createChangeOrderForm",
            "type": "commandForm",
            "organismName": "CreateChangeOrderForm",
            "titleKey": "organism.changeOrderWorkspace.cmdCreateChangeOrder.title",
            "purpose": "Collects the change order title, description, impact type, cost adjustment, and optional schedule adjustment days for a selected project, then submits the creation command to record the change order in draft status.",
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
            "displayHint": "form"
          }
        ]
      },
      {
        "id": "section.changeOrderWorkspace.editChangeOrderSection",
        "type": "section",
        "sectionName": "Edit Change Order",
        "titleKey": "section.changeOrderWorkspace.editChangeOrderSection.title",
        "mode": "edit",
        "order": 20,
        "organisms": [
          {
            "id": "editChangeOrderForm",
            "type": "commandForm",
            "organismName": "EditChangeOrderForm",
            "titleKey": "organism.changeOrderWorkspace.cmdUpdateChangeOrder.title",
            "purpose": "Allows the project manager to correct or refine the title, description, impact type, cost adjustment, and schedule adjustment days of an existing editable change order, then saves the update.",
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
            "displayHint": "form"
          }
        ]
      },
      {
        "id": "section.changeOrderWorkspace.reviewChangeOrderSection",
        "type": "section",
        "sectionName": "Review & Approve Change Order",
        "titleKey": "section.changeOrderWorkspace.reviewChangeOrderSection.title",
        "mode": "edit",
        "order": 30,
        "organisms": [
          {
            "id": "changeOrderStatusPanel",
            "type": "content",
            "organismName": "ChangeOrderStatusPanel",
            "titleKey": "organism.changeOrderWorkspace.detail10.title",
            "purpose": "Presents the change order's documented scope, cost impact, and schedule impact as read-only context so the project manager can make an informed approve-or-reject decision before acting.",
            "userActions": [],
            "requiredEntities": [],
            "readsFields": [],
            "writesFields": [],
            "rulesApplied": [],
            "order": 10,
            "intentions": [
              {
                "id": "intent.changeOrderWorkspace.detail10.content",
                "intent": "detail",
                "order": 10,
                "titleKey": "intent.changeOrderWorkspace.detail10.content.title",
                "displayHint": "detail",
                "fields": [],
                "columns": [],
                "filters": [],
                "toolbar": [],
                "rowActions": [],
                "actions": []
              }
            ],
            "displayHint": "detail"
          },
          {
            "id": "changeOrderStatusTransitionForm",
            "type": "commandForm",
            "organismName": "ChangeOrderStatusTransitionForm",
            "titleKey": "organism.changeOrderWorkspace.cmdUpdateChangeOrderStatus.title",
            "purpose": "Renders the allowed next-status transitions (approve / reject) as explicit action buttons; when rejecting, surfaces the rejection reason input, then confirms the status update command.",
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
            "order": 20,
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
