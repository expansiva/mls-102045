/// <mls fileReference="_102045_/l2/propertyFlowCrm/brokerDashboard.defs.ts" enhancement="_blank"/>

export const brokerDashboardPagePlan = {
  "schemaVersion": "2026-06-06",
  "artifactType": "page",
  "artifactId": "brokerDashboard",
  "moduleName": "propertyFlowCrm",
  "status": "draft",
  "source": {
    "agentName": "agentPlanPageDefinition",
    "stepId": 66,
    "planId": ""
  },
  "data": {
    "pageDefinition": {
      "pageId": "brokerDashboard",
      "pageName": "Painel do Corretor",
      "actor": "broker",
      "purpose": "Visão geral das atividades do corretor com resumo de leads, visitas pendentes, negócios em andamento e tarefas de follow-up.",
      "capabilities": [
        "viewDashboard",
        "manageLeads",
        "scheduleVisits",
        "trackDeals"
      ],
      "flowRefs": {
        "experienceFlows": [],
        "entityLifecycles": [],
        "taskWorkflows": [],
        "automations": [
          "visitReminder",
          "leadFollowUp"
        ]
      },
      "pluginRefs": [],
      "mdmRefs": [
        "lead",
        "property"
      ],
      "pageInputs": [],
      "navigationRefs": [
        {
          "direction": "outbound",
          "pageId": "propertyList",
          "trigger": "Acessar imóveis",
          "description": "Navegar para lista de imóveis do corretor"
        },
        {
          "direction": "outbound",
          "pageId": "leadList",
          "trigger": "Acessar leads",
          "description": "Navegar para pipeline de leads"
        },
        {
          "direction": "outbound",
          "pageId": "visitList",
          "trigger": "Acessar visitas",
          "description": "Navegar para agenda de visitas"
        },
        {
          "direction": "outbound",
          "pageId": "dealList",
          "trigger": "Acessar negócios",
          "description": "Navegar para pipeline de negócios"
        }
      ],
      "sections": [
        {
          "sectionName": "Resumo de Atividades",
          "mode": "readonly",
          "organisms": [
            {
              "organismName": "ActivitySummaryCards",
              "purpose": "Exibir cards com contadores de leads ativos, visitas do dia, negócios em andamento e tarefas pendentes",
              "userActions": [
                "Visualizar resumo de atividades"
              ],
              "requiredEntities": [
                "Lead",
                "Visit",
                "Deal"
              ],
              "readsFields": [
                "Lead.status",
                "Lead.temperature",
                "Visit.status",
                "Visit.scheduledAt",
                "Deal.status",
                "Deal.pipelineStage"
              ],
              "writesFields": [],
              "rulesApplied": []
            }
          ]
        },
        {
          "sectionName": "Leads Quentes",
          "mode": "readonly",
          "organisms": [
            {
              "organismName": "HotLeadsList",
              "purpose": "Listar leads com temperatura quente que requerem atenção imediata do corretor",
              "userActions": [
                "Acessar leads quentes",
                "Navegar para detalhes do lead"
              ],
              "requiredEntities": [
                "Lead"
              ],
              "readsFields": [
                "Lead.fullName",
                "Lead.temperature",
                "Lead.pipelineStage",
                "Lead.lastContactAt",
                "Lead.suggestedFollowUpMessage"
              ],
              "writesFields": [],
              "rulesApplied": []
            }
          ]
        },
        {
          "sectionName": "Visitas do Dia",
          "mode": "readonly",
          "organisms": [
            {
              "organismName": "TodayVisitsList",
              "purpose": "Exibir lista de visitas agendadas para o dia atual com informações de lead, imóvel e horário",
              "userActions": [
                "Ver visitas do dia",
                "Navegar para detalhes da visita"
              ],
              "requiredEntities": [
                "Visit",
                "Lead",
                "Property"
              ],
              "readsFields": [
                "Visit.scheduledAt",
                "Visit.status",
                "Lead.fullName",
                "Property.address",
                "Property.propertyType"
              ],
              "writesFields": [],
              "rulesApplied": []
            }
          ]
        },
        {
          "sectionName": "Negócios em Andamento",
          "mode": "readonly",
          "organisms": [
            {
              "organismName": "ActiveDealsList",
              "purpose": "Exibir negócios em andamento com etapa do pipeline, valor e próximas ações",
              "userActions": [
                "Visualizar negócios ativos",
                "Navegar para detalhes do negócio"
              ],
              "requiredEntities": [
                "Deal",
                "Lead",
                "Property"
              ],
              "readsFields": [
                "Deal.pipelineStage",
                "Deal.status",
                "Deal.value",
                "Lead.fullName",
                "Property.address"
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
        "commandName": "getDashboardSummary",
        "purpose": "Obter contadores resumidos de leads, visitas e negócios para os cards do dashboard",
        "kind": "query",
        "input": [],
        "output": [
          {
            "name": "activeLeadsCount",
            "type": "number"
          },
          {
            "name": "hotLeadsCount",
            "type": "number"
          },
          {
            "name": "todayVisitsCount",
            "type": "number"
          },
          {
            "name": "activeDealsCount",
            "type": "number"
          },
          {
            "name": "pendingTasksCount",
            "type": "number"
          }
        ],
        "readsEntities": [
          "Lead",
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
          "listLeads",
          "listVisits",
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
        "commandName": "listHotLeads",
        "purpose": "Obter lista de leads com temperatura quente para exibição no dashboard",
        "kind": "query",
        "input": [
          {
            "name": "limit",
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
      },
      {
        "commandName": "listTodayVisits",
        "purpose": "Obter visitas agendadas para o dia atual do corretor",
        "kind": "query",
        "input": [],
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
          "visitEntity",
          "Lead",
          "Property"
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
        "commandName": "listActiveDeals",
        "purpose": "Obter negócios em andamento do corretor para exibição no dashboard",
        "kind": "query",
        "input": [
          {
            "name": "limit",
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
          }
        ],
        "readsEntities": [
          "dealEntity",
          "Lead",
          "Property"
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

export default brokerDashboardPagePlan;
