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
      "title": "PropertyFlowCRM",
      "purpose": "Centralizar a gestão de imóveis, leads e visitas em uma única plataforma, aumentando a produtividade e taxa de conversão de negócios para imobiliárias e corretores autônomos.",
      "businessDomain": "realEstateCrm",
      "languages": [
        "pt-BR",
        "en"
      ],
      "visualStyle": {
        "tone": "Moderno e profissional",
        "layout": "Visual limpo com navegação intuitiva",
        "palette": [
          "#1E3A5F",
          "#4A90A4",
          "#F5F7FA",
          "#2ECC71",
          "#E74C3C"
        ]
      }
    },
    "actors": [
      {
        "actorId": "broker",
        "title": "Corretor",
        "description": "Profissional responsável por cadastrar imóveis, atender leads, agendar visitas e conduzir negociações até o fechamento."
      },
      {
        "actorId": "agencyManager",
        "title": "Gerente de Imobiliária",
        "description": "Supervisiona a equipe de corretores, acompanha métricas de desempenho, gerencia o pipeline de negócios e toma decisões estratégicas."
      },
      {
        "actorId": "admin",
        "title": "Administrador",
        "description": "Configura o sistema, gerencia usuários e permissões, e mantém dados mestres da plataforma."
      }
    ],
    "capabilities": [
      {
        "capabilityId": "manageProperties",
        "title": "Gerenciar Imóveis",
        "description": "Cadastrar, editar, buscar e visualizar imóveis com endereço, tipo, preço, status, características e fotos mock.",
        "actor": "broker",
        "priority": "now"
      },
      {
        "capabilityId": "manageLeads",
        "title": "Gerenciar Leads/Clientes",
        "description": "Cadastrar e acompanhar leads através de um pipeline visual (kanban ou lista), registrando interações e anotações.",
        "actor": "broker",
        "priority": "now"
      },
      {
        "capabilityId": "scheduleVisits",
        "title": "Agendar Visitas",
        "description": "Criar e gerenciar agendamentos de visitas vinculando lead, imóvel, data/hora e corretor responsável.",
        "actor": "broker",
        "priority": "now"
      },
      {
        "capabilityId": "trackDeals",
        "title": "Rastrear Negócios/Propostas",
        "description": "Acompanhar negócios por etapas (pipeline), registrando status, valor e imóvel associado até o fechamento.",
        "actor": "broker",
        "priority": "now"
      },
      {
        "capabilityId": "viewDashboard",
        "title": "Visualizar Dashboard",
        "description": "Acessar painel com métricas de imóveis ativos, leads do mês e pipeline de fechamentos.",
        "actor": "agencyManager",
        "priority": "now"
      },
      {
        "capabilityId": "generatePropertyDescription",
        "title": "Gerar Descrição de Imóvel com IA",
        "description": "Utilizar IA para gerar descrição comercial do imóvel a partir de bullets ou características informadas.",
        "actor": "broker",
        "priority": "now"
      },
      {
        "capabilityId": "classifyLeadTemperature",
        "title": "Classificar Lead com IA",
        "description": "Classificar automaticamente leads como quente, morno ou frio com base em anotações e histórico de interações.",
        "actor": "broker",
        "priority": "now"
      },
      {
        "capabilityId": "suggestFollowUp",
        "title": "Sugerir Follow-up com IA",
        "description": "Receber sugestões de próxima mensagem de follow-up geradas por IA para cada lead.",
        "actor": "broker",
        "priority": "now"
      },
      {
        "capabilityId": "manageBrokers",
        "title": "Gerenciar Corretores",
        "description": "Cadastrar, editar e desativar corretores da equipe, atribuindo permissões e áreas de atuação.",
        "actor": "admin",
        "priority": "now"
      },
      {
        "capabilityId": "monitorTeamPerformance",
        "title": "Monitorar Desempenho da Equipe",
        "description": "Acompanhar métricas de produtividade e conversão por corretor.",
        "actor": "agencyManager",
        "priority": "soon"
      }
    ],
    "ontology": {
      "entities": {
        "Property": {
          "title": "Imóvel",
          "description": "Representa um imóvel disponível para venda ou locação, com todas as suas características, localização e fotos.",
          "kind": "master",
          "ownership": "mdmOwned",
          "statusEnum": [
            "active",
            "inactive",
            "sold",
            "rented",
            "reserved"
          ],
          "lifecycleStates": [
            "draft",
            "published",
            "archived"
          ],
          "fields": [
            {
              "fieldId": "propertyId",
              "type": "uuid",
              "required": true,
              "description": "Identificador único do imóvel."
            },
            {
              "fieldId": "title",
              "type": "string",
              "required": true,
              "description": "Título do anúncio do imóvel."
            },
            {
              "fieldId": "description",
              "type": "text",
              "required": false,
              "description": "Descrição comercial detalhada do imóvel."
            },
            {
              "fieldId": "propertyType",
              "type": "enum",
              "required": true,
              "description": "Tipo do imóvel (apartamento, casa, terreno, comercial, etc.)."
            },
            {
              "fieldId": "transactionType",
              "type": "enum",
              "required": true,
              "description": "Tipo de transação (venda, locação, venda e locação)."
            },
            {
              "fieldId": "price",
              "type": "decimal",
              "required": true,
              "description": "Preço de venda ou valor do aluguel."
            },
            {
              "fieldId": "status",
              "type": "enum",
              "required": true,
              "description": "Status atual do imóvel (ativo, inativo, vendido, alugado, reservado)."
            },
            {
              "fieldId": "addressStreet",
              "type": "string",
              "required": true,
              "description": "Logradouro do endereço."
            },
            {
              "fieldId": "addressNumber",
              "type": "string",
              "required": false,
              "description": "Número do endereço."
            },
            {
              "fieldId": "addressComplement",
              "type": "string",
              "required": false,
              "description": "Complemento do endereço."
            },
            {
              "fieldId": "addressNeighborhood",
              "type": "string",
              "required": true,
              "description": "Bairro do imóvel."
            },
            {
              "fieldId": "addressCity",
              "type": "string",
              "required": true,
              "description": "Cidade do imóvel."
            },
            {
              "fieldId": "addressState",
              "type": "string",
              "required": true,
              "description": "Estado/UF do imóvel."
            },
            {
              "fieldId": "addressZipCode",
              "type": "string",
              "required": false,
              "description": "CEP do imóvel."
            },
            {
              "fieldId": "area",
              "type": "decimal",
              "required": false,
              "description": "Área total em metros quadrados."
            },
            {
              "fieldId": "bedrooms",
              "type": "integer",
              "required": false,
              "description": "Número de quartos."
            },
            {
              "fieldId": "bathrooms",
              "type": "integer",
              "required": false,
              "description": "Número de banheiros."
            },
            {
              "fieldId": "parkingSpaces",
              "type": "integer",
              "required": false,
              "description": "Número de vagas de garagem."
            },
            {
              "fieldId": "features",
              "type": "array",
              "required": false,
              "description": "Lista de características adicionais (piscina, churrasqueira, etc.)."
            },
            {
              "fieldId": "photoUrls",
              "type": "array",
              "required": false,
              "description": "URLs das fotos mock do imóvel."
            },
            {
              "fieldId": "assignedBrokerId",
              "type": "uuid",
              "required": false,
              "description": "ID do corretor responsável pelo imóvel."
            },
            {
              "fieldId": "createdAt",
              "type": "datetime",
              "required": true,
              "description": "Data de criação do registro."
            },
            {
              "fieldId": "updatedAt",
              "type": "datetime",
              "required": true,
              "description": "Data da última atualização."
            }
          ],
          "rulesApplied": [
            "rulePropertyRequiredFields",
            "rulePropertyStatusTransition"
          ]
        },
        "Lead": {
          "title": "Lead/Cliente",
          "description": "Representa um potencial cliente interessado em imóveis, com informações de contato e histórico de interações.",
          "kind": "master",
          "ownership": "mdmOwned",
          "statusEnum": [
            "new",
            "contacted",
            "qualified",
            "negotiating",
            "converted",
            "lost"
          ],
          "lifecycleStates": [
            "active",
            "archived"
          ],
          "fields": [
            {
              "fieldId": "leadId",
              "type": "uuid",
              "required": true,
              "description": "Identificador único do lead."
            },
            {
              "fieldId": "fullName",
              "type": "string",
              "required": true,
              "description": "Nome completo do lead."
            },
            {
              "fieldId": "email",
              "type": "email",
              "required": false,
              "description": "E-mail de contato."
            },
            {
              "fieldId": "phone",
              "type": "string",
              "required": true,
              "description": "Telefone de contato."
            },
            {
              "fieldId": "source",
              "type": "enum",
              "required": false,
              "description": "Origem do lead (site, indicação, portal, redes sociais, etc.)."
            },
            {
              "fieldId": "pipelineStage",
              "type": "enum",
              "required": true,
              "description": "Etapa atual no pipeline (novo, em contato, qualificado, negociando, convertido, perdido)."
            },
            {
              "fieldId": "temperature",
              "type": "enum",
              "required": false,
              "description": "Classificação de temperatura do lead (quente, morno, frio)."
            },
            {
              "fieldId": "interestType",
              "type": "enum",
              "required": false,
              "description": "Tipo de interesse (compra, locação, ambos)."
            },
            {
              "fieldId": "preferredPropertyType",
              "type": "enum",
              "required": false,
              "description": "Tipo de imóvel de preferência."
            },
            {
              "fieldId": "budgetMin",
              "type": "decimal",
              "required": false,
              "description": "Orçamento mínimo do lead."
            },
            {
              "fieldId": "budgetMax",
              "type": "decimal",
              "required": false,
              "description": "Orçamento máximo do lead."
            },
            {
              "fieldId": "preferredNeighborhoods",
              "type": "array",
              "required": false,
              "description": "Bairros de preferência."
            },
            {
              "fieldId": "notes",
              "type": "text",
              "required": false,
              "description": "Anotações e observações sobre o lead."
            },
            {
              "fieldId": "assignedBrokerId",
              "type": "uuid",
              "required": true,
              "description": "ID do corretor responsável pelo lead."
            },
            {
              "fieldId": "lastContactAt",
              "type": "datetime",
              "required": false,
              "description": "Data do último contato."
            },
            {
              "fieldId": "nextFollowUpAt",
              "type": "datetime",
              "required": false,
              "description": "Data sugerida para próximo follow-up."
            },
            {
              "fieldId": "suggestedFollowUpMessage",
              "type": "text",
              "required": false,
              "description": "Mensagem de follow-up sugerida pela IA."
            },
            {
              "fieldId": "createdAt",
              "type": "datetime",
              "required": true,
              "description": "Data de criação do registro."
            },
            {
              "fieldId": "updatedAt",
              "type": "datetime",
              "required": true,
              "description": "Data da última atualização."
            }
          ],
          "rulesApplied": [
            "ruleLeadRequiredFields",
            "ruleLeadPipelineTransition"
          ]
        },
        "Visit": {
          "title": "Visita/Agendamento",
          "description": "Representa um agendamento de visita a um imóvel, vinculando lead, imóvel, corretor e data/hora.",
          "kind": "transaction",
          "ownership": "moduleOwned",
          "statusEnum": [
            "scheduled",
            "confirmed",
            "completed",
            "cancelled",
            "noShow"
          ],
          "lifecycleStates": [
            "pending",
            "done"
          ],
          "fields": [
            {
              "fieldId": "visitId",
              "type": "uuid",
              "required": true,
              "description": "Identificador único da visita."
            },
            {
              "fieldId": "leadId",
              "type": "uuid",
              "required": true,
              "description": "ID do lead que fará a visita."
            },
            {
              "fieldId": "propertyId",
              "type": "uuid",
              "required": true,
              "description": "ID do imóvel a ser visitado."
            },
            {
              "fieldId": "brokerId",
              "type": "uuid",
              "required": true,
              "description": "ID do corretor responsável pela visita."
            },
            {
              "fieldId": "scheduledAt",
              "type": "datetime",
              "required": true,
              "description": "Data e hora agendada para a visita."
            },
            {
              "fieldId": "status",
              "type": "enum",
              "required": true,
              "description": "Status da visita (agendada, confirmada, realizada, cancelada, não compareceu)."
            },
            {
              "fieldId": "notes",
              "type": "text",
              "required": false,
              "description": "Observações sobre a visita."
            },
            {
              "fieldId": "feedback",
              "type": "text",
              "required": false,
              "description": "Feedback do lead após a visita."
            },
            {
              "fieldId": "rating",
              "type": "integer",
              "required": false,
              "description": "Avaliação do lead sobre o imóvel (1-5)."
            },
            {
              "fieldId": "createdAt",
              "type": "datetime",
              "required": true,
              "description": "Data de criação do registro."
            },
            {
              "fieldId": "updatedAt",
              "type": "datetime",
              "required": true,
              "description": "Data da última atualização."
            }
          ],
          "rulesApplied": [
            "ruleVisitRequiredFields",
            "ruleVisitStatusTransition"
          ]
        },
        "Deal": {
          "title": "Negócio/Proposta",
          "description": "Representa uma proposta ou negociação de venda/locação de um imóvel, com valor, etapas e status.",
          "kind": "transaction",
          "ownership": "moduleOwned",
          "statusEnum": [
            "proposal",
            "negotiation",
            "documentation",
            "closing",
            "won",
            "lost"
          ],
          "lifecycleStates": [
            "open",
            "closed"
          ],
          "fields": [
            {
              "fieldId": "dealId",
              "type": "uuid",
              "required": true,
              "description": "Identificador único do negócio."
            },
            {
              "fieldId": "leadId",
              "type": "uuid",
              "required": true,
              "description": "ID do lead associado ao negócio."
            },
            {
              "fieldId": "propertyId",
              "type": "uuid",
              "required": true,
              "description": "ID do imóvel objeto do negócio."
            },
            {
              "fieldId": "brokerId",
              "type": "uuid",
              "required": true,
              "description": "ID do corretor responsável pelo negócio."
            },
            {
              "fieldId": "dealType",
              "type": "enum",
              "required": true,
              "description": "Tipo do negócio (venda, locação)."
            },
            {
              "fieldId": "proposedValue",
              "type": "decimal",
              "required": true,
              "description": "Valor proposto pelo cliente."
            },
            {
              "fieldId": "acceptedValue",
              "type": "decimal",
              "required": false,
              "description": "Valor aceito/negociado."
            },
            {
              "fieldId": "pipelineStage",
              "type": "enum",
              "required": true,
              "description": "Etapa atual no pipeline (proposta, negociação, documentação, fechamento, ganho, perdido)."
            },
            {
              "fieldId": "status",
              "type": "enum",
              "required": true,
              "description": "Status do negócio (aberto, fechado)."
            },
            {
              "fieldId": "lossReason",
              "type": "string",
              "required": false,
              "description": "Motivo da perda do negócio, se aplicável."
            },
            {
              "fieldId": "expectedCloseDate",
              "type": "date",
              "required": false,
              "description": "Data prevista para fechamento."
            },
            {
              "fieldId": "actualCloseDate",
              "type": "date",
              "required": false,
              "description": "Data real de fechamento."
            },
            {
              "fieldId": "notes",
              "type": "text",
              "required": false,
              "description": "Observações sobre o negócio."
            },
            {
              "fieldId": "createdAt",
              "type": "datetime",
              "required": true,
              "description": "Data de criação do registro."
            },
            {
              "fieldId": "updatedAt",
              "type": "datetime",
              "required": true,
              "description": "Data da última atualização."
            }
          ],
          "rulesApplied": [
            "ruleDealRequiredFields",
            "ruleDealPipelineTransition"
          ]
        },
        "Broker": {
          "title": "Corretor",
          "description": "Representa um corretor de imóveis que opera no sistema, com dados pessoais e área de atuação.",
          "kind": "master",
          "ownership": "mdmOwned",
          "statusEnum": [
            "active",
            "inactive"
          ],
          "lifecycleStates": [
            "active",
            "suspended",
            "terminated"
          ],
          "fields": [
            {
              "fieldId": "brokerId",
              "type": "uuid",
              "required": true,
              "description": "Identificador único do corretor."
            },
            {
              "fieldId": "fullName",
              "type": "string",
              "required": true,
              "description": "Nome completo do corretor."
            },
            {
              "fieldId": "email",
              "type": "email",
              "required": true,
              "description": "E-mail do corretor."
            },
            {
              "fieldId": "phone",
              "type": "string",
              "required": true,
              "description": "Telefone de contato."
            },
            {
              "fieldId": "creci",
              "type": "string",
              "required": false,
              "description": "Número do registro CRECI."
            },
            {
              "fieldId": "status",
              "type": "enum",
              "required": true,
              "description": "Status do corretor (ativo, inativo)."
            },
            {
              "fieldId": "role",
              "type": "enum",
              "required": true,
              "description": "Perfil de acesso (corretor, gerente, administrador)."
            },
            {
              "fieldId": "specializations",
              "type": "array",
              "required": false,
              "description": "Especializações do corretor (residencial, comercial, luxo, etc.)."
            },
            {
              "fieldId": "workingAreas",
              "type": "array",
              "required": false,
              "description": "Bairros ou regiões de atuação."
            },
            {
              "fieldId": "photoUrl",
              "type": "string",
              "required": false,
              "description": "URL da foto do corretor."
            },
            {
              "fieldId": "hireDate",
              "type": "date",
              "required": false,
              "description": "Data de contratação."
            },
            {
              "fieldId": "createdAt",
              "type": "datetime",
              "required": true,
              "description": "Data de criação do registro."
            },
            {
              "fieldId": "updatedAt",
              "type": "datetime",
              "required": true,
              "description": "Data da última atualização."
            }
          ],
          "rulesApplied": [
            "ruleBrokerRequiredFields"
          ]
        },
        "LeadInteraction": {
          "title": "Interação com Lead",
          "description": "Registro de interações e contatos realizados com um lead.",
          "kind": "transaction",
          "ownership": "moduleOwned",
          "fields": [
            {
              "fieldId": "interactionId",
              "type": "uuid",
              "required": true,
              "description": "Identificador único da interação."
            },
            {
              "fieldId": "leadId",
              "type": "uuid",
              "required": true,
              "description": "ID do lead relacionado."
            },
            {
              "fieldId": "brokerId",
              "type": "uuid",
              "required": true,
              "description": "ID do corretor que realizou a interação."
            },
            {
              "fieldId": "interactionType",
              "type": "enum",
              "required": true,
              "description": "Tipo de interação (ligação, e-mail, WhatsApp, presencial, etc.)."
            },
            {
              "fieldId": "direction",
              "type": "enum",
              "required": true,
              "description": "Direção da interação (entrada, saída)."
            },
            {
              "fieldId": "summary",
              "type": "text",
              "required": true,
              "description": "Resumo da interação."
            },
            {
              "fieldId": "interactionAt",
              "type": "datetime",
              "required": true,
              "description": "Data e hora da interação."
            },
            {
              "fieldId": "createdAt",
              "type": "datetime",
              "required": true,
              "description": "Data de criação do registro."
            }
          ],
          "rulesApplied": [
            "ruleInteractionRequiredFields"
          ]
        }
      }
    },
    "relationships": [
      {
        "relationshipId": "propertyBroker",
        "fromEntity": "Property",
        "toEntity": "Broker",
        "type": "manyToOne",
        "description": "Um imóvel pode ter um corretor responsável atribuído."
      },
      {
        "relationshipId": "leadBroker",
        "fromEntity": "Lead",
        "toEntity": "Broker",
        "type": "manyToOne",
        "description": "Um lead é atribuído a um corretor responsável."
      },
      {
        "relationshipId": "visitLead",
        "fromEntity": "Visit",
        "toEntity": "Lead",
        "type": "manyToOne",
        "description": "Uma visita é agendada para um lead específico."
      },
      {
        "relationshipId": "visitProperty",
        "fromEntity": "Visit",
        "toEntity": "Property",
        "type": "manyToOne",
        "description": "Uma visita é realizada em um imóvel específico."
      },
      {
        "relationshipId": "visitBroker",
        "fromEntity": "Visit",
        "toEntity": "Broker",
        "type": "manyToOne",
        "description": "Uma visita é conduzida por um corretor."
      },
      {
        "relationshipId": "dealLead",
        "fromEntity": "Deal",
        "toEntity": "Lead",
        "type": "manyToOne",
        "description": "Um negócio é associado a um lead/cliente."
      },
      {
        "relationshipId": "dealProperty",
        "fromEntity": "Deal",
        "toEntity": "Property",
        "type": "manyToOne",
        "description": "Um negócio é referente a um imóvel específico."
      },
      {
        "relationshipId": "dealBroker",
        "fromEntity": "Deal",
        "toEntity": "Broker",
        "type": "manyToOne",
        "description": "Um negócio é conduzido por um corretor responsável."
      },
      {
        "relationshipId": "interactionLead",
        "fromEntity": "LeadInteraction",
        "toEntity": "Lead",
        "type": "manyToOne",
        "description": "Uma interação é registrada para um lead específico."
      },
      {
        "relationshipId": "interactionBroker",
        "fromEntity": "LeadInteraction",
        "toEntity": "Broker",
        "type": "manyToOne",
        "description": "Uma interação é realizada por um corretor."
      }
    ]
  }
} as const;

export default modulePlan;
