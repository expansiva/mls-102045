/// <mls fileReference="_102045_/l1/propertyFlowCrm/layer_3_usecases/getPropertyDetail.defs.ts" enhancement="_blank"/>

export const useCase = {
  "usecaseId": "getPropertyDetail",
  "title": "Obter Detalhe do Imóvel",
  "purpose": "Obter detalhes completos de um imóvel específico",
  "actor": "broker",
  "layer": "layer_3_usecases",
  "inputEntities": [],
  "outputEntities": [],
  "readsTables": [
    {
      "tableName": "property",
      "ownership": "mdmOwned"
    },
    {
      "tableName": "visit",
      "ownership": "moduleOwned"
    },
    {
      "tableName": "deal",
      "ownership": "moduleOwned"
    }
  ],
  "writesTables": [],
  "rulesApplied": [],
  "commands": [
    {
      "commandId": "getPropertyDetail",
      "input": [
        {
          "name": "propertyId",
          "type": "string",
          "required": true
        }
      ],
      "output": [
        {
          "name": "property",
          "type": "Property"
        },
        {
          "name": "recentVisits",
          "type": "Visit[]"
        },
        {
          "name": "activeDeals",
          "type": "Deal[]"
        }
      ]
    }
  ]
} as const;

export default useCase;
