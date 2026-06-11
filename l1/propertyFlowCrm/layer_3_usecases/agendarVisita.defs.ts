/// <mls fileReference="_102045_/l1/propertyFlowCrm/layer_3_usecases/agendarVisita.defs.ts" enhancement="_blank"/>

export const useCase = {
  "usecaseId": "agendarVisita",
  "title": "Agendar visita",
  "purpose": "Agendar uma visita vinculada a um imóvel e lead.",
  "actor": "corretor",
  "layer": "layer_3_usecases",
  "inputEntities": [
    "visitaEntity"
  ],
  "outputEntities": [
    "visitaEntity"
  ],
  "readsTables": [
    {
      "tableName": "visita",
      "ownership": "mdmOwned"
    },
    {
      "tableName": "imovel",
      "ownership": "mdmOwned"
    }
  ],
  "writesTables": [
    {
      "tableName": "visita",
      "ownership": "mdmOwned"
    },
    {
      "tableName": "visita_metrics",
      "ownership": "moduleOwned"
    }
  ],
  "rulesApplied": [
    "visitaRequiresLinks",
    "imovelActiveStatus"
  ],
  "entityRefs": [
    "dashboardMetricsEntity",
    "imovelEntity",
    "visitaEntity"
  ]
} as const;

export default useCase;
