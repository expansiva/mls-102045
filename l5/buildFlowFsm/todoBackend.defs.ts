/// <mls fileReference="_102045_/l5/buildFlowFsm/todoBackend.defs.ts" enhancement="_blank"/>

export const buildFlowFsmTodoBackend = {
  "schemaVersion": "2026-07-02-layer-todo",
  "moduleName": "buildFlowFsm",
  "layer": "backend",
  "updatedAt": "2026-07-31T05:17:51.255Z",
  "owners": [
    {
      "ownerType": "workflow",
      "ownerId": "projectLifecycle",
      "title": "Project lifecycle",
      "status": "done",
      "defPath": "l4/buildFlowFsm/workflows/projectLifecycle.defs.ts",
      "pageId": "projectLifecycle",
      "capabilityId": "projectLifecycle"
    },
    {
      "ownerType": "workflow",
      "ownerId": "workTaskLifecycle",
      "title": "Work task lifecycle",
      "status": "done",
      "defPath": "l4/buildFlowFsm/workflows/workTaskLifecycle.defs.ts",
      "pageId": "workTaskLifecycle",
      "capabilityId": "workTaskLifecycle"
    },
    {
      "ownerType": "workflow",
      "ownerId": "changeOrderLifecycle",
      "title": "Change order lifecycle",
      "status": "done",
      "defPath": "l4/buildFlowFsm/workflows/changeOrderLifecycle.defs.ts",
      "pageId": "changeOrderLifecycle",
      "capabilityId": "changeOrderLifecycle"
    },
    {
      "ownerType": "workflow",
      "ownerId": "statusReportLifecycle",
      "title": "Status report lifecycle",
      "status": "done",
      "defPath": "l4/buildFlowFsm/workflows/statusReportLifecycle.defs.ts",
      "pageId": "statusReportLifecycle",
      "capabilityId": "statusReportLifecycle"
    },
    {
      "ownerType": "workflow",
      "ownerId": "billingSummaryLifecycle",
      "title": "Billing summary lifecycle",
      "status": "done",
      "defPath": "l4/buildFlowFsm/workflows/billingSummaryLifecycle.defs.ts",
      "pageId": "billingSummaryLifecycle",
      "capabilityId": "billingSummaryLifecycle"
    },
    {
      "ownerType": "workflow",
      "ownerId": "invoiceLifecycle",
      "title": "Invoice lifecycle",
      "status": "done",
      "defPath": "l4/buildFlowFsm/workflows/invoiceLifecycle.defs.ts",
      "pageId": "invoiceLifecycle",
      "capabilityId": "invoiceLifecycle"
    },
    {
      "ownerType": "operation",
      "ownerId": "createProject",
      "title": "Create project",
      "status": "done",
      "defPath": "l4/buildFlowFsm/operations/createProject.defs.ts",
      "pageId": "projectLifecycle",
      "commandName": "createProject",
      "bffName": "buildFlowFsm.projectLifecycle.createProject",
      "capabilityId": "projectLifecycle"
    },
    {
      "ownerType": "operation",
      "ownerId": "updateProjectStatus",
      "title": "Update project status",
      "status": "done",
      "defPath": "l4/buildFlowFsm/operations/updateProjectStatus.defs.ts",
      "pageId": "projectLifecycle",
      "commandName": "updateProjectStatus",
      "bffName": "buildFlowFsm.projectLifecycle.updateProjectStatus",
      "capabilityId": "projectLifecycle"
    },
    {
      "ownerType": "operation",
      "ownerId": "updateProject",
      "title": "Update project details",
      "status": "done",
      "defPath": "l4/buildFlowFsm/operations/updateProject.defs.ts",
      "pageId": "updateProject",
      "commandName": "updateProject",
      "bffName": "buildFlowFsm.updateProject.updateProject",
      "capabilityId": "updateProject"
    },
    {
      "ownerType": "operation",
      "ownerId": "queryProjects",
      "title": "Browse projects",
      "status": "done",
      "defPath": "l4/buildFlowFsm/operations/queryProjects.defs.ts",
      "pageId": "queryProjects",
      "commandName": "queryProjects",
      "bffName": "buildFlowFsm.queryProjects.queryProjects",
      "capabilityId": "queryProjects"
    },
    {
      "ownerType": "operation",
      "ownerId": "viewProject",
      "title": "View project detail and timeline",
      "status": "done",
      "defPath": "l4/buildFlowFsm/operations/viewProject.defs.ts",
      "pageId": "viewProject",
      "commandName": "viewProject",
      "bffName": "buildFlowFsm.viewProject.viewProject",
      "capabilityId": "viewProject"
    },
    {
      "ownerType": "operation",
      "ownerId": "viewDashboard",
      "title": "View operational dashboard",
      "status": "done",
      "defPath": "l4/buildFlowFsm/operations/viewDashboard.defs.ts",
      "pageId": "viewDashboard",
      "commandName": "viewDashboard",
      "bffName": "buildFlowFsm.viewDashboard.viewDashboard",
      "capabilityId": "viewDashboard"
    },
    {
      "ownerType": "operation",
      "ownerId": "viewJobCostSummary",
      "title": "View job cost summary",
      "status": "done",
      "defPath": "l4/buildFlowFsm/operations/viewJobCostSummary.defs.ts",
      "pageId": "viewJobCostSummary",
      "commandName": "viewJobCostSummary",
      "bffName": "buildFlowFsm.viewJobCostSummary.viewJobCostSummary",
      "capabilityId": "viewJobCostSummary"
    },
    {
      "ownerType": "operation",
      "ownerId": "createWorkTask",
      "title": "Create work task",
      "status": "done",
      "defPath": "l4/buildFlowFsm/operations/createWorkTask.defs.ts",
      "pageId": "workTaskLifecycle",
      "commandName": "createWorkTask",
      "bffName": "buildFlowFsm.workTaskLifecycle.createWorkTask",
      "capabilityId": "workTaskLifecycle"
    },
    {
      "ownerType": "operation",
      "ownerId": "updateWorkTask",
      "title": "Update work task assignment and details",
      "status": "done",
      "defPath": "l4/buildFlowFsm/operations/updateWorkTask.defs.ts",
      "pageId": "updateWorkTask",
      "commandName": "updateWorkTask",
      "bffName": "buildFlowFsm.updateWorkTask.updateWorkTask",
      "capabilityId": "updateWorkTask"
    },
    {
      "ownerType": "operation",
      "ownerId": "updateWorkTaskStatus",
      "title": "Update work task status",
      "status": "done",
      "defPath": "l4/buildFlowFsm/operations/updateWorkTaskStatus.defs.ts",
      "pageId": "workTaskLifecycle",
      "commandName": "updateWorkTaskStatus",
      "bffName": "buildFlowFsm.workTaskLifecycle.updateWorkTaskStatus",
      "capabilityId": "workTaskLifecycle"
    },
    {
      "ownerType": "operation",
      "ownerId": "queryWorkTasks",
      "title": "Browse work tasks",
      "status": "done",
      "defPath": "l4/buildFlowFsm/operations/queryWorkTasks.defs.ts",
      "pageId": "queryWorkTasks",
      "commandName": "queryWorkTasks",
      "bffName": "buildFlowFsm.queryWorkTasks.queryWorkTasks",
      "capabilityId": "queryWorkTasks"
    },
    {
      "ownerType": "operation",
      "ownerId": "queryMyWorkTasks",
      "title": "Browse my assigned tasks",
      "status": "done",
      "defPath": "l4/buildFlowFsm/operations/queryMyWorkTasks.defs.ts",
      "pageId": "queryMyWorkTasks",
      "commandName": "queryMyWorkTasks",
      "bffName": "buildFlowFsm.queryMyWorkTasks.queryMyWorkTasks",
      "capabilityId": "queryMyWorkTasks"
    },
    {
      "ownerType": "operation",
      "ownerId": "viewWorkTask",
      "title": "View work task details",
      "status": "done",
      "defPath": "l4/buildFlowFsm/operations/viewWorkTask.defs.ts",
      "pageId": "viewWorkTask",
      "commandName": "viewWorkTask",
      "bffName": "buildFlowFsm.viewWorkTask.viewWorkTask",
      "capabilityId": "viewWorkTask"
    },
    {
      "ownerType": "operation",
      "ownerId": "createChangeOrder",
      "title": "Create change order",
      "status": "done",
      "defPath": "l4/buildFlowFsm/operations/createChangeOrder.defs.ts",
      "pageId": "changeOrderLifecycle",
      "commandName": "createChangeOrder",
      "bffName": "buildFlowFsm.changeOrderLifecycle.createChangeOrder",
      "capabilityId": "changeOrderLifecycle"
    },
    {
      "ownerType": "operation",
      "ownerId": "updateChangeOrder",
      "title": "Update change order details",
      "status": "done",
      "defPath": "l4/buildFlowFsm/operations/updateChangeOrder.defs.ts",
      "pageId": "updateChangeOrder",
      "commandName": "updateChangeOrder",
      "bffName": "buildFlowFsm.updateChangeOrder.updateChangeOrder",
      "capabilityId": "updateChangeOrder"
    },
    {
      "ownerType": "operation",
      "ownerId": "updateChangeOrderStatus",
      "title": "Update change order status",
      "status": "done",
      "defPath": "l4/buildFlowFsm/operations/updateChangeOrderStatus.defs.ts",
      "pageId": "changeOrderLifecycle",
      "commandName": "updateChangeOrderStatus",
      "bffName": "buildFlowFsm.changeOrderLifecycle.updateChangeOrderStatus",
      "capabilityId": "changeOrderLifecycle"
    },
    {
      "ownerType": "operation",
      "ownerId": "queryChangeOrders",
      "title": "Browse change orders",
      "status": "done",
      "defPath": "l4/buildFlowFsm/operations/queryChangeOrders.defs.ts",
      "pageId": "queryChangeOrders",
      "commandName": "queryChangeOrders",
      "bffName": "buildFlowFsm.queryChangeOrders.queryChangeOrders",
      "capabilityId": "queryChangeOrders"
    },
    {
      "ownerType": "operation",
      "ownerId": "viewChangeOrder",
      "title": "View change order and cost impact",
      "status": "done",
      "defPath": "l4/buildFlowFsm/operations/viewChangeOrder.defs.ts",
      "pageId": "viewChangeOrder",
      "commandName": "viewChangeOrder",
      "bffName": "buildFlowFsm.viewChangeOrder.viewChangeOrder",
      "capabilityId": "viewChangeOrder"
    },
    {
      "ownerType": "operation",
      "ownerId": "generateStatusReport",
      "title": "Generate status report",
      "status": "done",
      "defPath": "l4/buildFlowFsm/operations/generateStatusReport.defs.ts",
      "pageId": "statusReportLifecycle",
      "commandName": "generateStatusReport",
      "bffName": "buildFlowFsm.statusReportLifecycle.generateStatusReport",
      "capabilityId": "statusReportLifecycle"
    },
    {
      "ownerType": "operation",
      "ownerId": "updateStatusReport",
      "title": "Edit status report content",
      "status": "done",
      "defPath": "l4/buildFlowFsm/operations/updateStatusReport.defs.ts",
      "pageId": "updateStatusReport",
      "commandName": "updateStatusReport",
      "bffName": "buildFlowFsm.updateStatusReport.updateStatusReport",
      "capabilityId": "updateStatusReport"
    },
    {
      "ownerType": "operation",
      "ownerId": "updateStatusReportStatus",
      "title": "Update status report status",
      "status": "done",
      "defPath": "l4/buildFlowFsm/operations/updateStatusReportStatus.defs.ts",
      "pageId": "statusReportLifecycle",
      "commandName": "updateStatusReportStatus",
      "bffName": "buildFlowFsm.statusReportLifecycle.updateStatusReportStatus",
      "capabilityId": "statusReportLifecycle"
    },
    {
      "ownerType": "operation",
      "ownerId": "viewStatusReport",
      "title": "View status report",
      "status": "done",
      "defPath": "l4/buildFlowFsm/operations/viewStatusReport.defs.ts",
      "pageId": "viewStatusReport",
      "commandName": "viewStatusReport",
      "bffName": "buildFlowFsm.viewStatusReport.viewStatusReport",
      "capabilityId": "viewStatusReport"
    },
    {
      "ownerType": "operation",
      "ownerId": "generateDelayRiskSuggestions",
      "title": "Generate delay-risk suggestions",
      "status": "done",
      "defPath": "l4/buildFlowFsm/operations/generateDelayRiskSuggestions.defs.ts",
      "pageId": "generateDelayRiskSuggestions",
      "commandName": "generateDelayRiskSuggestions",
      "bffName": "buildFlowFsm.generateDelayRiskSuggestions.generateDelayRiskSuggestions",
      "capabilityId": "generateDelayRiskSuggestions"
    },
    {
      "ownerType": "operation",
      "ownerId": "queryDelayRiskSuggestions",
      "title": "Review delay-risk suggestions",
      "status": "done",
      "defPath": "l4/buildFlowFsm/operations/queryDelayRiskSuggestions.defs.ts",
      "pageId": "queryDelayRiskSuggestions",
      "commandName": "queryDelayRiskSuggestions",
      "bffName": "buildFlowFsm.queryDelayRiskSuggestions.queryDelayRiskSuggestions",
      "capabilityId": "queryDelayRiskSuggestions"
    },
    {
      "ownerType": "operation",
      "ownerId": "createTimeLog",
      "title": "Log hours worked",
      "status": "done",
      "defPath": "l4/buildFlowFsm/operations/createTimeLog.defs.ts",
      "pageId": "createTimeLog",
      "commandName": "createTimeLog",
      "bffName": "buildFlowFsm.createTimeLog.createTimeLog",
      "capabilityId": "createTimeLog"
    },
    {
      "ownerType": "operation",
      "ownerId": "voidTimeLog",
      "title": "Void time log",
      "status": "done",
      "defPath": "l4/buildFlowFsm/operations/voidTimeLog.defs.ts",
      "pageId": "voidTimeLog",
      "commandName": "voidTimeLog",
      "bffName": "buildFlowFsm.voidTimeLog.voidTimeLog",
      "capabilityId": "voidTimeLog"
    },
    {
      "ownerType": "operation",
      "ownerId": "queryTimeLogs",
      "title": "Browse time logs",
      "status": "done",
      "defPath": "l4/buildFlowFsm/operations/queryTimeLogs.defs.ts",
      "pageId": "queryTimeLogs",
      "commandName": "queryTimeLogs",
      "bffName": "buildFlowFsm.queryTimeLogs.queryTimeLogs",
      "capabilityId": "queryTimeLogs"
    },
    {
      "ownerType": "operation",
      "ownerId": "createMaterialUsage",
      "title": "Log materials used",
      "status": "done",
      "defPath": "l4/buildFlowFsm/operations/createMaterialUsage.defs.ts",
      "pageId": "createMaterialUsage",
      "commandName": "createMaterialUsage",
      "bffName": "buildFlowFsm.createMaterialUsage.createMaterialUsage",
      "capabilityId": "createMaterialUsage"
    },
    {
      "ownerType": "operation",
      "ownerId": "voidMaterialUsage",
      "title": "Void material usage",
      "status": "done",
      "defPath": "l4/buildFlowFsm/operations/voidMaterialUsage.defs.ts",
      "pageId": "voidMaterialUsage",
      "commandName": "voidMaterialUsage",
      "bffName": "buildFlowFsm.voidMaterialUsage.voidMaterialUsage",
      "capabilityId": "voidMaterialUsage"
    },
    {
      "ownerType": "operation",
      "ownerId": "queryMaterialUsages",
      "title": "Browse material usage",
      "status": "done",
      "defPath": "l4/buildFlowFsm/operations/queryMaterialUsages.defs.ts",
      "pageId": "queryMaterialUsages",
      "commandName": "queryMaterialUsages",
      "bffName": "buildFlowFsm.queryMaterialUsages.queryMaterialUsages",
      "capabilityId": "queryMaterialUsages"
    },
    {
      "ownerType": "operation",
      "ownerId": "createBillingSummary",
      "title": "Create billing summary",
      "status": "done",
      "defPath": "l4/buildFlowFsm/operations/createBillingSummary.defs.ts",
      "pageId": "billingSummaryLifecycle",
      "commandName": "createBillingSummary",
      "bffName": "buildFlowFsm.billingSummaryLifecycle.createBillingSummary",
      "capabilityId": "billingSummaryLifecycle"
    },
    {
      "ownerType": "operation",
      "ownerId": "shareBillingSummary",
      "title": "Share billing summary with client",
      "status": "done",
      "defPath": "l4/buildFlowFsm/operations/shareBillingSummary.defs.ts",
      "pageId": "billingSummaryLifecycle",
      "commandName": "shareBillingSummary",
      "bffName": "buildFlowFsm.billingSummaryLifecycle.shareBillingSummary",
      "capabilityId": "billingSummaryLifecycle"
    },
    {
      "ownerType": "operation",
      "ownerId": "queryBillingSummaries",
      "title": "Browse billing summaries",
      "status": "done",
      "defPath": "l4/buildFlowFsm/operations/queryBillingSummaries.defs.ts",
      "pageId": "queryBillingSummaries",
      "commandName": "queryBillingSummaries",
      "bffName": "buildFlowFsm.queryBillingSummaries.queryBillingSummaries",
      "capabilityId": "queryBillingSummaries"
    },
    {
      "ownerType": "operation",
      "ownerId": "viewBillingSummary",
      "title": "View billing summary",
      "status": "done",
      "defPath": "l4/buildFlowFsm/operations/viewBillingSummary.defs.ts",
      "pageId": "viewBillingSummary",
      "commandName": "viewBillingSummary",
      "bffName": "buildFlowFsm.viewBillingSummary.viewBillingSummary",
      "capabilityId": "viewBillingSummary"
    },
    {
      "ownerType": "operation",
      "ownerId": "createInvoice",
      "title": "Create invoice",
      "status": "done",
      "defPath": "l4/buildFlowFsm/operations/createInvoice.defs.ts",
      "pageId": "invoiceLifecycle",
      "commandName": "createInvoice",
      "bffName": "buildFlowFsm.invoiceLifecycle.createInvoice",
      "capabilityId": "invoiceLifecycle"
    },
    {
      "ownerType": "operation",
      "ownerId": "sendInvoice",
      "title": "Send invoice to client",
      "status": "done",
      "defPath": "l4/buildFlowFsm/operations/sendInvoice.defs.ts",
      "pageId": "invoiceLifecycle",
      "commandName": "sendInvoice",
      "bffName": "buildFlowFsm.invoiceLifecycle.sendInvoice",
      "capabilityId": "invoiceLifecycle"
    },
    {
      "ownerType": "operation",
      "ownerId": "queryInvoices",
      "title": "Browse invoices",
      "status": "done",
      "defPath": "l4/buildFlowFsm/operations/queryInvoices.defs.ts",
      "pageId": "queryInvoices",
      "commandName": "queryInvoices",
      "bffName": "buildFlowFsm.queryInvoices.queryInvoices",
      "capabilityId": "queryInvoices"
    },
    {
      "ownerType": "operation",
      "ownerId": "viewInvoice",
      "title": "View invoice",
      "status": "done",
      "defPath": "l4/buildFlowFsm/operations/viewInvoice.defs.ts",
      "pageId": "viewInvoice",
      "commandName": "viewInvoice",
      "bffName": "buildFlowFsm.viewInvoice.viewInvoice",
      "capabilityId": "viewInvoice"
    },
    {
      "ownerType": "operation",
      "ownerId": "queryClients",
      "title": "Browse clients",
      "status": "done",
      "defPath": "l4/buildFlowFsm/operations/queryClients.defs.ts",
      "pageId": "queryClients",
      "commandName": "queryClients",
      "bffName": "buildFlowFsm.queryClients.queryClients",
      "capabilityId": "queryClients"
    },
    {
      "ownerType": "operation",
      "ownerId": "createClient",
      "title": "Create client",
      "status": "done",
      "defPath": "l4/buildFlowFsm/operations/createClient.defs.ts",
      "pageId": "createClient",
      "commandName": "createClient",
      "bffName": "buildFlowFsm.createClient.createClient",
      "capabilityId": "createClient"
    },
    {
      "ownerType": "operation",
      "ownerId": "updateClient",
      "title": "Update client",
      "status": "done",
      "defPath": "l4/buildFlowFsm/operations/updateClient.defs.ts",
      "pageId": "updateClient",
      "commandName": "updateClient",
      "bffName": "buildFlowFsm.updateClient.updateClient",
      "capabilityId": "updateClient"
    },
    {
      "ownerType": "operation",
      "ownerId": "deleteClient",
      "title": "Delete client",
      "status": "done",
      "defPath": "l4/buildFlowFsm/operations/deleteClient.defs.ts",
      "pageId": "deleteClient",
      "commandName": "deleteClient",
      "bffName": "buildFlowFsm.deleteClient.deleteClient",
      "capabilityId": "deleteClient"
    }
  ]
} as const;

export default buildFlowFsmTodoBackend;
