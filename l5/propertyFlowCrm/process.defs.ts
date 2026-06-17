/// <mls fileReference="_102045_/l5/propertyFlowCrm/process.defs.ts" enhancement="_blank"/>

export const propertyFlowCrmProcess = {
  "schemaVersion": "2026-06-08",
  "moduleName": "propertyFlowCrm",
  "runs": [
    {
      "runId": "newSolution",
      "kind": "newSolution",
      "startedAt": "2026-06-17T14:19:59.003Z",
      "initialPrompt": "Gere um app profissional chamado **PropertyFlowCRM** para imobiliárias e corretores.\nEntidades principais: Imóvel (endereço, tipo, preço, status, características, fotos mock), Lead/Cliente, Visita/Agendamento, Negócio/Proposta (status, valor, imóvel), Corretor.\nTelas chave: Dashboard (imóveis ativos, leads do mês, pipeline de fechamentos), CRUD de imóveis com busca, Pipeline de leads (kanban ou lista), Agendador de visitas, Rastreador de negócios por etapas.\nFuncionalidade LLM: IA que gera descrição do imóvel a partir de bullets ou classifica lead como \"quente/morno/frio\" a partir de anotações e sugere próxima mensagem de follow-up.\nFoco: Gestão de imóveis + leads + coordenação de visitas — específico para corretagem imobiliária.\nlinguagens: 'en' e 'pt-br'",
      "userLanguage": "pt-BR",
      "decisions": [
        {
          "decisionId": "decisionAddMetricArtifacts",
          "title": "Definir artefatos de métricas do dashboard",
          "decision": "Foram adicionados artefatos de métricas como tabelas para manter as referências do dashboard válidas.",
          "reason": "O review apontou referências de métricas inexistentes e as decisões aceitas incluem activePropertiesMetric, monthlyLeadsMetric e pipelineDealsMetric.",
          "affectedArtifacts": [
            "activePropertiesMetric",
            "monthlyLeadsMetric",
            "pipelineDealsMetric"
          ]
        }
      ],
      "deferredItems": [],
      "openDetails": [
        {
          "title": "Armazenamento de fotos mock",
          "description": "As fotos dos imóveis serão geradas via serviço de placeholder, upload real ou apenas URLs mockadas?"
        },
        {
          "title": "Classificação LLM de leads",
          "description": "A classificação quente/morno/frio será executada de forma síncrona ao salvar anotações ou assíncrona em background?"
        },
        {
          "title": "Visualização do pipeline",
          "description": "O pipeline de leads terá visualização kanban como padrão, lista como padrão, ou ambas com alternância de view?"
        },
        {
          "title": "Estratégia de internacionalização",
          "description": "Como será a troca de idioma entre pt-BR e en: por perfil do usuário, por tenant da imobiliária ou por configuração global?"
        }
      ],
      "healthReport": {
        "summary": {
          "passed": false,
          "errorCount": 1,
          "warningCount": 0
        },
        "issues": [
          {
            "severity": "error",
            "code": "horizontal.artifact.missing",
            "message": "approved horizontal module auditModule produced no plan item/artifact",
            "path": "approvedArtifacts.horizontalModules[0]",
            "evidence": []
          }
        ],
        "checklistResults": null,
        "readyToSaveDefs": false,
        "deterministicOnly": true,
        "refreshedAt": "2026-06-17T14:19:59.105Z",
        "refreshedBy": "agentNewSolutionFinal (T-016 deterministic re-validation)"
      },
      "nextSteps": [
        {
          "id": "horizontalModule:authRoles",
          "kind": "horizontalModule",
          "title": "authRoles",
          "description": "Há múltiplos atores (corretor, gestor, admin) exigindo controle de acesso por papéis, usando a infraestrutura de autenticação/RBAC da plataforma.",
          "moduleId": "authRoles",
          "status": "dismissed"
        },
        {
          "id": "horizontalModule:i18n",
          "kind": "horizontalModule",
          "title": "i18n",
          "description": "O módulo declara suporte a dois idiomas (pt-BR e en), exigindo internacionalização pela infraestrutura da plataforma.",
          "moduleId": "i18n",
          "status": "dismissed"
        },
        {
          "id": "horizontalModule:notifications",
          "kind": "horizontalModule",
          "title": "notifications",
          "description": "Há agente de lembrete de visitas e necessidades de alertas/reminders, exigindo envio de notificações externas.",
          "moduleId": "notifications",
          "status": "dismissed"
        }
      ],
      "finishedAt": "2026-06-17T14:22:22.224Z"
    }
  ]
} as const;

export default propertyFlowCrmProcess;
