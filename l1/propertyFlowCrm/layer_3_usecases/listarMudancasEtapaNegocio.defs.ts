/// <mls fileReference="_102045_/l1/propertyFlowCrm/layer_3_usecases/listarMudancasEtapaNegocio.defs.ts" enhancement="_blank"/>

export const useCase = {
  "usecaseId": "listarMudancasEtapaNegocio",
  "title": "Listar mudanças de etapa do negócio",
  "purpose": "Listar histórico de mudanças nos negócios",
  "actor": "corretor",
  "layer": "layer_3_usecases",
  "inputEntities": [],
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
      "commandId": "listarMudancasEtapaNegocio",
      "input": [],
      "output": [
        {
          "name": "mudancasEtapaNegocio",
          "type": "dealStageChangeEntity[]"
        }
      ]
    }
  ]
} as const;

export default useCase;

export const pipeline = [
  {
    "id": "listarMudancasEtapaNegocio__layer_3_usecases",
    "type": "layer_3_usecases",
    "outputPath": "_102045_/l1/propertyFlowCrm/layer_3_usecases/listarMudancasEtapaNegocio.ts",
    "defPath": "_102045_/l1/propertyFlowCrm/layer_3_usecases/listarMudancasEtapaNegocio.defs.ts",
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
