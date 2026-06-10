/// <mls fileReference="_102045_/l2/propertyFlowCrm/visitList.defs.ts" enhancement="_blank"/>

export const visitListPagePlan = {
  "schemaVersion": "2026-06-06",
  "artifactType": "page",
  "artifactId": "visitList",
  "moduleName": "propertyFlowCrm",
  "status": "draft",
  "source": {
    "agentName": "agentPlanPageDefinition",
    "stepId": 69,
    "planId": ""
  },
  "data": {
    "pageDefinition": {
      "pageId": "visitList",
      "pageName": "Lista de Visitas",
      "actor": "broker",
      "purpose": "Visualizar agenda de visitas com filtros por data, status e imóvel.",
      "capabilities": [
        "scheduleVisits"
      ],
      "flowRefs": {
        "experienceFlows": [],
        "entityLifecycles": [
          "visitLifecycle"
        ],
        "taskWorkflows": [],
        "automations": [
          "visitReminder"
        ]
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
          "pageId": "visitForm",
          "trigger": "Agendar visita",
          "description": "Navegar para formulário de agendamento de nova visita"
        },
        {
          "direction": "outbound",
          "pageId": "visitDetail",
          "trigger": "Ver detalhes da visita",
          "description": "Navegar para detalhes de uma visita selecionada"
        }
      ],
      "sections": [
        {
          "sectionName": "Filtros de Busca",
          "mode": "interactive",
          "organisms": [
            {
              "organismName": "VisitFiltersForm",
              "purpose": "Permitir ao corretor filtrar visitas por data, status e imóvel",
              "userActions": [
                "Buscar visitas",
                "Filtrar por status",
                "Limpar filtros"
              ],
              "requiredEntities": [
                "Visit"
              ],
              "readsFields": [
                "Visit.status",
                "Visit.scheduledAt",
                "Visit.propertyId"
              ],
              "writesFields": [],
              "rulesApplied": []
            }
          ]
        },
        {
          "sectionName": "Lista de Visitas",
          "mode": "readonly",
          "organisms": [
            {
              "organismName": "VisitListTable",
              "purpose": "Exibir lista de visitas agendadas com informações resumidas de lead, imóvel, data e status",
              "userActions": [
                "Ver detalhes da visita",
                "Agendar nova visita"
              ],
              "requiredEntities": [
                "Visit"
              ],
              "readsFields": [
                "Visit.visitId",
                "Visit.leadId",
                "Visit.propertyId",
                "Visit.brokerId",
                "Visit.scheduledAt",
                "Visit.status",
                "Visit.notes"
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
        "commandName": "listVisits",
        "purpose": "Listar visitas agendadas com filtros por data, status e imóvel para o corretor autenticado",
        "kind": "query",
        "input": [
          {
            "name": "propertyId",
            "type": "string",
            "required": false
          },
          {
            "name": "status",
            "type": "VisitStatusEnum",
            "required": false
          },
          {
            "name": "startDate",
            "type": "date",
            "required": false
          },
          {
            "name": "endDate",
            "type": "date",
            "required": false
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
      }
    ]
  }
} as const;

export default visitListPagePlan;
