/// <mls fileReference="_102045_/l1/propertyFlowCrm/layer_3_usecases/obterLead.defs.ts" enhancement="_blank"/>

export const useCase = {
  "usecaseId": "obterLead",
  "title": "Obter lead",
  "purpose": "Recuperar detalhes de um lead",
  "actor": "corretor",
  "layer": "layer_3_usecases",
  "inputEntities": [
    "leadEntity"
  ],
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
      "commandId": "getLead",
      "input": [
        {
          "name": "leadId",
          "type": "string",
          "required": true
        }
      ],
      "output": [
        {
          "name": "lead",
          "type": "leadEntity"
        }
      ]
    }
  ]
} as const;

export default useCase;

export const pipeline = [
  {
    "id": "obterLead__layer_3_usecases",
    "type": "layer_3_usecases",
    "outputPath": "_102045_/l1/propertyFlowCrm/layer_3_usecases/obterLead.ts",
    "defPath": "_102045_/l1/propertyFlowCrm/layer_3_usecases/obterLead.defs.ts",
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
