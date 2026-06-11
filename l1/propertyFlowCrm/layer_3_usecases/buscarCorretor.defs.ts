/// <mls fileReference="_102045_/l1/propertyFlowCrm/layer_3_usecases/buscarCorretor.defs.ts" enhancement="_blank"/>

export const useCase = {
  "usecaseId": "buscarCorretor",
  "title": "Buscar corretor",
  "purpose": "Consultar e listar corretores cadastrados.",
  "actor": "adminImobiliaria",
  "layer": "layer_3_usecases",
  "inputEntities": [],
  "outputEntities": [
    "corretorEntity"
  ],
  "readsTables": [
    {
      "tableName": "corretor",
      "ownership": "mdmOwned"
    }
  ],
  "writesTables": [],
  "rulesApplied": [],
  "entityRefs": [
    "corretorEntity"
  ]
} as const;

export default useCase;
