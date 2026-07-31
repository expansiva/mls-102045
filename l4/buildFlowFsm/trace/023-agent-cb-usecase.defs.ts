{
  "savedAt": "2026-07-31T05:12:01.252Z",
  "agentName": "agentCbUsecase",
  "stepId": 23,
  "planning": null,
  "status": "waiting_after_prompt",
  "payload": {
    "type": "flexible",
    "result": {
      "toolName": "submitUsecase",
      "arguments": {
        "status": "ok",
        "result": {
          "usecaseId": "viewInvoice",
          "ports": [
            "Invoice"
          ],
          "functions": [
            {
              "functionName": "viewInvoice",
              "inputTypeName": "ViewInvoiceInput",
              "outputTypeName": "ViewInvoiceOutput",
              "input": [
                {
                  "name": "invoiceId",
                  "type": "string",
                  "required": true,
                  "ofEntity": "Invoice",
                  "fieldRef": "Invoice.invoiceId",
                  "description": "Identifier of the invoice the client wants to view"
                }
              ],
              "output": [
                {
                  "name": "invoiceId",
                  "type": "string",
                  "required": true,
                  "ofEntity": "Invoice"
                },
                {
                  "name": "projectId",
                  "type": "string",
                  "required": true,
                  "ofEntity": "Invoice"
                },
                {
                  "name": "clientId",
                  "type": "string",
                  "required": true,
                  "ofEntity": "Invoice"
                },
                {
                  "name": "invoiceNumber",
                  "type": "string",
                  "required": true,
                  "ofEntity": "Invoice"
                },
                {
                  "name": "status",
                  "type": "string",
                  "required": true,
                  "ofEntity": "Invoice"
                },
                {
                  "name": "totalAmount",
                  "type": "number",
                  "required": true,
                  "ofEntity": "Invoice"
                },
                {
                  "name": "sentAt",
                  "type": "string",
                  "required": false,
                  "ofEntity": "Invoice"
                },
                {
                  "name": "createdAt",
                  "type": "string",
                  "required": true,
                  "ofEntity": "Invoice"
                }
              ],
              "ports": [
                "Invoice"
              ],
              "rulesApplied": [
                "clientBillingAccess",
                "invoiceScopeExternalPayment",
                "invoiceMustReferenceProjectAndClient"
              ],
              "transactional": false,
              "steps": [
                "1. Resolve the authenticated client id from ctx.sessionContext.actorId (actorSession) — this is the clientId scope filter, never accepted as user input.",
                "2. Load the Invoice aggregate from the Invoice port by invoiceId: invoicePort.getById(invoiceId).",
                "3. If no invoice is found, return a not-found error (invoice does not exist).",
                "4. Apply rule 'clientBillingAccess': verify invoice.clientId === resolvedClientId. If mismatch, return a 403/forbidden error — the client may only view their own invoices.",
                "5. Apply rule 'invoiceScopeExternalPayment': verify invoice.status === 'sent'. If status is 'draft' or any other value, return a 403/forbidden error — only sent invoices are visible to external clients.",
                "6. Apply rule 'invoiceMustReferenceProjectAndClient': verify invoice.projectId and invoice.clientId are both non-null/non-empty. If either is missing, return a validation error indicating the invoice is incomplete and cannot be presented.",
                "7. Project the invoice fields (invoiceId, projectId, clientId, invoiceNumber, status, totalAmount, sentAt, createdAt) into the ViewInvoiceOutput and return it. No mutation is performed — this is a read-only view."
              ],
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
              }
            }
          ],
          "mdmRefs": []
        },
        "questions": [],
        "trace": [
          "Parsed owner: viewInvoice, entity=Invoice, parentAggregate=Invoice (own aggregate root), opKind=view, accessPattern=getById",
          "Identified public input: invoiceId (routeParam, required). clientId is actorSession — resolved from ctx.sessionContext.actorId, NOT exposed as public input.",
          "Output shape: object with 8 fields from Invoice entity (invoiceId, projectId, clientId, invoiceNumber, status, totalAmount, sentAt, createdAt).",
          "Rules: clientBillingAccess (scope by clientId from session), invoiceScopeExternalPayment (only status 'sent' visible externally), invoiceMustReferenceProjectAndClient (projectId and clientId must be present).",
          "No writes, no event writes — transactional=false, read-only operation.",
          "Port: Invoice (single aggregate root, getById access pattern)."
        ]
      }
    },
    "status": "completed",
    "stepId": 7,
    "interaction": null,
    "nextSteps": null
  }
}
