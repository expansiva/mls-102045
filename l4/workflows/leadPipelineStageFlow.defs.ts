/// <mls fileReference="_102045_/l4/workflows/leadPipelineStageFlow.defs.ts" enhancement="_blank"/>

export const leadPipelineStageFlowDef = {
  "schemaVersion": "2026-06-06",
  "artifactType": "workflow",
  "artifactId": "leadPipelineStageFlow",
  "moduleName": "propertyFlowCrm",
  "status": "draft",
  "source": {
    "agentName": "agentPlanWorkflowDefinition",
    "stepId": 29,
    "planId": "plan-validate-solution-coverage"
  },
  "data": {
    "workflowDefinition": {
      "workflowId": "leadPipelineStageFlow",
      "title": "Pipeline de Leads",
      "purpose": "Registrar e controlar mudanças de etapa dos leads ao longo do funil.",
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
          "stateId": "pipelineView",
          "description": "Leads visíveis no pipeline atual."
        },
        {
          "stateId": "stageChangeRequested",
          "description": "Mudança de etapa solicitada pelo corretor."
        },
        {
          "stateId": "stageChanged",
          "description": "Lead movido para nova etapa e mudança registrada."
        },
        {
          "stateId": "changeHistoryViewed",
          "description": "Histórico de mudanças consultado."
        }
      ],
      "transitions": [
        {
          "from": "pipelineView",
          "to": "stageChangeRequested",
          "trigger": "solicitarMudancaEtapa",
          "actor": "corretor",
          "conditions": [
            "ruleLeadPipelineStages"
          ],
          "actions": [
            "definirLeadStageChange.leadId",
            "definirLeadStageChange.fromStage",
            "definirLeadStageChange.toStage",
            "definirLeadStageChange.changedByBrokerId",
            "definirLeadStageChange.changedAt",
            "definirLeadStageChange.note"
          ],
          "rulesApplied": [
            "ruleLeadPipelineStages"
          ]
        },
        {
          "from": "stageChangeRequested",
          "to": "stageChanged",
          "trigger": "confirmarMudancaEtapa",
          "actor": "corretor",
          "conditions": [
            "ruleLeadPipelineStages"
          ],
          "actions": [
            "atualizarLead.leadStatus",
            "registrarLeadStageChange.leadStageChangeId",
            "registrarLeadStageChange.createdAt",
            "registrarLeadStageChange.updatedAt"
          ],
          "rulesApplied": [
            "ruleLeadPipelineStages"
          ]
        },
        {
          "from": "pipelineView",
          "to": "changeHistoryViewed",
          "trigger": "listarMudancasEtapa",
          "actor": "corretor",
          "conditions": [],
          "actions": [],
          "rulesApplied": [
            "ruleLeadPipelineStages"
          ]
        },
        {
          "from": "changeHistoryViewed",
          "to": "pipelineView",
          "trigger": "retornarPipeline",
          "actor": "corretor",
          "conditions": [],
          "actions": [],
          "rulesApplied": [
            "ruleLeadPipelineStages"
          ]
        },
        {
          "from": "changeHistoryViewed",
          "to": "changeHistoryViewed",
          "trigger": "obterDetalheMudancaEtapa",
          "actor": "corretor",
          "conditions": [],
          "actions": [],
          "rulesApplied": [
            "ruleLeadPipelineStages"
          ]
        }
      ],
      "requiredEntities": [
        "Lead",
        "LeadStageChange"
      ],
      "persistenceRefs": [
        "leadStageChange"
      ],
      "usecaseRefs": [
        "listarMudancasEtapaLead",
        "obterMudancaEtapaLead",
        "moverEtapaLead",
        "atualizarLead"
      ],
      "metricRefs": [],
      "userActions": [
        "solicitarMudancaEtapa",
        "confirmarMudancaEtapa",
        "listarMudancasEtapa",
        "obterDetalheMudancaEtapa",
        "retornarPipeline"
      ],
      "relatedPages": [
        "leadDetails",
        "leadsPipeline"
      ],
      "relatedAgents": [],
      "relatedPlugins": [],
      "rulesApplied": [
        "ruleLeadPipelineStages"
      ],
      "implementationSuggestions": [
        {
          "suggestionId": "stageReasonCapture",
          "title": "Capturar motivo de perda",
          "priority": "soon",
          "description": "Adicionar captura de motivo quando a etapa for perdida, armazenando em LeadStageChange.note e mantendo o histórico para análises futuras.",
          "tradeoff": "Exige atualização de formulário e validações extras, aumentando o esforço de UI e backend."
        },
        {
          "suggestionId": "noTaskAutomation",
          "title": "Sem tarefas automatizadas",
          "priority": "later",
          "description": "Manter o fluxo sem criação de tarefas; notificações podem ser implementadas futuramente via dashboards em vez de tarefas dedicadas.",
          "tradeoff": "Reduz rastreabilidade operacional imediata, mas evita sobrecarga de tarefas."
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
          "entity": "LeadStageChange"
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
          "artifactId": "leadPipelineStageFlow"
        }
      ]
    },
    "defsPlan": {
      "fileName": "workflows/leadPipelineStageFlow.defs.ts",
      "exportName": "leadPipelineStageFlowDef",
      "saveAsDefs": true
    }
  }
} as const;

export default leadPipelineStageFlowDef;
