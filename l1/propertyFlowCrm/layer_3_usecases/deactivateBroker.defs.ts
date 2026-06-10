/// <mls fileReference="_102045_/l1/propertyFlowCrm/layer_3_usecases/deactivateBroker.defs.ts" enhancement="_blank"/>

export const useCase = {
  "usecaseId": "deactivateBroker",
  "title": "Desativar Corretor",
  "purpose": "Desativar um corretor no sistema",
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
    "ruleBrokerAssignment"
  ],
  "commands": [
    {
      "commandId": "deactivateBroker",
      "input": [
        {
          "name": "brokerId",
          "type": "string",
          "required": true
        },
        {
          "name": "reason",
          "type": "string",
          "required": false
        },
        {
          "name": "reassignTo",
          "type": "string",
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
        },
        {
          "name": "reassignedLeads",
          "type": "number"
        },
        {
          "name": "reassignedDeals",
          "type": "number"
        }
      ]
    }
  ]
} as const;

export default useCase;
