/// <mls fileReference="_102045_/l2/propertyFlowCrm/propertiesList.defs.ts" enhancement="_blank"/>

export const propertiesListPagePlan = {
  "schemaVersion": "2026-06-06",
  "artifactType": "page",
  "artifactId": "propertiesList",
  "moduleName": "propertyFlowCrm",
  "status": "draft",
  "source": {
    "agentName": "agentPlanPageDefinition",
    "stepId": 58,
    "planId": ""
  },
  "data": {
    "pageDefinition": {
      "pageId": "propertiesList",
      "pageName": "Lista de imóveis",
      "actor": "corretor",
      "purpose": "Pesquisar e cadastrar imóveis no estoque.",
      "capabilities": [
        "manageProperties"
      ],
      "flowRefs": {
        "experienceFlows": [],
        "entityLifecycles": [],
        "taskWorkflows": [],
        "automations": []
      },
      "pluginRefs": [],
      "mdmRefs": [
        "property",
        "broker"
      ],
      "pageInputs": [],
      "navigationRefs": [
        {
          "direction": "outbound",
          "pageId": "propertyDetails",
          "trigger": "selecionar imóvel",
          "description": "Abrir detalhes do imóvel selecionado na lista."
        }
      ],
      "sections": [
        {
          "sectionName": "Busca e filtros de imóveis",
          "mode": "list",
          "organisms": [
            {
              "organismName": "propertyFilters",
              "purpose": "Filtrar imóveis por status e localização.",
              "userActions": [
                "aplicar filtros",
                "limpar filtros"
              ],
              "requiredEntities": [
                "propertyEntity"
              ],
              "readsFields": [
                "propertyId",
                "status",
                "city",
                "neighborhood"
              ],
              "writesFields": [],
              "rulesApplied": [
                "rulePropertyStatusLifecycle"
              ]
            }
          ]
        },
        {
          "sectionName": "Lista de imóveis",
          "mode": "list",
          "organisms": [
            {
              "organismName": "propertyList",
              "purpose": "Exibir imóveis com dados principais e permitir seleção.",
              "userActions": [
                "selecionar imóvel",
                "paginar lista"
              ],
              "requiredEntities": [
                "propertyEntity"
              ],
              "readsFields": [
                "propertyId",
                "title",
                "status",
                "price",
                "city",
                "neighborhood"
              ],
              "writesFields": [],
              "rulesApplied": [
                "rulePropertyStatusLifecycle"
              ]
            }
          ]
        },
        {
          "sectionName": "Cadastro rápido de imóvel",
          "mode": "create",
          "organisms": [
            {
              "organismName": "propertyCreateForm",
              "purpose": "Cadastrar novo imóvel a partir do formulário.",
              "userActions": [
                "preencher dados",
                "salvar imóvel"
              ],
              "requiredEntities": [
                "propertyEntity"
              ],
              "readsFields": [],
              "writesFields": [
                "title",
                "propertyType",
                "price",
                "city",
                "neighborhood",
                "status",
                "brokerId"
              ],
              "rulesApplied": [
                "rulePropertyStatusLifecycle"
              ]
            }
          ]
        }
      ]
    },
    "bffCommands": [
      {
        "commandName": "listarImoveis",
        "purpose": "Carregar lista e filtros de imóveis.",
        "kind": "query",
        "input": [
          {
            "name": "status",
            "type": "string",
            "required": false
          },
          {
            "name": "city",
            "type": "string",
            "required": false
          },
          {
            "name": "neighborhood",
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
            "name": "propertyId",
            "type": "string"
          },
          {
            "name": "title",
            "type": "string"
          },
          {
            "name": "status",
            "type": "string"
          },
          {
            "name": "price",
            "type": "number"
          },
          {
            "name": "city",
            "type": "string"
          },
          {
            "name": "neighborhood",
            "type": "string"
          }
        ],
        "readsEntities": [
          "propertyEntity"
        ],
        "writesEntities": [],
        "readsTables": [],
        "writesTables": [],
        "usecaseRefs": [
          "listarImoveis"
        ],
        "layerContract": {
          "controllerLayer": "layer_2_controllers",
          "mustCallLayer": "layer_3_usecases",
          "directTableAccessForbidden": true
        },
        "rulesApplied": [
          "rulePropertyStatusLifecycle"
        ]
      },
      {
        "commandName": "criarImovel",
        "purpose": "Cadastrar novo imóvel a partir do formulário.",
        "kind": "command",
        "input": [
          {
            "name": "title",
            "type": "string",
            "required": true
          },
          {
            "name": "propertyType",
            "type": "string",
            "required": true
          },
          {
            "name": "price",
            "type": "number",
            "required": true
          },
          {
            "name": "city",
            "type": "string",
            "required": true
          },
          {
            "name": "neighborhood",
            "type": "string",
            "required": true
          },
          {
            "name": "status",
            "type": "string",
            "required": true
          },
          {
            "name": "brokerId",
            "type": "string",
            "required": true
          }
        ],
        "output": [
          {
            "name": "propertyId",
            "type": "string"
          },
          {
            "name": "status",
            "type": "string"
          }
        ],
        "readsEntities": [],
        "writesEntities": [
          "propertyEntity",
          "dashboardMetricEntity"
        ],
        "readsTables": [],
        "writesTables": [
          "property_status_metrics",
          "broker_activity_metrics"
        ],
        "usecaseRefs": [
          "criarImovel"
        ],
        "layerContract": {
          "controllerLayer": "layer_2_controllers",
          "mustCallLayer": "layer_3_usecases",
          "directTableAccessForbidden": true
        },
        "rulesApplied": [
          "rulePropertyStatusLifecycle",
          "ruleMetricRefresh"
        ]
      }
    ]
  }
} as const;

export default propertiesListPagePlan;
