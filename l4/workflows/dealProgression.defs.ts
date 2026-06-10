/// <mls fileReference="_102045_/l4/workflows/dealProgression.defs.ts" enhancement="_blank"/>

export const dealProgressionDef = {
  "schemaVersion": "2026-06-06",
  "artifactType": "workflow",
  "artifactId": "dealProgression",
  "moduleName": "propertyFlowCrm",
  "status": "draft",
  "source": {
    "agentName": "agentPlanWorkflowDefinition",
    "stepId": 25,
    "planId": "plan-validate-solution-coverage"
  },
  "data": {
    "workflowDefinition": {
      "workflowId": "dealProgression",
      "title": "Progressão de Negócio",
      "purpose": "Acompanhar o ciclo completo de uma proposta imobiliária, desde a criação até o fechamento ganho ou perdido, respeitando as etapas do pipeline.",
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
          "stateId": "proposal",
          "description": "Negócio criado com proposta inicial do cliente aguardando análise e início de negociação."
        },
        {
          "stateId": "negotiation",
          "description": "Negociação ativa entre corretor e cliente para ajuste de valores e condições."
        },
        {
          "stateId": "documentation",
          "description": "Termos acordados, aguardando coleta e validação de documentação necessária."
        },
        {
          "stateId": "closing",
          "description": "Documentação completa, em processo de assinatura e formalização do contrato."
        },
        {
          "stateId": "won",
          "description": "Negócio concluído com sucesso, contrato assinado e transação finalizada."
        },
        {
          "stateId": "lost",
          "description": "Negócio encerrado sem sucesso, com registro do motivo da perda."
        }
      ],
      "transitions": [
        {
          "from": "_initial",
          "to": "proposal",
          "trigger": "createDeal",
          "actor": "broker",
          "conditions": [
            "Lead e imóvel devem existir",
            "Imóvel deve estar com status ativo ou reservado",
            "Campos obrigatórios preenchidos (leadId, propertyId, brokerId, dealType, proposedValue)"
          ],
          "actions": [
            "Criar registro Deal com pipelineStage=proposal e status=open",
            "Registrar evento em dealPipelineMetrics",
            "Registrar evento em crmActivityMetrics"
          ],
          "rulesApplied": [
            "ruleDealRequiredFields",
            "ruleDealPropertyActive"
          ]
        },
        {
          "from": "proposal",
          "to": "negotiation",
          "trigger": "advanceDealStage",
          "actor": "broker",
          "conditions": [
            "Negócio deve estar em status open",
            "pipelineStage atual deve ser proposal"
          ],
          "actions": [
            "Atualizar Deal.pipelineStage para negotiation",
            "Atualizar Deal.updatedAt",
            "Registrar evento em dealPipelineMetrics"
          ],
          "rulesApplied": [
            "ruleDealPipelineTransition"
          ]
        },
        {
          "from": "negotiation",
          "to": "documentation",
          "trigger": "advanceDealStage",
          "actor": "broker",
          "conditions": [
            "Negócio deve estar em status open",
            "pipelineStage atual deve ser negotiation"
          ],
          "actions": [
            "Atualizar Deal.pipelineStage para documentation",
            "Atualizar Deal.updatedAt",
            "Registrar evento em dealPipelineMetrics"
          ],
          "rulesApplied": [
            "ruleDealPipelineTransition"
          ]
        },
        {
          "from": "documentation",
          "to": "closing",
          "trigger": "advanceDealStage",
          "actor": "broker",
          "conditions": [
            "Negócio deve estar em status open",
            "pipelineStage atual deve ser documentation"
          ],
          "actions": [
            "Atualizar Deal.pipelineStage para closing",
            "Atualizar Deal.updatedAt",
            "Registrar evento em dealPipelineMetrics"
          ],
          "rulesApplied": [
            "ruleDealPipelineTransition"
          ]
        },
        {
          "from": "closing",
          "to": "won",
          "trigger": "closeDealWon",
          "actor": "broker",
          "conditions": [
            "Negócio deve estar em status open",
            "pipelineStage atual deve ser closing",
            "Valor final e data de fechamento devem ser informados"
          ],
          "actions": [
            "Atualizar Deal.pipelineStage para won",
            "Atualizar Deal.status para closed",
            "Definir Deal.acceptedValue com valor final",
            "Definir Deal.actualCloseDate",
            "Atualizar status do Property relacionado",
            "Registrar evento em dealPipelineMetrics com wonValue",
            "Registrar evento em crmActivityMetrics"
          ],
          "rulesApplied": [
            "ruleDealPipelineTransition"
          ]
        },
        {
          "from": "proposal",
          "to": "lost",
          "trigger": "closeDealLost",
          "actor": "broker",
          "conditions": [
            "Negócio deve estar em status open",
            "Motivo da perda deve ser informado"
          ],
          "actions": [
            "Atualizar Deal.pipelineStage para lost",
            "Atualizar Deal.status para closed",
            "Definir Deal.lossReason",
            "Definir Deal.actualCloseDate",
            "Registrar evento em dealPipelineMetrics com lostValue"
          ],
          "rulesApplied": [
            "ruleDealPipelineTransition"
          ]
        },
        {
          "from": "negotiation",
          "to": "lost",
          "trigger": "closeDealLost",
          "actor": "broker",
          "conditions": [
            "Negócio deve estar em status open",
            "Motivo da perda deve ser informado"
          ],
          "actions": [
            "Atualizar Deal.pipelineStage para lost",
            "Atualizar Deal.status para closed",
            "Definir Deal.lossReason",
            "Definir Deal.actualCloseDate",
            "Registrar evento em dealPipelineMetrics com lostValue"
          ],
          "rulesApplied": [
            "ruleDealPipelineTransition"
          ]
        },
        {
          "from": "documentation",
          "to": "lost",
          "trigger": "closeDealLost",
          "actor": "broker",
          "conditions": [
            "Negócio deve estar em status open",
            "Motivo da perda deve ser informado"
          ],
          "actions": [
            "Atualizar Deal.pipelineStage para lost",
            "Atualizar Deal.status para closed",
            "Definir Deal.lossReason",
            "Definir Deal.actualCloseDate",
            "Registrar evento em dealPipelineMetrics com lostValue"
          ],
          "rulesApplied": [
            "ruleDealPipelineTransition"
          ]
        },
        {
          "from": "closing",
          "to": "lost",
          "trigger": "closeDealLost",
          "actor": "broker",
          "conditions": [
            "Negócio deve estar em status open",
            "Motivo da perda deve ser informado"
          ],
          "actions": [
            "Atualizar Deal.pipelineStage para lost",
            "Atualizar Deal.status para closed",
            "Definir Deal.lossReason",
            "Definir Deal.actualCloseDate",
            "Registrar evento em dealPipelineMetrics com lostValue"
          ],
          "rulesApplied": [
            "ruleDealPipelineTransition"
          ]
        }
      ],
      "requiredEntities": [
        "Deal"
      ],
      "persistenceRefs": [
        "dealTable",
        "dealPipelineMetrics",
        "crmActivityMetrics"
      ],
      "usecaseRefs": [
        "createDeal",
        "advanceDealStage",
        "closeDealWon",
        "closeDealLost",
        "listDeals"
      ],
      "metricRefs": [
        "dealPipelineMetrics",
        "crmActivityMetrics"
      ],
      "userActions": [
        "Criar novo negócio/proposta",
        "Avançar negócio para próxima etapa",
        "Fechar negócio como ganho",
        "Fechar negócio como perdido",
        "Visualizar pipeline de negócios"
      ],
      "relatedPages": [
        "brokerDashboard",
        "dealDetail",
        "dealForm",
        "dealList",
        "dealsTrackerPage"
      ],
      "relatedAgents": [],
      "relatedPlugins": [],
      "rulesApplied": [
        "ruleDealRequiredFields",
        "ruleDealPipelineTransition",
        "ruleDealPropertyActive"
      ],
      "implementationSuggestions": [
        {
          "suggestionId": "suggestDealDocumentationChecklist",
          "title": "Exibir checklist de documentação na etapa 'documentation'",
          "priority": "soon",
          "description": "Implementar um checklist visual na página de tracker quando o negócio estiver na etapa de documentação, listando todos os documentos necessários para o fechamento (RG, CPF, comprovante de renda, matrícula do imóvel, etc.).",
          "tradeoff": "Requer definição prévia dos tipos de documentos por tipo de negócio (venda vs locação) e possível integração futura com upload de arquivos."
        },
        {
          "suggestionId": "suggestNoTaskCreation",
          "title": "Workflow sem criação automática de tarefas",
          "priority": "later",
          "description": "Este workflow opera como ciclo de vida da entidade Deal sem criar tarefas automáticas. O corretor gerencia a progressão diretamente pelo tracker/kanban. Caso seja necessário criar lembretes ou follow-ups, considerar integração futura com sistema de tarefas.",
          "tradeoff": "Simplicidade atual vs possível necessidade de lembretes automáticos para negócios parados em determinada etapa por muito tempo."
        },
        {
          "suggestionId": "suggestDealSlaAlerts",
          "title": "Alertas de SLA para negócios estagnados",
          "priority": "soon",
          "description": "Implementar alertas visuais no dashboard quando negócios permanecerem na mesma etapa por mais de X dias configuráveis, ajudando o corretor a identificar oportunidades em risco.",
          "tradeoff": "Requer definição de thresholds por etapa e implementação de job de verificação periódica ou cálculo em tempo de consulta."
        },
        {
          "suggestionId": "suggestDealValueNegotiation",
          "title": "Histórico de valores negociados",
          "priority": "later",
          "description": "Registrar histórico de alterações de valor proposto durante a negociação para análise de margem e padrões de desconto.",
          "tradeoff": "Aumenta complexidade do modelo de dados e requer campo adicional ou tabela de histórico."
        }
      ],
      "workflowScope": "singleModule",
      "moduleRefs": [
        "propertyFlowCrm"
      ],
      "pageRefsByModule": [
        {
          "moduleId": "propertyFlowCrm",
          "pageId": "dealsTrackerPage"
        }
      ],
      "entityRefsByModule": [
        {
          "moduleId": "propertyFlowCrm",
          "entity": "Deal"
        }
      ],
      "writesArtifacts": [
        {
          "moduleId": "propertyFlowCrm",
          "artifactType": "table",
          "artifactId": "dealTable"
        },
        {
          "moduleId": "propertyFlowCrm",
          "artifactType": "metricTable",
          "artifactId": "dealPipelineMetrics"
        },
        {
          "moduleId": "propertyFlowCrm",
          "artifactType": "metricTable",
          "artifactId": "crmActivityMetrics"
        },
        {
          "moduleId": "propertyFlowCrm",
          "artifactType": "usecase",
          "artifactId": "createDeal"
        },
        {
          "moduleId": "propertyFlowCrm",
          "artifactType": "usecase",
          "artifactId": "advanceDealStage"
        },
        {
          "moduleId": "propertyFlowCrm",
          "artifactType": "usecase",
          "artifactId": "closeDealWon"
        },
        {
          "moduleId": "propertyFlowCrm",
          "artifactType": "usecase",
          "artifactId": "closeDealLost"
        }
      ]
    },
    "defsPlan": {
      "fileName": "workflows/dealProgression.defs.ts",
      "exportName": "dealProgressionDef",
      "saveAsDefs": true
    }
  }
} as const;

export default dealProgressionDef;
