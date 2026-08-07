/// <mls fileReference="_102045_/l2/buildFlowFsm/web/shared/billingSummaryWorkspace.defs.ts" enhancement="_blank"/>

export const definition = {
  "pageId": "billingSummaryWorkspace",
  "pageName": "Billing Summaries",
  "moduleName": "buildFlowFsm",
  "baseClassName": "BuildFlowFsmBillingSummaryWorkspaceBase",
  "routePattern": "/buildFlowFsm/billingSummaryWorkspace/:projectId?/:billingSummaryId?",
  "sourceKind": "workflow",
  "ownerIds": [
    "workflow:billingSummaryLifecycle",
    "operation:queryBillingSummaries",
    "operation:createBillingSummary",
    "operation:shareBillingSummary"
  ],
  "operationIds": [
    "queryBillingSummaries",
    "createBillingSummary",
    "shareBillingSummary"
  ],
  "origin": {
    "source": "l4-journey",
    "workspaceId": "billingSummaryWorkspace",
    "workspaceKind": "workflow",
    "workflowId": "billingSummaryLifecycle",
    "actor": "billingStaff",
    "entity": "BillingSummary",
    "owners": [
      {
        "kind": "workflow",
        "id": "billingSummaryLifecycle",
        "defPath": "_102045_/l4/buildFlowFsm/workflows/billingSummaryLifecycle.defs.ts"
      },
      {
        "kind": "operation",
        "id": "queryBillingSummaries",
        "defPath": "_102045_/l4/buildFlowFsm/operations/queryBillingSummaries.defs.ts"
      },
      {
        "kind": "operation",
        "id": "createBillingSummary",
        "defPath": "_102045_/l4/buildFlowFsm/operations/createBillingSummary.defs.ts"
      },
      {
        "kind": "operation",
        "id": "shareBillingSummary",
        "defPath": "_102045_/l4/buildFlowFsm/operations/shareBillingSummary.defs.ts"
      }
    ],
    "microUserFlow": {
      "source": "l4/story.steps",
      "workflowSteps": [
        "Billing staff reviews labor, material, and approved change order costs for the project.",
        "Billing staff assembles a client-facing billing summary that breaks down labor, materials, and change orders.",
        "Billing staff shares the billing summary with the client for review before an invoice is generated."
      ],
      "operations": [
        {
          "operationId": "queryBillingSummaries",
          "commandName": "queryBillingSummaries",
          "steps": [
            "Open the billing summaries list",
            "Optionally filter by project and status",
            "Review period dates and labor, material, change-order, and total costs for each summary",
            "Select a summary to continue compiling or sharing"
          ]
        },
        {
          "operationId": "createBillingSummary",
          "commandName": "createBillingSummary",
          "steps": [
            "Open the project billing context",
            "Choose the billing period start and end dates",
            "Review accumulated labor, material, and approved change order costs for that period",
            "Confirm creation of the billing summary in draft status"
          ]
        },
        {
          "operationId": "shareBillingSummary",
          "commandName": "shareBillingSummary",
          "steps": [
            "Select a draft billing summary for the project",
            "Confirm the labor, material, and change-order breakdown is ready for the client",
            "Share the billing summary, marking it as shared and recording the share timestamp"
          ]
        }
      ]
    }
  },
  "contractRef": {
    "tsPath": "_102045_/l2/buildFlowFsm/web/contracts/billingSummaryWorkspace.ts",
    "contracts": [
      {
        "commandName": "listBillingSummaries",
        "routeConst": "listBillingSummariesRoute"
      },
      {
        "commandName": "createBillingSummaryCmd",
        "routeConst": "createBillingSummaryCmdRoute"
      },
      {
        "commandName": "shareBillingSummaryCmd",
        "routeConst": "shareBillingSummaryCmdRoute"
      }
    ]
  },
  "layoutRef": {
    "defPath": "_102045_/l2/buildFlowFsm/web/desktop/page11/billingSummaryWorkspace.defs.ts",
    "layoutId": "kanban_pipeline"
  },
  "states": [
    {
      "stateKey": "ui.billingSummaryWorkspace.status",
      "name": "status",
      "kind": "pageStatus",
      "defaultValue": ""
    },
    {
      "stateKey": "ui.billingSummaryWorkspace.action.listBillingSummaries.status",
      "name": "listBillingSummariesState",
      "kind": "actionStatus",
      "actionRef": "listBillingSummaries",
      "valueSet": [
        "idle",
        "loading",
        "success",
        "error"
      ],
      "defaultValue": "idle"
    },
    {
      "stateKey": "ui.billingSummaryWorkspace.input.listBillingSummaries.projectId",
      "name": "listBillingSummariesProjectId",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "listBillingSummaries",
        "direction": "input",
        "field": "projectId"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.billingSummaryWorkspace.input.listBillingSummaries.status",
      "name": "listBillingSummariesStatus",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "listBillingSummaries",
        "direction": "input",
        "field": "status"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.billingSummaryWorkspace.input.listBillingSummaries.page",
      "name": "listBillingSummariesPage",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "listBillingSummaries",
        "direction": "input",
        "field": "page"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.billingSummaryWorkspace.input.listBillingSummaries.pageSize",
      "name": "listBillingSummariesPageSize",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "listBillingSummaries",
        "direction": "input",
        "field": "pageSize"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.billingSummaryWorkspace.data.listBillingSummaries",
      "name": "listBillingSummariesData",
      "kind": "queryResult",
      "contractRef": {
        "commandName": "listBillingSummaries",
        "direction": "output"
      },
      "outputShape": "paginated",
      "collection": false,
      "defaultValue": {
        "items": [],
        "total": 0
      }
    },
    {
      "stateKey": "ui.billingSummaryWorkspace.action.createBillingSummaryCmd.status",
      "name": "createBillingSummaryCmdState",
      "kind": "actionStatus",
      "actionRef": "createBillingSummaryCmd",
      "valueSet": [
        "idle",
        "loading",
        "success",
        "error"
      ],
      "defaultValue": "idle"
    },
    {
      "stateKey": "ui.billingSummaryWorkspace.input.createBillingSummaryCmd.projectId",
      "name": "createBillingSummaryCmdProjectId",
      "kind": "input",
      "source": "routeParam",
      "presentation": "route",
      "contractRef": {
        "commandName": "createBillingSummaryCmd",
        "direction": "input",
        "field": "projectId"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.billingSummaryWorkspace.input.createBillingSummaryCmd.periodStart",
      "name": "createBillingSummaryCmdPeriodStart",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "createBillingSummaryCmd",
        "direction": "input",
        "field": "periodStart"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.billingSummaryWorkspace.input.createBillingSummaryCmd.periodEnd",
      "name": "createBillingSummaryCmdPeriodEnd",
      "kind": "input",
      "source": "userInput",
      "presentation": "form",
      "contractRef": {
        "commandName": "createBillingSummaryCmd",
        "direction": "input",
        "field": "periodEnd"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.billingSummaryWorkspace.output.createBillingSummaryCmd",
      "name": "createBillingSummaryCmdOutput",
      "kind": "commandOutput",
      "contractRef": {
        "commandName": "createBillingSummaryCmd",
        "direction": "output"
      },
      "defaultValue": null
    },
    {
      "stateKey": "ui.billingSummaryWorkspace.action.createBillingSummaryCmd.error",
      "name": "createBillingSummaryCmdError",
      "kind": "actionError",
      "actionRef": "createBillingSummaryCmd",
      "defaultValue": ""
    },
    {
      "stateKey": "ui.billingSummaryWorkspace.action.shareBillingSummaryCmd.status",
      "name": "shareBillingSummaryCmdState",
      "kind": "actionStatus",
      "actionRef": "shareBillingSummaryCmd",
      "valueSet": [
        "idle",
        "loading",
        "success",
        "error"
      ],
      "defaultValue": "idle"
    },
    {
      "stateKey": "ui.billingSummaryWorkspace.input.shareBillingSummaryCmd.billingSummaryId",
      "name": "shareBillingSummaryCmdBillingSummaryId",
      "kind": "input",
      "source": "routeParam",
      "presentation": "route",
      "contractRef": {
        "commandName": "shareBillingSummaryCmd",
        "direction": "input",
        "field": "billingSummaryId"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.billingSummaryWorkspace.input.shareBillingSummaryCmd.status",
      "name": "shareBillingSummaryCmdStatus",
      "kind": "input",
      "source": "systemDefault",
      "presentation": "form",
      "contractRef": {
        "commandName": "shareBillingSummaryCmd",
        "direction": "input",
        "field": "status"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.billingSummaryWorkspace.output.shareBillingSummaryCmd",
      "name": "shareBillingSummaryCmdOutput",
      "kind": "commandOutput",
      "contractRef": {
        "commandName": "shareBillingSummaryCmd",
        "direction": "output"
      },
      "defaultValue": null
    },
    {
      "stateKey": "ui.billingSummaryWorkspace.action.shareBillingSummaryCmd.error",
      "name": "shareBillingSummaryCmdError",
      "kind": "actionError",
      "actionRef": "shareBillingSummaryCmd",
      "defaultValue": ""
    }
  ],
  "actions": [
    {
      "actionId": "listBillingSummaries",
      "kind": "query",
      "commandRef": "listBillingSummaries",
      "routeKey": "buildFlowFsm.billingSummaryWorkspace.listBillingSummaries",
      "purpose": "Browse billing summaries",
      "methodName": "loadListBillingSummaries",
      "handlerName": "handleListBillingSummariesClick",
      "inputStateKeys": [
        "ui.billingSummaryWorkspace.input.listBillingSummaries.projectId",
        "ui.billingSummaryWorkspace.input.listBillingSummaries.status",
        "ui.billingSummaryWorkspace.input.listBillingSummaries.page",
        "ui.billingSummaryWorkspace.input.listBillingSummaries.pageSize"
      ],
      "routeParamInputStateKeys": [],
      "selectedEntityInputStateKeys": [],
      "outputStateKeys": [
        "ui.billingSummaryWorkspace.data.listBillingSummaries"
      ],
      "statusStateKey": "ui.billingSummaryWorkspace.action.listBillingSummaries.status"
    },
    {
      "actionId": "createBillingSummaryCmd",
      "kind": "command",
      "commandRef": "createBillingSummaryCmd",
      "routeKey": "buildFlowFsm.billingSummaryWorkspace.createBillingSummaryCmd",
      "purpose": "Create billing summary",
      "methodName": "createBillingSummaryCmd",
      "handlerName": "handleCreateBillingSummaryCmdClick",
      "inputStateKeys": [
        "ui.billingSummaryWorkspace.input.createBillingSummaryCmd.projectId",
        "ui.billingSummaryWorkspace.input.createBillingSummaryCmd.periodStart",
        "ui.billingSummaryWorkspace.input.createBillingSummaryCmd.periodEnd"
      ],
      "routeParamInputStateKeys": [
        "ui.billingSummaryWorkspace.input.createBillingSummaryCmd.projectId"
      ],
      "selectedEntityInputStateKeys": [],
      "outputStateKeys": [
        "ui.billingSummaryWorkspace.output.createBillingSummaryCmd"
      ],
      "statusStateKey": "ui.billingSummaryWorkspace.action.createBillingSummaryCmd.status",
      "errorStateKey": "ui.billingSummaryWorkspace.action.createBillingSummaryCmd.error",
      "feedback": {
        "successMessageKey": "action.createBillingSummaryCmd.success",
        "errorMessageKey": "action.createBillingSummaryCmd.error",
        "dismissible": true
      },
      "clearInputStateKeys": [
        "ui.billingSummaryWorkspace.input.createBillingSummaryCmd.periodStart",
        "ui.billingSummaryWorkspace.input.createBillingSummaryCmd.periodEnd"
      ],
      "refreshActionIds": [
        "listBillingSummaries"
      ]
    },
    {
      "actionId": "shareBillingSummaryCmd",
      "kind": "command",
      "commandRef": "shareBillingSummaryCmd",
      "routeKey": "buildFlowFsm.billingSummaryWorkspace.shareBillingSummaryCmd",
      "purpose": "Share billing summary with client",
      "methodName": "shareBillingSummaryCmd",
      "handlerName": "handleShareBillingSummaryCmdClick",
      "inputStateKeys": [
        "ui.billingSummaryWorkspace.input.shareBillingSummaryCmd.billingSummaryId",
        "ui.billingSummaryWorkspace.input.shareBillingSummaryCmd.status"
      ],
      "routeParamInputStateKeys": [
        "ui.billingSummaryWorkspace.input.shareBillingSummaryCmd.billingSummaryId"
      ],
      "selectedEntityInputStateKeys": [],
      "outputStateKeys": [
        "ui.billingSummaryWorkspace.output.shareBillingSummaryCmd"
      ],
      "statusStateKey": "ui.billingSummaryWorkspace.action.shareBillingSummaryCmd.status",
      "errorStateKey": "ui.billingSummaryWorkspace.action.shareBillingSummaryCmd.error",
      "feedback": {
        "successMessageKey": "action.shareBillingSummaryCmd.success",
        "errorMessageKey": "action.shareBillingSummaryCmd.error",
        "dismissible": true
      },
      "clearInputStateKeys": [
        "ui.billingSummaryWorkspace.input.shareBillingSummaryCmd.status"
      ],
      "refreshActionIds": [
        "listBillingSummaries"
      ]
    },
    {
      "actionId": "set.listBillingSummariesProjectId",
      "kind": "stateSetter",
      "stateKey": "ui.billingSummaryWorkspace.input.listBillingSummaries.projectId",
      "methodName": "setListBillingSummariesProjectId",
      "handlerName": "handleListBillingSummariesProjectIdChange"
    },
    {
      "actionId": "set.listBillingSummariesStatus",
      "kind": "stateSetter",
      "stateKey": "ui.billingSummaryWorkspace.input.listBillingSummaries.status",
      "methodName": "setListBillingSummariesStatus",
      "handlerName": "handleListBillingSummariesStatusChange"
    },
    {
      "actionId": "set.listBillingSummariesPage",
      "kind": "stateSetter",
      "stateKey": "ui.billingSummaryWorkspace.input.listBillingSummaries.page",
      "methodName": "setListBillingSummariesPage",
      "handlerName": "handleListBillingSummariesPageChange"
    },
    {
      "actionId": "set.listBillingSummariesPageSize",
      "kind": "stateSetter",
      "stateKey": "ui.billingSummaryWorkspace.input.listBillingSummaries.pageSize",
      "methodName": "setListBillingSummariesPageSize",
      "handlerName": "handleListBillingSummariesPageSizeChange"
    },
    {
      "actionId": "set.createBillingSummaryCmdProjectId",
      "kind": "stateSetter",
      "stateKey": "ui.billingSummaryWorkspace.input.createBillingSummaryCmd.projectId",
      "methodName": "setCreateBillingSummaryCmdProjectId",
      "handlerName": "handleCreateBillingSummaryCmdProjectIdChange"
    },
    {
      "actionId": "set.createBillingSummaryCmdPeriodStart",
      "kind": "stateSetter",
      "stateKey": "ui.billingSummaryWorkspace.input.createBillingSummaryCmd.periodStart",
      "methodName": "setCreateBillingSummaryCmdPeriodStart",
      "handlerName": "handleCreateBillingSummaryCmdPeriodStartChange"
    },
    {
      "actionId": "set.createBillingSummaryCmdPeriodEnd",
      "kind": "stateSetter",
      "stateKey": "ui.billingSummaryWorkspace.input.createBillingSummaryCmd.periodEnd",
      "methodName": "setCreateBillingSummaryCmdPeriodEnd",
      "handlerName": "handleCreateBillingSummaryCmdPeriodEndChange"
    },
    {
      "actionId": "set.shareBillingSummaryCmdBillingSummaryId",
      "kind": "stateSetter",
      "stateKey": "ui.billingSummaryWorkspace.input.shareBillingSummaryCmd.billingSummaryId",
      "methodName": "setShareBillingSummaryCmdBillingSummaryId",
      "handlerName": "handleShareBillingSummaryCmdBillingSummaryIdChange"
    },
    {
      "actionId": "set.shareBillingSummaryCmdStatus",
      "kind": "stateSetter",
      "stateKey": "ui.billingSummaryWorkspace.input.shareBillingSummaryCmd.status",
      "methodName": "setShareBillingSummaryCmdStatus",
      "handlerName": "handleShareBillingSummaryCmdStatusChange"
    }
  ],
  "initialLoads": [
    {
      "actionId": "listBillingSummaries",
      "stateKey": "ui.billingSummaryWorkspace.data.listBillingSummaries"
    }
  ],
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
    "section.billingSummaryWorkspace.sec-billing-summary-list.title": "Billing Summaries Pipeline",
    "organism.billingSummaryWorkspace.inline-row-command10.title": "Inline row command",
    "intent.billingSummaryWorkspace.inline-row-command10.content.title": "Inline row command",
    "organism.billingSummaryWorkspace.listBillingSummaries.title": "Browse billing summaries",
    "intent.billingSummaryWorkspace.listBillingSummaries.list.title": "Browse billing summaries",
    "intent.billingSummaryWorkspace.listBillingSummaries.list.empty": "Nenhum registro encontrado",
    "intent.billingSummaryWorkspace.listBillingSummaries.list.column.billingSummaries.label": "Billing Summaries",
    "intent.billingSummaryWorkspace.listBillingSummaries.list.column.total.label": "Total",
    "intent.billingSummaryWorkspace.listBillingSummaries.list.filter.projectId.label": "Project Id",
    "intent.billingSummaryWorkspace.listBillingSummaries.list.filter.status.label": "Status",
    "intent.billingSummaryWorkspace.listBillingSummaries.list.filter.page.label": "Page",
    "intent.billingSummaryWorkspace.listBillingSummaries.list.filter.pageSize.label": "Page Size",
    "organism.billingSummaryWorkspace.createBillingSummaryCmd.title": "Create billing summary",
    "intent.billingSummaryWorkspace.createBillingSummaryCmd.form.title": "Create billing summary",
    "intent.billingSummaryWorkspace.createBillingSummaryCmd.form.action.createBillingSummaryCmd": "Create billing summary",
    "intent.billingSummaryWorkspace.createBillingSummaryCmd.form.field.periodStart.label": "Period Start",
    "intent.billingSummaryWorkspace.createBillingSummaryCmd.form.field.periodEnd.label": "Period End",
    "organism.billingSummaryWorkspace.shareBillingSummaryCmd.title": "Share billing summary with client",
    "intent.billingSummaryWorkspace.shareBillingSummaryCmd.form.title": "Share billing summary with client",
    "intent.billingSummaryWorkspace.shareBillingSummaryCmd.form.action.shareBillingSummaryCmd": "Share billing summary with client",
    "intent.billingSummaryWorkspace.shareBillingSummaryCmd.form.field.status.label": "Status",
    "action.createBillingSummaryCmd.success": "Create billing summary: OK",
    "action.createBillingSummaryCmd.error": "Create billing summary: falhou",
    "action.shareBillingSummaryCmd.success": "Share billing summary with client: OK",
    "action.shareBillingSummaryCmd.error": "Share billing summary with client: falhou",
    "section.billingSummaryWorkspace.sec-billing-list.title": "Billing Summaries",
    "section.billingSummaryWorkspace.sec-create-billing.title": "Create Billing Summary",
    "section.billingSummaryWorkspace.sec-billing-summary-workspace.title": "Billing Summary Workspace"
  },
  "automation": {
    "statePrefix": "ui.billingSummaryWorkspace",
    "stateKeys": [
      "ui.billingSummaryWorkspace.status",
      "ui.billingSummaryWorkspace.action.listBillingSummaries.status",
      "ui.billingSummaryWorkspace.input.listBillingSummaries.projectId",
      "ui.billingSummaryWorkspace.input.listBillingSummaries.status",
      "ui.billingSummaryWorkspace.input.listBillingSummaries.page",
      "ui.billingSummaryWorkspace.input.listBillingSummaries.pageSize",
      "ui.billingSummaryWorkspace.data.listBillingSummaries",
      "ui.billingSummaryWorkspace.action.createBillingSummaryCmd.status",
      "ui.billingSummaryWorkspace.input.createBillingSummaryCmd.projectId",
      "ui.billingSummaryWorkspace.input.createBillingSummaryCmd.periodStart",
      "ui.billingSummaryWorkspace.input.createBillingSummaryCmd.periodEnd",
      "ui.billingSummaryWorkspace.output.createBillingSummaryCmd",
      "ui.billingSummaryWorkspace.action.createBillingSummaryCmd.error",
      "ui.billingSummaryWorkspace.action.shareBillingSummaryCmd.status",
      "ui.billingSummaryWorkspace.input.shareBillingSummaryCmd.billingSummaryId",
      "ui.billingSummaryWorkspace.input.shareBillingSummaryCmd.status",
      "ui.billingSummaryWorkspace.output.shareBillingSummaryCmd",
      "ui.billingSummaryWorkspace.action.shareBillingSummaryCmd.error"
    ],
    "actionIds": [
      "listBillingSummaries",
      "createBillingSummaryCmd",
      "shareBillingSummaryCmd",
      "set.listBillingSummariesProjectId",
      "set.listBillingSummariesStatus",
      "set.listBillingSummariesPage",
      "set.listBillingSummariesPageSize",
      "set.createBillingSummaryCmdProjectId",
      "set.createBillingSummaryCmdPeriodStart",
      "set.createBillingSummaryCmdPeriodEnd",
      "set.shareBillingSummaryCmdBillingSummaryId",
      "set.shareBillingSummaryCmdStatus"
    ]
  }
};

export const pipeline = [
  {
    "id": "billingSummaryWorkspace__l2_shared",
    "type": "l2_shared",
    "outputPath": "_102045_/l2/buildFlowFsm/web/shared/billingSummaryWorkspace.ts",
    "defPath": "_102045_/l2/buildFlowFsm/web/shared/billingSummaryWorkspace.defs.ts",
    "dependsFiles": [
      "_102045_/l2/buildFlowFsm/web/contracts/billingSummaryWorkspace.ts",
      "_102029_.d.ts"
    ],
    "dependsOn": [],
    "skills": [
      "_102020_/l2/agentChangeFrontend/skills/genCfeSharedTs.ts"
    ],
    "rulesApplied": [
      "onlyApprovedChangeOrdersAffectCosting",
      "billingSummaryClientFacing",
      "clientBillingAccess"
    ],
    "agent": "agentCfeMaterializeGen"
  }
] as const;
