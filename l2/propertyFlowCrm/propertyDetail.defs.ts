/// <mls fileReference="_102045_/l2/propertyFlowCrm/propertyDetail.defs.ts" enhancement="_blank"/>

export const propertyDetailPagePlan = {
  "schemaVersion": "2026-06-06",
  "artifactType": "page",
  "artifactId": "propertyDetail",
  "moduleName": "propertyFlowCrm",
  "status": "draft",
  "source": {
    "agentName": "agentPlanPageDefinition",
    "stepId": 69,
    "planId": ""
  },
  "data": {
    "pageDefinition": {
      "pageId": "propertyDetail",
      "pageName": "Detalhes do Imóvel",
      "actor": "broker",
      "purpose": "Visualizar informações completas do imóvel, histórico de visitas, leads interessados e alterar status.",
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
      "pageInputs": [
        {
          "name": "propertyId",
          "type": "string",
          "required": true,
          "sources": [
            "routeParam",
            "previousStepResult"
          ],
          "description": "Identificador único do imóvel a ser visualizado",
          "entityRef": "Property",
          "fieldRef": "propertyId"
        }
      ],
      "navigationRefs": [
        {
          "direction": "inbound",
          "pageId": "propertyList",
          "trigger": "Ver detalhes",
          "description": "Navegação a partir da lista de imóveis ao clicar em um item"
        },
        {
          "direction": "outbound",
          "pageId": "propertyForm",
          "trigger": "Editar imóvel",
          "description": "Navegação para edição do imóvel atual"
        },
        {
          "direction": "outbound",
          "pageId": "visitForm",
          "trigger": "Agendar visita",
          "description": "Navegação para agendar uma nova visita para este imóvel"
        }
      ],
      "sections": [
        {
          "sectionName": "Cabeçalho do Imóvel",
          "mode": "readonly",
          "organisms": [
            {
              "organismName": "PropertyHeader",
              "purpose": "Exibir título, endereço, status atual e ações principais do imóvel",
              "userActions": [
                "Editar imóvel",
                "Alterar status"
              ],
              "requiredEntities": [
                "Property"
              ],
              "readsFields": [
                "propertyId",
                "title",
                "address",
                "status",
                "type",
                "price"
              ],
              "writesFields": [],
              "rulesApplied": []
            }
          ]
        },
        {
          "sectionName": "Informações Detalhadas",
          "mode": "readonly",
          "organisms": [
            {
              "organismName": "PropertyDetails",
              "purpose": "Exibir características completas do imóvel como área, quartos, banheiros, vagas e descrição",
              "userActions": [
                "Ver detalhes"
              ],
              "requiredEntities": [
                "Property"
              ],
              "readsFields": [
                "area",
                "bedrooms",
                "bathrooms",
                "parkingSpaces",
                "description",
                "features",
                "photos"
              ],
              "writesFields": [],
              "rulesApplied": []
            }
          ]
        },
        {
          "sectionName": "Alteração de Status",
          "mode": "interactive",
          "organisms": [
            {
              "organismName": "PropertyStatusChanger",
              "purpose": "Permitir ao corretor alterar o status do imóvel seguindo as regras de transição",
              "userActions": [
                "Alterar status"
              ],
              "requiredEntities": [
                "Property"
              ],
              "readsFields": [
                "propertyId",
                "status"
              ],
              "writesFields": [
                "status"
              ],
              "rulesApplied": [
                "rulePropertyStatusTransition"
              ]
            }
          ]
        },
        {
          "sectionName": "Histórico de Visitas",
          "mode": "readonly",
          "organisms": [
            {
              "organismName": "PropertyVisitHistory",
              "purpose": "Listar visitas recentes agendadas ou realizadas para este imóvel",
              "userActions": [
                "Agendar visita"
              ],
              "requiredEntities": [
                "visitEntity"
              ],
              "readsFields": [
                "visitId",
                "scheduledDate",
                "status",
                "leadName"
              ],
              "writesFields": [],
              "rulesApplied": []
            }
          ]
        },
        {
          "sectionName": "Negócios Ativos",
          "mode": "readonly",
          "organisms": [
            {
              "organismName": "PropertyActiveDeals",
              "purpose": "Exibir negócios/propostas em andamento relacionados a este imóvel",
              "userActions": [],
              "requiredEntities": [
                "dealEntity"
              ],
              "readsFields": [
                "dealId",
                "stage",
                "value",
                "leadName",
                "createdAt"
              ],
              "writesFields": [],
              "rulesApplied": []
            }
          ]
        }
      ]
    },
    "bffCommands": [
      {
        "commandName": "getPropertyDetail",
        "purpose": "Obter detalhes completos do imóvel incluindo visitas recentes e negócios ativos",
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
            "name": "property",
            "type": "Property"
          },
          {
            "name": "recentVisits",
            "type": "Visit[]"
          },
          {
            "name": "activeDeals",
            "type": "Deal[]"
          }
        ],
        "readsEntities": [
          "Property",
          "visitEntity",
          "dealEntity"
        ],
        "writesEntities": [],
        "readsTables": [
          "visit",
          "deal"
        ],
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
        "commandName": "changePropertyStatus",
        "purpose": "Alterar o status do imóvel seguindo as regras de transição do ciclo de vida",
        "kind": "mutation",
        "input": [
          {
            "name": "propertyId",
            "type": "string",
            "required": true
          },
          {
            "name": "newStatus",
            "type": "PropertyStatusEnum",
            "required": true
          },
          {
            "name": "reason",
            "type": "string",
            "required": false
          }
        ],
        "output": [
          {
            "name": "propertyId",
            "type": "string"
          },
          {
            "name": "previousStatus",
            "type": "string"
          },
          {
            "name": "currentStatus",
            "type": "string"
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
          "property_metrics",
          "crm_activity_metrics"
        ],
        "usecaseRefs": [
          "changePropertyStatus"
        ],
        "layerContract": {
          "controllerLayer": "layer_2_controllers",
          "mustCallLayer": "layer_3_usecases",
          "directTableAccessForbidden": true
        },
        "rulesApplied": [
          "rulePropertyStatusTransition"
        ]
      }
    ]
  }
} as const;

export default propertyDetailPagePlan;
