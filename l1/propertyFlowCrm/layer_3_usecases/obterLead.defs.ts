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
