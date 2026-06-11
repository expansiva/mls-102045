/// <mls fileReference="_102045_/l2/propertyFlowCrm/imoveisLista.defs.ts" enhancement="_blank"/>

export const imoveisListaPagePlan = {
  "schemaVersion": "2026-06-06",
  "artifactType": "page",
  "artifactId": "imoveisLista",
  "moduleName": "propertyFlowCrm",
  "status": "draft",
  "source": {
    "agentName": "agentPlanPageDefinition",
    "stepId": 55,
    "planId": ""
  },
  "data": {
    "pageDefinition": {
      "pageId": "imoveisLista",
      "pageName": "Imóveis",
      "actor": "corretor",
      "purpose": "Listar, buscar e acessar imóveis para criar, editar ou arquivar.",
      "capabilities": [
        "gerirImoveis"
      ],
      "flowRefs": {
        "experienceFlows": [],
        "entityLifecycles": [
          "propertyLifecycleWorkflow"
        ],
        "taskWorkflows": [],
        "automations": []
      },
      "pluginRefs": [],
      "mdmRefs": [
        "property"
      ],
      "pageInputs": [
        {
          "name": "filtrosBusca",
          "type": "string",
          "required": false,
          "sources": [
            "queryString",
            "uiState"
          ],
          "description": "Filtros de busca aplicados à lista de imóveis."
        },
        {
          "name": "ordenacao",
          "type": "string",
          "required": false,
          "sources": [
            "queryString",
            "uiState"
          ],
          "description": "Ordenação da lista de imóveis."
        },
        {
          "name": "statusImovel",
          "type": "string",
          "required": false,
          "sources": [
            "queryString",
            "uiState"
          ],
          "description": "Status do imóvel para filtrar a lista."
        },
        {
          "name": "pagina",
          "type": "number",
          "required": false,
          "sources": [
            "queryString",
            "uiState"
          ],
          "description": "Página atual da listagem."
        },
        {
          "name": "tamanhoPagina",
          "type": "number",
          "required": false,
          "sources": [
            "queryString",
            "uiState"
          ],
          "description": "Tamanho da página da listagem."
        }
      ],
      "navigationRefs": [
        {
          "direction": "outbound",
          "pageId": "imovelEditor",
          "trigger": "Criar ou editar imóvel",
          "description": "Abrir cadastro para criação ou edição."
        }
      ],
      "sections": [
        {
          "sectionName": "Filtros e ações",
          "mode": "interactive",
          "organisms": [
            {
              "organismName": "barraDeBuscaImoveis",
              "purpose": "Permitir busca e filtros de imóveis.",
              "userActions": [
                "buscarImovel",
                "limparFiltros"
              ],
              "requiredEntities": [
                "imovelEntity"
              ],
              "readsFields": [
                "imovelId",
                "titulo",
                "status",
                "preco",
                "endereco"
              ],
              "writesFields": [],
              "rulesApplied": [
                "imovelActiveStatus"
              ]
            },
            {
              "organismName": "acoesRapidasImoveis",
              "purpose": "Atalhos para criação de imóvel.",
              "userActions": [
                "criarImovel"
              ],
              "requiredEntities": [],
              "readsFields": [],
              "writesFields": [],
              "rulesApplied": []
            }
          ]
        },
        {
          "sectionName": "Lista de imóveis",
          "mode": "interactive",
          "organisms": [
            {
              "organismName": "tabelaImoveis",
              "purpose": "Exibir lista de imóveis com ações de edição e arquivamento.",
              "userActions": [
                "editarImovel",
                "arquivarImovel",
                "abrirDetalheImovel"
              ],
              "requiredEntities": [
                "imovelEntity"
              ],
              "readsFields": [
                "imovelId",
                "titulo",
                "status",
                "preco",
                "endereco"
              ],
              "writesFields": [],
              "rulesApplied": [
                "imovelActiveStatus"
              ]
            }
          ]
        }
      ]
    },
    "bffCommands": [
      {
        "commandName": "buscarImovel",
        "purpose": "Buscar lista de imóveis conforme filtros.",
        "kind": "query",
        "input": [
          {
            "name": "filtrosBusca",
            "type": "string",
            "required": false
          },
          {
            "name": "statusImovel",
            "type": "string",
            "required": false
          },
          {
            "name": "ordenacao",
            "type": "string",
            "required": false
          },
          {
            "name": "pagina",
            "type": "number",
            "required": false
          },
          {
            "name": "tamanhoPagina",
            "type": "number",
            "required": false
          }
        ],
        "output": [
          {
            "name": "imovelId",
            "type": "string"
          },
          {
            "name": "titulo",
            "type": "string"
          },
          {
            "name": "status",
            "type": "string"
          },
          {
            "name": "preco",
            "type": "number"
          },
          {
            "name": "endereco",
            "type": "string"
          }
        ],
        "readsEntities": [
          "imovelEntity"
        ],
        "writesEntities": [],
        "readsTables": [],
        "writesTables": [],
        "usecaseRefs": [
          "buscarImovel"
        ],
        "layerContract": {
          "controllerLayer": "layer_2_controllers",
          "mustCallLayer": "layer_3_usecases",
          "directTableAccessForbidden": true
        },
        "rulesApplied": [
          "imovelActiveStatus"
        ]
      },
      {
        "commandName": "arquivarImovel",
        "purpose": "Arquivar um imóvel selecionado na lista.",
        "kind": "command",
        "input": [
          {
            "name": "imovelId",
            "type": "string",
            "required": true
          }
        ],
        "output": [
          {
            "name": "imovelId",
            "type": "string"
          },
          {
            "name": "status",
            "type": "string"
          }
        ],
        "readsEntities": [
          "imovelEntity"
        ],
        "writesEntities": [
          "imovelEntity"
        ],
        "readsTables": [],
        "writesTables": [
          "imovel_inventory_metrics"
        ],
        "usecaseRefs": [
          "arquivarImovel"
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

export default imoveisListaPagePlan;
