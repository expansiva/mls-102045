/// <mls fileReference="_102045_/l2/propertyFlowCrm/visitasAgenda.defs.ts" enhancement="_blank"/>

export const visitasAgendaPagePlan = {
  "schemaVersion": "2026-06-06",
  "artifactType": "page",
  "artifactId": "visitasAgenda",
  "moduleName": "propertyFlowCrm",
  "status": "draft",
  "source": {
    "agentName": "agentPlanPageDefinition",
    "stepId": 58,
    "planId": ""
  },
  "data": {
    "pageDefinition": {
      "pageId": "visitasAgenda",
      "pageName": "Agenda de visitas",
      "actor": "corretor",
      "purpose": "Agendar, reagendar e cancelar visitas vinculadas a imóveis e leads.",
      "capabilities": [
        "agendarVisitas"
      ],
      "flowRefs": {
        "experienceFlows": [],
        "entityLifecycles": [
          "visitSchedulingWorkflow"
        ],
        "taskWorkflows": [],
        "automations": []
      },
      "pluginRefs": [],
      "mdmRefs": [
        "visitAppointment",
        "property",
        "leadCustomer"
      ],
      "pageInputs": [
        {
          "name": "imovelId",
          "type": "string",
          "required": false,
          "sources": [
            "routeParam",
            "previousStepResult"
          ],
          "description": "Identificador do imóvel quando a visita é iniciada a partir de um imóvel.",
          "entityRef": "Imovel",
          "fieldRef": "imovelId"
        },
        {
          "name": "leadId",
          "type": "string",
          "required": false,
          "sources": [
            "routeParam",
            "previousStepResult"
          ],
          "description": "Identificador do lead quando a visita é iniciada a partir de um lead.",
          "entityRef": "Lead",
          "fieldRef": "leadId"
        },
        {
          "name": "dataHoraPreferida",
          "type": "date",
          "required": false,
          "sources": [
            "queryParam",
            "previousStepResult"
          ],
          "description": "Data e hora sugeridas para o agendamento."
        }
      ],
      "navigationRefs": [
        {
          "direction": "inbound",
          "pageId": "imoveisLista",
          "trigger": "Agendar visita para imóvel"
        },
        {
          "direction": "inbound",
          "pageId": "leadsKanban",
          "trigger": "Agendar visita para lead"
        }
      ],
      "sections": [
        {
          "sectionName": "Agendar visita",
          "mode": "create",
          "organisms": [
            {
              "organismName": "FormAgendarVisita",
              "purpose": "Registrar um novo agendamento de visita vinculado a imóvel e lead.",
              "userActions": [
                "agendarVisita"
              ],
              "requiredEntities": [
                "Visita",
                "Imovel",
                "Lead"
              ],
              "readsFields": [],
              "writesFields": [
                "Visita.imovelId",
                "Visita.leadId",
                "Visita.dataHora",
                "Visita.observacoes"
              ],
              "rulesApplied": [
                "visitaRequiresLinks",
                "imovelActiveStatus"
              ]
            }
          ]
        },
        {
          "sectionName": "Reagendar visita",
          "mode": "edit",
          "organisms": [
            {
              "organismName": "FormReagendarVisita",
              "purpose": "Atualizar data e hora de uma visita existente.",
              "userActions": [
                "reagendarVisita"
              ],
              "requiredEntities": [
                "Visita"
              ],
              "readsFields": [],
              "writesFields": [
                "Visita.dataHora",
                "Visita.observacoes"
              ],
              "rulesApplied": []
            }
          ]
        },
        {
          "sectionName": "Cancelar visita",
          "mode": "edit",
          "organisms": [
            {
              "organismName": "FormCancelarVisita",
              "purpose": "Cancelar uma visita existente e registrar o motivo.",
              "userActions": [
                "cancelarVisita"
              ],
              "requiredEntities": [
                "Visita"
              ],
              "readsFields": [],
              "writesFields": [
                "Visita.status",
                "Visita.observacoes"
              ],
              "rulesApplied": []
            }
          ]
        }
      ]
    },
    "bffCommands": [
      {
        "commandName": "agendarVisita",
        "purpose": "Criar agendamento de visita.",
        "kind": "command",
        "input": [
          {
            "name": "imovelId",
            "type": "string",
            "required": true
          },
          {
            "name": "leadId",
            "type": "string",
            "required": true
          },
          {
            "name": "dataHora",
            "type": "date",
            "required": true
          },
          {
            "name": "observacoes",
            "type": "string",
            "required": false
          }
        ],
        "output": [
          {
            "name": "visitaId",
            "type": "string"
          },
          {
            "name": "status",
            "type": "string"
          }
        ],
        "readsEntities": [
          "Imovel",
          "Lead",
          "Visita"
        ],
        "writesEntities": [
          "Visita"
        ],
        "readsTables": [],
        "writesTables": [
          "visita_metrics"
        ],
        "usecaseRefs": [
          "agendarVisita"
        ],
        "layerContract": {
          "controllerLayer": "layer_2_controllers",
          "mustCallLayer": "layer_3_usecases",
          "directTableAccessForbidden": true
        },
        "rulesApplied": [
          "visitaRequiresLinks",
          "imovelActiveStatus"
        ]
      },
      {
        "commandName": "reagendarVisita",
        "purpose": "Atualizar data e hora da visita.",
        "kind": "command",
        "input": [
          {
            "name": "visitaId",
            "type": "string",
            "required": true
          },
          {
            "name": "novaDataHora",
            "type": "date",
            "required": true
          },
          {
            "name": "observacoes",
            "type": "string",
            "required": false
          }
        ],
        "output": [
          {
            "name": "visitaId",
            "type": "string"
          },
          {
            "name": "status",
            "type": "string"
          }
        ],
        "readsEntities": [
          "Visita"
        ],
        "writesEntities": [
          "Visita"
        ],
        "readsTables": [],
        "writesTables": [
          "visita_metrics"
        ],
        "usecaseRefs": [
          "reagendarVisita"
        ],
        "layerContract": {
          "controllerLayer": "layer_2_controllers",
          "mustCallLayer": "layer_3_usecases",
          "directTableAccessForbidden": true
        },
        "rulesApplied": []
      },
      {
        "commandName": "cancelarVisita",
        "purpose": "Cancelar visita existente.",
        "kind": "command",
        "input": [
          {
            "name": "visitaId",
            "type": "string",
            "required": true
          },
          {
            "name": "motivo",
            "type": "string",
            "required": true
          }
        ],
        "output": [
          {
            "name": "visitaId",
            "type": "string"
          },
          {
            "name": "status",
            "type": "string"
          }
        ],
        "readsEntities": [
          "Visita"
        ],
        "writesEntities": [
          "Visita"
        ],
        "readsTables": [],
        "writesTables": [
          "visita_metrics"
        ],
        "usecaseRefs": [
          "cancelarVisita"
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

export default visitasAgendaPagePlan;
