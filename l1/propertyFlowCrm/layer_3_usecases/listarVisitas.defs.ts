/// <mls fileReference="_102045_/l1/propertyFlowCrm/layer_3_usecases/listarVisitas.defs.ts" enhancement="_blank"/>

export const useCase = {
  "usecaseId": "listarVisitas",
  "title": "Listar visitas",
  "purpose": "Listagem de visitas agendadas",
  "actor": "corretor",
  "layer": "layer_3_usecases",
  "inputEntities": [],
  "outputEntities": [
    "visitEntity"
  ],
  "readsTables": [
    {
      "tableName": "visit",
      "ownership": "mdmOwned"
    }
  ],
  "writesTables": [],
  "rulesApplied": [
    "ruleVisitStatus"
  ],
  "entityRefs": [
    "visitEntity"
  ],
  "commands": [
    {
      "commandId": "listarVisitas",
      "input": [],
      "output": [
        {
          "name": "visitas",
          "type": "visitEntity[]"
        }
      ]
    }
  ]
} as const;

export default useCase;
