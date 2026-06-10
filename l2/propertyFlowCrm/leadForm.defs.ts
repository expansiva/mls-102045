/// <mls fileReference="_102045_/l2/propertyFlowCrm/leadForm.defs.ts" enhancement="_blank"/>

export const leadFormPagePlan = {
  "schemaVersion": "2026-06-06",
  "artifactType": "page",
  "artifactId": "leadForm",
  "moduleName": "propertyFlowCrm",
  "status": "draft",
  "source": {
    "agentName": "agentPlanPageDefinition",
    "stepId": 67,
    "planId": ""
  },
  "data": {
    "pageDefinition": {
      "pageId": "leadForm",
      "pageName": "Cadastro de Lead",
      "actor": "broker",
      "purpose": "Cadastrar ou editar informações de um lead incluindo dados de contato e preferências de imóvel.",
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
          "type": "string",
          "required": false,
          "sources": [
            "routeParam",
            "previousStepResult"
          ],
          "description": "Identificador do lead para edição. Quando ausente, indica criação de novo lead.",
          "entityRef": "Lead",
          "fieldRef": "leadId"
        }
      ],
      "navigationRefs": [
        {
          "direction": "inbound",
          "pageId": "leadList",
          "trigger": "Cadastrar lead",
          "description": "Navegação a partir da lista de leads para criar novo lead"
        },
        {
          "direction": "inbound",
          "pageId": "leadDetail",
          "trigger": "Editar lead",
          "description": "Navegação a partir dos detalhes do lead para edição"
        },
        {
          "direction": "outbound",
          "pageId": "leadDetail",
          "trigger": "Após salvar",
          "description": "Redireciona para detalhes do lead após salvar com sucesso"
        }
      ],
      "sections": [
        {
          "sectionName": "Formulário de Lead",
          "mode": "edit",
          "organisms": [
            {
              "organismName": "LeadDataForm",
              "purpose": "Formulário para preenchimento dos dados do lead incluindo informações de contato e preferências de imóvel.",
              "userActions": [
                "Preencher nome completo",
                "Preencher telefone",
                "Preencher e-mail",
                "Selecionar origem do lead",
                "Informar tipo de imóvel de interesse",
                "Informar orçamento",
                "Informar região preferida",
                "Adicionar notas"
              ],
              "requiredEntities": [
                "Lead"
              ],
              "readsFields": [
                "Lead.name",
                "Lead.email",
                "Lead.phone",
                "Lead.source",
                "Lead.interestedPropertyType",
                "Lead.budget",
                "Lead.preferredRegion",
                "Lead.notes"
              ],
              "writesFields": [
                "Lead.name",
                "Lead.email",
                "Lead.phone",
                "Lead.source",
                "Lead.interestedPropertyType",
                "Lead.budget",
                "Lead.preferredRegion",
                "Lead.notes"
              ],
              "rulesApplied": [
                "ruleLeadRequiredFields"
              ]
            }
          ]
        },
        {
          "sectionName": "Ações do Formulário",
          "mode": "action",
          "organisms": [
            {
              "organismName": "LeadFormActions",
              "purpose": "Botões de ação para salvar ou cancelar o cadastro/edição do lead.",
              "userActions": [
                "Salvar lead",
                "Cancelar"
              ],
              "requiredEntities": [
                "Lead"
              ],
              "readsFields": [],
              "writesFields": [],
              "rulesApplied": [
                "ruleLeadRequiredFields"
              ]
            }
          ]
        }
      ]
    },
    "bffCommands": [
      {
        "commandName": "getLeadForEdit",
        "purpose": "Buscar dados do lead existente para preencher o formulário de edição",
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
            "name": "source",
            "type": "string"
          },
          {
            "name": "interestedPropertyType",
            "type": "string"
          },
          {
            "name": "budget",
            "type": "number"
          },
          {
            "name": "preferredRegion",
            "type": "string"
          },
          {
            "name": "notes",
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
        "commandName": "createLead",
        "purpose": "Cadastrar novo lead no sistema",
        "kind": "mutation",
        "input": [
          {
            "name": "name",
            "type": "string",
            "required": true
          },
          {
            "name": "email",
            "type": "string",
            "required": false
          },
          {
            "name": "phone",
            "type": "string",
            "required": true
          },
          {
            "name": "source",
            "type": "string",
            "required": false
          },
          {
            "name": "interestedPropertyType",
            "type": "string",
            "required": false
          },
          {
            "name": "budget",
            "type": "number",
            "required": false
          },
          {
            "name": "preferredRegion",
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
            "name": "leadId",
            "type": "string"
          },
          {
            "name": "status",
            "type": "string"
          }
        ],
        "readsEntities": [],
        "writesEntities": [
          "Lead"
        ],
        "readsTables": [],
        "writesTables": [
          "lead_metrics",
          "crm_activity_metrics"
        ],
        "usecaseRefs": [
          "createLead"
        ],
        "layerContract": {
          "controllerLayer": "layer_2_controllers",
          "mustCallLayer": "layer_3_usecases",
          "directTableAccessForbidden": true
        },
        "rulesApplied": [
          "ruleLeadRequiredFields"
        ]
      },
      {
        "commandName": "updateLead",
        "purpose": "Atualizar dados de um lead existente",
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
            "name": "interestedPropertyType",
            "type": "string",
            "required": false
          },
          {
            "name": "budget",
            "type": "number",
            "required": false
          },
          {
            "name": "preferredRegion",
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
            "name": "leadId",
            "type": "string"
          },
          {
            "name": "updated",
            "type": "boolean"
          }
        ],
        "readsEntities": [
          "Lead"
        ],
        "writesEntities": [
          "Lead"
        ],
        "readsTables": [],
        "writesTables": [],
        "usecaseRefs": [
          "updateLead"
        ],
        "layerContract": {
          "controllerLayer": "layer_2_controllers",
          "mustCallLayer": "layer_3_usecases",
          "directTableAccessForbidden": true
        },
        "rulesApplied": [
          "ruleLeadRequiredFields"
        ]
      }
    ]
  }
} as const;

export default leadFormPagePlan;
