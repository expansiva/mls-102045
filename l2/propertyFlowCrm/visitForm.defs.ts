/// <mls fileReference="_102045_/l2/propertyFlowCrm/visitForm.defs.ts" enhancement="_blank"/>

export const visitFormPagePlan = {
  "schemaVersion": "2026-06-06",
  "artifactType": "page",
  "artifactId": "visitForm",
  "moduleName": "propertyFlowCrm",
  "status": "draft",
  "source": {
    "agentName": "agentPlanPageDefinition",
    "stepId": 68,
    "planId": ""
  },
  "data": {
    "pageDefinition": {
      "pageId": "visitForm",
      "pageName": "Agendar Visita",
      "actor": "broker",
      "purpose": "Agendar uma nova visita selecionando lead, imóvel, data e horário.",
      "capabilities": [
        "scheduleVisits"
      ],
      "flowRefs": {
        "experienceFlows": [],
        "entityLifecycles": [
          "visitLifecycle"
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
          "name": "leadId",
          "type": "uuid",
          "required": false,
          "sources": [
            "routeParam",
            "queryParam",
            "previousStepResult"
          ],
          "description": "ID do lead pré-selecionado (opcional, vindo de leadDetail ou outro contexto)",
          "entityRef": "Lead",
          "fieldRef": "leadId"
        },
        {
          "name": "propertyId",
          "type": "uuid",
          "required": false,
          "sources": [
            "routeParam",
            "queryParam",
            "previousStepResult"
          ],
          "description": "ID do imóvel pré-selecionado (opcional, vindo de propertyDetail ou outro contexto)",
          "entityRef": "Property",
          "fieldRef": "propertyId"
        }
      ],
      "navigationRefs": [
        {
          "direction": "inbound",
          "pageId": "visitList",
          "trigger": "Agendar visita",
          "description": "Acesso a partir da lista de visitas"
        },
        {
          "direction": "inbound",
          "pageId": "leadDetail",
          "trigger": "Agendar visita",
          "description": "Acesso a partir dos detalhes do lead com leadId pré-selecionado"
        },
        {
          "direction": "inbound",
          "pageId": "propertyDetail",
          "trigger": "Agendar visita",
          "description": "Acesso a partir dos detalhes do imóvel com propertyId pré-selecionado"
        },
        {
          "direction": "outbound",
          "pageId": "visitDetail",
          "trigger": "Após salvar",
          "description": "Redirecionamento para detalhes da visita após agendamento bem-sucedido"
        }
      ],
      "sections": [
        {
          "sectionName": "Seleção de Lead",
          "mode": "edit",
          "organisms": [
            {
              "organismName": "LeadSelector",
              "purpose": "Permitir ao corretor buscar e selecionar o lead que fará a visita",
              "userActions": [
                "Buscar lead",
                "Selecionar lead"
              ],
              "requiredEntities": [
                "Lead"
              ],
              "readsFields": [
                "Lead.leadId",
                "Lead.name",
                "Lead.email",
                "Lead.phone",
                "Lead.status"
              ],
              "writesFields": [],
              "rulesApplied": []
            }
          ]
        },
        {
          "sectionName": "Seleção de Imóvel",
          "mode": "edit",
          "organisms": [
            {
              "organismName": "PropertySelector",
              "purpose": "Permitir ao corretor buscar e selecionar o imóvel a ser visitado",
              "userActions": [
                "Buscar imóvel",
                "Selecionar imóvel"
              ],
              "requiredEntities": [
                "Property"
              ],
              "readsFields": [
                "Property.propertyId",
                "Property.title",
                "Property.address",
                "Property.status",
                "Property.propertyType",
                "Property.price"
              ],
              "writesFields": [],
              "rulesApplied": [
                "ruleVisitPropertyActive"
              ]
            }
          ]
        },
        {
          "sectionName": "Agendamento",
          "mode": "edit",
          "organisms": [
            {
              "organismName": "VisitScheduleForm",
              "purpose": "Capturar data, horário e observações da visita",
              "userActions": [
                "Definir data/hora",
                "Adicionar observações"
              ],
              "requiredEntities": [
                "Visit"
              ],
              "readsFields": [],
              "writesFields": [
                "Visit.scheduledAt",
                "Visit.notes"
              ],
              "rulesApplied": [
                "ruleVisitRequiredFields"
              ]
            }
          ]
        },
        {
          "sectionName": "Ações",
          "mode": "edit",
          "organisms": [
            {
              "organismName": "VisitFormActions",
              "purpose": "Botões de ação para salvar ou cancelar o agendamento",
              "userActions": [
                "Salvar visita",
                "Cancelar"
              ],
              "requiredEntities": [
                "Visit"
              ],
              "readsFields": [],
              "writesFields": [
                "Visit.leadId",
                "Visit.propertyId",
                "Visit.brokerId",
                "Visit.scheduledAt",
                "Visit.status",
                "Visit.notes"
              ],
              "rulesApplied": [
                "ruleVisitRequiredFields",
                "ruleVisitPropertyActive"
              ]
            }
          ]
        }
      ]
    },
    "bffCommands": [
      {
        "commandName": "listLeadsForSelection",
        "purpose": "Listar leads disponíveis para seleção no agendamento de visita",
        "kind": "query",
        "input": [
          {
            "name": "searchTerm",
            "type": "string",
            "required": false
          },
          {
            "name": "status",
            "type": "LeadStatusEnum",
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
      },
      {
        "commandName": "listPropertiesForSelection",
        "purpose": "Listar imóveis ativos/reservados disponíveis para seleção no agendamento de visita",
        "kind": "query",
        "input": [
          {
            "name": "searchTerm",
            "type": "string",
            "required": false
          },
          {
            "name": "status",
            "type": "PropertyStatusEnum",
            "required": false
          },
          {
            "name": "propertyType",
            "type": "string",
            "required": false
          },
          {
            "name": "city",
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
            "name": "properties",
            "type": "Property[]"
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
          "Property"
        ],
        "writesEntities": [],
        "readsTables": [],
        "writesTables": [],
        "usecaseRefs": [
          "listProperties"
        ],
        "layerContract": {
          "controllerLayer": "layer_2_controllers",
          "mustCallLayer": "layer_3_usecases",
          "directTableAccessForbidden": true
        },
        "rulesApplied": [
          "ruleVisitPropertyActive"
        ]
      },
      {
        "commandName": "getLeadById",
        "purpose": "Obter dados do lead pré-selecionado quando leadId é fornecido como input da página",
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
            "name": "status",
            "type": "LeadStatusEnum"
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
        "commandName": "getPropertyById",
        "purpose": "Obter dados do imóvel pré-selecionado quando propertyId é fornecido como input da página",
        "kind": "query",
        "input": [
          {
            "name": "propertyId",
            "type": "uuid",
            "required": true
          }
        ],
        "output": [
          {
            "name": "propertyId",
            "type": "uuid"
          },
          {
            "name": "title",
            "type": "string"
          },
          {
            "name": "address",
            "type": "string"
          },
          {
            "name": "status",
            "type": "PropertyStatusEnum"
          },
          {
            "name": "propertyType",
            "type": "string"
          },
          {
            "name": "price",
            "type": "number"
          }
        ],
        "readsEntities": [
          "Property"
        ],
        "writesEntities": [],
        "readsTables": [],
        "writesTables": [],
        "usecaseRefs": [
          "listProperties"
        ],
        "layerContract": {
          "controllerLayer": "layer_2_controllers",
          "mustCallLayer": "layer_3_usecases",
          "directTableAccessForbidden": true
        },
        "rulesApplied": [
          "ruleVisitPropertyActive"
        ]
      },
      {
        "commandName": "scheduleVisit",
        "purpose": "Agendar nova visita vinculando lead, imóvel, corretor e data/hora",
        "kind": "mutation",
        "input": [
          {
            "name": "leadId",
            "type": "uuid",
            "required": true
          },
          {
            "name": "propertyId",
            "type": "uuid",
            "required": true
          },
          {
            "name": "scheduledDate",
            "type": "date",
            "required": true
          },
          {
            "name": "scheduledTime",
            "type": "string",
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
            "name": "visitId",
            "type": "uuid"
          },
          {
            "name": "status",
            "type": "string"
          }
        ],
        "readsEntities": [
          "Lead",
          "Property"
        ],
        "writesEntities": [
          "Visit"
        ],
        "readsTables": [],
        "writesTables": [
          "visit"
        ],
        "usecaseRefs": [
          "scheduleVisit"
        ],
        "layerContract": {
          "controllerLayer": "layer_2_controllers",
          "mustCallLayer": "layer_3_usecases",
          "directTableAccessForbidden": true
        },
        "rulesApplied": [
          "ruleVisitRequiredFields",
          "ruleVisitPropertyActive"
        ]
      }
    ]
  }
} as const;

export default visitFormPagePlan;
