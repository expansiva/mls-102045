/// <mls fileReference="_102045_/l2/propertyFlowCrm/leadDetails.defs.ts" enhancement="_blank"/>

export const leadDetailsPagePlan = {
  "schemaVersion": "2026-06-06",
  "artifactType": "page",
  "artifactId": "leadDetails",
  "moduleName": "propertyFlowCrm",
  "status": "draft",
  "source": {
    "agentName": "agentPlanPageDefinition",
    "stepId": 61,
    "planId": ""
  },
  "data": {
    "pageDefinition": {
      "pageId": "leadDetails",
      "pageName": "Detalhes do lead",
      "actor": "corretor",
      "purpose": "Atualizar informações e histórico do lead.",
      "capabilities": [
        "manageLeads"
      ],
      "flowRefs": {
        "experienceFlows": [],
        "entityLifecycles": [],
        "taskWorkflows": [],
        "automations": []
      },
      "pluginRefs": [],
      "mdmRefs": [
        "lead"
      ],
      "pageInputs": [
        {
          "name": "leadId",
          "type": "string",
          "required": true,
          "sources": [
            "routeParam"
          ],
          "description": "Identificador do lead",
          "entityRef": "Lead",
          "fieldRef": "id"
        }
      ],
      "navigationRefs": [
        {
          "direction": "inbound",
          "pageId": "leadsPipeline",
          "trigger": "abrir detalhes do lead"
        }
      ],
      "sections": [
        {
          "sectionName": "Dados do lead",
          "mode": "edit",
          "organisms": [
            {
              "organismName": "LeadInfoForm",
              "purpose": "Exibir e editar dados de contato e preferências do lead.",
              "userActions": [
                "editar dados",
                "salvar alterações"
              ],
              "requiredEntities": [
                "leadEntity"
              ],
              "readsFields": [
                "lead.id",
                "lead.name",
                "lead.email",
                "lead.phone",
                "lead.preferences",
                "lead.stage"
              ],
              "writesFields": [
                "lead.name",
                "lead.email",
                "lead.phone",
                "lead.preferences",
                "lead.stage"
              ],
              "rulesApplied": [
                "ruleLeadPipelineStages"
              ]
            }
          ]
        },
        {
          "sectionName": "Histórico do lead",
          "mode": "view",
          "organisms": [
            {
              "organismName": "LeadHistoryTimeline",
              "purpose": "Visualizar histórico e mudanças de etapa do lead.",
              "userActions": [
                "visualizar histórico"
              ],
              "requiredEntities": [
                "leadEntity",
                "leadStageChangeEntity"
              ],
              "readsFields": [
                "lead.id",
                "lead.stage",
                "lead.history"
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
        "commandName": "obterLead",
        "purpose": "Carregar dados completos do lead.",
        "kind": "query",
        "input": [
          {
            "name": "leadId",
            "type": "string",
            "required": true
          }
        ],
        "output": [
          {
            "name": "leadId",
            "type": "string"
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
            "name": "preferences",
            "type": "string"
          },
          {
            "name": "stage",
            "type": "string"
          },
          {
            "name": "history",
            "type": "string"
          }
        ],
        "readsEntities": [
          "leadEntity",
          "leadStageChangeEntity"
        ],
        "writesEntities": [],
        "readsTables": [],
        "writesTables": [],
        "usecaseRefs": [
          "obterLead"
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
        "commandName": "atualizarLead",
        "purpose": "Salvar alterações do lead.",
        "kind": "mutation",
        "input": [
          {
            "name": "leadId",
            "type": "string",
            "required": true
          },
          {
            "name": "name",
            "type": "string",
            "required": false
          },
          {
            "name": "email",
            "type": "string",
            "required": false
          },
          {
            "name": "phone",
            "type": "string",
            "required": false
          },
          {
            "name": "preferences",
            "type": "string",
            "required": false
          },
          {
            "name": "stage",
            "type": "string",
            "required": false
          }
        ],
        "output": [
          {
            "name": "leadId",
            "type": "string"
          },
          {
            "name": "stage",
            "type": "string"
          }
        ],
        "readsEntities": [
          "leadEntity"
        ],
        "writesEntities": [
          "leadEntity"
        ],
        "readsTables": [],
        "writesTables": [
          "lead_pipeline_metrics",
          "broker_activity_metrics"
        ],
        "usecaseRefs": [
          "atualizarLead"
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

export default leadDetailsPagePlan;
