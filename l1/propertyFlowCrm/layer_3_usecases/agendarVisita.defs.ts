/// <mls fileReference="_102045_/l1/propertyFlowCrm/layer_3_usecases/agendarVisita.defs.ts" enhancement="_blank"/>

export const useCase = {
  "usecaseId": "agendarVisita",
  "title": "Agendar visita",
  "purpose": "Criar agendamento de visita e registrar solicitação",
  "actor": "corretor",
  "layer": "layer_3_usecases",
  "inputEntities": [],
  "outputEntities": [
    "visitEntity",
    "visitScheduleRequestEntity"
  ],
  "readsTables": [],
  "writesTables": [
    {
      "tableName": "visit",
      "ownership": "mdmOwned"
    },
    {
      "tableName": "visit_schedule_request",
      "ownership": "moduleOwned"
    },
    {
      "tableName": "broker_activity_metrics",
      "ownership": "moduleOwned"
    }
  ],
  "rulesApplied": [
    "ruleVisitStatus",
    "ruleMetricRefresh"
  ],
  "entityRefs": [
    "dashboardMetricEntity",
    "visitEntity",
    "visitScheduleRequestEntity"
  ],
  "commands": [
    {
      "commandId": "agendarVisita",
      "input": [],
      "output": [
        {
          "name": "visitId",
          "type": "visitId"
        },
        {
          "name": "visitScheduleRequestId",
          "type": "visitScheduleRequestId"
        }
      ]
    }
  ],
  "pendingQuestions": [
    "Quais campos de entrada são obrigatórios para agendar uma visita (ex.: corretorId, imóvelId, dataHora, clienteId)?"
  ]
} as const;

export default useCase;
