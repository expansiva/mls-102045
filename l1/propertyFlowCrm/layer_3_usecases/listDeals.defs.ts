/// <mls fileReference="_102045_/l1/propertyFlowCrm/layer_3_usecases/listDeals.defs.ts" enhancement="_blank"/>

export const useCase = {
  "usecaseId": "listDeals",
  "title": "Listar Negócios",
  "purpose": "Listar negócios/propostas com filtros para o rastreador",
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
      "tableName": "deal",
      "ownership": "moduleOwned"
    },
    {
      "tableName": "property",
      "ownership": "mdmOwned"
    },
    {
      "tableName": "lead",
      "ownership": "mdmOwned"
    }
  ],
  "writesTables": [],
  "rulesApplied": [],
  "commands": [
    {
      "commandId": "listDeals",
      "input": [
        {
          "name": "brokerId",
          "type": "string",
          "required": false
        },
        {
          "name": "propertyId",
          "type": "string",
          "required": false
        },
        {
          "name": "leadId",
          "type": "string",
          "required": false
        },
        {
          "name": "status",
          "type": "DealStatusEnum",
          "required": false
        },
        {
          "name": "page",
          "type": "number",
          "required": false
        },
        {
          "name": "pageSize",
          "type": "number",
          "required": false
        }
      ],
      "output": [
        {
          "name": "deals",
          "type": "Deal[]"
        },
        {
          "name": "total",
          "type": "number"
        },
        {
          "name": "page",
          "type": "number"
        },
        {
          "name": "pageSize",
          "type": "number"
        }
      ]
    }
  ]
} as const;

export default useCase;
