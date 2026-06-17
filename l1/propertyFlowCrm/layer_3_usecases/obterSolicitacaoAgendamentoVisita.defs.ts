/// <mls fileReference="_102045_/l1/propertyFlowCrm/layer_3_usecases/obterSolicitacaoAgendamentoVisita.defs.ts" enhancement="_blank"/>

export const useCase = {
  "usecaseId": "obterSolicitacaoAgendamentoVisita",
  "title": "Obter solicitação de agendamento de visita",
  "purpose": "Recuperar detalhes de uma solicitação de agendamento",
  "actor": "corretor",
  "layer": "layer_3_usecases",
  "inputEntities": [
    "visitScheduleRequestEntity"
  ],
  "outputEntities": [
    "visitScheduleRequestEntity"
  ],
  "readsTables": [
    {
      "tableName": "visit_schedule_request",
      "ownership": "moduleOwned"
    }
  ],
  "writesTables": [],
  "rulesApplied": [
    "ruleVisitStatus"
  ],
  "entityRefs": [
    "visitScheduleRequestEntity"
  ],
  "commands": [
    {
      "commandId": "obterSolicitacaoAgendamentoVisita",
      "input": [
        {
          "name": "visitScheduleRequestId",
          "type": "string",
          "required": true
        }
      ],
      "output": [
        {
          "name": "visitScheduleRequest",
          "type": "visitScheduleRequestEntity"
        }
      ]
    }
  ]
} as const;

export default useCase;
