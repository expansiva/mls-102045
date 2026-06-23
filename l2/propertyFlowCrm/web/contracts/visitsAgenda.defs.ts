/// <mls fileReference="_102045_/l2/propertyFlowCrm/web/contracts/visitsAgenda.defs.ts" enhancement="_blank"/>

export const definition = [
  {
    "commandName": "listarVisitas",
    "purpose": "Carregar agenda e filtros de visitas.",
    "kind": "query",
    "input": [
      {
        "name": "dataInicio",
        "type": "datetime",
        "required": true
      },
      {
        "name": "dataFim",
        "type": "datetime",
        "required": true
      },
      {
        "name": "propertyId",
        "type": "PropertyId",
        "required": false
      },
      {
        "name": "leadId",
        "type": "LeadId",
        "required": false
      },
      {
        "name": "status",
        "type": "string",
        "required": false
      }
    ],
    "output": [
      {
        "name": "visitId",
        "type": "VisitId"
      },
      {
        "name": "status",
        "type": "string"
      },
      {
        "name": "scheduledAt",
        "type": "datetime"
      },
      {
        "name": "propertyId",
        "type": "PropertyId"
      },
      {
        "name": "leadId",
        "type": "LeadId"
      }
    ],
    "readsEntities": [
      "Visit"
    ],
    "writesEntities": [],
    "readsTables": [],
    "writesTables": [],
    "usecaseRefs": [
      "listarVisitas"
    ],
    "layerContract": {
      "controllerLayer": "layer_2_controllers",
      "mustCallLayer": "layer_3_usecases",
      "directTableAccessForbidden": true
    },
    "rulesApplied": [
      "ruleVisitStatus"
    ]
  },
  {
    "commandName": "agendarVisita",
    "purpose": "Criar novo agendamento.",
    "kind": "command",
    "input": [
      {
        "name": "propertyId",
        "type": "PropertyId",
        "required": true
      },
      {
        "name": "leadId",
        "type": "LeadId",
        "required": true
      },
      {
        "name": "requestedStartAt",
        "type": "datetime",
        "required": true
      },
      {
        "name": "requestedEndAt",
        "type": "datetime",
        "required": false
      },
      {
        "name": "notes",
        "type": "string",
        "required": false
      }
    ],
    "output": [
      {
        "name": "visitId",
        "type": "VisitId"
      },
      {
        "name": "status",
        "type": "string"
      }
    ],
    "readsEntities": [
      "Property",
      "Lead"
    ],
    "writesEntities": [
      "Visit",
      "VisitScheduleRequest"
    ],
    "readsTables": [],
    "writesTables": [
      "visit_schedule_request",
      "broker_activity_metrics"
    ],
    "usecaseRefs": [
      "agendarVisita"
    ],
    "layerContract": {
      "controllerLayer": "layer_2_controllers",
      "mustCallLayer": "layer_3_usecases",
      "directTableAccessForbidden": true
    },
    "rulesApplied": [
      "ruleVisitStatus"
    ]
  },
  {
    "commandName": "obterVisita",
    "purpose": "Carregar detalhes de uma visita selecionada.",
    "kind": "query",
    "input": [
      {
        "name": "visitId",
        "type": "VisitId",
        "required": true
      }
    ],
    "output": [
      {
        "name": "visitId",
        "type": "VisitId"
      },
      {
        "name": "status",
        "type": "string"
      },
      {
        "name": "scheduledAt",
        "type": "datetime"
      },
      {
        "name": "propertyId",
        "type": "PropertyId"
      },
      {
        "name": "leadId",
        "type": "LeadId"
      }
    ],
    "readsEntities": [
      "Visit"
    ],
    "writesEntities": [],
    "readsTables": [],
    "writesTables": [],
    "usecaseRefs": [
      "obterVisita"
    ],
    "layerContract": {
      "controllerLayer": "layer_2_controllers",
      "mustCallLayer": "layer_3_usecases",
      "directTableAccessForbidden": true
    },
    "rulesApplied": [
      "ruleVisitStatus"
    ]
  },
  {
    "commandName": "atualizarStatusVisita",
    "purpose": "Atualizar status ou reagendar visita.",
    "kind": "command",
    "input": [
      {
        "name": "visitId",
        "type": "VisitId",
        "required": true
      },
      {
        "name": "novoStatus",
        "type": "string",
        "required": true
      },
      {
        "name": "requestedStartAt",
        "type": "datetime",
        "required": false
      },
      {
        "name": "requestedEndAt",
        "type": "datetime",
        "required": false
      }
    ],
    "output": [
      {
        "name": "visitId",
        "type": "VisitId"
      },
      {
        "name": "status",
        "type": "string"
      },
      {
        "name": "scheduledAt",
        "type": "datetime"
      }
    ],
    "readsEntities": [
      "Visit"
    ],
    "writesEntities": [
      "Visit",
      "VisitScheduleRequest"
    ],
    "readsTables": [],
    "writesTables": [
      "broker_activity_metrics"
    ],
    "usecaseRefs": [
      "atualizarStatusVisita"
    ],
    "layerContract": {
      "controllerLayer": "layer_2_controllers",
      "mustCallLayer": "layer_3_usecases",
      "directTableAccessForbidden": true
    },
    "rulesApplied": [
      "ruleVisitStatus"
    ]
  },
  {
    "commandName": "listarSolicitacoesAgendamentoVisita",
    "purpose": "Listar histórico de solicitações de agendamento.",
    "kind": "query",
    "input": [
      {
        "name": "dataInicio",
        "type": "datetime",
        "required": false
      },
      {
        "name": "dataFim",
        "type": "datetime",
        "required": false
      },
      {
        "name": "status",
        "type": "string",
        "required": false
      },
      {
        "name": "propertyId",
        "type": "PropertyId",
        "required": false
      },
      {
        "name": "leadId",
        "type": "LeadId",
        "required": false
      }
    ],
    "output": [
      {
        "name": "visitScheduleRequestId",
        "type": "VisitScheduleRequestId"
      },
      {
        "name": "status",
        "type": "string"
      },
      {
        "name": "requestedStartAt",
        "type": "datetime"
      },
      {
        "name": "propertyId",
        "type": "PropertyId"
      },
      {
        "name": "leadId",
        "type": "LeadId"
      },
      {
        "name": "visitId",
        "type": "VisitId"
      }
    ],
    "readsEntities": [
      "VisitScheduleRequest"
    ],
    "writesEntities": [],
    "readsTables": [
      "visit_schedule_request"
    ],
    "writesTables": [],
    "usecaseRefs": [
      "listarSolicitacoesAgendamentoVisita"
    ],
    "layerContract": {
      "controllerLayer": "layer_2_controllers",
      "mustCallLayer": "layer_3_usecases",
      "directTableAccessForbidden": true
    },
    "rulesApplied": [
      "ruleVisitStatus"
    ]
  }
];

export const pipeline = [
  {
    "id": "visitsAgenda__l2_contract",
    "type": "l2_contract",
    "outputPath": "_102045_/l2/propertyFlowCrm/web/contracts/visitsAgenda.ts",
    "defPath": "_102045_/l2/propertyFlowCrm/web/contracts/visitsAgenda.defs.ts",
    "dependsFiles": [],
    "dependsOn": [],
    "skills": [
      "_102020_/l2/agentMaterializeSolution/skills/genContract.ts"
    ],
    "agent": "agentMaterializeGen"
  }
] as const;
