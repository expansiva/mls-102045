/// <mls fileReference="_102045_/l2/propertyFlowCrm/web/desktop/page11/dealsTracker.defs.ts" enhancement="_blank"/>

export const definition = {
  "sections": [
    {
      "sectionName": "Pipeline de negócios",
      "mode": "view",
      "organisms": [
        {
          "organismName": "FiltroETabelaDeNegocios",
          "purpose": "Listar negócios por etapa e pesquisa para acompanhar o pipeline.",
          "userActions": [
            "filtrarPorEtapa",
            "buscarNegocio",
            "selecionarNegocio"
          ],
          "requiredEntities": [
            "Deal"
          ],
          "readsFields": [
            "dealId",
            "status",
            "leadId",
            "propertyId",
            "valorProposta",
            "updatedAt"
          ],
          "writesFields": [],
          "rulesApplied": [
            "ruleDealStages"
          ]
        },
        {
          "organismName": "CriarPropostaRapida",
          "purpose": "Criar novo negócio/proposta a partir de lead e imóvel selecionados.",
          "userActions": [
            "criarNegocio"
          ],
          "requiredEntities": [
            "Deal",
            "Lead",
            "Property"
          ],
          "readsFields": [
            "leadId",
            "propertyId"
          ],
          "writesFields": [
            "dealId",
            "status",
            "leadId",
            "propertyId",
            "valorProposta",
            "createdAt"
          ],
          "rulesApplied": [
            "ruleDealStages"
          ]
        }
      ]
    },
    {
      "sectionName": "Detalhes do negócio",
      "mode": "view",
      "organisms": [
        {
          "organismName": "ResumoDoNegocio",
          "purpose": "Exibir detalhes do negócio selecionado e sua etapa atual.",
          "userActions": [
            "visualizarNegocio"
          ],
          "requiredEntities": [
            "Deal"
          ],
          "readsFields": [
            "dealId",
            "status",
            "leadId",
            "propertyId",
            "valorProposta",
            "descricao",
            "updatedAt"
          ],
          "writesFields": [],
          "rulesApplied": [
            "ruleDealStages"
          ]
        },
        {
          "organismName": "AvancarEtapaDoNegocio",
          "purpose": "Mover o negócio para a próxima etapa conforme o fluxo.",
          "userActions": [
            "avancarEtapaNegocio"
          ],
          "requiredEntities": [
            "Deal",
            "DealStageChange"
          ],
          "readsFields": [
            "dealId",
            "status",
            "valorProposta"
          ],
          "writesFields": [
            "status",
            "dealStageChangeId",
            "fromStage",
            "toStage",
            "changedAt"
          ],
          "rulesApplied": [
            "ruleDealStages"
          ]
        },
        {
          "organismName": "HistoricoDeEtapas",
          "purpose": "Exibir histórico de mudanças de etapa do negócio.",
          "userActions": [
            "visualizarHistoricoEtapas"
          ],
          "requiredEntities": [
            "DealStageChange"
          ],
          "readsFields": [
            "dealStageChangeId",
            "dealId",
            "fromStage",
            "toStage",
            "changedAt"
          ],
          "writesFields": [],
          "rulesApplied": [
            "ruleDealStages"
          ]
        }
      ]
    }
  ]
};

export const pipeline = [
  {
    "id": "dealsTracker__l2_page",
    "type": "l2_page",
    "outputPath": "_102045_/l2/propertyFlowCrm/web/desktop/page11/dealsTracker.ts",
    "defPath": "_102045_/l2/propertyFlowCrm/web/desktop/page11/dealsTracker.defs.ts",
    "dependsFiles": [
      "_102045_/l2/propertyFlowCrm/web/shared/dealsTracker.ts",
      "_102045_/l2/propertyFlowCrm/web/contracts/dealsTracker.ts"
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
