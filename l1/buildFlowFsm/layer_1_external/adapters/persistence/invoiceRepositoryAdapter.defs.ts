/// <mls fileReference="_102045_/l1/buildFlowFsm/layer_1_external/adapters/persistence/invoiceRepositoryAdapter.defs.ts" enhancement="_blank"/>

export const invoiceRepositoryAdapter = {
  "schemaVersion": "2026-06-26",
  "artifactType": "repositoryAdapter",
  "artifactId": "InvoiceRepositoryAdapter",
  "moduleName": "buildFlowFsm",
  "status": "draft",
  "source": {
    "agentName": "agentCbRepositoryAdapter",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "entityId": "Invoice",
    "className": "InvoiceRepositoryAdapter",
    "portRef": "IInvoiceRepository",
    "tableRef": "invoices",
    "mdmReads": [],
    "notes": [
      "Columns: invoice_id, project_id, client_id, status, created_at. Details JSONB holds invoiceNumber, totalAmount, sentAt, updatedAt.",
      "No MDM refs (clientId is a local FK column, not resolved through MDM in this adapter). toRow/fromRow map columns + details JSONB only."
    ]
  }
} as const;

export default invoiceRepositoryAdapter;

export const pipeline = [
  {
    "id": "invoiceRepositoryAdapter__repositoryAdapter",
    "type": "repositoryAdapter",
    "outputPath": "_102045_/l1/buildFlowFsm/layer_1_external/adapters/persistence/invoiceRepositoryAdapter.ts",
    "defPath": "_102045_/l1/buildFlowFsm/layer_1_external/adapters/persistence/invoiceRepositoryAdapter.defs.ts",
    "dependsFiles": [
      "_102045_/l1/buildFlowFsm/layer_2_application/ports/invoiceRepository.d.ts",
      "_102045_/l1/buildFlowFsm/layer_1_external/adapters/persistence/invoice.d.ts",
      "_102045_/l1/buildFlowFsm/layer_3_domain/entities/invoice.d.ts"
    ],
    "dependsOn": [],
    "skills": [
      "_102021_/l2/agentChangeBackend/skills/architecture.md",
      "_102021_/l2/agentChangeBackend/skills/repositoryAdapter.md",
      "_102034_.d.ts"
    ],
    "agent": "agentCbMaterialize"
  }
] as const;
