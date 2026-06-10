/// <mls fileReference="_102045_/l1/propertyFlowCrm/layer_3_usecases/changePropertyStatus.defs.ts" enhancement="_blank"/>

export const useCase = {
  "usecaseId": "changePropertyStatus",
  "title": "Alterar Status do Imóvel",
  "purpose": "Alterar o status de um imóvel (ativo, inativo, vendido, alugado, reservado)",
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
    "rulePropertyStatusTransition"
  ],
  "commands": [
    {
      "commandId": "changePropertyStatus",
      "input": [
        {
          "name": "propertyId",
          "type": "string",
          "required": true
        },
        {
          "name": "newStatus",
          "type": "PropertyStatusEnum",
          "required": true
        },
        {
          "name": "reason",
          "type": "string",
          "required": false
        }
      ],
      "output": [
        {
          "name": "propertyId",
          "type": "string"
        },
        {
          "name": "previousStatus",
          "type": "string"
        },
        {
          "name": "currentStatus",
          "type": "string"
        }
      ]
    }
  ]
} as const;

export default useCase;
