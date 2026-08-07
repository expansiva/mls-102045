/// <mls fileReference="_102045_/l2/buildFlowFsm/web/shared/jobCostWorkspace.defs.ts" enhancement="_blank"/>

export const definition = {
  "pageId": "jobCostWorkspace",
  "pageName": "Job Cost Summary",
  "moduleName": "buildFlowFsm",
  "baseClassName": "BuildFlowFsmJobCostWorkspaceBase",
  "routePattern": "/buildFlowFsm/jobCostWorkspace/:projectId?",
  "sourceKind": "operation",
  "ownerIds": [
    "operation:viewJobCostSummary"
  ],
  "operationIds": [
    "viewJobCostSummary"
  ],
  "origin": {
    "source": "l4-journey",
    "workspaceId": "jobCostWorkspace",
    "workspaceKind": "operation",
    "actor": "billingStaff",
    "entity": "Project",
    "owners": [
      {
        "kind": "operation",
        "id": "viewJobCostSummary",
        "defPath": "_102045_/l4/buildFlowFsm/operations/viewJobCostSummary.defs.ts"
      }
    ],
    "microUserFlow": {
      "source": "l4/story.steps",
      "workflowSteps": [],
      "operations": [
        {
          "operationId": "viewJobCostSummary",
          "commandName": "viewJobCostSummary",
          "steps": [
            "Open the job cost summary for a selected project",
            "See project identity, budget, and lifecycle status",
            "Review aggregated labor cost from non-voided time logs",
            "Review aggregated material cost from non-voided material usage",
            "Review aggregated cost from approved change orders",
            "Compare total actual cost to the project budget"
          ]
        }
      ]
    }
  },
  "contractRef": {
    "tsPath": "_102045_/l2/buildFlowFsm/web/contracts/jobCostWorkspace.ts",
    "contracts": [
      {
        "commandName": "viewJobCostSummary",
        "routeConst": "viewJobCostSummaryRoute"
      }
    ]
  },
  "layoutRef": {
    "defPath": "_102045_/l2/buildFlowFsm/web/desktop/page11/jobCostWorkspace.defs.ts",
    "layoutId": "cfe-20260731185234.1000"
  },
  "states": [
    {
      "stateKey": "ui.jobCostWorkspace.status",
      "name": "status",
      "kind": "pageStatus",
      "defaultValue": ""
    },
    {
      "stateKey": "ui.jobCostWorkspace.action.viewJobCostSummary.status",
      "name": "viewJobCostSummaryState",
      "kind": "actionStatus",
      "actionRef": "viewJobCostSummary",
      "valueSet": [
        "idle",
        "loading",
        "success",
        "error"
      ],
      "defaultValue": "idle"
    },
    {
      "stateKey": "ui.jobCostWorkspace.input.viewJobCostSummary.projectId",
      "name": "viewJobCostSummaryProjectId",
      "kind": "input",
      "source": "routeParam",
      "presentation": "route",
      "contractRef": {
        "commandName": "viewJobCostSummary",
        "direction": "input",
        "field": "projectId"
      },
      "defaultValue": ""
    },
    {
      "stateKey": "ui.jobCostWorkspace.data.viewJobCostSummary",
      "name": "viewJobCostSummaryData",
      "kind": "queryResult",
      "contractRef": {
        "commandName": "viewJobCostSummary",
        "direction": "output"
      },
      "outputShape": "object",
      "collection": false,
      "defaultValue": null
    }
  ],
  "actions": [
    {
      "actionId": "viewJobCostSummary",
      "kind": "query",
      "commandRef": "viewJobCostSummary",
      "routeKey": "buildFlowFsm.jobCostWorkspace.viewJobCostSummary",
      "purpose": "View job cost summary",
      "methodName": "loadViewJobCostSummary",
      "handlerName": "handleViewJobCostSummaryClick",
      "inputStateKeys": [
        "ui.jobCostWorkspace.input.viewJobCostSummary.projectId"
      ],
      "routeParamInputStateKeys": [
        "ui.jobCostWorkspace.input.viewJobCostSummary.projectId"
      ],
      "selectedEntityInputStateKeys": [],
      "outputStateKeys": [
        "ui.jobCostWorkspace.data.viewJobCostSummary"
      ],
      "statusStateKey": "ui.jobCostWorkspace.action.viewJobCostSummary.status"
    },
    {
      "actionId": "set.viewJobCostSummaryProjectId",
      "kind": "stateSetter",
      "stateKey": "ui.jobCostWorkspace.input.viewJobCostSummary.projectId",
      "methodName": "setViewJobCostSummaryProjectId",
      "handlerName": "handleViewJobCostSummaryProjectIdChange"
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
    "section.jobCostWorkspace.sec-costSummary.title": "Cost Summary",
    "organism.jobCostWorkspace.viewJobCostSummary.title": "View job cost summary",
    "intent.jobCostWorkspace.viewJobCostSummary.list.title": "View job cost summary",
    "intent.jobCostWorkspace.viewJobCostSummary.list.empty": "Nenhum registro encontrado",
    "intent.jobCostWorkspace.viewJobCostSummary.list.column.projectId.label": "Project Id",
    "intent.jobCostWorkspace.viewJobCostSummary.list.column.name.label": "Name",
    "intent.jobCostWorkspace.viewJobCostSummary.list.column.clientId.label": "Client Id",
    "intent.jobCostWorkspace.viewJobCostSummary.list.column.clientName.label": "Client Name",
    "intent.jobCostWorkspace.viewJobCostSummary.list.column.budget.label": "Budget",
    "intent.jobCostWorkspace.viewJobCostSummary.list.column.status.label": "Status",
    "intent.jobCostWorkspace.viewJobCostSummary.list.column.startDate.label": "Start Date",
    "intent.jobCostWorkspace.viewJobCostSummary.list.column.endDate.label": "End Date",
    "intent.jobCostWorkspace.viewJobCostSummary.list.column.laborCost.label": "Labor Cost",
    "intent.jobCostWorkspace.viewJobCostSummary.list.column.materialCost.label": "Material Cost",
    "intent.jobCostWorkspace.viewJobCostSummary.list.column.changeOrderCost.label": "Change Order Cost",
    "intent.jobCostWorkspace.viewJobCostSummary.list.column.totalCost.label": "Total Cost",
    "intent.jobCostWorkspace.viewJobCostSummary.list.column.budgetVariance.label": "Budget Variance",
    "section.jobCostWorkspace.sec-project-header.title": "Project Identity",
    "section.jobCostWorkspace.sec-cost-summary.title": "Budget & Cost Summary",
    "section.jobCostWorkspace.sec-cost-kpis.title": "Budget vs Actual",
    "section.jobCostWorkspace.sec-cost-breakdown.title": "Cost Breakdown"
  },
  "automation": {
    "statePrefix": "ui.jobCostWorkspace",
    "stateKeys": [
      "ui.jobCostWorkspace.status",
      "ui.jobCostWorkspace.action.viewJobCostSummary.status",
      "ui.jobCostWorkspace.input.viewJobCostSummary.projectId",
      "ui.jobCostWorkspace.data.viewJobCostSummary"
    ],
    "actionIds": [
      "viewJobCostSummary",
      "set.viewJobCostSummaryProjectId"
    ]
  }
};

export const pipeline = [
  {
    "id": "jobCostWorkspace__l2_shared",
    "type": "l2_shared",
    "outputPath": "_102045_/l2/buildFlowFsm/web/shared/jobCostWorkspace.ts",
    "defPath": "_102045_/l2/buildFlowFsm/web/shared/jobCostWorkspace.defs.ts",
    "dependsFiles": [
      "_102045_/l2/buildFlowFsm/web/contracts/jobCostWorkspace.ts",
      "_102029_.d.ts"
    ],
    "dependsOn": [],
    "skills": [
      "_102020_/l2/agentChangeFrontend/skills/genCfeSharedTs.ts"
    ],
    "rulesApplied": [
      "jobCostingRequiresBudgetAndSchedule"
    ],
    "agent": "agentCfeMaterializeGen"
  }
] as const;
