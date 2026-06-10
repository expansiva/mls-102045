/// <mls fileReference="_102045_/l4/workflows/leadQualification.defs.ts" enhancement="_blank"/>

export const leadQualificationDef = {
  "schemaVersion": "2026-06-06",
  "artifactType": "workflow",
  "artifactId": "leadQualification",
  "moduleName": "propertyFlowCrm",
  "status": "draft",
  "source": {
    "agentName": "agentPlanWorkflowDefinition",
    "stepId": 25,
    "planId": "plan-validate-solution-coverage"
  },
  "data": {
    "workflowDefinition": {
      "workflowId": "leadQualification",
      "title": "Qualificação de Lead",
      "purpose": "Gerenciar o pipeline de leads desde o cadastro até a conversão ou perda, incluindo interações, classificação de temperatura e sugestões de follow-up.",
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
          "stateId": "new",
          "description": "Lead recém-cadastrado aguardando primeiro contato do corretor."
        },
        {
          "stateId": "contacted",
          "description": "Lead já foi contatado pelo corretor e aguarda qualificação."
        },
        {
          "stateId": "qualified",
          "description": "Lead qualificado com interesse confirmado e perfil validado."
        },
        {
          "stateId": "negotiating",
          "description": "Lead em negociação ativa com proposta ou visita em andamento."
        },
        {
          "stateId": "converted",
          "description": "Lead convertido em cliente com negócio fechado."
        },
        {
          "stateId": "lost",
          "description": "Lead perdido por desistência, falta de interesse ou outro motivo."
        }
      ],
      "transitions": [
        {
          "from": "new",
          "to": "contacted",
          "trigger": "moveToContacted",
          "actor": "broker",
          "conditions": [
            "Lead deve ter telefone ou e-mail válido"
          ],
          "actions": [
            "Atualizar Lead.pipelineStage para 'contacted'",
            "Atualizar Lead.lastContactAt",
            "Registrar evento em leadMetrics",
            "Registrar evento em crmActivityMetrics"
          ],
          "rulesApplied": [
            "ruleLeadPipelineTransition",
            "ruleBrokerAssignment"
          ]
        },
        {
          "from": "contacted",
          "to": "qualified",
          "trigger": "moveToQualified",
          "actor": "broker",
          "conditions": [
            "Lead deve ter pelo menos uma interação registrada",
            "Lead deve ter interesse e orçamento definidos"
          ],
          "actions": [
            "Atualizar Lead.pipelineStage para 'qualified'",
            "Classificar Lead.temperature via IA",
            "Gerar Lead.suggestedFollowUpMessage via IA",
            "Registrar evento em leadMetrics com qualified_count=1",
            "Registrar evento em crmActivityMetrics"
          ],
          "rulesApplied": [
            "ruleLeadPipelineTransition",
            "ruleLeadRequiredFields"
          ]
        },
        {
          "from": "qualified",
          "to": "negotiating",
          "trigger": "moveToNegotiating",
          "actor": "broker",
          "conditions": [
            "Lead deve estar qualificado"
          ],
          "actions": [
            "Atualizar Lead.pipelineStage para 'negotiating'",
            "Registrar evento em leadMetrics",
            "Registrar evento em crmActivityMetrics"
          ],
          "rulesApplied": [
            "ruleLeadPipelineTransition"
          ]
        },
        {
          "from": "negotiating",
          "to": "converted",
          "trigger": "convertLead",
          "actor": "broker",
          "conditions": [
            "Lead deve ter negócio associado fechado"
          ],
          "actions": [
            "Atualizar Lead.pipelineStage para 'converted'",
            "Registrar evento em leadMetrics com converted_count=1",
            "Registrar evento em crmActivityMetrics"
          ],
          "rulesApplied": [
            "ruleLeadPipelineTransition"
          ]
        },
        {
          "from": "negotiating",
          "to": "lost",
          "trigger": "loseLead",
          "actor": "broker",
          "conditions": [],
          "actions": [
            "Atualizar Lead.pipelineStage para 'lost'",
            "Registrar motivo da perda em Lead.notes",
            "Registrar evento em leadMetrics",
            "Registrar evento em crmActivityMetrics"
          ],
          "rulesApplied": [
            "ruleLeadPipelineTransition"
          ]
        },
        {
          "from": "qualified",
          "to": "lost",
          "trigger": "loseLead",
          "actor": "broker",
          "conditions": [],
          "actions": [
            "Atualizar Lead.pipelineStage para 'lost'",
            "Registrar motivo da perda em Lead.notes",
            "Registrar evento em leadMetrics",
            "Registrar evento em crmActivityMetrics"
          ],
          "rulesApplied": [
            "ruleLeadPipelineTransition"
          ]
        },
        {
          "from": "contacted",
          "to": "lost",
          "trigger": "loseLead",
          "actor": "broker",
          "conditions": [],
          "actions": [
            "Atualizar Lead.pipelineStage para 'lost'",
            "Registrar motivo da perda em Lead.notes",
            "Registrar evento em leadMetrics",
            "Registrar evento em crmActivityMetrics"
          ],
          "rulesApplied": [
            "ruleLeadPipelineTransition"
          ]
        },
        {
          "from": "*",
          "to": "*",
          "trigger": "registerInteraction",
          "actor": "broker",
          "conditions": [
            "Lead deve existir e estar ativo"
          ],
          "actions": [
            "Criar registro em LeadInteraction",
            "Atualizar Lead.lastContactAt",
            "Registrar evento em crmActivityMetrics"
          ],
          "rulesApplied": [
            "ruleInteractionRequiredFields",
            "ruleBrokerAssignment"
          ]
        }
      ],
      "requiredEntities": [
        "Lead",
        "LeadInteraction"
      ],
      "persistenceRefs": [
        "leadInteractionTable",
        "leadMetrics",
        "crmActivityMetrics"
      ],
      "usecaseRefs": [
        "createLead",
        "updateLead",
        "moveLeadStage",
        "registerInteraction",
        "listLeadInteractions"
      ],
      "metricRefs": [
        "leadMetrics",
        "crmActivityMetrics"
      ],
      "userActions": [
        "Cadastrar novo lead",
        "Mover lead de etapa no pipeline",
        "Registrar interação com lead",
        "Visualizar histórico de interações",
        "Classificar temperatura do lead",
        "Gerar sugestão de follow-up"
      ],
      "relatedPages": [
        "interactionForm",
        "leadDetail",
        "leadDetailPage",
        "leadForm",
        "leadList",
        "leadPipelinePage"
      ],
      "relatedAgents": [
        "leadClassificationAgent",
        "followUpSuggestionAgent"
      ],
      "relatedPlugins": [],
      "rulesApplied": [
        "ruleLeadRequiredFields",
        "ruleLeadPipelineTransition",
        "ruleBrokerAssignment"
      ],
      "implementationSuggestions": [
        {
          "suggestionId": "suggestLeadAiClassification",
          "title": "Integrar classificação de temperatura via IA na transição de etapas",
          "priority": "now",
          "description": "Ao mover um lead para 'qualified', invocar automaticamente o agente de classificação de temperatura para definir Lead.temperature como quente, morno ou frio com base no histórico de interações e dados do lead.",
          "tradeoff": "Requer integração com agente de IA e pode adicionar latência na transição de etapa."
        },
        {
          "suggestionId": "suggestLeadFollowUpTask",
          "title": "Criar tarefa automática de follow-up ao mover lead para 'contacted'",
          "priority": "soon",
          "description": "Embora o workflow não crie tarefas formais (createsTask=false), considerar criar uma notificação ou lembrete interno para o corretor realizar follow-up dentro de 24-48h após o primeiro contato.",
          "tradeoff": "Adiciona complexidade ao fluxo mas garante que nenhum lead fique sem retorno."
        },
        {
          "suggestionId": "suggestLeadReactivation",
          "title": "Permitir reativação de leads perdidos",
          "priority": "later",
          "description": "Adicionar transição de 'lost' para 'contacted' para casos onde o lead retorna interesse após período de inatividade.",
          "tradeoff": "Aumenta complexidade do pipeline mas permite recuperar oportunidades perdidas."
        },
        {
          "suggestionId": "noTaskCreation",
          "title": "Workflow sem criação de tarefas formais",
          "priority": "never",
          "description": "Este workflow opera como ciclo de vida de entidade (entityLifecycle) sem criar tarefas no sistema de tarefas. O corretor gerencia leads diretamente pelo pipeline visual sem necessidade de tarefas separadas.",
          "tradeoff": "Simplifica o fluxo mas pode dificultar rastreamento de SLAs e responsabilidades em equipes maiores."
        }
      ],
      "workflowScope": "singleModule",
      "moduleRefs": [
        "propertyFlowCrm"
      ],
      "pageRefsByModule": [
        {
          "moduleId": "propertyFlowCrm",
          "pageId": "leadPipelinePage"
        },
        {
          "moduleId": "propertyFlowCrm",
          "pageId": "leadDetailPage"
        }
      ],
      "entityRefsByModule": [
        {
          "moduleId": "propertyFlowCrm",
          "entity": "Lead"
        },
        {
          "moduleId": "propertyFlowCrm",
          "entity": "LeadInteraction"
        }
      ],
      "writesArtifacts": [
        {
          "moduleId": "propertyFlowCrm",
          "artifactType": "table",
          "artifactId": "leadInteractionTable"
        },
        {
          "moduleId": "propertyFlowCrm",
          "artifactType": "metricTable",
          "artifactId": "leadMetrics"
        },
        {
          "moduleId": "propertyFlowCrm",
          "artifactType": "metricTable",
          "artifactId": "crmActivityMetrics"
        },
        {
          "moduleId": "propertyFlowCrm",
          "artifactType": "usecase",
          "artifactId": "createLead"
        },
        {
          "moduleId": "propertyFlowCrm",
          "artifactType": "usecase",
          "artifactId": "updateLead"
        },
        {
          "moduleId": "propertyFlowCrm",
          "artifactType": "usecase",
          "artifactId": "moveLeadStage"
        },
        {
          "moduleId": "propertyFlowCrm",
          "artifactType": "usecase",
          "artifactId": "registerInteraction"
        },
        {
          "moduleId": "propertyFlowCrm",
          "artifactType": "usecase",
          "artifactId": "listLeadInteractions"
        }
      ]
    },
    "defsPlan": {
      "fileName": "workflows/leadQualification.defs.ts",
      "exportName": "leadQualificationDef",
      "saveAsDefs": true
    }
  }
} as const;

export default leadQualificationDef;
