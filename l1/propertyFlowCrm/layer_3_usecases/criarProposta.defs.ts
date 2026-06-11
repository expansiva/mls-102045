/// <mls fileReference="_102045_/l1/propertyFlowCrm/layer_3_usecases/criarProposta.defs.ts" enhancement="_blank"/>

export const useCase = {
  "usecaseId": "criarProposta",
  "title": "Criar proposta",
  "purpose": "Criar uma nova proposta/negócio vinculada a lead e imóvel.",
  "actor": "corretor",
  "layer": "layer_3_usecases",
  "inputEntities": [
    "negocioEntity"
  ],
  "outputEntities": [
    "negocioEntity"
  ],
  "readsTables": [
    {
      "tableName": "negocio",
      "ownership": "mdmOwned"
    }
  ],
  "writesTables": [
    {
      "tableName": "negocio",
      "ownership": "mdmOwned"
    },
    {
      "tableName": "negocio_metrics",
      "ownership": "moduleOwned"
    }
  ],
  "rulesApplied": [
    "negocioRequiresLinks"
  ],
  "entityRefs": [
    "dashboardMetricsEntity",
    "negocioEntity"
  ]
} as const;

export default useCase;
