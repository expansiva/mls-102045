/// <mls fileReference="_102045_/l2/cafeFlow/web/desktop/page31/kitchenQueue.defs.ts" enhancement="_blank"/>

export const definition = {
  "pageId": "kitchenQueue",
  "pageName": "Fila da cozinha — Preparo de pedidos",
  "baseClassName": "CafeFlowKitchenQueueBase",
  "actor": "cozinheiro",
  "purpose": "Executar Fila da cozinha — Preparo de pedidos.",
  "capabilities": [
    "orderLifecycle"
  ],
  "flowRefs": {
    "experienceFlows": [
      "orderLifecycle"
    ],
    "entityLifecycles": [],
    "taskWorkflows": [
      "orderLifecycle"
    ],
    "automations": []
  },
  "pluginRefs": [],
  "mdmRefs": [],
  "origin": {
    "source": "l4-journey",
    "workspaceId": "kitchenQueue",
    "workspaceKind": "workflow",
    "workflowId": "orderLifecycle",
    "actor": "cozinheiro",
    "entity": "Order",
    "owners": [
      {
        "kind": "workflow",
        "id": "orderLifecycle",
        "defPath": "_102045_/l4/workflows/orderLifecycle.defs.ts"
      },
      {
        "kind": "operation",
        "id": "viewKitchenBoard",
        "defPath": "_102045_/l4/operations/viewKitchenBoard.defs.ts"
      },
      {
        "kind": "operation",
        "id": "updateOrderStatus",
        "defPath": "_102045_/l4/operations/updateOrderStatus.defs.ts"
      }
    ],
    "microUserFlow": {
      "source": "l4/story.steps",
      "workflowSteps": [
        "O atendente seleciona o tipo de pedido (mesa ou takeout) e adiciona os itens do cardápio solicitados pelo cliente.",
        "O atendente revisa o resumo do pedido, verifica alertas de estoque insuficiente e confirma, enviando à cozinha com o estoque decrementado conforme ingredientes vinculados.",
        "O cozinheiro visualiza a fila de pedidos recebidos na cozinha e inicia o preparo, marcando o pedido como 'em preparo'.",
        "Ao concluir o preparo, o cozinheiro marca o pedido como 'pronto', sinalizando o atendente pelo painel de status.",
        "O atendente consulta o painel de pedidos, confirma o status 'pronto' e entrega o pedido ao cliente, marcando-o como entregue."
      ],
      "operations": [
        {
          "operationId": "viewKitchenBoard",
          "commandName": "viewKitchenBoard",
          "steps": [
            "O cozinheiro abre a tela da fila da cozinha",
            "O sistema lista os pedidos do turno atual com status 'recebido' ou 'em preparo'",
            "Os pedidos são ordenados por ordem de chegada (receivedAt), com pedidos priorizados destacados primeiro",
            "Cada pedido exibe seus itens, tipo (mesa ou viagem), número da mesa quando aplicável e status atual"
          ]
        },
        {
          "operationId": "updateOrderStatus",
          "commandName": "updateOrderStatus",
          "steps": [
            "O cozinheiro visualiza a fila de pedidos recebidos na cozinha",
            "Seleciona um pedido e marca como 'em preparo' ao iniciar o preparo",
            "Ao concluir o preparo, marca o pedido como 'pronto', avisando o atendente que pode entregar ao cliente"
          ]
        }
      ]
    }
  },
  "pageInputs": [],
  "navigationRefs": [],
  "sections": [
    {
      "id": "sec-kitchen-queue",
      "type": "section",
      "sectionName": "sec-kitchen-queue",
      "titleKey": "sec.kitchen.queue.title",
      "mode": "discover",
      "order": 1,
      "organisms": [
        {
          "id": "org-kitchen-board",
          "type": "organism",
          "organismName": "kitchenBoard",
          "titleKey": "org.kitchen.board.title",
          "purpose": "Exibir fila de pedidos da cozinha ordenados por prioridade e ordem de chegada, permitindo seleção para transição de status",
          "userActions": [
            "viewKitchenBoard"
          ],
          "requiredEntities": [
            "Order",
            "OrderItem"
          ],
          "readsFields": [
            "orderId",
            "status",
            "orderType",
            "tableNumber",
            "priority",
            "priorityReason",
            "receivedAt",
            "inPreparationAt",
            "createdAt"
          ],
          "writesFields": [],
          "rulesApplied": [
            "Pedidos ordenados por receivedAt com priorizados destacados primeiro",
            "Exibir apenas pedidos com status received ou inPreparation"
          ],
          "order": 1,
          "intentionRefs": [
            {
              "id": "int-queue-list",
              "intent": "queryList",
              "stateKey": "ui.kitchenQueue.data.viewKitchenBoard",
              "order": 1
            }
          ]
        }
      ]
    },
    {
      "id": "sec-order-transition",
      "type": "section",
      "sectionName": "sec-order-transition",
      "titleKey": "sec.order.transition.title",
      "mode": "execute",
      "order": 2,
      "organisms": [
        {
          "id": "org-status-transition",
          "type": "organism",
          "organismName": "statusTransition",
          "titleKey": "org.status.transition.title",
          "purpose": "Atualizar status do pedido selecionado na fila, apresentando a próxima transição válida do ciclo de vida",
          "userActions": [
            "updateOrderStatus"
          ],
          "requiredEntities": [
            "Order"
          ],
          "readsFields": [
            "orderId",
            "status"
          ],
          "writesFields": [
            "orderId",
            "status"
          ],
          "rulesApplied": [
            "Transição deve seguir o ciclo de vida: received->inPreparation->ready",
            "orderId é derivado do pedido selecionado na fila, nunca digitado manualmente"
          ],
          "order": 1,
          "intentionRefs": [
            {
              "id": "int-status-form",
              "intent": "commandForm",
              "stateKey": "ui.kitchenQueue.action.updateOrderStatus.status",
              "order": 1
            }
          ]
        }
      ]
    }
  ],
  "templateId": "workflow_queue",
  "visualStyle": "POS-first, high-contrast, touch-friendly, status-driven UI with real-time kitchen board",
  "dataBindings": [
    {
      "id": "db-view-kitchen-board",
      "source": "query",
      "entity": "Order",
      "command": "viewKitchenBoard",
      "description": "Consulta a fila de pedidos da cozinha do turno atual",
      "stateKey": "ui.kitchenQueue.data.viewKitchenBoard",
      "inputStateKeys": []
    },
    {
      "id": "db-update-order-status",
      "source": "command",
      "entity": "Order",
      "command": "updateOrderStatus",
      "description": "Atualiza o status de um pedido na cozinha",
      "stateKey": "ui.kitchenQueue.output.updateOrderStatus",
      "inputStateKeys": [
        "ui.kitchenQueue.input.updateOrderStatus.orderId",
        "ui.kitchenQueue.input.updateOrderStatus.status"
      ]
    }
  ]
};

export const pipeline = [
  {
    "id": "kitchenQueue__page31__l2_page",
    "type": "l2_page",
    "outputPath": "_102045_/l2/cafeFlow/web/desktop/page31/kitchenQueue.ts",
    "defPath": "_102045_/l2/cafeFlow/web/desktop/page31/kitchenQueue.defs.ts",
    "dependsFiles": [
      "_102045_/l2/cafeFlow/web/shared/kitchenQueue.defs.ts",
      "_102045_/l2/cafeFlow/web/shared/kitchenQueue.ts",
      "_102045_/l2/cafeFlow/web/contracts/kitchenQueue.defs.ts",
      "_102045_/l2/cafeFlow/web/contracts/kitchenQueue.ts",
    ],
    "dependsOn": [
      "kitchenQueue__l2_shared"
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
