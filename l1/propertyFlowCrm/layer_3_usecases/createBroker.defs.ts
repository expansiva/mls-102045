/// <mls fileReference="_102045_/l1/propertyFlowCrm/layer_3_usecases/createBroker.defs.ts" enhancement="_blank"/>

export const useCase = {
  "usecaseId": "createBroker",
  "title": "Cadastrar Corretor",
  "purpose": "Cadastrar um novo corretor no sistema",
  "actor": "admin",
  "layer": "layer_3_usecases",
  "inputEntities": [],
  "outputEntities": [],
  "readsTables": [],
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
      "commandId": "createBroker",
      "input": [
        {
          "name": "name",
          "type": "string",
          "required": true
        },
        {
          "name": "email",
          "type": "string",
          "required": true
        },
        {
          "name": "phone",
          "type": "string",
          "required": true
        },
        {
          "name": "creci",
          "type": "string",
          "required": true
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
          "name": "status",
          "type": "string"
        }
      ]
    }
  ]
} as const;

export default useCase;
