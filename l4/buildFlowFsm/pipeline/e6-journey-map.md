# E6 — Journey map: buildFlowFsm

- module: `buildFlowFsm`
- workspaces: 14 / landings: 4 / edges: 13
- generatedAt: 2026-07-31T05:04:24.335Z
- Consolidated navigation map derived from workflows/operations stories (view, not source).

## Workspaces by actor

### projectManager

- `dashboardWorkspace` (operation, Project): Operational Dashboard — Project manager gets a quick overview of all active projects, budget drift, and task urgency.
  - bffCall `getDashboardSummary` [query] uses viewDashboard `buildFlowFsm.dashboardWorkspace.getDashboardSummary`
  - bffCall `getProjectList` [query] uses queryProjects `buildFlowFsm.dashboardWorkspace.getProjectList`
  - section `kpiAndBudgetSection` — Review active project KPIs — budget drift, actual cost, and task urgency — across all projects at a glance.
    - [filterControl] `getDashboardSummary`
    - [primarySurface] `getDashboardSummary`
  - section `projectListSection` — Browse and filter all projects by status, reviewing schedule, site, and budget details.
    - [filterControl] `getProjectList`
    - [primarySurface] `getProjectList`
- `projectLifecycleWorkspace` (workflow, Project) — workflow `projectLifecycle`: Manage Projects — Project manager creates and maintains projects through their full lifecycle.
  - bffCall `createProjectCmd` [command] uses createProject `buildFlowFsm.projectLifecycleWorkspace.createProjectCmd`
  - bffCall `updateProjectCmd` [command] uses updateProject `buildFlowFsm.projectLifecycleWorkspace.updateProjectCmd`
  - bffCall `updateProjectStatusCmd` [command] uses updateProjectStatus `buildFlowFsm.projectLifecycleWorkspace.updateProjectStatusCmd`
  - section `createProjectSection` — Project manager fills in all required project details and confirms creation to register a new project in the system.
    - [primarySurface] `createProjectCmd`
  - section `editProjectSection` — Project manager revises the project's name, client, site address, budget, and schedule dates and saves the updated record.
    - [primarySurface] `updateProjectCmd`
  - section `projectStatusSection` — Project manager transitions the project to a new lifecycle status, providing a hold or cancellation reason when required.
    - [primarySurface] `updateProjectStatusCmd`
- `projectDetailWorkspace` (operation, Project): Project Detail & Timeline — Project manager reviews the full project detail, timeline, tasks, change orders, costs, and delay-risk insights.
  - bffCall `getProjectDetail` [query] uses viewProject `buildFlowFsm.projectDetailWorkspace.getProjectDetail`
  - bffCall `listWorkTasks` [query] uses queryWorkTasks `buildFlowFsm.projectDetailWorkspace.listWorkTasks`
  - bffCall `listChangeOrders` [query] uses queryChangeOrders `buildFlowFsm.projectDetailWorkspace.listChangeOrders`
  - bffCall `getChangeOrderDetail` [query] uses viewChangeOrder `buildFlowFsm.projectDetailWorkspace.getChangeOrderDetail`
  - bffCall `listTimeLogs` [query] uses queryTimeLogs `buildFlowFsm.projectDetailWorkspace.listTimeLogs`
  - bffCall `listMaterialUsages` [query] uses queryMaterialUsages `buildFlowFsm.projectDetailWorkspace.listMaterialUsages`
  - bffCall `triggerDelayRiskSuggestions` [command] uses generateDelayRiskSuggestions `buildFlowFsm.projectDetailWorkspace.triggerDelayRiskSuggestions`
  - bffCall `listDelayRiskSuggestions` [query] uses queryDelayRiskSuggestions `buildFlowFsm.projectDetailWorkspace.listDelayRiskSuggestions`
  - section `projectHeader` — Review the full project record — client, site, schedule, budget, and current status — as the anchor for all downstream analysis.
    - [primarySurface] `getProjectDetail`
  - section `taskTimeline` — Browse and filter work tasks for this project, tracking status, assignees, due dates, and overdue flags.
    - [primarySurface] `listWorkTasks`
    - [filterControl] `listWorkTasks`
  - section `changeOrdersSection` — Review all change orders for this project, filter by status or impact type, and inspect the cost and schedule impact of a selected change order.
    - [primarySurface] `listChangeOrders`
    - [filterControl] `listChangeOrders`
    - [detailPanel] `getChangeOrderDetail`
  - section `costTracking` — Examine time logs and material usage entries to understand labor and material costs incurred on this project.
    - [primarySurface] `listTimeLogs`
    - [filterControl] `listTimeLogs`
    - [navigationEntry] `listMaterialUsages`
  - section `materialUsageSection` — Review material usage entries for this project, filtering by status to distinguish posted costs from voided corrections.
    - [primarySurface] `listMaterialUsages`
    - [filterControl] `listMaterialUsages`
  - section `delayRiskInsights` — Generate and review AI-produced delay-risk suggestions linked to the current status report, inspecting risk level, reason, and recommended action per task.
    - [primarySurface] `listDelayRiskSuggestions`
    - [filterControl] `listDelayRiskSuggestions`
    - [contextualAction] `triggerDelayRiskSuggestions`
