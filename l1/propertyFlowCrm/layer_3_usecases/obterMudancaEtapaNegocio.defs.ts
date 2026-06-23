/// <mls fileReference="_102045_/l1/propertyFlowCrm/layer_3_usecases/obterMudancaEtapaNegocio.defs.ts" enhancement="_blank"/>

export const useCase = {
  "usecaseId": "obterMudancaEtapaNegocio",
  "title": "Obter mudança de etapa do negócio",
  "purpose": "Recuperar detalhes de uma mudança de etapa",
  "actor": "corretor",
  "layer": "layer_3_usecases",
  "inputEntities": [
    "dealStageChangeEntity"
  ],
  "outputEntities": [
    "dealStageChangeEntity"
  ],
  "readsTables": [
    {
      "tableName": "deal_stage_change",
      "ownership": "moduleOwned"
    }
  ],
  "writesTables": [],
  "rulesApplied": [
    "ruleDealStages"
  ],
  "entityRefs": [
    "dealStageChangeEntity"
  ],
  "commands": [
    {
      "commandId": "obterMudancaEtapaNegocio",
      "input": [
        {
          "name": "dealStageChangeId",
          "type": "string",
          "required": true
        }
      ],
      "output": [
        {
          "name": "dealStageChange",
          "type": "dealStageChangeEntity"
        }
      ]
    }
  ]
} as const;

export default useCase;

export const pipeline = [
  {
    "id": "obterMudancaEtapaNegocio__layer_3_usecases",
    "type": "layer_3_usecases",
    "outputPath": "_102045_/l1/propertyFlowCrm/layer_3_usecases/obterMudancaEtapaNegocio.ts",
    "defPath": "_102045_/l1/propertyFlowCrm/layer_3_usecases/obterMudancaEtapaNegocio.defs.ts",
    "dependsFiles": [
      "_102045_/l1/propertyFlowCrm/layer_4_entities/dealStageChangeEntity.d.ts"
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
