/// <mls fileReference="_102045_/l1/propertyFlowCrm/layer_3_usecases/listarSolicitacoesDescricaoImovel.defs.ts" enhancement="_blank"/>

export const useCase = {
  "usecaseId": "listarSolicitacoesDescricaoImovel",
  "title": "Listar solicitações de descrição de imóvel",
  "purpose": "Listar histórico de solicitações de IA para descrição",
  "actor": "corretor",
  "layer": "layer_3_usecases",
  "inputEntities": [],
  "outputEntities": [
    "propertyDescriptionRequestEntity"
  ],
  "readsTables": [
    {
      "tableName": "property_description_request",
      "ownership": "moduleOwned"
    }
  ],
  "writesTables": [],
  "rulesApplied": [
    "ruleAiHumanReview"
  ],
  "entityRefs": [
    "propertyDescriptionRequestEntity"
  ],
  "commands": [
    {
      "commandId": "listarSolicitacoesDescricaoImovel",
      "input": [],
      "output": [
        {
          "name": "solicitacoes",
          "type": "propertyDescriptionRequestEntity[]"
        }
      ]
    }
  ]
} as const;

export default useCase;
