/// <mls fileReference="_102045_/l1/propertyFlowCrm/layer_3_usecases/listarSolicitacoesQualificacaoLead.defs.ts" enhancement="_blank"/>

export const useCase = {
  "usecaseId": "listarSolicitacoesQualificacaoLead",
  "title": "Listar solicitações de qualificação de lead",
  "purpose": "Listar histórico de solicitações de IA para qualificação",
  "actor": "corretor",
  "layer": "layer_3_usecases",
  "inputEntities": [],
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
      "commandId": "listarSolicitacoesQualificacaoLead",
      "input": [],
      "output": [
        {
          "name": "solicitacoes",
          "type": "leadQualificationRequestEntity[]"
        }
      ]
    }
  ]
} as const;

export default useCase;
