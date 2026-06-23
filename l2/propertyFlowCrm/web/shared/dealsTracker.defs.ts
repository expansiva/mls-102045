/// <mls fileReference="_102045_/l2/propertyFlowCrm/web/shared/dealsTracker.defs.ts" enhancement="_blank"/>

export const definition = {
  "bffCommands": [
    {
      "commandName": "listarNegocios",
      "purpose": "Carregar negócios por etapa.",
      "kind": "query",
      "input": [
        {
          "name": "etapa",
          "type": "string",
          "required": false
        },
        {
          "name": "termoPesquisa",
          "type": "string",
          "required": false
        }
      ],
      "output": [
        {
          "name": "dealId",
          "type": "Deal"
        },
        {
          "name": "status",
          "type": "string"
        },
        {
          "name": "leadId",
          "type": "Lead"
        },
        {
          "name": "propertyId",
          "type": "Property"
        },
        {
          "name": "valorProposta",
          "type": "number"
        },
        {
          "name": "updatedAt",
          "type": "date"
        }
      ],
      "readsEntities": [
        "Deal"
      ],
      "writesEntities": [],
      "readsTables": [],
      "writesTables": [],
      "usecaseRefs": [
        "listarNegocios"
      ],
      "layerContract": {
        "controllerLayer": "layer_2_controllers",
        "mustCallLayer": "layer_3_usecases",
        "directTableAccessForbidden": true
      },
      "rulesApplied": [
        "ruleDealStages"
      ]
    },
    {
      "commandName": "obterNegocio",
      "purpose": "Carregar detalhes do negócio selecionado.",
      "kind": "query",
      "input": [
        {
          "name": "dealId",
          "type": "Deal",
          "required": true
        }
      ],
      "output": [
        {
          "name": "dealId",
          "type": "Deal"
        },
        {
          "name": "status",
          "type": "string"
        },
        {
          "name": "leadId",
          "type": "Lead"
        },
        {
          "name": "propertyId",
          "type": "Property"
        },
        {
          "name": "valorProposta",
          "type": "number"
        },
        {
          "name": "descricao",
          "type": "string"
        },
        {
          "name": "updatedAt",
          "type": "date"
        }
      ],
      "readsEntities": [
        "Deal"
      ],
      "writesEntities": [],
      "readsTables": [],
      "writesTables": [],
      "usecaseRefs": [
        "obterNegocio"
      ],
      "layerContract": {
        "controllerLayer": "layer_2_controllers",
        "mustCallLayer": "layer_3_usecases",
        "directTableAccessForbidden": true
      },
      "rulesApplied": [
        "ruleDealStages"
      ]
    },
    {
      "commandName": "criarNegocio",
      "purpose": "Criar nova proposta vinculada.",
      "kind": "command",
      "input": [
        {
          "name": "leadId",
          "type": "Lead",
          "required": true
        },
        {
          "name": "propertyId",
          "type": "Property",
          "required": true
        },
        {
          "name": "valorProposta",
          "type": "number",
          "required": true
        },
        {
          "name": "termosIniciais",
          "type": "string",
          "required": false
        }
      ],
      "output": [
        {
          "name": "dealId",
          "type": "Deal"
        },
        {
          "name": "status",
          "type": "string"
        }
      ],
      "readsEntities": [
        "Lead",
        "Property"
      ],
      "writesEntities": [
        "Deal"
      ],
      "readsTables": [],
      "writesTables": [
        "deal_pipeline_metrics",
        "broker_activity_metrics"
      ],
      "usecaseRefs": [
        "criarNegocio"
      ],
      "layerContract": {
        "controllerLayer": "layer_2_controllers",
        "mustCallLayer": "layer_3_usecases",
        "directTableAccessForbidden": true
      },
      "rulesApplied": [
        "ruleDealStages"
      ]
    },
    {
      "commandName": "avancarEtapaNegocio",
      "purpose": "Atualizar etapa do negócio.",
      "kind": "command",
      "input": [
        {
          "name": "dealId",
          "type": "Deal",
          "required": true
        },
        {
          "name": "toStage",
          "type": "string",
          "required": true
        },
        {
          "name": "termosAtualizados",
          "type": "string",
          "required": false
        }
      ],
      "output": [
        {
          "name": "dealId",
          "type": "Deal"
        },
        {
          "name": "status",
          "type": "string"
        },
        {
          "name": "dealStageChangeId",
          "type": "DealStageChange"
        }
      ],
      "readsEntities": [
        "Deal"
      ],
      "writesEntities": [
        "Deal",
        "DealStageChange"
      ],
      "readsTables": [],
      "writesTables": [
        "deal_stage_change",
        "deal_pipeline_metrics",
        "broker_activity_metrics"
      ],
      "usecaseRefs": [
        "avancarEtapaNegocio"
      ],
      "layerContract": {
        "controllerLayer": "layer_2_controllers",
        "mustCallLayer": "layer_3_usecases",
        "directTableAccessForbidden": true
      },
      "rulesApplied": [
        "ruleDealStages"
      ]
    },
    {
      "commandName": "listarMudancasEtapaNegocio",
      "purpose": "Listar histórico de mudanças nos negócios.",
      "kind": "query",
      "input": [
        {
          "name": "dealId",
          "type": "Deal",
          "required": true
        }
      ],
      "output": [
        {
          "name": "dealStageChangeId",
          "type": "DealStageChange"
        },
        {
          "name": "dealId",
          "type": "Deal"
        },
        {
          "name": "fromStage",
          "type": "string"
        },
        {
          "name": "toStage",
          "type": "string"
        },
        {
          "name": "changedAt",
          "type": "date"
        }
      ],
      "readsEntities": [
        "DealStageChange"
      ],
      "writesEntities": [],
      "readsTables": [
        "deal_stage_change"
      ],
      "writesTables": [],
      "usecaseRefs": [
        "listarMudancasEtapaNegocio"
      ],
      "layerContract": {
        "controllerLayer": "layer_2_controllers",
        "mustCallLayer": "layer_3_usecases",
        "directTableAccessForbidden": true
      },
      "rulesApplied": [
        "ruleDealStages"
      ]
    }
  ],
  "navigationRefs": []
};

export const pipeline = [
  {
    "id": "dealsTracker__l2_shared",
    "type": "l2_shared",
    "outputPath": "_102045_/l2/propertyFlowCrm/web/shared/dealsTracker.ts",
    "defPath": "_102045_/l2/propertyFlowCrm/web/shared/dealsTracker.defs.ts",
    "dependsFiles": [
      "_102045_/l2/propertyFlowCrm/web/contracts/dealsTracker.ts"
    ],
    "dependsOn": [],
    "skills": [
      "/_102020_/l2/agentMaterializeSolution/skills/genPageShared.ts"
    ],
    "rulesPath": "_102045_/l5/propertyFlowCrm/rules.defs.ts",
    "rulesApplied": [
      "ruleDealStages"
    ],
    "agent": "agentMaterializeGen"
  }
] as const;
