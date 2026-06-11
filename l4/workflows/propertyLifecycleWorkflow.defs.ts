/// <mls fileReference="_102045_/l4/workflows/propertyLifecycleWorkflow.defs.ts" enhancement="_blank"/>

export const propertyLifecycleWorkflowDef = {
  "schemaVersion": "2026-06-06",
  "artifactType": "workflow",
  "artifactId": "propertyLifecycleWorkflow",
  "moduleName": "propertyFlowCrm",
  "status": "draft",
  "source": {
    "agentName": "agentPlanWorkflowDefinition",
    "stepId": 26,
    "planId": "plan-validate-solution-coverage"
  },
  "data": {
    "workflowDefinition": {
      "workflowId": "propertyLifecycleWorkflow",
      "title": "Ciclo de Vida do Imóvel",
      "purpose": "Gerenciar a criação, atualização e arquivamento de imóveis no catálogo da imobiliária, mantendo o inventário e métricas consistentes.",
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
          "stateId": "draft",
          "description": "Imóvel cadastrado como rascunho antes de ativar no catálogo."
        },
        {
          "stateId": "active",
          "description": "Imóvel ativo e disponível no catálogo."
        },
        {
          "stateId": "archived",
          "description": "Imóvel arquivado e fora do inventário ativo."
        }
      ],
      "transitions": [
        {
          "from": "draft",
          "to": "active",
          "trigger": "createProperty",
          "actor": "corretor",
          "conditions": [
            "imovelActiveStatus"
          ],
          "actions": [
            "setImovel.status=ativo",
            "setImovel.criadoEm=now",
            "setImovel.atualizadoEm=now"
          ],
          "rulesApplied": [
            "imovelActiveStatus"
          ]
        },
        {
          "from": "active",
          "to": "active",
          "trigger": "updateProperty",
          "actor": "corretor",
          "conditions": [],
          "actions": [
            "setImovel.atualizadoEm=now"
          ],
          "rulesApplied": []
        },
        {
          "from": "active",
          "to": "archived",
          "trigger": "archiveProperty",
          "actor": "corretor",
          "conditions": [],
          "actions": [
            "setImovel.status=inativo",
            "setImovel.atualizadoEm=now"
          ],
          "rulesApplied": []
        },
        {
          "from": "draft",
          "to": "draft",
          "trigger": "searchProperty",
          "actor": "corretor",
          "conditions": [],
          "actions": [],
          "rulesApplied": []
        }
      ],
      "requiredEntities": [
        "Imovel"
      ],
      "persistenceRefs": [
        "imovelInventoryMetrics"
      ],
      "usecaseRefs": [
        "criarImovel",
        "editarImovel",
        "arquivarImovel",
        "buscarImovel"
      ],
      "metricRefs": [
        "imovelInventoryMetrics"
      ],
      "userActions": [
        "criar imóvel",
        "editar imóvel",
        "arquivar imóvel",
        "buscar imóvel"
      ],
      "relatedPages": [
        "imoveisLista",
        "imovelEditor"
      ],
      "relatedAgents": [],
      "relatedPlugins": [],
      "rulesApplied": [
        "imovelActiveStatus"
      ],
      "implementationSuggestions": [
        {
          "suggestionId": "validateActivationFields",
          "title": "Validar campos obrigatórios antes de ativar",
          "priority": "now",
          "description": "Antes de mover para ativo, garantir título, endereço, tipo e preço preenchidos para manter qualidade do catálogo.",
          "tradeoff": "Exige validação adicional no fluxo de criação e pode bloquear cadastros incompletos."
        },
        {
          "suggestionId": "updateInventoryOnArchive",
          "title": "Atualizar contagem de inventário ao arquivar",
          "priority": "now",
          "description": "No arquivamento, registrar evento em imovelInventoryMetrics para manter inventário consistente.",
          "tradeoff": "Aumenta o volume de escrita em métricas."
        },
        {
          "suggestionId": "noTaskAutomation",
          "title": "Manter fluxo sem tarefas",
          "priority": "now",
          "description": "O ciclo de vida é executado diretamente pelos use cases sem necessidade de tarefas manuais.",
          "tradeoff": "Sem fila de acompanhamento para exceções; monitoramento depende de métricas e auditoria."
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
          "entity": "Imovel"
        }
      ],
      "writesArtifacts": [
        {
          "moduleId": "propertyFlowCrm",
          "artifactType": "workflow",
          "artifactId": "propertyLifecycleWorkflow"
        }
      ]
    },
    "defsPlan": {
      "fileName": "workflows/propertyLifecycleWorkflow.defs.ts",
      "exportName": "propertyLifecycleWorkflowDef",
      "saveAsDefs": true
    }
  }
} as const;

export default propertyLifecycleWorkflowDef;
