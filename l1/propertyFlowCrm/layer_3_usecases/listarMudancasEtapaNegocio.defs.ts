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
