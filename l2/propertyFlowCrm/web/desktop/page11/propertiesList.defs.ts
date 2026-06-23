/// <mls fileReference="_102045_/l2/propertyFlowCrm/web/desktop/page11/propertiesList.defs.ts" enhancement="_blank"/>

export const definition = {
  "pageId": "propertiesList",
  "pageName": "Lista de imóveis",
  "actor": "corretor",
  "purpose": "Pesquisar e cadastrar imóveis no estoque.",
  "capabilities": [
    "manageProperties"
  ],
  "flowRefs": {
    "experienceFlows": [],
    "entityLifecycles": [],
    "taskWorkflows": [],
    "automations": []
  },
  "pluginRefs": [],
  "mdmRefs": [
    "property",
    "broker"
  ],
  "pageInputs": [],
  "navigationRefs": [
    {
      "direction": "outbound",
      "pageId": "propertyDetails",
      "trigger": "selecionar imóvel",
      "description": "Abrir detalhes do imóvel selecionado na lista."
    }
  ],
  "sections": [
    {
      "sectionName": "Busca e filtros de imóveis",
      "mode": "list",
      "organisms": [
        {
          "organismName": "propertyFilters",
          "purpose": "Filtrar imóveis por status e localização.",
          "userActions": [
            "aplicar filtros",
            "limpar filtros"
          ],
          "requiredEntities": [
            "propertyEntity"
          ],
          "readsFields": [
            "propertyId",
            "status",
            "city",
            "neighborhood"
          ],
          "writesFields": [],
          "rulesApplied": [
            "rulePropertyStatusLifecycle"
          ]
        }
      ]
    },
    {
      "sectionName": "Lista de imóveis",
      "mode": "list",
      "organisms": [
        {
          "organismName": "propertyList",
          "purpose": "Exibir imóveis com dados principais e permitir seleção.",
          "userActions": [
            "selecionar imóvel",
            "paginar lista"
          ],
          "requiredEntities": [
            "propertyEntity"
          ],
          "readsFields": [
            "propertyId",
            "title",
            "status",
            "price",
            "city",
            "neighborhood"
          ],
          "writesFields": [],
          "rulesApplied": [
            "rulePropertyStatusLifecycle"
          ]
        }
      ]
    },
    {
      "sectionName": "Cadastro rápido de imóvel",
      "mode": "create",
      "organisms": [
        {
          "organismName": "propertyCreateForm",
          "purpose": "Cadastrar novo imóvel a partir do formulário.",
          "userActions": [
            "preencher dados",
            "salvar imóvel"
          ],
          "requiredEntities": [
            "propertyEntity"
          ],
          "readsFields": [],
          "writesFields": [
            "title",
            "propertyType",
            "price",
            "city",
            "neighborhood",
            "status",
            "brokerId"
          ],
          "rulesApplied": [
            "rulePropertyStatusLifecycle"
          ]
        }
      ]
    }
  ]
};

export const pipeline = [
  {
    "id": "propertiesList__l2_page",
    "type": "l2_page",
    "outputPath": "_102045_/l2/propertyFlowCrm/web/desktop/page11/propertiesList.ts",
    "defPath": "_102045_/l2/propertyFlowCrm/web/desktop/page11/propertiesList.defs.ts",
    "dependsFiles": [
      "_102045_/l2/propertyFlowCrm/web/shared/propertiesList.ts",
      "_102045_/l2/propertyFlowCrm/web/contracts/propertiesList.ts"
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
