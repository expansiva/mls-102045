/// <mls fileReference="_102045_/l1/propertyFlowCrm/layer_3_usecases/criarImovel.defs.ts" enhancement="_blank"/>

export const useCase = {
  "usecaseId": "criarImovel",
  "title": "Criar imóvel",
  "purpose": "Cadastrar um novo imóvel no sistema e atualizar métricas de inventário.",
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
