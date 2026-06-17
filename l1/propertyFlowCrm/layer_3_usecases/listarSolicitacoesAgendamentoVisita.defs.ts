/// <mls fileReference="_102045_/l1/propertyFlowCrm/layer_3_usecases/listarSolicitacoesAgendamentoVisita.defs.ts" enhancement="_blank"/>

export const useCase = {
  "usecaseId": "listarSolicitacoesAgendamentoVisita",
  "title": "Listar solicitações de agendamento de visita",
  "purpose": "Listar histórico de solicitações de agendamento",
  "actor": "corretor",
  "layer": "layer_3_usecases",
  "inputEntities": [],
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
      "commandId": "listarSolicitacoesAgendamentoVisita",
      "input": [],
      "output": [
        {
          "name": "solicitacoesAgendamentoVisita",
          "type": "visitScheduleRequestEntity[]"
        }
      ]
    }
  ]
} as const;

export default useCase;
