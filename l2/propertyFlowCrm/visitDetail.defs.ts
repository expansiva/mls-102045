/// <mls fileReference="_102045_/l2/propertyFlowCrm/visitDetail.defs.ts" enhancement="_blank"/>

export const visitDetailPagePlan = {
  "schemaVersion": "2026-06-06",
  "artifactType": "page",
  "artifactId": "visitDetail",
  "moduleName": "propertyFlowCrm",
  "status": "draft",
  "source": {
    "agentName": "agentPlanPageDefinition",
    "stepId": 67,
    "planId": ""
  },
  "data": {
    "pageDefinition": {
      "pageId": "visitDetail",
      "pageName": "Detalhes da Visita",
      "actor": "broker",
      "purpose": "Visualizar informações da visita e executar ações de confirmação, realização ou cancelamento.",
      "capabilities": [
        "scheduleVisits"
      ],
      "flowRefs": {
        "experienceFlows": [],
        "entityLifecycles": [
          "visitLifecycle"
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
          "name": "visitId",
          "type": "uuid",
          "required": true,
          "sources": [
            "routeParam",
            "previousStepResult"
          ],
          "description": "Identificador único da visita a ser visualizada",
          "entityRef": "Visit",
          "fieldRef": "visitId"
        }
      ],
      "navigationRefs": [
        {
          "direction": "inbound",
          "pageId": "visitList",
          "trigger": "Ver detalhes",
          "description": "Navegação a partir da lista de visitas"
        },
        {
          "direction": "outbound",
          "pageId": "dealForm",
          "trigger": "Criar negócio após visita",
          "description": "Criar negócio após visita realizada com sucesso"
        }
      ],
      "sections": [
        {
          "sectionName": "Cabeçalho da Visita",
          "mode": "readonly",
          "organisms": [
            {
              "organismName": "VisitHeaderCard",
              "purpose": "Exibir informações principais da visita: status, data/hora agendada e corretor responsável.",
              "userActions": [],
              "requiredEntities": [
                "Visit"
              ],
              "readsFields": [
                "Visit.visitId",
                "Visit.status",
                "Visit.scheduledAt",
                "Visit.brokerId",
                "Visit.notes"
              ],
              "writesFields": [],
              "rulesApplied": []
            }
          ]
        },
        {
          "sectionName": "Informações do Lead",
          "mode": "readonly",
          "organisms": [
            {
              "organismName": "LeadInfoCard",
              "purpose": "Exibir dados do lead vinculado à visita para contexto do corretor.",
              "userActions": [],
              "requiredEntities": [
                "Lead"
              ],
              "readsFields": [
                "Lead.leadId",
                "Lead.name",
                "Lead.email",
                "Lead.phone"
              ],
              "writesFields": [],
              "rulesApplied": []
            }
          ]
        },
        {
          "sectionName": "Informações do Imóvel",
          "mode": "readonly",
          "organisms": [
            {
              "organismName": "PropertyInfoCard",
              "purpose": "Exibir dados do imóvel vinculado à visita para referência rápida.",
              "userActions": [],
              "requiredEntities": [
                "Property"
              ],
              "readsFields": [
                "Property.propertyId",
                "Property.title",
                "Property.address",
                "Property.type",
                "Property.status"
              ],
              "writesFields": [],
              "rulesApplied": []
            }
          ]
        },
        {
          "sectionName": "Ações da Visita",
          "mode": "interactive",
          "organisms": [
            {
              "organismName": "VisitActionsPanel",
              "purpose": "Permitir ao corretor executar ações de confirmação, registro de realização ou cancelamento da visita conforme o status atual.",
              "userActions": [
                "Confirmar visita",
                "Registrar realização",
                "Cancelar visita"
              ],
              "requiredEntities": [
                "Visit"
              ],
              "readsFields": [
                "Visit.status"
              ],
              "writesFields": [
                "Visit.status",
                "Visit.feedback",
                "Visit.rating"
              ],
              "rulesApplied": [
                "ruleVisitStatusTransition"
              ]
            }
          ]
        },
        {
          "sectionName": "Formulário de Realização",
          "mode": "interactive",
          "organisms": [
            {
              "organismName": "CompleteVisitForm",
              "purpose": "Capturar feedback e avaliação do lead após a visita ser realizada.",
              "userActions": [
                "Registrar realização"
              ],
              "requiredEntities": [
                "Visit"
              ],
              "readsFields": [
                "Visit.status"
              ],
              "writesFields": [
                "Visit.feedback",
                "Visit.rating"
              ],
              "rulesApplied": [
                "ruleVisitStatusTransition"
              ]
            }
          ]
        },
        {
          "sectionName": "Formulário de Cancelamento",
          "mode": "interactive",
          "organisms": [
            {
              "organismName": "CancelVisitForm",
              "purpose": "Capturar motivo do cancelamento da visita.",
              "userActions": [
                "Cancelar visita"
              ],
              "requiredEntities": [
                "Visit"
              ],
              "readsFields": [
                "Visit.status"
              ],
              "writesFields": [
                "Visit.status"
              ],
              "rulesApplied": [
                "ruleVisitStatusTransition"
              ]
            }
          ]
        }
      ]
    },
    "bffCommands": [
      {
        "commandName": "getVisitDetail",
        "purpose": "Obter detalhes completos da visita incluindo dados do lead e imóvel vinculados",
        "kind": "query",
        "input": [
          {
            "name": "visitId",
            "type": "uuid",
            "required": true
          }
        ],
        "output": [
          {
            "name": "visitId",
            "type": "uuid"
          },
          {
            "name": "status",
            "type": "string"
          },
          {
            "name": "scheduledAt",
            "type": "datetime"
          },
          {
            "name": "notes",
            "type": "string"
          },
          {
            "name": "feedback",
            "type": "string"
          },
          {
            "name": "rating",
            "type": "number"
          },
          {
            "name": "brokerId",
            "type": "uuid"
          },
          {
            "name": "leadId",
            "type": "uuid"
          },
          {
            "name": "leadName",
            "type": "string"
          },
          {
            "name": "leadEmail",
            "type": "string"
          },
          {
            "name": "leadPhone",
            "type": "string"
          },
          {
            "name": "propertyId",
            "type": "uuid"
          },
          {
            "name": "propertyTitle",
            "type": "string"
          },
          {
            "name": "propertyAddress",
            "type": "string"
          },
          {
            "name": "propertyType",
            "type": "string"
          },
          {
            "name": "propertyStatus",
            "type": "string"
          }
        ],
        "readsEntities": [
          "visitEntity"
        ],
        "writesEntities": [],
        "readsTables": [
          "visit"
        ],
        "writesTables": [],
        "usecaseRefs": [
          "listVisits"
        ],
        "layerContract": {
          "controllerLayer": "layer_2_controllers",
          "mustCallLayer": "layer_3_usecases",
          "directTableAccessForbidden": true
        },
        "rulesApplied": []
      },
      {
        "commandName": "confirmVisit",
        "purpose": "Confirmar visita agendada alterando status para confirmed",
        "kind": "mutation",
        "input": [
          {
            "name": "visitId",
            "type": "uuid",
            "required": true
          },
          {
            "name": "confirmedBy",
            "type": "string",
            "required": false
          }
        ],
        "output": [
          {
            "name": "visitId",
            "type": "uuid"
          },
          {
            "name": "status",
            "type": "string"
          }
        ],
        "readsEntities": [
          "visitEntity"
        ],
        "writesEntities": [
          "visitEntity"
        ],
        "readsTables": [
          "visit"
        ],
        "writesTables": [
          "visit",
          "visit_metrics"
        ],
        "usecaseRefs": [
          "confirmVisit"
        ],
        "layerContract": {
          "controllerLayer": "layer_2_controllers",
          "mustCallLayer": "layer_3_usecases",
          "directTableAccessForbidden": true
        },
        "rulesApplied": [
          "ruleVisitStatusTransition"
        ]
      },
      {
        "commandName": "completeVisit",
        "purpose": "Registrar visita como realizada com feedback opcional do lead",
        "kind": "mutation",
        "input": [
          {
            "name": "visitId",
            "type": "uuid",
            "required": true
          },
          {
            "name": "feedback",
            "type": "string",
            "required": false
          },
          {
            "name": "leadInterest",
            "type": "string",
            "required": false
          },
          {
            "name": "nextSteps",
            "type": "string",
            "required": false
          }
        ],
        "output": [
          {
            "name": "visitId",
            "type": "uuid"
          },
          {
            "name": "status",
            "type": "string"
          }
        ],
        "readsEntities": [
          "visitEntity"
        ],
        "writesEntities": [
          "visitEntity"
        ],
        "readsTables": [
          "visit"
        ],
        "writesTables": [
          "visit",
          "visit_metrics",
          "crm_activity_metrics"
        ],
        "usecaseRefs": [
          "completeVisit"
        ],
        "layerContract": {
          "controllerLayer": "layer_2_controllers",
          "mustCallLayer": "layer_3_usecases",
          "directTableAccessForbidden": true
        },
        "rulesApplied": [
          "ruleVisitStatusTransition"
        ]
      },
      {
        "commandName": "cancelVisit",
        "purpose": "Cancelar visita agendada ou confirmada com motivo obrigatório",
        "kind": "mutation",
        "input": [
          {
            "name": "visitId",
            "type": "uuid",
            "required": true
          },
          {
            "name": "cancellationReason",
            "type": "string",
            "required": true
          },
          {
            "name": "cancelledBy",
            "type": "string",
            "required": false
          }
        ],
        "output": [
          {
            "name": "visitId",
            "type": "uuid"
          },
          {
            "name": "status",
            "type": "string"
          }
        ],
        "readsEntities": [
          "visitEntity"
        ],
        "writesEntities": [
          "visitEntity"
        ],
        "readsTables": [
          "visit"
        ],
        "writesTables": [
          "visit",
          "visit_metrics"
        ],
        "usecaseRefs": [
          "cancelVisit"
        ],
        "layerContract": {
          "controllerLayer": "layer_2_controllers",
          "mustCallLayer": "layer_3_usecases",
          "directTableAccessForbidden": true
        },
        "rulesApplied": [
          "ruleVisitStatusTransition"
        ]
      }
    ]
  }
} as const;

export default visitDetailPagePlan;
