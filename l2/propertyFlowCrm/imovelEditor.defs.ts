/// <mls fileReference="_102045_/l2/propertyFlowCrm/imovelEditor.defs.ts" enhancement="_blank"/>

export const imovelEditorPagePlan = {
  "schemaVersion": "2026-06-06",
  "artifactType": "page",
  "artifactId": "imovelEditor",
  "moduleName": "propertyFlowCrm",
  "status": "draft",
  "source": {
    "agentName": "agentPlanPageDefinition",
    "stepId": 56,
    "planId": ""
  },
  "data": {
    "pageDefinition": {
      "pageId": "imovelEditor",
      "pageName": "Cadastro de imóvel",
      "actor": "corretor",
      "purpose": "Criar ou editar imóvel e controlar status.",
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
          "name": "imovelId",
          "type": "string",
          "required": true,
          "sources": [
            "routeParam",
            "previousStepResult"
          ],
          "description": "Identificador do imóvel a editar ou arquivar.",
          "entityRef": "Imovel",
          "fieldRef": "imovel.id"
        }
      ],
      "navigationRefs": [
        {
          "direction": "inbound",
          "pageId": "imoveisLista",
          "trigger": "Selecionar imóvel ou criar novo"
        },
        {
          "direction": "outbound",
          "pageId": "imoveisLista",
          "trigger": "Salvar ou arquivar imóvel"
        }
      ],
      "sections": [
        {
          "sectionName": "dadosDoImovel",
          "mode": "edit",
          "organisms": [
            {
              "organismName": "formularioImovel",
              "purpose": "Cadastrar ou atualizar os dados do imóvel.",
              "userActions": [
                "preencherDados",
                "salvarImovel"
              ],
              "requiredEntities": [
                "Imovel"
              ],
              "readsFields": [
                "imovel.id",
                "imovel.titulo",
                "imovel.endereco",
                "imovel.tipo",
                "imovel.preco",
                "imovel.descricao",
                "imovel.status"
              ],
              "writesFields": [
                "imovel.titulo",
                "imovel.endereco",
                "imovel.tipo",
                "imovel.preco",
                "imovel.descricao",
                "imovel.status"
              ],
              "rulesApplied": [
                "imovelActiveStatus"
              ]
            }
          ]
        },
        {
          "sectionName": "statusEArquivamento",
          "mode": "edit",
          "organisms": [
            {
              "organismName": "acoesDeStatus",
              "purpose": "Controlar status e arquivar imóvel quando necessário.",
              "userActions": [
                "arquivarImovel"
              ],
              "requiredEntities": [
                "Imovel"
              ],
              "readsFields": [
                "imovel.id",
                "imovel.status"
              ],
              "writesFields": [
                "imovel.status",
                "imovel.motivoArquivamento"
              ],
              "rulesApplied": []
            }
          ]
        }
      ]
    },
    "bffCommands": [
      {
        "commandName": "criarImovel",
        "purpose": "Registrar um novo imóvel.",
        "kind": "command",
        "input": [
          {
            "name": "titulo",
            "type": "string",
            "required": true
          },
          {
            "name": "endereco",
            "type": "string",
            "required": true
          },
          {
            "name": "tipo",
            "type": "string",
            "required": true
          },
          {
            "name": "preco",
            "type": "number",
            "required": true
          },
          {
            "name": "descricao",
            "type": "string",
            "required": false
          },
          {
            "name": "statusInicial",
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
          "criarImovel"
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
        "commandName": "editarImovel",
        "purpose": "Atualizar dados do imóvel existente.",
        "kind": "command",
        "input": [
          {
            "name": "imovelId",
            "type": "string",
            "required": true
          },
          {
            "name": "titulo",
            "type": "string",
            "required": false
          },
          {
            "name": "endereco",
            "type": "string",
            "required": false
          },
          {
            "name": "tipo",
            "type": "string",
            "required": false
          },
          {
            "name": "preco",
            "type": "number",
            "required": false
          },
          {
            "name": "descricao",
            "type": "string",
            "required": false
          },
          {
            "name": "status",
            "type": "string",
            "required": false
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
          "editarImovel"
        ],
        "layerContract": {
          "controllerLayer": "layer_2_controllers",
          "mustCallLayer": "layer_3_usecases",
          "directTableAccessForbidden": true
        },
        "rulesApplied": []
      },
      {
        "commandName": "arquivarImovel",
        "purpose": "Arquivar imóvel.",
        "kind": "command",
        "input": [
          {
            "name": "imovelId",
            "type": "string",
            "required": true
          },
          {
            "name": "motivo",
            "type": "string",
            "required": false
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

export default imovelEditorPagePlan;
