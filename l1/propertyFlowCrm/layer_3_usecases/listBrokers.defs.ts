/// <mls fileReference="_102045_/l1/propertyFlowCrm/layer_3_usecases/listBrokers.defs.ts" enhancement="_blank"/>

export const useCase = {
  "usecaseId": "listBrokers",
  "title": "Listar Corretores",
  "purpose": "Listar corretores cadastrados no sistema",
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
  "writesTables": [],
  "rulesApplied": [],
  "commands": [
    {
      "commandId": "listBrokers",
      "input": [
        {
          "name": "status",
          "type": "BrokerStatusEnum",
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
          "name": "brokers",
          "type": "Broker[]"
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
