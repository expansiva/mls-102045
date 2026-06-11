/// <mls fileReference="_102045_/l4/workflows/proposalDealWorkflow.defs.ts" enhancement="_blank"/>

export const proposalDealWorkflowDef = {
  "schemaVersion": "2026-06-06",
  "artifactType": "workflow",
  "artifactId": "proposalDealWorkflow",
  "moduleName": "propertyFlowCrm",
  "status": "draft",
  "source": {
    "agentName": "agentPlanWorkflowDefinition",
    "stepId": 53,
    "planId": ""
  },
  "data": {
    "workflowDefinition": {
      "workflowId": "proposalDealWorkflow",
      "title": "Evolução de Propostas e Negócios",
      "purpose": "Acompanhar o progresso de propostas desde a criação até o fechamento ou arquivamento, vinculando lead e imóvel e atualizando métricas de negócios.",
      "executionMode": "entityLifecycle",
      "createsTask": false,
      "taskConfig": {
        "taskTitleTemplate": "",
        "assigneeRules": [],
        "slaRules": [],
        "taskRoomRequired": false
      },
      "actors": [
        "corretor",
        "adminImobiliaria"
      ],
      "states": [
        {
          "stateId": "inicio",
          "description": "Estado inicial antes de existir proposta."
        },
        {
          "stateId": "emNegociacao",
          "description": "Proposta criada e em negociação com o lead."
        },
        {
          "stateId": "propostaEnviada",
          "description": "Proposta formal enviada ao lead."
        },
        {
          "stateId": "fechado",
          "description": "Negócio fechado com sucesso."
        },
        {
          "stateId": "perdido",
          "description": "Negócio perdido ou arquivado."
        }
      ],
      "transitions": [
        {
          "from": "inicio",
          "to": "emNegociacao",
          "trigger": "criarProposta",
          "actor": "corretor",
          "conditions": [
            "negocioRequiresLinks"
          ],
          "actions": [
            "set Negocio.imovelId",
            "set Negocio.leadId",
            "set Negocio.corretorId",
            "set Negocio.valor",
            "set Negocio.status=em negociacao",
            "set Negocio.dataProposta",
            "set Negocio.criadoEm",
            "set Negocio.atualizadoEm"
          ],
          "rulesApplied": [
            "negocioRequiresLinks"
          ]
        },
        {
          "from": "emNegociacao",
          "to": "propostaEnviada",
          "trigger": "enviarProposta",
          "actor": "corretor",
          "conditions": [],
          "actions": [
            "set Negocio.status=proposta enviada",
            "set Negocio.atualizadoEm"
          ],
          "rulesApplied": []
        },
        {
          "from": "propostaEnviada",
          "to": "fechado",
          "trigger": "fecharNegocio",
          "actor": "corretor",
          "conditions": [],
          "actions": [
            "set Negocio.status=fechado",
            "set Negocio.atualizadoEm"
          ],
          "rulesApplied": []
        },
        {
          "from": "propostaEnviada",
          "to": "perdido",
          "trigger": "marcarPerdido",
          "actor": "corretor",
          "conditions": [],
          "actions": [
            "set Negocio.status=perdido",
            "set Negocio.atualizadoEm"
          ],
          "rulesApplied": []
        },
        {
          "from": "emNegociacao",
          "to": "perdido",
          "trigger": "cancelarNegociacao",
          "actor": "corretor",
          "conditions": [],
          "actions": [
            "set Negocio.status=perdido",
            "set Negocio.atualizadoEm"
          ],
          "rulesApplied": []
        }
      ],
      "requiredEntities": [
        "Negocio",
        "Lead",
        "Imovel"
      ],
      "persistenceRefs": [
        "negocioMetrics"
      ],
      "usecaseRefs": [
        "criarProposta",
        "atualizarStatusProposta"
      ],
      "metricRefs": [
        "negocioMetrics"
      ],
      "userActions": [
        "criarProposta",
        "enviarProposta",
        "fecharNegocio",
        "marcarPerdido",
        "cancelarNegociacao"
      ],
      "relatedPages": [],
      "relatedAgents": [],
      "relatedPlugins": [],
      "rulesApplied": [
        "negocioRequiresLinks"
      ],
      "implementationSuggestions": [
        {
          "suggestionId": "bloqueioStatus",
          "title": "Bloquear alteração de status indevida",
          "priority": "now",
          "description": "Aplicar validação no caso de uso para impedir retrocessos de status fora das transições permitidas.",
          "tradeoff": "Pode exigir tratamento manual de exceções quando houver acordos comerciais fora do padrão."
        },
        {
          "suggestionId": "notificaAdminNegocio",
          "title": "Notificar admin sobre propostas em negociação",
          "priority": "soon",
          "description": "Disparar notificação para admin quando uma proposta permanecer em negociação por período relevante.",
          "tradeoff": "Gera ruído se regras de tempo não forem ajustadas por perfil da imobiliária."
        },
        {
          "suggestionId": "semTarefasWorkflow",
          "title": "Manter fluxo sem tarefas automáticas",
          "priority": "later",
          "description": "Registrar que o acompanhamento é feito via status e métricas, evitando criação automática de tarefas nesta etapa.",
          "tradeoff": "Menos lembretes operacionais; depende de disciplina do corretor para follow-up."
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
          "entity": "Negocio"
        },
        {
          "moduleId": "propertyFlowCrm",
          "entity": "Lead"
        },
        {
          "moduleId": "propertyFlowCrm",
          "entity": "Imovel"
        }
      ],
      "writesArtifacts": [
        {
          "moduleId": "propertyFlowCrm",
          "artifactType": "workflow",
          "artifactId": "proposalDealWorkflow"
        },
        {
          "moduleId": "propertyFlowCrm",
          "artifactType": "usecase",
          "artifactId": "criarProposta"
        },
        {
          "moduleId": "propertyFlowCrm",
          "artifactType": "usecase",
          "artifactId": "atualizarStatusProposta"
        },
        {
          "moduleId": "propertyFlowCrm",
          "artifactType": "metricTable",
          "artifactId": "negocioMetrics"
        }
      ]
    },
    "defsPlan": {
      "fileName": "workflows/proposalDealWorkflow.defs.ts",
      "exportName": "proposalDealWorkflowDef",
      "saveAsDefs": true
    }
  }
} as const;

export default proposalDealWorkflowDef;
