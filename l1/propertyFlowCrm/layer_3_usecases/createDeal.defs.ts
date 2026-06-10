/// <mls fileReference="_102045_/l1/propertyFlowCrm/layer_3_usecases/createDeal.defs.ts" enhancement="_blank"/>

export const useCase = {
  "usecaseId": "createDeal",
  "title": "Criar Negócio/Proposta",
  "purpose": "Criar um novo negócio/proposta comercial",
  "actor": "broker",
  "layer": "layer_3_usecases",
  "inputEntities": [
    "dealEntity"
  ],
  "outputEntities": [
    "dealEntity"
  ],
  "readsTables": [
    {
      "tableName": "property",
      "ownership": "mdmOwned"
    },
    {
      "tableName": "lead",
      "ownership": "mdmOwned"
    }
  ],
  "writesTables": [
    {
      "tableName": "deal",
      "ownership": "moduleOwned"
    },
    {
      "tableName": "deal_pipeline_metrics",
      "ownership": "moduleOwned"
    },
    {
      "tableName": "crm_activity_metrics",
      "ownership": "moduleOwned"
    }
  ],
  "rulesApplied": [
    "ruleDealRequiredFields",
    "ruleDealPropertyActive"
  ],
  "commands": [
    {
      "commandId": "createDeal",
      "input": [
        {
          "name": "propertyId",
          "type": "string",
          "required": true
        },
        {
          "name": "leadId",
          "type": "string",
          "required": true
        },
        {
          "name": "brokerId",
          "type": "string",
          "required": true
        },
        {
          "name": "proposedValue",
          "type": "number",
          "required": true
        },
        {
          "name": "dealType",
          "type": "string",
          "required": true
        },
        {
          "name": "notes",
          "type": "string",
          "required": false
        },
        {
          "name": "expectedCloseDate",
          "type": "date",
          "required": false
        }
      ],
      "output": [
        {
          "name": "dealId",
          "type": "string"
        },
        {
          "name": "status",
          "type": "string"
        }
      ]
    }
  ]
} as const;

export default useCase;
