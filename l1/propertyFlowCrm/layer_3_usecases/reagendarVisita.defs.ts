/// <mls fileReference="_102045_/l1/propertyFlowCrm/layer_3_usecases/reagendarVisita.defs.ts" enhancement="_blank"/>

export const useCase = {
  "usecaseId": "reagendarVisita",
  "title": "Reagendar visita",
  "purpose": "Alterar a data ou horário de uma visita existente.",
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
  "rulesApplied": [],
  "entityRefs": [
    "dashboardMetricsEntity",
    "visitaEntity"
  ]
} as const;

export default useCase;
