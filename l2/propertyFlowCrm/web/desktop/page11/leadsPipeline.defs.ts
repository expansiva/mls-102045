/// <mls fileReference="_102045_/l2/propertyFlowCrm/web/desktop/page11/leadsPipeline.defs.ts" enhancement="_blank"/>

export const definition = {
  "pageId": "leadsPipeline",
  "pageName": "Pipeline de leads",
  "actor": "corretor",
  "purpose": "Visualizar e mover leads entre etapas e cadastrar novos leads.",
  "capabilities": [
    "manageLeads",
    "leadPipeline"
  ],
  "flowRefs": {
    "experienceFlows": [],
    "entityLifecycles": [
      "leadPipelineStageFlow"
    ],
    "taskWorkflows": [],
    "automations": [
      "leadQualificationRequestFlow"
    ]
  },
  "pluginRefs": [],
  "mdmRefs": [
    "lead",
    "broker"
  ],
  "pageInputs": [],
  "navigationRefs": [
    {
      "direction": "outbound",
      "pageId": "leadDetails",
      "trigger": "abrir detalhes do lead",
      "description": "Abrir o lead selecionado para edição completa."
    }
  ],
  "sections": [
    {
      "sectionName": "Kanban do pipeline",
      "mode": "view",
      "organisms": [
        {
          "organismName": "leadPipelineBoard",
          "purpose": "Exibir leads por etapa e permitir arrastar para mudar de estágio.",
          "userActions": [
            "selecionarLead",
            "moverLeadEntreEtapas",
            "abrirDetalhesDoLead"
          ],
          "requiredEntities": [
            "leadEntity"
          ],
          "readsFields": [
            "leadId",
            "leadName",
            "leadStage",
            "leadTemperature",
            "leadUpdatedAt"
          ],
          "writesFields": [],
          "rulesApplied": [
            "ruleLeadPipelineStages"
          ]
        },
        {
          "organismName": "leadQuickCreate",
          "purpose": "Cadastrar novo lead a partir do pipeline.",
          "userActions": [
            "informarContato",
            "informarInteresse",
            "criarLead"
          ],
          "requiredEntities": [
            "leadEntity"
          ],
          "readsFields": [],
          "writesFields": [
            "leadName",
            "leadEmail",
            "leadPhone",
            "leadSource",
            "leadInterest",
            "leadStage"
          ],
          "rulesApplied": [
            "ruleLeadPipelineStages"
          ]
        }
      ]
    },
    {
      "sectionName": "Ações rápidas e histórico",
      "mode": "view",
      "organisms": [
        {
          "organismName": "leadCardActions",
          "purpose": "Executar ações rápidas no lead selecionado.",
          "userActions": [
            "classificarTemperatura",
            "solicitarQualificacaoIa",
            "abrirDetalhesDoLead"
          ],
          "requiredEntities": [
            "leadEntity",
            "leadQualificationRequestEntity"
          ],
          "readsFields": [
            "leadId",
            "leadTemperature",
            "leadStage",
            "leadUpdatedAt"
          ],
          "writesFields": [
            "leadTemperature"
          ],
          "rulesApplied": [
            "ruleAiHumanReview"
          ]
        },
        {
          "organismName": "leadStageChangeHistory",
          "purpose": "Consultar histórico de mudanças de etapa do lead selecionado.",
          "userActions": [
            "verHistoricoMudancasEtapa"
          ],
          "requiredEntities": [
            "leadStageChangeEntity"
          ],
          "readsFields": [
            "leadStageChangeId",
            "fromStage",
            "toStage",
            "changedAt",
            "changedByBrokerId",
            "note"
          ],
          "writesFields": [],
          "rulesApplied": [
            "ruleLeadPipelineStages"
          ]
        }
      ]
    }
  ]
};

export const pipeline = [
  {
    "id": "leadsPipeline__l2_page",
    "type": "l2_page",
    "outputPath": "_102045_/l2/propertyFlowCrm/web/desktop/page11/leadsPipeline.ts",
    "defPath": "_102045_/l2/propertyFlowCrm/web/desktop/page11/leadsPipeline.defs.ts",
    "dependsFiles": [
      "_102045_/l2/propertyFlowCrm/web/shared/leadsPipeline.ts",
      "_102045_/l2/propertyFlowCrm/web/contracts/leadsPipeline.ts"
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
