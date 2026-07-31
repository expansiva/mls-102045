# E4 — Actors, rules and external refs: buildFlowFsm

- module: `buildFlowFsm`
- actors: 4 / rules: 24
- generatedAt: 2026-07-31T04:53:03.471Z

## Actors

| actorId | roleScope | title | description |
| --- | --- | --- | --- |
| `projectManager` | `buildFlowFsm:projectManager` | Project Manager | Owns project setup, budget oversight, task planning, change orders, and status reporting for one or more jobs. Reviews and shares status reports with clients and controls task status updates. |
| `fieldWorker` | `buildFlowFsm:fieldWorker` | Field Worker | Receives assigned work tasks and records daily time and progress from the field via a mobile-friendly interface. Can update task status for tasks assigned to them. |
| `billingStaff` | `buildFlowFsm:billingStaff` | Billing Staff | Prepares and reviews client billing summaries and invoices from approved job cost and change-order data. Shares billing documents with clients. |
| `client` | `buildFlowFsm:client` | Client | External customer who receives shared project status reports and billing summaries. Has limited read-only visibility with no ability to edit projects or create billing documents. |

## Rules

### `projectActivationRequiresCoreFields` (domain) — Project activation requires core fields

A project must have a name, client, and site address before it can be activated; activation is forbidden when any of these fields is missing.

- appliesTo: `Project`
- absorbs journey rules:
  - "A project must have a name, client, and site address before it can be activated."

### `jobCostingRequiresBudgetAndSchedule` (domain) — Job costing requires budget and schedule dates

Budget and schedule dates must be present on a project before job costing tracking can begin; without them, cost aggregation is not permitted.

- appliesTo: `Project`
- absorbs journey rules:
  - "Budget and schedule dates are required to begin job costing tracking."

### `operationsRequireActiveProject` (domain) — Field entries, tasks, and change orders require an active project

A project must be in active status before field entries can be recorded, tasks can be created, or change orders can be issued; inactive projects block all three operations.

- appliesTo: `Project`, `WorkTask`, `ChangeOrder`
- absorbs journey rules:
  - "Project status controls whether field entries can be recorded against the project."
  - "Tasks must belong to an active project."
  - "Change orders can only be created on active projects."

### `singleTaskAssignment` (domain) — A task is assigned to one field worker at a time

A work task can only be assigned to a single field worker at any given time; concurrent multiple assignments are forbidden.

- appliesTo: `WorkTask`
- absorbs journey rules:
  - "A task can only be assigned to one field worker at a time."

### `taskDueDateWithinSchedule` (domain) — Task due dates must fall within the project schedule window

A work task due date must fall within the project's schedule start and end dates; due dates outside the schedule window are not permitted.

- appliesTo: `WorkTask`
- absorbs journey rules:
  - "Due dates should fall within the project schedule window."

### `dashboardShowsActiveProjects` (application) — Dashboard defaults to active projects only

The operational dashboard must show only active projects by default; inactive or completed projects are excluded from the default view.

- appliesTo: `Project`
- absorbs journey rules:
  - "Dashboard shows only active projects by default."

### `jobCostDerivation` (domain) — Job costs and budget-vs-actual are derived from time logs, material usage, and approved change orders

Budget-vs-actual figures and job cost totals must be derived exclusively from labor time logs, material usage entries, and approved change orders; no other sources contribute to these calculations.

- appliesTo: `TimeLog`, `MaterialUsage`, `ChangeOrder`
- absorbs journey rules:
  - "Budget vs actual is derived from labor time logs, material usage, and approved change orders."
  - "Job costs are derived from time logs, material usage, and approved change orders."

### `overdueTaskHighlighting` (application) — Overdue tasks are highlighted by due date comparison

Work tasks whose due date has passed must be highlighted as overdue on the dashboard, based on a comparison of the task due date against the current date.

- appliesTo: `WorkTask`
- absorbs journey rules:
  - "Overdue tasks are highlighted based on due date comparison."

### `changeOrderDescriptionRequired` (domain) — Change order must describe scope, cost, or schedule impact

A change order must include a description of its scope, cost, or schedule impact; a change order without any of these descriptions cannot be created.

- appliesTo: `ChangeOrder`
- absorbs journey rules:
  - "A change order must describe the scope, cost, or schedule impact."

### `onlyApprovedChangeOrdersAffectCosting` (domain) — Only approved change orders affect job costing, billing, and invoicing

Only change orders in approved status may influence job costing totals, be included in billing summaries, or appear as line items on invoices; pending or rejected change orders are excluded from all three.

- appliesTo: `ChangeOrder`, `BillingSummary`, `Invoice`
- absorbs journey rules:
  - "Only approved change orders affect job costing and billing."
  - "Billing summaries include only approved change orders."
  - "Only approved change orders can be included in an invoice."

### `statusReportGenerationSource` (application) — Status report content is generated from live project data via the LLM proxy

Status report content must be generated from live project tasks, time logs, and material usage data through the platform LLM proxy; stale or manually authored content is not the generation source.

- appliesTo: `StatusReport`
- absorbs journey rules:
  - "Status report content is generated from live project tasks, time logs, and material usage via the platform LLM proxy."

### `delayRiskSuggestionsAdvisory` (domain) — Delay-risk suggestions are advisory only

Delay-risk suggestions generated by the AI are advisory and must not automatically change any task status; they require human action to take effect.

