/// <mls fileReference="_102045_/l2/cafeFlow/web/desktop/page31/menuManagement.defs.ts" enhancement="_blank"/>

export const definition = {
  "pageId": "menuManagement",
  "pageName": "Gestão de cardápio",
  "baseClassName": "CafeFlowMenuManagementBase",
  "actor": "gerente",
  "purpose": "Executar Gestão de cardápio.",
  "capabilities": [
    "menuItemLifecycle"
  ],
  "flowRefs": {
    "experienceFlows": [
      "menuItemLifecycle"
    ],
    "entityLifecycles": [],
    "taskWorkflows": [
      "menuItemLifecycle"
    ],
    "automations": []
  },
  "pluginRefs": [],
  "mdmRefs": [],
  "origin": {
    "source": "l4-journey",
    "workspaceId": "menuManagement",
    "workspaceKind": "workflow",
    "workflowId": "menuItemLifecycle",
    "actor": "gerente",
    "entity": "MenuItem",
    "owners": [
      {
        "kind": "workflow",
        "id": "menuItemLifecycle",
        "defPath": "_102045_/l4/workflows/menuItemLifecycle.defs.ts"
      },
      {
        "kind": "operation",
        "id": "browseMenuItems",
        "defPath": "_102045_/l4/operations/browseMenuItems.defs.ts"
      },
      {
        "kind": "operation",
        "id": "manageMenuItem",
        "defPath": "_102045_/l4/operations/manageMenuItem.defs.ts"
      }
    ],
    "microUserFlow": {
      "source": "l4/story.steps",
      "workflowSteps": [
        "O gerente cria um novo item de cardápio definindo nome, categoria e preço de venda.",
        "O gerente vincula os ingredientes de estoque que o item consome para garantir a rastreabilidade de consumo.",
        "O gerente ativa o item para que ele fique disponível para lançamento no POS.",
        "O gerente pode inativar o item quando ele não deve mais aparecer no POS."
      ],
      "operations": [
        {
          "operationId": "browseMenuItems",
          "commandName": "browseMenuItems",
          "steps": [
            "O gerente abre a tela de gestão de cardápio.",
            "O sistema lista todos os itens do cardápio da empresa ativa com nome, categoria, preço, tipo e status.",
            "O gerente pode filtrar por status (rascunho, ativo, inativo) ou por categoria para localizar itens específicos."
          ]
        },
        {
          "operationId": "manageMenuItem",
          "commandName": "manageMenuItem",
          "steps": [
            "O gerente seleciona um item do cardápio na tela de gestão.",
            "O sistema carrega os dados atuais do item (nome, descrição, categoria, preço, tipo e status).",
            "O gerente edita os campos desejados e define o status (rascunho, ativo ou inativo).",
            "O sistema valida que o tipo do item é 'simple' e que, se for ativado, existe pelo menos um ingrediente de estoque vinculado.",
            "O sistema persiste as alterações atualizando updatedAt e, conforme o status, activatedAt ou inactivatedAt."
          ]
        }
      ]
    }
  },
  "pageInputs": [
    {
      "operationId": "browseMenuItems",
      "contextKey": "activeCompanyId",
      "originRef": "businessContext.activeCompanyId",
      "targetRef": "MenuItem.menuCategoryId",
      "required": true,
      "description": "O backend resolve o escopo da consulta limitando os itens do cardápio à empresa ativa da sessão do gerente"
    }
  ],
  "navigationRefs": [],
  "sections": [
    {
      "id": "sec_discover",
      "type": "section",
      "sectionName": "sec_discover",
      "titleKey": "sec.discover.title",
      "mode": "list",
      "order": 1,
      "organisms": [
        {
          "id": "org_menuItemsCardList",
          "type": "organism",
          "organismName": "MenuItemsCardList",
          "titleKey": "org.menuItemsCardList.title",
          "purpose": "Listar itens do cardápio em cards com filtros compactos e ação de seleção para edição",
          "userActions": [
            "browseMenuItems"
          ],
          "requiredEntities": [
            "MenuItem",
            "MenuCategory"
          ],
          "readsFields": [
            "menuItemId",
            "name",
            "description",
            "menuCategoryId",
            "price",
            "itemType",
            "status",
            "activatedAt",
            "createdAt",
            "updatedAt"
          ],
          "writesFields": [],
          "rulesApplied": [
            "O backend resolve o escopo da consulta limitando os itens do cardápio à empresa ativa da sessão do gerente"
          ],
          "order": 1,
          "intentionRefs": [
            {
              "id": "intent_browseMenuItems",
              "intent": "queryList",
              "stateKey": "ui.menuManagement.data.browseMenuItems",
              "order": 1
            }
          ]
        }
      ]
    },
    {
      "id": "sec_execute",
      "type": "section",
      "sectionName": "sec_execute",
      "titleKey": "sec.execute.title",
      "mode": "form",
      "order": 2,
      "organisms": [
        {
          "id": "org_manageItemForm",
          "type": "organism",
          "organismName": "ManageItemForm",
          "titleKey": "org.manageItemForm.title",
          "purpose": "Formulário em bottom sheet para criar ou editar um item do cardápio com nome, categoria, preço, tipo e status",
          "userActions": [
            "manageMenuItem"
          ],
          "requiredEntities": [
            "MenuItem",
            "MenuCategory"
          ],
          "readsFields": [
            "menuItemId",
            "name",
            "description",
            "menuCategoryId",
            "price",
            "itemType",
            "status"
          ],
          "writesFields": [
            "menuItemId",
            "name",
            "description",
            "menuCategoryId",
            "price",
            "itemType",
            "status"
          ],
          "rulesApplied": [
            "O sistema valida que o tipo do item é 'simple' e que, se for ativado, existe pelo menos um ingrediente de estoque vinculado",
            "O sistema persiste as alterações atualizando updatedAt e, conforme o status, activatedAt ou inactivatedAt"
          ],
          "order": 1,
          "intentionRefs": [
            {
              "id": "intent_manageMenuItem",
              "intent": "commandForm",
              "stateKey": "ui.menuManagement.action.manageMenuItem.status",
              "action": "manageMenuItem",
              "submitAction": "manageMenuItem",
              "order": 1
            }
          ]
        }
      ]
    },
    {
      "id": "sec_review",
      "type": "section",
      "sectionName": "sec_review",
      "titleKey": "sec.review.title",
      "mode": "summary",
      "order": 3,
      "organisms": [
        {
          "id": "org_actionFeedback",
          "type": "organism",
          "organismName": "ActionFeedback",
          "titleKey": "org.actionFeedback.title",
          "purpose": "Exibir feedback textual da última ação de gerenciamento e resumo do resultado",
          "userActions": [],
          "requiredEntities": [
            "MenuItem"
          ],
          "readsFields": [
            "menuItemId",
            "name",
            "status",
            "price",
            "activatedAt",
            "inactivatedAt",
            "updatedAt"
          ],
          "writesFields": [],
          "rulesApplied": [],
          "order": 1,
          "intentionRefs": [
            {
              "id": "intent_summary",
              "intent": "summary",
              "stateKey": "ui.menuManagement.action.manageMenuItem.status",
              "order": 1
            }
          ]
        }
      ]
    }
  ],
  "templateId": "mobile_cards",
  "visualStyle": "POS-first, high-contrast, touch-friendly, status-driven UI with real-time kitchen board",
  "dataBindings": [
    {
      "id": "browseMenuItemsBinding",
      "source": "query",
      "entity": "MenuItem",
      "command": "browseMenuItems",
      "description": "Consulta itens do cardápio da empresa ativa com filtros opcionais de status e categoria",
      "stateKey": "ui.menuManagement.data.browseMenuItems",
      "inputStateKeys": [
        "ui.menuManagement.input.browseMenuItems.statusFilter",
        "ui.menuManagement.input.browseMenuItems.menuCategoryIdFilter"
      ]
    },
    {
      "id": "manageMenuItemBinding",
      "source": "command",
      "entity": "MenuItem",
      "command": "manageMenuItem",
      "description": "Cria ou atualiza um item do cardápio com nome, descrição, categoria, preço, tipo e status",
      "stateKey": "ui.menuManagement.output.manageMenuItem",
      "inputStateKeys": [
        "ui.menuManagement.input.manageMenuItem.menuItemId",
        "ui.menuManagement.input.manageMenuItem.name",
        "ui.menuManagement.input.manageMenuItem.description",
        "ui.menuManagement.input.manageMenuItem.menuCategoryId",
        "ui.menuManagement.input.manageMenuItem.price",
        "ui.menuManagement.input.manageMenuItem.itemType",
        "ui.menuManagement.input.manageMenuItem.status"
      ]
    }
  ]
};

export const pipeline = [
  {
    "id": "menuManagement__page31__l2_page",
    "type": "l2_page",
    "outputPath": "_102045_/l2/cafeFlow/web/desktop/page31/menuManagement.ts",
    "defPath": "_102045_/l2/cafeFlow/web/desktop/page31/menuManagement.defs.ts",
    "dependsFiles": [
      "_102045_/l2/cafeFlow/web/shared/menuManagement.defs.ts",
      "_102045_/l2/cafeFlow/web/shared/menuManagement.ts",
      "_102045_/l2/cafeFlow/web/contracts/menuManagement.defs.ts",
      "_102045_/l2/cafeFlow/web/contracts/menuManagement.ts"
    ],
    "dependsOn": [
      "menuManagement__l2_shared"
    ],
    "skills": [
      "_102020_/l2/aura/agentImplementGenome/skills/genCfePageGenome2.ts"
    ],
    "visualStyle": {
      "description": "POS-first, high-contrast, touch-friendly, status-driven UI with real-time kitchen board"
    },
    "agent": "agentCfeMaterializeGen"
  }
] as const;
