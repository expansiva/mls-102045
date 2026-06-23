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

export const pipeline = [
  {
    "id": "listarSolicitacoesAgendamentoVisita__layer_3_usecases",
    "type": "layer_3_usecases",
    "outputPath": "_102045_/l1/propertyFlowCrm/layer_3_usecases/listarSolicitacoesAgendamentoVisita.ts",
    "defPath": "_102045_/l1/propertyFlowCrm/layer_3_usecases/listarSolicitacoesAgendamentoVisita.defs.ts",
    "dependsFiles": [
      "_102045_/l1/propertyFlowCrm/layer_4_entities/visitScheduleRequestEntity.d.ts"
    ],
    "dependsOn": [],
    "skills": [
      "_102021_/l2/skills/layer_3.md"
    ],
    "rulesPath": "_102045_/l5/propertyFlowCrm/rules.defs.ts",
    "rulesApplied": [
      "ruleVisitStatus"
    ],
    "agent": "agentMaterializeGen"
  }
] as const;
