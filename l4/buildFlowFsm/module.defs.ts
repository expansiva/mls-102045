/// <mls fileReference="_102045_/l4/buildFlowFsm/module.defs.ts" enhancement="_blank"/>

export const buildFlowFsmModule = {
  "module": {
    "moduleName": "buildFlowFsm",
    "title": "BuildFlow FSM",
    "purpose": "BuildFlow FSM delivers unified project oversight, field team coordination, and client communication for US construction and field service companies. It tracks projects, work tasks, labor time, material usage, and change orders to provide accurate job costing and operational dashboards. The module also generates AI-assisted status reports and client-facing billing summaries to keep stakeholders informed throughout the project lifecycle.",
    "businessDomain": "Construction & Field Service Management",
    "languages": [
      "en",
      "pt-BR",
      "es"
    ],
    "visualStyle": "Desktop-first for PM and billing staff with mobile-optimized field entry; dashboard-driven, status-aware, touch-friendly UI with Gantt-ish timeline views."
  },
  "designContext": {
    "initialPrompt": "Generate a professional app called BuildFlow FSM for US construction, remodeling and field service companies. Core entities: Project (name, client, address, status, budget, start/end dates), WorkTask (project, assigned_to, description, status, due), Material/Inventory usage, TimeLog (worker, task, hours), ChangeOrder, Invoice. Key screens: Dashboard (active projects, budget vs actual, upcoming tasks), Project list + detail (Gantt-ish timeline or task list), Task assignment & daily log entry, Materials tracking per project, Client billing summary. LLM feature: On project detail, \"Generate Status Report\" button that creates a professional summary from tasks, time logs and materials. Also suggests \"tasks at risk of delay\". Focus: Job costing, field team coordination and client communication — specific to construction/field service. linguagem: en, pt-br, es\n\nClarification 1: moduleName: Project management with job costing and field team coordination; mainActors: Project managers, field workers, clients, and billing staff; mainGoal: Improve job costing accuracy, streamline field team coordination, and enhance client communication; boundaries: Focus on US construction and field service companies, support both mobile and desktop platforms, multi-language (en, pt-BR, es)",
    "userLanguage": "en",
    "openDetails": [
      {
        "title": "How much self-serve access should clients have versus manager-shared status and billing summaries only?",
        "description": "Affects later journey depth for the client actor and what communication surfaces are first-class."
      },
      {
        "title": "Is material tracking per-project usage only, or is a full stock warehouse with transfers required?",
        "description": "Determines whether inventory is job-cost usage ledgers versus a standalone warehouse module."
      },
      {
        "title": "Should invoices be fully accounted documents with payment capture, or billing summaries ready for external accounting?",
        "description": "Bounds invoice complexity and integration expectations."
      },
      {
        "title": "How rich should the project timeline be in the first phase?",
        "description": "Keeps project detail focused on coordination rather than enterprise scheduling."
      }
    ],
    "decisions": []
  },
  "ontology": {
    "entities": {
      "Project": {
        "title": "Project",
        "description": "A construction or field service project with client, site address, budget, schedule, and lifecycle status that anchors all tasks, costs, and billing.",
        "kind": "core",
        "ownership": "moduleOwned",
        "statusEnum": [
          "registered",
          "active",
          "onHold",
          "closed",
          "cancelled"
        ],
        "lifecycleStates": [
          "registered",
          "active",
          "onHold",
          "closed",
          "cancelled"
        ]
      },
      "Client": {
        "title": "Client",
        "description": "External customer record referenced by projects; receives status reports, billing summaries, and invoices without internal editing access.",
        "kind": "mdm",
        "ownership": "moduleOwned"
      },
      "WorkTask": {
        "title": "Work Task",
        "description": "A unit of work tied to a project, assigned to a field worker with a due date and progress status tracked through completion.",
        "kind": "core",
        "ownership": "moduleOwned",
        "statusEnum": [
          "assigned",
          "inProgress",
          "completed",
          "cancelled"
        ],
        "lifecycleStates": [
          "assigned",
          "inProgress",
          "completed",
          "cancelled"
        ]
      },
      "TimeLog": {
        "title": "Time Log",
        "description": "An append-only record of hours worked by a field worker against a specific task, used for labor cost tracking and job costing.",
        "kind": "event",
        "ownership": "moduleOwned",
        "statusEnum": [
          "posted",
          "voided"
        ]
      },
      "MaterialUsage": {
        "title": "Material Usage",
        "description": "An append-only record of materials consumed against a project for job costing, not full warehouse stock management.",
        "kind": "event",
        "ownership": "moduleOwned",
        "statusEnum": [
          "posted",
          "voided"
        ]
      },
      "ChangeOrder": {
        "title": "Change Order",
        "description": "A formal document capturing a scope, cost, or schedule adjustment on an active project, with an approval lifecycle before it affects job costing and billing.",
        "kind": "core",
        "ownership": "moduleOwned",
        "statusEnum": [
          "draft",
          "pendingReview",
          "approved",
          "rejected"
        ],
        "lifecycleStates": [
          "draft",
          "pendingReview",
          "approved",
          "rejected"
        ]
      },
      "StatusReport": {
        "title": "Status Report",
        "description": "An AI-assisted project status summary generated from live tasks, time logs, and materials, reviewed by the PM and shareable with the client.",
        "kind": "core",
        "ownership": "moduleOwned",
        "statusEnum": [
          "draft",
          "reviewed",
          "shared"
        ],
        "lifecycleStates": [
          "draft",
          "reviewed",
          "shared"
        ]
      },
      "DelayRiskSuggestion": {
        "title": "Delay Risk Suggestion",
        "description": "An AI-generated advisory flag identifying a task at risk of delay, tied to a status report and referencing the specific work task without automatically changing its status.",
        "kind": "supporting",
        "ownership": "moduleOwned"
      },
      "BillingSummary": {
        "title": "Billing Summary",
        "description": "A client-facing breakdown of labor, material, and approved change order costs compiled by billing staff and shared with the client before invoicing.",
        "kind": "core",
        "ownership": "moduleOwned",
        "statusEnum": [
          "draft",
          "shared"
        ],
        "lifecycleStates": [
          "draft",
          "shared"
        ]
      },
      "Invoice": {
        "title": "Invoice",
        "description": "A formal billing document generated from approved job costs and change orders, sent to the client with payment processing handled externally.",
        "kind": "core",
        "ownership": "moduleOwned",
        "statusEnum": [
          "draft",
          "sent"
        ],
        "lifecycleStates": [
          "draft",
          "sent"
        ]
      }
    }
  },
  "journey": {
    "defPath": "l4/buildFlowFsm/siteMap.defs.ts"
  },
  "relationships": [
    {
      "relationshipId": "projectBelongsToClient",
      "fromEntity": "Project",
      "toEntity": "Client",
      "type": "manyToOne",
      "description": "Each project belongs to one client; a client may have multiple projects."
    },
    {
      "relationshipId": "projectHasWorkTasks",
      "fromEntity": "Project",
      "toEntity": "WorkTask",
      "type": "oneToMany",
      "description": "A project contains multiple work tasks that break down its scope."
    },
    {
      "relationshipId": "workTaskHasTimeLogs",
      "fromEntity": "WorkTask",
      "toEntity": "TimeLog",
      "type": "oneToMany",
      "description": "A work task accumulates time logs recorded by assigned field workers."
    },
    {
      "relationshipId": "projectHasMaterialUsage",
      "fromEntity": "Project",
      "toEntity": "MaterialUsage",
      "type": "oneToMany",
      "description": "A project accumulates material usage entries recorded for job costing."
    },
    {
      "relationshipId": "projectHasChangeOrders",
      "fromEntity": "Project",
      "toEntity": "ChangeOrder",
      "type": "oneToMany",
      "description": "A project may have multiple change orders adjusting its scope, cost, or schedule."
    },
    {
      "relationshipId": "projectHasStatusReports",
      "fromEntity": "Project",
      "toEntity": "StatusReport",
      "type": "oneToMany",
      "description": "A project can have multiple status reports generated over its lifecycle."
    },
    {
      "relationshipId": "statusReportHasDelayRiskSuggestions",
      "fromEntity": "StatusReport",
      "toEntity": "DelayRiskSuggestion",
      "type": "oneToMany",
      "description": "A status report may include multiple delay-risk suggestions generated by the AI."
    },
    {
      "relationshipId": "delayRiskSuggestionRefersToTask",
      "fromEntity": "DelayRiskSuggestion",
      "toEntity": "WorkTask",
      "type": "manyToOne",
      "description": "Each delay-risk suggestion references the specific work task flagged as at risk."
    },
    {
      "relationshipId": "projectHasBillingSummaries",
      "fromEntity": "Project",
      "toEntity": "BillingSummary",
      "type": "oneToMany",
      "description": "A project may have multiple billing summaries compiled over its lifecycle."
    },
    {
      "relationshipId": "projectHasInvoices",
      "fromEntity": "Project",
      "toEntity": "Invoice",
      "type": "oneToMany",
      "description": "A project may have multiple invoices generated from approved costs."
    },
    {
      "relationshipId": "invoiceIncludesChangeOrders",
      "fromEntity": "Invoice",
      "toEntity": "ChangeOrder",
      "type": "manyToMany",
      "description": "An invoice may include multiple approved change orders as billable line items."
    }
  ],
  "approvedArtifacts": {
    "mdm": [
      {
        "title": "Client registry",
        "reason": "Client identity and contact information are stable, rarely changing data that the platform MDM could own, referenced by projects, invoices, and billing summaries."
      },
      {
        "title": "Material catalog",
        "reason": "Standard material definitions and units used in material usage entries could be maintained as MDM reference data rather than per-project definitions."
      }
    ],
    "horizontals": [
      {
        "title": "Payments",
        "reason": "Payment capture for invoices is explicitly out of scope for this module; a payments horizontal would handle transaction processing when integrated."
      },
      {
        "title": "Accounting",
        "reason": "Full accounting and general ledger posting remain external to this module; an accounting horizontal would receive job cost and invoice data for bookkeeping."
      }
    ],
    "plugins": [
      {
        "title": "Fiscal document export",
        "reason": "Invoices may need to be exported as fiscal documents (e.g., NF-e, electronic invoices) depending on jurisdiction; this is an optional integration."
      },
      {
        "title": "Payment gateway (TEF)",
        "reason": "If payment capture is later integrated, a TEF or payment gateway plugin would handle the transaction; currently out of scope but referenced by the invoice journey."
      }
    ],
    "agents": [
      {
        "title": "LLM status report generator",
        "reason": "The generateStatusReport journey uses the platform LLM proxy to produce report content from live project tasks, time logs, and material usage data."
      },
      {
        "title": "LLM delay-risk advisor",
        "reason": "The reviewDashboard journey surfaces AI-generated delay-risk suggestions that are advisory and do not automatically change task status, powered by the platform LLM proxy."
      }
    ]
  }
} as const;

export default buildFlowFsmModule;
