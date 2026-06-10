/// <mls fileReference="_102045_/l2/propertyFlowCrm/dealDetail.defs.ts" enhancement="_blank"/>

export const dealDetailPagePlan = {
  "schemaVersion": "2026-06-06",
  "artifactType": "page",
  "artifactId": "dealDetail",
  "moduleName": "propertyFlowCrm",
  "status": "draft",
  "source": {
    "agentName": "agentPlanPageDefinition",
    "stepId": 70,
    "planId": ""
  },
  "data": {
    "pageDefinition": {
      "pageId": "dealDetail",
      "pageName": "Detalhes do Negócio",
      "actor": "broker",
      "purpose": "Visualizar informações do negócio e executar ações de avanço de etapa ou fechamento.",
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
          "name": "dealId",
          "type": "uuid",
          "required": true,
          "sources": [
            "routeParam",
            "previousStepResult"
          ],
          "description": "Identificador único do negócio a ser visualizado",
          "entityRef": "Deal",
          "fieldRef": "dealId"
        }
      ],
      "navigationRefs": [
        {
          "direction": "inbound",
          "pageId": "dealList",
          "trigger": "Ver detalhes",
          "description": "Navegação a partir da lista de negócios"
        },
        {
          "direction": "outbound",
          "pageId": "leadDetail",
          "trigger": "Ver lead",
          "description": "Navegar para detalhes do lead associado"
        },
        {
          "direction": "outbound",
          "pageId": "propertyDetail",
          "trigger": "Ver imóvel",
          "description": "Navegar para detalhes do imóvel associado"
        }
      ],
      "sections": [
        {
          "sectionName": "Cabeçalho do Negócio",
          "mode": "readonly",
          "organisms": [
            {
              "organismName": "DealHeaderCard",
              "purpose": "Exibir resumo do negócio com status atual, etapa do pipeline, tipo e valores",
              "userActions": [
                "Ver detalhes"
              ],
              "requiredEntities": [
                "Deal"
              ],
              "readsFields": [
                "Deal.dealId",
                "Deal.dealType",
                "Deal.pipelineStage",
                "Deal.status",
                "Deal.proposedValue",
                "Deal.acceptedValue",
                "Deal.expectedCloseDate",
                "Deal.actualCloseDate",
                "Deal.createdAt"
              ],
              "writesFields": [],
              "rulesApplied": []
            }
          ]
        },
        {
          "sectionName": "Informações Relacionadas",
          "mode": "readonly",
          "organisms": [
            {
              "organismName": "DealLeadSummary",
              "purpose": "Exibir resumo do lead associado ao negócio com link para detalhes",
              "userActions": [
                "Ver lead"
              ],
              "requiredEntities": [
                "Lead"
              ],
              "readsFields": [
                "Lead.leadId",
                "Lead.name",
                "Lead.email",
                "Lead.phone",
                "Lead.temperature"
              ],
              "writesFields": [],
              "rulesApplied": []
            },
            {
              "organismName": "DealPropertySummary",
              "purpose": "Exibir resumo do imóvel associado ao negócio com link para detalhes",
              "userActions": [
                "Ver imóvel"
              ],
              "requiredEntities": [
                "Property"
              ],
              "readsFields": [
                "Property.propertyId",
                "Property.title",
                "Property.address",
                "Property.propertyType",
                "Property.price",
                "Property.status"
              ],
              "writesFields": [],
              "rulesApplied": []
            }
          ]
        },
        {
          "sectionName": "Histórico e Notas",
          "mode": "readonly",
          "organisms": [
            {
              "organismName": "DealNotesPanel",
              "purpose": "Exibir notas e observações registradas sobre o negócio",
              "userActions": [
                "Ver detalhes"
              ],
              "requiredEntities": [
                "Deal"
              ],
              "readsFields": [
                "Deal.notes",
                "Deal.lossReason"
              ],
              "writesFields": [],
              "rulesApplied": []
            }
          ]
        },
        {
          "sectionName": "Ações do Negócio",
          "mode": "interactive",
          "organisms": [
            {
              "organismName": "DealStageAdvanceForm",
              "purpose": "Permitir avançar o negócio para a próxima etapa do pipeline",
              "userActions": [
                "Avançar etapa"
              ],
              "requiredEntities": [
                "Deal"
              ],
              "readsFields": [
                "Deal.dealId",
                "Deal.pipelineStage",
                "Deal.status"
              ],
              "writesFields": [
                "Deal.pipelineStage",
                "Deal.updatedAt"
              ],
              "rulesApplied": [
                "ruleDealPipelineTransition"
              ]
            },
            {
              "organismName": "DealCloseWonForm",
              "purpose": "Permitir fechar o negócio como ganho com valor final e data de fechamento",
              "userActions": [
                "Fechar como ganho"
              ],
              "requiredEntities": [
                "Deal"
              ],
              "readsFields": [
                "Deal.dealId",
                "Deal.pipelineStage",
                "Deal.status",
                "Deal.proposedValue"
              ],
              "writesFields": [
                "Deal.pipelineStage",
                "Deal.status",
                "Deal.acceptedValue",
                "Deal.actualCloseDate"
              ],
              "rulesApplied": [
                "ruleDealPipelineTransition"
              ]
            },
            {
              "organismName": "DealCloseLostForm",
              "purpose": "Permitir fechar o negócio como perdido com motivo da perda",
              "userActions": [
                "Fechar como perdido"
              ],
              "requiredEntities": [
                "Deal"
              ],
              "readsFields": [
                "Deal.dealId",
                "Deal.pipelineStage",
                "Deal.status"
              ],
              "writesFields": [
                "Deal.pipelineStage",
                "Deal.status",
                "Deal.lossReason",
                "Deal.actualCloseDate"
              ],
              "rulesApplied": [
                "ruleDealPipelineTransition"
              ]
            }
          ]
        }
      ]
    },
    "bffCommands": [
      {
        "commandName": "getDealDetail",
        "purpose": "Obter detalhes completos do negócio incluindo informações do lead e imóvel associados",
        "kind": "query",
        "input": [
          {
            "name": "dealId",
            "type": "uuid",
            "required": true
          }
        ],
        "output": [
          {
            "name": "dealId",
            "type": "uuid"
          },
          {
            "name": "dealType",
            "type": "string"
          },
          {
            "name": "pipelineStage",
            "type": "string"
          },
          {
            "name": "status",
            "type": "string"
          },
          {
            "name": "proposedValue",
            "type": "decimal"
          },
          {
            "name": "acceptedValue",
            "type": "decimal"
          },
          {
            "name": "expectedCloseDate",
            "type": "date"
          },
          {
            "name": "actualCloseDate",
            "type": "date"
          },
          {
            "name": "notes",
            "type": "string"
          },
          {
            "name": "lossReason",
            "type": "string"
          },
          {
            "name": "createdAt",
            "type": "datetime"
          },
          {
            "name": "updatedAt",
            "type": "datetime"
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
            "name": "leadTemperature",
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
            "name": "propertyPrice",
            "type": "decimal"
          },
          {
            "name": "propertyStatus",
            "type": "string"
          }
        ],
        "readsEntities": [
          "dealEntity"
        ],
        "writesEntities": [],
        "readsTables": [
          "deal"
        ],
        "writesTables": [],
        "usecaseRefs": [
          "listDeals"
        ],
        "layerContract": {
          "controllerLayer": "layer_2_controllers",
          "mustCallLayer": "layer_3_usecases",
          "directTableAccessForbidden": true
        },
        "rulesApplied": []
      },
      {
        "commandName": "advanceDealStage",
        "purpose": "Avançar negócio para a próxima etapa do pipeline",
        "kind": "mutation",
        "input": [
          {
            "name": "dealId",
            "type": "uuid",
            "required": true
          },
          {
            "name": "newStage",
            "type": "DealStatusEnum",
            "required": true
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
            "name": "previousStage",
            "type": "string"
          },
          {
            "name": "currentStage",
            "type": "string"
          }
        ],
        "readsEntities": [
          "dealEntity"
        ],
        "writesEntities": [
          "dealEntity"
        ],
        "readsTables": [
          "deal"
        ],
        "writesTables": [
          "deal",
          "deal_pipeline_metrics"
        ],
        "usecaseRefs": [
          "advanceDealStage"
        ],
        "layerContract": {
          "controllerLayer": "layer_2_controllers",
          "mustCallLayer": "layer_3_usecases",
          "directTableAccessForbidden": true
        },
        "rulesApplied": [
          "ruleDealPipelineTransition"
        ]
      },
      {
        "commandName": "closeDealWon",
        "purpose": "Fechar negócio como ganho com valor final e data de fechamento",
        "kind": "mutation",
        "input": [
          {
            "name": "dealId",
            "type": "uuid",
            "required": true
          },
          {
            "name": "finalValue",
            "type": "decimal",
            "required": true
          },
          {
            "name": "closingDate",
            "type": "date",
            "required": true
          },
          {
            "name": "commissionPercentage",
            "type": "decimal",
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
          },
          {
            "name": "propertyNewStatus",
            "type": "string"
          }
        ],
        "readsEntities": [
          "dealEntity"
        ],
        "writesEntities": [
          "dealEntity"
        ],
        "readsTables": [
          "deal"
        ],
        "writesTables": [
          "deal",
          "deal_pipeline_metrics",
          "crm_activity_metrics"
        ],
        "usecaseRefs": [
          "closeDealWon"
        ],
        "layerContract": {
          "controllerLayer": "layer_2_controllers",
          "mustCallLayer": "layer_3_usecases",
          "directTableAccessForbidden": true
        },
        "rulesApplied": [
          "ruleDealPipelineTransition"
        ]
      },
      {
        "commandName": "closeDealLost",
        "purpose": "Fechar negócio como perdido com motivo da perda",
        "kind": "mutation",
        "input": [
          {
            "name": "dealId",
            "type": "uuid",
            "required": true
          },
          {
            "name": "lossReason",
            "type": "string",
            "required": true
          },
          {
            "name": "competitorInfo",
            "type": "string",
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
          "dealEntity"
        ],
        "writesEntities": [
          "dealEntity"
        ],
        "readsTables": [
          "deal"
        ],
        "writesTables": [
          "deal",
          "deal_pipeline_metrics"
        ],
        "usecaseRefs": [
          "closeDealLost"
        ],
        "layerContract": {
          "controllerLayer": "layer_2_controllers",
          "mustCallLayer": "layer_3_usecases",
          "directTableAccessForbidden": true
        },
        "rulesApplied": [
          "ruleDealPipelineTransition"
        ]
      }
    ]
  }
} as const;

export default dealDetailPagePlan;