- appliesTo: `DelayRiskSuggestion`
- absorbs journey rules:
  - "Delay-risk suggestions are advisory and do not automatically change task status."

### `pmControlsStatusReportLifecycle` (application) — Project manager controls status report generation, review, and sharing

Status reports are generated and shared by the project manager, who can review and edit the report content before sharing it with the client; no other actor may share reports directly.

- appliesTo: `StatusReport`
- absorbs journey rules:
  - "The project manager can review and edit the report before sharing with the client."
  - "Status reports are generated and shared by the project manager."

### `fieldWorkerTaskVisibility` (application) — Field workers see only their assigned tasks

A field worker may only view work tasks that are assigned to them; tasks assigned to other workers are hidden from their view.

- appliesTo: `WorkTask`
- absorbs journey rules:
  - "Field workers see only tasks assigned to them."

### `taskSortingByDueDate` (application) — Tasks are sorted by due date for urgency surfacing

Work tasks displayed to field workers must be sorted by due date so that the most urgent work appears first in the list.

- appliesTo: `WorkTask`
- absorbs journey rules:
  - "Tasks are sorted by due date to surface the most urgent work first."

### `mobileFieldUsability` (application) — Mobile experience must be usable without desktop access

The field worker experience must be fully usable on a mobile device in the field without requiring desktop access; all core task and logging operations must work on mobile.

- appliesTo: `WorkTask`
- absorbs journey rules:
  - "The mobile experience must be usable in the field without desktop access."

### `timeLogLinkingRequired` (domain) — Time logs must be linked to a task and worker

Every time log must be linked to a specific work task and a specific worker; unlinked time logs are not permitted in the system.

- appliesTo: `TimeLog`
- absorbs journey rules:
  - "Time logs must be linked to a specific task and worker."

### `materialUsageIsProjectLevel` (domain) — Material usage is recorded per project for job costing

Material usage entries are recorded at the project level for job costing purposes and must not be treated as warehouse stock management; inventory tracking is out of scope.

- appliesTo: `MaterialUsage`
- absorbs journey rules:
  - "Material usage is recorded per project for job costing, not as warehouse stock management."

### `taskStatusUpdateAuthorization` (application) — Task status can only be updated by assigned worker or project manager

A work task status can only be updated by the field worker assigned to that task or by the project manager; all other actors are forbidden from changing task status.

- appliesTo: `WorkTask`
- absorbs journey rules:
  - "Task status can only be updated by the assigned worker or the project manager."

### `billingSummaryClientFacing` (domain) — Billing summaries are client-facing and exclude internal cost codes

Billing summaries presented to clients must exclude internal cost-code detail; only client-appropriate cost and change-order information is shown.

- appliesTo: `BillingSummary`
- absorbs journey rules:
  - "Billing summaries are client-facing and exclude internal cost-code detail."

### `invoiceScopeExternalPayment` (domain) — Invoices are billing documents; payment and accounting are external

Invoices serve as billing documents for construction job costing only; payment capture and full accounting are handled outside the system and are not module responsibilities.

- appliesTo: `Invoice`
- absorbs journey rules:
  - "Invoices are billing documents for construction job costing; payment capture and full accounting remain external."
  - "Payment processing and full accounting are handled outside the system."

### `invoiceMustReferenceProjectAndClient` (domain) — An invoice must reference the project and client

Every invoice must reference both the project it belongs to and the client receiving the billing; invoices without these references cannot be created.

- appliesTo: `Invoice`
- absorbs journey rules:
  - "An invoice must reference the project and client."

### `clientAccessLimited` (application) — Client access is limited to status and billing surfaces

Clients receive shared status reports and have visibility limited to status and billing communication surfaces only; they do not have full internal project editing access.

- appliesTo: `Project`
- absorbs journey rules:
  - "Clients receive shared status reports; they do not have full internal project editing access."
  - "Client visibility is limited to status and billing communication surfaces."

### `clientBillingAccess` (application) — Clients can view but not edit billing documents

Clients may see billing summaries and invoices shared by billing staff, but they cannot edit or create billing documents; all billing document authorship remains with billing staff.

- appliesTo: `BillingSummary`, `Invoice`
- absorbs journey rules:
  - "Clients see billing summaries and invoices shared by billing staff."
  - "Clients cannot edit or create billing documents."

## External refs

### mdm

- **Client registry** — Client identity and contact information are stable, rarely changing data that the platform MDM could own, referenced by projects, invoices, and billing summaries.
- **Material catalog** — Standard material definitions and units used in material usage entries could be maintained as MDM reference data rather than per-project definitions.

### horizontals

- **Payments** — Payment capture for invoices is explicitly out of scope for this module; a payments horizontal would handle transaction processing when integrated.
- **Accounting** — Full accounting and general ledger posting remain external to this module; an accounting horizontal would receive job cost and invoice data for bookkeeping.

### plugins

- **Fiscal document export** — Invoices may need to be exported as fiscal documents (e.g., NF-e, electronic invoices) depending on jurisdiction; this is an optional integration.
- **Payment gateway (TEF)** — If payment capture is later integrated, a TEF or payment gateway plugin would handle the transaction; currently out of scope but referenced by the invoice journey.

### agents

- **LLM status report generator** — The generateStatusReport journey uses the platform LLM proxy to produce report content from live project tasks, time logs, and material usage data.
- **LLM delay-risk advisor** — The reviewDashboard journey surfaces AI-generated delay-risk suggestions that are advisory and do not automatically change task status, powered by the platform LLM proxy.
