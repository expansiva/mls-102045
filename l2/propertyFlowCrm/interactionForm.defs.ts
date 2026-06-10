/// <mls fileReference="_102045_/l2/propertyFlowCrm/interactionForm.defs.ts" enhancement="_blank"/>

export const interactionFormPagePlan = {
  "schemaVersion": "2026-06-06",
  "artifactType": "page",
  "artifactId": "interactionForm",
  "moduleName": "propertyFlowCrm",
  "status": "draft",
  "source": {
    "agentName": "agentPlanPageDefinition",
    "stepId": 66,
    "planId": ""
  },
  "data": {
    "pageDefinition": {
      "pageId": "interactionForm",
      "pageName": "Registrar Interação",
      "actor": "broker",
      "purpose": "Registrar uma nova interação com o lead incluindo tipo, canal, notas e próximos passos.",
      "capabilities": [
        "manageLeads"
      ],
      "flowRefs": {
        "experienceFlows": [],
        "entityLifecycles": [
          "leadQualification"
        ],
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
          "type": "uuid",
          "required": true,
          "sources": [
            "routeParam",
            "previousStepResult"
          ],
          "description": "Identificador do lead para o qual a interação será registrada",
          "entityRef": "Lead",
          "fieldRef": "leadId"
        }
      ],
      "navigationRefs": [
        {
          "direction": "inbound",
          "pageId": "leadDetail",
          "trigger": "Registrar interação",
          "description": "Usuário clica em registrar interação na página de detalhes do lead"
        },
        {
          "direction": "outbound",
          "pageId": "leadDetail",
          "trigger": "Após salvar",
          "description": "Retorna aos detalhes do lead após salvar a interação"
        }
      ],
      "sections": [
        {
          "sectionName": "Cabeçalho do Lead",
          "mode": "readonly",
          "organisms": [
            {
              "organismName": "LeadSummaryHeader",
              "purpose": "Exibir resumo do lead para contexto durante o registro da interação",
              "userActions": [],
              "requiredEntities": [
                "Lead"
              ],
              "readsFields": [
                "Lead.name",
                "Lead.email",
                "Lead.phone",
                "Lead.pipelineStage",
                "Lead.temperature"
              ],
              "writesFields": [],
              "rulesApplied": []
            }
          ]
        },
        {
          "sectionName": "Formulário de Interação",
          "mode": "edit",
          "organisms": [
            {
              "organismName": "InteractionFormFields",
              "purpose": "Capturar dados da interação incluindo tipo, direção, resumo e data/hora",
              "userActions": [
                "Preencher dados da interação",
                "Selecionar tipo de interação",
                "Selecionar direção",
                "Informar resumo",
                "Definir data/hora"
              ],
              "requiredEntities": [
                "LeadInteraction"
              ],
              "readsFields": [],
              "writesFields": [
                "LeadInteraction.interactionType",
                "LeadInteraction.direction",
                "LeadInteraction.summary",
                "LeadInteraction.interactionAt"
              ],
              "rulesApplied": [
                "ruleInteractionRequiredFields"
              ]
            }
          ]
        },
        {
          "sectionName": "Próximos Passos",
          "mode": "edit",
          "organisms": [
            {
              "organismName": "NextStepsFields",
              "purpose": "Capturar informações opcionais sobre resultado e próxima ação",
              "userActions": [
                "Informar resultado da interação",
                "Definir próxima ação"
              ],
              "requiredEntities": [
                "LeadInteraction"
              ],
              "readsFields": [],
              "writesFields": [
                "LeadInteraction.outcome",
                "LeadInteraction.nextAction"
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
              "organismName": "InteractionFormActions",
              "purpose": "Botões para salvar ou cancelar o registro da interação",
              "userActions": [
                "Salvar interação",
                "Cancelar"
              ],
              "requiredEntities": [
                "LeadInteraction"
              ],
              "readsFields": [],
              "writesFields": [],
              "rulesApplied": [
                "ruleInteractionRequiredFields"
              ]
            }
          ]
        }
      ]
    },
    "bffCommands": [
      {
        "commandName": "getLeadSummary",
        "purpose": "Buscar resumo do lead para exibição no cabeçalho do formulário de interação",
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
            "name": "pipelineStage",
            "type": "string"
          },
          {
            "name": "temperature",
            "type": "string"
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
        "commandName": "registerInteraction",
        "purpose": "Registrar uma nova interação com o lead",
        "kind": "mutation",
        "input": [
          {
            "name": "leadId",
            "type": "uuid",
            "required": true
          },
          {
            "name": "interactionType",
            "type": "string",
            "required": true
          },
          {
            "name": "direction",
            "type": "string",
            "required": true
          },
          {
            "name": "summary",
            "type": "string",
            "required": true
          },
          {
            "name": "interactionAt",
            "type": "datetime",
            "required": true
          },
          {
            "name": "outcome",
            "type": "string",
            "required": false
          },
          {
            "name": "nextAction",
            "type": "string",
            "required": false
          }
        ],
        "output": [
          {
            "name": "interactionId",
            "type": "uuid"
          },
          {
            "name": "leadId",
            "type": "uuid"
          }
        ],
        "readsEntities": [
          "Lead"
        ],
        "writesEntities": [
          "LeadInteraction"
        ],
        "readsTables": [],
        "writesTables": [
          "lead_interaction",
          "crm_activity_metrics"
        ],
        "usecaseRefs": [
          "registerInteraction"
        ],
        "layerContract": {
          "controllerLayer": "layer_2_controllers",
          "mustCallLayer": "layer_3_usecases",
          "directTableAccessForbidden": true
        },
        "rulesApplied": [
          "ruleInteractionRequiredFields"
        ]
      }
    ]
  }
} as const;

export default interactionFormPagePlan;
