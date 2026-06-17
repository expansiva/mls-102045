/// <mls fileReference="_102045_/l2/propertyFlowCrm/leadsPipeline.defs.ts" enhancement="_blank"/>

export const leadsPipelinePagePlan = {
  "schemaVersion": "2026-06-06",
  "artifactType": "page",
  "artifactId": "leadsPipeline",
  "moduleName": "propertyFlowCrm",
  "status": "draft",
  "source": {
    "agentName": "agentPlanPageDefinition",
    "stepId": 60,
    "planId": ""
  },
  "data": {
    "pageDefinition": {
      "pageId": "leadsPipeline",
      "pageName": "Pipeline de leads",
      "actor": "corretor",
      "purpose": "Visualizar e mover leads entre etapas e cadastrar novos leads.",
      "capabilities": [
        "manageLeads",
        "leadPipeline"
      ],
      "flowRefs": {
        "experienceFlows": [],
        "entityLifecycles": [
          "leadPipelineStageFlow"
        ],
        "taskWorkflows": [],
        "automations": [
          "leadQualificationRequestFlow"
        ]
      },
      "pluginRefs": [],
      "mdmRefs": [
        "lead",
        "broker"
      ],
      "pageInputs": [],
      "navigationRefs": [
        {
          "direction": "outbound",
          "pageId": "leadDetails",
          "trigger": "abrir detalhes do lead",
          "description": "Abrir o lead selecionado para edição completa."
        }
      ],
      "sections": [
        {
          "sectionName": "Kanban do pipeline",
          "mode": "view",
          "organisms": [
            {
              "organismName": "leadPipelineBoard",
              "purpose": "Exibir leads por etapa e permitir arrastar para mudar de estágio.",
              "userActions": [
                "selecionarLead",
                "moverLeadEntreEtapas",
                "abrirDetalhesDoLead"
              ],
              "requiredEntities": [
                "leadEntity"
              ],
              "readsFields": [
                "leadId",
                "leadName",
                "leadStage",
                "leadTemperature",
                "leadUpdatedAt"
              ],
              "writesFields": [],
              "rulesApplied": [
                "ruleLeadPipelineStages"
              ]
            },
            {
              "organismName": "leadQuickCreate",
              "purpose": "Cadastrar novo lead a partir do pipeline.",
              "userActions": [
                "informarContato",
                "informarInteresse",
                "criarLead"
              ],
              "requiredEntities": [
                "leadEntity"
              ],
              "readsFields": [],
              "writesFields": [
                "leadName",
                "leadEmail",
                "leadPhone",
                "leadSource",
                "leadInterest",
                "leadStage"
              ],
              "rulesApplied": [
                "ruleLeadPipelineStages"
              ]
            }
          ]
        },
        {
          "sectionName": "Ações rápidas e histórico",
          "mode": "view",
          "organisms": [
            {
              "organismName": "leadCardActions",
              "purpose": "Executar ações rápidas no lead selecionado.",
              "userActions": [
                "classificarTemperatura",
                "solicitarQualificacaoIa",
                "abrirDetalhesDoLead"
              ],
              "requiredEntities": [
                "leadEntity",
                "leadQualificationRequestEntity"
              ],
              "readsFields": [
                "leadId",
                "leadTemperature",
                "leadStage",
                "leadUpdatedAt"
              ],
              "writesFields": [
                "leadTemperature"
              ],
              "rulesApplied": [
                "ruleAiHumanReview"
              ]
            },
            {
              "organismName": "leadStageChangeHistory",
              "purpose": "Consultar histórico de mudanças de etapa do lead selecionado.",
              "userActions": [
                "verHistoricoMudancasEtapa"
              ],
              "requiredEntities": [
                "leadStageChangeEntity"
              ],
              "readsFields": [
                "leadStageChangeId",
                "fromStage",
                "toStage",
                "changedAt",
                "changedByBrokerId",
                "note"
              ],
              "writesFields": [],
              "rulesApplied": [
                "ruleLeadPipelineStages"
              ]
            }
          ]
        }
      ]
    },
    "bffCommands": [
      {
        "commandName": "listarLeads",
        "purpose": "Carregar leads por etapa do pipeline.",
        "kind": "query",
        "input": [
          {
            "name": "stageFilter",
            "type": "string",
            "required": false
          },
          {
            "name": "searchText",
            "type": "string",
            "required": false
          }
        ],
        "output": [
          {
            "name": "leadId",
            "type": "Lead"
          },
          {
            "name": "leadName",
            "type": "string"
          },
          {
            "name": "leadStage",
            "type": "string"
          },
          {
            "name": "leadTemperature",
            "type": "string"
          },
          {
            "name": "leadUpdatedAt",
            "type": "date"
          }
        ],
        "readsEntities": [
          "leadEntity"
        ],
        "writesEntities": [],
        "readsTables": [],
        "writesTables": [],
        "usecaseRefs": [
          "listarLeads"
        ],
        "layerContract": {
          "controllerLayer": "layer_2_controllers",
          "mustCallLayer": "layer_3_usecases",
          "directTableAccessForbidden": true
        },
        "rulesApplied": [
          "ruleLeadPipelineStages"
        ]
      },
      {
        "commandName": "moverEtapaLead",
        "purpose": "Atualizar etapa do lead ao mover card.",
        "kind": "command",
        "input": [
          {
            "name": "leadId",
            "type": "Lead",
            "required": true
          },
          {
            "name": "fromStage",
            "type": "string",
            "required": true
          },
          {
            "name": "toStage",
            "type": "string",
            "required": true
          },
          {
            "name": "note",
            "type": "string",
            "required": false
          }
        ],
        "output": [
          {
            "name": "leadId",
            "type": "Lead"
          },
          {
            "name": "leadStageChangeId",
            "type": "LeadStageChange"
          }
        ],
        "readsEntities": [
          "leadEntity"
        ],
        "writesEntities": [
          "leadEntity",
          "leadStageChangeEntity"
        ],
        "readsTables": [],
        "writesTables": [
          "lead_stage_change",
          "lead_pipeline_metrics",
          "broker_activity_metrics"
        ],
        "usecaseRefs": [
          "moverEtapaLead"
        ],
        "layerContract": {
          "controllerLayer": "layer_2_controllers",
          "mustCallLayer": "layer_3_usecases",
          "directTableAccessForbidden": true
        },
        "rulesApplied": [
          "ruleLeadPipelineStages"
        ]
      },
      {
        "commandName": "criarLead",
        "purpose": "Cadastrar novo lead no pipeline.",
        "kind": "command",
        "input": [
          {
            "name": "leadName",
            "type": "string",
            "required": true
          },
          {
            "name": "leadEmail",
            "type": "string",
            "required": false
          },
          {
            "name": "leadPhone",
            "type": "string",
            "required": false
          },
          {
            "name": "leadSource",
            "type": "string",
            "required": false
          },
          {
            "name": "leadInterest",
            "type": "string",
            "required": false
          },
          {
            "name": "initialStage",
            "type": "string",
            "required": true
          }
        ],
        "output": [
          {
            "name": "leadId",
            "type": "Lead"
          },
          {
            "name": "leadStage",
            "type": "string"
          }
        ],
        "readsEntities": [],
        "writesEntities": [
          "leadEntity"
        ],
        "readsTables": [],
        "writesTables": [
          "lead_pipeline_metrics",
          "broker_activity_metrics"
        ],
        "usecaseRefs": [
          "criarLead"
        ],
        "layerContract": {
          "controllerLayer": "layer_2_controllers",
          "mustCallLayer": "layer_3_usecases",
          "directTableAccessForbidden": true
        },
        "rulesApplied": [
          "ruleLeadPipelineStages"
        ]
      },
      {
        "commandName": "solicitarQualificacaoLead",
        "purpose": "Solicitar qualificação via IA para o lead selecionado.",
        "kind": "command",
        "input": [
          {
            "name": "leadId",
            "type": "Lead",
            "required": true
          },
          {
            "name": "leadContext",
            "type": "string",
            "required": false
          }
        ],
        "output": [
          {
            "name": "leadQualificationRequestId",
            "type": "LeadQualificationRequest"
          },
          {
            "name": "reviewStatus",
            "type": "string"
          }
        ],
        "readsEntities": [
          "leadEntity"
        ],
        "writesEntities": [
          "leadQualificationRequestEntity"
        ],
        "readsTables": [],
        "writesTables": [
          "lead_qualification_request",
          "broker_activity_metrics"
        ],
        "usecaseRefs": [
          "solicitarQualificacaoLead"
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
        "commandName": "listarMudancasEtapaLead",
        "purpose": "Listar histórico de mudanças de etapa do lead.",
        "kind": "query",
        "input": [
          {
            "name": "leadId",
            "type": "Lead",
            "required": true
          }
        ],
        "output": [
          {
            "name": "leadStageChangeId",
            "type": "LeadStageChange"
          },
          {
            "name": "fromStage",
            "type": "string"
          },
          {
            "name": "toStage",
            "type": "string"
          },
          {
            "name": "changedAt",
            "type": "date"
          },
          {
            "name": "changedByBrokerId",
            "type": "Broker"
          },
          {
            "name": "note",
            "type": "string"
          }
        ],
        "readsEntities": [
          "leadStageChangeEntity"
        ],
        "writesEntities": [],
        "readsTables": [
          "lead_stage_change"
        ],
        "writesTables": [],
        "usecaseRefs": [
          "listarMudancasEtapaLead"
        ],
        "layerContract": {
          "controllerLayer": "layer_2_controllers",
          "mustCallLayer": "layer_3_usecases",
          "directTableAccessForbidden": true
        },
        "rulesApplied": [
          "ruleLeadPipelineStages"
        ]
      }
    ]
  }
} as const;

export default leadsPipelinePagePlan;
