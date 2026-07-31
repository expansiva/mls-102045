/// <mls fileReference="_102045_/l4/buildFlowFsm/operations/viewInvoice.defs.ts" enhancement="_blank"/>

export const operationViewInvoice = {
  "operationId": "viewInvoice",
  "title": "View invoice",
  "actors": [
    "client"
  ],
  "entity": "Invoice",
  "kind": "view",
  "reads": [
    "Invoice"
  ],
  "writes": [],
  "rulesApplied": [
    "clientBillingAccess",
    "invoiceScopeExternalPayment",
    "invoiceMustReferenceProjectAndClient"
  ],
  "story": {
    "actor": "client",
    "goal": "View a formal invoice sent by billing staff to understand the billed charges for their project",
    "steps": [
      "Open the invoice shared by billing staff using its identifier",
      "Review invoice number, project and client references, status, total amount, and sent date",
      "Confirm the document is for information only with payment handled externally"
    ],
    "outcome": "The client sees the complete invoice details as a read-only billing document without any ability to edit or pay inside the system"
  },
  "accessPattern": {
    "kind": "getById",
    "description": "Load a single invoice by id scoped to the authenticated client",
    "entity": "Invoice",
    "keyField": "Invoice.invoiceId",
    "filters": [
      "Invoice.clientId",
      "Invoice.status"
    ],
    "pagination": "none",
    "selection": "none",
    "output": [
      "Invoice.invoiceId",
      "Invoice.projectId",
      "Invoice.clientId",
      "Invoice.invoiceNumber",
      "Invoice.status",
      "Invoice.totalAmount",
      "Invoice.sentAt",
      "Invoice.createdAt"
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
        "required": false,
        "fieldRef": "Invoice.sentAt"
      },
      {
        "name": "createdAt",
        "type": "string",
        "required": true,
        "fieldRef": "Invoice.createdAt"
      }
    ]
  },
  "inputs": [
    {
      "inputId": "invoiceId",
      "fieldRef": "Invoice.invoiceId",
      "required": true,
      "source": "routeParam",
      "description": "Identifier of the invoice the client wants to view"
    },
    {
      "inputId": "clientId",
      "fieldRef": "Invoice.clientId",
      "required": true,
      "source": "actorSession",
      "description": "Authenticated client identity used to scope which invoices can be viewed"
    }
  ],
  "contextResolution": [
    {
      "inputId": "invoiceId",
      "targetRef": "Invoice.invoiceId",
      "source": "routeParam",
      "originRef": "routeParam.invoiceId",
      "description": "Read the invoice id from the route parameter to load the specific invoice record"
    },
    {
      "inputId": "clientId",
      "targetRef": "Invoice.clientId",
      "source": "actorSession",
      "originRef": "actorSession.actorId",
      "description": "Resolve the authenticated client actor id from the session so only invoices belonging to this client are returned"
    }
  ],
  "acceptanceAssertions": [
    "After the client opens a shared invoice, the response contains that invoice with matching invoiceId and the client's own clientId",
    "The response includes invoiceNumber, projectId, status, totalAmount, sentAt, and createdAt for the requested invoice",
    "Only invoices in status sent that belong to the authenticated client are returned; draft or other clients' invoices are not visible",
    "The operation does not modify the invoice; clients cannot edit or create billing documents through this view",
    "The invoice is presented as a billing document only; no payment capture or accounting actions are performed"
  ],
  "pageId": "viewInvoice",
  "commandName": "viewInvoice",
  "bffName": "buildFlowFsm.viewInvoice.viewInvoice",
  "capability": {
    "capabilityId": "viewInvoice",
    "title": "View invoice",
    "actor": "client",
    "priority": "now"
  },
  "statusFrontend": "toCreate",
  "statusBackend": "toCreate"
} as const;

export default operationViewInvoice;
