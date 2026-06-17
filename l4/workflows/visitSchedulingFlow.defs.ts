/// <mls fileReference="_102045_/l4/workflows/visitSchedulingFlow.defs.ts" enhancement="_blank"/>

export const visitSchedulingFlowDef = {
  "schemaVersion": "2026-06-06",
  "artifactType": "workflow",
  "artifactId": "visitSchedulingFlow",
  "moduleName": "propertyFlowCrm",
  "status": "draft",
  "source": {
    "agentName": "agentPlanWorkflowDefinition",
    "stepId": 29,
    "planId": "plan-validate-solution-coverage"
  },
  "data": {
    "workflowDefinition": {
      "workflowId": "visitSchedulingFlow",
      "title": "Agendamento de Visita",
      "purpose": "Controlar o ciclo de vida de solicitações de agendamento e status de visitas.",
      "executionMode": "entityLifecycle",
      "createsTask": false,
      "taskConfig": {
        "taskTitleTemplate": "",
        "assigneeRules": [],
        "slaRules": [],
        "taskRoomRequired": false
      },
      "actors": [
        "corretor"
      ],
      "states": [
        {
          "stateId": "requestSubmitted",
          "description": "Solicitação de agendamento registrada e aguardando definição da visita."
        },
        {
          "stateId": "visitScheduled",
          "description": "Visita agendada com data definida."
        },
        {
          "stateId": "visitConfirmed",
          "description": "Visita confirmada pelo corretor."
        },
        {
          "stateId": "visitRescheduled",
          "description": "Visita reagendada com nova data."
        },
        {
          "stateId": "visitCompleted",
          "description": "Visita realizada com sucesso."
        },
        {
          "stateId": "visitCanceled",
          "description": "Visita cancelada."
        }
      ],
      "transitions": [
        {
          "from": "requestSubmitted",
          "to": "visitScheduled",
          "trigger": "agendarVisita",
          "actor": "corretor",
          "conditions": [],
          "actions": [
            "definir VisitScheduleRequest.status=agendada",
            "definir Visit.status=agendada",
            "definir VisitScheduleRequest.visitId",
            "definir Visit.scheduledAt=VisitScheduleRequest.requestedStartAt"
          ],
          "rulesApplied": [
            "ruleVisitStatus"
          ]
        },
        {
          "from": "visitScheduled",
          "to": "visitConfirmed",
          "trigger": "confirmarVisita",
          "actor": "corretor",
          "conditions": [],
          "actions": [
            "definir Visit.status=confirmada",
            "definir VisitScheduleRequest.status=confirmada"
          ],
          "rulesApplied": [
            "ruleVisitStatus"
          ]
        },
        {
          "from": "visitScheduled",
          "to": "visitRescheduled",
          "trigger": "reagendarVisita",
          "actor": "corretor",
          "conditions": [],
          "actions": [
            "definir Visit.status=reagendada",
            "definir VisitScheduleRequest.status=reagendada",
            "definir Visit.scheduledAt=VisitScheduleRequest.requestedStartAt"
          ],
          "rulesApplied": [
            "ruleVisitStatus"
          ]
        },
        {
          "from": "visitConfirmed",
          "to": "visitRescheduled",
          "trigger": "reagendarVisitaConfirmada",
          "actor": "corretor",
          "conditions": [],
          "actions": [
            "definir Visit.status=reagendada",
            "definir VisitScheduleRequest.status=reagendada",
            "definir Visit.scheduledAt=VisitScheduleRequest.requestedStartAt"
          ],
          "rulesApplied": [
            "ruleVisitStatus"
          ]
        },
        {
          "from": "visitConfirmed",
          "to": "visitCompleted",
          "trigger": "finalizarVisita",
          "actor": "corretor",
          "conditions": [],
          "actions": [
            "definir Visit.status=realizada",
            "definir VisitScheduleRequest.status=realizada"
          ],
          "rulesApplied": [
            "ruleVisitStatus"
          ]
        },
        {
          "from": "visitScheduled",
          "to": "visitCanceled",
          "trigger": "cancelarVisitaAgendada",
          "actor": "corretor",
          "conditions": [],
          "actions": [
            "definir Visit.status=cancelada",
            "definir VisitScheduleRequest.status=cancelada"
          ],
          "rulesApplied": [
            "ruleVisitStatus"
          ]
        },
        {
          "from": "visitConfirmed",
          "to": "visitCanceled",
          "trigger": "cancelarVisitaConfirmada",
          "actor": "corretor",
          "conditions": [],
          "actions": [
            "definir Visit.status=cancelada",
            "definir VisitScheduleRequest.status=cancelada"
          ],
          "rulesApplied": [
            "ruleVisitStatus"
          ]
        },
        {
          "from": "requestSubmitted",
          "to": "visitCanceled",
          "trigger": "cancelarSolicitacao",
          "actor": "corretor",
          "conditions": [],
          "actions": [
            "definir VisitScheduleRequest.status=cancelada"
          ],
          "rulesApplied": [
            "ruleVisitStatus"
          ]
        },
        {
          "from": "visitRescheduled",
          "to": "visitConfirmed",
          "trigger": "confirmarVisitaReagendada",
          "actor": "corretor",
          "conditions": [],
          "actions": [
            "definir Visit.status=confirmada",
            "definir VisitScheduleRequest.status=confirmada"
          ],
          "rulesApplied": [
            "ruleVisitStatus"
          ]
        },
        {
          "from": "visitRescheduled",
          "to": "visitCanceled",
          "trigger": "cancelarVisitaReagendada",
          "actor": "corretor",
          "conditions": [],
          "actions": [
            "definir Visit.status=cancelada",
            "definir VisitScheduleRequest.status=cancelada"
          ],
          "rulesApplied": [
            "ruleVisitStatus"
          ]
        },
        {
          "from": "visitRescheduled",
          "to": "visitCompleted",
          "trigger": "finalizarVisitaReagendada",
          "actor": "corretor",
          "conditions": [],
          "actions": [
            "definir Visit.status=realizada",
            "definir VisitScheduleRequest.status=realizada"
          ],
          "rulesApplied": [
            "ruleVisitStatus"
          ]
        }
      ],
      "requiredEntities": [
        "VisitScheduleRequest",
        "Visit"
      ],
      "persistenceRefs": [
        "visitScheduleRequest"
      ],
      "usecaseRefs": [
        "listarSolicitacoesAgendamentoVisita",
        "obterSolicitacaoAgendamentoVisita",
        "agendarVisita",
        "atualizarStatusVisita",
        "listarVisitas",
        "obterVisita"
      ],
      "metricRefs": [],
      "userActions": [
        "criarSolicitacaoAgendamento",
        "listarSolicitacoesAgendamento",
        "agendarVisita",
        "confirmarVisita",
        "reagendarVisita",
        "finalizarVisita",
        "cancelarVisita",
        "listarVisitas",
        "obterVisita"
      ],
      "relatedPages": [
        "visitsAgenda"
      ],
      "relatedAgents": [],
      "relatedPlugins": [],
      "rulesApplied": [
        "ruleVisitStatus"
      ],
      "implementationSuggestions": [
        {
          "suggestionId": "reminderIntegration",
          "title": "Integração futura com lembretes",
          "priority": "later",
          "description": "Preparar endpoints e eventos para automações de lembrete antes das visitas.",
          "tradeoff": "Aumenta a complexidade de integração e exige monitoramento de falhas."
        },
        {
          "suggestionId": "noTaskNeeded",
          "title": "Manter fluxo sem tarefas operacionais",
          "priority": "soon",
          "description": "O ciclo de vida é suficientemente controlado por status e use cases; tarefas não são necessárias neste momento.",
          "tradeoff": "Sem tarefas explícitas, dependemos de disciplina do corretor e de alertas futuros."
        }
      ],
      "workflowScope": "singleModule",
      "moduleRefs": [
        "propertyFlowCrm"
      ],
      "pageRefsByModule": [],
      "entityRefsByModule": [
        {
          "moduleId": "propertyFlowCrm",
          "entity": "VisitScheduleRequest"
        },
        {
          "moduleId": "propertyFlowCrm",
          "entity": "Visit"
        }
      ],
      "writesArtifacts": [
        {
          "moduleId": "propertyFlowCrm",
          "artifactType": "workflow",
          "artifactId": "visitSchedulingFlow"
        }
      ]
    },
    "defsPlan": {
      "fileName": "workflows/visitSchedulingFlow.defs.ts",
      "exportName": "visitSchedulingFlowDef",
      "saveAsDefs": true
    }
  }
} as const;

export default visitSchedulingFlowDef;
