/// <mls fileReference="_102045_/l1/propertyFlowCrm/layer_3_usecases/listProperties.defs.ts" enhancement="_blank"/>

export const useCase = {
  "usecaseId": "listProperties",
  "title": "Listar Imóveis",
  "purpose": "Listar imóveis com filtros e paginação",
  "actor": "broker",
  "layer": "layer_3_usecases",
  "inputEntities": [],
  "outputEntities": [],
  "readsTables": [
    {
      "tableName": "property",
      "ownership": "mdmOwned"
    }
  ],
  "writesTables": [],
  "rulesApplied": [],
  "commands": [
    {
      "commandId": "listProperties",
      "input": [
        {
          "name": "status",
          "type": "PropertyStatusEnum",
          "required": false
        },
        {
          "name": "propertyType",
          "type": "string",
          "required": false
        },
        {
          "name": "transactionType",
          "type": "string",
          "required": false
        },
        {
          "name": "city",
          "type": "string",
          "required": false
        },
        {
          "name": "neighborhood",
          "type": "string",
          "required": false
        },
        {
          "name": "minPrice",
          "type": "number",
          "required": false
        },
        {
          "name": "maxPrice",
          "type": "number",
          "required": false
        },
        {
          "name": "brokerId",
          "type": "string",
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
          "name": "properties",
          "type": "Property[]"
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
