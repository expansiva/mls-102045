/// <mls fileReference="_102045_/l1/propertyFlowCrm/layer_3_usecases/obterMudancaEtapaLead.defs.ts" enhancement="_blank"/>

export const useCase = {
  "usecaseId": "obterMudancaEtapaLead",
  "title": "Obter mudança de etapa do lead",
  "purpose": "Recuperar detalhes de uma mudança de etapa",
  "actor": "corretor",
  "layer": "layer_3_usecases",
  "inputEntities": [
    "leadStageChangeEntity"
  ],
  "outputEntities": [
    "leadStageChangeEntity"
  ],
  "readsTables": [
    {
      "tableName": "lead_stage_change",
      "ownership": "moduleOwned"
    }
  ],
  "writesTables": [],
  "rulesApplied": [
    "ruleLeadPipelineStages"
  ],
  "entityRefs": [
    "leadStageChangeEntity"
  ],
  "commands": [
    {
      "commandId": "obterMudancaEtapaLead",
      "input": [
        {
          "name": "leadStageChangeId",
          "type": "string",
          "required": true
        }
      ],
      "output": [
        {
          "name": "leadStageChange",
          "type": "leadStageChangeEntity"
        }
      ]
    }
  ]
} as const;

export default useCase;
