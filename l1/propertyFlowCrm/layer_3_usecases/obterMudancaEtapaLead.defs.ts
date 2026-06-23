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

export const pipeline = [
  {
    "id": "obterMudancaEtapaLead__layer_3_usecases",
    "type": "layer_3_usecases",
    "outputPath": "_102045_/l1/propertyFlowCrm/layer_3_usecases/obterMudancaEtapaLead.ts",
    "defPath": "_102045_/l1/propertyFlowCrm/layer_3_usecases/obterMudancaEtapaLead.defs.ts",
    "dependsFiles": [
      "_102045_/l1/propertyFlowCrm/layer_4_entities/leadStageChangeEntity.d.ts"
    ],
    "dependsOn": [],
    "skills": [
      "_102021_/l2/skills/layer_3.md"
    ],
    "rulesPath": "_102045_/l5/propertyFlowCrm/rules.defs.ts",
    "rulesApplied": [
      "ruleLeadPipelineStages"
    ],
    "agent": "agentMaterializeGen"
  }
] as const;
