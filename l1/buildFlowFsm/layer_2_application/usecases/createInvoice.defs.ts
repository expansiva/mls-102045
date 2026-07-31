/// <mls fileReference="_102045_/l1/buildFlowFsm/layer_2_application/usecases/createInvoice.defs.ts" enhancement="_blank"/>

export const createInvoiceUsecase = {
  "schemaVersion": "2026-06-26",
  "artifactType": "usecase",
  "artifactId": "createInvoice",
  "moduleName": "buildFlowFsm",
  "status": "draft",
  "source": {
    "agentName": "agentCbUsecase",
    "stepId": 0,
    "planId": ""
  },
  "data": {
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
  }
} as const;

export default createInvoiceUsecase;

export const pipeline = [
  {
    "id": "createInvoice__applicationUsecase",
    "type": "applicationUsecase",
    "outputPath": "_102045_/l1/buildFlowFsm/layer_2_application/usecases/createInvoice.ts",
    "defPath": "_102045_/l1/buildFlowFsm/layer_2_application/usecases/createInvoice.defs.ts",
    "dependsFiles": [
      "_102045_/l1/buildFlowFsm/layer_2_application/ports/invoiceRepository.d.ts",
      "_102045_/l1/buildFlowFsm/layer_2_application/ports/projectRepository.d.ts",
      "_102045_/l1/buildFlowFsm/layer_2_application/ports/changeOrderRepository.d.ts",
      "_102045_/l1/buildFlowFsm/layer_2_application/ports/billingSummaryRepository.d.ts",
      "_102045_/l1/buildFlowFsm/layer_2_application/ports/timeLogRepository.d.ts",
      "_102045_/l1/buildFlowFsm/layer_2_application/ports/materialUsageRepository.d.ts",
      "_102045_/l1/buildFlowFsm/layer_3_domain/entities/invoice.d.ts",
      "_102045_/l1/buildFlowFsm/layer_3_domain/entities/project.d.ts",
      "_102045_/l1/buildFlowFsm/layer_3_domain/entities/changeOrder.d.ts",
      "_102045_/l1/buildFlowFsm/layer_3_domain/entities/billingSummary.d.ts",
      "_102045_/l1/buildFlowFsm/layer_3_domain/entities/timeLog.d.ts",
      "_102045_/l1/buildFlowFsm/layer_3_domain/entities/materialUsage.d.ts"
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
