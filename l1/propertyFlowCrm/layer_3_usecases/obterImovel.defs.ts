/// <mls fileReference="_102045_/l1/propertyFlowCrm/layer_3_usecases/obterImovel.defs.ts" enhancement="_blank"/>

export const useCase = {
  "usecaseId": "obterImovel",
  "title": "Obter imóvel",
  "purpose": "Recuperar detalhes de um imóvel",
  "actor": "corretor",
  "layer": "layer_3_usecases",
  "inputEntities": [
    "propertyEntity"
  ],
  "outputEntities": [
    "propertyEntity"
  ],
  "readsTables": [
    {
      "tableName": "property",
      "ownership": "mdmOwned"
    }
  ],
  "writesTables": [],
  "rulesApplied": [
    "rulePropertyStatusLifecycle"
  ],
  "entityRefs": [
    "propertyEntity"
  ],
  "commands": [
    {
      "commandId": "obterImovel",
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
          "type": "propertyEntity"
        }
      ]
    }
  ]
} as const;

export default useCase;
