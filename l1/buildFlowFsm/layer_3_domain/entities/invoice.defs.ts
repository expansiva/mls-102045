/// <mls fileReference="_102045_/l1/buildFlowFsm/layer_3_domain/entities/invoice.defs.ts" enhancement="_blank"/>

export const invoiceDomainEntity = {
  "schemaVersion": "2026-06-26",
  "artifactType": "domainEntity",
  "artifactId": "Invoice",
  "moduleName": "buildFlowFsm",
  "status": "draft",
  "source": {
    "agentName": "agentCbDomainEntity",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "entityId": "Invoice",
    "title": "Invoice",
    "fields": [
      {
        "fieldId": "invoiceId",
        "type": "uuid",
        "required": true,
        "description": "Unique identifier for the invoice record"
      },
      {
        "fieldId": "projectId",
        "type": "uuid",
        "required": true,
        "description": "Reference to the project this invoice is generated from"
      },
      {
        "fieldId": "clientId",
        "type": "uuid",
        "required": true,
        "description": "Reference to the client being billed for this invoice"
      },
      {
        "fieldId": "invoiceNumber",
        "type": "string",
        "required": true,
        "description": "Human-readable invoice number used for external reference and communication"
      },
      {
        "fieldId": "status",
        "type": "string",
        "required": true,
        "description": "Current lifecycle state of the invoice",
        "enum": [
          "draft",
          "sent"
        ]
      },
      {
        "fieldId": "totalAmount",
        "type": "money",
        "required": true,
        "description": "Total billed amount including approved job costs and approved change orders"
      },
      {
        "fieldId": "sentAt",
        "type": "datetime",
        "required": false,
        "description": "Timestamp when the invoice was sent to the client"
      },
      {
        "fieldId": "createdAt",
        "type": "datetime",
        "required": true,
        "description": "Timestamp when the invoice record was created"
      },
      {
        "fieldId": "updatedAt",
        "type": "datetime",
        "required": true,
        "description": "Timestamp of the last modification to the invoice record"
      }
    ],
    "valueObjects": [],
    "statusEnum": [
      "draft",
      "sent"
    ],
    "invariants": [
      "status may only transition from 'draft' to 'sent'; once 'sent' it cannot return to 'draft'",
      "sentAt is required when status is 'sent'",
      "sentAt must be null when status is 'draft'",
      "sentAt, when present, must be greater than or equal to createdAt",
      "updatedAt must be greater than or equal to createdAt",
      "totalAmount must be non-negative",
      "totalAmount must equal the sum of approved job costs plus approved change orders",
      "invoiceNumber must be unique across all invoice records",
      "sentAt, when present, must be less than or equal to updatedAt"
    ]
  }
} as const;

export default invoiceDomainEntity;

export const pipeline = [
  {
    "id": "invoice__domainEntity",
    "type": "domainEntity",
    "outputPath": "_102045_/l1/buildFlowFsm/layer_3_domain/entities/invoice.ts",
    "defPath": "_102045_/l1/buildFlowFsm/layer_3_domain/entities/invoice.defs.ts",
    "dependsFiles": [],
    "dependsOn": [],
    "skills": [
      "_102021_/l2/agentChangeBackend/skills/architecture.md",
      "_102021_/l2/agentChangeBackend/skills/domainEntity.md",
      "_102034_.d.ts"
    ],
    "agent": "agentCbMaterialize"
  }
] as const;
