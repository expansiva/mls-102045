/// <mls fileReference="_102045_/l2/cafeFlow/web/desktop/page31/shiftManagement.defs.ts" enhancement="_blank"/>

export const definition = {
  "pageId": "shiftManagement",
  "pageName": "Gestão de turno diário",
  "baseClassName": "CafeFlowShiftManagementBase",
  "actor": "gerente",
  "purpose": "Executar Gestão de turno diário.",
  "capabilities": [
    "shiftLifecycle"
  ],
  "flowRefs": {
    "experienceFlows": [
      "shiftLifecycle"
    ],
    "entityLifecycles": [],
    "taskWorkflows": [
      "shiftLifecycle"
    ],
    "automations": []
  },
  "pluginRefs": [],
  "mdmRefs": [],
  "origin": {
    "source": "l4-journey",
    "workspaceId": "shiftManagement",
    "workspaceKind": "workflow",
    "workflowId": "shiftLifecycle",
    "actor": "gerente",
    "entity": "Shift",
    "owners": [
      {
        "kind": "workflow",
        "id": "shiftLifecycle",
        "defPath": "_102045_/l4/workflows/shiftLifecycle.defs.ts"
      },
      {
        "kind": "operation",
        "id": "openShift",
        "defPath": "_102045_/l4/operations/openShift.defs.ts"
      },
      {
        "kind": "operation",
        "id": "closeShift",
        "defPath": "_102045_/l4/operations/closeShift.defs.ts"
      },
      {
        "kind": "operation",
        "id": "viewShiftClosingReport",
        "defPath": "_102045_/l4/operations/viewShiftClosingReport.defs.ts"
      }
    ],
    "microUserFlow": {
      "source": "l4/story.steps",
      "workflowSteps": [
        "O gerente abre o turno diário no início do expediente para iniciar o registro de pedidos do dia.",
        "Ao final do expediente, o gerente fecha o turno para consolidar os pedidos do período e registrar o valor apurado.",
        "O gerente revisa o relatório de fechamento com o total apurado e os pedidos pagos consolidados para conferência do dia."
      ],
      "operations": [
        {
          "operationId": "openShift",
          "commandName": "openShift",
          "steps": [
            "O gerente solicita a abertura de um novo turno no início do expediente.",
            "O sistema verifica que não existe nenhum turno com status 'open' (regra singleOpenShift).",
            "O sistema cria um novo registro de Shift com status 'open', registrando o gerente e a data/hora de abertura.",
            "O turno fica ativo e pronto para receber pedidos."
          ]
        },
        {
          "operationId": "closeShift",
          "commandName": "closeShift",
          "steps": [
            "O gerente acessa a tela de fechamento de turno, onde o sistema identifica o turno atualmente aberto.",
            "O sistema consolida os pedidos do período e sugere o total apurado.",
            "O gerente confirma ou ajusta o valor apurado e adiciona observações se necessário.",
            "O sistema atualiza o status do turno para 'closed', registra a data/hora de fechamento e o gerente responsável, e gera o relatório de fechamento."
          ]
        },
        {
          "operationId": "viewShiftClosingReport",
          "commandName": "viewShiftClosingReport",
          "steps": [
            "O gerente seleciona um turno fechado na lista de turnos.",
            "O sistema localiza o relatório de fechamento correspondente ao shiftId informado.",
            "O sistema exibe o total apurado, a quantidade de pedidos pagos consolidados e as datas de criação e atualização do relatório."
          ]
        }
      ]
    }
  },
  "pageInputs": [],
  "navigationRefs": [],
  "sections": [
    {
      "id": "sec-discover",
      "type": "section",
      "sectionName": "sec-discover",
      "titleKey": "sec.discover.title",
      "mode": "queue",
      "order": 1,
      "organisms": [
        {
          "id": "org-shift-report",
          "type": "organism",
          "organismName": "ShiftClosingReportQueue",
          "titleKey": "org.shift.report.title",
          "purpose": "Exibir o relatório de fechamento de turno com total apurado e pedidos pagos consolidados, servindo como superfície dominante do fluxo de turno.",
          "userActions": [
            "viewShiftClosingReport"
          ],
          "requiredEntities": [
            "ShiftClosingReport"
          ],
          "readsFields": [
            "shiftClosingReportId",
            "shiftId",
            "totalApurado",
            "paidOrderCount",
            "createdAt",
            "updatedAt"
          ],
          "writesFields": [],
          "rulesApplied": [],
          "order": 1,
          "intentionRefs": [
            {
              "id": "intent-query-report",
              "intent": "queryList",
              "stateKey": "ui.shiftManagement.data.viewShiftClosingReport",
              "action": "viewShiftClosingReport",
              "order": 1
            }
          ]
        }
      ]
    },
    {
      "id": "sec-execute",
      "type": "section",
      "sectionName": "sec-execute",
      "titleKey": "sec.execute.title",
      "mode": "actions",
      "order": 2,
      "organisms": [
        {
          "id": "org-shift-lifecycle",
          "type": "organism",
          "organismName": "ShiftLifecycleActions",
          "titleKey": "org.shift.lifecycle.title",
          "purpose": "Apresentar as transições do ciclo de vida do turno (abrir e fechar) como ações contextuais, com formulários mínimos contendo apenas as decisões do gerente.",
          "userActions": [
            "openShift",
            "closeShift"
          ],
          "requiredEntities": [
            "Shift"
          ],
          "readsFields": [
            "notes",
            "totalApurado"
          ],
          "writesFields": [
            "notes",
            "totalApurado"
          ],
          "rulesApplied": [
            "singleOpenShift"
          ],
          "order": 1,
          "intentionRefs": [
            {
              "id": "intent-open-shift",
              "intent": "commandForm",
              "stateKey": "ui.shiftManagement.action.openShift.status",
              "action": "openShift",
              "submitAction": "openShift",
              "order": 1
            },
            {
              "id": "intent-close-shift",
              "intent": "commandForm",
              "stateKey": "ui.shiftManagement.action.closeShift.status",
              "action": "closeShift",
              "submitAction": "closeShift",
              "order": 2
            }
          ]
        }
      ]
    },
    {
      "id": "sec-review",
      "type": "section",
      "sectionName": "sec-review",
      "titleKey": "sec.review.title",
      "mode": "summary",
      "order": 3,
      "organisms": [
        {
          "id": "org-summary",
          "type": "organism",
          "organismName": "ShiftSummary",
          "titleKey": "org.summary.title",
          "purpose": "Revisar o contexto e o resultado das ações principais da página, exibindo os dados de abertura e fechamento do turno para conferência.",
          "userActions": [],
          "requiredEntities": [
            "Shift"
          ],
          "readsFields": [
            "shiftId",
            "status",
            "openedAt",
            "openedBy",
            "closedAt",
            "closedBy",
            "totalApurado",
            "notes"
          ],
          "writesFields": [],
          "rulesApplied": [],
          "order": 1,
          "intentionRefs": [
            {
              "id": "intent-summary-open",
              "intent": "summary",
              "stateKey": "ui.shiftManagement.output.openShift",
              "order": 1
            },
            {
              "id": "intent-summary-close",
              "intent": "summary",
              "stateKey": "ui.shiftManagement.output.closeShift",
              "order": 2
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
      "id": "binding-viewShiftClosingReport",
      "source": "query",
      "entity": "ShiftClosingReport",
      "command": "viewShiftClosingReport",
      "description": "Carrega o relatório de fechamento de turno pelo shiftId informado via rota",
      "stateKey": "ui.shiftManagement.data.viewShiftClosingReport",
      "inputStateKeys": [
        "ui.shiftManagement.input.viewShiftClosingReport.shiftId"
      ]
    },
    {
      "id": "binding-openShift",
      "source": "command",
      "entity": "Shift",
      "command": "openShift",
      "description": "Abre um novo turno diário registrando o gerente e a data/hora de abertura",
      "stateKey": "ui.shiftManagement.output.openShift",
      "inputStateKeys": [
        "ui.shiftManagement.input.openShift.notes"
      ]
    },
    {
      "id": "binding-closeShift",
      "source": "command",
      "entity": "Shift",
      "command": "closeShift",
      "description": "Fecha o turno atual consolidando pedidos e registrando o valor apurado",
      "stateKey": "ui.shiftManagement.output.closeShift",
      "inputStateKeys": [
        "ui.shiftManagement.input.closeShift.totalApurado",
        "ui.shiftManagement.input.closeShift.notes"
      ]
    }
  ]
};

export const pipeline = [
  {
    "id": "shiftManagement__page31__l2_page",
    "type": "l2_page",
    "outputPath": "_102045_/l2/cafeFlow/web/desktop/page31/shiftManagement.ts",
    "defPath": "_102045_/l2/cafeFlow/web/desktop/page31/shiftManagement.defs.ts",
    "dependsFiles": [
      "_102045_/l2/cafeFlow/web/shared/shiftManagement.defs.ts",
      "_102045_/l2/cafeFlow/web/shared/shiftManagement.ts",
      "_102045_/l2/cafeFlow/web/contracts/shiftManagement.defs.ts",
      "_102045_/l2/cafeFlow/web/contracts/shiftManagement.ts",
    ],
    "dependsOn": [
      "shiftManagement__l2_shared"
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
