{
  "savedAt": "2026-07-31T05:12:35.785Z",
  "agentName": "agentCbUsecase",
  "stepId": 24,
  "planning": null,
  "status": "waiting_after_prompt",
  "payload": {
    "type": "flexible",
    "result": {
      "toolName": "submitUsecase",
      "arguments": {
        "status": "ok",
        "result": {
          "usecaseId": "createInvoice",
          "ports": [
            "Invoice",
            "Project",
            "ChangeOrder",
            "BillingSummary",
            "TimeLog",
            "MaterialUsage"
          ],
          "functions": [
            {
              "functionName": "createInvoice",
              "inputTypeName": "CreateInvoiceInput",
              "outputTypeName": "CreateInvoiceOutput",
              "input": [
                {
                  "name": "projectId",
                  "type": "string",
                  "required": true,
                  "ofEntity": "Invoice",
                  "description": "Project selected for invoice generation; approved costs are taken from this project"
                },
                {
                  "name": "invoiceNumber",
                  "type": "string",
                  "required": true,
                  "ofEntity": "Invoice",
                  "description": "Human-readable invoice number used for external reference and client communication"
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
                  "name": "createdAt",
                  "type": "string",
                  "required": true,
                  "ofEntity": "Invoice"
                },
                {
                  "name": "updatedAt",
                  "type": "string",
                  "required": true,
                  "ofEntity": "Invoice"
                }
              ],
              "ports": [
                "Invoice",
                "Project",
                "ChangeOrder",
                "BillingSummary"
              ],
              "rulesApplied": [
                "onlyApprovedChangeOrdersAffectCosting",
                "invoiceScopeExternalPayment",
                "invoiceMustReferenceProjectAndClient"
              ],
              "transactional": true,
              "steps": [
                "1. Load the selected project via Project port getById(projectId). If not found, throw validation error 'Project not found for projectId {projectId}'.",
                "2. Apply rule invoiceMustReferenceProjectAndClient: verify project.clientId is present and non-empty; if missing, throw validation error 'invoiceMustReferenceProjectAndClient: project has no associated client'.",
                "3. Validate the client exists in MDM via ctx.mdm.entity.get({ mdmId: project.clientId }). If not found, throw validation error 'invoiceMustReferenceProjectAndClient: client {clientId} not found in master data'.",
                "4. Load the latest BillingSummary for the project via BillingSummary port list({ projectId, orderBy: createdAt desc, limit: 1 }). If none found, default laborCost=0 and materialCost=0.",
                "5. Load all ChangeOrders for the project via ChangeOrder port list({ projectId }).",
                "6. Apply rule onlyApprovedChangeOrdersAffectCosting: filter change orders to status==='approved' only; sum their costAdjustment values into approvedChangeOrderCost. Pending, draft, and rejected change orders are excluded.",
                "7. Calculate totalAmount = billingSummary.laborCost + billingSummary.materialCost + approvedChangeOrderCost.",
                "8. Generate invoiceId via ctx.idGenerator.uuid(). Set createdAt and updatedAt to ctx.clock.now() (ISO string). Set status='draft'.",
                "9. Apply rule invoiceScopeExternalPayment: the invoice is created with status 'draft' only — no payment capture, no accounting posting, no sentAt field is set.",
                "10. Build the Invoice aggregate: { invoiceId, projectId, clientId: project.clientId, invoiceNumber, status: 'draft', totalAmount, createdAt, updatedAt }.",
                "11. Persist via Invoice port create(invoice) inside a single transaction (ctx.data transaction wrapper).",
                "12. Return { invoiceId, projectId, clientId, invoiceNumber, status, totalAmount, createdAt, updatedAt }."
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
              }
            }
          ],
          "mdmRefs": [
            "Client"
          ]
        },
        "questions": [],
        "trace": [
          "Parsed owner: createInvoice (opKind=create, entity=Invoice, parentAggregate=Invoice)",
          "Identified public inputs: projectId (selectedEntity), invoiceNumber (userInput)",
          "Identified context-resolved (non-public): invoiceId (systemDefault.uuid), clientId (resolved from Project.clientId), createdAt/updatedAt (systemDefault.now)",
          "Ports: Invoice, Project, ChangeOrder, BillingSummary — TimeLog and MaterialUsage are reads but not ports; their costs are accessed via BillingSummary aggregate",
          "Client is mdmRef — validated via ctx.mdm.entity.get, not a port",
          "Rules: onlyApprovedChangeOrdersAffectCosting (filter ChangeOrders to approved), invoiceScopeExternalPayment (status=draft, no payment), invoiceMustReferenceProjectAndClient (validate project+client exist)",
          "Output shape matches outputShape exactly: 8 top-level fields from Invoice entity",
          "Built single function createInvoice with commandInput access pattern, transactional=true"
        ]
      }
    },
    "status": "completed",
    "stepId": 9,
    "interaction": null,
    "nextSteps": null
  }
}
