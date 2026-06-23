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

export const pipeline = [
  {
    "id": "listarAtualizacoesMetricas__layer_3_usecases",
    "type": "layer_3_usecases",
    "outputPath": "_102045_/l1/propertyFlowCrm/layer_3_usecases/listarAtualizacoesMetricas.ts",
    "defPath": "_102045_/l1/propertyFlowCrm/layer_3_usecases/listarAtualizacoesMetricas.defs.ts",
    "dependsFiles": [
      "_102045_/l1/propertyFlowCrm/layer_4_entities/dashboardMetricEntity.d.ts"
    ],
    "dependsOn": [],
    "skills": [
      "_102021_/l2/skills/layer_3.md"
    ],
    "rulesPath": "_102045_/l5/propertyFlowCrm/rules.defs.ts",
    "rulesApplied": [
      "ruleMetricRefresh"
    ],
    "agent": "agentMaterializeGen"
  }
] as const;