- `changeOrderWorkspace` (workflow, ChangeOrder) — workflow `changeOrderLifecycle`: Change Orders — Project manager documents, edits, and approves change orders, applying cost impact to the job.
  - bffCall `cmdCreateChangeOrder` [command] uses createChangeOrder `buildFlowFsm.changeOrderWorkspace.cmdCreateChangeOrder`
  - bffCall `cmdUpdateChangeOrder` [command] uses updateChangeOrder `buildFlowFsm.changeOrderWorkspace.cmdUpdateChangeOrder`
  - bffCall `cmdUpdateChangeOrderStatus` [command] uses updateChangeOrderStatus `buildFlowFsm.changeOrderWorkspace.cmdUpdateChangeOrderStatus`
  - section `createChangeOrderSection` — Project manager fills in the change order details and submits it for recording in draft status.
    - [primarySurface] `cmdCreateChangeOrder`
  - section `editChangeOrderSection` — Project manager corrects or refines the details of an existing editable change order.
    - [primarySurface] `cmdUpdateChangeOrder`
  - section `reviewChangeOrderSection` — Project manager reviews the change order scope, cost, and schedule impact, then approves or rejects it with an optional rejection reason.
    - [primarySurface] `cmdUpdateChangeOrderStatus`
- `statusReportWorkspace` (workflow, StatusReport) — workflow `statusReportLifecycle`: Status Reports — Project manager generates AI-assisted status reports, reviews delay-risk suggestions, and shares reports with clients.
  - bffCall `generateReport` [command] uses generateStatusReport `buildFlowFsm.statusReportWorkspace.generateReport`
  - bffCall `updateReportContent` [command] uses updateStatusReport `buildFlowFsm.statusReportWorkspace.updateReportContent`
  - bffCall `updateReportStatus` [command] uses updateStatusReportStatus `buildFlowFsm.statusReportWorkspace.updateReportStatus`
  - section `generateSection` — Project manager selects a project and reporting period to generate an AI-assisted status report
    - [primarySurface] `generateReport`
  - section `reviewAndShareSection` — Project manager reviews AI-generated content, edits summary and overviews, adds notes, and transitions the report to reviewed or shared with clients
    - [primarySurface] `updateReportContent`
    - [contextualAction] `updateReportStatus`
