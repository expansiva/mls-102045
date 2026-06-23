/// <mls fileReference="_102045_/l1/propertyFlowCrm/layer_3_usecases/obterNegocio.defs.ts" enhancement="_blank"/>

export const useCase = {
  "usecaseId": "obterNegocio",
  "title": "Obter negócio",
  "purpose": "Recuperar detalhes de um negócio",
  "actor": "corretor",
  "layer": "layer_3_usecases",
  "inputEntities": [
    "dealEntity"
  ],
  "outputEntities": [
    "dealEntity"
  ],
  "readsTables": [
    {
      "tableName": "deal",
      "ownership": "mdmOwned"
    }
  ],
  "writesTables": [],
  "rulesApplied": [
    "ruleDealStages"
  ],
  "entityRefs": [
    "dealEntity"
  ],
  "commands": [
    {
      "commandId": "obterNegocio",
      "input": [
        {
          "name": "dealId",
          "type": "string",
          "required": true
        }
      ],
      "output": [
        {
          "name": "deal",
          "type": "dealEntity"
        }
      ]
    }
  ]
} as const;

export default useCase;

export const pipeline = [
  {
    "id": "obterNegocio__layer_3_usecases",
    "type": "layer_3_usecases",
    "outputPath": "_102045_/l1/propertyFlowCrm/layer_3_usecases/obterNegocio.ts",
    "defPath": "_102045_/l1/propertyFlowCrm/layer_3_usecases/obterNegocio.defs.ts",
    "dependsFiles": [
      "_102045_/l1/propertyFlowCrm/layer_4_entities/dealEntity.d.ts"
    ],
    "dependsOn": [],
    "skills": [
      "_102021_/l2/skills/layer_3.md"
    ],
    "rulesPath": "_102045_/l5/propertyFlowCrm/rules.defs.ts",
    "rulesApplied": [
      "ruleDealStages"
    ],
    "agent": "agentMaterializeGen"
  }
] as const;
