# E3 — Ontology: BuildFlow FSM

- module: `buildFlowFsm`
- domain: Construction & Field Service Management
- entities: 10 / relationships: 11
- generatedAt: 2026-07-31T04:51:14.090Z

## Entities

### Project (core, moduleOwned) — status: registered → active → onHold → closed → cancelled

A construction or field service project with client, site address, budget, schedule, and lifecycle status that anchors all tasks, costs, and billing.

- `projectId` (uuid; required) — Unique identifier for the project.
- `name` (string; required) — Human-readable project name used across dashboards and reports.
- `clientId` (uuid; required) — Reference to the client who owns this project.
- `siteAddress` (text; required) — Physical address of the construction or service site where work is performed.
- `budget` (money; required) — Approved total budget for the project used as the baseline for job costing comparison.
- `startDate` (date; required) — Planned start date of the project schedule.
- `endDate` (date; required) — Planned completion date of the project schedule.
- `status` (string; required, enum: registered|active|onHold|closed|cancelled) — Lifecycle status that controls whether field entries and change orders can be recorded against the project.
- `holdReason` (text; optional) — Reason recorded when the project is placed on hold.
- `closedAt` (datetime; optional) — Timestamp when the project was marked as closed.
- `cancelledAt` (datetime; optional) — Timestamp when the project was cancelled.
- `cancellationReason` (text; optional) — Reason recorded when the project is cancelled.
- `createdAt` (datetime; required) — Timestamp when the project record was created.
- `updatedAt` (datetime; required) — Timestamp of the last modification to the project record.

### Client (mdm, moduleOwned)

External customer record referenced by projects; receives status reports, billing summaries, and invoices without internal editing access.

- `clientId` (uuid; required) — Primary identifier for the client record.
- `name` (string; required) — Display name of the client used in project and billing communications.
- `company` (string; optional) — Legal or trading name of the client organization, if applicable.
- `email` (string; required) — Email address where status reports, billing summaries, and invoices are delivered.
- `phone` (string; optional) — Contact phone number for the client.
- `address` (text; optional) — Postal or billing address for the client.
- `createdAt` (datetime; required) — Timestamp when the client record was created.
- `updatedAt` (datetime; required) — Timestamp when the client record was last updated.

### WorkTask (core, moduleOwned) — status: assigned → inProgress → completed → cancelled

A unit of work tied to a project, assigned to a field worker with a due date and progress status tracked through completion.

- `workTaskId` (uuid; required) — Primary identifier for the work task.
- `projectId` (uuid; required) — Reference to the project this task belongs to.
- `title` (string; required) — Short name describing the work task.
- `description` (text; optional) — Detailed scope or instructions for completing the task.
- `assignedWorkerId` (string; required) — Identifier of the field worker assigned to this task; only one worker at a time.
- `status` (string; required, enum: assigned|inProgress|completed|cancelled) — Current lifecycle state of the task, updated only by the assigned worker or project manager.
- `dueDate` (date; required) — Date by which the task should be completed, used to surface overdue and urgent work.
- `completedAt` (datetime; optional) — Timestamp when the task was marked completed.
- `cancelledAt` (datetime; optional) — Timestamp when the task was cancelled.
- `cancellationReason` (text; optional) — Reason recorded when a task is cancelled.
- `createdAt` (datetime; required) — Timestamp when the work task was created.
- `updatedAt` (datetime; required) — Timestamp of the last update to the work task.

### TimeLog (event, moduleOwned) — status: posted → voided

An append-only record of hours worked by a field worker against a specific task, used for labor cost tracking and job costing.

- `timeLogId` (uuid; required) — Primary identifier for the time log entry.
- `workTaskId` (uuid; required) — Reference to the work task this time log was recorded against.
- `workerName` (string; required) — Name of the field worker who performed the logged hours.
- `logDate` (date; required) — The calendar date on which the work was performed.
- `hoursWorked` (number; required) — Number of hours worked on the task for this log entry.
- `laborCost` (money; required) — Calculated labor cost for the logged hours, used in job costing.
- `status` (string; required, enum: posted|voided) — Lifecycle status of the time log entry.
- `voidedAt` (datetime; optional) — Timestamp when the time log was voided, if applicable.
- `voidReason` (text; optional) — Reason provided when voiding a time log entry.
- `createdAt` (datetime; required) — Timestamp when the time log entry was created.

