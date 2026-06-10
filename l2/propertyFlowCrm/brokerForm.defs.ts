/// <mls fileReference="_102045_/l2/propertyFlowCrm/brokerForm.defs.ts" enhancement="_blank"/>

export const brokerFormPagePlan = {
  "schemaVersion": "2026-06-06",
  "artifactType": "page",
  "artifactId": "brokerForm",
  "moduleName": "propertyFlowCrm",
  "status": "draft",
  "source": {
    "agentName": "agentPlanPageDefinition",
    "stepId": 67,
    "planId": ""
  },
  "data": {
    "pageDefinition": {
      "pageId": "brokerForm",
      "pageName": "Cadastro de Corretor",
      "actor": "admin",
      "purpose": "Cadastrar ou editar informações de um corretor.",
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
          "required": false,
          "sources": [
            "routeParam",
            "previousStepResult"
          ],
          "description": "Identificador do corretor para edição. Quando ausente, indica cadastro de novo corretor.",
          "entityRef": "Broker",
          "fieldRef": "brokerId"
        }
      ],
      "navigationRefs": [
        {
          "direction": "inbound",
          "pageId": "brokerList",
          "trigger": "Cadastrar corretor",
          "description": "Navegação a partir da lista de corretores para criar novo corretor"
        },
        {
          "direction": "inbound",
          "pageId": "brokerDetail",
          "trigger": "Editar corretor",
          "description": "Navegação a partir dos detalhes do corretor para edição"
        },
        {
          "direction": "outbound",
          "pageId": "brokerDetail",
          "trigger": "Após salvar",
          "description": "Redireciona para detalhes do corretor após salvar com sucesso"
        }
      ],
      "sections": [
        {
          "sectionName": "Formulário de Corretor",
          "mode": "edit",
          "organisms": [
            {
              "organismName": "BrokerDataForm",
              "purpose": "Formulário para preenchimento dos dados do corretor incluindo nome, e-mail, telefone, CRECI, especializações e regiões de atuação.",
              "userActions": [
                "Preencher dados do corretor",
                "Selecionar especializações",
                "Selecionar regiões de atuação"
              ],
              "requiredEntities": [
                "Broker"
              ],
              "readsFields": [
                "Broker.name",
                "Broker.email",
                "Broker.phone",
                "Broker.creci",
                "Broker.specializations",
                "Broker.regions",
                "Broker.status"
              ],
              "writesFields": [
                "Broker.name",
                "Broker.email",
                "Broker.phone",
                "Broker.creci",
                "Broker.specializations",
                "Broker.regions"
              ],
              "rulesApplied": [
                "ruleBrokerRequiredFields"
              ]
            }
          ]
        },
        {
          "sectionName": "Ações do Formulário",
          "mode": "action",
          "organisms": [
            {
              "organismName": "BrokerFormActions",
              "purpose": "Botões de ação para salvar ou cancelar o cadastro/edição do corretor.",
              "userActions": [
                "Salvar corretor",
                "Cancelar e voltar"
              ],
              "requiredEntities": [
                "Broker"
              ],
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
        "commandName": "getBrokerForEdit",
        "purpose": "Buscar dados do corretor para preencher o formulário de edição",
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
            "name": "brokerId",
            "type": "string"
          },
          {
            "name": "name",
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
            "name": "creci",
            "type": "string"
          },
          {
            "name": "specializations",
            "type": "string[]"
          },
          {
            "name": "regions",
            "type": "string[]"
          },
          {
            "name": "status",
            "type": "string"
          }
        ],
        "readsEntities": [
          "Broker"
        ],
        "writesEntities": [],
        "readsTables": [],
        "writesTables": [],
        "usecaseRefs": [],
        "layerContract": {
          "controllerLayer": "layer_2_controllers",
          "mustCallLayer": "layer_3_usecases",
          "directTableAccessForbidden": true
        },
        "rulesApplied": []
      },
      {
        "commandName": "createBroker",
        "purpose": "Cadastrar novo corretor no sistema",
        "kind": "mutation",
        "input": [
          {
            "name": "name",
            "type": "string",
            "required": true
          },
          {
            "name": "email",
            "type": "string",
            "required": true
          },
          {
            "name": "phone",
            "type": "string",
            "required": true
          },
          {
            "name": "creci",
            "type": "string",
            "required": true
          },
          {
            "name": "specializations",
            "type": "string[]",
            "required": false
          },
          {
            "name": "regions",
            "type": "string[]",
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
          }
        ],
        "readsEntities": [],
        "writesEntities": [
          "Broker"
        ],
        "readsTables": [],
        "writesTables": [],
        "usecaseRefs": [
          "createBroker"
        ],
        "layerContract": {
          "controllerLayer": "layer_2_controllers",
          "mustCallLayer": "layer_3_usecases",
          "directTableAccessForbidden": true
        },
        "rulesApplied": [
          "ruleBrokerRequiredFields"
        ]
      },
      {
        "commandName": "updateBroker",
        "purpose": "Atualizar dados de um corretor existente",
        "kind": "mutation",
        "input": [
          {
            "name": "brokerId",
            "type": "string",
            "required": true
          },
          {
            "name": "name",
            "type": "string",
            "required": false
          },
          {
            "name": "email",
            "type": "string",
            "required": false
          },
          {
            "name": "phone",
            "type": "string",
            "required": false
          },
          {
            "name": "specializations",
            "type": "string[]",
            "required": false
          },
          {
            "name": "regions",
            "type": "string[]",
            "required": false
          }
        ],
        "output": [
          {
            "name": "brokerId",
            "type": "string"
          },
          {
            "name": "updated",
            "type": "boolean"
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
          "updateBroker"
        ],
        "layerContract": {
          "controllerLayer": "layer_2_controllers",
          "mustCallLayer": "layer_3_usecases",
          "directTableAccessForbidden": true
        },
        "rulesApplied": [
          "ruleBrokerRequiredFields"
        ]
      }
    ]
  }
} as const;

export default brokerFormPagePlan;
