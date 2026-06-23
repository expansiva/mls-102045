/// <mls fileReference="_102045_/l1/propertyFlowCrm/layer_3_usecases/criarNegocio.defs.ts" enhancement="_blank"/>

export const useCase = {
  "usecaseId": "criarNegocio",
  "title": "Criar negócio/proposta",
  "purpose": "Criar novo negócio no sistema",
  "actor": "corretor",
  "layer": "layer_3_usecases",
  "inputEntities": [],
  "outputEntities": [
    "dealEntity"
  ],
  "readsTables": [],
  "writesTables": [
    {
      "tableName": "deal",
      "ownership": "mdmOwned"
    },
    {
      "tableName": "deal_pipeline_metrics",
      "ownership": "moduleOwned"
    },
    {
      "tableName": "broker_activity_metrics",
      "ownership": "moduleOwned"
    }
  ],
  "rulesApplied": [
    "ruleDealStages",
    "ruleMetricRefresh"
  ],
  "entityRefs": [
    "dashboardMetricEntity",
    "dealEntity"
  ],
  "commands": [
    {
      "commandId": "criarNegocio",
      "input": [],
      "output": [
        {
          "name": "dealEntity",
          "type": "dealEntity"
        }
      ]
    }
  ],
  "pendingQuestions": [
    "Quais são os campos obrigatórios para criar um negócio (ex.: brokerId, clienteId, produtoId, valor, estágio inicial, origem)?",
    "Há algum identificador externo ou referência que deve ser informada na criação?",
    "O retorno deve incluir apenas o dealEntity completo ou algum campo específico (ex.: dealId)?"
  ]
} as const;

export default useCase;

export const pipeline = [
  {
    "id": "criarNegocio__layer_3_usecases",
    "type": "layer_3_usecases",
    "outputPath": "_102045_/l1/propertyFlowCrm/layer_3_usecases/criarNegocio.ts",
    "defPath": "_102045_/l1/propertyFlowCrm/layer_3_usecases/criarNegocio.defs.ts",
    "dependsFiles": [
      "_102045_/l1/propertyFlowCrm/layer_4_entities/dashboardMetricEntity.d.ts",
      "_102045_/l1/propertyFlowCrm/layer_4_entities/dealEntity.d.ts"
    ],
    "dependsOn": [],
    "skills": [
      "_102021_/l2/skills/layer_3.md"
    ],
    "rulesPath": "_102045_/l5/propertyFlowCrm/rules.defs.ts",
    "rulesApplied": [
      "ruleDealStages",
      "ruleMetricRefresh"
    ],
    "agent": "agentMaterializeGen"
  }
] as const;
