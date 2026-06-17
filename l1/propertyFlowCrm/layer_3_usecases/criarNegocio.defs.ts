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
