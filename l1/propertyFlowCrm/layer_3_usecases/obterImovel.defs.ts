/// <mls fileReference="_102045_/l1/propertyFlowCrm/layer_3_usecases/obterImovel.defs.ts" enhancement="_blank"/>

export const useCase = {
  "usecaseId": "obterImovel",
  "title": "Obter imóvel",
  "purpose": "Recuperar detalhes de um imóvel",
  "actor": "corretor",
  "layer": "layer_3_usecases",
  "inputEntities": [
    "propertyEntity"
  ],
  "outputEntities": [
    "propertyEntity"
  ],
  "readsTables": [
    {
      "tableName": "property",
      "ownership": "mdmOwned"
    }
  ],
  "writesTables": [],
  "rulesApplied": [
    "rulePropertyStatusLifecycle"
  ],
  "entityRefs": [
    "propertyEntity"
  ],
  "commands": [
    {
      "commandId": "obterImovel",
      "input": [
        {
          "name": "propertyId",
          "type": "string",
          "required": true
        }
      ],
      "output": [
        {
          "name": "property",
          "type": "propertyEntity"
        }
      ]
    }
  ]
} as const;

export default useCase;

export const pipeline = [
  {
    "id": "obterImovel__layer_3_usecases",
    "type": "layer_3_usecases",
    "outputPath": "_102045_/l1/propertyFlowCrm/layer_3_usecases/obterImovel.ts",
    "defPath": "_102045_/l1/propertyFlowCrm/layer_3_usecases/obterImovel.defs.ts",
    "dependsFiles": [
      "_102045_/l1/propertyFlowCrm/layer_4_entities/propertyEntity.d.ts"
    ],
    "dependsOn": [],
    "skills": [
      "_102021_/l2/skills/layer_3.md"
    ],
    "rulesPath": "_102045_/l5/propertyFlowCrm/rules.defs.ts",
    "rulesApplied": [
      "rulePropertyStatusLifecycle"
    ],
    "agent": "agentMaterializeGen"
  }
] as const;
