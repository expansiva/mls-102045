/// <mls fileReference="_102045_/l4/workflows/visitSchedulingWorkflow.defs.ts" enhancement="_blank"/>

export const visitSchedulingWorkflowDef = {
  "schemaVersion": "2026-06-06",
  "artifactType": "workflow",
  "artifactId": "visitSchedulingWorkflow",
  "moduleName": "propertyFlowCrm",
  "status": "draft",
  "source": {
    "agentName": "agentPlanWorkflowDefinition",
    "stepId": 26,
    "planId": "plan-validate-solution-coverage"
  },
  "data": {
    "workflowDefinition": {
      "workflowId": "visitSchedulingWorkflow",
      "title": "Agendamento de Visitas",
      "purpose": "Controlar o ciclo de vida de visitas desde o agendamento até o cancelamento ou conclusão, garantindo vínculos com imóvel ativo e lead.",
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
          "stateId": "inicio",
          "description": "Estado inicial antes de existir um agendamento persistido."
        },
        {
          "stateId": "agendada",
          "description": "Visita registrada e marcada para uma data e hora."
        },
        {
          "stateId": "concluida",
          "description": "Visita realizada com sucesso."
        },
        {
          "stateId": "cancelada",
          "description": "Visita cancelada pelo corretor."
        }
      ],
      "transitions": [
        {
          "from": "inicio",
          "to": "agendada",
          "trigger": "agendarVisita",
          "actor": "corretor",
          "conditions": [
            "visitaRequiresLinks",
            "imovelActiveStatus"
          ],
          "actions": [
            "visita.status=agendada",
            "visita.imovelId=payload.imovelId",
            "visita.leadId=payload.leadId",
            "visita.corretorId=payload.corretorId",
            "visita.dataHora=payload.dataHora",
            "visita.observacoes=payload.observacoes"
          ],
          "rulesApplied": [
            "visitaRequiresLinks",
            "imovelActiveStatus"
          ]
        },
        {
          "from": "agendada",
          "to": "agendada",
          "trigger": "reagendarVisita",
          "actor": "corretor",
          "conditions": [],
          "actions": [
            "visita.dataHora=payload.dataHora",
            "visita.observacoes=payload.observacoes"
          ],
          "rulesApplied": []
        },
        {
          "from": "agendada",
          "to": "cancelada",
          "trigger": "cancelarVisita",
          "actor": "corretor",
          "conditions": [],
          "actions": [
            "visita.status=cancelada",
            "visita.observacoes=payload.observacoes"
          ],
          "rulesApplied": []
        }
      ],
      "requiredEntities": [
        "Visita",
        "Imovel",
        "Lead"
      ],
      "persistenceRefs": [
        "visitaMetrics"
      ],
      "usecaseRefs": [
        "agendarVisita",
        "reagendarVisita",
        "cancelarVisita"
      ],
      "metricRefs": [
        "visitaMetrics"
      ],
      "userActions": [
        "agendarVisita",
        "reagendarVisita",
        "cancelarVisita"
      ],
      "relatedPages": [
        "visitasAgenda"
      ],
      "relatedAgents": [],
      "relatedPlugins": [],
      "rulesApplied": [
        "visitaRequiresLinks",
        "imovelActiveStatus"
      ],
      "implementationSuggestions": [
        {
          "suggestionId": "checkDisponibilidade",
          "title": "Verificar disponibilidade do imóvel e do corretor",
          "priority": "now",
          "description": "Adicionar verificação de conflitos de agenda antes de confirmar o agendamento.",
          "tradeoff": "Exige consultas adicionais e pode aumentar a latência do fluxo de agendamento."
        },
        {
          "suggestionId": "notificacaoVisita",
          "title": "Notificar corretor sobre visitas próximas",
          "priority": "soon",
          "description": "Disparar lembretes automáticos ao corretor para reduzir no-shows.",
          "tradeoff": "Precisa de infraestrutura de notificações e gestão de preferências."
        },
        {
          "suggestionId": "noTaskAutomation",
          "title": "Manter o fluxo sem tarefas manuais",
          "priority": "later",
          "description": "Registrar o status da visita no próprio ciclo de vida e evitar criação de tarefas dedicadas para reduzir overhead operacional.",
          "tradeoff": "Menos visibilidade granular em filas de tarefas; depende de painéis e alertas para acompanhamento."
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
          "entity": "Visita"
        },
        {
          "moduleId": "propertyFlowCrm",
          "entity": "Imovel"
        },
        {
          "moduleId": "propertyFlowCrm",
          "entity": "Lead"
        }
      ],
      "writesArtifacts": [
        {
          "moduleId": "propertyFlowCrm",
          "artifactType": "workflow",
          "artifactId": "visitSchedulingWorkflow"
        }
      ]
    },
    "defsPlan": {
      "fileName": "workflows/visitSchedulingWorkflow.defs.ts",
      "exportName": "visitSchedulingWorkflowDef",
      "saveAsDefs": true
    }
  }
} as const;

export default visitSchedulingWorkflowDef;
