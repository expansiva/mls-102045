# BuildFlow FSM

Module: `buildFlowFsm`
Language: en

## Problem
US construction, remodeling, and field service companies struggle to keep job costing accurate while coordinating field crews and keeping clients informed. Project budgets drift as tasks, labor hours, materials, and change orders are tracked in disconnected ways, making it hard to see budget versus actual, assign and follow daily work, and produce clear status and billing summaries. BuildFlow FSM addresses this by unifying project oversight, field task coordination, material usage, time logging, change orders, and client-facing billing communication in one domain-focused module, with AI-assisted status reporting and delay-risk hints grounded in live project activity.

## Presumed Actors
- Project Manager (`projectManager`): Owns project setup, budget oversight, task planning, change orders, and status reporting for one or more jobs.
- Field Worker (`fieldWorker`): Receives assigned work tasks and records daily time and progress from the field (mobile-friendly).
- Billing Staff (`billingStaff`): Prepares and reviews client billing summaries and invoices from approved job cost and change-order data.
- Client (`client`): External customer who receives project status communication and billing summaries; limited self-serve visibility assumed, not full internal operations access.

## Scope In
- Project lifecycle tracking for construction, remodeling, and field service jobs (identity, client, site address, status, budget, schedule dates)
- Work task assignment and status tracking tied to projects, including due dates and daily field progress context
- Material and inventory usage recorded against projects for job costing
- Labor time logs linked to workers and tasks for cost and progress visibility
- Change orders that adjust scope, cost, or schedule on an active project
- Invoice and client billing summary views driven by project cost and approved changes
- Operational dashboard for active projects, budget versus actual signals, and upcoming tasks
- Project detail orientation with task list or simple timeline-style progress (Gantt-ish, not a full scheduling suite)
- LLM-assisted professional status report generated from tasks, time logs, and materials, plus suggestions of tasks at risk of delay
- Domain focus on job costing accuracy, field team coordination, and client communication
- UI language support targets en, pt-BR, and es via platform i18n

## Scope Out
- Authentication, roles/permissions, and tenant isolation (platform-provided)
- Generic file/media storage infrastructure (platform-provided)
- Custom LLM/AI proxy or model hosting (platform LLM proxy only)
- Full ERP, payroll, accounting GL, or tax filing
- Heavyweight CPM/P6-class scheduling, resource leveling, or BIM/CAD
- Procurement marketplace, supplier portals, or warehouse WMS beyond project material usage
- GPS fleet tracking, IoT equipment telematics, or dispatch optimization as a standalone product
- Recreating messaging/task runtime, auditing, or monitoring platform capabilities

## Open Questions
- [assumed] How much self-serve access should clients have versus manager-shared status and billing summaries only? Default: Clients primarily receive shared status reports and billing summaries; deep self-serve project editing is out of initial scope.
- [assumed] Is material tracking per-project usage only, or is a full stock warehouse with transfers required? Default: Per-project material/inventory usage for job costing; not a full warehouse management system.
- [assumed] Should invoices be fully accounted documents with payment capture, or billing summaries ready for external accounting? Default: In-app invoice and client billing summary for construction job costing; payment rails and full accounting remain external.
- [assumed] How rich should the project timeline be in the first phase? Default: Task list with simple Gantt-ish timeline visualization; not full dependency-critical-path scheduling.

## Assumptions
- Module serves US construction, remodeling, and field service companies as the primary market context.
- Platform provides auth/RBAC, multi-tenant isolation, i18n, file storage, LLM proxy, messaging/runtime, and audit/monitoring — none are rebuilt here.
- Business context (active company/unit) comes from runtime; companies are modeled only as clients/customers in this domain when needed.
- LLM status report and delay-risk suggestions call the platform LLM proxy using project tasks, time logs, and materials as source context.
- Experiences should work for both desktop (office/PM/billing) and mobile-friendly field entry without treating mobile as a separate product.
- Multi-language UI (en, pt-BR, es) is declared for platform i18n; translation content is not modeled as domain entities.
- Job costing is derived from budget, labor time, material usage, and change orders rather than external cost-code ERP depth in this phase.

