/// <mls fileReference="_102045_/l1/propertyFlowCrm/layer_3_usecases/listarMudancasEtapaLead.defs.ts" enhancement="_blank"/>

export const useCase = {
  "usecaseId": "listarMudancasEtapaLead",
  "title": "Listar mudanças de etapa do lead",
  "purpose": "Listar histórico de mudanças no pipeline de leads",
  "actor": "corretor",
  "layer": "layer_3_usecases",
  "inputEntities": [],
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
      "commandId": "listarMudancasEtapaLead",
      "input": [],
      "output": [
        {
          "name": "leadStageChanges",
          "type": "leadStageChangeEntity[]"
        }
      ]
    }
  ]
} as const;

export default useCase;
