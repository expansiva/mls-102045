/// <mls fileReference="_102045_/l1/propertyFlowCrm/layer_3_usecases/listarNegocios.defs.ts" enhancement="_blank"/>

export const useCase = {
  "usecaseId": "listarNegocios",
  "title": "Listar negócios",
  "purpose": "Listagem de negócios e propostas",
  "actor": "corretor",
  "layer": "layer_3_usecases",
  "inputEntities": [],
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
      "commandId": "listarNegocios",
      "input": [],
      "output": [
        {
          "name": "negocios",
          "type": "dealEntity[]"
        }
      ]
    }
  ]
} as const;

export default useCase;

export const pipeline = [
  {
    "id": "listarNegocios__layer_3_usecases",
    "type": "layer_3_usecases",
    "outputPath": "_102045_/l1/propertyFlowCrm/layer_3_usecases/listarNegocios.ts",
    "defPath": "_102045_/l1/propertyFlowCrm/layer_3_usecases/listarNegocios.defs.ts",
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
