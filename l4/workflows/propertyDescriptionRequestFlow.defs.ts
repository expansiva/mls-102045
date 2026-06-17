/// <mls fileReference="_102045_/l4/workflows/propertyDescriptionRequestFlow.defs.ts" enhancement="_blank"/>

export const propertyDescriptionRequestFlowDef = {
  "schemaVersion": "2026-06-06",
  "artifactType": "workflow",
  "artifactId": "propertyDescriptionRequestFlow",
  "moduleName": "propertyFlowCrm",
  "status": "draft",
  "source": {
    "agentName": "agentPlanWorkflowDefinition",
    "stepId": 29,
    "planId": "plan-validate-solution-coverage"
  },
  "data": {
    "workflowDefinition": {
      "workflowId": "propertyDescriptionRequestFlow",
      "title": "Descrição de Imóvel via IA",
      "purpose": "Gerenciar solicitações de descrição de imóveis com retorno da IA e revisão humana.",
      "executionMode": "automation",
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
          "stateId": "requestCreated",
          "description": "Solicitação criada e registrada com bullets informados."
        },
        {
          "stateId": "aiDescriptionReady",
          "description": "Descrição da IA registrada e aguardando revisão humana."
        },
        {
          "stateId": "reviewApproved",
          "description": "Descrição aprovada pelo corretor."
        },
        {
          "stateId": "reviewRejected",
          "description": "Descrição rejeitada pelo corretor."
        }
      ],
      "transitions": [
        {
          "from": "requestCreated",
          "to": "aiDescriptionReady",
          "trigger": "descricaoAiRecebida",
          "actor": "corretor",
          "conditions": [],
          "actions": [
            "set PropertyDescriptionRequest.aiDescription",
            "set PropertyDescriptionRequest.reviewStatus=pendente",
            "set PropertyDescriptionRequest.updatedAt"
          ],
          "rulesApplied": [
            "ruleAiHumanReview"
          ]
        },
        {
          "from": "aiDescriptionReady",
          "to": "reviewApproved",
          "trigger": "aprovarDescricao",
          "actor": "corretor",
          "conditions": [],
          "actions": [
            "set PropertyDescriptionRequest.reviewStatus=aprovada",
            "set PropertyDescriptionRequest.humanReviewNotes",
            "set PropertyDescriptionRequest.updatedAt"
          ],
          "rulesApplied": [
            "ruleAiHumanReview"
          ]
        },
        {
          "from": "aiDescriptionReady",
          "to": "reviewRejected",
          "trigger": "rejeitarDescricao",
          "actor": "corretor",
          "conditions": [],
          "actions": [
            "set PropertyDescriptionRequest.reviewStatus=rejeitada",
            "set PropertyDescriptionRequest.humanReviewNotes",
            "set PropertyDescriptionRequest.updatedAt"
          ],
          "rulesApplied": [
            "ruleAiHumanReview"
          ]
        }
      ],
      "requiredEntities": [
        "PropertyDescriptionRequest"
      ],
      "persistenceRefs": [
        "propertyDescriptionRequest"
      ],
      "usecaseRefs": [
        "listarSolicitacoesDescricaoImovel",
        "obterSolicitacaoDescricaoImovel",
        "solicitarDescricaoImovel"
      ],
      "metricRefs": [],
      "userActions": [
        "solicitarDescricaoImovel",
        "verSolicitacaoDescricaoImovel",
        "aprovarDescricaoImovel",
        "rejeitarDescricaoImovel"
      ],
      "relatedPages": [
        "propertyDetails"
      ],
      "relatedAgents": [],
      "relatedPlugins": [],
      "rulesApplied": [
        "ruleAiHumanReview"
      ],
      "implementationSuggestions": [
        {
          "suggestionId": "manualEditStep",
          "title": "Etapa de edição manual antes de publicar",
          "priority": "soon",
          "description": "Adicionar uma etapa explícita de edição manual do texto antes da aprovação final, mantendo a revisão humana obrigatória.",
          "tradeoff": "Aumenta o tempo total do fluxo em troca de maior qualidade do conteúdo."
        },
        {
          "suggestionId": "noTaskAutomation",
          "title": "Manter fluxo sem criação de tarefa",
          "priority": "now",
          "description": "Como o fluxo é automático e conduzido pelo corretor em listas e detalhes, não criar tarefas dedicadas; registrar status diretamente na solicitação.",
          "tradeoff": "Sem tarefas, o acompanhamento depende de filtros e notificações na lista de solicitações."
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
          "entity": "PropertyDescriptionRequest"
        }
      ],
      "writesArtifacts": [
        {
          "moduleId": "propertyFlowCrm",
          "artifactType": "workflow",
          "artifactId": "propertyDescriptionRequestFlow"
        }
      ]
    },
    "defsPlan": {
      "fileName": "workflows/propertyDescriptionRequestFlow.defs.ts",
      "exportName": "propertyDescriptionRequestFlowDef",
      "saveAsDefs": true
    }
  }
} as const;

export default propertyDescriptionRequestFlowDef;
