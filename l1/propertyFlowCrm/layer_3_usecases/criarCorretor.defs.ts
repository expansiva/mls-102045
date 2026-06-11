/// <mls fileReference="_102045_/l1/propertyFlowCrm/layer_3_usecases/criarCorretor.defs.ts" enhancement="_blank"/>

export const useCase = {
  "usecaseId": "criarCorretor",
  "title": "Criar corretor",
  "purpose": "Cadastrar um novo corretor na imobiliária.",
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
