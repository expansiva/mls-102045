/// <mls fileReference="_102045_/l2/propertyFlowCrm/brokerList.defs.ts" enhancement="_blank"/>

export const brokerListPagePlan = {
  "schemaVersion": "2026-06-06",
  "artifactType": "page",
  "artifactId": "brokerList",
  "moduleName": "propertyFlowCrm",
  "status": "draft",
  "source": {
    "agentName": "agentPlanPageDefinition",
    "stepId": 69,
    "planId": ""
  },
  "data": {
    "pageDefinition": {
      "pageId": "brokerList",
      "pageName": "Lista de Corretores",
      "actor": "admin",
      "purpose": "Listar e gerenciar corretores cadastrados no sistema.",
      "capabilities": [
        "manageBrokers"
      ],
      "flowRefs": {
        "experienceFlows": [],
        "entityLifecycles": [
          "brokerLifecycle"
        ],
        "taskWorkflows": [],
        "automations": []
      },
      "pluginRefs": [],
      "mdmRefs": [
        "broker"
      ],
      "pageInputs": [],
      "navigationRefs": [
        {
          "direction": "outbound",
          "pageId": "brokerForm",
          "trigger": "Cadastrar corretor",
          "description": "Navegar para o formulário de cadastro de novo corretor"
        },
        {
          "direction": "outbound",
          "pageId": "brokerDetail",
          "trigger": "Ver detalhes do corretor",
          "description": "Navegar para a página de detalhes de um corretor selecionado"
        }
      ],
      "sections": [
        {
          "sectionName": "Filtros e Busca",
          "mode": "interactive",
          "organisms": [
            {
              "organismName": "BrokerSearchFilter",
              "purpose": "Permitir busca e filtragem de corretores por nome, status e outros critérios",
              "userActions": [
                "Buscar corretores",
                "Aplicar filtros",
                "Limpar filtros"
              ],
              "requiredEntities": [
                "Broker"
              ],
              "readsFields": [
                "Broker.status"
              ],
              "writesFields": [],
              "rulesApplied": []
            }
          ]
        },
        {
          "sectionName": "Lista de Corretores",
          "mode": "readonly",
          "organisms": [
            {
              "organismName": "BrokerTable",
              "purpose": "Exibir lista paginada de corretores com informações resumidas",
              "userActions": [
                "Ver detalhes",
                "Ordenar lista",
                "Navegar páginas"
              ],
              "requiredEntities": [
                "Broker"
              ],
              "readsFields": [
                "Broker.id",
                "Broker.fullName",
                "Broker.email",
                "Broker.phone",
                "Broker.role",
                "Broker.status",
                "Broker.createdAt"
              ],
              "writesFields": [],
              "rulesApplied": []
            }
          ]
        },
        {
          "sectionName": "Ações Principais",
          "mode": "interactive",
          "organisms": [
            {
              "organismName": "BrokerListActions",
              "purpose": "Fornecer ações principais como cadastrar novo corretor",
              "userActions": [
                "Cadastrar novo corretor"
              ],
              "requiredEntities": [],
              "readsFields": [],
              "writesFields": [],
              "rulesApplied": []
            }
          ]
        }
      ]
    },
    "bffCommands": [
      {
        "commandName": "listBrokers",
        "purpose": "Listar corretores cadastrados com filtros de status e paginação",
        "kind": "query",
        "input": [
          {
            "name": "status",
            "type": "BrokerStatusEnum",
            "required": false
          },
          {
            "name": "searchTerm",
            "type": "string",
            "required": false
          },
          {
            "name": "page",
            "type": "number",
            "required": false
          },
          {
            "name": "pageSize",
            "type": "number",
            "required": false
          }
        ],
        "output": [
          {
            "name": "brokers",
            "type": "Broker[]"
          },
          {
            "name": "total",
            "type": "number"
          },
          {
            "name": "page",
            "type": "number"
          },
          {
            "name": "pageSize",
            "type": "number"
          }
        ],
        "readsEntities": [
          "Broker"
        ],
        "writesEntities": [],
        "readsTables": [],
        "writesTables": [],
        "usecaseRefs": [
          "listBrokers"
        ],
        "layerContract": {
          "controllerLayer": "layer_2_controllers",
          "mustCallLayer": "layer_3_usecases",
          "directTableAccessForbidden": true
        },
        "rulesApplied": []
      }
    ]
  }
} as const;

export default brokerListPagePlan;
