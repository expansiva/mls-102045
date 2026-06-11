/// <mls fileReference="_102045_/l5/propertyFlowCrm/process.defs.ts" enhancement="_blank"/>

export const propertyFlowCrmProcess = {
  "schemaVersion": "2026-06-08",
  "moduleName": "propertyFlowCrm",
  "runs": [
    {
      "runId": "newSolution",
      "kind": "newSolution",
      "startedAt": "2026-06-11T13:45:53.881Z",
      "initialPrompt": "um app profissional chamado PropertyFlowCRM para imobiliárias e corretores.\nEntidades principais: Imóvel (endereço, tipo, preço, status, características, fotos mock), Lead/Cliente, Visita/Agendamento, Negócio/Proposta (status, valor, imóvel), Corretor.\nTelas chave: Dashboard (imóveis ativos, leads do mês, pipeline de fechamentos), CRUD de imóveis com busca, Pipeline de leads (kanban ou lista), Agendador de visitas, Rastreador de negócios por etapas.\nFuncionalidade LLM: IA que gera descrição do imóvel a partir de bullets ou classifica lead como \"quente/morno/frio\" a partir de anotações e sugere próxima mensagem de follow-up.\nFoco: Gestão de imóveis + leads + coordenação de visitas — específico para corretagem imobiliária.\nlinguagens: 'en' e 'pt-br'",
      "userLanguage": "pt-BR",
      "decisions": [
        {
          "decisionId": "addGerirCorretoresCapability",
          "title": "Adicionar capability de gestão de corretores",
          "decision": "Criar capability, ações e usecase para CRUD de corretores na fase soon.",
          "reason": "Página Corretores já aprovada e exige cobertura de planejamento layer_3.",
          "affectedArtifacts": [
            "corretoresPage",
            "crudCorretorUsecase"
          ]
        },
        {
          "decisionId": "addLayer3UsecasesForUpdates",
          "title": "Adicionar usecases layer_3 para atualizações críticas",
          "decision": "Criar usecaseEntities específicos para arquivar imóvel, reagendar/cancelar visita e atualizar status de proposta.",
          "reason": "Ações de atualização exigem planejamento layer_3 explícito.",
          "affectedArtifacts": [
            "arquivarImovelUsecase",
            "reagendarVisitaUsecase",
            "cancelarVisitaUsecase",
            "atualizarStatusPropostaUsecase"
          ]
        },
        {
          "decisionId": "removeImovelActiveRuleFromCreate",
          "title": "Ajustar regra aplicada em criação de imóvel",
          "decision": "Remover regra imovelActiveStatus de criarImovel; manter no agendamento de visita.",
          "reason": "Regra aplica-se ao agendamento, não à criação do imóvel.",
          "affectedArtifacts": [
            "criarImovel",
            "agendarVisita"
          ]
        }
      ],
      "deferredItems": [],
      "openDetails": [
        {
          "title": "Provedor e modelo de LLM",
          "description": "Qual serviço ou modelo de IA será utilizado para geração de descrições de imóveis, classificação de leads e sugestões de follow-up?"
        },
        {
          "title": "Formato do pipeline de leads",
          "description": "O pipeline de leads será apresentado como Kanban, lista ou ambos? Quais serão as etapas exatas do funil?"
        },
        {
          "title": "Armazenamento de fotos mock",
          "description": "As fotos mock dos imóveis serão armazenadas como URLs externas, base64 ou upload local no client-side?"
        }
      ],
      "healthReport": {
        "summary": {
          "passed": false,
          "errorCount": 10,
          "warningCount": 2
        },
        "issues": [
          {
            "severity": "warning",
            "code": "page.def.missing",
            "message": "page leadsKanban is in the index but has no definition",
            "path": "pageIndex.leadsKanban",
            "evidence": []
          },
          {
            "severity": "warning",
            "code": "page.def.missing",
            "message": "page negociosPropostas is in the index but has no definition",
            "path": "pageIndex.negociosPropostas",
            "evidence": []
          },
          {
            "severity": "error",
            "code": "page.navigationRefs.missing",
            "message": "Página não declara navigationRefs (array obrigatório, mesmo vazio).",
            "path": "pages[pageId=dashboardAdministrativo]",
            "evidence": [
              "pageInputs presente, navigationRefs ausente"
            ]
          },
          {
            "severity": "error",
            "code": "page.navigationRefs.missing",
            "message": "Página não declara navigationRefs (array obrigatório, mesmo vazio).",
            "path": "pages[pageId=imoveisLista]",
            "evidence": [
              "pageInputs presente, navigationRefs ausente"
            ]
          },
          {
            "severity": "error",
            "code": "page.navigationRefs.missing",
            "message": "Página não declara navigationRefs (array obrigatório, mesmo vazio).",
            "path": "pages[pageId=imovelEditor]",
            "evidence": [
              "pageInputs presente, navigationRefs ausente"
            ]
          },
          {
            "severity": "error",
            "code": "page.navigationRefs.missing",
            "message": "Página não declara navigationRefs (array obrigatório, mesmo vazio).",
            "path": "pages[pageId=visitasAgenda]",
            "evidence": [
              "pageInputs presente, navigationRefs ausente"
            ]
          },
          {
            "severity": "error",
            "code": "metricTable.definition.incomplete",
            "message": "Tabela de métricas sem timeColumn/hypertable/dimensions/measures/updatePolicy (TimescaleDB obrigatório).",
            "path": "metricTables[metricTableId=corretorStatusMetrics]",
            "evidence": [
              "storageEngine=postgresTimescaleDB",
              "campos obrigatórios ausentes"
            ]
          },
          {
            "severity": "error",
            "code": "metricTable.definition.incomplete",
            "message": "Tabela de métricas sem timeColumn/hypertable/dimensions/measures/updatePolicy (TimescaleDB obrigatório).",
            "path": "metricTables[metricTableId=imovelInventoryMetrics]",
            "evidence": [
              "storageEngine=postgresTimescaleDB",
              "campos obrigatórios ausentes"
            ]
          },
          {
            "severity": "error",
            "code": "metricTable.definition.incomplete",
            "message": "Tabela de métricas sem timeColumn/hypertable/dimensions/measures/updatePolicy (TimescaleDB obrigatório).",
            "path": "metricTables[metricTableId=leadPipelineMetrics]",
            "evidence": [
              "storageEngine=postgresTimescaleDB",
              "campos obrigatórios ausentes"
            ]
          },
          {
            "severity": "error",
            "code": "metricTable.definition.incomplete",
            "message": "Tabela de métricas sem timeColumn/hypertable/dimensions/measures/updatePolicy (TimescaleDB obrigatório).",
            "path": "metricTables[metricTableId=negocioMetrics]",
            "evidence": [
              "storageEngine=postgresTimescaleDB",
              "campos obrigatórios ausentes"
            ]
          },
          {
            "severity": "error",
            "code": "metricTable.definition.incomplete",
            "message": "Tabela de métricas sem timeColumn/hypertable/dimensions/measures/updatePolicy (TimescaleDB obrigatório).",
            "path": "metricTables[metricTableId=visitaMetrics]",
            "evidence": [
              "storageEngine=postgresTimescaleDB",
              "campos obrigatórios ausentes"
            ]
          },
          {
            "severity": "error",
            "code": "mdm.missing",
            "message": "MDM deve estar presente e completo; apenas domínios foram fornecidos, sem definições/tabelas MDM.",
            "path": "mdmDomains",
            "evidence": [
              "mdmDomains=5",
              "tables=0",
              "nenhuma definição MDM detalhada no snapshot"
            ]
          }
        ],
        "checklistResults": null,
        "readyToSaveDefs": false
      },
      "nextSteps": [
        {
          "id": "horizontalModule:authRoles",
          "kind": "horizontalModule",
          "title": "authRoles",
          "description": "Existem atores distintos (admin da imobiliária e corretor) com responsabilidades diferentes, exigindo autenticação e autorização por papéis para o MVP coerente.",
          "moduleId": "authRoles",
          "status": "dismissed"
        },
        {
          "id": "horizontalModule:i18n",
          "kind": "horizontalModule",
          "title": "i18n",
          "description": "A solução declara interface em pt-BR e en e há capability de internacionalização para o MVP.",
          "moduleId": "i18n",
          "status": "dismissed"
        },
        {
          "id": "plugin:llmProvider",
          "kind": "plugin",
          "title": "llmProvider",
          "description": "Integração de IA para geração de descrição de imóvel e qualificação de leads foi aceita como melhoria pós‑MVP.",
          "pluginId": "llmProvider",
          "status": "dismissed"
        }
      ],
      "finishedAt": "2026-06-11T13:59:51.664Z"
    }
  ]
} as const;

export default propertyFlowCrmProcess;
