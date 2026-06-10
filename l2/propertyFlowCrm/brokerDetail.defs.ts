/// <mls fileReference="_102045_/l2/propertyFlowCrm/brokerDetail.defs.ts" enhancement="_blank"/>

export const brokerDetailPagePlan = {
  "schemaVersion": "2026-06-06",
  "artifactType": "page",
  "artifactId": "brokerDetail",
  "moduleName": "propertyFlowCrm",
  "status": "draft",
  "source": {
    "agentName": "agentPlanPageDefinition",
    "stepId": 68,
    "planId": ""
  },
  "data": {
    "pageDefinition": {
      "pageId": "brokerDetail",
      "pageName": "Detalhes do Corretor",
      "actor": "admin",
      "purpose": "Visualizar informações do corretor e executar ações de edição ou desativação.",
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
      "pageInputs": [
        {
          "name": "brokerId",
          "type": "string",
          "required": true,
          "sources": [
            "routeParam",
            "previousStepResult"
          ],
          "description": "Identificador único do corretor a ser visualizado",
          "entityRef": "Broker",
          "fieldRef": "id"
        }
      ],
      "navigationRefs": [
        {
          "direction": "inbound",
          "pageId": "brokerList",
          "trigger": "Ver detalhes",
          "description": "Navegação a partir da lista de corretores"
        },
        {
          "direction": "outbound",
          "pageId": "brokerForm",
          "trigger": "Editar corretor",
          "description": "Navegação para edição do corretor"
        }
      ],
      "sections": [
        {
          "sectionName": "Informações do Corretor",
          "mode": "readonly",
          "organisms": [
            {
              "organismName": "BrokerInfoCard",
              "purpose": "Exibir informações principais do corretor como nome, email, telefone, status e área de atuação.",
              "userActions": [
                "Ver detalhes"
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
                "Broker.createdAt",
                "Broker.updatedAt"
              ],
              "writesFields": [],
              "rulesApplied": []
            }
          ]
        },
        {
          "sectionName": "Ações do Corretor",
          "mode": "interactive",
          "organisms": [
            {
              "organismName": "BrokerActionsPanel",
              "purpose": "Permitir ao administrador editar ou desativar o corretor.",
              "userActions": [
                "Editar corretor",
                "Desativar corretor"
              ],
              "requiredEntities": [
                "Broker"
              ],
              "readsFields": [
                "Broker.id",
                "Broker.status"
              ],
              "writesFields": [
                "Broker.status"
              ],
              "rulesApplied": [
                "ruleBrokerAssignment"
              ]
            }
          ]
        }
      ]
    },
    "bffCommands": [
      {
        "commandName": "getBrokerDetail",
        "purpose": "Obter detalhes completos de um corretor específico pelo seu identificador.",
        "kind": "query",
        "input": [
          {
            "name": "brokerId",
            "type": "string",
            "required": true
          }
        ],
        "output": [
          {
            "name": "id",
            "type": "string"
          },
          {
            "name": "fullName",
            "type": "string"
          },
          {
            "name": "email",
            "type": "string"
          },
          {
            "name": "phone",
            "type": "string"
          },
          {
            "name": "role",
            "type": "string"
          },
          {
            "name": "status",
            "type": "BrokerStatusEnum"
          },
          {
            "name": "createdAt",
            "type": "date"
          },
          {
            "name": "updatedAt",
            "type": "date"
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
      },
      {
        "commandName": "deactivateBroker",
        "purpose": "Desativar um corretor no sistema, opcionalmente reatribuindo leads e negócios.",
        "kind": "mutation",
        "input": [
          {
            "name": "brokerId",
            "type": "string",
            "required": true
          },
          {
            "name": "reason",
            "type": "string",
            "required": false
          },
          {
            "name": "reassignTo",
            "type": "string",
            "required": false
          }
        ],
        "output": [
          {
            "name": "brokerId",
            "type": "string"
          },
          {
            "name": "status",
            "type": "string"
          },
          {
            "name": "reassignedLeads",
            "type": "number"
          },
          {
            "name": "reassignedDeals",
            "type": "number"
          }
        ],
        "readsEntities": [
          "Broker"
        ],
        "writesEntities": [
          "Broker"
        ],
        "readsTables": [],
        "writesTables": [],
        "usecaseRefs": [
          "deactivateBroker"
        ],
        "layerContract": {
          "controllerLayer": "layer_2_controllers",
          "mustCallLayer": "layer_3_usecases",
          "directTableAccessForbidden": true
        },
        "rulesApplied": [
          "ruleBrokerAssignment"
        ]
      }
    ]
  }
} as const;

export default brokerDetailPagePlan;
