/// <mls fileReference="_102045_/l4/workflows/leadQualificationRequestFlow.defs.ts" enhancement="_blank"/>

export const leadQualificationRequestFlowDef = {
  "schemaVersion": "2026-06-06",
  "artifactType": "workflow",
  "artifactId": "leadQualificationRequestFlow",
  "moduleName": "propertyFlowCrm",
  "status": "draft",
  "source": {
    "agentName": "agentPlanWorkflowDefinition",
    "stepId": 29,
    "planId": "plan-validate-solution-coverage"
  },
  "data": {
    "workflowDefinition": {
      "workflowId": "leadQualificationRequestFlow",
      "title": "Qualificação de Lead",
      "purpose": "Orquestrar solicitações de qualificação de lead via IA com revisão humana quando necessário.",
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
          "stateId": "criada",
          "description": "Solicitação criada e aguardando processamento da IA."
        },
        {
          "stateId": "qualificada",
          "description": "IA gerou qualificação e sugestão para o lead."
        },
        {
          "stateId": "revisada",
          "description": "Revisão humana aplicada à qualificação gerada por IA."
        },
        {
          "stateId": "finalizada",
          "description": "Lead atualizado com a qualificação e follow-up definido."
        },
        {
          "stateId": "cancelada",
          "description": "Solicitação cancelada antes da conclusão."
        }
      ],
      "transitions": [
        {
          "from": "criada",
          "to": "qualificada",
          "trigger": "processarQualificacaoIa",
          "actor": "corretor",
          "conditions": [
            "ruleAiHumanReview"
          ],
          "actions": [
            "set LeadQualificationRequest.leadTemperature",
            "set LeadQualificationRequest.followUpSuggestion",
            "set LeadQualificationRequest.aiGenerated=true",
            "set LeadQualificationRequest.reviewStatus=pendente",
            "set LeadQualificationRequest.status=emRevisao",
            "set LeadQualificationRequest.updatedAt"
          ],
          "rulesApplied": [
            "ruleAiHumanReview"
          ]
        },
        {
          "from": "qualificada",
          "to": "revisada",
          "trigger": "revisarQualificacao",
          "actor": "corretor",
          "conditions": [
            "ruleAiHumanReview"
          ],
          "actions": [
            "set LeadQualificationRequest.reviewStatus=aprovado",
            "set LeadQualificationRequest.status=concluida",
            "set LeadQualificationRequest.updatedAt"
          ],
          "rulesApplied": [
            "ruleAiHumanReview"
          ]
        },
        {
          "from": "revisada",
          "to": "finalizada",
          "trigger": "atualizarLeadComQualificacao",
          "actor": "corretor",
          "conditions": [
            "ruleLeadPipelineStages"
          ],
          "actions": [
            "set Lead.leadTemperature",
            "set Lead.updatedAt"
          ],
          "rulesApplied": [
            "ruleLeadPipelineStages"
          ]
        },
        {
          "from": "criada",
          "to": "cancelada",
          "trigger": "cancelarSolicitacao",
          "actor": "corretor",
          "conditions": [],
          "actions": [
            "set LeadQualificationRequest.status=cancelada",
            "set LeadQualificationRequest.updatedAt"
          ],
          "rulesApplied": []
        }
      ],
      "requiredEntities": [
        "LeadQualificationRequest",
        "Lead"
      ],
      "persistenceRefs": [
        "leadQualificationRequest"
      ],
      "usecaseRefs": [
        "listarSolicitacoesQualificacaoLead",
        "obterSolicitacaoQualificacaoLead",
        "solicitarQualificacaoLead",
        "atualizarLead"
      ],
      "metricRefs": [],
      "userActions": [
        "solicitarQualificacao",
        "revisarQualificacao",
        "cancelarSolicitacao",
        "aplicarQualificacaoAoLead"
      ],
      "relatedPages": [
        "leadDetails",
        "leadsPipeline"
      ],
      "relatedAgents": [],
      "relatedPlugins": [],
      "rulesApplied": [
        "ruleAiHumanReview",
        "ruleLeadPipelineStages"
      ],
      "implementationSuggestions": [
        {
          "suggestionId": "reviewQueueOptional",
          "title": "Fila opcional de revisão humana",
          "priority": "soon",
          "description": "Quando o score da IA estiver limítrofe, oferecer revisão antes de atualizar o lead.",
          "tradeoff": "Aumenta o tempo de ciclo da qualificação, mas reduz risco de erros."
        },
        {
          "suggestionId": "noTaskAutomation",
          "title": "Automação sem tarefas humanas",
          "priority": "soon",
          "description": "Manter o fluxo totalmente automatizado; notificações simples substituem tarefas formais para corretores revisarem quando necessário.",
          "tradeoff": "Menos controle de SLA, porém reduz sobrecarga operacional."
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
          "entity": "LeadQualificationRequest"
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
          "artifactId": "leadQualificationRequestFlow"
        },
        {
          "moduleId": "propertyFlowCrm",
          "artifactType": "table",
          "artifactId": "leadQualificationRequest"
        },
        {
          "moduleId": "propertyFlowCrm",
          "artifactType": "usecase",
          "artifactId": "listarSolicitacoesQualificacaoLead"
        },
        {
          "moduleId": "propertyFlowCrm",
          "artifactType": "usecase",
          "artifactId": "obterSolicitacaoQualificacaoLead"
        },
        {
          "moduleId": "propertyFlowCrm",
          "artifactType": "usecase",
          "artifactId": "solicitarQualificacaoLead"
        },
        {
          "moduleId": "propertyFlowCrm",
          "artifactType": "usecase",
          "artifactId": "atualizarLead"
        }
      ]
    },
    "defsPlan": {
      "fileName": "workflows/leadQualificationRequestFlow.defs.ts",
      "exportName": "leadQualificationRequestFlowDef",
      "saveAsDefs": true
    }
  }
} as const;

export default leadQualificationRequestFlowDef;
