/// <mls fileReference="_102045_/l1/propertyFlowCrm/layer_3_usecases/listarImoveis.defs.ts" enhancement="_blank"/>

export const useCase = {
  "usecaseId": "listarImoveis",
  "title": "Listar imóveis",
  "purpose": "Listagem e busca de imóveis",
  "actor": "corretor",
  "layer": "layer_3_usecases",
  "inputEntities": [],
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
      "commandId": "listarImoveis",
      "input": [],
      "output": [
        {
          "name": "properties",
          "type": "propertyEntity[]"
        }
      ]
    }
  ]
} as const;

export default useCase;

export const pipeline = [
  {
    "id": "listarImoveis__layer_3_usecases",
    "type": "layer_3_usecases",
    "outputPath": "_102045_/l1/propertyFlowCrm/layer_3_usecases/listarImoveis.ts",
    "defPath": "_102045_/l1/propertyFlowCrm/layer_3_usecases/listarImoveis.defs.ts",
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
