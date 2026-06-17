/// <mls fileReference="_102045_/l1/propertyFlowCrm/layer_3_usecases/listarImoveis.defs.ts" enhancement="_blank"/>

export const useCase = {
  "usecaseId": "listarImoveis",
  "title": "Listar imóveis",
  "purpose": "Listagem e busca de imóveis",
  "actor": "corretor",
  "layer": "layer_3_usecases",
  "inputEntities": [],
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
      "commandId": "listarImoveis",
      "input": [],
      "output": [
        {
          "name": "properties",
          "type": "propertyEntity[]"
        }
      ]
    }
  ]
} as const;

export default useCase;
