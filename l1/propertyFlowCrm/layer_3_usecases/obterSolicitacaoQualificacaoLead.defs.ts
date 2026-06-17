/// <mls fileReference="_102045_/l1/propertyFlowCrm/layer_3_usecases/obterSolicitacaoQualificacaoLead.defs.ts" enhancement="_blank"/>

export const useCase = {
  "usecaseId": "obterSolicitacaoQualificacaoLead",
  "title": "Obter solicitação de qualificação de lead",
  "purpose": "Recuperar detalhes de uma solicitação de qualificação",
  "actor": "corretor",
  "layer": "layer_3_usecases",
  "inputEntities": [
    "leadQualificationRequestEntity"
  ],
  "outputEntities": [
    "leadQualificationRequestEntity"
  ],
  "readsTables": [
    {
      "tableName": "lead_qualification_request",
      "ownership": "moduleOwned"
    }
  ],
  "writesTables": [],
  "rulesApplied": [
    "ruleAiHumanReview"
  ],
  "entityRefs": [
    "leadQualificationRequestEntity"
  ],
  "commands": [
    {
      "commandId": "obterSolicitacaoQualificacaoLead",
      "input": [
        {
          "name": "leadQualificationRequestId",
          "type": "string",
          "required": true
        }
      ],
      "output": [
        {
          "name": "leadQualificationRequest",
          "type": "leadQualificationRequestEntity"
        }
      ]
    }
  ]
} as const;

export default useCase;
