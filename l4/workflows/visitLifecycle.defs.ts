/// <mls fileReference="_102045_/l4/workflows/visitLifecycle.defs.ts" enhancement="_blank"/>

export const visitLifecycleDef = {
  "schemaVersion": "2026-06-06",
  "artifactType": "workflow",
  "artifactId": "visitLifecycle",
  "moduleName": "propertyFlowCrm",
  "status": "draft",
  "source": {
    "agentName": "agentPlanWorkflowDefinition",
    "stepId": 25,
    "planId": "plan-validate-solution-coverage"
  },
  "data": {
    "workflowDefinition": {
      "workflowId": "visitLifecycle",
      "title": "Ciclo de Vida da Visita",
      "purpose": "Controlar o agendamento, confirmação, realização ou cancelamento de visitas a imóveis, garantindo a rastreabilidade de cada compromisso.",
      "executionMode": "entityLifecycle",
      "createsTask": false,
      "taskConfig": {
        "taskTitleTemplate": "",
        "assigneeRules": [],
        "slaRules": [],
        "taskRoomRequired": false
      },
      "actors": [
        "broker"
      ],
      "states": [
        {
          "stateId": "scheduled",
          "description": "Visita agendada aguardando confirmação do lead ou corretor."
        },
        {
          "stateId": "confirmed",
          "description": "Visita confirmada por ambas as partes, pronta para ser realizada."
        },
        {
          "stateId": "completed",
          "description": "Visita realizada com sucesso, feedback pode ser registrado."
        },
        {
          "stateId": "cancelled",
          "description": "Visita cancelada antes da realização, não pode ser reativada."
        },
        {
          "stateId": "noShow",
          "description": "Lead não compareceu à visita confirmada, não pode ser reativada."
        }
      ],
      "transitions": [
        {
          "from": "_initial",
          "to": "scheduled",
          "trigger": "scheduleVisit",
          "actor": "broker",
          "conditions": [
            "ruleVisitRequiredFields: lead, imóvel, corretor e data/hora obrigatórios",
            "ruleVisitPropertyActive: imóvel deve estar ativo ou reservado"
          ],
          "actions": [
            "Visit.status = 'scheduled'",
            "Visit.scheduledAt = input.scheduledAt",
            "Visit.leadId = input.leadId",
            "Visit.propertyId = input.propertyId",
            "Visit.brokerId = input.brokerId",
            "Visit.notes = input.notes"
          ],
          "rulesApplied": [
            "ruleVisitRequiredFields",
            "ruleVisitPropertyActive"
          ]
        },
        {
          "from": "scheduled",
          "to": "confirmed",
          "trigger": "confirmVisit",
          "actor": "broker",
          "conditions": [
            "ruleVisitStatusTransition: status atual deve ser 'scheduled'"
          ],
          "actions": [
            "Visit.status = 'confirmed'"
          ],
          "rulesApplied": [
            "ruleVisitStatusTransition"
          ]
        },
        {
          "from": "confirmed",
          "to": "completed",
          "trigger": "completeVisit",
          "actor": "broker",
          "conditions": [
            "ruleVisitStatusTransition: status atual deve ser 'confirmed'"
          ],
          "actions": [
            "Visit.status = 'completed'",
            "Visit.feedback = input.feedback",
            "Visit.rating = input.rating"
          ],
          "rulesApplied": [
            "ruleVisitStatusTransition"
          ]
        },
        {
          "from": "scheduled",
          "to": "cancelled",
          "trigger": "cancelVisit",
          "actor": "broker",
          "conditions": [
            "ruleVisitStatusTransition: status atual deve ser 'scheduled' ou 'confirmed'"
          ],
          "actions": [
            "Visit.status = 'cancelled'"
          ],
          "rulesApplied": [
            "ruleVisitStatusTransition"
          ]
        },
        {
          "from": "confirmed",
          "to": "cancelled",
          "trigger": "cancelVisit",
          "actor": "broker",
          "conditions": [
            "ruleVisitStatusTransition: status atual deve ser 'scheduled' ou 'confirmed'"
          ],
          "actions": [
            "Visit.status = 'cancelled'"
          ],
          "rulesApplied": [
            "ruleVisitStatusTransition"
          ]
        },
        {
          "from": "confirmed",
          "to": "noShow",
          "trigger": "markNoShow",
          "actor": "broker",
          "conditions": [
            "ruleVisitStatusTransition: status atual deve ser 'confirmed'",
            "Data/hora agendada já passou"
          ],
          "actions": [
            "Visit.status = 'noShow'"
          ],
          "rulesApplied": [
            "ruleVisitStatusTransition"
          ]
        }
      ],
      "requiredEntities": [
        "Visit"
      ],
      "persistenceRefs": [
        "visitTable",
        "visitMetrics",
        "crmActivityMetrics"
      ],
      "usecaseRefs": [
        "scheduleVisit",
        "confirmVisit",
        "completeVisit",
        "cancelVisit",
        "listVisits"
      ],
      "metricRefs": [
        "visitMetrics",
        "crmActivityMetrics"
      ],
      "userActions": [
        "Agendar nova visita",
        "Confirmar visita agendada",
        "Registrar visita realizada",
        "Cancelar visita",
        "Marcar não comparecimento",
        "Visualizar calendário de visitas"
      ],
      "relatedPages": [
        "brokerDashboard",
        "leadDetailPage",
        "propertyDetailPage",
        "visitCalendarPage",
        "visitDetail",
        "visitForm",
        "visitList",
        "visitSchedulerPage"
      ],
      "relatedAgents": [],
      "relatedPlugins": [],
      "rulesApplied": [
        "ruleVisitRequiredFields",
        "ruleVisitStatusTransition",
        "ruleVisitPropertyActive"
      ],
      "implementationSuggestions": [
        {
          "suggestionId": "suggestVisitCalendarSync",
          "title": "Sincronizar visitas confirmadas com calendário externo",
          "priority": "soon",
          "description": "Integrar com Google Calendar ou Outlook para sincronizar automaticamente visitas confirmadas, evitando conflitos de agenda do corretor.",
          "tradeoff": "Requer configuração de OAuth e manutenção de tokens de acesso, aumentando complexidade de integração."
        },
        {
          "suggestionId": "suggestNoTaskCreation",
          "title": "Workflow sem criação de tarefas",
          "priority": "never",
          "description": "Este workflow opera como ciclo de vida de entidade (entityLifecycle), onde a própria entidade Visit controla seu estado. Não há necessidade de tarefas separadas pois o corretor gerencia visitas diretamente pelo calendário e lista de visitas.",
          "tradeoff": "Caso seja necessário escalar para múltiplos corretores com aprovações, considerar migrar para taskWorkflow."
        },
        {
          "suggestionId": "suggestVisitReminder",
          "title": "Implementar lembretes automáticos de visita",
          "priority": "later",
          "description": "Enviar notificações automáticas para corretor e lead 24h e 1h antes da visita confirmada.",
          "tradeoff": "Requer infraestrutura de agendamento de jobs e integração com serviço de notificações."
        }
      ],
      "workflowScope": "singleModule",
      "moduleRefs": [
        "propertyFlowCrm"
      ],
      "pageRefsByModule": [
        {
          "moduleId": "propertyFlowCrm",
          "pageId": "visitSchedulerPage"
        },
        {
          "moduleId": "propertyFlowCrm",
          "pageId": "visitCalendarPage"
        },
        {
          "moduleId": "propertyFlowCrm",
          "pageId": "propertyDetailPage"
        },
        {
          "moduleId": "propertyFlowCrm",
          "pageId": "leadDetailPage"
        }
      ],
      "entityRefsByModule": [
        {
          "moduleId": "propertyFlowCrm",
          "entity": "Visit"
        }
      ],
      "writesArtifacts": [
        {
          "moduleId": "propertyFlowCrm",
          "artifactType": "table",
          "artifactId": "visitTable"
        },
        {
          "moduleId": "propertyFlowCrm",
          "artifactType": "metricTable",
          "artifactId": "visitMetrics"
        },
        {
          "moduleId": "propertyFlowCrm",
          "artifactType": "metricTable",
          "artifactId": "crmActivityMetrics"
        },
        {
          "moduleId": "propertyFlowCrm",
          "artifactType": "usecase",
          "artifactId": "scheduleVisit"
        },
        {
          "moduleId": "propertyFlowCrm",
          "artifactType": "usecase",
          "artifactId": "confirmVisit"
        },
        {
          "moduleId": "propertyFlowCrm",
          "artifactType": "usecase",
          "artifactId": "completeVisit"
        },
        {
          "moduleId": "propertyFlowCrm",
          "artifactType": "usecase",
          "artifactId": "cancelVisit"
        }
      ]
    },
    "defsPlan": {
      "fileName": "workflows/visitLifecycle.defs.ts",
      "exportName": "visitLifecycleDef",
      "saveAsDefs": true
    }
  }
} as const;

export default visitLifecycleDef;
