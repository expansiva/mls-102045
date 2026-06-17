/// <mls fileReference="_102045_/l1/propertyFlowCrm/layer_3_usecases/listarAtualizacoesMetricas.defs.ts" enhancement="_blank"/>

export const useCase = {
  "usecaseId": "listarAtualizacoesMetricas",
  "title": "Listar atualizações de métricas",
  "purpose": "Listar histórico de execuções de atualização de métricas",
  "actor": "admin",
  "layer": "layer_3_usecases",
  "inputEntities": [],
  "outputEntities": [
    "dashboardMetricEntity"
  ],
  "readsTables": [
    {
      "tableName": "dashboard_metric_update",
      "ownership": "moduleOwned"
    }
  ],
  "writesTables": [],
  "rulesApplied": [
    "ruleMetricRefresh"
  ],
  "entityRefs": [
    "dashboardMetricEntity"
  ],
  "commands": [
    {
      "commandId": "listarAtualizacoesMetricas",
      "input": [],
      "output": [
        {
          "name": "atualizacoes",
          "type": "dashboardMetricEntity[]"
        }
      ]
    }
  ]
} as const;

export default useCase;