- `clientManagementWorkspace` (entityManagement, Client): Client Directory — Project manager maintains the client directory used across projects.
  - bffCall `listClients` [query] uses queryClients `buildFlowFsm.clientManagementWorkspace.listClients`
  - bffCall `createClientCmd` [command] uses createClient `buildFlowFsm.clientManagementWorkspace.createClientCmd`
  - bffCall `updateClientCmd` [command] uses updateClient `buildFlowFsm.clientManagementWorkspace.updateClientCmd`
  - bffCall `deleteClientCmd` [command] uses deleteClient `buildFlowFsm.clientManagementWorkspace.deleteClientCmd`
  - section `clientListSection` — Browse, search and manage all clients in the directory
    - [filterControl] `listClients`
    - [primarySurface] `listClients`
    - [contextualAction] `createClientCmd`
    - [contextualAction] `updateClientCmd`
    - [contextualAction] `deleteClientCmd`
- `taskBoardWorkspace` (workflow, WorkTask) — workflow `workTaskLifecycle`: Task Board — Project manager creates and assigns work tasks; field workers update task status from the field.
  - bffCall `cmdCreateWorkTask` [command] uses createWorkTask `buildFlowFsm.taskBoardWorkspace.cmdCreateWorkTask`
  - bffCall `cmdUpdateWorkTask` [command] uses updateWorkTask `buildFlowFsm.taskBoardWorkspace.cmdUpdateWorkTask`
  - bffCall `cmdUpdateWorkTaskStatus` [command] uses updateWorkTaskStatus `buildFlowFsm.taskBoardWorkspace.cmdUpdateWorkTaskStatus`
  - section `createTaskSection` — Project manager fills in task details, assigns a field worker, and sets a due date to create a new work task.
    - [primarySurface] `cmdCreateWorkTask`
  - section `editTaskSection` — Project manager edits task details, reassigns the worker, or updates the status of an existing work task.
    - [primarySurface] `cmdUpdateWorkTask`
  - section `fieldStatusSection` — Field worker updates the lifecycle status of their assigned task from the field.
    - [primarySurface] `cmdUpdateWorkTaskStatus`
- `myTasksWorkspace` (operation, WorkTask): My Tasks — Field worker browses and reviews their assigned tasks for the day.
  - bffCall `listMyWorkTasks` [query] uses queryMyWorkTasks `buildFlowFsm.myTasksWorkspace.listMyWorkTasks`
  - bffCall `getWorkTaskDetail` [query] uses viewWorkTask `buildFlowFsm.myTasksWorkspace.getWorkTaskDetail`
  - section `taskListSection` — Browse all tasks assigned to the signed-in field worker, filtered by status, sorted by due date with overdue items highlighted.
    - [filterControl] `listMyWorkTasks`
    - [primarySurface] `listMyWorkTasks`
    - [detailPanel] `getWorkTaskDetail`

### fieldWorker

- `taskBoardWorkspace` (workflow, WorkTask) — workflow `workTaskLifecycle`: Task Board — Project manager creates and assigns work tasks; field workers update task status from the field.
  - bffCall `cmdCreateWorkTask` [command] uses createWorkTask `buildFlowFsm.taskBoardWorkspace.cmdCreateWorkTask`
  - bffCall `cmdUpdateWorkTask` [command] uses updateWorkTask `buildFlowFsm.taskBoardWorkspace.cmdUpdateWorkTask`
  - bffCall `cmdUpdateWorkTaskStatus` [command] uses updateWorkTaskStatus `buildFlowFsm.taskBoardWorkspace.cmdUpdateWorkTaskStatus`
  - section `createTaskSection` — Project manager fills in task details, assigns a field worker, and sets a due date to create a new work task.
    - [primarySurface] `cmdCreateWorkTask`
  - section `editTaskSection` — Project manager edits task details, reassigns the worker, or updates the status of an existing work task.
    - [primarySurface] `cmdUpdateWorkTask`
  - section `fieldStatusSection` — Field worker updates the lifecycle status of their assigned task from the field.
    - [primarySurface] `cmdUpdateWorkTaskStatus`
