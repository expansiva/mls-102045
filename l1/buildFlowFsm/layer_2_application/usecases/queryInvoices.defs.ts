/// <mls fileReference="_102045_/l1/buildFlowFsm/layer_2_application/usecases/queryInvoices.defs.ts" enhancement="_blank"/>

export const queryInvoicesUsecase = {
  "schemaVersion": "2026-06-26",
  "artifactType": "usecase",
  "artifactId": "queryInvoices",
  "moduleName": "buildFlowFsm",
  "status": "draft",
  "source": {
    "agentName": "agentCbUsecase",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "usecaseId": "queryInvoices",
    "ports": [
      "Invoice",
      "Project",
      "MaterialUsage"
    ],
    "functions": [
      {
        "functionName": "queryInvoices",
        "inputTypeName": "QueryInvoicesInput",
        "outputTypeName": "QueryInvoicesOutput",
        "input": [
          {
            "name": "status",
            "type": "string",
            "required": false,
            "description": "Optional filter by invoice lifecycle status (draft or sent)",
            "fieldRef": "Invoice.status"
          },
          {
            "name": "projectId",
            "type": "string",
            "required": false,
            "description": "Optional filter to invoices for a specific project",
            "fieldRef": "Invoice.projectId"
          },
          {
            "name": "clientId",
            "type": "string",
            "required": false,
            "description": "Optional filter to invoices for a specific client",
            "fieldRef": "Invoice.clientId"
          },
          {
            "name": "page",
            "type": "number",
            "required": false,
            "description": "Optional page number for paginated results"
          },
          {
            "name": "pageSize",
            "type": "number",
            "required": false,
            "description": "Optional page size for paginated results"
          }
        ],
        "output": [
          {
            "name": "invoices",
            "type": "array",
            "required": true
          },
          {
            "name": "total",
            "type": "number",
            "required": true
          }
        ],
        "ports": [
          "Invoice",
          "Project"
        ],
        "rulesApplied": [
          "invoiceScopeExternalPayment",
          "invoiceMustReferenceProjectAndClient",
          "clientBillingAccess"
        ],
        "transactional": false,
        "steps": [
          "1. Resolve pagination defaults: page = page ?? 1, pageSize = pageSize ?? 20. Validate page >= 1 and pageSize between 1 and 100; throw ValidationError if out of range.",
          "2. Build filter criteria object from optional inputs: include status, projectId, clientId only when provided (non-null/non-empty). All three are optional filters.",
          "3. Apply rule invoiceScopeExternalPayment: the projection is restricted to billing-document fields only (invoiceId, invoiceNumber, projectId, clientId, status, totalAmount, sentAt, createdAt, updatedAt). No payment, accounting, or settlement fields are selected or returned — this is enforced by the explicit field list passed to the Invoice port query.",
          "4. Query the Invoice port (list operation) with the built filter criteria, pagination (offset = (page - 1) * pageSize, limit = pageSize), and sort by createdAt descending then invoiceNumber ascending. Request total count alongside the page results.",
          "5. Apply rule invoiceMustReferenceProjectAndClient: for every invoice returned, validate that both projectId and clientId are non-null and non-empty. If any invoice is missing either reference, exclude it from results and log a data-integrity warning (this should never happen for well-formed data but the rule is enforced as a guard).",
          "6. Apply rule clientBillingAccess: verify the actor session context (ctx.sessionContext) represents billing staff with billing access. If the session lacks billing role/permission, throw AuthorizationError with rule id 'clientBillingAccess'. This gate is checked before returning any invoice data.",
          "7. Optionally hydrate Client master data: collect unique clientId values from the result set and call ctx.mdm.collection.getMany({ mdmIds: clientIds }) to retrieve client billing-relevant info (name, company, email). This enrichment is available for display but the core invoice list does not depend on it. If MDM lookup fails, return invoices without client enrichment (degraded but functional).",
          "8. Optionally verify Project references: collect unique projectId values and query the Project port to confirm each project exists. This is a soft validation; if a project is not found, the invoice is still returned (the invoiceMustReferenceProjectAndClient rule already validated the reference is present).",
          "9. Assemble the paginated output: map each Invoice entity to the billing-document projection (only the 9 declared fields), return { invoices: [...], total: totalCount }."
        ],
        "outputShape": {
          "kind": "paginated",
          "fields": [
            {
              "name": "invoices",
              "type": "array",
              "required": true,
              "item": {
                "fields": [
                  {
                    "name": "invoiceId",
                    "type": "string",
                    "required": true,
                    "fieldRef": "Invoice.invoiceId"
                  },
                  {
                    "name": "invoiceNumber",
                    "type": "string",
                    "required": true,
                    "fieldRef": "Invoice.invoiceNumber"
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
                  },
                  {
                    "name": "updatedAt",
                    "type": "string",
                    "required": true,
                    "fieldRef": "Invoice.updatedAt"
                  }
                ]
              }
            },
            {
              "name": "total",
              "type": "number",
              "required": true
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

export default queryInvoicesUsecase;

export const pipeline = [
  {
    "id": "queryInvoices__applicationUsecase",
    "type": "applicationUsecase",
    "outputPath": "_102045_/l1/buildFlowFsm/layer_2_application/usecases/queryInvoices.ts",
    "defPath": "_102045_/l1/buildFlowFsm/layer_2_application/usecases/queryInvoices.defs.ts",
    "dependsFiles": [
      "_102045_/l1/buildFlowFsm/layer_2_application/ports/invoiceRepository.d.ts",
      "_102045_/l1/buildFlowFsm/layer_2_application/ports/projectRepository.d.ts",
      "_102045_/l1/buildFlowFsm/layer_2_application/ports/materialUsageRepository.d.ts",
      "_102045_/l1/buildFlowFsm/layer_3_domain/entities/invoice.d.ts",
      "_102045_/l1/buildFlowFsm/layer_3_domain/entities/project.d.ts",
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
