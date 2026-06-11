/// <mls fileReference="_102045_/l1/propertyFlowCrm/layer_3_usecases/classificarLeadIa.defs.ts" enhancement="_blank"/>

export const useCase = {
  "usecaseId": "classificarLeadIa",
  "title": "Classificar lead com IA",
  "purpose": "Qualificar e classificar um lead automaticamente via IA.",
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
  "writesTables": [
    {
      "tableName": "lead",
      "ownership": "mdmOwned"
    }
  ],
  "rulesApplied": [],
  "entityRefs": [
    "leadEntity"
  ]
} as const;

export default useCase;
