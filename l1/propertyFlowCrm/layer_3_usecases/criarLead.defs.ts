/// <mls fileReference="_102045_/l1/propertyFlowCrm/layer_3_usecases/criarLead.defs.ts" enhancement="_blank"/>

export const useCase = {
  "usecaseId": "criarLead",
  "title": "Criar lead",
  "purpose": "Cadastrar um novo lead no pipeline.",
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
    "leadPipelineStages"
  ],
  "entityRefs": [
    "dashboardMetricsEntity",
    "leadEntity"
  ]
} as const;

export default useCase;
