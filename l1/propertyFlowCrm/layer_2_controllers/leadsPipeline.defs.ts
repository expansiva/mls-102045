/// <mls fileReference="_102045_/l1/propertyFlowCrm/layer_2_controllers/leadsPipeline.defs.ts" enhancement="_blank"/>

export const definition = [
  {
    "commandName": "listarLeads",
    "purpose": "Carregar leads por etapa do pipeline.",
    "kind": "query",
    "input": [
      {
        "name": "stageFilter",
        "type": "string",
        "required": false
      },
      {
        "name": "searchText",
        "type": "string",
        "required": false
      }
    ],
    "output": [
      {
        "name": "leadId",
        "type": "Lead"
      },
      {
        "name": "leadName",
        "type": "string"
      },
      {
        "name": "leadStage",
        "type": "string"
      },
      {
        "name": "leadTemperature",
        "type": "string"
      },
      {
        "name": "leadUpdatedAt",
        "type": "date"
      }
    ],
    "readsEntities": [
      "leadEntity"
    ],
    "writesEntities": [],
    "readsTables": [],
    "writesTables": [],
    "usecaseRefs": [
      "listarLeads"
    ],
    "layerContract": {
      "controllerLayer": "layer_2_controllers",
      "mustCallLayer": "layer_3_usecases",
      "directTableAccessForbidden": true
    },
    "rulesApplied": [
      "ruleLeadPipelineStages"
    ]
  },
  {
    "commandName": "moverEtapaLead",
    "purpose": "Atualizar etapa do lead ao mover card.",
    "kind": "command",
    "input": [
      {
        "name": "leadId",
        "type": "Lead",
        "required": true
      },
      {
        "name": "fromStage",
        "type": "string",
        "required": true
      },
      {
        "name": "toStage",
        "type": "string",
        "required": true
      },
      {
        "name": "note",
        "type": "string",
        "required": false
      }
    ],
    "output": [
      {
        "name": "leadId",
        "type": "Lead"
      },
      {
        "name": "leadStageChangeId",
        "type": "LeadStageChange"
      }
    ],
    "readsEntities": [
      "leadEntity"
    ],
    "writesEntities": [
      "leadEntity",
      "leadStageChangeEntity"
    ],
    "readsTables": [],
    "writesTables": [
      "lead_stage_change",
      "lead_pipeline_metrics",
      "broker_activity_metrics"
    ],
    "usecaseRefs": [
      "moverEtapaLead"
    ],
    "layerContract": {
      "controllerLayer": "layer_2_controllers",
      "mustCallLayer": "layer_3_usecases",
      "directTableAccessForbidden": true
    },
    "rulesApplied": [
      "ruleLeadPipelineStages"
    ]
  },
  {
    "commandName": "criarLead",
    "purpose": "Cadastrar novo lead no pipeline.",
    "kind": "command",
    "input": [
      {
        "name": "leadName",
        "type": "string",
        "required": true
      },
      {
        "name": "leadEmail",
        "type": "string",
        "required": false
      },
      {
        "name": "leadPhone",
        "type": "string",
        "required": false
      },
      {
        "name": "leadSource",
        "type": "string",
        "required": false
      },
      {
        "name": "leadInterest",
        "type": "string",
        "required": false
      },
      {
        "name": "initialStage",
        "type": "string",
        "required": true
      }
    ],
    "output": [
      {
        "name": "leadId",
        "type": "Lead"
      },
      {
        "name": "leadStage",
        "type": "string"
      }
    ],
    "readsEntities": [],
    "writesEntities": [
      "leadEntity"
    ],
    "readsTables": [],
    "writesTables": [
      "lead_pipeline_metrics",
      "broker_activity_metrics"
    ],
    "usecaseRefs": [
      "criarLead"
    ],
    "layerContract": {
      "controllerLayer": "layer_2_controllers",
      "mustCallLayer": "layer_3_usecases",
      "directTableAccessForbidden": true
    },
    "rulesApplied": [
      "ruleLeadPipelineStages"
    ]
  },
  {
    "commandName": "solicitarQualificacaoLead",
    "purpose": "Solicitar qualificação via IA para o lead selecionado.",
    "kind": "command",
    "input": [
      {
        "name": "leadId",
        "type": "Lead",
        "required": true
      },
      {
        "name": "leadContext",
        "type": "string",
        "required": false
      }
    ],
    "output": [
      {
        "name": "leadQualificationRequestId",
        "type": "LeadQualificationRequest"
      },
      {
        "name": "reviewStatus",
        "type": "string"
      }
    ],
    "readsEntities": [
      "leadEntity"
    ],
    "writesEntities": [
      "leadQualificationRequestEntity"
    ],
    "readsTables": [],
    "writesTables": [
      "lead_qualification_request",
      "broker_activity_metrics"
    ],
    "usecaseRefs": [
      "solicitarQualificacaoLead"
    ],
    "layerContract": {
      "controllerLayer": "layer_2_controllers",
      "mustCallLayer": "layer_3_usecases",
      "directTableAccessForbidden": true
    },
    "rulesApplied": [
      "ruleAiHumanReview"
    ]
  },
  {
    "commandName": "listarMudancasEtapaLead",
    "purpose": "Listar histórico de mudanças de etapa do lead.",
    "kind": "query",
    "input": [
      {
        "name": "leadId",
        "type": "Lead",
        "required": true
      }
    ],
    "output": [
      {
        "name": "leadStageChangeId",
        "type": "LeadStageChange"
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
      },
      {
        "name": "changedByBrokerId",
        "type": "Broker"
      },
      {
        "name": "note",
        "type": "string"
      }
    ],
    "readsEntities": [
      "leadStageChangeEntity"
    ],
    "writesEntities": [],
    "readsTables": [
      "lead_stage_change"
    ],
    "writesTables": [],
    "usecaseRefs": [
      "listarMudancasEtapaLead"
    ],
    "layerContract": {
      "controllerLayer": "layer_2_controllers",
      "mustCallLayer": "layer_3_usecases",
      "directTableAccessForbidden": true
    },
    "rulesApplied": [
      "ruleLeadPipelineStages"
    ]
  }
];

