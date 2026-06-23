/// <mls fileReference="_102045_/l2/propertyFlowCrm/web/desktop/page11/leadDetails.defs.ts" enhancement="_blank"/>

export const definition = {
  "pageId": "leadDetails",
  "pageName": "Detalhes do lead",
  "actor": "corretor",
  "purpose": "Atualizar informações e histórico do lead.",
  "capabilities": [
    "manageLeads"
  ],
  "flowRefs": {
    "experienceFlows": [],
    "entityLifecycles": [],
    "taskWorkflows": [],
    "automations": []
  },
  "pluginRefs": [],
  "mdmRefs": [
    "lead"
  ],
  "pageInputs": [
    {
      "name": "leadId",
      "type": "string",
      "required": true,
      "sources": [
        "routeParam"
      ],
      "description": "Identificador do lead",
      "entityRef": "Lead",
      "fieldRef": "id"
    }
  ],
  "navigationRefs": [
    {
      "direction": "inbound",
      "pageId": "leadsPipeline",
      "trigger": "abrir detalhes do lead"
    }
  ],
  "sections": [
    {
      "sectionName": "Dados do lead",
      "mode": "edit",
      "organisms": [
        {
          "organismName": "LeadInfoForm",
          "purpose": "Exibir e editar dados de contato e preferências do lead.",
          "userActions": [
            "editar dados",
            "salvar alterações"
          ],
          "requiredEntities": [
            "leadEntity"
          ],
          "readsFields": [
            "lead.id",
            "lead.name",
            "lead.email",
            "lead.phone",
            "lead.preferences",
            "lead.stage"
          ],
          "writesFields": [
            "lead.name",
            "lead.email",
            "lead.phone",
            "lead.preferences",
            "lead.stage"
          ],
          "rulesApplied": [
            "ruleLeadPipelineStages"
          ]
        }
      ]
    },
    {
      "sectionName": "Histórico do lead",
      "mode": "view",
      "organisms": [
        {
          "organismName": "LeadHistoryTimeline",
          "purpose": "Visualizar histórico e mudanças de etapa do lead.",
          "userActions": [
            "visualizar histórico"
          ],
          "requiredEntities": [
            "leadEntity",
            "leadStageChangeEntity"
          ],
          "readsFields": [
            "lead.id",
            "lead.stage",
            "lead.history"
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
    "id": "leadDetails__l2_page",
    "type": "l2_page",
    "outputPath": "_102045_/l2/propertyFlowCrm/web/desktop/page11/leadDetails.ts",
    "defPath": "_102045_/l2/propertyFlowCrm/web/desktop/page11/leadDetails.defs.ts",
    "dependsFiles": [
      "_102045_/l2/propertyFlowCrm/web/shared/leadDetails.ts",
      "_102045_/l2/propertyFlowCrm/web/contracts/leadDetails.ts"
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
