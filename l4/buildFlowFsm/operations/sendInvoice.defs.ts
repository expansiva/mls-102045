/// <mls fileReference="_102045_/l4/buildFlowFsm/operations/sendInvoice.defs.ts" enhancement="_blank"/>

export const operationSendInvoice = {
  "operationId": "sendInvoice",
  "title": "Send invoice to client",
  "actors": [
    "billingStaff"
  ],
  "entity": "Invoice",
  "kind": "update",
  "reads": [
    "Invoice",
    "Client"
  ],
  "writes": [
    "Invoice"
  ],
  "rulesApplied": [
    "invoiceScopeExternalPayment",
    "invoiceMustReferenceProjectAndClient",
    "clientBillingAccess"
  ],
  "story": {
    "actor": "billingStaff",
    "goal": "Review a draft invoice and send it to the client as a formal billing document",
    "steps": [
      "Select the draft invoice to send",
      "Review invoice number, client, project, and total amount for accuracy",
      "Confirm sending the invoice to the client",
      "System marks the invoice as sent and records the send timestamp"
    ],
    "outcome": "The invoice status is sent with sentAt set, and the client can view the formal billing document while payment remains external"
  },
  "accessPattern": {
    "kind": "commandInput",
    "description": "Billing staff confirms sending a selected draft invoice; the command updates status to sent and records sentAt",
    "entity": "Invoice",
    "keyField": "Invoice.invoiceId",
    "pagination": "none",
    "selection": "single",
    "output": [
      "Invoice.invoiceId",
      "Invoice.projectId",
      "Invoice.clientId",
      "Invoice.invoiceNumber",
      "Invoice.status",
      "Invoice.totalAmount",
      "Invoice.sentAt",
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
        "name": "sentAt",
        "type": "string",
        "required": true,
        "fieldRef": "Invoice.sentAt"
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
      "inputId": "invoiceId",
      "fieldRef": "Invoice.invoiceId",
      "required": true,
      "source": "selectedEntity",
      "description": "Identifier of the draft invoice being sent to the client"
    }
  ],
  "contextResolution": [
    {
      "inputId": "invoiceId",
      "targetRef": "Invoice.invoiceId",
      "source": "selectedEntity",
      "originRef": "Invoice.invoiceId",
      "description": "Resolve the invoice currently selected by billing staff for send confirmation"
    },
    {
      "targetRef": "Invoice.status",
      "source": "systemDefault",
      "originRef": "systemDefault.locale",
      "description": "Set invoice status to the fixed lifecycle value sent upon successful send"
    },
    {
      "targetRef": "Invoice.sentAt",
      "source": "systemDefault",
      "originRef": "systemDefault.now",
      "description": "Stamp the moment the invoice is sent to the client"
    },
    {
      "targetRef": "Invoice.updatedAt",
      "source": "systemDefault",
      "originRef": "systemDefault.now",
      "description": "Refresh the invoice last-modification timestamp when status changes to sent"
    }
  ],
  "acceptanceAssertions": [
    "After confirmation the invoice exists with status sent",
    "After confirmation the invoice has sentAt set to the send timestamp",
    "Only an invoice in draft status can be sent",
    "The sent invoice retains its projectId, clientId, invoiceNumber, and totalAmount unchanged",
    "Payment capture is not performed by this operation; the invoice remains a billing document only",
    "After send the client can view the invoice and cannot edit it"
  ],
  "pageId": "invoiceLifecycle",
  "commandName": "sendInvoice",
  "bffName": "buildFlowFsm.invoiceLifecycle.sendInvoice",
  "capability": {
    "capabilityId": "invoiceLifecycle",
    "title": "Invoice lifecycle",
    "actor": "billingStaff",
    "priority": "now"
  },
  "statusFrontend": "toCreate",
  "statusBackend": "toCreate"
} as const;

export default operationSendInvoice;
