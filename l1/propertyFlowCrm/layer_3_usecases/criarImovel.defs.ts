/// <mls fileReference="_102045_/l1/propertyFlowCrm/layer_3_usecases/criarImovel.defs.ts" enhancement="_blank"/>

export const useCase = {
  "usecaseId": "criarImovel",
  "title": "Cadastrar imóvel",
  "purpose": "Criar novo imóvel no sistema",
  "actor": "corretor",
  "layer": "layer_3_usecases",
  "inputEntities": [],
  "outputEntities": [
    "propertyEntity"
  ],
  "readsTables": [],
  "writesTables": [
    {
      "tableName": "property",
      "ownership": "mdmOwned"
    },
    {
      "tableName": "property_status_metrics",
      "ownership": "moduleOwned"
    },
    {
      "tableName": "broker_activity_metrics",
      "ownership": "moduleOwned"
    }
  ],
  "rulesApplied": [
    "rulePropertyStatusLifecycle",
    "ruleMetricRefresh"
  ],
  "entityRefs": [
    "dashboardMetricEntity",
    "propertyEntity"
  ],
  "commands": [
    {
      "commandId": "criarImovel",
      "input": [],
      "output": [
        {
          "name": "property",
          "type": "propertyEntity"
        }
      ]
    }
  ],
  "pendingQuestions": [
    "Quais campos de entrada são necessários para cadastrar o imóvel (ex.: endereço, tipo, preço, área, etc.)?",
    "O comando deve retornar apenas o identificador do imóvel ou o objeto completo de propertyEntity? Se apenas ID, qual o nome do campo?"
  ]
} as const;

export default useCase;

export const pipeline = [
  {
    "id": "criarImovel__layer_3_usecases",
    "type": "layer_3_usecases",
    "outputPath": "_102045_/l1/propertyFlowCrm/layer_3_usecases/criarImovel.ts",
    "defPath": "_102045_/l1/propertyFlowCrm/layer_3_usecases/criarImovel.defs.ts",
    "dependsFiles": [
      "_102045_/l1/propertyFlowCrm/layer_4_entities/dashboardMetricEntity.d.ts",
      "_102045_/l1/propertyFlowCrm/layer_4_entities/propertyEntity.d.ts"
    ],
    "dependsOn": [],
    "skills": [
      "_102021_/l2/skills/layer_3.md"
    ],
    "rulesPath": "_102045_/l5/propertyFlowCrm/rules.defs.ts",
    "rulesApplied": [
      "rulePropertyStatusLifecycle",
      "ruleMetricRefresh"
    ],
    "agent": "agentMaterializeGen"
  }
] as const;
