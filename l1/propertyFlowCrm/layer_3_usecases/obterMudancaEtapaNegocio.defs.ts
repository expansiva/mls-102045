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
