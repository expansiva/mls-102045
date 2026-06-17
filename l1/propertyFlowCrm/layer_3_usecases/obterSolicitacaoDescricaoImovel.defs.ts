/// <mls fileReference="_102045_/l1/propertyFlowCrm/layer_3_usecases/obterSolicitacaoDescricaoImovel.defs.ts" enhancement="_blank"/>

export const useCase = {
  "usecaseId": "obterSolicitacaoDescricaoImovel",
  "title": "Obter solicitação de descrição de imóvel",
  "purpose": "Recuperar detalhes de uma solicitação de descrição",
  "actor": "corretor",
  "layer": "layer_3_usecases",
  "inputEntities": [
    "propertyDescriptionRequestEntity"
  ],
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
      "commandId": "obterSolicitacaoDescricaoImovel",
      "input": [
        {
          "name": "propertyDescriptionRequestId",
          "type": "string",
          "required": true
        }
      ],
      "output": [
        {
          "name": "propertyDescriptionRequest",
          "type": "propertyDescriptionRequestEntity"
        }
      ]
    }
  ]
} as const;

export default useCase;
