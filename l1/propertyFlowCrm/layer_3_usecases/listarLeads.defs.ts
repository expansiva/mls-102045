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
