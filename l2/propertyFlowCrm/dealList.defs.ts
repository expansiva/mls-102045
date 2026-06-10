/// <mls fileReference="_102045_/l2/propertyFlowCrm/dealList.defs.ts" enhancement="_blank"/>

export const dealListPagePlan = {
  "schemaVersion": "2026-06-06",
  "artifactType": "page",
  "artifactId": "dealList",
  "moduleName": "propertyFlowCrm",
  "status": "draft",
  "source": {
    "agentName": "agentPlanPageDefinition",
    "stepId": 69,
    "planId": ""
  },
  "data": {
    "pageDefinition": {
      "pageId": "dealList",
      "pageName": "Lista de Negócios",
      "actor": "broker",
      "purpose": "Visualizar pipeline de negócios com filtros por etapa, valor e status.",
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
      "pageInputs": [],
      "navigationRefs": [
        {
          "direction": "outbound",
          "pageId": "dealForm",
          "trigger": "Criar negócio",
          "description": "Navegar para formulário de criação de novo negócio"
        },
        {
          "direction": "outbound",
          "pageId": "dealDetail",
          "trigger": "Ver detalhes do negócio",
          "description": "Navegar para detalhes de um negócio selecionado"
        }
      ],
      "sections": [
        {
          "sectionName": "Filtros e Busca",
          "mode": "interactive",
          "organisms": [
            {
              "organismName": "DealFiltersOrganism",
              "purpose": "Permitir busca e filtragem de negócios por etapa do pipeline, status, valor e período.",
              "userActions": [
                "Buscar negócios",
                "Filtrar por etapa",
                "Filtrar por status",
                "Limpar filtros"
              ],
              "requiredEntities": [
                "Deal"
              ],
              "readsFields": [
                "Deal.pipelineStage",
                "Deal.status",
                "Deal.proposedValue",
                "Deal.expectedCloseDate"
              ],
              "writesFields": [],
              "rulesApplied": []
            }
          ]
        },
        {
          "sectionName": "Lista de Negócios",
          "mode": "readonly",
          "organisms": [
            {
              "organismName": "DealListOrganism",
              "purpose": "Exibir lista de negócios do corretor com informações resumidas de lead, imóvel, valor e etapa do pipeline.",
              "userActions": [
                "Ver detalhes do negócio",
                "Ordenar lista"
              ],
              "requiredEntities": [
                "Deal"
              ],
              "readsFields": [
                "Deal.dealId",
                "Deal.leadId",
                "Deal.propertyId",
                "Deal.dealType",
                "Deal.proposedValue",
                "Deal.pipelineStage",
                "Deal.status",
                "Deal.expectedCloseDate",
                "Deal.createdAt"
              ],
              "writesFields": [],
              "rulesApplied": []
            }
          ]
        },
        {
          "sectionName": "Ações",
          "mode": "interactive",
          "organisms": [
            {
              "organismName": "DealActionsOrganism",
              "purpose": "Fornecer ação rápida para criar novo negócio.",
              "userActions": [
                "Criar novo negócio"
              ],
              "requiredEntities": [],
              "readsFields": [],
              "writesFields": [],
              "rulesApplied": []
            }
          ]
        }
      ]
    },
    "bffCommands": [
      {
        "commandName": "listDeals",
        "purpose": "Listar negócios do corretor com filtros de pipeline, status e paginação.",
        "kind": "query",
        "input": [
          {
            "name": "pipelineStage",
            "type": "DealPipelineStageEnum",
            "required": false
          },
          {
            "name": "status",
            "type": "DealStatusEnum",
            "required": false
          },
          {
            "name": "minValue",
            "type": "decimal",
            "required": false
          },
          {
            "name": "maxValue",
            "type": "decimal",
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
            "name": "deals",
            "type": "Deal[]"
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
      }
    ]
  }
} as const;

export default dealListPagePlan;
