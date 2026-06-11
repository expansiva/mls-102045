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
      "purpose": "Centralizar imóveis, leads, visitas e propostas para acelerar fechamentos na corretagem imobiliária.",
      "businessDomain": "gestaoImobiliaria",
      "languages": [
        "pt-BR",
        "en"
      ],
      "visualStyle": {
        "tone": "Moderno e profissional",
        "layout": "Dashboard e listas com Kanban para leads",
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
        "actorId": "adminImobiliaria",
        "title": "Admin da imobiliária",
        "description": "Configura cadastros, acompanha métricas e supervisiona pipeline e negócios."
      },
      {
        "actorId": "corretor",
        "title": "Corretor",
        "description": "Gerencia imóveis, leads, visitas e propostas no dia a dia."
      }
    ],
    "capabilities": [
      {
        "capabilityId": "gerirImoveis",
        "title": "CRUD de imóveis com busca",
        "description": "Cadastrar, editar, buscar e arquivar imóveis com dados, características e fotos mock.",
        "actor": "adminImobiliaria",
        "priority": "now"
      },
      {
        "capabilityId": "gerirLeads",
        "title": "Pipeline de leads (Kanban)",
        "description": "Mover leads entre etapas: Novo, Contato, Visita agendada, Proposta enviada e Fechado.",
        "actor": "corretor",
        "priority": "now"
      },
      {
        "capabilityId": "agendarVisitas",
        "title": "Agendador de visitas",
        "description": "Criar e gerenciar visitas vinculadas a imóvel, lead e corretor.",
        "actor": "corretor",
        "priority": "now"
      },
      {
        "capabilityId": "acompanharNegocios",
        "title": "Rastreador de negócios",
        "description": "Acompanhar propostas/negócios por etapas e valores associados ao imóvel.",
        "actor": "adminImobiliaria",
        "priority": "now"
      },
      {
        "capabilityId": "dashboardBasico",
        "title": "Dashboard básico",
        "description": "Visão geral com imóveis ativos, leads do mês e pipeline de fechamentos.",
        "actor": "adminImobiliaria",
        "priority": "now"
      },
      {
        "capabilityId": "iaDescricaoImovel",
        "title": "IA para descrição de imóvel",
        "description": "Gerar descrição a partir de bullets/características do imóvel.",
        "actor": "corretor",
        "priority": "soon"
      },
      {
        "capabilityId": "iaClassificacaoLead",
        "title": "IA para qualificação de lead",
        "description": "Classificar lead como quente/morno/frio a partir de anotações e sugerir mensagem de follow-up.",
        "actor": "corretor",
        "priority": "soon"
      },
      {
        "capabilityId": "i18n",
        "title": "Internacionalização pt-BR e en",
        "description": "Interface disponível em pt-BR e en.",
        "actor": "adminImobiliaria",
        "priority": "now"
      },
      {
        "capabilityId": "gerirCorretores",
        "title": "Gestão de corretores",
        "description": "Cadastrar, editar e ativar/desativar corretores.",
        "actor": "adminImobiliaria",
        "priority": "soon"
      }
    ],
    "ontology": {
      "entities": {
        "Imovel": {
          "title": "Imóvel",
          "description": "Cadastro de imóvel com endereço, tipo, preço, status e características.",
          "ownership": "mdmOwned"
        },
        "Lead": {
          "title": "Lead/Cliente",
          "description": "Lead ou cliente potencial no pipeline comercial.",
          "ownership": "mdmOwned"
        },
        "Visita": {
          "title": "Visita/Agendamento",
          "description": "Agendamento de visita vinculado a imóvel e lead.",
          "ownership": "mdmOwned"
        },
        "Negocio": {
          "title": "Negócio/Proposta",
          "description": "Proposta comercial vinculada a imóvel e lead.",
          "ownership": "mdmOwned"
        },
        "Corretor": {
          "title": "Corretor",
          "description": "Cadastro de corretores que atuam no CRM.",
          "ownership": "mdmOwned"
        }
      }
    },
    "relationships": [
      {
        "relationshipId": "leadAssignedToCorretor",
        "fromEntity": "Lead",
        "toEntity": "Corretor",
        "type": "manyToOne",
        "description": "Lead é atribuído a um corretor responsável."
      },
      {
        "relationshipId": "imovelAssignedToCorretor",
        "fromEntity": "Imovel",
        "toEntity": "Corretor",
        "type": "manyToOne",
        "description": "Imóvel possui corretor responsável."
      },
      {
        "relationshipId": "visitaToImovel",
        "fromEntity": "Visita",
        "toEntity": "Imovel",
        "type": "manyToOne",
        "description": "Visita referencia um imóvel."
      },
      {
        "relationshipId": "visitaToLead",
        "fromEntity": "Visita",
        "toEntity": "Lead",
        "type": "manyToOne",
        "description": "Visita referencia um lead."
      },
      {
        "relationshipId": "visitaToCorretor",
        "fromEntity": "Visita",
        "toEntity": "Corretor",
        "type": "manyToOne",
        "description": "Visita referencia um corretor."
      },
      {
        "relationshipId": "negocioToImovel",
        "fromEntity": "Negocio",
        "toEntity": "Imovel",
        "type": "manyToOne",
        "description": "Proposta referencia um imóvel."
      },
      {
        "relationshipId": "negocioToLead",
        "fromEntity": "Negocio",
        "toEntity": "Lead",
        "type": "manyToOne",
        "description": "Proposta referencia um lead."
      },
      {
        "relationshipId": "negocioToCorretor",
        "fromEntity": "Negocio",
        "toEntity": "Corretor",
        "type": "manyToOne",
        "description": "Proposta referencia um corretor."
      }
    ]
  }
} as const;

export default modulePlan;
