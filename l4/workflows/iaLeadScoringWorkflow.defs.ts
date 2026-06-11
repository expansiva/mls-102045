/// <mls fileReference="_102045_/l4/workflows/iaLeadScoringWorkflow.defs.ts" enhancement="_blank"/>

export const iaLeadScoringWorkflowDef = {
  "schemaVersion": "2026-06-06",
  "artifactType": "workflow",
  "artifactId": "iaLeadScoringWorkflow",
  "moduleName": "propertyFlowCrm",
  "status": "draft",
  "source": {
    "agentName": "agentPlanWorkflowDefinition",
    "stepId": 54,
    "planId": ""
  },
  "data": {
    "workflowDefinition": {
      "workflowId": "iaLeadScoringWorkflow",
      "title": "Classificação de Lead com IA",
      "purpose": "Orquestrar a qualificação automática de leads através do plugin de LLM, registrando score e justificativa para apoio ao corretor.",
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
          "stateId": "pendingClassification",
          "description": "Lead aguardando classificação por IA."
        },
        {
          "stateId": "classified",
          "description": "Lead classificado com score e sugestão de follow-up."
        },
        {
          "stateId": "classificationFailed",
          "description": "Falha na classificação do lead por IA."
        }
      ],
      "transitions": [
        {
          "from": "pendingClassification",
          "to": "classified",
          "trigger": "iaScoringCompleted",
          "actor": "corretor",
          "conditions": [],
          "actions": [
            "set Lead.qualificacao",
            "set Lead.sugestaoFollowUp",
            "set Lead.atualizadoEm"
          ],
          "rulesApplied": []
        },
        {
          "from": "pendingClassification",
          "to": "classificationFailed",
          "trigger": "iaScoringFailed",
          "actor": "corretor",
          "conditions": [],
          "actions": [
            "set Lead.atualizadoEm"
          ],
          "rulesApplied": []
        }
      ],
      "requiredEntities": [
        "Lead"
      ],
      "persistenceRefs": [],
      "usecaseRefs": [
        "classificarLeadIa"
      ],
      "metricRefs": [],
      "userActions": [
        "solicitarClassificacaoLeadIa",
        "reprocessarClassificacaoLeadIa"
      ],
      "relatedPages": [],
      "relatedAgents": [],
      "relatedPlugins": [],
      "rulesApplied": [],
      "implementationSuggestions": [
        {
          "suggestionId": "backgroundScoring",
          "title": "Processar classificação em background",
          "priority": "soon",
          "description": "Executar a classificação em processamento assíncrono para não bloquear a operação do corretor.",
          "tradeoff": "Maior complexidade operacional com filas e monitoramento."
        },
        {
          "suggestionId": "historicoScore",
          "title": "Registrar score e justificativa no histórico do lead",
          "priority": "soon",
          "description": "Persistir evidências da classificação para auditoria e melhoria do modelo.",
          "tradeoff": "Aumenta volume de armazenamento e necessidade de governança."
        },
        {
          "suggestionId": "noTaskAutomation",
          "title": "Não criar tarefa para classificação automática",
          "priority": "soon",
          "description": "Manter o fluxo totalmente automatizado sem gerar tarefas, deixando o corretor apenas como consumidor do resultado.",
          "tradeoff": "Menor visibilidade operacional se ocorrerem falhas sem alertas dedicados."
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
          "artifactId": "iaLeadScoringWorkflow"
        }
      ]
    },
    "defsPlan": {
      "fileName": "workflows/iaLeadScoringWorkflow.defs.ts",
      "exportName": "iaLeadScoringWorkflowDef",
      "saveAsDefs": true
    }
  }
} as const;

export default iaLeadScoringWorkflowDef;
