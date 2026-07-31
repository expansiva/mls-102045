/// <mls fileReference="_102045_/l1/buildFlowFsm/layer_2_application/usecases/sendInvoice.defs.ts" enhancement="_blank"/>

export const sendInvoiceUsecase = {
  "schemaVersion": "2026-06-26",
  "artifactType": "usecase",
  "artifactId": "sendInvoice",
  "moduleName": "buildFlowFsm",
  "status": "draft",
  "source": {
    "agentName": "agentCbUsecase",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "usecaseId": "sendInvoice",
    "ports": [
      "Invoice"
    ],
    "functions": [
      {
        "functionName": "sendInvoice",
        "inputTypeName": "SendInvoiceInput",
        "outputTypeName": "SendInvoiceOutput",
        "input": [
          {
            "name": "invoiceId",
            "type": "string",
            "required": true,
            "ofEntity": "Invoice",
            "fieldRef": "Invoice.invoiceId",
            "description": "Identifier of the draft invoice being sent to the client"
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
          "Invoice"
        ],
        "rulesApplied": [
          "invoiceScopeExternalPayment",
          "invoiceMustReferenceProjectAndClient",
          "clientBillingAccess"
        ],
        "transactional": true,
        "steps": [
          "1. Load the invoice by invoiceId through the Invoice port (getById). If not found, throw a validation error 'Invoice not found'.",
          "2. Validate the invoice status is 'draft' — only a draft invoice can be sent (acceptance: 'Only an invoice in draft status can be sent'). If status is not 'draft', throw validation error with rule detail 'Only invoices in draft status can be sent'.",
          "3. Apply rule invoiceMustReferenceProjectAndClient: verify invoice.projectId and invoice.clientId are both non-null/non-empty. If either is missing, throw validation error 'Invoice must reference both a project and a client before it can be sent'.",
          "4. Apply rule clientBillingAccess: read the Client MDM record by invoice.clientId via ctx.mdm.entity.get({ mdmId: invoice.clientId }). If the client does not exist or is inactive, throw validation error 'Client not found or not accessible for billing'.",
          "5. Apply rule invoiceScopeExternalPayment: this operation only transitions the invoice to 'sent' status — it does NOT perform any payment capture or external payment gateway call. The invoice remains a billing document only.",
          "6. Set invoice.status = 'sent' (systemDefault lifecycle value).",
          "7. Set invoice.sentAt = ctx.clock.now() (systemDefault.now).",
          "8. Set invoice.updatedAt = ctx.clock.now() (systemDefault.now).",
          "9. Save the updated invoice through the Invoice port inside the same transaction (ctx.data transaction wrapper).",
          "10. Return the updated invoice fields: invoiceId, projectId, clientId, invoiceNumber, status, totalAmount, sentAt, updatedAt."
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
        }
      }
    ],
    "mdmRefs": [
      "Client"
    ]
  }
} as const;

export default sendInvoiceUsecase;

export const pipeline = [
  {
    "id": "sendInvoice__applicationUsecase",
    "type": "applicationUsecase",
    "outputPath": "_102045_/l1/buildFlowFsm/layer_2_application/usecases/sendInvoice.ts",
    "defPath": "_102045_/l1/buildFlowFsm/layer_2_application/usecases/sendInvoice.defs.ts",
    "dependsFiles": [
      "_102045_/l1/buildFlowFsm/layer_2_application/ports/invoiceRepository.d.ts",
      "_102045_/l1/buildFlowFsm/layer_3_domain/entities/invoice.d.ts"
    ],
    "dependsOn": [],
    "skills": [
      "_102021_/l2/agentChangeBackend/skills/architecture.md",
      "_102021_/l2/agentChangeBackend/skills/applicationUsecase.md",
      "_102034_.d.ts"
    ],
    "agent": "agentCbMaterialize"
  }
] as const;
