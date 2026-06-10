/// <mls fileReference="_102045_/l2/propertyFlowCrm/propertyList.defs.ts" enhancement="_blank"/>

export const propertyListPagePlan = {
  "schemaVersion": "2026-06-06",
  "artifactType": "page",
  "artifactId": "propertyList",
  "moduleName": "propertyFlowCrm",
  "status": "draft",
  "source": {
    "agentName": "agentPlanPageDefinition",
    "stepId": 67,
    "planId": ""
  },
  "data": {
    "pageDefinition": {
      "pageId": "propertyList",
      "pageName": "Lista de Imóveis",
      "actor": "broker",
      "purpose": "Listar e filtrar imóveis cadastrados pelo corretor com opções de busca por status, tipo e localização.",
      "capabilities": [
        "manageProperties"
      ],
      "flowRefs": {
        "experienceFlows": [],
        "entityLifecycles": [
          "propertyLifecycle"
        ],
        "taskWorkflows": [],
        "automations": []
      },
      "pluginRefs": [],
      "mdmRefs": [
        "property"
      ],
      "pageInputs": [],
      "navigationRefs": [
        {
          "direction": "outbound",
          "pageId": "propertyForm",
          "trigger": "Cadastrar imóvel",
          "description": "Navegar para o formulário de cadastro de novo imóvel"
        },
        {
          "direction": "outbound",
          "pageId": "propertyDetail",
          "trigger": "Ver detalhes do imóvel",
          "description": "Navegar para a página de detalhes de um imóvel selecionado"
        }
      ],
      "sections": [
        {
          "sectionName": "Filtros de Busca",
          "mode": "interactive",
          "organisms": [
            {
              "organismName": "PropertyFiltersForm",
              "purpose": "Permitir ao corretor filtrar imóveis por status, tipo de imóvel, tipo de transação, cidade, bairro e faixa de preço.",
              "userActions": [
                "Buscar imóveis",
                "Filtrar por status",
                "Limpar filtros"
              ],
              "requiredEntities": [
                "Property"
              ],
              "readsFields": [
                "Property.status",
                "Property.propertyType",
                "Property.transactionType",
                "Property.city",
                "Property.neighborhood",
                "Property.price"
              ],
              "writesFields": [],
              "rulesApplied": []
            }
          ]
        },
        {
          "sectionName": "Lista de Imóveis",
          "mode": "readonly",
          "organisms": [
            {
              "organismName": "PropertyListTable",
              "purpose": "Exibir a lista de imóveis do corretor com informações resumidas como título, endereço, tipo, preço e status.",
              "userActions": [
                "Ver detalhes do imóvel",
                "Ordenar lista",
                "Navegar paginação"
              ],
              "requiredEntities": [
                "Property"
              ],
              "readsFields": [
                "Property.id",
                "Property.title",
                "Property.address",
                "Property.city",
                "Property.neighborhood",
                "Property.propertyType",
                "Property.transactionType",
                "Property.price",
                "Property.status",
                "Property.mainPhoto"
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
              "organismName": "PropertyListActions",
              "purpose": "Fornecer ação rápida para cadastrar novo imóvel.",
              "userActions": [
                "Cadastrar novo imóvel"
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
        "commandName": "listProperties",
        "purpose": "Listar imóveis do corretor com filtros de status, tipo, localização e faixa de preço, com suporte a paginação.",
        "kind": "query",
        "input": [
          {
            "name": "status",
            "type": "PropertyStatusEnum",
            "required": false
          },
          {
            "name": "propertyType",
            "type": "string",
            "required": false
          },
          {
            "name": "transactionType",
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
            "name": "minPrice",
            "type": "number",
            "required": false
          },
          {
            "name": "maxPrice",
            "type": "number",
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
            "name": "properties",
            "type": "Property[]"
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
          "Property"
        ],
        "writesEntities": [],
        "readsTables": [],
        "writesTables": [],
        "usecaseRefs": [
          "listProperties"
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

export default propertyListPagePlan;
