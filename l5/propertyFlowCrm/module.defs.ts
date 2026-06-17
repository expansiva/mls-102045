/// <mls fileReference="_102045_/l5/propertyFlowCrm/module.defs.ts" enhancement="_blank"/>

export const modulePlan = {
  "schemaVersion": "2026-06-06",
  "artifactType": "module",
  "artifactId": "propertyFlowCrm",
  "moduleName": "propertyFlowCrm",
  "status": "draft",
  "source": {
    "agentName": "agentFinalizeSolutionPlan",
    "stepId": 11,
    "planId": "plan-finalize-solution-plan"
  },
  "data": {
    "module": {
      "moduleName": "propertyFlowCrm",
      "purpose": "Centralizar gestão de imóveis, leads, visitas e negócios para corretores e imobiliárias, com suporte a IA e métricas básicas.",
      "businessDomain": "CRM imobiliário",
      "languages": [
        "pt-BR",
        "en"
      ],
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
      }
    },
    "actors": [
      {
        "actorId": "corretor",
        "title": "Corretor",
        "description": "Profissional que cadastra imóveis, gerencia leads, agenda visitas e acompanha negócios."
      },
      {
        "actorId": "gestor",
        "title": "Gestor",
        "description": "Acompanha desempenho da equipe, pipeline e resultados."
      },
      {
        "actorId": "admin",
        "title": "Admin",
        "description": "Administra configurações e acompanha métricas administrativas."
      }
    ],
    "capabilities": [
      {
        "capabilityId": "manageProperties",
        "title": "Gerenciar imóveis",
        "description": "Cadastrar, editar, buscar e desativar imóveis com características e fotos mock.",
        "actor": "corretor",
        "priority": "now"
      },
      {
        "capabilityId": "manageLeads",
        "title": "Gerenciar leads/clientes",
        "description": "Cadastrar e atualizar leads com anotações e qualificação.",
        "actor": "corretor",
        "priority": "now"
      },
      {
        "capabilityId": "leadPipeline",
        "title": "Pipeline de leads",
        "description": "Visualizar e mover leads no pipeline por etapas em kanban ou lista.",
        "actor": "corretor",
        "priority": "now"
      },
      {
        "capabilityId": "scheduleVisits",
        "title": "Agendar visitas",
        "description": "Agendar visitas vinculadas a imóvel e lead com controle de status.",
        "actor": "corretor",
        "priority": "now"
      },
      {
        "capabilityId": "trackDeals",
        "title": "Rastrear negócios/propostas",
        "description": "Criar e acompanhar negócios por etapas e valores.",
        "actor": "corretor",
        "priority": "now"
      },
      {
        "capabilityId": "aiPropertyDescription",
        "title": "IA para descrição do imóvel",
        "description": "Gerar descrição de imóvel a partir de bullets fornecidos.",
        "actor": "corretor",
        "priority": "soon"
      },
      {
        "capabilityId": "aiLeadQualification",
        "title": "IA para qualificação do lead",
        "description": "Classificar lead como quente/morno/frio e sugerir follow-up.",
        "actor": "corretor",
        "priority": "soon"
      },
      {
        "capabilityId": "viewDashboard",
        "title": "Dashboard de métricas",
        "description": "Acompanhar métricas básicas de imóveis ativos, leads do mês e pipeline.",
        "actor": "gestor",
        "priority": "now"
      },
      {
        "capabilityId": "adminDashboard",
        "title": "Dashboard administrativo",
        "description": "Acessar painel administrativo com métricas básicas.",
        "actor": "admin",
        "priority": "now"
      }
    ],
    "ontology": {
      "entities": {
        "Property": {
          "title": "Imóvel",
          "description": "Cadastro mestre de imóveis com endereço, tipo, preço, status, características e fotos mock.",
          "ownership": "mdmOwned"
        },
        "Lead": {
          "title": "Lead/Cliente",
          "description": "Lead ou cliente com dados de contato, anotações e temperatura.",
          "ownership": "mdmOwned"
        },
        "Visit": {
          "title": "Visita/Agendamento",
          "description": "Agendamento de visita vinculada a imóvel, lead e corretor.",
          "ownership": "mdmOwned"
        },
        "Deal": {
          "title": "Negócio/Proposta",
          "description": "Proposta comercial vinculada a imóvel e lead, com valor e etapa.",
          "ownership": "mdmOwned"
        },
        "Broker": {
          "title": "Corretor",
          "description": "Cadastro de corretores responsáveis por imóveis, leads e negócios.",
          "ownership": "mdmOwned"
        },
        "PropertyDescriptionRequest": {
          "title": "Solicitação de descrição do imóvel",
          "description": "Comando de geração de descrição com base em bullets informados.",
          "ownership": "moduleOwned",
          "kind": "usecaseEntity"
        },
        "LeadQualificationRequest": {
          "title": "Solicitação de qualificação do lead",
          "description": "Comando para classificar temperatura do lead e sugerir follow-up.",
          "ownership": "moduleOwned",
          "kind": "usecaseEntity"
        },
        "VisitScheduleRequest": {
          "title": "Solicitação de agendamento de visita",
          "description": "Comando para criar ou reagendar uma visita.",
          "ownership": "moduleOwned",
          "kind": "usecaseEntity"
        },
        "LeadStageChange": {
          "title": "Mudança de etapa do lead",
          "description": "Comando para mover lead no pipeline.",
          "ownership": "moduleOwned",
          "kind": "usecaseEntity"
        },
        "DealStageChange": {
          "title": "Mudança de etapa do negócio",
          "description": "Comando para avançar etapa do negócio/proposta.",
          "ownership": "moduleOwned",
          "kind": "usecaseEntity"
        },
        "DashboardMetricUpdate": {
          "title": "Atualização de métricas do dashboard",
          "description": "Evento de atualização agregada após mudanças de imóveis, leads e negócios.",
          "ownership": "moduleOwned",
          "kind": "usecaseEntity"
        }
      }
    },
    "relationships": [
      {
        "relationshipId": "propertyAssignedToBroker",
        "fromEntity": "Property",
        "toEntity": "Broker",
        "type": "manyToOne",
        "description": "Cada imóvel possui um corretor responsável."
      },
      {
        "relationshipId": "leadAssignedToBroker",
        "fromEntity": "Lead",
        "toEntity": "Broker",
        "type": "manyToOne",
        "description": "Cada lead possui um corretor responsável."
      },
      {
        "relationshipId": "visitLinksProperty",
        "fromEntity": "Visit",
        "toEntity": "Property",
        "type": "manyToOne",
        "description": "Visita é vinculada a um imóvel."
      },
      {
        "relationshipId": "visitLinksLead",
        "fromEntity": "Visit",
        "toEntity": "Lead",
        "type": "manyToOne",
        "description": "Visita é vinculada a um lead."
      },
      {
        "relationshipId": "visitLinksBroker",
        "fromEntity": "Visit",
        "toEntity": "Broker",
        "type": "manyToOne",
        "description": "Visita é conduzida por um corretor."
      },
      {
        "relationshipId": "dealLinksProperty",
        "fromEntity": "Deal",
        "toEntity": "Property",
        "type": "manyToOne",
        "description": "Negócio refere-se a um imóvel."
      },
      {
        "relationshipId": "dealLinksLead",
        "fromEntity": "Deal",
        "toEntity": "Lead",
        "type": "manyToOne",
        "description": "Negócio refere-se a um lead."
      },
      {
        "relationshipId": "dealLinksBroker",
        "fromEntity": "Deal",
        "toEntity": "Broker",
        "type": "manyToOne",
        "description": "Negócio é conduzido por um corretor."
      },
      {
        "relationshipId": "propertyDescriptionTargetsProperty",
        "fromEntity": "PropertyDescriptionRequest",
        "toEntity": "Property",
        "type": "manyToOne",
        "description": "Solicitação de descrição referencia o imóvel alvo."
      },
      {
        "relationshipId": "leadQualificationTargetsLead",
        "fromEntity": "LeadQualificationRequest",
        "toEntity": "Lead",
        "type": "manyToOne",
        "description": "Solicitação de qualificação referencia o lead alvo."
      },
      {
        "relationshipId": "visitScheduleTargetsVisit",
        "fromEntity": "VisitScheduleRequest",
        "toEntity": "Visit",
        "type": "oneToOne",
        "description": "Solicitação de agendamento cria ou altera uma visita."
      },
      {
        "relationshipId": "visitScheduleTargetsProperty",
        "fromEntity": "VisitScheduleRequest",
        "toEntity": "Property",
        "type": "manyToOne",
        "description": "Solicitação de agendamento referencia o imóvel alvo."
      },
      {
        "relationshipId": "visitScheduleTargetsLead",
        "fromEntity": "VisitScheduleRequest",
        "toEntity": "Lead",
        "type": "manyToOne",
        "description": "Solicitação de agendamento referencia o lead alvo."
      },
      {
        "relationshipId": "leadStageChangeTargetsLead",
        "fromEntity": "LeadStageChange",
        "toEntity": "Lead",
        "type": "manyToOne",
        "description": "Mudança de etapa afeta o lead alvo."
      },
      {
        "relationshipId": "dealStageChangeTargetsDeal",
        "fromEntity": "DealStageChange",
        "toEntity": "Deal",
        "type": "manyToOne",
        "description": "Mudança de etapa afeta o negócio alvo."
      },
      {
        "relationshipId": "dashboardMetricUpdateAggregatesProperty",
        "fromEntity": "DashboardMetricUpdate",
        "toEntity": "Property",
        "type": "manyToMany",
        "description": "Atualização de métricas agrega imóveis para cálculo."
      },
      {
        "relationshipId": "dashboardMetricUpdateAggregatesLead",
        "fromEntity": "DashboardMetricUpdate",
        "toEntity": "Lead",
        "type": "manyToMany",
        "description": "Atualização de métricas agrega leads para cálculo."
      },
      {
        "relationshipId": "dashboardMetricUpdateAggregatesDeal",
        "fromEntity": "DashboardMetricUpdate",
        "toEntity": "Deal",
        "type": "manyToMany",
        "description": "Atualização de métricas agrega negócios para cálculo."
      }
    ]
  }
} as const;

export default modulePlan;
