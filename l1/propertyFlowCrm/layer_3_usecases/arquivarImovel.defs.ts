/// <mls fileReference="_102045_/l1/propertyFlowCrm/layer_3_usecases/arquivarImovel.defs.ts" enhancement="_blank"/>

export const useCase = {
  "usecaseId": "arquivarImovel",
  "title": "Arquivar imóvel",
  "purpose": "Arquivar um imóvel, removendo-o do inventário ativo.",
  "actor": "corretor",
  "layer": "layer_3_usecases",
  "inputEntities": [
    "imovelEntity"
  ],
  "outputEntities": [
    "imovelEntity"
  ],
  "readsTables": [
    {
      "tableName": "imovel",
      "ownership": "mdmOwned"
    }
  ],
  "writesTables": [
    {
      "tableName": "imovel",
      "ownership": "mdmOwned"
    },
    {
      "tableName": "imovel_inventory_metrics",
      "ownership": "moduleOwned"
    }
  ],
  "rulesApplied": [],
  "entityRefs": [
    "dashboardMetricsEntity",
    "imovelEntity"
  ]
} as const;

export default useCase;
