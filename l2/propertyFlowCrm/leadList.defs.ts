/// <mls fileReference="_102045_/l2/propertyFlowCrm/leadList.defs.ts" enhancement="_blank"/>

export const leadListPagePlan = {
  "schemaVersion": "2026-06-06",
  "artifactType": "page",
  "artifactId": "leadList",
  "moduleName": "propertyFlowCrm",
  "status": "draft",
  "source": {
    "agentName": "agentPlanPageDefinition",
    "stepId": 70,
    "planId": ""
  },
  "data": {
    "pageDefinition": {
      "pageId": "leadList",
      "pageName": "Lista de Leads",
      "actor": "broker",
      "purpose": "Visualizar pipeline de leads com filtros por etapa, temperatura e busca por nome ou contato.",
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
      "pageInputs": [],
      "navigationRefs": [
        {
          "direction": "outbound",
          "pageId": "leadForm",
          "trigger": "Cadastrar lead",
          "description": "Navegar para o formulário de cadastro de novo lead"
        },
        {
          "direction": "outbound",
          "pageId": "leadDetail",
          "trigger": "Ver detalhes do lead",
          "description": "Navegar para a página de detalhes de um lead selecionado"
        }
      ],
      "sections": [
        {
          "sectionName": "Filtros e Busca",
          "mode": "interactive",
          "organisms": [
            {
              "organismName": "LeadSearchFilter",
              "purpose": "Permitir busca por nome ou contato e aplicação de filtros por etapa do pipeline e temperatura do lead.",
              "userActions": [
                "Buscar leads",
                "Filtrar por etapa",
                "Filtrar por temperatura",
                "Limpar filtros"
              ],
              "requiredEntities": [],
              "readsFields": [],
              "writesFields": [],
              "rulesApplied": []
            }
          ]
        },
        {
          "sectionName": "Lista de Leads",
          "mode": "readonly",
          "organisms": [
            {
              "organismName": "LeadPipelineList",
              "purpose": "Exibir lista de leads do corretor com informações resumidas como nome, contato, etapa do pipeline e temperatura.",
              "userActions": [
                "Ver detalhes do lead",
                "Cadastrar novo lead"
              ],
              "requiredEntities": [
                "Lead"
              ],
              "readsFields": [
                "Lead.id",
                "Lead.name",
                "Lead.email",
                "Lead.phone",
                "Lead.pipelineStage",
                "Lead.temperature",
                "Lead.lastContactAt",
                "Lead.source"
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
        "commandName": "listLeads",
        "purpose": "Listar leads com filtros de pipeline, temperatura e busca textual para exibição no pipeline do corretor",
        "kind": "query",
        "input": [
          {
            "name": "status",
            "type": "LeadStatusEnum",
            "required": false
          },
          {
            "name": "temperature",
            "type": "string",
            "required": false
          },
          {
            "name": "source",
            "type": "string",
            "required": false
          },
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
          },
          {
            "name": "page",
            "type": "number"
          },
          {
            "name": "pageSize",
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
      }
    ]
  }
} as const;

export default leadListPagePlan;
