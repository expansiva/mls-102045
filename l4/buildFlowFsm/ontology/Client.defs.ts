/// <mls fileReference="_102045_/l4/buildFlowFsm/ontology/Client.defs.ts" enhancement="_blank"/>

export const buildFlowFsmEntityClient = {
  "entityId": "Client",
  "title": "Client",
  "description": "External customer record referenced by projects; receives status reports, billing summaries, and invoices without internal editing access.",
  "kind": "mdm",
  "ownership": "moduleOwned",
  "fields": [
    {
      "fieldId": "clientId",
      "type": "uuid",
      "required": true,
      "description": "Primary identifier for the client record."
    },
    {
      "fieldId": "name",
      "type": "string",
      "required": true,
      "description": "Display name of the client used in project and billing communications."
    },
    {
      "fieldId": "company",
      "type": "string",
      "required": false,
      "description": "Legal or trading name of the client organization, if applicable."
    },
    {
      "fieldId": "email",
      "type": "string",
      "required": true,
      "description": "Email address where status reports, billing summaries, and invoices are delivered."
    },
    {
      "fieldId": "phone",
      "type": "string",
      "required": false,
      "description": "Contact phone number for the client."
    },
    {
      "fieldId": "address",
      "type": "text",
      "required": false,
      "description": "Postal or billing address for the client."
    },
    {
      "fieldId": "createdAt",
      "type": "datetime",
      "required": true,
      "description": "Timestamp when the client record was created."
    },
    {
      "fieldId": "updatedAt",
      "type": "datetime",
      "required": true,
      "description": "Timestamp when the client record was last updated."
    }
  ]
} as const;

export default buildFlowFsmEntityClient;
