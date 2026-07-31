# E5 — Workflows & Operations: buildFlowFsm

- module: `buildFlowFsm`
- workflows: 6 / operations: 42
- generatedAt: 2026-07-31T04:58:23.844Z

## Workflows

### projectLifecycle — Project lifecycle

- actor: projectManager — trigger: Project manager creates a new construction or field service project with client, site, budget, and schedule.
- states: 5 (registered → active → onHold → closed → cancelled)
- transitions: 7
- operations: createProject, updateProjectStatus

### workTaskLifecycle — Work task lifecycle

- actor: projectManager, fieldWorker — trigger: Project manager creates a work task on an active project and assigns it to a field worker with a due date.
- states: 4 (assigned → inProgress → completed → cancelled)
- transitions: 4
- operations: createWorkTask, updateWorkTaskStatus

### changeOrderLifecycle — Change order lifecycle

- actor: projectManager — trigger: Project manager creates a change order on an active project to document a scope, cost, or schedule adjustment.
- states: 4 (draft → pendingReview → approved → rejected)
- transitions: 3
- operations: createChangeOrder, updateChangeOrderStatus

### statusReportLifecycle — Status report lifecycle

- actor: projectManager, client — trigger: Project manager generates an AI-assisted status report from live project data.
- states: 3 (draft → reviewed → shared)
- transitions: 2
- operations: generateStatusReport, updateStatusReportStatus

### billingSummaryLifecycle — Billing summary lifecycle

- actor: billingStaff — trigger: Billing staff compiles accumulated job costs into a new client-facing billing summary.
- states: 2 (draft → shared)
- transitions: 1
- operations: createBillingSummary, shareBillingSummary

### invoiceLifecycle — Invoice lifecycle

- actor: billingStaff — trigger: Billing staff creates an invoice from approved job costs and change orders for a project.
- states: 2 (draft → sent)
- transitions: 1
- operations: createInvoice, sendInvoice

## Operations

| operationId | kind | entity | actor | bffName |
| --- | --- | --- | --- | --- |
| createProject | create | Project | projectManager | `buildFlowFsm.projectLifecycle.createProject` |
| updateProjectStatus | update | Project | projectManager | `buildFlowFsm.projectLifecycle.updateProjectStatus` |
| updateProject | update | Project | projectManager | `buildFlowFsm.updateProject.updateProject` |
| queryProjects | query | Project | projectManager | `buildFlowFsm.queryProjects.queryProjects` |
| viewProject | view | Project | projectManager | `buildFlowFsm.viewProject.viewProject` |
| viewDashboard | view | Project | projectManager | `buildFlowFsm.viewDashboard.viewDashboard` |
| viewJobCostSummary | query | Project | billingStaff | `buildFlowFsm.viewJobCostSummary.viewJobCostSummary` |
| createWorkTask | create | WorkTask | projectManager | `buildFlowFsm.workTaskLifecycle.createWorkTask` |
| updateWorkTask | update | WorkTask | projectManager | `buildFlowFsm.updateWorkTask.updateWorkTask` |
| updateWorkTaskStatus | update | WorkTask | fieldWorker/projectManager | `buildFlowFsm.workTaskLifecycle.updateWorkTaskStatus` |
| queryWorkTasks | query | WorkTask | projectManager | `buildFlowFsm.queryWorkTasks.queryWorkTasks` |
| queryMyWorkTasks | query | WorkTask | fieldWorker | `buildFlowFsm.queryMyWorkTasks.queryMyWorkTasks` |
| viewWorkTask | view | WorkTask | fieldWorker | `buildFlowFsm.viewWorkTask.viewWorkTask` |
| createChangeOrder | create | ChangeOrder | projectManager | `buildFlowFsm.changeOrderLifecycle.createChangeOrder` |
| updateChangeOrder | update | ChangeOrder | projectManager | `buildFlowFsm.updateChangeOrder.updateChangeOrder` |
| updateChangeOrderStatus | update | ChangeOrder | projectManager | `buildFlowFsm.changeOrderLifecycle.updateChangeOrderStatus` |
| queryChangeOrders | query | ChangeOrder | projectManager | `buildFlowFsm.queryChangeOrders.queryChangeOrders` |
| viewChangeOrder | view | ChangeOrder | projectManager | `buildFlowFsm.viewChangeOrder.viewChangeOrder` |
| generateStatusReport | create | StatusReport | projectManager | `buildFlowFsm.statusReportLifecycle.generateStatusReport` |
| updateStatusReport | update | StatusReport | projectManager | `buildFlowFsm.updateStatusReport.updateStatusReport` |
| updateStatusReportStatus | update | StatusReport | projectManager | `buildFlowFsm.statusReportLifecycle.updateStatusReportStatus` |
| viewStatusReport | view | StatusReport | client | `buildFlowFsm.viewStatusReport.viewStatusReport` |
| generateDelayRiskSuggestions | create | DelayRiskSuggestion | projectManager | `buildFlowFsm.generateDelayRiskSuggestions.generateDelayRiskSuggestions` |
| queryDelayRiskSuggestions | query | DelayRiskSuggestion | projectManager | `buildFlowFsm.queryDelayRiskSuggestions.queryDelayRiskSuggestions` |
| createTimeLog | create | TimeLog | fieldWorker | `buildFlowFsm.createTimeLog.createTimeLog` |
| voidTimeLog | update | TimeLog | fieldWorker | `buildFlowFsm.voidTimeLog.voidTimeLog` |
| queryTimeLogs | query | TimeLog | projectManager | `buildFlowFsm.queryTimeLogs.queryTimeLogs` |
| createMaterialUsage | create | MaterialUsage | fieldWorker | `buildFlowFsm.createMaterialUsage.createMaterialUsage` |
| voidMaterialUsage | update | MaterialUsage | fieldWorker | `buildFlowFsm.voidMaterialUsage.voidMaterialUsage` |
| queryMaterialUsages | query | MaterialUsage | projectManager | `buildFlowFsm.queryMaterialUsages.queryMaterialUsages` |
| createBillingSummary | create | BillingSummary | billingStaff | `buildFlowFsm.billingSummaryLifecycle.createBillingSummary` |
| shareBillingSummary | update | BillingSummary | billingStaff | `buildFlowFsm.billingSummaryLifecycle.shareBillingSummary` |
| queryBillingSummaries | query | BillingSummary | billingStaff | `buildFlowFsm.queryBillingSummaries.queryBillingSummaries` |
| viewBillingSummary | view | BillingSummary | client | `buildFlowFsm.viewBillingSummary.viewBillingSummary` |
| createInvoice | create | Invoice | billingStaff | `buildFlowFsm.invoiceLifecycle.createInvoice` |
| sendInvoice | update | Invoice | billingStaff | `buildFlowFsm.invoiceLifecycle.sendInvoice` |
| queryInvoices | query | Invoice | billingStaff | `buildFlowFsm.queryInvoices.queryInvoices` |
| viewInvoice | view | Invoice | client | `buildFlowFsm.viewInvoice.viewInvoice` |
| queryClients | query | Client | projectManager | `buildFlowFsm.queryClients.queryClients` |
| createClient | create | Client | projectManager | `buildFlowFsm.createClient.createClient` |
| updateClient | update | Client | projectManager | `buildFlowFsm.updateClient.updateClient` |
| deleteClient | delete | Client | projectManager | `buildFlowFsm.deleteClient.deleteClient` |