### MaterialUsage (event, moduleOwned) — status: posted → voided

An append-only record of materials consumed against a project for job costing, not full warehouse stock management.

- `materialUsageId` (uuid; required) — Primary identifier for the material usage record.
- `projectId` (uuid; required) — Reference to the project this material usage was recorded against.
- `status` (string; required, enum: posted|voided) — Lifecycle status of the material usage record.
- `materialName` (string; required) — Name or description of the material consumed.
- `quantity` (number; required) — Quantity of the material consumed.
- `unit` (string; required, enum: kg|liter|meter|unit|bag|box) — Unit of measure for the material quantity.
- `unitCost` (money; required) — Cost per unit of the material at the time of usage.
- `costCode` (string; optional) — Internal cost classification code used for job costing detail.
- `usageDate` (date; required) — Date the material was consumed on the project site.
- `recordedBy` (string; optional) — Name or identifier of the person who recorded the material usage.
- `voidedAt` (datetime; optional) — Timestamp when the material usage record was voided.
- `voidedReason` (text; optional) — Reason provided when voiding the material usage record.
- `createdAt` (datetime; required) — Timestamp when the material usage record was created.

### ChangeOrder (core, moduleOwned) — status: draft → pendingReview → approved → rejected

A formal document capturing a scope, cost, or schedule adjustment on an active project, with an approval lifecycle before it affects job costing and billing.

- `changeOrderId` (uuid; required) — Unique identifier for the change order.
- `projectId` (uuid; required) — Reference to the active project this change order applies to.
- `title` (string; required) — Short summary title of the change order.
- `description` (text; required) — Detailed description of the scope, cost, or schedule impact being requested.
- `impactType` (string; required, enum: scope|cost|schedule) — Primary category of the impact this change order introduces.
- `costAdjustment` (money; required) — Monetary amount of the cost adjustment; positive for additions, negative for deductions.
- `scheduleAdjustmentDays` (number; optional) — Number of days added to or removed from the project schedule; positive for extensions, negative for reductions.
- `status` (string; required, enum: draft|pendingReview|approved|rejected) — Approval lifecycle state of the change order; only approved change orders affect job costing and billing.
- `rejectionReason` (text; optional) — Reason recorded when a change order is rejected during review.
- `approvedAt` (datetime; optional) — Timestamp when the change order was approved and became eligible for job costing and billing.
- `rejectedAt` (datetime; optional) — Timestamp when the change order was rejected during review.
- `createdAt` (datetime; required) — Timestamp when the change order was created.
- `updatedAt` (datetime; required) — Timestamp of the last modification to the change order.

### StatusReport (core, moduleOwned) — status: draft → reviewed → shared

An AI-assisted project status summary generated from live tasks, time logs, and materials, reviewed by the PM and shareable with the client.

- `statusReportId` (uuid; required) — Primary identifier of the status report.
- `projectId` (uuid; required) — Reference to the project this status report belongs to.
- `status` (string; required, enum: draft|reviewed|shared) — Lifecycle state of the report: draft, reviewed, or shared with the client.
- `reportPeriodStart` (date; required) — Start date of the reporting period covered by this status report.
- `reportPeriodEnd` (date; required) — End date of the reporting period covered by this status report.
- `summary` (text; required) — AI-generated narrative summary of overall project status for the period.
- `tasksOverview` (text; optional) — AI-generated overview of task progress derived from live work tasks.
- `timeLogsOverview` (text; optional) — AI-generated overview of hours logged derived from live time logs.
- `materialsOverview` (text; optional) — AI-generated overview of material consumption derived from live material usage.
- `delayRiskAssessment` (text; optional) — AI-generated assessment of delay risks based on project data and associated delay-risk suggestions.
- `pmNotes` (text; optional) — Notes or edits added by the project manager during review of the report.
- `generatedAt` (datetime; required) — Timestamp when the AI generated the initial report content.
- `reviewedAt` (datetime; optional) — Timestamp when the project manager completed review and moved the report to reviewed state.
- `sharedAt` (datetime; optional) — Timestamp when the report was shared with the client.
- `createdAt` (datetime; required) — Record creation timestamp.
- `updatedAt` (datetime; required) — Last update timestamp for the record.

### DelayRiskSuggestion (supporting, moduleOwned)

An AI-generated advisory flag identifying a task at risk of delay, tied to a status report and referencing the specific work task without automatically changing its status.

