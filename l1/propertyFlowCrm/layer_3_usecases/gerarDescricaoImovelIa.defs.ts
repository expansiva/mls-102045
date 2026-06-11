/// <mls fileReference="_102045_/l1/propertyFlowCrm/layer_3_usecases/gerarDescricaoImovelIa.defs.ts" enhancement="_blank"/>

export const useCase = {
  "usecaseId": "gerarDescricaoImovelIa",
  "title": "Gerar descrição de imóvel com IA",
  "purpose": "Gerar e persistir descrição automatizada de imóvel via LLM.",
  "actor": "corretor",
  "layer": "layer_3_usecases",
  "inputEntities": [
    "imovelEntity"
  ],
  "outputEntities": [
    "imovelEntity"
  ],
  "readsTables": [
    {
      "tableName": "imovel",
      "ownership": "mdmOwned"
    }
  ],
  "writesTables": [
    {
      "tableName": "imovel",
      "ownership": "mdmOwned"
    }
  ],
  "rulesApplied": [],
  "entityRefs": [
    "imovelEntity"
  ]
} as const;

export default useCase;
