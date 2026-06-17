/// <mls fileReference="_102045_/l2/propertyFlowCrm/propertyDetails.defs.ts" enhancement="_blank"/>

export const propertyDetailsPagePlan = {
  "schemaVersion": "2026-06-06",
  "artifactType": "page",
  "artifactId": "propertyDetails",
  "moduleName": "propertyFlowCrm",
  "status": "draft",
  "source": {
    "agentName": "agentPlanPageDefinition",
    "stepId": 59,
    "planId": ""
  },
  "data": {
    "pageDefinition": {
      "pageId": "propertyDetails",
      "pageName": "Detalhes do imóvel",
      "actor": "corretor",
      "purpose": "Editar dados, preço e status do imóvel.",
      "capabilities": [
        "manageProperties"
      ],
      "flowRefs": {
        "experienceFlows": [],
        "entityLifecycles": [],
        "taskWorkflows": [],
        "automations": [
          "propertyDescriptionRequestFlow"
        ]
      },
      "pluginRefs": [],
      "mdmRefs": [
        "property"
      ],
      "pageInputs": [
        {
          "name": "propertyId",
          "type": "PropertyId",
          "required": true,
          "sources": [
            "routeParam"
          ],
          "description": "Identificador do imóvel selecionado.",
          "entityRef": "Property",
          "fieldRef": "id"
        }
      ],
      "navigationRefs": [
        {
          "direction": "inbound",
          "pageId": "propertiesList",
          "trigger": "abrir detalhes do imóvel",
          "description": "Acesso ao detalhe a partir da lista de imóveis."
        }
      ],
      "sections": [
        {
          "sectionName": "Dados do imóvel",
          "mode": "edit",
          "organisms": [
            {
              "organismName": "FormularioDadosImovel",
              "purpose": "Exibir e editar informações principais do imóvel.",
              "userActions": [
                "editarCampos",
                "salvarImovel"
              ],
              "requiredEntities": [
                "Property"
              ],
              "readsFields": [
                "Property.id",
                "Property.title",
                "Property.address",
                "Property.price",
                "Property.status",
                "Property.description",
                "Property.features",
                "Property.bedrooms",
                "Property.bathrooms",
                "Property.area"
              ],
              "writesFields": [
                "Property.title",
                "Property.address",
                "Property.price",
                "Property.status",
                "Property.description",
                "Property.features",
                "Property.bedrooms",
                "Property.bathrooms",
                "Property.area"
              ],
              "rulesApplied": [
                "rulePropertyStatusLifecycle"
              ]
            }
          ]
        },
        {
          "sectionName": "Descrição do imóvel por IA",
          "mode": "assist",
          "organisms": [
            {
              "organismName": "SolicitarDescricaoImovel",
              "purpose": "Solicitar geração de descrição via IA com bullets informados.",
              "userActions": [
                "informarBullets",
                "solicitarDescricaoImovel"
              ],
              "requiredEntities": [
                "PropertyDescriptionRequest"
              ],
              "readsFields": [
                "Property.id",
                "Property.title",
                "Property.features"
              ],
              "writesFields": [
                "PropertyDescriptionRequest.bullets",
                "PropertyDescriptionRequest.propertyId"
              ],
              "rulesApplied": [
                "ruleAiHumanReview"
              ]
            },
            {
              "organismName": "HistoricoSolicitacoesDescricao",
              "purpose": "Listar solicitações e status da revisão humana.",
              "userActions": [
                "verSolicitacoes",
                "verDescricaoGerada"
              ],
              "requiredEntities": [
                "PropertyDescriptionRequest"
              ],
              "readsFields": [
                "PropertyDescriptionRequest.id",
                "PropertyDescriptionRequest.reviewStatus",
                "PropertyDescriptionRequest.aiDescription",
                "PropertyDescriptionRequest.humanReviewNotes",
                "PropertyDescriptionRequest.createdAt",
                "PropertyDescriptionRequest.updatedAt"
              ],
              "writesFields": [],
              "rulesApplied": [
                "ruleAiHumanReview"
              ]
            }
          ]
        }
      ]
    },
    "bffCommands": [
      {
        "commandName": "obterImovel",
        "purpose": "Carregar detalhes completos do imóvel.",
        "kind": "query",
        "input": [
          {
            "name": "propertyId",
            "type": "PropertyId",
            "required": true
          }
        ],
        "output": [
          {
            "name": "propertyId",
            "type": "PropertyId"
          },
          {
            "name": "title",
            "type": "string"
          },
          {
            "name": "address",
            "type": "string"
          },
          {
            "name": "price",
            "type": "number"
          },
          {
            "name": "status",
            "type": "string"
          },
          {
            "name": "description",
            "type": "string"
          },
          {
            "name": "features",
            "type": "string"
          },
          {
            "name": "bedrooms",
            "type": "number"
          },
          {
            "name": "bathrooms",
            "type": "number"
          },
          {
            "name": "area",
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
          "obterImovel"
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
        "commandName": "atualizarImovel",
        "purpose": "Salvar atualizações do imóvel.",
        "kind": "command",
        "input": [
          {
            "name": "propertyId",
            "type": "PropertyId",
            "required": true
          },
          {
            "name": "title",
            "type": "string",
            "required": false
          },
          {
            "name": "address",
            "type": "string",
            "required": false
          },
          {
            "name": "price",
            "type": "number",
            "required": false
          },
          {
            "name": "status",
            "type": "string",
            "required": false
          },
          {
            "name": "description",
            "type": "string",
            "required": false
          },
          {
            "name": "features",
            "type": "string",
            "required": false
          },
          {
            "name": "bedrooms",
            "type": "number",
            "required": false
          },
          {
            "name": "bathrooms",
            "type": "number",
            "required": false
          },
          {
            "name": "area",
            "type": "number",
            "required": false
          }
        ],
        "output": [
          {
            "name": "propertyId",
            "type": "PropertyId"
          },
          {
            "name": "status",
            "type": "string"
          },
          {
            "name": "updatedAt",
            "type": "date"
          }
        ],
        "readsEntities": [
          "Property"
        ],
        "writesEntities": [
          "Property"
        ],
        "readsTables": [],
        "writesTables": [
          "property_status_metrics",
          "broker_activity_metrics"
        ],
        "usecaseRefs": [
          "atualizarImovel"
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
        "commandName": "solicitarDescricaoImovel",
        "purpose": "Solicitar geração de descrição via IA.",
        "kind": "command",
        "input": [
          {
            "name": "propertyId",
            "type": "PropertyId",
            "required": true
          },
          {
            "name": "bullets",
            "type": "string",
            "required": true
          }
        ],
        "output": [
          {
            "name": "requestId",
            "type": "PropertyDescriptionRequestId"
          },
          {
            "name": "reviewStatus",
            "type": "string"
          },
          {
            "name": "createdAt",
            "type": "date"
          }
        ],
        "readsEntities": [
          "Property"
        ],
        "writesEntities": [
          "PropertyDescriptionRequest"
        ],
        "readsTables": [],
        "writesTables": [
          "property_description_request",
          "broker_activity_metrics"
        ],
        "usecaseRefs": [
          "solicitarDescricaoImovel"
        ],
        "layerContract": {
          "controllerLayer": "layer_2_controllers",
          "mustCallLayer": "layer_3_usecases",
          "directTableAccessForbidden": true
        },
        "rulesApplied": [
          "ruleAiHumanReview"
        ]
      },
      {
        "commandName": "listarSolicitacoesDescricaoImovel",
        "purpose": "Listar histórico de solicitações de descrição do imóvel.",
        "kind": "query",
        "input": [
          {
            "name": "propertyId",
            "type": "PropertyId",
            "required": true
          }
        ],
        "output": [
          {
            "name": "requests",
            "type": "PropertyDescriptionRequest[]"
          }
        ],
        "readsEntities": [
          "PropertyDescriptionRequest"
        ],
        "writesEntities": [],
        "readsTables": [
          "property_description_request"
        ],
        "writesTables": [],
        "usecaseRefs": [
          "listarSolicitacoesDescricaoImovel"
        ],
        "layerContract": {
          "controllerLayer": "layer_2_controllers",
          "mustCallLayer": "layer_3_usecases",
          "directTableAccessForbidden": true
        },
        "rulesApplied": [
          "ruleAiHumanReview"
        ]
      }
    ]
  }
} as const;

export default propertyDetailsPagePlan;