- `delayRiskSuggestionId` (uuid; required) — Primary identifier for the delay-risk suggestion.
- `statusReportId` (uuid; required) — Reference to the status report that contains this suggestion.
- `workTaskId` (uuid; required) — Reference to the work task flagged as at risk of delay.
- `riskLevel` (string; required, enum: low|medium|high) — Severity of the delay risk as assessed by the AI.
- `reason` (text; required) — AI-generated explanation of why the task is at risk, based on time logs, material usage and task progress.
- `suggestedAction` (text; optional) — Optional recommended action to mitigate the delay risk.
- `acknowledged` (boolean; required) — Whether the project manager has reviewed and acknowledged this advisory suggestion.
- `createdAt` (datetime; required) — Timestamp when the suggestion was generated by the AI.
- `updatedAt` (datetime; required) — Timestamp of the last modification to the suggestion.

### BillingSummary (core, moduleOwned) — status: draft → shared

A client-facing breakdown of labor, material, and approved change order costs compiled by billing staff and shared with the client before invoicing.

- `billingSummaryId` (uuid; required) — Primary identifier for the billing summary record.
- `projectId` (uuid; required) — Reference to the project this billing summary belongs to.
- `status` (string; required, enum: draft|shared) — Lifecycle state of the billing summary, either in draft or shared with the client.
- `periodStart` (date; required) — Start date of the billing period covered by this summary.
- `periodEnd` (date; required) — End date of the billing period covered by this summary.
- `laborCost` (money; required) — Total labor cost derived from time logs within the billing period.
- `materialCost` (money; required) — Total material cost derived from material usage within the billing period.
- `changeOrderCost` (money; required) — Total cost from approved change orders included in this billing period.
- `totalCost` (money; required) — Sum of labor, material, and approved change order costs for the billing period.
- `sharedAt` (datetime; optional) — Timestamp when the billing summary was shared with the client.
- `createdAt` (datetime; required) — Timestamp when the billing summary record was created.
- `updatedAt` (datetime; required) — Timestamp of the last update to the billing summary record.

### Invoice (core, moduleOwned) — status: draft → sent

A formal billing document generated from approved job costs and change orders, sent to the client with payment processing handled externally.

- `invoiceId` (uuid; required) — Unique identifier for the invoice record
- `projectId` (uuid; required) — Reference to the project this invoice is generated from
- `clientId` (uuid; required) — Reference to the client being billed for this invoice
- `invoiceNumber` (string; required) — Human-readable invoice number used for external reference and communication
- `status` (string; required, enum: draft|sent) — Current lifecycle state of the invoice
- `totalAmount` (money; required) — Total billed amount including approved job costs and approved change orders
- `sentAt` (datetime; optional) — Timestamp when the invoice was sent to the client
- `createdAt` (datetime; required) — Timestamp when the invoice record was created
- `updatedAt` (datetime; required) — Timestamp of the last modification to the invoice record

## Relationships

- `projectBelongsToClient`: Project manyToOne Client — Each project belongs to one client; a client may have multiple projects.
- `projectHasWorkTasks`: Project oneToMany WorkTask — A project contains multiple work tasks that break down its scope.
- `workTaskHasTimeLogs`: WorkTask oneToMany TimeLog — A work task accumulates time logs recorded by assigned field workers.
- `projectHasMaterialUsage`: Project oneToMany MaterialUsage — A project accumulates material usage entries recorded for job costing.
- `projectHasChangeOrders`: Project oneToMany ChangeOrder — A project may have multiple change orders adjusting its scope, cost, or schedule.
- `projectHasStatusReports`: Project oneToMany StatusReport — A project can have multiple status reports generated over its lifecycle.
- `statusReportHasDelayRiskSuggestions`: StatusReport oneToMany DelayRiskSuggestion — A status report may include multiple delay-risk suggestions generated by the AI.
- `delayRiskSuggestionRefersToTask`: DelayRiskSuggestion manyToOne WorkTask — Each delay-risk suggestion references the specific work task flagged as at risk.
- `projectHasBillingSummaries`: Project oneToMany BillingSummary — A project may have multiple billing summaries compiled over its lifecycle.
- `projectHasInvoices`: Project oneToMany Invoice — A project may have multiple invoices generated from approved costs.
- `invoiceIncludesChangeOrders`: Invoice manyToMany ChangeOrder — An invoice may include multiple approved change orders as billable line items.
