/// <mls fileReference="_102045_/l1/propertyFlowCrm/layer_3_usecases/obterNegocio.defs.ts" enhancement="_blank"/>

export const useCase = {
  "usecaseId": "obterNegocio",
  "title": "Obter negócio",
  "purpose": "Recuperar detalhes de um negócio",
  "actor": "corretor",
  "layer": "layer_3_usecases",
  "inputEntities": [
    "dealEntity"
  ],
  "outputEntities": [
    "dealEntity"
  ],
  "readsTables": [
    {
      "tableName": "deal",
      "ownership": "mdmOwned"
    }
  ],
  "writesTables": [],
  "rulesApplied": [
    "ruleDealStages"
  ],
  "entityRefs": [
    "dealEntity"
  ],
  "commands": [
    {
      "commandId": "obterNegocio",
      "input": [
        {
          "name": "dealId",
          "type": "string",
          "required": true
        }
      ],
      "output": [
        {
          "name": "deal",
          "type": "dealEntity"
        }
      ]
    }
  ]
} as const;

export default useCase;
