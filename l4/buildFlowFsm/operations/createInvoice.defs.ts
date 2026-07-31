/// <mls fileReference="_102045_/l4/buildFlowFsm/operations/createInvoice.defs.ts" enhancement="_blank"/>

export const operationCreateInvoice = {
  "operationId": "createInvoice",
  "title": "Create invoice",
  "actors": [
    "billingStaff"
  ],
  "entity": "Invoice",
  "kind": "create",
  "reads": [
    "Project",
    "Client",
    "ChangeOrder",
    "TimeLog",
    "MaterialUsage",
    "BillingSummary"
  ],
  "writes": [
    "Invoice"
  ],
  "rulesApplied": [
    "onlyApprovedChangeOrdersAffectCosting",
    "invoiceScopeExternalPayment",
    "invoiceMustReferenceProjectAndClient"
  ],
  "story": {
    "actor": "billingStaff",
    "goal": "Generate a formal invoice from approved job costs and change orders so the client has a billing record",
    "steps": [
      "Select the project to bill",
      "Review approved labor, material, and change-order costs that will form the total",
      "Enter a human-readable invoice number",
      "Confirm creation of the invoice as a draft billing document"
    ],
    "outcome": "A new invoice exists in draft status, references the project and its client, and has totalAmount equal to approved job costs and approved change orders only, ready for review and send"
  },
  "accessPattern": {
    "kind": "commandInput",
    "description": "Command form for billing staff to create a draft invoice from a selected project's approved costs and change orders",
    "entity": "Invoice",
    "keyField": "Invoice.invoiceId",
    "pagination": "none",
    "selection": "none",
    "output": [
      "Invoice.invoiceId",
      "Invoice.projectId",
      "Invoice.clientId",
      "Invoice.invoiceNumber",
      "Invoice.status",
      "Invoice.totalAmount",
      "Invoice.createdAt",
      "Invoice.updatedAt"
    ]
  },
  "outputShape": {
    "kind": "object",
    "fields": [
      {
        "name": "invoiceId",
        "type": "string",
        "required": true,
        "fieldRef": "Invoice.invoiceId"
      },
      {
        "name": "projectId",
        "type": "string",
        "required": true,
        "fieldRef": "Invoice.projectId"
      },
      {
        "name": "clientId",
        "type": "string",
        "required": true,
        "fieldRef": "Invoice.clientId"
      },
      {
        "name": "invoiceNumber",
        "type": "string",
        "required": true,
        "fieldRef": "Invoice.invoiceNumber"
      },
      {
        "name": "status",
        "type": "string",
        "required": true,
        "fieldRef": "Invoice.status"
      },
      {
        "name": "totalAmount",
        "type": "number",
        "required": true,
        "fieldRef": "Invoice.totalAmount"
      },
      {
        "name": "createdAt",
        "type": "string",
        "required": true,
        "fieldRef": "Invoice.createdAt"
      },
      {
        "name": "updatedAt",
        "type": "string",
        "required": true,
        "fieldRef": "Invoice.updatedAt"
      }
    ]
  },
  "inputs": [
    {
      "inputId": "projectId",
      "fieldRef": "Invoice.projectId",
      "required": true,
      "source": "selectedEntity",
      "description": "Project selected for invoice generation; approved costs are taken from this project"
    },
    {
      "inputId": "invoiceNumber",
      "fieldRef": "Invoice.invoiceNumber",
      "required": true,
      "source": "userInput",
      "description": "Human-readable invoice number used for external reference and client communication"
    },
    {
      "inputId": "invoiceId",
      "fieldRef": "Invoice.invoiceId",
      "required": true,
      "source": "systemDefault",
      "description": "System-generated unique identifier for the new invoice"
    },
    {
      "inputId": "clientId",
      "fieldRef": "Invoice.clientId",
      "required": true,
      "source": "selectedEntity",
      "description": "Client to bill, taken from the selected project's client reference"
    },
    {
      "inputId": "createdAt",
      "fieldRef": "Invoice.createdAt",
      "required": true,
      "source": "systemDefault",
      "description": "Server timestamp recorded when the invoice is created"
    },
    {
      "inputId": "updatedAt",
      "fieldRef": "Invoice.updatedAt",
      "required": true,
      "source": "systemDefault",
      "description": "Server timestamp recorded on creation (initially matches createdAt)"
    }
  ],
  "contextResolution": [
    {
      "inputId": "projectId",
      "targetRef": "Invoice.projectId",
      "source": "selectedEntity",
      "originRef": "Project.projectId",
      "description": "Resolves to the projectId of the project currently selected in the billing workspace"
    },
    {
      "inputId": "clientId",
      "targetRef": "Invoice.clientId",
      "source": "selectedEntity",
      "originRef": "Project.clientId",
      "description": "Loads clientId from the selected project record so the invoice always references that project's client"
    },
    {
      "inputId": "invoiceId",
      "targetRef": "Invoice.invoiceId",
      "source": "systemDefault",
      "originRef": "systemDefault.uuid",
      "description": "Generates a new UUID assigned as the invoice primary key"
    },
    {
      "inputId": "createdAt",
      "targetRef": "Invoice.createdAt",
      "source": "systemDefault",
      "originRef": "systemDefault.now",
      "description": "Sets createdAt to the current server time at insert"
    },
    {
      "inputId": "updatedAt",
      "targetRef": "Invoice.updatedAt",
      "source": "systemDefault",
      "originRef": "systemDefault.now",
      "description": "Sets updatedAt to the current server time at insert"
    }
  ],
  "acceptanceAssertions": [
    "After confirmation a new Invoice exists with status draft",
    "The created invoice references the selected projectId and the clientId of that project",
    "invoice totalAmount equals the sum of approved labor costs, material costs, and approved change-order cost adjustments for the project",
    "Only change orders in approved status contribute to the invoice total; pending and rejected change orders are excluded",
    "The invoice is stored with the provided invoiceNumber and a system-generated invoiceId",
    "No payment capture or accounting posting is performed; the invoice remains a billing document only"
  ],
  "pageId": "invoiceLifecycle",
  "commandName": "createInvoice",
  "bffName": "buildFlowFsm.invoiceLifecycle.createInvoice",
  "capability": {
    "capabilityId": "invoiceLifecycle",
    "title": "Invoice lifecycle",
    "actor": "billingStaff",
    "priority": "now"
  },
  "statusFrontend": "toCreate",
  "statusBackend": "toCreate"
} as const;

export default operationCreateInvoice;
