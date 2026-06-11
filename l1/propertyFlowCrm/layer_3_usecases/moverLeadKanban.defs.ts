/// <mls fileReference="_102045_/l1/propertyFlowCrm/layer_3_usecases/moverLeadKanban.defs.ts" enhancement="_blank"/>

export const useCase = {
  "usecaseId": "moverLeadKanban",
  "title": "Mover lead no Kanban",
  "purpose": "Alterar a etapa do lead no pipeline e atualizar métricas.",
  "actor": "corretor",
  "layer": "layer_3_usecases",
  "inputEntities": [
    "leadEntity"
  ],
  "outputEntities": [
    "leadEntity"
  ],
  "readsTables": [
    {
      "tableName": "lead",
      "ownership": "mdmOwned"
    }
  ],
  "writesTables": [
    {
      "tableName": "lead",
      "ownership": "mdmOwned"
    },
    {
      "tableName": "lead_pipeline_metrics",
      "ownership": "moduleOwned"
    }
  ],
  "rulesApplied": [
    "leadPipelineStages",
    "kanbanMoveUpdatesStatus"
  ],
  "entityRefs": [
    "dashboardMetricsEntity",
    "leadEntity"
  ]
} as const;

export default useCase;
