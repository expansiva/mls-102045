/// <mls fileReference="_102045_/l2/propertyFlowCrm/web/desktop/page11/visitsAgenda.defs.ts" enhancement="_blank"/>

export const definition = {
  "pageId": "visitsAgenda",
  "pageName": "Agenda de visitas",
  "actor": "corretor",
  "purpose": "Agendar, confirmar, reagendar e cancelar visitas.",
  "capabilities": [
    "scheduleVisits"
  ],
  "flowRefs": {
    "experienceFlows": [],
    "entityLifecycles": [
      "visitSchedulingFlow"
    ],
    "taskWorkflows": [],
    "automations": []
  },
  "pluginRefs": [],
  "mdmRefs": [
    "visit",
    "property",
    "lead"
  ],
  "pageInputs": [],
  "navigationRefs": [],
  "sections": [
    {
      "sectionName": "Filtros e agenda",
      "mode": "view",
      "organisms": [
        {
          "organismName": "visitFilters",
          "purpose": "Filtrar visitas por período, imóvel e lead.",
          "userActions": [
            "filtrarVisitas",
            "limparFiltros"
          ],
          "requiredEntities": [
            "Visit",
            "Property",
            "Lead"
          ],
          "readsFields": [
            "Visit.visitId",
            "Visit.status",
            "Visit.scheduledAt",
            "Visit.propertyId",
            "Visit.leadId",
            "Property.propertyId",
            "Property.title",
            "Lead.leadId",
            "Lead.name"
          ],
          "writesFields": [],
          "rulesApplied": [
            "ruleVisitStatus"
          ]
        },
        {
          "organismName": "visitCalendarList",
          "purpose": "Exibir visitas agendadas em lista/calendário.",
          "userActions": [
            "selecionarVisita",
            "abrirDetalhesVisita"
          ],
          "requiredEntities": [
            "Visit"
          ],
          "readsFields": [
            "Visit.visitId",
            "Visit.status",
            "Visit.scheduledAt",
            "Visit.propertyId",
            "Visit.leadId"
          ],
          "writesFields": [],
          "rulesApplied": [
            "ruleVisitStatus"
          ]
        }
      ]
    },
    {
      "sectionName": "Novo agendamento",
      "mode": "edit",
      "organisms": [
        {
          "organismName": "visitScheduleForm",
          "purpose": "Criar novo agendamento de visita.",
          "userActions": [
            "selecionarImovel",
            "selecionarLead",
            "definirDataHora",
            "agendarVisita"
          ],
          "requiredEntities": [
            "Property",
            "Lead",
            "VisitScheduleRequest"
          ],
          "readsFields": [
            "Property.propertyId",
            "Property.title",
            "Lead.leadId",
            "Lead.name"
          ],
          "writesFields": [
            "VisitScheduleRequest.propertyId",
            "VisitScheduleRequest.leadId",
            "VisitScheduleRequest.requestedStartAt",
            "VisitScheduleRequest.requestedEndAt",
            "VisitScheduleRequest.notes"
          ],
          "rulesApplied": [
            "ruleVisitStatus"
          ]
        }
      ]
    },
    {
      "sectionName": "Detalhes e ações da visita",
      "mode": "view",
      "organisms": [
        {
          "organismName": "visitDetailsPanel",
          "purpose": "Visualizar detalhes da visita selecionada.",
          "userActions": [
            "carregarDetalhesVisita"
          ],
          "requiredEntities": [
            "Visit"
          ],
          "readsFields": [
            "Visit.visitId",
            "Visit.status",
            "Visit.scheduledAt",
            "Visit.propertyId",
            "Visit.leadId"
          ],
          "writesFields": [],
          "rulesApplied": [
            "ruleVisitStatus"
          ]
        },
        {
          "organismName": "visitStatusActions",
          "purpose": "Confirmar, reagendar, finalizar ou cancelar visita.",
          "userActions": [
            "confirmarVisita",
            "reagendarVisita",
            "finalizarVisita",
            "cancelarVisita"
          ],
          "requiredEntities": [
            "VisitScheduleRequest",
            "Visit"
          ],
          "readsFields": [
            "Visit.visitId",
            "Visit.status",
            "Visit.scheduledAt"
          ],
          "writesFields": [
            "VisitScheduleRequest.status",
            "VisitScheduleRequest.requestedStartAt",
            "VisitScheduleRequest.requestedEndAt"
          ],
          "rulesApplied": [
            "ruleVisitStatus"
          ]
        }
      ]
    },
    {
      "sectionName": "Solicitações de agendamento",
      "mode": "view",
      "organisms": [
        {
          "organismName": "visitScheduleRequestsList",
          "purpose": "Exibir histórico de solicitações de agendamento.",
          "userActions": [
            "listarSolicitacoesAgendamento",
            "selecionarSolicitacao"
          ],
          "requiredEntities": [
            "VisitScheduleRequest"
          ],
          "readsFields": [
            "VisitScheduleRequest.visitScheduleRequestId",
            "VisitScheduleRequest.status",
            "VisitScheduleRequest.requestedStartAt",
            "VisitScheduleRequest.propertyId",
            "VisitScheduleRequest.leadId",
            "VisitScheduleRequest.visitId"
          ],
          "writesFields": [],
          "rulesApplied": [
            "ruleVisitStatus"
          ]
        }
      ]
    }
  ]
};

export const pipeline = [
  {
    "id": "visitsAgenda__l2_page",
    "type": "l2_page",
    "outputPath": "_102045_/l2/propertyFlowCrm/web/desktop/page11/visitsAgenda.ts",
    "defPath": "_102045_/l2/propertyFlowCrm/web/desktop/page11/visitsAgenda.defs.ts",
    "dependsFiles": [
      "_102045_/l2/propertyFlowCrm/web/shared/visitsAgenda.ts",
      "_102045_/l2/propertyFlowCrm/web/contracts/visitsAgenda.ts"
    ],
    "dependsOn": [],
    "skills": [
      "_102020_/l2/agentMaterializeSolution/skills/genPageRender.ts",
      "_102020_/l2/agentMaterializeSolution/skills/genPageDS.ts"
    ],
    "afterSaveFrontEnd": "_102020_/l2/agentMaterializeSolution/registerFrontEnd.ts?registerPage",
    "visualStyle": {
      "tone": "Moderno e clean, com foco em usabilidade",
      "layout": "Painéis com cards, listas e kanban; calendário para visitas; navegação lateral simples",
      "palette": [
        "#0F172A",
        "#2563EB",
        "#22C55E",
        "#F59E0B",
        "#F8FAFC"
      ]
    },
    "agent": "agentMaterializeGen"
  }
] as const;
