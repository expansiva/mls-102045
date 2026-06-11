/// <mls fileReference="_102045_/l1/propertyFlowCrm/layer_3_usecases/atualizarStatusProposta.defs.ts" enhancement="_blank"/>

export const useCase = {
  "usecaseId": "atualizarStatusProposta",
  "title": "Atualizar status da proposta",
  "purpose": "Atualizar o status de uma proposta em andamento.",
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
  "rulesApplied": [],
  "entityRefs": [
    "dashboardMetricsEntity",
    "negocioEntity"
  ]
} as const;

export default useCase;
