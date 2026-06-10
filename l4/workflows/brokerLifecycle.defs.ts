/// <mls fileReference="_102045_/l4/workflows/brokerLifecycle.defs.ts" enhancement="_blank"/>

export const brokerLifecycleDef = {
  "schemaVersion": "2026-06-06",
  "artifactType": "workflow",
  "artifactId": "brokerLifecycle",
  "moduleName": "propertyFlowCrm",
  "status": "draft",
  "source": {
    "agentName": "agentPlanWorkflowDefinition",
    "stepId": 25,
    "planId": "plan-validate-solution-coverage"
  },
  "data": {
    "workflowDefinition": {
      "workflowId": "brokerLifecycle",
      "title": "Gestão de Corretores",
      "purpose": "Controlar o ciclo de vida dos corretores na plataforma, desde o cadastro até a desativação.",
      "executionMode": "entityLifecycle",
      "createsTask": false,
      "taskConfig": {
        "taskTitleTemplate": "",
        "assigneeRules": [],
        "slaRules": [],
        "taskRoomRequired": false
      },
      "actors": [
        "admin"
      ],
      "states": [
        {
          "stateId": "active",
          "description": "Corretor ativo e operando normalmente no sistema, podendo receber leads e realizar visitas."
        },
        {
          "stateId": "suspended",
          "description": "Corretor temporariamente suspenso, sem acesso a novas atribuições mas com histórico preservado."
        },
        {
          "stateId": "terminated",
          "description": "Corretor desativado permanentemente, sem acesso ao sistema."
        }
      ],
      "transitions": [
        {
          "from": "_initial",
          "to": "active",
          "trigger": "createBroker",
          "actor": "admin",
          "conditions": [
            "Campos obrigatórios preenchidos (fullName, email, phone, role)"
          ],
          "actions": [
            "Criar registro de Broker com status=active",
            "Definir createdAt e updatedAt"
          ],
          "rulesApplied": [
            "ruleBrokerRequiredFields"
          ]
        },
        {
          "from": "active",
          "to": "active",
          "trigger": "updateBroker",
          "actor": "admin",
          "conditions": [
            "Broker existe e está ativo"
          ],
          "actions": [
            "Atualizar campos permitidos do Broker",
            "Atualizar updatedAt"
          ],
          "rulesApplied": [
            "ruleBrokerRequiredFields"
          ]
        },
        {
          "from": "active",
          "to": "suspended",
          "trigger": "suspendBroker",
          "actor": "admin",
          "conditions": [
            "Broker está ativo"
          ],
          "actions": [
            "Alterar status para suspended",
            "Atualizar updatedAt"
          ],
          "rulesApplied": []
        },
        {
          "from": "suspended",
          "to": "active",
          "trigger": "reactivateBroker",
          "actor": "admin",
          "conditions": [
            "Broker está suspenso"
          ],
          "actions": [
            "Alterar status para active",
            "Atualizar updatedAt"
          ],
          "rulesApplied": []
        },
        {
          "from": "active",
          "to": "terminated",
          "trigger": "deactivateBroker",
          "actor": "admin",
          "conditions": [
            "Broker está ativo"
          ],
          "actions": [
            "Alterar status para terminated",
            "Reatribuir leads e negócios se reassignTo informado",
            "Atualizar updatedAt"
          ],
          "rulesApplied": []
        },
        {
          "from": "suspended",
          "to": "terminated",
          "trigger": "deactivateBroker",
          "actor": "admin",
          "conditions": [
            "Broker está suspenso"
          ],
          "actions": [
            "Alterar status para terminated",
            "Reatribuir leads e negócios se reassignTo informado",
            "Atualizar updatedAt"
          ],
          "rulesApplied": []
        }
      ],
      "requiredEntities": [
        "Broker"
      ],
      "persistenceRefs": [],
      "usecaseRefs": [
        "createBroker",
        "updateBroker",
        "deactivateBroker",
        "listBrokers"
      ],
      "metricRefs": [],
      "userActions": [
        "Cadastrar novo corretor",
        "Editar dados do corretor",
        "Suspender corretor temporariamente",
        "Reativar corretor suspenso",
        "Desativar corretor permanentemente",
        "Listar corretores"
      ],
      "relatedPages": [
        "brokerDetail",
        "brokerForm",
        "brokerList"
      ],
      "relatedAgents": [],
      "relatedPlugins": [],
      "rulesApplied": [
        "ruleBrokerRequiredFields"
      ],
      "implementationSuggestions": [
        {
          "suggestionId": "suggestBrokerDeactivationReview",
          "title": "Exigir confirmação e motivo ao desativar corretor com negócios em aberto",
          "priority": "soon",
          "description": "Ao desativar um corretor que possui leads ou negócios atribuídos, o sistema deve exigir confirmação explícita e permitir reatribuição automática para outro corretor ativo.",
          "tradeoff": "Adiciona complexidade ao fluxo de desativação, mas evita perda de pipeline e garante continuidade dos negócios."
        },
        {
          "suggestionId": "suggestNoTaskCreation",
          "title": "Workflow sem criação de tarefas",
          "priority": "never",
          "description": "Este workflow gerencia o ciclo de vida da entidade Broker diretamente, sem necessidade de tarefas intermediárias. As operações são síncronas e executadas pelo administrador.",
          "tradeoff": "Simplifica o fluxo, mas não permite rastreamento de aprovações ou workflows de múltiplas etapas."
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
          "entity": "Broker"
        }
      ],
      "writesArtifacts": [
        {
          "moduleId": "propertyFlowCrm",
          "artifactType": "usecase",
          "artifactId": "createBroker"
        },
        {
          "moduleId": "propertyFlowCrm",
          "artifactType": "usecase",
          "artifactId": "updateBroker"
        },
        {
          "moduleId": "propertyFlowCrm",
          "artifactType": "usecase",
          "artifactId": "deactivateBroker"
        }
      ]
    },
    "defsPlan": {
      "fileName": "workflows/brokerLifecycle.defs.ts",
      "exportName": "brokerLifecycleDef",
      "saveAsDefs": true
    }
  }
} as const;

export default brokerLifecycleDef;
