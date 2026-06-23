/// <mls fileReference="_102045_/l2/propertyFlowCrm/web/desktop/page11/propertyDetails.defs.ts" enhancement="_blank"/>

export const definition = {
  "pageId": "propertyDetails",
  "pageName": "Detalhes do imóvel",
  "actor": "corretor",
  "purpose": "Editar dados, preço e status do imóvel.",
  "capabilities": [
    "manageProperties"
  ],
  "flowRefs": {
    "experienceFlows": [],
    "entityLifecycles": [],
    "taskWorkflows": [],
    "automations": [
      "propertyDescriptionRequestFlow"
    ]
  },
  "pluginRefs": [],
  "mdmRefs": [
    "property"
  ],
  "pageInputs": [
    {
      "name": "propertyId",
      "type": "PropertyId",
      "required": true,
      "sources": [
        "routeParam"
      ],
      "description": "Identificador do imóvel selecionado.",
      "entityRef": "Property",
      "fieldRef": "id"
    }
  ],
  "navigationRefs": [
    {
      "direction": "inbound",
      "pageId": "propertiesList",
      "trigger": "abrir detalhes do imóvel",
      "description": "Acesso ao detalhe a partir da lista de imóveis."
    }
  ],
  "sections": [
    {
      "sectionName": "Dados do imóvel",
      "mode": "edit",
      "organisms": [
        {
          "organismName": "FormularioDadosImovel",
          "purpose": "Exibir e editar informações principais do imóvel.",
          "userActions": [
            "editarCampos",
            "salvarImovel"
          ],
          "requiredEntities": [
            "Property"
          ],
          "readsFields": [
            "Property.id",
            "Property.title",
            "Property.address",
            "Property.price",
            "Property.status",
            "Property.description",
            "Property.features",
            "Property.bedrooms",
            "Property.bathrooms",
            "Property.area"
          ],
          "writesFields": [
            "Property.title",
            "Property.address",
            "Property.price",
            "Property.status",
            "Property.description",
            "Property.features",
            "Property.bedrooms",
            "Property.bathrooms",
            "Property.area"
          ],
          "rulesApplied": [
            "rulePropertyStatusLifecycle"
          ]
        }
      ]
    },
    {
      "sectionName": "Descrição do imóvel por IA",
      "mode": "assist",
      "organisms": [
        {
          "organismName": "SolicitarDescricaoImovel",
          "purpose": "Solicitar geração de descrição via IA com bullets informados.",
          "userActions": [
            "informarBullets",
            "solicitarDescricaoImovel"
          ],
          "requiredEntities": [
            "PropertyDescriptionRequest"
          ],
          "readsFields": [
            "Property.id",
            "Property.title",
            "Property.features"
          ],
          "writesFields": [
            "PropertyDescriptionRequest.bullets",
            "PropertyDescriptionRequest.propertyId"
          ],
          "rulesApplied": [
            "ruleAiHumanReview"
          ]
        },
        {
          "organismName": "HistoricoSolicitacoesDescricao",
          "purpose": "Listar solicitações e status da revisão humana.",
          "userActions": [
            "verSolicitacoes",
            "verDescricaoGerada"
          ],
          "requiredEntities": [
            "PropertyDescriptionRequest"
          ],
          "readsFields": [
            "PropertyDescriptionRequest.id",
            "PropertyDescriptionRequest.reviewStatus",
            "PropertyDescriptionRequest.aiDescription",
            "PropertyDescriptionRequest.humanReviewNotes",
            "PropertyDescriptionRequest.createdAt",
            "PropertyDescriptionRequest.updatedAt"
          ],
          "writesFields": [],
          "rulesApplied": [
            "ruleAiHumanReview"
          ]
        }
      ]
    }
  ]
};

export const pipeline = [
  {
    "id": "propertyDetails__l2_page",
    "type": "l2_page",
    "outputPath": "_102045_/l2/propertyFlowCrm/web/desktop/page11/propertyDetails.ts",
    "defPath": "_102045_/l2/propertyFlowCrm/web/desktop/page11/propertyDetails.defs.ts",
    "dependsFiles": [
      "_102045_/l2/propertyFlowCrm/web/shared/propertyDetails.ts",
      "_102045_/l2/propertyFlowCrm/web/contracts/propertyDetails.ts"
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
