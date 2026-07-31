/// <mls fileReference="_102045_/l1/buildFlowFsm/layer_2_application/ports/invoiceRepository.defs.ts" enhancement="_blank"/>

export const invoiceRepositoryPort = {
  "schemaVersion": "2026-06-26",
  "artifactType": "repositoryPort",
  "artifactId": "InvoiceRepository",
  "moduleName": "buildFlowFsm",
  "status": "draft",
  "source": {
    "agentName": "agentCbRepositoryPort",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "entityId": "Invoice",
    "interfaceName": "IInvoiceRepository",
    "methods": [
      {
        "name": "getById",
        "returns": "Invoice",
        "description": "Retrieve an invoice by its unique identifier"
      },
      {
        "name": "list",
        "returns": "Invoice[]",
        "description": "List invoices matching the given filter criteria"
      },
      {
        "name": "save",
        "returns": "void",
        "description": "Persist or update the invoice aggregate"
      },
      {
        "name": "findByProject",
        "returns": "Invoice[]",
        "description": "Find all invoices for a given project"
      },
      {
        "name": "findByStatus",
        "returns": "Invoice[]",
        "description": "Find invoices by their current status (draft, issued, paid, overdue)"
      },
      {
        "name": "findByBillingSummary",
        "returns": "Invoice[]",
        "description": "Find invoices linked to a billing summary"
      }
    ]
  }
} as const;

export default invoiceRepositoryPort;

export const pipeline = [
  {
    "id": "invoiceRepository__repositoryPort",
    "type": "repositoryPort",
    "outputPath": "_102045_/l1/buildFlowFsm/layer_2_application/ports/invoiceRepository.ts",
    "defPath": "_102045_/l1/buildFlowFsm/layer_2_application/ports/invoiceRepository.defs.ts",
    "dependsFiles": [
      "_102045_/l1/buildFlowFsm/layer_3_domain/entities/invoice.d.ts"
    ],
    "dependsOn": [],
    "skills": [
      "_102021_/l2/agentChangeBackend/skills/architecture.md",
      "_102021_/l2/agentChangeBackend/skills/repositoryPort.md",
      "_102034_.d.ts"
    ],
    "agent": "agentCbMaterialize"
  }
] as const;
