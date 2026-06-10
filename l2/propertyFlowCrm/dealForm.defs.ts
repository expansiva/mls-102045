/// <mls fileReference="_102045_/l2/propertyFlowCrm/dealForm.defs.ts" enhancement="_blank"/>

export const dealFormPagePlan = {
  "schemaVersion": "2026-06-06",
  "artifactType": "page",
  "artifactId": "dealForm",
  "moduleName": "propertyFlowCrm",
  "status": "draft",
  "source": {
    "agentName": "agentPlanPageDefinition",
    "stepId": 66,
    "planId": ""
  },
  "data": {
    "pageDefinition": {
      "pageId": "dealForm",
      "pageName": "Criar Negócio",
      "actor": "broker",
      "purpose": "Criar um novo negócio/proposta vinculando lead e imóvel com valor e condições.",
      "capabilities": [
        "trackDeals"
      ],
      "flowRefs": {
        "experienceFlows": [],
        "entityLifecycles": [
          "dealProgression"
        ],
        "taskWorkflows": [],
        "automations": []
      },
      "pluginRefs": [],
      "mdmRefs": [
        "property",
        "lead"
      ],
      "pageInputs": [
        {
          "name": "leadId",
          "type": "uuid",
          "required": false,
          "sources": [
            "routeParam",
            "queryParam",
            "previousStepResult"
          ],
          "description": "ID do lead pré-selecionado (opcional, vindo de leadDetail ou visitDetail)",
          "entityRef": "Lead",
          "fieldRef": "leadId"
        },
        {
          "name": "propertyId",
          "type": "uuid",
          "required": false,
          "sources": [
            "routeParam",
            "queryParam",
            "previousStepResult"
          ],
          "description": "ID do imóvel pré-selecionado (opcional, vindo de visitDetail)",
          "entityRef": "Property",
          "fieldRef": "propertyId"
        }
      ],
      "navigationRefs": [
        {
          "direction": "inbound",
          "pageId": "dealList",
          "trigger": "Criar negócio",
          "description": "Acesso via botão de criar na lista de negócios"
        },
        {
          "direction": "inbound",
          "pageId": "leadDetail",
          "trigger": "Criar negócio",
          "description": "Acesso via ação no detalhe do lead"
        },
        {
          "direction": "inbound",
          "pageId": "visitDetail",
          "trigger": "Criar negócio após visita",
          "description": "Acesso via ação após visita realizada"
        },
        {
          "direction": "outbound",
          "pageId": "dealDetail",
          "trigger": "Após salvar",
          "description": "Navegação para detalhes do negócio criado"
        }
      ],
      "sections": [
        {
          "sectionName": "Seleção de Lead",
          "mode": "interactive",
          "organisms": [
            {
              "organismName": "LeadSelector",
              "purpose": "Permitir busca e seleção do lead associado ao negócio, com pré-seleção se leadId fornecido.",
              "userActions": [
                "Selecionar lead",
                "Buscar lead por nome"
              ],
              "requiredEntities": [
                "Lead"
              ],
              "readsFields": [
                "Lead.leadId",
                "Lead.name",
                "Lead.email",
                "Lead.phone",
                "Lead.temperature",
                "Lead.pipelineStage"
              ],
              "writesFields": [],
              "rulesApplied": [
                "ruleDealRequiredFields"
              ]
            }
          ]
        },
        {
          "sectionName": "Seleção de Imóvel",
          "mode": "interactive",
          "organisms": [
            {
              "organismName": "PropertySelector",
              "purpose": "Permitir busca e seleção do imóvel objeto do negócio, com pré-seleção se propertyId fornecido. Filtra apenas imóveis ativos ou reservados.",
              "userActions": [
                "Selecionar imóvel",
                "Buscar imóvel por endereço ou código"
              ],
              "requiredEntities": [
                "Property"
              ],
              "readsFields": [
                "Property.propertyId",
                "Property.title",
                "Property.address",
                "Property.propertyType",
                "Property.transactionType",
                "Property.price",
                "Property.status"
              ],
              "writesFields": [],
              "rulesApplied": [
                "ruleDealPropertyActive"
              ]
            }
          ]
        },
        {
          "sectionName": "Dados do Negócio",
          "mode": "edit",
          "organisms": [
            {
              "organismName": "DealFormFields",
              "purpose": "Capturar informações do negócio: tipo de negócio, valor proposto, data prevista de fechamento e observações.",
              "userActions": [
                "Definir valor e condições",
                "Preencher tipo de negócio",
                "Informar data prevista de fechamento",
                "Adicionar observações"
              ],
              "requiredEntities": [
                "Deal"
              ],
              "readsFields": [],
              "writesFields": [
                "Deal.dealType",
                "Deal.proposedValue",
                "Deal.expectedCloseDate",
                "Deal.notes"
              ],
              "rulesApplied": [
                "ruleDealRequiredFields"
              ]
            }
          ]
        },
        {
          "sectionName": "Ações",
          "mode": "interactive",
          "organisms": [
            {
              "organismName": "DealFormActions",
              "purpose": "Botões de ação para salvar o negócio ou cancelar a operação.",
              "userActions": [
                "Salvar negócio",
                "Cancelar"
              ],
              "requiredEntities": [
                "Deal"
              ],
              "readsFields": [],
              "writesFields": [
                "Deal.leadId",
                "Deal.propertyId",
                "Deal.brokerId",
                "Deal.dealType",
                "Deal.proposedValue",
                "Deal.pipelineStage",
                "Deal.status"
              ],
              "rulesApplied": [
                "ruleDealRequiredFields",
                "ruleDealPropertyActive"
              ]
            }
          ]
        }
      ]
    },
    "bffCommands": [
      {
        "commandName": "listLeadsForSelection",
        "purpose": "Listar leads disponíveis para seleção no formulário de criação de negócio, com busca e paginação.",
        "kind": "query",
        "input": [
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
            "name": "leads",
            "type": "Lead[]"
          },
          {
            "name": "total",
            "type": "number"
          }
        ],
        "readsEntities": [
          "Lead"
        ],
        "writesEntities": [],
        "readsTables": [],
        "writesTables": [],
        "usecaseRefs": [
          "listLeads"
        ],
        "layerContract": {
          "controllerLayer": "layer_2_controllers",
          "mustCallLayer": "layer_3_usecases",
          "directTableAccessForbidden": true
        },
        "rulesApplied": []
      },
      {
        "commandName": "getLeadById",
        "purpose": "Obter dados de um lead específico para pré-seleção quando leadId é fornecido como input da página.",
        "kind": "query",
        "input": [
          {
            "name": "leadId",
            "type": "uuid",
            "required": true
          }
        ],
        "output": [
          {
            "name": "leadId",
            "type": "uuid"
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
            "name": "temperature",
            "type": "string"
          },
          {
            "name": "pipelineStage",
            "type": "string"
          }
        ],
        "readsEntities": [
          "Lead"
        ],
        "writesEntities": [],
        "readsTables": [],
        "writesTables": [],
        "usecaseRefs": [
          "listLeads"
        ],
        "layerContract": {
          "controllerLayer": "layer_2_controllers",
          "mustCallLayer": "layer_3_usecases",
          "directTableAccessForbidden": true
        },
        "rulesApplied": []
      },
      {
        "commandName": "listPropertiesForSelection",
        "purpose": "Listar imóveis disponíveis (ativos ou reservados) para seleção no formulário de criação de negócio.",
        "kind": "query",
        "input": [
          {
            "name": "searchTerm",
            "type": "string",
            "required": false
          },
          {
            "name": "transactionType",
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
            "name": "properties",
            "type": "Property[]"
          },
          {
            "name": "total",
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
        "rulesApplied": [
          "ruleDealPropertyActive"
        ]
      },
      {
        "commandName": "getPropertyById",
        "purpose": "Obter dados de um imóvel específico para pré-seleção quando propertyId é fornecido como input da página.",
        "kind": "query",
        "input": [
          {
            "name": "propertyId",
            "type": "uuid",
            "required": true
          }
        ],
        "output": [
          {
            "name": "propertyId",
            "type": "uuid"
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
            "name": "propertyType",
            "type": "string"
          },
          {
            "name": "transactionType",
            "type": "string"
          },
          {
            "name": "price",
            "type": "decimal"
          },
          {
            "name": "status",
            "type": "string"
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
        "rulesApplied": [
          "ruleDealPropertyActive"
        ]
      },
      {
        "commandName": "createDeal",
        "purpose": "Criar novo negócio/proposta vinculando lead, imóvel e corretor com valor e condições.",
        "kind": "mutation",
        "input": [
          {
            "name": "leadId",
            "type": "uuid",
            "required": true
          },
          {
            "name": "propertyId",
            "type": "uuid",
            "required": true
          },
          {
            "name": "dealType",
            "type": "string",
            "required": true
          },
          {
            "name": "proposedValue",
            "type": "decimal",
            "required": true
          },
          {
            "name": "expectedCloseDate",
            "type": "date",
            "required": false
          },
          {
            "name": "notes",
            "type": "string",
            "required": false
          }
        ],
        "output": [
          {
            "name": "dealId",
            "type": "uuid"
          },
          {
            "name": "status",
            "type": "string"
          }
        ],
        "readsEntities": [
          "Lead",
          "Property"
        ],
        "writesEntities": [
          "Deal"
        ],
        "readsTables": [],
        "writesTables": [
          "deal"
        ],
        "usecaseRefs": [
          "createDeal"
        ],
        "layerContract": {
          "controllerLayer": "layer_2_controllers",
          "mustCallLayer": "layer_3_usecases",
          "directTableAccessForbidden": true
        },
        "rulesApplied": [
          "ruleDealRequiredFields",
          "ruleDealPropertyActive"
        ]
      }
    ]
  }
} as const;

export default dealFormPagePlan;
