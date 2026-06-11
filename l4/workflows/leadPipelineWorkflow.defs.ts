/// <mls fileReference="_102045_/l4/workflows/leadPipelineWorkflow.defs.ts" enhancement="_blank"/>

export const leadPipelineWorkflowDef = {
  "schemaVersion": "2026-06-06",
  "artifactType": "workflow",
  "artifactId": "leadPipelineWorkflow",
  "moduleName": "propertyFlowCrm",
  "status": "draft",
  "source": {
    "agentName": "agentPlanWorkflowDefinition",
    "stepId": 51,
    "planId": ""
  },
  "data": {
    "workflowDefinition": {
      "workflowId": "leadPipelineWorkflow",
      "title": "Pipeline de Leads",
      "purpose": "Gerenciar o ciclo de vida dos leads através das etapas do funil de vendas, refletindo mudanças no Kanban e alimentando métricas de pipeline.",
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
          "stateId": "novo",
          "description": "Lead recém-criado no pipeline."
        },
        {
          "stateId": "contato",
          "description": "Lead em contato inicial com o corretor."
        },
        {
          "stateId": "visitaAgendada",
          "description": "Visita agendada para o lead."
        },
        {
          "stateId": "propostaEnviada",
          "description": "Proposta enviada ao lead."
        },
        {
          "stateId": "fechado",
          "description": "Lead convertido/negócio fechado."
        }
      ],
      "transitions": [
        {
          "from": "novo",
          "to": "contato",
          "trigger": "moverLeadKanban",
          "actor": "corretor",
          "conditions": [
            "leadPipelineStages"
          ],
          "actions": [
            "Lead.statusFunil=Contato",
            "Lead.atualizadoEm=now"
          ],
          "rulesApplied": [
            "leadPipelineStages",
            "kanbanMoveUpdatesStatus"
          ]
        },
        {
          "from": "novo",
          "to": "visitaAgendada",
          "trigger": "moverLeadKanban",
          "actor": "corretor",
          "conditions": [
            "leadPipelineStages"
          ],
          "actions": [
            "Lead.statusFunil=Visita agendada",
            "Lead.atualizadoEm=now"
          ],
          "rulesApplied": [
            "leadPipelineStages",
            "kanbanMoveUpdatesStatus"
          ]
        },
        {
          "from": "novo",
          "to": "propostaEnviada",
          "trigger": "moverLeadKanban",
          "actor": "corretor",
          "conditions": [
            "leadPipelineStages"
          ],
          "actions": [
            "Lead.statusFunil=Proposta enviada",
            "Lead.atualizadoEm=now"
          ],
          "rulesApplied": [
            "leadPipelineStages",
            "kanbanMoveUpdatesStatus"
          ]
        },
        {
          "from": "novo",
          "to": "fechado",
          "trigger": "moverLeadKanban",
          "actor": "corretor",
          "conditions": [
            "leadPipelineStages"
          ],
          "actions": [
            "Lead.statusFunil=Fechado",
            "Lead.atualizadoEm=now"
          ],
          "rulesApplied": [
            "leadPipelineStages",
            "kanbanMoveUpdatesStatus"
          ]
        },
        {
          "from": "contato",
          "to": "novo",
          "trigger": "moverLeadKanban",
          "actor": "corretor",
          "conditions": [
            "leadPipelineStages"
          ],
          "actions": [
            "Lead.statusFunil=Novo",
            "Lead.atualizadoEm=now"
          ],
          "rulesApplied": [
            "leadPipelineStages",
            "kanbanMoveUpdatesStatus"
          ]
        },
        {
          "from": "contato",
          "to": "visitaAgendada",
          "trigger": "moverLeadKanban",
          "actor": "corretor",
          "conditions": [
            "leadPipelineStages"
          ],
          "actions": [
            "Lead.statusFunil=Visita agendada",
            "Lead.atualizadoEm=now"
          ],
          "rulesApplied": [
            "leadPipelineStages",
            "kanbanMoveUpdatesStatus"
          ]
        },
        {
          "from": "contato",
          "to": "propostaEnviada",
          "trigger": "moverLeadKanban",
          "actor": "corretor",
          "conditions": [
            "leadPipelineStages"
          ],
          "actions": [
            "Lead.statusFunil=Proposta enviada",
            "Lead.atualizadoEm=now"
          ],
          "rulesApplied": [
            "leadPipelineStages",
            "kanbanMoveUpdatesStatus"
          ]
        },
        {
          "from": "contato",
          "to": "fechado",
          "trigger": "moverLeadKanban",
          "actor": "corretor",
          "conditions": [
            "leadPipelineStages"
          ],
          "actions": [
            "Lead.statusFunil=Fechado",
            "Lead.atualizadoEm=now"
          ],
          "rulesApplied": [
            "leadPipelineStages",
            "kanbanMoveUpdatesStatus"
          ]
        },
        {
          "from": "visitaAgendada",
          "to": "novo",
          "trigger": "moverLeadKanban",
          "actor": "corretor",
          "conditions": [
            "leadPipelineStages"
          ],
          "actions": [
            "Lead.statusFunil=Novo",
            "Lead.atualizadoEm=now"
          ],
          "rulesApplied": [
            "leadPipelineStages",
            "kanbanMoveUpdatesStatus"
          ]
        },
        {
          "from": "visitaAgendada",
          "to": "contato",
          "trigger": "moverLeadKanban",
          "actor": "corretor",
          "conditions": [
            "leadPipelineStages"
          ],
          "actions": [
            "Lead.statusFunil=Contato",
            "Lead.atualizadoEm=now"
          ],
          "rulesApplied": [
            "leadPipelineStages",
            "kanbanMoveUpdatesStatus"
          ]
        },
        {
          "from": "visitaAgendada",
          "to": "propostaEnviada",
          "trigger": "moverLeadKanban",
          "actor": "corretor",
          "conditions": [
            "leadPipelineStages"
          ],
          "actions": [
            "Lead.statusFunil=Proposta enviada",
            "Lead.atualizadoEm=now"
          ],
          "rulesApplied": [
            "leadPipelineStages",
            "kanbanMoveUpdatesStatus"
          ]
        },
        {
          "from": "visitaAgendada",
          "to": "fechado",
          "trigger": "moverLeadKanban",
          "actor": "corretor",
          "conditions": [
            "leadPipelineStages"
          ],
          "actions": [
            "Lead.statusFunil=Fechado",
            "Lead.atualizadoEm=now"
          ],
          "rulesApplied": [
            "leadPipelineStages",
            "kanbanMoveUpdatesStatus"
          ]
        },
        {
          "from": "propostaEnviada",
          "to": "novo",
          "trigger": "moverLeadKanban",
          "actor": "corretor",
          "conditions": [
            "leadPipelineStages"
          ],
          "actions": [
            "Lead.statusFunil=Novo",
            "Lead.atualizadoEm=now"
          ],
          "rulesApplied": [
            "leadPipelineStages",
            "kanbanMoveUpdatesStatus"
          ]
        },
        {
          "from": "propostaEnviada",
          "to": "contato",
          "trigger": "moverLeadKanban",
          "actor": "corretor",
          "conditions": [
            "leadPipelineStages"
          ],
          "actions": [
            "Lead.statusFunil=Contato",
            "Lead.atualizadoEm=now"
          ],
          "rulesApplied": [
            "leadPipelineStages",
            "kanbanMoveUpdatesStatus"
          ]
        },
        {
          "from": "propostaEnviada",
          "to": "visitaAgendada",
          "trigger": "moverLeadKanban",
          "actor": "corretor",
          "conditions": [
            "leadPipelineStages"
          ],
          "actions": [
            "Lead.statusFunil=Visita agendada",
            "Lead.atualizadoEm=now"
          ],
          "rulesApplied": [
            "leadPipelineStages",
            "kanbanMoveUpdatesStatus"
          ]
        },
        {
          "from": "propostaEnviada",
          "to": "fechado",
          "trigger": "moverLeadKanban",
          "actor": "corretor",
          "conditions": [
            "leadPipelineStages"
          ],
          "actions": [
            "Lead.statusFunil=Fechado",
            "Lead.atualizadoEm=now"
          ],
          "rulesApplied": [
            "leadPipelineStages",
            "kanbanMoveUpdatesStatus"
          ]
        },
        {
          "from": "fechado",
          "to": "novo",
          "trigger": "moverLeadKanban",
          "actor": "corretor",
          "conditions": [
            "leadPipelineStages"
          ],
          "actions": [
            "Lead.statusFunil=Novo",
            "Lead.atualizadoEm=now"
          ],
          "rulesApplied": [
            "leadPipelineStages",
            "kanbanMoveUpdatesStatus"
          ]
        },
        {
          "from": "fechado",
          "to": "contato",
          "trigger": "moverLeadKanban",
          "actor": "corretor",
          "conditions": [
            "leadPipelineStages"
          ],
          "actions": [
            "Lead.statusFunil=Contato",
            "Lead.atualizadoEm=now"
          ],
          "rulesApplied": [
            "leadPipelineStages",
            "kanbanMoveUpdatesStatus"
          ]
        },
        {
          "from": "fechado",
          "to": "visitaAgendada",
          "trigger": "moverLeadKanban",
          "actor": "corretor",
          "conditions": [
            "leadPipelineStages"
          ],
          "actions": [
            "Lead.statusFunil=Visita agendada",
            "Lead.atualizadoEm=now"
          ],
          "rulesApplied": [
            "leadPipelineStages",
            "kanbanMoveUpdatesStatus"
          ]
        },
        {
          "from": "fechado",
          "to": "propostaEnviada",
          "trigger": "moverLeadKanban",
          "actor": "corretor",
          "conditions": [
            "leadPipelineStages"
          ],
          "actions": [
            "Lead.statusFunil=Proposta enviada",
            "Lead.atualizadoEm=now"
          ],
          "rulesApplied": [
            "leadPipelineStages",
            "kanbanMoveUpdatesStatus"
          ]
        },
        {
          "from": "novo",
          "to": "novo",
          "trigger": "criarLead",
          "actor": "corretor",
          "conditions": [
            "leadPipelineStages"
          ],
          "actions": [
            "Lead.statusFunil=Novo",
            "Lead.criadoEm=now",
            "Lead.atualizadoEm=now"
          ],
          "rulesApplied": [
            "leadPipelineStages"
          ]
        }
      ],
      "requiredEntities": [
        "Lead"
      ],
      "persistenceRefs": [
        "leadPipelineMetrics"
      ],
      "usecaseRefs": [
        "criarLead",
        "moverLeadKanban"
      ],
      "metricRefs": [
        "leadPipelineMetrics"
      ],
      "userActions": [
        "criarLead",
        "moverLeadKanban"
      ],
      "relatedPages": [],
      "relatedAgents": [],
      "relatedPlugins": [],
      "rulesApplied": [
        "leadPipelineStages",
        "kanbanMoveUpdatesStatus"
      ],
      "implementationSuggestions": [
        {
          "suggestionId": "valTransicaoPipeline",
          "title": "Validar transições de etapa no backend",
          "priority": "now",
          "description": "Implementar validação de transições permitidas no caso de uso moverLeadKanban para evitar estados inconsistentes no pipeline.",
          "tradeoff": "Regras mais rígidas exigem manutenção quando novas etapas forem adicionadas."
        },
        {
          "suggestionId": "metricasTempoReal",
          "title": "Atualizar métricas do pipeline em tempo real",
          "priority": "now",
          "description": "Garantir atualização imediata da tabela leadPipelineMetrics após criar ou mover leads.",
          "tradeoff": "Maior carga de escrita em períodos de alto volume."
        },
        {
          "suggestionId": "semTarefasPipeline",
          "title": "Não criar tarefas automáticas para movimentos do Kanban",
          "priority": "later",
          "description": "Manter o fluxo focado em movimentação direta no Kanban, sem gerar tarefas paralelas.",
          "tradeoff": "Menos lembretes estruturados para corretores que preferem listas de tarefas."
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
          "entity": "Lead"
        }
      ],
      "writesArtifacts": [
        {
          "moduleId": "propertyFlowCrm",
          "artifactType": "workflow",
          "artifactId": "leadPipelineWorkflow"
        },
        {
          "moduleId": "propertyFlowCrm",
          "artifactType": "metricTable",
          "artifactId": "leadPipelineMetrics"
        },
        {
          "moduleId": "propertyFlowCrm",
          "artifactType": "usecase",
          "artifactId": "criarLead"
        },
        {
          "moduleId": "propertyFlowCrm",
          "artifactType": "usecase",
          "artifactId": "moverLeadKanban"
        }
      ]
    },
    "defsPlan": {
      "fileName": "workflows/leadPipelineWorkflow.defs.ts",
      "exportName": "leadPipelineWorkflowDef",
      "saveAsDefs": true
    }
  }
} as const;

export default leadPipelineWorkflowDef;
