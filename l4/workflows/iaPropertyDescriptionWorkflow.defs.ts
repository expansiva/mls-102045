/// <mls fileReference="_102045_/l4/workflows/iaPropertyDescriptionWorkflow.defs.ts" enhancement="_blank"/>

export const iaPropertyDescriptionWorkflowDef = {
  "schemaVersion": "2026-06-06",
  "artifactType": "workflow",
  "artifactId": "iaPropertyDescriptionWorkflow",
  "moduleName": "propertyFlowCrm",
  "status": "draft",
  "source": {
    "agentName": "agentPlanWorkflowDefinition",
    "stepId": 53,
    "planId": ""
  },
  "data": {
    "workflowDefinition": {
      "workflowId": "iaPropertyDescriptionWorkflow",
      "title": "Geração de Descrição de Imóvel com IA",
      "purpose": "Orquestrar a geração automática de descrições de imóveis utilizando o plugin de LLM, permitindo revisão antes da aplicação.",
      "executionMode": "automation",
      "createsTask": false,
      "taskConfig": {
        "taskTitleTemplate": "",
        "assigneeRules": [],
        "slaRules": [],
        "taskRoomRequired": false
      },
      "actors": [
        "corretor",
        "sistema"
      ],
      "states": [
        {
          "stateId": "solicitada",
          "description": "Descrição de imóvel solicitada pelo corretor."
        },
        {
          "stateId": "geracaoEmAndamento",
          "description": "Geração de descrição em andamento pelo serviço de IA."
        },
        {
          "stateId": "gerada",
          "description": "Descrição gerada pela IA e disponível para revisão."
        },
        {
          "stateId": "revisada",
          "description": "Descrição revisada e ajustada pelo corretor."
        },
        {
          "stateId": "aplicada",
          "description": "Descrição aprovada e aplicada ao imóvel."
        }
      ],
      "transitions": [
        {
          "from": "solicitada",
          "to": "geracaoEmAndamento",
          "trigger": "solicitarGeracao",
          "actor": "corretor",
          "conditions": [],
          "actions": [],
          "rulesApplied": []
        },
        {
          "from": "geracaoEmAndamento",
          "to": "gerada",
          "trigger": "descricaoGerada",
          "actor": "sistema",
          "conditions": [],
          "actions": [
            "Imovel.descricaoGeradaIa = textoGerado",
            "Imovel.atualizadoEm = agora"
          ],
          "rulesApplied": []
        },
        {
          "from": "gerada",
          "to": "revisada",
          "trigger": "revisarDescricao",
          "actor": "corretor",
          "conditions": [],
          "actions": [
            "Imovel.descricaoGeradaIa = textoRevisado",
            "Imovel.atualizadoEm = agora"
          ],
          "rulesApplied": []
        },
        {
          "from": "revisada",
          "to": "aplicada",
          "trigger": "confirmarDescricao",
          "actor": "corretor",
          "conditions": [],
          "actions": [
            "Imovel.atualizadoEm = agora"
          ],
          "rulesApplied": []
        },
        {
          "from": "gerada",
          "to": "solicitada",
          "trigger": "regerarDescricao",
          "actor": "corretor",
          "conditions": [],
          "actions": [],
          "rulesApplied": []
        }
      ],
      "requiredEntities": [
        "Imovel"
      ],
      "persistenceRefs": [],
      "usecaseRefs": [
        "gerarDescricaoImovelIa"
      ],
      "metricRefs": [],
      "userActions": [
        "solicitarGeracao",
        "revisarDescricao",
        "confirmarDescricao",
        "regerarDescricao"
      ],
      "relatedPages": [],
      "relatedAgents": [],
      "relatedPlugins": [],
      "rulesApplied": [],
      "implementationSuggestions": [
        {
          "suggestionId": "fila-assincrona-descricao",
          "title": "Implementar fila de processamento assíncrono",
          "priority": "soon",
          "description": "Chamadas ao provedor de LLM podem ter latência elevada e não devem bloquear a interface.",
          "tradeoff": "Maior complexidade operacional com fila e monitoramento."
        },
        {
          "suggestionId": "revisao-descricao",
          "title": "Permitir revisão e confirmação antes de salvar",
          "priority": "now",
          "description": "Garantir qualidade, adequação de tom e precisão das informações geradas pela IA.",
          "tradeoff": "A etapa adicional pode reduzir a velocidade de publicação."
        },
        {
          "suggestionId": "sem-tarefa-revisao",
          "title": "Manter revisão inline sem criação de tarefa",
          "priority": "now",
          "description": "A revisão acontece no fluxo de edição do imóvel, evitando overhead de tarefas para o corretor.",
          "tradeoff": "Menor rastreabilidade formal do processo de revisão."
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
          "artifactId": "iaPropertyDescriptionWorkflow"
        }
      ]
    },
    "defsPlan": {
      "fileName": "workflows/iaPropertyDescriptionWorkflow.defs.ts",
      "exportName": "iaPropertyDescriptionWorkflowDef",
      "saveAsDefs": true
    }
  }
} as const;

export default iaPropertyDescriptionWorkflowDef;