- `myTasksWorkspace` (operation, WorkTask): My Tasks — Field worker browses and reviews their assigned tasks for the day.
  - bffCall `listMyWorkTasks` [query] uses queryMyWorkTasks `buildFlowFsm.myTasksWorkspace.listMyWorkTasks`
  - bffCall `getWorkTaskDetail` [query] uses viewWorkTask `buildFlowFsm.myTasksWorkspace.getWorkTaskDetail`
  - section `taskListSection` — Browse all tasks assigned to the signed-in field worker, filtered by status, sorted by due date with overdue items highlighted.
    - [filterControl] `listMyWorkTasks`
    - [primarySurface] `listMyWorkTasks`
    - [detailPanel] `getWorkTaskDetail`
- `fieldLoggingWorkspace` (operation, TimeLog): Log Time & Materials — Field worker logs hours worked and materials used against active tasks, keeping job costing accurate.
  - bffCall `submitTimeLog` [command] uses createTimeLog `buildFlowFsm.fieldLoggingWorkspace.submitTimeLog`
  - bffCall `submitVoidTimeLog` [command] uses voidTimeLog `buildFlowFsm.fieldLoggingWorkspace.submitVoidTimeLog`
  - bffCall `submitMaterialUsage` [command] uses createMaterialUsage `buildFlowFsm.fieldLoggingWorkspace.submitMaterialUsage`
  - bffCall `submitVoidMaterialUsage` [command] uses voidMaterialUsage `buildFlowFsm.fieldLoggingWorkspace.submitVoidMaterialUsage`
  - section `timeLoggingSection` — Field worker selects a work task, enters the date and hours worked, and submits the time log entry.
    - [primarySurface] `submitTimeLog`
    - [contextualAction] `submitVoidTimeLog`
  - section `materialLoggingSection` — Field worker enters material name, quantity, unit, cost, and usage date to post a material usage record against the active project.
    - [primarySurface] `submitMaterialUsage`
    - [contextualAction] `submitVoidMaterialUsage`

### billingStaff

- `jobCostWorkspace` (operation, Project): Job Cost Summary — Billing staff reviews accumulated job costs per project before preparing billing documents.
  - bffCall `viewJobCostSummary` [query] uses viewJobCostSummary `buildFlowFsm.jobCostWorkspace.viewJobCostSummary`
  - section `costSummary` — Billing staff reviews the project's identity, budget, aggregated labor/material/change-order costs and budget variance before preparing billing documents.
    - [primarySurface] `viewJobCostSummary`
- `billingSummaryWorkspace` (workflow, BillingSummary) — workflow `billingSummaryLifecycle`: Billing Summaries — Billing staff compiles and shares client-facing billing summaries from approved job cost data.
  - bffCall `listBillingSummaries` [query] uses queryBillingSummaries `buildFlowFsm.billingSummaryWorkspace.listBillingSummaries`
  - bffCall `createBillingSummaryCmd` [command] uses createBillingSummary `buildFlowFsm.billingSummaryWorkspace.createBillingSummaryCmd`
  - bffCall `shareBillingSummaryCmd` [command] uses shareBillingSummary `buildFlowFsm.billingSummaryWorkspace.shareBillingSummaryCmd`
  - section `billingSummaryList` — Browse and filter all billing summaries by project and status, then select one to act on.
    - [filterControl] `listBillingSummaries`
    - [primarySurface] `listBillingSummaries`
    - [contextualAction] `createBillingSummaryCmd`
    - [contextualAction] `shareBillingSummaryCmd`
- `invoiceWorkspace` (workflow, Invoice) — workflow `invoiceLifecycle`: Invoices — Billing staff generates invoices from approved costs and sends them to clients.
  - bffCall `listInvoices` [query] uses queryInvoices `buildFlowFsm.invoiceWorkspace.listInvoices`
  - bffCall `createInvoiceCmd` [command] uses createInvoice `buildFlowFsm.invoiceWorkspace.createInvoiceCmd`
  - bffCall `sendInvoiceCmd` [command] uses sendInvoice `buildFlowFsm.invoiceWorkspace.sendInvoiceCmd`
  - section `invoiceListSection` — Browse all invoices, filter by status, project, or client, and take action on individual records.
    - [filterControl] `listInvoices`
    - [primarySurface] `listInvoices`
    - [contextualAction] `sendInvoiceCmd`
  - section `createInvoiceSection` — Create a new draft invoice by selecting a project, entering an invoice number, and confirming.
    - [primarySurface] `createInvoiceCmd`

