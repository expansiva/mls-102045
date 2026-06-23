/// <mls fileReference="_102045_/l1/propertyFlowCrm/layer_3_usecases/solicitarDescricaoImovel.defs.ts" enhancement="_blank"/>

export const useCase = {
  "usecaseId": "solicitarDescricaoImovel",
  "title": "Solicitar descrição do imóvel via IA",
  "purpose": "Criar solicitação de geração de descrição para um imóvel",
  "actor": "corretor",
  "layer": "layer_3_usecases",
  "inputEntities": [
    "propertyEntity"
  ],
  "outputEntities": [
    "propertyDescriptionRequestEntity"
  ],
  "readsTables": [
    {
      "tableName": "property",
      "ownership": "mdmOwned"
    }
  ],
  "writesTables": [
    {
      "tableName": "property_description_request",
      "ownership": "moduleOwned"
    },
    {
      "tableName": "broker_activity_metrics",
      "ownership": "moduleOwned"
    }
  ],
  "rulesApplied": [
    "ruleAiHumanReview",
    "ruleMetricRefresh"
  ],
  "entityRefs": [
    "dashboardMetricEntity",
    "propertyDescriptionRequestEntity",
    "propertyEntity"
  ],
  "commands": [
    {
      "commandId": "solicitarDescricaoImovel",
      "input": [
        {
          "name": "propertyId",
          "type": "string",
          "required": true
        },
        {
          "name": "brokerId",
          "type": "string",
          "required": true
        }
      ],
      "output": [
        {
          "name": "propertyDescriptionRequestId",
          "type": "string"
        },
        {
          "name": "status",
          "type": "string"
        }
      ]
    }
  ],
  "pendingQuestions": [
    "Quais são os campos mínimos de entrada para identificar o imóvel e o corretor? Confirma propertyId e brokerId ou há outros obrigatórios?"
  ]
} as const;

export default useCase;

export const pipeline = [
  {
    "id": "solicitarDescricaoImovel__layer_3_usecases",
    "type": "layer_3_usecases",
    "outputPath": "_102045_/l1/propertyFlowCrm/layer_3_usecases/solicitarDescricaoImovel.ts",
    "defPath": "_102045_/l1/propertyFlowCrm/layer_3_usecases/solicitarDescricaoImovel.defs.ts",
    "dependsFiles": [
      "_102045_/l1/propertyFlowCrm/layer_4_entities/dashboardMetricEntity.d.ts",
      "_102045_/l1/propertyFlowCrm/layer_4_entities/propertyDescriptionRequestEntity.d.ts",
      "_102045_/l1/propertyFlowCrm/layer_4_entities/propertyEntity.d.ts"
    ],
    "dependsOn": [],
    "skills": [
      "_102021_/l2/skills/layer_3.md"
    ],
    "rulesPath": "_102045_/l5/propertyFlowCrm/rules.defs.ts",
    "rulesApplied": [
      "ruleAiHumanReview",
      "ruleMetricRefresh"
    ],
    "agent": "agentMaterializeGen"
  }
] as const;
