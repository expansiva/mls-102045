/// <mls fileReference="_102045_/l1/propertyFlowCrm/layer_3_usecases/criarLead.defs.ts" enhancement="_blank"/>

export const useCase = {
  "usecaseId": "criarLead",
  "title": "Cadastrar lead",
  "purpose": "Criar novo lead no sistema",
  "actor": "corretor",
  "layer": "layer_3_usecases",
  "inputEntities": [],
  "outputEntities": [
    "leadEntity"
  ],
  "readsTables": [],
  "writesTables": [
    {
      "tableName": "lead",
      "ownership": "mdmOwned"
    },
    {
      "tableName": "lead_pipeline_metrics",
      "ownership": "moduleOwned"
    },
    {
      "tableName": "broker_activity_metrics",
      "ownership": "moduleOwned"
    }
  ],
  "rulesApplied": [
    "ruleLeadPipelineStages",
    "ruleMetricRefresh"
  ],
  "entityRefs": [
    "dashboardMetricEntity",
    "leadEntity"
  ],
  "commands": [
    {
      "commandId": "createLead",
      "input": [],
      "output": [
        {
          "name": "lead",
          "type": "leadEntity"
        }
      ]
    }
  ],
  "pendingQuestions": [
    "Quais campos de entrada são obrigatórios para cadastrar um lead (ex.: nome, contato, origem, corretorId)?",
    "O comando deve retornar somente o lead criado ou também métricas atualizadas (lead_pipeline_metrics, broker_activity_metrics)? Se retornar, quais campos?"
  ]
} as const;

export default useCase;

export const pipeline = [
  {
    "id": "criarLead__layer_3_usecases",
    "type": "layer_3_usecases",
    "outputPath": "_102045_/l1/propertyFlowCrm/layer_3_usecases/criarLead.ts",
    "defPath": "_102045_/l1/propertyFlowCrm/layer_3_usecases/criarLead.defs.ts",
    "dependsFiles": [
      "_102045_/l1/propertyFlowCrm/layer_4_entities/dashboardMetricEntity.d.ts",
      "_102045_/l1/propertyFlowCrm/layer_4_entities/leadEntity.d.ts"
    ],
    "dependsOn": [],
    "skills": [
      "_102021_/l2/skills/layer_3.md"
    ],
    "rulesPath": "_102045_/l5/propertyFlowCrm/rules.defs.ts",
    "rulesApplied": [
      "ruleLeadPipelineStages",
      "ruleMetricRefresh"
    ],
    "agent": "agentMaterializeGen"
  }
] as const;
