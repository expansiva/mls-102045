/// <mls fileReference="_102045_/l2/propertyFlowCrm/leadDetail.defs.ts" enhancement="_blank"/>

export const leadDetailPagePlan = {
  "schemaVersion": "2026-06-06",
  "artifactType": "page",
  "artifactId": "leadDetail",
  "moduleName": "propertyFlowCrm",
  "status": "draft",
  "source": {
    "agentName": "agentPlanPageDefinition",
    "stepId": 70,
    "planId": ""
  },
  "data": {
    "pageDefinition": {
      "pageId": "leadDetail",
      "pageName": "Detalhes do Lead",
      "actor": "broker",
      "purpose": "Visualizar informações completas do lead, histórico de interações, classificação de temperatura com IA e sugestões de follow-up.",
      "capabilities": [
        "manageLeads",
        "classifyLeadTemperature",
        "suggestFollowUp"
      ],
      "flowRefs": {
        "experienceFlows": [],
        "entityLifecycles": [
          "leadQualification"
        ],
        "taskWorkflows": [],
        "automations": [
          "leadFollowUp"
        ]
      },
      "pluginRefs": [],
      "mdmRefs": [
        "lead"
      ],
      "pageInputs": [
        {
          "name": "leadId",
          "type": "uuid",
          "required": true,
          "sources": [
            "routeParam",
            "previousStepResult"
          ],
          "description": "Identificador único do lead a ser visualizado",
          "entityRef": "Lead",
          "fieldRef": "leadId"
        }
      ],
      "navigationRefs": [
        {
          "direction": "inbound",
          "pageId": "leadList",
          "trigger": "Ver detalhes",
          "description": "Navegação a partir da lista de leads"
        },
        {
          "direction": "outbound",
          "pageId": "leadForm",
          "trigger": "Editar lead",
          "description": "Navegar para edição do lead"
        },
        {
          "direction": "outbound",
          "pageId": "interactionForm",
          "trigger": "Registrar interação",
          "description": "Navegar para registro de nova interação"
        },
        {
          "direction": "outbound",
          "pageId": "visitForm",
          "trigger": "Agendar visita",
          "description": "Navegar para agendamento de visita"
        },
        {
          "direction": "outbound",
          "pageId": "dealForm",
          "trigger": "Criar negócio",
          "description": "Navegar para criação de negócio"
        }
      ],
      "sections": [
        {
          "sectionName": "Cabeçalho do Lead",
          "mode": "readonly",
          "organisms": [
            {
              "organismName": "LeadHeaderCard",
              "purpose": "Exibir informações principais do lead com nome, contato, etapa do pipeline e temperatura",
              "userActions": [
                "Editar lead"
              ],
              "requiredEntities": [
                "Lead"
              ],
              "readsFields": [
                "Lead.leadId",
                "Lead.fullName",
                "Lead.email",
                "Lead.phone",
                "Lead.pipelineStage",
                "Lead.temperature",
                "Lead.createdAt"
              ],
              "writesFields": [],
              "rulesApplied": []
            }
          ]
        },
        {
          "sectionName": "Ações do Pipeline",
          "mode": "interactive",
          "organisms": [
            {
              "organismName": "PipelineStageActions",
              "purpose": "Permitir mover o lead para outra etapa do pipeline respeitando as transições válidas",
              "userActions": [
                "Mover etapa"
              ],
              "requiredEntities": [
                "Lead"
              ],
              "readsFields": [
                "Lead.leadId",
                "Lead.pipelineStage"
              ],
              "writesFields": [
                "Lead.pipelineStage"
              ],
              "rulesApplied": [
                "ruleLeadPipelineTransition"
              ]
            }
          ]
        },
        {
          "sectionName": "Classificação e Follow-up com IA",
          "mode": "interactive",
          "organisms": [
            {
              "organismName": "LeadTemperatureClassifier",
              "purpose": "Exibir e permitir solicitar classificação de temperatura do lead via IA",
              "userActions": [
                "Classificar temperatura"
              ],
              "requiredEntities": [
                "Lead"
              ],
              "readsFields": [
                "Lead.leadId",
                "Lead.temperature"
              ],
              "writesFields": [
                "Lead.temperature"
              ],
              "rulesApplied": []
            },
            {
              "organismName": "FollowUpSuggestionPanel",
              "purpose": "Exibir sugestão de follow-up gerada por IA e permitir solicitar nova sugestão",
              "userActions": [
                "Solicitar sugestão de follow-up"
              ],
              "requiredEntities": [
                "Lead"
              ],
              "readsFields": [
                "Lead.leadId",
                "Lead.suggestedFollowUpMessage",
                "Lead.nextFollowUpAt"
              ],
              "writesFields": [
                "Lead.suggestedFollowUpMessage",
                "Lead.nextFollowUpAt"
              ],
              "rulesApplied": []
            }
          ]
        },
        {
          "sectionName": "Histórico de Interações",
          "mode": "readonly",
          "organisms": [
            {
              "organismName": "InteractionTimeline",
              "purpose": "Exibir timeline cronológica de todas as interações registradas com o lead",
              "userActions": [
                "Ver detalhes",
                "Registrar interação"
              ],
              "requiredEntities": [
                "LeadInteraction"
              ],
              "readsFields": [
                "LeadInteraction.interactionId",
                "LeadInteraction.interactionType",
                "LeadInteraction.direction",
                "LeadInteraction.summary",
                "LeadInteraction.interactionAt"
              ],
              "writesFields": [],
              "rulesApplied": []
            }
          ]
        },
        {
          "sectionName": "Visitas Relacionadas",
          "mode": "readonly",
          "organisms": [
            {
              "organismName": "LeadVisitsList",
              "purpose": "Listar visitas agendadas ou realizadas para este lead",
              "userActions": [
                "Ver detalhes",
                "Agendar visita"
              ],
              "requiredEntities": [
                "Visit"
              ],
              "readsFields": [
                "Visit.visitId",
                "Visit.propertyId",
                "Visit.scheduledAt",
                "Visit.status"
              ],
              "writesFields": [],
              "rulesApplied": []
            }
          ]
        },
        {
          "sectionName": "Negócios Relacionados",
          "mode": "readonly",
          "organisms": [
            {
              "organismName": "LeadDealsList",
              "purpose": "Listar negócios/propostas associados a este lead",
              "userActions": [
                "Ver detalhes",
                "Criar negócio"
              ],
              "requiredEntities": [
                "Deal"
              ],
              "readsFields": [
                "Deal.dealId",
                "Deal.propertyId",
                "Deal.stage",
                "Deal.value",
                "Deal.createdAt"
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
        "commandName": "getLeadDetails",
        "purpose": "Obter detalhes completos do lead incluindo dados de contato, etapa do pipeline, temperatura e sugestão de follow-up",
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
            "name": "fullName",
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
            "name": "pipelineStage",
            "type": "LeadStatusEnum"
          },
          {
            "name": "temperature",
            "type": "LeadTemperatureEnum"
          },
          {
            "name": "suggestedFollowUpMessage",
            "type": "string"
          },
          {
            "name": "nextFollowUpAt",
            "type": "datetime"
          },
          {
            "name": "lastContactAt",
            "type": "datetime"
          },
          {
            "name": "createdAt",
            "type": "datetime"
          }
        ],
        "readsEntities": [
          "Lead"
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
        "commandName": "listLeadInteractions",
        "purpose": "Obter histórico de interações do lead ordenado cronologicamente",
        "kind": "query",
        "input": [
          {
            "name": "leadId",
            "type": "uuid",
            "required": true
          },
          {
            "name": "interactionType",
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
            "name": "interactions",
            "type": "LeadInteraction[]"
          },
          {
            "name": "total",
            "type": "number"
          }
        ],
        "readsEntities": [
          "LeadInteraction"
        ],
        "writesEntities": [],
        "readsTables": [
          "lead_interaction"
        ],
        "writesTables": [],
        "usecaseRefs": [
          "listLeadInteractions"
        ],
        "layerContract": {
          "controllerLayer": "layer_2_controllers",
          "mustCallLayer": "layer_3_usecases",
          "directTableAccessForbidden": true
        },
        "rulesApplied": []
      },
      {
        "commandName": "listLeadVisits",
        "purpose": "Listar visitas agendadas ou realizadas para o lead",
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
            "name": "visits",
            "type": "Visit[]"
          },
          {
            "name": "total",
            "type": "number"
          }
        ],
        "readsEntities": [
          "Visit"
        ],
        "writesEntities": [],
        "readsTables": [
          "visit"
        ],
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
        "commandName": "listLeadDeals",
        "purpose": "Listar negócios/propostas associados ao lead",
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
            "name": "deals",
            "type": "Deal[]"
          },
          {
            "name": "total",
            "type": "number"
          }
        ],
        "readsEntities": [
          "Deal"
        ],
        "writesEntities": [],
        "readsTables": [
          "deal"
        ],
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
        "commandName": "moveLeadStage",
        "purpose": "Mover lead para outra etapa do pipeline respeitando transições válidas",
        "kind": "mutation",
        "input": [
          {
            "name": "leadId",
            "type": "uuid",
            "required": true
          },
          {
            "name": "newStage",
            "type": "LeadStatusEnum",
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
            "name": "leadId",
            "type": "uuid"
          },
          {
            "name": "previousStage",
            "type": "LeadStatusEnum"
          },
          {
            "name": "currentStage",
            "type": "LeadStatusEnum"
          }
        ],
        "readsEntities": [
          "Lead"
        ],
        "writesEntities": [
          "Lead"
        ],
        "readsTables": [],
        "writesTables": [
          "lead_metrics",
          "crm_activity_metrics"
        ],
        "usecaseRefs": [
          "moveLeadStage"
        ],
        "layerContract": {
          "controllerLayer": "layer_2_controllers",
          "mustCallLayer": "layer_3_usecases",
          "directTableAccessForbidden": true
        },
        "rulesApplied": [
          "ruleLeadPipelineTransition"
        ]
      },
      {
        "commandName": "classifyLeadTemperature",
        "purpose": "Solicitar classificação de temperatura do lead via IA baseada no histórico de interações",
        "kind": "mutation",
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
            "name": "temperature",
            "type": "LeadTemperatureEnum"
          },
          {
            "name": "classificationReason",
            "type": "string"
          }
        ],
        "readsEntities": [
          "Lead",
          "LeadInteraction"
        ],
        "writesEntities": [
          "Lead"
        ],
        "readsTables": [
          "lead_interaction"
        ],
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
        "commandName": "generateFollowUpSuggestion",
        "purpose": "Gerar sugestão de mensagem de follow-up via IA para o lead",
        "kind": "mutation",
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
            "name": "suggestedFollowUpMessage",
            "type": "string"
          },
          {
            "name": "nextFollowUpAt",
            "type": "datetime"
          }
        ],
        "readsEntities": [
          "Lead",
          "LeadInteraction"
        ],
        "writesEntities": [
          "Lead"
        ],
        "readsTables": [
          "lead_interaction"
        ],
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

export default leadDetailPagePlan;
