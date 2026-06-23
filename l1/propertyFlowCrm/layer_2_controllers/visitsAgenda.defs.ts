/// <mls fileReference="_102045_/l1/propertyFlowCrm/layer_2_controllers/visitsAgenda.defs.ts" enhancement="_blank"/>

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
    "id": "visitsAgenda__layer_2_controllers",
    "type": "layer_2_controllers",
    "outputPath": "_102045_/l1/propertyFlowCrm/layer_2_controllers/visitsAgenda.ts",
    "defPath": "_102045_/l1/propertyFlowCrm/layer_2_controllers/visitsAgenda.defs.ts",
    "dependsFiles": [
      "_102045_/l1/propertyFlowCrm/layer_3_usecases/listarVisitas.d.ts",
      "_102045_/l1/propertyFlowCrm/layer_3_usecases/agendarVisita.d.ts",
      "_102045_/l1/propertyFlowCrm/layer_3_usecases/obterVisita.d.ts",
      "_102045_/l1/propertyFlowCrm/layer_3_usecases/atualizarStatusVisita.d.ts",
      "_102045_/l1/propertyFlowCrm/layer_3_usecases/listarSolicitacoesAgendamentoVisita.d.ts",
      "_102045_/l2/propertyFlowCrm/web/contracts/visitsAgenda.ts"
    ],
    "dependsOn": [],
    "skills": [
      "_102021_/l2/skills/layer_2.md"
    ],
    "afterSaveBackEnd": "_102021_/l2/agentMaterializeSolution/registerBackEnd.ts?registerController",
    "rulesPath": "_102045_/l5/propertyFlowCrm/rules.defs.ts",
    "rulesApplied": [
      "ruleVisitStatus"
    ],
    "agent": "agentMaterializeGen"
  }
] as const;
