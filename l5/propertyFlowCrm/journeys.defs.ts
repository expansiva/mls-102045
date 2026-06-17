/// <mls fileReference="_102045_/l5/propertyFlowCrm/journeys.defs.ts" enhancement="_blank"/>

export const userJourneysPlan = {
  "schemaVersion": "2026-06-06",
  "artifactType": "userJourneys",
  "artifactId": "journeys",
  "moduleName": "propertyFlowCrm",
  "status": "draft",
  "source": {
    "agentName": "agentPlanUserJourneys",
    "stepId": 12,
    "planId": "plan-user-journeys"
  },
  "data": {
    "journeys": [
      {
        "journeyId": "managePropertiesLifecycle",
        "title": "Cadastrar e atualizar imóvel no ciclo de vida",
        "actor": "corretor",
        "capabilityIds": [
          "manageProperties"
        ],
        "description": "O corretor cadastra um imóvel, ajusta informações e acompanha seu status até publicação.",
        "steps": [
          {
            "intent": "Registrar um novo imóvel para oferta",
            "action": "Acessa a lista de imóveis e inicia o cadastro com dados e fotos",
            "entities": [
              "Property",
              "Broker"
            ],
            "pageHint": "propertiesList",
            "outcome": "Imóvel criado com status inicial captado/ativo"
          },
          {
            "intent": "Completar detalhes do imóvel para publicar",
            "action": "Abre os detalhes do imóvel e atualiza características, preço e status",
            "entities": [
              "Property"
            ],
            "pageHint": "propertyDetails",
            "outcome": "Imóvel atualizado e pronto para publicação"
          },
          {
            "intent": "Encontrar um imóvel específico",
            "action": "Usa busca e filtros por status e localização",
            "entities": [
              "Property"
            ],
            "pageHint": "propertiesList",
            "outcome": "Lista filtrada com o imóvel desejado"
          }
        ]
      },
      {
        "journeyId": "manageLeadsCaptureAndUpdate",
        "title": "Cadastrar e atualizar lead/cliente",
        "actor": "corretor",
        "capabilityIds": [
          "manageLeads"
        ],
        "description": "O corretor registra um lead, mantém dados atualizados e acompanha o relacionamento.",
        "steps": [
          {
            "intent": "Registrar um novo lead que entrou em contato",
            "action": "Abre o cadastro de lead e preenche dados de contato e interesse",
            "entities": [
              "Lead",
              "Broker"
            ],
            "pageHint": "leadsPipeline",
            "outcome": "Lead criado com status novo"
          },
          {
            "intent": "Atualizar informações do lead após contato",
            "action": "Abre detalhes do lead e registra preferências e histórico",
            "entities": [
              "Lead"
            ],
            "pageHint": "leadDetails",
            "outcome": "Lead atualizado com informações atuais"
          }
        ]
      },
      {
        "journeyId": "leadPipelineProgress",
        "title": "Mover lead no pipeline até proposta",
        "actor": "corretor",
        "capabilityIds": [
          "leadPipeline"
        ],
        "description": "O corretor acompanha o pipeline e move o lead entre etapas conforme o avanço.",
        "steps": [
          {
            "intent": "Visualizar os leads por etapa",
            "action": "Abre o pipeline e revisa colunas por status",
            "entities": [
              "Lead"
            ],
            "pageHint": "leadsPipeline",
            "outcome": "Pipeline visível com cards por etapa"
          },
          {
            "intent": "Avançar um lead para a próxima etapa",
            "action": "Arrasta o card do lead para a coluna seguinte",
            "entities": [
              "Lead",
              "LeadStageChange"
            ],
            "pageHint": "leadsPipeline",
            "outcome": "Etapa do lead atualizada para emContato/qualificado/proposta"
          },
          {
            "intent": "Marcar um lead como perdido",
            "action": "Move o card para a coluna perdido e registra motivo",
            "entities": [
              "Lead",
              "LeadStageChange"
            ],
            "pageHint": "leadsPipeline",
            "outcome": "Lead encerrado como perdido"
          }
        ]
      },
      {
        "journeyId": "scheduleAndManageVisits",
        "title": "Agendar, reagendar e cancelar visitas",
        "actor": "corretor",
        "capabilityIds": [
          "scheduleVisits"
        ],
        "description": "O corretor agenda visitas, confirma ou altera status conforme o cliente responde.",
        "steps": [
          {
            "intent": "Encontrar horário disponível para visita",
            "action": "Abre o agendador de visitas e seleciona data e imóvel",
            "entities": [
              "Visit",
              "Property",
              "Lead",
              "VisitScheduleRequest"
            ],
            "pageHint": "visitsAgenda",
            "outcome": "Visita criada com status agendada"
          },
          {
            "intent": "Confirmar a visita com o cliente",
            "action": "Atualiza o status da visita para confirmada",
            "entities": [
              "Visit"
            ],
            "pageHint": "visitsAgenda",
            "outcome": "Visita confirmada"
          },
          {
            "intent": "Reagendar quando o cliente pede mudança",
            "action": "Edita a visita e escolhe nova data e hora",
            "entities": [
              "Visit"
            ],
            "pageHint": "visitsAgenda",
            "outcome": "Visita reagendada com novo horário"
          },
          {
            "intent": "Cancelar a visita quando não há interesse",
            "action": "Marca a visita como cancelada e registra motivo",
            "entities": [
              "Visit"
            ],
            "pageHint": "visitsAgenda",
            "outcome": "Visita cancelada"
          }
        ]
      },
      {
        "journeyId": "trackDealsFromProposalToClose",
        "title": "Rastrear negócio/proposta até fechamento",
        "actor": "corretor",
        "capabilityIds": [
          "trackDeals"
        ],
        "description": "O corretor cria uma proposta e acompanha as etapas do negócio até aceitar ou recusar.",
        "steps": [
          {
            "intent": "Criar uma proposta para um lead",
            "action": "Abre o rastreador de negócios e cria uma nova proposta vinculada ao lead e imóvel",
            "entities": [
              "Deal",
              "Lead",
              "Property"
            ],
            "pageHint": "dealsTracker",
            "outcome": "Negócio criado com status rascunho"
          },
          {
            "intent": "Enviar a proposta ao cliente",
            "action": "Atualiza o status para enviada e registra condições",
            "entities": [
              "Deal",
              "DealStageChange"
            ],
            "pageHint": "dealsTracker",
            "outcome": "Proposta enviada ao cliente"
          },
          {
            "intent": "Avançar a negociação após feedback",
            "action": "Move o negócio para emNegociacao e ajusta termos",
            "entities": [
              "Deal",
              "DealStageChange"
            ],
            "pageHint": "dealsTracker",
            "outcome": "Negócio em negociação"
          },
          {
            "intent": "Finalizar o negócio como aceito ou recusado",
            "action": "Marca a proposta como aceita e fechada ou como recusada",
            "entities": [
              "Deal",
              "DealStageChange"
            ],
            "pageHint": "dealsTracker",
            "outcome": "Negócio encerrado com resultado registrado"
          }
        ]
      },
      {
        "journeyId": "viewBrokerageDashboard",
        "title": "Acompanhar métricas no dashboard",
        "actor": "gestor",
        "capabilityIds": [
          "viewDashboard"
        ],
        "description": "O gestor acompanha indicadores de leads, imóveis e negócios para decisões rápidas.",
        "steps": [
          {
            "intent": "Ver a visão geral das métricas",
            "action": "Acessa o dashboard e revisa KPIs principais",
            "entities": [
              "DashboardMetricUpdate"
            ],
            "pageHint": "dashboard",
            "outcome": "Métricas atuais exibidas"
          },
          {
            "intent": "Investigar detalhes por período",
            "action": "Aplica filtro de datas para comparar desempenho",
            "entities": [
              "DashboardMetricUpdate"
            ],
            "pageHint": "dashboard",
            "outcome": "Dashboard atualizado com o período selecionado"
          }
        ]
      },
      {
        "journeyId": "adminMonitorMetrics",
        "title": "Monitorar e atualizar métricas administrativas",
        "actor": "admin",
        "capabilityIds": [
          "adminDashboard"
        ],
        "description": "O admin acompanha o dashboard administrativo e atualiza métricas quando necessário.",
        "steps": [
          {
            "intent": "Acompanhar o desempenho do sistema",
            "action": "Acessa o dashboard administrativo e revisa indicadores",
            "entities": [
              "DashboardMetricUpdate"
            ],
            "pageHint": "adminDashboard",
            "outcome": "Indicadores administrativos exibidos"
          },
          {
            "intent": "Forçar atualização das métricas",
            "action": "Executa a atualização de métricas no painel",
            "entities": [
              "DashboardMetricUpdate"
            ],
            "pageHint": "adminDashboard",
            "outcome": "Métricas recalculadas e atualizadas"
          }
        ]
      }
    ]
  }
} as const;

export default userJourneysPlan;
