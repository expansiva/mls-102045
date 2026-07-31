/// <mls fileReference="_102045_/l4/buildFlowFsm/workflows/invoiceLifecycle.defs.ts" enhancement="_blank"/>

export const workflowInvoiceLifecycle = {
  "workflowId": "invoiceLifecycle",
  "title": "Invoice lifecycle",
  "executionMode": "sequential",
  "trigger": "Billing staff creates an invoice from approved job costs and change orders for a project.",
  "actors": [
    "billingStaff"
  ],
  "states": [
    "draft",
    "sent"
  ],
  "transitions": [
    {
      "from": "draft",
      "to": "sent",
      "on": "sendInvoice",
      "by": "billingStaff",
      "guard": "Invoice references project and client and includes only approved change orders"
    }
  ],
  "operationIds": [
    "createInvoice",
    "sendInvoice"
  ],
  "entities": [
    "Invoice",
    "Project",
    "Client",
    "ChangeOrder"
  ],
  "rulesApplied": [
    "onlyApprovedChangeOrdersAffectCosting",
    "invoiceScopeExternalPayment",
    "invoiceMustReferenceProjectAndClient",
    "clientBillingAccess"
  ],
  "story": {
    "actor": "billingStaff",
    "goal": "Create an invoice from approved job costs and change orders so the client receives a formal billing document.",
    "steps": [
      "Billing staff selects the approved job costs and change orders to include on the invoice.",
      "Billing staff generates a draft invoice from the selected costs for the project and client.",
      "Billing staff reviews the invoice for accuracy and sends it to the client."
    ],
    "outcome": "An invoice is generated from approved costs and sent to the client for payment processing outside the system."
  },
  "pageId": "invoiceLifecycle",
  "capabilities": [
    {
      "capabilityId": "invoiceLifecycle",
      "title": "Invoice lifecycle",
      "actor": "billingStaff",
      "priority": "now"
    }
  ],
  "statusFrontend": "toCreate",
  "statusBackend": "toCreate"
} as const;

export default workflowInvoiceLifecycle;
