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

export const pipeline = [
  {
    "id": "listarMudancasEtapaLead__layer_3_usecases",
    "type": "layer_3_usecases",
    "outputPath": "_102045_/l1/propertyFlowCrm/layer_3_usecases/listarMudancasEtapaLead.ts",
    "defPath": "_102045_/l1/propertyFlowCrm/layer_3_usecases/listarMudancasEtapaLead.defs.ts",
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
