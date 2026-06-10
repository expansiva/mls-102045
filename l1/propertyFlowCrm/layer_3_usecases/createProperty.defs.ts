/// <mls fileReference="_102045_/l1/propertyFlowCrm/layer_3_usecases/createProperty.defs.ts" enhancement="_blank"/>

export const useCase = {
  "usecaseId": "createProperty",
  "title": "Cadastrar Imóvel",
  "purpose": "Criar um novo imóvel no sistema com dados básicos e fotos",
  "actor": "broker",
  "layer": "layer_3_usecases",
  "inputEntities": [],
  "outputEntities": [],
  "readsTables": [],
  "writesTables": [
    {
      "tableName": "property",
      "ownership": "mdmOwned"
    },
    {
      "tableName": "property_metrics",
      "ownership": "moduleOwned"
    },
    {
      "tableName": "crm_activity_metrics",
      "ownership": "moduleOwned"
    }
  ],
  "rulesApplied": [
    "rulePropertyRequiredFields"
  ],
  "commands": [
    {
      "commandId": "createProperty",
      "input": [
        {
          "name": "title",
          "type": "string",
          "required": true
        },
        {
          "name": "propertyType",
          "type": "string",
          "required": true
        },
        {
          "name": "transactionType",
          "type": "string",
          "required": true
        },
        {
          "name": "price",
          "type": "number",
          "required": true
        },
        {
          "name": "address",
          "type": "string",
          "required": true
        },
        {
          "name": "city",
          "type": "string",
          "required": true
        },
        {
          "name": "neighborhood",
          "type": "string",
          "required": true
        },
        {
          "name": "area",
          "type": "number",
          "required": false
        },
        {
          "name": "bedrooms",
          "type": "number",
          "required": false
        },
        {
          "name": "bathrooms",
          "type": "number",
          "required": false
        },
        {
          "name": "parkingSpaces",
          "type": "number",
          "required": false
        },
        {
          "name": "description",
          "type": "string",
          "required": false
        },
        {
          "name": "features",
          "type": "string[]",
          "required": false
        },
        {
          "name": "photos",
          "type": "string[]",
          "required": false
        },
        {
          "name": "brokerId",
          "type": "string",
          "required": true
        }
      ],
      "output": [
        {
          "name": "propertyId",
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
