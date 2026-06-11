/// <mls fileReference="_102045_/l1/propertyFlowCrm/layer_3_usecases/alterarStatusCorretor.defs.ts" enhancement="_blank"/>

export const useCase = {
  "usecaseId": "alterarStatusCorretor",
  "title": "Ativar/desativar corretor",
  "purpose": "Alterar o status ativo/inativo de um corretor.",
  "actor": "adminImobiliaria",
  "layer": "layer_3_usecases",
  "inputEntities": [
    "corretorEntity"
  ],
  "outputEntities": [
    "corretorEntity"
  ],
  "readsTables": [
    {
      "tableName": "corretor",
      "ownership": "mdmOwned"
    }
  ],
  "writesTables": [
    {
      "tableName": "corretor",
      "ownership": "mdmOwned"
    },
    {
      "tableName": "corretor_status_metrics",
      "ownership": "moduleOwned"
    }
  ],
  "rulesApplied": [],
  "entityRefs": [
    "corretorEntity",
    "dashboardMetricsEntity"
  ]
} as const;

export default useCase;