export const pipeline = [
  {
    "id": "leadsPipeline__layer_2_controllers",
    "type": "layer_2_controllers",
    "outputPath": "_102045_/l1/propertyFlowCrm/layer_2_controllers/leadsPipeline.ts",
    "defPath": "_102045_/l1/propertyFlowCrm/layer_2_controllers/leadsPipeline.defs.ts",
    "dependsFiles": [
      "_102045_/l1/propertyFlowCrm/layer_3_usecases/listarLeads.d.ts",
      "_102045_/l1/propertyFlowCrm/layer_3_usecases/moverEtapaLead.d.ts",
      "_102045_/l1/propertyFlowCrm/layer_3_usecases/criarLead.d.ts",
      "_102045_/l1/propertyFlowCrm/layer_3_usecases/solicitarQualificacaoLead.d.ts",
      "_102045_/l1/propertyFlowCrm/layer_3_usecases/listarMudancasEtapaLead.d.ts",
      "_102045_/l2/propertyFlowCrm/web/contracts/leadsPipeline.ts"
    ],
    "dependsOn": [],
    "skills": [
      "_102021_/l2/skills/layer_2.md"
    ],
    "afterSaveBackEnd": "_102021_/l2/agentMaterializeSolution/registerBackEnd.ts?registerController",
    "rulesPath": "_102045_/l5/propertyFlowCrm/rules.defs.ts",
    "rulesApplied": [
      "ruleLeadPipelineStages",
      "ruleAiHumanReview"
    ],
    "agent": "agentMaterializeGen"
  }
] as const;