### client

- `clientStatusWorkspace` (operation, StatusReport): Project Status — Client reviews the shared project status report to stay informed on progress and budget.
  - bffCall `viewStatusReport` [query] uses viewStatusReport `buildFlowFsm.clientStatusWorkspace.viewStatusReport`
  - section `statusReportDetail` — Client reviews the AI-generated project status summary covering tasks, time, materials, delay risks and PM notes for the reporting period.
    - [primarySurface] `viewStatusReport`
- `clientBillingWorkspace` (operation, BillingSummary): My Billing — Client reviews billing summaries and invoices shared by billing staff.
  - bffCall `getBillingSummary` [query] uses viewBillingSummary `buildFlowFsm.clientBillingWorkspace.getBillingSummary`
  - bffCall `getInvoice` [query] uses viewInvoice `buildFlowFsm.clientBillingWorkspace.getInvoice`
  - section `billingSummarySection` — Client reviews the billing summary for the project, including period, cost breakdown, and overall total.
    - [primarySurface] `getBillingSummary`
  - section `invoiceSection` — Client views the invoice details shared by billing staff, including invoice number, status, and total amount.
    - [detailPanel] `getInvoice`
    - [primarySurface] `getBillingSummary`

## Landings

- projectManager → `dashboardWorkspace` — Project manager starts their day with the operational dashboard for a full overview of active projects and priorities.
- fieldWorker → `myTasksWorkspace` — Field worker opens the app to their assigned task list to know what to work on today.
- billingStaff → `jobCostWorkspace` — Billing staff starts by reviewing accumulated job costs before preparing billing summaries or invoices.
- client → `clientStatusWorkspace` — Client lands on the project status area to review the latest shared status report.

## Navigation edges (advisory)

- `dashboardWorkspace` → `projectDetailWorkspace` via `viewProject` — Project manager drills into a specific project from the dashboard.
- `dashboardWorkspace` → `projectLifecycleWorkspace` via `createProject` — Project manager initiates a new project from the dashboard.
- `projectLifecycleWorkspace` → `clientManagementWorkspace` via `createClient` — Project manager creates a new client while setting up a project.
- `projectDetailWorkspace` → `changeOrderWorkspace` via `createChangeOrder` — Project manager initiates a change order from within the project detail.
- `projectDetailWorkspace` → `statusReportWorkspace` via `generateStatusReport` — Project manager triggers status report generation from the project detail.
- `projectDetailWorkspace` → `taskBoardWorkspace` via `createWorkTask` — Project manager creates and assigns tasks from the project detail view.
- `statusReportWorkspace` → `clientStatusWorkspace` via `updateStatusReportStatus` — Project manager shares the status report, making it visible to the client.
- `myTasksWorkspace` → `taskBoardWorkspace` via `updateWorkTaskStatus` — Field worker updates task status from their task detail view.
- `myTasksWorkspace` → `fieldLoggingWorkspace` via `createTimeLog` — Field worker navigates to log time or materials after selecting an active task.
- `jobCostWorkspace` → `billingSummaryWorkspace` via `createBillingSummary` — Billing staff compiles a billing summary after reviewing job costs.
- `jobCostWorkspace` → `invoiceWorkspace` via `createInvoice` — Billing staff creates an invoice from approved job costs.
- `billingSummaryWorkspace` → `clientBillingWorkspace` via `shareBillingSummary` — Billing staff shares the billing summary, making it visible to the client.
- `invoiceWorkspace` → `clientBillingWorkspace` via `sendInvoice` — Billing staff sends the invoice to the client.
