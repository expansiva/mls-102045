/// <mls fileReference="_102045_/l1/propertyFlowCrm/layer_3_usecases/cancelarVisita.defs.ts" enhancement="_blank"/>

export const useCase = {
  "usecaseId": "cancelarVisita",
  "title": "Cancelar visita",
  "purpose": "Cancelar uma visita previamente agendada.",
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
