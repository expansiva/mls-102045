/// <mls fileReference="_102045_/l1/propertyFlowCrm/layer_3_usecases/obterSolicitacaoDescricaoImovel.defs.ts" enhancement="_blank"/>

export const useCase = {
  "usecaseId": "obterSolicitacaoDescricaoImovel",
  "title": "Obter solicitação de descrição de imóvel",
  "purpose": "Recuperar detalhes de uma solicitação de descrição",
  "actor": "corretor",
  "layer": "layer_3_usecases",
  "inputEntities": [
    "propertyDescriptionRequestEntity"
  ],
  "outputEntities": [
    "propertyDescriptionRequestEntity"
  ],
  "readsTables": [
    {
      "tableName": "property_description_request",
      "ownership": "moduleOwned"
    }
  ],
  "writesTables": [],
  "rulesApplied": [
    "ruleAiHumanReview"
  ],
  "entityRefs": [
    "propertyDescriptionRequestEntity"
  ],
  "commands": [
    {
      "commandId": "obterSolicitacaoDescricaoImovel",
      "input": [
        {
          "name": "propertyDescriptionRequestId",
          "type": "string",
          "required": true
        }
      ],
      "output": [
        {
          "name": "propertyDescriptionRequest",
          "type": "propertyDescriptionRequestEntity"
        }
      ]
    }
  ]
} as const;

export default useCase;

export const pipeline = [
  {
    "id": "obterSolicitacaoDescricaoImovel__layer_3_usecases",
    "type": "layer_3_usecases",
    "outputPath": "_102045_/l1/propertyFlowCrm/layer_3_usecases/obterSolicitacaoDescricaoImovel.ts",
    "defPath": "_102045_/l1/propertyFlowCrm/layer_3_usecases/obterSolicitacaoDescricaoImovel.defs.ts",
    "dependsFiles": [
      "_102045_/l1/propertyFlowCrm/layer_4_entities/propertyDescriptionRequestEntity.d.ts"
    ],
    "dependsOn": [],
    "skills": [
      "_102021_/l2/skills/layer_3.md"
    ],
    "rulesPath": "_102045_/l5/propertyFlowCrm/rules.defs.ts",
    "rulesApplied": [
      "ruleAiHumanReview"
    ],
    "agent": "agentMaterializeGen"
  }
] as const;
