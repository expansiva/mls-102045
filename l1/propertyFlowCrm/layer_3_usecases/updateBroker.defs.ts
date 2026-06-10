/// <mls fileReference="_102045_/l1/propertyFlowCrm/layer_3_usecases/updateBroker.defs.ts" enhancement="_blank"/>

export const useCase = {
  "usecaseId": "updateBroker",
  "title": "Atualizar Corretor",
  "purpose": "Atualizar dados de um corretor existente",
  "actor": "admin",
  "layer": "layer_3_usecases",
  "inputEntities": [],
  "outputEntities": [],
  "readsTables": [
    {
      "tableName": "broker",
      "ownership": "mdmOwned"
    }
  ],
  "writesTables": [
    {
      "tableName": "broker",
      "ownership": "mdmOwned"
    }
  ],
  "rulesApplied": [
    "ruleBrokerRequiredFields"
  ],
  "commands": [
    {
      "commandId": "updateBroker",
      "input": [
        {
          "name": "brokerId",
          "type": "string",
          "required": true
        },
        {
          "name": "name",
          "type": "string",
          "required": false
        },
        {
          "name": "email",
          "type": "string",
          "required": false
        },
        {
          "name": "phone",
          "type": "string",
          "required": false
        },
        {
          "name": "specializations",
          "type": "string[]",
          "required": false
        },
        {
          "name": "regions",
          "type": "string[]",
          "required": false
        }
      ],
      "output": [
        {
          "name": "brokerId",
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
