/// <mls fileReference="_102045_/l1/propertyFlowCrm/layer_3_usecases/updateProperty.defs.ts" enhancement="_blank"/>

export const useCase = {
  "usecaseId": "updateProperty",
  "title": "Atualizar Imóvel",
  "purpose": "Atualizar dados de um imóvel existente",
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
  "writesTables": [
    {
      "tableName": "property",
      "ownership": "mdmOwned"
    }
  ],
  "rulesApplied": [
    "rulePropertyRequiredFields"
  ],
  "commands": [
    {
      "commandId": "updateProperty",
      "input": [
        {
          "name": "propertyId",
          "type": "string",
          "required": true
        },
        {
          "name": "title",
          "type": "string",
          "required": false
        },
        {
          "name": "price",
          "type": "number",
          "required": false
        },
        {
          "name": "address",
          "type": "string",
          "required": false
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
        }
      ],
      "output": [
        {
          "name": "propertyId",
          "type": "string"
        },
        {
          "name": "updated",
          "type": "boolean"
        }
      ]
    }
  ]
} as const;

export default useCase;
