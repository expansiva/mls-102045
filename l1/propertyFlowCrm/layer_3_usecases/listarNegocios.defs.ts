/// <mls fileReference="_102045_/l1/propertyFlowCrm/layer_3_usecases/listarNegocios.defs.ts" enhancement="_blank"/>

export const useCase = {
  "usecaseId": "listarNegocios",
  "title": "Listar negócios",
  "purpose": "Listagem de negócios e propostas",
  "actor": "corretor",
  "layer": "layer_3_usecases",
  "inputEntities": [],
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
      "commandId": "listarNegocios",
      "input": [],
      "output": [
        {
          "name": "negocios",
          "type": "dealEntity[]"
        }
      ]
    }
  ]
} as const;

export default useCase;
