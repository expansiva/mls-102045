/// <mls fileReference="_102045_/l1/propertyFlowCrm/layer_3_usecases/buscarImovel.defs.ts" enhancement="_blank"/>

export const useCase = {
  "usecaseId": "buscarImovel",
  "title": "Buscar imóvel",
  "purpose": "Consultar e listar imóveis com filtros.",
  "actor": "corretor",
  "layer": "layer_3_usecases",
  "inputEntities": [],
  "outputEntities": [
    "imovelEntity"
  ],
  "readsTables": [
    {
      "tableName": "imovel",
      "ownership": "mdmOwned"
    }
  ],
  "writesTables": [],
  "rulesApplied": [],
  "entityRefs": [
    "imovelEntity"
  ]
} as const;

export default useCase;
