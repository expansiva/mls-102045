/// <mls fileReference="_102045_/l1/propertyFlowCrm/layer_3_usecases/listarLeads.defs.ts" enhancement="_blank"/>

export const useCase = {
  "usecaseId": "listarLeads",
  "title": "Listar leads",
  "purpose": "Listagem de leads e clientes",
  "actor": "corretor",
  "layer": "layer_3_usecases",
  "inputEntities": [],
  "outputEntities": [
    "leadEntity"
  ],
  "readsTables": [
    {
      "tableName": "lead",
      "ownership": "mdmOwned"
    }
  ],
  "writesTables": [],
  "rulesApplied": [
    "ruleLeadPipelineStages"
  ],
  "entityRefs": [
    "leadEntity"
  ],
  "commands": [
    {
      "commandId": "listarLeads",
      "input": [],
      "output": [
        {
          "name": "leads",
          "type": "leadEntity[]"
        }
      ]
    }
  ]
} as const;

export default useCase;

export const pipeline = [
  {
    "id": "listarLeads__layer_3_usecases",
    "type": "layer_3_usecases",
    "outputPath": "_102045_/l1/propertyFlowCrm/layer_3_usecases/listarLeads.ts",
    "defPath": "_102045_/l1/propertyFlowCrm/layer_3_usecases/listarLeads.defs.ts",
    "dependsFiles": [
      "_102045_/l1/propertyFlowCrm/layer_4_entities/leadEntity.d.ts"
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
