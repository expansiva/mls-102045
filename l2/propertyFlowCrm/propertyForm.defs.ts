/// <mls fileReference="_102045_/l2/propertyFlowCrm/propertyForm.defs.ts" enhancement="_blank"/>

export const propertyFormPagePlan = {
  "schemaVersion": "2026-06-06",
  "artifactType": "page",
  "artifactId": "propertyForm",
  "moduleName": "propertyFlowCrm",
  "status": "draft",
  "source": {
    "agentName": "agentPlanPageDefinition",
    "stepId": 68,
    "planId": ""
  },
  "data": {
    "pageDefinition": {
      "pageId": "propertyForm",
      "pageName": "Cadastro de Imóvel",
      "actor": "broker",
      "purpose": "Cadastrar ou editar informações de um imóvel incluindo características, fotos e geração de descrição com IA.",
      "capabilities": [
        "manageProperties",
        "generatePropertyDescription"
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
      "pageInputs": [
        {
          "name": "propertyId",
          "type": "string",
          "required": false,
          "sources": [
            "routeParam",
            "previousStepResult"
          ],
          "description": "ID do imóvel para edição. Quando ausente, o formulário opera em modo de criação."
        }
      ],
      "navigationRefs": [
        {
          "direction": "inbound",
          "pageId": "propertyList",
          "trigger": "Cadastrar imóvel",
          "description": "Corretor clica em cadastrar novo imóvel na lista"
        },
        {
          "direction": "inbound",
          "pageId": "propertyDetail",
          "trigger": "Editar imóvel",
          "description": "Corretor clica em editar imóvel na página de detalhes"
        },
        {
          "direction": "outbound",
          "pageId": "propertyDetail",
          "trigger": "Após salvar",
          "description": "Redireciona para detalhes do imóvel após salvar com sucesso"
        }
      ],
      "sections": [
        {
          "sectionName": "Dados Básicos do Imóvel",
          "mode": "edit",
          "organisms": [
            {
              "organismName": "PropertyBasicInfoForm",
              "purpose": "Formulário para preenchimento de título, tipo de imóvel, tipo de transação, preço e status.",
              "userActions": [
                "Preencher título",
                "Selecionar tipo de imóvel",
                "Selecionar tipo de transação",
                "Informar preço"
              ],
              "requiredEntities": [
                "Property"
              ],
              "readsFields": [
                "Property.title",
                "Property.propertyType",
                "Property.transactionType",
                "Property.price",
                "Property.status"
              ],
              "writesFields": [
                "Property.title",
                "Property.propertyType",
                "Property.transactionType",
                "Property.price"
              ],
              "rulesApplied": [
                "rulePropertyRequiredFields"
              ]
            }
          ]
        },
        {
          "sectionName": "Endereço",
          "mode": "edit",
          "organisms": [
            {
              "organismName": "PropertyAddressForm",
              "purpose": "Formulário para preenchimento do endereço completo do imóvel.",
              "userActions": [
                "Preencher logradouro",
                "Preencher bairro",
                "Preencher cidade",
                "Preencher estado"
              ],
              "requiredEntities": [
                "Property"
              ],
              "readsFields": [
                "Property.address",
                "Property.neighborhood",
                "Property.city",
                "Property.state"
              ],
              "writesFields": [
                "Property.address",
                "Property.neighborhood",
                "Property.city",
                "Property.state"
              ],
              "rulesApplied": [
                "rulePropertyRequiredFields"
              ]
            }
          ]
        },
        {
          "sectionName": "Características",
          "mode": "edit",
          "organisms": [
            {
              "organismName": "PropertyFeaturesForm",
              "purpose": "Formulário para preenchimento de área, quartos, banheiros, vagas e características adicionais.",
              "userActions": [
                "Informar área",
                "Informar número de quartos",
                "Informar número de banheiros",
                "Informar vagas de garagem",
                "Adicionar características"
              ],
              "requiredEntities": [
                "Property"
              ],
              "readsFields": [
                "Property.area",
                "Property.bedrooms",
                "Property.bathrooms",
                "Property.parkingSpaces",
                "Property.features"
              ],
              "writesFields": [
                "Property.area",
                "Property.bedrooms",
                "Property.bathrooms",
                "Property.parkingSpaces",
                "Property.features"
              ],
              "rulesApplied": []
            }
          ]
        },
        {
          "sectionName": "Descrição",
          "mode": "edit",
          "organisms": [
            {
              "organismName": "PropertyDescriptionForm",
              "purpose": "Área de texto para descrição do imóvel com opção de geração automática via IA.",
              "userActions": [
                "Preencher descrição manualmente",
                "Gerar descrição com IA"
              ],
              "requiredEntities": [
                "Property"
              ],
              "readsFields": [
                "Property.description",
                "Property.features",
                "Property.propertyType",
                "Property.bedrooms",
                "Property.bathrooms",
                "Property.area"
              ],
              "writesFields": [
                "Property.description"
              ],
              "rulesApplied": []
            }
          ]
        },
        {
          "sectionName": "Fotos",
          "mode": "edit",
          "organisms": [
            {
              "organismName": "PropertyPhotosUploader",
              "purpose": "Componente para upload e gerenciamento de fotos do imóvel.",
              "userActions": [
                "Fazer upload de fotos",
                "Remover fotos",
                "Reordenar fotos"
              ],
              "requiredEntities": [
                "Property"
              ],
              "readsFields": [
                "Property.photos"
              ],
              "writesFields": [
                "Property.photos"
              ],
              "rulesApplied": []
            }
          ]
        },
        {
          "sectionName": "Ações",
          "mode": "action",
          "organisms": [
            {
              "organismName": "PropertyFormActions",
              "purpose": "Botões de ação para salvar ou cancelar o cadastro/edição do imóvel.",
              "userActions": [
                "Salvar imóvel",
                "Cancelar"
              ],
              "requiredEntities": [
                "Property"
              ],
              "readsFields": [],
              "writesFields": [],
              "rulesApplied": [
                "rulePropertyRequiredFields"
              ]
            }
          ]
        }
      ]
    },
    "bffCommands": [
      {
        "commandName": "getPropertyDetail",
        "purpose": "Obter detalhes do imóvel para preencher o formulário em modo de edição",
        "kind": "query",
        "input": [
          {
            "name": "propertyId",
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
            "name": "title",
            "type": "string"
          },
          {
            "name": "propertyType",
            "type": "string"
          },
          {
            "name": "transactionType",
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
            "name": "address",
            "type": "string"
          },
          {
            "name": "neighborhood",
            "type": "string"
          },
          {
            "name": "city",
            "type": "string"
          },
          {
            "name": "state",
            "type": "string"
          },
          {
            "name": "area",
            "type": "number"
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
            "name": "parkingSpaces",
            "type": "number"
          },
          {
            "name": "description",
            "type": "string"
          },
          {
            "name": "features",
            "type": "string[]"
          },
          {
            "name": "photos",
            "type": "string[]"
          }
        ],
        "readsEntities": [
          "Property"
        ],
        "writesEntities": [],
        "readsTables": [],
        "writesTables": [],
        "usecaseRefs": [
          "getPropertyDetail"
        ],
        "layerContract": {
          "controllerLayer": "layer_2_controllers",
          "mustCallLayer": "layer_3_usecases",
          "directTableAccessForbidden": true
        },
        "rulesApplied": []
      },
      {
        "commandName": "createProperty",
        "purpose": "Cadastrar novo imóvel no sistema",
        "kind": "mutation",
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
            "name": "transactionType",
            "type": "string",
            "required": true
          },
          {
            "name": "price",
            "type": "number",
            "required": true
          },
          {
            "name": "address",
            "type": "string",
            "required": true
          },
          {
            "name": "neighborhood",
            "type": "string",
            "required": true
          },
          {
            "name": "city",
            "type": "string",
            "required": true
          },
          {
            "name": "state",
            "type": "string",
            "required": true
          },
          {
            "name": "area",
            "type": "number",
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
            "name": "parkingSpaces",
            "type": "number",
            "required": false
          },
          {
            "name": "description",
            "type": "string",
            "required": false
          },
          {
            "name": "features",
            "type": "string[]",
            "required": false
          },
          {
            "name": "photos",
            "type": "string[]",
            "required": false
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
          "Property"
        ],
        "readsTables": [],
        "writesTables": [
          "property_metrics",
          "crm_activity_metrics"
        ],
        "usecaseRefs": [
          "createProperty"
        ],
        "layerContract": {
          "controllerLayer": "layer_2_controllers",
          "mustCallLayer": "layer_3_usecases",
          "directTableAccessForbidden": true
        },
        "rulesApplied": [
          "rulePropertyRequiredFields"
        ]
      },
      {
        "commandName": "updateProperty",
        "purpose": "Atualizar imóvel existente",
        "kind": "mutation",
        "input": [
          {
            "name": "propertyId",
            "type": "string",
            "required": true
          },
          {
            "name": "title",
            "type": "string",
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
            "name": "price",
            "type": "number",
            "required": false
          },
          {
            "name": "address",
            "type": "string",
            "required": false
          },
          {
            "name": "neighborhood",
            "type": "string",
            "required": false
          },
          {
            "name": "city",
            "type": "string",
            "required": false
          },
          {
            "name": "state",
            "type": "string",
            "required": false
          },
          {
            "name": "area",
            "type": "number",
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
            "name": "parkingSpaces",
            "type": "number",
            "required": false
          },
          {
            "name": "description",
            "type": "string",
            "required": false
          },
          {
            "name": "features",
            "type": "string[]",
            "required": false
          },
          {
            "name": "photos",
            "type": "string[]",
            "required": false
          }
        ],
        "output": [
          {
            "name": "propertyId",
            "type": "string"
          },
          {
            "name": "updated",
            "type": "boolean"
          }
        ],
        "readsEntities": [
          "Property"
        ],
        "writesEntities": [
          "Property"
        ],
        "readsTables": [],
        "writesTables": [],
        "usecaseRefs": [
          "updateProperty"
        ],
        "layerContract": {
          "controllerLayer": "layer_2_controllers",
          "mustCallLayer": "layer_3_usecases",
          "directTableAccessForbidden": true
        },
        "rulesApplied": [
          "rulePropertyRequiredFields"
        ]
      },
      {
        "commandName": "generatePropertyDescription",
        "purpose": "Gerar descrição comercial do imóvel utilizando IA a partir das características informadas",
        "kind": "query",
        "input": [
          {
            "name": "propertyType",
            "type": "string",
            "required": true
          },
          {
            "name": "transactionType",
            "type": "string",
            "required": true
          },
          {
            "name": "area",
            "type": "number",
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
            "name": "parkingSpaces",
            "type": "number",
            "required": false
          },
          {
            "name": "features",
            "type": "string[]",
            "required": false
          },
          {
            "name": "neighborhood",
            "type": "string",
            "required": false
          },
          {
            "name": "city",
            "type": "string",
            "required": false
          }
        ],
        "output": [
          {
            "name": "generatedDescription",
            "type": "string"
          }
        ],
        "readsEntities": [],
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
      }
    ]
  }
} as const;

export default propertyFormPagePlan;
