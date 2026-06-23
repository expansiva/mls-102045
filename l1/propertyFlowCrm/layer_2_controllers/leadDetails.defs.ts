/// <mls fileReference="_102045_/l1/propertyFlowCrm/layer_2_controllers/leadDetails.defs.ts" enhancement="_blank"/>

export const definition = [
  {
    "commandName": "obterLead",
    "purpose": "Carregar dados completos do lead.",
    "kind": "query",
    "input": [
      {
        "name": "leadId",
        "type": "string",
        "required": true
      }
    ],
    "output": [
      {
        "name": "leadId",
        "type": "string"
      },
      {
        "name": "name",
        "type": "string"
      },
      {
        "name": "email",
        "type": "string"
      },
      {
        "name": "phone",
        "type": "string"
      },
      {
        "name": "preferences",
        "type": "string"
      },
      {
        "name": "stage",
        "type": "string"
      },
      {
        "name": "history",
        "type": "string"
      }
    ],
    "readsEntities": [
      "leadEntity",
      "leadStageChangeEntity"
    ],
    "writesEntities": [],
    "readsTables": [],
    "writesTables": [],
    "usecaseRefs": [
      "obterLead"
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
    "commandName": "atualizarLead",
    "purpose": "Salvar alterações do lead.",
    "kind": "mutation",
    "input": [
      {
        "name": "leadId",
        "type": "string",
        "required": true
      },
      {
        "name": "name",
        "type": "string",
        "required": false
      },
      {
        "name": "email",
        "type": "string",
        "required": false
      },
      {
        "name": "phone",
        "type": "string",
        "required": false
      },
      {
        "name": "preferences",
        "type": "string",
        "required": false
      },
      {
        "name": "stage",
        "type": "string",
        "required": false
      }
    ],
    "output": [
      {
        "name": "leadId",
        "type": "string"
      },
      {
        "name": "stage",
        "type": "string"
      }
    ],
    "readsEntities": [
      "leadEntity"
    ],
    "writesEntities": [
      "leadEntity"
    ],
    "readsTables": [],
    "writesTables": [
      "lead_pipeline_metrics",
      "broker_activity_metrics"
    ],
    "usecaseRefs": [
      "atualizarLead"
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
    "id": "leadDetails__layer_2_controllers",
    "type": "layer_2_controllers",
    "outputPath": "_102045_/l1/propertyFlowCrm/layer_2_controllers/leadDetails.ts",
    "defPath": "_102045_/l1/propertyFlowCrm/layer_2_controllers/leadDetails.defs.ts",
    "dependsFiles": [
      "_102045_/l1/propertyFlowCrm/layer_3_usecases/obterLead.d.ts",
      "_102045_/l1/propertyFlowCrm/layer_3_usecases/atualizarLead.d.ts",
      "_102045_/l2/propertyFlowCrm/web/contracts/leadDetails.ts"
    ],
    "dependsOn": [],
    "skills": [
      "_102021_/l2/skills/layer_2.md"
    ],
    "afterSaveBackEnd": "_102021_/l2/agentMaterializeSolution/registerBackEnd.ts?registerController",
    "rulesPath": "_102045_/l5/propertyFlowCrm/rules.defs.ts",
    "rulesApplied": [
      "ruleLeadPipelineStages"
    ],
    "agent": "agentMaterializeGen"
  }
] as const;
