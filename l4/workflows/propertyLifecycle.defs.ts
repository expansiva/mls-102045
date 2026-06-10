/// <mls fileReference="_102045_/l4/workflows/propertyLifecycle.defs.ts" enhancement="_blank"/>

export const propertyLifecycleDef = {
  "schemaVersion": "2026-06-06",
  "artifactType": "workflow",
  "artifactId": "propertyLifecycle",
  "moduleName": "propertyFlowCrm",
  "status": "draft",
  "source": {
    "agentName": "agentPlanWorkflowDefinition",
    "stepId": 25,
    "planId": "plan-validate-solution-coverage"
  },
  "data": {
    "workflowDefinition": {
      "workflowId": "propertyLifecycle",
      "title": "Ciclo de Vida do Imóvel",
      "purpose": "Gerenciar os estados de um imóvel desde o rascunho até a publicação, reserva, venda/aluguel ou arquivamento.",
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
          "stateId": "draft",
          "description": "Imóvel em rascunho, ainda não publicado. Permite edição completa e geração de descrição com IA."
        },
        {
          "stateId": "published",
          "description": "Imóvel publicado e disponível para visualização, agendamento de visitas e propostas."
        },
        {
          "stateId": "reserved",
          "description": "Imóvel reservado temporariamente durante negociação avançada."
        },
        {
          "stateId": "sold",
          "description": "Imóvel vendido. Estado terminal, não permite retorno a estados anteriores."
        },
        {
          "stateId": "rented",
          "description": "Imóvel alugado. Estado terminal, não permite retorno a estados anteriores."
        },
        {
          "stateId": "archived",
          "description": "Imóvel arquivado/inativo. Pode ser reativado para publicação."
        }
      ],
      "transitions": [
        {
          "from": "draft",
          "to": "published",
          "trigger": "publishProperty",
          "actor": "broker",
          "conditions": [
            "Todos os campos obrigatórios preenchidos (rulePropertyRequiredFields)"
          ],
          "actions": [
            "Atualizar status para published",
            "Registrar data de publicação"
          ],
          "rulesApplied": [
            "rulePropertyRequiredFields",
            "rulePropertyStatusTransition"
          ]
        },
        {
          "from": "published",
          "to": "reserved",
          "trigger": "reserveProperty",
          "actor": "broker",
          "conditions": [
            "Imóvel está publicado"
          ],
          "actions": [
            "Atualizar status para reserved",
            "Registrar motivo da reserva"
          ],
          "rulesApplied": [
            "rulePropertyStatusTransition"
          ]
        },
        {
          "from": "published",
          "to": "sold",
          "trigger": "markAsSold",
          "actor": "broker",
          "conditions": [
            "Imóvel está publicado ou reservado"
          ],
          "actions": [
            "Atualizar status para sold",
            "Registrar data de venda"
          ],
          "rulesApplied": [
            "rulePropertyStatusTransition"
          ]
        },
        {
          "from": "published",
          "to": "rented",
          "trigger": "markAsRented",
          "actor": "broker",
          "conditions": [
            "Imóvel está publicado ou reservado"
          ],
          "actions": [
            "Atualizar status para rented",
            "Registrar data de locação"
          ],
          "rulesApplied": [
            "rulePropertyStatusTransition"
          ]
        },
        {
          "from": "published",
          "to": "archived",
          "trigger": "archiveProperty",
          "actor": "broker",
          "conditions": [
            "Imóvel está publicado"
          ],
          "actions": [
            "Atualizar status para archived"
          ],
          "rulesApplied": [
            "rulePropertyStatusTransition"
          ]
        },
        {
          "from": "reserved",
          "to": "published",
          "trigger": "releaseReservation",
          "actor": "broker",
          "conditions": [
            "Imóvel está reservado"
          ],
          "actions": [
            "Atualizar status para published",
            "Limpar dados de reserva"
          ],
          "rulesApplied": [
            "rulePropertyStatusTransition"
          ]
        },
        {
          "from": "reserved",
          "to": "sold",
          "trigger": "markAsSold",
          "actor": "broker",
          "conditions": [
            "Imóvel está reservado"
          ],
          "actions": [
            "Atualizar status para sold",
            "Registrar data de venda"
          ],
          "rulesApplied": [
            "rulePropertyStatusTransition"
          ]
        },
        {
          "from": "reserved",
          "to": "rented",
          "trigger": "markAsRented",
          "actor": "broker",
          "conditions": [
            "Imóvel está reservado"
          ],
          "actions": [
            "Atualizar status para rented",
            "Registrar data de locação"
          ],
          "rulesApplied": [
            "rulePropertyStatusTransition"
          ]
        },
        {
          "from": "archived",
          "to": "draft",
          "trigger": "reactivateAsDraft",
          "actor": "broker",
          "conditions": [
            "Imóvel está arquivado"
          ],
          "actions": [
            "Atualizar status para draft"
          ],
          "rulesApplied": [
            "rulePropertyStatusTransition"
          ]
        },
        {
          "from": "archived",
          "to": "published",
          "trigger": "republishProperty",
          "actor": "broker",
          "conditions": [
            "Imóvel está arquivado",
            "Todos os campos obrigatórios preenchidos"
          ],
          "actions": [
            "Atualizar status para published",
            "Registrar data de republicação"
          ],
          "rulesApplied": [
            "rulePropertyRequiredFields",
            "rulePropertyStatusTransition"
          ]
        }
      ],
      "requiredEntities": [
        "Property"
      ],
      "persistenceRefs": [],
      "usecaseRefs": [
        "createProperty",
        "updateProperty",
        "changePropertyStatus",
        "listProperties",
        "getPropertyDetail"
      ],
      "metricRefs": [],
      "userActions": [
        "publishProperty",
        "reserveProperty",
        "markAsSold",
        "markAsRented",
        "archiveProperty",
        "releaseReservation",
        "reactivateAsDraft",
        "republishProperty"
      ],
      "relatedPages": [
        "dealForm",
        "propertyDetail",
        "propertyForm",
        "propertyList",
        "visitForm"
      ],
      "relatedAgents": [],
      "relatedPlugins": [],
      "rulesApplied": [
        "rulePropertyRequiredFields",
        "rulePropertyStatusTransition"
      ],
      "implementationSuggestions": [
        {
          "suggestionId": "suggestPropertyAiDescription",
          "title": "Oferecer geração de descrição com IA no cadastro em modo rascunho",
          "priority": "now",
          "description": "Integrar a capability generatePropertyDescription no estado draft para permitir que o corretor gere descrições comerciais profissionais automaticamente a partir de bullets ou características do imóvel.",
          "tradeoff": "Requer integração com serviço de IA, mas acelera significativamente o tempo de publicação e melhora a qualidade dos anúncios."
        },
        {
          "suggestionId": "noTaskCreation",
          "title": "Workflow sem criação de tarefas",
          "priority": "never",
          "description": "Este workflow é um ciclo de vida de entidade (entityLifecycle) onde o corretor controla diretamente as transições de estado do imóvel. Não há necessidade de tarefas pois as ações são imediatas e não requerem acompanhamento assíncrono.",
          "tradeoff": "Simplicidade operacional vs. rastreabilidade de ações pendentes. Para cenários que exijam aprovação ou revisão, considerar workflow separado."
        },
        {
          "suggestionId": "suggestStatusHistory",
          "title": "Implementar histórico de transições de status",
          "priority": "soon",
          "description": "Criar tabela de histórico para registrar todas as transições de status do imóvel com timestamp, usuário e motivo.",
          "tradeoff": "Adiciona complexidade de persistência, mas fornece auditoria completa e permite análises de tempo médio em cada estado."
        }
      ],
      "workflowScope": "singleModule",
      "moduleRefs": [
        "propertyFlowCrm"
      ],
      "pageRefsByModule": [
        {
          "moduleId": "propertyFlowCrm",
          "pageId": "propertyList"
        },
        {
          "moduleId": "propertyFlowCrm",
          "pageId": "propertyDetail"
        },
        {
          "moduleId": "propertyFlowCrm",
          "pageId": "propertyForm"
        }
      ],
      "entityRefsByModule": [
        {
          "moduleId": "propertyFlowCrm",
          "entity": "Property"
        }
      ],
      "writesArtifacts": [
        {
          "moduleId": "propertyFlowCrm",
          "artifactType": "usecase",
          "artifactId": "changePropertyStatus"
        }
      ]
    },
    "defsPlan": {
      "fileName": "workflows/propertyLifecycle.defs.ts",
      "exportName": "propertyLifecycleDef",
      "saveAsDefs": true
    }
  }
} as const;

export default propertyLifecycleDef;
