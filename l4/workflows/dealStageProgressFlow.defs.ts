/// <mls fileReference="_102045_/l4/workflows/dealStageProgressFlow.defs.ts" enhancement="_blank"/>

export const dealStageProgressFlowDef = {
  "schemaVersion": "2026-06-06",
  "artifactType": "workflow",
  "artifactId": "dealStageProgressFlow",
  "moduleName": "propertyFlowCrm",
  "status": "draft",
  "source": {
    "agentName": "agentPlanWorkflowDefinition",
    "stepId": 29,
    "planId": "plan-validate-solution-coverage"
  },
  "data": {
    "workflowDefinition": {
      "workflowId": "dealStageProgressFlow",
      "title": "Etapas de Negócio/Proposta",
      "purpose": "Acompanhar progressão das etapas do negócio e registrar mudanças.",
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
          "stateId": "rascunho",
          "description": "Negócio criado, ainda não enviado ao cliente."
        },
        {
          "stateId": "enviada",
          "description": "Proposta enviada ao cliente."
        },
        {
          "stateId": "emNegociacao",
          "description": "Proposta em negociação com o cliente."
        },
        {
          "stateId": "aceita",
          "description": "Proposta aceita pelo cliente."
        },
        {
          "stateId": "recusada",
          "description": "Proposta recusada pelo cliente."
        },
        {
          "stateId": "fechada",
          "description": "Negócio concluído e encerrado."
        }
      ],
      "transitions": [
        {
          "from": "rascunho",
          "to": "enviada",
          "trigger": "sendProposal",
          "actor": "corretor",
          "conditions": [],
          "actions": [
            "Deal.status=enviada",
            "DealStageChange.dealId={dealId}",
            "DealStageChange.fromStage=rascunho",
            "DealStageChange.toStage=enviada",
            "DealStageChange.changedAt=now",
            "DealStageChange.createdAt=now",
            "DealStageChange.updatedAt=now"
          ],
          "rulesApplied": [
            "ruleDealStages"
          ]
        },
        {
          "from": "enviada",
          "to": "emNegociacao",
          "trigger": "startNegotiation",
          "actor": "corretor",
          "conditions": [],
          "actions": [
            "Deal.status=emNegociacao",
            "DealStageChange.dealId={dealId}",
            "DealStageChange.fromStage=enviada",
            "DealStageChange.toStage=emNegociacao",
            "DealStageChange.changedAt=now",
            "DealStageChange.createdAt=now",
            "DealStageChange.updatedAt=now"
          ],
          "rulesApplied": [
            "ruleDealStages"
          ]
        },
        {
          "from": "enviada",
          "to": "aceita",
          "trigger": "acceptProposal",
          "actor": "corretor",
          "conditions": [],
          "actions": [
            "Deal.status=aceita",
            "DealStageChange.dealId={dealId}",
            "DealStageChange.fromStage=enviada",
            "DealStageChange.toStage=aceita",
            "DealStageChange.changedAt=now",
            "DealStageChange.createdAt=now",
            "DealStageChange.updatedAt=now"
          ],
          "rulesApplied": [
            "ruleDealStages"
          ]
        },
        {
          "from": "enviada",
          "to": "recusada",
          "trigger": "rejectProposal",
          "actor": "corretor",
          "conditions": [],
          "actions": [
            "Deal.status=recusada",
            "DealStageChange.dealId={dealId}",
            "DealStageChange.fromStage=enviada",
            "DealStageChange.toStage=recusada",
            "DealStageChange.changedAt=now",
            "DealStageChange.createdAt=now",
            "DealStageChange.updatedAt=now"
          ],
          "rulesApplied": [
            "ruleDealStages"
          ]
        },
        {
          "from": "emNegociacao",
          "to": "aceita",
          "trigger": "acceptProposal",
          "actor": "corretor",
          "conditions": [],
          "actions": [
            "Deal.status=aceita",
            "DealStageChange.dealId={dealId}",
            "DealStageChange.fromStage=emNegociacao",
            "DealStageChange.toStage=aceita",
            "DealStageChange.changedAt=now",
            "DealStageChange.createdAt=now",
            "DealStageChange.updatedAt=now"
          ],
          "rulesApplied": [
            "ruleDealStages"
          ]
        },
        {
          "from": "emNegociacao",
          "to": "recusada",
          "trigger": "rejectProposal",
          "actor": "corretor",
          "conditions": [],
          "actions": [
            "Deal.status=recusada",
            "DealStageChange.dealId={dealId}",
            "DealStageChange.fromStage=emNegociacao",
            "DealStageChange.toStage=recusada",
            "DealStageChange.changedAt=now",
            "DealStageChange.createdAt=now",
            "DealStageChange.updatedAt=now"
          ],
          "rulesApplied": [
            "ruleDealStages"
          ]
        },
        {
          "from": "aceita",
          "to": "fechada",
          "trigger": "closeDeal",
          "actor": "corretor",
          "conditions": [],
          "actions": [
            "Deal.status=fechada",
            "DealStageChange.dealId={dealId}",
            "DealStageChange.fromStage=aceita",
            "DealStageChange.toStage=fechada",
            "DealStageChange.changedAt=now",
            "DealStageChange.createdAt=now",
            "DealStageChange.updatedAt=now"
          ],
          "rulesApplied": [
            "ruleDealStages"
          ]
        }
      ],
      "requiredEntities": [
        "Deal",
        "DealStageChange"
      ],
      "persistenceRefs": [
        "dealStageChange"
      ],
      "usecaseRefs": [
        "listarMudancasEtapaNegocio",
        "obterMudancaEtapaNegocio",
        "avancarEtapaNegocio",
        "criarNegocio",
        "obterNegocio"
      ],
      "metricRefs": [],
      "userActions": [
        "criarNegocio",
        "avancarEtapaNegocio",
        "listarMudancasEtapaNegocio",
        "obterMudancaEtapaNegocio",
        "obterNegocio"
      ],
      "relatedPages": [
        "dealsTracker"
      ],
      "relatedAgents": [],
      "relatedPlugins": [],
      "rulesApplied": [
        "ruleDealStages"
      ],
      "implementationSuggestions": [
        {
          "suggestionId": "approvalAtAccept",
          "title": "Confirmação ao aceitar proposta",
          "priority": "soon",
          "description": "Adicionar confirmação explícita ao mover para a etapa aceita para evitar avanço acidental.",
          "tradeoff": "Pode adicionar um passo extra na operação do corretor."
        },
        {
          "suggestionId": "noTaskWorkflow",
          "title": "Sem tarefas automáticas para mudanças de etapa",
          "priority": "later",
          "description": "Manter o fluxo sem criação automática de tarefas, pois o avanço de etapa já é uma ação direta do corretor e não requer SLA separado.",
          "tradeoff": "Menos rastreabilidade operacional por tarefas dedicadas."
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
          "entity": "Deal"
        },
        {
          "moduleId": "propertyFlowCrm",
          "entity": "DealStageChange"
        }
      ],
      "writesArtifacts": [
        {
          "moduleId": "propertyFlowCrm",
          "artifactType": "workflow",
          "artifactId": "dealStageProgressFlow"
        }
      ]
    },
    "defsPlan": {
      "fileName": "workflows/dealStageProgressFlow.defs.ts",
      "exportName": "dealStageProgressFlowDef",
      "saveAsDefs": true
    }
  }
} as const;

export default dealStageProgressFlowDef;
